# @aws-sdk/client-cloudwatch-browser

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-cloudwatch-browser/preview.svg)](https://www.npmjs.com/package/@aws-sdk/client-cloudwatch-browser)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-cloudwatch-browser.svg)](https://www.npmjs.com/package/@aws-sdk/client-cloudwatch-browser)

## Description

<p>Amazon CloudWatch monitors your Amazon Web Services (AWS) resources and the applications you run on AWS in real time. You can use CloudWatch to collect and track metrics, which are the variables you want to measure for your resources and applications.</p> <p>CloudWatch alarms send notifications or automatically change the resources you are monitoring based on rules that you define. For example, you can monitor the CPU usage and disk reads and writes of your Amazon EC2 instances. Then, use this data to determine whether you should launch additional instances to handle increased load. You can also use this data to stop under-used instances to save money.</p> <p>In addition to monitoring the built-in metrics that come with AWS, you can monitor your own custom metrics. With CloudWatch, you gain system-wide visibility into resource utilization, application performance, and operational health.</p>

## Installing

To install the this package using NPM, simply type the following into a terminal window:

```
npm install @aws-sdk/client-cloudwatch-browser
```

## Getting Started

### Import

The AWS SDK is modulized by clients and commands in CommonJS modules. To send a request, you only need to import the client(`CloudWatchClient`) and the commands you need, for example `DeleteAlarmsCommand`:

```javascript
//javascript
const {
  CloudWatchClient
} = require("@aws-sdk/client-cloudwatch-browser/CloudWatchClient");
const {
  DeleteAlarmsCommand
} = require("@aws-sdk/client-cloudwatch-browser/commands/DeleteAlarmsCommand");
```

```javascript
//typescript
const { CloudWatchClient } = import '@aws-sdk/client-cloudwatch-browser/CloudWatchClient';
const { DeleteAlarmsCommand } = import '@aws-sdk/client-cloudwatch-browser/commands/DeleteAlarmsCommand';
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region). For more information you can refer to the [API reference][].
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```javascript
const cloudWatch = new CloudWatchClient({ region: "region" });
//clients can be shared by different commands
const params = {
  AlarmNames: [
    /**a list of string*/
  ]
};
const deleteAlarmsCommand = new DeleteAlarmsCommand(params);
cloudWatch
  .send(deleteAlarmsCommand)
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
  const data = await cloudWatch.send(deleteAlarmsCommand);
  // do something
} catch (error) {
  // error handling
}
```

```javascript
// callback
cloudWatch.send(deleteAlarmsCommand, (err, data) => {
  //do something
});
```

The SDK can also send requests using the simplified callback style from version 2 of the SDK.

```javascript
import * as AWS from "@aws-sdk/@aws-sdk/client-cloudwatch-browser/CloudWatch";
const cloudWatch = new AWS.CloudWatch({ region: "region" });
cloudWatch.deleteAlarms(params, (err, data) => {
  //do something
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information, as well as response metadata (e.g. request id).

```javascript
try {
  const data = await cloudWatch.send(deleteAlarmsCommand);
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/@aws-sdk/client-cloudwatch-browser' package is updated. To contribute to SDK you can checkout our [code generator package][].

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

[code generator package]: https://github.com/aws/aws-sdk-js-v3/tree/master/packages/service-types-generator
[api reference]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
