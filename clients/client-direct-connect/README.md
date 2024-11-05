<!-- generated file, do not edit directly -->

# @aws-sdk/client-direct-connect

## Description

AWS SDK for JavaScript DirectConnect Client for Node.js, Browser and React Native.

<p>Direct Connect links your internal network to an Direct Connect location over a standard Ethernet fiber-optic cable.
One end of the cable is connected to your router, the other to an Direct Connect router. With this connection
in place, you can create virtual interfaces directly to the Amazon Web Services Cloud (for example, to Amazon EC2
and Amazon S3) and to Amazon VPC, bypassing Internet service providers in your network path. A
connection provides access to all Amazon Web Services Regions except the China (Beijing) and (China) Ningxia Regions.
Amazon Web Services resources in the China Regions can only be accessed through locations associated with those Regions.</p>

## Installing

To install this package, simply type add or install @aws-sdk/client-direct-connect
using your favorite package manager:

- `npm install @aws-sdk/client-direct-connect`
- `yarn add @aws-sdk/client-direct-connect`
- `pnpm add @aws-sdk/client-direct-connect`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `DirectConnectClient` and
the commands you need, for example `ListVirtualInterfaceTestHistoryCommand`:

```js
// ES5 example
const { DirectConnectClient, ListVirtualInterfaceTestHistoryCommand } = require("@aws-sdk/client-direct-connect");
```

```ts
// ES6+ example
import { DirectConnectClient, ListVirtualInterfaceTestHistoryCommand } from "@aws-sdk/client-direct-connect";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new DirectConnectClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListVirtualInterfaceTestHistoryCommand(params);
```

#### Async/await

We recommend using [await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
operator to wait for the promise returned by send operation as follows:

```js
// async/await.
try {
  const data = await client.send(command);
  // process data.
} catch (error) {
  // error handling.
} finally {
  // finally.
}
```

Async-await is clean, concise, intuitive, easy to debug and has better error handling
as compared to using Promise chains or callbacks.

#### Promises

You can also use [Promise chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#chaining)
to execute send operation.

```js
client.send(command).then(
  (data) => {
    // process data.
  },
  (error) => {
    // error handling.
  }
);
```

Promises can also be called using `.catch()` and `.finally()` as follows:

```js
client
  .send(command)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  })
  .finally(() => {
    // finally.
  });
```

#### Callbacks

We do not recommend using callbacks because of [callback hell](http://callbackhell.com/),
but they are supported by the send operation.

```js
// callbacks.
client.send(command, (err, data) => {
  // process err and data.
});
```

#### v2 compatible style

The client can also send requests using v2 compatible style.
However, it results in a bigger bundle size and may be dropped in next major version. More details in the blog post
on [modular packages in AWS SDK for JavaScript](https://aws.amazon.com/blogs/developer/modular-packages-in-aws-sdk-for-javascript/)

```ts
import * as AWS from "@aws-sdk/client-direct-connect";
const client = new AWS.DirectConnect({ region: "REGION" });

// async/await.
try {
  const data = await client.listVirtualInterfaceTestHistory(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listVirtualInterfaceTestHistory(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listVirtualInterfaceTestHistory(params, (err, data) => {
  // process err and data.
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information,
as well as response metadata (e.g. request id).

```js
try {
  const data = await client.send(command);
  // process data.
} catch (error) {
  const { requestId, cfId, extendedRequestId } = error.$metadata;
  console.log({ requestId, cfId, extendedRequestId });
  /**
   * The keys within exceptions are also parsed.
   * You can access them by specifying exception names:
   * if (error.name === 'SomeServiceException') {
   *     const value = error.specialKeyInException;
   * }
   */
}
```

## Getting Help

Please use these community resources for getting help.
We use the GitHub issues for tracking bugs and feature requests, but have limited bandwidth to address them.

- Visit [Developer Guide](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/welcome.html)
  or [API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/index.html).
- Check out the blog posts tagged with [`aws-sdk-js`](https://aws.amazon.com/blogs/developer/tag/aws-sdk-js/)
  on AWS Developer Blog.
- Ask a question on [StackOverflow](https://stackoverflow.com/questions/tagged/aws-sdk-js) and tag it with `aws-sdk-js`.
- Join the AWS JavaScript community on [gitter](https://gitter.im/aws/aws-sdk-js-v3).
- If it turns out that you may have found a bug, please [open an issue](https://github.com/aws/aws-sdk-js-v3/issues/new/choose).

To test your universal JavaScript code in Node.js, browser and react-native environments,
visit our [code samples repo](https://github.com/aws-samples/aws-sdk-js-tests).

## Contributing

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-direct-connect` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AcceptDirectConnectGatewayAssociationProposal
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/AcceptDirectConnectGatewayAssociationProposalCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/AcceptDirectConnectGatewayAssociationProposalCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/AcceptDirectConnectGatewayAssociationProposalCommandOutput/)

</details>
<details>
<summary>
AllocateConnectionOnInterconnect
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/AllocateConnectionOnInterconnectCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/AllocateConnectionOnInterconnectCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/AllocateConnectionOnInterconnectCommandOutput/)

</details>
<details>
<summary>
AllocateHostedConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/AllocateHostedConnectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/AllocateHostedConnectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/AllocateHostedConnectionCommandOutput/)

</details>
<details>
<summary>
AllocatePrivateVirtualInterface
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/AllocatePrivateVirtualInterfaceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/AllocatePrivateVirtualInterfaceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/AllocatePrivateVirtualInterfaceCommandOutput/)

