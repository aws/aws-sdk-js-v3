<!-- generated file, do not edit directly -->

# @aws-sdk/client-mediaconnect

## Description

AWS SDK for JavaScript MediaConnect Client for Node.js, Browser and React Native.

<p>Welcome to the Elemental MediaConnect API reference. </p>
<p>MediaConnect is a service that lets you ingest live video content into the cloud
and distribute it to destinations all over the world, both inside and outside the Amazon Web Services cloud. This API reference provides descriptions, syntax, and usage examples
for each of the actions and data types that are supported by MediaConnect. </p>
<p>Use the following links to get started with the MediaConnect API:</p>
<ul>
<li>
<p>
<a href="https://docs.aws.amazon.com/mediaconnect/latest/api/API_Operations.html">Actions</a>: An
alphabetical list of all MediaConnect API operations.</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/mediaconnect/latest/api/API_Types.html">Data types</a>: An
alphabetical list of all MediaConnect data types.</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/mediaconnect/latest/api/CommonParameters.html">Common
parameters</a>: Parameters that all operations can use.</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/mediaconnect/latest/api/CommonErrors.html">Common errors</a>: Client and server errors that all operations can return.</p>
</li>
</ul>

## Installing

To install this package, simply type add or install @aws-sdk/client-mediaconnect
using your favorite package manager:

- `npm install @aws-sdk/client-mediaconnect`
- `yarn add @aws-sdk/client-mediaconnect`
- `pnpm add @aws-sdk/client-mediaconnect`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `MediaConnectClient` and
the commands you need, for example `ListBridgesCommand`:

```js
// ES5 example
const { MediaConnectClient, ListBridgesCommand } = require("@aws-sdk/client-mediaconnect");
```

```ts
// ES6+ example
import { MediaConnectClient, ListBridgesCommand } from "@aws-sdk/client-mediaconnect";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new MediaConnectClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListBridgesCommand(params);
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
import * as AWS from "@aws-sdk/client-mediaconnect";
const client = new AWS.MediaConnect({ region: "REGION" });

// async/await.
try {
  const data = await client.listBridges(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listBridges(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listBridges(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-mediaconnect` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AddBridgeOutputs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mediaconnect/command/AddBridgeOutputsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/AddBridgeOutputsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/AddBridgeOutputsCommandOutput/)

</details>
<details>
<summary>
AddBridgeSources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mediaconnect/command/AddBridgeSourcesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/AddBridgeSourcesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/AddBridgeSourcesCommandOutput/)

</details>
<details>
<summary>
AddFlowMediaStreams
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mediaconnect/command/AddFlowMediaStreamsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/AddFlowMediaStreamsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/AddFlowMediaStreamsCommandOutput/)

</details>
<details>
<summary>
AddFlowOutputs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mediaconnect/command/AddFlowOutputsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/AddFlowOutputsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/AddFlowOutputsCommandOutput/)

</details>
<details>
<summary>
AddFlowSources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mediaconnect/command/AddFlowSourcesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/AddFlowSourcesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/AddFlowSourcesCommandOutput/)

</details>
<details>
<summary>
AddFlowVpcInterfaces
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mediaconnect/command/AddFlowVpcInterfacesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/AddFlowVpcInterfacesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/AddFlowVpcInterfacesCommandOutput/)

</details>
<details>
<summary>
CreateBridge
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mediaconnect/command/CreateBridgeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/CreateBridgeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/CreateBridgeCommandOutput/)

</details>
<details>
<summary>
CreateFlow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mediaconnect/command/CreateFlowCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/CreateFlowCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/CreateFlowCommandOutput/)

</details>
<details>
<summary>
CreateGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mediaconnect/command/CreateGatewayCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/CreateGatewayCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/CreateGatewayCommandOutput/)

</details>
<details>
<summary>
DeleteBridge
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mediaconnect/command/DeleteBridgeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/DeleteBridgeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/DeleteBridgeCommandOutput/)

</details>
<details>
<summary>
DeleteFlow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mediaconnect/command/DeleteFlowCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/DeleteFlowCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/DeleteFlowCommandOutput/)

</details>
<details>
<summary>
DeleteGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mediaconnect/command/DeleteGatewayCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/DeleteGatewayCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/DeleteGatewayCommandOutput/)

</details>
<details>
<summary>
DeregisterGatewayInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mediaconnect/command/DeregisterGatewayInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/DeregisterGatewayInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/DeregisterGatewayInstanceCommandOutput/)

</details>
<details>
<summary>
DescribeBridge
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mediaconnect/command/DescribeBridgeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/DescribeBridgeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/DescribeBridgeCommandOutput/)

</details>
<details>
<summary>
DescribeFlow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mediaconnect/command/DescribeFlowCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/DescribeFlowCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/DescribeFlowCommandOutput/)

</details>
<details>
<summary>
DescribeFlowSourceMetadata
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mediaconnect/command/DescribeFlowSourceMetadataCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/DescribeFlowSourceMetadataCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/DescribeFlowSourceMetadataCommandOutput/)

</details>
<details>
<summary>
DescribeFlowSourceThumbnail
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mediaconnect/command/DescribeFlowSourceThumbnailCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/DescribeFlowSourceThumbnailCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/DescribeFlowSourceThumbnailCommandOutput/)

</details>
<details>
<summary>
DescribeGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mediaconnect/command/DescribeGatewayCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/DescribeGatewayCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/DescribeGatewayCommandOutput/)

</details>
<details>
<summary>
DescribeGatewayInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mediaconnect/command/DescribeGatewayInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/DescribeGatewayInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/DescribeGatewayInstanceCommandOutput/)

