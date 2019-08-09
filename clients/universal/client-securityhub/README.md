# @aws-sdk/client-securityhub

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-securityhub/preview.svg)](https://www.npmjs.com/package/@aws-sdk/client-securityhub)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-securityhub.svg)](https://www.npmjs.com/package/@aws-sdk/client-securityhub)

## Description

<p>Security Hub provides you with a comprehensive view of the security state of your AWS environment and resources. It also provides you with the compliance status of your environment based on CIS AWS Foundations compliance checks. Security Hub collects security data from AWS accounts, services, and integrated third-party products and helps you analyze security trends in your environment to identify the highest priority security issues. For more information about Security Hub, see the <i> <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html">AWS Security Hub User Guide</a> </i>.</p> <p>When you use operations in the Security Hub API, the requests are executed only in the AWS Region that is currently active or in the specific AWS Region that you specify in your request. Any configuration or settings change that results from the operation is applied only to that Region. To make the same change in other Regions, execute the same command for each Region to apply the change to. For example, if your Region is set to <code>us-west-2</code>, when you use <code>CreateMembers</code> to add a member account to Security Hub, the association of the member account with the master account is created only in the us-west-2 Region. Security Hub must be enabled for the member account in the same Region that the invite was sent from.</p>

## Installing

To install the this package using NPM, simply type the following into a terminal window:

```
npm install @aws-sdk/client-securityhub
```

## Getting Started

### Import

The AWS SDK is modulized by clients and commands in CommonJS modules. To send a request, you only need to import the client(`SecurityHubClient`) and the commands you need, for example `AcceptInvitationCommand`:

```javascript
//javascript
const {
  SecurityHubClient
} = require("@aws-sdk/client-securityhub/SecurityHubClient");
const {
  AcceptInvitationCommand
} = require("@aws-sdk/client-securityhub/commands/AcceptInvitationCommand");
```

```javascript
//typescript
const { SecurityHubClient } = import '@aws-sdk/client-securityhub/SecurityHubClient';
const { AcceptInvitationCommand } = import '@aws-sdk/client-securityhub/commands/AcceptInvitationCommand';
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region). For more information you can refer to the [API reference][].
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```javascript
const securityHub = new SecurityHubClient({ region: "region" });
//clients can be shared by different commands
const params = {};
const acceptInvitationCommand = new AcceptInvitationCommand(params);
securityHub
  .send(acceptInvitationCommand)
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
  const data = await securityHub.send(acceptInvitationCommand);
  // do something
} catch (error) {
  // error handling
}
```

```javascript
// callback
securityHub.send(acceptInvitationCommand, (err, data) => {
  //do something
});
```

The SDK can also send requests using the simplified callback style from version 2 of the SDK.

```javascript
import * as AWS from "@aws-sdk/@aws-sdk/client-securityhub/SecurityHub";
const securityHub = new AWS.SecurityHub({ region: "region" });
securityHub.acceptInvitation(params, (err, data) => {
  //do something
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information, as well as response metadata (e.g. request id).

```javascript
try {
  const data = await securityHub.send(acceptInvitationCommand);
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/@aws-sdk/client-securityhub' package is updated. To contribute to SDK you can checkout our [code generator package][].

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

[code generator package]: https://github.com/aws/aws-sdk-js-v3/tree/master/packages/service-types-generator
[api reference]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
