<!-- generated file, do not edit directly -->

# @aws-sdk/client-codedeploy

## Description

AWS SDK for JavaScript CodeDeploy Client for Node.js, Browser and React Native.

<p>CodeDeploy is a deployment service that automates application deployments
to Amazon EC2 instances, on-premises instances running in your own facility,
serverless Lambda functions, or applications in an Amazon ECS
service.</p>
<p>You can deploy a nearly unlimited variety of application content, such as an updated
Lambda function, updated applications in an Amazon ECS service,
code, web and configuration files, executables, packages, scripts, multimedia files, and
so on. CodeDeploy can deploy application content stored in Amazon S3
buckets, GitHub repositories, or Bitbucket repositories. You do not need to make changes
to your existing code before you can use CodeDeploy.</p>
<p>CodeDeploy makes it easier for you to rapidly release new features, helps
you avoid downtime during application deployment, and handles the complexity of updating
your applications, without many of the risks associated with error-prone manual
deployments.</p>
<p>
<b>CodeDeploy Components</b>
</p>
<p>Use the information in this guide to help you work with the following CodeDeploy components:</p>
<ul>
<li>
<p>
<b>Application</b>: A name that uniquely identifies
the application you want to deploy. CodeDeploy uses this name, which
functions as a container, to ensure the correct combination of revision,
deployment configuration, and deployment group are referenced during a
deployment.</p>
</li>
<li>
<p>
<b>Deployment group</b>: A set of individual
instances, CodeDeploy
Lambda deployment configuration settings, or an Amazon ECS
service and network details. A Lambda deployment group specifies how
to route traffic to a new version of a Lambda function. An Amazon ECS deployment group specifies the service created in Amazon ECS to deploy, a load balancer, and a listener to reroute production
traffic to an updated containerized application. An Amazon EC2/On-premises deployment group contains individually tagged instances, Amazon EC2 instances in Amazon EC2 Auto Scaling groups, or both. All
deployment groups can specify optional trigger, alarm, and rollback
settings.</p>
</li>
<li>
<p>
<b>Deployment configuration</b>: A set of deployment
rules and deployment success and failure conditions used by CodeDeploy during a deployment.</p>
</li>
<li>
<p>
<b>Deployment</b>: The process and the components used
when updating a Lambda function, a containerized application in an
Amazon ECS service, or of installing content on one or more
instances. </p>
</li>
<li>
<p>
<b>Application revisions</b>: For an Lambda deployment, this is an AppSpec file that specifies the
Lambda function to be updated and one or more functions to
validate deployment lifecycle events. For an Amazon ECS deployment, this
is an AppSpec file that specifies the Amazon ECS task definition,
container, and port where production traffic is rerouted. For an EC2/On-premises
deployment, this is an archive file that contains source content—source code,
webpages, executable files, and deployment scripts—along with an AppSpec file.
Revisions are stored in Amazon S3 buckets or GitHub repositories. For
Amazon S3, a revision is uniquely identified by its Amazon S3 object key and its ETag, version, or both. For GitHub, a revision is uniquely
identified by its commit ID.</p>
</li>
</ul>
<p>This guide also contains information to help you get details about the instances in
your deployments, to make on-premises instances available for CodeDeploy
deployments, to get details about a Lambda function deployment, and to get
details about Amazon ECS service deployments.</p>
<p>
<b>CodeDeploy Information Resources</b>
</p>
<ul>
<li>
<p>
<a href="https://docs.aws.amazon.com/codedeploy/latest/userguide">CodeDeploy User Guide</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/codedeploy/latest/APIReference/">CodeDeploy API Reference Guide</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/cli/latest/reference/deploy/index.html">CLI Reference for CodeDeploy</a>
</p>
</li>
<li>
<p>
<a href="https://forums.aws.amazon.com/forum.jspa?forumID=179">CodeDeploy Developer Forum</a>
</p>
</li>
</ul>

## Installing

To install this package, simply type add or install @aws-sdk/client-codedeploy
using your favorite package manager:

- `npm install @aws-sdk/client-codedeploy`
- `yarn add @aws-sdk/client-codedeploy`
- `pnpm add @aws-sdk/client-codedeploy`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `CodeDeployClient` and
the commands you need, for example `ListApplicationsCommand`:

```js
// ES5 example
const { CodeDeployClient, ListApplicationsCommand } = require("@aws-sdk/client-codedeploy");
```

