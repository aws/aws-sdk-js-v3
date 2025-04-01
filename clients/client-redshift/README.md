<!-- generated file, do not edit directly -->

# @aws-sdk/client-redshift

## Description

AWS SDK for JavaScript Redshift Client for Node.js, Browser and React Native.

<fullname>Amazon Redshift</fullname>

<p>
<b>Overview</b>
</p>
<p>This is an interface reference for Amazon Redshift. It contains documentation for one of
the programming or command line interfaces you can use to manage Amazon Redshift clusters.
Note that Amazon Redshift is asynchronous, which means that some interfaces may require
techniques, such as polling or asynchronous callback handlers, to determine when a
command has been applied. In this reference, the parameter descriptions indicate whether
a change is applied immediately, on the next instance reboot, or during the next
maintenance window. For a summary of the Amazon Redshift cluster management interfaces, go to
<a href="https://docs.aws.amazon.com/redshift/latest/mgmt/using-aws-sdk.html">Using the
Amazon Redshift Management Interfaces</a>.</p>
<p>Amazon Redshift manages all the work of setting up, operating, and scaling a data
warehouse: provisioning capacity, monitoring and backing up the cluster, and applying
patches and upgrades to the Amazon Redshift engine. You can focus on using your data to
acquire new insights for your business and customers.</p>
<p>If you are a first-time user of Amazon Redshift, we recommend that you begin by reading
the <a href="https://docs.aws.amazon.com/redshift/latest/gsg/getting-started.html">Amazon Redshift Getting Started Guide</a>.</p>
<p>If you are a database developer, the <a href="https://docs.aws.amazon.com/redshift/latest/dg/welcome.html">Amazon Redshift Database Developer Guide</a> explains how to design,
build, query, and maintain the databases that make up your data warehouse. </p>

## Installing

To install this package, simply type add or install @aws-sdk/client-redshift
using your favorite package manager:

- `npm install @aws-sdk/client-redshift`
- `yarn add @aws-sdk/client-redshift`
- `pnpm add @aws-sdk/client-redshift`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `RedshiftClient` and
the commands you need, for example `ListRecommendationsCommand`:

```js
// ES5 example
const { RedshiftClient, ListRecommendationsCommand } = require("@aws-sdk/client-redshift");
```

```ts
// ES6+ example
import { RedshiftClient, ListRecommendationsCommand } from "@aws-sdk/client-redshift";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new RedshiftClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListRecommendationsCommand(params);
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
import * as AWS from "@aws-sdk/client-redshift";
const client = new AWS.Redshift({ region: "REGION" });

// async/await.
try {
  const data = await client.listRecommendations(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listRecommendations(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listRecommendations(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-redshift` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AcceptReservedNodeExchange
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/AcceptReservedNodeExchangeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/AcceptReservedNodeExchangeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/AcceptReservedNodeExchangeCommandOutput/)

</details>
<details>
<summary>
AddPartner
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/AddPartnerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/AddPartnerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/AddPartnerCommandOutput/)

</details>
<details>
<summary>
AssociateDataShareConsumer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/AssociateDataShareConsumerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/AssociateDataShareConsumerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/AssociateDataShareConsumerCommandOutput/)

</details>
<details>
<summary>
AuthorizeClusterSecurityGroupIngress
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/AuthorizeClusterSecurityGroupIngressCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/AuthorizeClusterSecurityGroupIngressCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/AuthorizeClusterSecurityGroupIngressCommandOutput/)

</details>
<details>
<summary>
AuthorizeDataShare
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/AuthorizeDataShareCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/AuthorizeDataShareCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/AuthorizeDataShareCommandOutput/)

</details>
<details>
<summary>
AuthorizeEndpointAccess
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/AuthorizeEndpointAccessCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/AuthorizeEndpointAccessCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/AuthorizeEndpointAccessCommandOutput/)

</details>
<details>
<summary>
AuthorizeSnapshotAccess
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/AuthorizeSnapshotAccessCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/AuthorizeSnapshotAccessCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/AuthorizeSnapshotAccessCommandOutput/)

</details>
<details>
<summary>
BatchDeleteClusterSnapshots
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/BatchDeleteClusterSnapshotsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/BatchDeleteClusterSnapshotsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/BatchDeleteClusterSnapshotsCommandOutput/)

</details>
<details>
<summary>
BatchModifyClusterSnapshots
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/BatchModifyClusterSnapshotsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/BatchModifyClusterSnapshotsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/BatchModifyClusterSnapshotsCommandOutput/)

