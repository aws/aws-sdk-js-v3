import { TranscribeStreaming } from "@aws-sdk/client-transcribe-streaming";
import { createReadStream } from "node:fs";
import { join } from "node:path";
import { afterAll, describe, expect, test as it } from "vitest";

describe("TranscribeStream client", { retry: 4 }, () => {
  const client = new TranscribeStreaming({
    region: "us-west-2",
    credentials: aws?.testCredentials,
    // empty object overrides the `disableConcurrentStreams: true`
    // that is/was present 2022-2026 (https://github.com/aws/aws-sdk-js-v3/pull/3810)
    requestHandler: {},
  });

  afterAll(() => {
    client.destroy();
  });

  it.skipIf(process.env.AWS_EXECUTION_ENV)(
    "should stream the transcript and be unaffected by concurrency",
    { timeout: 60000 },
    async () => {
      // can stream concurrently with h2 session concurrency enabled,
      // because event streams get isolated sessions regardless of configuration and WebSockets do not reuse connections.

      await Promise.all(
        [0, 1, 2, 3].map(async (i) => {
          const LanguageCode = "en-GB";
          const MediaEncoding = "pcm";
          const MediaSampleRateHertz = 44100;
          const result = await client.startStreamTranscription({
            LanguageCode,
            MediaEncoding,
            MediaSampleRateHertz,
            AudioStream: (async function* () {
              for await (const chunk of createReadStream(join(__dirname, "numbers.wav"))) {
                yield { AudioEvent: { AudioChunk: chunk } };
              }
            })(),
          });
          const connectionUsesWebsocket = client.config.requestHandler.metadata?.handlerProtocol === "websocket/h1.1";

          if (connectionUsesWebsocket) {
            // response headers are unavailable in WebSocket mode.
            expect(result.LanguageCode).toBe(undefined);
            expect(result.MediaEncoding).toBe(undefined);
            expect(result.MediaSampleRateHertz).toBe(undefined);
          } else {
            expect(result.LanguageCode).toBe(LanguageCode);
            expect(result.MediaEncoding).toBe(MediaEncoding);
            expect(result.MediaSampleRateHertz).toBe(MediaSampleRateHertz);
          }

          expect(result.TranscriptResultStream).toBeDefined();
          const transcripts: any[] = [];
          let parallelRequestsDone = false;
          for await (const event of result.TranscriptResultStream!) {
            transcripts.push(event);

            // After receiving the first event, fire parallel read requests over the same client
            // to verify HTTP/2 session concurrency doesn't interfere with the ongoing stream.
            if (!parallelRequestsDone && transcripts.length === 1 && i === 0) {
              parallelRequestsDone = true;
              const results = await Promise.allSettled(
                Array.from({ length: 3 }, () => client.getMedicalScribeStream({ SessionId: "non-existent-session-id" }))
              );
              for (const r of results) {
                // A rejected request with a service error still proves the HTTP/2 round-trip succeeded
                // concurrently with the active stream.
                expect(r.status === "rejected" ? r.reason?.name : r.status).toMatch(/InternalFailure/);
              }
            }
          }

          expect(transcripts.filter((event) => event["TranscriptEvent"]).length).toBeGreaterThan(0);
        })
      );

      const h2SessionState = (client.config.requestHandler as any).connectionManager?.debug?.();
      if (h2SessionState) {
        expect(h2SessionState).toMatchObject({
          "https://transcribestreaming.us-west-2.amazonaws.com/": {
            sessions: [
              {
                active: expect.any(Number),
                id: expect.any(Number),
                maxConcurrent: 3,
                totalRequests: expect.any(Number),
              },
            ],
          },
        });
        expect(
          h2SessionState["https://transcribestreaming.us-west-2.amazonaws.com/"].sessions
            .map((s: any) => s.totalRequests)
            .reduce((a: number, b: number) => a + b, 0)
        ).toEqual(45);
      }
    }
  );
});
