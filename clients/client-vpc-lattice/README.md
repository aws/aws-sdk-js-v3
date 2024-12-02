<!-- generated file, do not edit directly -->

# @aws-sdk/client-vpc-lattice

## Description

AWS SDK for JavaScript VPCLattice Client for Node.js, Browser and React Native.

<p>Amazon VPC Lattice is a fully managed application networking service that you use to connect, secure,
and monitor all of your services across multiple accounts and virtual private clouds (VPCs).
Amazon VPC Lattice interconnects your microservices and legacy services within a logical boundary, so that
you can discover and manage them more efficiently. For more information, see the <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/">Amazon VPC Lattice User Guide</a>
</p>

## Installing

To install this package, simply type add or install @aws-sdk/client-vpc-lattice
using your favorite package manager:

- `npm install @aws-sdk/client-vpc-lattice`
- `yarn add @aws-sdk/client-vpc-lattice`
- `pnpm add @aws-sdk/client-vpc-lattice`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `VPCLatticeClient` and
the commands you need, for example `ListServicesCommand`:

```js
// ES5 example
const { VPCLatticeClient, ListServicesCommand } = require("@aws-sdk/client-vpc-lattice");
```

```ts
// ES6+ example
import { VPCLatticeClient, ListServicesCommand } from "@aws-sdk/client-vpc-lattice";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new VPCLatticeClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListServicesCommand(params);
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
import * as AWS from "@aws-sdk/client-vpc-lattice";
const client = new AWS.VPCLattice({ region: "REGION" });

// async/await.
try {
  const data = await client.listServices(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listServices(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listServices(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-vpc-lattice` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
BatchUpdateRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/BatchUpdateRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/BatchUpdateRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/BatchUpdateRuleCommandOutput/)

</details>
<details>
<summary>
CreateAccessLogSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/CreateAccessLogSubscriptionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/CreateAccessLogSubscriptionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/CreateAccessLogSubscriptionCommandOutput/)

</details>
<details>
<summary>
CreateListener
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/CreateListenerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/CreateListenerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/CreateListenerCommandOutput/)

</details>
<details>
<summary>
CreateResourceConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/CreateResourceConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/CreateResourceConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/CreateResourceConfigurationCommandOutput/)

</details>
<details>
<summary>
CreateResourceGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/CreateResourceGatewayCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/CreateResourceGatewayCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/CreateResourceGatewayCommandOutput/)

</details>
<details>
<summary>
CreateRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/CreateRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/CreateRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/CreateRuleCommandOutput/)

</details>
<details>
<summary>
CreateService
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/CreateServiceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/CreateServiceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/CreateServiceCommandOutput/)

</details>
<details>
<summary>
CreateServiceNetwork
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/CreateServiceNetworkCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/CreateServiceNetworkCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/CreateServiceNetworkCommandOutput/)

</details>
<details>
<summary>
CreateServiceNetworkResourceAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/CreateServiceNetworkResourceAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/CreateServiceNetworkResourceAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/CreateServiceNetworkResourceAssociationCommandOutput/)

</details>
<details>
<summary>
CreateServiceNetworkServiceAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/CreateServiceNetworkServiceAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/CreateServiceNetworkServiceAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/CreateServiceNetworkServiceAssociationCommandOutput/)

</details>
<details>
<summary>
CreateServiceNetworkVpcAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/CreateServiceNetworkVpcAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/CreateServiceNetworkVpcAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/CreateServiceNetworkVpcAssociationCommandOutput/)

</details>
<details>
<summary>
CreateTargetGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/CreateTargetGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/CreateTargetGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/CreateTargetGroupCommandOutput/)

</details>
<details>
<summary>
DeleteAccessLogSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/DeleteAccessLogSubscriptionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/DeleteAccessLogSubscriptionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/DeleteAccessLogSubscriptionCommandOutput/)

</details>
<details>
<summary>
DeleteAuthPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/DeleteAuthPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/DeleteAuthPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/DeleteAuthPolicyCommandOutput/)

</details>
<details>
<summary>
DeleteListener
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/DeleteListenerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/DeleteListenerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/DeleteListenerCommandOutput/)

</details>
<details>
<summary>
DeleteResourceConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/DeleteResourceConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/DeleteResourceConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/DeleteResourceConfigurationCommandOutput/)

