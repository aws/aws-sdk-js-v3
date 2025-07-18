<!-- generated file, do not edit directly -->

# @aws-sdk/client-ssm

## Description

AWS SDK for JavaScript SSM Client for Node.js, Browser and React Native.

<p>Amazon Web Services Systems Manager is the operations hub for your Amazon Web Services applications and resources and a secure
end-to-end management solution for hybrid cloud environments that enables safe and secure
operations at scale.</p>
<p>This reference is intended to be used with the <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/">Amazon Web Services Systems Manager User Guide</a>. To get started, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up-console.html">Setting up
Amazon Web Services Systems Manager</a>.</p>
<p class="title">
<b>Related resources</b>
</p>
<ul>
<li>
<p>For information about each of the tools that comprise Systems Manager, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-tools.html">Using
Systems Manager tools</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
</li>
<li>
<p>For details about predefined runbooks for Automation, a tool in Amazon Web Services Systems Manager, see the
<i>
<a href="https://docs.aws.amazon.com/systems-manager-automation-runbooks/latest/userguide/automation-runbook-reference.html">Systems Manager Automation Runbook Reference</a>
</i>.</p>
</li>
<li>
<p>For information about AppConfig, a tool in Systems Manager, see the <i>
<a href="https://docs.aws.amazon.com/appconfig/latest/userguide/">AppConfig User Guide</a>
</i>
and the <i>
<a href="https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/">AppConfig
API Reference</a>
</i>.</p>
</li>
<li>
<p>For information about Incident Manager, a tool in Systems Manager, see the <i>
<a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/">Systems Manager Incident Manager User
Guide</a>
</i> and the <i>
<a href="https://docs.aws.amazon.com/incident-manager/latest/APIReference/">Systems Manager Incident Manager API
Reference</a>
</i>.</p>
</li>
</ul>

## Installing

To install this package, simply type add or install @aws-sdk/client-ssm
using your favorite package manager:

- `npm install @aws-sdk/client-ssm`
- `yarn add @aws-sdk/client-ssm`
- `pnpm add @aws-sdk/client-ssm`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `SSMClient` and
the commands you need, for example `ListNodesCommand`:

```js
// ES5 example
const { SSMClient, ListNodesCommand } = require("@aws-sdk/client-ssm");
```

```ts
// ES6+ example
import { SSMClient, ListNodesCommand } from "@aws-sdk/client-ssm";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new SSMClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListNodesCommand(params);
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
import * as AWS from "@aws-sdk/client-ssm";
const client = new AWS.SSM({ region: "REGION" });

// async/await.
try {
  const data = await client.listNodes(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listNodes(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listNodes(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-ssm` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AddTagsToResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/AddTagsToResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/AddTagsToResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/AddTagsToResourceCommandOutput/)

</details>
<details>
<summary>
AssociateOpsItemRelatedItem
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/AssociateOpsItemRelatedItemCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/AssociateOpsItemRelatedItemCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/AssociateOpsItemRelatedItemCommandOutput/)

</details>
<details>
<summary>
CancelCommand
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/CancelCommandCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/CancelCommandCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/CancelCommandCommandOutput/)

</details>
<details>
<summary>
CancelMaintenanceWindowExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/CancelMaintenanceWindowExecutionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/CancelMaintenanceWindowExecutionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/CancelMaintenanceWindowExecutionCommandOutput/)

</details>
<details>
<summary>
CreateActivation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/CreateActivationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/CreateActivationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/CreateActivationCommandOutput/)

</details>
<details>
<summary>
CreateAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/CreateAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/CreateAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/CreateAssociationCommandOutput/)

</details>
<details>
<summary>
CreateAssociationBatch
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/CreateAssociationBatchCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/CreateAssociationBatchCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/CreateAssociationBatchCommandOutput/)

</details>
<details>
<summary>
CreateDocument
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/CreateDocumentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/CreateDocumentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/CreateDocumentCommandOutput/)

</details>
<details>
<summary>
CreateMaintenanceWindow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/CreateMaintenanceWindowCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/CreateMaintenanceWindowCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/CreateMaintenanceWindowCommandOutput/)

