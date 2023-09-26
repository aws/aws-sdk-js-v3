<!-- generated file, do not edit directly -->

# @aws-sdk/client-appflow

## Description

AWS SDK for JavaScript Appflow Client for Node.js, Browser and React Native.

<p>Welcome to the Amazon AppFlow API reference. This guide is for developers who need
detailed information about the Amazon AppFlow API operations, data types, and errors. </p>
<p>Amazon AppFlow is a fully managed integration service that enables you to securely
transfer data between software as a service (SaaS) applications like Salesforce, Marketo,
Slack, and ServiceNow, and Amazon Web Services like Amazon S3 and Amazon Redshift. </p>
<p>Use the following links to get started on the Amazon AppFlow API:</p>
<ul>
<li>
<p>
<a href="https://docs.aws.amazon.com/appflow/1.0/APIReference/API_Operations.html">Actions</a>: An alphabetical list of all Amazon AppFlow API operations.</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/appflow/1.0/APIReference/API_Types.html">Data
types</a>: An alphabetical list of all Amazon AppFlow data types.</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/appflow/1.0/APIReference/CommonParameters.html">Common parameters</a>: Parameters that all Query operations can use.</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/appflow/1.0/APIReference/CommonErrors.html">Common
errors</a>: Client and server errors that all operations can return.</p>
</li>
</ul>
<p>If you're new to Amazon AppFlow, we recommend that you review the <a href="https://docs.aws.amazon.com/appflow/latest/userguide/what-is-appflow.html">Amazon AppFlow
User Guide</a>.</p>
<p>Amazon AppFlow API users can use vendor-specific mechanisms for OAuth, and include
applicable OAuth attributes (such as <code>auth-code</code> and <code>redirecturi</code>) with
the connector-specific <code>ConnectorProfileProperties</code> when creating a new connector
profile using Amazon AppFlow API operations. For example, Salesforce users can refer to
the <a href="https://help.salesforce.com/articleView?id=remoteaccess_authenticate.htm">
<i>Authorize Apps with OAuth</i>
</a> documentation.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-appflow
using your favorite package manager:

- `npm install @aws-sdk/client-appflow`
- `yarn add @aws-sdk/client-appflow`
- `pnpm add @aws-sdk/client-appflow`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `AppflowClient` and
the commands you need, for example `ListFlowsCommand`:

```js
// ES5 example
const { AppflowClient, ListFlowsCommand } = require("@aws-sdk/client-appflow");
```

```ts
// ES6+ example
import { AppflowClient, ListFlowsCommand } from "@aws-sdk/client-appflow";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new AppflowClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListFlowsCommand(params);
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
import * as AWS from "@aws-sdk/client-appflow";
const client = new AWS.Appflow({ region: "REGION" });

// async/await.
try {
  const data = await client.listFlows(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listFlows(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listFlows(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-appflow` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CancelFlowExecutions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/classes/cancelflowexecutionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/interfaces/cancelflowexecutionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/interfaces/cancelflowexecutionscommandoutput.html)

</details>
<details>
<summary>
CreateConnectorProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/classes/createconnectorprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/interfaces/createconnectorprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/interfaces/createconnectorprofilecommandoutput.html)

</details>
<details>
<summary>
CreateFlow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/classes/createflowcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/interfaces/createflowcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/interfaces/createflowcommandoutput.html)

</details>
<details>
<summary>
DeleteConnectorProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/classes/deleteconnectorprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/interfaces/deleteconnectorprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/interfaces/deleteconnectorprofilecommandoutput.html)

</details>
<details>
<summary>
DeleteFlow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/classes/deleteflowcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/interfaces/deleteflowcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/interfaces/deleteflowcommandoutput.html)

</details>
<details>
<summary>
DescribeConnector
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/classes/describeconnectorcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/interfaces/describeconnectorcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/interfaces/describeconnectorcommandoutput.html)

</details>
<details>
<summary>
DescribeConnectorEntity
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/classes/describeconnectorentitycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/interfaces/describeconnectorentitycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/interfaces/describeconnectorentitycommandoutput.html)

</details>
<details>
<summary>
DescribeConnectorProfiles
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/classes/describeconnectorprofilescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/interfaces/describeconnectorprofilescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/interfaces/describeconnectorprofilescommandoutput.html)

</details>
<details>
<summary>
DescribeConnectors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/classes/describeconnectorscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/interfaces/describeconnectorscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/interfaces/describeconnectorscommandoutput.html)

</details>
<details>
<summary>
DescribeFlow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/classes/describeflowcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/interfaces/describeflowcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/interfaces/describeflowcommandoutput.html)

</details>
<details>
<summary>
DescribeFlowExecutionRecords
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/classes/describeflowexecutionrecordscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/interfaces/describeflowexecutionrecordscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/interfaces/describeflowexecutionrecordscommandoutput.html)

</details>
<details>
<summary>
ListConnectorEntities
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/classes/listconnectorentitiescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/interfaces/listconnectorentitiescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/interfaces/listconnectorentitiescommandoutput.html)

</details>
<details>
<summary>
ListConnectors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/classes/listconnectorscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/interfaces/listconnectorscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/interfaces/listconnectorscommandoutput.html)

</details>
<details>
<summary>
ListFlows
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/classes/listflowscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/interfaces/listflowscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/interfaces/listflowscommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
RegisterConnector
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/classes/registerconnectorcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/interfaces/registerconnectorcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/interfaces/registerconnectorcommandoutput.html)

</details>
<details>
<summary>
ResetConnectorMetadataCache
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/classes/resetconnectormetadatacachecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/interfaces/resetconnectormetadatacachecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/interfaces/resetconnectormetadatacachecommandoutput.html)

</details>
<details>
<summary>
StartFlow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/classes/startflowcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/interfaces/startflowcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/interfaces/startflowcommandoutput.html)

</details>
<details>
<summary>
StopFlow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/classes/stopflowcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/interfaces/stopflowcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/interfaces/stopflowcommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UnregisterConnector
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/classes/unregisterconnectorcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/interfaces/unregisterconnectorcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/interfaces/unregisterconnectorcommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateConnectorProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/classes/updateconnectorprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/interfaces/updateconnectorprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/interfaces/updateconnectorprofilecommandoutput.html)

</details>
<details>
<summary>
UpdateConnectorRegistration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/classes/updateconnectorregistrationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/interfaces/updateconnectorregistrationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/interfaces/updateconnectorregistrationcommandoutput.html)

</details>
<details>
<summary>
UpdateFlow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/classes/updateflowcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/interfaces/updateflowcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appflow/interfaces/updateflowcommandoutput.html)

</details>
