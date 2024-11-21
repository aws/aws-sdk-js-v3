<!-- generated file, do not edit directly -->

# @aws-sdk/client-resiliencehub

## Description

AWS SDK for JavaScript Resiliencehub Client for Node.js, Browser and React Native.

<p>Resilience Hub helps you proactively prepare and protect your Amazon Web Services applications from
disruptions. It offers continual resiliency assessment and validation that integrates
into your software development lifecycle. This enables you to uncover resiliency weaknesses,
ensure recovery time objective (RTO) and recovery point objective (RPO) targets for your
applications are met, and resolve issues before they are released into production. </p>

## Installing

To install this package, simply type add or install @aws-sdk/client-resiliencehub
using your favorite package manager:

- `npm install @aws-sdk/client-resiliencehub`
- `yarn add @aws-sdk/client-resiliencehub`
- `pnpm add @aws-sdk/client-resiliencehub`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `ResiliencehubClient` and
the commands you need, for example `ListAppsCommand`:

```js
// ES5 example
const { ResiliencehubClient, ListAppsCommand } = require("@aws-sdk/client-resiliencehub");
```

```ts
// ES6+ example
import { ResiliencehubClient, ListAppsCommand } from "@aws-sdk/client-resiliencehub";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new ResiliencehubClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListAppsCommand(params);
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
import * as AWS from "@aws-sdk/client-resiliencehub";
const client = new AWS.Resiliencehub({ region: "REGION" });

// async/await.
try {
  const data = await client.listApps(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listApps(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listApps(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-resiliencehub` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AcceptResourceGroupingRecommendations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/AcceptResourceGroupingRecommendationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/AcceptResourceGroupingRecommendationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/AcceptResourceGroupingRecommendationsCommandOutput/)

</details>
<details>
<summary>
AddDraftAppVersionResourceMappings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/AddDraftAppVersionResourceMappingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/AddDraftAppVersionResourceMappingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/AddDraftAppVersionResourceMappingsCommandOutput/)

</details>
<details>
<summary>
BatchUpdateRecommendationStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/BatchUpdateRecommendationStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/BatchUpdateRecommendationStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/BatchUpdateRecommendationStatusCommandOutput/)

</details>
<details>
<summary>
CreateApp
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/CreateAppCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/CreateAppCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/CreateAppCommandOutput/)

</details>
<details>
<summary>
CreateAppVersionAppComponent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/CreateAppVersionAppComponentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/CreateAppVersionAppComponentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/CreateAppVersionAppComponentCommandOutput/)

</details>
<details>
<summary>
CreateAppVersionResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/CreateAppVersionResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/CreateAppVersionResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/CreateAppVersionResourceCommandOutput/)

</details>
<details>
<summary>
CreateRecommendationTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/CreateRecommendationTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/CreateRecommendationTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/CreateRecommendationTemplateCommandOutput/)

</details>
<details>
<summary>
CreateResiliencyPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/CreateResiliencyPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/CreateResiliencyPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/CreateResiliencyPolicyCommandOutput/)

</details>
<details>
<summary>
DeleteApp
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/DeleteAppCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/DeleteAppCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/DeleteAppCommandOutput/)

</details>
<details>
<summary>
DeleteAppAssessment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/DeleteAppAssessmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/DeleteAppAssessmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/DeleteAppAssessmentCommandOutput/)

</details>
<details>
<summary>
DeleteAppInputSource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/DeleteAppInputSourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/DeleteAppInputSourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/DeleteAppInputSourceCommandOutput/)

</details>
<details>
<summary>
DeleteAppVersionAppComponent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/DeleteAppVersionAppComponentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/DeleteAppVersionAppComponentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/DeleteAppVersionAppComponentCommandOutput/)

</details>
<details>
<summary>
DeleteAppVersionResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/DeleteAppVersionResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/DeleteAppVersionResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/DeleteAppVersionResourceCommandOutput/)

</details>
<details>
<summary>
DeleteRecommendationTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/DeleteRecommendationTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/DeleteRecommendationTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/DeleteRecommendationTemplateCommandOutput/)

</details>
<details>
<summary>
DeleteResiliencyPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/DeleteResiliencyPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/DeleteResiliencyPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/DeleteResiliencyPolicyCommandOutput/)

