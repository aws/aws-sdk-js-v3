<!-- generated file, do not edit directly -->

# @aws-sdk/client-compute-optimizer-automation

## Description

AWS SDK for JavaScript ComputeOptimizerAutomation Client for Node.js, Browser and React Native.

<p> Automation is a feature within Amazon Web Services Compute Optimizer that enables you to apply optimization recommendations to your Amazon Web Services resources, reducing costs and improving performance. You can apply recommended actions directly or create automation rules that implement recommendations on a recurring schedule when they match your specified criteria. With automation rules, set criteria such as Amazon Web Services Region and Resource Tags to target specific geographies and workloads. Configure rules to run daily, weekly, or monthly, and Compute Optimizer continuously evaluates new recommendations against your criteria. Track automation events over time, examine detailed step history, estimate savings achieved, and reverse actions directly from Compute Optimizer when needed. </p>

## Installing
To install this package, simply type add or install @aws-sdk/client-compute-optimizer-automation
using your favorite package manager:
- `npm install @aws-sdk/client-compute-optimizer-automation`
- `yarn add @aws-sdk/client-compute-optimizer-automation`
- `pnpm add @aws-sdk/client-compute-optimizer-automation`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `ComputeOptimizerAutomationClient` and
the commands you need, for example `ListAccountsCommand`:

```js
// ES5 example
const { ComputeOptimizerAutomationClient, ListAccountsCommand } = require("@aws-sdk/client-compute-optimizer-automation");
```

```ts
// ES6+ example
import { ComputeOptimizerAutomationClient, ListAccountsCommand } from "@aws-sdk/client-compute-optimizer-automation";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new ComputeOptimizerAutomationClient({ region: "REGION" });

const params = { /** input parameters */ };
const command = new ListAccountsCommand(params);
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
import * as AWS from "@aws-sdk/client-compute-optimizer-automation";
const client = new AWS.ComputeOptimizerAutomation({ region: "REGION" });

// async/await.
try {
  const data = await client.listAccounts(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listAccounts(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listAccounts(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-compute-optimizer-automation` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AssociateAccounts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/compute-optimizer-automation/command/AssociateAccountsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer-automation/Interface/AssociateAccountsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer-automation/Interface/AssociateAccountsCommandOutput/)
</details>
<details>
<summary>
CreateAutomationRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/compute-optimizer-automation/command/CreateAutomationRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer-automation/Interface/CreateAutomationRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer-automation/Interface/CreateAutomationRuleCommandOutput/)
</details>
<details>
<summary>
DeleteAutomationRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/compute-optimizer-automation/command/DeleteAutomationRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer-automation/Interface/DeleteAutomationRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer-automation/Interface/DeleteAutomationRuleCommandOutput/)
</details>
<details>
<summary>
DisassociateAccounts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/compute-optimizer-automation/command/DisassociateAccountsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer-automation/Interface/DisassociateAccountsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer-automation/Interface/DisassociateAccountsCommandOutput/)
</details>
<details>
<summary>
GetAutomationEvent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/compute-optimizer-automation/command/GetAutomationEventCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer-automation/Interface/GetAutomationEventCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer-automation/Interface/GetAutomationEventCommandOutput/)
</details>
<details>
<summary>
GetAutomationRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/compute-optimizer-automation/command/GetAutomationRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer-automation/Interface/GetAutomationRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer-automation/Interface/GetAutomationRuleCommandOutput/)
</details>
<details>
<summary>
GetEnrollmentConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/compute-optimizer-automation/command/GetEnrollmentConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer-automation/Interface/GetEnrollmentConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer-automation/Interface/GetEnrollmentConfigurationCommandOutput/)
</details>
<details>
<summary>
ListAccounts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/compute-optimizer-automation/command/ListAccountsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer-automation/Interface/ListAccountsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer-automation/Interface/ListAccountsCommandOutput/)
</details>
<details>
<summary>
ListAutomationEvents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/compute-optimizer-automation/command/ListAutomationEventsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer-automation/Interface/ListAutomationEventsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer-automation/Interface/ListAutomationEventsCommandOutput/)
</details>
<details>
<summary>
ListAutomationEventSteps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/compute-optimizer-automation/command/ListAutomationEventStepsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer-automation/Interface/ListAutomationEventStepsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer-automation/Interface/ListAutomationEventStepsCommandOutput/)
</details>
<details>
<summary>
ListAutomationEventSummaries
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/compute-optimizer-automation/command/ListAutomationEventSummariesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer-automation/Interface/ListAutomationEventSummariesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer-automation/Interface/ListAutomationEventSummariesCommandOutput/)
</details>
<details>
<summary>
ListAutomationRulePreview
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/compute-optimizer-automation/command/ListAutomationRulePreviewCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer-automation/Interface/ListAutomationRulePreviewCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer-automation/Interface/ListAutomationRulePreviewCommandOutput/)
</details>
<details>
<summary>
ListAutomationRulePreviewSummaries
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/compute-optimizer-automation/command/ListAutomationRulePreviewSummariesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer-automation/Interface/ListAutomationRulePreviewSummariesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer-automation/Interface/ListAutomationRulePreviewSummariesCommandOutput/)
</details>
<details>
<summary>
ListAutomationRules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/compute-optimizer-automation/command/ListAutomationRulesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer-automation/Interface/ListAutomationRulesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer-automation/Interface/ListAutomationRulesCommandOutput/)
</details>
<details>
<summary>
ListRecommendedActions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/compute-optimizer-automation/command/ListRecommendedActionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer-automation/Interface/ListRecommendedActionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer-automation/Interface/ListRecommendedActionsCommandOutput/)
</details>
<details>
<summary>
ListRecommendedActionSummaries
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/compute-optimizer-automation/command/ListRecommendedActionSummariesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer-automation/Interface/ListRecommendedActionSummariesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer-automation/Interface/ListRecommendedActionSummariesCommandOutput/)
</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/compute-optimizer-automation/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer-automation/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer-automation/Interface/ListTagsForResourceCommandOutput/)
</details>
<details>
<summary>
RollbackAutomationEvent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/compute-optimizer-automation/command/RollbackAutomationEventCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer-automation/Interface/RollbackAutomationEventCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer-automation/Interface/RollbackAutomationEventCommandOutput/)
</details>
<details>
<summary>
StartAutomationEvent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/compute-optimizer-automation/command/StartAutomationEventCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer-automation/Interface/StartAutomationEventCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer-automation/Interface/StartAutomationEventCommandOutput/)
</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/compute-optimizer-automation/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer-automation/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer-automation/Interface/TagResourceCommandOutput/)
</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/compute-optimizer-automation/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer-automation/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer-automation/Interface/UntagResourceCommandOutput/)
</details>
<details>
<summary>
UpdateAutomationRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/compute-optimizer-automation/command/UpdateAutomationRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer-automation/Interface/UpdateAutomationRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer-automation/Interface/UpdateAutomationRuleCommandOutput/)
</details>
<details>
<summary>
UpdateEnrollmentConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/compute-optimizer-automation/command/UpdateEnrollmentConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer-automation/Interface/UpdateEnrollmentConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-compute-optimizer-automation/Interface/UpdateEnrollmentConfigurationCommandOutput/)
</details>
