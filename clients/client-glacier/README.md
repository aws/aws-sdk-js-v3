<!-- generated file, do not edit directly -->

# @aws-sdk/client-glacier

## Description

AWS SDK for JavaScript Glacier Client for Node.js, Browser and React Native.

<p> Amazon S3 Glacier (Glacier) is a storage solution for "cold data."</p>

<p>Glacier is an extremely low-cost storage service that provides secure,
durable, and easy-to-use storage for data backup and archival. With Glacier,
customers can store their data cost effectively for months, years, or decades.
Glacier also enables customers to offload the administrative burdens of operating and
scaling storage to AWS, so they don't have to worry about capacity planning, hardware
provisioning, data replication, hardware failure and recovery, or time-consuming hardware
migrations.</p>

<p>Glacier is a great storage choice when low storage cost is paramount and your
data is rarely retrieved. If your
application requires fast or frequent access to your data, consider using Amazon S3. For
more information, see <a href="http://aws.amazon.com/s3/">Amazon Simple Storage Service
(Amazon S3)</a>.</p>

<p>You can store any kind of data in any format. There is no maximum limit on the total
amount of data you can store in Glacier.</p>

<p>If you are a first-time user of Glacier, we recommend that you begin by
reading the following sections in the <i>Amazon S3 Glacier Developer
Guide</i>:</p>
<ul>
<li>
<p>
<a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/introduction.html">What is
Amazon S3 Glacier</a> - This section of the Developer Guide describes the
underlying data model, the operations it supports, and the AWS SDKs that you can use
to interact with the service.</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/amazon-glacier-getting-started.html">Getting Started
with Amazon S3 Glacier</a> - The Getting Started section walks you through the
process of creating a vault, uploading archives, creating jobs to download archives,
retrieving the job output, and deleting archives.</p>
</li>
</ul>

## Installing

To install this package, simply type add or install @aws-sdk/client-glacier
using your favorite package manager:

- `npm install @aws-sdk/client-glacier`
- `yarn add @aws-sdk/client-glacier`
- `pnpm add @aws-sdk/client-glacier`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `GlacierClient` and
the commands you need, for example `ListVaultsCommand`:

```js
// ES5 example
const { GlacierClient, ListVaultsCommand } = require("@aws-sdk/client-glacier");
```

```ts
// ES6+ example
import { GlacierClient, ListVaultsCommand } from "@aws-sdk/client-glacier";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new GlacierClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListVaultsCommand(params);
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
import * as AWS from "@aws-sdk/client-glacier";
const client = new AWS.Glacier({ region: "REGION" });

// async/await.
try {
  const data = await client.listVaults(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listVaults(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listVaults(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-glacier` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AbortMultipartUpload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/glacier/command/AbortMultipartUploadCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/AbortMultipartUploadCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/AbortMultipartUploadCommandOutput/)

</details>
<details>
<summary>
AbortVaultLock
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/glacier/command/AbortVaultLockCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/AbortVaultLockCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/AbortVaultLockCommandOutput/)

</details>
<details>
<summary>
AddTagsToVault
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/glacier/command/AddTagsToVaultCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/AddTagsToVaultCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/AddTagsToVaultCommandOutput/)

</details>
<details>
<summary>
CompleteMultipartUpload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/glacier/command/CompleteMultipartUploadCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/CompleteMultipartUploadCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/CompleteMultipartUploadCommandOutput/)

</details>
<details>
<summary>
CompleteVaultLock
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/glacier/command/CompleteVaultLockCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/CompleteVaultLockCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/CompleteVaultLockCommandOutput/)

</details>
<details>
<summary>
CreateVault
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/glacier/command/CreateVaultCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/CreateVaultCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/CreateVaultCommandOutput/)

</details>
<details>
<summary>
DeleteArchive
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/glacier/command/DeleteArchiveCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/DeleteArchiveCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/DeleteArchiveCommandOutput/)

</details>
<details>
<summary>
DeleteVault
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/glacier/command/DeleteVaultCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/DeleteVaultCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/DeleteVaultCommandOutput/)

</details>
<details>
<summary>
DeleteVaultAccessPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/glacier/command/DeleteVaultAccessPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/DeleteVaultAccessPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/DeleteVaultAccessPolicyCommandOutput/)

