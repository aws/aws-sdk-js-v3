# @aws-sdk/client-workdocs

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-workdocs/preview.svg)](https://www.npmjs.com/package/@aws-sdk/client-workdocs)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-workdocs.svg)](https://www.npmjs.com/package/@aws-sdk/client-workdocs)

## Description

<p>The WorkDocs API is designed for the following use cases:</p> <ul> <li> <p>File Migration: File migration applications are supported for users who want to migrate their files from an on-premises or off-premises file system or service. Users can insert files into a user directory structure, as well as allow for basic metadata changes, such as modifications to the permissions of files.</p> </li> <li> <p>Security: Support security applications are supported for users who have additional security needs, such as antivirus or data loss prevention. The API actions, along with AWS CloudTrail, allow these applications to detect when changes occur in Amazon WorkDocs. Then, the application can take the necessary actions and replace the target file. If the target file violates the policy, the application can also choose to email the user.</p> </li> <li> <p>eDiscovery/Analytics: General administrative applications are supported, such as eDiscovery and analytics. These applications can choose to mimic or record the actions in an Amazon WorkDocs site, along with AWS CloudTrail, to replicate data for eDiscovery, backup, or analytical applications.</p> </li> </ul> <p>All Amazon WorkDocs API actions are Amazon authenticated and certificate-signed. They not only require the use of the AWS SDK, but also allow for the exclusive use of IAM users and roles to help facilitate access, trust, and permission policies. By creating a role and allowing an IAM user to access the Amazon WorkDocs site, the IAM user gains full administrative visibility into the entire Amazon WorkDocs site (or as set in the IAM policy). This includes, but is not limited to, the ability to modify file permissions and upload any file to any user. This allows developers to perform the three use cases above, as well as give users the ability to grant access on a selective basis using the IAM model.</p>

## Installing

To install the this package using NPM, simply type the following into a terminal window:

```
npm install @aws-sdk/client-workdocs
```

## Getting Started

### Import

The AWS SDK is modulized by clients and commands in CommonJS modules. To send a request, you only need to import the client(`WorkDocsClient`) and the commands you need, for example `AbortDocumentVersionUploadCommand`:

```javascript
//javascript
const { WorkDocsClient } = require("@aws-sdk/client-workdocs/WorkDocsClient");
const {
  AbortDocumentVersionUploadCommand
} = require("@aws-sdk/client-workdocs/commands/AbortDocumentVersionUploadCommand");
```

```javascript
//typescript
const { WorkDocsClient } = import '@aws-sdk/client-workdocs/WorkDocsClient';
const { AbortDocumentVersionUploadCommand } = import '@aws-sdk/client-workdocs/commands/AbortDocumentVersionUploadCommand';
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region). For more information you can refer to the [API reference][].
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```javascript
const workDocs = new WorkDocsClient({region: 'region'});
//clients can be shared by different commands
const params = {
  DocumentId: /**a string value*/,
  VersionId: /**a string value*/,
};
const abortDocumentVersionUploadCommand = new AbortDocumentVersionUploadCommand(params);
workDocs.send(abortDocumentVersionUploadCommand).then(data => {
    // do something
}).catch(error => {
    // error handling
})
```

In addition to using promises, there are 2 other ways to send a request:

```javascript
// async/await
try {
  const data = await workDocs.send(abortDocumentVersionUploadCommand);
  // do something
} catch (error) {
  // error handling
}
```

```javascript
// callback
workDocs.send(abortDocumentVersionUploadCommand, (err, data) => {
  //do something
});
```

The SDK can also send requests using the simplified callback style from version 2 of the SDK.

```javascript
import * as AWS from "@aws-sdk/@aws-sdk/client-workdocs/WorkDocs";
const workDocs = new AWS.WorkDocs({ region: "region" });
workDocs.abortDocumentVersionUpload(params, (err, data) => {
  //do something
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information, as well as response metadata (e.g. request id).

```javascript
try {
  const data = await workDocs.send(abortDocumentVersionUploadCommand);
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/@aws-sdk/client-workdocs' package is updated. To contribute to SDK you can checkout our [code generator package][].

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

[code generator package]: https://github.com/aws/aws-sdk-js-v3/tree/master/packages/service-types-generator
[api reference]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
