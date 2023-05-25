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

To install the this package, simply type add or install @aws-sdk/client-codepipeline
using your favorite package manager:

- `npm install @aws-sdk/client-codepipeline`
- `yarn add @aws-sdk/client-codepipeline`
- `pnpm add @aws-sdk/client-codepipeline`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `CodePipelineClient` and
the commands you need, for example `AcknowledgeJobCommand`:

```js
// ES5 example
const { CodePipelineClient, AcknowledgeJobCommand } = require("@aws-sdk/client-codepipeline");
```

```ts
// ES6+ example
import { CodePipelineClient, AcknowledgeJobCommand } from "@aws-sdk/client-codepipeline";
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
const command = new AcknowledgeJobCommand(params);
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
  const data = await client.acknowledgeJob(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .acknowledgeJob(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.acknowledgeJob(params, (err, data) => {
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/classes/acknowledgejobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/acknowledgejobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/acknowledgejobcommandoutput.html)

</details>
<details>
<summary>
AcknowledgeThirdPartyJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/classes/acknowledgethirdpartyjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/acknowledgethirdpartyjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/acknowledgethirdpartyjobcommandoutput.html)

</details>
<details>
<summary>
CreateCustomActionType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/classes/createcustomactiontypecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/createcustomactiontypecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/createcustomactiontypecommandoutput.html)

</details>
<details>
<summary>
CreatePipeline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/classes/createpipelinecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/createpipelinecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/createpipelinecommandoutput.html)

</details>
<details>
<summary>
DeleteCustomActionType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/classes/deletecustomactiontypecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/deletecustomactiontypecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/deletecustomactiontypecommandoutput.html)

</details>
<details>
<summary>
DeletePipeline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/classes/deletepipelinecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/deletepipelinecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/deletepipelinecommandoutput.html)

</details>
<details>
<summary>
DeleteWebhook
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/classes/deletewebhookcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/deletewebhookcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/deletewebhookcommandoutput.html)

</details>
<details>
<summary>
DeregisterWebhookWithThirdParty
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/classes/deregisterwebhookwiththirdpartycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/deregisterwebhookwiththirdpartycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/deregisterwebhookwiththirdpartycommandoutput.html)

</details>
<details>
<summary>
DisableStageTransition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/classes/disablestagetransitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/disablestagetransitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/disablestagetransitioncommandoutput.html)

</details>
<details>
<summary>
EnableStageTransition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/classes/enablestagetransitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/enablestagetransitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/enablestagetransitioncommandoutput.html)

</details>
<details>
<summary>
GetActionType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/classes/getactiontypecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/getactiontypecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/getactiontypecommandoutput.html)

</details>
<details>
<summary>
GetJobDetails
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/classes/getjobdetailscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/getjobdetailscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/getjobdetailscommandoutput.html)

</details>
<details>
<summary>
GetPipeline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/classes/getpipelinecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/getpipelinecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/getpipelinecommandoutput.html)

</details>
<details>
<summary>
GetPipelineExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/classes/getpipelineexecutioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/getpipelineexecutioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/getpipelineexecutioncommandoutput.html)

</details>
<details>
<summary>
GetPipelineState
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/classes/getpipelinestatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/getpipelinestatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/getpipelinestatecommandoutput.html)

</details>
<details>
<summary>
GetThirdPartyJobDetails
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/classes/getthirdpartyjobdetailscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/getthirdpartyjobdetailscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/getthirdpartyjobdetailscommandoutput.html)

</details>
<details>
<summary>
ListActionExecutions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/classes/listactionexecutionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/listactionexecutionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/listactionexecutionscommandoutput.html)

</details>
<details>
<summary>
ListActionTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/classes/listactiontypescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/listactiontypescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/listactiontypescommandoutput.html)

</details>
<details>
<summary>
ListPipelineExecutions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/classes/listpipelineexecutionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/listpipelineexecutionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/listpipelineexecutionscommandoutput.html)

</details>
<details>
<summary>
ListPipelines
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/classes/listpipelinescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/listpipelinescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/listpipelinescommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
ListWebhooks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/classes/listwebhookscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/listwebhookscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/listwebhookscommandoutput.html)

</details>
<details>
<summary>
PollForJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/classes/pollforjobscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/pollforjobscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/pollforjobscommandoutput.html)

</details>
<details>
<summary>
PollForThirdPartyJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/classes/pollforthirdpartyjobscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/pollforthirdpartyjobscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/pollforthirdpartyjobscommandoutput.html)

</details>
<details>
<summary>
PutActionRevision
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/classes/putactionrevisioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/putactionrevisioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/putactionrevisioncommandoutput.html)

</details>
<details>
<summary>
PutApprovalResult
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/classes/putapprovalresultcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/putapprovalresultcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/putapprovalresultcommandoutput.html)

</details>
<details>
<summary>
PutJobFailureResult
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/classes/putjobfailureresultcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/putjobfailureresultcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/putjobfailureresultcommandoutput.html)

</details>
<details>
<summary>
PutJobSuccessResult
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/classes/putjobsuccessresultcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/putjobsuccessresultcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/putjobsuccessresultcommandoutput.html)

</details>
<details>
<summary>
PutThirdPartyJobFailureResult
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/classes/putthirdpartyjobfailureresultcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/putthirdpartyjobfailureresultcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/putthirdpartyjobfailureresultcommandoutput.html)

</details>
<details>
<summary>
PutThirdPartyJobSuccessResult
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/classes/putthirdpartyjobsuccessresultcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/putthirdpartyjobsuccessresultcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/putthirdpartyjobsuccessresultcommandoutput.html)

</details>
<details>
<summary>
PutWebhook
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/classes/putwebhookcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/putwebhookcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/putwebhookcommandoutput.html)

</details>
<details>
<summary>
RegisterWebhookWithThirdParty
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/classes/registerwebhookwiththirdpartycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/registerwebhookwiththirdpartycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/registerwebhookwiththirdpartycommandoutput.html)

</details>
<details>
<summary>
RetryStageExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/classes/retrystageexecutioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/retrystageexecutioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/retrystageexecutioncommandoutput.html)

</details>
<details>
<summary>
StartPipelineExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/classes/startpipelineexecutioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/startpipelineexecutioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/startpipelineexecutioncommandoutput.html)

</details>
<details>
<summary>
StopPipelineExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/classes/stoppipelineexecutioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/stoppipelineexecutioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/stoppipelineexecutioncommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateActionType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/classes/updateactiontypecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/updateactiontypecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/updateactiontypecommandoutput.html)

</details>
<details>
<summary>
UpdatePipeline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/classes/updatepipelinecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/updatepipelinecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codepipeline/interfaces/updatepipelinecommandoutput.html)

</details>
