<!-- generated file, do not edit directly -->

# @aws-sdk/client-s3-control

## Description

AWS SDK for JavaScript S3Control Client for Node.js, Browser and React Native.

<p> Amazon Web Services S3 Control provides access to Amazon S3 control plane actions. </p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-s3-control
using your favorite package manager:

- `npm install @aws-sdk/client-s3-control`
- `yarn add @aws-sdk/client-s3-control`
- `pnpm add @aws-sdk/client-s3-control`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `S3ControlClient` and
the commands you need, for example `ListJobsCommand`:

```js
// ES5 example
const { S3ControlClient, ListJobsCommand } = require("@aws-sdk/client-s3-control");
```

```ts
// ES6+ example
import { S3ControlClient, ListJobsCommand } from "@aws-sdk/client-s3-control";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new S3ControlClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListJobsCommand(params);
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
import * as AWS from "@aws-sdk/client-s3-control";
const client = new AWS.S3Control({ region: "REGION" });

// async/await.
try {
  const data = await client.listJobs(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listJobs(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listJobs(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-s3-control` package is updated.
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/CreateAccessPointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/CreateAccessPointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/CreateAccessPointCommandOutput/)

</details>
<details>
<summary>
CreateAccessPointForObjectLambda
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/CreateAccessPointForObjectLambdaCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/CreateAccessPointForObjectLambdaCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/CreateAccessPointForObjectLambdaCommandOutput/)

</details>
<details>
<summary>
CreateBucket
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/CreateBucketCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/CreateBucketCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/CreateBucketCommandOutput/)

</details>
<details>
<summary>
CreateJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/CreateJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/CreateJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/CreateJobCommandOutput/)

</details>
<details>
<summary>
CreateMultiRegionAccessPoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/CreateMultiRegionAccessPointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/CreateMultiRegionAccessPointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/CreateMultiRegionAccessPointCommandOutput/)

</details>
<details>
<summary>
CreateStorageLensGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/CreateStorageLensGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/CreateStorageLensGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/CreateStorageLensGroupCommandOutput/)

</details>
<details>
<summary>
DeleteAccessPoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/DeleteAccessPointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/DeleteAccessPointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/DeleteAccessPointCommandOutput/)

</details>
<details>
<summary>
DeleteAccessPointForObjectLambda
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/DeleteAccessPointForObjectLambdaCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/DeleteAccessPointForObjectLambdaCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/DeleteAccessPointForObjectLambdaCommandOutput/)

</details>
<details>
<summary>
DeleteAccessPointPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/DeleteAccessPointPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/DeleteAccessPointPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/DeleteAccessPointPolicyCommandOutput/)

</details>
<details>
<summary>
DeleteAccessPointPolicyForObjectLambda
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/DeleteAccessPointPolicyForObjectLambdaCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/DeleteAccessPointPolicyForObjectLambdaCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/DeleteAccessPointPolicyForObjectLambdaCommandOutput/)

</details>
<details>
<summary>
DeleteBucket
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/DeleteBucketCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/DeleteBucketCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/DeleteBucketCommandOutput/)

</details>
<details>
<summary>
DeleteBucketLifecycleConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/DeleteBucketLifecycleConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/DeleteBucketLifecycleConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/DeleteBucketLifecycleConfigurationCommandOutput/)

</details>
<details>
<summary>
DeleteBucketPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/DeleteBucketPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/DeleteBucketPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/DeleteBucketPolicyCommandOutput/)

</details>
<details>
<summary>
DeleteBucketReplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/DeleteBucketReplicationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/DeleteBucketReplicationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/DeleteBucketReplicationCommandOutput/)

</details>
<details>
<summary>
DeleteBucketTagging
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/DeleteBucketTaggingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/DeleteBucketTaggingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/DeleteBucketTaggingCommandOutput/)

</details>
<details>
<summary>
DeleteJobTagging
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/DeleteJobTaggingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/DeleteJobTaggingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/DeleteJobTaggingCommandOutput/)

</details>
<details>
<summary>
DeleteMultiRegionAccessPoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/DeleteMultiRegionAccessPointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/DeleteMultiRegionAccessPointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/DeleteMultiRegionAccessPointCommandOutput/)

</details>
<details>
<summary>
DeletePublicAccessBlock
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/DeletePublicAccessBlockCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/DeletePublicAccessBlockCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/DeletePublicAccessBlockCommandOutput/)

</details>
<details>
<summary>
DeleteStorageLensConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/DeleteStorageLensConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/DeleteStorageLensConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/DeleteStorageLensConfigurationCommandOutput/)

</details>
<details>
<summary>
DeleteStorageLensConfigurationTagging
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/DeleteStorageLensConfigurationTaggingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/DeleteStorageLensConfigurationTaggingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/DeleteStorageLensConfigurationTaggingCommandOutput/)

