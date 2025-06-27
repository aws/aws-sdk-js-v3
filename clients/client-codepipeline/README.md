<!-- generated file, do not edit directly -->

# @aws-sdk/client-codepipeline

## Description

AWS SDK for JavaScript CodePipeline Client for Node.js, Browser and React Native.

<fullname>CodePipeline</fullname>

<p>
<b>Overview</b>
</p>
<p>This is the CodePipeline API Reference. This guide provides descriptions
of the actions and data types for CodePipeline. Some functionality for your
pipeline can only be configured through the API. For more information, see the <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html">CodePipeline User Guide</a>.</p>
<p>You can use the CodePipeline API to work with pipelines, stages, actions,
and transitions.</p>
<p>
<i>Pipelines</i> are models of automated release processes. Each pipeline
is uniquely named, and consists of stages, actions, and transitions. </p>
<p>You can work with pipelines by calling:</p>
<ul>
<li>
<p>
<a>CreatePipeline</a>, which creates a uniquely named
pipeline.</p>
</li>
<li>
<p>
<a>DeletePipeline</a>, which deletes the specified
pipeline.</p>
</li>
<li>
<p>
<a>GetPipeline</a>, which returns information about the pipeline
structure and pipeline metadata, including the pipeline Amazon Resource Name
(ARN).</p>
</li>
<li>
<p>
<a>GetPipelineExecution</a>, which returns information about a
specific execution of a pipeline.</p>
</li>
<li>
<p>
<a>GetPipelineState</a>, which returns information about the current
state of the stages and actions of a pipeline.</p>
</li>
<li>
<p>
<a>ListActionExecutions</a>, which returns action-level details
for past executions. The details include full stage and action-level details,
including individual action duration, status, any errors that occurred during
the execution, and input and output artifact location details.</p>
</li>
<li>
<p>
<a>ListPipelines</a>, which gets a summary of all of the pipelines
associated with your account.</p>
</li>
<li>
<p>
<a>ListPipelineExecutions</a>, which gets a summary of the most
recent executions for a pipeline.</p>
</li>
<li>
<p>
<a>StartPipelineExecution</a>, which runs the most recent revision of
an artifact through the pipeline.</p>
</li>
<li>
<p>
<a>StopPipelineExecution</a>, which stops the specified pipeline
execution from continuing through the pipeline.</p>
</li>
<li>
<p>
<a>UpdatePipeline</a>, which updates a pipeline with edits or changes
to the structure of the pipeline.</p>
</li>
</ul>
<p>Pipelines include <i>stages</i>. Each stage contains one or more
actions that must complete before the next stage begins. A stage results in success or
failure. If a stage fails, the pipeline stops at that stage and remains stopped until
either a new version of an artifact appears in the source location, or a user takes
action to rerun the most recent artifact through the pipeline. You can call <a>GetPipelineState</a>, which displays the status of a pipeline, including the
status of stages in the pipeline, or <a>GetPipeline</a>, which returns the
entire structure of the pipeline, including the stages of that pipeline. For more
information about the structure of stages and actions, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/pipeline-structure.html">CodePipeline
Pipeline Structure Reference</a>.</p>
<p>Pipeline stages include <i>actions</i> that are categorized into
categories such as source or build actions performed in a stage of a pipeline. For
example, you can use a source action to import artifacts into a pipeline from a source
such as Amazon S3. Like stages, you do not work with actions directly in most cases, but
you do define and interact with actions when working with pipeline operations such as
<a>CreatePipeline</a> and <a>GetPipelineState</a>. Valid
action categories are:</p>
<ul>
<li>
<p>Source</p>
</li>
<li>
<p>Build</p>
</li>
<li>
<p>Test</p>
</li>
<li>
<p>Deploy</p>
</li>
<li>
<p>Approval</p>
</li>
<li>
<p>Invoke</p>
</li>
<li>
<p>Compute</p>
</li>
</ul>
<p>Pipelines also include <i>transitions</i>, which allow the transition
of artifacts from one stage to the next in a pipeline after the actions in one stage
complete.</p>
<p>You can work with transitions by calling:</p>
<ul>
<li>
<p>
<a>DisableStageTransition</a>, which prevents artifacts from
transitioning to the next stage in a pipeline.</p>
</li>
<li>
<p>
<a>EnableStageTransition</a>, which enables transition of artifacts
between stages in a pipeline. </p>
</li>
</ul>
<p>
<b>Using the API to integrate with CodePipeline</b>
</p>
<p>For third-party integrators or developers who want to create their own integrations
with CodePipeline, the expected sequence varies from the standard API user. To
integrate with CodePipeline, developers need to work with the following
items:</p>
<p>
<b>Jobs</b>, which are instances of an action. For
example, a job for a source action might import a revision of an artifact from a source. </p>
<p>You can work with jobs by calling:</p>
<ul>
<li>
<p>
<a>AcknowledgeJob</a>, which confirms whether a job worker has
received the specified job.</p>
</li>
<li>
<p>
<a>GetJobDetails</a>, which returns the details of a job.</p>
</li>
<li>
<p>
<a>PollForJobs</a>, which determines whether there are any jobs to
act on.</p>
</li>
<li>
<p>
<a>PutJobFailureResult</a>, which provides details of a job failure.
</p>
</li>
<li>
<p>
<a>PutJobSuccessResult</a>, which provides details of a job
success.</p>
</li>
</ul>
<p>
<b>Third party jobs</b>, which are instances of an action
created by a partner action and integrated into CodePipeline. Partner actions are
created by members of the Amazon Web Services Partner Network.</p>
<p>You can work with third party jobs by calling:</p>
<ul>
<li>
<p>
<a>AcknowledgeThirdPartyJob</a>, which confirms whether a job worker
has received the specified job.</p>
</li>
<li>
<p>
<a>GetThirdPartyJobDetails</a>, which requests the details of a job
for a partner action.</p>
</li>
<li>
<p>
<a>PollForThirdPartyJobs</a>, which determines whether there are any
jobs to act on. </p>
</li>
<li>
<p>
<a>PutThirdPartyJobFailureResult</a>, which provides details of a job
failure.</p>
</li>
<li>
<p>
<a>PutThirdPartyJobSuccessResult</a>, which provides details of a job
success.</p>
</li>
</ul>

