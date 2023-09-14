import { SQS } from "@aws-sdk/client-sqs";
import { HttpHandler, HttpResponse } from "@smithy/protocol-http";
import crypto from "crypto";
import { Readable } from "stream";

import sqsModel from "../../../codegen/sdk-codegen/aws-models/sqs.json";
const useAwsQuery = !!sqsModel.shapes["com.amazonaws.sqs#AmazonSQS"].traits["aws.protocols#awsQuery"];

let hashError = "";
const md5 = (str: string) =>
  crypto
    .createHash("md5")
    .update(str + hashError)
    .digest("hex");

const responses = () => ({
  JSON: {
    receive: JSON.stringify({
      Messages: [
        {
          MessageId: "MSGID",
          MD5OfBody: md5("body"),
          Body: "body",
        },
      ],
    }),
    send: JSON.stringify({
      MD5OfMessageBody: md5("body"),
      MessageId: "MSGID",
    }),
    sendBatch: JSON.stringify({
      Successful: [
        {
          Id: "MSGID1",
          MessageId: "MSGID1",
          MD5OfMessageBody: md5("body"),
        },
        {
          Id: "MSGID2",
          MessageId: "MSGID2",
          MD5OfMessageBody: md5("body"),
        },
        {
          Id: "MSGID3",
          MessageId: "MSGID3",
          MD5OfMessageBody: md5("body"),
        },
      ],
    }),
  },
  XML: {
    receive: `
<?xml version="1.0" encoding="UTF-8"?>
<ReceiveMessageResponse>
  <ReceiveMessageResult>
    <Message>
      <Body>body</Body>
      <MD5OfBody>${md5("body")}</MD5OfBody>
      <MessageId>id</MessageId>
    </Message>
  </ReceiveMessageResult>
</ReceiveMessageResponse>`,
    send: `
<?xml version="1.0" encoding="UTF-8"?>
<SendMessageResponse>
  <SendMessageResult>
    <MessageId>MSGID</MessageId>
    <MD5OfMessageBody>${md5("body")}</MD5OfMessageBody>
  </SendMessageResult>
</SendMessageResponse>`,
    sendBatch: `
<?xml version="1.0" encoding="UTF-8"?>
<SendMessageBatchResponse>
  <SendMessageBatchResult>
    <SendMessageBatchResultEntry>
      <Id>MSGID1</Id>
      <MessageId>MSGID1</MessageId>
      <MD5OfMessageBody>${md5("body")}</MD5OfMessageBody>
    </SendMessageBatchResultEntry>
    <SendMessageBatchResultEntry>
      <Id>MSGID2</Id>
      <MessageId>MSGID2</MessageId>
      <MD5OfMessageBody>${md5("body")}</MD5OfMessageBody>
    </SendMessageBatchResultEntry>
    <SendMessageBatchResultEntry>
      <Id>MSGID3</Id>
      <MessageId>MSGID3</MessageId>
      <MD5OfMessageBody>${md5("body")}</MD5OfMessageBody>
    </SendMessageBatchResultEntry>
  </SendMessageBatchResult>
</SendMessageBatchResponse>`,
  },
});

const handlerResponse = (body: string) => {
  return {
    response: new HttpResponse({
      body: Readable.from([body]),
      statusCode: 200,
    }),
  };
};

