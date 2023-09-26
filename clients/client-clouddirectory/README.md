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

To install the this package, simply type add or install @aws-sdk/client-clouddirectory
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

const params = {
  /** input parameters */
};
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/addfacettoobjectcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/addfacettoobjectcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/addfacettoobjectcommandoutput.html)

</details>
<details>
<summary>
ApplySchema
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/applyschemacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/applyschemacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/applyschemacommandoutput.html)

</details>
<details>
<summary>
AttachObject
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/attachobjectcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/attachobjectcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/attachobjectcommandoutput.html)

</details>
<details>
<summary>
AttachPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/attachpolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/attachpolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/attachpolicycommandoutput.html)

</details>
<details>
<summary>
AttachToIndex
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/attachtoindexcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/attachtoindexcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/attachtoindexcommandoutput.html)

</details>
<details>
<summary>
AttachTypedLink
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/attachtypedlinkcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/attachtypedlinkcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/attachtypedlinkcommandoutput.html)

</details>
<details>
<summary>
BatchRead
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/batchreadcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/batchreadcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/batchreadcommandoutput.html)

</details>
<details>
<summary>
BatchWrite
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/batchwritecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/batchwritecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/batchwritecommandoutput.html)

</details>
<details>
<summary>
CreateDirectory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/createdirectorycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/createdirectorycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/createdirectorycommandoutput.html)

</details>
<details>
<summary>
CreateFacet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/createfacetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/createfacetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/createfacetcommandoutput.html)

</details>
<details>
<summary>
CreateIndex
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/createindexcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/createindexcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/createindexcommandoutput.html)

</details>
<details>
<summary>
CreateObject
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/createobjectcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/createobjectcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/createobjectcommandoutput.html)

</details>
<details>
<summary>
CreateSchema
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/createschemacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/createschemacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/createschemacommandoutput.html)

</details>
<details>
<summary>
CreateTypedLinkFacet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/createtypedlinkfacetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/createtypedlinkfacetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/createtypedlinkfacetcommandoutput.html)

</details>
<details>
<summary>
DeleteDirectory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/deletedirectorycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/deletedirectorycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/deletedirectorycommandoutput.html)

</details>
<details>
<summary>
DeleteFacet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/deletefacetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/deletefacetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/deletefacetcommandoutput.html)

</details>
<details>
<summary>
DeleteObject
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/deleteobjectcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/deleteobjectcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/deleteobjectcommandoutput.html)

</details>
<details>
<summary>
DeleteSchema
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/deleteschemacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/deleteschemacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/deleteschemacommandoutput.html)

</details>
<details>
<summary>
DeleteTypedLinkFacet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/deletetypedlinkfacetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/deletetypedlinkfacetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/deletetypedlinkfacetcommandoutput.html)

</details>
<details>
<summary>
DetachFromIndex
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/detachfromindexcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/detachfromindexcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/detachfromindexcommandoutput.html)

</details>
<details>
<summary>
DetachObject
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/detachobjectcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/detachobjectcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/detachobjectcommandoutput.html)

</details>
<details>
<summary>
DetachPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/detachpolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/detachpolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/detachpolicycommandoutput.html)

</details>
<details>
<summary>
DetachTypedLink
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/detachtypedlinkcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/detachtypedlinkcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/detachtypedlinkcommandoutput.html)

</details>
<details>
<summary>
DisableDirectory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/disabledirectorycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/disabledirectorycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/disabledirectorycommandoutput.html)

</details>
<details>
<summary>
EnableDirectory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/enabledirectorycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/enabledirectorycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/enabledirectorycommandoutput.html)

</details>
<details>
<summary>
GetAppliedSchemaVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/getappliedschemaversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/getappliedschemaversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/getappliedschemaversioncommandoutput.html)

</details>
<details>
<summary>
GetDirectory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/getdirectorycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/getdirectorycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/getdirectorycommandoutput.html)

</details>
<details>
<summary>
GetFacet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/getfacetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/getfacetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/getfacetcommandoutput.html)

</details>
<details>
<summary>
GetLinkAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/getlinkattributescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/getlinkattributescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/getlinkattributescommandoutput.html)

</details>
<details>
<summary>
GetObjectAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/getobjectattributescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/getobjectattributescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/getobjectattributescommandoutput.html)

</details>
<details>
<summary>
GetObjectInformation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/getobjectinformationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/getobjectinformationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/getobjectinformationcommandoutput.html)

</details>
<details>
<summary>
GetSchemaAsJson
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/getschemaasjsoncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/getschemaasjsoncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/getschemaasjsoncommandoutput.html)

</details>
<details>
<summary>
GetTypedLinkFacetInformation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/gettypedlinkfacetinformationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/gettypedlinkfacetinformationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/gettypedlinkfacetinformationcommandoutput.html)

