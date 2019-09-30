# @aws-sdk/client-lex-runtime-service-browser

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-lex-runtime-service-browser/preview.svg)](https://www.npmjs.com/package/@aws-sdk/client-lex-runtime-service-browser)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-lex-runtime-service-browser.svg)](https://www.npmjs.com/package/@aws-sdk/client-lex-runtime-service-browser)

## Description

<p>Amazon Lex provides both build and runtime endpoints. Each endpoint provides a set of operations (API). Your conversational bot uses the runtime API to understand user utterances (user input text or voice). For example, suppose a user says "I want pizza", your bot sends this input to Amazon Lex using the runtime API. Amazon Lex recognizes that the user request is for the OrderPizza intent (one of the intents defined in the bot). Then Amazon Lex engages in user conversation on behalf of the bot to elicit required information (slot values, such as pizza size and crust type), and then performs fulfillment activity (that you configured when you created the bot). You use the build-time API to create and manage your Amazon Lex bot. For a list of build-time operations, see the build-time API, . </p>

## Installing

To install the this package using NPM, simply type the following into a terminal window:

```
npm install @aws-sdk/client-lex-runtime-service-browser
```

## Getting Started

### Import

The AWS SDK is modulized by clients and commands in CommonJS modules. To send a request, you only need to import the client(`LexRuntimeServiceClient`) and the commands you need, for example `PostContentCommand`:

```javascript
//JavaScript
const {
  LexRuntimeServiceClient,
  PostContentCommand
} = require("@aws-sdk/client-lex-runtime-service-browser");
```

```javascript
//TypeScript
import {
  LexRuntimeServiceClient,
  PostContentCommand
} from "@aws-sdk/client-lex-runtime-service-browser";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region). For more information you can refer to the [API reference][].
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```javascript
const lexRuntimeService = new LexRuntimeServiceClient({region: 'region'});
//clients can be shared by different commands
const params = {
  botName: /**a string value*/,
  botAlias: /**a string value*/,
  userId: /**a string value*/,
  contentType: /**a string value*/,
  inputStream: /**a blob value*/
  /**You can supply readable stream to streaming input. e.g. (await fetch(input)).body */,
};
const postContentCommand = new PostContentCommand(params);
lexRuntimeService.send(postContentCommand).then(data => {
    // do something
}).catch(error => {
    // error handling
})
```

In addition to using promises, there are 2 other ways to send a request:

```javascript
// async/await
try {
  const data = await lexRuntimeService.send(postContentCommand);
  // do something
} catch (error) {
  // error handling
}
```

```javascript
// callback
lexRuntimeService.send(postContentCommand, (err, data) => {
  //do something
});
```

The SDK can also send requests using the simplified callback style from version 2 of the SDK.

```javascript
import * as AWS from "@aws-sdk/client-lex-runtime-service-browser";
const lexRuntimeService = new AWS.LexRuntimeService({ region: "region" });
lexRuntimeService.postContent(params, (err, data) => {
  //do something
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information, as well as response metadata (e.g. request id).

```javascript
try {
  const data = await lexRuntimeService.send(postContentCommand);
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/@aws-sdk/client-lex-runtime-service-browser' package is updated. To contribute to SDK you can checkout our [code generator package][].

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

[code generator package]: https://github.com/aws/aws-sdk-js-v3/tree/master/packages/service-types-generator
[api reference]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
