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

To install the this package, simply type add or install @aws-sdk/client-swf
using your favorite package manager:

- `npm install @aws-sdk/client-swf`
- `yarn add @aws-sdk/client-swf`
- `pnpm add @aws-sdk/client-swf`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `SWFClient` and
the commands you need, for example `CountClosedWorkflowExecutionsCommand`:

```js
// ES5 example
const { SWFClient, CountClosedWorkflowExecutionsCommand } = require("@aws-sdk/client-swf");
```

```ts
// ES6+ example
import { SWFClient, CountClosedWorkflowExecutionsCommand } from "@aws-sdk/client-swf";
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

const params = {
  /** input parameters */
};
const command = new CountClosedWorkflowExecutionsCommand(params);
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
  const data = await client.countClosedWorkflowExecutions(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .countClosedWorkflowExecutions(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.countClosedWorkflowExecutions(params, (err, data) => {
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/classes/countclosedworkflowexecutionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/countclosedworkflowexecutionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/countclosedworkflowexecutionscommandoutput.html)

</details>
<details>
<summary>
CountOpenWorkflowExecutions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/classes/countopenworkflowexecutionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/countopenworkflowexecutionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/countopenworkflowexecutionscommandoutput.html)

</details>
<details>
<summary>
CountPendingActivityTasks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/classes/countpendingactivitytaskscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/countpendingactivitytaskscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/countpendingactivitytaskscommandoutput.html)

</details>
<details>
<summary>
CountPendingDecisionTasks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/classes/countpendingdecisiontaskscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/countpendingdecisiontaskscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/countpendingdecisiontaskscommandoutput.html)

</details>
<details>
<summary>
DeprecateActivityType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/classes/deprecateactivitytypecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/deprecateactivitytypecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/deprecateactivitytypecommandoutput.html)

</details>
<details>
<summary>
DeprecateDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/classes/deprecatedomaincommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/deprecatedomaincommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/deprecatedomaincommandoutput.html)

</details>
<details>
<summary>
DeprecateWorkflowType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/classes/deprecateworkflowtypecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/deprecateworkflowtypecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/deprecateworkflowtypecommandoutput.html)

</details>
<details>
<summary>
DescribeActivityType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/classes/describeactivitytypecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/describeactivitytypecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/describeactivitytypecommandoutput.html)

</details>
<details>
<summary>
DescribeDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/classes/describedomaincommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/describedomaincommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/describedomaincommandoutput.html)

</details>
<details>
<summary>
DescribeWorkflowExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/classes/describeworkflowexecutioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/describeworkflowexecutioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/describeworkflowexecutioncommandoutput.html)

</details>
<details>
<summary>
DescribeWorkflowType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/classes/describeworkflowtypecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/describeworkflowtypecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/describeworkflowtypecommandoutput.html)

</details>
<details>
<summary>
GetWorkflowExecutionHistory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/classes/getworkflowexecutionhistorycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/getworkflowexecutionhistorycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/getworkflowexecutionhistorycommandoutput.html)

</details>
<details>
<summary>
ListActivityTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/classes/listactivitytypescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/listactivitytypescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/listactivitytypescommandoutput.html)

</details>
<details>
<summary>
ListClosedWorkflowExecutions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/classes/listclosedworkflowexecutionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/listclosedworkflowexecutionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/listclosedworkflowexecutionscommandoutput.html)

</details>
<details>
<summary>
ListDomains
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/classes/listdomainscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/listdomainscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/listdomainscommandoutput.html)

</details>
<details>
<summary>
ListOpenWorkflowExecutions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/classes/listopenworkflowexecutionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/listopenworkflowexecutionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/listopenworkflowexecutionscommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
ListWorkflowTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/classes/listworkflowtypescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/listworkflowtypescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/listworkflowtypescommandoutput.html)

</details>
<details>
<summary>
PollForActivityTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/classes/pollforactivitytaskcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/pollforactivitytaskcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/pollforactivitytaskcommandoutput.html)

</details>
<details>
<summary>
PollForDecisionTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/classes/pollfordecisiontaskcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/pollfordecisiontaskcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/pollfordecisiontaskcommandoutput.html)

</details>
<details>
<summary>
RecordActivityTaskHeartbeat
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/classes/recordactivitytaskheartbeatcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/recordactivitytaskheartbeatcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/recordactivitytaskheartbeatcommandoutput.html)

</details>
<details>
<summary>
RegisterActivityType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/classes/registeractivitytypecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/registeractivitytypecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/registeractivitytypecommandoutput.html)

</details>
<details>
<summary>
RegisterDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/classes/registerdomaincommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/registerdomaincommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/registerdomaincommandoutput.html)

</details>
<details>
<summary>
RegisterWorkflowType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/classes/registerworkflowtypecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/registerworkflowtypecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/registerworkflowtypecommandoutput.html)

</details>
<details>
<summary>
RequestCancelWorkflowExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/classes/requestcancelworkflowexecutioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/requestcancelworkflowexecutioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/requestcancelworkflowexecutioncommandoutput.html)

</details>
<details>
<summary>
RespondActivityTaskCanceled
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/classes/respondactivitytaskcanceledcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/respondactivitytaskcanceledcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/respondactivitytaskcanceledcommandoutput.html)

</details>
<details>
<summary>
RespondActivityTaskCompleted
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/classes/respondactivitytaskcompletedcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/respondactivitytaskcompletedcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/respondactivitytaskcompletedcommandoutput.html)

</details>
<details>
<summary>
RespondActivityTaskFailed
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/classes/respondactivitytaskfailedcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/respondactivitytaskfailedcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/respondactivitytaskfailedcommandoutput.html)

</details>
<details>
<summary>
RespondDecisionTaskCompleted
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/classes/responddecisiontaskcompletedcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/responddecisiontaskcompletedcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/responddecisiontaskcompletedcommandoutput.html)

</details>
<details>
<summary>
SignalWorkflowExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/classes/signalworkflowexecutioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/signalworkflowexecutioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/signalworkflowexecutioncommandoutput.html)

</details>
<details>
<summary>
StartWorkflowExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/classes/startworkflowexecutioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/startworkflowexecutioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/startworkflowexecutioncommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
TerminateWorkflowExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/classes/terminateworkflowexecutioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/terminateworkflowexecutioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/terminateworkflowexecutioncommandoutput.html)

</details>
<details>
<summary>
UndeprecateActivityType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/classes/undeprecateactivitytypecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/undeprecateactivitytypecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/undeprecateactivitytypecommandoutput.html)

</details>
<details>
<summary>
UndeprecateDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/classes/undeprecatedomaincommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/undeprecatedomaincommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/undeprecatedomaincommandoutput.html)

</details>
<details>
<summary>
UndeprecateWorkflowType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/classes/undeprecateworkflowtypecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/undeprecateworkflowtypecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/undeprecateworkflowtypecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-swf/interfaces/untagresourcecommandoutput.html)

</details>
