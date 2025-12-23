<!-- generated file, do not edit directly -->

# @aws-sdk/client-emr

## Description

AWS SDK for JavaScript EMR Client for Node.js, Browser and React Native.

<p>Amazon EMR is a web service that makes it easier to process large amounts of
data efficiently. Amazon EMR uses Hadoop processing combined with several Amazon Web Services services to do tasks such as web indexing, data mining, log file analysis,
machine learning, scientific simulation, and data warehouse management.</p>

## Installing
To install this package, simply type add or install @aws-sdk/client-emr
using your favorite package manager:
- `npm install @aws-sdk/client-emr`
- `yarn add @aws-sdk/client-emr`
- `pnpm add @aws-sdk/client-emr`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `EMRClient` and
the commands you need, for example `ListStudiosCommand`:

```js
// ES5 example
const { EMRClient, ListStudiosCommand } = require("@aws-sdk/client-emr");
```

```ts
// ES6+ example
import { EMRClient, ListStudiosCommand } from "@aws-sdk/client-emr";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new EMRClient({ region: "REGION" });

const params = { /** input parameters */ };
const command = new ListStudiosCommand(params);
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
import * as AWS from "@aws-sdk/client-emr";
const client = new AWS.EMR({ region: "REGION" });

// async/await.
try {
  const data = await client.listStudios(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listStudios(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listStudios(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-emr` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AddInstanceFleet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/emr/command/AddInstanceFleetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/AddInstanceFleetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/AddInstanceFleetCommandOutput/)
