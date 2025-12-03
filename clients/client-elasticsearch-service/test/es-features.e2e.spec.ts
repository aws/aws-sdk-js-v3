import { getE2eTestResources } from "@aws-sdk/aws-util-test/src";
import { ElasticsearchService } from "@aws-sdk/client-elasticsearch-service";
import { beforeAll, describe, expect, test as it } from "vitest";

describe("Amazon ES Features", () => {
  let client: ElasticsearchService;
  let region: string;

  beforeAll(async () => {
    const e2eTestResourcesEnv = await getE2eTestResources();
    Object.assign(process.env, e2eTestResourcesEnv);

    region = process?.env?.AWS_SMOKE_TEST_REGION as string;

    client = new ElasticsearchService({ region });
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