</details>
<details>
<summary>
CreateOpsItem
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/CreateOpsItemCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/CreateOpsItemCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/CreateOpsItemCommandOutput/)

</details>
<details>
<summary>
CreateOpsMetadata
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/CreateOpsMetadataCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/CreateOpsMetadataCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/CreateOpsMetadataCommandOutput/)

</details>
<details>
<summary>
CreatePatchBaseline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/CreatePatchBaselineCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/CreatePatchBaselineCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/CreatePatchBaselineCommandOutput/)

</details>
<details>
<summary>
CreateResourceDataSync
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/CreateResourceDataSyncCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/CreateResourceDataSyncCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/CreateResourceDataSyncCommandOutput/)

</details>
<details>
<summary>
DeleteActivation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/DeleteActivationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DeleteActivationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DeleteActivationCommandOutput/)

</details>
<details>
<summary>
DeleteAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/DeleteAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DeleteAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DeleteAssociationCommandOutput/)

</details>
<details>
<summary>
DeleteDocument
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/DeleteDocumentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DeleteDocumentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DeleteDocumentCommandOutput/)

</details>
<details>
<summary>
DeleteInventory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/DeleteInventoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DeleteInventoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DeleteInventoryCommandOutput/)

</details>
<details>
<summary>
DeleteMaintenanceWindow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/DeleteMaintenanceWindowCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DeleteMaintenanceWindowCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DeleteMaintenanceWindowCommandOutput/)

</details>
<details>
<summary>
DeleteOpsItem
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/DeleteOpsItemCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DeleteOpsItemCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DeleteOpsItemCommandOutput/)

</details>
<details>
<summary>
DeleteOpsMetadata
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/DeleteOpsMetadataCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DeleteOpsMetadataCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DeleteOpsMetadataCommandOutput/)

</details>
<details>
<summary>
DeleteParameter
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/DeleteParameterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DeleteParameterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DeleteParameterCommandOutput/)

</details>
<details>
<summary>
DeleteParameters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/DeleteParametersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DeleteParametersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DeleteParametersCommandOutput/)

</details>
<details>
<summary>
DeletePatchBaseline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/DeletePatchBaselineCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DeletePatchBaselineCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DeletePatchBaselineCommandOutput/)

</details>
<details>
<summary>
DeleteResourceDataSync
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/DeleteResourceDataSyncCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DeleteResourceDataSyncCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DeleteResourceDataSyncCommandOutput/)

</details>
<details>
<summary>
DeleteResourcePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/DeleteResourcePolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DeleteResourcePolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DeleteResourcePolicyCommandOutput/)

</details>
<details>
<summary>
DeregisterManagedInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/DeregisterManagedInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DeregisterManagedInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DeregisterManagedInstanceCommandOutput/)

</details>
<details>
<summary>
DeregisterPatchBaselineForPatchGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/DeregisterPatchBaselineForPatchGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DeregisterPatchBaselineForPatchGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DeregisterPatchBaselineForPatchGroupCommandOutput/)

</details>
<details>
<summary>
DeregisterTargetFromMaintenanceWindow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/DeregisterTargetFromMaintenanceWindowCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DeregisterTargetFromMaintenanceWindowCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DeregisterTargetFromMaintenanceWindowCommandOutput/)

</details>
<details>
<summary>
DeregisterTaskFromMaintenanceWindow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/DeregisterTaskFromMaintenanceWindowCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DeregisterTaskFromMaintenanceWindowCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DeregisterTaskFromMaintenanceWindowCommandOutput/)

</details>
<details>
<summary>
DescribeActivations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/DescribeActivationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribeActivationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribeActivationsCommandOutput/)

</details>
<details>
<summary>
DescribeAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/DescribeAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribeAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribeAssociationCommandOutput/)

</details>
<details>
<summary>
DescribeAssociationExecutions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/DescribeAssociationExecutionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribeAssociationExecutionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribeAssociationExecutionsCommandOutput/)

