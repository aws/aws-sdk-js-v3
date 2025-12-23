<!-- generated file, do not edit directly -->

# @aws-sdk/client-storage-gateway

## Description

AWS SDK for JavaScript StorageGateway Client for Node.js, Browser and React Native.

<fullname>Storage Gateway Service</fullname>
<important>
<p>Amazon FSx File Gateway is no longer available to new customers. Existing
customers of FSx File Gateway can continue to use the service normally. For
capabilities similar to FSx File Gateway, visit <a href="https://aws.amazon.com/blogs/storage/switch-your-file-share-access-from-amazon-fsx-file-gateway-to-amazon-fsx-for-windows-file-server/">this blog post</a>.</p>
</important>
<p>Storage Gateway is the service that connects an on-premises software appliance
with cloud-based storage to provide seamless and secure integration between an
organization's on-premises IT environment and the Amazon Web Services storage
infrastructure. The service enables you to securely upload data to the Amazon Web Services Cloud for cost effective backup and rapid disaster recovery.</p>
<p>Use the following links to get started using the <i>Storage Gateway
Service API Reference</i>:</p>
<ul>
<li>
<p>
<a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/AWSStorageGatewayAPI.html#AWSStorageGatewayHTTPRequestsHeaders">Storage Gateway required request headers</a>: Describes the required
headers that you must send with every POST request to Storage Gateway.</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/AWSStorageGatewayAPI.html#AWSStorageGatewaySigningRequests">Signing requests</a>: Storage Gateway requires that you authenticate
every request you send; this topic describes how sign such a request.</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/AWSStorageGatewayAPI.html#APIErrorResponses">Error responses</a>: Provides reference information about Storage Gateway errors.</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_Operations.html">Operations in Storage Gateway</a>: Contains detailed descriptions of all Storage Gateway operations, their request parameters, response elements, possible errors, and
examples of requests and responses.</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/general/latest/gr/sg.html">Storage Gateway
endpoints and quotas</a>: Provides a list of each Amazon Web Services Region
and the endpoints available for use with Storage Gateway.</p>
</li>
</ul>
<note>
<p>Storage Gateway resource IDs are in uppercase. When you use these resource IDs
with the Amazon EC2 API, EC2 expects resource IDs in lowercase. You must change
your resource ID to lowercase to use it with the EC2 API. For example, in Storage
Gateway the ID for a volume might be <code>vol-AA22BB012345DAF670</code>. When you use
this ID with the EC2 API, you must change it to <code>vol-aa22bb012345daf670</code>.
Otherwise, the EC2 API might not behave as expected.</p>
</note>
<important>
<p>IDs for Storage Gateway volumes and Amazon EBS snapshots created from gateway
volumes are changing to a longer format. Starting in December 2016, all new volumes and
snapshots will be created with a 17-character string. Starting in April 2016, you will
be able to use these longer IDs so you can test your systems with the new format. For
more information, see <a href="http://aws.amazon.com/ec2/faqs/#longer-ids">Longer EC2 and
EBS resource IDs</a>.</p>
<p>For example, a volume Amazon Resource Name (ARN) with the longer volume ID format
looks like the following:</p>
<p>
<code>arn:aws:storagegateway:us-west-2:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABBCCDDEEFFG</code>.</p>
<p>A snapshot ID with the longer ID format looks like the following:
<code>snap-78e226633445566ee</code>.</p>
<p>For more information, see <a href="http://forums.aws.amazon.com/ann.jspa?annID=3557">Announcement:
Heads-up – Longer Storage Gateway volume and snapshot IDs coming in
2016</a>.</p>
</important>

## Installing
To install this package, simply type add or install @aws-sdk/client-storage-gateway
using your favorite package manager:
- `npm install @aws-sdk/client-storage-gateway`
- `yarn add @aws-sdk/client-storage-gateway`
- `pnpm add @aws-sdk/client-storage-gateway`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `StorageGatewayClient` and
the commands you need, for example `ListTapesCommand`:

```js
// ES5 example
const { StorageGatewayClient, ListTapesCommand } = require("@aws-sdk/client-storage-gateway");
```

