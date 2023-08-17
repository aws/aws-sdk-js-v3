<!-- generated file, do not edit directly -->

# @aws-sdk/client-datasync

## Description

AWS SDK for JavaScript DataSync Client for Node.js, Browser and React Native.

<fullname>DataSync</fullname>

<p>DataSync is an online data movement and discovery service that simplifies data migration
and helps you quickly, easily, and securely transfer your file or object data to, from, and
between Amazon Web Services storage services.</p>
<p>This API interface reference includes documentation for using DataSync
programmatically. For complete information, see the <i>
<a href="https://docs.aws.amazon.com/datasync/latest/userguide/what-is-datasync.html">DataSync User
Guide</a>
</i>.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-datasync
using your favorite package manager:

- `npm install @aws-sdk/client-datasync`
- `yarn add @aws-sdk/client-datasync`
- `pnpm add @aws-sdk/client-datasync`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `DataSyncClient` and
the commands you need, for example `AddStorageSystemCommand`:

```js
// ES5 example
const { DataSyncClient, AddStorageSystemCommand } = require("@aws-sdk/client-datasync");
```

```ts
// ES6+ example
import { DataSyncClient, AddStorageSystemCommand } from "@aws-sdk/client-datasync";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new DataSyncClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new AddStorageSystemCommand(params);
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
import * as AWS from "@aws-sdk/client-datasync";
const client = new AWS.DataSync({ region: "REGION" });

// async/await.
try {
  const data = await client.addStorageSystem(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .addStorageSystem(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.addStorageSystem(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-datasync` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AddStorageSystem
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/classes/addstoragesystemcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/addstoragesystemcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/addstoragesystemcommandoutput.html)

</details>
<details>
<summary>
CancelTaskExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/classes/canceltaskexecutioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/canceltaskexecutioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/canceltaskexecutioncommandoutput.html)

</details>
<details>
<summary>
CreateAgent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/classes/createagentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/createagentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/createagentcommandoutput.html)

</details>
<details>
<summary>
CreateLocationAzureBlob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/classes/createlocationazureblobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/createlocationazureblobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/createlocationazureblobcommandoutput.html)

</details>
<details>
<summary>
CreateLocationEfs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/classes/createlocationefscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/createlocationefscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/createlocationefscommandoutput.html)

</details>
<details>
<summary>
CreateLocationFsxLustre
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/classes/createlocationfsxlustrecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/createlocationfsxlustrecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/createlocationfsxlustrecommandoutput.html)

</details>
<details>
<summary>
CreateLocationFsxOntap
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/classes/createlocationfsxontapcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/createlocationfsxontapcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/createlocationfsxontapcommandoutput.html)

</details>
<details>
<summary>
CreateLocationFsxOpenZfs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/classes/createlocationfsxopenzfscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/createlocationfsxopenzfscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/createlocationfsxopenzfscommandoutput.html)

</details>
<details>
<summary>
CreateLocationFsxWindows
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/classes/createlocationfsxwindowscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/createlocationfsxwindowscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/createlocationfsxwindowscommandoutput.html)

</details>
<details>
<summary>
CreateLocationHdfs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/classes/createlocationhdfscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/createlocationhdfscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/createlocationhdfscommandoutput.html)

</details>
<details>
<summary>
CreateLocationNfs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/classes/createlocationnfscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/createlocationnfscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/createlocationnfscommandoutput.html)

</details>
<details>
<summary>
CreateLocationObjectStorage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/classes/createlocationobjectstoragecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/createlocationobjectstoragecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/createlocationobjectstoragecommandoutput.html)

</details>
<details>
<summary>
CreateLocationS3
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/classes/createlocations3command.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/createlocations3commandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/createlocations3commandoutput.html)

</details>
<details>
<summary>
CreateLocationSmb
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/classes/createlocationsmbcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/createlocationsmbcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/createlocationsmbcommandoutput.html)

</details>
<details>
<summary>
CreateTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/classes/createtaskcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/createtaskcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/createtaskcommandoutput.html)

</details>
<details>
<summary>
DeleteAgent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/classes/deleteagentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/deleteagentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/deleteagentcommandoutput.html)

</details>
<details>
<summary>
DeleteLocation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/classes/deletelocationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/deletelocationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/deletelocationcommandoutput.html)

</details>
<details>
<summary>
DeleteTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/classes/deletetaskcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/deletetaskcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/deletetaskcommandoutput.html)

</details>
<details>
<summary>
DescribeAgent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/classes/describeagentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/describeagentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/describeagentcommandoutput.html)

</details>
<details>
<summary>
DescribeDiscoveryJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/classes/describediscoveryjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/describediscoveryjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/describediscoveryjobcommandoutput.html)

</details>
<details>
<summary>
DescribeLocationAzureBlob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/classes/describelocationazureblobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/describelocationazureblobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/describelocationazureblobcommandoutput.html)

</details>
<details>
<summary>
DescribeLocationEfs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/classes/describelocationefscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/describelocationefscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/describelocationefscommandoutput.html)

</details>
<details>
<summary>
DescribeLocationFsxLustre
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/classes/describelocationfsxlustrecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/describelocationfsxlustrecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/describelocationfsxlustrecommandoutput.html)

</details>
<details>
<summary>
DescribeLocationFsxOntap
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/classes/describelocationfsxontapcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/describelocationfsxontapcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/describelocationfsxontapcommandoutput.html)