</details>
<details>
<summary>
DescribeAssociationExecutionTargets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/DescribeAssociationExecutionTargetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribeAssociationExecutionTargetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribeAssociationExecutionTargetsCommandOutput/)

</details>
<details>
<summary>
DescribeAutomationExecutions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/DescribeAutomationExecutionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribeAutomationExecutionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribeAutomationExecutionsCommandOutput/)

</details>
<details>
<summary>
DescribeAutomationStepExecutions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/DescribeAutomationStepExecutionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribeAutomationStepExecutionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribeAutomationStepExecutionsCommandOutput/)

</details>
<details>
<summary>
DescribeAvailablePatches
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/DescribeAvailablePatchesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribeAvailablePatchesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribeAvailablePatchesCommandOutput/)

</details>
<details>
<summary>
DescribeDocument
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/DescribeDocumentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribeDocumentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribeDocumentCommandOutput/)

</details>
<details>
<summary>
DescribeDocumentPermission
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/DescribeDocumentPermissionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribeDocumentPermissionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribeDocumentPermissionCommandOutput/)

</details>
<details>
<summary>
DescribeEffectiveInstanceAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/DescribeEffectiveInstanceAssociationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribeEffectiveInstanceAssociationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribeEffectiveInstanceAssociationsCommandOutput/)

</details>
<details>
<summary>
DescribeEffectivePatchesForPatchBaseline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/DescribeEffectivePatchesForPatchBaselineCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribeEffectivePatchesForPatchBaselineCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribeEffectivePatchesForPatchBaselineCommandOutput/)

</details>
<details>
<summary>
DescribeInstanceAssociationsStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/DescribeInstanceAssociationsStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribeInstanceAssociationsStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribeInstanceAssociationsStatusCommandOutput/)

</details>
<details>
<summary>
DescribeInstanceInformation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/DescribeInstanceInformationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribeInstanceInformationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribeInstanceInformationCommandOutput/)

</details>
<details>
<summary>
DescribeInstancePatches
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/DescribeInstancePatchesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribeInstancePatchesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribeInstancePatchesCommandOutput/)

</details>
<details>
<summary>
DescribeInstancePatchStates
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/DescribeInstancePatchStatesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribeInstancePatchStatesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribeInstancePatchStatesCommandOutput/)

</details>
<details>
<summary>
DescribeInstancePatchStatesForPatchGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/DescribeInstancePatchStatesForPatchGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribeInstancePatchStatesForPatchGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribeInstancePatchStatesForPatchGroupCommandOutput/)

</details>
<details>
<summary>
DescribeInstanceProperties
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/DescribeInstancePropertiesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribeInstancePropertiesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribeInstancePropertiesCommandOutput/)

</details>
<details>
<summary>
DescribeInventoryDeletions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/DescribeInventoryDeletionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribeInventoryDeletionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribeInventoryDeletionsCommandOutput/)

</details>
<details>
<summary>
DescribeMaintenanceWindowExecutions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/DescribeMaintenanceWindowExecutionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribeMaintenanceWindowExecutionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribeMaintenanceWindowExecutionsCommandOutput/)

</details>
<details>
<summary>
DescribeMaintenanceWindowExecutionTaskInvocations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/DescribeMaintenanceWindowExecutionTaskInvocationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput/)

</details>
<details>
<summary>
DescribeMaintenanceWindowExecutionTasks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/DescribeMaintenanceWindowExecutionTasksCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribeMaintenanceWindowExecutionTasksCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribeMaintenanceWindowExecutionTasksCommandOutput/)

</details>
<details>
<summary>
DescribeMaintenanceWindows
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/DescribeMaintenanceWindowsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribeMaintenanceWindowsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribeMaintenanceWindowsCommandOutput/)

</details>
<details>
<summary>
DescribeMaintenanceWindowSchedule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/DescribeMaintenanceWindowScheduleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribeMaintenanceWindowScheduleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribeMaintenanceWindowScheduleCommandOutput/)