## Installing

To install this package, simply type add or install @aws-sdk/client-codepipeline
using your favorite package manager:

- `npm install @aws-sdk/client-codepipeline`
- `yarn add @aws-sdk/client-codepipeline`
- `pnpm add @aws-sdk/client-codepipeline`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `CodePipelineClient` and
the commands you need, for example `ListActionTypesCommand`:

```js
// ES5 example
const { CodePipelineClient, ListActionTypesCommand } = require("@aws-sdk/client-codepipeline");
```

```ts
// ES6+ example
import { CodePipelineClient, ListActionTypesCommand } from "@aws-sdk/client-codepipeline";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new CodePipelineClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListActionTypesCommand(params);
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
import * as AWS from "@aws-sdk/client-codepipeline";
const client = new AWS.CodePipeline({ region: "REGION" });

// async/await.
try {
  const data = await client.listActionTypes(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listActionTypes(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listActionTypes(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-codepipeline` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AcknowledgeJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codepipeline/command/AcknowledgeJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/AcknowledgeJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/AcknowledgeJobCommandOutput/)

</details>
<details>
<summary>
AcknowledgeThirdPartyJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codepipeline/command/AcknowledgeThirdPartyJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/AcknowledgeThirdPartyJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/AcknowledgeThirdPartyJobCommandOutput/)

</details>
<details>
<summary>
CreateCustomActionType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codepipeline/command/CreateCustomActionTypeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/CreateCustomActionTypeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/CreateCustomActionTypeCommandOutput/)

</details>
<details>
<summary>
CreatePipeline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codepipeline/command/CreatePipelineCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/CreatePipelineCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/CreatePipelineCommandOutput/)

</details>
<details>
<summary>
DeleteCustomActionType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codepipeline/command/DeleteCustomActionTypeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/DeleteCustomActionTypeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/DeleteCustomActionTypeCommandOutput/)

</details>
<details>
<summary>
DeletePipeline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codepipeline/command/DeletePipelineCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/DeletePipelineCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/DeletePipelineCommandOutput/)

</details>
<details>
<summary>
DeleteWebhook
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codepipeline/command/DeleteWebhookCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/DeleteWebhookCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/DeleteWebhookCommandOutput/)

</details>
<details>
<summary>
DeregisterWebhookWithThirdParty
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codepipeline/command/DeregisterWebhookWithThirdPartyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/DeregisterWebhookWithThirdPartyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/DeregisterWebhookWithThirdPartyCommandOutput/)

</details>
<details>
<summary>
DisableStageTransition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codepipeline/command/DisableStageTransitionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/DisableStageTransitionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/DisableStageTransitionCommandOutput/)

</details>
<details>
<summary>
EnableStageTransition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codepipeline/command/EnableStageTransitionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/EnableStageTransitionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/EnableStageTransitionCommandOutput/)

</details>
<details>
<summary>
GetActionType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codepipeline/command/GetActionTypeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/GetActionTypeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/GetActionTypeCommandOutput/)

</details>
<details>
<summary>
GetJobDetails
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codepipeline/command/GetJobDetailsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/GetJobDetailsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/GetJobDetailsCommandOutput/)

</details>
<details>
<summary>
GetPipeline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codepipeline/command/GetPipelineCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/GetPipelineCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/GetPipelineCommandOutput/)

</details>
<details>
<summary>
GetPipelineExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codepipeline/command/GetPipelineExecutionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/GetPipelineExecutionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/GetPipelineExecutionCommandOutput/)

</details>
<details>
<summary>
GetPipelineState
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codepipeline/command/GetPipelineStateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/GetPipelineStateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/GetPipelineStateCommandOutput/)

