<!-- generated file, do not edit directly -->

# @aws-sdk/client-application-insights

## Description

AWS SDK for JavaScript ApplicationInsights Client for Node.js, Browser and React Native.

<fullname>Amazon CloudWatch Application Insights</fullname>
<p> Amazon CloudWatch Application Insights is a service that helps you detect common
problems with your applications. It enables you to pinpoint the source of issues in your
applications (built with technologies such as Microsoft IIS, .NET, and Microsoft SQL
Server), by providing key insights into detected problems.</p>
<p>After you onboard your application, CloudWatch Application Insights identifies,
recommends, and sets up metrics and logs. It continuously analyzes and correlates your
metrics and logs for unusual behavior to surface actionable problems with your application.
For example, if your application is slow and unresponsive and leading to HTTP 500 errors in
your Application Load Balancer (ALB), Application Insights informs you that a memory
pressure problem with your SQL Server database is occurring. It bases this analysis on
impactful metrics and log errors. </p>

## Installing
To install this package, simply type add or install @aws-sdk/client-application-insights
using your favorite package manager:
- `npm install @aws-sdk/client-application-insights`
- `yarn add @aws-sdk/client-application-insights`
- `pnpm add @aws-sdk/client-application-insights`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `ApplicationInsightsClient` and
the commands you need, for example `ListApplicationsCommand`:

```js
// ES5 example
const { ApplicationInsightsClient, ListApplicationsCommand } = require("@aws-sdk/client-application-insights");
```

```ts
// ES6+ example
import { ApplicationInsightsClient, ListApplicationsCommand } from "@aws-sdk/client-application-insights";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new ApplicationInsightsClient({ region: "REGION" });

const params = { /** input parameters */ };
const command = new ListApplicationsCommand(params);
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
import * as AWS from "@aws-sdk/client-application-insights";
const client = new AWS.ApplicationInsights({ region: "REGION" });

// async/await.
try {
  const data = await client.listApplications(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listApplications(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listApplications(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-application-insights` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AddWorkload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/application-insights/command/AddWorkloadCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/AddWorkloadCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/AddWorkloadCommandOutput/)
</details>
<details>
<summary>
CreateApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/application-insights/command/CreateApplicationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/CreateApplicationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/CreateApplicationCommandOutput/)
</details>
<details>
<summary>
CreateComponent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/application-insights/command/CreateComponentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/CreateComponentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/CreateComponentCommandOutput/)
</details>
<details>
<summary>
CreateLogPattern
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/application-insights/command/CreateLogPatternCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/CreateLogPatternCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/CreateLogPatternCommandOutput/)
</details>
<details>
<summary>
DeleteApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/application-insights/command/DeleteApplicationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/DeleteApplicationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/DeleteApplicationCommandOutput/)
</details>
<details>
<summary>
DeleteComponent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/application-insights/command/DeleteComponentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/DeleteComponentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/DeleteComponentCommandOutput/)
</details>
<details>
<summary>
DeleteLogPattern
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/application-insights/command/DeleteLogPatternCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/DeleteLogPatternCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/DeleteLogPatternCommandOutput/)
</details>
<details>
<summary>
DescribeApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/application-insights/command/DescribeApplicationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/DescribeApplicationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/DescribeApplicationCommandOutput/)
</details>
<details>
<summary>
DescribeComponent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/application-insights/command/DescribeComponentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/DescribeComponentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/DescribeComponentCommandOutput/)
</details>
<details>
<summary>
DescribeComponentConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/application-insights/command/DescribeComponentConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/DescribeComponentConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/DescribeComponentConfigurationCommandOutput/)
</details>
<details>
<summary>
DescribeComponentConfigurationRecommendation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/application-insights/command/DescribeComponentConfigurationRecommendationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/DescribeComponentConfigurationRecommendationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/DescribeComponentConfigurationRecommendationCommandOutput/)
</details>
<details>
<summary>
DescribeLogPattern
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/application-insights/command/DescribeLogPatternCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/DescribeLogPatternCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/DescribeLogPatternCommandOutput/)
</details>
<details>
<summary>
DescribeObservation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/application-insights/command/DescribeObservationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/DescribeObservationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/DescribeObservationCommandOutput/)
</details>
<details>
<summary>
DescribeProblem
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/application-insights/command/DescribeProblemCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/DescribeProblemCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/DescribeProblemCommandOutput/)
</details>
<details>
<summary>
DescribeProblemObservations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/application-insights/command/DescribeProblemObservationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/DescribeProblemObservationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/DescribeProblemObservationsCommandOutput/)
</details>
<details>
<summary>
DescribeWorkload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/application-insights/command/DescribeWorkloadCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/DescribeWorkloadCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/DescribeWorkloadCommandOutput/)
</details>
<details>
<summary>
ListApplications
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/application-insights/command/ListApplicationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/ListApplicationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/ListApplicationsCommandOutput/)
</details>
<details>
<summary>
ListComponents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/application-insights/command/ListComponentsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/ListComponentsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/ListComponentsCommandOutput/)
</details>
<details>
<summary>
ListConfigurationHistory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/application-insights/command/ListConfigurationHistoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/ListConfigurationHistoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/ListConfigurationHistoryCommandOutput/)
</details>
<details>
<summary>
ListLogPatterns
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/application-insights/command/ListLogPatternsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/ListLogPatternsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/ListLogPatternsCommandOutput/)
</details>
<details>
<summary>
ListLogPatternSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/application-insights/command/ListLogPatternSetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/ListLogPatternSetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/ListLogPatternSetsCommandOutput/)
</details>
<details>
<summary>
ListProblems
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/application-insights/command/ListProblemsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/ListProblemsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/ListProblemsCommandOutput/)
</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/application-insights/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/ListTagsForResourceCommandOutput/)
</details>
<details>
<summary>
ListWorkloads
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/application-insights/command/ListWorkloadsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/ListWorkloadsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/ListWorkloadsCommandOutput/)
</details>
<details>
<summary>
RemoveWorkload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/application-insights/command/RemoveWorkloadCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/RemoveWorkloadCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/RemoveWorkloadCommandOutput/)
</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/application-insights/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/TagResourceCommandOutput/)
</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/application-insights/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/UntagResourceCommandOutput/)
</details>
<details>
<summary>
UpdateApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/application-insights/command/UpdateApplicationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/UpdateApplicationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/UpdateApplicationCommandOutput/)
</details>
<details>
<summary>
UpdateComponent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/application-insights/command/UpdateComponentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/UpdateComponentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/UpdateComponentCommandOutput/)
</details>
<details>
<summary>
UpdateComponentConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/application-insights/command/UpdateComponentConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/UpdateComponentConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/UpdateComponentConfigurationCommandOutput/)
</details>
<details>
<summary>
UpdateLogPattern
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/application-insights/command/UpdateLogPatternCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/UpdateLogPatternCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/UpdateLogPatternCommandOutput/)
</details>
<details>
<summary>
UpdateProblem
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/application-insights/command/UpdateProblemCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/UpdateProblemCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/UpdateProblemCommandOutput/)
</details>
<details>
<summary>
UpdateWorkload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/application-insights/command/UpdateWorkloadCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/UpdateWorkloadCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-application-insights/Interface/UpdateWorkloadCommandOutput/)
</details>
