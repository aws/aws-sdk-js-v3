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
concepts and tasks, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/lightsail-how-to-set-up-access-keys-to-use-sdk-api-cli">Amazon Lightsail Developer Guide</a>.</p>
<p>This API Reference provides detailed information about the actions, data types,
parameters, and errors of the Lightsail service. For more information about the supported
Amazon Web Services Regions, endpoints, and service quotas of the Lightsail service, see
<a href="https://docs.aws.amazon.com/general/latest/gr/lightsail.html">Amazon Lightsail Endpoints
and Quotas</a> in the <i>Amazon Web Services General Reference</i>.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-lightsail
using your favorite package manager:

- `npm install @aws-sdk/client-lightsail`
- `yarn add @aws-sdk/client-lightsail`
- `pnpm add @aws-sdk/client-lightsail`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `LightsailClient` and
the commands you need, for example `AllocateStaticIpCommand`:

```js
// ES5 example
const { LightsailClient, AllocateStaticIpCommand } = require("@aws-sdk/client-lightsail");
```

```ts
// ES6+ example
import { LightsailClient, AllocateStaticIpCommand } from "@aws-sdk/client-lightsail";
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

const params = {
  /** input parameters */
};
const command = new AllocateStaticIpCommand(params);
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
  const data = await client.allocateStaticIp(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .allocateStaticIp(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.allocateStaticIp(params, (err, data) => {
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/allocatestaticipcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/allocatestaticipcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/allocatestaticipcommandoutput.html)

</details>
<details>
<summary>
AttachCertificateToDistribution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/attachcertificatetodistributioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/attachcertificatetodistributioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/attachcertificatetodistributioncommandoutput.html)

</details>
<details>
<summary>
AttachDisk
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/attachdiskcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/attachdiskcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/attachdiskcommandoutput.html)

</details>
<details>
<summary>
AttachInstancesToLoadBalancer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/attachinstancestoloadbalancercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/attachinstancestoloadbalancercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/attachinstancestoloadbalancercommandoutput.html)

</details>
<details>
<summary>
AttachLoadBalancerTlsCertificate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/attachloadbalancertlscertificatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/attachloadbalancertlscertificatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/attachloadbalancertlscertificatecommandoutput.html)

</details>
<details>
<summary>
AttachStaticIp
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/attachstaticipcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/attachstaticipcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/attachstaticipcommandoutput.html)

</details>
<details>
<summary>
CloseInstancePublicPorts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/closeinstancepublicportscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/closeinstancepublicportscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/closeinstancepublicportscommandoutput.html)

</details>
<details>
<summary>
CopySnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/copysnapshotcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/copysnapshotcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/copysnapshotcommandoutput.html)

</details>
<details>
<summary>
CreateBucket
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/createbucketcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/createbucketcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/createbucketcommandoutput.html)

</details>
<details>
<summary>
CreateBucketAccessKey
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/createbucketaccesskeycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/createbucketaccesskeycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/createbucketaccesskeycommandoutput.html)

</details>
<details>
<summary>
CreateCertificate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/createcertificatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/createcertificatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/createcertificatecommandoutput.html)

</details>
<details>
<summary>
CreateCloudFormationStack
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/createcloudformationstackcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/createcloudformationstackcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/createcloudformationstackcommandoutput.html)

</details>
<details>
<summary>
CreateContactMethod
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/createcontactmethodcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/createcontactmethodcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/createcontactmethodcommandoutput.html)

</details>
<details>
<summary>
CreateContainerService
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/createcontainerservicecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/createcontainerservicecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/createcontainerservicecommandoutput.html)

</details>
<details>
<summary>
CreateContainerServiceDeployment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/createcontainerservicedeploymentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/createcontainerservicedeploymentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/createcontainerservicedeploymentcommandoutput.html)

</details>
<details>
<summary>
CreateContainerServiceRegistryLogin
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/createcontainerserviceregistrylogincommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/createcontainerserviceregistrylogincommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/createcontainerserviceregistrylogincommandoutput.html)

</details>
<details>
<summary>
CreateDisk
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/creatediskcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/creatediskcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/creatediskcommandoutput.html)

</details>
<details>
<summary>
CreateDiskFromSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/creatediskfromsnapshotcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/creatediskfromsnapshotcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/creatediskfromsnapshotcommandoutput.html)

</details>
<details>
<summary>
CreateDiskSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/createdisksnapshotcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/createdisksnapshotcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/createdisksnapshotcommandoutput.html)

</details>
<details>
<summary>
CreateDistribution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/createdistributioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/createdistributioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/createdistributioncommandoutput.html)

</details>
<details>
<summary>
CreateDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/createdomaincommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/createdomaincommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/createdomaincommandoutput.html)

</details>
<details>
<summary>
CreateDomainEntry
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/createdomainentrycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/createdomainentrycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/createdomainentrycommandoutput.html)

</details>
<details>
<summary>
CreateGUISessionAccessDetails
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/createguisessionaccessdetailscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/createguisessionaccessdetailscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/createguisessionaccessdetailscommandoutput.html)

</details>
<details>
<summary>
CreateInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/createinstancescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/createinstancescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/createinstancescommandoutput.html)

</details>
<details>
<summary>
CreateInstancesFromSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/createinstancesfromsnapshotcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/createinstancesfromsnapshotcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/createinstancesfromsnapshotcommandoutput.html)

</details>
<details>
<summary>
CreateInstanceSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/createinstancesnapshotcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/createinstancesnapshotcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/createinstancesnapshotcommandoutput.html)

</details>
<details>
<summary>
CreateKeyPair
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/createkeypaircommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/createkeypaircommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/createkeypaircommandoutput.html)

</details>
<details>
<summary>
CreateLoadBalancer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/createloadbalancercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/createloadbalancercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/createloadbalancercommandoutput.html)

</details>
<details>
<summary>
CreateLoadBalancerTlsCertificate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/createloadbalancertlscertificatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/createloadbalancertlscertificatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/createloadbalancertlscertificatecommandoutput.html)

</details>
<details>
<summary>
CreateRelationalDatabase
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/createrelationaldatabasecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/createrelationaldatabasecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/createrelationaldatabasecommandoutput.html)

</details>
<details>
<summary>
CreateRelationalDatabaseFromSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/createrelationaldatabasefromsnapshotcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/createrelationaldatabasefromsnapshotcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/createrelationaldatabasefromsnapshotcommandoutput.html)

</details>
<details>
<summary>
CreateRelationalDatabaseSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/createrelationaldatabasesnapshotcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/createrelationaldatabasesnapshotcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/createrelationaldatabasesnapshotcommandoutput.html)

</details>
<details>
<summary>
DeleteAlarm
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/deletealarmcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/deletealarmcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/deletealarmcommandoutput.html)

</details>
<details>
<summary>
DeleteAutoSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/deleteautosnapshotcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/deleteautosnapshotcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/deleteautosnapshotcommandoutput.html)

</details>
<details>
<summary>
DeleteBucket
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/deletebucketcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/deletebucketcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/deletebucketcommandoutput.html)

</details>
<details>
<summary>
DeleteBucketAccessKey
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/deletebucketaccesskeycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/deletebucketaccesskeycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/deletebucketaccesskeycommandoutput.html)

</details>
<details>
<summary>
DeleteCertificate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/deletecertificatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/deletecertificatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/deletecertificatecommandoutput.html)

</details>
<details>
<summary>
DeleteContactMethod
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/deletecontactmethodcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/deletecontactmethodcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/deletecontactmethodcommandoutput.html)

</details>
<details>
<summary>
DeleteContainerImage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/deletecontainerimagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/deletecontainerimagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/deletecontainerimagecommandoutput.html)

</details>
<details>
<summary>
DeleteContainerService
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/deletecontainerservicecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/deletecontainerservicecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/deletecontainerservicecommandoutput.html)

</details>
<details>
<summary>
DeleteDisk
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/deletediskcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/deletediskcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/deletediskcommandoutput.html)

</details>
<details>
<summary>
DeleteDiskSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/deletedisksnapshotcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/deletedisksnapshotcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/deletedisksnapshotcommandoutput.html)

</details>
<details>
<summary>
DeleteDistribution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/deletedistributioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/deletedistributioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/deletedistributioncommandoutput.html)

</details>
<details>
<summary>
DeleteDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/deletedomaincommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/deletedomaincommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/deletedomaincommandoutput.html)

</details>
<details>
<summary>
DeleteDomainEntry
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/deletedomainentrycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/deletedomainentrycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/deletedomainentrycommandoutput.html)

</details>
<details>
<summary>
DeleteInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/deleteinstancecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/deleteinstancecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/deleteinstancecommandoutput.html)

</details>
<details>
<summary>
DeleteInstanceSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/deleteinstancesnapshotcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/deleteinstancesnapshotcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/deleteinstancesnapshotcommandoutput.html)

</details>
<details>
<summary>
DeleteKeyPair
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/deletekeypaircommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/deletekeypaircommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/deletekeypaircommandoutput.html)

</details>
<details>
<summary>
DeleteKnownHostKeys
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/deleteknownhostkeyscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/deleteknownhostkeyscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/deleteknownhostkeyscommandoutput.html)

</details>
<details>
<summary>
DeleteLoadBalancer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/deleteloadbalancercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/deleteloadbalancercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/deleteloadbalancercommandoutput.html)

</details>
<details>
<summary>
DeleteLoadBalancerTlsCertificate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/deleteloadbalancertlscertificatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/deleteloadbalancertlscertificatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/deleteloadbalancertlscertificatecommandoutput.html)

</details>
<details>
<summary>
DeleteRelationalDatabase
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/deleterelationaldatabasecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/deleterelationaldatabasecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/deleterelationaldatabasecommandoutput.html)

</details>
<details>
<summary>
DeleteRelationalDatabaseSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/deleterelationaldatabasesnapshotcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/deleterelationaldatabasesnapshotcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/deleterelationaldatabasesnapshotcommandoutput.html)

</details>
<details>
<summary>
DetachCertificateFromDistribution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/detachcertificatefromdistributioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/detachcertificatefromdistributioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/detachcertificatefromdistributioncommandoutput.html)

</details>
<details>
<summary>
DetachDisk
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/detachdiskcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/detachdiskcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/detachdiskcommandoutput.html)

</details>
<details>
<summary>
DetachInstancesFromLoadBalancer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/detachinstancesfromloadbalancercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/detachinstancesfromloadbalancercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/detachinstancesfromloadbalancercommandoutput.html)

</details>
<details>
<summary>
DetachStaticIp
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/detachstaticipcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/detachstaticipcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/detachstaticipcommandoutput.html)

</details>
<details>
<summary>
DisableAddOn
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/disableaddoncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/disableaddoncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/disableaddoncommandoutput.html)

</details>
<details>
<summary>
DownloadDefaultKeyPair
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/downloaddefaultkeypaircommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/downloaddefaultkeypaircommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/downloaddefaultkeypaircommandoutput.html)

</details>
<details>
<summary>
EnableAddOn
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/enableaddoncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/enableaddoncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/enableaddoncommandoutput.html)

</details>
<details>
<summary>
ExportSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/exportsnapshotcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/exportsnapshotcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/exportsnapshotcommandoutput.html)

</details>
<details>
<summary>
GetActiveNames
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getactivenamescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getactivenamescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getactivenamescommandoutput.html)

</details>
<details>
<summary>
GetAlarms
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getalarmscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getalarmscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getalarmscommandoutput.html)

</details>
<details>
<summary>
GetAutoSnapshots
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getautosnapshotscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getautosnapshotscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getautosnapshotscommandoutput.html)

</details>
<details>
<summary>
GetBlueprints
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getblueprintscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getblueprintscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getblueprintscommandoutput.html)

</details>
<details>
<summary>
GetBucketAccessKeys
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getbucketaccesskeyscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getbucketaccesskeyscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getbucketaccesskeyscommandoutput.html)

</details>
<details>
<summary>
GetBucketBundles
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getbucketbundlescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getbucketbundlescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getbucketbundlescommandoutput.html)

</details>
<details>
<summary>
GetBucketMetricData
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getbucketmetricdatacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getbucketmetricdatacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getbucketmetricdatacommandoutput.html)

</details>
<details>
<summary>
GetBuckets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getbucketscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getbucketscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getbucketscommandoutput.html)

</details>
<details>
<summary>
GetBundles
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getbundlescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getbundlescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getbundlescommandoutput.html)

</details>
<details>
<summary>
GetCertificates
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getcertificatescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getcertificatescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getcertificatescommandoutput.html)

</details>
<details>
<summary>
GetCloudFormationStackRecords
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getcloudformationstackrecordscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getcloudformationstackrecordscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getcloudformationstackrecordscommandoutput.html)

</details>
<details>
<summary>
GetContactMethods
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getcontactmethodscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getcontactmethodscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getcontactmethodscommandoutput.html)

</details>
<details>
<summary>
GetContainerAPIMetadata
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getcontainerapimetadatacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getcontainerapimetadatacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getcontainerapimetadatacommandoutput.html)

</details>
<details>
<summary>
GetContainerImages
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getcontainerimagescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getcontainerimagescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getcontainerimagescommandoutput.html)

</details>
<details>
<summary>
GetContainerLog
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getcontainerlogcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getcontainerlogcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getcontainerlogcommandoutput.html)

</details>
<details>
<summary>
GetContainerServiceDeployments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getcontainerservicedeploymentscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getcontainerservicedeploymentscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getcontainerservicedeploymentscommandoutput.html)

</details>
<details>
<summary>
GetContainerServiceMetricData
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getcontainerservicemetricdatacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getcontainerservicemetricdatacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getcontainerservicemetricdatacommandoutput.html)

</details>
<details>
<summary>
GetContainerServicePowers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getcontainerservicepowerscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getcontainerservicepowerscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getcontainerservicepowerscommandoutput.html)

</details>
<details>
<summary>
GetContainerServices
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getcontainerservicescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getcontainerservicescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getcontainerservicescommandoutput.html)

</details>
<details>
<summary>
GetCostEstimate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getcostestimatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getcostestimatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getcostestimatecommandoutput.html)

</details>
<details>
<summary>
GetDisk
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getdiskcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getdiskcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getdiskcommandoutput.html)

</details>
<details>
<summary>
GetDisks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getdiskscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getdiskscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getdiskscommandoutput.html)

</details>
<details>
<summary>
GetDiskSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getdisksnapshotcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getdisksnapshotcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getdisksnapshotcommandoutput.html)

</details>
<details>
<summary>
GetDiskSnapshots
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getdisksnapshotscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getdisksnapshotscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getdisksnapshotscommandoutput.html)

</details>
<details>
<summary>
GetDistributionBundles
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getdistributionbundlescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getdistributionbundlescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getdistributionbundlescommandoutput.html)

</details>
<details>
<summary>
GetDistributionLatestCacheReset
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getdistributionlatestcacheresetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getdistributionlatestcacheresetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getdistributionlatestcacheresetcommandoutput.html)

</details>
<details>
<summary>
GetDistributionMetricData
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getdistributionmetricdatacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getdistributionmetricdatacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getdistributionmetricdatacommandoutput.html)

</details>
<details>
<summary>
GetDistributions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getdistributionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getdistributionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getdistributionscommandoutput.html)

</details>
<details>
<summary>
GetDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getdomaincommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getdomaincommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getdomaincommandoutput.html)

</details>
<details>
<summary>
GetDomains
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getdomainscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getdomainscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getdomainscommandoutput.html)

</details>
<details>
<summary>
GetExportSnapshotRecords
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getexportsnapshotrecordscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getexportsnapshotrecordscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getexportsnapshotrecordscommandoutput.html)

</details>
<details>
<summary>
GetInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getinstancecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getinstancecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getinstancecommandoutput.html)

</details>
<details>
<summary>
GetInstanceAccessDetails
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getinstanceaccessdetailscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getinstanceaccessdetailscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getinstanceaccessdetailscommandoutput.html)

</details>
<details>
<summary>
GetInstanceMetricData
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getinstancemetricdatacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getinstancemetricdatacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getinstancemetricdatacommandoutput.html)

</details>
<details>
<summary>
GetInstancePortStates
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getinstanceportstatescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getinstanceportstatescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getinstanceportstatescommandoutput.html)

</details>
<details>
<summary>
GetInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getinstancescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getinstancescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getinstancescommandoutput.html)

</details>
<details>
<summary>
GetInstanceSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getinstancesnapshotcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getinstancesnapshotcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getinstancesnapshotcommandoutput.html)

</details>
<details>
<summary>
GetInstanceSnapshots
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getinstancesnapshotscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getinstancesnapshotscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getinstancesnapshotscommandoutput.html)

</details>
<details>
<summary>
GetInstanceState
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getinstancestatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getinstancestatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getinstancestatecommandoutput.html)

</details>
<details>
<summary>
GetKeyPair
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getkeypaircommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getkeypaircommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getkeypaircommandoutput.html)

</details>
<details>
<summary>
GetKeyPairs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getkeypairscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getkeypairscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getkeypairscommandoutput.html)

</details>
<details>
<summary>
GetLoadBalancer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getloadbalancercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getloadbalancercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getloadbalancercommandoutput.html)

</details>
<details>
<summary>
GetLoadBalancerMetricData
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getloadbalancermetricdatacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getloadbalancermetricdatacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getloadbalancermetricdatacommandoutput.html)

</details>
<details>
<summary>
GetLoadBalancers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getloadbalancerscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getloadbalancerscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getloadbalancerscommandoutput.html)

</details>
<details>
<summary>
GetLoadBalancerTlsCertificates
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getloadbalancertlscertificatescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getloadbalancertlscertificatescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getloadbalancertlscertificatescommandoutput.html)

</details>
<details>
<summary>
GetLoadBalancerTlsPolicies
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getloadbalancertlspoliciescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getloadbalancertlspoliciescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getloadbalancertlspoliciescommandoutput.html)

</details>
<details>
<summary>
GetOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getoperationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getoperationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getoperationcommandoutput.html)

</details>
<details>
<summary>
GetOperations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getoperationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getoperationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getoperationscommandoutput.html)

</details>
<details>
<summary>
GetOperationsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getoperationsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getoperationsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getoperationsforresourcecommandoutput.html)

</details>
<details>
<summary>
GetRegions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getregionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getregionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getregionscommandoutput.html)

</details>
<details>
<summary>
GetRelationalDatabase
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getrelationaldatabasecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getrelationaldatabasecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getrelationaldatabasecommandoutput.html)

</details>
<details>
<summary>
GetRelationalDatabaseBlueprints
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getrelationaldatabaseblueprintscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getrelationaldatabaseblueprintscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getrelationaldatabaseblueprintscommandoutput.html)

</details>
<details>
<summary>
GetRelationalDatabaseBundles
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getrelationaldatabasebundlescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getrelationaldatabasebundlescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getrelationaldatabasebundlescommandoutput.html)

</details>
<details>
<summary>
GetRelationalDatabaseEvents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getrelationaldatabaseeventscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getrelationaldatabaseeventscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getrelationaldatabaseeventscommandoutput.html)

</details>
<details>
<summary>
GetRelationalDatabaseLogEvents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getrelationaldatabaselogeventscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getrelationaldatabaselogeventscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getrelationaldatabaselogeventscommandoutput.html)

</details>
<details>
<summary>
GetRelationalDatabaseLogStreams
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getrelationaldatabaselogstreamscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getrelationaldatabaselogstreamscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getrelationaldatabaselogstreamscommandoutput.html)

</details>
<details>
<summary>
GetRelationalDatabaseMasterUserPassword
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getrelationaldatabasemasteruserpasswordcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getrelationaldatabasemasteruserpasswordcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getrelationaldatabasemasteruserpasswordcommandoutput.html)

</details>
<details>
<summary>
GetRelationalDatabaseMetricData
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getrelationaldatabasemetricdatacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getrelationaldatabasemetricdatacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getrelationaldatabasemetricdatacommandoutput.html)

</details>
<details>
<summary>
GetRelationalDatabaseParameters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getrelationaldatabaseparameterscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getrelationaldatabaseparameterscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getrelationaldatabaseparameterscommandoutput.html)

</details>
<details>
<summary>
GetRelationalDatabases
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getrelationaldatabasescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getrelationaldatabasescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getrelationaldatabasescommandoutput.html)

</details>
<details>
<summary>
GetRelationalDatabaseSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getrelationaldatabasesnapshotcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getrelationaldatabasesnapshotcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getrelationaldatabasesnapshotcommandoutput.html)

</details>
<details>
<summary>
GetRelationalDatabaseSnapshots
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getrelationaldatabasesnapshotscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getrelationaldatabasesnapshotscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getrelationaldatabasesnapshotscommandoutput.html)

</details>
<details>
<summary>
GetStaticIp
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getstaticipcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getstaticipcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getstaticipcommandoutput.html)

</details>
<details>
<summary>
GetStaticIps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/getstaticipscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getstaticipscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/getstaticipscommandoutput.html)

</details>
<details>
<summary>
ImportKeyPair
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/importkeypaircommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/importkeypaircommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/importkeypaircommandoutput.html)

</details>
<details>
<summary>
IsVpcPeered
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/isvpcpeeredcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/isvpcpeeredcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/isvpcpeeredcommandoutput.html)

</details>
<details>
<summary>
OpenInstancePublicPorts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/openinstancepublicportscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/openinstancepublicportscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/openinstancepublicportscommandoutput.html)

</details>
<details>
<summary>
PeerVpc
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/peervpccommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/peervpccommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/peervpccommandoutput.html)

</details>
<details>
<summary>
PutAlarm
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/putalarmcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/putalarmcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/putalarmcommandoutput.html)

</details>
<details>
<summary>
PutInstancePublicPorts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/putinstancepublicportscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/putinstancepublicportscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/putinstancepublicportscommandoutput.html)

</details>
<details>
<summary>
RebootInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/rebootinstancecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/rebootinstancecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/rebootinstancecommandoutput.html)

</details>
<details>
<summary>
RebootRelationalDatabase
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/rebootrelationaldatabasecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/rebootrelationaldatabasecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/rebootrelationaldatabasecommandoutput.html)

</details>
<details>
<summary>
RegisterContainerImage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/registercontainerimagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/registercontainerimagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/registercontainerimagecommandoutput.html)

</details>
<details>
<summary>
ReleaseStaticIp
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/releasestaticipcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/releasestaticipcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/releasestaticipcommandoutput.html)

</details>
<details>
<summary>
ResetDistributionCache
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/resetdistributioncachecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/resetdistributioncachecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/resetdistributioncachecommandoutput.html)

</details>
<details>
<summary>
SendContactMethodVerification
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/sendcontactmethodverificationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/sendcontactmethodverificationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/sendcontactmethodverificationcommandoutput.html)

</details>
<details>
<summary>
SetIpAddressType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/setipaddresstypecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/setipaddresstypecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/setipaddresstypecommandoutput.html)

</details>
<details>
<summary>
SetResourceAccessForBucket
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/setresourceaccessforbucketcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/setresourceaccessforbucketcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/setresourceaccessforbucketcommandoutput.html)

</details>
<details>
<summary>
StartGUISession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/startguisessioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/startguisessioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/startguisessioncommandoutput.html)

</details>
<details>
<summary>
StartInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/startinstancecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/startinstancecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/startinstancecommandoutput.html)

</details>
<details>
<summary>
StartRelationalDatabase
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/startrelationaldatabasecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/startrelationaldatabasecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/startrelationaldatabasecommandoutput.html)

</details>
<details>
<summary>
StopGUISession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/stopguisessioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/stopguisessioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/stopguisessioncommandoutput.html)

</details>
<details>
<summary>
StopInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/stopinstancecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/stopinstancecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/stopinstancecommandoutput.html)

</details>
<details>
<summary>
StopRelationalDatabase
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/stoprelationaldatabasecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/stoprelationaldatabasecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/stoprelationaldatabasecommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
TestAlarm
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/testalarmcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/testalarmcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/testalarmcommandoutput.html)

</details>
<details>
<summary>
UnpeerVpc
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/unpeervpccommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/unpeervpccommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/unpeervpccommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateBucket
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/updatebucketcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/updatebucketcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/updatebucketcommandoutput.html)

</details>
<details>
<summary>
UpdateBucketBundle
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/updatebucketbundlecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/updatebucketbundlecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/updatebucketbundlecommandoutput.html)

</details>
<details>
<summary>
UpdateContainerService
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/updatecontainerservicecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/updatecontainerservicecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/updatecontainerservicecommandoutput.html)

</details>
<details>
<summary>
UpdateDistribution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/updatedistributioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/updatedistributioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/updatedistributioncommandoutput.html)

</details>
<details>
<summary>
UpdateDistributionBundle
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/updatedistributionbundlecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/updatedistributionbundlecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/updatedistributionbundlecommandoutput.html)

</details>
<details>
<summary>
UpdateDomainEntry
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/updatedomainentrycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/updatedomainentrycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/updatedomainentrycommandoutput.html)

</details>
<details>
<summary>
UpdateInstanceMetadataOptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/updateinstancemetadataoptionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/updateinstancemetadataoptionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/updateinstancemetadataoptionscommandoutput.html)

</details>
<details>
<summary>
UpdateLoadBalancerAttribute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/updateloadbalancerattributecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/updateloadbalancerattributecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/updateloadbalancerattributecommandoutput.html)

</details>
<details>
<summary>
UpdateRelationalDatabase
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/updaterelationaldatabasecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/updaterelationaldatabasecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/updaterelationaldatabasecommandoutput.html)

</details>
<details>
<summary>
UpdateRelationalDatabaseParameters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/classes/updaterelationaldatabaseparameterscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/updaterelationaldatabaseparameterscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lightsail/interfaces/updaterelationaldatabaseparameterscommandoutput.html)

</details>
