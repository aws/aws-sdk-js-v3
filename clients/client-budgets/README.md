<!-- generated file, do not edit directly -->

# @aws-sdk/client-budgets

## Description

AWS SDK for JavaScript Budgets Client for Node.js, Browser and React Native.

<p>Use the Amazon Web Services Budgets API to plan your service usage, service costs, and instance reservations. This API reference provides descriptions, syntax, and usage examples for each of the actions and data types for the Amazon Web Services Budgets feature. </p>
<p>Budgets provide you with a way to see the following information:</p>
<ul>
<li>
<p>How close your plan is to your budgeted amount or to the free tier limits</p>
</li>
<li>
<p>Your usage-to-date, including how much you've used of your Reserved Instances (RIs)</p>
</li>
<li>
<p>Your current estimated charges from Amazon Web Services, and how much your predicted usage will accrue in charges by the end of the month</p>
</li>
<li>
<p>How much of your budget has been used</p>
</li>
</ul>
<p>Amazon Web Services updates your budget status several times a day. Budgets track your unblended costs, subscriptions, refunds, and RIs. You can create the following types of budgets:</p>
<ul>
<li>
<p>
<b>Cost budgets</b> - Plan how much you want to spend on a service.</p>
</li>
<li>
<p>
<b>Usage budgets</b> - Plan how much you want to use one or more services.</p>
</li>
<li>
<p>
<b>RI utilization budgets</b> - Define a utilization threshold, and receive alerts when your RI usage falls below that threshold. This lets you see if your RIs are unused or under-utilized.</p>
</li>
<li>
<p>
<b>RI coverage budgets</b> - Define a coverage threshold, and receive alerts when the number of your instance hours that are covered by RIs fall below that threshold. This lets you see how much of your instance usage is covered by a reservation.</p>
</li>
</ul>
<p>Service Endpoint</p>
<p>The Amazon Web Services Budgets API provides the following endpoint:</p>
<ul>
<li>
<p>https://budgets.amazonaws.com</p>
</li>
</ul>
<p>For information about costs that are associated with the Amazon Web Services Budgets API, see <a href="https://aws.amazon.com/aws-cost-management/pricing/">Amazon Web Services Cost Management Pricing</a>.</p>

## Installing
To install this package, simply type add or install @aws-sdk/client-budgets
using your favorite package manager:
- `npm install @aws-sdk/client-budgets`
- `yarn add @aws-sdk/client-budgets`
- `pnpm add @aws-sdk/client-budgets`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `BudgetsClient` and
the commands you need, for example `ListTagsForResourceCommand`:

```js
// ES5 example
const { BudgetsClient, ListTagsForResourceCommand } = require("@aws-sdk/client-budgets");
```

