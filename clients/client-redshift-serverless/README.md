<!-- generated file, do not edit directly -->

# @aws-sdk/client-redshift-serverless

## Description

AWS SDK for JavaScript RedshiftServerless Client for Node.js, Browser and React Native.

<p>This is an interface reference for Amazon Redshift Serverless.
It contains documentation for one of the programming or command line interfaces you can use to manage Amazon Redshift Serverless.
</p>
<p>Amazon Redshift Serverless automatically provisions data warehouse capacity and intelligently scales the
underlying resources based on workload demands. Amazon Redshift Serverless adjusts capacity in seconds to deliver consistently high
performance and simplified operations for even the most demanding and volatile workloads. Amazon Redshift Serverless lets you
focus on using your data to acquire new insights for your business and customers.
</p>
<p>
To learn more about Amazon Redshift Serverless,
see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/serverless-whatis.html">What is Amazon Redshift Serverless</a>.
</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-redshift-serverless
using your favorite package manager:

- `npm install @aws-sdk/client-redshift-serverless`
- `yarn add @aws-sdk/client-redshift-serverless`
- `pnpm add @aws-sdk/client-redshift-serverless`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `RedshiftServerlessClient` and
the commands you need, for example `ConvertRecoveryPointToSnapshotCommand`:

```js
// ES5 example
const {
  RedshiftServerlessClient,
  ConvertRecoveryPointToSnapshotCommand,
} = require("@aws-sdk/client-redshift-serverless");
```

```ts
// ES6+ example
import { RedshiftServerlessClient, ConvertRecoveryPointToSnapshotCommand } from "@aws-sdk/client-redshift-serverless";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new RedshiftServerlessClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ConvertRecoveryPointToSnapshotCommand(params);
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
import * as AWS from "@aws-sdk/client-redshift-serverless";
const client = new AWS.RedshiftServerless({ region: "REGION" });

// async/await.
try {
  const data = await client.convertRecoveryPointToSnapshot(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .convertRecoveryPointToSnapshot(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.convertRecoveryPointToSnapshot(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-redshift-serverless` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
ConvertRecoveryPointToSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/classes/convertrecoverypointtosnapshotcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/convertrecoverypointtosnapshotcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/convertrecoverypointtosnapshotcommandoutput.html)

</details>
<details>
<summary>
CreateEndpointAccess
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/classes/createendpointaccesscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/createendpointaccesscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/createendpointaccesscommandoutput.html)

</details>
<details>
<summary>
CreateNamespace
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/classes/createnamespacecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/createnamespacecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/createnamespacecommandoutput.html)

</details>
<details>
<summary>
CreateSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/classes/createsnapshotcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/createsnapshotcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/createsnapshotcommandoutput.html)

</details>
<details>
<summary>
CreateUsageLimit
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/classes/createusagelimitcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/createusagelimitcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/createusagelimitcommandoutput.html)

</details>
<details>
<summary>
CreateWorkgroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/classes/createworkgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/createworkgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/createworkgroupcommandoutput.html)

</details>
<details>
<summary>
DeleteEndpointAccess
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/classes/deleteendpointaccesscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/deleteendpointaccesscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/deleteendpointaccesscommandoutput.html)

</details>
<details>
<summary>
DeleteNamespace
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/classes/deletenamespacecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/deletenamespacecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/deletenamespacecommandoutput.html)

</details>
<details>
<summary>
DeleteResourcePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/classes/deleteresourcepolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/deleteresourcepolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/deleteresourcepolicycommandoutput.html)

</details>
<details>
<summary>
DeleteSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/classes/deletesnapshotcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/deletesnapshotcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/deletesnapshotcommandoutput.html)

</details>
<details>
<summary>
DeleteUsageLimit
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/classes/deleteusagelimitcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/deleteusagelimitcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/deleteusagelimitcommandoutput.html)

</details>
<details>
<summary>
DeleteWorkgroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/classes/deleteworkgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/deleteworkgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/deleteworkgroupcommandoutput.html)

