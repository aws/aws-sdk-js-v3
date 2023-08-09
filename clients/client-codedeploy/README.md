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

To install the this package, simply type add or install @aws-sdk/client-codedeploy
using your favorite package manager:

- `npm install @aws-sdk/client-codedeploy`
- `yarn add @aws-sdk/client-codedeploy`
- `pnpm add @aws-sdk/client-codedeploy`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `CodeDeployClient` and
the commands you need, for example `AddTagsToOnPremisesInstancesCommand`:

```js
// ES5 example
const { CodeDeployClient, AddTagsToOnPremisesInstancesCommand } = require("@aws-sdk/client-codedeploy");
```

```ts
// ES6+ example
import { CodeDeployClient, AddTagsToOnPremisesInstancesCommand } from "@aws-sdk/client-codedeploy";
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
const command = new AddTagsToOnPremisesInstancesCommand(params);
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
  const data = await client.addTagsToOnPremisesInstances(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .addTagsToOnPremisesInstances(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.addTagsToOnPremisesInstances(params, (err, data) => {
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/classes/addtagstoonpremisesinstancescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/addtagstoonpremisesinstancescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/addtagstoonpremisesinstancescommandoutput.html)

</details>
<details>
<summary>
BatchGetApplicationRevisions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/classes/batchgetapplicationrevisionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/batchgetapplicationrevisionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/batchgetapplicationrevisionscommandoutput.html)

</details>
<details>
<summary>
BatchGetApplications
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/classes/batchgetapplicationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/batchgetapplicationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/batchgetapplicationscommandoutput.html)

</details>
<details>
<summary>
BatchGetDeploymentGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/classes/batchgetdeploymentgroupscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/batchgetdeploymentgroupscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/batchgetdeploymentgroupscommandoutput.html)

</details>
<details>
<summary>
BatchGetDeploymentInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/classes/batchgetdeploymentinstancescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/batchgetdeploymentinstancescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/batchgetdeploymentinstancescommandoutput.html)

</details>
<details>
<summary>
BatchGetDeployments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/classes/batchgetdeploymentscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/batchgetdeploymentscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/batchgetdeploymentscommandoutput.html)

</details>
<details>
<summary>
BatchGetDeploymentTargets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/classes/batchgetdeploymenttargetscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/batchgetdeploymenttargetscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/batchgetdeploymenttargetscommandoutput.html)

</details>
<details>
<summary>
BatchGetOnPremisesInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/classes/batchgetonpremisesinstancescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/batchgetonpremisesinstancescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/batchgetonpremisesinstancescommandoutput.html)

</details>
<details>
<summary>
ContinueDeployment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/classes/continuedeploymentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/continuedeploymentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/continuedeploymentcommandoutput.html)

</details>
<details>
<summary>
CreateApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/classes/createapplicationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/createapplicationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/createapplicationcommandoutput.html)

</details>
<details>
<summary>
CreateDeployment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/classes/createdeploymentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/createdeploymentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/createdeploymentcommandoutput.html)

</details>
<details>
<summary>
CreateDeploymentConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/classes/createdeploymentconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/createdeploymentconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/createdeploymentconfigcommandoutput.html)

</details>
<details>
<summary>
CreateDeploymentGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/classes/createdeploymentgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/createdeploymentgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/createdeploymentgroupcommandoutput.html)

</details>
<details>
<summary>
DeleteApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/classes/deleteapplicationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/deleteapplicationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/deleteapplicationcommandoutput.html)

</details>
<details>
<summary>
DeleteDeploymentConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/classes/deletedeploymentconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/deletedeploymentconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/deletedeploymentconfigcommandoutput.html)

</details>
<details>
<summary>
DeleteDeploymentGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/classes/deletedeploymentgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/deletedeploymentgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/deletedeploymentgroupcommandoutput.html)

</details>
<details>
<summary>
DeleteGitHubAccountToken
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/classes/deletegithubaccounttokencommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/deletegithubaccounttokencommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/deletegithubaccounttokencommandoutput.html)

</details>
<details>
<summary>
DeleteResourcesByExternalId
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/classes/deleteresourcesbyexternalidcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/deleteresourcesbyexternalidcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/deleteresourcesbyexternalidcommandoutput.html)

</details>
<details>
<summary>
DeregisterOnPremisesInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/classes/deregisteronpremisesinstancecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/deregisteronpremisesinstancecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/deregisteronpremisesinstancecommandoutput.html)

</details>
<details>
<summary>
GetApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/classes/getapplicationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/getapplicationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/getapplicationcommandoutput.html)

</details>
<details>
<summary>
GetApplicationRevision
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/classes/getapplicationrevisioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/getapplicationrevisioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/getapplicationrevisioncommandoutput.html)

</details>
<details>
<summary>
GetDeployment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/classes/getdeploymentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/getdeploymentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/getdeploymentcommandoutput.html)

</details>
<details>
<summary>
GetDeploymentConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/classes/getdeploymentconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/getdeploymentconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/getdeploymentconfigcommandoutput.html)

</details>
<details>
<summary>
GetDeploymentGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/classes/getdeploymentgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/getdeploymentgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/getdeploymentgroupcommandoutput.html)

</details>
<details>
<summary>
GetDeploymentInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/classes/getdeploymentinstancecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/getdeploymentinstancecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/getdeploymentinstancecommandoutput.html)

</details>
<details>
<summary>
GetDeploymentTarget
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/classes/getdeploymenttargetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/getdeploymenttargetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/getdeploymenttargetcommandoutput.html)

</details>
<details>
<summary>
GetOnPremisesInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/classes/getonpremisesinstancecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/getonpremisesinstancecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/getonpremisesinstancecommandoutput.html)

</details>
<details>
<summary>
ListApplicationRevisions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/classes/listapplicationrevisionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/listapplicationrevisionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/listapplicationrevisionscommandoutput.html)

</details>
<details>
<summary>
ListApplications
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/classes/listapplicationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/listapplicationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/listapplicationscommandoutput.html)

</details>
<details>
<summary>
ListDeploymentConfigs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/classes/listdeploymentconfigscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/listdeploymentconfigscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/listdeploymentconfigscommandoutput.html)

</details>
<details>
<summary>
ListDeploymentGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/classes/listdeploymentgroupscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/listdeploymentgroupscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/listdeploymentgroupscommandoutput.html)

</details>
<details>
<summary>
ListDeploymentInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/classes/listdeploymentinstancescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/listdeploymentinstancescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/listdeploymentinstancescommandoutput.html)

</details>
<details>
<summary>
ListDeployments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/classes/listdeploymentscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/listdeploymentscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/listdeploymentscommandoutput.html)

</details>
<details>
<summary>
ListDeploymentTargets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/classes/listdeploymenttargetscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/listdeploymenttargetscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/listdeploymenttargetscommandoutput.html)

</details>
<details>
<summary>
ListGitHubAccountTokenNames
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/classes/listgithubaccounttokennamescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/listgithubaccounttokennamescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/listgithubaccounttokennamescommandoutput.html)

</details>
<details>
<summary>
ListOnPremisesInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/classes/listonpremisesinstancescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/listonpremisesinstancescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/listonpremisesinstancescommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
PutLifecycleEventHookExecutionStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/classes/putlifecycleeventhookexecutionstatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/putlifecycleeventhookexecutionstatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/putlifecycleeventhookexecutionstatuscommandoutput.html)

</details>
<details>
<summary>
RegisterApplicationRevision
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/classes/registerapplicationrevisioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/registerapplicationrevisioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/registerapplicationrevisioncommandoutput.html)

</details>
<details>
<summary>
RegisterOnPremisesInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/classes/registeronpremisesinstancecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/registeronpremisesinstancecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/registeronpremisesinstancecommandoutput.html)

</details>
<details>
<summary>
RemoveTagsFromOnPremisesInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/classes/removetagsfromonpremisesinstancescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/removetagsfromonpremisesinstancescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/removetagsfromonpremisesinstancescommandoutput.html)

</details>
<details>
<summary>
SkipWaitTimeForInstanceTermination
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/classes/skipwaittimeforinstanceterminationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/skipwaittimeforinstanceterminationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/skipwaittimeforinstanceterminationcommandoutput.html)

</details>
<details>
<summary>
StopDeployment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/classes/stopdeploymentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/stopdeploymentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/stopdeploymentcommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/classes/updateapplicationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/updateapplicationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/updateapplicationcommandoutput.html)

</details>
<details>
<summary>
UpdateDeploymentGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/classes/updatedeploymentgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/updatedeploymentgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codedeploy/interfaces/updatedeploymentgroupcommandoutput.html)

</details>
