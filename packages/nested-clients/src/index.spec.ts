import { CreateTokenCommand, SSOOIDCClient } from "@aws-sdk/nested-clients/sso-oidc";
import {
  AssumeRoleCommand,
  AssumeRoleWithWebIdentityCommand,
  getDefaultRoleAssumer,
  getDefaultRoleAssumerWithWebIdentity,
  STSClient,
} from "@aws-sdk/nested-clients/sts";
import { describe, expect, test as it } from "vitest";

import * as index from "./index";

describe("@aws-sdk/nested-clients", () => {
  it("exports nothing from the root", async () => {
    expect(Object.keys(index)).toEqual([]);
  });
});

describe("@aws-sdk/nested-clients/*", () => {
  it("exports symbols used in internal credential providers", async () => {
    for (const symbol of [
      AssumeRoleCommand,
      AssumeRoleWithWebIdentityCommand,
      CreateTokenCommand,
      getDefaultRoleAssumer,
      getDefaultRoleAssumerWithWebIdentity,
      SSOOIDCClient,
      STSClient,
    ]) {
      expect(symbol).toBeDefined();
      expect(symbol).toBeInstanceOf(Function);
    }
  });
});
