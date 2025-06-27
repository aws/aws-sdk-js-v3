<!-- generated file, do not edit directly -->

# @aws-sdk/client-bcm-pricing-calculator

## Description

AWS SDK for JavaScript BCMPricingCalculator Client for Node.js, Browser and React Native.

<p> You can use the Pricing Calculator API to programmatically create estimates for your planned cloud use. You can model usage and commitments such as Savings Plans and Reserved Instances, and generate estimated costs using your discounts and benefit sharing preferences. </p> <p>The Pricing Calculator API provides the following endpoint:</p> <ul> <li> <p> <code>https://bcm-pricing-calculator.us-east-1.api.aws</code> </p> </li> </ul>

## Installing

To install this package, simply type add or install @aws-sdk/client-bcm-pricing-calculator
using your favorite package manager:

- `npm install @aws-sdk/client-bcm-pricing-calculator`
- `yarn add @aws-sdk/client-bcm-pricing-calculator`
- `pnpm add @aws-sdk/client-bcm-pricing-calculator`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `BCMPricingCalculatorClient` and
the commands you need, for example `ListBillEstimatesCommand`:

```js
// ES5 example
const { BCMPricingCalculatorClient, ListBillEstimatesCommand } = require("@aws-sdk/client-bcm-pricing-calculator");
```

```ts
// ES6+ example
import { BCMPricingCalculatorClient, ListBillEstimatesCommand } from "@aws-sdk/client-bcm-pricing-calculator";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new BCMPricingCalculatorClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListBillEstimatesCommand(params);
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
import * as AWS from "@aws-sdk/client-bcm-pricing-calculator";
const client = new AWS.BCMPricingCalculator({ region: "REGION" });

// async/await.
try {
  const data = await client.listBillEstimates(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listBillEstimates(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listBillEstimates(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-bcm-pricing-calculator` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
BatchCreateBillScenarioCommitmentModification
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/bcm-pricing-calculator/command/BatchCreateBillScenarioCommitmentModificationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/BatchCreateBillScenarioCommitmentModificationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/BatchCreateBillScenarioCommitmentModificationCommandOutput/)

</details>
<details>
<summary>
BatchCreateBillScenarioUsageModification
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/bcm-pricing-calculator/command/BatchCreateBillScenarioUsageModificationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/BatchCreateBillScenarioUsageModificationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/BatchCreateBillScenarioUsageModificationCommandOutput/)

</details>
<details>
<summary>
BatchCreateWorkloadEstimateUsage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/bcm-pricing-calculator/command/BatchCreateWorkloadEstimateUsageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/BatchCreateWorkloadEstimateUsageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/BatchCreateWorkloadEstimateUsageCommandOutput/)

</details>
<details>
<summary>
BatchDeleteBillScenarioCommitmentModification
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/bcm-pricing-calculator/command/BatchDeleteBillScenarioCommitmentModificationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/BatchDeleteBillScenarioCommitmentModificationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/BatchDeleteBillScenarioCommitmentModificationCommandOutput/)

</details>
<details>
<summary>
BatchDeleteBillScenarioUsageModification
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/bcm-pricing-calculator/command/BatchDeleteBillScenarioUsageModificationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/BatchDeleteBillScenarioUsageModificationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/BatchDeleteBillScenarioUsageModificationCommandOutput/)

</details>
<details>
<summary>
BatchDeleteWorkloadEstimateUsage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/bcm-pricing-calculator/command/BatchDeleteWorkloadEstimateUsageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/BatchDeleteWorkloadEstimateUsageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/BatchDeleteWorkloadEstimateUsageCommandOutput/)

</details>
<details>
<summary>
BatchUpdateBillScenarioCommitmentModification
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/bcm-pricing-calculator/command/BatchUpdateBillScenarioCommitmentModificationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/BatchUpdateBillScenarioCommitmentModificationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/BatchUpdateBillScenarioCommitmentModificationCommandOutput/)

</details>
<details>
<summary>
BatchUpdateBillScenarioUsageModification
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/bcm-pricing-calculator/command/BatchUpdateBillScenarioUsageModificationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/BatchUpdateBillScenarioUsageModificationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/BatchUpdateBillScenarioUsageModificationCommandOutput/)

</details>
<details>
<summary>
BatchUpdateWorkloadEstimateUsage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/bcm-pricing-calculator/command/BatchUpdateWorkloadEstimateUsageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/BatchUpdateWorkloadEstimateUsageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/BatchUpdateWorkloadEstimateUsageCommandOutput/)

</details>
<details>
<summary>
CreateBillEstimate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/bcm-pricing-calculator/command/CreateBillEstimateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/CreateBillEstimateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/CreateBillEstimateCommandOutput/)

</details>
<details>
<summary>
CreateBillScenario
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/bcm-pricing-calculator/command/CreateBillScenarioCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/CreateBillScenarioCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/CreateBillScenarioCommandOutput/)

</details>
<details>
<summary>
CreateWorkloadEstimate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/bcm-pricing-calculator/command/CreateWorkloadEstimateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/CreateWorkloadEstimateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/CreateWorkloadEstimateCommandOutput/)

