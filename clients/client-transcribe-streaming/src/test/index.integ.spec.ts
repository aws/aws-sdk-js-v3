import { TranscribeStreaming } from "../index";
import { createReadStream } from "fs";
import { join } from "path";
const audio = createReadStream(join(__dirname, "speech.wav"));

describe("TranscribeStream client", () => {
  const client = new TranscribeStreaming({});
  afterAll(() => {
    client.destroy();
  });

  it("should stream the transcript", async () => {
    const LanguageCode = "en-US";
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
    const transcripts = [];
    for await (const event of result.TranscriptResultStream!) {
      transcripts.push(event);
    }
    expect(transcripts.filter((event) => event["TranscriptEvent"]).length).toBeGreaterThan(0);
  }, 60000);
});
