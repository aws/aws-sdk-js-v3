<!-- generated file, do not edit directly -->

# @aws-sdk/client-controltower

## Description

AWS SDK for JavaScript ControlTower Client for Node.js, Browser and React Native.

<p>Amazon Web Services Control Tower offers application programming interface (API)
operations that support programmatic interaction with these types of resources:</p>
<ul>
<li>
<p>
<a href="https://docs.aws.amazon.com/controltower/latest/userguide/controls.html">
<i>Controls</i>
</a>
</p>
<ul>
<li>
<p>
<a href="https://docs.aws.amazon.com/controltower/latest/APIReference/API_DisableControl.html">DisableControl</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/controltower/latest/APIReference/API_EnableControl.html">EnableControl</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/controltower/latest/APIReference/API_GetEnabledControl.html">GetEnabledControl</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/controltower/latest/APIReference/API_ListControlOperations.html">ListControlOperations</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/controltower/latest/APIReference/API_ListEnabledControls.html">ListEnabledControls</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/controltower/latest/APIReference/API_UpdateEnabledControl.html">UpdateEnabledControl</a>
</p>
</li>
</ul>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/controltower/latest/userguide/lz-api-launch.html">
<i>Landing
zones</i>
</a>
</p>
<ul>
<li>
<p>
<a href="https://docs.aws.amazon.com/controltower/latest/APIReference/API_CreateLandingZone.html">CreateLandingZone</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/controltower/latest/APIReference/API_DeleteLandingZone.html">DeleteLandingZone</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/controltower/latest/APIReference/API_GetLandingZone.html">GetLandingZone</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/controltower/latest/APIReference/API_GetLandingZoneOperation.html">GetLandingZoneOperation</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/controltower/latest/APIReference/API_ListLandingZones.html">ListLandingZones</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/controltower/latest/APIReference/API_ListLandingZoneOperations.html">ListLandingZoneOperations</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/controltower/latest/APIReference/API_ResetLandingZone.html">ResetLandingZone</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/controltower/latest/APIReference/API_UpdateLandingZone.html">UpdateLandingZone</a>
</p>
</li>
</ul>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/controltower/latest/userguide/types-of-baselines.html">
<i>Baselines</i>
</a>
</p>
<ul>
<li>
<p>
<a href="https://docs.aws.amazon.com/controltower/latest/APIReference/API_DisableBaseline.html">DisableBaseline</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/controltower/latest/APIReference/API_EnableBaseline.html">EnableBaseline</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/controltower/latest/APIReference/API_GetBaseline.html">GetBaseline</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/controltower/latest/APIReference/API_GetBaselineOperation.html">GetBaselineOperation</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/controltower/latest/APIReference/API_GetEnabledBaseline.html">GetEnabledBaseline</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/controltower/latest/APIReference/API_ListBaselines.html">ListBaselines</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/controltower/latest/APIReference/API_ListEnabledBaselines.html">ListEnabledBaselines</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/controltower/latest/APIReference/API_ResetEnabledBaseline.html">ResetEnabledBaseline</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/controltower/latest/APIReference/API_UpdateEnabledBaseline.html">UpdateEnabledBaseline</a>
</p>
</li>
</ul>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/controltower/latest/controlreference/tagging.html">
<i>Tagging</i>
</a>
</p>
<ul>
<li>
<p>
<a href="https://docs.aws.amazon.com/controltower/latest/APIReference/API_ListTagsForResource.html">ListTagsForResource</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/controltower/latest/APIReference/API_TagResource.html">TagResource</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/controltower/latest/APIReference/API_UntagResource.html">UntagResource</a>
</p>
</li>
</ul>
</li>
</ul>
<p>For more information about these types of resources, see the <a href="https://docs.aws.amazon.com/controltower/latest/userguide/what-is-control-tower.html">
<i>Amazon Web Services Control Tower User Guide</i>
</a>.</p>
<p>
<b>About control APIs</b>
</p>
<p>These interfaces allow you to apply the Amazon Web Services library of pre-defined
<i>controls</i> to your organizational units, programmatically. In Amazon Web Services Control Tower, the terms "control" and "guardrail" are synonyms.</p>
<p>To call these APIs, you'll need to know:</p>
<ul>
<li>
<p>the <code>controlIdentifier</code> for the control--or guardrail--you are
targeting.</p>
</li>
<li>
<p>the ARN associated with the target organizational unit (OU), which we call the
<code>targetIdentifier</code>.</p>
</li>
<li>
<p>the ARN associated with a resource that you wish to tag or untag.</p>
</li>
</ul>
<p>
<b>To get the <code>controlIdentifier</code> for your Amazon Web Services Control Tower control:</b>
</p>
<p>The <code>controlIdentifier</code> is an ARN that is specified for each control. You can
view the <code>controlIdentifier</code> in the console on the <b>Control
details</b> page, as well as in the documentation.</p>
<p>
<b>About identifiers for Amazon Web Services Control Tower</b>
</p>
<p>The Amazon Web Services Control Tower <code>controlIdentifier</code> is unique in each Amazon Web Services Region for each
control. You can find the <code>controlIdentifier</code> for each Region and control in the
<a href="https://docs.aws.amazon.com/controltower/latest/controlreference/control-metadata-tables.html">Tables of control metadata</a> or the <a href="https://docs.aws.amazon.com/controltower/latest/controlreference/control-region-tables.html">Control
availability by Region tables</a> in the <i>Amazon Web Services Control Tower
Controls Reference Guide</i>.</p>
<p>A quick-reference list of control identifers for the Amazon Web Services Control Tower
legacy <i>Strongly recommended</i> and <i>Elective</i> controls
is given in <a href="https://docs.aws.amazon.com/controltower/latest/controlreference/control-identifiers.html.html">Resource
identifiers for APIs and controls</a> in the <a href="https://docs.aws.amazon.com/controltower/latest/controlreference/control-identifiers.html">
<i>Amazon Web Services Control Tower Controls Reference Guide</i>
</a>. Remember
that <i>Mandatory</i> controls cannot be added or removed.</p>
<note>
<p>
<b>Some controls have two identifiers</b>
</p>
<ul>
<li>
<p>
<b>ARN format for Amazon Web Services Control
Tower:</b>
<code>arn:aws:controltower:{REGION}::control/{CONTROL_TOWER_OPAQUE_ID}</code>
</p>
<p>
<b>Example:</b>
</p>
<p>
<code>arn:aws:controltower:us-west-2::control/AWS-GR_AUTOSCALING_LAUNCH_CONFIG_PUBLIC_IP_DISABLED</code>
</p>
</li>
<li>
<p>
<b>ARN format for Amazon Web Services Control
Catalog:</b>
<code>arn:{PARTITION}:controlcatalog:::control/{CONTROL_CATALOG_OPAQUE_ID}</code>
</p>
</li>
</ul>
<p>You can find the <code>{CONTROL_CATALOG_OPAQUE_ID}</code> in the <a href="https://docs.aws.amazon.com/controltower/latest/controlreference/all-global-identifiers.html">
<i>Amazon Web Services Control Tower Controls Reference
Guide</i>
</a>, or in the Amazon Web Services Control Tower console, on the
<b>Control details</b> page.</p>
<p>The Amazon Web Services Control Tower APIs for enabled controls, such as
<code>GetEnabledControl</code> and <code>ListEnabledControls</code> always return an
ARN of the same type given when the control was enabled.</p>
</note>
<p>
<b>To get the <code>targetIdentifier</code>:</b>
</p>
<p>The <code>targetIdentifier</code> is the ARN for an OU.</p>
<p>In the Amazon Web Services Organizations console, you can find the ARN for the OU on the
<b>Organizational unit details</b> page associated with that
OU.</p>
<note>
<p>
<b>OU ARN format:</b>
</p>
<p>
<code>arn:${Partition}:organizations::${MasterAccountId}:ou/o-${OrganizationId}/ou-${OrganizationalUnitId}</code>
</p>
</note>
<p>
<b> About landing zone APIs</b>
</p>
<p>You can configure and launch an Amazon Web Services Control Tower landing zone with APIs.
For an introduction and steps, see <a href="https://docs.aws.amazon.com/controltower/latest/userguide/getting-started-apis.html">Getting started with
Amazon Web Services Control Tower using APIs</a>.</p>
<p>For an overview of landing zone API operations, see <a href="https://docs.aws.amazon.com/controltower/latest/userguide/2023-all.html#landing-zone-apis">
Amazon Web Services Control Tower supports landing zone APIs</a>. The individual API
operations for landing zones are detailed in this document, the <a href="https://docs.aws.amazon.com/controltower/latest/APIReference/API_Operations.html">API reference
manual</a>, in the "Actions" section.</p>
<p>
<b>About baseline APIs</b>
</p>
<p>You can apply the <code>AWSControlTowerBaseline</code> baseline to an organizational
unit (OU) as a way to register the OU with Amazon Web Services Control Tower,
programmatically. For a general overview of this capability, see <a href="https://docs.aws.amazon.com/controltower/latest/userguide/2024-all.html#baseline-apis">Amazon Web Services Control Tower supports APIs for OU registration and configuration
with baselines</a>.</p>
<p>You can call the baseline API operations to view the baselines that Amazon Web Services
Control Tower enables for your landing zone, on your behalf, when setting up the landing
zone. These baselines are read-only baselines.</p>
<p>The individual API operations for baselines are detailed in this document, the <a href="https://docs.aws.amazon.com/controltower/latest/APIReference/API_Operations.html">API
reference manual</a>, in the "Actions" section. For usage examples, see <a href="https://docs.aws.amazon.com/controltower/latest/userguide/baseline-api-examples.html">Baseline API input and output examples with CLI</a>.</p>
<p>
<b> About Amazon Web Services Control Catalog identifiers</b>
</p>
<ul>
<li>
<p>The <code>EnableControl</code> and <code>DisableControl</code> API operations can
be called by specifying either the Amazon Web Services Control Tower identifer or the
Amazon Web Services Control Catalog identifier. The API response returns the same
type of identifier that you specified when calling the API.</p>
</li>
<li>
<p>If you use an Amazon Web Services Control Tower identifier to call the
<code>EnableControl</code> API, and then call <code>EnableControl</code> again
with an Amazon Web Services Control Catalog identifier, Amazon Web Services Control
Tower returns an error message stating that the control is already enabled. Similar
behavior applies to the <code>DisableControl</code> API operation. </p>
</li>
<li>
<p>Mandatory controls and the landing-zone-level Region deny control have Amazon Web Services Control Tower identifiers only.</p>
</li>
</ul>
<p class="title">
<b>Details and examples</b>
</p>
<ul>
<li>
<p>
<a href="https://docs.aws.amazon.com/controltower/latest/controlreference/control-api-examples-short.html">Control API input and output examples with CLI</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/controltower/latest/userguide/baseline-api-examples.html">Baseline API input
and output examples with CLI</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/controltower/latest/controlreference/enable-controls.html">Enable controls
with CloudFormation</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/controltower/latest/userguide/lz-apis-cfn-setup.html">Launch a landing zone
with CloudFormation</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/controltower/latest/controlreference/control-metadata-tables.html">Control
metadata tables (large page)</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/controltower/latest/controlreference/control-region-tables.html">Control
availability by Region tables (large page)</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/controltower/latest/controlreference/control-identifiers.html">List of
identifiers for legacy controls</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/controltower/latest/controlreference/controls.html">Controls reference
guide</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/controltower/latest/controlreference/controls-reference.html">Controls
library groupings</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/controltower/latest/userguide/creating-resources-with-cloudformation.html">Creating Amazon Web Services Control Tower resources with Amazon Web Services
CloudFormation</a>
</p>
</li>
</ul>
<p>To view the open source resource repository on GitHub, see <a href="https://github.com/aws-cloudformation/aws-cloudformation-resource-providers-controltower">aws-cloudformation/aws-cloudformation-resource-providers-controltower</a>
</p>
<p>
<b>Recording API Requests</b>
</p>
<p>Amazon Web Services Control Tower supports Amazon Web Services CloudTrail, a service that
records Amazon Web Services API calls for your Amazon Web Services account and delivers log
files to an Amazon S3 bucket. By using information collected by CloudTrail, you can
determine which requests the Amazon Web Services Control Tower service received, who made
the request and when, and so on. For more about Amazon Web Services Control Tower and its
support for CloudTrail, see <a href="https://docs.aws.amazon.com/controltower/latest/userguide/logging-using-cloudtrail.html">Logging Amazon Web Services Control Tower Actions with Amazon Web Services CloudTrail</a> in the
Amazon Web Services Control Tower User Guide. To learn more about CloudTrail, including
how to turn it on and find your log files, see the Amazon Web Services CloudTrail User
Guide.</p>

