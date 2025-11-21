<!-- generated file, do not edit directly -->

# @aws-sdk/client-redshift-serverless

## Description

AWS SDK for JavaScript RedshiftServerless Client for Node.js, Browser and React Native.

<p>This is an interface reference for Amazon Redshift Serverless. It contains documentation for one of the programming or command line interfaces you can use to manage Amazon Redshift Serverless. </p> <p>Amazon Redshift Serverless automatically provisions data warehouse capacity and intelligently scales the underlying resources based on workload demands. Amazon Redshift Serverless adjusts capacity in seconds to deliver consistently high performance and simplified operations for even the most demanding and volatile workloads. Amazon Redshift Serverless lets you focus on using your data to acquire new insights for your business and customers. </p> <p> To learn more about Amazon Redshift Serverless, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/serverless-whatis.html">What is Amazon Redshift Serverless?</a>.</p>

## Installing

To install this package, simply type add or install @aws-sdk/client-redshift-serverless
using your favorite package manager:

- `npm install @aws-sdk/client-redshift-serverless`
- `yarn add @aws-sdk/client-redshift-serverless`
- `pnpm add @aws-sdk/client-redshift-serverless`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `RedshiftServerlessClient` and
the commands you need, for example `ListTracksCommand`:

```js
// ES5 example
const { RedshiftServerlessClient, ListTracksCommand } = require("@aws-sdk/client-redshift-serverless");
```

```ts
// ES6+ example
import { RedshiftServerlessClient, ListTracksCommand } from "@aws-sdk/client-redshift-serverless";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new RedshiftServerlessClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListTracksCommand(params);
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
import * as AWS from "@aws-sdk/client-redshift-serverless";
const client = new AWS.RedshiftServerless({ region: "REGION" });

// async/await.
try {
  const data = await client.listTracks(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listTracks(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listTracks(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-redshift-serverless` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
ConvertRecoveryPointToSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/ConvertRecoveryPointToSnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/ConvertRecoveryPointToSnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/ConvertRecoveryPointToSnapshotCommandOutput/)

</details>
<details>
<summary>
CreateCustomDomainAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/CreateCustomDomainAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/CreateCustomDomainAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/CreateCustomDomainAssociationCommandOutput/)

</details>
<details>
<summary>
CreateEndpointAccess
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/CreateEndpointAccessCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/CreateEndpointAccessCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/CreateEndpointAccessCommandOutput/)

</details>
<details>
<summary>
CreateNamespace
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/CreateNamespaceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/CreateNamespaceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/CreateNamespaceCommandOutput/)

</details>
<details>
<summary>
CreateReservation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/CreateReservationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/CreateReservationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/CreateReservationCommandOutput/)

</details>
<details>
<summary>
CreateScheduledAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/CreateScheduledActionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/CreateScheduledActionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/CreateScheduledActionCommandOutput/)

</details>
<details>
<summary>
CreateSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/CreateSnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/CreateSnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/CreateSnapshotCommandOutput/)

</details>
<details>
<summary>
CreateSnapshotCopyConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/CreateSnapshotCopyConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/CreateSnapshotCopyConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/CreateSnapshotCopyConfigurationCommandOutput/)

</details>
<details>
<summary>
CreateUsageLimit
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/CreateUsageLimitCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/CreateUsageLimitCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/CreateUsageLimitCommandOutput/)

</details>
<details>
<summary>
CreateWorkgroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/CreateWorkgroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/CreateWorkgroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/CreateWorkgroupCommandOutput/)

</details>
<details>
<summary>
DeleteCustomDomainAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/DeleteCustomDomainAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/DeleteCustomDomainAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/DeleteCustomDomainAssociationCommandOutput/)

</details>
<details>
<summary>
DeleteEndpointAccess
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/DeleteEndpointAccessCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/DeleteEndpointAccessCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/DeleteEndpointAccessCommandOutput/)

</details>
<details>
<summary>
DeleteNamespace
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/DeleteNamespaceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/DeleteNamespaceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/DeleteNamespaceCommandOutput/)

