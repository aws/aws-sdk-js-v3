<!-- generated file, do not edit directly -->

# @aws-sdk/client-swf

## Description

AWS SDK for JavaScript SWF Client for Node.js, Browser and React Native.

<fullname>Amazon Simple Workflow Service</fullname>
<p>The Amazon Simple Workflow Service (Amazon SWF) makes it easy to build applications that use Amazon's cloud to
coordinate work across distributed components. In Amazon SWF, a <i>task</i>
represents a logical unit of work that is performed by a component of your workflow.
Coordinating tasks in a workflow involves managing intertask dependencies, scheduling, and
concurrency in accordance with the logical flow of the application.</p>
<p>Amazon SWF gives you full control over implementing tasks and coordinating them without
worrying about underlying complexities such as tracking their progress and maintaining their
state.</p>
<p>This documentation serves as reference only. For a broader overview of the Amazon SWF
programming model, see the <i>
<a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/">Amazon SWF Developer Guide</a>
</i>.</p>

## Installing
To install this package, simply type add or install @aws-sdk/client-swf
using your favorite package manager:
- `npm install @aws-sdk/client-swf`
- `yarn add @aws-sdk/client-swf`
- `pnpm add @aws-sdk/client-swf`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `SWFClient` and
the commands you need, for example `ListDomainsCommand`:

```js
// ES5 example
const { SWFClient, ListDomainsCommand } = require("@aws-sdk/client-swf");
```

