<!-- generated file, do not edit directly -->

# @aws-sdk/client-storage-gateway

## Description

AWS SDK for JavaScript StorageGateway Client for Node.js, Browser and React Native.

<fullname>Storage Gateway Service</fullname>

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

To install the this package, simply type add or install @aws-sdk/client-storage-gateway
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

const params = {
  /** input parameters */
};
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/activategatewaycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/activategatewaycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/activategatewaycommandoutput.html)

</details>
<details>
<summary>
AddCache
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/addcachecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/addcachecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/addcachecommandoutput.html)

</details>
<details>
<summary>
AddTagsToResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/addtagstoresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/addtagstoresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/addtagstoresourcecommandoutput.html)

</details>
<details>
<summary>
AddUploadBuffer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/adduploadbuffercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/adduploadbuffercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/adduploadbuffercommandoutput.html)

</details>
<details>
<summary>
AddWorkingStorage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/addworkingstoragecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/addworkingstoragecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/addworkingstoragecommandoutput.html)

</details>
<details>
<summary>
AssignTapePool
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/assigntapepoolcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/assigntapepoolcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/assigntapepoolcommandoutput.html)

</details>
<details>
<summary>
AssociateFileSystem
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/associatefilesystemcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/associatefilesystemcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/associatefilesystemcommandoutput.html)

</details>
<details>
<summary>
AttachVolume
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/attachvolumecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/attachvolumecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/attachvolumecommandoutput.html)

</details>
<details>
<summary>
CancelArchival
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/cancelarchivalcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/cancelarchivalcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/cancelarchivalcommandoutput.html)

</details>
<details>
<summary>
CancelRetrieval
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/cancelretrievalcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/cancelretrievalcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/cancelretrievalcommandoutput.html)

</details>
<details>
<summary>
CreateCachediSCSIVolume
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/createcachediscsivolumecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/createcachediscsivolumecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/createcachediscsivolumecommandoutput.html)

</details>
<details>
<summary>
CreateNFSFileShare
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/createnfsfilesharecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/createnfsfilesharecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/createnfsfilesharecommandoutput.html)

</details>
<details>
<summary>
CreateSMBFileShare
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/createsmbfilesharecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/createsmbfilesharecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/createsmbfilesharecommandoutput.html)

</details>
<details>
<summary>
CreateSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/createsnapshotcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/createsnapshotcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/createsnapshotcommandoutput.html)

</details>
<details>
<summary>
CreateSnapshotFromVolumeRecoveryPoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/createsnapshotfromvolumerecoverypointcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/createsnapshotfromvolumerecoverypointcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/createsnapshotfromvolumerecoverypointcommandoutput.html)

</details>
<details>
<summary>
CreateStorediSCSIVolume
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/createstorediscsivolumecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/createstorediscsivolumecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/createstorediscsivolumecommandoutput.html)

</details>
<details>
<summary>
CreateTapePool
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/createtapepoolcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/createtapepoolcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/createtapepoolcommandoutput.html)

</details>
<details>
<summary>
CreateTapes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/createtapescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/createtapescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/createtapescommandoutput.html)

</details>
<details>
<summary>
CreateTapeWithBarcode
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/createtapewithbarcodecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/createtapewithbarcodecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/createtapewithbarcodecommandoutput.html)

</details>
<details>
<summary>
DeleteAutomaticTapeCreationPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/deleteautomatictapecreationpolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/deleteautomatictapecreationpolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/deleteautomatictapecreationpolicycommandoutput.html)

</details>
<details>
<summary>
DeleteBandwidthRateLimit
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/deletebandwidthratelimitcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/deletebandwidthratelimitcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/deletebandwidthratelimitcommandoutput.html)

</details>
<details>
<summary>
DeleteChapCredentials
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/deletechapcredentialscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/deletechapcredentialscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/deletechapcredentialscommandoutput.html)

</details>
<details>
<summary>
DeleteFileShare
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/deletefilesharecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/deletefilesharecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/deletefilesharecommandoutput.html)

</details>
<details>
<summary>
DeleteGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/deletegatewaycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/deletegatewaycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/deletegatewaycommandoutput.html)

</details>
<details>
<summary>
DeleteSnapshotSchedule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/deletesnapshotschedulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/deletesnapshotschedulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/deletesnapshotschedulecommandoutput.html)

</details>
<details>
<summary>
DeleteTape
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/deletetapecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/deletetapecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/deletetapecommandoutput.html)

</details>
<details>
<summary>
DeleteTapeArchive
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/deletetapearchivecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/deletetapearchivecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/deletetapearchivecommandoutput.html)

</details>
<details>
<summary>
DeleteTapePool
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/deletetapepoolcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/deletetapepoolcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/deletetapepoolcommandoutput.html)

</details>
<details>
<summary>
DeleteVolume
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/deletevolumecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/deletevolumecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/deletevolumecommandoutput.html)

</details>
<details>
<summary>
DescribeAvailabilityMonitorTest
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/describeavailabilitymonitortestcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/describeavailabilitymonitortestcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/describeavailabilitymonitortestcommandoutput.html)

