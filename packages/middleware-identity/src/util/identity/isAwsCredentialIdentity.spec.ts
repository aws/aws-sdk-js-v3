import { Identity } from "@aws-sdk/types";

import { isAwsCredentialIdentity } from "./isAwsCredentialIdentity";

describe(isAwsCredentialIdentity.name, () => {
  const isAwsCredentialIdentities = [
    {
      accessKeyId: "mockAccessKeyId",
      secretAccessKey: "mockSecretAccessKey",
    },
    {
      accessKeyId: "mockAccessKeyId",
      secretAccessKey: "mockSecretAccessKey",
      sessionToken: "mockSessionToken",
    },
  ];

  const isNotAwsCredentialIdentities = [
    {},
    {
      expiration: Date.now(),
    },
    {
      token: "mockToken",
    },
    {
      accessKeyId: "mockAccessKeyId",
    },
    {
      secretAccessKey: "mockSecretAccessKey",
    },
    {
      username: "xxx",
    },
    {
      password: "xxx",
    },
    {
      username: "xxx",
      password: "xxx",
    },
  ];

  it.each(isAwsCredentialIdentities)("should be an AwsCredential identity", (identity) => {
    expect(isAwsCredentialIdentity(identity as Identity)).toBe(true);
  });

  it.each(isNotAwsCredentialIdentities)("should not be an AwsCredential identity", (identity) => {
    expect(isAwsCredentialIdentity(identity as Identity)).not.toBe(true);
  });
});
