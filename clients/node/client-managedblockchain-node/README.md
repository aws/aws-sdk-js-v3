# @aws-sdk/client-managedblockchain-node

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-managedblockchain-node/preview.svg)](https://www.npmjs.com/package/@aws-sdk/client-managedblockchain-node)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-managedblockchain-node.svg)](https://www.npmjs.com/package/@aws-sdk/client-managedblockchain-node)

## Description

<p/> <p>Amazon Managed Blockchain is a fully managed service for creating and managing blockchain networks using open source frameworks. Blockchain allows you to build applications where multiple parties can securely and transparently run transactions and share data without the need for a trusted, central authority. Currently, Managed Blockchain supports the Hyperledger Fabric open source framework. </p>

## Installing

To install the this package using NPM, simply type the following into a terminal window:

```
npm install @aws-sdk/client-managedblockchain-node
```

## Getting Started

### Import

The AWS SDK is modulized by clients and commands in CommonJS modules. To send a request, you only need to import the client(`ManagedBlockchainClient`) and the commands you need, for example `CreateMemberCommand`:

```javascript
//JavaScript
const {
  ManagedBlockchainClient,
  CreateMemberCommand
} = require("@aws-sdk/client-managedblockchain-node");
```

```javascript
//TypeScript
import {
  ManagedBlockchainClient,
  CreateMemberCommand
} from "@aws-sdk/client-managedblockchain-node";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region). For more information you can refer to the [API reference][].
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```javascript
const managedBlockchain = new ManagedBlockchainClient({region: 'region'});
//clients can be shared by different commands
const params = {
  ClientRequestToken: /**a string value*/,
  InvitationId: /**a string value*/,
  NetworkId: /**a string value*/,
  MemberConfiguration: { /**an object specifying MemberConfiguration*/ },
};
const createMemberCommand = new CreateMemberCommand(params);
managedBlockchain.send(createMemberCommand).then(data => {
    // do something
}).catch(error => {
    // error handling
})
```

In addition to using promises, there are 2 other ways to send a request:

```javascript
// async/await
try {
  const data = await managedBlockchain.send(createMemberCommand);
  // do something
} catch (error) {
  // error handling
}
```

```javascript
// callback
managedBlockchain.send(createMemberCommand, (err, data) => {
  //do something
});
```

The SDK can also send requests using the simplified callback style from version 2 of the SDK.

```javascript
import * as AWS from "@aws-sdk/client-managedblockchain-node";
const managedBlockchain = new AWS.ManagedBlockchain({ region: "region" });
managedBlockchain.createMember(params, (err, data) => {
  //do something
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information, as well as response metadata (e.g. request id).

```javascript
try {
  const data = await managedBlockchain.send(createMemberCommand);
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/@aws-sdk/client-managedblockchain-node' package is updated. To contribute to SDK you can checkout our [code generator package][].

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

[code generator package]: https://github.com/aws/aws-sdk-js-v3/tree/master/packages/service-types-generator
[api reference]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
