# @aws-sdk/client-cognito-identity-node

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-cognito-identity-node/preview.svg)](https://www.npmjs.com/package/@aws-sdk/client-cognito-identity-node)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-cognito-identity-node.svg)](https://www.npmjs.com/package/@aws-sdk/client-cognito-identity-node)

## Description

<fullname>Amazon Cognito Federated Identities</fullname> <p>Amazon Cognito Federated Identities is a web service that delivers scoped temporary credentials to mobile devices and other untrusted environments. It uniquely identifies a device and supplies the user with a consistent identity over the lifetime of an application.</p> <p>Using Amazon Cognito Federated Identities, you can enable authentication with one or more third-party identity providers (Facebook, Google, or Login with Amazon) or an Amazon Cognito user pool, and you can also choose to support unauthenticated access from your app. Cognito delivers a unique identifier for each user and acts as an OpenID token provider trusted by AWS Security Token Service (STS) to access temporary, limited-privilege AWS credentials.</p> <p>For a description of the authentication flow from the Amazon Cognito Developer Guide see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/authentication-flow.html">Authentication Flow</a>.</p> <p>For more information see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-identity.html">Amazon Cognito Federated Identities</a>.</p>

## Installing

To install the this package using NPM, simply type the following into a terminal window:

```
npm install @aws-sdk/client-cognito-identity-node
```

## Getting Started

### Import

The AWS SDK is modulized by clients and commands in CommonJS modules. To send a request, you only need to import the client(`CognitoIdentityClient`) and the commands you need, for example `CreateIdentityPoolCommand`:

```javascript
//javascript
const {
  CognitoIdentityClient
} = require("@aws-sdk/client-cognito-identity-node/CognitoIdentityClient");
const {
  CreateIdentityPoolCommand
} = require("@aws-sdk/client-cognito-identity-node/commands/CreateIdentityPoolCommand");
```

```javascript
//typescript
const { CognitoIdentityClient } = import '@aws-sdk/client-cognito-identity-node/CognitoIdentityClient';
const { CreateIdentityPoolCommand } = import '@aws-sdk/client-cognito-identity-node/commands/CreateIdentityPoolCommand';
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region). For more information you can refer to the [API reference][].
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```javascript
const cognitoIdentity = new CognitoIdentityClient({region: 'region'});
//clients can be shared by different commands
const params = {
  IdentityPoolName: /**a string value*/,
  AllowUnauthenticatedIdentities: /**a boolean value*/,
};
const createIdentityPoolCommand = new CreateIdentityPoolCommand(params);
cognitoIdentity.send(createIdentityPoolCommand).then(data => {
    // do something
}).catch(error => {
    // error handling
})
```

In addition to using promises, there are 2 other ways to send a request:

```javascript
// async/await
try {
  const data = await cognitoIdentity.send(createIdentityPoolCommand);
  // do something
} catch (error) {
  // error handling
}
```

```javascript
// callback
cognitoIdentity.send(createIdentityPoolCommand, (err, data) => {
  //do something
});
```

The SDK can also send requests using the simplified callback style from version 2 of the SDK.

```javascript
import * as AWS from "@aws-sdk/@aws-sdk/client-cognito-identity-node/CognitoIdentity";
const cognitoIdentity = new AWS.CognitoIdentity({ region: "region" });
cognitoIdentity.createIdentityPool(params, (err, data) => {
  //do something
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information, as well as response metadata (e.g. request id).

```javascript
try {
  const data = await cognitoIdentity.send(createIdentityPoolCommand);
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/@aws-sdk/client-cognito-identity-node' package is updated. To contribute to SDK you can checkout our [code generator package][].

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

[code generator package]: https://github.com/aws/aws-sdk-js-v3/tree/master/packages/service-types-generator
[api reference]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
