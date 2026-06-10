import { BedrockRuntime } from "@aws-sdk/client-bedrock-runtime";
import { afterAll, describe, expect, it } from "vitest";

import { UndiciHttpHandler } from "./index";

describe("BedrockRuntime", () => {
  const client = new BedrockRuntime({
    region: "us-east-1",
    requestHandler: new UndiciHttpHandler(),
  });

  afterAll(() => {
    client.destroy();
  });

  it("invokeModelWithBidirectionalStream", async () => {
    const promptName = "p";
    const jsonBytes = (data: unknown) => Buffer.from(JSON.stringify(data));
    const chunk = (event: unknown) => ({
      chunk: { bytes: jsonBytes({ event }) },
    });

    const response = await client.invokeModelWithBidirectionalStream({
      modelId: "amazon.nova-sonic-v1:0",
      body: {
        async *[Symbol.asyncIterator]() {
          yield chunk({ sessionStart: {} });
          yield chunk({
            promptStart: {
              promptName,
              audioOutputConfiguration: {
                mediaType: "audio/lpcm",
                sampleRateHertz: 8000,
                sampleSizeBits: 16,
                channelCount: 1,
                voiceId: "matthew",
                encoding: "base64",
                audioType: "SPEECH",
              },
            },
          });
          yield chunk({
            contentStart: {
              promptName,
              contentName: "c1",
              type: "TEXT",
              role: "SYSTEM",
              textInputConfiguration: { mediaType: "text/plain" },
            },
          });
          yield chunk({
            textInput: {
              promptName,
              contentName: "c1",
              content: "Hi",
            },
          });
          yield chunk({
            contentEnd: { promptName, contentName: "c1" },
          });
          yield chunk({
            contentStart: {
              promptName,
              contentName: "c2",
              type: "AUDIO",
              role: "USER",
              audioInputConfiguration: {
                mediaType: "audio/lpcm",
                sampleRateHertz: 16000,
                sampleSizeBits: 16,
                channelCount: 1,
                audioType: "SPEECH",
                encoding: "base64",
              },
            },
          });
          yield chunk({
            audioInput: {
              promptName,
              contentName: "c2",
              content: Buffer.from(new Uint8Array(3200)).toString("base64"),
            },
          });
          yield chunk({
            contentEnd: { promptName, contentName: "c2" },
          });
          yield chunk({ promptEnd: { promptName } });
          yield chunk({ sessionEnd: {} });
        },
      },
    });

    expect(response.$metadata.httpStatusCode).toBe(200);
    expect(response.body).toBeDefined();

    let receivedUsageEvent = false;
    const receivedEventTypes: string[] = [];

    for await (const event of response.body!) {
      if (event?.chunk?.bytes?.byteLength) {
        const parsed = JSON.parse(new TextDecoder().decode(event.chunk.bytes));
        expect(parsed).toHaveProperty("event");

        const eventType = Object.keys(parsed["event"])[0];
        receivedEventTypes.push(eventType);

        if (eventType === "usageEvent") {
          receivedUsageEvent = true;
        }
      }
    }

    expect(receivedEventTypes.length).toBeGreaterThan(0);
    expect(receivedUsageEvent).toBe(true);
  });
});
