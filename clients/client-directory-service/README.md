<!-- generated file, do not edit directly -->

# @aws-sdk/client-directory-service

## Description

AWS SDK for JavaScript DirectoryService Client for Node.js, Browser and React Native.

<fullname>Directory Service</fullname>

<p>Directory Service is a web service that makes it easy for you to setup and run directories in the
Amazon Web Services cloud, or connect your Amazon Web Services resources with an existing self-managed Microsoft Active
Directory. This guide provides detailed information about Directory Service operations, data types,
parameters, and errors. For information about Directory Services features, see <a href="https://aws.amazon.com/directoryservice/">Directory Service</a> and the <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/what_is.html">Directory Service
Administration Guide</a>.</p>
<note>
<p>Amazon Web Services provides SDKs that consist of libraries and sample code for various
programming languages and platforms (Java, Ruby, .Net, iOS, Android, etc.). The SDKs
provide a convenient way to create programmatic access to Directory Service and other Amazon Web Services
services. For more information about the Amazon Web Services SDKs, including how to download and
install them, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web
Services</a>.</p>
</note>

## Installing

To install this package, simply type add or install @aws-sdk/client-directory-service
using your favorite package manager:

- `npm install @aws-sdk/client-directory-service`
- `yarn add @aws-sdk/client-directory-service`
- `pnpm add @aws-sdk/client-directory-service`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `DirectoryServiceClient` and
the commands you need, for example `ListADAssessmentsCommand`:

```js
// ES5 example
const { DirectoryServiceClient, ListADAssessmentsCommand } = require("@aws-sdk/client-directory-service");
```

```ts
// ES6+ example
import { DirectoryServiceClient, ListADAssessmentsCommand } from "@aws-sdk/client-directory-service";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new DirectoryServiceClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListADAssessmentsCommand(params);
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
import * as AWS from "@aws-sdk/client-directory-service";
const client = new AWS.DirectoryService({ region: "REGION" });

// async/await.
try {
  const data = await client.listADAssessments(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listADAssessments(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listADAssessments(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-directory-service` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AcceptSharedDirectory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/AcceptSharedDirectoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/AcceptSharedDirectoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/AcceptSharedDirectoryCommandOutput/)

</details>
<details>
<summary>
AddIpRoutes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/AddIpRoutesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/AddIpRoutesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/AddIpRoutesCommandOutput/)

</details>
<details>
<summary>
AddRegion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/AddRegionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/AddRegionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/AddRegionCommandOutput/)

</details>
<details>
<summary>
AddTagsToResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/AddTagsToResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/AddTagsToResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/AddTagsToResourceCommandOutput/)

</details>
<details>
<summary>
CancelSchemaExtension
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/CancelSchemaExtensionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/CancelSchemaExtensionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/CancelSchemaExtensionCommandOutput/)

</details>
<details>
<summary>
ConnectDirectory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/ConnectDirectoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/ConnectDirectoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/ConnectDirectoryCommandOutput/)

</details>
<details>
<summary>
CreateAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/CreateAliasCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/CreateAliasCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/CreateAliasCommandOutput/)

</details>
<details>
<summary>
CreateComputer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/CreateComputerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/CreateComputerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/CreateComputerCommandOutput/)

</details>
<details>
<summary>
CreateConditionalForwarder
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/CreateConditionalForwarderCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/CreateConditionalForwarderCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/CreateConditionalForwarderCommandOutput/)

</details>
<details>
<summary>
CreateDirectory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/CreateDirectoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/CreateDirectoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/CreateDirectoryCommandOutput/)

</details>
<details>
<summary>
CreateHybridAD
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/CreateHybridADCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/CreateHybridADCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/CreateHybridADCommandOutput/)

</details>
<details>
<summary>
CreateLogSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/CreateLogSubscriptionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/CreateLogSubscriptionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/CreateLogSubscriptionCommandOutput/)

</details>
<details>
<summary>
CreateMicrosoftAD
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/CreateMicrosoftADCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/CreateMicrosoftADCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/CreateMicrosoftADCommandOutput/)

</details>
<details>
<summary>
CreateSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/CreateSnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/CreateSnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/CreateSnapshotCommandOutput/)

</details>
<details>
<summary>
CreateTrust
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/CreateTrustCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/CreateTrustCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/CreateTrustCommandOutput/)

</details>
<details>
<summary>
DeleteADAssessment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/DeleteADAssessmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/DeleteADAssessmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/DeleteADAssessmentCommandOutput/)

</details>
<details>
<summary>
DeleteConditionalForwarder
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/DeleteConditionalForwarderCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/DeleteConditionalForwarderCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/DeleteConditionalForwarderCommandOutput/)

</details>
<details>
<summary>
DeleteDirectory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/DeleteDirectoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/DeleteDirectoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/DeleteDirectoryCommandOutput/)

