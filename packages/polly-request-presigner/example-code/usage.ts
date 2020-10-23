import { Polly, PollyClient } from "@aws-sdk/client-polly";

import { getSynthesizeSpeechUrl } from "../src/index";

const synthesizeSpeechParams = {
  Text: "Hello world, the polly presigner is really cool!",
  OutputFormat: "mp3",
  VoiceId: "Kimberly",
};

// do Synthesize with full poly
(async () => {
  let url = await getSynthesizeSpeechUrl({
    client: new Polly({
      region: "us-east-1",
    }),
    params: synthesizeSpeechParams,
  });
  console.log(url);
})();

// do Synthesize with poly client
(async () => {
  let url = await getSynthesizeSpeechUrl({
    client: new PollyClient({}),
    params: synthesizeSpeechParams,
  });
  console.log(url);
})();