</details>
<details>
<summary>
DescribeMaintenanceWindowsForTarget
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/DescribeMaintenanceWindowsForTargetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribeMaintenanceWindowsForTargetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribeMaintenanceWindowsForTargetCommandOutput/)

</details>
<details>
<summary>
DescribeMaintenanceWindowTargets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/DescribeMaintenanceWindowTargetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribeMaintenanceWindowTargetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribeMaintenanceWindowTargetsCommandOutput/)

</details>
<details>
<summary>
DescribeMaintenanceWindowTasks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/DescribeMaintenanceWindowTasksCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribeMaintenanceWindowTasksCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribeMaintenanceWindowTasksCommandOutput/)

</details>
<details>
<summary>
DescribeOpsItems
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/DescribeOpsItemsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribeOpsItemsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribeOpsItemsCommandOutput/)

</details>
<details>
<summary>
DescribeParameters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/DescribeParametersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribeParametersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribeParametersCommandOutput/)

</details>
<details>
<summary>
DescribePatchBaselines
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/DescribePatchBaselinesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribePatchBaselinesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribePatchBaselinesCommandOutput/)

</details>
<details>
<summary>
DescribePatchGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/DescribePatchGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribePatchGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribePatchGroupsCommandOutput/)

</details>
<details>
<summary>
DescribePatchGroupState
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/DescribePatchGroupStateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribePatchGroupStateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribePatchGroupStateCommandOutput/)

</details>
<details>
<summary>
DescribePatchProperties
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/DescribePatchPropertiesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribePatchPropertiesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribePatchPropertiesCommandOutput/)

</details>
<details>
<summary>
DescribeSessions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/DescribeSessionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribeSessionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DescribeSessionsCommandOutput/)

</details>
<details>
<summary>
DisassociateOpsItemRelatedItem
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/DisassociateOpsItemRelatedItemCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DisassociateOpsItemRelatedItemCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/DisassociateOpsItemRelatedItemCommandOutput/)

</details>
<details>
<summary>
GetAccessToken
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/GetAccessTokenCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/GetAccessTokenCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/GetAccessTokenCommandOutput/)

</details>
<details>
<summary>
GetAutomationExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/GetAutomationExecutionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/GetAutomationExecutionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/GetAutomationExecutionCommandOutput/)

</details>
<details>
<summary>
GetCalendarState
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/GetCalendarStateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/GetCalendarStateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/GetCalendarStateCommandOutput/)

</details>
<details>
<summary>
GetCommandInvocation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/GetCommandInvocationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/GetCommandInvocationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/GetCommandInvocationCommandOutput/)

</details>
<details>
<summary>
GetConnectionStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/GetConnectionStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/GetConnectionStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/GetConnectionStatusCommandOutput/)

</details>
<details>
<summary>
GetDefaultPatchBaseline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/GetDefaultPatchBaselineCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/GetDefaultPatchBaselineCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/GetDefaultPatchBaselineCommandOutput/)

</details>
<details>
<summary>
GetDeployablePatchSnapshotForInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/GetDeployablePatchSnapshotForInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/GetDeployablePatchSnapshotForInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/GetDeployablePatchSnapshotForInstanceCommandOutput/)

</details>
<details>
<summary>
GetDocument
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/GetDocumentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/GetDocumentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/GetDocumentCommandOutput/)

</details>
<details>
<summary>
GetExecutionPreview
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/GetExecutionPreviewCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/GetExecutionPreviewCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/GetExecutionPreviewCommandOutput/)

</details>
<details>
<summary>
GetInventory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/GetInventoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/GetInventoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/GetInventoryCommandOutput/)

</details>
<details>
<summary>
GetInventorySchema
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/GetInventorySchemaCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/GetInventorySchemaCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/GetInventorySchemaCommandOutput/)

</details>
<details>
<summary>
GetMaintenanceWindow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/GetMaintenanceWindowCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/GetMaintenanceWindowCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/GetMaintenanceWindowCommandOutput/)

