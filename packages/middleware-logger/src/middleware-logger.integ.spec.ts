import { CloudFront } from "@aws-sdk/client-cloudfront";

import { requireRequestsFrom } from "../../../private/aws-util-test/src";

describe("middleware-location-constraint", () => {
  describe(CloudFront.name, () => {
    it("should have no effect on request creation", async () => {
      const client = new CloudFront({
        region: "us-west-2",
        logger: {
          debug() {},
          trace() {},
          info() {},
          warn() {},
          error() {},
        },
      });

      requireRequestsFrom(client).toMatch({
        method: "GET",
        hostname: "cloudfront.amazonaws.com",
        port: undefined,
        query: {},
        protocol: "https:",
        path: "/2020-05-31/distribution",
      });

      await client.listDistributions({});

      expect.hasAssertions();
    });
  });
});
