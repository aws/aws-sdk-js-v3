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

To install the this package, simply type add or install @aws-sdk/client-redshift
using your favorite package manager:

- `npm install @aws-sdk/client-redshift`
- `yarn add @aws-sdk/client-redshift`
- `pnpm add @aws-sdk/client-redshift`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `RedshiftClient` and
the commands you need, for example `AcceptReservedNodeExchangeCommand`:

```js
// ES5 example
const { RedshiftClient, AcceptReservedNodeExchangeCommand } = require("@aws-sdk/client-redshift");
```

```ts
// ES6+ example
import { RedshiftClient, AcceptReservedNodeExchangeCommand } from "@aws-sdk/client-redshift";
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
const command = new AcceptReservedNodeExchangeCommand(params);
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
  const data = await client.acceptReservedNodeExchange(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .acceptReservedNodeExchange(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.acceptReservedNodeExchange(params, (err, data) => {
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/acceptreservednodeexchangecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/acceptreservednodeexchangecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/acceptreservednodeexchangecommandoutput.html)

</details>
<details>
<summary>
AddPartner
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/addpartnercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/addpartnercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/addpartnercommandoutput.html)

</details>
<details>
<summary>
AssociateDataShareConsumer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/associatedatashareconsumercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/associatedatashareconsumercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/associatedatashareconsumercommandoutput.html)

</details>
<details>
<summary>
AuthorizeClusterSecurityGroupIngress
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/authorizeclustersecuritygroupingresscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/authorizeclustersecuritygroupingresscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/authorizeclustersecuritygroupingresscommandoutput.html)

</details>
<details>
<summary>
AuthorizeDataShare
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/authorizedatasharecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/authorizedatasharecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/authorizedatasharecommandoutput.html)

</details>
<details>
<summary>
AuthorizeEndpointAccess
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/authorizeendpointaccesscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/authorizeendpointaccesscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/authorizeendpointaccesscommandoutput.html)

</details>
<details>
<summary>
AuthorizeSnapshotAccess
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/authorizesnapshotaccesscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/authorizesnapshotaccesscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/authorizesnapshotaccesscommandoutput.html)

</details>
<details>
<summary>
BatchDeleteClusterSnapshots
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/batchdeleteclustersnapshotscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/batchdeleteclustersnapshotscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/batchdeleteclustersnapshotscommandoutput.html)

</details>
<details>
<summary>
BatchModifyClusterSnapshots
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/batchmodifyclustersnapshotscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/batchmodifyclustersnapshotscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/batchmodifyclustersnapshotscommandoutput.html)

</details>
<details>
<summary>
CancelResize
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/cancelresizecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/cancelresizecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/cancelresizecommandoutput.html)

</details>
<details>
<summary>
CopyClusterSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/copyclustersnapshotcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/copyclustersnapshotcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/copyclustersnapshotcommandoutput.html)

</details>
<details>
<summary>
CreateAuthenticationProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/createauthenticationprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/createauthenticationprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/createauthenticationprofilecommandoutput.html)

</details>
<details>
<summary>
CreateCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/createclustercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/createclustercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/createclustercommandoutput.html)

</details>
<details>
<summary>
CreateClusterParameterGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/createclusterparametergroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/createclusterparametergroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/createclusterparametergroupcommandoutput.html)

</details>
<details>
<summary>
CreateClusterSecurityGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/createclustersecuritygroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/createclustersecuritygroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/createclustersecuritygroupcommandoutput.html)

</details>
<details>
<summary>
CreateClusterSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/createclustersnapshotcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/createclustersnapshotcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/createclustersnapshotcommandoutput.html)

</details>
<details>
<summary>
CreateClusterSubnetGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/createclustersubnetgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/createclustersubnetgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/createclustersubnetgroupcommandoutput.html)

</details>
<details>
<summary>
CreateCustomDomainAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/createcustomdomainassociationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/createcustomdomainassociationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/createcustomdomainassociationcommandoutput.html)

</details>
<details>
<summary>
CreateEndpointAccess
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/createendpointaccesscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/createendpointaccesscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/createendpointaccesscommandoutput.html)

</details>
<details>
<summary>
CreateEventSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/createeventsubscriptioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/createeventsubscriptioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/createeventsubscriptioncommandoutput.html)

</details>
<details>
<summary>
CreateHsmClientCertificate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/createhsmclientcertificatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/createhsmclientcertificatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/createhsmclientcertificatecommandoutput.html)

</details>
<details>
<summary>
CreateHsmConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/createhsmconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/createhsmconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/createhsmconfigurationcommandoutput.html)

</details>
<details>
<summary>
CreateScheduledAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/createscheduledactioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/createscheduledactioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/createscheduledactioncommandoutput.html)

</details>
<details>
<summary>
CreateSnapshotCopyGrant
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/createsnapshotcopygrantcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/createsnapshotcopygrantcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/createsnapshotcopygrantcommandoutput.html)

</details>
<details>
<summary>
CreateSnapshotSchedule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/createsnapshotschedulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/createsnapshotschedulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/createsnapshotschedulecommandoutput.html)

</details>
<details>
<summary>
CreateTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/createtagscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/createtagscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/createtagscommandoutput.html)

</details>
<details>
<summary>
CreateUsageLimit
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/createusagelimitcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/createusagelimitcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/createusagelimitcommandoutput.html)

</details>
<details>
<summary>
DeauthorizeDataShare
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/deauthorizedatasharecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/deauthorizedatasharecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/deauthorizedatasharecommandoutput.html)

</details>
<details>
<summary>
DeleteAuthenticationProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/deleteauthenticationprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/deleteauthenticationprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/deleteauthenticationprofilecommandoutput.html)

</details>
<details>
<summary>
DeleteCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/deleteclustercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/deleteclustercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/deleteclustercommandoutput.html)

</details>
<details>
<summary>
DeleteClusterParameterGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/deleteclusterparametergroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/deleteclusterparametergroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/deleteclusterparametergroupcommandoutput.html)

</details>
<details>
<summary>
DeleteClusterSecurityGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/deleteclustersecuritygroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/deleteclustersecuritygroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/deleteclustersecuritygroupcommandoutput.html)

</details>
<details>
<summary>
DeleteClusterSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/deleteclustersnapshotcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/deleteclustersnapshotcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/deleteclustersnapshotcommandoutput.html)

</details>
<details>
<summary>
DeleteClusterSubnetGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/deleteclustersubnetgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/deleteclustersubnetgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/deleteclustersubnetgroupcommandoutput.html)

</details>
<details>
<summary>
DeleteCustomDomainAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/deletecustomdomainassociationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/deletecustomdomainassociationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/deletecustomdomainassociationcommandoutput.html)

</details>
<details>
<summary>
DeleteEndpointAccess
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/deleteendpointaccesscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/deleteendpointaccesscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/deleteendpointaccesscommandoutput.html)

</details>
<details>
<summary>
DeleteEventSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/deleteeventsubscriptioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/deleteeventsubscriptioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/deleteeventsubscriptioncommandoutput.html)

</details>
<details>
<summary>
DeleteHsmClientCertificate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/deletehsmclientcertificatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/deletehsmclientcertificatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/deletehsmclientcertificatecommandoutput.html)

</details>
<details>
<summary>
DeleteHsmConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/deletehsmconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/deletehsmconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/deletehsmconfigurationcommandoutput.html)

</details>
<details>
<summary>
DeletePartner
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/deletepartnercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/deletepartnercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/deletepartnercommandoutput.html)

</details>
<details>
<summary>
DeleteScheduledAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/deletescheduledactioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/deletescheduledactioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/deletescheduledactioncommandoutput.html)

</details>
<details>
<summary>
DeleteSnapshotCopyGrant
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/deletesnapshotcopygrantcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/deletesnapshotcopygrantcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/deletesnapshotcopygrantcommandoutput.html)

</details>
<details>
<summary>
DeleteSnapshotSchedule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/deletesnapshotschedulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/deletesnapshotschedulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/deletesnapshotschedulecommandoutput.html)

</details>
<details>
<summary>
DeleteTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/deletetagscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/deletetagscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/deletetagscommandoutput.html)

</details>
<details>
<summary>
DeleteUsageLimit
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/deleteusagelimitcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/deleteusagelimitcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/deleteusagelimitcommandoutput.html)

</details>
<details>
<summary>
DescribeAccountAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/describeaccountattributescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describeaccountattributescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describeaccountattributescommandoutput.html)

</details>
<details>
<summary>
DescribeAuthenticationProfiles
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/describeauthenticationprofilescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describeauthenticationprofilescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describeauthenticationprofilescommandoutput.html)

</details>
<details>
<summary>
DescribeClusterDbRevisions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/describeclusterdbrevisionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describeclusterdbrevisionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describeclusterdbrevisionscommandoutput.html)

</details>
<details>
<summary>
DescribeClusterParameterGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/describeclusterparametergroupscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describeclusterparametergroupscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describeclusterparametergroupscommandoutput.html)

</details>
<details>
<summary>
DescribeClusterParameters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/describeclusterparameterscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describeclusterparameterscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describeclusterparameterscommandoutput.html)

</details>
<details>
<summary>
DescribeClusters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/describeclusterscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describeclusterscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describeclusterscommandoutput.html)

</details>
<details>
<summary>
DescribeClusterSecurityGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/describeclustersecuritygroupscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describeclustersecuritygroupscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describeclustersecuritygroupscommandoutput.html)

</details>
<details>
<summary>
DescribeClusterSnapshots
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/describeclustersnapshotscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describeclustersnapshotscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describeclustersnapshotscommandoutput.html)

</details>
<details>
<summary>
DescribeClusterSubnetGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/describeclustersubnetgroupscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describeclustersubnetgroupscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describeclustersubnetgroupscommandoutput.html)

</details>
<details>
<summary>
DescribeClusterTracks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/describeclustertrackscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describeclustertrackscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describeclustertrackscommandoutput.html)

</details>
<details>
<summary>
DescribeClusterVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/describeclusterversionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describeclusterversionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describeclusterversionscommandoutput.html)

</details>
<details>
<summary>
DescribeCustomDomainAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/describecustomdomainassociationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describecustomdomainassociationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describecustomdomainassociationscommandoutput.html)

</details>
<details>
<summary>
DescribeDataShares
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/describedatasharescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describedatasharescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describedatasharescommandoutput.html)

</details>
<details>
<summary>
DescribeDataSharesForConsumer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/describedatasharesforconsumercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describedatasharesforconsumercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describedatasharesforconsumercommandoutput.html)

</details>
<details>
<summary>
DescribeDataSharesForProducer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/describedatasharesforproducercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describedatasharesforproducercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describedatasharesforproducercommandoutput.html)

</details>
<details>
<summary>
DescribeDefaultClusterParameters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/describedefaultclusterparameterscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describedefaultclusterparameterscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describedefaultclusterparameterscommandoutput.html)

</details>
<details>
<summary>
DescribeEndpointAccess
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/describeendpointaccesscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describeendpointaccesscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describeendpointaccesscommandoutput.html)

</details>
<details>
<summary>
DescribeEndpointAuthorization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/describeendpointauthorizationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describeendpointauthorizationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describeendpointauthorizationcommandoutput.html)

</details>
<details>
<summary>
DescribeEventCategories
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/describeeventcategoriescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describeeventcategoriescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describeeventcategoriescommandoutput.html)

</details>
<details>
<summary>
DescribeEvents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/describeeventscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describeeventscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describeeventscommandoutput.html)

</details>
<details>
<summary>
DescribeEventSubscriptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/describeeventsubscriptionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describeeventsubscriptionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describeeventsubscriptionscommandoutput.html)

</details>
<details>
<summary>
DescribeHsmClientCertificates
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/describehsmclientcertificatescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describehsmclientcertificatescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describehsmclientcertificatescommandoutput.html)

</details>
<details>
<summary>
DescribeHsmConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/describehsmconfigurationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describehsmconfigurationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describehsmconfigurationscommandoutput.html)

</details>
<details>
<summary>
DescribeLoggingStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/describeloggingstatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describeloggingstatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describeloggingstatuscommandoutput.html)

</details>
<details>
<summary>
DescribeNodeConfigurationOptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/describenodeconfigurationoptionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describenodeconfigurationoptionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describenodeconfigurationoptionscommandoutput.html)

</details>
<details>
<summary>
DescribeOrderableClusterOptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/describeorderableclusteroptionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describeorderableclusteroptionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describeorderableclusteroptionscommandoutput.html)

</details>
<details>
<summary>
DescribePartners
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/describepartnerscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describepartnerscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describepartnerscommandoutput.html)

</details>
<details>
<summary>
DescribeReservedNodeExchangeStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/describereservednodeexchangestatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describereservednodeexchangestatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describereservednodeexchangestatuscommandoutput.html)

</details>
<details>
<summary>
DescribeReservedNodeOfferings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/describereservednodeofferingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describereservednodeofferingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describereservednodeofferingscommandoutput.html)

</details>
<details>
<summary>
DescribeReservedNodes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/describereservednodescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describereservednodescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describereservednodescommandoutput.html)

</details>
<details>
<summary>
DescribeResize
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/describeresizecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describeresizecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describeresizecommandoutput.html)

</details>
<details>
<summary>
DescribeScheduledActions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/describescheduledactionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describescheduledactionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describescheduledactionscommandoutput.html)

</details>
<details>
<summary>
DescribeSnapshotCopyGrants
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/describesnapshotcopygrantscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describesnapshotcopygrantscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describesnapshotcopygrantscommandoutput.html)

</details>
<details>
<summary>
DescribeSnapshotSchedules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/describesnapshotschedulescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describesnapshotschedulescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describesnapshotschedulescommandoutput.html)

</details>
<details>
<summary>
DescribeStorage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/describestoragecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describestoragecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describestoragecommandoutput.html)

</details>
<details>
<summary>
DescribeTableRestoreStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/describetablerestorestatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describetablerestorestatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describetablerestorestatuscommandoutput.html)

</details>
<details>
<summary>
DescribeTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/describetagscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describetagscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describetagscommandoutput.html)

</details>
<details>
<summary>
DescribeUsageLimits
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/describeusagelimitscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describeusagelimitscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/describeusagelimitscommandoutput.html)

</details>
<details>
<summary>
DisableLogging
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/disableloggingcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/disableloggingcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/disableloggingcommandoutput.html)

</details>
<details>
<summary>
DisableSnapshotCopy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/disablesnapshotcopycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/disablesnapshotcopycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/disablesnapshotcopycommandoutput.html)

</details>
<details>
<summary>
DisassociateDataShareConsumer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/disassociatedatashareconsumercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/disassociatedatashareconsumercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/disassociatedatashareconsumercommandoutput.html)

</details>
<details>
<summary>
EnableLogging
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/enableloggingcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/enableloggingcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/enableloggingcommandoutput.html)

</details>
<details>
<summary>
EnableSnapshotCopy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/enablesnapshotcopycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/enablesnapshotcopycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/enablesnapshotcopycommandoutput.html)

</details>
<details>
<summary>
GetClusterCredentials
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/getclustercredentialscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/getclustercredentialscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/getclustercredentialscommandoutput.html)

</details>
<details>
<summary>
GetClusterCredentialsWithIAM
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/getclustercredentialswithiamcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/getclustercredentialswithiamcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/getclustercredentialswithiamcommandoutput.html)

</details>
<details>
<summary>
GetReservedNodeExchangeConfigurationOptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/getreservednodeexchangeconfigurationoptionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/getreservednodeexchangeconfigurationoptionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/getreservednodeexchangeconfigurationoptionscommandoutput.html)

</details>
<details>
<summary>
GetReservedNodeExchangeOfferings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/getreservednodeexchangeofferingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/getreservednodeexchangeofferingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/getreservednodeexchangeofferingscommandoutput.html)

</details>
<details>
<summary>
ModifyAquaConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/modifyaquaconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/modifyaquaconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/modifyaquaconfigurationcommandoutput.html)

</details>
<details>
<summary>
ModifyAuthenticationProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/modifyauthenticationprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/modifyauthenticationprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/modifyauthenticationprofilecommandoutput.html)

</details>
<details>
<summary>
ModifyCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/modifyclustercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/modifyclustercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/modifyclustercommandoutput.html)

</details>
<details>
<summary>
ModifyClusterDbRevision
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/modifyclusterdbrevisioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/modifyclusterdbrevisioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/modifyclusterdbrevisioncommandoutput.html)

</details>
<details>
<summary>
ModifyClusterIamRoles
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/modifyclusteriamrolescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/modifyclusteriamrolescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/modifyclusteriamrolescommandoutput.html)

</details>
<details>
<summary>
ModifyClusterMaintenance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/modifyclustermaintenancecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/modifyclustermaintenancecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/modifyclustermaintenancecommandoutput.html)

</details>
<details>
<summary>
ModifyClusterParameterGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/modifyclusterparametergroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/modifyclusterparametergroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/modifyclusterparametergroupcommandoutput.html)

</details>
<details>
<summary>
ModifyClusterSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/modifyclustersnapshotcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/modifyclustersnapshotcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/modifyclustersnapshotcommandoutput.html)

</details>
<details>
<summary>
ModifyClusterSnapshotSchedule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/modifyclustersnapshotschedulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/modifyclustersnapshotschedulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/modifyclustersnapshotschedulecommandoutput.html)

</details>
<details>
<summary>
ModifyClusterSubnetGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/modifyclustersubnetgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/modifyclustersubnetgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/modifyclustersubnetgroupcommandoutput.html)

</details>
<details>
<summary>
ModifyCustomDomainAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/modifycustomdomainassociationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/modifycustomdomainassociationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/modifycustomdomainassociationcommandoutput.html)

</details>
<details>
<summary>
ModifyEndpointAccess
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/modifyendpointaccesscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/modifyendpointaccesscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/modifyendpointaccesscommandoutput.html)

</details>
<details>
<summary>
ModifyEventSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/modifyeventsubscriptioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/modifyeventsubscriptioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/modifyeventsubscriptioncommandoutput.html)

</details>
<details>
<summary>
ModifyScheduledAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/modifyscheduledactioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/modifyscheduledactioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/modifyscheduledactioncommandoutput.html)

</details>
<details>
<summary>
ModifySnapshotCopyRetentionPeriod
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/modifysnapshotcopyretentionperiodcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/modifysnapshotcopyretentionperiodcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/modifysnapshotcopyretentionperiodcommandoutput.html)

</details>
<details>
<summary>
ModifySnapshotSchedule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/modifysnapshotschedulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/modifysnapshotschedulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/modifysnapshotschedulecommandoutput.html)

</details>
<details>
<summary>
ModifyUsageLimit
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/modifyusagelimitcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/modifyusagelimitcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/modifyusagelimitcommandoutput.html)

</details>
<details>
<summary>
PauseCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/pauseclustercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/pauseclustercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/pauseclustercommandoutput.html)

</details>
<details>
<summary>
PurchaseReservedNodeOffering
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/purchasereservednodeofferingcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/purchasereservednodeofferingcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/purchasereservednodeofferingcommandoutput.html)

</details>
<details>
<summary>
RebootCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/rebootclustercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/rebootclustercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/rebootclustercommandoutput.html)

</details>
<details>
<summary>
RejectDataShare
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/rejectdatasharecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/rejectdatasharecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/rejectdatasharecommandoutput.html)

</details>
<details>
<summary>
ResetClusterParameterGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/resetclusterparametergroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/resetclusterparametergroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/resetclusterparametergroupcommandoutput.html)

</details>
<details>
<summary>
ResizeCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/resizeclustercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/resizeclustercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/resizeclustercommandoutput.html)

</details>
<details>
<summary>
RestoreFromClusterSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/restorefromclustersnapshotcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/restorefromclustersnapshotcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/restorefromclustersnapshotcommandoutput.html)

</details>
<details>
<summary>
RestoreTableFromClusterSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/restoretablefromclustersnapshotcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/restoretablefromclustersnapshotcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/restoretablefromclustersnapshotcommandoutput.html)

</details>
<details>
<summary>
ResumeCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/resumeclustercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/resumeclustercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/resumeclustercommandoutput.html)

</details>
<details>
<summary>
RevokeClusterSecurityGroupIngress
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/revokeclustersecuritygroupingresscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/revokeclustersecuritygroupingresscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/revokeclustersecuritygroupingresscommandoutput.html)

</details>
<details>
<summary>
RevokeEndpointAccess
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/revokeendpointaccesscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/revokeendpointaccesscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/revokeendpointaccesscommandoutput.html)

</details>
<details>
<summary>
RevokeSnapshotAccess
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/revokesnapshotaccesscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/revokesnapshotaccesscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/revokesnapshotaccesscommandoutput.html)

</details>
<details>
<summary>
RotateEncryptionKey
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/rotateencryptionkeycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/rotateencryptionkeycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/rotateencryptionkeycommandoutput.html)

</details>
<details>
<summary>
UpdatePartnerStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/classes/updatepartnerstatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/updatepartnerstatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift/interfaces/updatepartnerstatuscommandoutput.html)

</details>
