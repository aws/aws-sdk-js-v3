<!-- generated file, do not edit directly -->

# @aws-sdk/client-mediaconnect

## Description

AWS SDK for JavaScript MediaConnect Client for Node.js, Browser and React Native.

API for AWS Elemental MediaConnect

## Installing

To install the this package, simply type add or install @aws-sdk/client-mediaconnect
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/classes/addbridgeoutputscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/addbridgeoutputscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/addbridgeoutputscommandoutput.html)

</details>
<details>
<summary>
AddBridgeSources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/classes/addbridgesourcescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/addbridgesourcescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/addbridgesourcescommandoutput.html)

</details>
<details>
<summary>
AddFlowMediaStreams
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/classes/addflowmediastreamscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/addflowmediastreamscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/addflowmediastreamscommandoutput.html)

</details>
<details>
<summary>
AddFlowOutputs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/classes/addflowoutputscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/addflowoutputscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/addflowoutputscommandoutput.html)

</details>
<details>
<summary>
AddFlowSources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/classes/addflowsourcescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/addflowsourcescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/addflowsourcescommandoutput.html)

</details>
<details>
<summary>
AddFlowVpcInterfaces
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/classes/addflowvpcinterfacescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/addflowvpcinterfacescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/addflowvpcinterfacescommandoutput.html)

</details>
<details>
<summary>
CreateBridge
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/classes/createbridgecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/createbridgecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/createbridgecommandoutput.html)

</details>
<details>
<summary>
CreateFlow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/classes/createflowcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/createflowcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/createflowcommandoutput.html)

</details>
<details>
<summary>
CreateGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/classes/creategatewaycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/creategatewaycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/creategatewaycommandoutput.html)

</details>
<details>
<summary>
DeleteBridge
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/classes/deletebridgecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/deletebridgecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/deletebridgecommandoutput.html)

</details>
<details>
<summary>
DeleteFlow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/classes/deleteflowcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/deleteflowcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/deleteflowcommandoutput.html)

</details>
<details>
<summary>
DeleteGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/classes/deletegatewaycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/deletegatewaycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/deletegatewaycommandoutput.html)

</details>
<details>
<summary>
DeregisterGatewayInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/classes/deregistergatewayinstancecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/deregistergatewayinstancecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/deregistergatewayinstancecommandoutput.html)

</details>
<details>
<summary>
DescribeBridge
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/classes/describebridgecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/describebridgecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/describebridgecommandoutput.html)

</details>
<details>
<summary>
DescribeFlow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/classes/describeflowcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/describeflowcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/describeflowcommandoutput.html)

</details>
<details>
<summary>
DescribeGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/classes/describegatewaycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/describegatewaycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/describegatewaycommandoutput.html)

</details>
<details>
<summary>
DescribeGatewayInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/classes/describegatewayinstancecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/describegatewayinstancecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/describegatewayinstancecommandoutput.html)

</details>
<details>
<summary>
DescribeOffering
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/classes/describeofferingcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/describeofferingcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/describeofferingcommandoutput.html)

</details>
<details>
<summary>
DescribeReservation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/classes/describereservationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/describereservationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/describereservationcommandoutput.html)

</details>
<details>
<summary>
GrantFlowEntitlements
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/classes/grantflowentitlementscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/grantflowentitlementscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/grantflowentitlementscommandoutput.html)

</details>
<details>
<summary>
ListBridges
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/classes/listbridgescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/listbridgescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/listbridgescommandoutput.html)

</details>
<details>
<summary>
ListEntitlements
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/classes/listentitlementscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/listentitlementscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/listentitlementscommandoutput.html)

</details>
<details>
<summary>
ListFlows
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/classes/listflowscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/listflowscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/listflowscommandoutput.html)

</details>
<details>
<summary>
ListGatewayInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/classes/listgatewayinstancescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/listgatewayinstancescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/listgatewayinstancescommandoutput.html)

</details>
<details>
<summary>
ListGateways
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/classes/listgatewayscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/listgatewayscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/listgatewayscommandoutput.html)

</details>
<details>
<summary>
ListOfferings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/classes/listofferingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/listofferingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/listofferingscommandoutput.html)

</details>
<details>
<summary>
ListReservations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/classes/listreservationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/listreservationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/listreservationscommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
PurchaseOffering
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/classes/purchaseofferingcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/purchaseofferingcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/purchaseofferingcommandoutput.html)

</details>
<details>
<summary>
RemoveBridgeOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/classes/removebridgeoutputcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/removebridgeoutputcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/removebridgeoutputcommandoutput.html)

</details>
<details>
<summary>
RemoveBridgeSource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/classes/removebridgesourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/removebridgesourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/removebridgesourcecommandoutput.html)

</details>
<details>
<summary>
RemoveFlowMediaStream
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/classes/removeflowmediastreamcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/removeflowmediastreamcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/removeflowmediastreamcommandoutput.html)

</details>
<details>
<summary>
RemoveFlowOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/classes/removeflowoutputcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/removeflowoutputcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/removeflowoutputcommandoutput.html)

</details>
<details>
<summary>
RemoveFlowSource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/classes/removeflowsourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/removeflowsourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/removeflowsourcecommandoutput.html)

</details>
<details>
<summary>
RemoveFlowVpcInterface
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/classes/removeflowvpcinterfacecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/removeflowvpcinterfacecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/removeflowvpcinterfacecommandoutput.html)

</details>
<details>
<summary>
RevokeFlowEntitlement
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/classes/revokeflowentitlementcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/revokeflowentitlementcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/revokeflowentitlementcommandoutput.html)

</details>
<details>
<summary>
StartFlow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/classes/startflowcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/startflowcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/startflowcommandoutput.html)

</details>
<details>
<summary>
StopFlow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/classes/stopflowcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/stopflowcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/stopflowcommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateBridge
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/classes/updatebridgecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/updatebridgecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/updatebridgecommandoutput.html)

</details>
<details>
<summary>
UpdateBridgeOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/classes/updatebridgeoutputcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/updatebridgeoutputcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/updatebridgeoutputcommandoutput.html)

</details>
<details>
<summary>
UpdateBridgeSource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/classes/updatebridgesourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/updatebridgesourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/updatebridgesourcecommandoutput.html)

</details>
<details>
<summary>
UpdateBridgeState
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/classes/updatebridgestatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/updatebridgestatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/updatebridgestatecommandoutput.html)

</details>
<details>
<summary>
UpdateFlow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/classes/updateflowcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/updateflowcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/updateflowcommandoutput.html)

</details>
<details>
<summary>
UpdateFlowEntitlement
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/classes/updateflowentitlementcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/updateflowentitlementcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/updateflowentitlementcommandoutput.html)

</details>
<details>
<summary>
UpdateFlowMediaStream
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/classes/updateflowmediastreamcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/updateflowmediastreamcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/updateflowmediastreamcommandoutput.html)

</details>
<details>
<summary>
UpdateFlowOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/classes/updateflowoutputcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/updateflowoutputcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/updateflowoutputcommandoutput.html)

</details>
<details>
<summary>
UpdateFlowSource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/classes/updateflowsourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/updateflowsourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/updateflowsourcecommandoutput.html)

</details>
<details>
<summary>
UpdateGatewayInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/classes/updategatewayinstancecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/updategatewayinstancecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mediaconnect/interfaces/updategatewayinstancecommandoutput.html)

</details>
