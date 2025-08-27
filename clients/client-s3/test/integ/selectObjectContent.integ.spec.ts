import { S3, SelectObjectContentEventStream } from "@aws-sdk/client-s3";
import { afterAll, beforeAll, describe, expect, test as it } from "vitest";

import { getIntegTestResources } from "../../../../tests/e2e/get-integ-test-resources";

describe("selectObjectContent", () => {
  let client: S3;
  let Bucket: string;
  let Key: string;

  const csvFile = `user_name,age
jsrocks,13
node4life,22
esfuture,29`;

  beforeAll(async () => {
    const integTestResourcesEnv = await getIntegTestResources();
    Object.assign(process.env, integTestResourcesEnv);

    const region = process?.env?.AWS_SMOKE_TEST_REGION as string;
    Bucket = process?.env?.AWS_SMOKE_TEST_BUCKET as string;
    Key = `selectObjectContent-${Date.now()}`;

    client = new S3({ region });
    await client.putObject({ Bucket, Key, Body: csvFile });
  });

  afterAll(async () => {
    await client.deleteObject({ Bucket, Key });
  });

  it("should succeed", async () => {
    const { Payload } = await client.selectObjectContent({
      Bucket,
      Key,
      ExpressionType: "SQL",
      Expression: "SELECT user_name FROM S3Object WHERE cast(age as int) > 20",
      InputSerialization: {
        CSV: {
          FileHeaderInfo: "USE",
          RecordDelimiter: "\n",
          FieldDelimiter: ",",
        },
      },
      OutputSerialization: {
        CSV: {},
      },
    });

    const events: SelectObjectContentEventStream[] = [];
    for await (const event of Payload!) {
      events.push(event);
    }

    expect(events.length).toEqual(3);
    expect(new TextDecoder().decode(events[0].Records?.Payload)).toEqual("node4life\nesfuture\n");
    expect(events[1].Stats?.Details).toBeDefined();
    expect(events[2].End).toBeDefined();
  });
});
