# @aws-sdk/client-chime-node

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-chime-node/preview.svg)](https://www.npmjs.com/package/@aws-sdk/client-chime-node)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-chime-node.svg)](https://www.npmjs.com/package/@aws-sdk/client-chime-node)

## Description

<p>The Amazon Chime API (application programming interface) is designed for administrators to use to perform key tasks, such as creating and managing Amazon Chime accounts and users. This guide provides detailed information about the Amazon Chime API, including operations, types, inputs and outputs, and error codes.</p> <p>You can use an AWS SDK, the AWS Command Line Interface (AWS CLI), or the REST API to make API calls. We recommend using an AWS SDK or the AWS CLI. Each API operation includes links to information about using it with a language-specific AWS SDK or the AWS CLI.</p> <dl> <dt>Using an AWS SDK</dt> <dd> <p>You don't need to write code to calculate a signature for request authentication. The SDK clients authenticate your requests by using access keys that you provide. For more information about AWS SDKs, see the <a href="http://aws.amazon.com/developer/">AWS Developer Center</a>.</p> </dd> <dt>Using the AWS CLI</dt> <dd> <p>Use your access keys with the AWS CLI to make API calls. For information about setting up the AWS CLI, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/installing.html">Installing the AWS Command Line Interface</a> in the <i>AWS Command Line Interface User Guide</i>. For a list of available Amazon Chime commands, see the <a href="https://docs.aws.amazon.com/cli/latest/reference/chime/index.html">Amazon Chime commands</a> in the <i>AWS CLI Command Reference</i>.</p> </dd> <dt>Using REST API</dt> <dd> <p>If you use REST to make API calls, you must authenticate your request by providing a signature. Amazon Chime supports signature version 4. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 Signing Process</a> in the <i>Amazon Web Services General Reference</i>.</p> <p>When making REST API calls, use the service name <code>chime</code> and REST endpoint <code>https://service.chime.aws.amazon.com</code>.</p> </dd> </dl> <p>Administrative permissions are controlled using AWS Identity and Access Management (IAM). For more information, see <a href="https://docs.aws.amazon.com/chime/latest/ag/control-access.html">Control Access to the Amazon Chime Console</a> in the <i>Amazon Chime Administration Guide</i>.</p>

## Installing

To install the this package using NPM, simply type the following into a terminal window:

```
npm install @aws-sdk/client-chime-node
```

## Getting Started

### Import

The AWS SDK is modulized by clients and commands in CommonJS modules. To send a request, you only need to import the client(`ChimeClient`) and the commands you need, for example `AssociatePhoneNumberWithUserCommand`:

```javascript
//javascript
const { ChimeClient } = require("@aws-sdk/client-chime-node/ChimeClient");
const {
  AssociatePhoneNumberWithUserCommand
} = require("@aws-sdk/client-chime-node/commands/AssociatePhoneNumberWithUserCommand");
```

```javascript
//typescript
const { ChimeClient } = import '@aws-sdk/client-chime-node/ChimeClient';
const { AssociatePhoneNumberWithUserCommand } = import '@aws-sdk/client-chime-node/commands/AssociatePhoneNumberWithUserCommand';
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region). For more information you can refer to the [API reference][].
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```javascript
const chime = new ChimeClient({region: 'region'});
//clients can be shared by different commands
const params = {
  AccountId: /**a string value*/,
  UserId: /**a string value*/,
  E164PhoneNumber: /**a string value*/,
};
const associatePhoneNumberWithUserCommand = new AssociatePhoneNumberWithUserCommand(params);
chime.send(associatePhoneNumberWithUserCommand).then(data => {
    // do something
}).catch(error => {
    // error handling
})
```

In addition to using promises, there are 2 other ways to send a request:

```javascript
// async/await
try {
  const data = await chime.send(associatePhoneNumberWithUserCommand);
  // do something
} catch (error) {
  // error handling
}
```

```javascript
// callback
chime.send(associatePhoneNumberWithUserCommand, (err, data) => {
  //do something
});
```

The SDK can also send requests using the simplified callback style from version 2 of the SDK.

```javascript
import * as AWS from "@aws-sdk/@aws-sdk/client-chime-node/Chime";
const chime = new AWS.Chime({ region: "region" });
chime.associatePhoneNumberWithUser(params, (err, data) => {
  //do something
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information, as well as response metadata (e.g. request id).

```javascript
try {
  const data = await chime.send(associatePhoneNumberWithUserCommand);
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/@aws-sdk/client-chime-node' package is updated. To contribute to SDK you can checkout our [code generator package][].

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

[code generator package]: https://github.com/aws/aws-sdk-js-v3/tree/master/packages/service-types-generator
[api reference]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
