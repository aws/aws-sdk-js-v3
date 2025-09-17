import { requireRequestsFrom } from "@aws-sdk/aws-util-test/src";
import { Glacier } from "@aws-sdk/client-glacier";
import { describe, expect, test as it } from "vitest";

describe("middleware-sdk-glacier", () => {
  describe(Glacier.name, () => {
    it("should set a default account id", async () => {
      const client = new Glacier({
        region: "us-west-2",
      });

      requireRequestsFrom(client).toMatch({
        path: `/-/vaults`,
      });

      await client.listVaults({
        accountId: undefined,
      });

      expect.hasAssertions();
    });

    it("should not override account id", async () => {
      const client = new Glacier({
        region: "us-west-2",
      });

      requireRequestsFrom(client).toMatch({
        path: `/1234/vaults`,
      });

      await client.listVaults({
        accountId: "1234",
      });

      expect.hasAssertions();
    });

    describe("headers", () => {
      it("should set checksum and api version headers", async () => {
        const client = new Glacier({
          region: "us-west-2",
        });

        requireRequestsFrom(client).toMatch({
          headers: {
            "x-amz-glacier-version": "2012-06-01",
            "x-amz-content-sha256": "88d4266fd4e6338d13b845fcf289579d209c897823b9217da3e161936f031589",
            "x-amz-sha256-tree-hash": "88d4266fd4e6338d13b845fcf289579d209c897823b9217da3e161936f031589",
          },
        });

        await client.uploadArchive({
          vaultName: "vault",
          accountId: "1234",
          body: Buffer.from("abcd"),
        });

        expect.hasAssertions();
      });
    });
  });
});