</details>
<details>
<summary>
CancelResize
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/CancelResizeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/CancelResizeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/CancelResizeCommandOutput/)

</details>
<details>
<summary>
CopyClusterSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/CopyClusterSnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/CopyClusterSnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/CopyClusterSnapshotCommandOutput/)

</details>
<details>
<summary>
CreateAuthenticationProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/CreateAuthenticationProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/CreateAuthenticationProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/CreateAuthenticationProfileCommandOutput/)

</details>
<details>
<summary>
CreateCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/CreateClusterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/CreateClusterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/CreateClusterCommandOutput/)

</details>
<details>
<summary>
CreateClusterParameterGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/CreateClusterParameterGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/CreateClusterParameterGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/CreateClusterParameterGroupCommandOutput/)

</details>
<details>
<summary>
CreateClusterSecurityGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/CreateClusterSecurityGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/CreateClusterSecurityGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/CreateClusterSecurityGroupCommandOutput/)

</details>
<details>
<summary>
CreateClusterSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/CreateClusterSnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/CreateClusterSnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/CreateClusterSnapshotCommandOutput/)

</details>
<details>
<summary>
CreateClusterSubnetGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/CreateClusterSubnetGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/CreateClusterSubnetGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/CreateClusterSubnetGroupCommandOutput/)

</details>
<details>
<summary>
CreateCustomDomainAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/CreateCustomDomainAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/CreateCustomDomainAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/CreateCustomDomainAssociationCommandOutput/)

</details>
<details>
<summary>
CreateEndpointAccess
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/CreateEndpointAccessCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/CreateEndpointAccessCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/CreateEndpointAccessCommandOutput/)

</details>
<details>
<summary>
CreateEventSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/CreateEventSubscriptionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/CreateEventSubscriptionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/CreateEventSubscriptionCommandOutput/)

</details>
<details>
<summary>
CreateHsmClientCertificate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/CreateHsmClientCertificateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/CreateHsmClientCertificateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/CreateHsmClientCertificateCommandOutput/)

</details>
<details>
<summary>
CreateHsmConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/CreateHsmConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/CreateHsmConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/CreateHsmConfigurationCommandOutput/)

</details>
<details>
<summary>
CreateIntegration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/CreateIntegrationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/CreateIntegrationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/CreateIntegrationCommandOutput/)

</details>
<details>
<summary>
CreateRedshiftIdcApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/CreateRedshiftIdcApplicationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/CreateRedshiftIdcApplicationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/CreateRedshiftIdcApplicationCommandOutput/)

</details>
<details>
<summary>
CreateScheduledAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/CreateScheduledActionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/CreateScheduledActionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/CreateScheduledActionCommandOutput/)

</details>
<details>
<summary>
CreateSnapshotCopyGrant
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/CreateSnapshotCopyGrantCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/CreateSnapshotCopyGrantCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/CreateSnapshotCopyGrantCommandOutput/)

</details>
<details>
<summary>
CreateSnapshotSchedule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/CreateSnapshotScheduleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/CreateSnapshotScheduleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/CreateSnapshotScheduleCommandOutput/)

</details>
<details>
<summary>
CreateTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/CreateTagsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/CreateTagsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/CreateTagsCommandOutput/)

</details>
<details>
<summary>
CreateUsageLimit
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/CreateUsageLimitCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/CreateUsageLimitCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/CreateUsageLimitCommandOutput/)

</details>
<details>
<summary>
DeauthorizeDataShare
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DeauthorizeDataShareCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DeauthorizeDataShareCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DeauthorizeDataShareCommandOutput/)

</details>
<details>
<summary>
DeleteAuthenticationProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DeleteAuthenticationProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DeleteAuthenticationProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DeleteAuthenticationProfileCommandOutput/)

</details>
<details>
<summary>
DeleteCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DeleteClusterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DeleteClusterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DeleteClusterCommandOutput/)

</details>
<details>
<summary>
DeleteClusterParameterGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DeleteClusterParameterGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DeleteClusterParameterGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DeleteClusterParameterGroupCommandOutput/)

</details>
<details>
<summary>
DeleteClusterSecurityGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DeleteClusterSecurityGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DeleteClusterSecurityGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DeleteClusterSecurityGroupCommandOutput/)

</details>
<details>
<summary>
DeleteClusterSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DeleteClusterSnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DeleteClusterSnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DeleteClusterSnapshotCommandOutput/)