</details>
<details>
<summary>
GetThirdPartyJobDetails
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codepipeline/command/GetThirdPartyJobDetailsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/GetThirdPartyJobDetailsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/GetThirdPartyJobDetailsCommandOutput/)

</details>
<details>
<summary>
ListActionExecutions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codepipeline/command/ListActionExecutionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/ListActionExecutionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/ListActionExecutionsCommandOutput/)

</details>
<details>
<summary>
ListActionTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codepipeline/command/ListActionTypesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/ListActionTypesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/ListActionTypesCommandOutput/)

</details>
<details>
<summary>
ListDeployActionExecutionTargets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codepipeline/command/ListDeployActionExecutionTargetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/ListDeployActionExecutionTargetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/ListDeployActionExecutionTargetsCommandOutput/)

</details>
<details>
<summary>
ListPipelineExecutions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codepipeline/command/ListPipelineExecutionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/ListPipelineExecutionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/ListPipelineExecutionsCommandOutput/)

</details>
<details>
<summary>
ListPipelines
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codepipeline/command/ListPipelinesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/ListPipelinesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/ListPipelinesCommandOutput/)

</details>
<details>
<summary>
ListRuleExecutions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codepipeline/command/ListRuleExecutionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/ListRuleExecutionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/ListRuleExecutionsCommandOutput/)

</details>
<details>
<summary>
ListRuleTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codepipeline/command/ListRuleTypesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/ListRuleTypesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/ListRuleTypesCommandOutput/)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codepipeline/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/ListTagsForResourceCommandOutput/)

</details>
<details>
<summary>
ListWebhooks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codepipeline/command/ListWebhooksCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/ListWebhooksCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/ListWebhooksCommandOutput/)

</details>
<details>
<summary>
OverrideStageCondition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codepipeline/command/OverrideStageConditionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/OverrideStageConditionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/OverrideStageConditionCommandOutput/)

</details>
<details>
<summary>
PollForJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codepipeline/command/PollForJobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/PollForJobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/PollForJobsCommandOutput/)

</details>
<details>
<summary>
PollForThirdPartyJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codepipeline/command/PollForThirdPartyJobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/PollForThirdPartyJobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/PollForThirdPartyJobsCommandOutput/)

</details>
<details>
<summary>
PutActionRevision
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codepipeline/command/PutActionRevisionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/PutActionRevisionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/PutActionRevisionCommandOutput/)

</details>
<details>
<summary>
PutApprovalResult
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codepipeline/command/PutApprovalResultCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/PutApprovalResultCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/PutApprovalResultCommandOutput/)

</details>
<details>
<summary>
PutJobFailureResult
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codepipeline/command/PutJobFailureResultCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/PutJobFailureResultCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/PutJobFailureResultCommandOutput/)

</details>
<details>
<summary>
PutJobSuccessResult
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codepipeline/command/PutJobSuccessResultCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/PutJobSuccessResultCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/PutJobSuccessResultCommandOutput/)

</details>
<details>
<summary>
PutThirdPartyJobFailureResult
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codepipeline/command/PutThirdPartyJobFailureResultCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/PutThirdPartyJobFailureResultCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/PutThirdPartyJobFailureResultCommandOutput/)

</details>
<details>
<summary>
PutThirdPartyJobSuccessResult
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codepipeline/command/PutThirdPartyJobSuccessResultCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/PutThirdPartyJobSuccessResultCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/PutThirdPartyJobSuccessResultCommandOutput/)

</details>
<details>
<summary>
PutWebhook
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codepipeline/command/PutWebhookCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/PutWebhookCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/PutWebhookCommandOutput/)

</details>
<details>
<summary>
RegisterWebhookWithThirdParty
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codepipeline/command/RegisterWebhookWithThirdPartyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/RegisterWebhookWithThirdPartyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/RegisterWebhookWithThirdPartyCommandOutput/)

</details>
<details>
<summary>
RetryStageExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codepipeline/command/RetryStageExecutionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/RetryStageExecutionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/RetryStageExecutionCommandOutput/)

</details>
<details>
<summary>
RollbackStage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codepipeline/command/RollbackStageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/RollbackStageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/RollbackStageCommandOutput/)

</details>
<details>
<summary>
StartPipelineExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codepipeline/command/StartPipelineExecutionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/StartPipelineExecutionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/StartPipelineExecutionCommandOutput/)

</details>
<details>
<summary>
StopPipelineExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codepipeline/command/StopPipelineExecutionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/StopPipelineExecutionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/StopPipelineExecutionCommandOutput/)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codepipeline/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/TagResourceCommandOutput/)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codepipeline/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/UntagResourceCommandOutput/)

</details>
<details>
<summary>
UpdateActionType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codepipeline/command/UpdateActionTypeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/UpdateActionTypeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/UpdateActionTypeCommandOutput/)

</details>
<details>
<summary>
UpdatePipeline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codepipeline/command/UpdatePipelineCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/UpdatePipelineCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codepipeline/Interface/UpdatePipelineCommandOutput/)

</details>
