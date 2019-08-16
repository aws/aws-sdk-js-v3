# @aws-sdk/client-ec2-instance-connect-browser

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-ec2-instance-connect-browser/preview.svg)](https://www.npmjs.com/package/@aws-sdk/client-ec2-instance-connect-browser)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-ec2-instance-connect-browser.svg)](https://www.npmjs.com/package/@aws-sdk/client-ec2-instance-connect-browser)

## Description

<p>AWS EC2 Connect Service is a service that enables system administrators to publish temporary SSH keys to their EC2 instances in order to establish connections to their instances without leaving a permanent authentication option.</p>

## Installing

To install the this package using NPM, simply type the following into a terminal window:

```
npm install @aws-sdk/client-ec2-instance-connect-browser
```

## Getting Started

### Import

The AWS SDK is modulized by clients and commands in CommonJS modules. To send a request, you only need to import the client(`EC2InstanceConnectClient`) and the commands you need, for example `SendSSHPublicKeyCommand`:

```javascript
//JavaScript
const {
  EC2InstanceConnectClient
} = require("@aws-sdk/client-ec2-instance-connect-browser/EC2InstanceConnectClient");
const {
  SendSSHPublicKeyCommand
} = require("@aws-sdk/client-ec2-instance-connect-browser/commands/SendSSHPublicKeyCommand");
```

```javascript
//TypeScript
import { EC2InstanceConnectClient } from "@aws-sdk/client-ec2-instance-connect-browser/EC2InstanceConnectClient";
import { SendSSHPublicKeyCommand } from "@aws-sdk/client-ec2-instance-connect-browser/commands/SendSSHPublicKeyCommand";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region). For more information you can refer to the [API reference][].
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```javascript
const eC2InstanceConnect = new EC2InstanceConnectClient({region: 'region'});
//clients can be shared by different commands
const params = {
  InstanceId: /**a string value*/,
  InstanceOSUser: /**a string value*/,
  SSHPublicKey: /**a string value*/,
  AvailabilityZone: /**a string value*/,
};
const sendSSHPublicKeyCommand = new SendSSHPublicKeyCommand(params);
eC2InstanceConnect.send(sendSSHPublicKeyCommand).then(data => {
    // do something
}).catch(error => {
    // error handling
})
```

In addition to using promises, there are 2 other ways to send a request:

```javascript
// async/await
try {
  const data = await eC2InstanceConnect.send(sendSSHPublicKeyCommand);
  // do something
} catch (error) {
  // error handling
}
```

```javascript
// callback
eC2InstanceConnect.send(sendSSHPublicKeyCommand, (err, data) => {
  //do something
});
```

The SDK can also send requests using the simplified callback style from version 2 of the SDK.

```javascript
import * as AWS from "@aws-sdk/@aws-sdk/client-ec2-instance-connect-browser/EC2InstanceConnect";
const eC2InstanceConnect = new AWS.EC2InstanceConnect({ region: "region" });
eC2InstanceConnect.sendSSHPublicKey(params, (err, data) => {
  //do something
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information, as well as response metadata (e.g. request id).

```javascript
try {
  const data = await eC2InstanceConnect.send(sendSSHPublicKeyCommand);
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/@aws-sdk/client-ec2-instance-connect-browser' package is updated. To contribute to SDK you can checkout our [code generator package][].

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

[code generator package]: https://github.com/aws/aws-sdk-js-v3/tree/master/packages/service-types-generator
[api reference]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