```ts
// ES6+ example
import { BudgetsClient, ListTagsForResourceCommand } from "@aws-sdk/client-budgets";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new BudgetsClient({ region: "REGION" });

const params = { /** input parameters */ };
const command = new ListTagsForResourceCommand(params);
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
import * as AWS from "@aws-sdk/client-budgets";
const client = new AWS.Budgets({ region: "REGION" });

// async/await.
try {
  const data = await client.listTagsForResource(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listTagsForResource(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listTagsForResource(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-budgets` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CreateBudget
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/budgets/command/CreateBudgetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-budgets/Interface/CreateBudgetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-budgets/Interface/CreateBudgetCommandOutput/)
</details>
<details>
<summary>
CreateBudgetAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/budgets/command/CreateBudgetActionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-budgets/Interface/CreateBudgetActionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-budgets/Interface/CreateBudgetActionCommandOutput/)
</details>
<details>
<summary>
CreateNotification
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/budgets/command/CreateNotificationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-budgets/Interface/CreateNotificationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-budgets/Interface/CreateNotificationCommandOutput/)
</details>
<details>
<summary>
CreateSubscriber
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/budgets/command/CreateSubscriberCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-budgets/Interface/CreateSubscriberCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-budgets/Interface/CreateSubscriberCommandOutput/)
</details>
<details>
<summary>
DeleteBudget
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/budgets/command/DeleteBudgetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-budgets/Interface/DeleteBudgetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-budgets/Interface/DeleteBudgetCommandOutput/)
</details>
<details>
<summary>
DeleteBudgetAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/budgets/command/DeleteBudgetActionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-budgets/Interface/DeleteBudgetActionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-budgets/Interface/DeleteBudgetActionCommandOutput/)
</details>
<details>
<summary>
DeleteNotification
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/budgets/command/DeleteNotificationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-budgets/Interface/DeleteNotificationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-budgets/Interface/DeleteNotificationCommandOutput/)
</details>
<details>
<summary>
DeleteSubscriber
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/budgets/command/DeleteSubscriberCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-budgets/Interface/DeleteSubscriberCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-budgets/Interface/DeleteSubscriberCommandOutput/)
</details>
<details>
<summary>
DescribeBudget
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/budgets/command/DescribeBudgetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-budgets/Interface/DescribeBudgetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-budgets/Interface/DescribeBudgetCommandOutput/)
</details>
<details>
<summary>
DescribeBudgetAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/budgets/command/DescribeBudgetActionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-budgets/Interface/DescribeBudgetActionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-budgets/Interface/DescribeBudgetActionCommandOutput/)
</details>
<details>
<summary>
DescribeBudgetActionHistories
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/budgets/command/DescribeBudgetActionHistoriesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-budgets/Interface/DescribeBudgetActionHistoriesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-budgets/Interface/DescribeBudgetActionHistoriesCommandOutput/)
</details>
<details>
<summary>
DescribeBudgetActionsForAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/budgets/command/DescribeBudgetActionsForAccountCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-budgets/Interface/DescribeBudgetActionsForAccountCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-budgets/Interface/DescribeBudgetActionsForAccountCommandOutput/)
</details>
<details>
<summary>
DescribeBudgetActionsForBudget
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/budgets/command/DescribeBudgetActionsForBudgetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-budgets/Interface/DescribeBudgetActionsForBudgetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-budgets/Interface/DescribeBudgetActionsForBudgetCommandOutput/)
</details>
<details>
<summary>
DescribeBudgetNotificationsForAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/budgets/command/DescribeBudgetNotificationsForAccountCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-budgets/Interface/DescribeBudgetNotificationsForAccountCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-budgets/Interface/DescribeBudgetNotificationsForAccountCommandOutput/)
</details>
<details>
<summary>
DescribeBudgetPerformanceHistory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/budgets/command/DescribeBudgetPerformanceHistoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-budgets/Interface/DescribeBudgetPerformanceHistoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-budgets/Interface/DescribeBudgetPerformanceHistoryCommandOutput/)
</details>
<details>
<summary>
DescribeBudgets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/budgets/command/DescribeBudgetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-budgets/Interface/DescribeBudgetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-budgets/Interface/DescribeBudgetsCommandOutput/)
</details>
<details>
<summary>
DescribeNotificationsForBudget
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/budgets/command/DescribeNotificationsForBudgetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-budgets/Interface/DescribeNotificationsForBudgetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-budgets/Interface/DescribeNotificationsForBudgetCommandOutput/)
</details>
<details>
<summary>
DescribeSubscribersForNotification
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/budgets/command/DescribeSubscribersForNotificationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-budgets/Interface/DescribeSubscribersForNotificationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-budgets/Interface/DescribeSubscribersForNotificationCommandOutput/)
</details>
<details>
<summary>
ExecuteBudgetAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/budgets/command/ExecuteBudgetActionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-budgets/Interface/ExecuteBudgetActionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-budgets/Interface/ExecuteBudgetActionCommandOutput/)
</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/budgets/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-budgets/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-budgets/Interface/ListTagsForResourceCommandOutput/)
</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/budgets/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-budgets/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-budgets/Interface/TagResourceCommandOutput/)
</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/budgets/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-budgets/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-budgets/Interface/UntagResourceCommandOutput/)
</details>
<details>
<summary>
UpdateBudget
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/budgets/command/UpdateBudgetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-budgets/Interface/UpdateBudgetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-budgets/Interface/UpdateBudgetCommandOutput/)
</details>
<details>
<summary>
UpdateBudgetAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/budgets/command/UpdateBudgetActionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-budgets/Interface/UpdateBudgetActionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-budgets/Interface/UpdateBudgetActionCommandOutput/)
</details>
<details>
<summary>
UpdateNotification
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/budgets/command/UpdateNotificationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-budgets/Interface/UpdateNotificationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-budgets/Interface/UpdateNotificationCommandOutput/)
</details>
<details>
<summary>
UpdateSubscriber
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/budgets/command/UpdateSubscriberCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-budgets/Interface/UpdateSubscriberCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-budgets/Interface/UpdateSubscriberCommandOutput/)
</details>
