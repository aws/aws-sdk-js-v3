<!-- generated file, do not edit directly -->

# @aws-sdk/client-tnb

## Description

AWS SDK for JavaScript Tnb Client for Node.js, Browser and React Native.

<p>
Amazon Web Services Telco Network Builder (TNB) is a network automation service that helps
you deploy and manage telecom networks. AWS TNB helps you with the lifecycle management of
your telecommunication network functions throughout planning, deployment, and
post-deployment activities.</p>

## Installing

To install this package, use the CLI of your favorite package manager:

- `npm install @aws-sdk/client-tnb`
- `yarn add @aws-sdk/client-tnb`
- `pnpm add @aws-sdk/client-tnb`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `TnbClient` and
the commands you need, for example `ListSolFunctionPackagesCommand`:

```js
// ES5 example
const { TnbClient, ListSolFunctionPackagesCommand } = require("@aws-sdk/client-tnb");
```

```ts
// ES6+ example
import { TnbClient, ListSolFunctionPackagesCommand } from "@aws-sdk/client-tnb";
```

### Usage

To send a request:

- Instantiate a client with configuration (e.g. credentials, region).
  - See [docs/CLIENTS](https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/CLIENTS.md) for configuration details.
  - See [@aws-sdk/config](https://github.com/aws/aws-sdk-js-v3/blob/main/packages/config/README.md) for additional options.
- Instantiate a command with input parameters.
- Call the `send` operation on the client, providing the command object as input.

```js
const client = new TnbClient({ region: "REGION" });

const params = { /** input parameters */ };
const command = new ListSolFunctionPackagesCommand(params);
```

#### Async/await

We recommend using the [await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
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

#### Promises

You can also use [Promise chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#chaining).

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

#### Aggregated client

The aggregated client class is exported from the same package, but without the "Client" suffix.

`Tnb` extends `TnbClient` and additionally supports all operations, waiters, and paginators as methods.
This style may be familiar to you from the AWS SDK for JavaScript v2.

If you are bundling the AWS SDK, we recommend using only the bare-bones client (`TnbClient`).
More details are in the blog post on
[modular packages in AWS SDK for JavaScript](https://aws.amazon.com/blogs/developer/modular-packages-in-aws-sdk-for-javascript/).

```ts
import { Tnb } from "@aws-sdk/client-tnb";

const client = new Tnb({ region: "REGION" });

// async/await.
try {
  const data = await client.listSolFunctionPackages(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listSolFunctionPackages(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks (not recommended).
client.listSolFunctionPackages(params, (err, data) => {
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

See also [docs/ERROR_HANDLING](https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/ERROR_HANDLING.md).

## Getting Help

Please use these community resources for getting help.
We use GitHub issues for tracking bugs and feature requests, but have limited bandwidth to address them.

- Visit the [Developer Guide](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/welcome.html)
  or [API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/index.html).
- Check out the blog posts tagged with [`aws-sdk-js`](https://aws.amazon.com/blogs/developer/tag/aws-sdk-js/)
  on AWS Developer Blog.
- Ask a question on [StackOverflow](https://stackoverflow.com/questions/tagged/aws-sdk-js) and tag it with `aws-sdk-js`.
- Join the AWS JavaScript community on [gitter](https://gitter.im/aws/aws-sdk-js-v3).
- If it turns out that you may have found a bug, please [open an issue](https://github.com/aws/aws-sdk-js-v3/issues/new/choose).

To test your universal JavaScript code in Node.js, browser and react-native environments,
visit our [code samples repo](https://github.com/aws-samples/aws-sdk-js-tests).

## Contributing

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-tnb` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CancelSolNetworkOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/tnb/command/CancelSolNetworkOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/CancelSolNetworkOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/CancelSolNetworkOperationCommandOutput/)
</details>
<details>
<summary>
CreateSolFunctionPackage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/tnb/command/CreateSolFunctionPackageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/CreateSolFunctionPackageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/CreateSolFunctionPackageCommandOutput/)
</details>
<details>
<summary>
CreateSolNetworkInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/tnb/command/CreateSolNetworkInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/CreateSolNetworkInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/CreateSolNetworkInstanceCommandOutput/)
</details>
<details>
<summary>
CreateSolNetworkPackage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/tnb/command/CreateSolNetworkPackageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/CreateSolNetworkPackageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/CreateSolNetworkPackageCommandOutput/)
</details>
<details>
<summary>
DeleteSolFunctionPackage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/tnb/command/DeleteSolFunctionPackageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/DeleteSolFunctionPackageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/DeleteSolFunctionPackageCommandOutput/)
</details>
<details>
<summary>
DeleteSolNetworkInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/tnb/command/DeleteSolNetworkInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/DeleteSolNetworkInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/DeleteSolNetworkInstanceCommandOutput/)
</details>
<details>
<summary>
DeleteSolNetworkPackage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/tnb/command/DeleteSolNetworkPackageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/DeleteSolNetworkPackageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/DeleteSolNetworkPackageCommandOutput/)
</details>
<details>
<summary>
GetSolFunctionInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/tnb/command/GetSolFunctionInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/GetSolFunctionInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/GetSolFunctionInstanceCommandOutput/)
</details>
<details>
<summary>
GetSolFunctionPackage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/tnb/command/GetSolFunctionPackageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/GetSolFunctionPackageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/GetSolFunctionPackageCommandOutput/)
</details>
<details>
<summary>
GetSolFunctionPackageContent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/tnb/command/GetSolFunctionPackageContentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/GetSolFunctionPackageContentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/GetSolFunctionPackageContentCommandOutput/)
</details>
<details>
<summary>
GetSolFunctionPackageDescriptor
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/tnb/command/GetSolFunctionPackageDescriptorCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/GetSolFunctionPackageDescriptorCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/GetSolFunctionPackageDescriptorCommandOutput/)
</details>
<details>
<summary>
GetSolNetworkInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/tnb/command/GetSolNetworkInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/GetSolNetworkInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/GetSolNetworkInstanceCommandOutput/)
</details>
<details>
<summary>
GetSolNetworkOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/tnb/command/GetSolNetworkOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/GetSolNetworkOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/GetSolNetworkOperationCommandOutput/)
</details>
<details>
<summary>
GetSolNetworkPackage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/tnb/command/GetSolNetworkPackageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/GetSolNetworkPackageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/GetSolNetworkPackageCommandOutput/)
</details>
<details>
<summary>
GetSolNetworkPackageContent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/tnb/command/GetSolNetworkPackageContentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/GetSolNetworkPackageContentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/GetSolNetworkPackageContentCommandOutput/)
</details>
<details>
<summary>
GetSolNetworkPackageDescriptor
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/tnb/command/GetSolNetworkPackageDescriptorCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/GetSolNetworkPackageDescriptorCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/GetSolNetworkPackageDescriptorCommandOutput/)
</details>
<details>
<summary>
InstantiateSolNetworkInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/tnb/command/InstantiateSolNetworkInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/InstantiateSolNetworkInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/InstantiateSolNetworkInstanceCommandOutput/)
</details>
<details>
<summary>
ListSolFunctionInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/tnb/command/ListSolFunctionInstancesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/ListSolFunctionInstancesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/ListSolFunctionInstancesCommandOutput/)
</details>
<details>
<summary>
ListSolFunctionPackages
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/tnb/command/ListSolFunctionPackagesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/ListSolFunctionPackagesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/ListSolFunctionPackagesCommandOutput/)
</details>
<details>
<summary>
ListSolNetworkInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/tnb/command/ListSolNetworkInstancesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/ListSolNetworkInstancesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/ListSolNetworkInstancesCommandOutput/)
</details>
<details>
<summary>
ListSolNetworkOperations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/tnb/command/ListSolNetworkOperationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/ListSolNetworkOperationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/ListSolNetworkOperationsCommandOutput/)
</details>
<details>
<summary>
ListSolNetworkPackages
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/tnb/command/ListSolNetworkPackagesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/ListSolNetworkPackagesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/ListSolNetworkPackagesCommandOutput/)
</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/tnb/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/ListTagsForResourceCommandOutput/)
</details>
<details>
<summary>
PutSolFunctionPackageContent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/tnb/command/PutSolFunctionPackageContentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/PutSolFunctionPackageContentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/PutSolFunctionPackageContentCommandOutput/)
</details>
<details>
<summary>
PutSolNetworkPackageContent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/tnb/command/PutSolNetworkPackageContentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/PutSolNetworkPackageContentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/PutSolNetworkPackageContentCommandOutput/)
</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/tnb/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/TagResourceCommandOutput/)
</details>
<details>
<summary>
TerminateSolNetworkInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/tnb/command/TerminateSolNetworkInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/TerminateSolNetworkInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/TerminateSolNetworkInstanceCommandOutput/)
</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/tnb/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/UntagResourceCommandOutput/)
</details>
<details>
<summary>
UpdateSolFunctionPackage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/tnb/command/UpdateSolFunctionPackageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/UpdateSolFunctionPackageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/UpdateSolFunctionPackageCommandOutput/)
</details>
<details>
<summary>
UpdateSolNetworkInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/tnb/command/UpdateSolNetworkInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/UpdateSolNetworkInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/UpdateSolNetworkInstanceCommandOutput/)
</details>
<details>
<summary>
UpdateSolNetworkPackage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/tnb/command/UpdateSolNetworkPackageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/UpdateSolNetworkPackageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/UpdateSolNetworkPackageCommandOutput/)
</details>
<details>
<summary>
ValidateSolFunctionPackageContent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/tnb/command/ValidateSolFunctionPackageContentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/ValidateSolFunctionPackageContentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/ValidateSolFunctionPackageContentCommandOutput/)
</details>
<details>
<summary>
ValidateSolNetworkPackageContent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/tnb/command/ValidateSolNetworkPackageContentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/ValidateSolNetworkPackageContentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-tnb/Interface/ValidateSolNetworkPackageContentCommandOutput/)
</details>
