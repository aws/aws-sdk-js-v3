import { GetCredentialsForIdentityCommand } from "@aws-sdk/client-cognito-identity";
import { CredentialsProviderError } from "@smithy/property-provider";

import { fromCognitoIdentity } from "./fromCognitoIdentity";

describe("fromCognitoIdentity", () => {
  const identityId = "id";
  const expiration = new Date();
  const send = jest.fn().mockResolvedValue({
    Credentials: {
      AccessKeyId: "foo",
      SecretKey: "bar",
      SessionToken: "baz",
      Expiration: expiration,
    },
    IdentityId: identityId,
  });
  const mockClient: any = { send };

  beforeEach(() => {
    send.mockClear();
  });

  it("should execute a GetCredentialsForIdentity command and convert the result", async () => {
    expect(
      await fromCognitoIdentity({
        client: mockClient,
        identityId,
        customRoleArn: "myArn",
      })()
    ).toEqual({
      identityId: identityId,
      accessKeyId: "foo",
      secretAccessKey: "bar",
      sessionToken: "baz",
      expiration,
    });

    const sendParam = send.mock.calls[0][0];
    expect(sendParam).toEqual(expect.any(GetCredentialsForIdentityCommand));
    expect(sendParam.input).toEqual({
      IdentityId: identityId,
      CustomRoleArn: "myArn",
    });
  });

  it("should resolve logins to string tokens and pass them to the service", async () => {
    await fromCognitoIdentity({
      client: mockClient,
      identityId,
      customRoleArn: "myArn",
      logins: {
        myDomain: "token",
        "www.amazon.com": () => Promise.resolve("expiring nonce"),
      },
    })();

    const sendParam = send.mock.calls[0][0];
    expect(sendParam).toEqual(expect.any(GetCredentialsForIdentityCommand));
    expect(sendParam.input).toMatchObject({
      IdentityId: identityId,
      CustomRoleArn: "myArn",
      Logins: {
        myDomain: "token",
        "www.amazon.com": "expiring nonce",
      },
    });
  });

  it("should convert a GetCredentialsForIdentity response without credentials to a provider error", async () => {
    send.mockImplementationOnce(() => Promise.resolve({ identityId }));

    await expect(
      fromCognitoIdentity({
        client: mockClient,
        identityId,
        customRoleArn: "myArn",
      })()
    ).rejects.toMatchObject(new CredentialsProviderError("Response from Amazon Cognito contained no credentials"));
  });

  it("should convert a GetCredentialsForIdentity response without an access key ID to a provider error", async () => {
    send.mockImplementationOnce(() =>
      Promise.resolve({
        Credentials: { SecretKey: "bar" },
        IdentityId: identityId,
      })
    );

    await expect(
      fromCognitoIdentity({
        client: mockClient,
        identityId,
        customRoleArn: "myArn",
      })()
    ).rejects.toMatchObject(new CredentialsProviderError("Response from Amazon Cognito contained no access key ID"));
  });

  it("should convert a GetCredentialsForIdentity response without a secret key to a provider error", async () => {
    send.mockImplementationOnce(() =>
      Promise.resolve({
        Credentials: { AccessKeyId: "foo" },
        IdentityId: identityId,
      })
    );

    await expect(
      fromCognitoIdentity({
        client: mockClient,
        identityId,
        customRoleArn: "myArn",
      })()
    ).rejects.toMatchObject(new CredentialsProviderError("Response from Amazon Cognito contained no secret key"));
  });
});
