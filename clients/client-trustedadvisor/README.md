<!-- generated file, do not edit directly -->

# @aws-sdk/client-trustedadvisor

## Description

AWS SDK for JavaScript TrustedAdvisor Client for Node.js, Browser and React Native.

<p>TrustedAdvisor Public API</p>

## Installing
To install this package, simply type add or install @aws-sdk/client-trustedadvisor
using your favorite package manager:
- `npm install @aws-sdk/client-trustedadvisor`
- `yarn add @aws-sdk/client-trustedadvisor`
- `pnpm add @aws-sdk/client-trustedadvisor`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `TrustedAdvisorClient` and
the commands you need, for example `ListChecksCommand`:

```js
// ES5 example
const { TrustedAdvisorClient, ListChecksCommand } = require("@aws-sdk/client-trustedadvisor");
```

```ts
// ES6+ example
import { TrustedAdvisorClient, ListChecksCommand } from "@aws-sdk/client-trustedadvisor";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new TrustedAdvisorClient({ region: "REGION" });

const params = { /** input parameters */ };
const command = new ListChecksCommand(params);
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
import * as AWS from "@aws-sdk/client-trustedadvisor";
const client = new AWS.TrustedAdvisor({ region: "REGION" });

// async/await.
try {
  const data = await client.listChecks(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listChecks(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listChecks(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-trustedadvisor` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
BatchUpdateRecommendationResourceExclusion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/trustedadvisor/command/BatchUpdateRecommendationResourceExclusionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-trustedadvisor/Interface/BatchUpdateRecommendationResourceExclusionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-trustedadvisor/Interface/BatchUpdateRecommendationResourceExclusionCommandOutput/)
</details>
<details>
<summary>
GetOrganizationRecommendation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/trustedadvisor/command/GetOrganizationRecommendationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-trustedadvisor/Interface/GetOrganizationRecommendationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-trustedadvisor/Interface/GetOrganizationRecommendationCommandOutput/)
</details>
<details>
<summary>
GetRecommendation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/trustedadvisor/command/GetRecommendationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-trustedadvisor/Interface/GetRecommendationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-trustedadvisor/Interface/GetRecommendationCommandOutput/)
</details>
<details>
<summary>
ListChecks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/trustedadvisor/command/ListChecksCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-trustedadvisor/Interface/ListChecksCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-trustedadvisor/Interface/ListChecksCommandOutput/)
</details>
<details>
<summary>
ListOrganizationRecommendationAccounts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/trustedadvisor/command/ListOrganizationRecommendationAccountsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-trustedadvisor/Interface/ListOrganizationRecommendationAccountsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-trustedadvisor/Interface/ListOrganizationRecommendationAccountsCommandOutput/)
</details>
<details>
<summary>
ListOrganizationRecommendationResources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/trustedadvisor/command/ListOrganizationRecommendationResourcesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-trustedadvisor/Interface/ListOrganizationRecommendationResourcesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-trustedadvisor/Interface/ListOrganizationRecommendationResourcesCommandOutput/)
</details>
<details>
<summary>
ListOrganizationRecommendations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/trustedadvisor/command/ListOrganizationRecommendationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-trustedadvisor/Interface/ListOrganizationRecommendationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-trustedadvisor/Interface/ListOrganizationRecommendationsCommandOutput/)
</details>
<details>
<summary>
ListRecommendationResources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/trustedadvisor/command/ListRecommendationResourcesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-trustedadvisor/Interface/ListRecommendationResourcesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-trustedadvisor/Interface/ListRecommendationResourcesCommandOutput/)
</details>
<details>
<summary>
ListRecommendations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/trustedadvisor/command/ListRecommendationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-trustedadvisor/Interface/ListRecommendationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-trustedadvisor/Interface/ListRecommendationsCommandOutput/)
</details>
<details>
<summary>
UpdateOrganizationRecommendationLifecycle
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/trustedadvisor/command/UpdateOrganizationRecommendationLifecycleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-trustedadvisor/Interface/UpdateOrganizationRecommendationLifecycleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-trustedadvisor/Interface/UpdateOrganizationRecommendationLifecycleCommandOutput/)
</details>
<details>
<summary>
UpdateRecommendationLifecycle
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/trustedadvisor/command/UpdateRecommendationLifecycleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-trustedadvisor/Interface/UpdateRecommendationLifecycleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-trustedadvisor/Interface/UpdateRecommendationLifecycleCommandOutput/)
</details>
