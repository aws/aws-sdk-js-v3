import { CodeCatalyst } from "@aws-sdk/client-codecatalyst";

import { requireRequestsFrom } from "../../../private/aws-util-test/src";

describe("middleware-user-agent", () => {
  describe(CodeCatalyst.name, () => {
    it("sets the SDK user agent", async () => {
      const client = new CodeCatalyst({
        region: "us-west-2",
        token: {
          token: "my-token",
        },
      });
      requireRequestsFrom(client).toMatch({
        headers: {
          "x-amz-user-agent": /aws-sdk-js\/[\d\.]+/,
          "user-agent": /aws-sdk-js\/[\d\.]+ (.*?)lang\/js md\/nodejs\#[\d\.]+ (.*?)api\/(.+)\#[\d\.]+/,
        },
      });
      await client.getUserDetails({
        id: "my-id",
        userName: "my-username",
      });
    });
  });
});
