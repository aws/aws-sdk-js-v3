<!-- generated file, do not edit directly -->

# @aws-sdk/client-privatenetworks

## Description

AWS SDK for JavaScript PrivateNetworks Client for Node.js, Browser and React Native.

<p>Amazon Web Services Private 5G is a managed service that makes it easy to deploy, operate, and scale
your own private mobile network at your on-premises location. Private 5G provides the
pre-configured hardware and software for mobile networks, helps automate setup, and
scales capacity on demand to support additional devices as needed.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-privatenetworks
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/classes/acknowledgeorderreceiptcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/interfaces/acknowledgeorderreceiptcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/interfaces/acknowledgeorderreceiptcommandoutput.html)

</details>
<details>
<summary>
ActivateDeviceIdentifier
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/classes/activatedeviceidentifiercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/interfaces/activatedeviceidentifiercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/interfaces/activatedeviceidentifiercommandoutput.html)

</details>
<details>
<summary>
ActivateNetworkSite
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/classes/activatenetworksitecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/interfaces/activatenetworksitecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/interfaces/activatenetworksitecommandoutput.html)

</details>
<details>
<summary>
ConfigureAccessPoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/classes/configureaccesspointcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/interfaces/configureaccesspointcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/interfaces/configureaccesspointcommandoutput.html)

</details>
<details>
<summary>
CreateNetwork
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/classes/createnetworkcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/interfaces/createnetworkcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/interfaces/createnetworkcommandoutput.html)

</details>
<details>
<summary>
CreateNetworkSite
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/classes/createnetworksitecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/interfaces/createnetworksitecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/interfaces/createnetworksitecommandoutput.html)

</details>
<details>
<summary>
DeactivateDeviceIdentifier
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/classes/deactivatedeviceidentifiercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/interfaces/deactivatedeviceidentifiercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/interfaces/deactivatedeviceidentifiercommandoutput.html)

</details>
<details>
<summary>
DeleteNetwork
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/classes/deletenetworkcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/interfaces/deletenetworkcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/interfaces/deletenetworkcommandoutput.html)

</details>
<details>
<summary>
DeleteNetworkSite
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/classes/deletenetworksitecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/interfaces/deletenetworksitecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/interfaces/deletenetworksitecommandoutput.html)

</details>
<details>
<summary>
GetDeviceIdentifier
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/classes/getdeviceidentifiercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/interfaces/getdeviceidentifiercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/interfaces/getdeviceidentifiercommandoutput.html)

</details>
<details>
<summary>
GetNetwork
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/classes/getnetworkcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/interfaces/getnetworkcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/interfaces/getnetworkcommandoutput.html)

</details>
<details>
<summary>
GetNetworkResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/classes/getnetworkresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/interfaces/getnetworkresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/interfaces/getnetworkresourcecommandoutput.html)

</details>
<details>
<summary>
GetNetworkSite
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/classes/getnetworksitecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/interfaces/getnetworksitecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/interfaces/getnetworksitecommandoutput.html)

</details>
<details>
<summary>
GetOrder
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/classes/getordercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/interfaces/getordercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/interfaces/getordercommandoutput.html)

</details>
<details>
<summary>
ListDeviceIdentifiers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/classes/listdeviceidentifierscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/interfaces/listdeviceidentifierscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/interfaces/listdeviceidentifierscommandoutput.html)

</details>
<details>
<summary>
ListNetworkResources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/classes/listnetworkresourcescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/interfaces/listnetworkresourcescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/interfaces/listnetworkresourcescommandoutput.html)

</details>
<details>
<summary>
ListNetworks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/classes/listnetworkscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/interfaces/listnetworkscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/interfaces/listnetworkscommandoutput.html)

</details>
<details>
<summary>
ListNetworkSites
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/classes/listnetworksitescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/interfaces/listnetworksitescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/interfaces/listnetworksitescommandoutput.html)

</details>
<details>
<summary>
ListOrders
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/classes/listorderscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/interfaces/listorderscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/interfaces/listorderscommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
Ping
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/classes/pingcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/interfaces/pingcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/interfaces/pingcommandoutput.html)

</details>
<details>
<summary>
StartNetworkResourceUpdate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/classes/startnetworkresourceupdatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/interfaces/startnetworkresourceupdatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/interfaces/startnetworkresourceupdatecommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateNetworkSite
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/classes/updatenetworksitecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/interfaces/updatenetworksitecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/interfaces/updatenetworksitecommandoutput.html)

</details>
<details>
<summary>
UpdateNetworkSitePlan
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/classes/updatenetworksiteplancommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/interfaces/updatenetworksiteplancommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-privatenetworks/interfaces/updatenetworksiteplancommandoutput.html)

</details>