</details>
<details>
<summary>
DeleteClusterSubnetGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DeleteClusterSubnetGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DeleteClusterSubnetGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DeleteClusterSubnetGroupCommandOutput/)

</details>
<details>
<summary>
DeleteCustomDomainAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DeleteCustomDomainAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DeleteCustomDomainAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DeleteCustomDomainAssociationCommandOutput/)

</details>
<details>
<summary>
DeleteEndpointAccess
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DeleteEndpointAccessCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DeleteEndpointAccessCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DeleteEndpointAccessCommandOutput/)

</details>
<details>
<summary>
DeleteEventSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DeleteEventSubscriptionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DeleteEventSubscriptionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DeleteEventSubscriptionCommandOutput/)

</details>
<details>
<summary>
DeleteHsmClientCertificate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DeleteHsmClientCertificateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DeleteHsmClientCertificateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DeleteHsmClientCertificateCommandOutput/)

</details>
<details>
<summary>
DeleteHsmConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DeleteHsmConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DeleteHsmConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DeleteHsmConfigurationCommandOutput/)

</details>
<details>
<summary>
DeleteIntegration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DeleteIntegrationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DeleteIntegrationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DeleteIntegrationCommandOutput/)

</details>
<details>
<summary>
DeletePartner
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DeletePartnerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DeletePartnerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DeletePartnerCommandOutput/)

</details>
<details>
<summary>
DeleteRedshiftIdcApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DeleteRedshiftIdcApplicationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DeleteRedshiftIdcApplicationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DeleteRedshiftIdcApplicationCommandOutput/)

</details>
<details>
<summary>
DeleteResourcePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DeleteResourcePolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DeleteResourcePolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DeleteResourcePolicyCommandOutput/)

</details>
<details>
<summary>
DeleteScheduledAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DeleteScheduledActionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DeleteScheduledActionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DeleteScheduledActionCommandOutput/)

</details>
<details>
<summary>
DeleteSnapshotCopyGrant
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DeleteSnapshotCopyGrantCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DeleteSnapshotCopyGrantCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DeleteSnapshotCopyGrantCommandOutput/)

</details>
<details>
<summary>
DeleteSnapshotSchedule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DeleteSnapshotScheduleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DeleteSnapshotScheduleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DeleteSnapshotScheduleCommandOutput/)

</details>
<details>
<summary>
DeleteTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DeleteTagsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DeleteTagsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DeleteTagsCommandOutput/)

</details>
<details>
<summary>
DeleteUsageLimit
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DeleteUsageLimitCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DeleteUsageLimitCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DeleteUsageLimitCommandOutput/)

</details>
<details>
<summary>
DeregisterNamespace
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DeregisterNamespaceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DeregisterNamespaceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DeregisterNamespaceCommandOutput/)

</details>
<details>
<summary>
DescribeAccountAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DescribeAccountAttributesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeAccountAttributesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeAccountAttributesCommandOutput/)

</details>
<details>
<summary>
DescribeAuthenticationProfiles
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DescribeAuthenticationProfilesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeAuthenticationProfilesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeAuthenticationProfilesCommandOutput/)

</details>
<details>
<summary>
DescribeClusterDbRevisions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DescribeClusterDbRevisionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeClusterDbRevisionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeClusterDbRevisionsCommandOutput/)

</details>
<details>
<summary>
DescribeClusterParameterGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DescribeClusterParameterGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeClusterParameterGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeClusterParameterGroupsCommandOutput/)

</details>
<details>
<summary>
DescribeClusterParameters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DescribeClusterParametersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeClusterParametersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeClusterParametersCommandOutput/)

</details>
<details>
<summary>
DescribeClusters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DescribeClustersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeClustersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeClustersCommandOutput/)

</details>
<details>
<summary>
DescribeClusterSecurityGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DescribeClusterSecurityGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeClusterSecurityGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeClusterSecurityGroupsCommandOutput/)

</details>
<details>
<summary>
DescribeClusterSnapshots
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DescribeClusterSnapshotsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeClusterSnapshotsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeClusterSnapshotsCommandOutput/)

</details>
<details>
<summary>
DescribeClusterSubnetGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DescribeClusterSubnetGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeClusterSubnetGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeClusterSubnetGroupsCommandOutput/)

</details>
<details>
<summary>
DescribeClusterTracks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DescribeClusterTracksCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeClusterTracksCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeClusterTracksCommandOutput/)

</details>
<details>
<summary>
DescribeClusterVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DescribeClusterVersionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeClusterVersionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeClusterVersionsCommandOutput/)

</details>
<details>
<summary>
DescribeCustomDomainAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DescribeCustomDomainAssociationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeCustomDomainAssociationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeCustomDomainAssociationsCommandOutput/)

</details>
<details>
<summary>
DescribeDataShares
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DescribeDataSharesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeDataSharesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeDataSharesCommandOutput/)

</details>
<details>
<summary>
DescribeDataSharesForConsumer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DescribeDataSharesForConsumerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeDataSharesForConsumerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeDataSharesForConsumerCommandOutput/)

</details>
<details>
<summary>
DescribeDataSharesForProducer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DescribeDataSharesForProducerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeDataSharesForProducerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeDataSharesForProducerCommandOutput/)

</details>
<details>
<summary>
DescribeDefaultClusterParameters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DescribeDefaultClusterParametersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeDefaultClusterParametersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeDefaultClusterParametersCommandOutput/)

</details>
<details>
<summary>
DescribeEndpointAccess
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DescribeEndpointAccessCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeEndpointAccessCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeEndpointAccessCommandOutput/)

</details>
<details>
<summary>
DescribeEndpointAuthorization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DescribeEndpointAuthorizationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeEndpointAuthorizationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeEndpointAuthorizationCommandOutput/)

</details>
<details>
<summary>
DescribeEventCategories
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DescribeEventCategoriesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeEventCategoriesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeEventCategoriesCommandOutput/)

</details>
<details>
<summary>
DescribeEvents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DescribeEventsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeEventsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeEventsCommandOutput/)

</details>
<details>
<summary>
DescribeEventSubscriptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DescribeEventSubscriptionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeEventSubscriptionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeEventSubscriptionsCommandOutput/)

</details>
<details>
<summary>
DescribeHsmClientCertificates
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DescribeHsmClientCertificatesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeHsmClientCertificatesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeHsmClientCertificatesCommandOutput/)

</details>
<details>
<summary>
DescribeHsmConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DescribeHsmConfigurationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeHsmConfigurationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeHsmConfigurationsCommandOutput/)

</details>
<details>
<summary>
DescribeInboundIntegrations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DescribeInboundIntegrationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeInboundIntegrationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeInboundIntegrationsCommandOutput/)

</details>
<details>
<summary>
DescribeIntegrations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DescribeIntegrationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeIntegrationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeIntegrationsCommandOutput/)

</details>
<details>
<summary>
DescribeLoggingStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DescribeLoggingStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeLoggingStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeLoggingStatusCommandOutput/)

</details>
<details>
<summary>
DescribeNodeConfigurationOptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DescribeNodeConfigurationOptionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeNodeConfigurationOptionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeNodeConfigurationOptionsCommandOutput/)

</details>
<details>
<summary>
DescribeOrderableClusterOptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DescribeOrderableClusterOptionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeOrderableClusterOptionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeOrderableClusterOptionsCommandOutput/)

</details>
<details>
<summary>
DescribePartners
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DescribePartnersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribePartnersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribePartnersCommandOutput/)

</details>
<details>
<summary>
DescribeRedshiftIdcApplications
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DescribeRedshiftIdcApplicationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeRedshiftIdcApplicationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeRedshiftIdcApplicationsCommandOutput/)

</details>
<details>
<summary>
DescribeReservedNodeExchangeStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DescribeReservedNodeExchangeStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeReservedNodeExchangeStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeReservedNodeExchangeStatusCommandOutput/)

</details>
<details>
<summary>
DescribeReservedNodeOfferings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DescribeReservedNodeOfferingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeReservedNodeOfferingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeReservedNodeOfferingsCommandOutput/)

</details>
<details>
<summary>
DescribeReservedNodes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DescribeReservedNodesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeReservedNodesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeReservedNodesCommandOutput/)

</details>
<details>
<summary>
DescribeResize
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DescribeResizeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeResizeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeResizeCommandOutput/)

</details>
<details>
<summary>
DescribeScheduledActions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DescribeScheduledActionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeScheduledActionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeScheduledActionsCommandOutput/)

</details>
<details>
<summary>
DescribeSnapshotCopyGrants
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DescribeSnapshotCopyGrantsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeSnapshotCopyGrantsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeSnapshotCopyGrantsCommandOutput/)

</details>
<details>
<summary>
DescribeSnapshotSchedules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DescribeSnapshotSchedulesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeSnapshotSchedulesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeSnapshotSchedulesCommandOutput/)

</details>
<details>
<summary>
DescribeStorage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DescribeStorageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeStorageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeStorageCommandOutput/)

