<!-- generated file, do not edit directly -->

# @aws-sdk/client-cleanrooms

## Description

AWS SDK for JavaScript CleanRooms Client for Node.js, Browser and React Native.

<p>Welcome to the <i>Clean Rooms API Reference</i>.</p>
<p>Clean Rooms  is an Amazon Web Services service that helps multiple parties to join their data
together in a secure collaboration workspace. In the collaboration, members who can query
and receive results can get insights into the collective datasets without either party getting
access to the other party's raw data.</p>
<p>To learn more about Clean Rooms  concepts, procedures, and best practices, see the
<a href="https://docs.aws.amazon.com/clean-rooms/latest/userguide/what-is.html">Clean Rooms User Guide</a>.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-cleanrooms
using your favorite package manager:

- `npm install @aws-sdk/client-cleanrooms`
- `yarn add @aws-sdk/client-cleanrooms`
- `pnpm add @aws-sdk/client-cleanrooms`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `CleanRoomsClient` and
the commands you need, for example `BatchGetSchemaCommand`:

```js
// ES5 example
const { CleanRoomsClient, BatchGetSchemaCommand } = require("@aws-sdk/client-cleanrooms");
```

```ts
// ES6+ example
import { CleanRoomsClient, BatchGetSchemaCommand } from "@aws-sdk/client-cleanrooms";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new CleanRoomsClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new BatchGetSchemaCommand(params);
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
import * as AWS from "@aws-sdk/client-cleanrooms";
const client = new AWS.CleanRooms({ region: "REGION" });

// async/await.
try {
  const data = await client.batchGetSchema(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .batchGetSchema(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.batchGetSchema(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-cleanrooms` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
BatchGetSchema
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/classes/batchgetschemacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/batchgetschemacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/batchgetschemacommandoutput.html)

</details>
<details>
<summary>
CreateCollaboration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/classes/createcollaborationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/createcollaborationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/createcollaborationcommandoutput.html)

</details>
<details>
<summary>
CreateConfiguredTable
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/classes/createconfiguredtablecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/createconfiguredtablecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/createconfiguredtablecommandoutput.html)

</details>
<details>
<summary>
CreateConfiguredTableAnalysisRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/classes/createconfiguredtableanalysisrulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/createconfiguredtableanalysisrulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/createconfiguredtableanalysisrulecommandoutput.html)

</details>
<details>
<summary>
CreateConfiguredTableAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/classes/createconfiguredtableassociationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/createconfiguredtableassociationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/createconfiguredtableassociationcommandoutput.html)

</details>
<details>
<summary>
CreateMembership
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/classes/createmembershipcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/createmembershipcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/createmembershipcommandoutput.html)

</details>
<details>
<summary>
DeleteCollaboration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/classes/deletecollaborationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/deletecollaborationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/deletecollaborationcommandoutput.html)

</details>
<details>
<summary>
DeleteConfiguredTable
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/classes/deleteconfiguredtablecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/deleteconfiguredtablecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/deleteconfiguredtablecommandoutput.html)

</details>
<details>
<summary>
DeleteConfiguredTableAnalysisRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/classes/deleteconfiguredtableanalysisrulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/deleteconfiguredtableanalysisrulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/deleteconfiguredtableanalysisrulecommandoutput.html)

</details>
<details>
<summary>
DeleteConfiguredTableAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/classes/deleteconfiguredtableassociationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/deleteconfiguredtableassociationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/deleteconfiguredtableassociationcommandoutput.html)

</details>
<details>
<summary>
DeleteMember
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/classes/deletemembercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/deletemembercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/deletemembercommandoutput.html)

</details>
<details>
<summary>
DeleteMembership
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/classes/deletemembershipcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/deletemembershipcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/deletemembershipcommandoutput.html)

</details>
<details>
<summary>
GetCollaboration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/classes/getcollaborationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/getcollaborationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/getcollaborationcommandoutput.html)

</details>
<details>
<summary>
GetConfiguredTable
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/classes/getconfiguredtablecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/getconfiguredtablecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/getconfiguredtablecommandoutput.html)

</details>
<details>
<summary>
GetConfiguredTableAnalysisRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/classes/getconfiguredtableanalysisrulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/getconfiguredtableanalysisrulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/getconfiguredtableanalysisrulecommandoutput.html)

</details>
<details>
<summary>
GetConfiguredTableAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/classes/getconfiguredtableassociationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/getconfiguredtableassociationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/getconfiguredtableassociationcommandoutput.html)

</details>
<details>
<summary>
GetMembership
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/classes/getmembershipcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/getmembershipcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/getmembershipcommandoutput.html)

</details>
<details>
<summary>
GetProtectedQuery
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/classes/getprotectedquerycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/getprotectedquerycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/getprotectedquerycommandoutput.html)

</details>
<details>
<summary>
GetSchema
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/classes/getschemacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/getschemacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/getschemacommandoutput.html)

</details>
<details>
<summary>
GetSchemaAnalysisRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/classes/getschemaanalysisrulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/getschemaanalysisrulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/getschemaanalysisrulecommandoutput.html)

</details>
<details>
<summary>
ListCollaborations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/classes/listcollaborationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/listcollaborationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/listcollaborationscommandoutput.html)

</details>
<details>
<summary>
ListConfiguredTableAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/classes/listconfiguredtableassociationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/listconfiguredtableassociationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/listconfiguredtableassociationscommandoutput.html)

</details>
<details>
<summary>
ListConfiguredTables
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/classes/listconfiguredtablescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/listconfiguredtablescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/listconfiguredtablescommandoutput.html)

</details>
<details>
<summary>
ListMembers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/classes/listmemberscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/listmemberscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/listmemberscommandoutput.html)

</details>
<details>
<summary>
ListMemberships
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/classes/listmembershipscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/listmembershipscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/listmembershipscommandoutput.html)

</details>
<details>
<summary>
ListProtectedQueries
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/classes/listprotectedqueriescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/listprotectedqueriescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/listprotectedqueriescommandoutput.html)

</details>
<details>
<summary>
ListSchemas
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/classes/listschemascommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/listschemascommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/listschemascommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
StartProtectedQuery
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/classes/startprotectedquerycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/startprotectedquerycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/startprotectedquerycommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateCollaboration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/classes/updatecollaborationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/updatecollaborationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/updatecollaborationcommandoutput.html)

</details>
<details>
<summary>
UpdateConfiguredTable
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/classes/updateconfiguredtablecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/updateconfiguredtablecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/updateconfiguredtablecommandoutput.html)

</details>
<details>
<summary>
UpdateConfiguredTableAnalysisRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/classes/updateconfiguredtableanalysisrulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/updateconfiguredtableanalysisrulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/updateconfiguredtableanalysisrulecommandoutput.html)

</details>
<details>
<summary>
UpdateConfiguredTableAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/classes/updateconfiguredtableassociationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/updateconfiguredtableassociationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/updateconfiguredtableassociationcommandoutput.html)

</details>
<details>
<summary>
UpdateMembership
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/classes/updatemembershipcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/updatemembershipcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/updatemembershipcommandoutput.html)

</details>
<details>
<summary>
UpdateProtectedQuery
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/classes/updateprotectedquerycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/updateprotectedquerycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanrooms/interfaces/updateprotectedquerycommandoutput.html)

</details>
