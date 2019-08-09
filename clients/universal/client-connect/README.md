# @aws-sdk/client-connect

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-connect/preview.svg)](https://www.npmjs.com/package/@aws-sdk/client-connect)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-connect.svg)](https://www.npmjs.com/package/@aws-sdk/client-connect)

## Description

<p>The Amazon Connect API Reference provides descriptions, syntax, and usage examples for each of the Amazon Connect actions, data types, parameters, and errors. Amazon Connect is a cloud-based contact center solution that makes it easy to set up and manage a customer contact center and provide reliable customer engagement at any scale.</p> <p>Throttling limits for the Amazon Connect API operations:</p> <p>For the <code>GetMetricData</code> and <code>GetCurrentMetricData</code> operations, a RateLimit of 5 per second, and a BurstLimit of 8 per second.</p> <p>For all other operations, a RateLimit of 2 per second, and a BurstLimit of 5 per second.</p> <p>You can request an increase to the throttling limits by submitting a <a href="https://console.aws.amazon.com/support/home#/case/create?issueType=service-limit-increase">Amazon Connect service limits increase form</a>. You must be signed in to your AWS account to access the form.</p>

## Installing

To install the this package using NPM, simply type the following into a terminal window:

```
npm install @aws-sdk/client-connect
```

## Getting Started

### Import

The AWS SDK is modulized by clients and commands in CommonJS modules. To send a request, you only need to import the client(`ConnectClient`) and the commands you need, for example `CreateUserCommand`:

```javascript
//javascript
const { ConnectClient } = require("@aws-sdk/client-connect/ConnectClient");
const {
  CreateUserCommand
} = require("@aws-sdk/client-connect/commands/CreateUserCommand");
```

```javascript
//typescript
const { ConnectClient } = import '@aws-sdk/client-connect/ConnectClient';
const { CreateUserCommand } = import '@aws-sdk/client-connect/commands/CreateUserCommand';
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region). For more information you can refer to the [API reference][].
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```javascript
const connect = new ConnectClient({region: 'region'});
//clients can be shared by different commands
const params = {
  Username: /**a string value*/,
  PhoneConfig: { /**an object specifying PhoneConfig*/ },
  SecurityProfileIds: [ /**a list of string*/ ],
  RoutingProfileId: /**a string value*/,
  InstanceId: /**a string value*/,
};
const createUserCommand = new CreateUserCommand(params);
connect.send(createUserCommand).then(data => {
    // do something
}).catch(error => {
    // error handling
})
```

In addition to using promises, there are 2 other ways to send a request:

```javascript
// async/await
try {
  const data = await connect.send(createUserCommand);
  // do something
} catch (error) {
  // error handling
}
```

```javascript
// callback
connect.send(createUserCommand, (err, data) => {
  //do something
});
```

The SDK can also send requests using the simplified callback style from version 2 of the SDK.

```javascript
import * as AWS from "@aws-sdk/@aws-sdk/client-connect/Connect";
const connect = new AWS.Connect({ region: "region" });
connect.createUser(params, (err, data) => {
  //do something
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information, as well as response metadata (e.g. request id).

```javascript
try {
  const data = await connect.send(createUserCommand);
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/@aws-sdk/client-connect' package is updated. To contribute to SDK you can checkout our [code generator package][].

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

[code generator package]: https://github.com/aws/aws-sdk-js-v3/tree/master/packages/service-types-generator
[api reference]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
