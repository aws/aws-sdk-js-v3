# @aws-sdk/client-iot-1click-devices-service

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-iot-1click-devices-service/preview.svg)](https://www.npmjs.com/package/@aws-sdk/client-iot-1click-devices-service)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-iot-1click-devices-service.svg)](https://www.npmjs.com/package/@aws-sdk/client-iot-1click-devices-service)

## Description

<p>Describes all of the AWS IoT 1-Click device-related API operations for the service.
 Also provides sample requests, responses, and errors for the supported web services
 protocols.</p>

## Installing

To install the this package using NPM, simply type the following into a terminal window:

```
npm install @aws-sdk/client-iot-1click-devices-service
```

## Getting Started

### Import

The AWS SDK is modulized by clients and commands in CommonJS modules. To send a request, you only need to import the client(`IoT1ClickDevicesServiceClient`) and the commands you need, for example `ClaimDevicesByClaimCodeCommand`:

```javascript
//javascript
const {
  IoT1ClickDevicesServiceClient
} = require("@aws-sdk/client-iot-1click-devices-service/IoT1ClickDevicesServiceClient");
const {
  ClaimDevicesByClaimCodeCommand
} = require("@aws-sdk/client-iot-1click-devices-service/commands/ClaimDevicesByClaimCodeCommand");
```

```javascript
//typescript
const { IoT1ClickDevicesServiceClient } = import '@aws-sdk/client-iot-1click-devices-service/IoT1ClickDevicesServiceClient';
const { ClaimDevicesByClaimCodeCommand } = import '@aws-sdk/client-iot-1click-devices-service/commands/ClaimDevicesByClaimCodeCommand';
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region). For more information you can refer to the [API reference][].
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```javascript
const ioT1ClickDevicesService = new IoT1ClickDevicesServiceClient({region: 'region'});
//clients can be shared by different commands
const params = {
  ClaimCode: /**a string value*/,
};
const claimDevicesByClaimCodeCommand = new ClaimDevicesByClaimCodeCommand(params);
ioT1ClickDevicesService.send(claimDevicesByClaimCodeCommand).then(data => {
    // do something
}).catch(error => {
    // error handling
})
```

In addition to using promises, there are 2 other ways to send a request:

```javascript
// async/await
try {
  const data = await ioT1ClickDevicesService.send(
    claimDevicesByClaimCodeCommand
  );
  // do something
} catch (error) {
  // error handling
}
```

```javascript
// callback
ioT1ClickDevicesService.send(claimDevicesByClaimCodeCommand, (err, data) => {
  //do something
});
```

The SDK can also send requests using the simplified callback style from version 2 of the SDK.

```javascript
import * as AWS from "@aws-sdk/@aws-sdk/client-iot-1click-devices-service/IoT1ClickDevicesService";
const ioT1ClickDevicesService = new AWS.IoT1ClickDevicesService({
  region: "region"
});
ioT1ClickDevicesService.claimDevicesByClaimCode(params, (err, data) => {
  //do something
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information, as well as response metadata (e.g. request id).

```javascript
try {
  const data = await ioT1ClickDevicesService.send(
    claimDevicesByClaimCodeCommand
  );
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/@aws-sdk/client-iot-1click-devices-service' package is updated. To contribute to SDK you can checkout our [code generator package][].

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

[code generator package]: https://github.com/aws/aws-sdk-js-v3/tree/master/packages/service-types-generator
[api reference]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
