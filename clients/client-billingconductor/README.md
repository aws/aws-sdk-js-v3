<!-- generated file, do not edit directly -->

# @aws-sdk/client-billingconductor

## Description

AWS SDK for JavaScript Billingconductor Client for Node.js, Browser and React Native.

<p>Billing Conductor is a fully managed service that you can use to customize a <a href="https://docs.aws.amazon.com/billingconductor/latest/userguide/understanding-eb.html#eb-other-definitions">pro forma</a> version of your billing data each month, to accurately show or chargeback your end customers. Billing Conductor doesn't change the way you're billed by Amazon Web Services each month by design. Instead, it provides you with a mechanism to configure, generate, and display rates to certain customers over a given billing period. You can also analyze the difference between the rates you apply to your accounting groupings relative to your actual rates from Amazon Web Services. As a result of your Billing Conductor configuration, the payer account can also see the custom rate applied on the billing details page of the <a href="https://console.aws.amazon.com/billing">Billing console</a>, or configure a cost and usage report per billing group.</p> <p>This documentation shows how you can configure Billing Conductor by using its API. For more information about using the <a href="https://console.aws.amazon.com/billingconductor/">Billing Conductor</a> user interface, see the <a href="https://docs.aws.amazon.com/billingconductor/latest/userguide/what-is-billingconductor.html"> Billing Conductor User Guide</a>.</p>

## Installing
To install this package, simply type add or install @aws-sdk/client-billingconductor
using your favorite package manager:
- `npm install @aws-sdk/client-billingconductor`
- `yarn add @aws-sdk/client-billingconductor`
- `pnpm add @aws-sdk/client-billingconductor`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `BillingconductorClient` and
the commands you need, for example `ListBillingGroupsCommand`:

```js
// ES5 example
const { BillingconductorClient, ListBillingGroupsCommand } = require("@aws-sdk/client-billingconductor");
```