```ts
// ES6+ example
import { CodeDeployClient, ListApplicationsCommand } from "@aws-sdk/client-codedeploy";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new CodeDeployClient({ region: "REGION" });

const params = {
  /** input parameters */
};
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
import * as AWS from "@aws-sdk/client-codedeploy";
const client = new AWS.CodeDeploy({ region: "REGION" });

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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-codedeploy` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AddTagsToOnPremisesInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codedeploy/command/AddTagsToOnPremisesInstancesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/AddTagsToOnPremisesInstancesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/AddTagsToOnPremisesInstancesCommandOutput/)

</details>
<details>
<summary>
BatchGetApplicationRevisions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codedeploy/command/BatchGetApplicationRevisionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/BatchGetApplicationRevisionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/BatchGetApplicationRevisionsCommandOutput/)

</details>
<details>
<summary>
BatchGetApplications
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codedeploy/command/BatchGetApplicationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/BatchGetApplicationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/BatchGetApplicationsCommandOutput/)

</details>
<details>
<summary>
BatchGetDeploymentGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codedeploy/command/BatchGetDeploymentGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/BatchGetDeploymentGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/BatchGetDeploymentGroupsCommandOutput/)

</details>
<details>
<summary>
BatchGetDeploymentInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codedeploy/command/BatchGetDeploymentInstancesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/BatchGetDeploymentInstancesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/BatchGetDeploymentInstancesCommandOutput/)

</details>
<details>
<summary>
BatchGetDeployments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codedeploy/command/BatchGetDeploymentsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/BatchGetDeploymentsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/BatchGetDeploymentsCommandOutput/)

</details>
<details>
<summary>
BatchGetDeploymentTargets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codedeploy/command/BatchGetDeploymentTargetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/BatchGetDeploymentTargetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/BatchGetDeploymentTargetsCommandOutput/)

</details>
<details>
<summary>
BatchGetOnPremisesInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codedeploy/command/BatchGetOnPremisesInstancesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/BatchGetOnPremisesInstancesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/BatchGetOnPremisesInstancesCommandOutput/)

</details>
<details>
<summary>
ContinueDeployment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codedeploy/command/ContinueDeploymentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/ContinueDeploymentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/ContinueDeploymentCommandOutput/)

</details>
<details>
<summary>
CreateApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codedeploy/command/CreateApplicationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/CreateApplicationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/CreateApplicationCommandOutput/)

</details>
<details>
<summary>
CreateDeployment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codedeploy/command/CreateDeploymentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/CreateDeploymentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/CreateDeploymentCommandOutput/)

</details>
<details>
<summary>
CreateDeploymentConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codedeploy/command/CreateDeploymentConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/CreateDeploymentConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/CreateDeploymentConfigCommandOutput/)

</details>
<details>
<summary>
CreateDeploymentGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codedeploy/command/CreateDeploymentGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/CreateDeploymentGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/CreateDeploymentGroupCommandOutput/)

</details>
<details>
<summary>
DeleteApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codedeploy/command/DeleteApplicationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/DeleteApplicationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/DeleteApplicationCommandOutput/)

</details>
<details>
<summary>
DeleteDeploymentConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codedeploy/command/DeleteDeploymentConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/DeleteDeploymentConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/DeleteDeploymentConfigCommandOutput/)

</details>
<details>
<summary>
DeleteDeploymentGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codedeploy/command/DeleteDeploymentGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/DeleteDeploymentGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/DeleteDeploymentGroupCommandOutput/)

</details>
<details>
<summary>
DeleteGitHubAccountToken
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codedeploy/command/DeleteGitHubAccountTokenCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/DeleteGitHubAccountTokenCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/DeleteGitHubAccountTokenCommandOutput/)

</details>
<details>
<summary>
DeleteResourcesByExternalId
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codedeploy/command/DeleteResourcesByExternalIdCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/DeleteResourcesByExternalIdCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/DeleteResourcesByExternalIdCommandOutput/)

</details>
<details>
<summary>
DeregisterOnPremisesInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codedeploy/command/DeregisterOnPremisesInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/DeregisterOnPremisesInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/DeregisterOnPremisesInstanceCommandOutput/)

</details>
<details>
<summary>
GetApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codedeploy/command/GetApplicationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/GetApplicationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/GetApplicationCommandOutput/)

</details>
<details>
<summary>
GetApplicationRevision
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codedeploy/command/GetApplicationRevisionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/GetApplicationRevisionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/GetApplicationRevisionCommandOutput/)

</details>
<details>
<summary>
GetDeployment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codedeploy/command/GetDeploymentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/GetDeploymentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/GetDeploymentCommandOutput/)

