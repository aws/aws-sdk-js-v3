import { BedrockRuntime } from "@aws-sdk/client-bedrock-runtime";
import { toBase64 } from "@smithy/util-base64";
import { toUtf8 } from "@smithy/util-utf8";
import { describe, expect, test as it } from "vitest";

describe("BedrockRuntime", () => {
  const client = new BedrockRuntime({ region: "us-west-2", credentials: aws?.testCredentials });

  function s(data: any) {
    return Buffer.from(JSON.stringify(data));
  }

  it("should invoke model with response stream", async () => {
    const modelId = "us.amazon.nova-micro-v1:0";

    const response = await client.invokeModelWithResponseStream({
      modelId,
      body: JSON.stringify({
        messages: [
          {
            role: "user",
            content: [{ text: "Hello, how are you?" }],
          },
        ],
        inferenceConfig: {
          max_new_tokens: 100,
        },
      }),
    });

    expect(response.body).toBeDefined();

    let fullResponse = "";
    for await (const event of response.body!) {
      if (event.chunk?.bytes) {
        const chunk = JSON.parse(new TextDecoder().decode(event.chunk.bytes));
        if (chunk.contentBlockDelta?.delta?.text) {
          fullResponse += chunk.contentBlockDelta.delta.text;
        }
      }
    }

    expect(fullResponse.length).toBeGreaterThan(0);
  });

  it("should invoke model with bidirectional stream", async () => {
    const modelId = "amazon.nova-2-sonic-v1:0";
    const yields: string[] = [];
    let resolve: (_?: any) => void;
    const inputEnd = new Promise((r) => {
      resolve = r;
    });

    const response = await client.invokeModelWithBidirectionalStream({
      modelId,
      body: {
        async *[Symbol.asyncIterator]() {
          yields.push("sessionStart");
          yield {
            chunk: {
              bytes: s({
                event: {
                  sessionStart: {
                    inferenceConfiguration: {
                      maxTokens: 1000,
                      topP: 100,
                      temperature: 100,
                    },
                    turnDetectionConfiguration: {
                      endpointingSensitivity: "MEDIUM",
                    },
                  },
                },
              }),
            },
          };

          yields.push("promptStart");
          yield {
            chunk: {
              bytes: s({
                event: {
                  promptStart: {
                    promptName: "unique_prompt_id", // unique identifier same across all events i.e. UUID
                    textOutputConfiguration: {
                      mediaType: "text/plain",
                    },
                    audioOutputConfiguration: {
                      mediaType: "audio/lpcm",
                      sampleRateHertz: 8000,
                      sampleSizeBits: 16,
                      channelCount: 1,
                      voiceId: "matthew",
                      encoding: "base64",
                      audioType: "SPEECH",
                    },
                    toolUseOutputConfiguration: {
                      mediaType: "application/json",
                    },
                    toolConfiguration: {
                      tools: [
                        {
                          toolSpec: {
                            name: "string",
                            description: "string",
                            inputSchema: {
                              json: "{}",
                            },
                          },
                        },
                      ],
                    },
                  },
                },
              }),
            },
          };

          let contentName = "c";
          yields.push("contentStart");
          yield {
            chunk: {
              bytes: s({
                event: {
                  contentStart: {
                    promptName: "unique_prompt_id", // same unique identifier from promptStart event
                    contentName: contentName, // unique identifier for the content block
                    type: "TEXT",
                    interactive: true, // true for cross-modal input
                    role: "SYSTEM",
                    textInputConfiguration: {
                      mediaType: "text/plain",
                    },
                  },
                },
              }),
            },
          };

          let it = 0;

          while (++it) {
            await new Promise((resolve) => setTimeout(resolve, 200));

            const bytes = new Uint8Array(3200);
            crypto.getRandomValues(bytes);

            yield {
              chunk: {
                bytes: s({
                  event: {
                    audioInput: {
                      promptName: "unique_prompt_id",
                      contentName: contentName,
                      content: toBase64(bytes),
                    },
                  },
                }),
              },
            };

            if (it % 15 === 3) {
              yields.push("contentEnd");
              yield {
                chunk: {
                  bytes: s({
                    event: {
                      contentEnd: {
                        promptName: "unique_prompt_id", // same unique identifier from promptStart event
                        contentName: contentName, // same unique identifier from its contentStart
                      },
                    },
                  }),
                },
              };

              if (it >= 20) {
                yields.push("promptEnd");
                yield {
                  chunk: {
                    bytes: s({
                      event: {
                        promptEnd: {
                          promptName: "unique_prompt_id",
                        },
                      },
                    }),
                  },
                };
                yields.push("sessionEnd");
                yield {
                  chunk: {
                    bytes: s({
                      event: {
                        sessionEnd: {},
                      },
                    }),
                  },
                };

                resolve();
                break;
              }

              yields.push("contentStart (again)");
              contentName += "c";
              yield {
                chunk: {
                  bytes: s({
                    event: {
                      contentStart: {
                        promptName: "unique_prompt_id", // same unique identifier from promptStart event
                        contentName: contentName, // unique identifier for the content block
                        type: "AUDIO",
                        interactive: true, // true for cross-modal input
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
                    },
                  }),
                },
              };
            }
          }
        },
      },
    });

    await inputEnd;
    expect(yields).toEqual([
      "sessionStart",
      "promptStart",
      "contentStart",
      "contentEnd",
      "contentStart (again)",
      "contentEnd",
      "contentStart (again)",
      "contentEnd",
      "promptEnd",
      "sessionEnd",
    ]);

    // There are no other response fields currently.
    // Therefore, there is no difference in assertions for WebSocket and HTTP2.
    expect(response.body).toBeDefined();

    const responseChunks: string[] = [];

    for await (const event of response.body!) {
      const bytes = event?.chunk?.bytes;
      if (bytes?.byteLength) {
        const object = JSON.parse(toUtf8(bytes));
        responseChunks.push(Object.keys(object?.event ?? {})?.[0]);
      }
    }

    // Local testing gave 4 usageEvents in response.
    // Not asserting this strictly to leave room for model behavior changes.
    expect(responseChunks.length).toBeGreaterThanOrEqual(2);
    expect(responseChunks.some((c) => c === "usageEvent")).toBeTruthy();
  });
}, 60_000);
