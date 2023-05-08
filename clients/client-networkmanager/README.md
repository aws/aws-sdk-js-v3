<!-- generated file, do not edit directly -->

# @aws-sdk/client-networkmanager

## Description

AWS SDK for JavaScript NetworkManager Client for Node.js, Browser and React Native.

<p>Amazon Web Services enables you to centrally manage your Amazon Web Services Cloud WAN core network and your Transit Gateway network across Amazon Web Services accounts, Regions, and on-premises locations.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-networkmanager
using your favorite package manager:

- `npm install @aws-sdk/client-networkmanager`
- `yarn add @aws-sdk/client-networkmanager`
- `pnpm add @aws-sdk/client-networkmanager`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `NetworkManagerClient` and
the commands you need, for example `AcceptAttachmentCommand`:

```js
// ES5 example
const { NetworkManagerClient, AcceptAttachmentCommand } = require("@aws-sdk/client-networkmanager");
```

```ts
// ES6+ example
import { NetworkManagerClient, AcceptAttachmentCommand } from "@aws-sdk/client-networkmanager";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new NetworkManagerClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new AcceptAttachmentCommand(params);
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
import * as AWS from "@aws-sdk/client-networkmanager";
const client = new AWS.NetworkManager({ region: "REGION" });

// async/await.
try {
  const data = await client.acceptAttachment(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .acceptAttachment(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.acceptAttachment(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-networkmanager` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AcceptAttachment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/acceptattachmentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/acceptattachmentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/acceptattachmentcommandoutput.html)

</details>
<details>
<summary>
AssociateConnectPeer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/associateconnectpeercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/associateconnectpeercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/associateconnectpeercommandoutput.html)

</details>
<details>
<summary>
AssociateCustomerGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/associatecustomergatewaycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/associatecustomergatewaycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/associatecustomergatewaycommandoutput.html)

</details>
<details>
<summary>
AssociateLink
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/associatelinkcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/associatelinkcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/associatelinkcommandoutput.html)

</details>
<details>
<summary>
AssociateTransitGatewayConnectPeer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/associatetransitgatewayconnectpeercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/associatetransitgatewayconnectpeercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/associatetransitgatewayconnectpeercommandoutput.html)

</details>
<details>
<summary>
CreateConnectAttachment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/createconnectattachmentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/createconnectattachmentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/createconnectattachmentcommandoutput.html)

</details>
<details>
<summary>
CreateConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/createconnectioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/createconnectioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/createconnectioncommandoutput.html)

</details>
<details>
<summary>
CreateConnectPeer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/createconnectpeercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/createconnectpeercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/createconnectpeercommandoutput.html)

</details>
<details>
<summary>
CreateCoreNetwork
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/createcorenetworkcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/createcorenetworkcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/createcorenetworkcommandoutput.html)

</details>
<details>
<summary>
CreateDevice
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/createdevicecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/createdevicecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/createdevicecommandoutput.html)

</details>
<details>
<summary>
CreateGlobalNetwork
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/createglobalnetworkcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/createglobalnetworkcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/createglobalnetworkcommandoutput.html)

</details>
<details>
<summary>
CreateLink
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/createlinkcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/createlinkcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/createlinkcommandoutput.html)

</details>
<details>
<summary>
CreateSite
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/createsitecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/createsitecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/createsitecommandoutput.html)

</details>
<details>
<summary>
CreateSiteToSiteVpnAttachment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/createsitetositevpnattachmentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/createsitetositevpnattachmentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/createsitetositevpnattachmentcommandoutput.html)

</details>
<details>
<summary>
CreateTransitGatewayPeering
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/createtransitgatewaypeeringcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/createtransitgatewaypeeringcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/createtransitgatewaypeeringcommandoutput.html)

</details>
<details>
<summary>
CreateTransitGatewayRouteTableAttachment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/createtransitgatewayroutetableattachmentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/createtransitgatewayroutetableattachmentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/createtransitgatewayroutetableattachmentcommandoutput.html)

</details>
<details>
<summary>
CreateVpcAttachment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/createvpcattachmentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/createvpcattachmentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/createvpcattachmentcommandoutput.html)

</details>
<details>
<summary>
DeleteAttachment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/deleteattachmentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/deleteattachmentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/deleteattachmentcommandoutput.html)

</details>
<details>
<summary>
DeleteConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/deleteconnectioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/deleteconnectioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/deleteconnectioncommandoutput.html)

</details>
<details>
<summary>
DeleteConnectPeer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/deleteconnectpeercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/deleteconnectpeercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/deleteconnectpeercommandoutput.html)

</details>
<details>
<summary>
DeleteCoreNetwork
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/deletecorenetworkcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/deletecorenetworkcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/deletecorenetworkcommandoutput.html)

</details>
<details>
<summary>
DeleteCoreNetworkPolicyVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/deletecorenetworkpolicyversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/deletecorenetworkpolicyversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/deletecorenetworkpolicyversioncommandoutput.html)