</details>
<details>
<summary>
DeleteResourceEndpointAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/DeleteResourceEndpointAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/DeleteResourceEndpointAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/DeleteResourceEndpointAssociationCommandOutput/)

</details>
<details>
<summary>
DeleteResourceGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/DeleteResourceGatewayCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/DeleteResourceGatewayCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/DeleteResourceGatewayCommandOutput/)

</details>
<details>
<summary>
DeleteResourcePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/DeleteResourcePolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/DeleteResourcePolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/DeleteResourcePolicyCommandOutput/)

</details>
<details>
<summary>
DeleteRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/DeleteRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/DeleteRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/DeleteRuleCommandOutput/)

</details>
<details>
<summary>
DeleteService
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/DeleteServiceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/DeleteServiceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/DeleteServiceCommandOutput/)

</details>
<details>
<summary>
DeleteServiceNetwork
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/DeleteServiceNetworkCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/DeleteServiceNetworkCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/DeleteServiceNetworkCommandOutput/)

</details>
<details>
<summary>
DeleteServiceNetworkResourceAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/DeleteServiceNetworkResourceAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/DeleteServiceNetworkResourceAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/DeleteServiceNetworkResourceAssociationCommandOutput/)

</details>
<details>
<summary>
DeleteServiceNetworkServiceAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/DeleteServiceNetworkServiceAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/DeleteServiceNetworkServiceAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/DeleteServiceNetworkServiceAssociationCommandOutput/)

</details>
<details>
<summary>
DeleteServiceNetworkVpcAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/DeleteServiceNetworkVpcAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/DeleteServiceNetworkVpcAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/DeleteServiceNetworkVpcAssociationCommandOutput/)

</details>
<details>
<summary>
DeleteTargetGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/DeleteTargetGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/DeleteTargetGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/DeleteTargetGroupCommandOutput/)

</details>
<details>
<summary>
DeregisterTargets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/DeregisterTargetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/DeregisterTargetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/DeregisterTargetsCommandOutput/)

</details>
<details>
<summary>
GetAccessLogSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/GetAccessLogSubscriptionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/GetAccessLogSubscriptionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/GetAccessLogSubscriptionCommandOutput/)

</details>
<details>
<summary>
GetAuthPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/GetAuthPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/GetAuthPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/GetAuthPolicyCommandOutput/)

</details>
<details>
<summary>
GetListener
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/GetListenerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/GetListenerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/GetListenerCommandOutput/)

</details>
<details>
<summary>
GetResourceConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/GetResourceConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/GetResourceConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/GetResourceConfigurationCommandOutput/)

</details>
<details>
<summary>
GetResourceGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/GetResourceGatewayCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/GetResourceGatewayCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/GetResourceGatewayCommandOutput/)

</details>
<details>
<summary>
GetResourcePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/GetResourcePolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/GetResourcePolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/GetResourcePolicyCommandOutput/)

</details>
<details>
<summary>
GetRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/GetRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/GetRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/GetRuleCommandOutput/)

</details>
<details>
<summary>
GetService
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/GetServiceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/GetServiceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/GetServiceCommandOutput/)

</details>
<details>
<summary>
GetServiceNetwork
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/GetServiceNetworkCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/GetServiceNetworkCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/GetServiceNetworkCommandOutput/)

</details>
<details>
<summary>
GetServiceNetworkResourceAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/GetServiceNetworkResourceAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/GetServiceNetworkResourceAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/GetServiceNetworkResourceAssociationCommandOutput/)

</details>
<details>
<summary>
GetServiceNetworkServiceAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/GetServiceNetworkServiceAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/GetServiceNetworkServiceAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/GetServiceNetworkServiceAssociationCommandOutput/)

</details>
<details>
<summary>
GetServiceNetworkVpcAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/GetServiceNetworkVpcAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/GetServiceNetworkVpcAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/GetServiceNetworkVpcAssociationCommandOutput/)

</details>
<details>
<summary>
GetTargetGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/GetTargetGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/GetTargetGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/GetTargetGroupCommandOutput/)

</details>
<details>
<summary>
ListAccessLogSubscriptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/ListAccessLogSubscriptionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/ListAccessLogSubscriptionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/ListAccessLogSubscriptionsCommandOutput/)

</details>
<details>
<summary>
ListListeners
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/ListListenersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/ListListenersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/ListListenersCommandOutput/)

