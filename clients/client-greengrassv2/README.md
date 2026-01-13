<!-- generated file, do not edit directly -->

# @aws-sdk/client-greengrassv2

## Description

AWS SDK for JavaScript GreengrassV2 Client for Node.js, Browser and React Native.

<p>IoT Greengrass brings local compute, messaging, data management, sync, and ML inference capabilities
to edge devices. This enables devices to collect and analyze data closer to the source of
information, react autonomously to local events, and communicate securely with each other on
local networks. Local devices can also communicate securely with Amazon Web Services IoT Core and export IoT data
to the Amazon Web Services Cloud. IoT Greengrass developers can use Lambda functions and components to create and
deploy applications to fleets of edge devices for local operation.</p>
<p>IoT Greengrass Version 2 provides a new major version of the IoT Greengrass Core software, new APIs, and a new console.
Use this API reference to learn how to use the IoT Greengrass V2 API operations to manage components,
manage deployments, and core devices.</p>
<p>For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/what-is-iot-greengrass.html">What is IoT Greengrass?</a> in the
<i>IoT Greengrass V2 Developer Guide</i>.</p>

## Installing
To install this package, simply type add or install @aws-sdk/client-greengrassv2
using your favorite package manager:
- `npm install @aws-sdk/client-greengrassv2`
- `yarn add @aws-sdk/client-greengrassv2`
- `pnpm add @aws-sdk/client-greengrassv2`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `GreengrassV2Client` and
the commands you need, for example `ListComponentsCommand`:

```js
// ES5 example
const { GreengrassV2Client, ListComponentsCommand } = require("@aws-sdk/client-greengrassv2");
```

```ts
// ES6+ example
import { GreengrassV2Client, ListComponentsCommand } from "@aws-sdk/client-greengrassv2";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new GreengrassV2Client({ region: "REGION" });

const params = { /** input parameters */ };
const command = new ListComponentsCommand(params);
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
import * as AWS from "@aws-sdk/client-greengrassv2";
const client = new AWS.GreengrassV2({ region: "REGION" });

// async/await.
try {
  const data = await client.listComponents(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listComponents(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listComponents(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-greengrassv2` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AssociateServiceRoleToAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrassv2/command/AssociateServiceRoleToAccountCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrassv2/Interface/AssociateServiceRoleToAccountCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrassv2/Interface/AssociateServiceRoleToAccountCommandOutput/)