</details>
<details>
<summary>
DeleteBillEstimate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/bcm-pricing-calculator/command/DeleteBillEstimateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/DeleteBillEstimateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/DeleteBillEstimateCommandOutput/)

</details>
<details>
<summary>
DeleteBillScenario
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/bcm-pricing-calculator/command/DeleteBillScenarioCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/DeleteBillScenarioCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/DeleteBillScenarioCommandOutput/)

</details>
<details>
<summary>
DeleteWorkloadEstimate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/bcm-pricing-calculator/command/DeleteWorkloadEstimateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/DeleteWorkloadEstimateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/DeleteWorkloadEstimateCommandOutput/)

</details>
<details>
<summary>
GetBillEstimate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/bcm-pricing-calculator/command/GetBillEstimateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/GetBillEstimateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/GetBillEstimateCommandOutput/)

</details>
<details>
<summary>
GetBillScenario
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/bcm-pricing-calculator/command/GetBillScenarioCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/GetBillScenarioCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/GetBillScenarioCommandOutput/)

</details>
<details>
<summary>
GetPreferences
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/bcm-pricing-calculator/command/GetPreferencesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/GetPreferencesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/GetPreferencesCommandOutput/)

</details>
<details>
<summary>
GetWorkloadEstimate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/bcm-pricing-calculator/command/GetWorkloadEstimateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/GetWorkloadEstimateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/GetWorkloadEstimateCommandOutput/)

</details>
<details>
<summary>
ListBillEstimateCommitments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/bcm-pricing-calculator/command/ListBillEstimateCommitmentsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/ListBillEstimateCommitmentsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/ListBillEstimateCommitmentsCommandOutput/)

</details>
<details>
<summary>
ListBillEstimateInputCommitmentModifications
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/bcm-pricing-calculator/command/ListBillEstimateInputCommitmentModificationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/ListBillEstimateInputCommitmentModificationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/ListBillEstimateInputCommitmentModificationsCommandOutput/)

</details>
<details>
<summary>
ListBillEstimateInputUsageModifications
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/bcm-pricing-calculator/command/ListBillEstimateInputUsageModificationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/ListBillEstimateInputUsageModificationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/ListBillEstimateInputUsageModificationsCommandOutput/)

</details>
<details>
<summary>
ListBillEstimateLineItems
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/bcm-pricing-calculator/command/ListBillEstimateLineItemsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/ListBillEstimateLineItemsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/ListBillEstimateLineItemsCommandOutput/)

</details>
<details>
<summary>
ListBillEstimates
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/bcm-pricing-calculator/command/ListBillEstimatesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/ListBillEstimatesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/ListBillEstimatesCommandOutput/)

</details>
<details>
<summary>
ListBillScenarioCommitmentModifications
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/bcm-pricing-calculator/command/ListBillScenarioCommitmentModificationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/ListBillScenarioCommitmentModificationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/ListBillScenarioCommitmentModificationsCommandOutput/)

</details>
<details>
<summary>
ListBillScenarios
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/bcm-pricing-calculator/command/ListBillScenariosCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/ListBillScenariosCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/ListBillScenariosCommandOutput/)

</details>
<details>
<summary>
ListBillScenarioUsageModifications
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/bcm-pricing-calculator/command/ListBillScenarioUsageModificationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/ListBillScenarioUsageModificationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/ListBillScenarioUsageModificationsCommandOutput/)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/bcm-pricing-calculator/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/ListTagsForResourceCommandOutput/)

</details>
<details>
<summary>
ListWorkloadEstimates
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/bcm-pricing-calculator/command/ListWorkloadEstimatesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/ListWorkloadEstimatesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/ListWorkloadEstimatesCommandOutput/)

</details>
<details>
<summary>
ListWorkloadEstimateUsage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/bcm-pricing-calculator/command/ListWorkloadEstimateUsageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/ListWorkloadEstimateUsageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/ListWorkloadEstimateUsageCommandOutput/)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/bcm-pricing-calculator/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/TagResourceCommandOutput/)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/bcm-pricing-calculator/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/UntagResourceCommandOutput/)

</details>
<details>
<summary>
UpdateBillEstimate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/bcm-pricing-calculator/command/UpdateBillEstimateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/UpdateBillEstimateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/UpdateBillEstimateCommandOutput/)

</details>
<details>
<summary>
UpdateBillScenario
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/bcm-pricing-calculator/command/UpdateBillScenarioCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/UpdateBillScenarioCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/UpdateBillScenarioCommandOutput/)

</details>
<details>
<summary>
UpdatePreferences
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/bcm-pricing-calculator/command/UpdatePreferencesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/UpdatePreferencesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/UpdatePreferencesCommandOutput/)

</details>
<details>
<summary>
UpdateWorkloadEstimate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/bcm-pricing-calculator/command/UpdateWorkloadEstimateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/UpdateWorkloadEstimateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-bcm-pricing-calculator/Interface/UpdateWorkloadEstimateCommandOutput/)

</details>
