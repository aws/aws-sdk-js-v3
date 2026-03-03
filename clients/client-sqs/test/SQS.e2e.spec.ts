import { SQS } from "@aws-sdk/client-sqs";
import { AwsJson1_0Protocol, AwsQueryProtocol } from "@aws-sdk/core";
import { HttpRequest, HttpResponse } from "@smithy/protocol-http";
import { afterAll, describe, expect, test as it } from "vitest";

describe(SQS.name, () => {
  describe.each([
    { output: "text/xml", input: "application/x-www-form-urlencoded", protocol: AwsQueryProtocol },
    { output: "application/x-amz-json-1.0", input: "application/x-amz-json-1.0", protocol: AwsJson1_0Protocol },
  ])(
    "gets response with content-type=$output when request is content-type=$input with protocol $protocol.name",
    ({ input, output, protocol }) => {
      const client = new SQS({ region: "us-west-2", protocol });
      client.middlewareStack.add(
        (next) => async (args: any) => {
          expect((args.request as HttpRequest).headers["content-type"]).toBe(input);
          const response = await next(args);
          expect((response.response as HttpResponse).headers["content-type"]).toBe(output);
          return response;
        },
        { step: "build" }
      );

      let QueueUrl: string;

      it("run createQueue", async () => {
        const QueueName = `aws-sdk-js-${crypto.randomUUID()}`;
        const response = await client.createQueue({ QueueName });

        QueueUrl = response.QueueUrl!;
        expect(typeof QueueUrl).toBe("string");
        expect(QueueUrl.endsWith(QueueName)).toBe(true);

        expect.assertions(4);
      });

      afterAll(async () => {
        await client.deleteQueue({ QueueUrl }).catch(() => {
          // Ignore errors during cleanup (e.g. if queue creation fails)
        });
      });
    }
  );
});
