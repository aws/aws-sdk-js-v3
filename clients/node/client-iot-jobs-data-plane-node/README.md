# @aws-sdk/client-iot-jobs-data-plane-node

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-iot-jobs-data-plane-node/preview.svg)](https://www.npmjs.com/package/@aws-sdk/client-iot-jobs-data-plane-node)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-iot-jobs-data-plane-node.svg)](https://www.npmjs.com/package/@aws-sdk/client-iot-jobs-data-plane-node)

## Description

<p>AWS IoT Jobs is a service that allows you to define a set of jobs — remote operations that are sent to and executed on one or more devices connected to AWS IoT. For example, you can define a job that instructs a set of devices to download and install application or firmware updates, reboot, rotate certificates, or perform remote troubleshooting operations.</p> <p> To create a job, you make a job document which is a description of the remote operations to be performed, and you specify a list of targets that should perform the operations. The targets can be individual things, thing groups or both.</p> <p> AWS IoT Jobs sends a message to inform the targets that a job is available. The target starts the execution of the job by downloading the job document, performing the operations it specifies, and reporting its progress to AWS IoT. The Jobs service provides commands to track the progress of a job on a specific target and for all the targets of the job</p>

## Installing

To install the this package using NPM, simply type the following into a terminal window:

```
npm install @aws-sdk/client-iot-jobs-data-plane-node
```

## Getting Started

### Import

The AWS SDK is modulized by clients and commands in CommonJS modules. To send a request, you only need to import the client(`IoTJobsDataPlaneClient`) and the commands you need, for example `DescribeJobExecutionCommand`:

```javascript
//JavaScript
const {
  IoTJobsDataPlaneClient,
  DescribeJobExecutionCommand
} = require("@aws-sdk/client-iot-jobs-data-plane-node");
```

```javascript
//TypeScript
import {
  IoTJobsDataPlaneClient,
  DescribeJobExecutionCommand
} from "@aws-sdk/client-iot-jobs-data-plane-node";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region). For more information you can refer to the [API reference][].
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```javascript
const ioTJobsDataPlane = new IoTJobsDataPlaneClient({region: 'region'});
//clients can be shared by different commands
const params = {
  jobId: /**a string value*/,
  thingName: /**a string value*/,
};
const describeJobExecutionCommand = new DescribeJobExecutionCommand(params);
ioTJobsDataPlane.send(describeJobExecutionCommand).then(data => {
    // do something
}).catch(error => {
    // error handling
})
```

In addition to using promises, there are 2 other ways to send a request:

```javascript
// async/await
try {
  const data = await ioTJobsDataPlane.send(describeJobExecutionCommand);
  // do something
} catch (error) {
  // error handling
}
```

```javascript
// callback
ioTJobsDataPlane.send(describeJobExecutionCommand, (err, data) => {
  //do something
});
```

The SDK can also send requests using the simplified callback style from version 2 of the SDK.

```javascript
import * as AWS from "@aws-sdk/client-iot-jobs-data-plane-node";
const ioTJobsDataPlane = new AWS.IoTJobsDataPlane({ region: "region" });
ioTJobsDataPlane.describeJobExecution(params, (err, data) => {
  //do something
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information, as well as response metadata (e.g. request id).

```javascript
try {
  const data = await ioTJobsDataPlane.send(describeJobExecutionCommand);
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/@aws-sdk/client-iot-jobs-data-plane-node' package is updated. To contribute to SDK you can checkout our [code generator package][].

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

[code generator package]: https://github.com/aws/aws-sdk-js-v3/tree/master/packages/service-types-generator
[api reference]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