</details>
<details>
<summary>
ListAppliedSchemaArns
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/listappliedschemaarnscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/listappliedschemaarnscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/listappliedschemaarnscommandoutput.html)

</details>
<details>
<summary>
ListAttachedIndices
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/listattachedindicescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/listattachedindicescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/listattachedindicescommandoutput.html)

</details>
<details>
<summary>
ListDevelopmentSchemaArns
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/listdevelopmentschemaarnscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/listdevelopmentschemaarnscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/listdevelopmentschemaarnscommandoutput.html)

</details>
<details>
<summary>
ListDirectories
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/listdirectoriescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/listdirectoriescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/listdirectoriescommandoutput.html)

</details>
<details>
<summary>
ListFacetAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/listfacetattributescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/listfacetattributescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/listfacetattributescommandoutput.html)

</details>
<details>
<summary>
ListFacetNames
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/listfacetnamescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/listfacetnamescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/listfacetnamescommandoutput.html)

</details>
<details>
<summary>
ListIncomingTypedLinks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/listincomingtypedlinkscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/listincomingtypedlinkscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/listincomingtypedlinkscommandoutput.html)

</details>
<details>
<summary>
ListIndex
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/listindexcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/listindexcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/listindexcommandoutput.html)

</details>
<details>
<summary>
ListManagedSchemaArns
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/listmanagedschemaarnscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/listmanagedschemaarnscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/listmanagedschemaarnscommandoutput.html)

</details>
<details>
<summary>
ListObjectAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/listobjectattributescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/listobjectattributescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/listobjectattributescommandoutput.html)

</details>
<details>
<summary>
ListObjectChildren
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/listobjectchildrencommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/listobjectchildrencommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/listobjectchildrencommandoutput.html)

</details>
<details>
<summary>
ListObjectParentPaths
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/listobjectparentpathscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/listobjectparentpathscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/listobjectparentpathscommandoutput.html)

</details>
<details>
<summary>
ListObjectParents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/listobjectparentscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/listobjectparentscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/listobjectparentscommandoutput.html)

</details>
<details>
<summary>
ListObjectPolicies
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/listobjectpoliciescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/listobjectpoliciescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/listobjectpoliciescommandoutput.html)

</details>
<details>
<summary>
ListOutgoingTypedLinks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/listoutgoingtypedlinkscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/listoutgoingtypedlinkscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/listoutgoingtypedlinkscommandoutput.html)

</details>
<details>
<summary>
ListPolicyAttachments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/listpolicyattachmentscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/listpolicyattachmentscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/listpolicyattachmentscommandoutput.html)

</details>
<details>
<summary>
ListPublishedSchemaArns
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/listpublishedschemaarnscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/listpublishedschemaarnscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/listpublishedschemaarnscommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
ListTypedLinkFacetAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/listtypedlinkfacetattributescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/listtypedlinkfacetattributescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/listtypedlinkfacetattributescommandoutput.html)

</details>
<details>
<summary>
ListTypedLinkFacetNames
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/listtypedlinkfacetnamescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/listtypedlinkfacetnamescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/listtypedlinkfacetnamescommandoutput.html)

</details>
<details>
<summary>
LookupPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/lookuppolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/lookuppolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/lookuppolicycommandoutput.html)

</details>
<details>
<summary>
PublishSchema
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/publishschemacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/publishschemacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/publishschemacommandoutput.html)

</details>
<details>
<summary>
PutSchemaFromJson
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/putschemafromjsoncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/putschemafromjsoncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/putschemafromjsoncommandoutput.html)

</details>
<details>
<summary>
RemoveFacetFromObject
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/removefacetfromobjectcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/removefacetfromobjectcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/removefacetfromobjectcommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateFacet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/updatefacetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/updatefacetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/updatefacetcommandoutput.html)

</details>
<details>
<summary>
UpdateLinkAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/updatelinkattributescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/updatelinkattributescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/updatelinkattributescommandoutput.html)

</details>
<details>
<summary>
UpdateObjectAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/updateobjectattributescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/updateobjectattributescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/updateobjectattributescommandoutput.html)

</details>
<details>
<summary>
UpdateSchema
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/updateschemacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/updateschemacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/updateschemacommandoutput.html)

</details>
<details>
<summary>
UpdateTypedLinkFacet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/updatetypedlinkfacetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/updatetypedlinkfacetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/updatetypedlinkfacetcommandoutput.html)

</details>
<details>
<summary>
UpgradeAppliedSchema
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/upgradeappliedschemacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/upgradeappliedschemacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/upgradeappliedschemacommandoutput.html)

</details>
<details>
<summary>
UpgradePublishedSchema
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/classes/upgradepublishedschemacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/upgradepublishedschemacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-clouddirectory/interfaces/upgradepublishedschemacommandoutput.html)

</details>
