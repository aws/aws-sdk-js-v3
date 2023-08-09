import { CodeCatalyst } from "@aws-sdk/client-codecatalyst";

import { requireRequestsFrom } from "../../../private/aws-util-test/src";

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
        headers: {
          authorization: /Bearer my-token/,
        },
      });
      await client.getUserDetails({
        id: "my-id",
        userName: "my-username",
      });
    });
  });
});