</details>
<details>
<summary>
GetMaintenanceWindowExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/GetMaintenanceWindowExecutionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/GetMaintenanceWindowExecutionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/GetMaintenanceWindowExecutionCommandOutput/)

</details>
<details>
<summary>
GetMaintenanceWindowExecutionTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/GetMaintenanceWindowExecutionTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/GetMaintenanceWindowExecutionTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/GetMaintenanceWindowExecutionTaskCommandOutput/)

</details>
<details>
<summary>
GetMaintenanceWindowExecutionTaskInvocation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/GetMaintenanceWindowExecutionTaskInvocationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/GetMaintenanceWindowExecutionTaskInvocationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/GetMaintenanceWindowExecutionTaskInvocationCommandOutput/)

</details>
<details>
<summary>
GetMaintenanceWindowTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/GetMaintenanceWindowTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/GetMaintenanceWindowTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/GetMaintenanceWindowTaskCommandOutput/)

</details>
<details>
<summary>
GetOpsItem
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/GetOpsItemCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/GetOpsItemCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/GetOpsItemCommandOutput/)

</details>
<details>
<summary>
GetOpsMetadata
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/GetOpsMetadataCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/GetOpsMetadataCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/GetOpsMetadataCommandOutput/)

</details>
<details>
<summary>
GetOpsSummary
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/GetOpsSummaryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/GetOpsSummaryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/GetOpsSummaryCommandOutput/)

</details>
<details>
<summary>
GetParameter
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/GetParameterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/GetParameterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/GetParameterCommandOutput/)

</details>
<details>
<summary>
GetParameterHistory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/GetParameterHistoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/GetParameterHistoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/GetParameterHistoryCommandOutput/)

</details>
<details>
<summary>
GetParameters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/GetParametersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/GetParametersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/GetParametersCommandOutput/)

</details>
<details>
<summary>
GetParametersByPath
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/GetParametersByPathCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/GetParametersByPathCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/GetParametersByPathCommandOutput/)

</details>
<details>
<summary>
GetPatchBaseline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/GetPatchBaselineCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/GetPatchBaselineCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/GetPatchBaselineCommandOutput/)

</details>
<details>
<summary>
GetPatchBaselineForPatchGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/GetPatchBaselineForPatchGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/GetPatchBaselineForPatchGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/GetPatchBaselineForPatchGroupCommandOutput/)

</details>
<details>
<summary>
GetResourcePolicies
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/GetResourcePoliciesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/GetResourcePoliciesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/GetResourcePoliciesCommandOutput/)

</details>
<details>
<summary>
GetServiceSetting
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/GetServiceSettingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/GetServiceSettingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/GetServiceSettingCommandOutput/)

</details>
<details>
<summary>
LabelParameterVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/LabelParameterVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/LabelParameterVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/LabelParameterVersionCommandOutput/)

</details>
<details>
<summary>
ListAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/ListAssociationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/ListAssociationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/ListAssociationsCommandOutput/)

</details>
<details>
<summary>
ListAssociationVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/ListAssociationVersionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/ListAssociationVersionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/ListAssociationVersionsCommandOutput/)

</details>
<details>
<summary>
ListCommandInvocations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/ListCommandInvocationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/ListCommandInvocationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/ListCommandInvocationsCommandOutput/)

</details>
<details>
<summary>
ListCommands
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/ListCommandsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/ListCommandsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/ListCommandsCommandOutput/)

</details>
<details>
<summary>
ListComplianceItems
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/ListComplianceItemsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/ListComplianceItemsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/ListComplianceItemsCommandOutput/)

</details>
<details>
<summary>
ListComplianceSummaries
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/ListComplianceSummariesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/ListComplianceSummariesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/ListComplianceSummariesCommandOutput/)

</details>
<details>
<summary>
ListDocumentMetadataHistory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/ListDocumentMetadataHistoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/ListDocumentMetadataHistoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/ListDocumentMetadataHistoryCommandOutput/)

</details>
<details>
<summary>
ListDocuments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/ListDocumentsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/ListDocumentsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/ListDocumentsCommandOutput/)

