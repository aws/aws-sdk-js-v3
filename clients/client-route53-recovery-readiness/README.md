<!-- generated file, do not edit directly -->

# @aws-sdk/client-route53-recovery-readiness

## Description

AWS SDK for JavaScript Route53RecoveryReadiness Client for Node.js, Browser and React Native.

<p>Recovery readiness</p>

## Installing
To install this package, simply type add or install @aws-sdk/client-route53-recovery-readiness
using your favorite package manager:
- `npm install @aws-sdk/client-route53-recovery-readiness`
- `yarn add @aws-sdk/client-route53-recovery-readiness`
- `pnpm add @aws-sdk/client-route53-recovery-readiness`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `Route53RecoveryReadinessClient` and
the commands you need, for example `ListCellsCommand`:

```js
// ES5 example
const { Route53RecoveryReadinessClient, ListCellsCommand } = require("@aws-sdk/client-route53-recovery-readiness");
```

```ts
// ES6+ example
import { Route53RecoveryReadinessClient, ListCellsCommand } from "@aws-sdk/client-route53-recovery-readiness";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new Route53RecoveryReadinessClient({ region: "REGION" });

const params = { /** input parameters */ };
const command = new ListCellsCommand(params);
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
import * as AWS from "@aws-sdk/client-route53-recovery-readiness";
const client = new AWS.Route53RecoveryReadiness({ region: "REGION" });

// async/await.
try {
  const data = await client.listCells(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listCells(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listCells(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-route53-recovery-readiness` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CreateCell
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53-recovery-readiness/command/CreateCellCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/CreateCellCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/CreateCellCommandOutput/)
</details>
<details>
<summary>
CreateCrossAccountAuthorization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53-recovery-readiness/command/CreateCrossAccountAuthorizationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/CreateCrossAccountAuthorizationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/CreateCrossAccountAuthorizationCommandOutput/)
</details>
<details>
<summary>
CreateReadinessCheck
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53-recovery-readiness/command/CreateReadinessCheckCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/CreateReadinessCheckCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/CreateReadinessCheckCommandOutput/)
</details>
<details>
<summary>
CreateRecoveryGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53-recovery-readiness/command/CreateRecoveryGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/CreateRecoveryGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/CreateRecoveryGroupCommandOutput/)
</details>
<details>
<summary>
CreateResourceSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53-recovery-readiness/command/CreateResourceSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/CreateResourceSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/CreateResourceSetCommandOutput/)
</details>
<details>
<summary>
DeleteCell
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53-recovery-readiness/command/DeleteCellCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/DeleteCellCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/DeleteCellCommandOutput/)
</details>
<details>
<summary>
DeleteCrossAccountAuthorization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53-recovery-readiness/command/DeleteCrossAccountAuthorizationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/DeleteCrossAccountAuthorizationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/DeleteCrossAccountAuthorizationCommandOutput/)
</details>
<details>
<summary>
DeleteReadinessCheck
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53-recovery-readiness/command/DeleteReadinessCheckCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/DeleteReadinessCheckCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/DeleteReadinessCheckCommandOutput/)
</details>
<details>
<summary>
DeleteRecoveryGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53-recovery-readiness/command/DeleteRecoveryGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/DeleteRecoveryGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/DeleteRecoveryGroupCommandOutput/)
</details>
<details>
<summary>
DeleteResourceSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53-recovery-readiness/command/DeleteResourceSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/DeleteResourceSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/DeleteResourceSetCommandOutput/)
</details>
<details>
<summary>
GetArchitectureRecommendations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53-recovery-readiness/command/GetArchitectureRecommendationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/GetArchitectureRecommendationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/GetArchitectureRecommendationsCommandOutput/)
</details>
<details>
<summary>
GetCell
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53-recovery-readiness/command/GetCellCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/GetCellCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/GetCellCommandOutput/)
</details>
<details>
<summary>
GetCellReadinessSummary
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53-recovery-readiness/command/GetCellReadinessSummaryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/GetCellReadinessSummaryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/GetCellReadinessSummaryCommandOutput/)
</details>
<details>
<summary>
GetReadinessCheck
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53-recovery-readiness/command/GetReadinessCheckCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/GetReadinessCheckCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/GetReadinessCheckCommandOutput/)
</details>
<details>
<summary>
GetReadinessCheckResourceStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53-recovery-readiness/command/GetReadinessCheckResourceStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/GetReadinessCheckResourceStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/GetReadinessCheckResourceStatusCommandOutput/)
</details>
<details>
<summary>
GetReadinessCheckStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53-recovery-readiness/command/GetReadinessCheckStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/GetReadinessCheckStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/GetReadinessCheckStatusCommandOutput/)
</details>
<details>
<summary>
GetRecoveryGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53-recovery-readiness/command/GetRecoveryGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/GetRecoveryGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/GetRecoveryGroupCommandOutput/)
</details>
<details>
<summary>
GetRecoveryGroupReadinessSummary
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53-recovery-readiness/command/GetRecoveryGroupReadinessSummaryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/GetRecoveryGroupReadinessSummaryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/GetRecoveryGroupReadinessSummaryCommandOutput/)
</details>
<details>
<summary>
GetResourceSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53-recovery-readiness/command/GetResourceSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/GetResourceSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/GetResourceSetCommandOutput/)
</details>
<details>
<summary>
ListCells
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53-recovery-readiness/command/ListCellsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/ListCellsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/ListCellsCommandOutput/)
</details>
<details>
<summary>
ListCrossAccountAuthorizations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53-recovery-readiness/command/ListCrossAccountAuthorizationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/ListCrossAccountAuthorizationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/ListCrossAccountAuthorizationsCommandOutput/)
</details>
<details>
<summary>
ListReadinessChecks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53-recovery-readiness/command/ListReadinessChecksCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/ListReadinessChecksCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/ListReadinessChecksCommandOutput/)
</details>
<details>
<summary>
ListRecoveryGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53-recovery-readiness/command/ListRecoveryGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/ListRecoveryGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/ListRecoveryGroupsCommandOutput/)
</details>
<details>
<summary>
ListResourceSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53-recovery-readiness/command/ListResourceSetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/ListResourceSetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/ListResourceSetsCommandOutput/)
</details>
<details>
<summary>
ListRules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53-recovery-readiness/command/ListRulesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/ListRulesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/ListRulesCommandOutput/)
</details>
<details>
<summary>
ListTagsForResources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53-recovery-readiness/command/ListTagsForResourcesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/ListTagsForResourcesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/ListTagsForResourcesCommandOutput/)
</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53-recovery-readiness/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/TagResourceCommandOutput/)
</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53-recovery-readiness/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/UntagResourceCommandOutput/)
</details>
<details>
<summary>
UpdateCell
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53-recovery-readiness/command/UpdateCellCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/UpdateCellCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/UpdateCellCommandOutput/)
</details>
<details>
<summary>
UpdateReadinessCheck
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53-recovery-readiness/command/UpdateReadinessCheckCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/UpdateReadinessCheckCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/UpdateReadinessCheckCommandOutput/)
</details>
<details>
<summary>
UpdateRecoveryGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53-recovery-readiness/command/UpdateRecoveryGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/UpdateRecoveryGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/UpdateRecoveryGroupCommandOutput/)
</details>
<details>
<summary>
UpdateResourceSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/route53-recovery-readiness/command/UpdateResourceSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/UpdateResourceSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-route53-recovery-readiness/Interface/UpdateResourceSetCommandOutput/)
</details>
