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

To install the this package, simply type add or install @aws-sdk/client-codebuild
using your favorite package manager:

- `npm install @aws-sdk/client-codebuild`
- `yarn add @aws-sdk/client-codebuild`
- `pnpm add @aws-sdk/client-codebuild`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `CodeBuildClient` and
the commands you need, for example `BatchDeleteBuildsCommand`:

```js
// ES5 example
const { CodeBuildClient, BatchDeleteBuildsCommand } = require("@aws-sdk/client-codebuild");
```

```ts
// ES6+ example
import { CodeBuildClient, BatchDeleteBuildsCommand } from "@aws-sdk/client-codebuild";
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
const command = new BatchDeleteBuildsCommand(params);
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
  const data = await client.batchDeleteBuilds(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .batchDeleteBuilds(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.batchDeleteBuilds(params, (err, data) => {
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
  const { requestId, cfId, extendedRequestId } = error.$$metadata;
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/classes/batchdeletebuildscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/batchdeletebuildscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/batchdeletebuildscommandoutput.html)

</details>
<details>
<summary>
BatchGetBuildBatches
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/classes/batchgetbuildbatchescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/batchgetbuildbatchescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/batchgetbuildbatchescommandoutput.html)

</details>
<details>
<summary>
BatchGetBuilds
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/classes/batchgetbuildscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/batchgetbuildscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/batchgetbuildscommandoutput.html)

</details>
<details>
<summary>
BatchGetProjects
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/classes/batchgetprojectscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/batchgetprojectscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/batchgetprojectscommandoutput.html)

</details>
<details>
<summary>
BatchGetReportGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/classes/batchgetreportgroupscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/batchgetreportgroupscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/batchgetreportgroupscommandoutput.html)

</details>
<details>
<summary>
BatchGetReports
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/classes/batchgetreportscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/batchgetreportscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/batchgetreportscommandoutput.html)

</details>
<details>
<summary>
CreateProject
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/classes/createprojectcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/createprojectcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/createprojectcommandoutput.html)

</details>
<details>
<summary>
CreateReportGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/classes/createreportgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/createreportgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/createreportgroupcommandoutput.html)

</details>
<details>
<summary>
CreateWebhook
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/classes/createwebhookcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/createwebhookcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/createwebhookcommandoutput.html)

</details>
<details>
<summary>
DeleteBuildBatch
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/classes/deletebuildbatchcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/deletebuildbatchcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/deletebuildbatchcommandoutput.html)

</details>
<details>
<summary>
DeleteProject
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/classes/deleteprojectcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/deleteprojectcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/deleteprojectcommandoutput.html)

</details>
<details>
<summary>
DeleteReport
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/classes/deletereportcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/deletereportcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/deletereportcommandoutput.html)

</details>
<details>
<summary>
DeleteReportGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/classes/deletereportgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/deletereportgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/deletereportgroupcommandoutput.html)

</details>
<details>
<summary>
DeleteResourcePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/classes/deleteresourcepolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/deleteresourcepolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/deleteresourcepolicycommandoutput.html)

</details>
<details>
<summary>
DeleteSourceCredentials
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/classes/deletesourcecredentialscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/deletesourcecredentialscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/deletesourcecredentialscommandoutput.html)

</details>
<details>
<summary>
DeleteWebhook
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/classes/deletewebhookcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/deletewebhookcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/deletewebhookcommandoutput.html)

</details>
<details>
<summary>
DescribeCodeCoverages
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/classes/describecodecoveragescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/describecodecoveragescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/describecodecoveragescommandoutput.html)

</details>
<details>
<summary>
DescribeTestCases
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/classes/describetestcasescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/describetestcasescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/describetestcasescommandoutput.html)

</details>
<details>
<summary>
GetReportGroupTrend
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/classes/getreportgrouptrendcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/getreportgrouptrendcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/getreportgrouptrendcommandoutput.html)

</details>
<details>
<summary>
GetResourcePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/classes/getresourcepolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/getresourcepolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/getresourcepolicycommandoutput.html)

</details>
<details>
<summary>
ImportSourceCredentials
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/classes/importsourcecredentialscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/importsourcecredentialscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/importsourcecredentialscommandoutput.html)

</details>
<details>
<summary>
InvalidateProjectCache
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/classes/invalidateprojectcachecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/invalidateprojectcachecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/invalidateprojectcachecommandoutput.html)

</details>
<details>
<summary>
ListBuildBatches
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/classes/listbuildbatchescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/listbuildbatchescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/listbuildbatchescommandoutput.html)

</details>
<details>
<summary>
ListBuildBatchesForProject
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/classes/listbuildbatchesforprojectcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/listbuildbatchesforprojectcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/listbuildbatchesforprojectcommandoutput.html)

</details>
<details>
<summary>
ListBuilds
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/classes/listbuildscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/listbuildscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/listbuildscommandoutput.html)

</details>
<details>
<summary>
ListBuildsForProject
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/classes/listbuildsforprojectcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/listbuildsforprojectcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/listbuildsforprojectcommandoutput.html)

</details>
<details>
<summary>
ListCuratedEnvironmentImages
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/classes/listcuratedenvironmentimagescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/listcuratedenvironmentimagescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/listcuratedenvironmentimagescommandoutput.html)

</details>
<details>
<summary>
ListProjects
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/classes/listprojectscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/listprojectscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/listprojectscommandoutput.html)

</details>
<details>
<summary>
ListReportGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/classes/listreportgroupscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/listreportgroupscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/listreportgroupscommandoutput.html)

</details>
<details>
<summary>
ListReports
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/classes/listreportscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/listreportscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/listreportscommandoutput.html)

</details>
<details>
<summary>
ListReportsForReportGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/classes/listreportsforreportgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/listreportsforreportgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/listreportsforreportgroupcommandoutput.html)

</details>
<details>
<summary>
ListSharedProjects
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/classes/listsharedprojectscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/listsharedprojectscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/listsharedprojectscommandoutput.html)

</details>
<details>
<summary>
ListSharedReportGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/classes/listsharedreportgroupscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/listsharedreportgroupscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/listsharedreportgroupscommandoutput.html)

</details>
<details>
<summary>
ListSourceCredentials
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/classes/listsourcecredentialscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/listsourcecredentialscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/listsourcecredentialscommandoutput.html)

</details>
<details>
<summary>
PutResourcePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/classes/putresourcepolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/putresourcepolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/putresourcepolicycommandoutput.html)

</details>
<details>
<summary>
RetryBuild
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/classes/retrybuildcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/retrybuildcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/retrybuildcommandoutput.html)

</details>
<details>
<summary>
RetryBuildBatch
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/classes/retrybuildbatchcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/retrybuildbatchcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/retrybuildbatchcommandoutput.html)

</details>
<details>
<summary>
StartBuild
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/classes/startbuildcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/startbuildcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/startbuildcommandoutput.html)

</details>
<details>
<summary>
StartBuildBatch
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/classes/startbuildbatchcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/startbuildbatchcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/startbuildbatchcommandoutput.html)

</details>
<details>
<summary>
StopBuild
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/classes/stopbuildcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/stopbuildcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/stopbuildcommandoutput.html)

</details>
<details>
<summary>
StopBuildBatch
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/classes/stopbuildbatchcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/stopbuildbatchcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/stopbuildbatchcommandoutput.html)

</details>
<details>
<summary>
UpdateProject
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/classes/updateprojectcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/updateprojectcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/updateprojectcommandoutput.html)

</details>
<details>
<summary>
UpdateProjectVisibility
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/classes/updateprojectvisibilitycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/updateprojectvisibilitycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/updateprojectvisibilitycommandoutput.html)

</details>
<details>
<summary>
UpdateReportGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/classes/updatereportgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/updatereportgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/updatereportgroupcommandoutput.html)

</details>
<details>
<summary>
UpdateWebhook
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/classes/updatewebhookcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/updatewebhookcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codebuild/interfaces/updatewebhookcommandoutput.html)

</details>