</details>
<details>
<summary>
AllocatePublicVirtualInterface
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/AllocatePublicVirtualInterfaceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/AllocatePublicVirtualInterfaceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/AllocatePublicVirtualInterfaceCommandOutput/)

</details>
<details>
<summary>
AllocateTransitVirtualInterface
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/AllocateTransitVirtualInterfaceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/AllocateTransitVirtualInterfaceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/AllocateTransitVirtualInterfaceCommandOutput/)

</details>
<details>
<summary>
AssociateConnectionWithLag
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/AssociateConnectionWithLagCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/AssociateConnectionWithLagCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/AssociateConnectionWithLagCommandOutput/)

</details>
<details>
<summary>
AssociateHostedConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/AssociateHostedConnectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/AssociateHostedConnectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/AssociateHostedConnectionCommandOutput/)

</details>
<details>
<summary>
AssociateMacSecKey
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/AssociateMacSecKeyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/AssociateMacSecKeyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/AssociateMacSecKeyCommandOutput/)

</details>
<details>
<summary>
AssociateVirtualInterface
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/AssociateVirtualInterfaceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/AssociateVirtualInterfaceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/AssociateVirtualInterfaceCommandOutput/)

</details>
<details>
<summary>
ConfirmConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/ConfirmConnectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/ConfirmConnectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/ConfirmConnectionCommandOutput/)

</details>
<details>
<summary>
ConfirmCustomerAgreement
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/ConfirmCustomerAgreementCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/ConfirmCustomerAgreementCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/ConfirmCustomerAgreementCommandOutput/)

</details>
<details>
<summary>
ConfirmPrivateVirtualInterface
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/ConfirmPrivateVirtualInterfaceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/ConfirmPrivateVirtualInterfaceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/ConfirmPrivateVirtualInterfaceCommandOutput/)

</details>
<details>
<summary>
ConfirmPublicVirtualInterface
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/ConfirmPublicVirtualInterfaceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/ConfirmPublicVirtualInterfaceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/ConfirmPublicVirtualInterfaceCommandOutput/)

</details>
<details>
<summary>
ConfirmTransitVirtualInterface
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/ConfirmTransitVirtualInterfaceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/ConfirmTransitVirtualInterfaceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/ConfirmTransitVirtualInterfaceCommandOutput/)

</details>
<details>
<summary>
CreateBGPPeer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/CreateBGPPeerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/CreateBGPPeerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/CreateBGPPeerCommandOutput/)

</details>
<details>
<summary>
CreateConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/CreateConnectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/CreateConnectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/CreateConnectionCommandOutput/)

</details>
<details>
<summary>
CreateDirectConnectGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/CreateDirectConnectGatewayCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/CreateDirectConnectGatewayCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/CreateDirectConnectGatewayCommandOutput/)

</details>
<details>
<summary>
CreateDirectConnectGatewayAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/CreateDirectConnectGatewayAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/CreateDirectConnectGatewayAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/CreateDirectConnectGatewayAssociationCommandOutput/)