</details>
<details>
<summary>
ListDocumentVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/ListDocumentVersionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/ListDocumentVersionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/ListDocumentVersionsCommandOutput/)

</details>
<details>
<summary>
ListInventoryEntries
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/ListInventoryEntriesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/ListInventoryEntriesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/ListInventoryEntriesCommandOutput/)

</details>
<details>
<summary>
ListNodes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/ListNodesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/ListNodesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/ListNodesCommandOutput/)

</details>
<details>
<summary>
ListNodesSummary
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/ListNodesSummaryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/ListNodesSummaryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/ListNodesSummaryCommandOutput/)

</details>
<details>
<summary>
ListOpsItemEvents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/ListOpsItemEventsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/ListOpsItemEventsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/ListOpsItemEventsCommandOutput/)

</details>
<details>
<summary>
ListOpsItemRelatedItems
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/ListOpsItemRelatedItemsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/ListOpsItemRelatedItemsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/ListOpsItemRelatedItemsCommandOutput/)

</details>
<details>
<summary>
ListOpsMetadata
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/ListOpsMetadataCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/ListOpsMetadataCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/ListOpsMetadataCommandOutput/)

</details>
<details>
<summary>
ListResourceComplianceSummaries
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/ListResourceComplianceSummariesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/ListResourceComplianceSummariesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/ListResourceComplianceSummariesCommandOutput/)

</details>
<details>
<summary>
ListResourceDataSync
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/ListResourceDataSyncCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/ListResourceDataSyncCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/ListResourceDataSyncCommandOutput/)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/ListTagsForResourceCommandOutput/)

</details>
<details>
<summary>
ModifyDocumentPermission
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/ModifyDocumentPermissionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/ModifyDocumentPermissionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/ModifyDocumentPermissionCommandOutput/)

</details>
<details>
<summary>
PutComplianceItems
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/PutComplianceItemsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/PutComplianceItemsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/PutComplianceItemsCommandOutput/)

</details>
<details>
<summary>
PutInventory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/PutInventoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/PutInventoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/PutInventoryCommandOutput/)

</details>
<details>
<summary>
PutParameter
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/PutParameterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/PutParameterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/PutParameterCommandOutput/)

</details>
<details>
<summary>
PutResourcePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/PutResourcePolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/PutResourcePolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/PutResourcePolicyCommandOutput/)

</details>
<details>
<summary>
RegisterDefaultPatchBaseline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/RegisterDefaultPatchBaselineCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/RegisterDefaultPatchBaselineCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/RegisterDefaultPatchBaselineCommandOutput/)

</details>
<details>
<summary>
RegisterPatchBaselineForPatchGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/RegisterPatchBaselineForPatchGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/RegisterPatchBaselineForPatchGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/RegisterPatchBaselineForPatchGroupCommandOutput/)

</details>
<details>
<summary>
RegisterTargetWithMaintenanceWindow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/RegisterTargetWithMaintenanceWindowCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/RegisterTargetWithMaintenanceWindowCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/RegisterTargetWithMaintenanceWindowCommandOutput/)

</details>
<details>
<summary>
RegisterTaskWithMaintenanceWindow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/RegisterTaskWithMaintenanceWindowCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/RegisterTaskWithMaintenanceWindowCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/RegisterTaskWithMaintenanceWindowCommandOutput/)

</details>
<details>
<summary>
RemoveTagsFromResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/RemoveTagsFromResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/RemoveTagsFromResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/RemoveTagsFromResourceCommandOutput/)

</details>
<details>
<summary>
ResetServiceSetting
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/ResetServiceSettingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/ResetServiceSettingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/ResetServiceSettingCommandOutput/)

</details>
<details>
<summary>
ResumeSession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/ResumeSessionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/ResumeSessionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/ResumeSessionCommandOutput/)

</details>
<details>
<summary>
SendAutomationSignal
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/SendAutomationSignalCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/SendAutomationSignalCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/SendAutomationSignalCommandOutput/)

</details>
<details>
<summary>
SendCommand
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/SendCommandCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/SendCommandCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/SendCommandCommandOutput/)

