import { STS } from "@aws-sdk/client-sts";
import { HttpRequest, HttpResponse } from "@smithy/protocol-http";
import { SourceProfileInit } from "@smithy/shared-ini-file-loader";
import type { NodeHttpHandlerOptions, ParsedIniData } from "@smithy/types";
import { PassThrough } from "node:stream";
import { afterEach, beforeEach, describe, expect, test as it, vi } from "vitest";

import { fromIni } from "./fromIni";

let iniProfileData: ParsedIniData = null as any;
vi.mock("@smithy/shared-ini-file-loader", async () => {
  const actual: any = await vi.importActual("@smithy/shared-ini-file-loader");
  const pkg = {
    ...actual,
    async loadSsoSessionData() {
      return Object.entries(iniProfileData)
        .filter(([key]) => key.startsWith("sso-session."))
        .reduce(
          (acc, [key, value]) => ({
            ...acc,
            [key.split("sso-session.")[1]]: value,
          }),
          {}
        );
    },
    async parseKnownFiles(init: SourceProfileInit): Promise<ParsedIniData> {
      return iniProfileData;
    },
    async getSSOTokenFromFile() {
      return {
        accessToken: "mock_sso_token",
        expiresAt: "3000-01-01T00:00:00.000Z",
      };
    },
  };
  return {
    ...pkg,
    default: pkg,
  };
});

