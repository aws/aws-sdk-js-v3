import { NodeHttp2Handler, NodeHttpHandler, streamCollector } from "@smithy/node-http-handler";
import { HttpResponse } from "@smithy/protocol-http";
import { Readable } from "stream";
import { afterAll, beforeAll, beforeEach, describe, expect, test as it, vi } from "vitest";

import type { AssumeRoleCommandInput } from "../src/commands/AssumeRoleCommand";
import { AssumeRoleWithWebIdentityCommandInput } from "../src/commands/AssumeRoleWithWebIdentityCommand";
import { getDefaultRoleAssumer, getDefaultRoleAssumerWithWebIdentity } from "../src/defaultRoleAssumers";

const mockHandle = vi.fn().mockResolvedValue({
  response: new HttpResponse({
    statusCode: 200,
    body: Readable.from([""]),
  }),
});
vi.mock("@smithy/node-http-handler", () => {
  class MockNodeHttpHandler {
    static create(instanceOrOptions?: any) {
      if (typeof instanceOrOptions?.handle === "function") {
        return instanceOrOptions;
      }
      return new MockNodeHttpHandler();
    }
    destroy() {}
    handle = mockHandle;
  }
  class MockNodeHttp2Handler {
    public metadata = {
      handlerProtocol: "h2",
    };
    static create(instanceOrOptions?: any) {
      if (typeof instanceOrOptions?.handle === "function") {
        return instanceOrOptions;
      }
      return new MockNodeHttp2Handler();
    }
    destroy() {}
    handle = mockHandle;
  }
  return {
    NodeHttpHandler: MockNodeHttpHandler,
    NodeHttp2Handler: MockNodeHttp2Handler,
    streamCollector: vi.fn(),
  };
});

const STSCtor = vi.fn();

vi.mock("../src/STSClient", async () => {
  const actual: any = await vi.importActual("../src/STSClient");

  const pkg = {
    ...actual,
    STSClient: class STSClient extends actual.STSClient {
      constructor(...args: any[]) {
        super(...args);
        STSCtor(...args);
      }
    },
  };
  return pkg;
});

