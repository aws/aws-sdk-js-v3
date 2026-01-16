import { TranscribeStreaming } from "@aws-sdk/client-transcribe-streaming";
import { createReadStream } from "node:fs";
import { join } from "node:path";
import { afterAll, describe, expect, test as it } from "vitest";

const audio = createReadStream(join(__dirname, "numbers.wav"));

describe("TranscribeStream client", { retry: 4 }, () => {
  const client = new TranscribeStreaming({
    region: "us-west-2",
  });

  afterAll(() => {
    client.destroy();
  });

  it("should stream the transcript", { timeout: 60000 }, async () => {
    const LanguageCode = "en-GB";
    const MediaEncoding = "pcm";
    const MediaSampleRateHertz = 44100;
    const result = await client.startStreamTranscription({
      LanguageCode,
      MediaEncoding,
      MediaSampleRateHertz,
      AudioStream: (async function* () {
        for await (const chunk of audio) {
          yield { AudioEvent: { AudioChunk: chunk } };
        }
      })(),
    });
    expect(result.LanguageCode).toBe(LanguageCode);
    expect(result.MediaEncoding).toBe(MediaEncoding);
    expect(result.MediaSampleRateHertz).toBe(MediaSampleRateHertz);
    expect(result.TranscriptResultStream).toBeDefined();
    const transcripts: any[] = [];
    for await (const event of result.TranscriptResultStream!) {
      transcripts.push(event);
    }
    expect(transcripts.filter((event) => event["TranscriptEvent"]).length).toBeGreaterThan(0);
  });
});