## Installing

To install this package, simply type add or install @aws-sdk/client-controltower
using your favorite package manager:

- `npm install @aws-sdk/client-controltower`
- `yarn add @aws-sdk/client-controltower`
- `pnpm add @aws-sdk/client-controltower`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `ControlTowerClient` and
the commands you need, for example `ListBaselinesCommand`:

```js
// ES5 example
const { ControlTowerClient, ListBaselinesCommand } = require("@aws-sdk/client-controltower");
```

```ts
// ES6+ example
import { ControlTowerClient, ListBaselinesCommand } from "@aws-sdk/client-controltower";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new ControlTowerClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListBaselinesCommand(params);
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
import * as AWS from "@aws-sdk/client-controltower";
const client = new AWS.ControlTower({ region: "REGION" });

// async/await.
try {
  const data = await client.listBaselines(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listBaselines(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listBaselines(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-controltower` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CreateLandingZone
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/controltower/command/CreateLandingZoneCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controltower/Interface/CreateLandingZoneCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controltower/Interface/CreateLandingZoneCommandOutput/)

</details>
<details>
<summary>
DeleteLandingZone
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/controltower/command/DeleteLandingZoneCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controltower/Interface/DeleteLandingZoneCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controltower/Interface/DeleteLandingZoneCommandOutput/)

