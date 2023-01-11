import { Identity } from "@aws-sdk/types";

import { isLoginIdentity } from "./isLoginIdentity";

describe(isLoginIdentity.name, () => {
  const isLoginIdentities = [
    {
      username: "xxx",
      password: "xxx",
    },
  ];

  const isNotLoginIdentities = [
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
  ];

  it.each(isLoginIdentities)("should be a Login identity", (identity) => {
    expect(isLoginIdentity(identity as Identity)).toBe(true);
  });

  it.each(isNotLoginIdentities)("should not be a Login identity", (identity) => {
    expect(isLoginIdentity(identity as Identity)).not.toBe(true);
  });
});
