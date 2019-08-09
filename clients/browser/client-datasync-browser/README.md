# @aws-sdk/client-datasync-browser

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-datasync-browser/preview.svg)](https://www.npmjs.com/package/@aws-sdk/client-datasync-browser)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-datasync-browser.svg)](https://www.npmjs.com/package/@aws-sdk/client-datasync-browser)

## Description

<fullname>AWS DataSync</fullname> <p>AWS DataSync is a managed data transfer service that makes it simpler for you to automate moving data between on-premises storage and Amazon Simple Storage Service (Amazon S3) or Amazon Elastic File System (Amazon EFS). </p> <p>This API interface reference for AWS DataSync contains documentation for a programming interface that you can use to manage AWS DataSync.</p>

## Installing

To install the this package using NPM, simply type the following into a terminal window:

```
npm install @aws-sdk/client-datasync-browser
```

## Getting Started

### Import

The AWS SDK is modulized by clients and commands in CommonJS modules. To send a request, you only need to import the client(`DataSyncClient`) and the commands you need, for example `CancelTaskExecutionCommand`:

```javascript
//javascript
const {
  DataSyncClient
} = require("@aws-sdk/client-datasync-browser/DataSyncClient");
const {
  CancelTaskExecutionCommand
} = require("@aws-sdk/client-datasync-browser/commands/CancelTaskExecutionCommand");
```

```javascript
//typescript
const { DataSyncClient } = import '@aws-sdk/client-datasync-browser/DataSyncClient';
const { CancelTaskExecutionCommand } = import '@aws-sdk/client-datasync-browser/commands/CancelTaskExecutionCommand';
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region). For more information you can refer to the [API reference][].
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```javascript
const dataSync = new DataSyncClient({region: 'region'});
//clients can be shared by different commands
const params = {
  TaskExecutionArn: /**a string value*/,
};
const cancelTaskExecutionCommand = new CancelTaskExecutionCommand(params);
dataSync.send(cancelTaskExecutionCommand).then(data => {
    // do something
}).catch(error => {
    // error handling
})
```

In addition to using promises, there are 2 other ways to send a request:

```javascript
// async/await
try {
  const data = await dataSync.send(cancelTaskExecutionCommand);
  // do something
} catch (error) {
  // error handling
}
```

```javascript
// callback
dataSync.send(cancelTaskExecutionCommand, (err, data) => {
  //do something
});
```

The SDK can also send requests using the simplified callback style from version 2 of the SDK.

```javascript
import * as AWS from "@aws-sdk/@aws-sdk/client-datasync-browser/DataSync";
const dataSync = new AWS.DataSync({ region: "region" });
dataSync.cancelTaskExecution(params, (err, data) => {
  //do something
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information, as well as response metadata (e.g. request id).

```javascript
try {
  const data = await dataSync.send(cancelTaskExecutionCommand);
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/@aws-sdk/client-datasync-browser' package is updated. To contribute to SDK you can checkout our [code generator package][].

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

[code generator package]: https://github.com/aws/aws-sdk-js-v3/tree/master/packages/service-types-generator
[api reference]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
