<!-- generated file, do not edit directly -->

# @aws-sdk/client-clouddirectory

## Description

AWS SDK for JavaScript CloudDirectory Client for Node.js, Browser and React Native.

<fullname>Amazon Cloud Directory</fullname>
<p>Amazon Cloud Directory is a component of the AWS Directory Service that simplifies the
development and management of cloud-scale web, mobile, and IoT applications. This guide
describes the Cloud Directory operations that you can call programmatically and includes
detailed information on data types and errors. For information about Cloud Directory features, see <a href="https://aws.amazon.com/directoryservice/">AWS Directory
Service</a> and the <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/what_is_cloud_directory.html">Amazon Cloud Directory Developer Guide</a>.</p>

## Installing
To install this package, simply type add or install @aws-sdk/client-clouddirectory
using your favorite package manager:
- `npm install @aws-sdk/client-clouddirectory`
- `yarn add @aws-sdk/client-clouddirectory`
- `pnpm add @aws-sdk/client-clouddirectory`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `CloudDirectoryClient` and
the commands you need, for example `ListDirectoriesCommand`:

```js
// ES5 example
const { CloudDirectoryClient, ListDirectoriesCommand } = require("@aws-sdk/client-clouddirectory");
```

```ts
// ES6+ example
import { CloudDirectoryClient, ListDirectoriesCommand } from "@aws-sdk/client-clouddirectory";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new CloudDirectoryClient({ region: "REGION" });

const params = { /** input parameters */ };
const command = new ListDirectoriesCommand(params);
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
import * as AWS from "@aws-sdk/client-clouddirectory";
const client = new AWS.CloudDirectory({ region: "REGION" });

// async/await.
try {
  const data = await client.listDirectories(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listDirectories(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listDirectories(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-clouddirectory` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AddFacetToObject
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/AddFacetToObjectCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/AddFacetToObjectCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/AddFacetToObjectCommandOutput/)
</details>
<details>
<summary>
ApplySchema
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/ApplySchemaCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/ApplySchemaCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/ApplySchemaCommandOutput/)
</details>
<details>
<summary>
AttachObject
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/AttachObjectCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/AttachObjectCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/AttachObjectCommandOutput/)
</details>
<details>
<summary>
AttachPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/AttachPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/AttachPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/AttachPolicyCommandOutput/)
</details>
<details>
<summary>
AttachToIndex
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/AttachToIndexCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/AttachToIndexCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/AttachToIndexCommandOutput/)
</details>
<details>
<summary>
AttachTypedLink
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/AttachTypedLinkCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/AttachTypedLinkCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/AttachTypedLinkCommandOutput/)
</details>
<details>
<summary>
BatchRead
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/BatchReadCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/BatchReadCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/BatchReadCommandOutput/)
</details>
<details>
<summary>
BatchWrite
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/BatchWriteCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/BatchWriteCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/BatchWriteCommandOutput/)
</details>
<details>
<summary>
CreateDirectory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/CreateDirectoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/CreateDirectoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/CreateDirectoryCommandOutput/)
</details>
<details>
<summary>
CreateFacet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/CreateFacetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/CreateFacetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/CreateFacetCommandOutput/)
</details>
<details>
<summary>
CreateIndex
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/CreateIndexCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/CreateIndexCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/CreateIndexCommandOutput/)
</details>
<details>
<summary>
CreateObject
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/CreateObjectCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/CreateObjectCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/CreateObjectCommandOutput/)
</details>
<details>
<summary>
CreateSchema
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/CreateSchemaCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/CreateSchemaCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/CreateSchemaCommandOutput/)
</details>
<details>
<summary>
CreateTypedLinkFacet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/CreateTypedLinkFacetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/CreateTypedLinkFacetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/CreateTypedLinkFacetCommandOutput/)
</details>
<details>
<summary>
DeleteDirectory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/DeleteDirectoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/DeleteDirectoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/DeleteDirectoryCommandOutput/)
</details>
<details>
<summary>
DeleteFacet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/DeleteFacetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/DeleteFacetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/DeleteFacetCommandOutput/)
</details>
<details>
<summary>
DeleteObject
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/DeleteObjectCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/DeleteObjectCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/DeleteObjectCommandOutput/)
</details>
<details>
<summary>
DeleteSchema
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/DeleteSchemaCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/DeleteSchemaCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/DeleteSchemaCommandOutput/)
</details>
<details>
<summary>
DeleteTypedLinkFacet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/DeleteTypedLinkFacetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/DeleteTypedLinkFacetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/DeleteTypedLinkFacetCommandOutput/)
</details>
<details>
<summary>
DetachFromIndex
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/DetachFromIndexCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/DetachFromIndexCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/DetachFromIndexCommandOutput/)
</details>
<details>
<summary>
DetachObject
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/DetachObjectCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/DetachObjectCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/DetachObjectCommandOutput/)
</details>
<details>
<summary>
DetachPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/DetachPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/DetachPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/DetachPolicyCommandOutput/)
</details>
<details>
<summary>
DetachTypedLink
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/DetachTypedLinkCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/DetachTypedLinkCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/DetachTypedLinkCommandOutput/)
</details>
<details>
<summary>
DisableDirectory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/DisableDirectoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/DisableDirectoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/DisableDirectoryCommandOutput/)
</details>
<details>
<summary>
EnableDirectory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/EnableDirectoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/EnableDirectoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/EnableDirectoryCommandOutput/)
</details>
<details>
<summary>
GetAppliedSchemaVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/GetAppliedSchemaVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/GetAppliedSchemaVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/GetAppliedSchemaVersionCommandOutput/)
</details>
<details>
<summary>
GetDirectory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/GetDirectoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/GetDirectoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/GetDirectoryCommandOutput/)
</details>
<details>
<summary>
GetFacet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/GetFacetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/GetFacetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/GetFacetCommandOutput/)
</details>
<details>
<summary>
GetLinkAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/GetLinkAttributesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/GetLinkAttributesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/GetLinkAttributesCommandOutput/)
</details>
<details>
<summary>
GetObjectAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/GetObjectAttributesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/GetObjectAttributesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/GetObjectAttributesCommandOutput/)
</details>
<details>
<summary>
GetObjectInformation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/GetObjectInformationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/GetObjectInformationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/GetObjectInformationCommandOutput/)
</details>
<details>
<summary>
GetSchemaAsJson
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/GetSchemaAsJsonCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/GetSchemaAsJsonCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/GetSchemaAsJsonCommandOutput/)
</details>
<details>
<summary>
GetTypedLinkFacetInformation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/GetTypedLinkFacetInformationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/GetTypedLinkFacetInformationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/GetTypedLinkFacetInformationCommandOutput/)
</details>
<details>
<summary>
ListAppliedSchemaArns
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/ListAppliedSchemaArnsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/ListAppliedSchemaArnsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/ListAppliedSchemaArnsCommandOutput/)
</details>
<details>
<summary>
ListAttachedIndices
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/ListAttachedIndicesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/ListAttachedIndicesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/ListAttachedIndicesCommandOutput/)
</details>
<details>
<summary>
ListDevelopmentSchemaArns
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/ListDevelopmentSchemaArnsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/ListDevelopmentSchemaArnsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/ListDevelopmentSchemaArnsCommandOutput/)
</details>
<details>
<summary>
ListDirectories
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/ListDirectoriesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/ListDirectoriesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/ListDirectoriesCommandOutput/)
</details>
<details>
<summary>
ListFacetAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/ListFacetAttributesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/ListFacetAttributesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/ListFacetAttributesCommandOutput/)
</details>
<details>
<summary>
ListFacetNames
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/ListFacetNamesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/ListFacetNamesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/ListFacetNamesCommandOutput/)
</details>
<details>
<summary>
ListIncomingTypedLinks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/ListIncomingTypedLinksCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/ListIncomingTypedLinksCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/ListIncomingTypedLinksCommandOutput/)
</details>
<details>
<summary>
ListIndex
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/ListIndexCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/ListIndexCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/ListIndexCommandOutput/)
</details>
<details>
<summary>
ListManagedSchemaArns
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/ListManagedSchemaArnsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/ListManagedSchemaArnsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/ListManagedSchemaArnsCommandOutput/)
</details>
<details>
<summary>
ListObjectAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/ListObjectAttributesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/ListObjectAttributesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/ListObjectAttributesCommandOutput/)
</details>
<details>
<summary>
ListObjectChildren
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/ListObjectChildrenCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/ListObjectChildrenCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/ListObjectChildrenCommandOutput/)
</details>
<details>
<summary>
ListObjectParentPaths
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/ListObjectParentPathsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/ListObjectParentPathsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/ListObjectParentPathsCommandOutput/)
</details>
<details>
<summary>
ListObjectParents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/ListObjectParentsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/ListObjectParentsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/ListObjectParentsCommandOutput/)
</details>
<details>
<summary>
ListObjectPolicies
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/ListObjectPoliciesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/ListObjectPoliciesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/ListObjectPoliciesCommandOutput/)
</details>
<details>
<summary>
ListOutgoingTypedLinks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/ListOutgoingTypedLinksCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/ListOutgoingTypedLinksCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/ListOutgoingTypedLinksCommandOutput/)
</details>
<details>
<summary>
ListPolicyAttachments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/ListPolicyAttachmentsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/ListPolicyAttachmentsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/ListPolicyAttachmentsCommandOutput/)
</details>
<details>
<summary>
ListPublishedSchemaArns
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/ListPublishedSchemaArnsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/ListPublishedSchemaArnsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/ListPublishedSchemaArnsCommandOutput/)
</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/ListTagsForResourceCommandOutput/)
</details>
<details>
<summary>
ListTypedLinkFacetAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/ListTypedLinkFacetAttributesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/ListTypedLinkFacetAttributesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/ListTypedLinkFacetAttributesCommandOutput/)
</details>
<details>
<summary>
ListTypedLinkFacetNames
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/ListTypedLinkFacetNamesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/ListTypedLinkFacetNamesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/ListTypedLinkFacetNamesCommandOutput/)
</details>
<details>
<summary>
LookupPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/LookupPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/LookupPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/LookupPolicyCommandOutput/)
</details>
<details>
<summary>
PublishSchema
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/PublishSchemaCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/PublishSchemaCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/PublishSchemaCommandOutput/)
</details>
<details>
<summary>
PutSchemaFromJson
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/PutSchemaFromJsonCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/PutSchemaFromJsonCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/PutSchemaFromJsonCommandOutput/)
</details>
<details>
<summary>
RemoveFacetFromObject
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/RemoveFacetFromObjectCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/RemoveFacetFromObjectCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/RemoveFacetFromObjectCommandOutput/)
</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/TagResourceCommandOutput/)
</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/UntagResourceCommandOutput/)
</details>
<details>
<summary>
UpdateFacet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/UpdateFacetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/UpdateFacetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/UpdateFacetCommandOutput/)
</details>
<details>
<summary>
UpdateLinkAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/UpdateLinkAttributesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/UpdateLinkAttributesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/UpdateLinkAttributesCommandOutput/)
</details>
<details>
<summary>
UpdateObjectAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/UpdateObjectAttributesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/UpdateObjectAttributesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/UpdateObjectAttributesCommandOutput/)
</details>
<details>
<summary>
UpdateSchema
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/UpdateSchemaCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/UpdateSchemaCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/UpdateSchemaCommandOutput/)
</details>
<details>
<summary>
UpdateTypedLinkFacet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/UpdateTypedLinkFacetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/UpdateTypedLinkFacetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/UpdateTypedLinkFacetCommandOutput/)
</details>
<details>
<summary>
UpgradeAppliedSchema
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/UpgradeAppliedSchemaCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/UpgradeAppliedSchemaCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/UpgradeAppliedSchemaCommandOutput/)
</details>
<details>
<summary>
UpgradePublishedSchema
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/clouddirectory/command/UpgradePublishedSchemaCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/UpgradePublishedSchemaCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-clouddirectory/Interface/UpgradePublishedSchemaCommandOutput/)
</details>