</details>
<details>
<summary>
BatchAssociateClientDeviceWithCoreDevice
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrassv2/command/BatchAssociateClientDeviceWithCoreDeviceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrassv2/Interface/BatchAssociateClientDeviceWithCoreDeviceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrassv2/Interface/BatchAssociateClientDeviceWithCoreDeviceCommandOutput/)
</details>
<details>
<summary>
BatchDisassociateClientDeviceFromCoreDevice
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrassv2/command/BatchDisassociateClientDeviceFromCoreDeviceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrassv2/Interface/BatchDisassociateClientDeviceFromCoreDeviceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrassv2/Interface/BatchDisassociateClientDeviceFromCoreDeviceCommandOutput/)
</details>
<details>
<summary>
CancelDeployment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrassv2/command/CancelDeploymentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrassv2/Interface/CancelDeploymentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrassv2/Interface/CancelDeploymentCommandOutput/)
</details>
<details>
<summary>
CreateComponentVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrassv2/command/CreateComponentVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrassv2/Interface/CreateComponentVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrassv2/Interface/CreateComponentVersionCommandOutput/)
</details>
<details>
<summary>
CreateDeployment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrassv2/command/CreateDeploymentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrassv2/Interface/CreateDeploymentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrassv2/Interface/CreateDeploymentCommandOutput/)
</details>
<details>
<summary>
DeleteComponent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrassv2/command/DeleteComponentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrassv2/Interface/DeleteComponentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrassv2/Interface/DeleteComponentCommandOutput/)
</details>
<details>
<summary>
DeleteCoreDevice
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrassv2/command/DeleteCoreDeviceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrassv2/Interface/DeleteCoreDeviceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrassv2/Interface/DeleteCoreDeviceCommandOutput/)
</details>
<details>
<summary>
DeleteDeployment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrassv2/command/DeleteDeploymentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrassv2/Interface/DeleteDeploymentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrassv2/Interface/DeleteDeploymentCommandOutput/)
</details>
<details>
<summary>
DescribeComponent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrassv2/command/DescribeComponentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrassv2/Interface/DescribeComponentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrassv2/Interface/DescribeComponentCommandOutput/)
</details>
<details>
<summary>
DisassociateServiceRoleFromAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrassv2/command/DisassociateServiceRoleFromAccountCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrassv2/Interface/DisassociateServiceRoleFromAccountCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrassv2/Interface/DisassociateServiceRoleFromAccountCommandOutput/)
</details>
<details>
<summary>
GetComponent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrassv2/command/GetComponentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrassv2/Interface/GetComponentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrassv2/Interface/GetComponentCommandOutput/)
</details>
<details>
<summary>
GetComponentVersionArtifact
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrassv2/command/GetComponentVersionArtifactCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrassv2/Interface/GetComponentVersionArtifactCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrassv2/Interface/GetComponentVersionArtifactCommandOutput/)
</details>
<details>
<summary>
GetConnectivityInfo
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrassv2/command/GetConnectivityInfoCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrassv2/Interface/GetConnectivityInfoCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrassv2/Interface/GetConnectivityInfoCommandOutput/)
</details>
<details>
<summary>
GetCoreDevice
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrassv2/command/GetCoreDeviceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrassv2/Interface/GetCoreDeviceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrassv2/Interface/GetCoreDeviceCommandOutput/)
</details>
<details>
<summary>
GetDeployment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrassv2/command/GetDeploymentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrassv2/Interface/GetDeploymentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrassv2/Interface/GetDeploymentCommandOutput/)
</details>
<details>
<summary>
GetServiceRoleForAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrassv2/command/GetServiceRoleForAccountCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrassv2/Interface/GetServiceRoleForAccountCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrassv2/Interface/GetServiceRoleForAccountCommandOutput/)
</details>
<details>
<summary>
ListClientDevicesAssociatedWithCoreDevice
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrassv2/command/ListClientDevicesAssociatedWithCoreDeviceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrassv2/Interface/ListClientDevicesAssociatedWithCoreDeviceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrassv2/Interface/ListClientDevicesAssociatedWithCoreDeviceCommandOutput/)
</details>
<details>
<summary>
ListComponents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrassv2/command/ListComponentsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrassv2/Interface/ListComponentsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrassv2/Interface/ListComponentsCommandOutput/)
</details>
<details>
<summary>
ListComponentVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrassv2/command/ListComponentVersionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrassv2/Interface/ListComponentVersionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrassv2/Interface/ListComponentVersionsCommandOutput/)
</details>
<details>
<summary>
ListCoreDevices
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrassv2/command/ListCoreDevicesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrassv2/Interface/ListCoreDevicesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrassv2/Interface/ListCoreDevicesCommandOutput/)
</details>
<details>
<summary>
ListDeployments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrassv2/command/ListDeploymentsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrassv2/Interface/ListDeploymentsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrassv2/Interface/ListDeploymentsCommandOutput/)
</details>
<details>
<summary>
ListEffectiveDeployments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrassv2/command/ListEffectiveDeploymentsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrassv2/Interface/ListEffectiveDeploymentsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrassv2/Interface/ListEffectiveDeploymentsCommandOutput/)
</details>
<details>
<summary>
ListInstalledComponents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrassv2/command/ListInstalledComponentsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrassv2/Interface/ListInstalledComponentsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrassv2/Interface/ListInstalledComponentsCommandOutput/)
</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrassv2/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrassv2/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrassv2/Interface/ListTagsForResourceCommandOutput/)
</details>
<details>
<summary>
ResolveComponentCandidates
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrassv2/command/ResolveComponentCandidatesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrassv2/Interface/ResolveComponentCandidatesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrassv2/Interface/ResolveComponentCandidatesCommandOutput/)
</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrassv2/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrassv2/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrassv2/Interface/TagResourceCommandOutput/)
</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrassv2/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrassv2/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrassv2/Interface/UntagResourceCommandOutput/)
</details>
<details>
<summary>
UpdateConnectivityInfo
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/greengrassv2/command/UpdateConnectivityInfoCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrassv2/Interface/UpdateConnectivityInfoCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-greengrassv2/Interface/UpdateConnectivityInfoCommandOutput/)
</details>
