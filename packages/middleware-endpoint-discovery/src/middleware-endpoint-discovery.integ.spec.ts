import { TimestreamQuery } from "@aws-sdk/client-timestream-query";
import { TimestreamWrite } from "@aws-sdk/client-timestream-write";
import { EndpointCache } from "@aws-sdk/endpoint-cache";
import { describe, expect, test as it } from "vitest";

import { requireRequestsFrom } from "../../../private/aws-util-test/src";
import { getCacheKey } from "./getCacheKey";

describe("middleware-endpoint-discovery", () => {
  describe(TimestreamQuery.name, () => {
    it("should use endpoint discovery cache", async () => {
      const client = new TimestreamQuery({
        region: "us-west-2",
        endpointDiscoveryEnabled: true,
      });

      requireRequestsFrom(client).toMatch({
        hostname: /https\:\/\/my-endpoint.amazonaws.com$/,
      });

      client.config.endpointCache = new EndpointCache(1000);
      const cacheKey = await getCacheKey("DescribeScheduledQueryCommand", client.config, {});
      client.config.endpointCache.set(cacheKey, [
        {
          Address: "https://my-endpoint.amazonaws.com",
          CachePeriodInMinutes: 1,
        },
      ]);

      await client.describeScheduledQuery({
        ScheduledQueryArn: "arn:aws:timestream:us-west-2:1234567890:scheduled-query/1",
      });

      expect.assertions(1);
    });
  });

  describe(TimestreamWrite.name, () => {
    it("should use endpoint discovery cache", async () => {
      const client = new TimestreamWrite({
        region: "us-west-2",
        endpointDiscoveryEnabled: true,
      });

      requireRequestsFrom(client).toMatch({
        hostname: /https\:\/\/my-endpoint.amazonaws.com$/,
      });

      client.config.endpointCache = new EndpointCache(1000);
      const cacheKey = await getCacheKey("DescribeBatchLoadTaskCommand", client.config, {});
      client.config.endpointCache.set(cacheKey, [
        {
          Address: "https://my-endpoint.amazonaws.com",
          CachePeriodInMinutes: 1,
        },
      ]);

      await client.describeBatchLoadTask({
        TaskId: "task-id",
      });

      expect.assertions(1);
    });
  });
});
