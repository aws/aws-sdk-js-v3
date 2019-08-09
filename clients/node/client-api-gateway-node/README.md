# @aws-sdk/client-api-gateway-node

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-api-gateway-node/preview.svg)](https://www.npmjs.com/package/@aws-sdk/client-api-gateway-node)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-api-gateway-node.svg)](https://www.npmjs.com/package/@aws-sdk/client-api-gateway-node)

## Description

<fullname>Amazon API Gateway</fullname> <p>Amazon API Gateway helps developers deliver robust, secure, and scalable mobile and web application back ends. API Gateway allows developers to securely connect mobile and web applications to APIs that run on AWS Lambda, Amazon EC2, or other publicly addressable web services that are hosted outside of AWS.</p>

## Installing

To install the this package using NPM, simply type the following into a terminal window:

```
npm install @aws-sdk/client-api-gateway-node
```

## Getting Started

### Import

The AWS SDK is modulized by clients and commands in CommonJS modules. To send a request, you only need to import the client(`APIGatewayClient`) and the commands you need, for example `CreateApiKeyCommand`:

```javascript
//javascript
const {
  APIGatewayClient
} = require("@aws-sdk/client-api-gateway-node/APIGatewayClient");
const {
  CreateApiKeyCommand
} = require("@aws-sdk/client-api-gateway-node/commands/CreateApiKeyCommand");
```

```javascript
//typescript
const { APIGatewayClient } = import '@aws-sdk/client-api-gateway-node/APIGatewayClient';
const { CreateApiKeyCommand } = import '@aws-sdk/client-api-gateway-node/commands/CreateApiKeyCommand';
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region). For more information you can refer to the [API reference][].
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```javascript
const aPIGateway = new APIGatewayClient({ region: "region" });
//clients can be shared by different commands
const params = {};
const createApiKeyCommand = new CreateApiKeyCommand(params);
aPIGateway
  .send(createApiKeyCommand)
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
  const data = await aPIGateway.send(createApiKeyCommand);
  // do something
} catch (error) {
  // error handling
}
```

```javascript
// callback
aPIGateway.send(createApiKeyCommand, (err, data) => {
  //do something
});
```

The SDK can also send requests using the simplified callback style from version 2 of the SDK.

```javascript
import * as AWS from "@aws-sdk/@aws-sdk/client-api-gateway-node/APIGateway";
const aPIGateway = new AWS.APIGateway({ region: "region" });
aPIGateway.createApiKey(params, (err, data) => {
  //do something
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information, as well as response metadata (e.g. request id).

```javascript
try {
  const data = await aPIGateway.send(createApiKeyCommand);
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/@aws-sdk/client-api-gateway-node' package is updated. To contribute to SDK you can checkout our [code generator package][].

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

[code generator package]: https://github.com/aws/aws-sdk-js-v3/tree/master/packages/service-types-generator
[api reference]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