describe("getDefaultRoleAssumer", () => {
  const assumeRoleResponse = `<AssumeRoleResponse xmlns="https://sts.amazonaws.com/doc/2011-06-15/">
<AssumeRoleResult>
  <AssumedRoleUser>
    <AssumedRoleId>AROAZOX2IL27GNRBJHWC2:session</AssumedRoleId>
    <Arn>arn:aws:sts::123:assumed-role/assume-role-test/session</Arn>
  </AssumedRoleUser>
  <Credentials>
    <AccessKeyId>key</AccessKeyId>
    <SecretAccessKey>secrete</SecretAccessKey>
    <SessionToken>session-token</SessionToken>
    <Expiration>2021-05-05T23:22:08Z</Expiration>
  </Credentials>
</AssumeRoleResult>
<ResponseMetadata>
  <RequestId>12345678id</RequestId>
</ResponseMetadata>
</AssumeRoleResponse>`;

  beforeAll(() => {
    vi.mocked(streamCollector).mockImplementation(async () => Buffer.from(assumeRoleResponse));
  });

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should use supplied source credentials", async () => {
    const roleAssumer = getDefaultRoleAssumer();
    const params: AssumeRoleCommandInput = {
      RoleArn: "arn:aws:foo",
      RoleSessionName: "session",
    };
    const sourceCred1 = { accessKeyId: "key1", secretAccessKey: "secrete1" };
    await roleAssumer(sourceCred1, params);
    expect(mockHandle).toBeCalledTimes(1);
    // Validate request is signed by sourceCred1
    expect(mockHandle.mock.calls[0][0].headers?.authorization).toEqual(
      expect.stringContaining("AWS4-HMAC-SHA256 Credential=key1/")
    );
    const sourceCred2 = { accessKeyId: "key2", secretAccessKey: "secrete1" };
    await roleAssumer(sourceCred2, params);
    // Validate request is signed by sourceCred2
    expect(mockHandle).toBeCalledTimes(2);
    expect(mockHandle.mock.calls[1][0].headers?.authorization).toEqual(
      expect.stringContaining("AWS4-HMAC-SHA256 Credential=key2/")
    );
  });

  it("should return accountId in the credentials", async () => {
    const roleAssumer = getDefaultRoleAssumer();
    const params: AssumeRoleCommandInput = {
      RoleArn: "arn:aws:foo",
      RoleSessionName: "session",
    };
    const sourceCred = { accessKeyId: "key", secretAccessKey: "secret" };
    const assumedRole = await roleAssumer(sourceCred, params);
    expect(assumedRole.accountId).toEqual("123");
  });

  it("should use the STS client config", async () => {
    const logger = {
      trace() {},
      debug() {},
      info() {},
      warn() {},
      error() {},
    };
    const region = "some-region";
    const handler = new NodeHttpHandler();
    const roleAssumer = getDefaultRoleAssumer({
      region,
      logger,
      requestHandler: handler,
      parentClientConfig: {
        region: "some-other-region",
        logger: null as any,
        requestHandler: null,
      },
    });
    const params: AssumeRoleCommandInput = {
      RoleArn: "arn:aws:foo",
      RoleSessionName: "session",
    };
    const sourceCred = { accessKeyId: "key", secretAccessKey: "secret" };
    await roleAssumer(sourceCred, params);
    expect(vi.mocked(STSCtor)).toHaveBeenCalledTimes(1);
    expect(vi.mocked(STSCtor).mock.calls[0][0]).toMatchObject({
      logger,
      requestHandler: handler,
      region,
    });
  });

  it("should use the parent client config", async () => {
    const logger = {
      trace() {},
      debug() {},
      info() {},
      warn() {},
      error() {},
    };
    const region = "some-region";
    const handler = new NodeHttpHandler();
    const roleAssumer = getDefaultRoleAssumer({
      parentClientConfig: {
        region,
        logger,
        requestHandler: handler,
      },
    });
    const params: AssumeRoleCommandInput = {
      RoleArn: "arn:aws:foo",
      RoleSessionName: "session",
    };
    const sourceCred = { accessKeyId: "key", secretAccessKey: "secret" };
    await roleAssumer(sourceCred, params);
    expect(vi.mocked(STSCtor)).toHaveBeenCalledTimes(1);
    expect(vi.mocked(STSCtor).mock.calls[0][0]).toMatchObject({
      logger,
      requestHandler: handler,
      region,
    });
  });

  it("should not pass through an Http2 requestHandler", async () => {
    const logger = {
      trace() {},
      debug() {},
      info() {},
      warn() {},
      error() {},
    };
    const region = "some-region";
    const handler = new NodeHttp2Handler();
    const roleAssumer = getDefaultRoleAssumer({
      parentClientConfig: {
        region,
        logger,
        requestHandler: handler,
      },
    });
    const params: AssumeRoleCommandInput = {
      RoleArn: "arn:aws:foo",
      RoleSessionName: "session",
    };
    const sourceCred = { accessKeyId: "key", secretAccessKey: "secret" };
    await roleAssumer(sourceCred, params);
    expect(vi.mocked(STSCtor)).toHaveBeenCalledTimes(1);
    expect(vi.mocked(STSCtor).mock.calls[0][0]).toMatchObject({
      logger,
      requestHandler: undefined,
      region,
    });
  });

  it("should use the STS client middleware", async () => {
    const customMiddlewareFunction = vi.fn();
    const roleAssumer = getDefaultRoleAssumer({}, [
      {
        applyToStack: (stack) => {
          stack.add((next) => (args) => {
            customMiddlewareFunction(args);
            return next(args);
          });
        },
      },
    ]);
    const params: AssumeRoleCommandInput = {
      RoleArn: "arn:aws:foo",
      RoleSessionName: "session",
    };
    const sourceCred = { accessKeyId: "key", secretAccessKey: "secret" };
    await Promise.all([roleAssumer(sourceCred, params), roleAssumer(sourceCred, params)]);
    expect(customMiddlewareFunction).toHaveBeenCalledTimes(2); // make sure the middleware is not added to stack multiple times.
    expect(customMiddlewareFunction).toHaveBeenNthCalledWith(1, expect.objectContaining({ input: params }));
    expect(customMiddlewareFunction).toHaveBeenNthCalledWith(2, expect.objectContaining({ input: params }));
  });

  describe("resolveRegion", () => {
    let envRegion: string | undefined;
    let envDefaultRegion: string | undefined;

    beforeAll(async () => {
      envRegion = process.env.AWS_REGION;
      envDefaultRegion = process.env.AWS_DEFAULT_REGION;
      delete process.env.AWS_REGION;
      delete process.env.AWS_DEFAULT_REGION;
    });

    afterAll(async () => {
      process.env.AWS_REGION = envRegion;
      process.env.AWS_DEFAULT_REGION = envDefaultRegion;
    });

    it("should not call stsRegionDefaultResolver unless no region was configured on the client and provider", async () => {
      vi.spyOn(console, "warn");
      const sourceCred = { accessKeyId: "key", secretAccessKey: "secret" };
      const params: AssumeRoleCommandInput = {
        RoleArn: "arn:aws:foo",
        RoleSessionName: "session",
      };
      {
        const roleAssumer = getDefaultRoleAssumer({
          region: async () => "us-west-2",
        });
        await roleAssumer(sourceCred, params);
        expect(console.warn).not.toHaveBeenCalled();
      }
      {
        const roleAssumer = getDefaultRoleAssumer({
          parentClientConfig: {
            region: async () => "us-west-2",
          },
        });
        await roleAssumer(sourceCred, params);
        expect(console.warn).not.toHaveBeenCalled();
      }
      {
        const roleAssumer = getDefaultRoleAssumer({});
        await roleAssumer(sourceCred, params);
        expect(console.warn).toHaveBeenCalledTimes(1);
      }
    });
  });
});