</details>
<details>
<summary>
AddInstanceGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/emr/command/AddInstanceGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/AddInstanceGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/AddInstanceGroupsCommandOutput/)
</details>
<details>
<summary>
AddJobFlowSteps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/emr/command/AddJobFlowStepsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/AddJobFlowStepsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/AddJobFlowStepsCommandOutput/)
</details>
<details>
<summary>
AddTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/emr/command/AddTagsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/AddTagsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/AddTagsCommandOutput/)
</details>
<details>
<summary>
CancelSteps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/emr/command/CancelStepsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/CancelStepsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/CancelStepsCommandOutput/)
</details>
<details>
<summary>
CreatePersistentAppUI
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/emr/command/CreatePersistentAppUICommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/CreatePersistentAppUICommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/CreatePersistentAppUICommandOutput/)
</details>
<details>
<summary>
CreateSecurityConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/emr/command/CreateSecurityConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/CreateSecurityConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/CreateSecurityConfigurationCommandOutput/)
</details>
<details>
<summary>
CreateStudio
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/emr/command/CreateStudioCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/CreateStudioCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/CreateStudioCommandOutput/)
</details>
<details>
<summary>
CreateStudioSessionMapping
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/emr/command/CreateStudioSessionMappingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/CreateStudioSessionMappingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/CreateStudioSessionMappingCommandOutput/)
</details>
<details>
<summary>
DeleteSecurityConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/emr/command/DeleteSecurityConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/DeleteSecurityConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/DeleteSecurityConfigurationCommandOutput/)
</details>
<details>
<summary>
DeleteStudio
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/emr/command/DeleteStudioCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/DeleteStudioCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/DeleteStudioCommandOutput/)
</details>
<details>
<summary>
DeleteStudioSessionMapping
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/emr/command/DeleteStudioSessionMappingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/DeleteStudioSessionMappingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/DeleteStudioSessionMappingCommandOutput/)
</details>
<details>
<summary>
DescribeCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/emr/command/DescribeClusterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/DescribeClusterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/DescribeClusterCommandOutput/)
</details>
<details>
<summary>
DescribeJobFlows
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/emr/command/DescribeJobFlowsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/DescribeJobFlowsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/DescribeJobFlowsCommandOutput/)
</details>
<details>
<summary>
DescribeNotebookExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/emr/command/DescribeNotebookExecutionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/DescribeNotebookExecutionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/DescribeNotebookExecutionCommandOutput/)
</details>
<details>
<summary>
DescribePersistentAppUI
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/emr/command/DescribePersistentAppUICommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/DescribePersistentAppUICommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/DescribePersistentAppUICommandOutput/)
</details>
<details>
<summary>
DescribeReleaseLabel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/emr/command/DescribeReleaseLabelCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/DescribeReleaseLabelCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/DescribeReleaseLabelCommandOutput/)
</details>
<details>
<summary>
DescribeSecurityConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/emr/command/DescribeSecurityConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/DescribeSecurityConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/DescribeSecurityConfigurationCommandOutput/)
</details>
<details>
<summary>
DescribeStep
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/emr/command/DescribeStepCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/DescribeStepCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/DescribeStepCommandOutput/)
</details>
<details>
<summary>
DescribeStudio
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/emr/command/DescribeStudioCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/DescribeStudioCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/DescribeStudioCommandOutput/)
</details>
<details>
<summary>
GetAutoTerminationPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/emr/command/GetAutoTerminationPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/GetAutoTerminationPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/GetAutoTerminationPolicyCommandOutput/)
</details>
<details>
<summary>
GetBlockPublicAccessConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/emr/command/GetBlockPublicAccessConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/GetBlockPublicAccessConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/GetBlockPublicAccessConfigurationCommandOutput/)
</details>
<details>
<summary>
GetClusterSessionCredentials
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/emr/command/GetClusterSessionCredentialsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/GetClusterSessionCredentialsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/GetClusterSessionCredentialsCommandOutput/)
</details>
<details>
<summary>
GetManagedScalingPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/emr/command/GetManagedScalingPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/GetManagedScalingPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/GetManagedScalingPolicyCommandOutput/)
</details>
<details>
<summary>
GetOnClusterAppUIPresignedURL
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/emr/command/GetOnClusterAppUIPresignedURLCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/GetOnClusterAppUIPresignedURLCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/GetOnClusterAppUIPresignedURLCommandOutput/)
</details>
<details>
<summary>
GetPersistentAppUIPresignedURL
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/emr/command/GetPersistentAppUIPresignedURLCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/GetPersistentAppUIPresignedURLCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/GetPersistentAppUIPresignedURLCommandOutput/)
</details>
<details>
<summary>
GetStudioSessionMapping
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/emr/command/GetStudioSessionMappingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/GetStudioSessionMappingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/GetStudioSessionMappingCommandOutput/)
</details>
<details>
<summary>
ListBootstrapActions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/emr/command/ListBootstrapActionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/ListBootstrapActionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/ListBootstrapActionsCommandOutput/)
</details>
<details>
<summary>
ListClusters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/emr/command/ListClustersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/ListClustersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/ListClustersCommandOutput/)
</details>
<details>
<summary>
ListInstanceFleets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/emr/command/ListInstanceFleetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/ListInstanceFleetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/ListInstanceFleetsCommandOutput/)
</details>
<details>
<summary>
ListInstanceGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/emr/command/ListInstanceGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/ListInstanceGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/ListInstanceGroupsCommandOutput/)
</details>
<details>
<summary>
ListInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/emr/command/ListInstancesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/ListInstancesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/ListInstancesCommandOutput/)
</details>
<details>
<summary>
ListNotebookExecutions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/emr/command/ListNotebookExecutionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/ListNotebookExecutionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/ListNotebookExecutionsCommandOutput/)
</details>
<details>
<summary>
ListReleaseLabels
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/emr/command/ListReleaseLabelsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/ListReleaseLabelsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/ListReleaseLabelsCommandOutput/)
</details>
<details>
<summary>
ListSecurityConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/emr/command/ListSecurityConfigurationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/ListSecurityConfigurationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/ListSecurityConfigurationsCommandOutput/)
</details>
<details>
<summary>
ListSteps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/emr/command/ListStepsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/ListStepsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/ListStepsCommandOutput/)
</details>
<details>
<summary>
ListStudios
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/emr/command/ListStudiosCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/ListStudiosCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/ListStudiosCommandOutput/)
</details>
<details>
<summary>
ListStudioSessionMappings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/emr/command/ListStudioSessionMappingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/ListStudioSessionMappingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/ListStudioSessionMappingsCommandOutput/)
</details>
<details>
<summary>
ListSupportedInstanceTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/emr/command/ListSupportedInstanceTypesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/ListSupportedInstanceTypesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/ListSupportedInstanceTypesCommandOutput/)
</details>
<details>
<summary>
ModifyCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/emr/command/ModifyClusterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/ModifyClusterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/ModifyClusterCommandOutput/)
</details>
<details>
<summary>
ModifyInstanceFleet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/emr/command/ModifyInstanceFleetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/ModifyInstanceFleetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/ModifyInstanceFleetCommandOutput/)
</details>
<details>
<summary>
ModifyInstanceGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/emr/command/ModifyInstanceGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/ModifyInstanceGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/ModifyInstanceGroupsCommandOutput/)
</details>
<details>
<summary>
PutAutoScalingPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/emr/command/PutAutoScalingPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/PutAutoScalingPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/PutAutoScalingPolicyCommandOutput/)
</details>
<details>
<summary>
PutAutoTerminationPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/emr/command/PutAutoTerminationPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/PutAutoTerminationPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/PutAutoTerminationPolicyCommandOutput/)
</details>
<details>
<summary>
PutBlockPublicAccessConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/emr/command/PutBlockPublicAccessConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/PutBlockPublicAccessConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/PutBlockPublicAccessConfigurationCommandOutput/)
</details>
<details>
<summary>
PutManagedScalingPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/emr/command/PutManagedScalingPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/PutManagedScalingPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/PutManagedScalingPolicyCommandOutput/)
</details>
<details>
<summary>
RemoveAutoScalingPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/emr/command/RemoveAutoScalingPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/RemoveAutoScalingPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/RemoveAutoScalingPolicyCommandOutput/)
</details>
<details>
<summary>
RemoveAutoTerminationPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/emr/command/RemoveAutoTerminationPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/RemoveAutoTerminationPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/RemoveAutoTerminationPolicyCommandOutput/)
</details>
<details>
<summary>
RemoveManagedScalingPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/emr/command/RemoveManagedScalingPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/RemoveManagedScalingPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/RemoveManagedScalingPolicyCommandOutput/)
</details>
<details>
<summary>
RemoveTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/emr/command/RemoveTagsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/RemoveTagsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/RemoveTagsCommandOutput/)
</details>
<details>
<summary>
RunJobFlow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/emr/command/RunJobFlowCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/RunJobFlowCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/RunJobFlowCommandOutput/)
</details>
<details>
<summary>
SetKeepJobFlowAliveWhenNoSteps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/emr/command/SetKeepJobFlowAliveWhenNoStepsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/SetKeepJobFlowAliveWhenNoStepsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/SetKeepJobFlowAliveWhenNoStepsCommandOutput/)
</details>
<details>
<summary>
SetTerminationProtection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/emr/command/SetTerminationProtectionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/SetTerminationProtectionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/SetTerminationProtectionCommandOutput/)
</details>
<details>
<summary>
SetUnhealthyNodeReplacement
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/emr/command/SetUnhealthyNodeReplacementCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/SetUnhealthyNodeReplacementCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/SetUnhealthyNodeReplacementCommandOutput/)
</details>
<details>
<summary>
SetVisibleToAllUsers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/emr/command/SetVisibleToAllUsersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/SetVisibleToAllUsersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/SetVisibleToAllUsersCommandOutput/)
</details>
<details>
<summary>
StartNotebookExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/emr/command/StartNotebookExecutionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/StartNotebookExecutionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/StartNotebookExecutionCommandOutput/)
</details>
<details>
<summary>
StopNotebookExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/emr/command/StopNotebookExecutionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/StopNotebookExecutionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/StopNotebookExecutionCommandOutput/)
</details>
<details>
<summary>
TerminateJobFlows
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/emr/command/TerminateJobFlowsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/TerminateJobFlowsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/TerminateJobFlowsCommandOutput/)
</details>
<details>
<summary>
UpdateStudio
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/emr/command/UpdateStudioCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/UpdateStudioCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/UpdateStudioCommandOutput/)
</details>
<details>
<summary>
UpdateStudioSessionMapping
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/emr/command/UpdateStudioSessionMappingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/UpdateStudioSessionMappingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-emr/Interface/UpdateStudioSessionMappingCommandOutput/)
</details>
