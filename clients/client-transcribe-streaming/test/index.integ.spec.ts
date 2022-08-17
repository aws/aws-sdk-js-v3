import { createReadStream } from "fs";
import { join } from "path";

import { TranscribeStreaming } from "../src/index";
const audio = createReadStream(join(__dirname, "numbers.wav"));

describe("TranscribeStream client", () => {
  const client = new TranscribeStreaming({});
  afterAll(() => {
    client.destroy();
  });

  it("should stream the transcript", async () => {
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
  }, 60000);
});