class MockNodeHttpHandler {
  static create(instanceOrOptions?: any) {
    if (typeof instanceOrOptions?.handle === "function") {
      return instanceOrOptions;
    }
    return new MockNodeHttpHandler();
  }
  async handle(request: HttpRequest) {
    const body = new PassThrough({});

    const region = (request.hostname.match(/sts\.(.*?)\./) || [, "unknown"])[1];

    if (request.headers.Authorization === "container-authorization") {
      body.write(
        JSON.stringify({
          AccessKeyId: "CONTAINER_ACCESS_KEY",
          SecretAccessKey: "CONTAINER_SECRET_ACCESS_KEY",
          Token: "CONTAINER_TOKEN",
          Expiration: "3000-01-01T00:00:00.000Z",
        })
      );
    } else if (request.path?.includes("/federation/credentials")) {
      body.write(
        JSON.stringify({
          roleCredentials: {
            accessKeyId: "SSO_ACCESS_KEY_ID",
            secretAccessKey: "SSO_SECRET_ACCESS_KEY",
            sessionToken: "SSO_SESSION_TOKEN",
            expiration: "3000-01-01T00:00:00.000Z",
          },
        })
      );
    } else if (request.body?.includes("Action=AssumeRoleWithWebIdentity")) {
      body.write(`
<AssumeRoleWithWebIdentityResponse xmlns="https://sts.amazonaws.com/doc/2011-06-15/">
<AssumeRoleWithWebIdentityResult>
<Credentials>
  <AccessKeyId>STS_ARWI_ACCESS_KEY_ID</AccessKeyId>
  <SecretAccessKey>STS_ARWI_SECRET_ACCESS_KEY</SecretAccessKey>
  <SessionToken>STS_ARWI_SESSION_TOKEN_${region}</SessionToken>
  <Expiration>3000-01-01T00:00:00.000Z</Expiration>
</Credentials>
</AssumeRoleWithWebIdentityResult>
<ResponseMetadata>
<RequestId>01234567-89ab-cdef-0123-456789abcdef</RequestId>
</ResponseMetadata>
</AssumeRoleWithWebIdentityResponse>`);
    } else if (request.body?.includes("Action=AssumeRole")) {
      body.write(`
<AssumeRoleResponse xmlns="https://sts.amazonaws.com/doc/2011-06-15/">
<AssumeRoleResult>
<Credentials>
  <AccessKeyId>STS_AR_ACCESS_KEY_ID</AccessKeyId>
  <SecretAccessKey>STS_AR_SECRET_ACCESS_KEY</SecretAccessKey>
  <SessionToken>STS_AR_SESSION_TOKEN_${region}</SessionToken>
  <Expiration>3000-01-01T00:00:00.000Z</Expiration>
</Credentials>
</AssumeRoleResult>
<ResponseMetadata>
<RequestId>01234567-89ab-cdef-0123-456789abcdef</RequestId>
</ResponseMetadata>
</AssumeRoleResponse>`);
    } else if (request.body.includes("Action=GetCallerIdentity")) {
      body.write(`
<GetCallerIdentityResponse xmlns="https://sts.amazonaws.com/doc/2011-06-15/">
<GetCallerIdentityResult>
<Arn>arn:aws:iam::123456789012:user/Alice</Arn>
<UserId>AIDACKCEVSQ6C2EXAMPLE</UserId>
<Account>123456789012</Account>
</GetCallerIdentityResult>
<ResponseMetadata>
<RequestId>01234567-89ab-cdef-0123-456789abcdef</RequestId>
</ResponseMetadata>
</GetCallerIdentityResponse>`);
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

describe("fromIni region search order", () => {
  beforeEach(() => {
    process.env.AWS_PROFILE = "default";
    iniProfileData = {
      default: {
        region: "us-west-2",
        output: "json",
      },
    };
    iniProfileData.assume = {
      region: "us-stsar-1",
      aws_access_key_id: "ASSUME_STATIC_ACCESS_KEY",
      aws_secret_access_key: "ASSUME_STATIC_SECRET_KEY",
    };
    Object.assign(iniProfileData.default, {
      region: "us-stsar-1",
      role_arn: "ROLE_ARN",
      role_session_name: "ROLE_SESSION_NAME",
      external_id: "EXTERNAL_ID",
      source_profile: "assume",
    });
  });

  afterEach(() => {
    delete process.env.AWS_PROFILE;
  });

  it("should use 1st priority for the clientConfig given to the provider factory", async () => {
    const sts = new STS({
      requestHandler: new MockNodeHttpHandler(),
      region: "ap-northeast-2",
      credentials: fromIni({
        clientConfig: {
          requestHandler: new MockNodeHttpHandler(),
          region: "ap-northeast-1",
        },
      }),
    });

    await sts.getCallerIdentity({});
    const credentials = await sts.config.credentials();
    expect(credentials).toMatchObject({
      accessKeyId: "STS_AR_ACCESS_KEY_ID",
      secretAccessKey: "STS_AR_SECRET_ACCESS_KEY",
      sessionToken: "STS_AR_SESSION_TOKEN_ap-northeast-1",
    });
  });

  it("should use 2nd priority for the profile region", async () => {
    const sts = new STS({
      requestHandler: new MockNodeHttpHandler(),
      region: "ap-northeast-2",
      credentials: fromIni({
        clientConfig: {
          requestHandler: new MockNodeHttpHandler(),
        },
      }),
    });

    await sts.getCallerIdentity({});
    const credentials = await sts.config.credentials();
    expect(credentials).toMatchObject({
      accessKeyId: "STS_AR_ACCESS_KEY_ID",
      secretAccessKey: "STS_AR_SECRET_ACCESS_KEY",
      sessionToken: "STS_AR_SESSION_TOKEN_us-stsar-1",
    });
  });

  it("should use 3rd priority for the caller client", async () => {
    delete iniProfileData.default.region;

    const sts = new STS({
      requestHandler: new MockNodeHttpHandler(),
      region: "ap-northeast-2",
      credentials: fromIni({
        clientConfig: {
          requestHandler: new MockNodeHttpHandler(),
        },
      }),
    });

    await sts.getCallerIdentity({});
    const credentials = await sts.config.credentials();
    expect(credentials).toMatchObject({
      accessKeyId: "STS_AR_ACCESS_KEY_ID",
      secretAccessKey: "STS_AR_SECRET_ACCESS_KEY",
      sessionToken: "STS_AR_SESSION_TOKEN_ap-northeast-2",
    });
  });

  it("should use 4th priority for the default partition's default region", async () => {
    delete iniProfileData.default.region;

    const credentialsData = await fromIni({
      clientConfig: {
        requestHandler: new MockNodeHttpHandler(),
      },
    })();

    const sts = new STS({
      requestHandler: new MockNodeHttpHandler(),
      region: "ap-northeast-2",
      credentials: credentialsData,
    });

    await sts.getCallerIdentity({});
    const credentials = await sts.config.credentials();
    expect(credentials).toMatchObject({
      accessKeyId: "STS_AR_ACCESS_KEY_ID",
      secretAccessKey: "STS_AR_SECRET_ACCESS_KEY",
      sessionToken: "STS_AR_SESSION_TOKEN_us-east-1",
    });
  });
});
