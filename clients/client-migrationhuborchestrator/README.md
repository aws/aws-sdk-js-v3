<!-- generated file, do not edit directly -->

# @aws-sdk/client-migrationhuborchestrator

## Description

AWS SDK for JavaScript MigrationHubOrchestrator Client for Node.js, Browser and React Native.

<p>This API reference provides descriptions, syntax, and other details about each of the
actions and data types for AWS Migration Hub Orchestrator. he topic for each action shows the API
request parameters and the response. Alternatively, you can use one of the AWS SDKs to
access an API that is tailored to the programming language or platform that you're
using.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-migrationhuborchestrator
using your favorite package manager:

- `npm install @aws-sdk/client-migrationhuborchestrator`
- `yarn add @aws-sdk/client-migrationhuborchestrator`
- `pnpm add @aws-sdk/client-migrationhuborchestrator`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `MigrationHubOrchestratorClient` and
the commands you need, for example `CreateWorkflowCommand`:

```js
// ES5 example
const { MigrationHubOrchestratorClient, CreateWorkflowCommand } = require("@aws-sdk/client-migrationhuborchestrator");
```

```ts
// ES6+ example
import { MigrationHubOrchestratorClient, CreateWorkflowCommand } from "@aws-sdk/client-migrationhuborchestrator";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new MigrationHubOrchestratorClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new CreateWorkflowCommand(params);
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
import * as AWS from "@aws-sdk/client-migrationhuborchestrator";
const client = new AWS.MigrationHubOrchestrator({ region: "REGION" });

// async/await.
try {
  const data = await client.createWorkflow(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .createWorkflow(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.createWorkflow(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-migrationhuborchestrator` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CreateWorkflow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/classes/createworkflowcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/interfaces/createworkflowcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/interfaces/createworkflowcommandoutput.html)

</details>
<details>
<summary>
CreateWorkflowStep
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/classes/createworkflowstepcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/interfaces/createworkflowstepcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/interfaces/createworkflowstepcommandoutput.html)

</details>
<details>
<summary>
CreateWorkflowStepGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/classes/createworkflowstepgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/interfaces/createworkflowstepgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/interfaces/createworkflowstepgroupcommandoutput.html)

</details>
<details>
<summary>
DeleteWorkflow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/classes/deleteworkflowcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/interfaces/deleteworkflowcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/interfaces/deleteworkflowcommandoutput.html)

</details>
<details>
<summary>
DeleteWorkflowStep
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/classes/deleteworkflowstepcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/interfaces/deleteworkflowstepcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/interfaces/deleteworkflowstepcommandoutput.html)

</details>
<details>
<summary>
DeleteWorkflowStepGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/classes/deleteworkflowstepgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/interfaces/deleteworkflowstepgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/interfaces/deleteworkflowstepgroupcommandoutput.html)

</details>
<details>
<summary>
GetTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/classes/gettemplatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/interfaces/gettemplatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/interfaces/gettemplatecommandoutput.html)

</details>
<details>
<summary>
GetTemplateStep
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/classes/gettemplatestepcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/interfaces/gettemplatestepcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/interfaces/gettemplatestepcommandoutput.html)

</details>
<details>
<summary>
GetTemplateStepGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/classes/gettemplatestepgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/interfaces/gettemplatestepgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/interfaces/gettemplatestepgroupcommandoutput.html)

</details>
<details>
<summary>
GetWorkflow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/classes/getworkflowcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/interfaces/getworkflowcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/interfaces/getworkflowcommandoutput.html)

</details>
<details>
<summary>
GetWorkflowStep
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/classes/getworkflowstepcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/interfaces/getworkflowstepcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/interfaces/getworkflowstepcommandoutput.html)

</details>
<details>
<summary>
GetWorkflowStepGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/classes/getworkflowstepgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/interfaces/getworkflowstepgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/interfaces/getworkflowstepgroupcommandoutput.html)

</details>
<details>
<summary>
ListPlugins
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/classes/listpluginscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/interfaces/listpluginscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/interfaces/listpluginscommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
ListTemplates
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/classes/listtemplatescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/interfaces/listtemplatescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/interfaces/listtemplatescommandoutput.html)

</details>
<details>
<summary>
ListTemplateStepGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/classes/listtemplatestepgroupscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/interfaces/listtemplatestepgroupscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/interfaces/listtemplatestepgroupscommandoutput.html)

</details>
<details>
<summary>
ListTemplateSteps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/classes/listtemplatestepscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/interfaces/listtemplatestepscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/interfaces/listtemplatestepscommandoutput.html)

</details>
<details>
<summary>
ListWorkflows
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/classes/listworkflowscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/interfaces/listworkflowscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/interfaces/listworkflowscommandoutput.html)

</details>
<details>
<summary>
ListWorkflowStepGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/classes/listworkflowstepgroupscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/interfaces/listworkflowstepgroupscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/interfaces/listworkflowstepgroupscommandoutput.html)

</details>
<details>
<summary>
ListWorkflowSteps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/classes/listworkflowstepscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/interfaces/listworkflowstepscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/interfaces/listworkflowstepscommandoutput.html)

</details>
<details>
<summary>
RetryWorkflowStep
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/classes/retryworkflowstepcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/interfaces/retryworkflowstepcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/interfaces/retryworkflowstepcommandoutput.html)

</details>
<details>
<summary>
StartWorkflow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/classes/startworkflowcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/interfaces/startworkflowcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/interfaces/startworkflowcommandoutput.html)

</details>
<details>
<summary>
StopWorkflow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/classes/stopworkflowcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/interfaces/stopworkflowcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/interfaces/stopworkflowcommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateWorkflow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/classes/updateworkflowcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/interfaces/updateworkflowcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/interfaces/updateworkflowcommandoutput.html)

</details>
<details>
<summary>
UpdateWorkflowStep
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/classes/updateworkflowstepcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/interfaces/updateworkflowstepcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/interfaces/updateworkflowstepcommandoutput.html)

</details>
<details>
<summary>
UpdateWorkflowStepGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/classes/updateworkflowstepgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/interfaces/updateworkflowstepgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhuborchestrator/interfaces/updateworkflowstepgroupcommandoutput.html)

</details>
