# @aws-sdk/client-ssm-browser

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-ssm-browser/preview.svg)](https://www.npmjs.com/package/@aws-sdk/client-ssm-browser)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-ssm-browser.svg)](https://www.npmjs.com/package/@aws-sdk/client-ssm-browser)

## Description

<fullname>AWS Systems Manager</fullname> <p>AWS Systems Manager is a collection of capabilities that helps you automate management tasks such as collecting system inventory, applying operating system (OS) patches, automating the creation of Amazon Machine Images (AMIs), and configuring operating systems (OSs) and applications at scale. Systems Manager lets you remotely and securely manage the configuration of your managed instances. A <i>managed instance</i> is any Amazon EC2 instance or on-premises machine in your hybrid environment that has been configured for Systems Manager.</p> <p>This reference is intended to be used with the <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/">AWS Systems Manager User Guide</a>.</p> <p>To get started, verify prerequisites and configure managed instances. For more information, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up.html">Setting Up AWS Systems Manager</a> in the <i>AWS Systems Manager User Guide</i>.</p> <p>For information about other API actions you can perform on Amazon EC2 instances, see the <a href="http://docs.aws.amazon.com/AWSEC2/latest/APIReference/">Amazon EC2 API Reference</a>. For information about how to use a Query API, see <a href="http://docs.aws.amazon.com/AWSEC2/latest/APIReference/making-api-requests.html">Making API Requests</a>. </p>

## Installing

To install the this package using NPM, simply type the following into a terminal window:

```
npm install @aws-sdk/client-ssm-browser
```

## Getting Started

### Import

The AWS SDK is modulized by clients and commands in CommonJS modules. To send a request, you only need to import the client(`SSMClient`) and the commands you need, for example `AddTagsToResourceCommand`:

```javascript
//JavaScript
const { SSMClient } = require("@aws-sdk/client-ssm-browser/SSMClient");
const {
  AddTagsToResourceCommand
} = require("@aws-sdk/client-ssm-browser/commands/AddTagsToResourceCommand");
```

```javascript
//TypeScript
import { SSMClient } from "@aws-sdk/client-ssm-browser/SSMClient";
import { AddTagsToResourceCommand } from "@aws-sdk/client-ssm-browser/commands/AddTagsToResourceCommand";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region). For more information you can refer to the [API reference][].
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```javascript
const sSM = new SSMClient({region: 'region'});
//clients can be shared by different commands
const params = {
  ResourceType: /**a string value*/,
  ResourceId: /**a string value*/,
  Tags: [ /**a list of structure*/ ],
};
const addTagsToResourceCommand = new AddTagsToResourceCommand(params);
sSM.send(addTagsToResourceCommand).then(data => {
    // do something
}).catch(error => {
    // error handling
})
```

In addition to using promises, there are 2 other ways to send a request:

```javascript
// async/await
try {
  const data = await sSM.send(addTagsToResourceCommand);
  // do something
} catch (error) {
  // error handling
}
```

```javascript
// callback
sSM.send(addTagsToResourceCommand, (err, data) => {
  //do something
});
```

The SDK can also send requests using the simplified callback style from version 2 of the SDK.

```javascript
import * as AWS from "@aws-sdk/@aws-sdk/client-ssm-browser/SSM";
const sSM = new AWS.SSM({ region: "region" });
sSM.addTagsToResource(params, (err, data) => {
  //do something
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information, as well as response metadata (e.g. request id).

```javascript
try {
  const data = await sSM.send(addTagsToResourceCommand);
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/@aws-sdk/client-ssm-browser' package is updated. To contribute to SDK you can checkout our [code generator package][].

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

[code generator package]: https://github.com/aws/aws-sdk-js-v3/tree/master/packages/service-types-generator
[api reference]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
