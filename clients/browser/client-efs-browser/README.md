# @aws-sdk/client-efs-browser

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-efs-browser/preview.svg)](https://www.npmjs.com/package/@aws-sdk/client-efs-browser)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-efs-browser.svg)](https://www.npmjs.com/package/@aws-sdk/client-efs-browser)

## Description

<fullname>Amazon Elastic File System</fullname> <p>Amazon Elastic File System (Amazon EFS) provides simple, scalable file storage for use with Amazon EC2 instances in the AWS Cloud. With Amazon EFS, storage capacity is elastic, growing and shrinking automatically as you add and remove files, so your applications have the storage they need, when they need it. For more information, see the <a href="https://docs.aws.amazon.com/efs/latest/ug/api-reference.html">User Guide</a>.</p>

## Installing

To install the this package using NPM, simply type the following into a terminal window:

```
npm install @aws-sdk/client-efs-browser
```

## Getting Started

### Import

The AWS SDK is modulized by clients and commands in CommonJS modules. To send a request, you only need to import the client(`EFSClient`) and the commands you need, for example `CreateFileSystemCommand`:

```javascript
//JavaScript
const { EFSClient } = require("@aws-sdk/client-efs-browser/EFSClient");
const {
  CreateFileSystemCommand
} = require("@aws-sdk/client-efs-browser/commands/CreateFileSystemCommand");
```

```javascript
//TypeScript
import { EFSClient } from "@aws-sdk/client-efs-browser/EFSClient";
import { CreateFileSystemCommand } from "@aws-sdk/client-efs-browser/commands/CreateFileSystemCommand";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region). For more information you can refer to the [API reference][].
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```javascript
const eFS = new EFSClient({region: 'region'});
//clients can be shared by different commands
const params = {
  CreationToken: /**a string value*/,
};
const createFileSystemCommand = new CreateFileSystemCommand(params);
eFS.send(createFileSystemCommand).then(data => {
    // do something
}).catch(error => {
    // error handling
})
```

In addition to using promises, there are 2 other ways to send a request:

```javascript
// async/await
try {
  const data = await eFS.send(createFileSystemCommand);
  // do something
} catch (error) {
  // error handling
}
```

```javascript
// callback
eFS.send(createFileSystemCommand, (err, data) => {
  //do something
});
```

The SDK can also send requests using the simplified callback style from version 2 of the SDK.

```javascript
import * as AWS from "@aws-sdk/@aws-sdk/client-efs-browser/EFS";
const eFS = new AWS.EFS({ region: "region" });
eFS.createFileSystem(params, (err, data) => {
  //do something
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information, as well as response metadata (e.g. request id).

```javascript
try {
  const data = await eFS.send(createFileSystemCommand);
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/@aws-sdk/client-efs-browser' package is updated. To contribute to SDK you can checkout our [code generator package][].

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

[code generator package]: https://github.com/aws/aws-sdk-js-v3/tree/master/packages/service-types-generator
[api reference]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
