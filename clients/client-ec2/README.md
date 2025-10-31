<!-- generated file, do not edit directly -->

# @aws-sdk/client-ec2

## Description

AWS SDK for JavaScript EC2 Client for Node.js, Browser and React Native.

<fullname>Amazon Elastic Compute Cloud</fullname>

<p>You can access the features of Amazon Elastic Compute Cloud (Amazon EC2) programmatically. For more information,
see the <a href="https://docs.aws.amazon.com/ec2/latest/devguide">Amazon EC2 Developer Guide</a>.</p>

## Installing

To install this package, simply type add or install @aws-sdk/client-ec2
using your favorite package manager:

- `npm install @aws-sdk/client-ec2`
- `yarn add @aws-sdk/client-ec2`
- `pnpm add @aws-sdk/client-ec2`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `EC2Client` and
the commands you need, for example `ListImagesInRecycleBinCommand`:

```js
// ES5 example
const { EC2Client, ListImagesInRecycleBinCommand } = require("@aws-sdk/client-ec2");
```

```ts
// ES6+ example
import { EC2Client, ListImagesInRecycleBinCommand } from "@aws-sdk/client-ec2";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new EC2Client({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListImagesInRecycleBinCommand(params);
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
import * as AWS from "@aws-sdk/client-ec2";
const client = new AWS.EC2({ region: "REGION" });

// async/await.
try {
  const data = await client.listImagesInRecycleBin(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listImagesInRecycleBin(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listImagesInRecycleBin(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-ec2` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AcceptAddressTransfer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/AcceptAddressTransferCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AcceptAddressTransferCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AcceptAddressTransferCommandOutput/)

</details>
<details>
<summary>
AcceptCapacityReservationBillingOwnership
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/AcceptCapacityReservationBillingOwnershipCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AcceptCapacityReservationBillingOwnershipCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AcceptCapacityReservationBillingOwnershipCommandOutput/)

</details>
<details>
<summary>
AcceptReservedInstancesExchangeQuote
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/AcceptReservedInstancesExchangeQuoteCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AcceptReservedInstancesExchangeQuoteCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AcceptReservedInstancesExchangeQuoteCommandOutput/)

</details>
<details>
<summary>
AcceptTransitGatewayMulticastDomainAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/AcceptTransitGatewayMulticastDomainAssociationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AcceptTransitGatewayMulticastDomainAssociationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AcceptTransitGatewayMulticastDomainAssociationsCommandOutput/)

</details>
<details>
<summary>
AcceptTransitGatewayPeeringAttachment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/AcceptTransitGatewayPeeringAttachmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AcceptTransitGatewayPeeringAttachmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AcceptTransitGatewayPeeringAttachmentCommandOutput/)

</details>
<details>
<summary>
AcceptTransitGatewayVpcAttachment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/AcceptTransitGatewayVpcAttachmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AcceptTransitGatewayVpcAttachmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AcceptTransitGatewayVpcAttachmentCommandOutput/)

</details>
<details>
<summary>
AcceptVpcEndpointConnections
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/AcceptVpcEndpointConnectionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AcceptVpcEndpointConnectionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AcceptVpcEndpointConnectionsCommandOutput/)

</details>
<details>
<summary>
AcceptVpcPeeringConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/AcceptVpcPeeringConnectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AcceptVpcPeeringConnectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AcceptVpcPeeringConnectionCommandOutput/)

</details>
<details>
<summary>
AdvertiseByoipCidr
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/AdvertiseByoipCidrCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AdvertiseByoipCidrCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AdvertiseByoipCidrCommandOutput/)

</details>
<details>
<summary>
AllocateAddress
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/AllocateAddressCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AllocateAddressCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AllocateAddressCommandOutput/)

</details>
<details>
<summary>
AllocateHosts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/AllocateHostsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AllocateHostsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AllocateHostsCommandOutput/)

</details>
<details>
<summary>
AllocateIpamPoolCidr
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/AllocateIpamPoolCidrCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AllocateIpamPoolCidrCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AllocateIpamPoolCidrCommandOutput/)

</details>
<details>
<summary>
ApplySecurityGroupsToClientVpnTargetNetwork
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ApplySecurityGroupsToClientVpnTargetNetworkCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ApplySecurityGroupsToClientVpnTargetNetworkCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ApplySecurityGroupsToClientVpnTargetNetworkCommandOutput/)

</details>
<details>
<summary>
AssignIpv6Addresses
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/AssignIpv6AddressesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AssignIpv6AddressesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AssignIpv6AddressesCommandOutput/)

</details>
<details>
<summary>
AssignPrivateIpAddresses
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/AssignPrivateIpAddressesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AssignPrivateIpAddressesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AssignPrivateIpAddressesCommandOutput/)

</details>
<details>
<summary>
AssignPrivateNatGatewayAddress
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/AssignPrivateNatGatewayAddressCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AssignPrivateNatGatewayAddressCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AssignPrivateNatGatewayAddressCommandOutput/)

</details>
<details>
<summary>
AssociateAddress
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/AssociateAddressCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AssociateAddressCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AssociateAddressCommandOutput/)

</details>
<details>
<summary>
AssociateCapacityReservationBillingOwner
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/AssociateCapacityReservationBillingOwnerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AssociateCapacityReservationBillingOwnerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AssociateCapacityReservationBillingOwnerCommandOutput/)

</details>
<details>
<summary>
AssociateClientVpnTargetNetwork
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/AssociateClientVpnTargetNetworkCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AssociateClientVpnTargetNetworkCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AssociateClientVpnTargetNetworkCommandOutput/)

</details>
<details>
<summary>
AssociateDhcpOptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/AssociateDhcpOptionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AssociateDhcpOptionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AssociateDhcpOptionsCommandOutput/)

</details>
<details>
<summary>
AssociateEnclaveCertificateIamRole
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/AssociateEnclaveCertificateIamRoleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AssociateEnclaveCertificateIamRoleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AssociateEnclaveCertificateIamRoleCommandOutput/)

</details>
<details>
<summary>
AssociateIamInstanceProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/AssociateIamInstanceProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AssociateIamInstanceProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AssociateIamInstanceProfileCommandOutput/)

</details>
<details>
<summary>
AssociateInstanceEventWindow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/AssociateInstanceEventWindowCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AssociateInstanceEventWindowCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AssociateInstanceEventWindowCommandOutput/)

</details>
<details>
<summary>
AssociateIpamByoasn
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/AssociateIpamByoasnCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AssociateIpamByoasnCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AssociateIpamByoasnCommandOutput/)

</details>
<details>
<summary>
AssociateIpamResourceDiscovery
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/AssociateIpamResourceDiscoveryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AssociateIpamResourceDiscoveryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AssociateIpamResourceDiscoveryCommandOutput/)

</details>
<details>
<summary>
AssociateNatGatewayAddress
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/AssociateNatGatewayAddressCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AssociateNatGatewayAddressCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AssociateNatGatewayAddressCommandOutput/)

</details>
<details>
<summary>
AssociateRouteServer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/AssociateRouteServerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AssociateRouteServerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AssociateRouteServerCommandOutput/)

</details>
<details>
<summary>
AssociateRouteTable
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/AssociateRouteTableCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AssociateRouteTableCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AssociateRouteTableCommandOutput/)

</details>
<details>
<summary>
AssociateSecurityGroupVpc
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/AssociateSecurityGroupVpcCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AssociateSecurityGroupVpcCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AssociateSecurityGroupVpcCommandOutput/)

</details>
<details>
<summary>
AssociateSubnetCidrBlock
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/AssociateSubnetCidrBlockCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AssociateSubnetCidrBlockCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AssociateSubnetCidrBlockCommandOutput/)

</details>
<details>
<summary>
AssociateTransitGatewayMulticastDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/AssociateTransitGatewayMulticastDomainCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AssociateTransitGatewayMulticastDomainCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AssociateTransitGatewayMulticastDomainCommandOutput/)

</details>
<details>
<summary>
AssociateTransitGatewayPolicyTable
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/AssociateTransitGatewayPolicyTableCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AssociateTransitGatewayPolicyTableCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AssociateTransitGatewayPolicyTableCommandOutput/)

</details>
<details>
<summary>
AssociateTransitGatewayRouteTable
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/AssociateTransitGatewayRouteTableCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AssociateTransitGatewayRouteTableCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AssociateTransitGatewayRouteTableCommandOutput/)

</details>
<details>
<summary>
AssociateTrunkInterface
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/AssociateTrunkInterfaceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AssociateTrunkInterfaceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AssociateTrunkInterfaceCommandOutput/)

</details>
<details>
<summary>
AssociateVpcCidrBlock
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/AssociateVpcCidrBlockCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AssociateVpcCidrBlockCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AssociateVpcCidrBlockCommandOutput/)

</details>
<details>
<summary>
AttachClassicLinkVpc
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/AttachClassicLinkVpcCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AttachClassicLinkVpcCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AttachClassicLinkVpcCommandOutput/)

</details>
<details>
<summary>
AttachInternetGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/AttachInternetGatewayCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AttachInternetGatewayCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AttachInternetGatewayCommandOutput/)

</details>
<details>
<summary>
AttachNetworkInterface
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/AttachNetworkInterfaceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AttachNetworkInterfaceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AttachNetworkInterfaceCommandOutput/)

</details>
<details>
<summary>
AttachVerifiedAccessTrustProvider
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/AttachVerifiedAccessTrustProviderCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AttachVerifiedAccessTrustProviderCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AttachVerifiedAccessTrustProviderCommandOutput/)

</details>
<details>
<summary>
AttachVolume
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/AttachVolumeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AttachVolumeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AttachVolumeCommandOutput/)

</details>
<details>
<summary>
AttachVpnGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/AttachVpnGatewayCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AttachVpnGatewayCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AttachVpnGatewayCommandOutput/)

</details>
<details>
<summary>
AuthorizeClientVpnIngress
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/AuthorizeClientVpnIngressCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AuthorizeClientVpnIngressCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AuthorizeClientVpnIngressCommandOutput/)

</details>
<details>
<summary>
AuthorizeSecurityGroupEgress
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/AuthorizeSecurityGroupEgressCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AuthorizeSecurityGroupEgressCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AuthorizeSecurityGroupEgressCommandOutput/)

</details>
<details>
<summary>
AuthorizeSecurityGroupIngress
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/AuthorizeSecurityGroupIngressCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AuthorizeSecurityGroupIngressCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/AuthorizeSecurityGroupIngressCommandOutput/)

</details>
<details>
<summary>
BundleInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/BundleInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/BundleInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/BundleInstanceCommandOutput/)

</details>
<details>
<summary>
CancelBundleTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CancelBundleTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CancelBundleTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CancelBundleTaskCommandOutput/)

</details>
<details>
<summary>
CancelCapacityReservation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CancelCapacityReservationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CancelCapacityReservationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CancelCapacityReservationCommandOutput/)

</details>
<details>
<summary>
CancelCapacityReservationFleets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CancelCapacityReservationFleetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CancelCapacityReservationFleetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CancelCapacityReservationFleetsCommandOutput/)

</details>
<details>
<summary>
CancelConversionTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CancelConversionTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CancelConversionTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CancelConversionTaskCommandOutput/)

</details>
<details>
<summary>
CancelDeclarativePoliciesReport
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CancelDeclarativePoliciesReportCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CancelDeclarativePoliciesReportCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CancelDeclarativePoliciesReportCommandOutput/)

</details>
<details>
<summary>
CancelExportTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CancelExportTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CancelExportTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CancelExportTaskCommandOutput/)

</details>
<details>
<summary>
CancelImageLaunchPermission
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CancelImageLaunchPermissionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CancelImageLaunchPermissionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CancelImageLaunchPermissionCommandOutput/)

</details>
<details>
<summary>
CancelImportTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CancelImportTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CancelImportTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CancelImportTaskCommandOutput/)

</details>
<details>
<summary>
CancelReservedInstancesListing
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CancelReservedInstancesListingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CancelReservedInstancesListingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CancelReservedInstancesListingCommandOutput/)

</details>
<details>
<summary>
CancelSpotFleetRequests
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CancelSpotFleetRequestsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CancelSpotFleetRequestsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CancelSpotFleetRequestsCommandOutput/)

</details>
<details>
<summary>
CancelSpotInstanceRequests
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CancelSpotInstanceRequestsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CancelSpotInstanceRequestsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CancelSpotInstanceRequestsCommandOutput/)

</details>
<details>
<summary>
ConfirmProductInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ConfirmProductInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ConfirmProductInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ConfirmProductInstanceCommandOutput/)

</details>
<details>
<summary>
CopyFpgaImage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CopyFpgaImageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CopyFpgaImageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CopyFpgaImageCommandOutput/)

</details>
<details>
<summary>
CopyImage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CopyImageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CopyImageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CopyImageCommandOutput/)

</details>
<details>
<summary>
CopySnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CopySnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CopySnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CopySnapshotCommandOutput/)

</details>
<details>
<summary>
CopyVolumes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CopyVolumesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CopyVolumesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CopyVolumesCommandOutput/)

</details>
<details>
<summary>
CreateCapacityManagerDataExport
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateCapacityManagerDataExportCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateCapacityManagerDataExportCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateCapacityManagerDataExportCommandOutput/)

</details>
<details>
<summary>
CreateCapacityReservation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateCapacityReservationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateCapacityReservationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateCapacityReservationCommandOutput/)

</details>
<details>
<summary>
CreateCapacityReservationBySplitting
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateCapacityReservationBySplittingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateCapacityReservationBySplittingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateCapacityReservationBySplittingCommandOutput/)

</details>
<details>
<summary>
CreateCapacityReservationFleet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateCapacityReservationFleetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateCapacityReservationFleetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateCapacityReservationFleetCommandOutput/)

</details>
<details>
<summary>
CreateCarrierGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateCarrierGatewayCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateCarrierGatewayCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateCarrierGatewayCommandOutput/)

</details>
<details>
<summary>
CreateClientVpnEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateClientVpnEndpointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateClientVpnEndpointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateClientVpnEndpointCommandOutput/)

</details>
<details>
<summary>
CreateClientVpnRoute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateClientVpnRouteCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateClientVpnRouteCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateClientVpnRouteCommandOutput/)

</details>
<details>
<summary>
CreateCoipCidr
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateCoipCidrCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateCoipCidrCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateCoipCidrCommandOutput/)

</details>
<details>
<summary>
CreateCoipPool
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateCoipPoolCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateCoipPoolCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateCoipPoolCommandOutput/)

</details>
<details>
<summary>
CreateCustomerGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateCustomerGatewayCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateCustomerGatewayCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateCustomerGatewayCommandOutput/)

</details>
<details>
<summary>
CreateDefaultSubnet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateDefaultSubnetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateDefaultSubnetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateDefaultSubnetCommandOutput/)

</details>
<details>
<summary>
CreateDefaultVpc
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateDefaultVpcCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateDefaultVpcCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateDefaultVpcCommandOutput/)

</details>
<details>
<summary>
CreateDelegateMacVolumeOwnershipTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateDelegateMacVolumeOwnershipTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateDelegateMacVolumeOwnershipTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateDelegateMacVolumeOwnershipTaskCommandOutput/)

</details>
<details>
<summary>
CreateDhcpOptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateDhcpOptionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateDhcpOptionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateDhcpOptionsCommandOutput/)

</details>
<details>
<summary>
CreateEgressOnlyInternetGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateEgressOnlyInternetGatewayCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateEgressOnlyInternetGatewayCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateEgressOnlyInternetGatewayCommandOutput/)

</details>
<details>
<summary>
CreateFleet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateFleetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateFleetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateFleetCommandOutput/)

</details>
<details>
<summary>
CreateFlowLogs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateFlowLogsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateFlowLogsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateFlowLogsCommandOutput/)

</details>
<details>
<summary>
CreateFpgaImage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateFpgaImageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateFpgaImageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateFpgaImageCommandOutput/)

</details>
<details>
<summary>
CreateImage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateImageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateImageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateImageCommandOutput/)

</details>
<details>
<summary>
CreateImageUsageReport
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateImageUsageReportCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateImageUsageReportCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateImageUsageReportCommandOutput/)

</details>
<details>
<summary>
CreateInstanceConnectEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateInstanceConnectEndpointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateInstanceConnectEndpointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateInstanceConnectEndpointCommandOutput/)

</details>
<details>
<summary>
CreateInstanceEventWindow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateInstanceEventWindowCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateInstanceEventWindowCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateInstanceEventWindowCommandOutput/)

