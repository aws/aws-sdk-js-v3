<!-- generated file, do not edit directly -->

# @aws-sdk/client-data-pipeline

## Description

AWS SDK for JavaScript DataPipeline Client for Node.js, Browser and React Native.

<p>AWS Data Pipeline configures and manages a data-driven workflow called a pipeline. AWS Data Pipeline
handles the details of scheduling and ensuring that data dependencies are met so that your application
can focus on processing the data.</p>

<p>AWS Data Pipeline provides a JAR implementation of a task runner called AWS Data Pipeline Task Runner.
AWS Data Pipeline Task Runner provides logic for common data management scenarios, such as performing
database queries and running data analysis using Amazon Elastic MapReduce (Amazon EMR). You can use
AWS Data Pipeline Task Runner as your task runner, or you can write your own task runner to provide
custom data management.</p>

<p>AWS Data Pipeline implements two main sets of functionality. Use the first set to create a pipeline
and define data sources, schedules, dependencies, and the transforms to be performed on the data.
Use the second set in your task runner application to receive the next task ready for processing.
The logic for performing the task, such as querying the data, running data analysis, or converting
the data from one format to another, is contained within the task runner. The task runner performs
the task assigned to it by the web service, reporting progress to the web service as it does so.
When the task is done, the task runner reports the final success or failure of the task to the web service.</p>

## Installing

To install this package, use the CLI of your favorite package manager:

- `npm install @aws-sdk/client-data-pipeline`
- `yarn add @aws-sdk/client-data-pipeline`
- `pnpm add @aws-sdk/client-data-pipeline`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `DataPipelineClient` and
the commands you need, for example `ListPipelinesCommand`:

```js
// ES5 example
const { DataPipelineClient, ListPipelinesCommand } = require("@aws-sdk/client-data-pipeline");
```

```ts
// ES6+ example
import { DataPipelineClient, ListPipelinesCommand } from "@aws-sdk/client-data-pipeline";
```

### Usage

To send a request:

- Instantiate a client with configuration (e.g. credentials, region).
  - See [docs/CLIENTS](https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/CLIENTS.md) for configuration details.
  - See [@aws-sdk/config](https://github.com/aws/aws-sdk-js-v3/blob/main/packages/config/README.md) for additional options.
- Instantiate a command with input parameters.
- Call the `send` operation on the client, providing the command object as input.

```js
const client = new DataPipelineClient({ region: "REGION" });

const params = { /** input parameters */ };
const command = new ListPipelinesCommand(params);
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

`DataPipeline` extends `DataPipelineClient` and additionally supports all operations, waiters, and paginators as methods.
This style may be familiar to you from the AWS SDK for JavaScript v2.

If you are bundling the AWS SDK, we recommend using only the bare-bones client (`DataPipelineClient`).
More details are in the blog post on
[modular packages in AWS SDK for JavaScript](https://aws.amazon.com/blogs/developer/modular-packages-in-aws-sdk-for-javascript/).

```ts
import { DataPipeline } from "@aws-sdk/client-data-pipeline";

const client = new DataPipeline({ region: "REGION" });

// async/await.
try {
  const data = await client.listPipelines(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listPipelines(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks (not recommended).
client.listPipelines(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-data-pipeline` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
ActivatePipeline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/data-pipeline/command/ActivatePipelineCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-data-pipeline/Interface/ActivatePipelineCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-data-pipeline/Interface/ActivatePipelineCommandOutput/)
</details>
<details>
<summary>
AddTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/data-pipeline/command/AddTagsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-data-pipeline/Interface/AddTagsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-data-pipeline/Interface/AddTagsCommandOutput/)
</details>
<details>
<summary>
CreatePipeline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/data-pipeline/command/CreatePipelineCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-data-pipeline/Interface/CreatePipelineCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-data-pipeline/Interface/CreatePipelineCommandOutput/)
</details>
<details>
<summary>
DeactivatePipeline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/data-pipeline/command/DeactivatePipelineCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-data-pipeline/Interface/DeactivatePipelineCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-data-pipeline/Interface/DeactivatePipelineCommandOutput/)
</details>
<details>
<summary>
DeletePipeline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/data-pipeline/command/DeletePipelineCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-data-pipeline/Interface/DeletePipelineCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-data-pipeline/Interface/DeletePipelineCommandOutput/)
</details>
<details>
<summary>
DescribeObjects
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/data-pipeline/command/DescribeObjectsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-data-pipeline/Interface/DescribeObjectsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-data-pipeline/Interface/DescribeObjectsCommandOutput/)
</details>
<details>
<summary>
DescribePipelines
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/data-pipeline/command/DescribePipelinesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-data-pipeline/Interface/DescribePipelinesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-data-pipeline/Interface/DescribePipelinesCommandOutput/)
</details>
<details>
<summary>
EvaluateExpression
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/data-pipeline/command/EvaluateExpressionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-data-pipeline/Interface/EvaluateExpressionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-data-pipeline/Interface/EvaluateExpressionCommandOutput/)
</details>
<details>
<summary>
GetPipelineDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/data-pipeline/command/GetPipelineDefinitionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-data-pipeline/Interface/GetPipelineDefinitionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-data-pipeline/Interface/GetPipelineDefinitionCommandOutput/)
</details>
<details>
<summary>
ListPipelines
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/data-pipeline/command/ListPipelinesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-data-pipeline/Interface/ListPipelinesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-data-pipeline/Interface/ListPipelinesCommandOutput/)
</details>
<details>
<summary>
PollForTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/data-pipeline/command/PollForTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-data-pipeline/Interface/PollForTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-data-pipeline/Interface/PollForTaskCommandOutput/)
</details>
<details>
<summary>
PutPipelineDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/data-pipeline/command/PutPipelineDefinitionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-data-pipeline/Interface/PutPipelineDefinitionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-data-pipeline/Interface/PutPipelineDefinitionCommandOutput/)
</details>
<details>
<summary>
QueryObjects
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/data-pipeline/command/QueryObjectsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-data-pipeline/Interface/QueryObjectsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-data-pipeline/Interface/QueryObjectsCommandOutput/)
</details>
<details>
<summary>
RemoveTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/data-pipeline/command/RemoveTagsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-data-pipeline/Interface/RemoveTagsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-data-pipeline/Interface/RemoveTagsCommandOutput/)
</details>
<details>
<summary>
ReportTaskProgress
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/data-pipeline/command/ReportTaskProgressCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-data-pipeline/Interface/ReportTaskProgressCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-data-pipeline/Interface/ReportTaskProgressCommandOutput/)
</details>
<details>
<summary>
ReportTaskRunnerHeartbeat
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/data-pipeline/command/ReportTaskRunnerHeartbeatCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-data-pipeline/Interface/ReportTaskRunnerHeartbeatCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-data-pipeline/Interface/ReportTaskRunnerHeartbeatCommandOutput/)
</details>
<details>
<summary>
SetStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/data-pipeline/command/SetStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-data-pipeline/Interface/SetStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-data-pipeline/Interface/SetStatusCommandOutput/)
</details>
<details>
<summary>
SetTaskStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/data-pipeline/command/SetTaskStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-data-pipeline/Interface/SetTaskStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-data-pipeline/Interface/SetTaskStatusCommandOutput/)
</details>
<details>
<summary>
ValidatePipelineDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/data-pipeline/command/ValidatePipelineDefinitionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-data-pipeline/Interface/ValidatePipelineDefinitionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-data-pipeline/Interface/ValidatePipelineDefinitionCommandOutput/)
</details>