</details>
<details>
<summary>
DeleteStorageLensGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/DeleteStorageLensGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/DeleteStorageLensGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/DeleteStorageLensGroupCommandOutput/)

</details>
<details>
<summary>
DescribeJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/DescribeJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/DescribeJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/DescribeJobCommandOutput/)

</details>
<details>
<summary>
DescribeMultiRegionAccessPointOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/DescribeMultiRegionAccessPointOperationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/DescribeMultiRegionAccessPointOperationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/DescribeMultiRegionAccessPointOperationCommandOutput/)

</details>
<details>
<summary>
GetAccessPoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/GetAccessPointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/GetAccessPointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/GetAccessPointCommandOutput/)

</details>
<details>
<summary>
GetAccessPointConfigurationForObjectLambda
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/GetAccessPointConfigurationForObjectLambdaCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/GetAccessPointConfigurationForObjectLambdaCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/GetAccessPointConfigurationForObjectLambdaCommandOutput/)

</details>
<details>
<summary>
GetAccessPointForObjectLambda
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/GetAccessPointForObjectLambdaCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/GetAccessPointForObjectLambdaCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/GetAccessPointForObjectLambdaCommandOutput/)

</details>
<details>
<summary>
GetAccessPointPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/GetAccessPointPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/GetAccessPointPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/GetAccessPointPolicyCommandOutput/)

</details>
<details>
<summary>
GetAccessPointPolicyForObjectLambda
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/GetAccessPointPolicyForObjectLambdaCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/GetAccessPointPolicyForObjectLambdaCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/GetAccessPointPolicyForObjectLambdaCommandOutput/)

</details>
<details>
<summary>
GetAccessPointPolicyStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/GetAccessPointPolicyStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/GetAccessPointPolicyStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/GetAccessPointPolicyStatusCommandOutput/)

</details>
<details>
<summary>
GetAccessPointPolicyStatusForObjectLambda
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/GetAccessPointPolicyStatusForObjectLambdaCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/GetAccessPointPolicyStatusForObjectLambdaCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/GetAccessPointPolicyStatusForObjectLambdaCommandOutput/)

</details>
<details>
<summary>
GetBucket
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/GetBucketCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/GetBucketCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/GetBucketCommandOutput/)

</details>
<details>
<summary>
GetBucketLifecycleConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/GetBucketLifecycleConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/GetBucketLifecycleConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/GetBucketLifecycleConfigurationCommandOutput/)

</details>
<details>
<summary>
GetBucketPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/GetBucketPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/GetBucketPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/GetBucketPolicyCommandOutput/)

</details>
<details>
<summary>
GetBucketReplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/GetBucketReplicationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/GetBucketReplicationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/GetBucketReplicationCommandOutput/)

</details>
<details>
<summary>
GetBucketTagging
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/GetBucketTaggingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/GetBucketTaggingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/GetBucketTaggingCommandOutput/)

</details>
<details>
<summary>
GetBucketVersioning
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/GetBucketVersioningCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/GetBucketVersioningCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/GetBucketVersioningCommandOutput/)

</details>
<details>
<summary>
GetJobTagging
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/GetJobTaggingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/GetJobTaggingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/GetJobTaggingCommandOutput/)

</details>
<details>
<summary>
GetMultiRegionAccessPoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/GetMultiRegionAccessPointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/GetMultiRegionAccessPointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/GetMultiRegionAccessPointCommandOutput/)

</details>
<details>
<summary>
GetMultiRegionAccessPointPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/GetMultiRegionAccessPointPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/GetMultiRegionAccessPointPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/GetMultiRegionAccessPointPolicyCommandOutput/)

</details>
<details>
<summary>
GetMultiRegionAccessPointPolicyStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/GetMultiRegionAccessPointPolicyStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/GetMultiRegionAccessPointPolicyStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/GetMultiRegionAccessPointPolicyStatusCommandOutput/)

</details>
<details>
<summary>
GetMultiRegionAccessPointRoutes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/GetMultiRegionAccessPointRoutesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/GetMultiRegionAccessPointRoutesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/GetMultiRegionAccessPointRoutesCommandOutput/)

</details>
<details>
<summary>
GetPublicAccessBlock
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/GetPublicAccessBlockCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/GetPublicAccessBlockCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/GetPublicAccessBlockCommandOutput/)

</details>
<details>
<summary>
GetStorageLensConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/GetStorageLensConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/GetStorageLensConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/GetStorageLensConfigurationCommandOutput/)

</details>
<details>
<summary>
GetStorageLensConfigurationTagging
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/GetStorageLensConfigurationTaggingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/GetStorageLensConfigurationTaggingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/GetStorageLensConfigurationTaggingCommandOutput/)

