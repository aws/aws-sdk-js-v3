<!-- generated file, do not edit directly -->

# @aws-sdk/client-controlcatalog

## Description

AWS SDK for JavaScript ControlCatalog Client for Node.js, Browser and React Native.

<p>Welcome to the Control Catalog API reference. This guide is for developers who need detailed information about how to programmatically identify and filter the common controls and related metadata that are available to Amazon Web Services customers. This API reference provides descriptions, syntax, and usage examples for each of the actions and data types that are supported by Control Catalog. </p> <p>Use the following links to get started with the Control Catalog API:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/controlcatalog/latest/APIReference/API_Operations.html">Actions</a>: An alphabetical list of all Control Catalog API operations.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/controlcatalog/latest/APIReference/API_Types.html">Data types</a>: An alphabetical list of all Control Catalog data types.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/controlcatalog/latest/APIReference/CommonParameters.html">Common parameters</a>: Parameters that all operations can use.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/controlcatalog/latest/APIReference/CommonErrors.html">Common errors</a>: Client and server errors that all operations can return.</p> </li> </ul>

## Installing

To install this package, use the CLI of your favorite package manager:

- `npm install @aws-sdk/client-controlcatalog`
- `yarn add @aws-sdk/client-controlcatalog`
- `pnpm add @aws-sdk/client-controlcatalog`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `ControlCatalogClient` and
the commands you need, for example `ListDomainsCommand`:

```js
// ES5 example
const { ControlCatalogClient, ListDomainsCommand } = require("@aws-sdk/client-controlcatalog");
```

```ts
// ES6+ example
import { ControlCatalogClient, ListDomainsCommand } from "@aws-sdk/client-controlcatalog";
```

### Usage

To send a request:

- Instantiate a client with configuration (e.g. credentials, region).
  - See [docs/CLIENTS](https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/CLIENTS.md) for configuration details.
  - See [@aws-sdk/config](https://github.com/aws/aws-sdk-js-v3/blob/main/packages/config/README.md) for additional options.
- Instantiate a command with input parameters.
- Call the `send` operation on the client, providing the command object as input.

```js
const client = new ControlCatalogClient({ region: "REGION" });

const params = { /** input parameters */ };
const command = new ListDomainsCommand(params);
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

`ControlCatalog` extends `ControlCatalogClient` and additionally supports all operations, waiters, and paginators as methods.
This style may be familiar to you from the AWS SDK for JavaScript v2.

If you are bundling the AWS SDK, we recommend using only the bare-bones client (`ControlCatalogClient`).
More details are in the blog post on
[modular packages in AWS SDK for JavaScript](https://aws.amazon.com/blogs/developer/modular-packages-in-aws-sdk-for-javascript/).

```ts
import { ControlCatalog } from "@aws-sdk/client-controlcatalog";

const client = new ControlCatalog({ region: "REGION" });

// async/await.
try {
  const data = await client.listDomains(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listDomains(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks (not recommended).
client.listDomains(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-controlcatalog` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
GetControl
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/controlcatalog/command/GetControlCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controlcatalog/Interface/GetControlCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controlcatalog/Interface/GetControlCommandOutput/)
</details>
<details>
<summary>
ListCommonControls
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/controlcatalog/command/ListCommonControlsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controlcatalog/Interface/ListCommonControlsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controlcatalog/Interface/ListCommonControlsCommandOutput/)
</details>
<details>
<summary>
ListControlMappings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/controlcatalog/command/ListControlMappingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controlcatalog/Interface/ListControlMappingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controlcatalog/Interface/ListControlMappingsCommandOutput/)
</details>
<details>
<summary>
ListControls
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/controlcatalog/command/ListControlsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controlcatalog/Interface/ListControlsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controlcatalog/Interface/ListControlsCommandOutput/)
</details>
<details>
<summary>
ListDomains
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/controlcatalog/command/ListDomainsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controlcatalog/Interface/ListDomainsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controlcatalog/Interface/ListDomainsCommandOutput/)
</details>
<details>
<summary>
ListObjectives
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/controlcatalog/command/ListObjectivesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controlcatalog/Interface/ListObjectivesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controlcatalog/Interface/ListObjectivesCommandOutput/)
</details>
