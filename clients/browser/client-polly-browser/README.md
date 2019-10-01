# @aws-sdk/client-polly-browser

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-polly-browser/preview.svg)](https://www.npmjs.com/package/@aws-sdk/client-polly-browser)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-polly-browser.svg)](https://www.npmjs.com/package/@aws-sdk/client-polly-browser)

## Description

<p>Amazon Polly is a web service that makes it easy to synthesize speech from text.</p> <p>The Amazon Polly service provides API operations for synthesizing high-quality speech from plain text and Speech Synthesis Markup Language (SSML), along with managing pronunciations lexicons that enable you to get the best results for your application domain.</p>

## Installing

To install the this package using NPM, simply type the following into a terminal window:

```
npm install @aws-sdk/client-polly-browser
```

## Getting Started

### Import

The AWS SDK is modulized by clients and commands in CommonJS modules. To send a request, you only need to import the client(`PollyClient`) and the commands you need, for example `DeleteLexiconCommand`:

```javascript
//JavaScript
const {
  PollyClient,
  DeleteLexiconCommand
} = require("@aws-sdk/client-polly-browser");
```

```javascript
//TypeScript
import {
  PollyClient,
  DeleteLexiconCommand
} from "@aws-sdk/client-polly-browser";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region). For more information you can refer to the [API reference][].
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```javascript
const polly = new PollyClient({region: 'region'});
//clients can be shared by different commands
const params = {
  Name: /**a string value*/,
};
const deleteLexiconCommand = new DeleteLexiconCommand(params);
polly.send(deleteLexiconCommand).then(data => {
    // do something
}).catch(error => {
    // error handling
})
```

In addition to using promises, there are 2 other ways to send a request:

```javascript
// async/await
try {
  const data = await polly.send(deleteLexiconCommand);
  // do something
} catch (error) {
  // error handling
}
```

```javascript
// callback
polly.send(deleteLexiconCommand, (err, data) => {
  //do something
});
```

The SDK can also send requests using the simplified callback style from version 2 of the SDK.

```javascript
import * as AWS from "@aws-sdk/client-polly-browser";
const polly = new AWS.Polly({ region: "region" });
polly.deleteLexicon(params, (err, data) => {
  //do something
});
```

For operations containing stream response like `SynthesizeSpeech()`, you can get response stream by accessing to streaming member. e.g. data.AudioStream.getReader().read().then(/_ do something and continue reading _/).(`data` is the resolved response object)

### Troubleshooting

When the service returns an exception, the error will include the exception information, as well as response metadata (e.g. request id).

```javascript
try {
  const data = await polly.send(deleteLexiconCommand);
  // do something
} catch (error) {
  const metadata = error.$metadata;
  console.log(
    `requestId: ${metadata.requestId}
cfId: ${metadata.cfId}
extendedRequestId: ${metadata.extendedRequestId}`
  );
  /*
The keys within exceptions are also parsed. You can access them by specifying exception names:
    if(error.name === 'SomeServiceException') {
        const value = error.specialKeyInException;
    }
*/
}
```

## Getting Help

Please use these community resources for getting help. We use the GitHub issues for tracking bugs and feature requests and have limited bandwidth to address them.

- Ask a question on [StackOverflow](https://stackoverflow.com/questions/tagged/aws-sdk-js) and tag it with `aws-sdk-js`
- Come join the AWS JavaScript community on [gitter](https://gitter.im/aws/aws-sdk-js-v3)
- If it turns out that you may have found a bug, please [open an issue](https://github.com/aws/aws-sdk-js-v3/issues)

## Contributing

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/@aws-sdk/client-polly-browser' package is updated. To contribute to SDK you can checkout our [code generator package][].

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

[code generator package]: https://github.com/aws/aws-sdk-js-v3/tree/master/packages/service-types-generator
[api reference]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
