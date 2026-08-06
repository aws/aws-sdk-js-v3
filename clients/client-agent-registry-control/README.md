<!-- generated file, do not edit directly -->

# @aws-sdk/client-agent-registry-control

## Description

AWS SDK for JavaScript AgentRegistryControl Client for Node.js, Browser and React Native.

<p>AWS Agent Registry is a managed catalog for publishing and discovering resources such as MCP servers, agents, and agent skills. Agent Registry Control is its control-plane API: use it to create and manage registries and the records they contain, configure discovery and authorization, govern record approval and curation workflows, and manage automatic detection of resources. Data-plane search and MCP invocation operations are provided by the companion Agent Registry API.</p>

## Installing

To install this package, use the CLI of your favorite package manager:

- `npm install @aws-sdk/client-agent-registry-control`
- `yarn add @aws-sdk/client-agent-registry-control`
- `pnpm add @aws-sdk/client-agent-registry-control`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `AgentRegistryControlClient` and
the commands you need, for example `ListRegistriesCommand`:

```js
// ES5 example
const { AgentRegistryControlClient, ListRegistriesCommand } = require("@aws-sdk/client-agent-registry-control");
```

```ts
// ES6+ example
import { AgentRegistryControlClient, ListRegistriesCommand } from "@aws-sdk/client-agent-registry-control";
```

### Usage

To send a request:

- Instantiate a client with configuration (e.g. credentials, region).
  - See [docs/CLIENTS](https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/CLIENTS.md) for configuration details.
  - See [@aws-sdk/config](https://github.com/aws/aws-sdk-js-v3/blob/main/packages/config/README.md) for additional options.
- Instantiate a command with input parameters.
- Call the `send` operation on the client, providing the command object as input.

```js
const client = new AgentRegistryControlClient({ region: "REGION" });

const params = { /** input parameters */ };
const command = new ListRegistriesCommand(params);
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

`AgentRegistryControl` extends `AgentRegistryControlClient` and additionally supports all operations, waiters, and paginators as methods.
This style may be familiar to you from the AWS SDK for JavaScript v2.

If you are bundling the AWS SDK, we recommend using only the bare-bones client (`AgentRegistryControlClient`).
More details are in the blog post on
[modular packages in AWS SDK for JavaScript](https://aws.amazon.com/blogs/developer/modular-packages-in-aws-sdk-for-javascript/).

```ts
import { AgentRegistryControl } from "@aws-sdk/client-agent-registry-control";

const client = new AgentRegistryControl({ region: "REGION" });

// async/await.
try {
  const data = await client.listRegistries(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listRegistries(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks (not recommended).
client.listRegistries(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-agent-registry-control` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CreateRegistry
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/agent-registry-control/command/CreateRegistryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-agent-registry-control/Interface/CreateRegistryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-agent-registry-control/Interface/CreateRegistryCommandOutput/)
</details>
<details>
<summary>
CreateRegistryRecord
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/agent-registry-control/command/CreateRegistryRecordCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-agent-registry-control/Interface/CreateRegistryRecordCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-agent-registry-control/Interface/CreateRegistryRecordCommandOutput/)
</details>
<details>
<summary>
DeleteRegistry
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/agent-registry-control/command/DeleteRegistryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-agent-registry-control/Interface/DeleteRegistryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-agent-registry-control/Interface/DeleteRegistryCommandOutput/)
</details>
<details>
<summary>
DeleteRegistryRecord
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/agent-registry-control/command/DeleteRegistryRecordCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-agent-registry-control/Interface/DeleteRegistryRecordCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-agent-registry-control/Interface/DeleteRegistryRecordCommandOutput/)
</details>
<details>
<summary>
GetRegistry
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/agent-registry-control/command/GetRegistryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-agent-registry-control/Interface/GetRegistryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-agent-registry-control/Interface/GetRegistryCommandOutput/)
</details>
<details>
<summary>
GetRegistryRecord
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/agent-registry-control/command/GetRegistryRecordCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-agent-registry-control/Interface/GetRegistryRecordCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-agent-registry-control/Interface/GetRegistryRecordCommandOutput/)
</details>
<details>
<summary>
ListRegistries
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/agent-registry-control/command/ListRegistriesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-agent-registry-control/Interface/ListRegistriesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-agent-registry-control/Interface/ListRegistriesCommandOutput/)
</details>
<details>
<summary>
ListRegistryRecords
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/agent-registry-control/command/ListRegistryRecordsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-agent-registry-control/Interface/ListRegistryRecordsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-agent-registry-control/Interface/ListRegistryRecordsCommandOutput/)
</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/agent-registry-control/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-agent-registry-control/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-agent-registry-control/Interface/ListTagsForResourceCommandOutput/)
</details>
<details>
<summary>
SubmitRegistryRecordForApproval
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/agent-registry-control/command/SubmitRegistryRecordForApprovalCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-agent-registry-control/Interface/SubmitRegistryRecordForApprovalCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-agent-registry-control/Interface/SubmitRegistryRecordForApprovalCommandOutput/)
</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/agent-registry-control/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-agent-registry-control/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-agent-registry-control/Interface/TagResourceCommandOutput/)
</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/agent-registry-control/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-agent-registry-control/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-agent-registry-control/Interface/UntagResourceCommandOutput/)
</details>
<details>
<summary>
UpdateRegistry
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/agent-registry-control/command/UpdateRegistryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-agent-registry-control/Interface/UpdateRegistryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-agent-registry-control/Interface/UpdateRegistryCommandOutput/)
</details>
<details>
<summary>
UpdateRegistryRecord
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/agent-registry-control/command/UpdateRegistryRecordCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-agent-registry-control/Interface/UpdateRegistryRecordCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-agent-registry-control/Interface/UpdateRegistryRecordCommandOutput/)
</details>
<details>
<summary>
UpdateRegistryRecordStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/agent-registry-control/command/UpdateRegistryRecordStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-agent-registry-control/Interface/UpdateRegistryRecordStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-agent-registry-control/Interface/UpdateRegistryRecordStatusCommandOutput/)
</details>
