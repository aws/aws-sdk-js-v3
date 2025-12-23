<!-- generated file, do not edit directly -->

# @aws-sdk/client-lightsail

## Description

AWS SDK for JavaScript Lightsail Client for Node.js, Browser and React Native.

<p>Amazon Lightsail is the easiest way to get started with Amazon Web Services (Amazon Web Services) for developers who need to build websites or web applications. It includes
everything you need to launch your project quickly - instances (virtual private servers),
container services, storage buckets, managed databases, SSD-based block storage, static IP
addresses, load balancers, content delivery network (CDN) distributions, DNS management of
registered domains, and resource snapshots (backups) - for a low, predictable monthly
price.</p>
<p>You can manage your Lightsail resources using the Lightsail console, Lightsail API,
Command Line Interface (CLI), or SDKs. For more information about Lightsail
concepts and tasks, see the <a href="https://docs.aws.amazon.com/lightsail/latest/userguide/lightsail-how-to-set-up-and-configure-aws-cli">Amazon Lightsail Developer Guide</a>.</p>
<p>This API Reference provides detailed information about the actions, data types,
parameters, and errors of the Lightsail service. For more information about the supported
Amazon Web Services Regions, endpoints, and service quotas of the Lightsail service, see
<a href="https://docs.aws.amazon.com/general/latest/gr/lightsail.html">Amazon Lightsail Endpoints
and Quotas</a> in the <i>Amazon Web Services General Reference</i>.</p>

## Installing
To install this package, simply type add or install @aws-sdk/client-lightsail
using your favorite package manager:
- `npm install @aws-sdk/client-lightsail`
- `yarn add @aws-sdk/client-lightsail`
- `pnpm add @aws-sdk/client-lightsail`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `LightsailClient` and
the commands you need, for example `GetAlarmsCommand`:

```js
// ES5 example
const { LightsailClient, GetAlarmsCommand } = require("@aws-sdk/client-lightsail");
```