</details>
<details>
<summary>
StartAccessRequest
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/StartAccessRequestCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/StartAccessRequestCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/StartAccessRequestCommandOutput/)

</details>
<details>
<summary>
StartAssociationsOnce
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/StartAssociationsOnceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/StartAssociationsOnceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/StartAssociationsOnceCommandOutput/)

</details>
<details>
<summary>
StartAutomationExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/StartAutomationExecutionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/StartAutomationExecutionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/StartAutomationExecutionCommandOutput/)

</details>
<details>
<summary>
StartChangeRequestExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/StartChangeRequestExecutionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/StartChangeRequestExecutionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/StartChangeRequestExecutionCommandOutput/)

</details>
<details>
<summary>
StartExecutionPreview
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/StartExecutionPreviewCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/StartExecutionPreviewCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/StartExecutionPreviewCommandOutput/)

</details>
<details>
<summary>
StartSession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/StartSessionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/StartSessionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/StartSessionCommandOutput/)

</details>
<details>
<summary>
StopAutomationExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/StopAutomationExecutionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/StopAutomationExecutionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/StopAutomationExecutionCommandOutput/)

</details>
<details>
<summary>
TerminateSession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/TerminateSessionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/TerminateSessionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/TerminateSessionCommandOutput/)

</details>
<details>
<summary>
UnlabelParameterVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/UnlabelParameterVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/UnlabelParameterVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/UnlabelParameterVersionCommandOutput/)

</details>
<details>
<summary>
UpdateAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/UpdateAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/UpdateAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/UpdateAssociationCommandOutput/)

</details>
<details>
<summary>
UpdateAssociationStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/UpdateAssociationStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/UpdateAssociationStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/UpdateAssociationStatusCommandOutput/)

</details>
<details>
<summary>
UpdateDocument
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/UpdateDocumentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/UpdateDocumentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/UpdateDocumentCommandOutput/)

</details>
<details>
<summary>
UpdateDocumentDefaultVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/UpdateDocumentDefaultVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/UpdateDocumentDefaultVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/UpdateDocumentDefaultVersionCommandOutput/)

</details>
<details>
<summary>
UpdateDocumentMetadata
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/UpdateDocumentMetadataCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/UpdateDocumentMetadataCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/UpdateDocumentMetadataCommandOutput/)

</details>
<details>
<summary>
UpdateMaintenanceWindow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/UpdateMaintenanceWindowCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/UpdateMaintenanceWindowCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/UpdateMaintenanceWindowCommandOutput/)

</details>
<details>
<summary>
UpdateMaintenanceWindowTarget
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/UpdateMaintenanceWindowTargetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/UpdateMaintenanceWindowTargetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/UpdateMaintenanceWindowTargetCommandOutput/)

</details>
<details>
<summary>
UpdateMaintenanceWindowTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/UpdateMaintenanceWindowTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/UpdateMaintenanceWindowTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/UpdateMaintenanceWindowTaskCommandOutput/)

</details>
<details>
<summary>
UpdateManagedInstanceRole
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/UpdateManagedInstanceRoleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/UpdateManagedInstanceRoleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/UpdateManagedInstanceRoleCommandOutput/)

</details>
<details>
<summary>
UpdateOpsItem
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/UpdateOpsItemCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/UpdateOpsItemCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/UpdateOpsItemCommandOutput/)

</details>
<details>
<summary>
UpdateOpsMetadata
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/UpdateOpsMetadataCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/UpdateOpsMetadataCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/UpdateOpsMetadataCommandOutput/)

</details>
<details>
<summary>
UpdatePatchBaseline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/UpdatePatchBaselineCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/UpdatePatchBaselineCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/UpdatePatchBaselineCommandOutput/)

</details>
<details>
<summary>
UpdateResourceDataSync
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/UpdateResourceDataSyncCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/UpdateResourceDataSyncCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/UpdateResourceDataSyncCommandOutput/)

</details>
<details>
<summary>
UpdateServiceSetting
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ssm/command/UpdateServiceSettingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/UpdateServiceSettingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ssm/Interface/UpdateServiceSettingCommandOutput/)

</details>
