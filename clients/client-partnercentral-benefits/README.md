<!-- generated file, do not edit directly -->

# @aws-sdk/client-partnercentral-benefits

## Description

AWS SDK for JavaScript PartnerCentralBenefits Client for Node.js, Browser and React Native.

<p>AWS Partner Central Benefits Service provides APIs for managing partner benefits, applications, and allocations within the AWS Partner Network ecosystem.</p>

## Installing
To install this package, simply type add or install @aws-sdk/client-partnercentral-benefits
using your favorite package manager:
- `npm install @aws-sdk/client-partnercentral-benefits`
- `yarn add @aws-sdk/client-partnercentral-benefits`
- `pnpm add @aws-sdk/client-partnercentral-benefits`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `PartnerCentralBenefitsClient` and
the commands you need, for example `ListBenefitsCommand`:

```js
// ES5 example
const { PartnerCentralBenefitsClient, ListBenefitsCommand } = require("@aws-sdk/client-partnercentral-benefits");
```

```ts
// ES6+ example
import { PartnerCentralBenefitsClient, ListBenefitsCommand } from "@aws-sdk/client-partnercentral-benefits";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new PartnerCentralBenefitsClient({ region: "REGION" });

const params = { /** input parameters */ };
const command = new ListBenefitsCommand(params);
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
import * as AWS from "@aws-sdk/client-partnercentral-benefits";
const client = new AWS.PartnerCentralBenefits({ region: "REGION" });

// async/await.
try {
  const data = await client.listBenefits(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listBenefits(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listBenefits(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-partnercentral-benefits` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AmendBenefitApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-benefits/command/AmendBenefitApplicationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-benefits/Interface/AmendBenefitApplicationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-benefits/Interface/AmendBenefitApplicationCommandOutput/)
</details>
<details>
<summary>
AssociateBenefitApplicationResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-benefits/command/AssociateBenefitApplicationResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-benefits/Interface/AssociateBenefitApplicationResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-benefits/Interface/AssociateBenefitApplicationResourceCommandOutput/)
</details>
<details>
<summary>
CancelBenefitApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-benefits/command/CancelBenefitApplicationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-benefits/Interface/CancelBenefitApplicationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-benefits/Interface/CancelBenefitApplicationCommandOutput/)
</details>
<details>
<summary>
CreateBenefitApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-benefits/command/CreateBenefitApplicationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-benefits/Interface/CreateBenefitApplicationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-benefits/Interface/CreateBenefitApplicationCommandOutput/)
</details>
<details>
<summary>
DisassociateBenefitApplicationResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-benefits/command/DisassociateBenefitApplicationResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-benefits/Interface/DisassociateBenefitApplicationResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-benefits/Interface/DisassociateBenefitApplicationResourceCommandOutput/)
</details>
<details>
<summary>
GetBenefit
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-benefits/command/GetBenefitCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-benefits/Interface/GetBenefitCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-benefits/Interface/GetBenefitCommandOutput/)
</details>
<details>
<summary>
GetBenefitAllocation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-benefits/command/GetBenefitAllocationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-benefits/Interface/GetBenefitAllocationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-benefits/Interface/GetBenefitAllocationCommandOutput/)
</details>
<details>
<summary>
GetBenefitApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-benefits/command/GetBenefitApplicationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-benefits/Interface/GetBenefitApplicationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-benefits/Interface/GetBenefitApplicationCommandOutput/)
</details>
<details>
<summary>
ListBenefitAllocations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-benefits/command/ListBenefitAllocationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-benefits/Interface/ListBenefitAllocationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-benefits/Interface/ListBenefitAllocationsCommandOutput/)
</details>
<details>
<summary>
ListBenefitApplications
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-benefits/command/ListBenefitApplicationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-benefits/Interface/ListBenefitApplicationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-benefits/Interface/ListBenefitApplicationsCommandOutput/)
</details>
<details>
<summary>
ListBenefits
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-benefits/command/ListBenefitsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-benefits/Interface/ListBenefitsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-benefits/Interface/ListBenefitsCommandOutput/)
</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-benefits/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-benefits/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-benefits/Interface/ListTagsForResourceCommandOutput/)
</details>
<details>
<summary>
RecallBenefitApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-benefits/command/RecallBenefitApplicationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-benefits/Interface/RecallBenefitApplicationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-benefits/Interface/RecallBenefitApplicationCommandOutput/)
</details>
<details>
<summary>
SubmitBenefitApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-benefits/command/SubmitBenefitApplicationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-benefits/Interface/SubmitBenefitApplicationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-benefits/Interface/SubmitBenefitApplicationCommandOutput/)
</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-benefits/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-benefits/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-benefits/Interface/TagResourceCommandOutput/)
</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-benefits/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-benefits/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-benefits/Interface/UntagResourceCommandOutput/)
</details>
<details>
<summary>
UpdateBenefitApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/partnercentral-benefits/command/UpdateBenefitApplicationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-benefits/Interface/UpdateBenefitApplicationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-partnercentral-benefits/Interface/UpdateBenefitApplicationCommandOutput/)
</details>