</details>
<details>
<summary>
DescribeApp
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/DescribeAppCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/DescribeAppCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/DescribeAppCommandOutput/)

</details>
<details>
<summary>
DescribeAppAssessment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/DescribeAppAssessmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/DescribeAppAssessmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/DescribeAppAssessmentCommandOutput/)

</details>
<details>
<summary>
DescribeAppVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/DescribeAppVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/DescribeAppVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/DescribeAppVersionCommandOutput/)

</details>
<details>
<summary>
DescribeAppVersionAppComponent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/DescribeAppVersionAppComponentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/DescribeAppVersionAppComponentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/DescribeAppVersionAppComponentCommandOutput/)

</details>
<details>
<summary>
DescribeAppVersionResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/DescribeAppVersionResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/DescribeAppVersionResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/DescribeAppVersionResourceCommandOutput/)

</details>
<details>
<summary>
DescribeAppVersionResourcesResolutionStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/DescribeAppVersionResourcesResolutionStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/DescribeAppVersionResourcesResolutionStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/DescribeAppVersionResourcesResolutionStatusCommandOutput/)

</details>
<details>
<summary>
DescribeAppVersionTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/DescribeAppVersionTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/DescribeAppVersionTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/DescribeAppVersionTemplateCommandOutput/)

</details>
<details>
<summary>
DescribeDraftAppVersionResourcesImportStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/DescribeDraftAppVersionResourcesImportStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/DescribeDraftAppVersionResourcesImportStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/DescribeDraftAppVersionResourcesImportStatusCommandOutput/)

</details>
<details>
<summary>
DescribeMetricsExport
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/DescribeMetricsExportCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/DescribeMetricsExportCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/DescribeMetricsExportCommandOutput/)

</details>
<details>
<summary>
DescribeResiliencyPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/DescribeResiliencyPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/DescribeResiliencyPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/DescribeResiliencyPolicyCommandOutput/)

</details>
<details>
<summary>
DescribeResourceGroupingRecommendationTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/DescribeResourceGroupingRecommendationTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/DescribeResourceGroupingRecommendationTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/DescribeResourceGroupingRecommendationTaskCommandOutput/)

</details>
<details>
<summary>
ImportResourcesToDraftAppVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/ImportResourcesToDraftAppVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/ImportResourcesToDraftAppVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/ImportResourcesToDraftAppVersionCommandOutput/)

</details>
<details>
<summary>
ListAlarmRecommendations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/ListAlarmRecommendationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/ListAlarmRecommendationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/ListAlarmRecommendationsCommandOutput/)

</details>
<details>
<summary>
ListAppAssessmentComplianceDrifts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/ListAppAssessmentComplianceDriftsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/ListAppAssessmentComplianceDriftsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/ListAppAssessmentComplianceDriftsCommandOutput/)

</details>
<details>
<summary>
ListAppAssessmentResourceDrifts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/ListAppAssessmentResourceDriftsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/ListAppAssessmentResourceDriftsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/ListAppAssessmentResourceDriftsCommandOutput/)

</details>
<details>
<summary>
ListAppAssessments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/ListAppAssessmentsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/ListAppAssessmentsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/ListAppAssessmentsCommandOutput/)

</details>
<details>
<summary>
ListAppComponentCompliances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/ListAppComponentCompliancesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/ListAppComponentCompliancesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/ListAppComponentCompliancesCommandOutput/)

</details>
<details>
<summary>
ListAppComponentRecommendations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/ListAppComponentRecommendationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/ListAppComponentRecommendationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/ListAppComponentRecommendationsCommandOutput/)

</details>
<details>
<summary>
ListAppInputSources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/ListAppInputSourcesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/ListAppInputSourcesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/ListAppInputSourcesCommandOutput/)

</details>
<details>
<summary>
ListApps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/ListAppsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/ListAppsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/ListAppsCommandOutput/)

</details>
<details>
<summary>
ListAppVersionAppComponents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/ListAppVersionAppComponentsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/ListAppVersionAppComponentsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/ListAppVersionAppComponentsCommandOutput/)

</details>
<details>
<summary>
ListAppVersionResourceMappings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/ListAppVersionResourceMappingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/ListAppVersionResourceMappingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/ListAppVersionResourceMappingsCommandOutput/)