</details>
<details>
<summary>
DescribeBandwidthRateLimit
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/describebandwidthratelimitcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/describebandwidthratelimitcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/describebandwidthratelimitcommandoutput.html)

</details>
<details>
<summary>
DescribeBandwidthRateLimitSchedule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/describebandwidthratelimitschedulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/describebandwidthratelimitschedulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/describebandwidthratelimitschedulecommandoutput.html)

</details>
<details>
<summary>
DescribeCache
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/describecachecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/describecachecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/describecachecommandoutput.html)

</details>
<details>
<summary>
DescribeCachediSCSIVolumes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/describecachediscsivolumescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/describecachediscsivolumescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/describecachediscsivolumescommandoutput.html)

</details>
<details>
<summary>
DescribeChapCredentials
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/describechapcredentialscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/describechapcredentialscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/describechapcredentialscommandoutput.html)

</details>
<details>
<summary>
DescribeFileSystemAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/describefilesystemassociationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/describefilesystemassociationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/describefilesystemassociationscommandoutput.html)

</details>
<details>
<summary>
DescribeGatewayInformation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/describegatewayinformationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/describegatewayinformationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/describegatewayinformationcommandoutput.html)

</details>
<details>
<summary>
DescribeMaintenanceStartTime
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/describemaintenancestarttimecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/describemaintenancestarttimecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/describemaintenancestarttimecommandoutput.html)

</details>
<details>
<summary>
DescribeNFSFileShares
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/describenfsfilesharescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/describenfsfilesharescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/describenfsfilesharescommandoutput.html)

</details>
<details>
<summary>
DescribeSMBFileShares
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/describesmbfilesharescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/describesmbfilesharescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/describesmbfilesharescommandoutput.html)

</details>
<details>
<summary>
DescribeSMBSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/describesmbsettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/describesmbsettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/describesmbsettingscommandoutput.html)

</details>
<details>
<summary>
DescribeSnapshotSchedule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/describesnapshotschedulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/describesnapshotschedulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/describesnapshotschedulecommandoutput.html)

</details>
<details>
<summary>
DescribeStorediSCSIVolumes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/describestorediscsivolumescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/describestorediscsivolumescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/describestorediscsivolumescommandoutput.html)

</details>
<details>
<summary>
DescribeTapeArchives
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/describetapearchivescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/describetapearchivescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/describetapearchivescommandoutput.html)

</details>
<details>
<summary>
DescribeTapeRecoveryPoints
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/describetaperecoverypointscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/describetaperecoverypointscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/describetaperecoverypointscommandoutput.html)

</details>
<details>
<summary>
DescribeTapes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/describetapescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/describetapescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/describetapescommandoutput.html)

</details>
<details>
<summary>
DescribeUploadBuffer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/describeuploadbuffercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/describeuploadbuffercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/describeuploadbuffercommandoutput.html)

</details>
<details>
<summary>
DescribeVTLDevices
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/describevtldevicescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/describevtldevicescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/describevtldevicescommandoutput.html)

</details>
<details>
<summary>
DescribeWorkingStorage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/describeworkingstoragecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/describeworkingstoragecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/describeworkingstoragecommandoutput.html)

</details>
<details>
<summary>
DetachVolume
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/detachvolumecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/detachvolumecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/detachvolumecommandoutput.html)

</details>
<details>
<summary>
DisableGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/disablegatewaycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/disablegatewaycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/disablegatewaycommandoutput.html)

</details>
<details>
<summary>
DisassociateFileSystem
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/disassociatefilesystemcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/disassociatefilesystemcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/disassociatefilesystemcommandoutput.html)

</details>
<details>
<summary>
JoinDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/joindomaincommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/joindomaincommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/joindomaincommandoutput.html)

</details>
<details>
<summary>
ListAutomaticTapeCreationPolicies
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/listautomatictapecreationpoliciescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/listautomatictapecreationpoliciescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/listautomatictapecreationpoliciescommandoutput.html)

</details>
<details>
<summary>
ListFileShares
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/listfilesharescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/listfilesharescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/listfilesharescommandoutput.html)

</details>
<details>
<summary>
ListFileSystemAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/listfilesystemassociationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/listfilesystemassociationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/listfilesystemassociationscommandoutput.html)

</details>
<details>
<summary>
ListGateways
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/listgatewayscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/listgatewayscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/listgatewayscommandoutput.html)

</details>
<details>
<summary>
ListLocalDisks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/listlocaldiskscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/listlocaldiskscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/listlocaldiskscommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
ListTapePools
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/listtapepoolscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/listtapepoolscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/listtapepoolscommandoutput.html)

</details>
<details>
<summary>
ListTapes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/listtapescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/listtapescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/listtapescommandoutput.html)

</details>
<details>
<summary>
ListVolumeInitiators
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/listvolumeinitiatorscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/listvolumeinitiatorscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/listvolumeinitiatorscommandoutput.html)