</details>
<details>
<summary>
CreateDirectConnectGatewayAssociationProposal
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/CreateDirectConnectGatewayAssociationProposalCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/CreateDirectConnectGatewayAssociationProposalCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/CreateDirectConnectGatewayAssociationProposalCommandOutput/)

</details>
<details>
<summary>
CreateInterconnect
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/CreateInterconnectCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/CreateInterconnectCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/CreateInterconnectCommandOutput/)

</details>
<details>
<summary>
CreateLag
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/CreateLagCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/CreateLagCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/CreateLagCommandOutput/)

</details>
<details>
<summary>
CreatePrivateVirtualInterface
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/CreatePrivateVirtualInterfaceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/CreatePrivateVirtualInterfaceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/CreatePrivateVirtualInterfaceCommandOutput/)

</details>
<details>
<summary>
CreatePublicVirtualInterface
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/CreatePublicVirtualInterfaceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/CreatePublicVirtualInterfaceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/CreatePublicVirtualInterfaceCommandOutput/)

</details>
<details>
<summary>
CreateTransitVirtualInterface
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/CreateTransitVirtualInterfaceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/CreateTransitVirtualInterfaceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/CreateTransitVirtualInterfaceCommandOutput/)

</details>
<details>
<summary>
DeleteBGPPeer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/DeleteBGPPeerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/DeleteBGPPeerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/DeleteBGPPeerCommandOutput/)

</details>
<details>
<summary>
DeleteConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/DeleteConnectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/DeleteConnectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/DeleteConnectionCommandOutput/)

</details>
<details>
<summary>
DeleteDirectConnectGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/DeleteDirectConnectGatewayCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/DeleteDirectConnectGatewayCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/DeleteDirectConnectGatewayCommandOutput/)

</details>
<details>
<summary>
DeleteDirectConnectGatewayAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/DeleteDirectConnectGatewayAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/DeleteDirectConnectGatewayAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/DeleteDirectConnectGatewayAssociationCommandOutput/)

</details>
<details>
<summary>
DeleteDirectConnectGatewayAssociationProposal
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/DeleteDirectConnectGatewayAssociationProposalCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/DeleteDirectConnectGatewayAssociationProposalCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/DeleteDirectConnectGatewayAssociationProposalCommandOutput/)

</details>
<details>
<summary>
DeleteInterconnect
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/DeleteInterconnectCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/DeleteInterconnectCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/DeleteInterconnectCommandOutput/)

</details>
<details>
<summary>
DeleteLag
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/DeleteLagCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/DeleteLagCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/DeleteLagCommandOutput/)

</details>
<details>
<summary>
DeleteVirtualInterface
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/DeleteVirtualInterfaceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/DeleteVirtualInterfaceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/DeleteVirtualInterfaceCommandOutput/)

</details>
<details>
<summary>
DescribeConnectionLoa
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/DescribeConnectionLoaCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/DescribeConnectionLoaCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/DescribeConnectionLoaCommandOutput/)

</details>
<details>
<summary>
DescribeConnections
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/DescribeConnectionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/DescribeConnectionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/DescribeConnectionsCommandOutput/)

</details>
<details>
<summary>
DescribeConnectionsOnInterconnect
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/DescribeConnectionsOnInterconnectCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/DescribeConnectionsOnInterconnectCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/DescribeConnectionsOnInterconnectCommandOutput/)

</details>
<details>
<summary>
DescribeCustomerMetadata
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/DescribeCustomerMetadataCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/DescribeCustomerMetadataCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/DescribeCustomerMetadataCommandOutput/)

</details>
<details>
<summary>
DescribeDirectConnectGatewayAssociationProposals
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/DescribeDirectConnectGatewayAssociationProposalsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/DescribeDirectConnectGatewayAssociationProposalsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/DescribeDirectConnectGatewayAssociationProposalsCommandOutput/)

</details>
<details>
<summary>
DescribeDirectConnectGatewayAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/DescribeDirectConnectGatewayAssociationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/DescribeDirectConnectGatewayAssociationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/DescribeDirectConnectGatewayAssociationsCommandOutput/)

