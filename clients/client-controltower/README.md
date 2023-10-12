<!-- generated file, do not edit directly -->

# @aws-sdk/client-controltower

## Description

AWS SDK for JavaScript ControlTower Client for Node.js, Browser and React Native.

<p>These interfaces allow you to apply the AWS library of pre-defined
<i>controls</i> to your organizational units, programmatically. In AWS Control Tower, the terms "control" and "guardrail" are synonyms.   .</p>
<p>To call these APIs, you'll need to know:</p>
<ul>
<li>
<p>the <code>controlIdentifier</code> for the control--or guardrail--you are targeting.</p>
</li>
<li>
<p>the ARN associated with the target organizational unit (OU), which we call the <code>targetIdentifier</code>.</p>
</li>
</ul>
<p>
<b>To get the <code>controlIdentifier</code> for your AWS Control Tower
control:</b>
</p>
<p>The <code>controlIdentifier</code> is an ARN that is specified for each
control. You can view the <code>controlIdentifier</code> in the console on the <b>Control details</b> page, as well as in the documentation.</p>
<p>The <code>controlIdentifier</code> is unique in each AWS Region for each control. You can
find the <code>controlIdentifier</code> for each Region and control in the <a href="https://docs.aws.amazon.com/controltower/latest/userguide/control-metadata-tables.html">Tables of control metadata</a> in the <i>AWS Control Tower User Guide.</i>
</p>
<p>A quick-reference list of control identifers for the AWS Control Tower legacy <i>Strongly recommended</i> and
<i>Elective</i> controls is given in <a href="https://docs.aws.amazon.com/controltower/latest/userguide/control-identifiers.html.html">Resource identifiers for
APIs and guardrails</a> in the <a href="https://docs.aws.amazon.com/controltower/latest/userguide/control-identifiers.html">Controls reference guide section</a>
of the <i>AWS Control Tower User Guide</i>. Remember that <i>Mandatory</i> controls
cannot be added or removed.</p>
<note>
<p>
<b>ARN format:</b>
<code>arn:aws:controltower:{REGION}::control/{CONTROL_NAME}</code>
</p>
<p>
<b>Example:</b>
</p>
<p>
<code>arn:aws:controltower:us-west-2::control/AWS-GR_AUTOSCALING_LAUNCH_CONFIG_PUBLIC_IP_DISABLED</code>
</p>
</note>
<p>
<b>To get the <code>targetIdentifier</code>:</b>
</p>
<p>The <code>targetIdentifier</code> is the ARN for an OU.</p>
<p>In the AWS Organizations console, you can find the ARN for the OU on the <b>Organizational unit details</b> page associated with that OU.</p>
<note>
<p>
<b>OU ARN format:</b>
</p>
<p>
<code>arn:${Partition}:organizations::${MasterAccountId}:ou/o-${OrganizationId}/ou-${OrganizationalUnitId}</code>
</p>
</note>
<p class="title">
<b>Details and examples</b>
</p>
<ul>
<li>
<p>
<a href="https://docs.aws.amazon.com/controltower/latest/userguide/control-api-examples-short.html">Control API input and output examples with CLI</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/controltower/latest/userguide/enable-controls.html">Enable controls with CloudFormation</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/controltower/latest/userguide/control-metadata-tables.html">Control metadata tables</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/controltower/latest/userguide/control-identifiers.html">List of identifiers for legacy controls</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/controltower/latest/userguide/controls.html">Controls reference guide</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/controltower/latest/userguide/controls-reference.html">Controls library groupings</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/controltower/latest/userguide/creating-resources-with-cloudformation.html">Creating AWS Control Tower resources with AWS CloudFormation</a>
</p>
</li>
</ul>
<p>To view the open source resource repository on GitHub, see <a href="https://github.com/aws-cloudformation/aws-cloudformation-resource-providers-controltower">aws-cloudformation/aws-cloudformation-resource-providers-controltower</a>
</p>
<p>
<b>Recording API Requests</b>
</p>
<p>AWS Control Tower supports AWS CloudTrail, a service that records AWS API calls for your
AWS account and delivers log files to an Amazon S3 bucket. By using information collected by
CloudTrail, you can determine which requests the AWS Control Tower service received, who made
the request and when, and so on. For more about AWS Control Tower and its support for
CloudTrail, see <a href="https://docs.aws.amazon.com/controltower/latest/userguide/logging-using-cloudtrail.html">Logging AWS Control Tower
Actions with AWS CloudTrail</a> in the AWS Control Tower User Guide. To learn more about
CloudTrail, including how to turn it on and find your log files, see the AWS CloudTrail User
Guide.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-controltower
using your favorite package manager:

- `npm install @aws-sdk/client-controltower`
- `yarn add @aws-sdk/client-controltower`
- `pnpm add @aws-sdk/client-controltower`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `ControlTowerClient` and
the commands you need, for example `ListEnabledControlsCommand`:

```js
// ES5 example
const { ControlTowerClient, ListEnabledControlsCommand } = require("@aws-sdk/client-controltower");
```

```ts
// ES6+ example
import { ControlTowerClient, ListEnabledControlsCommand } from "@aws-sdk/client-controltower";
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
const command = new ListEnabledControlsCommand(params);
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
  const data = await client.listEnabledControls(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listEnabledControls(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listEnabledControls(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-controltower` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
DisableControl
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-controltower/classes/disablecontrolcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-controltower/interfaces/disablecontrolcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-controltower/interfaces/disablecontrolcommandoutput.html)

</details>
<details>
<summary>
EnableControl
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-controltower/classes/enablecontrolcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-controltower/interfaces/enablecontrolcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-controltower/interfaces/enablecontrolcommandoutput.html)

</details>
<details>
<summary>
GetControlOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-controltower/classes/getcontroloperationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-controltower/interfaces/getcontroloperationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-controltower/interfaces/getcontroloperationcommandoutput.html)

</details>
<details>
<summary>
GetEnabledControl
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-controltower/classes/getenabledcontrolcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-controltower/interfaces/getenabledcontrolcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-controltower/interfaces/getenabledcontrolcommandoutput.html)

</details>
<details>
<summary>
ListEnabledControls
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-controltower/classes/listenabledcontrolscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-controltower/interfaces/listenabledcontrolscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-controltower/interfaces/listenabledcontrolscommandoutput.html)

</details>