```ts
// ES6+ example
import { StorageGatewayClient, ListTapesCommand } from "@aws-sdk/client-storage-gateway";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new StorageGatewayClient({ region: "REGION" });

const params = { /** input parameters */ };
const command = new ListTapesCommand(params);
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
import * as AWS from "@aws-sdk/client-storage-gateway";
const client = new AWS.StorageGateway({ region: "REGION" });

// async/await.
try {
  const data = await client.listTapes(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listTapes(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listTapes(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-storage-gateway` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
ActivateGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/ActivateGatewayCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/ActivateGatewayCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/ActivateGatewayCommandOutput/)
</details>
<details>
<summary>
AddCache
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/AddCacheCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/AddCacheCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/AddCacheCommandOutput/)
</details>
<details>
<summary>
AddTagsToResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/AddTagsToResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/AddTagsToResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/AddTagsToResourceCommandOutput/)
</details>
<details>
<summary>
AddUploadBuffer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/AddUploadBufferCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/AddUploadBufferCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/AddUploadBufferCommandOutput/)
</details>
<details>
<summary>
AddWorkingStorage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/AddWorkingStorageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/AddWorkingStorageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/AddWorkingStorageCommandOutput/)
</details>
<details>
<summary>
AssignTapePool
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/AssignTapePoolCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/AssignTapePoolCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/AssignTapePoolCommandOutput/)
</details>
<details>
<summary>
AssociateFileSystem
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/AssociateFileSystemCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/AssociateFileSystemCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/AssociateFileSystemCommandOutput/)
</details>
<details>
<summary>
AttachVolume
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/AttachVolumeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/AttachVolumeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/AttachVolumeCommandOutput/)
</details>
<details>
<summary>
CancelArchival
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/CancelArchivalCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/CancelArchivalCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/CancelArchivalCommandOutput/)
</details>
<details>
<summary>
CancelCacheReport
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/CancelCacheReportCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/CancelCacheReportCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/CancelCacheReportCommandOutput/)
</details>
<details>
<summary>
CancelRetrieval
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/CancelRetrievalCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/CancelRetrievalCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/CancelRetrievalCommandOutput/)
</details>
<details>
<summary>
CreateCachediSCSIVolume
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/CreateCachediSCSIVolumeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/CreateCachediSCSIVolumeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/CreateCachediSCSIVolumeCommandOutput/)
</details>
<details>
<summary>
CreateNFSFileShare
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/CreateNFSFileShareCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/CreateNFSFileShareCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/CreateNFSFileShareCommandOutput/)
</details>
<details>
<summary>
CreateSMBFileShare
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/CreateSMBFileShareCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/CreateSMBFileShareCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/CreateSMBFileShareCommandOutput/)
</details>
<details>
<summary>
CreateSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/CreateSnapshotCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/CreateSnapshotCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/CreateSnapshotCommandOutput/)
</details>
<details>
<summary>
CreateSnapshotFromVolumeRecoveryPoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/CreateSnapshotFromVolumeRecoveryPointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/CreateSnapshotFromVolumeRecoveryPointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/CreateSnapshotFromVolumeRecoveryPointCommandOutput/)
</details>
<details>
<summary>
CreateStorediSCSIVolume
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/CreateStorediSCSIVolumeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/CreateStorediSCSIVolumeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/CreateStorediSCSIVolumeCommandOutput/)
</details>
<details>
<summary>
CreateTapePool
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/CreateTapePoolCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/CreateTapePoolCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/CreateTapePoolCommandOutput/)
</details>
<details>
<summary>
CreateTapes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/CreateTapesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/CreateTapesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/CreateTapesCommandOutput/)
</details>
<details>
<summary>
CreateTapeWithBarcode
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/CreateTapeWithBarcodeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/CreateTapeWithBarcodeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/CreateTapeWithBarcodeCommandOutput/)
</details>
<details>
<summary>
DeleteAutomaticTapeCreationPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/DeleteAutomaticTapeCreationPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DeleteAutomaticTapeCreationPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DeleteAutomaticTapeCreationPolicyCommandOutput/)
</details>
<details>
<summary>
DeleteBandwidthRateLimit
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/DeleteBandwidthRateLimitCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DeleteBandwidthRateLimitCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DeleteBandwidthRateLimitCommandOutput/)
</details>
<details>
<summary>
DeleteCacheReport
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/DeleteCacheReportCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DeleteCacheReportCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DeleteCacheReportCommandOutput/)
</details>
<details>
<summary>
DeleteChapCredentials
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/DeleteChapCredentialsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DeleteChapCredentialsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DeleteChapCredentialsCommandOutput/)
</details>
<details>
<summary>
DeleteFileShare
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/DeleteFileShareCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DeleteFileShareCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DeleteFileShareCommandOutput/)
</details>
<details>
<summary>
DeleteGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/DeleteGatewayCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DeleteGatewayCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DeleteGatewayCommandOutput/)
</details>
<details>
<summary>
DeleteSnapshotSchedule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/DeleteSnapshotScheduleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DeleteSnapshotScheduleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DeleteSnapshotScheduleCommandOutput/)
</details>
<details>
<summary>
DeleteTape
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/DeleteTapeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DeleteTapeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DeleteTapeCommandOutput/)
</details>
<details>
<summary>
DeleteTapeArchive
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/DeleteTapeArchiveCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DeleteTapeArchiveCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DeleteTapeArchiveCommandOutput/)
</details>
<details>
<summary>
DeleteTapePool
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/DeleteTapePoolCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DeleteTapePoolCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DeleteTapePoolCommandOutput/)
</details>
<details>
<summary>
DeleteVolume
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/DeleteVolumeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DeleteVolumeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DeleteVolumeCommandOutput/)
</details>
<details>
<summary>
DescribeAvailabilityMonitorTest
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/DescribeAvailabilityMonitorTestCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DescribeAvailabilityMonitorTestCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DescribeAvailabilityMonitorTestCommandOutput/)
</details>
<details>
<summary>
DescribeBandwidthRateLimit
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/DescribeBandwidthRateLimitCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DescribeBandwidthRateLimitCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DescribeBandwidthRateLimitCommandOutput/)
</details>
<details>
<summary>
DescribeBandwidthRateLimitSchedule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/DescribeBandwidthRateLimitScheduleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DescribeBandwidthRateLimitScheduleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DescribeBandwidthRateLimitScheduleCommandOutput/)
</details>
<details>
<summary>
DescribeCache
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/DescribeCacheCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DescribeCacheCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DescribeCacheCommandOutput/)
</details>
<details>
<summary>
DescribeCachediSCSIVolumes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/DescribeCachediSCSIVolumesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DescribeCachediSCSIVolumesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DescribeCachediSCSIVolumesCommandOutput/)
</details>
<details>
<summary>
DescribeCacheReport
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/DescribeCacheReportCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DescribeCacheReportCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DescribeCacheReportCommandOutput/)
</details>
<details>
<summary>
DescribeChapCredentials
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/DescribeChapCredentialsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DescribeChapCredentialsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DescribeChapCredentialsCommandOutput/)
</details>
<details>
<summary>
DescribeFileSystemAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/DescribeFileSystemAssociationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DescribeFileSystemAssociationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DescribeFileSystemAssociationsCommandOutput/)
</details>
<details>
<summary>
DescribeGatewayInformation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/DescribeGatewayInformationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DescribeGatewayInformationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DescribeGatewayInformationCommandOutput/)
</details>
<details>
<summary>
DescribeMaintenanceStartTime
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/DescribeMaintenanceStartTimeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DescribeMaintenanceStartTimeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DescribeMaintenanceStartTimeCommandOutput/)
</details>
<details>
<summary>
DescribeNFSFileShares
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/DescribeNFSFileSharesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DescribeNFSFileSharesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DescribeNFSFileSharesCommandOutput/)
</details>
<details>
<summary>
DescribeSMBFileShares
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/DescribeSMBFileSharesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DescribeSMBFileSharesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DescribeSMBFileSharesCommandOutput/)
</details>
<details>
<summary>
DescribeSMBSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/DescribeSMBSettingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DescribeSMBSettingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DescribeSMBSettingsCommandOutput/)
</details>
<details>
<summary>
DescribeSnapshotSchedule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/DescribeSnapshotScheduleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DescribeSnapshotScheduleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DescribeSnapshotScheduleCommandOutput/)
</details>
<details>
<summary>
DescribeStorediSCSIVolumes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/DescribeStorediSCSIVolumesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DescribeStorediSCSIVolumesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DescribeStorediSCSIVolumesCommandOutput/)
</details>
<details>
<summary>
DescribeTapeArchives
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/DescribeTapeArchivesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DescribeTapeArchivesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DescribeTapeArchivesCommandOutput/)
</details>
<details>
<summary>
DescribeTapeRecoveryPoints
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/DescribeTapeRecoveryPointsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DescribeTapeRecoveryPointsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DescribeTapeRecoveryPointsCommandOutput/)
</details>
<details>
<summary>
DescribeTapes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/DescribeTapesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DescribeTapesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DescribeTapesCommandOutput/)
</details>
<details>
<summary>
DescribeUploadBuffer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/DescribeUploadBufferCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DescribeUploadBufferCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DescribeUploadBufferCommandOutput/)
</details>
<details>
<summary>
DescribeVTLDevices
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/DescribeVTLDevicesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DescribeVTLDevicesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DescribeVTLDevicesCommandOutput/)
</details>
<details>
<summary>
DescribeWorkingStorage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/DescribeWorkingStorageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DescribeWorkingStorageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DescribeWorkingStorageCommandOutput/)
</details>
<details>
<summary>
DetachVolume
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/DetachVolumeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DetachVolumeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DetachVolumeCommandOutput/)
</details>
<details>
<summary>
DisableGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/DisableGatewayCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DisableGatewayCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DisableGatewayCommandOutput/)
</details>
<details>
<summary>
DisassociateFileSystem
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/DisassociateFileSystemCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DisassociateFileSystemCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/DisassociateFileSystemCommandOutput/)
</details>
<details>
<summary>
EvictFilesFailingUpload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/EvictFilesFailingUploadCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/EvictFilesFailingUploadCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/EvictFilesFailingUploadCommandOutput/)
</details>
<details>
<summary>
JoinDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/JoinDomainCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/JoinDomainCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/JoinDomainCommandOutput/)
</details>
<details>
<summary>
ListAutomaticTapeCreationPolicies
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/ListAutomaticTapeCreationPoliciesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/ListAutomaticTapeCreationPoliciesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/ListAutomaticTapeCreationPoliciesCommandOutput/)
</details>
<details>
<summary>
ListCacheReports
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/ListCacheReportsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/ListCacheReportsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/ListCacheReportsCommandOutput/)
</details>
<details>
<summary>
ListFileShares
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/ListFileSharesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/ListFileSharesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/ListFileSharesCommandOutput/)
</details>
<details>
<summary>
ListFileSystemAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/ListFileSystemAssociationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/ListFileSystemAssociationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/ListFileSystemAssociationsCommandOutput/)
</details>
<details>
<summary>
ListGateways
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/ListGatewaysCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/ListGatewaysCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/ListGatewaysCommandOutput/)
</details>
<details>
<summary>
ListLocalDisks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/ListLocalDisksCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/ListLocalDisksCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/ListLocalDisksCommandOutput/)
</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/ListTagsForResourceCommandOutput/)
</details>
<details>
<summary>
ListTapePools
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/ListTapePoolsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/ListTapePoolsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/ListTapePoolsCommandOutput/)
</details>
<details>
<summary>
ListTapes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/ListTapesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/ListTapesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/ListTapesCommandOutput/)
</details>
<details>
<summary>
ListVolumeInitiators
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/ListVolumeInitiatorsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/ListVolumeInitiatorsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/ListVolumeInitiatorsCommandOutput/)
</details>
<details>
<summary>
ListVolumeRecoveryPoints
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/ListVolumeRecoveryPointsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/ListVolumeRecoveryPointsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/ListVolumeRecoveryPointsCommandOutput/)
</details>
<details>
<summary>
ListVolumes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/ListVolumesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/ListVolumesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/ListVolumesCommandOutput/)
</details>
<details>
<summary>
NotifyWhenUploaded
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/NotifyWhenUploadedCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/NotifyWhenUploadedCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/NotifyWhenUploadedCommandOutput/)
</details>
<details>
<summary>
RefreshCache
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/RefreshCacheCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/RefreshCacheCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/RefreshCacheCommandOutput/)
</details>
<details>
<summary>
RemoveTagsFromResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/RemoveTagsFromResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/RemoveTagsFromResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/RemoveTagsFromResourceCommandOutput/)
</details>
<details>
<summary>
ResetCache
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/ResetCacheCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/ResetCacheCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/ResetCacheCommandOutput/)
</details>
<details>
<summary>
RetrieveTapeArchive
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/RetrieveTapeArchiveCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/RetrieveTapeArchiveCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/RetrieveTapeArchiveCommandOutput/)
</details>
<details>
<summary>
RetrieveTapeRecoveryPoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/RetrieveTapeRecoveryPointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/RetrieveTapeRecoveryPointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/RetrieveTapeRecoveryPointCommandOutput/)
</details>
<details>
<summary>
SetLocalConsolePassword
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/SetLocalConsolePasswordCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/SetLocalConsolePasswordCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/SetLocalConsolePasswordCommandOutput/)
</details>
<details>
<summary>
SetSMBGuestPassword
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/SetSMBGuestPasswordCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/SetSMBGuestPasswordCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/SetSMBGuestPasswordCommandOutput/)
</details>
<details>
<summary>
ShutdownGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/ShutdownGatewayCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/ShutdownGatewayCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/ShutdownGatewayCommandOutput/)
</details>
<details>
<summary>
StartAvailabilityMonitorTest
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/StartAvailabilityMonitorTestCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/StartAvailabilityMonitorTestCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/StartAvailabilityMonitorTestCommandOutput/)
</details>
<details>
<summary>
StartCacheReport
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/StartCacheReportCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/StartCacheReportCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/StartCacheReportCommandOutput/)
</details>
<details>
<summary>
StartGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/StartGatewayCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/StartGatewayCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/StartGatewayCommandOutput/)
</details>
<details>
<summary>
UpdateAutomaticTapeCreationPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/UpdateAutomaticTapeCreationPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/UpdateAutomaticTapeCreationPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/UpdateAutomaticTapeCreationPolicyCommandOutput/)
</details>
<details>
<summary>
UpdateBandwidthRateLimit
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/UpdateBandwidthRateLimitCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/UpdateBandwidthRateLimitCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/UpdateBandwidthRateLimitCommandOutput/)
</details>
<details>
<summary>
UpdateBandwidthRateLimitSchedule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/UpdateBandwidthRateLimitScheduleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/UpdateBandwidthRateLimitScheduleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/UpdateBandwidthRateLimitScheduleCommandOutput/)
</details>
<details>
<summary>
UpdateChapCredentials
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/UpdateChapCredentialsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/UpdateChapCredentialsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/UpdateChapCredentialsCommandOutput/)
</details>
<details>
<summary>
UpdateFileSystemAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/UpdateFileSystemAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/UpdateFileSystemAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/UpdateFileSystemAssociationCommandOutput/)
</details>
<details>
<summary>
UpdateGatewayInformation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/UpdateGatewayInformationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/UpdateGatewayInformationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/UpdateGatewayInformationCommandOutput/)
</details>
<details>
<summary>
UpdateGatewaySoftwareNow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/UpdateGatewaySoftwareNowCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/UpdateGatewaySoftwareNowCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/UpdateGatewaySoftwareNowCommandOutput/)
</details>
<details>
<summary>
UpdateMaintenanceStartTime
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/UpdateMaintenanceStartTimeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/UpdateMaintenanceStartTimeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/UpdateMaintenanceStartTimeCommandOutput/)
</details>
<details>
<summary>
UpdateNFSFileShare
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/UpdateNFSFileShareCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/UpdateNFSFileShareCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/UpdateNFSFileShareCommandOutput/)
</details>
<details>
<summary>
UpdateSMBFileShare
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/UpdateSMBFileShareCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/UpdateSMBFileShareCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/UpdateSMBFileShareCommandOutput/)
</details>
<details>
<summary>
UpdateSMBFileShareVisibility
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/UpdateSMBFileShareVisibilityCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/UpdateSMBFileShareVisibilityCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/UpdateSMBFileShareVisibilityCommandOutput/)
</details>
<details>
<summary>
UpdateSMBLocalGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/UpdateSMBLocalGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/UpdateSMBLocalGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/UpdateSMBLocalGroupsCommandOutput/)
</details>
<details>
<summary>
UpdateSMBSecurityStrategy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/UpdateSMBSecurityStrategyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/UpdateSMBSecurityStrategyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/UpdateSMBSecurityStrategyCommandOutput/)
</details>
<details>
<summary>
UpdateSnapshotSchedule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/UpdateSnapshotScheduleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/UpdateSnapshotScheduleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/UpdateSnapshotScheduleCommandOutput/)
</details>
<details>
<summary>
UpdateVTLDeviceType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/storage-gateway/command/UpdateVTLDeviceTypeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/UpdateVTLDeviceTypeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-storage-gateway/Interface/UpdateVTLDeviceTypeCommandOutput/)
</details>
