import { STS } from "@aws-sdk/client-sts";
import { externalDataInterceptor } from "@smithy/core/config";
import type { HttpRequest } from "@smithy/core/protocols";
import { HttpResponse } from "@smithy/core/protocols";
import type { NodeHttpHandlerOptions, ParsedIniData } from "@smithy/types";
import { createHash, generateKeyPairSync } from "node:crypto";
import { promises as fsPromises } from "node:fs";
import { homedir, tmpdir } from "node:os";
import { join } from "node:path";
import { PassThrough } from "node:stream";
import { afterEach, beforeEach, describe, expect, test as it } from "vitest";

import { fromIni } from "./fromIni";

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

/** Controls the mock Sign-In service: counts token refresh requests and sets the response. */
const signIn = {
  requests: 0,
  respondWith: "success" as "success" | "TOKEN_EXPIRED",
};

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

    if (request.path?.includes("/v1/token") && request.headers["DPoP"]) {
      signIn.requests++;
      if (signIn.respondWith === "TOKEN_EXPIRED") {
        body.end(JSON.stringify({ error: "TOKEN_EXPIRED", message: "The refresh token has expired." }));
        return {
          response: new HttpResponse({
            statusCode: 403,
            body,
            headers: { "x-amzn-errortype": "AccessDeniedException" },
          }),
        };
      }
      body.write(
        JSON.stringify({
          accessToken: {
            accessKeyId: "LOGIN_REFRESHED_ACCESS_KEY_ID",
            secretAccessKey: "LOGIN_REFRESHED_SECRET_ACCESS_KEY",
            sessionToken: "LOGIN_REFRESHED_SESSION_TOKEN",
          },
          refreshToken: "REFRESHED_TOKEN",
          expiresIn: 900,
        })
      );
    } else if (request.headers.Authorization === "container-authorization") {
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
        output: "json",
        region: "us-stsar-1",
        role_arn: "ROLE_ARN",
        role_session_name: "ROLE_SESSION_NAME",
        external_id: "EXTERNAL_ID",
        source_profile: "assume",
      },
      assume: {
        region: "us-stsar-1",
        aws_access_key_id: "ASSUME_STATIC_ACCESS_KEY",
        aws_secret_access_key: "ASSUME_STATIC_SECRET_KEY",
      },
    };
    setIniProfileData(iniProfileData);
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
    setIniProfileData(iniProfileData);

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

  it("should use 4th priority for the config file region", async () => {
    const credentialsData = await fromIni({
      clientConfig: {
        requestHandler: new MockNodeHttpHandler(),
      },
    })();

    const sts = new STS({
      requestHandler: new MockNodeHttpHandler(),
      credentials: credentialsData,
    });

    await sts.getCallerIdentity({});
    const credentials = await sts.config.credentials();
    expect(credentials).toMatchObject({
      accessKeyId: "STS_AR_ACCESS_KEY_ID",
      secretAccessKey: "STS_AR_SECRET_ACCESS_KEY",
      sessionToken: "STS_AR_SESSION_TOKEN_us-stsar-1",
    });
  });

  it("should use 5th priority for the AWS_REGION value", async () => {
    process.env.AWS_REGION = "ap-northeast-1";
    iniProfileData = {
      default: {
        role_arn: "ROLE_ARN",
        role_session_name: "ROLE_SESSION_NAME",
        external_id: "EXTERNAL_ID",
        source_profile: "assume",
      },
      assume: {
        aws_access_key_id: "ASSUME_STATIC_ACCESS_KEY",
        aws_secret_access_key: "ASSUME_STATIC_SECRET_KEY",
      },
    };
    setIniProfileData(iniProfileData);

    const credentialsData = await fromIni({
      clientConfig: {
        requestHandler: new MockNodeHttpHandler(),
      },
    })();

    const sts = new STS({
      requestHandler: new MockNodeHttpHandler(),
      credentials: credentialsData,
    });

    await sts.getCallerIdentity({});
    const credentials = await sts.config.credentials();
    expect(credentials).toMatchObject({
      accessKeyId: "STS_AR_ACCESS_KEY_ID",
      secretAccessKey: "STS_AR_SECRET_ACCESS_KEY",
      sessionToken: "STS_AR_SESSION_TOKEN_ap-northeast-1",
    });
  });

  it("should use 6th priority for the default partition's default region", async () => {
    delete process.env.AWS_REGION;
    iniProfileData = {
      default: {
        role_arn: "ROLE_ARN",
        role_session_name: "ROLE_SESSION_NAME",
        external_id: "EXTERNAL_ID",
        source_profile: "assume",
      },
      assume: {
        aws_access_key_id: "ASSUME_STATIC_ACCESS_KEY",
        aws_secret_access_key: "ASSUME_STATIC_SECRET_KEY",
      },
    };
    setIniProfileData(iniProfileData);

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

describe("fromIni login profile after a service rejects its credentials", () => {
  const loginSession = "arn:aws:sts::123456789012:assumed-role/Admin/admin";
  // Environment variables that would make fromIni read real AWS files instead of the intercepted ones.
  const isolatedEnv = ["AWS_CONFIG_FILE", "AWS_SHARED_CREDENTIALS_FILE", "AWS_PROFILE"] as const;
  let savedEnv: Partial<Record<(typeof isolatedEnv)[number], string>>;
  let cacheDirectory: string;

  beforeEach(async () => {
    savedEnv = {};
    for (const name of isolatedEnv) {
      savedEnv[name] = process.env[name];
      delete process.env[name];
    }
    externalDataInterceptor.interceptFile(join(homedir(), ".aws", "credentials"), "");
    signIn.requests = 0;
    signIn.respondWith = "success";
    cacheDirectory = await fsPromises.mkdtemp(join(tmpdir(), "aws-sdk-fromIni-login-"));
    process.env.AWS_LOGIN_CACHE_DIRECTORY = cacheDirectory;

    const { privateKey } = generateKeyPairSync("ec", { namedCurve: "prime256v1" });
    const token = {
      accessToken: {
        accessKeyId: "LOGIN_REJECTED_ACCESS_KEY_ID",
        secretAccessKey: "LOGIN_REJECTED_SECRET_ACCESS_KEY",
        sessionToken: "LOGIN_REJECTED_SESSION_TOKEN",
        accountId: "123456789012",
        // Far from its own refresh window, so only the invalidation can trigger a refresh.
        expiresAt: "3000-01-01T00:00:00.000Z",
      },
      clientId: "test-client-id",
      refreshToken: "test-refresh-token",
      dpopKey: privateKey.export({ type: "sec1", format: "pem" }),
    };
    const tokenFile = `${createHash("sha256").update(Buffer.from(loginSession, "utf8")).digest("hex")}.json`;
    await fsPromises.writeFile(join(cacheDirectory, tokenFile), JSON.stringify(token), "utf8");

    setIniProfileData({ default: { region: "us-west-2", login_session: loginSession } });
  });

  afterEach(async () => {
    for (const name of isolatedEnv) {
      if (savedEnv[name] === undefined) {
        delete process.env[name];
      } else {
        process.env[name] = savedEnv[name];
      }
    }
    delete process.env.AWS_LOGIN_CACHE_DIRECTORY;
    await fsPromises.rm(cacheDirectory, { recursive: true, force: true });
  });

  // fromIni's return type doesn't declare invalidate, but a Login profile's provider has it.
  const createProvider = () =>
    fromIni({ clientConfig: { requestHandler: new MockNodeHttpHandler() } }) as ReturnType<typeof fromIni> & {
      invalidate(identity: { accessKeyId: string }): void;
    };

  it("uses the cached token without calling Sign-In before any invalidation", async () => {
    const credentials = await createProvider()();

    expect(credentials.accessKeyId).toBe("LOGIN_REJECTED_ACCESS_KEY_ID");
    expect(signIn.requests).toBe(0);
  });

  it("gets new credentials from Sign-In instead of returning the rejected ones", async () => {
    const provider = createProvider();
    const rejected = await provider();

    provider.invalidate({ accessKeyId: rejected.accessKeyId });
    const refreshed = await provider();

    expect(signIn.requests).toBe(1);
    expect(refreshed.accessKeyId).toBe("LOGIN_REFRESHED_ACCESS_KEY_ID");
  });

  it("raises the Sign-In error instead of returning the rejected credentials", async () => {
    const provider = createProvider();
    const rejected = await provider();
    signIn.respondWith = "TOKEN_EXPIRED";

    provider.invalidate({ accessKeyId: rejected.accessKeyId });

    await expect(provider()).rejects.toThrow("Your session has expired. Please reauthenticate.");
    expect(signIn.requests).toBe(1);
  });
});