</details>
<details>
<summary>
DescribeOffering
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mediaconnect/command/DescribeOfferingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/DescribeOfferingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/DescribeOfferingCommandOutput/)

</details>
<details>
<summary>
DescribeReservation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mediaconnect/command/DescribeReservationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/DescribeReservationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/DescribeReservationCommandOutput/)

</details>
<details>
<summary>
GrantFlowEntitlements
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mediaconnect/command/GrantFlowEntitlementsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/GrantFlowEntitlementsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/GrantFlowEntitlementsCommandOutput/)

</details>
<details>
<summary>
ListBridges
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mediaconnect/command/ListBridgesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/ListBridgesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/ListBridgesCommandOutput/)

</details>
<details>
<summary>
ListEntitlements
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mediaconnect/command/ListEntitlementsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/ListEntitlementsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/ListEntitlementsCommandOutput/)

</details>
<details>
<summary>
ListFlows
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mediaconnect/command/ListFlowsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/ListFlowsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/ListFlowsCommandOutput/)

</details>
<details>
<summary>
ListGatewayInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mediaconnect/command/ListGatewayInstancesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/ListGatewayInstancesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/ListGatewayInstancesCommandOutput/)

</details>
<details>
<summary>
ListGateways
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mediaconnect/command/ListGatewaysCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/ListGatewaysCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/ListGatewaysCommandOutput/)

</details>
<details>
<summary>
ListOfferings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mediaconnect/command/ListOfferingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/ListOfferingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/ListOfferingsCommandOutput/)

</details>
<details>
<summary>
ListReservations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mediaconnect/command/ListReservationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/ListReservationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/ListReservationsCommandOutput/)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mediaconnect/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/ListTagsForResourceCommandOutput/)

</details>
<details>
<summary>
PurchaseOffering
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mediaconnect/command/PurchaseOfferingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/PurchaseOfferingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/PurchaseOfferingCommandOutput/)

</details>
<details>
<summary>
RemoveBridgeOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mediaconnect/command/RemoveBridgeOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/RemoveBridgeOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/RemoveBridgeOutputCommandOutput/)

</details>
<details>
<summary>
RemoveBridgeSource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mediaconnect/command/RemoveBridgeSourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/RemoveBridgeSourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/RemoveBridgeSourceCommandOutput/)

</details>
<details>
<summary>
RemoveFlowMediaStream
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mediaconnect/command/RemoveFlowMediaStreamCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/RemoveFlowMediaStreamCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/RemoveFlowMediaStreamCommandOutput/)

</details>
<details>
<summary>
RemoveFlowOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mediaconnect/command/RemoveFlowOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/RemoveFlowOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/RemoveFlowOutputCommandOutput/)

</details>
<details>
<summary>
RemoveFlowSource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mediaconnect/command/RemoveFlowSourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/RemoveFlowSourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/RemoveFlowSourceCommandOutput/)

</details>
<details>
<summary>
RemoveFlowVpcInterface
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mediaconnect/command/RemoveFlowVpcInterfaceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/RemoveFlowVpcInterfaceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/RemoveFlowVpcInterfaceCommandOutput/)

</details>
<details>
<summary>
RevokeFlowEntitlement
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mediaconnect/command/RevokeFlowEntitlementCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/RevokeFlowEntitlementCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/RevokeFlowEntitlementCommandOutput/)

</details>
<details>
<summary>
StartFlow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mediaconnect/command/StartFlowCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/StartFlowCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/StartFlowCommandOutput/)

</details>
<details>
<summary>
StopFlow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mediaconnect/command/StopFlowCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/StopFlowCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/StopFlowCommandOutput/)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mediaconnect/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/TagResourceCommandOutput/)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mediaconnect/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/UntagResourceCommandOutput/)

</details>
<details>
<summary>
UpdateBridge
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mediaconnect/command/UpdateBridgeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/UpdateBridgeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/UpdateBridgeCommandOutput/)

</details>
<details>
<summary>
UpdateBridgeOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mediaconnect/command/UpdateBridgeOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/UpdateBridgeOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/UpdateBridgeOutputCommandOutput/)

</details>
<details>
<summary>
UpdateBridgeSource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mediaconnect/command/UpdateBridgeSourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/UpdateBridgeSourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/UpdateBridgeSourceCommandOutput/)

</details>
<details>
<summary>
UpdateBridgeState
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mediaconnect/command/UpdateBridgeStateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/UpdateBridgeStateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/UpdateBridgeStateCommandOutput/)

</details>
<details>
<summary>
UpdateFlow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mediaconnect/command/UpdateFlowCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/UpdateFlowCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/UpdateFlowCommandOutput/)

</details>
<details>
<summary>
UpdateFlowEntitlement
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mediaconnect/command/UpdateFlowEntitlementCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/UpdateFlowEntitlementCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/UpdateFlowEntitlementCommandOutput/)

</details>
<details>
<summary>
UpdateFlowMediaStream
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mediaconnect/command/UpdateFlowMediaStreamCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/UpdateFlowMediaStreamCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/UpdateFlowMediaStreamCommandOutput/)

</details>
<details>
<summary>
UpdateFlowOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mediaconnect/command/UpdateFlowOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/UpdateFlowOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/UpdateFlowOutputCommandOutput/)

</details>
<details>
<summary>
UpdateFlowSource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mediaconnect/command/UpdateFlowSourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/UpdateFlowSourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/UpdateFlowSourceCommandOutput/)

</details>
<details>
<summary>
UpdateGatewayInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/mediaconnect/command/UpdateGatewayInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/UpdateGatewayInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-mediaconnect/Interface/UpdateGatewayInstanceCommandOutput/)

</details>
