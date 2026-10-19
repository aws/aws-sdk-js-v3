<!-- generated file, do not edit directly -->

# @aws-sdk/client-sagemakertrainingsessionruntime

## Description

AWS SDK for JavaScript SageMakerTrainingSessionRuntime Client for Node.js, Browser and React Native.

<p>Amazon SageMaker Training Session Runtime provides APIs for executing training operations and sampling operations against a running training session. Use these APIs to submit asynchronous training steps (such as forward-backward passes, optimizer steps, and checkpoint saves) and to generate text samples from the model being trained.</p>

## Installing

To install this package, use the CLI of your favorite package manager:

- `npm install @aws-sdk/client-sagemakertrainingsessionruntime`
- `yarn add @aws-sdk/client-sagemakertrainingsessionruntime`
- `pnpm add @aws-sdk/client-sagemakertrainingsessionruntime`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `SageMakerTrainingSessionRuntimeClient` and
the commands you need, for example `GetSamplingOperationResultCommand`:

```js
// ES5 example
const { SageMakerTrainingSessionRuntimeClient, GetSamplingOperationResultCommand } = require("@aws-sdk/client-sagemakertrainingsessionruntime");
```

```ts
// ES6+ example
import { SageMakerTrainingSessionRuntimeClient, GetSamplingOperationResultCommand } from "@aws-sdk/client-sagemakertrainingsessionruntime";
```

### Usage

To send a request:

- Instantiate a client with configuration (e.g. credentials, region).
  - See [docs/CLIENTS](https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/CLIENTS.md) for configuration details.
  - See [@aws-sdk/config](https://github.com/aws/aws-sdk-js-v3/blob/main/packages/config/README.md) for additional options.
- Instantiate a command with input parameters.
- Call the `send` operation on the client, providing the command object as input.

```js
const client = new SageMakerTrainingSessionRuntimeClient({ region: "REGION" });

const params = { /** input parameters */ };
const command = new GetSamplingOperationResultCommand(params);
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

`SageMakerTrainingSessionRuntime` extends `SageMakerTrainingSessionRuntimeClient` and additionally supports all operations, waiters, and paginators as methods.
This style may be familiar to you from the AWS SDK for JavaScript v2.

If you are bundling the AWS SDK, we recommend using only the bare-bones client (`SageMakerTrainingSessionRuntimeClient`).
More details are in the blog post on
[modular packages in AWS SDK for JavaScript](https://aws.amazon.com/blogs/developer/modular-packages-in-aws-sdk-for-javascript/).

```ts
import { SageMakerTrainingSessionRuntime } from "@aws-sdk/client-sagemakertrainingsessionruntime";

const client = new SageMakerTrainingSessionRuntime({ region: "REGION" });

// async/await.
try {
  const data = await client.getSamplingOperationResult(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .getSamplingOperationResult(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks (not recommended).
client.getSamplingOperationResult(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-sagemakertrainingsessionruntime` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
ExecuteSamplingOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sagemakertrainingsessionruntime/command/ExecuteSamplingOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sagemakertrainingsessionruntime/Interface/ExecuteSamplingOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sagemakertrainingsessionruntime/Interface/ExecuteSamplingOperationCommandOutput/)
</details>
<details>
<summary>
ExecuteTrainingOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sagemakertrainingsessionruntime/command/ExecuteTrainingOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sagemakertrainingsessionruntime/Interface/ExecuteTrainingOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sagemakertrainingsessionruntime/Interface/ExecuteTrainingOperationCommandOutput/)
</details>
<details>
<summary>
GetSamplingOperationResult
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sagemakertrainingsessionruntime/command/GetSamplingOperationResultCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sagemakertrainingsessionruntime/Interface/GetSamplingOperationResultCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sagemakertrainingsessionruntime/Interface/GetSamplingOperationResultCommandOutput/)
</details>
<details>
<summary>
GetTrainingOperationResult
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sagemakertrainingsessionruntime/command/GetTrainingOperationResultCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sagemakertrainingsessionruntime/Interface/GetTrainingOperationResultCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sagemakertrainingsessionruntime/Interface/GetTrainingOperationResultCommandOutput/)
</details>
<details>
<summary>
SampleTrainingSession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sagemakertrainingsessionruntime/command/SampleTrainingSessionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sagemakertrainingsessionruntime/Interface/SampleTrainingSessionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sagemakertrainingsessionruntime/Interface/SampleTrainingSessionCommandOutput/)
</details>
<details>
<summary>
SampleTrainingSessionWithResponseStream
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/sagemakertrainingsessionruntime/command/SampleTrainingSessionWithResponseStreamCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sagemakertrainingsessionruntime/Interface/SampleTrainingSessionWithResponseStreamCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-sagemakertrainingsessionruntime/Interface/SampleTrainingSessionWithResponseStreamCommandOutput/)
</details>