</details>
<details>
<summary>
GetDeploymentConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codedeploy/command/GetDeploymentConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/GetDeploymentConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/GetDeploymentConfigCommandOutput/)

</details>
<details>
<summary>
GetDeploymentGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codedeploy/command/GetDeploymentGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/GetDeploymentGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/GetDeploymentGroupCommandOutput/)

</details>
<details>
<summary>
GetDeploymentInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codedeploy/command/GetDeploymentInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/GetDeploymentInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/GetDeploymentInstanceCommandOutput/)

</details>
<details>
<summary>
GetDeploymentTarget
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codedeploy/command/GetDeploymentTargetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/GetDeploymentTargetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/GetDeploymentTargetCommandOutput/)

</details>
<details>
<summary>
GetOnPremisesInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codedeploy/command/GetOnPremisesInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/GetOnPremisesInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/GetOnPremisesInstanceCommandOutput/)

</details>
<details>
<summary>
ListApplicationRevisions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codedeploy/command/ListApplicationRevisionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/ListApplicationRevisionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/ListApplicationRevisionsCommandOutput/)

</details>
<details>
<summary>
ListApplications
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codedeploy/command/ListApplicationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/ListApplicationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/ListApplicationsCommandOutput/)

</details>
<details>
<summary>
ListDeploymentConfigs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codedeploy/command/ListDeploymentConfigsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/ListDeploymentConfigsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/ListDeploymentConfigsCommandOutput/)

</details>
<details>
<summary>
ListDeploymentGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codedeploy/command/ListDeploymentGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/ListDeploymentGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/ListDeploymentGroupsCommandOutput/)

</details>
<details>
<summary>
ListDeploymentInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codedeploy/command/ListDeploymentInstancesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/ListDeploymentInstancesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/ListDeploymentInstancesCommandOutput/)

</details>
<details>
<summary>
ListDeployments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codedeploy/command/ListDeploymentsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/ListDeploymentsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/ListDeploymentsCommandOutput/)

</details>
<details>
<summary>
ListDeploymentTargets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codedeploy/command/ListDeploymentTargetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/ListDeploymentTargetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/ListDeploymentTargetsCommandOutput/)

</details>
<details>
<summary>
ListGitHubAccountTokenNames
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codedeploy/command/ListGitHubAccountTokenNamesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/ListGitHubAccountTokenNamesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/ListGitHubAccountTokenNamesCommandOutput/)

</details>
<details>
<summary>
ListOnPremisesInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codedeploy/command/ListOnPremisesInstancesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/ListOnPremisesInstancesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/ListOnPremisesInstancesCommandOutput/)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codedeploy/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/ListTagsForResourceCommandOutput/)

</details>
<details>
<summary>
PutLifecycleEventHookExecutionStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codedeploy/command/PutLifecycleEventHookExecutionStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/PutLifecycleEventHookExecutionStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/PutLifecycleEventHookExecutionStatusCommandOutput/)

</details>
<details>
<summary>
RegisterApplicationRevision
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codedeploy/command/RegisterApplicationRevisionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/RegisterApplicationRevisionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/RegisterApplicationRevisionCommandOutput/)

</details>
<details>
<summary>
RegisterOnPremisesInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codedeploy/command/RegisterOnPremisesInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/RegisterOnPremisesInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/RegisterOnPremisesInstanceCommandOutput/)

</details>
<details>
<summary>
RemoveTagsFromOnPremisesInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codedeploy/command/RemoveTagsFromOnPremisesInstancesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/RemoveTagsFromOnPremisesInstancesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/RemoveTagsFromOnPremisesInstancesCommandOutput/)

</details>
<details>
<summary>
SkipWaitTimeForInstanceTermination
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codedeploy/command/SkipWaitTimeForInstanceTerminationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/SkipWaitTimeForInstanceTerminationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/SkipWaitTimeForInstanceTerminationCommandOutput/)

</details>
<details>
<summary>
StopDeployment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codedeploy/command/StopDeploymentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/StopDeploymentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/StopDeploymentCommandOutput/)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codedeploy/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/TagResourceCommandOutput/)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codedeploy/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/UntagResourceCommandOutput/)

</details>
<details>
<summary>
UpdateApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codedeploy/command/UpdateApplicationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/UpdateApplicationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/UpdateApplicationCommandOutput/)

</details>
<details>
<summary>
UpdateDeploymentGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codedeploy/command/UpdateDeploymentGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/UpdateDeploymentGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codedeploy/Interface/UpdateDeploymentGroupCommandOutput/)

</details>
