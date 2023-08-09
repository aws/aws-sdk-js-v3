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

To install the this package, simply type add or install @aws-sdk/client-direct-connect
using your favorite package manager:

- `npm install @aws-sdk/client-direct-connect`
- `yarn add @aws-sdk/client-direct-connect`
- `pnpm add @aws-sdk/client-direct-connect`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `DirectConnectClient` and
the commands you need, for example `AcceptDirectConnectGatewayAssociationProposalCommand`:

```js
// ES5 example
const {
  DirectConnectClient,
  AcceptDirectConnectGatewayAssociationProposalCommand,
} = require("@aws-sdk/client-direct-connect");
```

```ts
// ES6+ example
import {
  DirectConnectClient,
  AcceptDirectConnectGatewayAssociationProposalCommand,
} from "@aws-sdk/client-direct-connect";
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
const command = new AcceptDirectConnectGatewayAssociationProposalCommand(params);
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
  const data = await client.acceptDirectConnectGatewayAssociationProposal(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .acceptDirectConnectGatewayAssociationProposal(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.acceptDirectConnectGatewayAssociationProposal(params, (err, data) => {
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
  const { requestId, cfId, extendedRequestId } = error.$$metadata;
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/acceptdirectconnectgatewayassociationproposalcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/acceptdirectconnectgatewayassociationproposalcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/acceptdirectconnectgatewayassociationproposalcommandoutput.html)

</details>
<details>
<summary>
AllocateConnectionOnInterconnect
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/allocateconnectiononinterconnectcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/allocateconnectiononinterconnectcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/allocateconnectiononinterconnectcommandoutput.html)

</details>
<details>
<summary>
AllocateHostedConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/allocatehostedconnectioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/allocatehostedconnectioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/allocatehostedconnectioncommandoutput.html)

</details>
<details>
<summary>
AllocatePrivateVirtualInterface
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/allocateprivatevirtualinterfacecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/allocateprivatevirtualinterfacecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/allocateprivatevirtualinterfacecommandoutput.html)

</details>
<details>
<summary>
AllocatePublicVirtualInterface
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/allocatepublicvirtualinterfacecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/allocatepublicvirtualinterfacecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/allocatepublicvirtualinterfacecommandoutput.html)

</details>
<details>
<summary>
AllocateTransitVirtualInterface
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/allocatetransitvirtualinterfacecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/allocatetransitvirtualinterfacecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/allocatetransitvirtualinterfacecommandoutput.html)

</details>
<details>
<summary>
AssociateConnectionWithLag
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/associateconnectionwithlagcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/associateconnectionwithlagcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/associateconnectionwithlagcommandoutput.html)

</details>
<details>
<summary>
AssociateHostedConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/associatehostedconnectioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/associatehostedconnectioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/associatehostedconnectioncommandoutput.html)

</details>
<details>
<summary>
AssociateMacSecKey
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/associatemacseckeycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/associatemacseckeycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/associatemacseckeycommandoutput.html)

</details>
<details>
<summary>
AssociateVirtualInterface
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/associatevirtualinterfacecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/associatevirtualinterfacecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/associatevirtualinterfacecommandoutput.html)

</details>
<details>
<summary>
ConfirmConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/confirmconnectioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/confirmconnectioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/confirmconnectioncommandoutput.html)

</details>
<details>
<summary>
ConfirmCustomerAgreement
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/confirmcustomeragreementcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/confirmcustomeragreementcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/confirmcustomeragreementcommandoutput.html)

</details>
<details>
<summary>
ConfirmPrivateVirtualInterface
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/confirmprivatevirtualinterfacecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/confirmprivatevirtualinterfacecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/confirmprivatevirtualinterfacecommandoutput.html)

</details>
<details>
<summary>
ConfirmPublicVirtualInterface
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/confirmpublicvirtualinterfacecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/confirmpublicvirtualinterfacecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/confirmpublicvirtualinterfacecommandoutput.html)

</details>
<details>
<summary>
ConfirmTransitVirtualInterface
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/confirmtransitvirtualinterfacecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/confirmtransitvirtualinterfacecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/confirmtransitvirtualinterfacecommandoutput.html)

</details>
<details>
<summary>
CreateBGPPeer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/createbgppeercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/createbgppeercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/createbgppeercommandoutput.html)

</details>
<details>
<summary>
CreateConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/createconnectioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/createconnectioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/createconnectioncommandoutput.html)

</details>
<details>
<summary>
CreateDirectConnectGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/createdirectconnectgatewaycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/createdirectconnectgatewaycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/createdirectconnectgatewaycommandoutput.html)

</details>
<details>
<summary>
CreateDirectConnectGatewayAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/createdirectconnectgatewayassociationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/createdirectconnectgatewayassociationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/createdirectconnectgatewayassociationcommandoutput.html)

</details>
<details>
<summary>
CreateDirectConnectGatewayAssociationProposal
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/createdirectconnectgatewayassociationproposalcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/createdirectconnectgatewayassociationproposalcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/createdirectconnectgatewayassociationproposalcommandoutput.html)

</details>
<details>
<summary>
CreateInterconnect
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/createinterconnectcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/createinterconnectcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/createinterconnectcommandoutput.html)

</details>
<details>
<summary>
CreateLag
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/createlagcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/createlagcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/createlagcommandoutput.html)

</details>
<details>
<summary>
CreatePrivateVirtualInterface
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/createprivatevirtualinterfacecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/createprivatevirtualinterfacecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/createprivatevirtualinterfacecommandoutput.html)

</details>
<details>
<summary>
CreatePublicVirtualInterface
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/createpublicvirtualinterfacecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/createpublicvirtualinterfacecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/createpublicvirtualinterfacecommandoutput.html)

</details>
<details>
<summary>
CreateTransitVirtualInterface
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/createtransitvirtualinterfacecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/createtransitvirtualinterfacecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/createtransitvirtualinterfacecommandoutput.html)

</details>
<details>
<summary>
DeleteBGPPeer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/deletebgppeercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/deletebgppeercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/deletebgppeercommandoutput.html)

</details>
<details>
<summary>
DeleteConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/deleteconnectioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/deleteconnectioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/deleteconnectioncommandoutput.html)

</details>
<details>
<summary>
DeleteDirectConnectGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/deletedirectconnectgatewaycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/deletedirectconnectgatewaycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/deletedirectconnectgatewaycommandoutput.html)

</details>
<details>
<summary>
DeleteDirectConnectGatewayAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/deletedirectconnectgatewayassociationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/deletedirectconnectgatewayassociationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/deletedirectconnectgatewayassociationcommandoutput.html)

</details>
<details>
<summary>
DeleteDirectConnectGatewayAssociationProposal
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/deletedirectconnectgatewayassociationproposalcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/deletedirectconnectgatewayassociationproposalcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/deletedirectconnectgatewayassociationproposalcommandoutput.html)

</details>
<details>
<summary>
DeleteInterconnect
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/deleteinterconnectcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/deleteinterconnectcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/deleteinterconnectcommandoutput.html)

</details>
<details>
<summary>
DeleteLag
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/deletelagcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/deletelagcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/deletelagcommandoutput.html)

</details>
<details>
<summary>
DeleteVirtualInterface
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/deletevirtualinterfacecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/deletevirtualinterfacecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/deletevirtualinterfacecommandoutput.html)

</details>
<details>
<summary>
DescribeConnectionLoa
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/describeconnectionloacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/describeconnectionloacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/describeconnectionloacommandoutput.html)

</details>
<details>
<summary>
DescribeConnections
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/describeconnectionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/describeconnectionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/describeconnectionscommandoutput.html)

</details>
<details>
<summary>
DescribeConnectionsOnInterconnect
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/describeconnectionsoninterconnectcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/describeconnectionsoninterconnectcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/describeconnectionsoninterconnectcommandoutput.html)

</details>
<details>
<summary>
DescribeCustomerMetadata
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/describecustomermetadatacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/describecustomermetadatacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/describecustomermetadatacommandoutput.html)

</details>
<details>
<summary>
DescribeDirectConnectGatewayAssociationProposals
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/describedirectconnectgatewayassociationproposalscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/describedirectconnectgatewayassociationproposalscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/describedirectconnectgatewayassociationproposalscommandoutput.html)

</details>
<details>
<summary>
DescribeDirectConnectGatewayAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/describedirectconnectgatewayassociationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/describedirectconnectgatewayassociationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/describedirectconnectgatewayassociationscommandoutput.html)

</details>
<details>
<summary>
DescribeDirectConnectGatewayAttachments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/describedirectconnectgatewayattachmentscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/describedirectconnectgatewayattachmentscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/describedirectconnectgatewayattachmentscommandoutput.html)

</details>
<details>
<summary>
DescribeDirectConnectGateways
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/describedirectconnectgatewayscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/describedirectconnectgatewayscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/describedirectconnectgatewayscommandoutput.html)

</details>
<details>
<summary>
DescribeHostedConnections
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/describehostedconnectionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/describehostedconnectionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/describehostedconnectionscommandoutput.html)

</details>
<details>
<summary>
DescribeInterconnectLoa
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/describeinterconnectloacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/describeinterconnectloacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/describeinterconnectloacommandoutput.html)

</details>
<details>
<summary>
DescribeInterconnects
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/describeinterconnectscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/describeinterconnectscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/describeinterconnectscommandoutput.html)

</details>
<details>
<summary>
DescribeLags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/describelagscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/describelagscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/describelagscommandoutput.html)

</details>
<details>
<summary>
DescribeLoa
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/describeloacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/describeloacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/describeloacommandoutput.html)

</details>
<details>
<summary>
DescribeLocations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/describelocationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/describelocationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/describelocationscommandoutput.html)

</details>
<details>
<summary>
DescribeRouterConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/describerouterconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/describerouterconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/describerouterconfigurationcommandoutput.html)

</details>
<details>
<summary>
DescribeTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/describetagscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/describetagscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/describetagscommandoutput.html)

</details>
<details>
<summary>
DescribeVirtualGateways
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/describevirtualgatewayscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/describevirtualgatewayscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/describevirtualgatewayscommandoutput.html)

</details>
<details>
<summary>
DescribeVirtualInterfaces
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/describevirtualinterfacescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/describevirtualinterfacescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/describevirtualinterfacescommandoutput.html)

</details>
<details>
<summary>
DisassociateConnectionFromLag
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/disassociateconnectionfromlagcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/disassociateconnectionfromlagcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/disassociateconnectionfromlagcommandoutput.html)

</details>
<details>
<summary>
DisassociateMacSecKey
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/disassociatemacseckeycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/disassociatemacseckeycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/disassociatemacseckeycommandoutput.html)

</details>
<details>
<summary>
ListVirtualInterfaceTestHistory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/listvirtualinterfacetesthistorycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/listvirtualinterfacetesthistorycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/listvirtualinterfacetesthistorycommandoutput.html)

</details>
<details>
<summary>
StartBgpFailoverTest
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/startbgpfailovertestcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/startbgpfailovertestcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/startbgpfailovertestcommandoutput.html)

</details>
<details>
<summary>
StopBgpFailoverTest
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/stopbgpfailovertestcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/stopbgpfailovertestcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/stopbgpfailovertestcommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/updateconnectioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/updateconnectioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/updateconnectioncommandoutput.html)

</details>
<details>
<summary>
UpdateDirectConnectGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/updatedirectconnectgatewaycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/updatedirectconnectgatewaycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/updatedirectconnectgatewaycommandoutput.html)

</details>
<details>
<summary>
UpdateDirectConnectGatewayAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/updatedirectconnectgatewayassociationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/updatedirectconnectgatewayassociationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/updatedirectconnectgatewayassociationcommandoutput.html)

</details>
<details>
<summary>
UpdateLag
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/updatelagcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/updatelagcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/updatelagcommandoutput.html)

</details>
<details>
<summary>
UpdateVirtualInterfaceAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/classes/updatevirtualinterfaceattributescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/updatevirtualinterfaceattributescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-direct-connect/interfaces/updatevirtualinterfaceattributescommandoutput.html)

</details>
