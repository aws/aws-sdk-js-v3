// Please do not touch this file. It's generated from template in:
// https://github.com/aws/aws-sdk-js-v3/blob/main/codegen/smithy-aws-typescript-codegen/src/main/resources/software/amazon/smithy/aws/typescript/codegen/sts-client-defaultRoleAssumers.spec.ts
import { HttpResponse } from "@aws-sdk/protocol-http";
import { Readable } from "stream";

const mockHandle = jest.fn().mockResolvedValue({
  response: new HttpResponse({
    statusCode: 200,
    body: Readable.from([""]),
  }),
});
jest.mock("@aws-sdk/node-http-handler", () => ({
  NodeHttpHandler: jest.fn().mockImplementation(() => ({
    destroy: () => {},
    handle: mockHandle,
  })),
  streamCollector: jest.fn(),
}));

import { getDefaultRoleAssumer, getDefaultRoleAssumerWithWebIdentity } from "./defaultRoleAssumers";
import type { AssumeRoleCommandInput } from "./commands/AssumeRoleCommand";
import { NodeHttpHandler, streamCollector } from "@aws-sdk/node-http-handler";
import { AssumeRoleWithWebIdentityCommandInput } from "./commands/AssumeRoleWithWebIdentityCommand";
const mockConstructorInput = jest.fn();
jest.mock("./STSClient", () => ({
  STSClient: function (params: any) {
    mockConstructorInput(params);
    //@ts-ignore
    return new (jest.requireActual("./STSClient").STSClient)(params);
  },
}));

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
    (streamCollector as jest.Mock).mockImplementation(async () => Buffer.from(assumeRoleResponse));
  });

  beforeEach(() => {
    jest.clearAllMocks();
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

  it("should use the STS client config", async () => {
    const logger = console;
    const region = "some-region";
    const handler = new NodeHttpHandler();
    const roleAssumer = getDefaultRoleAssumer({
      region,
      logger,
      requestHandler: handler,
    });
    const params: AssumeRoleCommandInput = {
      RoleArn: "arn:aws:foo",
      RoleSessionName: "session",
    };
    const sourceCred = { accessKeyId: "key", secretAccessKey: "secrete" };
    await roleAssumer(sourceCred, params);
    expect(mockConstructorInput).toHaveBeenCalledTimes(1);
    expect(mockConstructorInput.mock.calls[0][0]).toMatchObject({
      logger,
      requestHandler: handler,
      region,
    });
  });
});

describe("getDefaultRoleAssumerWithWebIdentity", () => {
  const assumeRoleResponse = `<Response xmlns="https://sts.amazonaws.com/doc/2011-06-15/">
  <AssumeRoleWithWebIdentityResult>
    <Credentials>
      <AccessKeyId>key</AccessKeyId>
      <SecretAccessKey>secrete</SecretAccessKey>
      <SessionToken>session-token</SessionToken>
      <Expiration>2021-05-05T23:22:08Z</Expiration>
    </Credentials>
  </AssumeRoleWithWebIdentityResult>
  </Response>`;

  beforeAll(() => {
    (streamCollector as jest.Mock).mockImplementation(async () => Buffer.from(assumeRoleResponse));
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should use the STS client config", async () => {
    const logger = console;
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
    expect(mockConstructorInput).toHaveBeenCalledTimes(1);
    expect(mockConstructorInput.mock.calls[0][0]).toMatchObject({
      logger,
      requestHandler: handler,
      region,
    });
  });
});
