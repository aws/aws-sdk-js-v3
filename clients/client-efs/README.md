<!-- generated file, do not edit directly -->

# @aws-sdk/client-efs

## Description

AWS SDK for JavaScript EFS Client for Node.js, Browser and React Native.

<fullname>Amazon Elastic File System</fullname>

<p>Amazon Elastic File System (Amazon EFS) provides simple, scalable file storage for
use with Amazon EC2 Linux and Mac instances in the Amazon Web Services Cloud. With Amazon EFS, storage capacity is elastic, growing and shrinking automatically as you add and
remove files, so that your applications have the storage they need, when they need it. For
more information, see the <a href="https://docs.aws.amazon.com/efs/latest/ug/api-reference.html">Amazon Elastic File System API Reference</a> and the <a href="https://docs.aws.amazon.com/efs/latest/ug/whatisefs.html">Amazon Elastic File System User Guide</a>.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-efs
using your favorite package manager:

- `npm install @aws-sdk/client-efs`
- `yarn add @aws-sdk/client-efs`
- `pnpm add @aws-sdk/client-efs`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `EFSClient` and
the commands you need, for example `CreateAccessPointCommand`:

```js
// ES5 example
const { EFSClient, CreateAccessPointCommand } = require("@aws-sdk/client-efs");
```

```ts
// ES6+ example
import { EFSClient, CreateAccessPointCommand } from "@aws-sdk/client-efs";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new EFSClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new CreateAccessPointCommand(params);
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
import * as AWS from "@aws-sdk/client-efs";
const client = new AWS.EFS({ region: "REGION" });

// async/await.
try {
  const data = await client.createAccessPoint(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .createAccessPoint(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.createAccessPoint(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-efs` package is updated.
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/classes/createaccesspointcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/interfaces/createaccesspointcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/interfaces/createaccesspointcommandoutput.html)

</details>
<details>
<summary>
CreateFileSystem
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/classes/createfilesystemcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/interfaces/createfilesystemcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/interfaces/createfilesystemcommandoutput.html)

</details>
<details>
<summary>
CreateMountTarget
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/classes/createmounttargetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/interfaces/createmounttargetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/interfaces/createmounttargetcommandoutput.html)

</details>
<details>
<summary>
CreateReplicationConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/classes/createreplicationconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/interfaces/createreplicationconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/interfaces/createreplicationconfigurationcommandoutput.html)

</details>
<details>
<summary>
CreateTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/classes/createtagscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/interfaces/createtagscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/interfaces/createtagscommandoutput.html)

</details>
<details>
<summary>
DeleteAccessPoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/classes/deleteaccesspointcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/interfaces/deleteaccesspointcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/interfaces/deleteaccesspointcommandoutput.html)

</details>
<details>
<summary>
DeleteFileSystem
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/classes/deletefilesystemcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/interfaces/deletefilesystemcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/interfaces/deletefilesystemcommandoutput.html)

</details>
<details>
<summary>
DeleteFileSystemPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/classes/deletefilesystempolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/interfaces/deletefilesystempolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/interfaces/deletefilesystempolicycommandoutput.html)

</details>
<details>
<summary>
DeleteMountTarget
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/classes/deletemounttargetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/interfaces/deletemounttargetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/interfaces/deletemounttargetcommandoutput.html)

</details>
<details>
<summary>
DeleteReplicationConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/classes/deletereplicationconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/interfaces/deletereplicationconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/interfaces/deletereplicationconfigurationcommandoutput.html)

</details>
<details>
<summary>
DeleteTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/classes/deletetagscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/interfaces/deletetagscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/interfaces/deletetagscommandoutput.html)

</details>
<details>
<summary>
DescribeAccessPoints
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/classes/describeaccesspointscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/interfaces/describeaccesspointscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/interfaces/describeaccesspointscommandoutput.html)

</details>
<details>
<summary>
DescribeAccountPreferences
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/classes/describeaccountpreferencescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/interfaces/describeaccountpreferencescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/interfaces/describeaccountpreferencescommandoutput.html)

</details>
<details>
<summary>
DescribeBackupPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/classes/describebackuppolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/interfaces/describebackuppolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/interfaces/describebackuppolicycommandoutput.html)

</details>
<details>
<summary>
DescribeFileSystemPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/classes/describefilesystempolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/interfaces/describefilesystempolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/interfaces/describefilesystempolicycommandoutput.html)

</details>
<details>
<summary>
DescribeFileSystems
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/classes/describefilesystemscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/interfaces/describefilesystemscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/interfaces/describefilesystemscommandoutput.html)

</details>
<details>
<summary>
DescribeLifecycleConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/classes/describelifecycleconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/interfaces/describelifecycleconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/interfaces/describelifecycleconfigurationcommandoutput.html)

</details>
<details>
<summary>
DescribeMountTargets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/classes/describemounttargetscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/interfaces/describemounttargetscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/interfaces/describemounttargetscommandoutput.html)

</details>
<details>
<summary>
DescribeMountTargetSecurityGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/classes/describemounttargetsecuritygroupscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/interfaces/describemounttargetsecuritygroupscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/interfaces/describemounttargetsecuritygroupscommandoutput.html)

</details>
<details>
<summary>
DescribeReplicationConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/classes/describereplicationconfigurationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/interfaces/describereplicationconfigurationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/interfaces/describereplicationconfigurationscommandoutput.html)

</details>
<details>
<summary>
DescribeTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/classes/describetagscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/interfaces/describetagscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/interfaces/describetagscommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
ModifyMountTargetSecurityGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/classes/modifymounttargetsecuritygroupscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/interfaces/modifymounttargetsecuritygroupscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/interfaces/modifymounttargetsecuritygroupscommandoutput.html)

</details>
<details>
<summary>
PutAccountPreferences
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/classes/putaccountpreferencescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/interfaces/putaccountpreferencescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/interfaces/putaccountpreferencescommandoutput.html)

</details>
<details>
<summary>
PutBackupPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/classes/putbackuppolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/interfaces/putbackuppolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/interfaces/putbackuppolicycommandoutput.html)

</details>
<details>
<summary>
PutFileSystemPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/classes/putfilesystempolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/interfaces/putfilesystempolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/interfaces/putfilesystempolicycommandoutput.html)

</details>
<details>
<summary>
PutLifecycleConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/classes/putlifecycleconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/interfaces/putlifecycleconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/interfaces/putlifecycleconfigurationcommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateFileSystem
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/classes/updatefilesystemcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/interfaces/updatefilesystemcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-efs/interfaces/updatefilesystemcommandoutput.html)

</details>