</details>
<details>
<summary>
DeleteVaultNotifications
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/glacier/command/DeleteVaultNotificationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/DeleteVaultNotificationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/DeleteVaultNotificationsCommandOutput/)

</details>
<details>
<summary>
DescribeJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/glacier/command/DescribeJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/DescribeJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/DescribeJobCommandOutput/)

</details>
<details>
<summary>
DescribeVault
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/glacier/command/DescribeVaultCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/DescribeVaultCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/DescribeVaultCommandOutput/)

</details>
<details>
<summary>
GetDataRetrievalPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/glacier/command/GetDataRetrievalPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/GetDataRetrievalPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/GetDataRetrievalPolicyCommandOutput/)

</details>
<details>
<summary>
GetJobOutput
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/glacier/command/GetJobOutputCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/GetJobOutputCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/GetJobOutputCommandOutput/)

</details>
<details>
<summary>
GetVaultAccessPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/glacier/command/GetVaultAccessPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/GetVaultAccessPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/GetVaultAccessPolicyCommandOutput/)

</details>
<details>
<summary>
GetVaultLock
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/glacier/command/GetVaultLockCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/GetVaultLockCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/GetVaultLockCommandOutput/)

</details>
<details>
<summary>
GetVaultNotifications
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/glacier/command/GetVaultNotificationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/GetVaultNotificationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/GetVaultNotificationsCommandOutput/)

</details>
<details>
<summary>
InitiateJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/glacier/command/InitiateJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/InitiateJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/InitiateJobCommandOutput/)

</details>
<details>
<summary>
InitiateMultipartUpload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/glacier/command/InitiateMultipartUploadCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/InitiateMultipartUploadCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/InitiateMultipartUploadCommandOutput/)

</details>
<details>
<summary>
InitiateVaultLock
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/glacier/command/InitiateVaultLockCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/InitiateVaultLockCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/InitiateVaultLockCommandOutput/)

</details>
<details>
<summary>
ListJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/glacier/command/ListJobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/ListJobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/ListJobsCommandOutput/)

</details>
<details>
<summary>
ListMultipartUploads
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/glacier/command/ListMultipartUploadsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/ListMultipartUploadsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/ListMultipartUploadsCommandOutput/)

</details>
<details>
<summary>
ListParts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/glacier/command/ListPartsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/ListPartsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/ListPartsCommandOutput/)

</details>
<details>
<summary>
ListProvisionedCapacity
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/glacier/command/ListProvisionedCapacityCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/ListProvisionedCapacityCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/ListProvisionedCapacityCommandOutput/)

</details>
<details>
<summary>
ListTagsForVault
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/glacier/command/ListTagsForVaultCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/ListTagsForVaultCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/ListTagsForVaultCommandOutput/)

</details>
<details>
<summary>
ListVaults
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/glacier/command/ListVaultsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/ListVaultsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/ListVaultsCommandOutput/)

</details>
<details>
<summary>
PurchaseProvisionedCapacity
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/glacier/command/PurchaseProvisionedCapacityCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/PurchaseProvisionedCapacityCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/PurchaseProvisionedCapacityCommandOutput/)

</details>
<details>
<summary>
RemoveTagsFromVault
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/glacier/command/RemoveTagsFromVaultCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/RemoveTagsFromVaultCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/RemoveTagsFromVaultCommandOutput/)

</details>
<details>
<summary>
SetDataRetrievalPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/glacier/command/SetDataRetrievalPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/SetDataRetrievalPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/SetDataRetrievalPolicyCommandOutput/)

</details>
<details>
<summary>
SetVaultAccessPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/glacier/command/SetVaultAccessPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/SetVaultAccessPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/SetVaultAccessPolicyCommandOutput/)

</details>
<details>
<summary>
SetVaultNotifications
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/glacier/command/SetVaultNotificationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/SetVaultNotificationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/SetVaultNotificationsCommandOutput/)

</details>
<details>
<summary>
UploadArchive
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/glacier/command/UploadArchiveCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/UploadArchiveCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/UploadArchiveCommandOutput/)

</details>
<details>
<summary>
UploadMultipartPart
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/glacier/command/UploadMultipartPartCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/UploadMultipartPartCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-glacier/Interface/UploadMultipartPartCommandOutput/)

</details>