</details>
<details>
<summary>
CreateInstanceExportTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateInstanceExportTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateInstanceExportTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateInstanceExportTaskCommandOutput/)

</details>
<details>
<summary>
CreateInternetGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateInternetGatewayCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateInternetGatewayCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateInternetGatewayCommandOutput/)

</details>
<details>
<summary>
CreateIpam
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateIpamCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateIpamCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateIpamCommandOutput/)

</details>
<details>
<summary>
CreateIpamExternalResourceVerificationToken
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateIpamExternalResourceVerificationTokenCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateIpamExternalResourceVerificationTokenCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateIpamExternalResourceVerificationTokenCommandOutput/)

</details>
<details>
<summary>
CreateIpamPool
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateIpamPoolCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateIpamPoolCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateIpamPoolCommandOutput/)

</details>
<details>
<summary>
CreateIpamPrefixListResolver
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateIpamPrefixListResolverCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateIpamPrefixListResolverCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateIpamPrefixListResolverCommandOutput/)

</details>
<details>
<summary>
CreateIpamPrefixListResolverTarget
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateIpamPrefixListResolverTargetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateIpamPrefixListResolverTargetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateIpamPrefixListResolverTargetCommandOutput/)

</details>
<details>
<summary>
CreateIpamResourceDiscovery
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateIpamResourceDiscoveryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateIpamResourceDiscoveryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateIpamResourceDiscoveryCommandOutput/)

</details>
<details>
<summary>
CreateIpamScope
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateIpamScopeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateIpamScopeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateIpamScopeCommandOutput/)

</details>
<details>
<summary>
CreateKeyPair
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateKeyPairCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateKeyPairCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateKeyPairCommandOutput/)

</details>
<details>
<summary>
CreateLaunchTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateLaunchTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateLaunchTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateLaunchTemplateCommandOutput/)

</details>
<details>
<summary>
CreateLaunchTemplateVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateLaunchTemplateVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateLaunchTemplateVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateLaunchTemplateVersionCommandOutput/)

</details>
<details>
<summary>
CreateLocalGatewayRoute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateLocalGatewayRouteCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateLocalGatewayRouteCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateLocalGatewayRouteCommandOutput/)

</details>
<details>
<summary>
CreateLocalGatewayRouteTable
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateLocalGatewayRouteTableCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateLocalGatewayRouteTableCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateLocalGatewayRouteTableCommandOutput/)

</details>
<details>
<summary>
CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandOutput/)

</details>
<details>
<summary>
CreateLocalGatewayRouteTableVpcAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateLocalGatewayRouteTableVpcAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateLocalGatewayRouteTableVpcAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateLocalGatewayRouteTableVpcAssociationCommandOutput/)

</details>
<details>
<summary>
CreateLocalGatewayVirtualInterface
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateLocalGatewayVirtualInterfaceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateLocalGatewayVirtualInterfaceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateLocalGatewayVirtualInterfaceCommandOutput/)

</details>
<details>
<summary>
CreateLocalGatewayVirtualInterfaceGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateLocalGatewayVirtualInterfaceGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateLocalGatewayVirtualInterfaceGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateLocalGatewayVirtualInterfaceGroupCommandOutput/)

</details>
<details>
<summary>
CreateMacSystemIntegrityProtectionModificationTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateMacSystemIntegrityProtectionModificationTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateMacSystemIntegrityProtectionModificationTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateMacSystemIntegrityProtectionModificationTaskCommandOutput/)

</details>
<details>
<summary>
CreateManagedPrefixList
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateManagedPrefixListCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateManagedPrefixListCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateManagedPrefixListCommandOutput/)

</details>
<details>
<summary>
CreateNatGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateNatGatewayCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateNatGatewayCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateNatGatewayCommandOutput/)

</details>
<details>
<summary>
CreateNetworkAcl
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateNetworkAclCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateNetworkAclCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateNetworkAclCommandOutput/)

</details>
<details>
<summary>
CreateNetworkAclEntry
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateNetworkAclEntryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateNetworkAclEntryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateNetworkAclEntryCommandOutput/)

</details>
<details>
<summary>
CreateNetworkInsightsAccessScope
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateNetworkInsightsAccessScopeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateNetworkInsightsAccessScopeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateNetworkInsightsAccessScopeCommandOutput/)

</details>
<details>
<summary>
CreateNetworkInsightsPath
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateNetworkInsightsPathCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateNetworkInsightsPathCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateNetworkInsightsPathCommandOutput/)

</details>
<details>
<summary>
CreateNetworkInterface
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateNetworkInterfaceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateNetworkInterfaceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateNetworkInterfaceCommandOutput/)

</details>
<details>
<summary>
CreateNetworkInterfacePermission
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateNetworkInterfacePermissionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateNetworkInterfacePermissionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateNetworkInterfacePermissionCommandOutput/)

</details>
<details>
<summary>
CreatePlacementGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreatePlacementGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreatePlacementGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreatePlacementGroupCommandOutput/)

</details>
<details>
<summary>
CreatePublicIpv4Pool
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreatePublicIpv4PoolCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreatePublicIpv4PoolCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreatePublicIpv4PoolCommandOutput/)

</details>
<details>
<summary>
CreateReplaceRootVolumeTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateReplaceRootVolumeTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateReplaceRootVolumeTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateReplaceRootVolumeTaskCommandOutput/)

</details>
<details>
<summary>
CreateReservedInstancesListing
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateReservedInstancesListingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateReservedInstancesListingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateReservedInstancesListingCommandOutput/)

</details>
<details>
<summary>
CreateRestoreImageTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateRestoreImageTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateRestoreImageTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateRestoreImageTaskCommandOutput/)

</details>
<details>
<summary>
CreateRoute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateRouteCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateRouteCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateRouteCommandOutput/)

</details>
<details>
<summary>
CreateRouteServer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateRouteServerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateRouteServerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateRouteServerCommandOutput/)

</details>
<details>
<summary>
CreateRouteServerEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateRouteServerEndpointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateRouteServerEndpointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateRouteServerEndpointCommandOutput/)

</details>
<details>
<summary>
CreateRouteServerPeer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateRouteServerPeerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateRouteServerPeerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateRouteServerPeerCommandOutput/)

</details>
<details>
<summary>
CreateRouteTable
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateRouteTableCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateRouteTableCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateRouteTableCommandOutput/)

</details>
<details>
<summary>
CreateSecurityGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateSecurityGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateSecurityGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateSecurityGroupCommandOutput/)

</details>
<details>
<summary>
CreateSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateSnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateSnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateSnapshotCommandOutput/)

</details>
<details>
<summary>
CreateSnapshots
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateSnapshotsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateSnapshotsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateSnapshotsCommandOutput/)

</details>
<details>
<summary>
CreateSpotDatafeedSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateSpotDatafeedSubscriptionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateSpotDatafeedSubscriptionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateSpotDatafeedSubscriptionCommandOutput/)

</details>
<details>
<summary>
CreateStoreImageTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateStoreImageTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateStoreImageTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateStoreImageTaskCommandOutput/)

</details>
<details>
<summary>
CreateSubnet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateSubnetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateSubnetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateSubnetCommandOutput/)

</details>
<details>
<summary>
CreateSubnetCidrReservation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateSubnetCidrReservationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateSubnetCidrReservationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateSubnetCidrReservationCommandOutput/)

</details>
<details>
<summary>
CreateTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateTagsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateTagsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateTagsCommandOutput/)

</details>
<details>
<summary>
CreateTrafficMirrorFilter
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateTrafficMirrorFilterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateTrafficMirrorFilterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateTrafficMirrorFilterCommandOutput/)

</details>
<details>
<summary>
CreateTrafficMirrorFilterRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateTrafficMirrorFilterRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateTrafficMirrorFilterRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateTrafficMirrorFilterRuleCommandOutput/)

</details>
<details>
<summary>
CreateTrafficMirrorSession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateTrafficMirrorSessionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateTrafficMirrorSessionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateTrafficMirrorSessionCommandOutput/)

</details>
<details>
<summary>
CreateTrafficMirrorTarget
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateTrafficMirrorTargetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateTrafficMirrorTargetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateTrafficMirrorTargetCommandOutput/)

</details>
<details>
<summary>
CreateTransitGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateTransitGatewayCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateTransitGatewayCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateTransitGatewayCommandOutput/)

</details>
<details>
<summary>
CreateTransitGatewayConnect
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateTransitGatewayConnectCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateTransitGatewayConnectCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateTransitGatewayConnectCommandOutput/)

</details>
<details>
<summary>
CreateTransitGatewayConnectPeer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateTransitGatewayConnectPeerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateTransitGatewayConnectPeerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateTransitGatewayConnectPeerCommandOutput/)

</details>
<details>
<summary>
CreateTransitGatewayMulticastDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateTransitGatewayMulticastDomainCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateTransitGatewayMulticastDomainCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateTransitGatewayMulticastDomainCommandOutput/)

</details>
<details>
<summary>
CreateTransitGatewayPeeringAttachment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateTransitGatewayPeeringAttachmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateTransitGatewayPeeringAttachmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateTransitGatewayPeeringAttachmentCommandOutput/)

</details>
<details>
<summary>
CreateTransitGatewayPolicyTable
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateTransitGatewayPolicyTableCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateTransitGatewayPolicyTableCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateTransitGatewayPolicyTableCommandOutput/)

</details>
<details>
<summary>
CreateTransitGatewayPrefixListReference
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateTransitGatewayPrefixListReferenceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateTransitGatewayPrefixListReferenceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateTransitGatewayPrefixListReferenceCommandOutput/)

</details>
<details>
<summary>
CreateTransitGatewayRoute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateTransitGatewayRouteCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateTransitGatewayRouteCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateTransitGatewayRouteCommandOutput/)

</details>
<details>
<summary>
CreateTransitGatewayRouteTable
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateTransitGatewayRouteTableCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateTransitGatewayRouteTableCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateTransitGatewayRouteTableCommandOutput/)

</details>
<details>
<summary>
CreateTransitGatewayRouteTableAnnouncement
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateTransitGatewayRouteTableAnnouncementCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateTransitGatewayRouteTableAnnouncementCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateTransitGatewayRouteTableAnnouncementCommandOutput/)

</details>
<details>
<summary>
CreateTransitGatewayVpcAttachment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateTransitGatewayVpcAttachmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateTransitGatewayVpcAttachmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateTransitGatewayVpcAttachmentCommandOutput/)

</details>
<details>
<summary>
CreateVerifiedAccessEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateVerifiedAccessEndpointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateVerifiedAccessEndpointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateVerifiedAccessEndpointCommandOutput/)

</details>
<details>
<summary>
CreateVerifiedAccessGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateVerifiedAccessGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateVerifiedAccessGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateVerifiedAccessGroupCommandOutput/)

</details>
<details>
<summary>
CreateVerifiedAccessInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateVerifiedAccessInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateVerifiedAccessInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateVerifiedAccessInstanceCommandOutput/)

</details>
<details>
<summary>
CreateVerifiedAccessTrustProvider
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateVerifiedAccessTrustProviderCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateVerifiedAccessTrustProviderCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateVerifiedAccessTrustProviderCommandOutput/)

</details>
<details>
<summary>
CreateVolume
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateVolumeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateVolumeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateVolumeCommandOutput/)

</details>
<details>
<summary>
CreateVpc
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateVpcCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateVpcCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateVpcCommandOutput/)

</details>
<details>
<summary>
CreateVpcBlockPublicAccessExclusion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateVpcBlockPublicAccessExclusionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateVpcBlockPublicAccessExclusionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateVpcBlockPublicAccessExclusionCommandOutput/)

</details>
<details>
<summary>
CreateVpcEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateVpcEndpointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateVpcEndpointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateVpcEndpointCommandOutput/)

</details>
<details>
<summary>
CreateVpcEndpointConnectionNotification
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateVpcEndpointConnectionNotificationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateVpcEndpointConnectionNotificationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateVpcEndpointConnectionNotificationCommandOutput/)

</details>
<details>
<summary>
CreateVpcEndpointServiceConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateVpcEndpointServiceConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateVpcEndpointServiceConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateVpcEndpointServiceConfigurationCommandOutput/)

</details>
<details>
<summary>
CreateVpcPeeringConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateVpcPeeringConnectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateVpcPeeringConnectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateVpcPeeringConnectionCommandOutput/)

</details>
<details>
<summary>
CreateVpnConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateVpnConnectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateVpnConnectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateVpnConnectionCommandOutput/)

</details>
<details>
<summary>
CreateVpnConnectionRoute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateVpnConnectionRouteCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateVpnConnectionRouteCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateVpnConnectionRouteCommandOutput/)

</details>
<details>
<summary>
CreateVpnGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/CreateVpnGatewayCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateVpnGatewayCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/CreateVpnGatewayCommandOutput/)

</details>
<details>
<summary>
DeleteCapacityManagerDataExport
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteCapacityManagerDataExportCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteCapacityManagerDataExportCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteCapacityManagerDataExportCommandOutput/)

</details>
<details>
<summary>
DeleteCarrierGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteCarrierGatewayCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteCarrierGatewayCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteCarrierGatewayCommandOutput/)

</details>
<details>
<summary>
DeleteClientVpnEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteClientVpnEndpointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteClientVpnEndpointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteClientVpnEndpointCommandOutput/)

</details>
<details>
<summary>
DeleteClientVpnRoute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteClientVpnRouteCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteClientVpnRouteCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteClientVpnRouteCommandOutput/)

</details>
<details>
<summary>
DeleteCoipCidr
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteCoipCidrCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteCoipCidrCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteCoipCidrCommandOutput/)

</details>
<details>
<summary>
DeleteCoipPool
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteCoipPoolCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteCoipPoolCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteCoipPoolCommandOutput/)

</details>
<details>
<summary>
DeleteCustomerGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteCustomerGatewayCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteCustomerGatewayCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteCustomerGatewayCommandOutput/)

</details>
<details>
<summary>
DeleteDhcpOptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteDhcpOptionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteDhcpOptionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteDhcpOptionsCommandOutput/)

</details>
<details>
<summary>
DeleteEgressOnlyInternetGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteEgressOnlyInternetGatewayCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteEgressOnlyInternetGatewayCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteEgressOnlyInternetGatewayCommandOutput/)

</details>
<details>
<summary>
DeleteFleets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteFleetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteFleetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteFleetsCommandOutput/)

</details>
<details>
<summary>
DeleteFlowLogs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteFlowLogsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteFlowLogsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteFlowLogsCommandOutput/)

</details>
<details>
<summary>
DeleteFpgaImage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteFpgaImageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteFpgaImageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteFpgaImageCommandOutput/)

</details>
<details>
<summary>
DeleteImageUsageReport
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteImageUsageReportCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteImageUsageReportCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteImageUsageReportCommandOutput/)

</details>
<details>
<summary>
DeleteInstanceConnectEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteInstanceConnectEndpointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteInstanceConnectEndpointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteInstanceConnectEndpointCommandOutput/)

</details>
<details>
<summary>
DeleteInstanceEventWindow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteInstanceEventWindowCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteInstanceEventWindowCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteInstanceEventWindowCommandOutput/)

</details>
<details>
<summary>
DeleteInternetGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteInternetGatewayCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteInternetGatewayCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteInternetGatewayCommandOutput/)

</details>
<details>
<summary>
DeleteIpam
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteIpamCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteIpamCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteIpamCommandOutput/)

</details>
<details>
<summary>
DeleteIpamExternalResourceVerificationToken
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteIpamExternalResourceVerificationTokenCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteIpamExternalResourceVerificationTokenCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteIpamExternalResourceVerificationTokenCommandOutput/)

</details>
<details>
<summary>
DeleteIpamPool
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteIpamPoolCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteIpamPoolCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteIpamPoolCommandOutput/)

</details>
<details>
<summary>
DeleteIpamPrefixListResolver
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteIpamPrefixListResolverCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteIpamPrefixListResolverCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteIpamPrefixListResolverCommandOutput/)

</details>
<details>
<summary>
DeleteIpamPrefixListResolverTarget
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteIpamPrefixListResolverTargetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteIpamPrefixListResolverTargetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteIpamPrefixListResolverTargetCommandOutput/)