</details>
<details>
<summary>
GetStorageLensGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/GetStorageLensGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/GetStorageLensGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/GetStorageLensGroupCommandOutput/)

</details>
<details>
<summary>
ListAccessPoints
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/ListAccessPointsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/ListAccessPointsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/ListAccessPointsCommandOutput/)

</details>
<details>
<summary>
ListAccessPointsForObjectLambda
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/ListAccessPointsForObjectLambdaCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/ListAccessPointsForObjectLambdaCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/ListAccessPointsForObjectLambdaCommandOutput/)

</details>
<details>
<summary>
ListJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/ListJobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/ListJobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/ListJobsCommandOutput/)

</details>
<details>
<summary>
ListMultiRegionAccessPoints
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/ListMultiRegionAccessPointsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/ListMultiRegionAccessPointsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/ListMultiRegionAccessPointsCommandOutput/)

</details>
<details>
<summary>
ListRegionalBuckets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/ListRegionalBucketsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/ListRegionalBucketsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/ListRegionalBucketsCommandOutput/)

</details>
<details>
<summary>
ListStorageLensConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/ListStorageLensConfigurationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/ListStorageLensConfigurationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/ListStorageLensConfigurationsCommandOutput/)

</details>
<details>
<summary>
ListStorageLensGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/ListStorageLensGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/ListStorageLensGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/ListStorageLensGroupsCommandOutput/)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/ListTagsForResourceCommandOutput/)

</details>
<details>
<summary>
PutAccessPointConfigurationForObjectLambda
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/PutAccessPointConfigurationForObjectLambdaCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/PutAccessPointConfigurationForObjectLambdaCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/PutAccessPointConfigurationForObjectLambdaCommandOutput/)

</details>
<details>
<summary>
PutAccessPointPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/PutAccessPointPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/PutAccessPointPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/PutAccessPointPolicyCommandOutput/)

</details>
<details>
<summary>
PutAccessPointPolicyForObjectLambda
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/PutAccessPointPolicyForObjectLambdaCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/PutAccessPointPolicyForObjectLambdaCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/PutAccessPointPolicyForObjectLambdaCommandOutput/)

</details>
<details>
<summary>
PutBucketLifecycleConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/PutBucketLifecycleConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/PutBucketLifecycleConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/PutBucketLifecycleConfigurationCommandOutput/)

</details>
<details>
<summary>
PutBucketPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/PutBucketPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/PutBucketPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/PutBucketPolicyCommandOutput/)

</details>
<details>
<summary>
PutBucketReplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/PutBucketReplicationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/PutBucketReplicationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/PutBucketReplicationCommandOutput/)

</details>
<details>
<summary>
PutBucketTagging
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/PutBucketTaggingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/PutBucketTaggingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/PutBucketTaggingCommandOutput/)

</details>
<details>
<summary>
PutBucketVersioning
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/PutBucketVersioningCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/PutBucketVersioningCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/PutBucketVersioningCommandOutput/)

</details>
<details>
<summary>
PutJobTagging
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/PutJobTaggingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/PutJobTaggingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/PutJobTaggingCommandOutput/)

</details>
<details>
<summary>
PutMultiRegionAccessPointPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/PutMultiRegionAccessPointPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/PutMultiRegionAccessPointPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/PutMultiRegionAccessPointPolicyCommandOutput/)

</details>
<details>
<summary>
PutPublicAccessBlock
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/PutPublicAccessBlockCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/PutPublicAccessBlockCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/PutPublicAccessBlockCommandOutput/)

</details>
<details>
<summary>
PutStorageLensConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/PutStorageLensConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/PutStorageLensConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/PutStorageLensConfigurationCommandOutput/)

</details>
<details>
<summary>
PutStorageLensConfigurationTagging
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/PutStorageLensConfigurationTaggingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/PutStorageLensConfigurationTaggingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/PutStorageLensConfigurationTaggingCommandOutput/)

</details>
<details>
<summary>
SubmitMultiRegionAccessPointRoutes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/SubmitMultiRegionAccessPointRoutesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/SubmitMultiRegionAccessPointRoutesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/SubmitMultiRegionAccessPointRoutesCommandOutput/)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/TagResourceCommandOutput/)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/UntagResourceCommandOutput/)

</details>
<details>
<summary>
UpdateJobPriority
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/UpdateJobPriorityCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/UpdateJobPriorityCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/UpdateJobPriorityCommandOutput/)

</details>
<details>
<summary>
UpdateJobStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/UpdateJobStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/UpdateJobStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/UpdateJobStatusCommandOutput/)

</details>
<details>
<summary>
UpdateStorageLensGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3-control/command/UpdateStorageLensGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/UpdateStorageLensGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3-control/Interface/UpdateStorageLensGroupCommandOutput/)

</details>
