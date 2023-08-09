# @aws-sdk/client-transcribe-streaming

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-transcribe-streaming/latest.svg)](https://www.npmjs.com/package/@aws-sdk/client-transcribe-streaming)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-transcribe-streaming.svg)](https://www.npmjs.com/package/@aws-sdk/client-transcribe-streaming)

## Introduction

Amazon Transcribe streaming enables you to send an audio stream and receive back a stream of text in real time.
The API makes it easy for developers to add real-time speech-to-text capability to their applications. It can be used
for a variety of purposes. For example:

- Streaming transcriptions can generate real-time subtitles for live broadcast media.
- Lawyers can make real-time annotations on top of streaming transcriptions during courtroom depositions.
- Video game chat can be transcribed in real time so that hosts can moderate content or run real-time analysis.
- Streaming transcriptions can provide assistance to the hearing impaired.

The JavaScript SDK Transcribe Streaming client encapsulates the API into a JavaScript library that can be run on
browsers, Node.js and _potentially_ React Native. By default, the client uses HTTP/2 connection on Node.js, and uses
`WebSocket` connection on browsers and React Native.

## Installing

To install the this package, simply type add or install @aws-sdk/client-transcribe-streaming
using your favorite package manager:

- `npm install @aws-sdk/client-transcribe-streaming`
- `yarn add @aws-sdk/client-transcribe-streaming`
- `pnpm add @aws-sdk/client-transcribe-streaming`

## Getting Started

In the sections bellow, we will explain the library by an example of using `startStreamTranscription` method to
transcribe English speech to text.

If you haven't, please read [the root README](../../README.md) for guidance for creating a sample application and
installation. After installation, in the `index.js`, you can import the Transcribe Streaming client like:

```js
// ES5 example
const { TranscribeStreamingClient, StartStreamTranscriptionCommand } = require("@aws-sdk/client-transcribe-streaming");
```

If `require` is not available on the platform you are working on(browsers). You can import the client like:

```js
// ES6+ example
import {
  TranscribeStreamingClient,
  StartMedicalStreamTranscriptionCommand,
} from "@aws-sdk/client-transcribe-streaming";
```

## Constructing the Service Client

You can create a service client like bellow:

```js
const client = new TranscribeStreamingClient({
  region,
  credentials,
});
// region and credentials are optional in Node.js
```

## Acquire Speech Stream

The Transcribe Streaming client accepts streaming speech input as an [async iterable]. You can construct them from either an async generator or using `Symbol.asyncIterable` to emit binary chunks.

Here's an example of using async generator:

```js
const audioStream = async function* () {
  await device.start();
  while (device.ends !== true) {
    const chunk = await device.read();
    yield chunk; /* yield binary chunk */
  }
};
```

Then you need to construct the binary chunk into an audio chunk shape that can be recognized by the SDK:

```js
const audioStream = async function* () {
  for await (const chunk of audioSource()) {
    yield { AudioEvent: { AudioChunk: chunk } };
  }
};
```

### Acquire from Node.js Stream API

In Node.js you will mostly acquire the speech in [Stream API], from HTTP request or devices. Stream API in Node.js (>=
10.0.0) itself is an async iterable. You can supply the streaming into the SDK input without explicit convert. You
only need to construct the audio chunk shape that can be recognized by the SDK:

```js
const audioSource = req; //Incoming message
const audioStream = async function* () {
  for await (const payloadChunk of audioSource) {
    yield { AudioEvent: { AudioChunk: payloadChunk } };
  }
};
```

If you see don't limit the chunk size on the client side, for example, streams from `fs`, you might see
`The chunk is too big` error from the Transcribe Streaming. You can solve it by setting the [`HighWaterMark`][readable hightwatermark]:

```js
const { PassThrough } = require("stream");
const { createReadStream } = require("fs");
const audioSource = createReadStream("path/to/speech.wav");
const audioPayloadStream = new PassThrough({ highWaterMark: 1 * 1024 }); // Stream chunk less than 1 KB
audioSource.pipe(audioPayloadStream);
const audioStream = async function* () {
  for await (const payloadChunk of audioPayloadStream) {
    yield { AudioEvent: { AudioChunk: payloadChunk } };
  }
};
```

Depending on the audio source, you may need to [PCM encode](#PCM-encoding) you audio chunk.

### Acquire from Browsers

The Transcribe Streaming SDK client also supports streaming from browsers. You can acquire the microphone data through
[`getUserMedia` API][getusermedia api]. Note that this API is supported by [a subset of browsers][getusermedia support].
Here's a code snippet of acquiring microphone audio stream using [`microphone-stream`][microphone-stream]

```js
const mic = require("microphone-stream");
// this part should be put into an async function
micStream.setStream(
  await window.navigator.mediaDevices.getUserMedia({
    video: false,
    audio: true,
  })
);
const audioStream = async function* () {
  for await (const chunk of micStream) {
    yield { AudioEvent: { AudioChunk: pcmEncodeChunk(chunk) /* pcm Encoding is optional depending on the source */ } };
  }
};
```

You can find the a full front-end example [here][front-end example repo]

#### PCM encoding

Currently Transcribe Streaming service only accepts [PCM][pcm] encoding. If your audio source is not already encoded,
you need to PCM encoding the chunks. Here's an example:

```js
const pcmEncodeChunk = (chunk) => {
  const input = mic.toRaw(chunk);
  var offset = 0;
  var buffer = new ArrayBuffer(input.length * 2);
  var view = new DataView(buffer);
  for (var i = 0; i < input.length; i++, offset += 2) {
    var s = Math.max(-1, Math.min(1, input[i]));
    view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7fff, true);
  }
  return Buffer.from(buffer);
};
```

## Send the Speech Stream

```js
const command = new StartStreamTranscriptionCommand({
  // The language code for the input audio. Valid values are en-GB, en-US, es-US, fr-CA, and fr-FR
  LanguageCode: "en-US",
  // The encoding used for the input audio. The only valid value is pcm.
  MediaEncoding: "pcm",
  // The sample rate of the input audio in Hertz. We suggest that you use 8000 Hz for low-quality audio and 16000 Hz for
  // high-quality audio. The sample rate must match the sample rate in the audio file.
  MediaSampleRateHertz: 44100,
  AudioStream: audioStream(),
});
const response = await client.send(command);
```

## Handling Text Stream

If the request succeeds, you will get a response containing the streaming transcript like [this][response data example].
Just like the input speech stream, the transcript stream is an [async iterable][async iterable] emitting the partial
transcripts. Here is a code snippet of accessing the transcripts

```js
// This snippet should be put into an async function
for await (const event of response.TranscriptResultStream) {
  if (event.TranscriptEvent) {
    const message = event.TranscriptEvent;
    // Get multiple possible results
    const results = event.TranscriptEvent.Transcript.Results;
    // Print all the possible transcripts
    results.map((result) => {
      (result.Alternatives || []).map((alternative) => {
        const transcript = alternative.Items.map((item) => item.Content).join(" ");
        console.log(transcript);
      });
    });
  }
}
```

### Pipe Transcripts Stream

In Node.js, you can pipe this `TranscriptResultStream` to other destinations easily with the [`from` API][readable.from]:

```js
const { Readable } = require("stream");
const transcriptsStream = Readable.from(response.TranscriptResultStream);
transcriptsStream.pipe(/* some destinations */);
```

## Error Handling

If you are using `async...await` style code, you are able to catch the errors with `try...catch` block. There are 2
categories of exceptions can be thrown:

- Immediate exceptions thrown before transcription is started, like signature
  exceptions, invalid parameters exceptions, and network errors;
- Streaming exceptions that happens after transcription is
  started, like `InternalFailureException` or `ConflictException`.

For immediate exceptions, the SDK client will retry the request if the error is retryable, like network errors. You can
config the client to behave as you intend to.

For streaming exceptions, because the streaming transcription is already
started, client cannot retry the request automatically. The client will throw these exceptions and users can handle the
stream behavior accordingly.

Here's an example of error handling flow:

```js
try {
  const response = await client.send(command);
  await handleResponse(response);
} catch (e) {
  if (e instanceof InternalFailureException) {
    /* handle InternalFailureException */
  } else if (e instanceof ConflictException) {
    /* handle ConflictException */
  }
} finally {
  /* clean resources like input stream */
}
```

## Notes for React Native

This package is compatible with React Native (>= 0.60). However, it is not tested with any React Native libraries that
converts microphone record into streaming data. Community input for integrating streaming microphone record data is
welcome.

Thank you for reading this guide. If you want to know more about how streams are encoded, how connection is established,
please refer to the [Service API guide][service api guide].

## Contributing

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-transcribe-streaming`
package is updated. To contribute to client you can check our
[generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more informatio

[async iterable]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of
[stream api]: https://nodejs.org/docs/latest-v12.x/api/stream.html
[readable hightwatermark]: https://nodejs.org/docs/latest-v12.x/api/stream.html#stream_readable_readablehighwatermark
[getusermedia api]: https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
[getusermedia support]: https://caniuse.com/#search=getusermedia
[microphone-stream]: https://www.npmjs.com/package/microphone-stream
[front-end example repo]: https://github.com/aws-samples/amazon-transcribe-websocket-static
[pcm]: https://en.wikipedia.org/wiki/Pulse-code_modulation
[response data example]: https://docs.aws.amazon.com/transcribe/latest/dg/streaming.html
[readable.from]: https://nodejs.org/docs/latest-v12.x/api/stream.html#stream_stream_readable_from_iterable_options
[service api guide]: https://docs.aws.amazon.com/transcribe/latest/dg/streaming.html
