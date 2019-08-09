# @aws-sdk/client-iot

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-iot/preview.svg)](https://www.npmjs.com/package/@aws-sdk/client-iot)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-iot.svg)](https://www.npmjs.com/package/@aws-sdk/client-iot)

## Description

<fullname>AWS IoT</fullname> <p>AWS IoT provides secure, bi-directional communication between Internet-connected devices (such as sensors, actuators, embedded devices, or smart appliances) and the AWS cloud. You can discover your custom IoT-Data endpoint to communicate with, configure rules for data processing and integration with other services, organize resources associated with each device (Registry), configure logging, and create and manage policies and credentials to authenticate devices.</p> <p>For more information about how AWS IoT works, see the <a href="https://docs.aws.amazon.com/iot/latest/developerguide/aws-iot-how-it-works.html">Developer Guide</a>.</p> <p>For information about how to use the credentials provider for AWS IoT, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/authorizing-direct-aws.html">Authorizing Direct Calls to AWS Services</a>.</p>

## Installing

To install the this package using NPM, simply type the following into a terminal window:

```
npm install @aws-sdk/client-iot
```

## Getting Started

### Import

The AWS SDK is modulized by clients and commands in CommonJS modules. To send a request, you only need to import the client(`IoTClient`) and the commands you need, for example `AcceptCertificateTransferCommand`:

```javascript
//javascript
const { IoTClient } = require("@aws-sdk/client-iot/IoTClient");
const {
  AcceptCertificateTransferCommand
} = require("@aws-sdk/client-iot/commands/AcceptCertificateTransferCommand");
```

```javascript
//typescript
const { IoTClient } = import '@aws-sdk/client-iot/IoTClient';
const { AcceptCertificateTransferCommand } = import '@aws-sdk/client-iot/commands/AcceptCertificateTransferCommand';
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region). For more information you can refer to the [API reference][].
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```javascript
const ioT = new IoTClient({region: 'region'});
//clients can be shared by different commands
const params = {
  certificateId: /**a string value*/,
};
const acceptCertificateTransferCommand = new AcceptCertificateTransferCommand(params);
ioT.send(acceptCertificateTransferCommand).then(data => {
    // do something
}).catch(error => {
    // error handling
})
```

In addition to using promises, there are 2 other ways to send a request:

```javascript
// async/await
try {
  const data = await ioT.send(acceptCertificateTransferCommand);
  // do something
} catch (error) {
  // error handling
}
```

```javascript
// callback
ioT.send(acceptCertificateTransferCommand, (err, data) => {
  //do something
});
```

The SDK can also send requests using the simplified callback style from version 2 of the SDK.

```javascript
import * as AWS from "@aws-sdk/@aws-sdk/client-iot/IoT";
const ioT = new AWS.IoT({ region: "region" });
ioT.acceptCertificateTransfer(params, (err, data) => {
  //do something
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information, as well as response metadata (e.g. request id).

```javascript
try {
  const data = await ioT.send(acceptCertificateTransferCommand);
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/@aws-sdk/client-iot' package is updated. To contribute to SDK you can checkout our [code generator package][].

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

[code generator package]: https://github.com/aws/aws-sdk-js-v3/tree/master/packages/service-types-generator
[api reference]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