describe("getDefaultRoleAssumerWithWebIdentity", () => {
  const assumeRoleResponse = `<Response xmlns="https://sts.amazonaws.com/doc/2011-06-15/">
  <AssumeRoleWithWebIdentityResult>
  <AssumedRoleUser>
      <AssumedRoleId>AROAZOX2IL27GNRBJHWC2:session</AssumedRoleId>
      <Arn>arn:aws:sts::123456789012:assumed-role/assume-role-test/session</Arn>
    </AssumedRoleUser>
    <Credentials>
      <AccessKeyId>key</AccessKeyId>
      <SecretAccessKey>secrete</SecretAccessKey>
      <SessionToken>session-token</SessionToken>
      <Expiration>2021-05-05T23:22:08Z</Expiration>
    </Credentials>
  </AssumeRoleWithWebIdentityResult>
  </Response>`;

  beforeAll(() => {
    vi.mocked(streamCollector).mockImplementation(async () => Buffer.from(assumeRoleResponse));
  });

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should use the STS client config", async () => {
    const logger = {
      trace() {},
      debug() {},
      info() {},
      warn() {},
      error() {},
    };
    const region = "some-region";
    const handler = new NodeHttpHandler();
    const roleAssumerWithWebIdentity = getDefaultRoleAssumerWithWebIdentity({
      region,
      logger,
      requestHandler: handler,
    });
    const params: AssumeRoleWithWebIdentityCommandInput = {
      RoleArn: "arn:aws:foo",
      RoleSessionName: "session",
      WebIdentityToken: "token",
    };
    await roleAssumerWithWebIdentity(params);
    expect(vi.mocked(STSCtor)).toHaveBeenCalledTimes(1);
    expect(vi.mocked(STSCtor).mock.calls[0][0]).toMatchObject({
      logger,
      requestHandler: handler,
      region,
    });
  });

  it("should return accountId in the credentials", async () => {
    const roleAssumerWithWebIdentity = getDefaultRoleAssumerWithWebIdentity();
    const params: AssumeRoleWithWebIdentityCommandInput = {
      RoleArn: "arn:aws:foo",
      RoleSessionName: "session",
      WebIdentityToken: "token",
    };
    const assumedRole = await roleAssumerWithWebIdentity(params);
    expect(assumedRole.accountId).toEqual("123456789012");
  });

  it("should use the STS client middleware", async () => {
    const customMiddlewareFunction = vi.fn();
    const roleAssumerWithWebIdentity = getDefaultRoleAssumerWithWebIdentity({}, [
      {
        applyToStack: (stack) => {
          stack.add((next) => (args) => {
            customMiddlewareFunction(args);
            return next(args);
          });
        },
      },
    ]);
    const params: AssumeRoleWithWebIdentityCommandInput = {
      RoleArn: "arn:aws:foo",
      RoleSessionName: "session",
      WebIdentityToken: "token",
    };
    await Promise.all([roleAssumerWithWebIdentity(params), roleAssumerWithWebIdentity(params)]);
    expect(customMiddlewareFunction).toHaveBeenCalledTimes(2); // make sure the middleware is not added to stack multiple times.
    expect(customMiddlewareFunction).toHaveBeenNthCalledWith(1, expect.objectContaining({ input: params }));
    expect(customMiddlewareFunction).toHaveBeenNthCalledWith(2, expect.objectContaining({ input: params }));
  });
});
