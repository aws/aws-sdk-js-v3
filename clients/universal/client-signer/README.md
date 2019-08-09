# @aws-sdk/client-signer

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-signer/preview.svg)](https://www.npmjs.com/package/@aws-sdk/client-signer)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-signer.svg)](https://www.npmjs.com/package/@aws-sdk/client-signer)

## Description

<p>You can use Code Signing for Amazon FreeRTOS (AWS Signer) to sign code that you created for any of the IoT devices that Amazon Web Services supports. AWS Signer is integrated with Amazon FreeRTOS, AWS Certificate Manager, and AWS CloudTrail. Amazon FreeRTOS customers can use AWS Signer to sign code images before making them available for microcontrollers. You can use ACM to import third-party certificates to be used by AWS Signer. For general information about using AWS Signer, see the <a href="http://docs.aws.amazon.com/signer/latest/developerguide/Welcome.html">Code Signing for Amazon FreeRTOS Developer Guide</a>.</p>

## Installing

To install the this package using NPM, simply type the following into a terminal window:

```
npm install @aws-sdk/client-signer
```

## Getting Started

### Import

The AWS SDK is modulized by clients and commands in CommonJS modules. To send a request, you only need to import the client(`signerClient`) and the commands you need, for example `CancelSigningProfileCommand`:

```javascript
//javascript
const { signerClient } = require("@aws-sdk/client-signer/signerClient");
const {
  CancelSigningProfileCommand
} = require("@aws-sdk/client-signer/commands/CancelSigningProfileCommand");
```

```javascript
//typescript
const { signerClient } = import '@aws-sdk/client-signer/signerClient';
const { CancelSigningProfileCommand } = import '@aws-sdk/client-signer/commands/CancelSigningProfileCommand';
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region). For more information you can refer to the [API reference][].
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```javascript
const signer = new signerClient({region: 'region'});
//clients can be shared by different commands
const params = {
  profileName: /**a string value*/,
};
const cancelSigningProfileCommand = new CancelSigningProfileCommand(params);
signer.send(cancelSigningProfileCommand).then(data => {
    // do something
}).catch(error => {
    // error handling
})
```

In addition to using promises, there are 2 other ways to send a request:

```javascript
// async/await
try {
  const data = await signer.send(cancelSigningProfileCommand);
  // do something
} catch (error) {
  // error handling
}
```

```javascript
// callback
signer.send(cancelSigningProfileCommand, (err, data) => {
  //do something
});
```

The SDK can also send requests using the simplified callback style from version 2 of the SDK.

```javascript
import * as AWS from "@aws-sdk/@aws-sdk/client-signer/signer";
const signer = new AWS.signer({ region: "region" });
signer.cancelSigningProfile(params, (err, data) => {
  //do something
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information, as well as response metadata (e.g. request id).

```javascript
try {
  const data = await signer.send(cancelSigningProfileCommand);
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/@aws-sdk/client-signer' package is updated. To contribute to SDK you can checkout our [code generator package][].

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

[code generator package]: https://github.com/aws/aws-sdk-js-v3/tree/master/packages/service-types-generator
[api reference]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