</details>
<details>
<summary>
DescribeLocationFsxOpenZfs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/classes/describelocationfsxopenzfscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/describelocationfsxopenzfscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/describelocationfsxopenzfscommandoutput.html)

</details>
<details>
<summary>
DescribeLocationFsxWindows
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/classes/describelocationfsxwindowscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/describelocationfsxwindowscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/describelocationfsxwindowscommandoutput.html)

</details>
<details>
<summary>
DescribeLocationHdfs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/classes/describelocationhdfscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/describelocationhdfscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/describelocationhdfscommandoutput.html)

</details>
<details>
<summary>
DescribeLocationNfs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/classes/describelocationnfscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/describelocationnfscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/describelocationnfscommandoutput.html)

</details>
<details>
<summary>
DescribeLocationObjectStorage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/classes/describelocationobjectstoragecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/describelocationobjectstoragecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/describelocationobjectstoragecommandoutput.html)

</details>
<details>
<summary>
DescribeLocationS3
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/classes/describelocations3command.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/describelocations3commandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/describelocations3commandoutput.html)

</details>
<details>
<summary>
DescribeLocationSmb
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/classes/describelocationsmbcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/describelocationsmbcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/describelocationsmbcommandoutput.html)

</details>
<details>
<summary>
DescribeStorageSystem
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/classes/describestoragesystemcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/describestoragesystemcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/describestoragesystemcommandoutput.html)

</details>
<details>
<summary>
DescribeStorageSystemResourceMetrics
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/classes/describestoragesystemresourcemetricscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/describestoragesystemresourcemetricscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/describestoragesystemresourcemetricscommandoutput.html)

</details>
<details>
<summary>
DescribeStorageSystemResources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/classes/describestoragesystemresourcescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/describestoragesystemresourcescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/describestoragesystemresourcescommandoutput.html)

</details>
<details>
<summary>
DescribeTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/classes/describetaskcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/describetaskcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/describetaskcommandoutput.html)

</details>
<details>
<summary>
DescribeTaskExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/classes/describetaskexecutioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/describetaskexecutioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/describetaskexecutioncommandoutput.html)

</details>
<details>
<summary>
GenerateRecommendations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/classes/generaterecommendationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/generaterecommendationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/generaterecommendationscommandoutput.html)

</details>
<details>
<summary>
ListAgents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/classes/listagentscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/listagentscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/listagentscommandoutput.html)

</details>
<details>
<summary>
ListDiscoveryJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/classes/listdiscoveryjobscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/listdiscoveryjobscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/listdiscoveryjobscommandoutput.html)

</details>
<details>
<summary>
ListLocations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/classes/listlocationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/listlocationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/listlocationscommandoutput.html)

</details>
<details>
<summary>
ListStorageSystems
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/classes/liststoragesystemscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/liststoragesystemscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/liststoragesystemscommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
ListTaskExecutions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/classes/listtaskexecutionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/listtaskexecutionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/listtaskexecutionscommandoutput.html)

</details>
<details>
<summary>
ListTasks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/classes/listtaskscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/listtaskscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/listtaskscommandoutput.html)

</details>
<details>
<summary>
RemoveStorageSystem
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/classes/removestoragesystemcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/removestoragesystemcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/removestoragesystemcommandoutput.html)

</details>
<details>
<summary>
StartDiscoveryJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/classes/startdiscoveryjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/startdiscoveryjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/startdiscoveryjobcommandoutput.html)

</details>
<details>
<summary>
StartTaskExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/classes/starttaskexecutioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/starttaskexecutioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/starttaskexecutioncommandoutput.html)

</details>
<details>
<summary>
StopDiscoveryJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/classes/stopdiscoveryjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/stopdiscoveryjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/stopdiscoveryjobcommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateAgent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/classes/updateagentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/updateagentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/updateagentcommandoutput.html)

</details>
<details>
<summary>
UpdateDiscoveryJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/classes/updatediscoveryjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/updatediscoveryjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/updatediscoveryjobcommandoutput.html)

</details>
<details>
<summary>
UpdateLocationAzureBlob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/classes/updatelocationazureblobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/updatelocationazureblobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/updatelocationazureblobcommandoutput.html)

</details>
<details>
<summary>
UpdateLocationHdfs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/classes/updatelocationhdfscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/updatelocationhdfscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/updatelocationhdfscommandoutput.html)

</details>
<details>
<summary>
UpdateLocationNfs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/classes/updatelocationnfscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/updatelocationnfscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/updatelocationnfscommandoutput.html)

</details>
<details>
<summary>
UpdateLocationObjectStorage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/classes/updatelocationobjectstoragecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/updatelocationobjectstoragecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/updatelocationobjectstoragecommandoutput.html)

</details>
<details>
<summary>
UpdateLocationSmb
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/classes/updatelocationsmbcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/updatelocationsmbcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/updatelocationsmbcommandoutput.html)

</details>
<details>
<summary>
UpdateStorageSystem
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/classes/updatestoragesystemcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/updatestoragesystemcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/updatestoragesystemcommandoutput.html)

</details>
<details>
<summary>
UpdateTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/classes/updatetaskcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/updatetaskcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/updatetaskcommandoutput.html)

</details>
<details>
<summary>
UpdateTaskExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/classes/updatetaskexecutioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/updatetaskexecutioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-datasync/interfaces/updatetaskexecutioncommandoutput.html)

</details>
