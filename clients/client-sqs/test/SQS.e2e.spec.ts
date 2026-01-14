import { SQS } from "@aws-sdk/client-sqs";
import { AwsJson1_0Protocol, AwsQueryProtocol } from "@aws-sdk/core";
import { HttpRequest, HttpResponse } from "@smithy/protocol-http";
import { beforeAll, afterAll, describe, expect, test as it } from "vitest";

describe(SQS.name, () => {
  const region = "us-west-2";
  const client = new SQS({ region });
  const QueueName = `aws-sdk-js-${crypto.randomUUID()}`;
  let QueueUrl: string;

  beforeAll(async () => {
    const response = await client.createQueue({ QueueName });
    QueueUrl = response.QueueUrl!;
  });

  it.each([
    { output: "text/xml", input: "application/x-www-form-urlencoded", protocol: AwsQueryProtocol },
    { output: "application/x-amz-json-1.0", input: "application/x-amz-json-1.0", protocol: AwsJson1_0Protocol },
  ])(
    "gets response with content-type=$output when request is content-type=$input with protocol $protocol.name",
    async ({ input, output, protocol }) => {
      const client = new SQS({ region, protocol });
      client.middlewareStack.add(
        (next) => async (args: any) => {
          expect((args.request as HttpRequest).headers["content-type"]).toBe(input);
          const response = await next(args);
          expect((response.response as HttpResponse).headers["content-type"]).toBe(output);
          return response;
        },
        { step: "build" }
      );
      const response = await client.getQueueUrl({ QueueName });
      expect(response.QueueUrl).toEqual(QueueUrl);
      expect.assertions(3);
    }
  );

  afterAll(async () => {
    await client.deleteQueue({ QueueUrl });
  });
});