```ts
// ES6+ example
import { BillingconductorClient, ListBillingGroupsCommand } from "@aws-sdk/client-billingconductor";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new BillingconductorClient({ region: "REGION" });

const params = { /** input parameters */ };
const command = new ListBillingGroupsCommand(params);
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
import * as AWS from "@aws-sdk/client-billingconductor";
const client = new AWS.Billingconductor({ region: "REGION" });

// async/await.
try {
  const data = await client.listBillingGroups(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listBillingGroups(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listBillingGroups(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-billingconductor` package is updated.
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/billingconductor/command/AssociateAccountsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/AssociateAccountsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/AssociateAccountsCommandOutput/)
</details>
<details>
<summary>
AssociatePricingRules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/billingconductor/command/AssociatePricingRulesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/AssociatePricingRulesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/AssociatePricingRulesCommandOutput/)
</details>
<details>
<summary>
BatchAssociateResourcesToCustomLineItem
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/billingconductor/command/BatchAssociateResourcesToCustomLineItemCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/BatchAssociateResourcesToCustomLineItemCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/BatchAssociateResourcesToCustomLineItemCommandOutput/)
</details>
<details>
<summary>
BatchDisassociateResourcesFromCustomLineItem
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/billingconductor/command/BatchDisassociateResourcesFromCustomLineItemCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/BatchDisassociateResourcesFromCustomLineItemCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/BatchDisassociateResourcesFromCustomLineItemCommandOutput/)
</details>
<details>
<summary>
CreateBillingGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/billingconductor/command/CreateBillingGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/CreateBillingGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/CreateBillingGroupCommandOutput/)
</details>
<details>
<summary>
CreateCustomLineItem
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/billingconductor/command/CreateCustomLineItemCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/CreateCustomLineItemCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/CreateCustomLineItemCommandOutput/)
</details>
<details>
<summary>
CreatePricingPlan
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/billingconductor/command/CreatePricingPlanCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/CreatePricingPlanCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/CreatePricingPlanCommandOutput/)
</details>
<details>
<summary>
CreatePricingRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/billingconductor/command/CreatePricingRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/CreatePricingRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/CreatePricingRuleCommandOutput/)
</details>
<details>
<summary>
DeleteBillingGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/billingconductor/command/DeleteBillingGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/DeleteBillingGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/DeleteBillingGroupCommandOutput/)
</details>
<details>
<summary>
DeleteCustomLineItem
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/billingconductor/command/DeleteCustomLineItemCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/DeleteCustomLineItemCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/DeleteCustomLineItemCommandOutput/)
</details>
<details>
<summary>
DeletePricingPlan
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/billingconductor/command/DeletePricingPlanCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/DeletePricingPlanCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/DeletePricingPlanCommandOutput/)
</details>
<details>
<summary>
DeletePricingRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/billingconductor/command/DeletePricingRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/DeletePricingRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/DeletePricingRuleCommandOutput/)
</details>
<details>
<summary>
DisassociateAccounts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/billingconductor/command/DisassociateAccountsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/DisassociateAccountsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/DisassociateAccountsCommandOutput/)
</details>
<details>
<summary>
DisassociatePricingRules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/billingconductor/command/DisassociatePricingRulesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/DisassociatePricingRulesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/DisassociatePricingRulesCommandOutput/)
</details>
<details>
<summary>
GetBillingGroupCostReport
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/billingconductor/command/GetBillingGroupCostReportCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/GetBillingGroupCostReportCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/GetBillingGroupCostReportCommandOutput/)
</details>
<details>
<summary>
ListAccountAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/billingconductor/command/ListAccountAssociationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/ListAccountAssociationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/ListAccountAssociationsCommandOutput/)
</details>
<details>
<summary>
ListBillingGroupCostReports
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/billingconductor/command/ListBillingGroupCostReportsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/ListBillingGroupCostReportsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/ListBillingGroupCostReportsCommandOutput/)
</details>
<details>
<summary>
ListBillingGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/billingconductor/command/ListBillingGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/ListBillingGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/ListBillingGroupsCommandOutput/)
</details>
<details>
<summary>
ListCustomLineItems
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/billingconductor/command/ListCustomLineItemsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/ListCustomLineItemsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/ListCustomLineItemsCommandOutput/)
</details>
<details>
<summary>
ListCustomLineItemVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/billingconductor/command/ListCustomLineItemVersionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/ListCustomLineItemVersionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/ListCustomLineItemVersionsCommandOutput/)
</details>
<details>
<summary>
ListPricingPlans
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/billingconductor/command/ListPricingPlansCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/ListPricingPlansCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/ListPricingPlansCommandOutput/)
</details>
<details>
<summary>
ListPricingPlansAssociatedWithPricingRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/billingconductor/command/ListPricingPlansAssociatedWithPricingRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/ListPricingPlansAssociatedWithPricingRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/ListPricingPlansAssociatedWithPricingRuleCommandOutput/)
</details>
<details>
<summary>
ListPricingRules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/billingconductor/command/ListPricingRulesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/ListPricingRulesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/ListPricingRulesCommandOutput/)
</details>
<details>
<summary>
ListPricingRulesAssociatedToPricingPlan
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/billingconductor/command/ListPricingRulesAssociatedToPricingPlanCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/ListPricingRulesAssociatedToPricingPlanCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/ListPricingRulesAssociatedToPricingPlanCommandOutput/)
</details>
<details>
<summary>
ListResourcesAssociatedToCustomLineItem
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/billingconductor/command/ListResourcesAssociatedToCustomLineItemCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/ListResourcesAssociatedToCustomLineItemCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/ListResourcesAssociatedToCustomLineItemCommandOutput/)
</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/billingconductor/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/ListTagsForResourceCommandOutput/)
</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/billingconductor/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/TagResourceCommandOutput/)
</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/billingconductor/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/UntagResourceCommandOutput/)
</details>
<details>
<summary>
UpdateBillingGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/billingconductor/command/UpdateBillingGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/UpdateBillingGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/UpdateBillingGroupCommandOutput/)
</details>
<details>
<summary>
UpdateCustomLineItem
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/billingconductor/command/UpdateCustomLineItemCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/UpdateCustomLineItemCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/UpdateCustomLineItemCommandOutput/)
</details>
<details>
<summary>
UpdatePricingPlan
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/billingconductor/command/UpdatePricingPlanCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/UpdatePricingPlanCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/UpdatePricingPlanCommandOutput/)
</details>
<details>
<summary>
UpdatePricingRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/billingconductor/command/UpdatePricingRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/UpdatePricingRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-billingconductor/Interface/UpdatePricingRuleCommandOutput/)
</details>
