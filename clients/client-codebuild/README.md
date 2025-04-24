<!-- generated file, do not edit directly -->

# @aws-sdk/client-codebuild

## Description

AWS SDK for JavaScript CodeBuild Client for Node.js, Browser and React Native.

<fullname>CodeBuild</fullname>

<p>CodeBuild is a fully managed build service in the cloud. CodeBuild compiles your source code,
runs unit tests, and produces artifacts that are ready to deploy. CodeBuild eliminates the
need to provision, manage, and scale your own build servers. It provides prepackaged
build environments for the most popular programming languages and build tools, such as
Apache Maven, Gradle, and more. You can also fully customize build environments in CodeBuild
to use your own build tools. CodeBuild scales automatically to meet peak build requests. You
pay only for the build time you consume. For more information about CodeBuild, see the <i>
<a href="https://docs.aws.amazon.com/codebuild/latest/userguide/welcome.html">CodeBuild User
Guide</a>.</i>
</p>

## Installing

To install this package, simply type add or install @aws-sdk/client-codebuild
using your favorite package manager:

- `npm install @aws-sdk/client-codebuild`
- `yarn add @aws-sdk/client-codebuild`
- `pnpm add @aws-sdk/client-codebuild`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `CodeBuildClient` and
the commands you need, for example `ListBuildsCommand`:

```js
// ES5 example
const { CodeBuildClient, ListBuildsCommand } = require("@aws-sdk/client-codebuild");
```

```ts
// ES6+ example
import { CodeBuildClient, ListBuildsCommand } from "@aws-sdk/client-codebuild";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new CodeBuildClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListBuildsCommand(params);
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
import * as AWS from "@aws-sdk/client-codebuild";
const client = new AWS.CodeBuild({ region: "REGION" });

// async/await.
try {
  const data = await client.listBuilds(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listBuilds(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listBuilds(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-codebuild` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
BatchDeleteBuilds
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codebuild/command/BatchDeleteBuildsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/BatchDeleteBuildsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/BatchDeleteBuildsCommandOutput/)

</details>
<details>
<summary>
BatchGetBuildBatches
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codebuild/command/BatchGetBuildBatchesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/BatchGetBuildBatchesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/BatchGetBuildBatchesCommandOutput/)

</details>
<details>
<summary>
BatchGetBuilds
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codebuild/command/BatchGetBuildsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/BatchGetBuildsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/BatchGetBuildsCommandOutput/)

</details>
<details>
<summary>
BatchGetCommandExecutions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codebuild/command/BatchGetCommandExecutionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/BatchGetCommandExecutionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/BatchGetCommandExecutionsCommandOutput/)

</details>
<details>
<summary>
BatchGetFleets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codebuild/command/BatchGetFleetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/BatchGetFleetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/BatchGetFleetsCommandOutput/)

</details>
<details>
<summary>
BatchGetProjects
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codebuild/command/BatchGetProjectsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/BatchGetProjectsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/BatchGetProjectsCommandOutput/)

</details>
<details>
<summary>
BatchGetReportGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codebuild/command/BatchGetReportGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/BatchGetReportGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/BatchGetReportGroupsCommandOutput/)

</details>
<details>
<summary>
BatchGetReports
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codebuild/command/BatchGetReportsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/BatchGetReportsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/BatchGetReportsCommandOutput/)

</details>
<details>
<summary>
BatchGetSandboxes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codebuild/command/BatchGetSandboxesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/BatchGetSandboxesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/BatchGetSandboxesCommandOutput/)

</details>
<details>
<summary>
CreateFleet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codebuild/command/CreateFleetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/CreateFleetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/CreateFleetCommandOutput/)

</details>
<details>
<summary>
CreateProject
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codebuild/command/CreateProjectCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/CreateProjectCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/CreateProjectCommandOutput/)

</details>
<details>
<summary>
CreateReportGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codebuild/command/CreateReportGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/CreateReportGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/CreateReportGroupCommandOutput/)

</details>
<details>
<summary>
CreateWebhook
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codebuild/command/CreateWebhookCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/CreateWebhookCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/CreateWebhookCommandOutput/)