```ts
// ES6+ example
import { SWFClient, ListDomainsCommand } from "@aws-sdk/client-swf";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new SWFClient({ region: "REGION" });

const params = { /** input parameters */ };
const command = new ListDomainsCommand(params);
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
import * as AWS from "@aws-sdk/client-swf";
const client = new AWS.SWF({ region: "REGION" });

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

// callbacks.
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-swf` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CountClosedWorkflowExecutions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/swf/command/CountClosedWorkflowExecutionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/CountClosedWorkflowExecutionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/CountClosedWorkflowExecutionsCommandOutput/)
</details>
<details>
<summary>
CountOpenWorkflowExecutions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/swf/command/CountOpenWorkflowExecutionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/CountOpenWorkflowExecutionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/CountOpenWorkflowExecutionsCommandOutput/)
</details>
<details>
<summary>
CountPendingActivityTasks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/swf/command/CountPendingActivityTasksCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/CountPendingActivityTasksCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/CountPendingActivityTasksCommandOutput/)
</details>
<details>
<summary>
CountPendingDecisionTasks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/swf/command/CountPendingDecisionTasksCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/CountPendingDecisionTasksCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/CountPendingDecisionTasksCommandOutput/)
</details>
<details>
<summary>
DeleteActivityType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/swf/command/DeleteActivityTypeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/DeleteActivityTypeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/DeleteActivityTypeCommandOutput/)
</details>
<details>
<summary>
DeleteWorkflowType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/swf/command/DeleteWorkflowTypeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/DeleteWorkflowTypeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/DeleteWorkflowTypeCommandOutput/)
</details>
<details>
<summary>
DeprecateActivityType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/swf/command/DeprecateActivityTypeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/DeprecateActivityTypeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/DeprecateActivityTypeCommandOutput/)
</details>
<details>
<summary>
DeprecateDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/swf/command/DeprecateDomainCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/DeprecateDomainCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/DeprecateDomainCommandOutput/)
</details>
<details>
<summary>
DeprecateWorkflowType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/swf/command/DeprecateWorkflowTypeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/DeprecateWorkflowTypeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/DeprecateWorkflowTypeCommandOutput/)
</details>
<details>
<summary>
DescribeActivityType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/swf/command/DescribeActivityTypeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/DescribeActivityTypeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/DescribeActivityTypeCommandOutput/)
</details>
<details>
<summary>
DescribeDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/swf/command/DescribeDomainCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/DescribeDomainCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/DescribeDomainCommandOutput/)
</details>
<details>
<summary>
DescribeWorkflowExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/swf/command/DescribeWorkflowExecutionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/DescribeWorkflowExecutionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/DescribeWorkflowExecutionCommandOutput/)
</details>
<details>
<summary>
DescribeWorkflowType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/swf/command/DescribeWorkflowTypeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/DescribeWorkflowTypeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/DescribeWorkflowTypeCommandOutput/)
</details>
<details>
<summary>
GetWorkflowExecutionHistory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/swf/command/GetWorkflowExecutionHistoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/GetWorkflowExecutionHistoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/GetWorkflowExecutionHistoryCommandOutput/)
</details>
<details>
<summary>
ListActivityTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/swf/command/ListActivityTypesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/ListActivityTypesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/ListActivityTypesCommandOutput/)
</details>
<details>
<summary>
ListClosedWorkflowExecutions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/swf/command/ListClosedWorkflowExecutionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/ListClosedWorkflowExecutionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/ListClosedWorkflowExecutionsCommandOutput/)
</details>
<details>
<summary>
ListDomains
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/swf/command/ListDomainsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/ListDomainsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/ListDomainsCommandOutput/)
</details>
<details>
<summary>
ListOpenWorkflowExecutions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/swf/command/ListOpenWorkflowExecutionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/ListOpenWorkflowExecutionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/ListOpenWorkflowExecutionsCommandOutput/)
</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/swf/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/ListTagsForResourceCommandOutput/)
</details>
<details>
<summary>
ListWorkflowTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/swf/command/ListWorkflowTypesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/ListWorkflowTypesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/ListWorkflowTypesCommandOutput/)
</details>
<details>
<summary>
PollForActivityTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/swf/command/PollForActivityTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/PollForActivityTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/PollForActivityTaskCommandOutput/)
</details>
<details>
<summary>
PollForDecisionTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/swf/command/PollForDecisionTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/PollForDecisionTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/PollForDecisionTaskCommandOutput/)
</details>
<details>
<summary>
RecordActivityTaskHeartbeat
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/swf/command/RecordActivityTaskHeartbeatCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/RecordActivityTaskHeartbeatCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/RecordActivityTaskHeartbeatCommandOutput/)
</details>
<details>
<summary>
RegisterActivityType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/swf/command/RegisterActivityTypeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/RegisterActivityTypeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/RegisterActivityTypeCommandOutput/)
</details>
<details>
<summary>
RegisterDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/swf/command/RegisterDomainCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/RegisterDomainCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/RegisterDomainCommandOutput/)
</details>
<details>
<summary>
RegisterWorkflowType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/swf/command/RegisterWorkflowTypeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/RegisterWorkflowTypeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/RegisterWorkflowTypeCommandOutput/)
</details>
<details>
<summary>
RequestCancelWorkflowExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/swf/command/RequestCancelWorkflowExecutionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/RequestCancelWorkflowExecutionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/RequestCancelWorkflowExecutionCommandOutput/)
</details>
<details>
<summary>
RespondActivityTaskCanceled
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/swf/command/RespondActivityTaskCanceledCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/RespondActivityTaskCanceledCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/RespondActivityTaskCanceledCommandOutput/)
</details>
<details>
<summary>
RespondActivityTaskCompleted
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/swf/command/RespondActivityTaskCompletedCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/RespondActivityTaskCompletedCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/RespondActivityTaskCompletedCommandOutput/)
</details>
<details>
<summary>
RespondActivityTaskFailed
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/swf/command/RespondActivityTaskFailedCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/RespondActivityTaskFailedCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/RespondActivityTaskFailedCommandOutput/)
</details>
<details>
<summary>
RespondDecisionTaskCompleted
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/swf/command/RespondDecisionTaskCompletedCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/RespondDecisionTaskCompletedCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/RespondDecisionTaskCompletedCommandOutput/)
</details>
<details>
<summary>
SignalWorkflowExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/swf/command/SignalWorkflowExecutionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/SignalWorkflowExecutionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/SignalWorkflowExecutionCommandOutput/)
</details>
<details>
<summary>
StartWorkflowExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/swf/command/StartWorkflowExecutionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/StartWorkflowExecutionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/StartWorkflowExecutionCommandOutput/)
</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/swf/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/TagResourceCommandOutput/)
</details>
<details>
<summary>
TerminateWorkflowExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/swf/command/TerminateWorkflowExecutionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/TerminateWorkflowExecutionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/TerminateWorkflowExecutionCommandOutput/)
</details>
<details>
<summary>
UndeprecateActivityType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/swf/command/UndeprecateActivityTypeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/UndeprecateActivityTypeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/UndeprecateActivityTypeCommandOutput/)
</details>
<details>
<summary>
UndeprecateDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/swf/command/UndeprecateDomainCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/UndeprecateDomainCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/UndeprecateDomainCommandOutput/)
</details>
<details>
<summary>
UndeprecateWorkflowType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/swf/command/UndeprecateWorkflowTypeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/UndeprecateWorkflowTypeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/UndeprecateWorkflowTypeCommandOutput/)
</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/swf/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-swf/Interface/UntagResourceCommandOutput/)
</details>
