# @aws-sdk/client-directory-service-browser

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-directory-service-browser/preview.svg)](https://www.npmjs.com/package/@aws-sdk/client-directory-service-browser)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-directory-service-browser.svg)](https://www.npmjs.com/package/@aws-sdk/client-directory-service-browser)

## Description

<fullname>AWS Directory Service</fullname> <p>AWS Directory Service is a web service that makes it easy for you to setup and run directories in the AWS cloud, or connect your AWS resources with an existing on-premises Microsoft Active Directory. This guide provides detailed information about AWS Directory Service operations, data types, parameters, and errors. For information about AWS Directory Services features, see <a href="https://aws.amazon.com/directoryservice/">AWS Directory Service</a> and the <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/what_is.html">AWS Directory Service Administration Guide</a>.</p> <note> <p>AWS provides SDKs that consist of libraries and sample code for various programming languages and platforms (Java, Ruby, .Net, iOS, Android, etc.). The SDKs provide a convenient way to create programmatic access to AWS Directory Service and other AWS services. For more information about the AWS SDKs, including how to download and install them, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p> </note>

## Installing

To install the this package using NPM, simply type the following into a terminal window:

```
npm install @aws-sdk/client-directory-service-browser
```

## Getting Started

### Import

The AWS SDK is modulized by clients and commands in CommonJS modules. To send a request, you only need to import the client(`DirectoryServiceClient`) and the commands you need, for example `AcceptSharedDirectoryCommand`:

```javascript
//JavaScript
const {
  DirectoryServiceClient
} = require("@aws-sdk/client-directory-service-browser/DirectoryServiceClient");
const {
  AcceptSharedDirectoryCommand
} = require("@aws-sdk/client-directory-service-browser/commands/AcceptSharedDirectoryCommand");
```

```javascript
//TypeScript
import { DirectoryServiceClient } from "@aws-sdk/client-directory-service-browser/DirectoryServiceClient";
import { AcceptSharedDirectoryCommand } from "@aws-sdk/client-directory-service-browser/commands/AcceptSharedDirectoryCommand";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region). For more information you can refer to the [API reference][].
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```javascript
const directoryService = new DirectoryServiceClient({region: 'region'});
//clients can be shared by different commands
const params = {
  SharedDirectoryId: /**a string value*/,
};
const acceptSharedDirectoryCommand = new AcceptSharedDirectoryCommand(params);
directoryService.send(acceptSharedDirectoryCommand).then(data => {
    // do something
}).catch(error => {
    // error handling
})
```

In addition to using promises, there are 2 other ways to send a request:

```javascript
// async/await
try {
  const data = await directoryService.send(acceptSharedDirectoryCommand);
  // do something
} catch (error) {
  // error handling
}
```

```javascript
// callback
directoryService.send(acceptSharedDirectoryCommand, (err, data) => {
  //do something
});
```

The SDK can also send requests using the simplified callback style from version 2 of the SDK.

```javascript
import * as AWS from "@aws-sdk/@aws-sdk/client-directory-service-browser/DirectoryService";
const directoryService = new AWS.DirectoryService({ region: "region" });
directoryService.acceptSharedDirectory(params, (err, data) => {
  //do something
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information, as well as response metadata (e.g. request id).

```javascript
try {
  const data = await directoryService.send(acceptSharedDirectoryCommand);
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/@aws-sdk/client-directory-service-browser' package is updated. To contribute to SDK you can checkout our [code generator package][].

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

[code generator package]: https://github.com/aws/aws-sdk-js-v3/tree/master/packages/service-types-generator
[api reference]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