</details>
<details>
<summary>
DeleteBuildBatch
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codebuild/command/DeleteBuildBatchCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/DeleteBuildBatchCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/DeleteBuildBatchCommandOutput/)

</details>
<details>
<summary>
DeleteFleet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codebuild/command/DeleteFleetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/DeleteFleetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/DeleteFleetCommandOutput/)

</details>
<details>
<summary>
DeleteProject
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codebuild/command/DeleteProjectCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/DeleteProjectCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/DeleteProjectCommandOutput/)

</details>
<details>
<summary>
DeleteReport
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codebuild/command/DeleteReportCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/DeleteReportCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/DeleteReportCommandOutput/)

</details>
<details>
<summary>
DeleteReportGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codebuild/command/DeleteReportGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/DeleteReportGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/DeleteReportGroupCommandOutput/)

</details>
<details>
<summary>
DeleteResourcePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codebuild/command/DeleteResourcePolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/DeleteResourcePolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/DeleteResourcePolicyCommandOutput/)

</details>
<details>
<summary>
DeleteSourceCredentials
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codebuild/command/DeleteSourceCredentialsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/DeleteSourceCredentialsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/DeleteSourceCredentialsCommandOutput/)

</details>
<details>
<summary>
DeleteWebhook
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codebuild/command/DeleteWebhookCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/DeleteWebhookCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/DeleteWebhookCommandOutput/)

</details>
<details>
<summary>
DescribeCodeCoverages
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codebuild/command/DescribeCodeCoveragesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/DescribeCodeCoveragesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/DescribeCodeCoveragesCommandOutput/)

</details>
<details>
<summary>
DescribeTestCases
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codebuild/command/DescribeTestCasesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/DescribeTestCasesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/DescribeTestCasesCommandOutput/)

</details>
<details>
<summary>
GetReportGroupTrend
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codebuild/command/GetReportGroupTrendCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/GetReportGroupTrendCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/GetReportGroupTrendCommandOutput/)

</details>
<details>
<summary>
GetResourcePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codebuild/command/GetResourcePolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/GetResourcePolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/GetResourcePolicyCommandOutput/)

</details>
<details>
<summary>
ImportSourceCredentials
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codebuild/command/ImportSourceCredentialsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/ImportSourceCredentialsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/ImportSourceCredentialsCommandOutput/)

</details>
<details>
<summary>
InvalidateProjectCache
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codebuild/command/InvalidateProjectCacheCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/InvalidateProjectCacheCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/InvalidateProjectCacheCommandOutput/)

</details>
<details>
<summary>
ListBuildBatches
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codebuild/command/ListBuildBatchesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/ListBuildBatchesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/ListBuildBatchesCommandOutput/)

</details>
<details>
<summary>
ListBuildBatchesForProject
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codebuild/command/ListBuildBatchesForProjectCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/ListBuildBatchesForProjectCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/ListBuildBatchesForProjectCommandOutput/)

</details>
<details>
<summary>
ListBuilds
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codebuild/command/ListBuildsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/ListBuildsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/ListBuildsCommandOutput/)

</details>
<details>
<summary>
ListBuildsForProject
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codebuild/command/ListBuildsForProjectCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/ListBuildsForProjectCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/ListBuildsForProjectCommandOutput/)

</details>
<details>
<summary>
ListCommandExecutionsForSandbox
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codebuild/command/ListCommandExecutionsForSandboxCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/ListCommandExecutionsForSandboxCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/ListCommandExecutionsForSandboxCommandOutput/)

</details>
<details>
<summary>
ListCuratedEnvironmentImages
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codebuild/command/ListCuratedEnvironmentImagesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/ListCuratedEnvironmentImagesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/ListCuratedEnvironmentImagesCommandOutput/)

</details>
<details>
<summary>
ListFleets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codebuild/command/ListFleetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/ListFleetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/ListFleetsCommandOutput/)

</details>
<details>
<summary>
ListProjects
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codebuild/command/ListProjectsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/ListProjectsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/ListProjectsCommandOutput/)