</details>
<details>
<summary>
DeleteDevice
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/deletedevicecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/deletedevicecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/deletedevicecommandoutput.html)

</details>
<details>
<summary>
DeleteGlobalNetwork
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/deleteglobalnetworkcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/deleteglobalnetworkcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/deleteglobalnetworkcommandoutput.html)

</details>
<details>
<summary>
DeleteLink
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/deletelinkcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/deletelinkcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/deletelinkcommandoutput.html)

</details>
<details>
<summary>
DeletePeering
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/deletepeeringcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/deletepeeringcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/deletepeeringcommandoutput.html)

</details>
<details>
<summary>
DeleteResourcePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/deleteresourcepolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/deleteresourcepolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/deleteresourcepolicycommandoutput.html)

</details>
<details>
<summary>
DeleteSite
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/deletesitecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/deletesitecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/deletesitecommandoutput.html)

</details>
<details>
<summary>
DeregisterTransitGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/deregistertransitgatewaycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/deregistertransitgatewaycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/deregistertransitgatewaycommandoutput.html)

</details>
<details>
<summary>
DescribeGlobalNetworks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/describeglobalnetworkscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/describeglobalnetworkscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/describeglobalnetworkscommandoutput.html)

</details>
<details>
<summary>
DisassociateConnectPeer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/disassociateconnectpeercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/disassociateconnectpeercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/disassociateconnectpeercommandoutput.html)

</details>
<details>
<summary>
DisassociateCustomerGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/disassociatecustomergatewaycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/disassociatecustomergatewaycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/disassociatecustomergatewaycommandoutput.html)

</details>
<details>
<summary>
DisassociateLink
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/disassociatelinkcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/disassociatelinkcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/disassociatelinkcommandoutput.html)

</details>
<details>
<summary>
DisassociateTransitGatewayConnectPeer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/disassociatetransitgatewayconnectpeercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/disassociatetransitgatewayconnectpeercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/disassociatetransitgatewayconnectpeercommandoutput.html)

</details>
<details>
<summary>
ExecuteCoreNetworkChangeSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/executecorenetworkchangesetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/executecorenetworkchangesetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/executecorenetworkchangesetcommandoutput.html)

</details>
<details>
<summary>
GetConnectAttachment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/getconnectattachmentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/getconnectattachmentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/getconnectattachmentcommandoutput.html)

</details>
<details>
<summary>
GetConnections
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/getconnectionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/getconnectionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/getconnectionscommandoutput.html)

</details>
<details>
<summary>
GetConnectPeer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/getconnectpeercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/getconnectpeercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/getconnectpeercommandoutput.html)

</details>
<details>
<summary>
GetConnectPeerAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/getconnectpeerassociationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/getconnectpeerassociationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/getconnectpeerassociationscommandoutput.html)

</details>
<details>
<summary>
GetCoreNetwork
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/getcorenetworkcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/getcorenetworkcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/getcorenetworkcommandoutput.html)

</details>
<details>
<summary>
GetCoreNetworkChangeEvents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/getcorenetworkchangeeventscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/getcorenetworkchangeeventscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/getcorenetworkchangeeventscommandoutput.html)

</details>
<details>
<summary>
GetCoreNetworkChangeSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/getcorenetworkchangesetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/getcorenetworkchangesetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/getcorenetworkchangesetcommandoutput.html)

</details>
<details>
<summary>
GetCoreNetworkPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/getcorenetworkpolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/getcorenetworkpolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/getcorenetworkpolicycommandoutput.html)

</details>
<details>
<summary>
GetCustomerGatewayAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/getcustomergatewayassociationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/getcustomergatewayassociationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/getcustomergatewayassociationscommandoutput.html)

</details>
<details>
<summary>
GetDevices
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/getdevicescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/getdevicescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/getdevicescommandoutput.html)

</details>
<details>
<summary>
GetLinkAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/getlinkassociationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/getlinkassociationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/getlinkassociationscommandoutput.html)

</details>
<details>
<summary>
GetLinks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/getlinkscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/getlinkscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/getlinkscommandoutput.html)

</details>
<details>
<summary>
GetNetworkResourceCounts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/getnetworkresourcecountscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/getnetworkresourcecountscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/getnetworkresourcecountscommandoutput.html)

</details>
<details>
<summary>
GetNetworkResourceRelationships
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/getnetworkresourcerelationshipscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/getnetworkresourcerelationshipscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/getnetworkresourcerelationshipscommandoutput.html)

</details>
<details>
<summary>
GetNetworkResources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/getnetworkresourcescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/getnetworkresourcescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/getnetworkresourcescommandoutput.html)

</details>
<details>
<summary>
GetNetworkRoutes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/getnetworkroutescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/getnetworkroutescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/getnetworkroutescommandoutput.html)

</details>
<details>
<summary>
GetNetworkTelemetry
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/getnetworktelemetrycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/getnetworktelemetrycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/getnetworktelemetrycommandoutput.html)

