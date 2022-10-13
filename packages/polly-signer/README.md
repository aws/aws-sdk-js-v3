# @aws-sdk/polly-signer

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/polly-signer/latest.svg)](https://www.npmjs.com/package/@aws-sdk/polly-signer)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/polly-signer.svg)](https://www.npmjs.com/package/@aws-sdk/polly-signer)

This package provides a presigner based on signature V4 that will attempt to
generate signed url for polly audio.

### Get Presigned URL with Client and Command

Example Usage:

```js
import { Polly, PollyClient } from "@aws-sdk/client-polly";

import { getPresignedSynthesizeSpeechUrl } from "@aws-sdk/polly-signer";

const synthesizeSpeechParams = {
  Text: "Hello world, the polly presigner is really cool!",
  OutputFormat: "mp3",
  VoiceId: "Kimberly",
};

// Synthesize with full polly.
(async () => {
  let url = await getPresignedSynthesizeSpeechUrl({
    client: new Polly({ region: "us-east-1" }),
    params: synthesizeSpeechParams,
  });
  console.log(url);
})();

// Synthesize with polly client.
(async () => {
  let url = await getPresignedSynthesizeSpeechUrl({
    client: new PollyClient({ region: "us-east-1" }),
    params: synthesizeSpeechParams,
  });
  console.log(url);
})();
```
