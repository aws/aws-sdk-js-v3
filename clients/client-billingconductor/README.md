<!-- generated file, do not edit directly -->

# @aws-sdk/client-billingconductor

## Description

AWS SDK for JavaScript Billingconductor Client for Node.js, Browser and React Native.

<p>Amazon Web Services Billing Conductor is a fully managed service that you can use
to customize a <a href="https://docs.aws.amazon.com/billingconductor/latest/userguide/understanding-eb.html#eb-other-definitions">pro forma</a> version of your billing data each month, to accurately show or chargeback
your end customers. Amazon Web Services Billing Conductor doesn't change the way
you're billed by Amazon Web Services each month by design. Instead, it provides you with a
mechanism to configure, generate, and display rates to certain customers over a given billing
period. You can also analyze the difference between the rates you apply to your accounting
groupings relative to your actual rates from Amazon Web Services. As a result of your Amazon Web Services Billing Conductor configuration, the payer account can also see the
custom rate applied on the billing details page of the <a href="https://console.aws.amazon.com/billing">Amazon Web Services Billing console</a>, or configure a cost and usage report per
billing group.</p>
<p>This documentation shows how you can configure Amazon Web Services Billing Conductor using its
API. For more information about using the <a href="https://console.aws.amazon.com/billingconductor/">Amazon Web Services
Billing Conductor</a> user interface, see the <a href="https://docs.aws.amazon.com/billingconductor/latest/userguide/what-is-billingconductor.html"> Amazon Web Services Billing Conductor User Guide</a>.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-billingconductor
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

const params = {
  /** input parameters */
};
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/classes/associateaccountscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/interfaces/associateaccountscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/interfaces/associateaccountscommandoutput.html)

</details>
<details>
<summary>
AssociatePricingRules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/classes/associatepricingrulescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/interfaces/associatepricingrulescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/interfaces/associatepricingrulescommandoutput.html)

</details>
<details>
<summary>
BatchAssociateResourcesToCustomLineItem
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/classes/batchassociateresourcestocustomlineitemcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/interfaces/batchassociateresourcestocustomlineitemcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/interfaces/batchassociateresourcestocustomlineitemcommandoutput.html)

</details>
<details>
<summary>
BatchDisassociateResourcesFromCustomLineItem
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/classes/batchdisassociateresourcesfromcustomlineitemcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/interfaces/batchdisassociateresourcesfromcustomlineitemcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/interfaces/batchdisassociateresourcesfromcustomlineitemcommandoutput.html)

</details>
<details>
<summary>
CreateBillingGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/classes/createbillinggroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/interfaces/createbillinggroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/interfaces/createbillinggroupcommandoutput.html)

</details>
<details>
<summary>
CreateCustomLineItem
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/classes/createcustomlineitemcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/interfaces/createcustomlineitemcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/interfaces/createcustomlineitemcommandoutput.html)

</details>
<details>
<summary>
CreatePricingPlan
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/classes/createpricingplancommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/interfaces/createpricingplancommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/interfaces/createpricingplancommandoutput.html)

</details>
<details>
<summary>
CreatePricingRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/classes/createpricingrulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/interfaces/createpricingrulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/interfaces/createpricingrulecommandoutput.html)

</details>
<details>
<summary>
DeleteBillingGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/classes/deletebillinggroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/interfaces/deletebillinggroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/interfaces/deletebillinggroupcommandoutput.html)

</details>
<details>
<summary>
DeleteCustomLineItem
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/classes/deletecustomlineitemcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/interfaces/deletecustomlineitemcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/interfaces/deletecustomlineitemcommandoutput.html)

</details>
<details>
<summary>
DeletePricingPlan
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/classes/deletepricingplancommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/interfaces/deletepricingplancommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/interfaces/deletepricingplancommandoutput.html)

</details>
<details>
<summary>
DeletePricingRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/classes/deletepricingrulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/interfaces/deletepricingrulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/interfaces/deletepricingrulecommandoutput.html)

</details>
<details>
<summary>
DisassociateAccounts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/classes/disassociateaccountscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/interfaces/disassociateaccountscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/interfaces/disassociateaccountscommandoutput.html)

</details>
<details>
<summary>
DisassociatePricingRules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/classes/disassociatepricingrulescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/interfaces/disassociatepricingrulescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/interfaces/disassociatepricingrulescommandoutput.html)

</details>
<details>
<summary>
ListAccountAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/classes/listaccountassociationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/interfaces/listaccountassociationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/interfaces/listaccountassociationscommandoutput.html)

</details>
<details>
<summary>
ListBillingGroupCostReports
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/classes/listbillinggroupcostreportscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/interfaces/listbillinggroupcostreportscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/interfaces/listbillinggroupcostreportscommandoutput.html)

</details>
<details>
<summary>
ListBillingGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/classes/listbillinggroupscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/interfaces/listbillinggroupscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/interfaces/listbillinggroupscommandoutput.html)

</details>
<details>
<summary>
ListCustomLineItems
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/classes/listcustomlineitemscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/interfaces/listcustomlineitemscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/interfaces/listcustomlineitemscommandoutput.html)

</details>
<details>
<summary>
ListCustomLineItemVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/classes/listcustomlineitemversionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/interfaces/listcustomlineitemversionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/interfaces/listcustomlineitemversionscommandoutput.html)

</details>
<details>
<summary>
ListPricingPlans
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/classes/listpricingplanscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/interfaces/listpricingplanscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/interfaces/listpricingplanscommandoutput.html)

</details>
<details>
<summary>
ListPricingPlansAssociatedWithPricingRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/classes/listpricingplansassociatedwithpricingrulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/interfaces/listpricingplansassociatedwithpricingrulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/interfaces/listpricingplansassociatedwithpricingrulecommandoutput.html)

</details>
<details>
<summary>
ListPricingRules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/classes/listpricingrulescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/interfaces/listpricingrulescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/interfaces/listpricingrulescommandoutput.html)

</details>
<details>
<summary>
ListPricingRulesAssociatedToPricingPlan
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/classes/listpricingrulesassociatedtopricingplancommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/interfaces/listpricingrulesassociatedtopricingplancommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/interfaces/listpricingrulesassociatedtopricingplancommandoutput.html)

</details>
<details>
<summary>
ListResourcesAssociatedToCustomLineItem
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/classes/listresourcesassociatedtocustomlineitemcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/interfaces/listresourcesassociatedtocustomlineitemcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/interfaces/listresourcesassociatedtocustomlineitemcommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateBillingGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/classes/updatebillinggroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/interfaces/updatebillinggroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/interfaces/updatebillinggroupcommandoutput.html)

</details>
<details>
<summary>
UpdateCustomLineItem
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/classes/updatecustomlineitemcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/interfaces/updatecustomlineitemcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/interfaces/updatecustomlineitemcommandoutput.html)

</details>
<details>
<summary>
UpdatePricingPlan
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/classes/updatepricingplancommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/interfaces/updatepricingplancommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/interfaces/updatepricingplancommandoutput.html)

</details>
<details>
<summary>
UpdatePricingRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/classes/updatepricingrulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/interfaces/updatepricingrulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-billingconductor/interfaces/updatepricingrulecommandoutput.html)

</details>