</details>
<details>
<summary>
DescribeTableRestoreStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DescribeTableRestoreStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeTableRestoreStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeTableRestoreStatusCommandOutput/)

</details>
<details>
<summary>
DescribeTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DescribeTagsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeTagsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeTagsCommandOutput/)

</details>
<details>
<summary>
DescribeUsageLimits
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DescribeUsageLimitsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeUsageLimitsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DescribeUsageLimitsCommandOutput/)

</details>
<details>
<summary>
DisableLogging
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DisableLoggingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DisableLoggingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DisableLoggingCommandOutput/)

</details>
<details>
<summary>
DisableSnapshotCopy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DisableSnapshotCopyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DisableSnapshotCopyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DisableSnapshotCopyCommandOutput/)

</details>
<details>
<summary>
DisassociateDataShareConsumer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/DisassociateDataShareConsumerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DisassociateDataShareConsumerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/DisassociateDataShareConsumerCommandOutput/)

</details>
<details>
<summary>
EnableLogging
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/EnableLoggingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/EnableLoggingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/EnableLoggingCommandOutput/)

</details>
<details>
<summary>
EnableSnapshotCopy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/EnableSnapshotCopyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/EnableSnapshotCopyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/EnableSnapshotCopyCommandOutput/)

</details>
<details>
<summary>
FailoverPrimaryCompute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/FailoverPrimaryComputeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/FailoverPrimaryComputeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/FailoverPrimaryComputeCommandOutput/)

</details>
<details>
<summary>
GetClusterCredentials
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/GetClusterCredentialsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/GetClusterCredentialsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/GetClusterCredentialsCommandOutput/)

</details>
<details>
<summary>
GetClusterCredentialsWithIAM
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/GetClusterCredentialsWithIAMCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/GetClusterCredentialsWithIAMCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/GetClusterCredentialsWithIAMCommandOutput/)

</details>
<details>
<summary>
GetReservedNodeExchangeConfigurationOptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/GetReservedNodeExchangeConfigurationOptionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/GetReservedNodeExchangeConfigurationOptionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/GetReservedNodeExchangeConfigurationOptionsCommandOutput/)

</details>
<details>
<summary>
GetReservedNodeExchangeOfferings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/GetReservedNodeExchangeOfferingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/GetReservedNodeExchangeOfferingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/GetReservedNodeExchangeOfferingsCommandOutput/)

</details>
<details>
<summary>
GetResourcePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/GetResourcePolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/GetResourcePolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/GetResourcePolicyCommandOutput/)

</details>
<details>
<summary>
ListRecommendations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/ListRecommendationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/ListRecommendationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/ListRecommendationsCommandOutput/)

</details>
<details>
<summary>
ModifyAquaConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/ModifyAquaConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/ModifyAquaConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/ModifyAquaConfigurationCommandOutput/)

</details>
<details>
<summary>
ModifyAuthenticationProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/ModifyAuthenticationProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/ModifyAuthenticationProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/ModifyAuthenticationProfileCommandOutput/)

</details>
<details>
<summary>
ModifyCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/ModifyClusterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/ModifyClusterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/ModifyClusterCommandOutput/)

</details>
<details>
<summary>
ModifyClusterDbRevision
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/ModifyClusterDbRevisionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/ModifyClusterDbRevisionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/ModifyClusterDbRevisionCommandOutput/)

</details>
<details>
<summary>
ModifyClusterIamRoles
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/ModifyClusterIamRolesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/ModifyClusterIamRolesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/ModifyClusterIamRolesCommandOutput/)

</details>
<details>
<summary>
ModifyClusterMaintenance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/ModifyClusterMaintenanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/ModifyClusterMaintenanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/ModifyClusterMaintenanceCommandOutput/)

</details>
<details>
<summary>
ModifyClusterParameterGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/ModifyClusterParameterGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/ModifyClusterParameterGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/ModifyClusterParameterGroupCommandOutput/)

</details>
<details>
<summary>
ModifyClusterSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/ModifyClusterSnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/ModifyClusterSnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/ModifyClusterSnapshotCommandOutput/)

</details>
<details>
<summary>
ModifyClusterSnapshotSchedule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/ModifyClusterSnapshotScheduleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/ModifyClusterSnapshotScheduleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/ModifyClusterSnapshotScheduleCommandOutput/)

</details>
<details>
<summary>
ModifyClusterSubnetGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/ModifyClusterSubnetGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/ModifyClusterSubnetGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/ModifyClusterSubnetGroupCommandOutput/)