</details>
<details>
<summary>
DescribeDirectConnectGatewayAttachments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/DescribeDirectConnectGatewayAttachmentsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/DescribeDirectConnectGatewayAttachmentsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/DescribeDirectConnectGatewayAttachmentsCommandOutput/)

</details>
<details>
<summary>
DescribeDirectConnectGateways
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/DescribeDirectConnectGatewaysCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/DescribeDirectConnectGatewaysCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/DescribeDirectConnectGatewaysCommandOutput/)

</details>
<details>
<summary>
DescribeHostedConnections
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/DescribeHostedConnectionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/DescribeHostedConnectionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/DescribeHostedConnectionsCommandOutput/)

</details>
<details>
<summary>
DescribeInterconnectLoa
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/DescribeInterconnectLoaCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/DescribeInterconnectLoaCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/DescribeInterconnectLoaCommandOutput/)

</details>
<details>
<summary>
DescribeInterconnects
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/DescribeInterconnectsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/DescribeInterconnectsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/DescribeInterconnectsCommandOutput/)

</details>
<details>
<summary>
DescribeLags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/DescribeLagsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/DescribeLagsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/DescribeLagsCommandOutput/)

</details>
<details>
<summary>
DescribeLoa
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/DescribeLoaCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/DescribeLoaCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/DescribeLoaCommandOutput/)

</details>
<details>
<summary>
DescribeLocations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/DescribeLocationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/DescribeLocationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/DescribeLocationsCommandOutput/)

</details>
<details>
<summary>
DescribeRouterConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/DescribeRouterConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/DescribeRouterConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/DescribeRouterConfigurationCommandOutput/)

</details>
<details>
<summary>
DescribeTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/DescribeTagsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/DescribeTagsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/DescribeTagsCommandOutput/)

</details>
<details>
<summary>
DescribeVirtualGateways
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/DescribeVirtualGatewaysCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/DescribeVirtualGatewaysCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/DescribeVirtualGatewaysCommandOutput/)

</details>
<details>
<summary>
DescribeVirtualInterfaces
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/DescribeVirtualInterfacesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/DescribeVirtualInterfacesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/DescribeVirtualInterfacesCommandOutput/)

</details>
<details>
<summary>
DisassociateConnectionFromLag
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/DisassociateConnectionFromLagCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/DisassociateConnectionFromLagCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/DisassociateConnectionFromLagCommandOutput/)

</details>
<details>
<summary>
DisassociateMacSecKey
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/DisassociateMacSecKeyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/DisassociateMacSecKeyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/DisassociateMacSecKeyCommandOutput/)

</details>
<details>
<summary>
ListVirtualInterfaceTestHistory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/ListVirtualInterfaceTestHistoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/ListVirtualInterfaceTestHistoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/ListVirtualInterfaceTestHistoryCommandOutput/)

</details>
<details>
<summary>
StartBgpFailoverTest
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/StartBgpFailoverTestCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/StartBgpFailoverTestCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/StartBgpFailoverTestCommandOutput/)

</details>
<details>
<summary>
StopBgpFailoverTest
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/StopBgpFailoverTestCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/StopBgpFailoverTestCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/StopBgpFailoverTestCommandOutput/)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/TagResourceCommandOutput/)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/UntagResourceCommandOutput/)

</details>
<details>
<summary>
UpdateConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/UpdateConnectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/UpdateConnectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/UpdateConnectionCommandOutput/)

</details>
<details>
<summary>
UpdateDirectConnectGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/UpdateDirectConnectGatewayCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/UpdateDirectConnectGatewayCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/UpdateDirectConnectGatewayCommandOutput/)

</details>
<details>
<summary>
UpdateDirectConnectGatewayAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/UpdateDirectConnectGatewayAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/UpdateDirectConnectGatewayAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/UpdateDirectConnectGatewayAssociationCommandOutput/)

</details>
<details>
<summary>
UpdateLag
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/UpdateLagCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/UpdateLagCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/UpdateLagCommandOutput/)

</details>
<details>
<summary>
UpdateVirtualInterfaceAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/direct-connect/command/UpdateVirtualInterfaceAttributesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/UpdateVirtualInterfaceAttributesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-direct-connect/Interface/UpdateVirtualInterfaceAttributesCommandOutput/)

</details>
