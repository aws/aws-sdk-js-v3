import { CloudFormation, paginateListStacks } from "@aws-sdk/client-cloudformation";
import { beforeAll, describe, expect, test as it } from "vitest";

describe(CloudFormation.name, () => {
  let client: CloudFormation;

  beforeAll(async () => {
    client = new CloudFormation({ region: "us-west-2" });
  });

  describe("Describing stacks", () => {
    it("should return stacks list when describe stacks is called", async () => {
      const result = await client.describeStacks({});

      expect(Array.isArray(result.Stacks)).toBe(true);
    });
  });

  describe("Error handling", () => {
    it("should handle ValidationError for invalid stack creation", async () => {
      const templateBody = '{"Resources":{"member":{"Type":"AWS::SQS::Queue"}}}';

      await expect(
        client.createStack({
          TemplateBody: templateBody,
          StackName: "", // Empty name should cause ValidationError
        })
      ).rejects.toThrow(
        expect.objectContaining({
          name: "ValidationError",
        })
      );
    });
  });

  describe("Paginating responses", () => {
    it("should paginate listStacks operation", async () => {
      const paginator = paginateListStacks({ client }, {});

      let pageCount = 0;
      let lastPage;

      for await (const page of paginator) {
        pageCount++;
        lastPage = page;
      }

      expect(pageCount).toBeGreaterThanOrEqual(1);
      expect(lastPage?.NextToken).toBeUndefined(); // The last page must not contain a marker
    });
  });
});
