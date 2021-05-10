import { HttpResponse } from "@aws-sdk/protocol-http";
import { Readable } from "stream";
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
  streamCollector: async () => Buffer.from(assumeRoleResponse),
}));

import { getDefaultRoleAssumer } from "./defaultRoleAssumers";
import type { AssumeRoleCommandInput } from "./commands/AssumeRoleCommand";

describe("getDefaultRoleAssumer", () => {
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
});