</details>
<details>
<summary>
ListVolumeRecoveryPoints
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/listvolumerecoverypointscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/listvolumerecoverypointscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/listvolumerecoverypointscommandoutput.html)

</details>
<details>
<summary>
ListVolumes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/listvolumescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/listvolumescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/listvolumescommandoutput.html)

</details>
<details>
<summary>
NotifyWhenUploaded
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/notifywhenuploadedcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/notifywhenuploadedcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/notifywhenuploadedcommandoutput.html)

</details>
<details>
<summary>
RefreshCache
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/refreshcachecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/refreshcachecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/refreshcachecommandoutput.html)

</details>
<details>
<summary>
RemoveTagsFromResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/removetagsfromresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/removetagsfromresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/removetagsfromresourcecommandoutput.html)

</details>
<details>
<summary>
ResetCache
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/resetcachecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/resetcachecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/resetcachecommandoutput.html)

</details>
<details>
<summary>
RetrieveTapeArchive
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/retrievetapearchivecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/retrievetapearchivecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/retrievetapearchivecommandoutput.html)

</details>
<details>
<summary>
RetrieveTapeRecoveryPoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/retrievetaperecoverypointcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/retrievetaperecoverypointcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/retrievetaperecoverypointcommandoutput.html)

</details>
<details>
<summary>
SetLocalConsolePassword
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/setlocalconsolepasswordcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/setlocalconsolepasswordcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/setlocalconsolepasswordcommandoutput.html)

</details>
<details>
<summary>
SetSMBGuestPassword
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/setsmbguestpasswordcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/setsmbguestpasswordcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/setsmbguestpasswordcommandoutput.html)

</details>
<details>
<summary>
ShutdownGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/shutdowngatewaycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/shutdowngatewaycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/shutdowngatewaycommandoutput.html)

</details>
<details>
<summary>
StartAvailabilityMonitorTest
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/startavailabilitymonitortestcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/startavailabilitymonitortestcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/startavailabilitymonitortestcommandoutput.html)

</details>
<details>
<summary>
StartGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/startgatewaycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/startgatewaycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/startgatewaycommandoutput.html)

</details>
<details>
<summary>
UpdateAutomaticTapeCreationPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/updateautomatictapecreationpolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/updateautomatictapecreationpolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/updateautomatictapecreationpolicycommandoutput.html)

</details>
<details>
<summary>
UpdateBandwidthRateLimit
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/updatebandwidthratelimitcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/updatebandwidthratelimitcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/updatebandwidthratelimitcommandoutput.html)

</details>
<details>
<summary>
UpdateBandwidthRateLimitSchedule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/updatebandwidthratelimitschedulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/updatebandwidthratelimitschedulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/updatebandwidthratelimitschedulecommandoutput.html)

</details>
<details>
<summary>
UpdateChapCredentials
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/updatechapcredentialscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/updatechapcredentialscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/updatechapcredentialscommandoutput.html)

</details>
<details>
<summary>
UpdateFileSystemAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/updatefilesystemassociationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/updatefilesystemassociationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/updatefilesystemassociationcommandoutput.html)

</details>
<details>
<summary>
UpdateGatewayInformation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/updategatewayinformationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/updategatewayinformationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/updategatewayinformationcommandoutput.html)

</details>
<details>
<summary>
UpdateGatewaySoftwareNow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/updategatewaysoftwarenowcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/updategatewaysoftwarenowcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/updategatewaysoftwarenowcommandoutput.html)

</details>
<details>
<summary>
UpdateMaintenanceStartTime
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/updatemaintenancestarttimecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/updatemaintenancestarttimecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/updatemaintenancestarttimecommandoutput.html)

</details>
<details>
<summary>
UpdateNFSFileShare
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/updatenfsfilesharecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/updatenfsfilesharecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/updatenfsfilesharecommandoutput.html)

</details>
<details>
<summary>
UpdateSMBFileShare
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/updatesmbfilesharecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/updatesmbfilesharecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/updatesmbfilesharecommandoutput.html)

</details>
<details>
<summary>
UpdateSMBFileShareVisibility
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/updatesmbfilesharevisibilitycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/updatesmbfilesharevisibilitycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/updatesmbfilesharevisibilitycommandoutput.html)

</details>
<details>
<summary>
UpdateSMBLocalGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/updatesmblocalgroupscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/updatesmblocalgroupscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/updatesmblocalgroupscommandoutput.html)

</details>
<details>
<summary>
UpdateSMBSecurityStrategy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/updatesmbsecuritystrategycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/updatesmbsecuritystrategycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/updatesmbsecuritystrategycommandoutput.html)

</details>
<details>
<summary>
UpdateSnapshotSchedule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/updatesnapshotschedulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/updatesnapshotschedulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/updatesnapshotschedulecommandoutput.html)

</details>
<details>
<summary>
UpdateVTLDeviceType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/classes/updatevtldevicetypecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/updatevtldevicetypecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-storage-gateway/interfaces/updatevtldevicetypecommandoutput.html)

</details>
