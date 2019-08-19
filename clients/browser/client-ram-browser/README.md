# @aws-sdk/client-ram-browser

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-ram-browser/preview.svg)](https://www.npmjs.com/package/@aws-sdk/client-ram-browser)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-ram-browser.svg)](https://www.npmjs.com/package/@aws-sdk/client-ram-browser)

## Description

<p>Use AWS Resource Access Manager to share AWS resources between AWS accounts. To share a resource, you create a resource share, associate the resource with the resource share, and specify the principals that can access the resource. The following principals are supported:</p> <ul> <li> <p>The ID of an AWS account</p> </li> <li> <p>The Amazon Resource Name (ARN) of an OU from AWS Organizations</p> </li> <li> <p>The Amazon Resource Name (ARN) of an organization from AWS Organizations</p> </li> </ul> <p>If you specify an AWS account that doesn't exist in the same organization as the account that owns the resource share, the owner of the specified account receives an invitation to accept the resource share. After the owner accepts the invitation, they can access the resources in the resource share. An administrator of the specified account can use IAM policies to restrict access resources in the resource share.</p>

## Installing

To install the this package using NPM, simply type the following into a terminal window:

```
npm install @aws-sdk/client-ram-browser
```

## Getting Started

### Import

The AWS SDK is modulized by clients and commands in CommonJS modules. To send a request, you only need to import the client(`RAMClient`) and the commands you need, for example `AcceptResourceShareInvitationCommand`:

```javascript
//JavaScript
const { RAMClient } = require("@aws-sdk/client-ram-browser/RAMClient");
const {
  AcceptResourceShareInvitationCommand
} = require("@aws-sdk/client-ram-browser/commands/AcceptResourceShareInvitationCommand");
```

```javascript
//TypeScript
import { RAMClient } from "@aws-sdk/client-ram-browser/RAMClient";
import { AcceptResourceShareInvitationCommand } from "@aws-sdk/client-ram-browser/commands/AcceptResourceShareInvitationCommand";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region). For more information you can refer to the [API reference][].
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```javascript
const rAM = new RAMClient({region: 'region'});
//clients can be shared by different commands
const params = {
  resourceShareInvitationArn: /**a string value*/,
};
const acceptResourceShareInvitationCommand = new AcceptResourceShareInvitationCommand(params);
rAM.send(acceptResourceShareInvitationCommand).then(data => {
    // do something
}).catch(error => {
    // error handling
})
```

In addition to using promises, there are 2 other ways to send a request:

```javascript
// async/await
try {
  const data = await rAM.send(acceptResourceShareInvitationCommand);
  // do something
} catch (error) {
  // error handling
}
```

```javascript
// callback
rAM.send(acceptResourceShareInvitationCommand, (err, data) => {
  //do something
});
```

The SDK can also send requests using the simplified callback style from version 2 of the SDK.

```javascript
import * as AWS from "@aws-sdk/@aws-sdk/client-ram-browser/RAM";
const rAM = new AWS.RAM({ region: "region" });
rAM.acceptResourceShareInvitation(params, (err, data) => {
  //do something
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information, as well as response metadata (e.g. request id).

```javascript
try {
  const data = await rAM.send(acceptResourceShareInvitationCommand);
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/@aws-sdk/client-ram-browser' package is updated. To contribute to SDK you can checkout our [code generator package][].

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

[code generator package]: https://github.com/aws/aws-sdk-js-v3/tree/master/packages/service-types-generator
[api reference]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
