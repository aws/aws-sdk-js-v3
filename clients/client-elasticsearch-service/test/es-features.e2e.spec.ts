import { ElasticsearchService } from "@aws-sdk/client-elasticsearch-service";
import { beforeAll, describe, expect, test as it } from "vitest";

describe(ElasticsearchService.name, () => {
  let client: ElasticsearchService;

  beforeAll(async () => {
    client = new ElasticsearchService({ region: "us-west-2" });
  });

  describe("Making a request", () => {
    it("should successfully list domain names", async () => {
      const result = await client.listDomainNames({});

      expect(result.$metadata?.httpStatusCode).toBe(200);
      expect(Array.isArray(result.DomainNames)).toBe(true);
    });
  });

  describe("Error handling", () => {
    it("should contain resource not found error for non-existent domain", async () => {
      await expect(
        client.describeElasticsearchDomain({
          DomainName: "not-a-domain",
        })
      ).rejects.toThrow(
        expect.objectContaining({
          name: "ResourceNotFoundException",
        })
      );
    });
  });
});