</details>
<details>
<summary>
ListAppVersionResources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/ListAppVersionResourcesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/ListAppVersionResourcesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/ListAppVersionResourcesCommandOutput/)

</details>
<details>
<summary>
ListAppVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/ListAppVersionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/ListAppVersionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/ListAppVersionsCommandOutput/)

</details>
<details>
<summary>
ListMetrics
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/ListMetricsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/ListMetricsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/ListMetricsCommandOutput/)

</details>
<details>
<summary>
ListRecommendationTemplates
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/ListRecommendationTemplatesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/ListRecommendationTemplatesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/ListRecommendationTemplatesCommandOutput/)

</details>
<details>
<summary>
ListResiliencyPolicies
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/ListResiliencyPoliciesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/ListResiliencyPoliciesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/ListResiliencyPoliciesCommandOutput/)

</details>
<details>
<summary>
ListResourceGroupingRecommendations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/ListResourceGroupingRecommendationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/ListResourceGroupingRecommendationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/ListResourceGroupingRecommendationsCommandOutput/)

</details>
<details>
<summary>
ListSopRecommendations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/ListSopRecommendationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/ListSopRecommendationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/ListSopRecommendationsCommandOutput/)

</details>
<details>
<summary>
ListSuggestedResiliencyPolicies
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/ListSuggestedResiliencyPoliciesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/ListSuggestedResiliencyPoliciesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/ListSuggestedResiliencyPoliciesCommandOutput/)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/ListTagsForResourceCommandOutput/)

</details>
<details>
<summary>
ListTestRecommendations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/ListTestRecommendationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/ListTestRecommendationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/ListTestRecommendationsCommandOutput/)

</details>
<details>
<summary>
ListUnsupportedAppVersionResources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/ListUnsupportedAppVersionResourcesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/ListUnsupportedAppVersionResourcesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/ListUnsupportedAppVersionResourcesCommandOutput/)

</details>
<details>
<summary>
PublishAppVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/PublishAppVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/PublishAppVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/PublishAppVersionCommandOutput/)

</details>
<details>
<summary>
PutDraftAppVersionTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/PutDraftAppVersionTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/PutDraftAppVersionTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/PutDraftAppVersionTemplateCommandOutput/)

</details>
<details>
<summary>
RejectResourceGroupingRecommendations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/RejectResourceGroupingRecommendationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/RejectResourceGroupingRecommendationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/RejectResourceGroupingRecommendationsCommandOutput/)

</details>
<details>
<summary>
RemoveDraftAppVersionResourceMappings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/RemoveDraftAppVersionResourceMappingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/RemoveDraftAppVersionResourceMappingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/RemoveDraftAppVersionResourceMappingsCommandOutput/)

</details>
<details>
<summary>
ResolveAppVersionResources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/ResolveAppVersionResourcesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/ResolveAppVersionResourcesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/ResolveAppVersionResourcesCommandOutput/)

</details>
<details>
<summary>
StartAppAssessment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/StartAppAssessmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/StartAppAssessmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/StartAppAssessmentCommandOutput/)

</details>
<details>
<summary>
StartMetricsExport
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/StartMetricsExportCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/StartMetricsExportCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/StartMetricsExportCommandOutput/)

</details>
<details>
<summary>
StartResourceGroupingRecommendationTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/StartResourceGroupingRecommendationTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/StartResourceGroupingRecommendationTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/StartResourceGroupingRecommendationTaskCommandOutput/)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/TagResourceCommandOutput/)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/UntagResourceCommandOutput/)

</details>
<details>
<summary>
UpdateApp
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/UpdateAppCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/UpdateAppCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/UpdateAppCommandOutput/)

</details>
<details>
<summary>
UpdateAppVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/UpdateAppVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/UpdateAppVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/UpdateAppVersionCommandOutput/)

</details>
<details>
<summary>
UpdateAppVersionAppComponent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/UpdateAppVersionAppComponentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/UpdateAppVersionAppComponentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/UpdateAppVersionAppComponentCommandOutput/)

</details>
<details>
<summary>
UpdateAppVersionResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/UpdateAppVersionResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/UpdateAppVersionResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/UpdateAppVersionResourceCommandOutput/)

</details>
<details>
<summary>
UpdateResiliencyPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resiliencehub/command/UpdateResiliencyPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/UpdateResiliencyPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resiliencehub/Interface/UpdateResiliencyPolicyCommandOutput/)

</details>