</details>
<details>
<summary>
GetCredentials
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/classes/getcredentialscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/getcredentialscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/getcredentialscommandoutput.html)

</details>
<details>
<summary>
GetEndpointAccess
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/classes/getendpointaccesscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/getendpointaccesscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/getendpointaccesscommandoutput.html)

</details>
<details>
<summary>
GetNamespace
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/classes/getnamespacecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/getnamespacecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/getnamespacecommandoutput.html)

</details>
<details>
<summary>
GetRecoveryPoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/classes/getrecoverypointcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/getrecoverypointcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/getrecoverypointcommandoutput.html)

</details>
<details>
<summary>
GetResourcePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/classes/getresourcepolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/getresourcepolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/getresourcepolicycommandoutput.html)

</details>
<details>
<summary>
GetSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/classes/getsnapshotcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/getsnapshotcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/getsnapshotcommandoutput.html)

</details>
<details>
<summary>
GetTableRestoreStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/classes/gettablerestorestatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/gettablerestorestatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/gettablerestorestatuscommandoutput.html)

</details>
<details>
<summary>
GetUsageLimit
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/classes/getusagelimitcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/getusagelimitcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/getusagelimitcommandoutput.html)

</details>
<details>
<summary>
GetWorkgroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/classes/getworkgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/getworkgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/getworkgroupcommandoutput.html)

</details>
<details>
<summary>
ListEndpointAccess
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/classes/listendpointaccesscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/listendpointaccesscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/listendpointaccesscommandoutput.html)

</details>
<details>
<summary>
ListNamespaces
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/classes/listnamespacescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/listnamespacescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/listnamespacescommandoutput.html)

</details>
<details>
<summary>
ListRecoveryPoints
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/classes/listrecoverypointscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/listrecoverypointscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/listrecoverypointscommandoutput.html)

</details>
<details>
<summary>
ListSnapshots
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/classes/listsnapshotscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/listsnapshotscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/listsnapshotscommandoutput.html)

</details>
<details>
<summary>
ListTableRestoreStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/classes/listtablerestorestatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/listtablerestorestatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/listtablerestorestatuscommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
ListUsageLimits
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/classes/listusagelimitscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/listusagelimitscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/listusagelimitscommandoutput.html)

</details>
<details>
<summary>
ListWorkgroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/classes/listworkgroupscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/listworkgroupscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/listworkgroupscommandoutput.html)

</details>
<details>
<summary>
PutResourcePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/classes/putresourcepolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/putresourcepolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/putresourcepolicycommandoutput.html)

</details>
<details>
<summary>
RestoreFromRecoveryPoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/classes/restorefromrecoverypointcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/restorefromrecoverypointcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/restorefromrecoverypointcommandoutput.html)

</details>
<details>
<summary>
RestoreFromSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/classes/restorefromsnapshotcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/restorefromsnapshotcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/restorefromsnapshotcommandoutput.html)

</details>
<details>
<summary>
RestoreTableFromSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/classes/restoretablefromsnapshotcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/restoretablefromsnapshotcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/restoretablefromsnapshotcommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateEndpointAccess
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/classes/updateendpointaccesscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/updateendpointaccesscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/updateendpointaccesscommandoutput.html)

</details>
<details>
<summary>
UpdateNamespace
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/classes/updatenamespacecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/updatenamespacecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/updatenamespacecommandoutput.html)

</details>
<details>
<summary>
UpdateSnapshot
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/classes/updatesnapshotcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/updatesnapshotcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/updatesnapshotcommandoutput.html)

</details>
<details>
<summary>
UpdateUsageLimit
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/classes/updateusagelimitcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/updateusagelimitcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/updateusagelimitcommandoutput.html)

</details>
<details>
<summary>
UpdateWorkgroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/classes/updateworkgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/updateworkgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-redshift-serverless/interfaces/updateworkgroupcommandoutput.html)

</details>
