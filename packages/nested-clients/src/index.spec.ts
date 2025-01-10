import { describe, expect, test as it } from "vitest";

import {
  AssumeRoleCommand,
  AssumeRoleWithWebIdentityCommand,
  CreateTokenCommand,
  getDefaultRoleAssumer,
  getDefaultRoleAssumerWithWebIdentity,
  SSOOIDCClient,
  STSClient,
} from "./index";

describe("@aws-sdk/nested-clients", () => {
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