</details>
<details>
<summary>
ListReportGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codebuild/command/ListReportGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/ListReportGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/ListReportGroupsCommandOutput/)

</details>
<details>
<summary>
ListReports
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codebuild/command/ListReportsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/ListReportsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/ListReportsCommandOutput/)

</details>
<details>
<summary>
ListReportsForReportGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codebuild/command/ListReportsForReportGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/ListReportsForReportGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/ListReportsForReportGroupCommandOutput/)

</details>
<details>
<summary>
ListSandboxes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codebuild/command/ListSandboxesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/ListSandboxesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/ListSandboxesCommandOutput/)

</details>
<details>
<summary>
ListSandboxesForProject
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codebuild/command/ListSandboxesForProjectCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/ListSandboxesForProjectCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/ListSandboxesForProjectCommandOutput/)

</details>
<details>
<summary>
ListSharedProjects
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codebuild/command/ListSharedProjectsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/ListSharedProjectsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/ListSharedProjectsCommandOutput/)

</details>
<details>
<summary>
ListSharedReportGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codebuild/command/ListSharedReportGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/ListSharedReportGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/ListSharedReportGroupsCommandOutput/)

</details>
<details>
<summary>
ListSourceCredentials
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codebuild/command/ListSourceCredentialsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/ListSourceCredentialsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/ListSourceCredentialsCommandOutput/)

</details>
<details>
<summary>
PutResourcePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codebuild/command/PutResourcePolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/PutResourcePolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/PutResourcePolicyCommandOutput/)

</details>
<details>
<summary>
RetryBuild
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codebuild/command/RetryBuildCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/RetryBuildCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/RetryBuildCommandOutput/)

</details>
<details>
<summary>
RetryBuildBatch
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codebuild/command/RetryBuildBatchCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/RetryBuildBatchCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/RetryBuildBatchCommandOutput/)

</details>
<details>
<summary>
StartBuild
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codebuild/command/StartBuildCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/StartBuildCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/StartBuildCommandOutput/)

</details>
<details>
<summary>
StartBuildBatch
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codebuild/command/StartBuildBatchCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/StartBuildBatchCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/StartBuildBatchCommandOutput/)

</details>
<details>
<summary>
StartCommandExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codebuild/command/StartCommandExecutionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/StartCommandExecutionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/StartCommandExecutionCommandOutput/)

</details>
<details>
<summary>
StartSandbox
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codebuild/command/StartSandboxCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/StartSandboxCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/StartSandboxCommandOutput/)

</details>
<details>
<summary>
StartSandboxConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codebuild/command/StartSandboxConnectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/StartSandboxConnectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/StartSandboxConnectionCommandOutput/)

</details>
<details>
<summary>
StopBuild
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codebuild/command/StopBuildCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/StopBuildCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/StopBuildCommandOutput/)

</details>
<details>
<summary>
StopBuildBatch
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codebuild/command/StopBuildBatchCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/StopBuildBatchCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/StopBuildBatchCommandOutput/)

</details>
<details>
<summary>
StopSandbox
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codebuild/command/StopSandboxCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/StopSandboxCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/StopSandboxCommandOutput/)

</details>
<details>
<summary>
UpdateFleet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codebuild/command/UpdateFleetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/UpdateFleetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/UpdateFleetCommandOutput/)

</details>
<details>
<summary>
UpdateProject
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codebuild/command/UpdateProjectCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/UpdateProjectCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/UpdateProjectCommandOutput/)

</details>
<details>
<summary>
UpdateProjectVisibility
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codebuild/command/UpdateProjectVisibilityCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/UpdateProjectVisibilityCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/UpdateProjectVisibilityCommandOutput/)

</details>
<details>
<summary>
UpdateReportGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codebuild/command/UpdateReportGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/UpdateReportGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/UpdateReportGroupCommandOutput/)

</details>
<details>
<summary>
UpdateWebhook
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codebuild/command/UpdateWebhookCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/UpdateWebhookCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codebuild/Interface/UpdateWebhookCommandOutput/)

</details>
