import type { ListAsyncInvokesCommandOutput } from "@aws-sdk/client-bedrock-runtime";
import { BedrockRuntime } from "@aws-sdk/client-bedrock-runtime";
import { SignatureV4 } from "@smithy/signature-v4";
import { toBase64, toUtf8 } from "@smithy/core/serde";
import { beforeEach, describe, expect, test as it, vi } from "vitest";

describe("BedrockRuntime", () => {
  const client = new BedrockRuntime({
    region: "us-west-2",
    credentials: aws?.testCredentials,
    requestHandler: {
      maxConcurrentStreams: 3,
    },
  });

  let signerCredentialProviderSpy: any;

  beforeEach(async () => {
    const wsSigv4: any = await client.config.signer();
    const sigv4: SignatureV4 & any = wsSigv4.signer;

    // artificially make the signer factory return the same observable instance.
    (client.config as any).eventStreamPayloadHandler.messageSigner = async () => wsSigv4;

    expect(wsSigv4.signer).toBeInstanceOf(SignatureV4);
    signerCredentialProviderSpy = vi.spyOn(sigv4, "credentialProvider").mockImplementation(async () => {
      return client.config.credentials();
    });
  });

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
    const listAsyncInvokesOutputs: ListAsyncInvokesCommandOutput[] = [];

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

            // At midpoint, fire parallel requests over the same client
            // to verify HTTP/2 session concurrency doesn't interfere with the ongoing stream.
            if (it === 10) {
              const results = await Promise.all(
                Array.from({ length: 8 }, () => client.listAsyncInvokes({ maxResults: 1 }))
              );
              listAsyncInvokesOutputs.push(...results);
            }

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

    // Verify parallel requests completed successfully during the bidirectional stream.
    expect(listAsyncInvokesOutputs).toHaveLength(8);
    for (const result of listAsyncInvokesOutputs) {
      expect(result.$metadata.httpStatusCode).toBe(200);
    }

    const h2SessionState = (client.config.requestHandler as any).connectionManager?.debug?.();
    if (h2SessionState) {
      expect(h2SessionState).toMatchObject({
        "https://bedrock-runtime.us-west-2.amazonaws.com/": {
          sessions: [
            {
              active: expect.any(Number),
              id: expect.any(Number),
              maxConcurrent: 3,
              totalRequests: 3,
            },
            {
              active: expect.any(Number),
              id: expect.any(Number),
              maxConcurrent: 3,
              totalRequests: 3,
            },
            {
              active: expect.any(Number),
              id: expect.any(Number),
              maxConcurrent: 2,
              totalRequests: 2,
            },
          ],
        },
      });
    }

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

    // there are ~44 calls in this execution when the event signing stream does not use static credentials.
    if (!process.env.AWS_SDK_TEST_CANARY) {
      expect(signerCredentialProviderSpy).not.toHaveBeenCalled();
    }
  });
}, 60_000);