</details>
<details>
<summary>
DeleteResourcePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/DeleteResourcePolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/DeleteResourcePolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/DeleteResourcePolicyCommandOutput/)

</details>
<details>
<summary>
DeleteScheduledAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/DeleteScheduledActionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/DeleteScheduledActionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/DeleteScheduledActionCommandOutput/)

</details>
<details>
<summary>
DeleteSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/DeleteSnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/DeleteSnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/DeleteSnapshotCommandOutput/)

</details>
<details>
<summary>
DeleteSnapshotCopyConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/DeleteSnapshotCopyConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/DeleteSnapshotCopyConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/DeleteSnapshotCopyConfigurationCommandOutput/)

</details>
<details>
<summary>
DeleteUsageLimit
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/DeleteUsageLimitCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/DeleteUsageLimitCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/DeleteUsageLimitCommandOutput/)

</details>
<details>
<summary>
DeleteWorkgroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/DeleteWorkgroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/DeleteWorkgroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/DeleteWorkgroupCommandOutput/)

</details>
<details>
<summary>
GetCredentials
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/GetCredentialsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/GetCredentialsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/GetCredentialsCommandOutput/)

</details>
<details>
<summary>
GetCustomDomainAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/GetCustomDomainAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/GetCustomDomainAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/GetCustomDomainAssociationCommandOutput/)

</details>
<details>
<summary>
GetEndpointAccess
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/GetEndpointAccessCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/GetEndpointAccessCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/GetEndpointAccessCommandOutput/)

</details>
<details>
<summary>
GetNamespace
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/GetNamespaceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/GetNamespaceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/GetNamespaceCommandOutput/)

</details>
<details>
<summary>
GetRecoveryPoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/GetRecoveryPointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/GetRecoveryPointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/GetRecoveryPointCommandOutput/)

</details>
<details>
<summary>
GetReservation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/GetReservationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/GetReservationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/GetReservationCommandOutput/)

</details>
<details>
<summary>
GetReservationOffering
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/GetReservationOfferingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/GetReservationOfferingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/GetReservationOfferingCommandOutput/)

</details>
<details>
<summary>
GetResourcePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/GetResourcePolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/GetResourcePolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/GetResourcePolicyCommandOutput/)

</details>
<details>
<summary>
GetScheduledAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/GetScheduledActionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/GetScheduledActionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/GetScheduledActionCommandOutput/)

</details>
<details>
<summary>
GetSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/GetSnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/GetSnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/GetSnapshotCommandOutput/)

</details>
<details>
<summary>
GetTableRestoreStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/GetTableRestoreStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/GetTableRestoreStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/GetTableRestoreStatusCommandOutput/)

</details>
<details>
<summary>
GetTrack
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/GetTrackCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/GetTrackCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/GetTrackCommandOutput/)

</details>
<details>
<summary>
GetUsageLimit
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/GetUsageLimitCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/GetUsageLimitCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/GetUsageLimitCommandOutput/)

</details>
<details>
<summary>
GetWorkgroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/GetWorkgroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/GetWorkgroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/GetWorkgroupCommandOutput/)

</details>
<details>
<summary>
ListCustomDomainAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/ListCustomDomainAssociationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/ListCustomDomainAssociationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/ListCustomDomainAssociationsCommandOutput/)

</details>
<details>
<summary>
ListEndpointAccess
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/ListEndpointAccessCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/ListEndpointAccessCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/ListEndpointAccessCommandOutput/)

</details>
<details>
<summary>
ListManagedWorkgroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/ListManagedWorkgroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/ListManagedWorkgroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/ListManagedWorkgroupsCommandOutput/)

</details>
<details>
<summary>
ListNamespaces
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/ListNamespacesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/ListNamespacesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/ListNamespacesCommandOutput/)

</details>
<details>
<summary>
ListRecoveryPoints
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/ListRecoveryPointsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/ListRecoveryPointsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/ListRecoveryPointsCommandOutput/)

