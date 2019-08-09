# @aws-sdk/client-guardduty-node

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-guardduty-node/preview.svg)](https://www.npmjs.com/package/@aws-sdk/client-guardduty-node)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-guardduty-node.svg)](https://www.npmjs.com/package/@aws-sdk/client-guardduty-node)

## Description

<p>Amazon GuardDuty is a continuous security monitoring service that analyzes and processes the following data sources: VPC Flow Logs, AWS CloudTrail event logs, and DNS logs. It uses threat intelligence feeds, such as lists of malicious IPs and domains, and machine learning to identify unexpected and potentially unauthorized and malicious activity within your AWS environment. This can include issues like escalations of privileges, uses of exposed credentials, or communication with malicious IPs, URLs, or domains. For example, GuardDuty can detect compromised EC2 instances serving malware or mining bitcoin. It also monitors AWS account access behavior for signs of compromise, such as unauthorized infrastructure deployments, like instances deployed in a region that has never been used, or unusual API calls, like a password policy change to reduce password strength. GuardDuty informs you of the status of your AWS environment by producing security findings that you can view in the GuardDuty console or through Amazon CloudWatch events. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/what-is-guardduty.html"> Amazon GuardDuty User Guide</a>. </p>

## Installing

To install the this package using NPM, simply type the following into a terminal window:

```
npm install @aws-sdk/client-guardduty-node
```

## Getting Started

### Import

The AWS SDK is modulized by clients and commands in CommonJS modules. To send a request, you only need to import the client(`GuardDutyClient`) and the commands you need, for example `AcceptInvitationCommand`:

```javascript
//javascript
const {
  GuardDutyClient
} = require("@aws-sdk/client-guardduty-node/GuardDutyClient");
const {
  AcceptInvitationCommand
} = require("@aws-sdk/client-guardduty-node/commands/AcceptInvitationCommand");
```

```javascript
//typescript
const { GuardDutyClient } = import '@aws-sdk/client-guardduty-node/GuardDutyClient';
const { AcceptInvitationCommand } = import '@aws-sdk/client-guardduty-node/commands/AcceptInvitationCommand';
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region). For more information you can refer to the [API reference][].
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```javascript
const guardDuty = new GuardDutyClient({region: 'region'});
//clients can be shared by different commands
const params = {
  DetectorId: /**a string value*/,
  MasterId: /**a string value*/,
  InvitationId: /**a string value*/,
};
const acceptInvitationCommand = new AcceptInvitationCommand(params);
guardDuty.send(acceptInvitationCommand).then(data => {
    // do something
}).catch(error => {
    // error handling
})
```

In addition to using promises, there are 2 other ways to send a request:

```javascript
// async/await
try {
  const data = await guardDuty.send(acceptInvitationCommand);
  // do something
} catch (error) {
  // error handling
}
```

```javascript
// callback
guardDuty.send(acceptInvitationCommand, (err, data) => {
  //do something
});
```

The SDK can also send requests using the simplified callback style from version 2 of the SDK.

```javascript
import * as AWS from "@aws-sdk/@aws-sdk/client-guardduty-node/GuardDuty";
const guardDuty = new AWS.GuardDuty({ region: "region" });
guardDuty.acceptInvitation(params, (err, data) => {
  //do something
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information, as well as response metadata (e.g. request id).

```javascript
try {
  const data = await guardDuty.send(acceptInvitationCommand);
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/@aws-sdk/client-guardduty-node' package is updated. To contribute to SDK you can checkout our [code generator package][].

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

[code generator package]: https://github.com/aws/aws-sdk-js-v3/tree/master/packages/service-types-generator
[api reference]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
