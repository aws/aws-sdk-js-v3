<!-- generated file, do not edit directly -->

# @aws-sdk/client-codecatalyst

## Description

AWS SDK for JavaScript CodeCatalyst Client for Node.js, Browser and React Native.

<p>Welcome to the Amazon CodeCatalyst API reference. This reference provides descriptions of operations and data types for Amazon CodeCatalyst. You can use the Amazon CodeCatalyst
API to work with the following objects. </p>
<p>Spaces, by calling the following:</p>
<ul>
<li>
<p>
<a>DeleteSpace</a>, which deletes a space.</p>
</li>
<li>
<p>
<a>GetSpace</a>, which returns information about a space.</p>
</li>
<li>
<p>
<a>GetSubscription</a>, which returns information about the Amazon Web Services account used for billing purposes
and the billing plan for the space.</p>
</li>
<li>
<p>
<a>ListSpaces</a>, which retrieves a list of spaces.</p>
</li>
<li>
<p>
<a>UpdateSpace</a>, which changes one or more values for a space.</p>
</li>
</ul>
<p>Projects, by calling the following:</p>
<ul>
<li>
<p>
<a>CreateProject</a> which creates a project in a specified space.</p>
</li>
<li>
<p>
<a>GetProject</a>, which returns information about a project.</p>
</li>
<li>
<p>
<a>ListProjects</a>, which retrieves a list of projects in a space.</p>
</li>
</ul>
<p>Users, by calling the following:</p>
<ul>
<li>
<p>
<a>GetUserDetails</a>, which returns information about a user in Amazon CodeCatalyst.</p>
</li>
</ul>
<p>Source repositories, by calling the following:</p>
<ul>
<li>
<p>
<a>CreateSourceRepository</a>, which creates an empty Git-based source repository in a specified project.</p>
</li>
<li>
<p>
<a>CreateSourceRepositoryBranch</a>, which creates a branch in a specified repository where you can work on code.</p>
</li>
<li>
<p>
<a>DeleteSourceRepository</a>, which deletes a source repository.</p>
</li>
<li>
<p>
<a>GetSourceRepository</a>, which returns information about a source repository.</p>
</li>
<li>
<p>
<a>GetSourceRepositoryCloneUrls</a>, which returns information about the URLs that can be used with a Git client to clone a source
repository.</p>
</li>
<li>
<p>
<a>ListSourceRepositories</a>, which retrieves a list of source repositories in a project.</p>
</li>
<li>
<p>
<a>ListSourceRepositoryBranches</a>, which retrieves a list of branches in a source repository.</p>
</li>
</ul>
<p>Dev Environments and the Amazon Web Services Toolkits, by calling the following:</p>
<ul>
<li>
<p>
<a>CreateDevEnvironment</a>, which creates a Dev Environment,
where you can quickly work on the code stored in the source repositories of your project.</p>
</li>
<li>
<p>
<a>DeleteDevEnvironment</a>, which deletes a Dev Environment.</p>
</li>
<li>
<p>
<a>GetDevEnvironment</a>, which returns information about a Dev Environment.</p>
</li>
<li>
<p>
<a>ListDevEnvironments</a>, which retrieves a list of Dev Environments in a project.</p>
</li>
<li>
<p>
<a>ListDevEnvironmentSessions</a>, which retrieves a list of active Dev Environment sessions in a project.</p>
</li>
<li>
<p>
<a>StartDevEnvironment</a>, which starts a specified Dev Environment and puts it into an active state.</p>
</li>
<li>
<p>
<a>StartDevEnvironmentSession</a>, which starts a session to a specified Dev Environment.</p>
</li>
<li>
<p>
<a>StopDevEnvironment</a>, which stops a specified Dev Environment and puts it into an stopped state.</p>
</li>
<li>
<p>
<a>StopDevEnvironmentSession</a>, which stops a session for a specified Dev Environment.</p>
</li>
<li>
<p>
<a>UpdateDevEnvironment</a>, which changes one or more values for a Dev Environment.</p>
</li>
</ul>
<p>Workflows, by calling the following:</p>
<ul>
<li>
<p>
<a>GetWorkflow</a>, which returns information about a workflow.</p>
</li>
<li>
<p>
<a>GetWorkflowRun</a>, which returns information about a specified run of a workflow.</p>
</li>
<li>
<p>
<a>ListWorkflowRuns</a>, which retrieves a list of runs of a specified workflow.</p>
</li>
<li>
<p>
<a>ListWorkflows</a>, which retrieves a list of workflows in a specified project.</p>
</li>
<li>
<p>
<a>StartWorkflowRun</a>, which starts a run of a specified workflow.</p>
</li>
</ul>
<p>Security, activity, and resource management in Amazon CodeCatalyst, by calling the following:</p>
<ul>
<li>
<p>
<a>CreateAccessToken</a>, which creates a personal access token (PAT) for the current user.</p>
</li>
<li>
<p>
<a>DeleteAccessToken</a>, which deletes a specified personal access token (PAT).</p>
</li>
<li>
<p>
<a>ListAccessTokens</a>, which lists all personal access tokens (PATs) associated with a user.</p>
</li>
<li>
<p>
<a>ListEventLogs</a>, which retrieves a list of events that occurred during a specified time period in a space.</p>
</li>
<li>
<p>
<a>VerifySession</a>, which verifies whether the calling user has a valid Amazon CodeCatalyst login and session.</p>
</li>
</ul>
<note>
<p>If you are using the Amazon CodeCatalyst APIs with an SDK or the CLI, you must configure your computer to work with Amazon CodeCatalyst and single sign-on (SSO).
For more information, see <a href="https://docs.aws.amazon.com/codecatalyst/latest/userguide/set-up-cli.html">Setting up to use the CLI with Amazon CodeCatalyst</a>
and the SSO documentation for your SDK.</p>
</note>