```ts
// ES6+ example
import { LightsailClient, GetAlarmsCommand } from "@aws-sdk/client-lightsail";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new LightsailClient({ region: "REGION" });

const params = { /** input parameters */ };
const command = new GetAlarmsCommand(params);
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
import * as AWS from "@aws-sdk/client-lightsail";
const client = new AWS.Lightsail({ region: "REGION" });

// async/await.
try {
  const data = await client.getAlarms(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .getAlarms(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.getAlarms(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-lightsail` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AllocateStaticIp
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/AllocateStaticIpCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/AllocateStaticIpCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/AllocateStaticIpCommandOutput/)
</details>
<details>
<summary>
AttachCertificateToDistribution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/AttachCertificateToDistributionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/AttachCertificateToDistributionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/AttachCertificateToDistributionCommandOutput/)
</details>
<details>
<summary>
AttachDisk
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/AttachDiskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/AttachDiskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/AttachDiskCommandOutput/)
</details>
<details>
<summary>
AttachInstancesToLoadBalancer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/AttachInstancesToLoadBalancerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/AttachInstancesToLoadBalancerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/AttachInstancesToLoadBalancerCommandOutput/)
</details>
<details>
<summary>
AttachLoadBalancerTlsCertificate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/AttachLoadBalancerTlsCertificateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/AttachLoadBalancerTlsCertificateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/AttachLoadBalancerTlsCertificateCommandOutput/)
</details>
<details>
<summary>
AttachStaticIp
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/AttachStaticIpCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/AttachStaticIpCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/AttachStaticIpCommandOutput/)
</details>
<details>
<summary>
CloseInstancePublicPorts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/CloseInstancePublicPortsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/CloseInstancePublicPortsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/CloseInstancePublicPortsCommandOutput/)
</details>
<details>
<summary>
CopySnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/CopySnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/CopySnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/CopySnapshotCommandOutput/)
</details>
<details>
<summary>
CreateBucket
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/CreateBucketCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/CreateBucketCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/CreateBucketCommandOutput/)
</details>
<details>
<summary>
CreateBucketAccessKey
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/CreateBucketAccessKeyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/CreateBucketAccessKeyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/CreateBucketAccessKeyCommandOutput/)
</details>
<details>
<summary>
CreateCertificate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/CreateCertificateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/CreateCertificateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/CreateCertificateCommandOutput/)
</details>
<details>
<summary>
CreateCloudFormationStack
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/CreateCloudFormationStackCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/CreateCloudFormationStackCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/CreateCloudFormationStackCommandOutput/)
</details>
<details>
<summary>
CreateContactMethod
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/CreateContactMethodCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/CreateContactMethodCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/CreateContactMethodCommandOutput/)
</details>
<details>
<summary>
CreateContainerService
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/CreateContainerServiceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/CreateContainerServiceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/CreateContainerServiceCommandOutput/)
</details>
<details>
<summary>
CreateContainerServiceDeployment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/CreateContainerServiceDeploymentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/CreateContainerServiceDeploymentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/CreateContainerServiceDeploymentCommandOutput/)
</details>
<details>
<summary>
CreateContainerServiceRegistryLogin
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/CreateContainerServiceRegistryLoginCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/CreateContainerServiceRegistryLoginCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/CreateContainerServiceRegistryLoginCommandOutput/)
</details>
<details>
<summary>
CreateDisk
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/CreateDiskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/CreateDiskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/CreateDiskCommandOutput/)
</details>
<details>
<summary>
CreateDiskFromSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/CreateDiskFromSnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/CreateDiskFromSnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/CreateDiskFromSnapshotCommandOutput/)
</details>
<details>
<summary>
CreateDiskSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/CreateDiskSnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/CreateDiskSnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/CreateDiskSnapshotCommandOutput/)
</details>
<details>
<summary>
CreateDistribution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/CreateDistributionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/CreateDistributionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/CreateDistributionCommandOutput/)
</details>
<details>
<summary>
CreateDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/CreateDomainCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/CreateDomainCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/CreateDomainCommandOutput/)
</details>
<details>
<summary>
CreateDomainEntry
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/CreateDomainEntryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/CreateDomainEntryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/CreateDomainEntryCommandOutput/)
</details>
<details>
<summary>
CreateGUISessionAccessDetails
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/CreateGUISessionAccessDetailsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/CreateGUISessionAccessDetailsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/CreateGUISessionAccessDetailsCommandOutput/)
</details>
<details>
<summary>
CreateInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/CreateInstancesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/CreateInstancesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/CreateInstancesCommandOutput/)
</details>
<details>
<summary>
CreateInstancesFromSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/CreateInstancesFromSnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/CreateInstancesFromSnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/CreateInstancesFromSnapshotCommandOutput/)
</details>
<details>
<summary>
CreateInstanceSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/CreateInstanceSnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/CreateInstanceSnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/CreateInstanceSnapshotCommandOutput/)
</details>
<details>
<summary>
CreateKeyPair
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/CreateKeyPairCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/CreateKeyPairCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/CreateKeyPairCommandOutput/)
</details>
<details>
<summary>
CreateLoadBalancer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/CreateLoadBalancerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/CreateLoadBalancerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/CreateLoadBalancerCommandOutput/)
</details>
<details>
<summary>
CreateLoadBalancerTlsCertificate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/CreateLoadBalancerTlsCertificateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/CreateLoadBalancerTlsCertificateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/CreateLoadBalancerTlsCertificateCommandOutput/)
</details>
<details>
<summary>
CreateRelationalDatabase
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/CreateRelationalDatabaseCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/CreateRelationalDatabaseCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/CreateRelationalDatabaseCommandOutput/)
</details>
<details>
<summary>
CreateRelationalDatabaseFromSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/CreateRelationalDatabaseFromSnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/CreateRelationalDatabaseFromSnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/CreateRelationalDatabaseFromSnapshotCommandOutput/)
</details>
<details>
<summary>
CreateRelationalDatabaseSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/CreateRelationalDatabaseSnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/CreateRelationalDatabaseSnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/CreateRelationalDatabaseSnapshotCommandOutput/)
</details>
<details>
<summary>
DeleteAlarm
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/DeleteAlarmCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/DeleteAlarmCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/DeleteAlarmCommandOutput/)
</details>
<details>
<summary>
DeleteAutoSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/DeleteAutoSnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/DeleteAutoSnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/DeleteAutoSnapshotCommandOutput/)
</details>
<details>
<summary>
DeleteBucket
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/DeleteBucketCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/DeleteBucketCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/DeleteBucketCommandOutput/)
</details>
<details>
<summary>
DeleteBucketAccessKey
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/DeleteBucketAccessKeyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/DeleteBucketAccessKeyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/DeleteBucketAccessKeyCommandOutput/)
</details>
<details>
<summary>
DeleteCertificate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/DeleteCertificateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/DeleteCertificateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/DeleteCertificateCommandOutput/)
</details>
<details>
<summary>
DeleteContactMethod
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/DeleteContactMethodCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/DeleteContactMethodCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/DeleteContactMethodCommandOutput/)
</details>
<details>
<summary>
DeleteContainerImage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/DeleteContainerImageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/DeleteContainerImageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/DeleteContainerImageCommandOutput/)
</details>
<details>
<summary>
DeleteContainerService
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/DeleteContainerServiceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/DeleteContainerServiceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/DeleteContainerServiceCommandOutput/)
</details>
<details>
<summary>
DeleteDisk
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/DeleteDiskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/DeleteDiskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/DeleteDiskCommandOutput/)
</details>
<details>
<summary>
DeleteDiskSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/DeleteDiskSnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/DeleteDiskSnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/DeleteDiskSnapshotCommandOutput/)
</details>
<details>
<summary>
DeleteDistribution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/DeleteDistributionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/DeleteDistributionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/DeleteDistributionCommandOutput/)
</details>
<details>
<summary>
DeleteDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/DeleteDomainCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/DeleteDomainCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/DeleteDomainCommandOutput/)
</details>
<details>
<summary>
DeleteDomainEntry
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/DeleteDomainEntryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/DeleteDomainEntryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/DeleteDomainEntryCommandOutput/)
</details>
<details>
<summary>
DeleteInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/DeleteInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/DeleteInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/DeleteInstanceCommandOutput/)
</details>
<details>
<summary>
DeleteInstanceSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/DeleteInstanceSnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/DeleteInstanceSnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/DeleteInstanceSnapshotCommandOutput/)
</details>
<details>
<summary>
DeleteKeyPair
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/DeleteKeyPairCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/DeleteKeyPairCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/DeleteKeyPairCommandOutput/)
</details>
<details>
<summary>
DeleteKnownHostKeys
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/DeleteKnownHostKeysCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/DeleteKnownHostKeysCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/DeleteKnownHostKeysCommandOutput/)
</details>
<details>
<summary>
DeleteLoadBalancer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/DeleteLoadBalancerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/DeleteLoadBalancerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/DeleteLoadBalancerCommandOutput/)
</details>
<details>
<summary>
DeleteLoadBalancerTlsCertificate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/DeleteLoadBalancerTlsCertificateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/DeleteLoadBalancerTlsCertificateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/DeleteLoadBalancerTlsCertificateCommandOutput/)
</details>
<details>
<summary>
DeleteRelationalDatabase
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/DeleteRelationalDatabaseCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/DeleteRelationalDatabaseCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/DeleteRelationalDatabaseCommandOutput/)
</details>
<details>
<summary>
DeleteRelationalDatabaseSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/DeleteRelationalDatabaseSnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/DeleteRelationalDatabaseSnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/DeleteRelationalDatabaseSnapshotCommandOutput/)
</details>
<details>
<summary>
DetachCertificateFromDistribution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/DetachCertificateFromDistributionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/DetachCertificateFromDistributionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/DetachCertificateFromDistributionCommandOutput/)
</details>
<details>
<summary>
DetachDisk
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/DetachDiskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/DetachDiskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/DetachDiskCommandOutput/)
</details>
<details>
<summary>
DetachInstancesFromLoadBalancer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/DetachInstancesFromLoadBalancerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/DetachInstancesFromLoadBalancerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/DetachInstancesFromLoadBalancerCommandOutput/)
</details>
<details>
<summary>
DetachStaticIp
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/DetachStaticIpCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/DetachStaticIpCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/DetachStaticIpCommandOutput/)
</details>
<details>
<summary>
DisableAddOn
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/DisableAddOnCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/DisableAddOnCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/DisableAddOnCommandOutput/)
</details>
<details>
<summary>
DownloadDefaultKeyPair
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/DownloadDefaultKeyPairCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/DownloadDefaultKeyPairCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/DownloadDefaultKeyPairCommandOutput/)
</details>
<details>
<summary>
EnableAddOn
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/EnableAddOnCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/EnableAddOnCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/EnableAddOnCommandOutput/)
</details>
<details>
<summary>
ExportSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/ExportSnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/ExportSnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/ExportSnapshotCommandOutput/)
</details>
<details>
<summary>
GetActiveNames
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetActiveNamesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetActiveNamesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetActiveNamesCommandOutput/)
</details>
<details>
<summary>
GetAlarms
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetAlarmsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetAlarmsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetAlarmsCommandOutput/)
</details>
<details>
<summary>
GetAutoSnapshots
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetAutoSnapshotsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetAutoSnapshotsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetAutoSnapshotsCommandOutput/)
</details>
<details>
<summary>
GetBlueprints
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetBlueprintsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetBlueprintsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetBlueprintsCommandOutput/)
</details>
<details>
<summary>
GetBucketAccessKeys
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetBucketAccessKeysCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetBucketAccessKeysCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetBucketAccessKeysCommandOutput/)
</details>
<details>
<summary>
GetBucketBundles
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetBucketBundlesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetBucketBundlesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetBucketBundlesCommandOutput/)
</details>
<details>
<summary>
GetBucketMetricData
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetBucketMetricDataCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetBucketMetricDataCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetBucketMetricDataCommandOutput/)
</details>
<details>
<summary>
GetBuckets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetBucketsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetBucketsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetBucketsCommandOutput/)
</details>
<details>
<summary>
GetBundles
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetBundlesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetBundlesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetBundlesCommandOutput/)
</details>
<details>
<summary>
GetCertificates
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetCertificatesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetCertificatesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetCertificatesCommandOutput/)
</details>
<details>
<summary>
GetCloudFormationStackRecords
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetCloudFormationStackRecordsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetCloudFormationStackRecordsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetCloudFormationStackRecordsCommandOutput/)
</details>
<details>
<summary>
GetContactMethods
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetContactMethodsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetContactMethodsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetContactMethodsCommandOutput/)
</details>
<details>
<summary>
GetContainerAPIMetadata
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetContainerAPIMetadataCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetContainerAPIMetadataCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetContainerAPIMetadataCommandOutput/)
</details>
<details>
<summary>
GetContainerImages
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetContainerImagesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetContainerImagesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetContainerImagesCommandOutput/)
</details>
<details>
<summary>
GetContainerLog
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetContainerLogCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetContainerLogCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetContainerLogCommandOutput/)
</details>
<details>
<summary>
GetContainerServiceDeployments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetContainerServiceDeploymentsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetContainerServiceDeploymentsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetContainerServiceDeploymentsCommandOutput/)
</details>
<details>
<summary>
GetContainerServiceMetricData
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetContainerServiceMetricDataCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetContainerServiceMetricDataCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetContainerServiceMetricDataCommandOutput/)
</details>
<details>
<summary>
GetContainerServicePowers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetContainerServicePowersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetContainerServicePowersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetContainerServicePowersCommandOutput/)
</details>
<details>
<summary>
GetContainerServices
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetContainerServicesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetContainerServicesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetContainerServicesCommandOutput/)
</details>
<details>
<summary>
GetCostEstimate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetCostEstimateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetCostEstimateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetCostEstimateCommandOutput/)
</details>
<details>
<summary>
GetDisk
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetDiskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetDiskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetDiskCommandOutput/)
</details>
<details>
<summary>
GetDisks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetDisksCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetDisksCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetDisksCommandOutput/)
</details>
<details>
<summary>
GetDiskSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetDiskSnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetDiskSnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetDiskSnapshotCommandOutput/)
</details>
<details>
<summary>
GetDiskSnapshots
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetDiskSnapshotsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetDiskSnapshotsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetDiskSnapshotsCommandOutput/)
</details>
<details>
<summary>
GetDistributionBundles
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetDistributionBundlesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetDistributionBundlesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetDistributionBundlesCommandOutput/)
</details>
<details>
<summary>
GetDistributionLatestCacheReset
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetDistributionLatestCacheResetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetDistributionLatestCacheResetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetDistributionLatestCacheResetCommandOutput/)
</details>
<details>
<summary>
GetDistributionMetricData
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetDistributionMetricDataCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetDistributionMetricDataCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetDistributionMetricDataCommandOutput/)
</details>
<details>
<summary>
GetDistributions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetDistributionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetDistributionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetDistributionsCommandOutput/)
</details>
<details>
<summary>
GetDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetDomainCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetDomainCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetDomainCommandOutput/)
</details>
<details>
<summary>
GetDomains
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetDomainsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetDomainsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetDomainsCommandOutput/)
</details>
<details>
<summary>
GetExportSnapshotRecords
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetExportSnapshotRecordsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetExportSnapshotRecordsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetExportSnapshotRecordsCommandOutput/)
</details>
<details>
<summary>
GetInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetInstanceCommandOutput/)
</details>
<details>
<summary>
GetInstanceAccessDetails
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetInstanceAccessDetailsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetInstanceAccessDetailsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetInstanceAccessDetailsCommandOutput/)
</details>
<details>
<summary>
GetInstanceMetricData
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetInstanceMetricDataCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetInstanceMetricDataCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetInstanceMetricDataCommandOutput/)
</details>
<details>
<summary>
GetInstancePortStates
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetInstancePortStatesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetInstancePortStatesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetInstancePortStatesCommandOutput/)
</details>
<details>
<summary>
GetInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetInstancesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetInstancesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetInstancesCommandOutput/)
</details>
<details>
<summary>
GetInstanceSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetInstanceSnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetInstanceSnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetInstanceSnapshotCommandOutput/)
</details>
<details>
<summary>
GetInstanceSnapshots
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetInstanceSnapshotsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetInstanceSnapshotsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetInstanceSnapshotsCommandOutput/)
</details>
<details>
<summary>
GetInstanceState
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetInstanceStateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetInstanceStateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetInstanceStateCommandOutput/)
</details>
<details>
<summary>
GetKeyPair
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetKeyPairCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetKeyPairCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetKeyPairCommandOutput/)
</details>
<details>
<summary>
GetKeyPairs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetKeyPairsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetKeyPairsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetKeyPairsCommandOutput/)
</details>
<details>
<summary>
GetLoadBalancer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetLoadBalancerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetLoadBalancerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetLoadBalancerCommandOutput/)
</details>
<details>
<summary>
GetLoadBalancerMetricData
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetLoadBalancerMetricDataCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetLoadBalancerMetricDataCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetLoadBalancerMetricDataCommandOutput/)
</details>
<details>
<summary>
GetLoadBalancers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetLoadBalancersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetLoadBalancersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetLoadBalancersCommandOutput/)
</details>
<details>
<summary>
GetLoadBalancerTlsCertificates
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetLoadBalancerTlsCertificatesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetLoadBalancerTlsCertificatesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetLoadBalancerTlsCertificatesCommandOutput/)
</details>
<details>
<summary>
GetLoadBalancerTlsPolicies
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetLoadBalancerTlsPoliciesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetLoadBalancerTlsPoliciesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetLoadBalancerTlsPoliciesCommandOutput/)
</details>
<details>
<summary>
GetOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetOperationCommandOutput/)
</details>
<details>
<summary>
GetOperations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetOperationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetOperationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetOperationsCommandOutput/)
</details>
<details>
<summary>
GetOperationsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetOperationsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetOperationsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetOperationsForResourceCommandOutput/)
</details>
<details>
<summary>
GetRegions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetRegionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetRegionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetRegionsCommandOutput/)
</details>
<details>
<summary>
GetRelationalDatabase
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetRelationalDatabaseCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetRelationalDatabaseCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetRelationalDatabaseCommandOutput/)
</details>
<details>
<summary>
GetRelationalDatabaseBlueprints
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetRelationalDatabaseBlueprintsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetRelationalDatabaseBlueprintsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetRelationalDatabaseBlueprintsCommandOutput/)
</details>
<details>
<summary>
GetRelationalDatabaseBundles
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetRelationalDatabaseBundlesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetRelationalDatabaseBundlesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetRelationalDatabaseBundlesCommandOutput/)
</details>
<details>
<summary>
GetRelationalDatabaseEvents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetRelationalDatabaseEventsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetRelationalDatabaseEventsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetRelationalDatabaseEventsCommandOutput/)
</details>
<details>
<summary>
GetRelationalDatabaseLogEvents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetRelationalDatabaseLogEventsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetRelationalDatabaseLogEventsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetRelationalDatabaseLogEventsCommandOutput/)
</details>
<details>
<summary>
GetRelationalDatabaseLogStreams
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetRelationalDatabaseLogStreamsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetRelationalDatabaseLogStreamsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetRelationalDatabaseLogStreamsCommandOutput/)
</details>
<details>
<summary>
GetRelationalDatabaseMasterUserPassword
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetRelationalDatabaseMasterUserPasswordCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetRelationalDatabaseMasterUserPasswordCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetRelationalDatabaseMasterUserPasswordCommandOutput/)
</details>
<details>
<summary>
GetRelationalDatabaseMetricData
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetRelationalDatabaseMetricDataCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetRelationalDatabaseMetricDataCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetRelationalDatabaseMetricDataCommandOutput/)
</details>
<details>
<summary>
GetRelationalDatabaseParameters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetRelationalDatabaseParametersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetRelationalDatabaseParametersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetRelationalDatabaseParametersCommandOutput/)
</details>
<details>
<summary>
GetRelationalDatabases
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetRelationalDatabasesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetRelationalDatabasesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetRelationalDatabasesCommandOutput/)
</details>
<details>
<summary>
GetRelationalDatabaseSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetRelationalDatabaseSnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetRelationalDatabaseSnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetRelationalDatabaseSnapshotCommandOutput/)
</details>
<details>
<summary>
GetRelationalDatabaseSnapshots
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetRelationalDatabaseSnapshotsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetRelationalDatabaseSnapshotsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetRelationalDatabaseSnapshotsCommandOutput/)
</details>
<details>
<summary>
GetSetupHistory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetSetupHistoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetSetupHistoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetSetupHistoryCommandOutput/)
</details>
<details>
<summary>
GetStaticIp
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetStaticIpCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetStaticIpCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetStaticIpCommandOutput/)
</details>
<details>
<summary>
GetStaticIps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/GetStaticIpsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetStaticIpsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/GetStaticIpsCommandOutput/)
</details>
<details>
<summary>
ImportKeyPair
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/ImportKeyPairCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/ImportKeyPairCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/ImportKeyPairCommandOutput/)
</details>
<details>
<summary>
IsVpcPeered
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/IsVpcPeeredCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/IsVpcPeeredCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/IsVpcPeeredCommandOutput/)
</details>
<details>
<summary>
OpenInstancePublicPorts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/OpenInstancePublicPortsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/OpenInstancePublicPortsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/OpenInstancePublicPortsCommandOutput/)
</details>
<details>
<summary>
PeerVpc
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/PeerVpcCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/PeerVpcCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/PeerVpcCommandOutput/)
</details>
<details>
<summary>
PutAlarm
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/PutAlarmCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/PutAlarmCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/PutAlarmCommandOutput/)
</details>
<details>
<summary>
PutInstancePublicPorts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/PutInstancePublicPortsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/PutInstancePublicPortsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/PutInstancePublicPortsCommandOutput/)
</details>
<details>
<summary>
RebootInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/RebootInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/RebootInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/RebootInstanceCommandOutput/)
</details>
<details>
<summary>
RebootRelationalDatabase
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/RebootRelationalDatabaseCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/RebootRelationalDatabaseCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/RebootRelationalDatabaseCommandOutput/)
</details>
<details>
<summary>
RegisterContainerImage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/RegisterContainerImageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/RegisterContainerImageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/RegisterContainerImageCommandOutput/)
</details>
<details>
<summary>
ReleaseStaticIp
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/ReleaseStaticIpCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/ReleaseStaticIpCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/ReleaseStaticIpCommandOutput/)
</details>
<details>
<summary>
ResetDistributionCache
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/ResetDistributionCacheCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/ResetDistributionCacheCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/ResetDistributionCacheCommandOutput/)
</details>
<details>
<summary>
SendContactMethodVerification
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/SendContactMethodVerificationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/SendContactMethodVerificationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/SendContactMethodVerificationCommandOutput/)
</details>
<details>
<summary>
SetIpAddressType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/SetIpAddressTypeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/SetIpAddressTypeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/SetIpAddressTypeCommandOutput/)
</details>
<details>
<summary>
SetResourceAccessForBucket
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/SetResourceAccessForBucketCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/SetResourceAccessForBucketCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/SetResourceAccessForBucketCommandOutput/)
</details>
<details>
<summary>
SetupInstanceHttps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/SetupInstanceHttpsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/SetupInstanceHttpsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/SetupInstanceHttpsCommandOutput/)
</details>
<details>
<summary>
StartGUISession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/StartGUISessionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/StartGUISessionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/StartGUISessionCommandOutput/)
</details>
<details>
<summary>
StartInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/StartInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/StartInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/StartInstanceCommandOutput/)
</details>
<details>
<summary>
StartRelationalDatabase
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/StartRelationalDatabaseCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/StartRelationalDatabaseCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/StartRelationalDatabaseCommandOutput/)
</details>
<details>
<summary>
StopGUISession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/StopGUISessionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/StopGUISessionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/StopGUISessionCommandOutput/)
</details>
<details>
<summary>
StopInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/StopInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/StopInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/StopInstanceCommandOutput/)
</details>
<details>
<summary>
StopRelationalDatabase
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/StopRelationalDatabaseCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/StopRelationalDatabaseCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/StopRelationalDatabaseCommandOutput/)
</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/TagResourceCommandOutput/)
</details>
<details>
<summary>
TestAlarm
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/TestAlarmCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/TestAlarmCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/TestAlarmCommandOutput/)
</details>
<details>
<summary>
UnpeerVpc
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/UnpeerVpcCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/UnpeerVpcCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/UnpeerVpcCommandOutput/)
</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/UntagResourceCommandOutput/)
</details>
<details>
<summary>
UpdateBucket
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/UpdateBucketCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/UpdateBucketCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/UpdateBucketCommandOutput/)
</details>
<details>
<summary>
UpdateBucketBundle
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/UpdateBucketBundleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/UpdateBucketBundleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/UpdateBucketBundleCommandOutput/)
</details>
<details>
<summary>
UpdateContainerService
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/UpdateContainerServiceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/UpdateContainerServiceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/UpdateContainerServiceCommandOutput/)
</details>
<details>
<summary>
UpdateDistribution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/UpdateDistributionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/UpdateDistributionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/UpdateDistributionCommandOutput/)
</details>
<details>
<summary>
UpdateDistributionBundle
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/UpdateDistributionBundleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/UpdateDistributionBundleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/UpdateDistributionBundleCommandOutput/)
</details>
<details>
<summary>
UpdateDomainEntry
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/UpdateDomainEntryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/UpdateDomainEntryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/UpdateDomainEntryCommandOutput/)
</details>
<details>
<summary>
UpdateInstanceMetadataOptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/UpdateInstanceMetadataOptionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/UpdateInstanceMetadataOptionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/UpdateInstanceMetadataOptionsCommandOutput/)
</details>
<details>
<summary>
UpdateLoadBalancerAttribute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/UpdateLoadBalancerAttributeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/UpdateLoadBalancerAttributeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/UpdateLoadBalancerAttributeCommandOutput/)
</details>
<details>
<summary>
UpdateRelationalDatabase
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/UpdateRelationalDatabaseCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/UpdateRelationalDatabaseCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/UpdateRelationalDatabaseCommandOutput/)
</details>
<details>
<summary>
UpdateRelationalDatabaseParameters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lightsail/command/UpdateRelationalDatabaseParametersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/UpdateRelationalDatabaseParametersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lightsail/Interface/UpdateRelationalDatabaseParametersCommandOutput/)
</details>
