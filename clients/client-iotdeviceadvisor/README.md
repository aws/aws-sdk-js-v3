<!-- generated file, do not edit directly -->

# @aws-sdk/client-iotdeviceadvisor

## Description

AWS SDK for JavaScript IotDeviceAdvisor Client for Node.js, Browser and React Native.

<p>Amazon Web Services IoT Core Device Advisor is a cloud-based, fully managed test capability for validating IoT
devices during device software development. Device Advisor provides pre-built tests that you
can use to validate IoT devices for reliable and secure connectivity with Amazon Web Services IoT Core
before deploying devices to production. By using Device Advisor, you can confirm that your
devices can connect to Amazon Web Services IoT Core, follow security best practices and, if applicable,
receive software updates from IoT Device Management. You can also download signed
qualification reports to submit to the Amazon Web Services Partner Network to get your device
qualified for the Amazon Web Services Partner Device Catalog without the need to send your device in
and wait for it to be tested.</p>

## Installing

To install this package, use the CLI of your favorite package manager:

- `npm install @aws-sdk/client-iotdeviceadvisor`
- `yarn add @aws-sdk/client-iotdeviceadvisor`
- `pnpm add @aws-sdk/client-iotdeviceadvisor`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `IotDeviceAdvisorClient` and
the commands you need, for example `ListSuiteRunsCommand`:

```js
// ES5 example
const { IotDeviceAdvisorClient, ListSuiteRunsCommand } = require("@aws-sdk/client-iotdeviceadvisor");
```

```ts
// ES6+ example
import { IotDeviceAdvisorClient, ListSuiteRunsCommand } from "@aws-sdk/client-iotdeviceadvisor";
```

### Usage

To send a request:

- Instantiate a client with configuration (e.g. credentials, region).
  - See [docs/CLIENTS](https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/CLIENTS.md) for configuration details.
  - See [@aws-sdk/config](https://github.com/aws/aws-sdk-js-v3/blob/main/packages/config/README.md) for additional options.
- Instantiate a command with input parameters.
- Call the `send` operation on the client, providing the command object as input.

```js
const client = new IotDeviceAdvisorClient({ region: "REGION" });

const params = { /** input parameters */ };
const command = new ListSuiteRunsCommand(params);
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

`IotDeviceAdvisor` extends `IotDeviceAdvisorClient` and additionally supports all operations, waiters, and paginators as methods.
This style may be familiar to you from the AWS SDK for JavaScript v2.

If you are bundling the AWS SDK, we recommend using only the bare-bones client (`IotDeviceAdvisorClient`).
More details are in the blog post on
[modular packages in AWS SDK for JavaScript](https://aws.amazon.com/blogs/developer/modular-packages-in-aws-sdk-for-javascript/).

```ts
import { IotDeviceAdvisor } from "@aws-sdk/client-iotdeviceadvisor";

const client = new IotDeviceAdvisor({ region: "REGION" });

// async/await.
try {
  const data = await client.listSuiteRuns(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listSuiteRuns(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks (not recommended).
client.listSuiteRuns(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-iotdeviceadvisor` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CreateSuiteDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotdeviceadvisor/command/CreateSuiteDefinitionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotdeviceadvisor/Interface/CreateSuiteDefinitionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotdeviceadvisor/Interface/CreateSuiteDefinitionCommandOutput/)
</details>
<details>
<summary>
DeleteSuiteDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotdeviceadvisor/command/DeleteSuiteDefinitionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotdeviceadvisor/Interface/DeleteSuiteDefinitionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotdeviceadvisor/Interface/DeleteSuiteDefinitionCommandOutput/)
</details>
<details>
<summary>
GetEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotdeviceadvisor/command/GetEndpointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotdeviceadvisor/Interface/GetEndpointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotdeviceadvisor/Interface/GetEndpointCommandOutput/)
</details>
<details>
<summary>
GetSuiteDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotdeviceadvisor/command/GetSuiteDefinitionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotdeviceadvisor/Interface/GetSuiteDefinitionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotdeviceadvisor/Interface/GetSuiteDefinitionCommandOutput/)
</details>
<details>
<summary>
GetSuiteRun
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotdeviceadvisor/command/GetSuiteRunCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotdeviceadvisor/Interface/GetSuiteRunCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotdeviceadvisor/Interface/GetSuiteRunCommandOutput/)
</details>
<details>
<summary>
GetSuiteRunReport
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotdeviceadvisor/command/GetSuiteRunReportCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotdeviceadvisor/Interface/GetSuiteRunReportCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotdeviceadvisor/Interface/GetSuiteRunReportCommandOutput/)
</details>
<details>
<summary>
ListSuiteDefinitions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotdeviceadvisor/command/ListSuiteDefinitionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotdeviceadvisor/Interface/ListSuiteDefinitionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotdeviceadvisor/Interface/ListSuiteDefinitionsCommandOutput/)
</details>
<details>
<summary>
ListSuiteRuns
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotdeviceadvisor/command/ListSuiteRunsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotdeviceadvisor/Interface/ListSuiteRunsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotdeviceadvisor/Interface/ListSuiteRunsCommandOutput/)
</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotdeviceadvisor/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotdeviceadvisor/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotdeviceadvisor/Interface/ListTagsForResourceCommandOutput/)
</details>
<details>
<summary>
StartSuiteRun
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotdeviceadvisor/command/StartSuiteRunCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotdeviceadvisor/Interface/StartSuiteRunCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotdeviceadvisor/Interface/StartSuiteRunCommandOutput/)
</details>
<details>
<summary>
StopSuiteRun
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotdeviceadvisor/command/StopSuiteRunCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotdeviceadvisor/Interface/StopSuiteRunCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotdeviceadvisor/Interface/StopSuiteRunCommandOutput/)
</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotdeviceadvisor/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotdeviceadvisor/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotdeviceadvisor/Interface/TagResourceCommandOutput/)
</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotdeviceadvisor/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotdeviceadvisor/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotdeviceadvisor/Interface/UntagResourceCommandOutput/)
</details>
<details>
<summary>
UpdateSuiteDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotdeviceadvisor/command/UpdateSuiteDefinitionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotdeviceadvisor/Interface/UpdateSuiteDefinitionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotdeviceadvisor/Interface/UpdateSuiteDefinitionCommandOutput/)
</details>