</details>
<details>
<summary>
DeleteIpamResourceDiscovery
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteIpamResourceDiscoveryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteIpamResourceDiscoveryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteIpamResourceDiscoveryCommandOutput/)

</details>
<details>
<summary>
DeleteIpamScope
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteIpamScopeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteIpamScopeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteIpamScopeCommandOutput/)

</details>
<details>
<summary>
DeleteKeyPair
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteKeyPairCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteKeyPairCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteKeyPairCommandOutput/)

</details>
<details>
<summary>
DeleteLaunchTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteLaunchTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteLaunchTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteLaunchTemplateCommandOutput/)

</details>
<details>
<summary>
DeleteLaunchTemplateVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteLaunchTemplateVersionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteLaunchTemplateVersionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteLaunchTemplateVersionsCommandOutput/)

</details>
<details>
<summary>
DeleteLocalGatewayRoute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteLocalGatewayRouteCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteLocalGatewayRouteCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteLocalGatewayRouteCommandOutput/)

</details>
<details>
<summary>
DeleteLocalGatewayRouteTable
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteLocalGatewayRouteTableCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteLocalGatewayRouteTableCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteLocalGatewayRouteTableCommandOutput/)

</details>
<details>
<summary>
DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommandOutput/)

</details>
<details>
<summary>
DeleteLocalGatewayRouteTableVpcAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteLocalGatewayRouteTableVpcAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteLocalGatewayRouteTableVpcAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteLocalGatewayRouteTableVpcAssociationCommandOutput/)

</details>
<details>
<summary>
DeleteLocalGatewayVirtualInterface
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteLocalGatewayVirtualInterfaceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteLocalGatewayVirtualInterfaceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteLocalGatewayVirtualInterfaceCommandOutput/)

</details>
<details>
<summary>
DeleteLocalGatewayVirtualInterfaceGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteLocalGatewayVirtualInterfaceGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteLocalGatewayVirtualInterfaceGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteLocalGatewayVirtualInterfaceGroupCommandOutput/)

</details>
<details>
<summary>
DeleteManagedPrefixList
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteManagedPrefixListCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteManagedPrefixListCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteManagedPrefixListCommandOutput/)

</details>
<details>
<summary>
DeleteNatGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteNatGatewayCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteNatGatewayCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteNatGatewayCommandOutput/)

</details>
<details>
<summary>
DeleteNetworkAcl
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteNetworkAclCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteNetworkAclCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteNetworkAclCommandOutput/)

</details>
<details>
<summary>
DeleteNetworkAclEntry
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteNetworkAclEntryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteNetworkAclEntryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteNetworkAclEntryCommandOutput/)

</details>
<details>
<summary>
DeleteNetworkInsightsAccessScope
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteNetworkInsightsAccessScopeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteNetworkInsightsAccessScopeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteNetworkInsightsAccessScopeCommandOutput/)

</details>
<details>
<summary>
DeleteNetworkInsightsAccessScopeAnalysis
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteNetworkInsightsAccessScopeAnalysisCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteNetworkInsightsAccessScopeAnalysisCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteNetworkInsightsAccessScopeAnalysisCommandOutput/)

</details>
<details>
<summary>
DeleteNetworkInsightsAnalysis
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteNetworkInsightsAnalysisCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteNetworkInsightsAnalysisCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteNetworkInsightsAnalysisCommandOutput/)

</details>
<details>
<summary>
DeleteNetworkInsightsPath
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteNetworkInsightsPathCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteNetworkInsightsPathCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteNetworkInsightsPathCommandOutput/)

</details>
<details>
<summary>
DeleteNetworkInterface
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteNetworkInterfaceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteNetworkInterfaceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteNetworkInterfaceCommandOutput/)

</details>
<details>
<summary>
DeleteNetworkInterfacePermission
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteNetworkInterfacePermissionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteNetworkInterfacePermissionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteNetworkInterfacePermissionCommandOutput/)

</details>
<details>
<summary>
DeletePlacementGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeletePlacementGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeletePlacementGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeletePlacementGroupCommandOutput/)

</details>
<details>
<summary>
DeletePublicIpv4Pool
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeletePublicIpv4PoolCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeletePublicIpv4PoolCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeletePublicIpv4PoolCommandOutput/)

</details>
<details>
<summary>
DeleteQueuedReservedInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteQueuedReservedInstancesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteQueuedReservedInstancesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteQueuedReservedInstancesCommandOutput/)

</details>
<details>
<summary>
DeleteRoute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteRouteCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteRouteCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteRouteCommandOutput/)

</details>
<details>
<summary>
DeleteRouteServer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteRouteServerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteRouteServerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteRouteServerCommandOutput/)

</details>
<details>
<summary>
DeleteRouteServerEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteRouteServerEndpointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteRouteServerEndpointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteRouteServerEndpointCommandOutput/)

</details>
<details>
<summary>
DeleteRouteServerPeer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteRouteServerPeerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteRouteServerPeerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteRouteServerPeerCommandOutput/)

</details>
<details>
<summary>
DeleteRouteTable
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteRouteTableCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteRouteTableCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteRouteTableCommandOutput/)

</details>
<details>
<summary>
DeleteSecurityGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteSecurityGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteSecurityGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteSecurityGroupCommandOutput/)

</details>
<details>
<summary>
DeleteSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteSnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteSnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteSnapshotCommandOutput/)

</details>
<details>
<summary>
DeleteSpotDatafeedSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteSpotDatafeedSubscriptionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteSpotDatafeedSubscriptionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteSpotDatafeedSubscriptionCommandOutput/)

</details>
<details>
<summary>
DeleteSubnet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteSubnetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteSubnetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteSubnetCommandOutput/)

</details>
<details>
<summary>
DeleteSubnetCidrReservation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteSubnetCidrReservationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteSubnetCidrReservationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteSubnetCidrReservationCommandOutput/)

</details>
<details>
<summary>
DeleteTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteTagsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteTagsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteTagsCommandOutput/)

</details>
<details>
<summary>
DeleteTrafficMirrorFilter
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteTrafficMirrorFilterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteTrafficMirrorFilterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteTrafficMirrorFilterCommandOutput/)

</details>
<details>
<summary>
DeleteTrafficMirrorFilterRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteTrafficMirrorFilterRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteTrafficMirrorFilterRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteTrafficMirrorFilterRuleCommandOutput/)

</details>
<details>
<summary>
DeleteTrafficMirrorSession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteTrafficMirrorSessionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteTrafficMirrorSessionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteTrafficMirrorSessionCommandOutput/)

</details>
<details>
<summary>
DeleteTrafficMirrorTarget
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteTrafficMirrorTargetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteTrafficMirrorTargetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteTrafficMirrorTargetCommandOutput/)

</details>
<details>
<summary>
DeleteTransitGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteTransitGatewayCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteTransitGatewayCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteTransitGatewayCommandOutput/)

</details>
<details>
<summary>
DeleteTransitGatewayConnect
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteTransitGatewayConnectCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteTransitGatewayConnectCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteTransitGatewayConnectCommandOutput/)

</details>
<details>
<summary>
DeleteTransitGatewayConnectPeer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteTransitGatewayConnectPeerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteTransitGatewayConnectPeerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteTransitGatewayConnectPeerCommandOutput/)

</details>
<details>
<summary>
DeleteTransitGatewayMulticastDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteTransitGatewayMulticastDomainCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteTransitGatewayMulticastDomainCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteTransitGatewayMulticastDomainCommandOutput/)

</details>
<details>
<summary>
DeleteTransitGatewayPeeringAttachment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteTransitGatewayPeeringAttachmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteTransitGatewayPeeringAttachmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteTransitGatewayPeeringAttachmentCommandOutput/)

</details>
<details>
<summary>
DeleteTransitGatewayPolicyTable
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteTransitGatewayPolicyTableCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteTransitGatewayPolicyTableCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteTransitGatewayPolicyTableCommandOutput/)

</details>
<details>
<summary>
DeleteTransitGatewayPrefixListReference
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteTransitGatewayPrefixListReferenceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteTransitGatewayPrefixListReferenceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteTransitGatewayPrefixListReferenceCommandOutput/)

</details>
<details>
<summary>
DeleteTransitGatewayRoute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteTransitGatewayRouteCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteTransitGatewayRouteCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteTransitGatewayRouteCommandOutput/)

</details>
<details>
<summary>
DeleteTransitGatewayRouteTable
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteTransitGatewayRouteTableCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteTransitGatewayRouteTableCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteTransitGatewayRouteTableCommandOutput/)

</details>
<details>
<summary>
DeleteTransitGatewayRouteTableAnnouncement
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteTransitGatewayRouteTableAnnouncementCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteTransitGatewayRouteTableAnnouncementCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteTransitGatewayRouteTableAnnouncementCommandOutput/)

</details>
<details>
<summary>
DeleteTransitGatewayVpcAttachment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteTransitGatewayVpcAttachmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteTransitGatewayVpcAttachmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteTransitGatewayVpcAttachmentCommandOutput/)

</details>
<details>
<summary>
DeleteVerifiedAccessEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteVerifiedAccessEndpointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteVerifiedAccessEndpointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteVerifiedAccessEndpointCommandOutput/)

</details>
<details>
<summary>
DeleteVerifiedAccessGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteVerifiedAccessGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteVerifiedAccessGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteVerifiedAccessGroupCommandOutput/)

</details>
<details>
<summary>
DeleteVerifiedAccessInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteVerifiedAccessInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteVerifiedAccessInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteVerifiedAccessInstanceCommandOutput/)

</details>
<details>
<summary>
DeleteVerifiedAccessTrustProvider
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteVerifiedAccessTrustProviderCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteVerifiedAccessTrustProviderCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteVerifiedAccessTrustProviderCommandOutput/)

</details>
<details>
<summary>
DeleteVolume
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteVolumeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteVolumeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteVolumeCommandOutput/)

</details>
<details>
<summary>
DeleteVpc
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteVpcCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteVpcCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteVpcCommandOutput/)

</details>
<details>
<summary>
DeleteVpcBlockPublicAccessExclusion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteVpcBlockPublicAccessExclusionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteVpcBlockPublicAccessExclusionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteVpcBlockPublicAccessExclusionCommandOutput/)

</details>
<details>
<summary>
DeleteVpcEndpointConnectionNotifications
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteVpcEndpointConnectionNotificationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteVpcEndpointConnectionNotificationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteVpcEndpointConnectionNotificationsCommandOutput/)

</details>
<details>
<summary>
DeleteVpcEndpoints
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteVpcEndpointsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteVpcEndpointsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteVpcEndpointsCommandOutput/)

</details>
<details>
<summary>
DeleteVpcEndpointServiceConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteVpcEndpointServiceConfigurationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteVpcEndpointServiceConfigurationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteVpcEndpointServiceConfigurationsCommandOutput/)

</details>
<details>
<summary>
DeleteVpcPeeringConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteVpcPeeringConnectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteVpcPeeringConnectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteVpcPeeringConnectionCommandOutput/)

</details>
<details>
<summary>
DeleteVpnConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteVpnConnectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteVpnConnectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteVpnConnectionCommandOutput/)

</details>
<details>
<summary>
DeleteVpnConnectionRoute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteVpnConnectionRouteCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteVpnConnectionRouteCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteVpnConnectionRouteCommandOutput/)

</details>
<details>
<summary>
DeleteVpnGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeleteVpnGatewayCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteVpnGatewayCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeleteVpnGatewayCommandOutput/)

</details>
<details>
<summary>
DeprovisionByoipCidr
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeprovisionByoipCidrCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeprovisionByoipCidrCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeprovisionByoipCidrCommandOutput/)

</details>
<details>
<summary>
DeprovisionIpamByoasn
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeprovisionIpamByoasnCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeprovisionIpamByoasnCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeprovisionIpamByoasnCommandOutput/)

</details>
<details>
<summary>
DeprovisionIpamPoolCidr
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeprovisionIpamPoolCidrCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeprovisionIpamPoolCidrCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeprovisionIpamPoolCidrCommandOutput/)

</details>
<details>
<summary>
DeprovisionPublicIpv4PoolCidr
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeprovisionPublicIpv4PoolCidrCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeprovisionPublicIpv4PoolCidrCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeprovisionPublicIpv4PoolCidrCommandOutput/)

</details>
<details>
<summary>
DeregisterImage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeregisterImageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeregisterImageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeregisterImageCommandOutput/)

</details>
<details>
<summary>
DeregisterInstanceEventNotificationAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeregisterInstanceEventNotificationAttributesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeregisterInstanceEventNotificationAttributesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeregisterInstanceEventNotificationAttributesCommandOutput/)

</details>
<details>
<summary>
DeregisterTransitGatewayMulticastGroupMembers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeregisterTransitGatewayMulticastGroupMembersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeregisterTransitGatewayMulticastGroupMembersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeregisterTransitGatewayMulticastGroupMembersCommandOutput/)

</details>
<details>
<summary>
DeregisterTransitGatewayMulticastGroupSources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DeregisterTransitGatewayMulticastGroupSourcesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeregisterTransitGatewayMulticastGroupSourcesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DeregisterTransitGatewayMulticastGroupSourcesCommandOutput/)

</details>
<details>
<summary>
DescribeAccountAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeAccountAttributesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeAccountAttributesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeAccountAttributesCommandOutput/)

</details>
<details>
<summary>
DescribeAddresses
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeAddressesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeAddressesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeAddressesCommandOutput/)

</details>
<details>
<summary>
DescribeAddressesAttribute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeAddressesAttributeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeAddressesAttributeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeAddressesAttributeCommandOutput/)

</details>
<details>
<summary>
DescribeAddressTransfers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeAddressTransfersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeAddressTransfersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeAddressTransfersCommandOutput/)

</details>
<details>
<summary>
DescribeAggregateIdFormat
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeAggregateIdFormatCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeAggregateIdFormatCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeAggregateIdFormatCommandOutput/)

</details>
<details>
<summary>
DescribeAvailabilityZones
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeAvailabilityZonesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeAvailabilityZonesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeAvailabilityZonesCommandOutput/)

</details>
<details>
<summary>
DescribeAwsNetworkPerformanceMetricSubscriptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeAwsNetworkPerformanceMetricSubscriptionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeAwsNetworkPerformanceMetricSubscriptionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeAwsNetworkPerformanceMetricSubscriptionsCommandOutput/)

</details>
<details>
<summary>
DescribeBundleTasks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeBundleTasksCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeBundleTasksCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeBundleTasksCommandOutput/)

</details>
<details>
<summary>
DescribeByoipCidrs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeByoipCidrsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeByoipCidrsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeByoipCidrsCommandOutput/)

</details>
<details>
<summary>
DescribeCapacityBlockExtensionHistory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeCapacityBlockExtensionHistoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeCapacityBlockExtensionHistoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeCapacityBlockExtensionHistoryCommandOutput/)

</details>
<details>
<summary>
DescribeCapacityBlockExtensionOfferings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeCapacityBlockExtensionOfferingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeCapacityBlockExtensionOfferingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeCapacityBlockExtensionOfferingsCommandOutput/)

</details>
<details>
<summary>
DescribeCapacityBlockOfferings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeCapacityBlockOfferingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeCapacityBlockOfferingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeCapacityBlockOfferingsCommandOutput/)

</details>
<details>
<summary>
DescribeCapacityBlocks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeCapacityBlocksCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeCapacityBlocksCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeCapacityBlocksCommandOutput/)

</details>
<details>
<summary>
DescribeCapacityBlockStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeCapacityBlockStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeCapacityBlockStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeCapacityBlockStatusCommandOutput/)

</details>
<details>
<summary>
DescribeCapacityManagerDataExports
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeCapacityManagerDataExportsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeCapacityManagerDataExportsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeCapacityManagerDataExportsCommandOutput/)

</details>
<details>
<summary>
DescribeCapacityReservationBillingRequests
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeCapacityReservationBillingRequestsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeCapacityReservationBillingRequestsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeCapacityReservationBillingRequestsCommandOutput/)

</details>
<details>
<summary>
DescribeCapacityReservationFleets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeCapacityReservationFleetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeCapacityReservationFleetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeCapacityReservationFleetsCommandOutput/)

</details>
<details>
<summary>
DescribeCapacityReservations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeCapacityReservationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeCapacityReservationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeCapacityReservationsCommandOutput/)

</details>
<details>
<summary>
DescribeCapacityReservationTopology
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeCapacityReservationTopologyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeCapacityReservationTopologyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeCapacityReservationTopologyCommandOutput/)

</details>
<details>
<summary>
DescribeCarrierGateways
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeCarrierGatewaysCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeCarrierGatewaysCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeCarrierGatewaysCommandOutput/)

</details>
<details>
<summary>
DescribeClassicLinkInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeClassicLinkInstancesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeClassicLinkInstancesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeClassicLinkInstancesCommandOutput/)

</details>
<details>
<summary>
DescribeClientVpnAuthorizationRules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeClientVpnAuthorizationRulesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeClientVpnAuthorizationRulesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeClientVpnAuthorizationRulesCommandOutput/)

</details>
<details>
<summary>
DescribeClientVpnConnections
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeClientVpnConnectionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeClientVpnConnectionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeClientVpnConnectionsCommandOutput/)

</details>
<details>
<summary>
DescribeClientVpnEndpoints
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeClientVpnEndpointsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeClientVpnEndpointsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeClientVpnEndpointsCommandOutput/)

</details>
<details>
<summary>
DescribeClientVpnRoutes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeClientVpnRoutesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeClientVpnRoutesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeClientVpnRoutesCommandOutput/)

</details>
<details>
<summary>
DescribeClientVpnTargetNetworks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeClientVpnTargetNetworksCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeClientVpnTargetNetworksCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeClientVpnTargetNetworksCommandOutput/)

</details>
<details>
<summary>
DescribeCoipPools
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeCoipPoolsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeCoipPoolsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeCoipPoolsCommandOutput/)

</details>
<details>
<summary>
DescribeConversionTasks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeConversionTasksCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeConversionTasksCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeConversionTasksCommandOutput/)

</details>
<details>
<summary>
DescribeCustomerGateways
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeCustomerGatewaysCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeCustomerGatewaysCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeCustomerGatewaysCommandOutput/)

</details>
<details>
<summary>
DescribeDeclarativePoliciesReports
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeDeclarativePoliciesReportsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeDeclarativePoliciesReportsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeDeclarativePoliciesReportsCommandOutput/)

</details>
<details>
<summary>
DescribeDhcpOptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeDhcpOptionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeDhcpOptionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeDhcpOptionsCommandOutput/)

</details>
<details>
<summary>
DescribeEgressOnlyInternetGateways
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeEgressOnlyInternetGatewaysCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeEgressOnlyInternetGatewaysCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeEgressOnlyInternetGatewaysCommandOutput/)

</details>
<details>
<summary>
DescribeElasticGpus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeElasticGpusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeElasticGpusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeElasticGpusCommandOutput/)

</details>
<details>
<summary>
DescribeExportImageTasks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeExportImageTasksCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeExportImageTasksCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeExportImageTasksCommandOutput/)

</details>
<details>
<summary>
DescribeExportTasks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeExportTasksCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeExportTasksCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeExportTasksCommandOutput/)

</details>
<details>
<summary>
DescribeFastLaunchImages
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeFastLaunchImagesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeFastLaunchImagesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeFastLaunchImagesCommandOutput/)

</details>
<details>
<summary>
DescribeFastSnapshotRestores
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeFastSnapshotRestoresCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeFastSnapshotRestoresCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeFastSnapshotRestoresCommandOutput/)

</details>
<details>
<summary>
DescribeFleetHistory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeFleetHistoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeFleetHistoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeFleetHistoryCommandOutput/)

</details>
<details>
<summary>
DescribeFleetInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeFleetInstancesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeFleetInstancesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeFleetInstancesCommandOutput/)

</details>
<details>
<summary>
DescribeFleets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeFleetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeFleetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeFleetsCommandOutput/)

</details>
<details>
<summary>
DescribeFlowLogs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeFlowLogsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeFlowLogsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeFlowLogsCommandOutput/)

</details>
<details>
<summary>
DescribeFpgaImageAttribute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeFpgaImageAttributeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeFpgaImageAttributeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeFpgaImageAttributeCommandOutput/)

</details>
<details>
<summary>
DescribeFpgaImages
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeFpgaImagesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeFpgaImagesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeFpgaImagesCommandOutput/)

</details>
<details>
<summary>
DescribeHostReservationOfferings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeHostReservationOfferingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeHostReservationOfferingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeHostReservationOfferingsCommandOutput/)

</details>
<details>
<summary>
DescribeHostReservations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeHostReservationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeHostReservationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeHostReservationsCommandOutput/)

</details>
<details>
<summary>
DescribeHosts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeHostsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeHostsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeHostsCommandOutput/)

</details>
<details>
<summary>
DescribeIamInstanceProfileAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeIamInstanceProfileAssociationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeIamInstanceProfileAssociationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeIamInstanceProfileAssociationsCommandOutput/)

</details>
<details>
<summary>
DescribeIdentityIdFormat
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeIdentityIdFormatCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeIdentityIdFormatCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeIdentityIdFormatCommandOutput/)

</details>
<details>
<summary>
DescribeIdFormat
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeIdFormatCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeIdFormatCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeIdFormatCommandOutput/)

</details>
<details>
<summary>
DescribeImageAttribute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeImageAttributeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeImageAttributeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeImageAttributeCommandOutput/)

</details>
<details>
<summary>
DescribeImageReferences
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeImageReferencesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeImageReferencesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeImageReferencesCommandOutput/)

</details>
<details>
<summary>
DescribeImages
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeImagesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeImagesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeImagesCommandOutput/)

</details>
<details>
<summary>
DescribeImageUsageReportEntries
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeImageUsageReportEntriesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeImageUsageReportEntriesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeImageUsageReportEntriesCommandOutput/)

</details>
<details>
<summary>
DescribeImageUsageReports
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeImageUsageReportsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeImageUsageReportsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeImageUsageReportsCommandOutput/)

</details>
<details>
<summary>
DescribeImportImageTasks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeImportImageTasksCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeImportImageTasksCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeImportImageTasksCommandOutput/)

</details>
<details>
<summary>
DescribeImportSnapshotTasks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeImportSnapshotTasksCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeImportSnapshotTasksCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeImportSnapshotTasksCommandOutput/)

</details>
<details>
<summary>
DescribeInstanceAttribute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeInstanceAttributeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeInstanceAttributeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeInstanceAttributeCommandOutput/)

</details>
<details>
<summary>
DescribeInstanceConnectEndpoints
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeInstanceConnectEndpointsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeInstanceConnectEndpointsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeInstanceConnectEndpointsCommandOutput/)

</details>
<details>
<summary>
DescribeInstanceCreditSpecifications
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeInstanceCreditSpecificationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeInstanceCreditSpecificationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeInstanceCreditSpecificationsCommandOutput/)

</details>
<details>
<summary>
DescribeInstanceEventNotificationAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeInstanceEventNotificationAttributesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeInstanceEventNotificationAttributesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeInstanceEventNotificationAttributesCommandOutput/)

</details>
<details>
<summary>
DescribeInstanceEventWindows
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeInstanceEventWindowsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeInstanceEventWindowsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeInstanceEventWindowsCommandOutput/)

</details>
<details>
<summary>
DescribeInstanceImageMetadata
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeInstanceImageMetadataCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeInstanceImageMetadataCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeInstanceImageMetadataCommandOutput/)

</details>
<details>
<summary>
DescribeInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeInstancesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeInstancesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeInstancesCommandOutput/)

</details>
<details>
<summary>
DescribeInstanceStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeInstanceStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeInstanceStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeInstanceStatusCommandOutput/)

</details>
<details>
<summary>
DescribeInstanceTopology
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeInstanceTopologyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeInstanceTopologyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeInstanceTopologyCommandOutput/)

</details>
<details>
<summary>
DescribeInstanceTypeOfferings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeInstanceTypeOfferingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeInstanceTypeOfferingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeInstanceTypeOfferingsCommandOutput/)

</details>
<details>
<summary>
DescribeInstanceTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeInstanceTypesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeInstanceTypesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeInstanceTypesCommandOutput/)

</details>
<details>
<summary>
DescribeInternetGateways
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeInternetGatewaysCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeInternetGatewaysCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeInternetGatewaysCommandOutput/)

</details>
<details>
<summary>
DescribeIpamByoasn
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeIpamByoasnCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeIpamByoasnCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeIpamByoasnCommandOutput/)

</details>
<details>
<summary>
DescribeIpamExternalResourceVerificationTokens
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeIpamExternalResourceVerificationTokensCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeIpamExternalResourceVerificationTokensCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeIpamExternalResourceVerificationTokensCommandOutput/)

</details>
<details>
<summary>
DescribeIpamPools
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeIpamPoolsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeIpamPoolsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeIpamPoolsCommandOutput/)

</details>
<details>
<summary>
DescribeIpamPrefixListResolvers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeIpamPrefixListResolversCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeIpamPrefixListResolversCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeIpamPrefixListResolversCommandOutput/)

</details>
<details>
<summary>
DescribeIpamPrefixListResolverTargets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeIpamPrefixListResolverTargetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeIpamPrefixListResolverTargetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeIpamPrefixListResolverTargetsCommandOutput/)

</details>
<details>
<summary>
DescribeIpamResourceDiscoveries
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeIpamResourceDiscoveriesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeIpamResourceDiscoveriesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeIpamResourceDiscoveriesCommandOutput/)

</details>
<details>
<summary>
DescribeIpamResourceDiscoveryAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeIpamResourceDiscoveryAssociationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeIpamResourceDiscoveryAssociationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeIpamResourceDiscoveryAssociationsCommandOutput/)

</details>
<details>
<summary>
DescribeIpams
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeIpamsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeIpamsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeIpamsCommandOutput/)

</details>
<details>
<summary>
DescribeIpamScopes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeIpamScopesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeIpamScopesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeIpamScopesCommandOutput/)

</details>
<details>
<summary>
DescribeIpv6Pools
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeIpv6PoolsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeIpv6PoolsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeIpv6PoolsCommandOutput/)

</details>
<details>
<summary>
DescribeKeyPairs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeKeyPairsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeKeyPairsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeKeyPairsCommandOutput/)

</details>
<details>
<summary>
DescribeLaunchTemplates
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeLaunchTemplatesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeLaunchTemplatesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeLaunchTemplatesCommandOutput/)

</details>
<details>
<summary>
DescribeLaunchTemplateVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeLaunchTemplateVersionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeLaunchTemplateVersionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeLaunchTemplateVersionsCommandOutput/)

</details>
<details>
<summary>
DescribeLocalGatewayRouteTables
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeLocalGatewayRouteTablesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeLocalGatewayRouteTablesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeLocalGatewayRouteTablesCommandOutput/)

</details>
<details>
<summary>
DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandOutput/)

</details>
<details>
<summary>
DescribeLocalGatewayRouteTableVpcAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeLocalGatewayRouteTableVpcAssociationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeLocalGatewayRouteTableVpcAssociationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeLocalGatewayRouteTableVpcAssociationsCommandOutput/)

</details>
<details>
<summary>
DescribeLocalGateways
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeLocalGatewaysCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeLocalGatewaysCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeLocalGatewaysCommandOutput/)

</details>
<details>
<summary>
DescribeLocalGatewayVirtualInterfaceGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeLocalGatewayVirtualInterfaceGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeLocalGatewayVirtualInterfaceGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeLocalGatewayVirtualInterfaceGroupsCommandOutput/)

</details>
<details>
<summary>
DescribeLocalGatewayVirtualInterfaces
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeLocalGatewayVirtualInterfacesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeLocalGatewayVirtualInterfacesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeLocalGatewayVirtualInterfacesCommandOutput/)

</details>
<details>
<summary>
DescribeLockedSnapshots
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeLockedSnapshotsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeLockedSnapshotsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeLockedSnapshotsCommandOutput/)

</details>
<details>
<summary>
DescribeMacHosts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeMacHostsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeMacHostsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeMacHostsCommandOutput/)

</details>
<details>
<summary>
DescribeMacModificationTasks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeMacModificationTasksCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeMacModificationTasksCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeMacModificationTasksCommandOutput/)

</details>
<details>
<summary>
DescribeManagedPrefixLists
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeManagedPrefixListsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeManagedPrefixListsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeManagedPrefixListsCommandOutput/)

</details>
<details>
<summary>
DescribeMovingAddresses
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeMovingAddressesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeMovingAddressesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeMovingAddressesCommandOutput/)

</details>
<details>
<summary>
DescribeNatGateways
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeNatGatewaysCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeNatGatewaysCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeNatGatewaysCommandOutput/)

</details>
<details>
<summary>
DescribeNetworkAcls
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeNetworkAclsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeNetworkAclsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeNetworkAclsCommandOutput/)

</details>
<details>
<summary>
DescribeNetworkInsightsAccessScopeAnalyses
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeNetworkInsightsAccessScopeAnalysesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeNetworkInsightsAccessScopeAnalysesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeNetworkInsightsAccessScopeAnalysesCommandOutput/)

</details>
<details>
<summary>
DescribeNetworkInsightsAccessScopes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeNetworkInsightsAccessScopesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeNetworkInsightsAccessScopesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeNetworkInsightsAccessScopesCommandOutput/)

</details>
<details>
<summary>
DescribeNetworkInsightsAnalyses
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeNetworkInsightsAnalysesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeNetworkInsightsAnalysesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeNetworkInsightsAnalysesCommandOutput/)

</details>
<details>
<summary>
DescribeNetworkInsightsPaths
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeNetworkInsightsPathsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeNetworkInsightsPathsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeNetworkInsightsPathsCommandOutput/)

</details>
<details>
<summary>
DescribeNetworkInterfaceAttribute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeNetworkInterfaceAttributeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeNetworkInterfaceAttributeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeNetworkInterfaceAttributeCommandOutput/)

</details>
<details>
<summary>
DescribeNetworkInterfacePermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeNetworkInterfacePermissionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeNetworkInterfacePermissionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeNetworkInterfacePermissionsCommandOutput/)

</details>
<details>
<summary>
DescribeNetworkInterfaces
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeNetworkInterfacesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeNetworkInterfacesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeNetworkInterfacesCommandOutput/)

</details>
<details>
<summary>
DescribeOutpostLags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeOutpostLagsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeOutpostLagsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeOutpostLagsCommandOutput/)

</details>
<details>
<summary>
DescribePlacementGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribePlacementGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribePlacementGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribePlacementGroupsCommandOutput/)

</details>
<details>
<summary>
DescribePrefixLists
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribePrefixListsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribePrefixListsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribePrefixListsCommandOutput/)

</details>
<details>
<summary>
DescribePrincipalIdFormat
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribePrincipalIdFormatCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribePrincipalIdFormatCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribePrincipalIdFormatCommandOutput/)

</details>
<details>
<summary>
DescribePublicIpv4Pools
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribePublicIpv4PoolsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribePublicIpv4PoolsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribePublicIpv4PoolsCommandOutput/)

</details>
<details>
<summary>
DescribeRegions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeRegionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeRegionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeRegionsCommandOutput/)

</details>
<details>
<summary>
DescribeReplaceRootVolumeTasks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeReplaceRootVolumeTasksCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeReplaceRootVolumeTasksCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeReplaceRootVolumeTasksCommandOutput/)

</details>
<details>
<summary>
DescribeReservedInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeReservedInstancesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeReservedInstancesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeReservedInstancesCommandOutput/)

</details>
<details>
<summary>
DescribeReservedInstancesListings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeReservedInstancesListingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeReservedInstancesListingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeReservedInstancesListingsCommandOutput/)

</details>
<details>
<summary>
DescribeReservedInstancesModifications
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeReservedInstancesModificationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeReservedInstancesModificationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeReservedInstancesModificationsCommandOutput/)

</details>
<details>
<summary>
DescribeReservedInstancesOfferings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeReservedInstancesOfferingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeReservedInstancesOfferingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeReservedInstancesOfferingsCommandOutput/)

</details>
<details>
<summary>
DescribeRouteServerEndpoints
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeRouteServerEndpointsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeRouteServerEndpointsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeRouteServerEndpointsCommandOutput/)

</details>
<details>
<summary>
DescribeRouteServerPeers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeRouteServerPeersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeRouteServerPeersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeRouteServerPeersCommandOutput/)

</details>
<details>
<summary>
DescribeRouteServers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeRouteServersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeRouteServersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeRouteServersCommandOutput/)

</details>
<details>
<summary>
DescribeRouteTables
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeRouteTablesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeRouteTablesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeRouteTablesCommandOutput/)

</details>
<details>
<summary>
DescribeScheduledInstanceAvailability
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeScheduledInstanceAvailabilityCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeScheduledInstanceAvailabilityCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeScheduledInstanceAvailabilityCommandOutput/)

</details>
<details>
<summary>
DescribeScheduledInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeScheduledInstancesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeScheduledInstancesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeScheduledInstancesCommandOutput/)

</details>
<details>
<summary>
DescribeSecurityGroupReferences
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeSecurityGroupReferencesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeSecurityGroupReferencesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeSecurityGroupReferencesCommandOutput/)

</details>
<details>
<summary>
DescribeSecurityGroupRules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeSecurityGroupRulesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeSecurityGroupRulesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeSecurityGroupRulesCommandOutput/)

</details>
<details>
<summary>
DescribeSecurityGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeSecurityGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeSecurityGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeSecurityGroupsCommandOutput/)

</details>
<details>
<summary>
DescribeSecurityGroupVpcAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeSecurityGroupVpcAssociationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeSecurityGroupVpcAssociationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeSecurityGroupVpcAssociationsCommandOutput/)

</details>
<details>
<summary>
DescribeServiceLinkVirtualInterfaces
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeServiceLinkVirtualInterfacesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeServiceLinkVirtualInterfacesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeServiceLinkVirtualInterfacesCommandOutput/)

</details>
<details>
<summary>
DescribeSnapshotAttribute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeSnapshotAttributeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeSnapshotAttributeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeSnapshotAttributeCommandOutput/)

</details>
<details>
<summary>
DescribeSnapshots
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeSnapshotsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeSnapshotsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeSnapshotsCommandOutput/)

</details>
<details>
<summary>
DescribeSnapshotTierStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeSnapshotTierStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeSnapshotTierStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeSnapshotTierStatusCommandOutput/)

</details>
<details>
<summary>
DescribeSpotDatafeedSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeSpotDatafeedSubscriptionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeSpotDatafeedSubscriptionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeSpotDatafeedSubscriptionCommandOutput/)

</details>
<details>
<summary>
DescribeSpotFleetInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeSpotFleetInstancesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeSpotFleetInstancesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeSpotFleetInstancesCommandOutput/)

</details>
<details>
<summary>
DescribeSpotFleetRequestHistory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeSpotFleetRequestHistoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeSpotFleetRequestHistoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeSpotFleetRequestHistoryCommandOutput/)

</details>
<details>
<summary>
DescribeSpotFleetRequests
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeSpotFleetRequestsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeSpotFleetRequestsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeSpotFleetRequestsCommandOutput/)

</details>
<details>
<summary>
DescribeSpotInstanceRequests
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeSpotInstanceRequestsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeSpotInstanceRequestsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeSpotInstanceRequestsCommandOutput/)

</details>
<details>
<summary>
DescribeSpotPriceHistory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeSpotPriceHistoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeSpotPriceHistoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeSpotPriceHistoryCommandOutput/)

</details>
<details>
<summary>
DescribeStaleSecurityGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeStaleSecurityGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeStaleSecurityGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeStaleSecurityGroupsCommandOutput/)

</details>
<details>
<summary>
DescribeStoreImageTasks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeStoreImageTasksCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeStoreImageTasksCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeStoreImageTasksCommandOutput/)

</details>
<details>
<summary>
DescribeSubnets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeSubnetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeSubnetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeSubnetsCommandOutput/)

</details>
<details>
<summary>
DescribeTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeTagsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeTagsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeTagsCommandOutput/)

</details>
<details>
<summary>
DescribeTrafficMirrorFilterRules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeTrafficMirrorFilterRulesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeTrafficMirrorFilterRulesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeTrafficMirrorFilterRulesCommandOutput/)

</details>
<details>
<summary>
DescribeTrafficMirrorFilters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeTrafficMirrorFiltersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeTrafficMirrorFiltersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeTrafficMirrorFiltersCommandOutput/)

</details>
<details>
<summary>
DescribeTrafficMirrorSessions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeTrafficMirrorSessionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeTrafficMirrorSessionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeTrafficMirrorSessionsCommandOutput/)

</details>
<details>
<summary>
DescribeTrafficMirrorTargets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeTrafficMirrorTargetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeTrafficMirrorTargetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeTrafficMirrorTargetsCommandOutput/)

</details>
<details>
<summary>
DescribeTransitGatewayAttachments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeTransitGatewayAttachmentsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeTransitGatewayAttachmentsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeTransitGatewayAttachmentsCommandOutput/)

</details>
<details>
<summary>
DescribeTransitGatewayConnectPeers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeTransitGatewayConnectPeersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeTransitGatewayConnectPeersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeTransitGatewayConnectPeersCommandOutput/)

</details>
<details>
<summary>
DescribeTransitGatewayConnects
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeTransitGatewayConnectsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeTransitGatewayConnectsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeTransitGatewayConnectsCommandOutput/)

</details>
<details>
<summary>
DescribeTransitGatewayMulticastDomains
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeTransitGatewayMulticastDomainsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeTransitGatewayMulticastDomainsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeTransitGatewayMulticastDomainsCommandOutput/)

</details>
<details>
<summary>
DescribeTransitGatewayPeeringAttachments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeTransitGatewayPeeringAttachmentsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeTransitGatewayPeeringAttachmentsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeTransitGatewayPeeringAttachmentsCommandOutput/)

</details>
<details>
<summary>
DescribeTransitGatewayPolicyTables
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeTransitGatewayPolicyTablesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeTransitGatewayPolicyTablesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeTransitGatewayPolicyTablesCommandOutput/)

</details>
<details>
<summary>
DescribeTransitGatewayRouteTableAnnouncements
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeTransitGatewayRouteTableAnnouncementsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeTransitGatewayRouteTableAnnouncementsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeTransitGatewayRouteTableAnnouncementsCommandOutput/)

</details>
<details>
<summary>
DescribeTransitGatewayRouteTables
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeTransitGatewayRouteTablesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeTransitGatewayRouteTablesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeTransitGatewayRouteTablesCommandOutput/)

</details>
<details>
<summary>
DescribeTransitGateways
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeTransitGatewaysCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeTransitGatewaysCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeTransitGatewaysCommandOutput/)

</details>
<details>
<summary>
DescribeTransitGatewayVpcAttachments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeTransitGatewayVpcAttachmentsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeTransitGatewayVpcAttachmentsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeTransitGatewayVpcAttachmentsCommandOutput/)

</details>
<details>
<summary>
DescribeTrunkInterfaceAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeTrunkInterfaceAssociationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeTrunkInterfaceAssociationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeTrunkInterfaceAssociationsCommandOutput/)

</details>
<details>
<summary>
DescribeVerifiedAccessEndpoints
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeVerifiedAccessEndpointsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeVerifiedAccessEndpointsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeVerifiedAccessEndpointsCommandOutput/)

</details>
<details>
<summary>
DescribeVerifiedAccessGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeVerifiedAccessGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeVerifiedAccessGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeVerifiedAccessGroupsCommandOutput/)

</details>
<details>
<summary>
DescribeVerifiedAccessInstanceLoggingConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeVerifiedAccessInstanceLoggingConfigurationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeVerifiedAccessInstanceLoggingConfigurationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeVerifiedAccessInstanceLoggingConfigurationsCommandOutput/)

</details>
<details>
<summary>
DescribeVerifiedAccessInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeVerifiedAccessInstancesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeVerifiedAccessInstancesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeVerifiedAccessInstancesCommandOutput/)

</details>
<details>
<summary>
DescribeVerifiedAccessTrustProviders
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeVerifiedAccessTrustProvidersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeVerifiedAccessTrustProvidersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeVerifiedAccessTrustProvidersCommandOutput/)

</details>
<details>
<summary>
DescribeVolumeAttribute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeVolumeAttributeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeVolumeAttributeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeVolumeAttributeCommandOutput/)

</details>
<details>
<summary>
DescribeVolumes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeVolumesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeVolumesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeVolumesCommandOutput/)

</details>
<details>
<summary>
DescribeVolumesModifications
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeVolumesModificationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeVolumesModificationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeVolumesModificationsCommandOutput/)

</details>
<details>
<summary>
DescribeVolumeStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeVolumeStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeVolumeStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeVolumeStatusCommandOutput/)

</details>
<details>
<summary>
DescribeVpcAttribute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeVpcAttributeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeVpcAttributeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeVpcAttributeCommandOutput/)

</details>
<details>
<summary>
DescribeVpcBlockPublicAccessExclusions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeVpcBlockPublicAccessExclusionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeVpcBlockPublicAccessExclusionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeVpcBlockPublicAccessExclusionsCommandOutput/)

</details>
<details>
<summary>
DescribeVpcBlockPublicAccessOptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeVpcBlockPublicAccessOptionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeVpcBlockPublicAccessOptionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeVpcBlockPublicAccessOptionsCommandOutput/)

</details>
<details>
<summary>
DescribeVpcClassicLink
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeVpcClassicLinkCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeVpcClassicLinkCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeVpcClassicLinkCommandOutput/)

</details>
<details>
<summary>
DescribeVpcClassicLinkDnsSupport
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeVpcClassicLinkDnsSupportCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeVpcClassicLinkDnsSupportCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeVpcClassicLinkDnsSupportCommandOutput/)

</details>
<details>
<summary>
DescribeVpcEndpointAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeVpcEndpointAssociationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeVpcEndpointAssociationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeVpcEndpointAssociationsCommandOutput/)

</details>
<details>
<summary>
DescribeVpcEndpointConnectionNotifications
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeVpcEndpointConnectionNotificationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeVpcEndpointConnectionNotificationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeVpcEndpointConnectionNotificationsCommandOutput/)

</details>
<details>
<summary>
DescribeVpcEndpointConnections
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeVpcEndpointConnectionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeVpcEndpointConnectionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeVpcEndpointConnectionsCommandOutput/)

</details>
<details>
<summary>
DescribeVpcEndpoints
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeVpcEndpointsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeVpcEndpointsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeVpcEndpointsCommandOutput/)

</details>
<details>
<summary>
DescribeVpcEndpointServiceConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeVpcEndpointServiceConfigurationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeVpcEndpointServiceConfigurationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeVpcEndpointServiceConfigurationsCommandOutput/)

</details>
<details>
<summary>
DescribeVpcEndpointServicePermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeVpcEndpointServicePermissionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeVpcEndpointServicePermissionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeVpcEndpointServicePermissionsCommandOutput/)

</details>
<details>
<summary>
DescribeVpcEndpointServices
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeVpcEndpointServicesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeVpcEndpointServicesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeVpcEndpointServicesCommandOutput/)

</details>
<details>
<summary>
DescribeVpcPeeringConnections
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeVpcPeeringConnectionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeVpcPeeringConnectionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeVpcPeeringConnectionsCommandOutput/)

</details>
<details>
<summary>
DescribeVpcs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeVpcsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeVpcsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeVpcsCommandOutput/)

</details>
<details>
<summary>
DescribeVpnConnections
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeVpnConnectionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeVpnConnectionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeVpnConnectionsCommandOutput/)

</details>
<details>
<summary>
DescribeVpnGateways
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DescribeVpnGatewaysCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeVpnGatewaysCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DescribeVpnGatewaysCommandOutput/)

</details>
<details>
<summary>
DetachClassicLinkVpc
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DetachClassicLinkVpcCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DetachClassicLinkVpcCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DetachClassicLinkVpcCommandOutput/)

</details>
<details>
<summary>
DetachInternetGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DetachInternetGatewayCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DetachInternetGatewayCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DetachInternetGatewayCommandOutput/)

</details>
<details>
<summary>
DetachNetworkInterface
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DetachNetworkInterfaceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DetachNetworkInterfaceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DetachNetworkInterfaceCommandOutput/)

</details>
<details>
<summary>
DetachVerifiedAccessTrustProvider
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DetachVerifiedAccessTrustProviderCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DetachVerifiedAccessTrustProviderCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DetachVerifiedAccessTrustProviderCommandOutput/)

</details>
<details>
<summary>
DetachVolume
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DetachVolumeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DetachVolumeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DetachVolumeCommandOutput/)

</details>
<details>
<summary>
DetachVpnGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DetachVpnGatewayCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DetachVpnGatewayCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DetachVpnGatewayCommandOutput/)

</details>
<details>
<summary>
DisableAddressTransfer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DisableAddressTransferCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisableAddressTransferCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisableAddressTransferCommandOutput/)

</details>
<details>
<summary>
DisableAllowedImagesSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DisableAllowedImagesSettingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisableAllowedImagesSettingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisableAllowedImagesSettingsCommandOutput/)

</details>
<details>
<summary>
DisableAwsNetworkPerformanceMetricSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DisableAwsNetworkPerformanceMetricSubscriptionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisableAwsNetworkPerformanceMetricSubscriptionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisableAwsNetworkPerformanceMetricSubscriptionCommandOutput/)

</details>
<details>
<summary>
DisableCapacityManager
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DisableCapacityManagerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisableCapacityManagerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisableCapacityManagerCommandOutput/)

</details>
<details>
<summary>
DisableEbsEncryptionByDefault
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DisableEbsEncryptionByDefaultCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisableEbsEncryptionByDefaultCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisableEbsEncryptionByDefaultCommandOutput/)

</details>
<details>
<summary>
DisableFastLaunch
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DisableFastLaunchCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisableFastLaunchCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisableFastLaunchCommandOutput/)

</details>
<details>
<summary>
DisableFastSnapshotRestores
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DisableFastSnapshotRestoresCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisableFastSnapshotRestoresCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisableFastSnapshotRestoresCommandOutput/)

</details>
<details>
<summary>
DisableImage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DisableImageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisableImageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisableImageCommandOutput/)

</details>
<details>
<summary>
DisableImageBlockPublicAccess
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DisableImageBlockPublicAccessCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisableImageBlockPublicAccessCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisableImageBlockPublicAccessCommandOutput/)

</details>
<details>
<summary>
DisableImageDeprecation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DisableImageDeprecationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisableImageDeprecationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisableImageDeprecationCommandOutput/)

</details>
<details>
<summary>
DisableImageDeregistrationProtection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DisableImageDeregistrationProtectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisableImageDeregistrationProtectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisableImageDeregistrationProtectionCommandOutput/)

</details>
<details>
<summary>
DisableIpamOrganizationAdminAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DisableIpamOrganizationAdminAccountCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisableIpamOrganizationAdminAccountCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisableIpamOrganizationAdminAccountCommandOutput/)

</details>
<details>
<summary>
DisableRouteServerPropagation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DisableRouteServerPropagationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisableRouteServerPropagationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisableRouteServerPropagationCommandOutput/)

</details>
<details>
<summary>
DisableSerialConsoleAccess
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DisableSerialConsoleAccessCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisableSerialConsoleAccessCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisableSerialConsoleAccessCommandOutput/)

</details>
<details>
<summary>
DisableSnapshotBlockPublicAccess
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DisableSnapshotBlockPublicAccessCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisableSnapshotBlockPublicAccessCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisableSnapshotBlockPublicAccessCommandOutput/)

</details>
<details>
<summary>
DisableTransitGatewayRouteTablePropagation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DisableTransitGatewayRouteTablePropagationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisableTransitGatewayRouteTablePropagationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisableTransitGatewayRouteTablePropagationCommandOutput/)

</details>
<details>
<summary>
DisableVgwRoutePropagation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DisableVgwRoutePropagationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisableVgwRoutePropagationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisableVgwRoutePropagationCommandOutput/)

</details>
<details>
<summary>
DisableVpcClassicLink
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DisableVpcClassicLinkCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisableVpcClassicLinkCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisableVpcClassicLinkCommandOutput/)

</details>
<details>
<summary>
DisableVpcClassicLinkDnsSupport
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DisableVpcClassicLinkDnsSupportCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisableVpcClassicLinkDnsSupportCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisableVpcClassicLinkDnsSupportCommandOutput/)

</details>
<details>
<summary>
DisassociateAddress
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DisassociateAddressCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisassociateAddressCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisassociateAddressCommandOutput/)

</details>
<details>
<summary>
DisassociateCapacityReservationBillingOwner
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DisassociateCapacityReservationBillingOwnerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisassociateCapacityReservationBillingOwnerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisassociateCapacityReservationBillingOwnerCommandOutput/)

</details>
<details>
<summary>
DisassociateClientVpnTargetNetwork
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DisassociateClientVpnTargetNetworkCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisassociateClientVpnTargetNetworkCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisassociateClientVpnTargetNetworkCommandOutput/)

</details>
<details>
<summary>
DisassociateEnclaveCertificateIamRole
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DisassociateEnclaveCertificateIamRoleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisassociateEnclaveCertificateIamRoleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisassociateEnclaveCertificateIamRoleCommandOutput/)

</details>
<details>
<summary>
DisassociateIamInstanceProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DisassociateIamInstanceProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisassociateIamInstanceProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisassociateIamInstanceProfileCommandOutput/)

</details>
<details>
<summary>
DisassociateInstanceEventWindow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DisassociateInstanceEventWindowCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisassociateInstanceEventWindowCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisassociateInstanceEventWindowCommandOutput/)

</details>
<details>
<summary>
DisassociateIpamByoasn
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DisassociateIpamByoasnCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisassociateIpamByoasnCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisassociateIpamByoasnCommandOutput/)

</details>
<details>
<summary>
DisassociateIpamResourceDiscovery
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DisassociateIpamResourceDiscoveryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisassociateIpamResourceDiscoveryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisassociateIpamResourceDiscoveryCommandOutput/)

</details>
<details>
<summary>
DisassociateNatGatewayAddress
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DisassociateNatGatewayAddressCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisassociateNatGatewayAddressCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisassociateNatGatewayAddressCommandOutput/)

