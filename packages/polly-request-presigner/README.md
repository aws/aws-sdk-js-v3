# @aws-sdk/polly-request-presigner

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/polly-request-presigner/latest.svg)](https://www.npmjs.com/package/@aws-sdk/polly-request-presigner)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/polly-request-presigner/beta.svg)](https://www.npmjs.com/package/@aws-sdk/polly-request-presigner)

This package provides a presigner based on signature V4 that will attempt to
generate signed url for polly audio.

### Get Presigned URL with Client and Command

Example Usage:

```js
import { Polly, PollyClient } from "@aws-sdk/client-polly";

import { getSynthesizeSpeechUrl } from "@aws-sdk/polly-request-presigner";

const synthesizeSpeechParams = {
  Text: "Hello world, the polly presigner is really cool!",
  OutputFormat: "mp3",
  VoiceId: "Kimberly",
};

// Synthesize with full polly.
(async () => {
  let url = await getSynthesizeSpeechUrl({
    client: new Polly({ region: "us-east-1" }),
    params: synthesizeSpeechParams,
  });
  console.log(url);
})();

// Synthesize with polly client.
(async () => {
  let url = await getSynthesizeSpeechUrl({
    client: new PollyClient({ region: "us-east-1" }),
    params: synthesizeSpeechParams,
  });
  console.log(url);
})();
```