</details>
<details>
<summary>
DeleteLogSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/DeleteLogSubscriptionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/DeleteLogSubscriptionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/DeleteLogSubscriptionCommandOutput/)

</details>
<details>
<summary>
DeleteSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/DeleteSnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/DeleteSnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/DeleteSnapshotCommandOutput/)

</details>
<details>
<summary>
DeleteTrust
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/DeleteTrustCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/DeleteTrustCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/DeleteTrustCommandOutput/)

</details>
<details>
<summary>
DeregisterCertificate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/DeregisterCertificateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/DeregisterCertificateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/DeregisterCertificateCommandOutput/)

</details>
<details>
<summary>
DeregisterEventTopic
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/DeregisterEventTopicCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/DeregisterEventTopicCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/DeregisterEventTopicCommandOutput/)

</details>
<details>
<summary>
DescribeADAssessment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/DescribeADAssessmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/DescribeADAssessmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/DescribeADAssessmentCommandOutput/)

</details>
<details>
<summary>
DescribeCertificate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/DescribeCertificateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/DescribeCertificateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/DescribeCertificateCommandOutput/)

</details>
<details>
<summary>
DescribeClientAuthenticationSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/DescribeClientAuthenticationSettingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/DescribeClientAuthenticationSettingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/DescribeClientAuthenticationSettingsCommandOutput/)

</details>
<details>
<summary>
DescribeConditionalForwarders
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/DescribeConditionalForwardersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/DescribeConditionalForwardersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/DescribeConditionalForwardersCommandOutput/)

</details>
<details>
<summary>
DescribeDirectories
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/DescribeDirectoriesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/DescribeDirectoriesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/DescribeDirectoriesCommandOutput/)

</details>
<details>
<summary>
DescribeDirectoryDataAccess
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/DescribeDirectoryDataAccessCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/DescribeDirectoryDataAccessCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/DescribeDirectoryDataAccessCommandOutput/)

</details>
<details>
<summary>
DescribeDomainControllers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/DescribeDomainControllersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/DescribeDomainControllersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/DescribeDomainControllersCommandOutput/)

</details>
<details>
<summary>
DescribeEventTopics
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/DescribeEventTopicsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/DescribeEventTopicsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/DescribeEventTopicsCommandOutput/)

</details>
<details>
<summary>
DescribeHybridADUpdate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/DescribeHybridADUpdateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/DescribeHybridADUpdateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/DescribeHybridADUpdateCommandOutput/)

</details>
<details>
<summary>
DescribeLDAPSSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/DescribeLDAPSSettingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/DescribeLDAPSSettingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/DescribeLDAPSSettingsCommandOutput/)

</details>
<details>
<summary>
DescribeRegions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/DescribeRegionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/DescribeRegionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/DescribeRegionsCommandOutput/)

</details>
<details>
<summary>
DescribeSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/DescribeSettingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/DescribeSettingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/DescribeSettingsCommandOutput/)

</details>
<details>
<summary>
DescribeSharedDirectories
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/DescribeSharedDirectoriesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/DescribeSharedDirectoriesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/DescribeSharedDirectoriesCommandOutput/)

</details>
<details>
<summary>
DescribeSnapshots
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/DescribeSnapshotsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/DescribeSnapshotsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/DescribeSnapshotsCommandOutput/)

</details>
<details>
<summary>
DescribeTrusts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/DescribeTrustsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/DescribeTrustsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/DescribeTrustsCommandOutput/)

</details>
<details>
<summary>
DescribeUpdateDirectory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/DescribeUpdateDirectoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/DescribeUpdateDirectoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/DescribeUpdateDirectoryCommandOutput/)

</details>
<details>
<summary>
DisableClientAuthentication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/DisableClientAuthenticationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/DisableClientAuthenticationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/DisableClientAuthenticationCommandOutput/)

</details>
<details>
<summary>
DisableDirectoryDataAccess
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/DisableDirectoryDataAccessCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/DisableDirectoryDataAccessCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/DisableDirectoryDataAccessCommandOutput/)

</details>
<details>
<summary>
DisableLDAPS
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/DisableLDAPSCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/DisableLDAPSCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/DisableLDAPSCommandOutput/)

</details>
<details>
<summary>
DisableRadius
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/DisableRadiusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/DisableRadiusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/DisableRadiusCommandOutput/)

</details>
<details>
<summary>
DisableSso
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/DisableSsoCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/DisableSsoCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/DisableSsoCommandOutput/)

</details>
<details>
<summary>
EnableClientAuthentication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/EnableClientAuthenticationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/EnableClientAuthenticationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/EnableClientAuthenticationCommandOutput/)

</details>
<details>
<summary>
EnableDirectoryDataAccess
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/EnableDirectoryDataAccessCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/EnableDirectoryDataAccessCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/EnableDirectoryDataAccessCommandOutput/)