</details>
<details>
<summary>
DisableBaseline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/controltower/command/DisableBaselineCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controltower/Interface/DisableBaselineCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controltower/Interface/DisableBaselineCommandOutput/)

</details>
<details>
<summary>
DisableControl
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/controltower/command/DisableControlCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controltower/Interface/DisableControlCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controltower/Interface/DisableControlCommandOutput/)

</details>
<details>
<summary>
EnableBaseline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/controltower/command/EnableBaselineCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controltower/Interface/EnableBaselineCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controltower/Interface/EnableBaselineCommandOutput/)

</details>
<details>
<summary>
EnableControl
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/controltower/command/EnableControlCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controltower/Interface/EnableControlCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controltower/Interface/EnableControlCommandOutput/)

</details>
<details>
<summary>
GetBaseline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/controltower/command/GetBaselineCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controltower/Interface/GetBaselineCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controltower/Interface/GetBaselineCommandOutput/)

</details>
<details>
<summary>
GetBaselineOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/controltower/command/GetBaselineOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controltower/Interface/GetBaselineOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controltower/Interface/GetBaselineOperationCommandOutput/)

</details>
<details>
<summary>
GetControlOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/controltower/command/GetControlOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controltower/Interface/GetControlOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controltower/Interface/GetControlOperationCommandOutput/)

