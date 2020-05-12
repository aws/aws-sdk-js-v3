import { TranscribeStreaming } from "../index";
import { createReadStream } from "fs";
import { join } from "path";
const moduleRoot = join(__dirname, "..", "..", "..");
const audio = createReadStream(join(moduleRoot, "test", "speech.wav"));

describe("TranscribeStream client", () => {
  const client = new TranscribeStreaming({});
  afterAll(() => {
    client.destroy();
  });

  it("should stream the transcript", async () => {
    const result = await client.startStreamTranscription({
      LanguageCode: "en-US",
      MediaEncoding: "pcm",
      MediaSampleRateHertz: 44100,
      AudioStream: (async function* () {
        for await (const chunk of audio) {
          yield { AudioEvent: { AudioChunk: chunk } };
        }
      })()
    });
    expect(result.LanguageCode).toBe("en-US");
    expect(result.MediaEncoding).toBe("pcm");
    expect(result.MediaSampleRateHertz).toBe(44100);
    expect(result.TranscriptResultStream).toBeDefined();
    const transcripts = [];
    for await (const event of result.TranscriptResultStream!) {
      transcripts.push(event);
    }
    expect(
      transcripts.filter(event => event["TranscriptEvent"]).length
    ).toBeGreaterThan(0);
  }, 60000);
});
