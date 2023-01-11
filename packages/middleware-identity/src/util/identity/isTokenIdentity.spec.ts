import { Identity } from "@aws-sdk/types";

import { isTokenIdentity } from "./isTokenIdentity";

describe(isTokenIdentity.name, () => {
  const isTokenIdentities = [
    {
      token: "mockToken",
    },
  ];

  const isNotTokenIdentities = [
    {},
    {
      expiration: Date.now(),
    },
    {
      accessKeyId: "mockAccessKeyId",
    },
    {
      secretAccessKey: "mockSecretAccessKey",
    },
    {
      accessKeyId: "mockAccessKeyId",
      secretAccessKey: "mockSecretAccessKey",
    },
    {
      accessKeyId: "mockAccessKeyId",
      secretAccessKey: "mockSecretAccessKey",
      sessionToken: "mockSessionToken",
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

  it.each(isTokenIdentities)("should be a Token identity", (identity) => {
    expect(isTokenIdentity(identity as Identity)).toBe(true);
  });

  it.each(isNotTokenIdentities)("should not be a Token identity", (identity) => {
    expect(isTokenIdentity(identity as Identity)).not.toBe(true);
  });
});
