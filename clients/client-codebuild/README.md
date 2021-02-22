# @aws-sdk/client-codebuild

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-codebuild/latest.svg)](https://www.npmjs.com/package/@aws-sdk/client-codebuild)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-codebuild.svg)](https://www.npmjs.com/package/@aws-sdk/client-codebuild)

## Description

AWS SDK for JavaScript CodeBuild Client for Node.js, Browser and React Native.

<fullname>AWS CodeBuild</fullname>

<p>AWS CodeBuild is a fully managed build service in the cloud. AWS CodeBuild compiles your source code,
runs unit tests, and produces artifacts that are ready to deploy. AWS CodeBuild eliminates the
need to provision, manage, and scale your own build servers. It provides prepackaged
build environments for the most popular programming languages and build tools, such as
Apache Maven, Gradle, and more. You can also fully customize build environments in AWS CodeBuild
to use your own build tools. AWS CodeBuild scales automatically to meet peak build requests. You
pay only for the build time you consume. For more information about AWS CodeBuild, see the <i>
<a href="https://docs.aws.amazon.com/codebuild/latest/userguide/welcome.html">AWS CodeBuild User
Guide</a>.</i>
</p>
<p>AWS CodeBuild supports these operations:</p>
<ul>
<li>
<p>
<code>BatchDeleteBuilds</code>: Deletes one or more builds.</p>
</li>
<li>
<p>
<code>BatchGetBuilds</code>: Gets information about one or more builds.</p>
</li>
<li>
<p>
<code>BatchGetProjects</code>: Gets information about one or more build
projects. A <i>build project</i> defines how AWS CodeBuild runs a build.
This includes information such as where to get the source code to build, the
build environment to use, the build commands to run, and where to store the
build output. A <i>build environment</i> is a representation of
operating system, programming language runtime, and tools that AWS CodeBuild uses to run
a build. You can add tags to build projects to help manage your resources and
costs.</p>
</li>
<li>
<p>
<code>BatchGetReportGroups</code>: Returns an array of report groups. </p>
</li>
<li>
<p>
<code>BatchGetReports</code>: Returns an array of reports. </p>
</li>
<li>
<p>
<code>CreateProject</code>: Creates a build project.</p>
</li>
<li>
<p>
<code>CreateReportGroup</code>: Creates a report group. A report group contains
a collection of reports. </p>
</li>
<li>
<p>
<code>CreateWebhook</code>: For an existing AWS CodeBuild build project that has its
source code stored in a GitHub or Bitbucket repository, enables AWS CodeBuild to start
rebuilding the source code every time a code change is pushed to the
repository.</p>
</li>
<li>
<p>
<code>DeleteProject</code>: Deletes a build project.</p>
</li>
<li>
<p>
<code>DeleteReport</code>: Deletes a report. </p>
</li>
<li>
<p>
<code>DeleteReportGroup</code>: Deletes a report group. </p>
</li>
<li>
<p>
<code>DeleteResourcePolicy</code>: Deletes a resource policy that is identified
by its resource ARN. </p>
</li>
<li>
<p>
<code>DeleteSourceCredentials</code>: Deletes a set of GitHub, GitHub
Enterprise, or Bitbucket source credentials.</p>
</li>
<li>
<p>
<code>DeleteWebhook</code>: For an existing AWS CodeBuild build project that has its
source code stored in a GitHub or Bitbucket repository, stops AWS CodeBuild from
rebuilding the source code every time a code change is pushed to the
repository.</p>
</li>
<li>
<p>
<code>DescribeTestCases</code>: Returns a list of details about test cases for a
report. </p>
</li>
<li>
<p>
<code>GetResourcePolicy</code>: Gets a resource policy that is identified by its
resource ARN. </p>
</li>
<li>
<p>
<code>ImportSourceCredentials</code>: Imports the source repository
credentials for an AWS CodeBuild project that has its source code stored in a
GitHub, GitHub Enterprise, or Bitbucket repository.</p>
</li>
<li>
<p>
<code>InvalidateProjectCache</code>: Resets the cache for a project.</p>
</li>
<li>
<p>
<code>ListBuilds</code>: Gets a list of build IDs, with each build ID
representing a single build.</p>
</li>
<li>
<p>
<code>ListBuildsForProject</code>: Gets a list of build IDs for the specified
build project, with each build ID representing a single build.</p>
</li>
<li>
<p>
<code>ListCuratedEnvironmentImages</code>: Gets information about Docker
images that are managed by AWS CodeBuild.</p>
</li>
<li>
<p>
<code>ListProjects</code>: Gets a list of build project names, with each build
project name representing a single build project.</p>
</li>
<li>
<p>
<code>ListReportGroups</code>: Gets a list ARNs for the report groups in the
current AWS account. </p>
</li>
<li>
<p>
<code>ListReports</code>: Gets a list ARNs for the reports in the current AWS
account. </p>
</li>
<li>
<p>
<code>ListReportsForReportGroup</code>: Returns a list of ARNs for the reports
that belong to a <code>ReportGroup</code>. </p>
</li>
<li>
<p>
<code>ListSharedProjects</code>: Gets a list of ARNs associated with projects
shared with the current AWS account or user.</p>
</li>
<li>
<p>
<code>ListSharedReportGroups</code>: Gets a list of ARNs associated with
report groups shared with the current AWS account or user</p>
</li>
<li>
<p>
<code>ListSourceCredentials</code>: Returns a list of
<code>SourceCredentialsInfo</code> objects. Each
<code>SourceCredentialsInfo</code> object includes the authentication type,
token ARN, and type of source provider for one set of credentials.</p>
</li>
<li>
<p>
<code>PutResourcePolicy</code>: Stores a resource policy for the ARN of a
<code>Project</code> or <code>ReportGroup</code> object. </p>
</li>
<li>
<p>
<code>StartBuild</code>: Starts running a build.</p>
</li>
<li>
<p>
<code>StopBuild</code>: Attempts to stop running a build.</p>
</li>
<li>
<p>
<code>UpdateProject</code>: Changes the settings of an existing build
project.</p>
</li>
<li>
<p>
<code>UpdateReportGroup</code>: Changes a report group.</p>
</li>
<li>
<p>
<code>UpdateWebhook</code>: Changes the settings of an existing
webhook.</p>
</li>
</ul>

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
// a client can be shared by difference commands.
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
  // proccess err and data.
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
  const data = client.batchDeleteBuilds(params);
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
  // proccess err and data.
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