describe("middleware-sdk-sqs", () => {
  // TODO: check in CI
  xdescribe(SQS.name + ` w/ useAwsQuery: ${useAwsQuery}`, () => {
    describe("correct md5 hashes", () => {
      beforeEach(() => {
        hashError = "";
      });

      it("runs md5 checksums on received messages", async () => {
        const client = new SQS({
          region: "us-west-2",
          requestHandler: new (class implements HttpHandler {
            async handle(): Promise<any> {
              const r = responses();
              return handlerResponse((useAwsQuery ? r.XML : r.JSON).receive);
            }
            updateHttpClientConfig(key: never, value: never): void {}
            httpHandlerConfigs() {
              return {};
            }
          })(),
        });

        const receive = await client.receiveMessage({
          QueueUrl: "https://my-queue.queue",
        });

        expect(receive?.Messages?.[0]?.Body).toBe("body");
      });

      it("runs md5 checksums on sent messages", async () => {
        const client = new SQS({
          region: "us-west-2",
          requestHandler: new (class implements HttpHandler {
            async handle(): Promise<any> {
              const r = responses();
              return handlerResponse((useAwsQuery ? r.XML : r.JSON).send);
            }
            updateHttpClientConfig(key: never, value: never): void {}
            httpHandlerConfigs() {
              return {};
            }
          })(),
        });

        const send = await client.sendMessage({
          QueueUrl: "https://my-queue.queue",
          MessageBody: "body",
        });

        expect(send?.MessageId).toBe("MSGID");
      });

      it("runs md5 checksums on batch sent messages", async () => {
        const client = new SQS({
          region: "us-west-2",
          requestHandler: new (class implements HttpHandler {
            async handle(): Promise<any> {
              const r = responses();
              return handlerResponse((useAwsQuery ? r.XML : r.JSON).sendBatch);
            }
            updateHttpClientConfig(key: never, value: never): void {}
            httpHandlerConfigs() {
              return {};
            }
          })(),
        });

        const batchSend = await client.sendMessageBatch({
          QueueUrl: "https://my-queue.queue",
          Entries: [
            {
              Id: "MSGID1",
              MessageBody: "body",
            },
            {
              Id: "MSGID2",
              MessageBody: "body",
            },
            {
              Id: "MSGID3",
              MessageBody: "body",
            },
          ],
        });

        expect(batchSend.Successful?.[0].MessageId).toBe("MSGID1");
      });
    });

    describe("incorrect md5 hashes", () => {
      beforeEach(() => {
        hashError = "a";
      });

      it("runs md5 checksums on received messages", async () => {
        const client = new SQS({
          region: "us-west-2",
          requestHandler: new (class implements HttpHandler {
            async handle(): Promise<any> {
              const r = responses();
              return handlerResponse((useAwsQuery ? r.XML : r.JSON).receive);
            }
            updateHttpClientConfig(key: never, value: never): void {}
            httpHandlerConfigs() {
              return {};
            }
          })(),
        });

        await client
          .receiveMessage({
            QueueUrl: "https://my-queue.queue",
          })
          .catch((e) => {
            expect(e.message).toMatch(/Invalid MD5 checksum/);
          });

        expect.hasAssertions();
      });

      it("runs md5 checksums on sent messages", async () => {
        const client = new SQS({
          requestHandler: new (class implements HttpHandler {
            async handle(): Promise<any> {
              const r = responses();
              return handlerResponse((useAwsQuery ? r.XML : r.JSON).send);
            }
            updateHttpClientConfig(key: never, value: never): void {}
            httpHandlerConfigs() {
              return {};
            }
          })(),
        });

        await client
          .sendMessage({
            QueueUrl: "https://my-queue.queue",
            MessageBody: "body",
          })
          .catch((e) => {
            expect(e.message).toMatch(/InvalidChecksumError/);
          });

        expect.hasAssertions();
      });

      it("runs md5 checksums on batch sent messages", async () => {
        const client = new SQS({
          region: "us-west-2",
          requestHandler: new (class implements HttpHandler {
            async handle(): Promise<any> {
              const r = responses();
              return handlerResponse((useAwsQuery ? r.XML : r.JSON).sendBatch);
            }
            updateHttpClientConfig(key: never, value: never): void {}
            httpHandlerConfigs() {
              return {};
            }
          })(),
        });

        await client
          .sendMessageBatch({
            QueueUrl: "https://my-queue.queue",
            Entries: [
              {
                Id: "MSGID1",
                MessageBody: "body",
              },
              {
                Id: "MSGID2",
                MessageBody: "body",
              },
              {
                Id: "MSGID3",
                MessageBody: "body",
              },
            ],
          })
          .catch((e) => {
            expect(e.message).toMatch(/Invalid MD5 checksum/);
          });

        expect.hasAssertions();
      });
    });
  });
});
