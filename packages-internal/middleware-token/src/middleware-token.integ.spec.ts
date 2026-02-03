import { requireRequestsFrom } from "@aws-sdk/aws-util-test/src";
import { CodeCatalyst } from "@aws-sdk/client-codecatalyst";
import { describe, test as it } from "vitest";

describe("middleware-token", () => {
  describe(CodeCatalyst.name, () => {
    it("sets bearer token authorization header", async () => {
      const client = new CodeCatalyst({
        region: "us-west-2",
        token: {
          token: "my-token",
        },
      });
      requireRequestsFrom(client).toMatch({
        headers: new Map([[/authorization/i, /Bearer my-token/]]),
      });
      await client.getUserDetails({
        id: "my-id",
        userName: "my-username",
      });
    });
  });
});