</details>
<details>
<summary>
GetResourcePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/getresourcepolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/getresourcepolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/getresourcepolicycommandoutput.html)

</details>
<details>
<summary>
GetRouteAnalysis
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/getrouteanalysiscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/getrouteanalysiscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/getrouteanalysiscommandoutput.html)

</details>
<details>
<summary>
GetSites
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/getsitescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/getsitescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/getsitescommandoutput.html)

</details>
<details>
<summary>
GetSiteToSiteVpnAttachment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/getsitetositevpnattachmentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/getsitetositevpnattachmentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/getsitetositevpnattachmentcommandoutput.html)

</details>
<details>
<summary>
GetTransitGatewayConnectPeerAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/gettransitgatewayconnectpeerassociationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/gettransitgatewayconnectpeerassociationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/gettransitgatewayconnectpeerassociationscommandoutput.html)

</details>
<details>
<summary>
GetTransitGatewayPeering
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/gettransitgatewaypeeringcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/gettransitgatewaypeeringcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/gettransitgatewaypeeringcommandoutput.html)

</details>
<details>
<summary>
GetTransitGatewayRegistrations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/gettransitgatewayregistrationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/gettransitgatewayregistrationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/gettransitgatewayregistrationscommandoutput.html)

</details>
<details>
<summary>
GetTransitGatewayRouteTableAttachment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/gettransitgatewayroutetableattachmentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/gettransitgatewayroutetableattachmentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/gettransitgatewayroutetableattachmentcommandoutput.html)

</details>
<details>
<summary>
GetVpcAttachment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/getvpcattachmentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/getvpcattachmentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/getvpcattachmentcommandoutput.html)

</details>
<details>
<summary>
ListAttachments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/listattachmentscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/listattachmentscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/listattachmentscommandoutput.html)

</details>
<details>
<summary>
ListConnectPeers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/listconnectpeerscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/listconnectpeerscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/listconnectpeerscommandoutput.html)

</details>
<details>
<summary>
ListCoreNetworkPolicyVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/listcorenetworkpolicyversionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/listcorenetworkpolicyversionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/listcorenetworkpolicyversionscommandoutput.html)

</details>
<details>
<summary>
ListCoreNetworks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/listcorenetworkscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/listcorenetworkscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/listcorenetworkscommandoutput.html)

</details>
<details>
<summary>
ListOrganizationServiceAccessStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/listorganizationserviceaccessstatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/listorganizationserviceaccessstatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/listorganizationserviceaccessstatuscommandoutput.html)

</details>
<details>
<summary>
ListPeerings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/listpeeringscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/listpeeringscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/listpeeringscommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
PutCoreNetworkPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/putcorenetworkpolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/putcorenetworkpolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/putcorenetworkpolicycommandoutput.html)

</details>
<details>
<summary>
PutResourcePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/putresourcepolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/putresourcepolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/putresourcepolicycommandoutput.html)

</details>
<details>
<summary>
RegisterTransitGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/registertransitgatewaycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/registertransitgatewaycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/registertransitgatewaycommandoutput.html)

</details>
<details>
<summary>
RejectAttachment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/rejectattachmentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/rejectattachmentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/rejectattachmentcommandoutput.html)

</details>
<details>
<summary>
RestoreCoreNetworkPolicyVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/restorecorenetworkpolicyversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/restorecorenetworkpolicyversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/restorecorenetworkpolicyversioncommandoutput.html)

</details>
<details>
<summary>
StartOrganizationServiceAccessUpdate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/startorganizationserviceaccessupdatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/startorganizationserviceaccessupdatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/startorganizationserviceaccessupdatecommandoutput.html)

</details>
<details>
<summary>
StartRouteAnalysis
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/startrouteanalysiscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/startrouteanalysiscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/startrouteanalysiscommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/updateconnectioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/updateconnectioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/updateconnectioncommandoutput.html)

</details>
<details>
<summary>
UpdateCoreNetwork
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/updatecorenetworkcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/updatecorenetworkcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/updatecorenetworkcommandoutput.html)

</details>
<details>
<summary>
UpdateDevice
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/updatedevicecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/updatedevicecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/updatedevicecommandoutput.html)

</details>
<details>
<summary>
UpdateGlobalNetwork
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/updateglobalnetworkcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/updateglobalnetworkcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/updateglobalnetworkcommandoutput.html)

</details>
<details>
<summary>
UpdateLink
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/updatelinkcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/updatelinkcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/updatelinkcommandoutput.html)

</details>
<details>
<summary>
UpdateNetworkResourceMetadata
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/updatenetworkresourcemetadatacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/updatenetworkresourcemetadatacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/updatenetworkresourcemetadatacommandoutput.html)

</details>
<details>
<summary>
UpdateSite
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/updatesitecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/updatesitecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/updatesitecommandoutput.html)

</details>
<details>
<summary>
UpdateVpcAttachment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/classes/updatevpcattachmentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/updatevpcattachmentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-networkmanager/interfaces/updatevpcattachmentcommandoutput.html)

</details>