## Installing
To install this package, simply type add or install @aws-sdk/client-codecatalyst
using your favorite package manager:
- `npm install @aws-sdk/client-codecatalyst`
- `yarn add @aws-sdk/client-codecatalyst`
- `pnpm add @aws-sdk/client-codecatalyst`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `CodeCatalystClient` and
the commands you need, for example `ListSpacesCommand`:

```js
// ES5 example
const { CodeCatalystClient, ListSpacesCommand } = require("@aws-sdk/client-codecatalyst");
```

```ts
// ES6+ example
import { CodeCatalystClient, ListSpacesCommand } from "@aws-sdk/client-codecatalyst";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new CodeCatalystClient({ region: "REGION" });

const params = { /** input parameters */ };
const command = new ListSpacesCommand(params);
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
import * as AWS from "@aws-sdk/client-codecatalyst";
const client = new AWS.CodeCatalyst({ region: "REGION" });

// async/await.
try {
  const data = await client.listSpaces(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listSpaces(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listSpaces(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-codecatalyst` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CreateAccessToken
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecatalyst/command/CreateAccessTokenCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/CreateAccessTokenCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/CreateAccessTokenCommandOutput/)
</details>
<details>
<summary>
CreateDevEnvironment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecatalyst/command/CreateDevEnvironmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/CreateDevEnvironmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/CreateDevEnvironmentCommandOutput/)
</details>
<details>
<summary>
CreateProject
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecatalyst/command/CreateProjectCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/CreateProjectCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/CreateProjectCommandOutput/)
</details>
<details>
<summary>
CreateSourceRepository
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecatalyst/command/CreateSourceRepositoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/CreateSourceRepositoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/CreateSourceRepositoryCommandOutput/)
</details>
<details>
<summary>
CreateSourceRepositoryBranch
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecatalyst/command/CreateSourceRepositoryBranchCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/CreateSourceRepositoryBranchCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/CreateSourceRepositoryBranchCommandOutput/)
</details>
<details>
<summary>
DeleteAccessToken
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecatalyst/command/DeleteAccessTokenCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/DeleteAccessTokenCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/DeleteAccessTokenCommandOutput/)
</details>
<details>
<summary>
DeleteDevEnvironment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecatalyst/command/DeleteDevEnvironmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/DeleteDevEnvironmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/DeleteDevEnvironmentCommandOutput/)
</details>
<details>
<summary>
DeleteProject
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecatalyst/command/DeleteProjectCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/DeleteProjectCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/DeleteProjectCommandOutput/)
</details>
<details>
<summary>
DeleteSourceRepository
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecatalyst/command/DeleteSourceRepositoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/DeleteSourceRepositoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/DeleteSourceRepositoryCommandOutput/)
</details>
<details>
<summary>
DeleteSpace
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecatalyst/command/DeleteSpaceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/DeleteSpaceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/DeleteSpaceCommandOutput/)
</details>
<details>
<summary>
GetDevEnvironment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecatalyst/command/GetDevEnvironmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/GetDevEnvironmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/GetDevEnvironmentCommandOutput/)
</details>
<details>
<summary>
GetProject
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecatalyst/command/GetProjectCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/GetProjectCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/GetProjectCommandOutput/)
</details>
<details>
<summary>
GetSourceRepository
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecatalyst/command/GetSourceRepositoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/GetSourceRepositoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/GetSourceRepositoryCommandOutput/)
</details>
<details>
<summary>
GetSourceRepositoryCloneUrls
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecatalyst/command/GetSourceRepositoryCloneUrlsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/GetSourceRepositoryCloneUrlsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/GetSourceRepositoryCloneUrlsCommandOutput/)
</details>
<details>
<summary>
GetSpace
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecatalyst/command/GetSpaceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/GetSpaceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/GetSpaceCommandOutput/)
</details>
<details>
<summary>
GetSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecatalyst/command/GetSubscriptionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/GetSubscriptionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/GetSubscriptionCommandOutput/)
</details>
<details>
<summary>
GetUserDetails
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecatalyst/command/GetUserDetailsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/GetUserDetailsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/GetUserDetailsCommandOutput/)
</details>
<details>
<summary>
GetWorkflow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecatalyst/command/GetWorkflowCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/GetWorkflowCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/GetWorkflowCommandOutput/)
</details>
<details>
<summary>
GetWorkflowRun
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecatalyst/command/GetWorkflowRunCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/GetWorkflowRunCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/GetWorkflowRunCommandOutput/)
</details>
<details>
<summary>
ListAccessTokens
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecatalyst/command/ListAccessTokensCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/ListAccessTokensCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/ListAccessTokensCommandOutput/)
</details>
<details>
<summary>
ListDevEnvironments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecatalyst/command/ListDevEnvironmentsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/ListDevEnvironmentsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/ListDevEnvironmentsCommandOutput/)
</details>
<details>
<summary>
ListDevEnvironmentSessions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecatalyst/command/ListDevEnvironmentSessionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/ListDevEnvironmentSessionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/ListDevEnvironmentSessionsCommandOutput/)
</details>
<details>
<summary>
ListEventLogs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecatalyst/command/ListEventLogsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/ListEventLogsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/ListEventLogsCommandOutput/)
</details>
<details>
<summary>
ListProjects
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecatalyst/command/ListProjectsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/ListProjectsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/ListProjectsCommandOutput/)
</details>
<details>
<summary>
ListSourceRepositories
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecatalyst/command/ListSourceRepositoriesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/ListSourceRepositoriesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/ListSourceRepositoriesCommandOutput/)
</details>
<details>
<summary>
ListSourceRepositoryBranches
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecatalyst/command/ListSourceRepositoryBranchesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/ListSourceRepositoryBranchesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/ListSourceRepositoryBranchesCommandOutput/)
</details>
<details>
<summary>
ListSpaces
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecatalyst/command/ListSpacesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/ListSpacesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/ListSpacesCommandOutput/)
</details>
<details>
<summary>
ListWorkflowRuns
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecatalyst/command/ListWorkflowRunsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/ListWorkflowRunsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/ListWorkflowRunsCommandOutput/)
</details>
<details>
<summary>
ListWorkflows
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecatalyst/command/ListWorkflowsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/ListWorkflowsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/ListWorkflowsCommandOutput/)
</details>
<details>
<summary>
StartDevEnvironment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecatalyst/command/StartDevEnvironmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/StartDevEnvironmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/StartDevEnvironmentCommandOutput/)
</details>
<details>
<summary>
StartDevEnvironmentSession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecatalyst/command/StartDevEnvironmentSessionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/StartDevEnvironmentSessionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/StartDevEnvironmentSessionCommandOutput/)
</details>
<details>
<summary>
StartWorkflowRun
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecatalyst/command/StartWorkflowRunCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/StartWorkflowRunCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/StartWorkflowRunCommandOutput/)
</details>
<details>
<summary>
StopDevEnvironment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecatalyst/command/StopDevEnvironmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/StopDevEnvironmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/StopDevEnvironmentCommandOutput/)
</details>
<details>
<summary>
StopDevEnvironmentSession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecatalyst/command/StopDevEnvironmentSessionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/StopDevEnvironmentSessionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/StopDevEnvironmentSessionCommandOutput/)
</details>
<details>
<summary>
UpdateDevEnvironment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecatalyst/command/UpdateDevEnvironmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/UpdateDevEnvironmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/UpdateDevEnvironmentCommandOutput/)
</details>
<details>
<summary>
UpdateProject
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecatalyst/command/UpdateProjectCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/UpdateProjectCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/UpdateProjectCommandOutput/)
</details>
<details>
<summary>
UpdateSpace
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecatalyst/command/UpdateSpaceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/UpdateSpaceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/UpdateSpaceCommandOutput/)
</details>
<details>
<summary>
VerifySession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codecatalyst/command/VerifySessionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/VerifySessionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codecatalyst/Interface/VerifySessionCommandOutput/)
</details>
