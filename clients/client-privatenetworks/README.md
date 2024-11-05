<!-- generated file, do not edit directly -->

# @aws-sdk/client-privatenetworks

## Description

AWS SDK for JavaScript PrivateNetworks Client for Node.js, Browser and React Native.

<p>Amazon Web Services Private 5G is a managed service that makes it easy to deploy, operate, and scale
your own private mobile network at your on-premises location. Private 5G provides the
pre-configured hardware and software for mobile networks, helps automate setup, and
scales capacity on demand to support additional devices as needed.</p>

## Installing

To install this package, simply type add or install @aws-sdk/client-privatenetworks
using your favorite package manager:

- `npm install @aws-sdk/client-privatenetworks`
- `yarn add @aws-sdk/client-privatenetworks`
- `pnpm add @aws-sdk/client-privatenetworks`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `PrivateNetworksClient` and
the commands you need, for example `ListNetworksCommand`:

```js
// ES5 example
const { PrivateNetworksClient, ListNetworksCommand } = require("@aws-sdk/client-privatenetworks");
```

```ts
// ES6+ example
import { PrivateNetworksClient, ListNetworksCommand } from "@aws-sdk/client-privatenetworks";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new PrivateNetworksClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListNetworksCommand(params);
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
import * as AWS from "@aws-sdk/client-privatenetworks";
const client = new AWS.PrivateNetworks({ region: "REGION" });

// async/await.
try {
  const data = await client.listNetworks(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listNetworks(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listNetworks(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-privatenetworks` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AcknowledgeOrderReceipt
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/privatenetworks/command/AcknowledgeOrderReceiptCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-privatenetworks/Interface/AcknowledgeOrderReceiptCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-privatenetworks/Interface/AcknowledgeOrderReceiptCommandOutput/)

</details>
<details>
<summary>
ActivateDeviceIdentifier
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/privatenetworks/command/ActivateDeviceIdentifierCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-privatenetworks/Interface/ActivateDeviceIdentifierCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-privatenetworks/Interface/ActivateDeviceIdentifierCommandOutput/)

</details>
<details>
<summary>
ActivateNetworkSite
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/privatenetworks/command/ActivateNetworkSiteCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-privatenetworks/Interface/ActivateNetworkSiteCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-privatenetworks/Interface/ActivateNetworkSiteCommandOutput/)

</details>
<details>
<summary>
ConfigureAccessPoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/privatenetworks/command/ConfigureAccessPointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-privatenetworks/Interface/ConfigureAccessPointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-privatenetworks/Interface/ConfigureAccessPointCommandOutput/)

</details>
<details>
<summary>
CreateNetwork
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/privatenetworks/command/CreateNetworkCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-privatenetworks/Interface/CreateNetworkCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-privatenetworks/Interface/CreateNetworkCommandOutput/)

</details>
<details>
<summary>
CreateNetworkSite
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/privatenetworks/command/CreateNetworkSiteCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-privatenetworks/Interface/CreateNetworkSiteCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-privatenetworks/Interface/CreateNetworkSiteCommandOutput/)

</details>
<details>
<summary>
DeactivateDeviceIdentifier
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/privatenetworks/command/DeactivateDeviceIdentifierCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-privatenetworks/Interface/DeactivateDeviceIdentifierCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-privatenetworks/Interface/DeactivateDeviceIdentifierCommandOutput/)

</details>
<details>
<summary>
DeleteNetwork
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/privatenetworks/command/DeleteNetworkCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-privatenetworks/Interface/DeleteNetworkCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-privatenetworks/Interface/DeleteNetworkCommandOutput/)

</details>
<details>
<summary>
DeleteNetworkSite
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/privatenetworks/command/DeleteNetworkSiteCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-privatenetworks/Interface/DeleteNetworkSiteCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-privatenetworks/Interface/DeleteNetworkSiteCommandOutput/)

</details>
<details>
<summary>
GetDeviceIdentifier
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/privatenetworks/command/GetDeviceIdentifierCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-privatenetworks/Interface/GetDeviceIdentifierCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-privatenetworks/Interface/GetDeviceIdentifierCommandOutput/)

</details>
<details>
<summary>
GetNetwork
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/privatenetworks/command/GetNetworkCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-privatenetworks/Interface/GetNetworkCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-privatenetworks/Interface/GetNetworkCommandOutput/)

</details>
<details>
<summary>
GetNetworkResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/privatenetworks/command/GetNetworkResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-privatenetworks/Interface/GetNetworkResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-privatenetworks/Interface/GetNetworkResourceCommandOutput/)

</details>
<details>
<summary>
GetNetworkSite
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/privatenetworks/command/GetNetworkSiteCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-privatenetworks/Interface/GetNetworkSiteCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-privatenetworks/Interface/GetNetworkSiteCommandOutput/)

</details>
<details>
<summary>
GetOrder
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/privatenetworks/command/GetOrderCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-privatenetworks/Interface/GetOrderCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-privatenetworks/Interface/GetOrderCommandOutput/)

</details>
<details>
<summary>
ListDeviceIdentifiers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/privatenetworks/command/ListDeviceIdentifiersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-privatenetworks/Interface/ListDeviceIdentifiersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-privatenetworks/Interface/ListDeviceIdentifiersCommandOutput/)

</details>
<details>
<summary>
ListNetworkResources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/privatenetworks/command/ListNetworkResourcesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-privatenetworks/Interface/ListNetworkResourcesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-privatenetworks/Interface/ListNetworkResourcesCommandOutput/)

</details>
<details>
<summary>
ListNetworks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/privatenetworks/command/ListNetworksCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-privatenetworks/Interface/ListNetworksCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-privatenetworks/Interface/ListNetworksCommandOutput/)

</details>
<details>
<summary>
ListNetworkSites
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/privatenetworks/command/ListNetworkSitesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-privatenetworks/Interface/ListNetworkSitesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-privatenetworks/Interface/ListNetworkSitesCommandOutput/)

</details>
<details>
<summary>
ListOrders
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/privatenetworks/command/ListOrdersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-privatenetworks/Interface/ListOrdersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-privatenetworks/Interface/ListOrdersCommandOutput/)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/privatenetworks/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-privatenetworks/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-privatenetworks/Interface/ListTagsForResourceCommandOutput/)

</details>
<details>
<summary>
Ping
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/privatenetworks/command/PingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-privatenetworks/Interface/PingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-privatenetworks/Interface/PingCommandOutput/)

</details>
<details>
<summary>
StartNetworkResourceUpdate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/privatenetworks/command/StartNetworkResourceUpdateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-privatenetworks/Interface/StartNetworkResourceUpdateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-privatenetworks/Interface/StartNetworkResourceUpdateCommandOutput/)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/privatenetworks/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-privatenetworks/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-privatenetworks/Interface/TagResourceCommandOutput/)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/privatenetworks/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-privatenetworks/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-privatenetworks/Interface/UntagResourceCommandOutput/)

</details>
<details>
<summary>
UpdateNetworkSite
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/privatenetworks/command/UpdateNetworkSiteCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-privatenetworks/Interface/UpdateNetworkSiteCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-privatenetworks/Interface/UpdateNetworkSiteCommandOutput/)

</details>
<details>
<summary>
UpdateNetworkSitePlan
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/privatenetworks/command/UpdateNetworkSitePlanCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-privatenetworks/Interface/UpdateNetworkSitePlanCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-privatenetworks/Interface/UpdateNetworkSitePlanCommandOutput/)

</details>
