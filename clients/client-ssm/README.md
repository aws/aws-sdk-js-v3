<!-- generated file, do not edit directly -->

# @aws-sdk/client-ssm

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-ssm/latest.svg)](https://www.npmjs.com/package/@aws-sdk/client-ssm)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-ssm.svg)](https://www.npmjs.com/package/@aws-sdk/client-ssm)

## Description

AWS SDK for JavaScript SSM Client for Node.js, Browser and React Native.

<p>Amazon Web Services Systems Manager is the operations hub for your Amazon Web Services applications and resources and a secure
end-to-end management solution for hybrid cloud environments that enables safe and secure
operations at scale.</p>
<p>This reference is intended to be used with the <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/">Amazon Web Services Systems Manager User Guide</a>. To get started, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up.html">Setting up Amazon Web Services Systems Manager</a>.</p>
<p class="title">
<b>Related resources</b>
</p>
<ul>
<li>
<p>For information about each of the capabilities that comprise Systems Manager, see <a href="https://docs.aws.amazon.com/systems-manager-automation-runbooks/latest/userguide/what-is-systems-manager.html#systems-manager-capabilities">Systems Manager capabilities</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
</li>
<li>
<p>For details about predefined runbooks for Automation, a capability of Amazon Web Services Systems Manager, see the
<i>
<a href="https://docs.aws.amazon.com/systems-manager-automation-runbooks/latest/userguide/automation-runbook-reference.html">Systems Manager Automation runbook reference</a>
</i>.</p>
</li>
<li>
<p>For information about AppConfig, a capability of Systems Manager, see the <i>
<a href="https://docs.aws.amazon.com/appconfig/latest/userguide/">AppConfig User Guide</a>
</i>
and the <i>
<a href="https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/">AppConfig
API Reference</a>
</i>.</p>
</li>
<li>
<p>For information about Incident Manager, a capability of Systems Manager, see the <i>
<a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/">Systems Manager Incident Manager User
Guide</a>
</i> and the <i>
<a href="https://docs.aws.amazon.com/incident-manager/latest/APIReference/">Systems Manager Incident Manager API
Reference</a>
</i>.</p>
</li>
</ul>

## Installing

To install the this package, simply type add or install @aws-sdk/client-ssm
using your favorite package manager:

- `npm install @aws-sdk/client-ssm`
- `yarn add @aws-sdk/client-ssm`
- `pnpm add @aws-sdk/client-ssm`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `SSMClient` and
the commands you need, for example `AddTagsToResourceCommand`:

```js
// ES5 example
const { SSMClient, AddTagsToResourceCommand } = require("@aws-sdk/client-ssm");
```

```ts
// ES6+ example
import { SSMClient, AddTagsToResourceCommand } from "@aws-sdk/client-ssm";
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
const command = new AddTagsToResourceCommand(params);
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
  const data = await client.addTagsToResource(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .addTagsToResource(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.addTagsToResource(params, (err, data) => {
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/addtagstoresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/addtagstoresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/addtagstoresourcecommandoutput.html)

</details>
<details>
<summary>
AssociateOpsItemRelatedItem
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/associateopsitemrelateditemcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/associateopsitemrelateditemcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/associateopsitemrelateditemcommandoutput.html)

</details>
<details>
<summary>
CancelCommand
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/cancelcommandcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/cancelcommandcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/cancelcommandcommandoutput.html)

</details>
<details>
<summary>
CancelMaintenanceWindowExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/cancelmaintenancewindowexecutioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/cancelmaintenancewindowexecutioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/cancelmaintenancewindowexecutioncommandoutput.html)

</details>
<details>
<summary>
CreateActivation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/createactivationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/createactivationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/createactivationcommandoutput.html)

</details>
<details>
<summary>
CreateAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/createassociationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/createassociationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/createassociationcommandoutput.html)

</details>
<details>
<summary>
CreateAssociationBatch
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/createassociationbatchcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/createassociationbatchcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/createassociationbatchcommandoutput.html)

</details>
<details>
<summary>
CreateDocument
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/createdocumentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/createdocumentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/createdocumentcommandoutput.html)

</details>
<details>
<summary>
CreateMaintenanceWindow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/createmaintenancewindowcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/createmaintenancewindowcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/createmaintenancewindowcommandoutput.html)

</details>
<details>
<summary>
CreateOpsItem
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/createopsitemcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/createopsitemcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/createopsitemcommandoutput.html)

</details>
<details>
<summary>
CreateOpsMetadata
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/createopsmetadatacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/createopsmetadatacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/createopsmetadatacommandoutput.html)

</details>
<details>
<summary>
CreatePatchBaseline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/createpatchbaselinecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/createpatchbaselinecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/createpatchbaselinecommandoutput.html)

</details>
<details>
<summary>
CreateResourceDataSync
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/createresourcedatasynccommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/createresourcedatasynccommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/createresourcedatasynccommandoutput.html)

</details>
<details>
<summary>
DeleteActivation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/deleteactivationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/deleteactivationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/deleteactivationcommandoutput.html)

</details>
<details>
<summary>
DeleteAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/deleteassociationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/deleteassociationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/deleteassociationcommandoutput.html)

</details>
<details>
<summary>
DeleteDocument
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/deletedocumentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/deletedocumentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/deletedocumentcommandoutput.html)

</details>
<details>
<summary>
DeleteInventory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/deleteinventorycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/deleteinventorycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/deleteinventorycommandoutput.html)

</details>
<details>
<summary>
DeleteMaintenanceWindow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/deletemaintenancewindowcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/deletemaintenancewindowcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/deletemaintenancewindowcommandoutput.html)

</details>
<details>
<summary>
DeleteOpsMetadata
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/deleteopsmetadatacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/deleteopsmetadatacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/deleteopsmetadatacommandoutput.html)

</details>
<details>
<summary>
DeleteParameter
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/deleteparametercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/deleteparametercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/deleteparametercommandoutput.html)

</details>
<details>
<summary>
DeleteParameters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/deleteparameterscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/deleteparameterscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/deleteparameterscommandoutput.html)

</details>
<details>
<summary>
DeletePatchBaseline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/deletepatchbaselinecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/deletepatchbaselinecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/deletepatchbaselinecommandoutput.html)

</details>
<details>
<summary>
DeleteResourceDataSync
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/deleteresourcedatasynccommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/deleteresourcedatasynccommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/deleteresourcedatasynccommandoutput.html)

</details>
<details>
<summary>
DeleteResourcePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/deleteresourcepolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/deleteresourcepolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/deleteresourcepolicycommandoutput.html)

</details>
<details>
<summary>
DeregisterManagedInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/deregistermanagedinstancecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/deregistermanagedinstancecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/deregistermanagedinstancecommandoutput.html)

</details>
<details>
<summary>
DeregisterPatchBaselineForPatchGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/deregisterpatchbaselineforpatchgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/deregisterpatchbaselineforpatchgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/deregisterpatchbaselineforpatchgroupcommandoutput.html)

</details>
<details>
<summary>
DeregisterTargetFromMaintenanceWindow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/deregistertargetfrommaintenancewindowcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/deregistertargetfrommaintenancewindowcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/deregistertargetfrommaintenancewindowcommandoutput.html)

</details>
<details>
<summary>
DeregisterTaskFromMaintenanceWindow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/deregistertaskfrommaintenancewindowcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/deregistertaskfrommaintenancewindowcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/deregistertaskfrommaintenancewindowcommandoutput.html)

</details>
<details>
<summary>
DescribeActivations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/describeactivationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describeactivationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describeactivationscommandoutput.html)

</details>
<details>
<summary>
DescribeAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/describeassociationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describeassociationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describeassociationcommandoutput.html)

</details>
<details>
<summary>
DescribeAssociationExecutions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/describeassociationexecutionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describeassociationexecutionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describeassociationexecutionscommandoutput.html)

</details>
<details>
<summary>
DescribeAssociationExecutionTargets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/describeassociationexecutiontargetscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describeassociationexecutiontargetscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describeassociationexecutiontargetscommandoutput.html)

</details>
<details>
<summary>
DescribeAutomationExecutions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/describeautomationexecutionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describeautomationexecutionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describeautomationexecutionscommandoutput.html)

</details>
<details>
<summary>
DescribeAutomationStepExecutions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/describeautomationstepexecutionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describeautomationstepexecutionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describeautomationstepexecutionscommandoutput.html)

</details>
<details>
<summary>
DescribeAvailablePatches
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/describeavailablepatchescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describeavailablepatchescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describeavailablepatchescommandoutput.html)

</details>
<details>
<summary>
DescribeDocument
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/describedocumentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describedocumentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describedocumentcommandoutput.html)

</details>
<details>
<summary>
DescribeDocumentPermission
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/describedocumentpermissioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describedocumentpermissioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describedocumentpermissioncommandoutput.html)

</details>
<details>
<summary>
DescribeEffectiveInstanceAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/describeeffectiveinstanceassociationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describeeffectiveinstanceassociationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describeeffectiveinstanceassociationscommandoutput.html)

</details>
<details>
<summary>
DescribeEffectivePatchesForPatchBaseline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/describeeffectivepatchesforpatchbaselinecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describeeffectivepatchesforpatchbaselinecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describeeffectivepatchesforpatchbaselinecommandoutput.html)

</details>
<details>
<summary>
DescribeInstanceAssociationsStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/describeinstanceassociationsstatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describeinstanceassociationsstatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describeinstanceassociationsstatuscommandoutput.html)

</details>
<details>
<summary>
DescribeInstanceInformation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/describeinstanceinformationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describeinstanceinformationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describeinstanceinformationcommandoutput.html)

</details>
<details>
<summary>
DescribeInstancePatches
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/describeinstancepatchescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describeinstancepatchescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describeinstancepatchescommandoutput.html)

</details>
<details>
<summary>
DescribeInstancePatchStates
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/describeinstancepatchstatescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describeinstancepatchstatescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describeinstancepatchstatescommandoutput.html)

</details>
<details>
<summary>
DescribeInstancePatchStatesForPatchGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/describeinstancepatchstatesforpatchgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describeinstancepatchstatesforpatchgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describeinstancepatchstatesforpatchgroupcommandoutput.html)

</details>
<details>
<summary>
DescribeInventoryDeletions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/describeinventorydeletionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describeinventorydeletionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describeinventorydeletionscommandoutput.html)

</details>
<details>
<summary>
DescribeMaintenanceWindowExecutions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/describemaintenancewindowexecutionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describemaintenancewindowexecutionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describemaintenancewindowexecutionscommandoutput.html)

</details>
<details>
<summary>
DescribeMaintenanceWindowExecutionTaskInvocations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/describemaintenancewindowexecutiontaskinvocationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describemaintenancewindowexecutiontaskinvocationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describemaintenancewindowexecutiontaskinvocationscommandoutput.html)

</details>
<details>
<summary>
DescribeMaintenanceWindowExecutionTasks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/describemaintenancewindowexecutiontaskscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describemaintenancewindowexecutiontaskscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describemaintenancewindowexecutiontaskscommandoutput.html)

</details>
<details>
<summary>
DescribeMaintenanceWindows
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/describemaintenancewindowscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describemaintenancewindowscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describemaintenancewindowscommandoutput.html)

</details>
<details>
<summary>
DescribeMaintenanceWindowSchedule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/describemaintenancewindowschedulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describemaintenancewindowschedulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describemaintenancewindowschedulecommandoutput.html)

</details>
<details>
<summary>
DescribeMaintenanceWindowsForTarget
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/describemaintenancewindowsfortargetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describemaintenancewindowsfortargetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describemaintenancewindowsfortargetcommandoutput.html)

</details>
<details>
<summary>
DescribeMaintenanceWindowTargets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/describemaintenancewindowtargetscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describemaintenancewindowtargetscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describemaintenancewindowtargetscommandoutput.html)

</details>
<details>
<summary>
DescribeMaintenanceWindowTasks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/describemaintenancewindowtaskscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describemaintenancewindowtaskscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describemaintenancewindowtaskscommandoutput.html)

</details>
<details>
<summary>
DescribeOpsItems
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/describeopsitemscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describeopsitemscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describeopsitemscommandoutput.html)

</details>
<details>
<summary>
DescribeParameters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/describeparameterscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describeparameterscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describeparameterscommandoutput.html)

</details>
<details>
<summary>
DescribePatchBaselines
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/describepatchbaselinescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describepatchbaselinescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describepatchbaselinescommandoutput.html)

</details>
<details>
<summary>
DescribePatchGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/describepatchgroupscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describepatchgroupscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describepatchgroupscommandoutput.html)

</details>
<details>
<summary>
DescribePatchGroupState
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/describepatchgroupstatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describepatchgroupstatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describepatchgroupstatecommandoutput.html)

</details>
<details>
<summary>
DescribePatchProperties
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/describepatchpropertiescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describepatchpropertiescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describepatchpropertiescommandoutput.html)

</details>
<details>
<summary>
DescribeSessions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/describesessionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describesessionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/describesessionscommandoutput.html)

</details>
<details>
<summary>
DisassociateOpsItemRelatedItem
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/disassociateopsitemrelateditemcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/disassociateopsitemrelateditemcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/disassociateopsitemrelateditemcommandoutput.html)

</details>
<details>
<summary>
GetAutomationExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/getautomationexecutioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/getautomationexecutioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/getautomationexecutioncommandoutput.html)

</details>
<details>
<summary>
GetCalendarState
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/getcalendarstatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/getcalendarstatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/getcalendarstatecommandoutput.html)

</details>
<details>
<summary>
GetCommandInvocation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/getcommandinvocationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/getcommandinvocationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/getcommandinvocationcommandoutput.html)

</details>
<details>
<summary>
GetConnectionStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/getconnectionstatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/getconnectionstatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/getconnectionstatuscommandoutput.html)

</details>
<details>
<summary>
GetDefaultPatchBaseline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/getdefaultpatchbaselinecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/getdefaultpatchbaselinecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/getdefaultpatchbaselinecommandoutput.html)

</details>
<details>
<summary>
GetDeployablePatchSnapshotForInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/getdeployablepatchsnapshotforinstancecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/getdeployablepatchsnapshotforinstancecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/getdeployablepatchsnapshotforinstancecommandoutput.html)

</details>
<details>
<summary>
GetDocument
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/getdocumentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/getdocumentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/getdocumentcommandoutput.html)

</details>
<details>
<summary>
GetInventory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/getinventorycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/getinventorycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/getinventorycommandoutput.html)

</details>
<details>
<summary>
GetInventorySchema
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/getinventoryschemacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/getinventoryschemacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/getinventoryschemacommandoutput.html)

</details>
<details>
<summary>
GetMaintenanceWindow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/getmaintenancewindowcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/getmaintenancewindowcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/getmaintenancewindowcommandoutput.html)

</details>
<details>
<summary>
GetMaintenanceWindowExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/getmaintenancewindowexecutioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/getmaintenancewindowexecutioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/getmaintenancewindowexecutioncommandoutput.html)

</details>
<details>
<summary>
GetMaintenanceWindowExecutionTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/getmaintenancewindowexecutiontaskcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/getmaintenancewindowexecutiontaskcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/getmaintenancewindowexecutiontaskcommandoutput.html)

</details>
<details>
<summary>
GetMaintenanceWindowExecutionTaskInvocation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/getmaintenancewindowexecutiontaskinvocationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/getmaintenancewindowexecutiontaskinvocationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/getmaintenancewindowexecutiontaskinvocationcommandoutput.html)

</details>
<details>
<summary>
GetMaintenanceWindowTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/getmaintenancewindowtaskcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/getmaintenancewindowtaskcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/getmaintenancewindowtaskcommandoutput.html)

</details>
<details>
<summary>
GetOpsItem
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/getopsitemcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/getopsitemcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/getopsitemcommandoutput.html)

</details>
<details>
<summary>
GetOpsMetadata
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/getopsmetadatacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/getopsmetadatacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/getopsmetadatacommandoutput.html)

</details>
<details>
<summary>
GetOpsSummary
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/getopssummarycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/getopssummarycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/getopssummarycommandoutput.html)

</details>
<details>
<summary>
GetParameter
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/getparametercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/getparametercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/getparametercommandoutput.html)

</details>
<details>
<summary>
GetParameterHistory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/getparameterhistorycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/getparameterhistorycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/getparameterhistorycommandoutput.html)

</details>
<details>
<summary>
GetParameters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/getparameterscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/getparameterscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/getparameterscommandoutput.html)

</details>
<details>
<summary>
GetParametersByPath
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/getparametersbypathcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/getparametersbypathcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/getparametersbypathcommandoutput.html)

</details>
<details>
<summary>
GetPatchBaseline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/getpatchbaselinecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/getpatchbaselinecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/getpatchbaselinecommandoutput.html)

</details>
<details>
<summary>
GetPatchBaselineForPatchGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/getpatchbaselineforpatchgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/getpatchbaselineforpatchgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/getpatchbaselineforpatchgroupcommandoutput.html)

</details>
<details>
<summary>
GetResourcePolicies
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/getresourcepoliciescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/getresourcepoliciescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/getresourcepoliciescommandoutput.html)

</details>
<details>
<summary>
GetServiceSetting
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/getservicesettingcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/getservicesettingcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/getservicesettingcommandoutput.html)

</details>
<details>
<summary>
LabelParameterVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/labelparameterversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/labelparameterversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/labelparameterversioncommandoutput.html)

</details>
<details>
<summary>
ListAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/listassociationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/listassociationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/listassociationscommandoutput.html)

</details>
<details>
<summary>
ListAssociationVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/listassociationversionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/listassociationversionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/listassociationversionscommandoutput.html)

</details>
<details>
<summary>
ListCommandInvocations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/listcommandinvocationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/listcommandinvocationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/listcommandinvocationscommandoutput.html)

</details>
<details>
<summary>
ListCommands
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/listcommandscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/listcommandscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/listcommandscommandoutput.html)

</details>
<details>
<summary>
ListComplianceItems
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/listcomplianceitemscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/listcomplianceitemscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/listcomplianceitemscommandoutput.html)

</details>
<details>
<summary>
ListComplianceSummaries
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/listcompliancesummariescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/listcompliancesummariescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/listcompliancesummariescommandoutput.html)

</details>
<details>
<summary>
ListDocumentMetadataHistory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/listdocumentmetadatahistorycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/listdocumentmetadatahistorycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/listdocumentmetadatahistorycommandoutput.html)

</details>
<details>
<summary>
ListDocuments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/listdocumentscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/listdocumentscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/listdocumentscommandoutput.html)

</details>
<details>
<summary>
ListDocumentVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/listdocumentversionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/listdocumentversionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/listdocumentversionscommandoutput.html)

</details>
<details>
<summary>
ListInventoryEntries
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/listinventoryentriescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/listinventoryentriescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/listinventoryentriescommandoutput.html)

</details>
<details>
<summary>
ListOpsItemEvents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/listopsitemeventscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/listopsitemeventscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/listopsitemeventscommandoutput.html)

</details>
<details>
<summary>
ListOpsItemRelatedItems
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/listopsitemrelateditemscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/listopsitemrelateditemscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/listopsitemrelateditemscommandoutput.html)

</details>
<details>
<summary>
ListOpsMetadata
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/listopsmetadatacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/listopsmetadatacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/listopsmetadatacommandoutput.html)

</details>
<details>
<summary>
ListResourceComplianceSummaries
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/listresourcecompliancesummariescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/listresourcecompliancesummariescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/listresourcecompliancesummariescommandoutput.html)

</details>
<details>
<summary>
ListResourceDataSync
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/listresourcedatasynccommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/listresourcedatasynccommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/listresourcedatasynccommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
ModifyDocumentPermission
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/modifydocumentpermissioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/modifydocumentpermissioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/modifydocumentpermissioncommandoutput.html)

</details>
<details>
<summary>
PutComplianceItems
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/putcomplianceitemscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/putcomplianceitemscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/putcomplianceitemscommandoutput.html)

</details>
<details>
<summary>
PutInventory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/putinventorycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/putinventorycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/putinventorycommandoutput.html)

</details>
<details>
<summary>
PutParameter
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/putparametercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/putparametercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/putparametercommandoutput.html)

</details>
<details>
<summary>
PutResourcePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/putresourcepolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/putresourcepolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/putresourcepolicycommandoutput.html)

</details>
<details>
<summary>
RegisterDefaultPatchBaseline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/registerdefaultpatchbaselinecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/registerdefaultpatchbaselinecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/registerdefaultpatchbaselinecommandoutput.html)

</details>
<details>
<summary>
RegisterPatchBaselineForPatchGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/registerpatchbaselineforpatchgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/registerpatchbaselineforpatchgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/registerpatchbaselineforpatchgroupcommandoutput.html)

</details>
<details>
<summary>
RegisterTargetWithMaintenanceWindow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/registertargetwithmaintenancewindowcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/registertargetwithmaintenancewindowcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/registertargetwithmaintenancewindowcommandoutput.html)

</details>
<details>
<summary>
RegisterTaskWithMaintenanceWindow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/registertaskwithmaintenancewindowcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/registertaskwithmaintenancewindowcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/registertaskwithmaintenancewindowcommandoutput.html)

</details>
<details>
<summary>
RemoveTagsFromResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/removetagsfromresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/removetagsfromresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/removetagsfromresourcecommandoutput.html)

</details>
<details>
<summary>
ResetServiceSetting
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/resetservicesettingcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/resetservicesettingcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/resetservicesettingcommandoutput.html)

</details>
<details>
<summary>
ResumeSession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/resumesessioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/resumesessioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/resumesessioncommandoutput.html)

</details>
<details>
<summary>
SendAutomationSignal
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/sendautomationsignalcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/sendautomationsignalcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/sendautomationsignalcommandoutput.html)

</details>
<details>
<summary>
SendCommand
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/sendcommandcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/sendcommandcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/sendcommandcommandoutput.html)

</details>
<details>
<summary>
StartAssociationsOnce
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/startassociationsoncecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/startassociationsoncecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/startassociationsoncecommandoutput.html)

</details>
<details>
<summary>
StartAutomationExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/startautomationexecutioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/startautomationexecutioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/startautomationexecutioncommandoutput.html)

</details>
<details>
<summary>
StartChangeRequestExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/startchangerequestexecutioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/startchangerequestexecutioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/startchangerequestexecutioncommandoutput.html)

</details>
<details>
<summary>
StartSession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/startsessioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/startsessioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/startsessioncommandoutput.html)

</details>
<details>
<summary>
StopAutomationExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/stopautomationexecutioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/stopautomationexecutioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/stopautomationexecutioncommandoutput.html)

</details>
<details>
<summary>
TerminateSession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/terminatesessioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/terminatesessioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/terminatesessioncommandoutput.html)

</details>
<details>
<summary>
UnlabelParameterVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/unlabelparameterversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/unlabelparameterversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/unlabelparameterversioncommandoutput.html)

</details>
<details>
<summary>
UpdateAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/updateassociationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/updateassociationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/updateassociationcommandoutput.html)

</details>
<details>
<summary>
UpdateAssociationStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/updateassociationstatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/updateassociationstatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/updateassociationstatuscommandoutput.html)

</details>
<details>
<summary>
UpdateDocument
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/updatedocumentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/updatedocumentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/updatedocumentcommandoutput.html)

</details>
<details>
<summary>
UpdateDocumentDefaultVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/updatedocumentdefaultversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/updatedocumentdefaultversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/updatedocumentdefaultversioncommandoutput.html)

</details>
<details>
<summary>
UpdateDocumentMetadata
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/updatedocumentmetadatacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/updatedocumentmetadatacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/updatedocumentmetadatacommandoutput.html)

</details>
<details>
<summary>
UpdateMaintenanceWindow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/updatemaintenancewindowcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/updatemaintenancewindowcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/updatemaintenancewindowcommandoutput.html)

</details>
<details>
<summary>
UpdateMaintenanceWindowTarget
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/updatemaintenancewindowtargetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/updatemaintenancewindowtargetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/updatemaintenancewindowtargetcommandoutput.html)

</details>
<details>
<summary>
UpdateMaintenanceWindowTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/updatemaintenancewindowtaskcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/updatemaintenancewindowtaskcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/updatemaintenancewindowtaskcommandoutput.html)

</details>
<details>
<summary>
UpdateManagedInstanceRole
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/updatemanagedinstancerolecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/updatemanagedinstancerolecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/updatemanagedinstancerolecommandoutput.html)

</details>
<details>
<summary>
UpdateOpsItem
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/updateopsitemcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/updateopsitemcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/updateopsitemcommandoutput.html)

</details>
<details>
<summary>
UpdateOpsMetadata
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/updateopsmetadatacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/updateopsmetadatacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/updateopsmetadatacommandoutput.html)

</details>
<details>
<summary>
UpdatePatchBaseline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/updatepatchbaselinecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/updatepatchbaselinecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/updatepatchbaselinecommandoutput.html)

</details>
<details>
<summary>
UpdateResourceDataSync
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/updateresourcedatasynccommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/updateresourcedatasynccommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/updateresourcedatasynccommandoutput.html)

</details>
<details>
<summary>
UpdateServiceSetting
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/classes/updateservicesettingcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/updateservicesettingcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ssm/interfaces/updateservicesettingcommandoutput.html)

</details>
