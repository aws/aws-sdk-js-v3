<!-- generated file, do not edit directly -->

# @aws-sdk/client-arc-region-switch

## Description

AWS SDK for JavaScript ARCRegionSwitch Client for Node.js, Browser and React Native.

<p>Amazon Application Recovery Controller (ARC) Region switch helps you to quickly and reliably shift traffic away from an impaired Amazon Web Services Region to a healthy Region. With Region switch, you can create plans that define the steps to shift traffic for your application from one Amazon Web Services Region to another.</p> <p>Region switch provides a structured approach to multi-Region failover, helping you to meet your recovery time objectives (RTOs) and maintain business continuity during regional disruptions.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/region-switch.html">Region switch in ARC</a> in the <i>Amazon Application Recovery Controller User Guide</i>.</p>

## Installing

To install this package, use the CLI of your favorite package manager:

- `npm install @aws-sdk/client-arc-region-switch`
- `yarn add @aws-sdk/client-arc-region-switch`
- `pnpm add @aws-sdk/client-arc-region-switch`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `ARCRegionSwitchClient` and
the commands you need, for example `ListPlansCommand`:

```js
// ES5 example
const { ARCRegionSwitchClient, ListPlansCommand } = require("@aws-sdk/client-arc-region-switch");
```

```ts
// ES6+ example
import { ARCRegionSwitchClient, ListPlansCommand } from "@aws-sdk/client-arc-region-switch";
```

### Usage

To send a request:

- Instantiate a client with configuration (e.g. credentials, region).
  - See [docs/CLIENTS](https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/CLIENTS.md) for configuration details.
  - See [@aws-sdk/config](https://github.com/aws/aws-sdk-js-v3/blob/main/packages/config/README.md) for additional options.
- Instantiate a command with input parameters.
- Call the `send` operation on the client, providing the command object as input.

```js
const client = new ARCRegionSwitchClient({ region: "REGION" });

const params = { /** input parameters */ };
const command = new ListPlansCommand(params);
```

#### Supported Message Protocols

This client supports multiple protocols.

The default for this client is **AWS JSON (RPC) 1.0**.

We have selected this default based on our evaluation of the
performance characteristics of this protocol format in JavaScript. You don't need to change it,
but you have the option to do so, for example to support existing integrations or tests.
Selecting a non-default protocol changes the format
of the data sent over the network, but does not affect how you interact with the
client using JavaScript objects.

Install the `@aws-sdk/config` package to access alternate protocols.

See [AWS Protocols](https://smithy.io/2.0/aws/protocols/index.html) for more information.

##### AWS JSON (RPC) 1.0

This protocol uses JSON payloads.
```js
import { AwsJson1_0Protocol } from "@aws-sdk/config/protocol";

const client = new ARCRegionSwitchClient({
  protocol: AwsJson1_0Protocol
});
```

##### Smithy RPC v2 CBOR

This protocol uses CBOR payloads.
```js
import { AwsSmithyRpcV2CborProtocol } from "@aws-sdk/config/protocol";

const client = new ARCRegionSwitchClient({
  protocol: AwsSmithyRpcV2CborProtocol
});
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

`ARCRegionSwitch` extends `ARCRegionSwitchClient` and additionally supports all operations, waiters, and paginators as methods.
This style may be familiar to you from the AWS SDK for JavaScript v2.

If you are bundling the AWS SDK, we recommend using only the bare-bones client (`ARCRegionSwitchClient`).
More details are in the blog post on
[modular packages in AWS SDK for JavaScript](https://aws.amazon.com/blogs/developer/modular-packages-in-aws-sdk-for-javascript/).

```ts
import { ARCRegionSwitch } from "@aws-sdk/client-arc-region-switch";

const client = new ARCRegionSwitch({ region: "REGION" });

// async/await.
try {
  const data = await client.listPlans(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listPlans(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks (not recommended).
client.listPlans(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-arc-region-switch` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
ApprovePlanExecutionStep
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/arc-region-switch/command/ApprovePlanExecutionStepCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-region-switch/Interface/ApprovePlanExecutionStepCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-region-switch/Interface/ApprovePlanExecutionStepCommandOutput/)
</details>
<details>
<summary>
CancelPlanExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/arc-region-switch/command/CancelPlanExecutionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-region-switch/Interface/CancelPlanExecutionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-region-switch/Interface/CancelPlanExecutionCommandOutput/)
</details>
<details>
<summary>
CreatePlan
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/arc-region-switch/command/CreatePlanCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-region-switch/Interface/CreatePlanCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-region-switch/Interface/CreatePlanCommandOutput/)
</details>
<details>
<summary>
DeletePlan
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/arc-region-switch/command/DeletePlanCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-region-switch/Interface/DeletePlanCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-region-switch/Interface/DeletePlanCommandOutput/)
</details>
<details>
<summary>
GetPlan
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/arc-region-switch/command/GetPlanCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-region-switch/Interface/GetPlanCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-region-switch/Interface/GetPlanCommandOutput/)
</details>
<details>
<summary>
GetPlanEvaluationStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/arc-region-switch/command/GetPlanEvaluationStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-region-switch/Interface/GetPlanEvaluationStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-region-switch/Interface/GetPlanEvaluationStatusCommandOutput/)
</details>
<details>
<summary>
GetPlanExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/arc-region-switch/command/GetPlanExecutionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-region-switch/Interface/GetPlanExecutionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-region-switch/Interface/GetPlanExecutionCommandOutput/)
</details>
<details>
<summary>
GetPlanInRegion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/arc-region-switch/command/GetPlanInRegionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-region-switch/Interface/GetPlanInRegionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-region-switch/Interface/GetPlanInRegionCommandOutput/)
</details>
<details>
<summary>
ListPlanExecutionEvents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/arc-region-switch/command/ListPlanExecutionEventsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-region-switch/Interface/ListPlanExecutionEventsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-region-switch/Interface/ListPlanExecutionEventsCommandOutput/)
</details>
<details>
<summary>
ListPlanExecutions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/arc-region-switch/command/ListPlanExecutionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-region-switch/Interface/ListPlanExecutionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-region-switch/Interface/ListPlanExecutionsCommandOutput/)
</details>
<details>
<summary>
ListPlans
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/arc-region-switch/command/ListPlansCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-region-switch/Interface/ListPlansCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-region-switch/Interface/ListPlansCommandOutput/)
</details>
<details>
<summary>
ListPlansInRegion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/arc-region-switch/command/ListPlansInRegionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-region-switch/Interface/ListPlansInRegionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-region-switch/Interface/ListPlansInRegionCommandOutput/)
</details>
<details>
<summary>
ListRoute53HealthChecks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/arc-region-switch/command/ListRoute53HealthChecksCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-region-switch/Interface/ListRoute53HealthChecksCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-region-switch/Interface/ListRoute53HealthChecksCommandOutput/)
</details>
<details>
<summary>
ListRoute53HealthChecksInRegion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/arc-region-switch/command/ListRoute53HealthChecksInRegionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-region-switch/Interface/ListRoute53HealthChecksInRegionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-region-switch/Interface/ListRoute53HealthChecksInRegionCommandOutput/)
</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/arc-region-switch/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-region-switch/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-region-switch/Interface/ListTagsForResourceCommandOutput/)
</details>
<details>
<summary>
StartPlanExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/arc-region-switch/command/StartPlanExecutionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-region-switch/Interface/StartPlanExecutionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-region-switch/Interface/StartPlanExecutionCommandOutput/)
</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/arc-region-switch/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-region-switch/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-region-switch/Interface/TagResourceCommandOutput/)
</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/arc-region-switch/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-region-switch/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-region-switch/Interface/UntagResourceCommandOutput/)
</details>
<details>
<summary>
UpdatePlan
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/arc-region-switch/command/UpdatePlanCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-region-switch/Interface/UpdatePlanCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-region-switch/Interface/UpdatePlanCommandOutput/)
</details>
<details>
<summary>
UpdatePlanExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/arc-region-switch/command/UpdatePlanExecutionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-region-switch/Interface/UpdatePlanExecutionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-region-switch/Interface/UpdatePlanExecutionCommandOutput/)
</details>
<details>
<summary>
UpdatePlanExecutionStep
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/arc-region-switch/command/UpdatePlanExecutionStepCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-region-switch/Interface/UpdatePlanExecutionStepCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-arc-region-switch/Interface/UpdatePlanExecutionStepCommandOutput/)
</details>