</details>
<details>
<summary>
DisassociateRouteServer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DisassociateRouteServerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisassociateRouteServerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisassociateRouteServerCommandOutput/)

</details>
<details>
<summary>
DisassociateRouteTable
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DisassociateRouteTableCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisassociateRouteTableCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisassociateRouteTableCommandOutput/)

</details>
<details>
<summary>
DisassociateSecurityGroupVpc
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DisassociateSecurityGroupVpcCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisassociateSecurityGroupVpcCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisassociateSecurityGroupVpcCommandOutput/)

</details>
<details>
<summary>
DisassociateSubnetCidrBlock
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DisassociateSubnetCidrBlockCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisassociateSubnetCidrBlockCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisassociateSubnetCidrBlockCommandOutput/)

</details>
<details>
<summary>
DisassociateTransitGatewayMulticastDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DisassociateTransitGatewayMulticastDomainCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisassociateTransitGatewayMulticastDomainCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisassociateTransitGatewayMulticastDomainCommandOutput/)

</details>
<details>
<summary>
DisassociateTransitGatewayPolicyTable
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DisassociateTransitGatewayPolicyTableCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisassociateTransitGatewayPolicyTableCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisassociateTransitGatewayPolicyTableCommandOutput/)

</details>
<details>
<summary>
DisassociateTransitGatewayRouteTable
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DisassociateTransitGatewayRouteTableCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisassociateTransitGatewayRouteTableCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisassociateTransitGatewayRouteTableCommandOutput/)

</details>
<details>
<summary>
DisassociateTrunkInterface
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DisassociateTrunkInterfaceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisassociateTrunkInterfaceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisassociateTrunkInterfaceCommandOutput/)

</details>
<details>
<summary>
DisassociateVpcCidrBlock
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/DisassociateVpcCidrBlockCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisassociateVpcCidrBlockCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/DisassociateVpcCidrBlockCommandOutput/)

</details>
<details>
<summary>
EnableAddressTransfer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/EnableAddressTransferCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/EnableAddressTransferCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/EnableAddressTransferCommandOutput/)

</details>
<details>
<summary>
EnableAllowedImagesSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/EnableAllowedImagesSettingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/EnableAllowedImagesSettingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/EnableAllowedImagesSettingsCommandOutput/)

</details>
<details>
<summary>
EnableAwsNetworkPerformanceMetricSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/EnableAwsNetworkPerformanceMetricSubscriptionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/EnableAwsNetworkPerformanceMetricSubscriptionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/EnableAwsNetworkPerformanceMetricSubscriptionCommandOutput/)

</details>
<details>
<summary>
EnableCapacityManager
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/EnableCapacityManagerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/EnableCapacityManagerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/EnableCapacityManagerCommandOutput/)

</details>
<details>
<summary>
EnableEbsEncryptionByDefault
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/EnableEbsEncryptionByDefaultCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/EnableEbsEncryptionByDefaultCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/EnableEbsEncryptionByDefaultCommandOutput/)

</details>
<details>
<summary>
EnableFastLaunch
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/EnableFastLaunchCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/EnableFastLaunchCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/EnableFastLaunchCommandOutput/)

</details>
<details>
<summary>
EnableFastSnapshotRestores
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/EnableFastSnapshotRestoresCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/EnableFastSnapshotRestoresCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/EnableFastSnapshotRestoresCommandOutput/)

</details>
<details>
<summary>
EnableImage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/EnableImageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/EnableImageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/EnableImageCommandOutput/)

</details>
<details>
<summary>
EnableImageBlockPublicAccess
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/EnableImageBlockPublicAccessCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/EnableImageBlockPublicAccessCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/EnableImageBlockPublicAccessCommandOutput/)

</details>
<details>
<summary>
EnableImageDeprecation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/EnableImageDeprecationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/EnableImageDeprecationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/EnableImageDeprecationCommandOutput/)

</details>
<details>
<summary>
EnableImageDeregistrationProtection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/EnableImageDeregistrationProtectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/EnableImageDeregistrationProtectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/EnableImageDeregistrationProtectionCommandOutput/)

</details>
<details>
<summary>
EnableIpamOrganizationAdminAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/EnableIpamOrganizationAdminAccountCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/EnableIpamOrganizationAdminAccountCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/EnableIpamOrganizationAdminAccountCommandOutput/)

</details>
<details>
<summary>
EnableReachabilityAnalyzerOrganizationSharing
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/EnableReachabilityAnalyzerOrganizationSharingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/EnableReachabilityAnalyzerOrganizationSharingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/EnableReachabilityAnalyzerOrganizationSharingCommandOutput/)

</details>
<details>
<summary>
EnableRouteServerPropagation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/EnableRouteServerPropagationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/EnableRouteServerPropagationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/EnableRouteServerPropagationCommandOutput/)

</details>
<details>
<summary>
EnableSerialConsoleAccess
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/EnableSerialConsoleAccessCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/EnableSerialConsoleAccessCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/EnableSerialConsoleAccessCommandOutput/)

</details>
<details>
<summary>
EnableSnapshotBlockPublicAccess
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/EnableSnapshotBlockPublicAccessCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/EnableSnapshotBlockPublicAccessCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/EnableSnapshotBlockPublicAccessCommandOutput/)

</details>
<details>
<summary>
EnableTransitGatewayRouteTablePropagation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/EnableTransitGatewayRouteTablePropagationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/EnableTransitGatewayRouteTablePropagationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/EnableTransitGatewayRouteTablePropagationCommandOutput/)

</details>
<details>
<summary>
EnableVgwRoutePropagation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/EnableVgwRoutePropagationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/EnableVgwRoutePropagationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/EnableVgwRoutePropagationCommandOutput/)

</details>
<details>
<summary>
EnableVolumeIO
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/EnableVolumeIOCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/EnableVolumeIOCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/EnableVolumeIOCommandOutput/)

</details>
<details>
<summary>
EnableVpcClassicLink
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/EnableVpcClassicLinkCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/EnableVpcClassicLinkCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/EnableVpcClassicLinkCommandOutput/)

</details>
<details>
<summary>
EnableVpcClassicLinkDnsSupport
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/EnableVpcClassicLinkDnsSupportCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/EnableVpcClassicLinkDnsSupportCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/EnableVpcClassicLinkDnsSupportCommandOutput/)

</details>
<details>
<summary>
ExportClientVpnClientCertificateRevocationList
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ExportClientVpnClientCertificateRevocationListCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ExportClientVpnClientCertificateRevocationListCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ExportClientVpnClientCertificateRevocationListCommandOutput/)

</details>
<details>
<summary>
ExportClientVpnClientConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ExportClientVpnClientConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ExportClientVpnClientConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ExportClientVpnClientConfigurationCommandOutput/)

</details>
<details>
<summary>
ExportImage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ExportImageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ExportImageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ExportImageCommandOutput/)

</details>
<details>
<summary>
ExportTransitGatewayRoutes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ExportTransitGatewayRoutesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ExportTransitGatewayRoutesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ExportTransitGatewayRoutesCommandOutput/)

</details>
<details>
<summary>
ExportVerifiedAccessInstanceClientConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ExportVerifiedAccessInstanceClientConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ExportVerifiedAccessInstanceClientConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ExportVerifiedAccessInstanceClientConfigurationCommandOutput/)

</details>
<details>
<summary>
GetActiveVpnTunnelStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/GetActiveVpnTunnelStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetActiveVpnTunnelStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetActiveVpnTunnelStatusCommandOutput/)

</details>
<details>
<summary>
GetAllowedImagesSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/GetAllowedImagesSettingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetAllowedImagesSettingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetAllowedImagesSettingsCommandOutput/)

</details>
<details>
<summary>
GetAssociatedEnclaveCertificateIamRoles
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/GetAssociatedEnclaveCertificateIamRolesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetAssociatedEnclaveCertificateIamRolesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetAssociatedEnclaveCertificateIamRolesCommandOutput/)

</details>
<details>
<summary>
GetAssociatedIpv6PoolCidrs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/GetAssociatedIpv6PoolCidrsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetAssociatedIpv6PoolCidrsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetAssociatedIpv6PoolCidrsCommandOutput/)

</details>
<details>
<summary>
GetAwsNetworkPerformanceData
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/GetAwsNetworkPerformanceDataCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetAwsNetworkPerformanceDataCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetAwsNetworkPerformanceDataCommandOutput/)

</details>
<details>
<summary>
GetCapacityManagerAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/GetCapacityManagerAttributesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetCapacityManagerAttributesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetCapacityManagerAttributesCommandOutput/)

</details>
<details>
<summary>
GetCapacityManagerMetricData
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/GetCapacityManagerMetricDataCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetCapacityManagerMetricDataCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetCapacityManagerMetricDataCommandOutput/)

</details>
<details>
<summary>
GetCapacityManagerMetricDimensions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/GetCapacityManagerMetricDimensionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetCapacityManagerMetricDimensionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetCapacityManagerMetricDimensionsCommandOutput/)

</details>
<details>
<summary>
GetCapacityReservationUsage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/GetCapacityReservationUsageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetCapacityReservationUsageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetCapacityReservationUsageCommandOutput/)

</details>
<details>
<summary>
GetCoipPoolUsage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/GetCoipPoolUsageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetCoipPoolUsageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetCoipPoolUsageCommandOutput/)

</details>
<details>
<summary>
GetConsoleOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/GetConsoleOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetConsoleOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetConsoleOutputCommandOutput/)

</details>
<details>
<summary>
GetConsoleScreenshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/GetConsoleScreenshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetConsoleScreenshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetConsoleScreenshotCommandOutput/)

</details>
<details>
<summary>
GetDeclarativePoliciesReportSummary
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/GetDeclarativePoliciesReportSummaryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetDeclarativePoliciesReportSummaryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetDeclarativePoliciesReportSummaryCommandOutput/)

</details>
<details>
<summary>
GetDefaultCreditSpecification
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/GetDefaultCreditSpecificationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetDefaultCreditSpecificationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetDefaultCreditSpecificationCommandOutput/)

</details>
<details>
<summary>
GetEbsDefaultKmsKeyId
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/GetEbsDefaultKmsKeyIdCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetEbsDefaultKmsKeyIdCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetEbsDefaultKmsKeyIdCommandOutput/)

</details>
<details>
<summary>
GetEbsEncryptionByDefault
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/GetEbsEncryptionByDefaultCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetEbsEncryptionByDefaultCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetEbsEncryptionByDefaultCommandOutput/)

</details>
<details>
<summary>
GetFlowLogsIntegrationTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/GetFlowLogsIntegrationTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetFlowLogsIntegrationTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetFlowLogsIntegrationTemplateCommandOutput/)

</details>
<details>
<summary>
GetGroupsForCapacityReservation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/GetGroupsForCapacityReservationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetGroupsForCapacityReservationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetGroupsForCapacityReservationCommandOutput/)

</details>
<details>
<summary>
GetHostReservationPurchasePreview
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/GetHostReservationPurchasePreviewCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetHostReservationPurchasePreviewCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetHostReservationPurchasePreviewCommandOutput/)

</details>
<details>
<summary>
GetImageBlockPublicAccessState
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/GetImageBlockPublicAccessStateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetImageBlockPublicAccessStateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetImageBlockPublicAccessStateCommandOutput/)

</details>
<details>
<summary>
GetInstanceMetadataDefaults
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/GetInstanceMetadataDefaultsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetInstanceMetadataDefaultsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetInstanceMetadataDefaultsCommandOutput/)

</details>
<details>
<summary>
GetInstanceTpmEkPub
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/GetInstanceTpmEkPubCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetInstanceTpmEkPubCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetInstanceTpmEkPubCommandOutput/)

</details>
<details>
<summary>
GetInstanceTypesFromInstanceRequirements
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/GetInstanceTypesFromInstanceRequirementsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetInstanceTypesFromInstanceRequirementsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetInstanceTypesFromInstanceRequirementsCommandOutput/)

</details>
<details>
<summary>
GetInstanceUefiData
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/GetInstanceUefiDataCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetInstanceUefiDataCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetInstanceUefiDataCommandOutput/)

</details>
<details>
<summary>
GetIpamAddressHistory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/GetIpamAddressHistoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetIpamAddressHistoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetIpamAddressHistoryCommandOutput/)

</details>
<details>
<summary>
GetIpamDiscoveredAccounts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/GetIpamDiscoveredAccountsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetIpamDiscoveredAccountsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetIpamDiscoveredAccountsCommandOutput/)

</details>
<details>
<summary>
GetIpamDiscoveredPublicAddresses
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/GetIpamDiscoveredPublicAddressesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetIpamDiscoveredPublicAddressesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetIpamDiscoveredPublicAddressesCommandOutput/)

</details>
<details>
<summary>
GetIpamDiscoveredResourceCidrs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/GetIpamDiscoveredResourceCidrsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetIpamDiscoveredResourceCidrsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetIpamDiscoveredResourceCidrsCommandOutput/)

</details>
<details>
<summary>
GetIpamPoolAllocations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/GetIpamPoolAllocationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetIpamPoolAllocationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetIpamPoolAllocationsCommandOutput/)

</details>
<details>
<summary>
GetIpamPoolCidrs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/GetIpamPoolCidrsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetIpamPoolCidrsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetIpamPoolCidrsCommandOutput/)

</details>
<details>
<summary>
GetIpamPrefixListResolverRules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/GetIpamPrefixListResolverRulesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetIpamPrefixListResolverRulesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetIpamPrefixListResolverRulesCommandOutput/)

</details>
<details>
<summary>
GetIpamPrefixListResolverVersionEntries
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/GetIpamPrefixListResolverVersionEntriesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetIpamPrefixListResolverVersionEntriesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetIpamPrefixListResolverVersionEntriesCommandOutput/)

</details>
<details>
<summary>
GetIpamPrefixListResolverVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/GetIpamPrefixListResolverVersionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetIpamPrefixListResolverVersionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetIpamPrefixListResolverVersionsCommandOutput/)

</details>
<details>
<summary>
GetIpamResourceCidrs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/GetIpamResourceCidrsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetIpamResourceCidrsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetIpamResourceCidrsCommandOutput/)

</details>
<details>
<summary>
GetLaunchTemplateData
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/GetLaunchTemplateDataCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetLaunchTemplateDataCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetLaunchTemplateDataCommandOutput/)

</details>
<details>
<summary>
GetManagedPrefixListAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/GetManagedPrefixListAssociationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetManagedPrefixListAssociationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetManagedPrefixListAssociationsCommandOutput/)

</details>
<details>
<summary>
GetManagedPrefixListEntries
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/GetManagedPrefixListEntriesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetManagedPrefixListEntriesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetManagedPrefixListEntriesCommandOutput/)

</details>
<details>
<summary>
GetNetworkInsightsAccessScopeAnalysisFindings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/GetNetworkInsightsAccessScopeAnalysisFindingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetNetworkInsightsAccessScopeAnalysisFindingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetNetworkInsightsAccessScopeAnalysisFindingsCommandOutput/)

</details>
<details>
<summary>
GetNetworkInsightsAccessScopeContent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/GetNetworkInsightsAccessScopeContentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetNetworkInsightsAccessScopeContentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetNetworkInsightsAccessScopeContentCommandOutput/)

</details>
<details>
<summary>
GetPasswordData
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/GetPasswordDataCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetPasswordDataCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetPasswordDataCommandOutput/)

</details>
<details>
<summary>
GetReservedInstancesExchangeQuote
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/GetReservedInstancesExchangeQuoteCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetReservedInstancesExchangeQuoteCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetReservedInstancesExchangeQuoteCommandOutput/)

</details>
<details>
<summary>
GetRouteServerAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/GetRouteServerAssociationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetRouteServerAssociationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetRouteServerAssociationsCommandOutput/)

</details>
<details>
<summary>
GetRouteServerPropagations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/GetRouteServerPropagationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetRouteServerPropagationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetRouteServerPropagationsCommandOutput/)

</details>
<details>
<summary>
GetRouteServerRoutingDatabase
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/GetRouteServerRoutingDatabaseCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetRouteServerRoutingDatabaseCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetRouteServerRoutingDatabaseCommandOutput/)

</details>
<details>
<summary>
GetSecurityGroupsForVpc
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/GetSecurityGroupsForVpcCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetSecurityGroupsForVpcCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetSecurityGroupsForVpcCommandOutput/)

</details>
<details>
<summary>
GetSerialConsoleAccessStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/GetSerialConsoleAccessStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetSerialConsoleAccessStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetSerialConsoleAccessStatusCommandOutput/)

</details>
<details>
<summary>
GetSnapshotBlockPublicAccessState
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/GetSnapshotBlockPublicAccessStateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetSnapshotBlockPublicAccessStateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetSnapshotBlockPublicAccessStateCommandOutput/)

