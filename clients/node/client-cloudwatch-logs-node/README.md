# @aws-sdk/client-cloudwatch-logs-node

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-cloudwatch-logs-node/preview.svg)](https://www.npmjs.com/package/@aws-sdk/client-cloudwatch-logs-node)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-cloudwatch-logs-node.svg)](https://www.npmjs.com/package/@aws-sdk/client-cloudwatch-logs-node)

## Description

<p>You can use Amazon CloudWatch Logs to monitor, store, and access your log files from Amazon EC2 instances, AWS CloudTrail, or other sources. You can then retrieve the associated log data from CloudWatch Logs using the CloudWatch console, CloudWatch Logs commands in the AWS CLI, CloudWatch Logs API, or CloudWatch Logs SDK.</p> <p>You can use CloudWatch Logs to:</p> <ul> <li> <p> <b>Monitor logs from EC2 instances in real-time</b>: You can use CloudWatch Logs to monitor applications and systems using log data. For example, CloudWatch Logs can track the number of errors that occur in your application logs and send you a notification whenever the rate of errors exceeds a threshold that you specify. CloudWatch Logs uses your log data for monitoring; so, no code changes are required. For example, you can monitor application logs for specific literal terms (such as "NullReferenceException") or count the number of occurrences of a literal term at a particular position in log data (such as "404" status codes in an Apache access log). When the term you are searching for is found, CloudWatch Logs reports the data to a CloudWatch metric that you specify.</p> </li> <li> <p> <b>Monitor AWS CloudTrail logged events</b>: You can create alarms in CloudWatch and receive notifications of particular API activity as captured by CloudTrail and use the notification to perform troubleshooting.</p> </li> <li> <p> <b>Archive log data</b>: You can use CloudWatch Logs to store your log data in highly durable storage. You can change the log retention setting so that any log events older than this setting are automatically deleted. The CloudWatch Logs agent makes it easy to quickly send both rotated and non-rotated log data off of a host and into the log service. You can then access the raw log data when you need it.</p> </li> </ul>

## Installing

To install the this package using NPM, simply type the following into a terminal window:

```
npm install @aws-sdk/client-cloudwatch-logs-node
```

## Getting Started

### Import

The AWS SDK is modulized by clients and commands in CommonJS modules. To send a request, you only need to import the client(`CloudWatchLogsClient`) and the commands you need, for example `AssociateKmsKeyCommand`:

```javascript
//JavaScript
const {
  CloudWatchLogsClient
} = require("@aws-sdk/client-cloudwatch-logs-node/CloudWatchLogsClient");
const {
  AssociateKmsKeyCommand
} = require("@aws-sdk/client-cloudwatch-logs-node/commands/AssociateKmsKeyCommand");
```

```javascript
//TypeScript
import { CloudWatchLogsClient } from "@aws-sdk/client-cloudwatch-logs-node/CloudWatchLogsClient";
import { AssociateKmsKeyCommand } from "@aws-sdk/client-cloudwatch-logs-node/commands/AssociateKmsKeyCommand";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region). For more information you can refer to the [API reference][].
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```javascript
const cloudWatchLogs = new CloudWatchLogsClient({region: 'region'});
//clients can be shared by different commands
const params = {
  logGroupName: /**a string value*/,
  kmsKeyId: /**a string value*/,
};
const associateKmsKeyCommand = new AssociateKmsKeyCommand(params);
cloudWatchLogs.send(associateKmsKeyCommand).then(data => {
    // do something
}).catch(error => {
    // error handling
})
```

In addition to using promises, there are 2 other ways to send a request:

```javascript
// async/await
try {
  const data = await cloudWatchLogs.send(associateKmsKeyCommand);
  // do something
} catch (error) {
  // error handling
}
```

```javascript
// callback
cloudWatchLogs.send(associateKmsKeyCommand, (err, data) => {
  //do something
});
```

The SDK can also send requests using the simplified callback style from version 2 of the SDK.

```javascript
import * as AWS from "@aws-sdk/@aws-sdk/client-cloudwatch-logs-node/CloudWatchLogs";
const cloudWatchLogs = new AWS.CloudWatchLogs({ region: "region" });
cloudWatchLogs.associateKmsKey(params, (err, data) => {
  //do something
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information, as well as response metadata (e.g. request id).

```javascript
try {
  const data = await cloudWatchLogs.send(associateKmsKeyCommand);
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/@aws-sdk/client-cloudwatch-logs-node' package is updated. To contribute to SDK you can checkout our [code generator package][].

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

[code generator package]: https://github.com/aws/aws-sdk-js-v3/tree/master/packages/service-types-generator
[api reference]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
