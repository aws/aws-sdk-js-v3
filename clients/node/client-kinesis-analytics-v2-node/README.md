# @aws-sdk/client-kinesis-analytics-v2-node

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-kinesis-analytics-v2-node/preview.svg)](https://www.npmjs.com/package/@aws-sdk/client-kinesis-analytics-v2-node)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-kinesis-analytics-v2-node.svg)](https://www.npmjs.com/package/@aws-sdk/client-kinesis-analytics-v2-node)

## Description

<p>Amazon Kinesis Data Analytics is a fully managed service that you can use to process and analyze streaming data using SQL or Java. The service enables you to quickly author and run SQL or Java code against streaming sources to perform time series analytics, feed real-time dashboards, and create real-time metrics.</p>

## Installing

To install the this package using NPM, simply type the following into a terminal window:

```
npm install @aws-sdk/client-kinesis-analytics-v2-node
```

## Getting Started

### Import

The AWS SDK is modulized by clients and commands in CommonJS modules. To send a request, you only need to import the client(`KinesisAnalyticsV2Client`) and the commands you need, for example `AddApplicationCloudWatchLoggingOptionCommand`:

```javascript
//JavaScript
const {
  KinesisAnalyticsV2Client,
  AddApplicationCloudWatchLoggingOptionCommand
} = require("@aws-sdk/client-kinesis-analytics-v2-node");
```

```javascript
//TypeScript
import {
  KinesisAnalyticsV2Client,
  AddApplicationCloudWatchLoggingOptionCommand
} from "@aws-sdk/client-kinesis-analytics-v2-node";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region). For more information you can refer to the [API reference][].
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```javascript
const kinesisAnalyticsV2 = new KinesisAnalyticsV2Client({region: 'region'});
//clients can be shared by different commands
const params = {
  ApplicationName: /**a string value*/,
  CurrentApplicationVersionId: /**a integer value*/,
  CloudWatchLoggingOption: { /**an object specifying CloudWatchLoggingOption*/ },
};
const addApplicationCloudWatchLoggingOptionCommand = new AddApplicationCloudWatchLoggingOptionCommand(params);
kinesisAnalyticsV2.send(addApplicationCloudWatchLoggingOptionCommand).then(data => {
    // do something
}).catch(error => {
    // error handling
})
```

In addition to using promises, there are 2 other ways to send a request:

```javascript
// async/await
try {
  const data = await kinesisAnalyticsV2.send(
    addApplicationCloudWatchLoggingOptionCommand
  );
  // do something
} catch (error) {
  // error handling
}
```

```javascript
// callback
kinesisAnalyticsV2.send(
  addApplicationCloudWatchLoggingOptionCommand,
  (err, data) => {
    //do something
  }
);
```

The SDK can also send requests using the simplified callback style from version 2 of the SDK.

```javascript
import * as AWS from "@aws-sdk/client-kinesis-analytics-v2-node";
const kinesisAnalyticsV2 = new AWS.KinesisAnalyticsV2({ region: "region" });
kinesisAnalyticsV2.addApplicationCloudWatchLoggingOption(
  params,
  (err, data) => {
    //do something
  }
);
```

### Troubleshooting

When the service returns an exception, the error will include the exception information, as well as response metadata (e.g. request id).

```javascript
try {
  const data = await kinesisAnalyticsV2.send(
    addApplicationCloudWatchLoggingOptionCommand
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/@aws-sdk/client-kinesis-analytics-v2-node' package is updated. To contribute to SDK you can checkout our [code generator package][].

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

[code generator package]: https://github.com/aws/aws-sdk-js-v3/tree/master/packages/service-types-generator
[api reference]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
