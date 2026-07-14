import { externalDataInterceptor } from "@smithy/core/config";
import { HttpResponse } from "@smithy/core/protocols";
import { NodeHttpHandler } from "@smithy/node-http-handler";
import type { HttpRequest, NodeHttpHandlerOptions, ParsedIniData } from "@smithy/types";
import { createHash } from "node:crypto";
import { homedir } from "node:os";
import { join } from "node:path";
import { PassThrough } from "node:stream";
import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, test as it } from "vitest";

import { fromSSO } from "./fromSSO";

let iniProfileData: ParsedIniData = null as any;

function setIniProfileData(data: ParsedIniData) {
  iniProfileData = data;
  let buffer = "";
  for (const profile in data) {
    if (profile.startsWith("sso-session.")) {
      buffer += `[sso-session ${profile.split("sso-session.")[1]}]\n`;
    } else {
      buffer += `[profile ${profile}]\n`;
    }
    for (const [k, v] of Object.entries(data[profile])) {
      buffer += `${k} = ${v}\n`;
    }
    buffer += "\n";
  }
  const dir = join(homedir(), ".aws");
  externalDataInterceptor.interceptFile(join(dir, "config"), buffer);
}

class MockNodeHttpHandler {
  static create(instanceOrOptions?: any) {
    if (typeof instanceOrOptions?.handle === "function") {
      return instanceOrOptions;
    }
    return new MockNodeHttpHandler();
  }

  async handle(request: HttpRequest) {
    const body = new PassThrough({});
    const region = (request.hostname.match(/portal\.sso\.(.*?)\./) || [, "unknown"])[1];

    if (request.path?.includes("/federation/credentials")) {
      body.write(
        JSON.stringify({
          roleCredentials: {
            accessKeyId: "SSO_ACCESS_KEY_ID",
            secretAccessKey: "SSO_SECRET_ACCESS_KEY",
            sessionToken: `SSO_SESSION_TOKEN_${region}`,
            expiration: "3000-01-01T00:00:00.000Z",
            accountId: "123456789012",
          },
        })
      );
    } else {
      throw new Error("request not supported.");
    }

    body.end();
    return {
      response: new HttpResponse({
        statusCode: 200,
        body,
        headers: {},
      }),
    };
  }

  updateHttpClientConfig(key: keyof NodeHttpHandlerOptions, value: NodeHttpHandlerOptions[typeof key]): void {}

  httpHandlerConfigs(): NodeHttpHandlerOptions {
    return null as any;
  }
}

describe("fromSSO integration", () => {
  let processSnapshot: typeof process.env;
  const nodeHttpHandlerCreate = NodeHttpHandler.create;

  const ssoToken = {
    accessToken: "mock_sso_token",
    expiresAt: "3000-01-01T00:00:00.000Z",
  };

  beforeAll(() => {
    processSnapshot = JSON.parse(JSON.stringify(process.env));
    NodeHttpHandler.create = MockNodeHttpHandler.create;
  });

  beforeEach(() => {
    delete process.env.AWS_PROFILE;
    delete process.env.AWS_REGION;
    delete process.env.AWS_ACCESS_KEY_ID;
    delete process.env.AWS_SECRET_ACCESS_KEY;

    const dir = join(homedir(), ".aws");
    externalDataInterceptor.interceptFile(join(dir, "credentials"), "");

    const hasher = createHash("sha1");
    const cacheName = hasher.update("SSO_START_URL").digest("hex");
    const tokenPath = join(homedir(), ".aws", "sso", "cache", `${cacheName}.json`);
    externalDataInterceptor.interceptFile(tokenPath, JSON.stringify(ssoToken));
    externalDataInterceptor.interceptToken("SSO_START_URL", ssoToken);
    externalDataInterceptor.interceptToken("ssoNew", ssoToken);
  });

  afterEach(() => {
    Object.assign(process.env, processSnapshot);
  });

  afterAll(() => {
    NodeHttpHandler.create = nodeHttpHandlerCreate;
  });

  describe("SSO with sso-session", () => {
    it("should use clientConfig.requestHandler for token refresh if provided", async () => {
      const seen: string[] = [];
      const spyHandler = {
        metadata: { handlerProtocol: "http/1.1" },
        updateHttpClientConfig() {},
        httpHandlerConfigs() {
          return {};
        },
        handle: async (request: HttpRequest) => {
          seen.push(`${request.hostname}${request.path || ""}`);
          const body = new PassThrough({});

          if (request.path?.includes("/token")) {
            body.write(
              JSON.stringify({
                accessToken: "refreshed_token",
                expiresIn: 3600,
                refreshToken: "new_refresh_token",
              })
            );
          } else if (request.path?.includes("/federation/credentials")) {
            body.write(
              JSON.stringify({
                roleCredentials: {
                  accessKeyId: "SSO_ACCESS_KEY_ID",
                  secretAccessKey: "SSO_SECRET_ACCESS_KEY",
                  sessionToken: "SSO_SESSION_TOKEN_us-east-1",
                  expiration: "3000-01-01T00:00:00.000Z",
                  accountId: "123456789012",
                },
              })
            );
          }

          body.end();
          return {
            response: new HttpResponse({
              statusCode: 200,
              body,
              headers: {},
            }),
          };
        },
      };

      // Set up an expired token
      const expiredToken = {
        accessToken: "expired_token",
        expiresAt: new Date(Date.now() - 60_000).toISOString(),
        clientId: "mock_client_id",
        clientSecret: "mock_client_secret",
        refreshToken: "mock_refresh_token",
      };
      externalDataInterceptor.interceptToken("ssoNew", expiredToken);

      setIniProfileData({
        "sso-session.ssoNew": {
          sso_region: "us-east-1",
          sso_start_url: "SSO_START_URL",
          sso_registration_scopes: "sso:account:access",
        },
        default: {
          sso_session: "ssoNew",
          sso_account_id: "123456789012",
          sso_role_name: "my-role",
          sso_region: "us-east-1",
        },
      });

      const credentials = await fromSSO({
        profile: "default",
        clientConfig: {
          requestHandler: spyHandler,
        },
      })();

      // The spy handler should have been invoked for both the OIDC CreateToken and GetRoleCredentials calls
      expect(seen).toEqual(
        expect.arrayContaining([
          expect.stringContaining("oidc.us-east-1.amazonaws.com/token"),
          expect.stringContaining("portal.sso.us-east-1.amazonaws.com/federation/credentials"),
        ])
      );
    });
  });
});