</details>
<details>
<summary>
ListResourceConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/ListResourceConfigurationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/ListResourceConfigurationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/ListResourceConfigurationsCommandOutput/)

</details>
<details>
<summary>
ListResourceEndpointAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/ListResourceEndpointAssociationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/ListResourceEndpointAssociationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/ListResourceEndpointAssociationsCommandOutput/)

</details>
<details>
<summary>
ListResourceGateways
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/ListResourceGatewaysCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/ListResourceGatewaysCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/ListResourceGatewaysCommandOutput/)

</details>
<details>
<summary>
ListRules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/ListRulesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/ListRulesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/ListRulesCommandOutput/)

</details>
<details>
<summary>
ListServiceNetworkResourceAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/ListServiceNetworkResourceAssociationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/ListServiceNetworkResourceAssociationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/ListServiceNetworkResourceAssociationsCommandOutput/)

</details>
<details>
<summary>
ListServiceNetworks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/ListServiceNetworksCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/ListServiceNetworksCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/ListServiceNetworksCommandOutput/)

</details>
<details>
<summary>
ListServiceNetworkServiceAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/ListServiceNetworkServiceAssociationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/ListServiceNetworkServiceAssociationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/ListServiceNetworkServiceAssociationsCommandOutput/)

</details>
<details>
<summary>
ListServiceNetworkVpcAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/ListServiceNetworkVpcAssociationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/ListServiceNetworkVpcAssociationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/ListServiceNetworkVpcAssociationsCommandOutput/)

</details>
<details>
<summary>
ListServiceNetworkVpcEndpointAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/ListServiceNetworkVpcEndpointAssociationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/ListServiceNetworkVpcEndpointAssociationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/ListServiceNetworkVpcEndpointAssociationsCommandOutput/)

</details>
<details>
<summary>
ListServices
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/ListServicesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/ListServicesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/ListServicesCommandOutput/)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/ListTagsForResourceCommandOutput/)

</details>
<details>
<summary>
ListTargetGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/ListTargetGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/ListTargetGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/ListTargetGroupsCommandOutput/)

</details>
<details>
<summary>
ListTargets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/ListTargetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/ListTargetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/ListTargetsCommandOutput/)

</details>
<details>
<summary>
PutAuthPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/PutAuthPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/PutAuthPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/PutAuthPolicyCommandOutput/)

</details>
<details>
<summary>
PutResourcePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/PutResourcePolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/PutResourcePolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/PutResourcePolicyCommandOutput/)

</details>
<details>
<summary>
RegisterTargets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/RegisterTargetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/RegisterTargetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/RegisterTargetsCommandOutput/)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/TagResourceCommandOutput/)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/UntagResourceCommandOutput/)

</details>
<details>
<summary>
UpdateAccessLogSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/UpdateAccessLogSubscriptionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/UpdateAccessLogSubscriptionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/UpdateAccessLogSubscriptionCommandOutput/)

</details>
<details>
<summary>
UpdateListener
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/UpdateListenerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/UpdateListenerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/UpdateListenerCommandOutput/)

</details>
<details>
<summary>
UpdateResourceConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/UpdateResourceConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/UpdateResourceConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/UpdateResourceConfigurationCommandOutput/)

</details>
<details>
<summary>
UpdateResourceGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/UpdateResourceGatewayCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/UpdateResourceGatewayCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/UpdateResourceGatewayCommandOutput/)

</details>
<details>
<summary>
UpdateRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/UpdateRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/UpdateRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/UpdateRuleCommandOutput/)

</details>
<details>
<summary>
UpdateService
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/UpdateServiceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/UpdateServiceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/UpdateServiceCommandOutput/)

</details>
<details>
<summary>
UpdateServiceNetwork
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/UpdateServiceNetworkCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/UpdateServiceNetworkCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/UpdateServiceNetworkCommandOutput/)

</details>
<details>
<summary>
UpdateServiceNetworkVpcAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/UpdateServiceNetworkVpcAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/UpdateServiceNetworkVpcAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/UpdateServiceNetworkVpcAssociationCommandOutput/)

</details>
<details>
<summary>
UpdateTargetGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/vpc-lattice/command/UpdateTargetGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/UpdateTargetGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-vpc-lattice/Interface/UpdateTargetGroupCommandOutput/)

</details>