</details>
<details>
<summary>
GetSpotPlacementScores
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/GetSpotPlacementScoresCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetSpotPlacementScoresCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetSpotPlacementScoresCommandOutput/)

</details>
<details>
<summary>
GetSubnetCidrReservations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/GetSubnetCidrReservationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetSubnetCidrReservationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetSubnetCidrReservationsCommandOutput/)

</details>
<details>
<summary>
GetTransitGatewayAttachmentPropagations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/GetTransitGatewayAttachmentPropagationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetTransitGatewayAttachmentPropagationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetTransitGatewayAttachmentPropagationsCommandOutput/)

</details>
<details>
<summary>
GetTransitGatewayMulticastDomainAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/GetTransitGatewayMulticastDomainAssociationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetTransitGatewayMulticastDomainAssociationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetTransitGatewayMulticastDomainAssociationsCommandOutput/)

</details>
<details>
<summary>
GetTransitGatewayPolicyTableAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/GetTransitGatewayPolicyTableAssociationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetTransitGatewayPolicyTableAssociationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetTransitGatewayPolicyTableAssociationsCommandOutput/)

</details>
<details>
<summary>
GetTransitGatewayPolicyTableEntries
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/GetTransitGatewayPolicyTableEntriesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetTransitGatewayPolicyTableEntriesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetTransitGatewayPolicyTableEntriesCommandOutput/)

</details>
<details>
<summary>
GetTransitGatewayPrefixListReferences
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/GetTransitGatewayPrefixListReferencesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetTransitGatewayPrefixListReferencesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetTransitGatewayPrefixListReferencesCommandOutput/)

</details>
<details>
<summary>
GetTransitGatewayRouteTableAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/GetTransitGatewayRouteTableAssociationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetTransitGatewayRouteTableAssociationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetTransitGatewayRouteTableAssociationsCommandOutput/)

</details>
<details>
<summary>
GetTransitGatewayRouteTablePropagations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/GetTransitGatewayRouteTablePropagationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetTransitGatewayRouteTablePropagationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetTransitGatewayRouteTablePropagationsCommandOutput/)

</details>
<details>
<summary>
GetVerifiedAccessEndpointPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/GetVerifiedAccessEndpointPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetVerifiedAccessEndpointPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetVerifiedAccessEndpointPolicyCommandOutput/)

</details>
<details>
<summary>
GetVerifiedAccessEndpointTargets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/GetVerifiedAccessEndpointTargetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetVerifiedAccessEndpointTargetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetVerifiedAccessEndpointTargetsCommandOutput/)

</details>
<details>
<summary>
GetVerifiedAccessGroupPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/GetVerifiedAccessGroupPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetVerifiedAccessGroupPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetVerifiedAccessGroupPolicyCommandOutput/)

</details>
<details>
<summary>
GetVpnConnectionDeviceSampleConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/GetVpnConnectionDeviceSampleConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetVpnConnectionDeviceSampleConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetVpnConnectionDeviceSampleConfigurationCommandOutput/)

</details>
<details>
<summary>
GetVpnConnectionDeviceTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/GetVpnConnectionDeviceTypesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetVpnConnectionDeviceTypesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetVpnConnectionDeviceTypesCommandOutput/)

</details>
<details>
<summary>
GetVpnTunnelReplacementStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/GetVpnTunnelReplacementStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetVpnTunnelReplacementStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/GetVpnTunnelReplacementStatusCommandOutput/)

</details>
<details>
<summary>
ImportClientVpnClientCertificateRevocationList
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ImportClientVpnClientCertificateRevocationListCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ImportClientVpnClientCertificateRevocationListCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ImportClientVpnClientCertificateRevocationListCommandOutput/)

</details>
<details>
<summary>
ImportImage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ImportImageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ImportImageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ImportImageCommandOutput/)

</details>
<details>
<summary>
ImportInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ImportInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ImportInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ImportInstanceCommandOutput/)

</details>
<details>
<summary>
ImportKeyPair
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ImportKeyPairCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ImportKeyPairCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ImportKeyPairCommandOutput/)

</details>
<details>
<summary>
ImportSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ImportSnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ImportSnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ImportSnapshotCommandOutput/)

</details>
<details>
<summary>
ImportVolume
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ImportVolumeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ImportVolumeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ImportVolumeCommandOutput/)

</details>
<details>
<summary>
ListImagesInRecycleBin
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ListImagesInRecycleBinCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ListImagesInRecycleBinCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ListImagesInRecycleBinCommandOutput/)

</details>
<details>
<summary>
ListSnapshotsInRecycleBin
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ListSnapshotsInRecycleBinCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ListSnapshotsInRecycleBinCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ListSnapshotsInRecycleBinCommandOutput/)

</details>
<details>
<summary>
LockSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/LockSnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/LockSnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/LockSnapshotCommandOutput/)

</details>
<details>
<summary>
ModifyAddressAttribute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyAddressAttributeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyAddressAttributeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyAddressAttributeCommandOutput/)

</details>
<details>
<summary>
ModifyAvailabilityZoneGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyAvailabilityZoneGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyAvailabilityZoneGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyAvailabilityZoneGroupCommandOutput/)

</details>
<details>
<summary>
ModifyCapacityReservation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyCapacityReservationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyCapacityReservationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyCapacityReservationCommandOutput/)

</details>
<details>
<summary>
ModifyCapacityReservationFleet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyCapacityReservationFleetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyCapacityReservationFleetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyCapacityReservationFleetCommandOutput/)

</details>
<details>
<summary>
ModifyClientVpnEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyClientVpnEndpointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyClientVpnEndpointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyClientVpnEndpointCommandOutput/)

</details>
<details>
<summary>
ModifyDefaultCreditSpecification
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyDefaultCreditSpecificationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyDefaultCreditSpecificationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyDefaultCreditSpecificationCommandOutput/)

</details>
<details>
<summary>
ModifyEbsDefaultKmsKeyId
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyEbsDefaultKmsKeyIdCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyEbsDefaultKmsKeyIdCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyEbsDefaultKmsKeyIdCommandOutput/)

</details>
<details>
<summary>
ModifyFleet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyFleetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyFleetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyFleetCommandOutput/)

</details>
<details>
<summary>
ModifyFpgaImageAttribute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyFpgaImageAttributeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyFpgaImageAttributeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyFpgaImageAttributeCommandOutput/)

</details>
<details>
<summary>
ModifyHosts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyHostsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyHostsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyHostsCommandOutput/)

</details>
<details>
<summary>
ModifyIdentityIdFormat
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyIdentityIdFormatCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyIdentityIdFormatCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyIdentityIdFormatCommandOutput/)

</details>
<details>
<summary>
ModifyIdFormat
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyIdFormatCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyIdFormatCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyIdFormatCommandOutput/)

</details>
<details>
<summary>
ModifyImageAttribute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyImageAttributeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyImageAttributeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyImageAttributeCommandOutput/)

</details>
<details>
<summary>
ModifyInstanceAttribute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyInstanceAttributeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyInstanceAttributeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyInstanceAttributeCommandOutput/)

</details>
<details>
<summary>
ModifyInstanceCapacityReservationAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyInstanceCapacityReservationAttributesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyInstanceCapacityReservationAttributesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyInstanceCapacityReservationAttributesCommandOutput/)

</details>
<details>
<summary>
ModifyInstanceConnectEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyInstanceConnectEndpointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyInstanceConnectEndpointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyInstanceConnectEndpointCommandOutput/)

</details>
<details>
<summary>
ModifyInstanceCpuOptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyInstanceCpuOptionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyInstanceCpuOptionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyInstanceCpuOptionsCommandOutput/)

</details>
<details>
<summary>
ModifyInstanceCreditSpecification
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyInstanceCreditSpecificationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyInstanceCreditSpecificationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyInstanceCreditSpecificationCommandOutput/)

</details>
<details>
<summary>
ModifyInstanceEventStartTime
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyInstanceEventStartTimeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyInstanceEventStartTimeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyInstanceEventStartTimeCommandOutput/)

</details>
<details>
<summary>
ModifyInstanceEventWindow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyInstanceEventWindowCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyInstanceEventWindowCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyInstanceEventWindowCommandOutput/)

</details>
<details>
<summary>
ModifyInstanceMaintenanceOptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyInstanceMaintenanceOptionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyInstanceMaintenanceOptionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyInstanceMaintenanceOptionsCommandOutput/)

</details>
<details>
<summary>
ModifyInstanceMetadataDefaults
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyInstanceMetadataDefaultsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyInstanceMetadataDefaultsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyInstanceMetadataDefaultsCommandOutput/)

</details>
<details>
<summary>
ModifyInstanceMetadataOptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyInstanceMetadataOptionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyInstanceMetadataOptionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyInstanceMetadataOptionsCommandOutput/)

</details>
<details>
<summary>
ModifyInstanceNetworkPerformanceOptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyInstanceNetworkPerformanceOptionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyInstanceNetworkPerformanceOptionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyInstanceNetworkPerformanceOptionsCommandOutput/)

</details>
<details>
<summary>
ModifyInstancePlacement
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyInstancePlacementCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyInstancePlacementCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyInstancePlacementCommandOutput/)

</details>
<details>
<summary>
ModifyIpam
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyIpamCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyIpamCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyIpamCommandOutput/)

</details>
<details>
<summary>
ModifyIpamPool
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyIpamPoolCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyIpamPoolCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyIpamPoolCommandOutput/)

</details>
<details>
<summary>
ModifyIpamPrefixListResolver
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyIpamPrefixListResolverCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyIpamPrefixListResolverCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyIpamPrefixListResolverCommandOutput/)

</details>
<details>
<summary>
ModifyIpamPrefixListResolverTarget
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyIpamPrefixListResolverTargetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyIpamPrefixListResolverTargetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyIpamPrefixListResolverTargetCommandOutput/)

</details>
<details>
<summary>
ModifyIpamResourceCidr
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyIpamResourceCidrCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyIpamResourceCidrCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyIpamResourceCidrCommandOutput/)

</details>
<details>
<summary>
ModifyIpamResourceDiscovery
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyIpamResourceDiscoveryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyIpamResourceDiscoveryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyIpamResourceDiscoveryCommandOutput/)

</details>
<details>
<summary>
ModifyIpamScope
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyIpamScopeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyIpamScopeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyIpamScopeCommandOutput/)

</details>
<details>
<summary>
ModifyLaunchTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyLaunchTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyLaunchTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyLaunchTemplateCommandOutput/)

</details>
<details>
<summary>
ModifyLocalGatewayRoute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyLocalGatewayRouteCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyLocalGatewayRouteCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyLocalGatewayRouteCommandOutput/)

</details>
<details>
<summary>
ModifyManagedPrefixList
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyManagedPrefixListCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyManagedPrefixListCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyManagedPrefixListCommandOutput/)

</details>
<details>
<summary>
ModifyNetworkInterfaceAttribute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyNetworkInterfaceAttributeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyNetworkInterfaceAttributeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyNetworkInterfaceAttributeCommandOutput/)

</details>
<details>
<summary>
ModifyPrivateDnsNameOptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyPrivateDnsNameOptionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyPrivateDnsNameOptionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyPrivateDnsNameOptionsCommandOutput/)

</details>
<details>
<summary>
ModifyPublicIpDnsNameOptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyPublicIpDnsNameOptionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyPublicIpDnsNameOptionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyPublicIpDnsNameOptionsCommandOutput/)

</details>
<details>
<summary>
ModifyReservedInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyReservedInstancesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyReservedInstancesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyReservedInstancesCommandOutput/)

</details>
<details>
<summary>
ModifyRouteServer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyRouteServerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyRouteServerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyRouteServerCommandOutput/)

</details>
<details>
<summary>
ModifySecurityGroupRules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifySecurityGroupRulesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifySecurityGroupRulesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifySecurityGroupRulesCommandOutput/)

</details>
<details>
<summary>
ModifySnapshotAttribute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifySnapshotAttributeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifySnapshotAttributeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifySnapshotAttributeCommandOutput/)

</details>
<details>
<summary>
ModifySnapshotTier
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifySnapshotTierCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifySnapshotTierCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifySnapshotTierCommandOutput/)

</details>
<details>
<summary>
ModifySpotFleetRequest
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifySpotFleetRequestCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifySpotFleetRequestCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifySpotFleetRequestCommandOutput/)

</details>
<details>
<summary>
ModifySubnetAttribute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifySubnetAttributeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifySubnetAttributeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifySubnetAttributeCommandOutput/)

</details>
<details>
<summary>
ModifyTrafficMirrorFilterNetworkServices
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyTrafficMirrorFilterNetworkServicesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyTrafficMirrorFilterNetworkServicesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyTrafficMirrorFilterNetworkServicesCommandOutput/)

</details>
<details>
<summary>
ModifyTrafficMirrorFilterRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyTrafficMirrorFilterRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyTrafficMirrorFilterRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyTrafficMirrorFilterRuleCommandOutput/)

</details>
<details>
<summary>
ModifyTrafficMirrorSession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyTrafficMirrorSessionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyTrafficMirrorSessionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyTrafficMirrorSessionCommandOutput/)

</details>
<details>
<summary>
ModifyTransitGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyTransitGatewayCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyTransitGatewayCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyTransitGatewayCommandOutput/)

</details>
<details>
<summary>
ModifyTransitGatewayPrefixListReference
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyTransitGatewayPrefixListReferenceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyTransitGatewayPrefixListReferenceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyTransitGatewayPrefixListReferenceCommandOutput/)

</details>
<details>
<summary>
ModifyTransitGatewayVpcAttachment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyTransitGatewayVpcAttachmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyTransitGatewayVpcAttachmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyTransitGatewayVpcAttachmentCommandOutput/)

</details>
<details>
<summary>
ModifyVerifiedAccessEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyVerifiedAccessEndpointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyVerifiedAccessEndpointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyVerifiedAccessEndpointCommandOutput/)

</details>
<details>
<summary>
ModifyVerifiedAccessEndpointPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyVerifiedAccessEndpointPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyVerifiedAccessEndpointPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyVerifiedAccessEndpointPolicyCommandOutput/)

</details>
<details>
<summary>
ModifyVerifiedAccessGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyVerifiedAccessGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyVerifiedAccessGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyVerifiedAccessGroupCommandOutput/)

</details>
<details>
<summary>
ModifyVerifiedAccessGroupPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyVerifiedAccessGroupPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyVerifiedAccessGroupPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyVerifiedAccessGroupPolicyCommandOutput/)

</details>
<details>
<summary>
ModifyVerifiedAccessInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyVerifiedAccessInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyVerifiedAccessInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyVerifiedAccessInstanceCommandOutput/)

</details>
<details>
<summary>
ModifyVerifiedAccessInstanceLoggingConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyVerifiedAccessInstanceLoggingConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyVerifiedAccessInstanceLoggingConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyVerifiedAccessInstanceLoggingConfigurationCommandOutput/)

</details>
<details>
<summary>
ModifyVerifiedAccessTrustProvider
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyVerifiedAccessTrustProviderCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyVerifiedAccessTrustProviderCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyVerifiedAccessTrustProviderCommandOutput/)

</details>
<details>
<summary>
ModifyVolume
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyVolumeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyVolumeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyVolumeCommandOutput/)

</details>
<details>
<summary>
ModifyVolumeAttribute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyVolumeAttributeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyVolumeAttributeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyVolumeAttributeCommandOutput/)

</details>
<details>
<summary>
ModifyVpcAttribute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyVpcAttributeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyVpcAttributeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyVpcAttributeCommandOutput/)

</details>
<details>
<summary>
ModifyVpcBlockPublicAccessExclusion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyVpcBlockPublicAccessExclusionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyVpcBlockPublicAccessExclusionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyVpcBlockPublicAccessExclusionCommandOutput/)

</details>
<details>
<summary>
ModifyVpcBlockPublicAccessOptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyVpcBlockPublicAccessOptionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyVpcBlockPublicAccessOptionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyVpcBlockPublicAccessOptionsCommandOutput/)

</details>
<details>
<summary>
ModifyVpcEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyVpcEndpointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyVpcEndpointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyVpcEndpointCommandOutput/)

</details>
<details>
<summary>
ModifyVpcEndpointConnectionNotification
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyVpcEndpointConnectionNotificationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyVpcEndpointConnectionNotificationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyVpcEndpointConnectionNotificationCommandOutput/)

</details>
<details>
<summary>
ModifyVpcEndpointServiceConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyVpcEndpointServiceConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyVpcEndpointServiceConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyVpcEndpointServiceConfigurationCommandOutput/)

