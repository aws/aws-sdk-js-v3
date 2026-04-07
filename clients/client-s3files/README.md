<!-- generated file, do not edit directly -->

# @aws-sdk/client-s3files

## Description

AWS SDK for JavaScript S3Files Client for Node.js, Browser and React Native.

<p>S3 Files makes S3 buckets accessible as high-performance file systems powered by EFS. This service enables file system interface access to S3 data with sub-millisecond latencies through mount targets, supporting AI/ML workloads, media processing, and hybrid storage workflows that require both file system and object storage access to the same data.</p>

## Installing

To install this package, use the CLI of your favorite package manager:

- `npm install @aws-sdk/client-s3files`
- `yarn add @aws-sdk/client-s3files`
- `pnpm add @aws-sdk/client-s3files`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `S3FilesClient` and
the commands you need, for example `ListFileSystemsCommand`:

```js
// ES5 example
const { S3FilesClient, ListFileSystemsCommand } = require("@aws-sdk/client-s3files");
```

```ts
// ES6+ example
import { S3FilesClient, ListFileSystemsCommand } from "@aws-sdk/client-s3files";
```

### Usage

To send a request:

- Instantiate a client with configuration (e.g. credentials, region).
  - See [docs/CLIENTS](https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/CLIENTS.md) for configuration details.
  - See [@aws-sdk/config](https://github.com/aws/aws-sdk-js-v3/blob/main/packages/config/README.md) for additional options.
- Instantiate a command with input parameters.
- Call the `send` operation on the client, providing the command object as input.

```js
const client = new S3FilesClient({ region: "REGION" });

const params = { /** input parameters */ };
const command = new ListFileSystemsCommand(params);
```

#### Async/await

We recommend using the [await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
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

#### Promises

You can also use [Promise chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#chaining).

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

#### Aggregated client

The aggregated client class is exported from the same package, but without the "Client" suffix.

`S3Files` extends `S3FilesClient` and additionally supports all operations, waiters, and paginators as methods.
This style may be familiar to you from the AWS SDK for JavaScript v2.

If you are bundling the AWS SDK, we recommend using only the bare-bones client (`S3FilesClient`).
More details are in the blog post on
[modular packages in AWS SDK for JavaScript](https://aws.amazon.com/blogs/developer/modular-packages-in-aws-sdk-for-javascript/).

```ts
import { S3Files } from "@aws-sdk/client-s3files";

const client = new S3Files({ region: "REGION" });

// async/await.
try {
  const data = await client.listFileSystems(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listFileSystems(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks (not recommended).
client.listFileSystems(params, (err, data) => {
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

See also [docs/ERROR_HANDLING](https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/ERROR_HANDLING.md).

## Getting Help

Please use these community resources for getting help.
We use GitHub issues for tracking bugs and feature requests, but have limited bandwidth to address them.

- Visit the [Developer Guide](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/welcome.html)
  or [API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/index.html).
- Check out the blog posts tagged with [`aws-sdk-js`](https://aws.amazon.com/blogs/developer/tag/aws-sdk-js/)
  on AWS Developer Blog.
- Ask a question on [StackOverflow](https://stackoverflow.com/questions/tagged/aws-sdk-js) and tag it with `aws-sdk-js`.
- Join the AWS JavaScript community on [gitter](https://gitter.im/aws/aws-sdk-js-v3).
- If it turns out that you may have found a bug, please [open an issue](https://github.com/aws/aws-sdk-js-v3/issues/new/choose).

To test your universal JavaScript code in Node.js, browser and react-native environments,
visit our [code samples repo](https://github.com/aws-samples/aws-sdk-js-tests).

## Contributing

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-s3files` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CreateAccessPoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3files/command/CreateAccessPointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3files/Interface/CreateAccessPointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3files/Interface/CreateAccessPointCommandOutput/)
</details>
<details>
<summary>
CreateFileSystem
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3files/command/CreateFileSystemCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3files/Interface/CreateFileSystemCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3files/Interface/CreateFileSystemCommandOutput/)
</details>
<details>
<summary>
CreateMountTarget
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3files/command/CreateMountTargetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3files/Interface/CreateMountTargetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3files/Interface/CreateMountTargetCommandOutput/)
</details>
<details>
<summary>
DeleteAccessPoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3files/command/DeleteAccessPointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3files/Interface/DeleteAccessPointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3files/Interface/DeleteAccessPointCommandOutput/)
</details>
<details>
<summary>
DeleteFileSystem
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3files/command/DeleteFileSystemCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3files/Interface/DeleteFileSystemCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3files/Interface/DeleteFileSystemCommandOutput/)
</details>
<details>
<summary>
DeleteFileSystemPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3files/command/DeleteFileSystemPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3files/Interface/DeleteFileSystemPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3files/Interface/DeleteFileSystemPolicyCommandOutput/)
</details>
<details>
<summary>
DeleteMountTarget
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3files/command/DeleteMountTargetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3files/Interface/DeleteMountTargetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3files/Interface/DeleteMountTargetCommandOutput/)
</details>
<details>
<summary>
GetAccessPoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3files/command/GetAccessPointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3files/Interface/GetAccessPointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3files/Interface/GetAccessPointCommandOutput/)
</details>
<details>
<summary>
GetFileSystem
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3files/command/GetFileSystemCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3files/Interface/GetFileSystemCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3files/Interface/GetFileSystemCommandOutput/)
</details>
<details>
<summary>
GetFileSystemPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3files/command/GetFileSystemPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3files/Interface/GetFileSystemPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3files/Interface/GetFileSystemPolicyCommandOutput/)
</details>
<details>
<summary>
GetMountTarget
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3files/command/GetMountTargetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3files/Interface/GetMountTargetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3files/Interface/GetMountTargetCommandOutput/)
</details>
<details>
<summary>
GetSynchronizationConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3files/command/GetSynchronizationConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3files/Interface/GetSynchronizationConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3files/Interface/GetSynchronizationConfigurationCommandOutput/)
</details>
<details>
<summary>
ListAccessPoints
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3files/command/ListAccessPointsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3files/Interface/ListAccessPointsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3files/Interface/ListAccessPointsCommandOutput/)
</details>
<details>
<summary>
ListFileSystems
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3files/command/ListFileSystemsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3files/Interface/ListFileSystemsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3files/Interface/ListFileSystemsCommandOutput/)
</details>
<details>
<summary>
ListMountTargets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3files/command/ListMountTargetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3files/Interface/ListMountTargetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3files/Interface/ListMountTargetsCommandOutput/)
</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3files/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3files/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3files/Interface/ListTagsForResourceCommandOutput/)
</details>
<details>
<summary>
PutFileSystemPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3files/command/PutFileSystemPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3files/Interface/PutFileSystemPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3files/Interface/PutFileSystemPolicyCommandOutput/)
</details>
<details>
<summary>
PutSynchronizationConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3files/command/PutSynchronizationConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3files/Interface/PutSynchronizationConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3files/Interface/PutSynchronizationConfigurationCommandOutput/)
</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3files/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3files/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3files/Interface/TagResourceCommandOutput/)
</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3files/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3files/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3files/Interface/UntagResourceCommandOutput/)
</details>
<details>
<summary>
UpdateMountTarget
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3files/command/UpdateMountTargetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3files/Interface/UpdateMountTargetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3files/Interface/UpdateMountTargetCommandOutput/)
</details>
