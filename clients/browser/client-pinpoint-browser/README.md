# @aws-sdk/client-pinpoint-browser

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-pinpoint-browser/preview.svg)](https://www.npmjs.com/package/@aws-sdk/client-pinpoint-browser)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-pinpoint-browser.svg)](https://www.npmjs.com/package/@aws-sdk/client-pinpoint-browser)

## Description

<p>Doc Engage API - Amazon Pinpoint API</p>

## Installing

To install the this package using NPM, simply type the following into a terminal window:

```
npm install @aws-sdk/client-pinpoint-browser
```

## Getting Started

### Import

The AWS SDK is modulized by clients and commands in CommonJS modules. To send a request, you only need to import the client(`PinpointClient`) and the commands you need, for example `CreateAppCommand`:

```javascript
//javascript
const {
  PinpointClient
} = require("@aws-sdk/client-pinpoint-browser/PinpointClient");
const {
  CreateAppCommand
} = require("@aws-sdk/client-pinpoint-browser/commands/CreateAppCommand");
```

```javascript
//typescript
const { PinpointClient } = import '@aws-sdk/client-pinpoint-browser/PinpointClient';
const { CreateAppCommand } = import '@aws-sdk/client-pinpoint-browser/commands/CreateAppCommand';
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region). For more information you can refer to the [API reference][].
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```javascript
const pinpoint = new PinpointClient({ region: "region" });
//clients can be shared by different commands
const params = {
  CreateApplicationRequest: {
    /**an object specifying CreateApplicationRequest*/
  }
};
const createAppCommand = new CreateAppCommand(params);
pinpoint
  .send(createAppCommand)
  .then(data => {
    // do something
  })
  .catch(error => {
    // error handling
  });
```

In addition to using promises, there are 2 other ways to send a request:

```javascript
// async/await
try {
  const data = await pinpoint.send(createAppCommand);
  // do something
} catch (error) {
  // error handling
}
```

```javascript
// callback
pinpoint.send(createAppCommand, (err, data) => {
  //do something
});
```

The SDK can also send requests using the simplified callback style from version 2 of the SDK.

```javascript
import * as AWS from "@aws-sdk/@aws-sdk/client-pinpoint-browser/Pinpoint";
const pinpoint = new AWS.Pinpoint({ region: "region" });
pinpoint.createApp(params, (err, data) => {
  //do something
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information, as well as response metadata (e.g. request id).

```javascript
try {
  const data = await pinpoint.send(createAppCommand);
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/@aws-sdk/client-pinpoint-browser' package is updated. To contribute to SDK you can checkout our [code generator package][].

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

[code generator package]: https://github.com/aws/aws-sdk-js-v3/tree/master/packages/service-types-generator
[api reference]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
