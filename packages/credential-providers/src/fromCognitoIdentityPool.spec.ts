jest.mock("@aws-sdk/client-cognito-identity", () => ({
  CognitoIdentityClient: jest.fn().mockImplementation(function () {
    return "COGNITO_IDENTITY_CLIENT";
  }),
}));

import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import { fromCognitoIdentityPool as coreProvider } from "@aws-sdk/credential-provider-cognito-identity";

import { fromCognitoIdentityPool } from "./fromCognitoIdentityPool";

jest.mock("@aws-sdk/credential-provider-cognito-identity", () => ({
  fromCognitoIdentityPool: jest.fn(),
}));

describe("fromCognitoIdentityPool", () => {
  const identityPoolId = "IDENTITY_POOL_ID";

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should inject default client", () => {
    fromCognitoIdentityPool({
      identityPoolId,
    });
    expect(coreProvider).toBeCalledWith(
      expect.objectContaining({
        identityPoolId,
      })
    );
    expect((coreProvider as jest.Mock).mock.calls[0][0]?.identityPoolId).toBe(identityPoolId);
    expect((coreProvider as jest.Mock).mock.calls[0][0]?.client).toBeInstanceOf(CognitoIdentityClient);
    expect(CognitoIdentityClient).toBeCalledWith({});
  });

  it("should use client config if supplied", () => {
    const clientConfig = "CLIENT" as any;
    fromCognitoIdentityPool({
      identityPoolId,
      clientConfig,
    });
    expect((coreProvider as jest.Mock).mock.calls[0][0]?.identityPoolId).toBe(identityPoolId);
    expect((coreProvider as jest.Mock).mock.calls[0][0]?.client).toBeInstanceOf(CognitoIdentityClient);
    expect(CognitoIdentityClient).toBeCalledWith(clientConfig);
  });
});
