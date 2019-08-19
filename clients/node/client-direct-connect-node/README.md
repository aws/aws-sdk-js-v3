# @aws-sdk/client-direct-connect-node

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-direct-connect-node/preview.svg)](https://www.npmjs.com/package/@aws-sdk/client-direct-connect-node)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-direct-connect-node.svg)](https://www.npmjs.com/package/@aws-sdk/client-direct-connect-node)

## Description

<p>AWS Direct Connect links your internal network to an AWS Direct Connect location over a standard Ethernet fiber-optic cable. One end of the cable is connected to your router, the other to an AWS Direct Connect router. With this connection in place, you can create virtual interfaces directly to the AWS cloud (for example, to Amazon EC2 and Amazon S3) and to Amazon VPC, bypassing Internet service providers in your network path. A connection provides access to all AWS Regions except the China (Beijing) and (China) Ningxia Regions. AWS resources in the China Regions can only be accessed through locations associated with those Regions.</p>

## Installing

To install the this package using NPM, simply type the following into a terminal window:

```
npm install @aws-sdk/client-direct-connect-node
```

## Getting Started

### Import

The AWS SDK is modulized by clients and commands in CommonJS modules. To send a request, you only need to import the client(`DirectConnectClient`) and the commands you need, for example `AcceptDirectConnectGatewayAssociationProposalCommand`:

```javascript
//JavaScript
const {
  DirectConnectClient
} = require("@aws-sdk/client-direct-connect-node/DirectConnectClient");
const {
  AcceptDirectConnectGatewayAssociationProposalCommand
} = require("@aws-sdk/client-direct-connect-node/commands/AcceptDirectConnectGatewayAssociationProposalCommand");
```

```javascript
//TypeScript
import { DirectConnectClient } from "@aws-sdk/client-direct-connect-node/DirectConnectClient";
import { AcceptDirectConnectGatewayAssociationProposalCommand } from "@aws-sdk/client-direct-connect-node/commands/AcceptDirectConnectGatewayAssociationProposalCommand";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region). For more information you can refer to the [API reference][].
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```javascript
const directConnect = new DirectConnectClient({region: 'region'});
//clients can be shared by different commands
const params = {
  directConnectGatewayId: /**a string value*/,
  proposalId: /**a string value*/,
  associatedGatewayOwnerAccount: /**a string value*/,
};
const acceptDirectConnectGatewayAssociationProposalCommand = new AcceptDirectConnectGatewayAssociationProposalCommand(params);
directConnect.send(acceptDirectConnectGatewayAssociationProposalCommand).then(data => {
    // do something
}).catch(error => {
    // error handling
})
```

In addition to using promises, there are 2 other ways to send a request:

```javascript
// async/await
try {
  const data = await directConnect.send(
    acceptDirectConnectGatewayAssociationProposalCommand
  );
  // do something
} catch (error) {
  // error handling
}
```

```javascript
// callback
directConnect.send(
  acceptDirectConnectGatewayAssociationProposalCommand,
  (err, data) => {
    //do something
  }
);
```

The SDK can also send requests using the simplified callback style from version 2 of the SDK.

```javascript
import * as AWS from "@aws-sdk/@aws-sdk/client-direct-connect-node/DirectConnect";
const directConnect = new AWS.DirectConnect({ region: "region" });
directConnect.acceptDirectConnectGatewayAssociationProposal(
  params,
  (err, data) => {
    //do something
  }
);
```

### Troubleshooting

When the service returns an exception, the error will include the exception information, as well as response metadata (e.g. request id).

```javascript
try {
  const data = await directConnect.send(
    acceptDirectConnectGatewayAssociationProposalCommand
  );
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/@aws-sdk/client-direct-connect-node' package is updated. To contribute to SDK you can checkout our [code generator package][].

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

[code generator package]: https://github.com/aws/aws-sdk-js-v3/tree/master/packages/service-types-generator
[api reference]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
