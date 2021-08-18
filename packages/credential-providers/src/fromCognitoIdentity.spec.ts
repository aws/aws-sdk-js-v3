jest.mock("@aws-sdk/client-cognito-identity", () => ({
  CognitoIdentityClient: jest.fn().mockImplementation(function () {
    return "COGNITO_IDENTITY_CLIENT";
  }),
}));

import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import { fromCognitoIdentity as coreProvider } from "@aws-sdk/credential-provider-cognito-identity";

import { fromCognitoIdentity } from "./fromCognitoIdentity";

jest.mock("@aws-sdk/credential-provider-cognito-identity", () => ({
  fromCognitoIdentity: jest.fn(),
}));

describe("fromCognitoIdentity", () => {
  const identityId = "IDENTITY_ID";

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should inject default client", () => {
    fromCognitoIdentity({
      identityId,
    });
    expect((coreProvider as jest.Mock).mock.calls[0][0]?.identityId).toBe(identityId);
    expect((coreProvider as jest.Mock).mock.calls[0][0]?.client).toBeInstanceOf(CognitoIdentityClient);
    expect(CognitoIdentityClient).toBeCalled();
  });

  it("should use client config if supplied", () => {
    const clientConfig = "CLIENT" as any;
    fromCognitoIdentity({
      identityId,
      clientConfig,
    });
    expect((coreProvider as jest.Mock).mock.calls[0][0]?.identityId).toBe(identityId);
    expect((coreProvider as jest.Mock).mock.calls[0][0]?.client).toBeInstanceOf(CognitoIdentityClient);
    expect(CognitoIdentityClient).toBeCalledWith(clientConfig);
  });
});
