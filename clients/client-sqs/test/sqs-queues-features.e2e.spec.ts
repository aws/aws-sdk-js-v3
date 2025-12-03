import { getE2eTestResources } from "@aws-sdk/aws-util-test/src";
import { SQS } from "@aws-sdk/client-sqs";
import { beforeAll, describe, expect, test as it } from "vitest";

describe("SQS Queues", () => {
  let client: SQS;
  let region: string;

  beforeAll(async () => {
    const e2eTestResourcesEnv = await getE2eTestResources();
    Object.assign(process.env, e2eTestResourcesEnv);

    region = process?.env?.AWS_SMOKE_TEST_REGION as string;

    client = new SQS({ region });
  });

  describe("Creating and deleting queues", () => {
    it("should create queues and eventually list them", async () => {
      const createdQueues: string[] = [];

      try {
        // Create first queue
        const createResult1 = await client.createQueue({
          QueueName: `aws-js-sdk-${Date.now()}`,
        });
        const queueUrl1 = createResult1.QueueUrl!;
        createdQueues.push(queueUrl1);

        // Create second queue
        const createResult2 = await client.createQueue({
          QueueName: `aws-js-sdk-${Date.now() + 1}`,
        });
        const queueUrl2 = createResult2.QueueUrl!;
        createdQueues.push(queueUrl2);

        // List queues should contain the created queues
        const listResult = await client.listQueues({});
        const queueUrls = listResult.QueueUrls || [];

        // Check that created queues exist in the list
        for (const createdQueue of createdQueues) {
          expect(queueUrls).toContain(createdQueue);
        }
      } finally {
        // Cleanup
        for (const queueUrl of createdQueues) {
          try {
            await client.deleteQueue({ QueueUrl: queueUrl });
          } catch (error) {
            console.warn(`Failed to delete queue ${queueUrl}:`, error);
          }
        }
      }
    });
  });
});