</details>
<details>
<summary>
ModifyVpcEndpointServicePayerResponsibility
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyVpcEndpointServicePayerResponsibilityCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyVpcEndpointServicePayerResponsibilityCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyVpcEndpointServicePayerResponsibilityCommandOutput/)

</details>
<details>
<summary>
ModifyVpcEndpointServicePermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyVpcEndpointServicePermissionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyVpcEndpointServicePermissionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyVpcEndpointServicePermissionsCommandOutput/)

</details>
<details>
<summary>
ModifyVpcPeeringConnectionOptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyVpcPeeringConnectionOptionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyVpcPeeringConnectionOptionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyVpcPeeringConnectionOptionsCommandOutput/)

</details>
<details>
<summary>
ModifyVpcTenancy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyVpcTenancyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyVpcTenancyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyVpcTenancyCommandOutput/)

</details>
<details>
<summary>
ModifyVpnConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyVpnConnectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyVpnConnectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyVpnConnectionCommandOutput/)

</details>
<details>
<summary>
ModifyVpnConnectionOptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyVpnConnectionOptionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyVpnConnectionOptionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyVpnConnectionOptionsCommandOutput/)

</details>
<details>
<summary>
ModifyVpnTunnelCertificate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyVpnTunnelCertificateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyVpnTunnelCertificateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyVpnTunnelCertificateCommandOutput/)

</details>
<details>
<summary>
ModifyVpnTunnelOptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ModifyVpnTunnelOptionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyVpnTunnelOptionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ModifyVpnTunnelOptionsCommandOutput/)

</details>
<details>
<summary>
MonitorInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/MonitorInstancesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/MonitorInstancesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/MonitorInstancesCommandOutput/)

</details>
<details>
<summary>
MoveAddressToVpc
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/MoveAddressToVpcCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/MoveAddressToVpcCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/MoveAddressToVpcCommandOutput/)

</details>
<details>
<summary>
MoveByoipCidrToIpam
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/MoveByoipCidrToIpamCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/MoveByoipCidrToIpamCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/MoveByoipCidrToIpamCommandOutput/)

</details>
<details>
<summary>
MoveCapacityReservationInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/MoveCapacityReservationInstancesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/MoveCapacityReservationInstancesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/MoveCapacityReservationInstancesCommandOutput/)

</details>
<details>
<summary>
ProvisionByoipCidr
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ProvisionByoipCidrCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ProvisionByoipCidrCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ProvisionByoipCidrCommandOutput/)

</details>
<details>
<summary>
ProvisionIpamByoasn
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ProvisionIpamByoasnCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ProvisionIpamByoasnCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ProvisionIpamByoasnCommandOutput/)

</details>
<details>
<summary>
ProvisionIpamPoolCidr
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ProvisionIpamPoolCidrCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ProvisionIpamPoolCidrCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ProvisionIpamPoolCidrCommandOutput/)

</details>
<details>
<summary>
ProvisionPublicIpv4PoolCidr
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ProvisionPublicIpv4PoolCidrCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ProvisionPublicIpv4PoolCidrCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ProvisionPublicIpv4PoolCidrCommandOutput/)

</details>
<details>
<summary>
PurchaseCapacityBlock
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/PurchaseCapacityBlockCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/PurchaseCapacityBlockCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/PurchaseCapacityBlockCommandOutput/)

</details>
<details>
<summary>
PurchaseCapacityBlockExtension
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/PurchaseCapacityBlockExtensionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/PurchaseCapacityBlockExtensionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/PurchaseCapacityBlockExtensionCommandOutput/)

</details>
<details>
<summary>
PurchaseHostReservation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/PurchaseHostReservationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/PurchaseHostReservationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/PurchaseHostReservationCommandOutput/)

</details>
<details>
<summary>
PurchaseReservedInstancesOffering
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/PurchaseReservedInstancesOfferingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/PurchaseReservedInstancesOfferingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/PurchaseReservedInstancesOfferingCommandOutput/)

</details>
<details>
<summary>
PurchaseScheduledInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/PurchaseScheduledInstancesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/PurchaseScheduledInstancesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/PurchaseScheduledInstancesCommandOutput/)

</details>
<details>
<summary>
RebootInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/RebootInstancesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/RebootInstancesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/RebootInstancesCommandOutput/)

</details>
<details>
<summary>
RegisterImage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/RegisterImageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/RegisterImageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/RegisterImageCommandOutput/)

</details>
<details>
<summary>
RegisterInstanceEventNotificationAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/RegisterInstanceEventNotificationAttributesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/RegisterInstanceEventNotificationAttributesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/RegisterInstanceEventNotificationAttributesCommandOutput/)

</details>
<details>
<summary>
RegisterTransitGatewayMulticastGroupMembers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/RegisterTransitGatewayMulticastGroupMembersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/RegisterTransitGatewayMulticastGroupMembersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/RegisterTransitGatewayMulticastGroupMembersCommandOutput/)

</details>
<details>
<summary>
RegisterTransitGatewayMulticastGroupSources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/RegisterTransitGatewayMulticastGroupSourcesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/RegisterTransitGatewayMulticastGroupSourcesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/RegisterTransitGatewayMulticastGroupSourcesCommandOutput/)

</details>
<details>
<summary>
RejectCapacityReservationBillingOwnership
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/RejectCapacityReservationBillingOwnershipCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/RejectCapacityReservationBillingOwnershipCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/RejectCapacityReservationBillingOwnershipCommandOutput/)

</details>
<details>
<summary>
RejectTransitGatewayMulticastDomainAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/RejectTransitGatewayMulticastDomainAssociationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/RejectTransitGatewayMulticastDomainAssociationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/RejectTransitGatewayMulticastDomainAssociationsCommandOutput/)

</details>
<details>
<summary>
RejectTransitGatewayPeeringAttachment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/RejectTransitGatewayPeeringAttachmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/RejectTransitGatewayPeeringAttachmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/RejectTransitGatewayPeeringAttachmentCommandOutput/)

</details>
<details>
<summary>
RejectTransitGatewayVpcAttachment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/RejectTransitGatewayVpcAttachmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/RejectTransitGatewayVpcAttachmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/RejectTransitGatewayVpcAttachmentCommandOutput/)

</details>
<details>
<summary>
RejectVpcEndpointConnections
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/RejectVpcEndpointConnectionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/RejectVpcEndpointConnectionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/RejectVpcEndpointConnectionsCommandOutput/)

</details>
<details>
<summary>
RejectVpcPeeringConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/RejectVpcPeeringConnectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/RejectVpcPeeringConnectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/RejectVpcPeeringConnectionCommandOutput/)

</details>
<details>
<summary>
ReleaseAddress
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ReleaseAddressCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ReleaseAddressCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ReleaseAddressCommandOutput/)

</details>
<details>
<summary>
ReleaseHosts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ReleaseHostsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ReleaseHostsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ReleaseHostsCommandOutput/)

</details>
<details>
<summary>
ReleaseIpamPoolAllocation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ReleaseIpamPoolAllocationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ReleaseIpamPoolAllocationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ReleaseIpamPoolAllocationCommandOutput/)

</details>
<details>
<summary>
ReplaceIamInstanceProfileAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ReplaceIamInstanceProfileAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ReplaceIamInstanceProfileAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ReplaceIamInstanceProfileAssociationCommandOutput/)

</details>
<details>
<summary>
ReplaceImageCriteriaInAllowedImagesSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ReplaceImageCriteriaInAllowedImagesSettingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ReplaceImageCriteriaInAllowedImagesSettingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ReplaceImageCriteriaInAllowedImagesSettingsCommandOutput/)

</details>
<details>
<summary>
ReplaceNetworkAclAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ReplaceNetworkAclAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ReplaceNetworkAclAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ReplaceNetworkAclAssociationCommandOutput/)

</details>
<details>
<summary>
ReplaceNetworkAclEntry
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ReplaceNetworkAclEntryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ReplaceNetworkAclEntryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ReplaceNetworkAclEntryCommandOutput/)

</details>
<details>
<summary>
ReplaceRoute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ReplaceRouteCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ReplaceRouteCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ReplaceRouteCommandOutput/)

</details>
<details>
<summary>
ReplaceRouteTableAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ReplaceRouteTableAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ReplaceRouteTableAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ReplaceRouteTableAssociationCommandOutput/)

</details>
<details>
<summary>
ReplaceTransitGatewayRoute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ReplaceTransitGatewayRouteCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ReplaceTransitGatewayRouteCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ReplaceTransitGatewayRouteCommandOutput/)

</details>
<details>
<summary>
ReplaceVpnTunnel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ReplaceVpnTunnelCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ReplaceVpnTunnelCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ReplaceVpnTunnelCommandOutput/)

</details>
<details>
<summary>
ReportInstanceStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ReportInstanceStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ReportInstanceStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ReportInstanceStatusCommandOutput/)

</details>
<details>
<summary>
RequestSpotFleet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/RequestSpotFleetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/RequestSpotFleetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/RequestSpotFleetCommandOutput/)

</details>
<details>
<summary>
RequestSpotInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/RequestSpotInstancesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/RequestSpotInstancesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/RequestSpotInstancesCommandOutput/)

</details>
<details>
<summary>
ResetAddressAttribute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ResetAddressAttributeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ResetAddressAttributeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ResetAddressAttributeCommandOutput/)

</details>
<details>
<summary>
ResetEbsDefaultKmsKeyId
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ResetEbsDefaultKmsKeyIdCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ResetEbsDefaultKmsKeyIdCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ResetEbsDefaultKmsKeyIdCommandOutput/)

</details>
<details>
<summary>
ResetFpgaImageAttribute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ResetFpgaImageAttributeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ResetFpgaImageAttributeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ResetFpgaImageAttributeCommandOutput/)

</details>
<details>
<summary>
ResetImageAttribute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ResetImageAttributeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ResetImageAttributeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ResetImageAttributeCommandOutput/)

</details>
<details>
<summary>
ResetInstanceAttribute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ResetInstanceAttributeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ResetInstanceAttributeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ResetInstanceAttributeCommandOutput/)

</details>
<details>
<summary>
ResetNetworkInterfaceAttribute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ResetNetworkInterfaceAttributeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ResetNetworkInterfaceAttributeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ResetNetworkInterfaceAttributeCommandOutput/)

</details>
<details>
<summary>
ResetSnapshotAttribute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/ResetSnapshotAttributeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ResetSnapshotAttributeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/ResetSnapshotAttributeCommandOutput/)

</details>
<details>
<summary>
RestoreAddressToClassic
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/RestoreAddressToClassicCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/RestoreAddressToClassicCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/RestoreAddressToClassicCommandOutput/)

</details>
<details>
<summary>
RestoreImageFromRecycleBin
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/RestoreImageFromRecycleBinCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/RestoreImageFromRecycleBinCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/RestoreImageFromRecycleBinCommandOutput/)

</details>
<details>
<summary>
RestoreManagedPrefixListVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/RestoreManagedPrefixListVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/RestoreManagedPrefixListVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/RestoreManagedPrefixListVersionCommandOutput/)

</details>
<details>
<summary>
RestoreSnapshotFromRecycleBin
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/RestoreSnapshotFromRecycleBinCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/RestoreSnapshotFromRecycleBinCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/RestoreSnapshotFromRecycleBinCommandOutput/)

</details>
<details>
<summary>
RestoreSnapshotTier
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/RestoreSnapshotTierCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/RestoreSnapshotTierCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/RestoreSnapshotTierCommandOutput/)

</details>
<details>
<summary>
RevokeClientVpnIngress
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/RevokeClientVpnIngressCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/RevokeClientVpnIngressCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/RevokeClientVpnIngressCommandOutput/)

</details>
<details>
<summary>
RevokeSecurityGroupEgress
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/RevokeSecurityGroupEgressCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/RevokeSecurityGroupEgressCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/RevokeSecurityGroupEgressCommandOutput/)

</details>
<details>
<summary>
RevokeSecurityGroupIngress
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/RevokeSecurityGroupIngressCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/RevokeSecurityGroupIngressCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/RevokeSecurityGroupIngressCommandOutput/)

</details>
<details>
<summary>
RunInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/RunInstancesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/RunInstancesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/RunInstancesCommandOutput/)

</details>
<details>
<summary>
RunScheduledInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/RunScheduledInstancesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/RunScheduledInstancesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/RunScheduledInstancesCommandOutput/)

</details>
<details>
<summary>
SearchLocalGatewayRoutes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/SearchLocalGatewayRoutesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/SearchLocalGatewayRoutesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/SearchLocalGatewayRoutesCommandOutput/)

</details>
<details>
<summary>
SearchTransitGatewayMulticastGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/SearchTransitGatewayMulticastGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/SearchTransitGatewayMulticastGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/SearchTransitGatewayMulticastGroupsCommandOutput/)

</details>
<details>
<summary>
SearchTransitGatewayRoutes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/SearchTransitGatewayRoutesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/SearchTransitGatewayRoutesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/SearchTransitGatewayRoutesCommandOutput/)

</details>
<details>
<summary>
SendDiagnosticInterrupt
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/SendDiagnosticInterruptCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/SendDiagnosticInterruptCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/SendDiagnosticInterruptCommandOutput/)

</details>
<details>
<summary>
StartDeclarativePoliciesReport
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/StartDeclarativePoliciesReportCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/StartDeclarativePoliciesReportCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/StartDeclarativePoliciesReportCommandOutput/)

</details>
<details>
<summary>
StartInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/StartInstancesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/StartInstancesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/StartInstancesCommandOutput/)

</details>
<details>
<summary>
StartNetworkInsightsAccessScopeAnalysis
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/StartNetworkInsightsAccessScopeAnalysisCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/StartNetworkInsightsAccessScopeAnalysisCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/StartNetworkInsightsAccessScopeAnalysisCommandOutput/)

</details>
<details>
<summary>
StartNetworkInsightsAnalysis
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/StartNetworkInsightsAnalysisCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/StartNetworkInsightsAnalysisCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/StartNetworkInsightsAnalysisCommandOutput/)

</details>
<details>
<summary>
StartVpcEndpointServicePrivateDnsVerification
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/StartVpcEndpointServicePrivateDnsVerificationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/StartVpcEndpointServicePrivateDnsVerificationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/StartVpcEndpointServicePrivateDnsVerificationCommandOutput/)

</details>
<details>
<summary>
StopInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/StopInstancesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/StopInstancesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/StopInstancesCommandOutput/)

</details>
<details>
<summary>
TerminateClientVpnConnections
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/TerminateClientVpnConnectionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/TerminateClientVpnConnectionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/TerminateClientVpnConnectionsCommandOutput/)

</details>
<details>
<summary>
TerminateInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/TerminateInstancesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/TerminateInstancesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/TerminateInstancesCommandOutput/)

</details>
<details>
<summary>
UnassignIpv6Addresses
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/UnassignIpv6AddressesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/UnassignIpv6AddressesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/UnassignIpv6AddressesCommandOutput/)

</details>
<details>
<summary>
UnassignPrivateIpAddresses
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/UnassignPrivateIpAddressesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/UnassignPrivateIpAddressesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/UnassignPrivateIpAddressesCommandOutput/)

</details>
<details>
<summary>
UnassignPrivateNatGatewayAddress
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/UnassignPrivateNatGatewayAddressCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/UnassignPrivateNatGatewayAddressCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/UnassignPrivateNatGatewayAddressCommandOutput/)

</details>
<details>
<summary>
UnlockSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/UnlockSnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/UnlockSnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/UnlockSnapshotCommandOutput/)

</details>
<details>
<summary>
UnmonitorInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/UnmonitorInstancesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/UnmonitorInstancesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/UnmonitorInstancesCommandOutput/)

</details>
<details>
<summary>
UpdateCapacityManagerOrganizationsAccess
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/UpdateCapacityManagerOrganizationsAccessCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/UpdateCapacityManagerOrganizationsAccessCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/UpdateCapacityManagerOrganizationsAccessCommandOutput/)

</details>
<details>
<summary>
UpdateSecurityGroupRuleDescriptionsEgress
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/UpdateSecurityGroupRuleDescriptionsEgressCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/UpdateSecurityGroupRuleDescriptionsEgressCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/UpdateSecurityGroupRuleDescriptionsEgressCommandOutput/)

</details>
<details>
<summary>
UpdateSecurityGroupRuleDescriptionsIngress
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/UpdateSecurityGroupRuleDescriptionsIngressCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/UpdateSecurityGroupRuleDescriptionsIngressCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/UpdateSecurityGroupRuleDescriptionsIngressCommandOutput/)

</details>
<details>
<summary>
WithdrawByoipCidr
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ec2/command/WithdrawByoipCidrCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/WithdrawByoipCidrCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ec2/Interface/WithdrawByoipCidrCommandOutput/)

</details>