</details>
<details>
<summary>
ListReservationOfferings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/ListReservationOfferingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/ListReservationOfferingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/ListReservationOfferingsCommandOutput/)

</details>
<details>
<summary>
ListReservations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/ListReservationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/ListReservationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/ListReservationsCommandOutput/)

</details>
<details>
<summary>
ListScheduledActions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/ListScheduledActionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/ListScheduledActionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/ListScheduledActionsCommandOutput/)

</details>
<details>
<summary>
ListSnapshotCopyConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/ListSnapshotCopyConfigurationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/ListSnapshotCopyConfigurationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/ListSnapshotCopyConfigurationsCommandOutput/)

</details>
<details>
<summary>
ListSnapshots
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/ListSnapshotsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/ListSnapshotsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/ListSnapshotsCommandOutput/)

</details>
<details>
<summary>
ListTableRestoreStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/ListTableRestoreStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/ListTableRestoreStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/ListTableRestoreStatusCommandOutput/)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/ListTagsForResourceCommandOutput/)

</details>
<details>
<summary>
ListTracks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/ListTracksCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/ListTracksCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/ListTracksCommandOutput/)

</details>
<details>
<summary>
ListUsageLimits
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/ListUsageLimitsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/ListUsageLimitsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/ListUsageLimitsCommandOutput/)

</details>
<details>
<summary>
ListWorkgroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/ListWorkgroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/ListWorkgroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/ListWorkgroupsCommandOutput/)

</details>
<details>
<summary>
PutResourcePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/PutResourcePolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/PutResourcePolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/PutResourcePolicyCommandOutput/)

</details>
<details>
<summary>
RestoreFromRecoveryPoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/RestoreFromRecoveryPointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/RestoreFromRecoveryPointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/RestoreFromRecoveryPointCommandOutput/)

</details>
<details>
<summary>
RestoreFromSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/RestoreFromSnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/RestoreFromSnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/RestoreFromSnapshotCommandOutput/)

</details>
<details>
<summary>
RestoreTableFromRecoveryPoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/RestoreTableFromRecoveryPointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/RestoreTableFromRecoveryPointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/RestoreTableFromRecoveryPointCommandOutput/)

</details>
<details>
<summary>
RestoreTableFromSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/RestoreTableFromSnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/RestoreTableFromSnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/RestoreTableFromSnapshotCommandOutput/)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/TagResourceCommandOutput/)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/UntagResourceCommandOutput/)

</details>
<details>
<summary>
UpdateCustomDomainAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/UpdateCustomDomainAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/UpdateCustomDomainAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/UpdateCustomDomainAssociationCommandOutput/)

</details>
<details>
<summary>
UpdateEndpointAccess
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/UpdateEndpointAccessCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/UpdateEndpointAccessCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/UpdateEndpointAccessCommandOutput/)

</details>
<details>
<summary>
UpdateLakehouseConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/UpdateLakehouseConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/UpdateLakehouseConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/UpdateLakehouseConfigurationCommandOutput/)

</details>
<details>
<summary>
UpdateNamespace
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/UpdateNamespaceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/UpdateNamespaceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/UpdateNamespaceCommandOutput/)

</details>
<details>
<summary>
UpdateScheduledAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/UpdateScheduledActionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/UpdateScheduledActionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/UpdateScheduledActionCommandOutput/)

</details>
<details>
<summary>
UpdateSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/UpdateSnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/UpdateSnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/UpdateSnapshotCommandOutput/)

</details>
<details>
<summary>
UpdateSnapshotCopyConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/UpdateSnapshotCopyConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/UpdateSnapshotCopyConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/UpdateSnapshotCopyConfigurationCommandOutput/)

</details>
<details>
<summary>
UpdateUsageLimit
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/UpdateUsageLimitCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/UpdateUsageLimitCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/UpdateUsageLimitCommandOutput/)

</details>
<details>
<summary>
UpdateWorkgroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift-serverless/command/UpdateWorkgroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/UpdateWorkgroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift-serverless/Interface/UpdateWorkgroupCommandOutput/)

</details>
