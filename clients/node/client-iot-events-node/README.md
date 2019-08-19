# @aws-sdk/client-iot-events-node

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-iot-events-node/preview.svg)](https://www.npmjs.com/package/@aws-sdk/client-iot-events-node)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-iot-events-node.svg)](https://www.npmjs.com/package/@aws-sdk/client-iot-events-node)

## Description

<p>AWS IoT Events monitors your equipment or device fleets for failures or changes in operation, and triggers actions when such events occur. AWS IoT Events API commands enable you to create, read, update and delete inputs and detector models, and to list their versions.</p>

## Installing

To install the this package using NPM, simply type the following into a terminal window:

```
npm install @aws-sdk/client-iot-events-node
```

## Getting Started

### Import

The AWS SDK is modulized by clients and commands in CommonJS modules. To send a request, you only need to import the client(`IoTEventsClient`) and the commands you need, for example `CreateDetectorModelCommand`:

```javascript
//JavaScript
const {
  IoTEventsClient
} = require("@aws-sdk/client-iot-events-node/IoTEventsClient");
const {
  CreateDetectorModelCommand
} = require("@aws-sdk/client-iot-events-node/commands/CreateDetectorModelCommand");
```

```javascript
//TypeScript
import { IoTEventsClient } from "@aws-sdk/client-iot-events-node/IoTEventsClient";
import { CreateDetectorModelCommand } from "@aws-sdk/client-iot-events-node/commands/CreateDetectorModelCommand";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region). For more information you can refer to the [API reference][].
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```javascript
const ioTEvents = new IoTEventsClient({region: 'region'});
//clients can be shared by different commands
const params = {
  detectorModelName: /**a string value*/,
  detectorModelDefinition: { /**an object specifying detectorModelDefinition*/ },
  roleArn: /**a string value*/,
};
const createDetectorModelCommand = new CreateDetectorModelCommand(params);
ioTEvents.send(createDetectorModelCommand).then(data => {
    // do something
}).catch(error => {
    // error handling
})
```

In addition to using promises, there are 2 other ways to send a request:

```javascript
// async/await
try {
  const data = await ioTEvents.send(createDetectorModelCommand);
  // do something
} catch (error) {
  // error handling
}
```

```javascript
// callback
ioTEvents.send(createDetectorModelCommand, (err, data) => {
  //do something
});
```

The SDK can also send requests using the simplified callback style from version 2 of the SDK.

```javascript
import * as AWS from "@aws-sdk/@aws-sdk/client-iot-events-node/IoTEvents";
const ioTEvents = new AWS.IoTEvents({ region: "region" });
ioTEvents.createDetectorModel(params, (err, data) => {
  //do something
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information, as well as response metadata (e.g. request id).

```javascript
try {
  const data = await ioTEvents.send(createDetectorModelCommand);
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/@aws-sdk/client-iot-events-node' package is updated. To contribute to SDK you can checkout our [code generator package][].

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

[code generator package]: https://github.com/aws/aws-sdk-js-v3/tree/master/packages/service-types-generator
[api reference]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