</details>
<details>
<summary>
EnableLDAPS
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/EnableLDAPSCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/EnableLDAPSCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/EnableLDAPSCommandOutput/)

</details>
<details>
<summary>
EnableRadius
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/EnableRadiusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/EnableRadiusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/EnableRadiusCommandOutput/)

</details>
<details>
<summary>
EnableSso
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/EnableSsoCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/EnableSsoCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/EnableSsoCommandOutput/)

</details>
<details>
<summary>
GetDirectoryLimits
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/GetDirectoryLimitsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/GetDirectoryLimitsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/GetDirectoryLimitsCommandOutput/)

</details>
<details>
<summary>
GetSnapshotLimits
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/GetSnapshotLimitsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/GetSnapshotLimitsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/GetSnapshotLimitsCommandOutput/)

</details>
<details>
<summary>
ListADAssessments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/ListADAssessmentsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/ListADAssessmentsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/ListADAssessmentsCommandOutput/)

</details>
<details>
<summary>
ListCertificates
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/ListCertificatesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/ListCertificatesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/ListCertificatesCommandOutput/)

</details>
<details>
<summary>
ListIpRoutes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/ListIpRoutesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/ListIpRoutesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/ListIpRoutesCommandOutput/)

</details>
<details>
<summary>
ListLogSubscriptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/ListLogSubscriptionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/ListLogSubscriptionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/ListLogSubscriptionsCommandOutput/)

</details>
<details>
<summary>
ListSchemaExtensions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/ListSchemaExtensionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/ListSchemaExtensionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/ListSchemaExtensionsCommandOutput/)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/ListTagsForResourceCommandOutput/)

</details>
<details>
<summary>
RegisterCertificate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/RegisterCertificateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/RegisterCertificateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/RegisterCertificateCommandOutput/)

</details>
<details>
<summary>
RegisterEventTopic
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/RegisterEventTopicCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/RegisterEventTopicCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/RegisterEventTopicCommandOutput/)

</details>
<details>
<summary>
RejectSharedDirectory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/RejectSharedDirectoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/RejectSharedDirectoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/RejectSharedDirectoryCommandOutput/)

</details>
<details>
<summary>
RemoveIpRoutes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/RemoveIpRoutesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/RemoveIpRoutesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/RemoveIpRoutesCommandOutput/)

</details>
<details>
<summary>
RemoveRegion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/RemoveRegionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/RemoveRegionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/RemoveRegionCommandOutput/)

</details>
<details>
<summary>
RemoveTagsFromResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/RemoveTagsFromResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/RemoveTagsFromResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/RemoveTagsFromResourceCommandOutput/)

</details>
<details>
<summary>
ResetUserPassword
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/ResetUserPasswordCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/ResetUserPasswordCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/ResetUserPasswordCommandOutput/)

</details>
<details>
<summary>
RestoreFromSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/RestoreFromSnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/RestoreFromSnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/RestoreFromSnapshotCommandOutput/)

</details>
<details>
<summary>
ShareDirectory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/ShareDirectoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/ShareDirectoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/ShareDirectoryCommandOutput/)

</details>
<details>
<summary>
StartADAssessment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/StartADAssessmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/StartADAssessmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/StartADAssessmentCommandOutput/)

</details>
<details>
<summary>
StartSchemaExtension
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/StartSchemaExtensionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/StartSchemaExtensionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/StartSchemaExtensionCommandOutput/)

</details>
<details>
<summary>
UnshareDirectory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/UnshareDirectoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/UnshareDirectoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/UnshareDirectoryCommandOutput/)

</details>
<details>
<summary>
UpdateConditionalForwarder
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/UpdateConditionalForwarderCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/UpdateConditionalForwarderCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/UpdateConditionalForwarderCommandOutput/)

</details>
<details>
<summary>
UpdateDirectorySetup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/UpdateDirectorySetupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/UpdateDirectorySetupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/UpdateDirectorySetupCommandOutput/)

</details>
<details>
<summary>
UpdateHybridAD
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/UpdateHybridADCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/UpdateHybridADCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/UpdateHybridADCommandOutput/)

</details>
<details>
<summary>
UpdateNumberOfDomainControllers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/UpdateNumberOfDomainControllersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/UpdateNumberOfDomainControllersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/UpdateNumberOfDomainControllersCommandOutput/)

</details>
<details>
<summary>
UpdateRadius
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/UpdateRadiusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/UpdateRadiusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/UpdateRadiusCommandOutput/)

</details>
<details>
<summary>
UpdateSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/UpdateSettingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/UpdateSettingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/UpdateSettingsCommandOutput/)

</details>
<details>
<summary>
UpdateTrust
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/UpdateTrustCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/UpdateTrustCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/UpdateTrustCommandOutput/)

</details>
<details>
<summary>
VerifyTrust
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service/command/VerifyTrustCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/VerifyTrustCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service/Interface/VerifyTrustCommandOutput/)

</details>