</details>
<details>
<summary>
ModifyCustomDomainAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/ModifyCustomDomainAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/ModifyCustomDomainAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/ModifyCustomDomainAssociationCommandOutput/)

</details>
<details>
<summary>
ModifyEndpointAccess
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/ModifyEndpointAccessCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/ModifyEndpointAccessCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/ModifyEndpointAccessCommandOutput/)

</details>
<details>
<summary>
ModifyEventSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/ModifyEventSubscriptionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/ModifyEventSubscriptionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/ModifyEventSubscriptionCommandOutput/)

</details>
<details>
<summary>
ModifyIntegration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/ModifyIntegrationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/ModifyIntegrationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/ModifyIntegrationCommandOutput/)

</details>
<details>
<summary>
ModifyRedshiftIdcApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/ModifyRedshiftIdcApplicationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/ModifyRedshiftIdcApplicationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/ModifyRedshiftIdcApplicationCommandOutput/)

</details>
<details>
<summary>
ModifyScheduledAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/ModifyScheduledActionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/ModifyScheduledActionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/ModifyScheduledActionCommandOutput/)

</details>
<details>
<summary>
ModifySnapshotCopyRetentionPeriod
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/ModifySnapshotCopyRetentionPeriodCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/ModifySnapshotCopyRetentionPeriodCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/ModifySnapshotCopyRetentionPeriodCommandOutput/)

</details>
<details>
<summary>
ModifySnapshotSchedule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/ModifySnapshotScheduleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/ModifySnapshotScheduleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/ModifySnapshotScheduleCommandOutput/)

</details>
<details>
<summary>
ModifyUsageLimit
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/ModifyUsageLimitCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/ModifyUsageLimitCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/ModifyUsageLimitCommandOutput/)

</details>
<details>
<summary>
PauseCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/PauseClusterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/PauseClusterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/PauseClusterCommandOutput/)

</details>
<details>
<summary>
PurchaseReservedNodeOffering
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/PurchaseReservedNodeOfferingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/PurchaseReservedNodeOfferingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/PurchaseReservedNodeOfferingCommandOutput/)

</details>
<details>
<summary>
PutResourcePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/PutResourcePolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/PutResourcePolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/PutResourcePolicyCommandOutput/)

</details>
<details>
<summary>
RebootCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/RebootClusterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/RebootClusterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/RebootClusterCommandOutput/)

</details>
<details>
<summary>
RegisterNamespace
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/RegisterNamespaceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/RegisterNamespaceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/RegisterNamespaceCommandOutput/)

</details>
<details>
<summary>
RejectDataShare
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/RejectDataShareCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/RejectDataShareCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/RejectDataShareCommandOutput/)

</details>
<details>
<summary>
ResetClusterParameterGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/ResetClusterParameterGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/ResetClusterParameterGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/ResetClusterParameterGroupCommandOutput/)

</details>
<details>
<summary>
ResizeCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/ResizeClusterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/ResizeClusterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/ResizeClusterCommandOutput/)

</details>
<details>
<summary>
RestoreFromClusterSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/RestoreFromClusterSnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/RestoreFromClusterSnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/RestoreFromClusterSnapshotCommandOutput/)

</details>
<details>
<summary>
RestoreTableFromClusterSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/RestoreTableFromClusterSnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/RestoreTableFromClusterSnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/RestoreTableFromClusterSnapshotCommandOutput/)

</details>
<details>
<summary>
ResumeCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/ResumeClusterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/ResumeClusterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/ResumeClusterCommandOutput/)

</details>
<details>
<summary>
RevokeClusterSecurityGroupIngress
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/RevokeClusterSecurityGroupIngressCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/RevokeClusterSecurityGroupIngressCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/RevokeClusterSecurityGroupIngressCommandOutput/)

</details>
<details>
<summary>
RevokeEndpointAccess
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/RevokeEndpointAccessCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/RevokeEndpointAccessCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/RevokeEndpointAccessCommandOutput/)

</details>
<details>
<summary>
RevokeSnapshotAccess
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/RevokeSnapshotAccessCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/RevokeSnapshotAccessCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/RevokeSnapshotAccessCommandOutput/)

</details>
<details>
<summary>
RotateEncryptionKey
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/RotateEncryptionKeyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/RotateEncryptionKeyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/RotateEncryptionKeyCommandOutput/)

</details>
<details>
<summary>
UpdatePartnerStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/redshift/command/UpdatePartnerStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/UpdatePartnerStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-redshift/Interface/UpdatePartnerStatusCommandOutput/)

</details>