</details>
<details>
<summary>
GetEnabledBaseline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/controltower/command/GetEnabledBaselineCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controltower/Interface/GetEnabledBaselineCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controltower/Interface/GetEnabledBaselineCommandOutput/)

</details>
<details>
<summary>
GetEnabledControl
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/controltower/command/GetEnabledControlCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controltower/Interface/GetEnabledControlCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controltower/Interface/GetEnabledControlCommandOutput/)

</details>
<details>
<summary>
GetLandingZone
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/controltower/command/GetLandingZoneCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controltower/Interface/GetLandingZoneCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controltower/Interface/GetLandingZoneCommandOutput/)

</details>
<details>
<summary>
GetLandingZoneOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/controltower/command/GetLandingZoneOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controltower/Interface/GetLandingZoneOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controltower/Interface/GetLandingZoneOperationCommandOutput/)

</details>
<details>
<summary>
ListBaselines
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/controltower/command/ListBaselinesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controltower/Interface/ListBaselinesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controltower/Interface/ListBaselinesCommandOutput/)

</details>
<details>
<summary>
ListControlOperations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/controltower/command/ListControlOperationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controltower/Interface/ListControlOperationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controltower/Interface/ListControlOperationsCommandOutput/)

</details>
<details>
<summary>
ListEnabledBaselines
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/controltower/command/ListEnabledBaselinesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controltower/Interface/ListEnabledBaselinesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controltower/Interface/ListEnabledBaselinesCommandOutput/)

</details>
<details>
<summary>
ListEnabledControls
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/controltower/command/ListEnabledControlsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controltower/Interface/ListEnabledControlsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controltower/Interface/ListEnabledControlsCommandOutput/)

</details>
<details>
<summary>
ListLandingZoneOperations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/controltower/command/ListLandingZoneOperationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controltower/Interface/ListLandingZoneOperationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controltower/Interface/ListLandingZoneOperationsCommandOutput/)

</details>
<details>
<summary>
ListLandingZones
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/controltower/command/ListLandingZonesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controltower/Interface/ListLandingZonesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controltower/Interface/ListLandingZonesCommandOutput/)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/controltower/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controltower/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controltower/Interface/ListTagsForResourceCommandOutput/)

</details>
<details>
<summary>
ResetEnabledBaseline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/controltower/command/ResetEnabledBaselineCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controltower/Interface/ResetEnabledBaselineCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controltower/Interface/ResetEnabledBaselineCommandOutput/)

</details>
<details>
<summary>
ResetLandingZone
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/controltower/command/ResetLandingZoneCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controltower/Interface/ResetLandingZoneCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controltower/Interface/ResetLandingZoneCommandOutput/)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/controltower/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controltower/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controltower/Interface/TagResourceCommandOutput/)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/controltower/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controltower/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controltower/Interface/UntagResourceCommandOutput/)

</details>
<details>
<summary>
UpdateEnabledBaseline
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/controltower/command/UpdateEnabledBaselineCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controltower/Interface/UpdateEnabledBaselineCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controltower/Interface/UpdateEnabledBaselineCommandOutput/)

</details>
<details>
<summary>
UpdateEnabledControl
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/controltower/command/UpdateEnabledControlCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controltower/Interface/UpdateEnabledControlCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controltower/Interface/UpdateEnabledControlCommandOutput/)

</details>
<details>
<summary>
UpdateLandingZone
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/controltower/command/UpdateLandingZoneCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controltower/Interface/UpdateLandingZoneCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-controltower/Interface/UpdateLandingZoneCommandOutput/)

</details>
