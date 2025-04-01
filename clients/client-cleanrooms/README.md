<!-- generated file, do not edit directly -->

# @aws-sdk/client-cleanrooms

## Description

AWS SDK for JavaScript CleanRooms Client for Node.js, Browser and React Native.

<p>Welcome to the <i>Clean Rooms API Reference</i>.</p>
<p>Clean Rooms is an Amazon Web Services service that helps multiple parties to join
their data together in a secure collaboration workspace. In the collaboration, members who
can run queries and jobs and receive results can get insights into the collective datasets without either
party getting access to the other party's raw data.</p>
<p>To learn more about Clean Rooms concepts, procedures, and best practices, see the
<a href="https://docs.aws.amazon.com/clean-rooms/latest/userguide/what-is.html">Clean Rooms User Guide</a>.</p>
<p>To learn more about SQL commands, functions, and conditions supported in Clean Rooms, see the
<a href="https://docs.aws.amazon.com/clean-rooms/latest/sql-reference/sql-reference.html">Clean Rooms SQL Reference</a>.</p>

## Installing

To install this package, simply type add or install @aws-sdk/client-cleanrooms
using your favorite package manager:

- `npm install @aws-sdk/client-cleanrooms`
- `yarn add @aws-sdk/client-cleanrooms`
- `pnpm add @aws-sdk/client-cleanrooms`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `CleanRoomsClient` and
the commands you need, for example `ListMembersCommand`:

```js
// ES5 example
const { CleanRoomsClient, ListMembersCommand } = require("@aws-sdk/client-cleanrooms");
```

```ts
// ES6+ example
import { CleanRoomsClient, ListMembersCommand } from "@aws-sdk/client-cleanrooms";
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
const command = new ListMembersCommand(params);
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
  const data = await client.listMembers(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listMembers(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listMembers(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-cleanrooms` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
BatchGetCollaborationAnalysisTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/BatchGetCollaborationAnalysisTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/BatchGetCollaborationAnalysisTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/BatchGetCollaborationAnalysisTemplateCommandOutput/)

</details>
<details>
<summary>
BatchGetSchema
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/BatchGetSchemaCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/BatchGetSchemaCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/BatchGetSchemaCommandOutput/)

</details>
<details>
<summary>
BatchGetSchemaAnalysisRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/BatchGetSchemaAnalysisRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/BatchGetSchemaAnalysisRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/BatchGetSchemaAnalysisRuleCommandOutput/)

</details>
<details>
<summary>
CreateAnalysisTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/CreateAnalysisTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/CreateAnalysisTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/CreateAnalysisTemplateCommandOutput/)

</details>
<details>
<summary>
CreateCollaboration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/CreateCollaborationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/CreateCollaborationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/CreateCollaborationCommandOutput/)

</details>
<details>
<summary>
CreateConfiguredAudienceModelAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/CreateConfiguredAudienceModelAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/CreateConfiguredAudienceModelAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/CreateConfiguredAudienceModelAssociationCommandOutput/)

</details>
<details>
<summary>
CreateConfiguredTable
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/CreateConfiguredTableCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/CreateConfiguredTableCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/CreateConfiguredTableCommandOutput/)

</details>
<details>
<summary>
CreateConfiguredTableAnalysisRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/CreateConfiguredTableAnalysisRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/CreateConfiguredTableAnalysisRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/CreateConfiguredTableAnalysisRuleCommandOutput/)

</details>
<details>
<summary>
CreateConfiguredTableAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/CreateConfiguredTableAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/CreateConfiguredTableAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/CreateConfiguredTableAssociationCommandOutput/)

</details>
<details>
<summary>
CreateConfiguredTableAssociationAnalysisRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/CreateConfiguredTableAssociationAnalysisRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/CreateConfiguredTableAssociationAnalysisRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/CreateConfiguredTableAssociationAnalysisRuleCommandOutput/)

</details>
<details>
<summary>
CreateIdMappingTable
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/CreateIdMappingTableCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/CreateIdMappingTableCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/CreateIdMappingTableCommandOutput/)

</details>
<details>
<summary>
CreateIdNamespaceAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/CreateIdNamespaceAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/CreateIdNamespaceAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/CreateIdNamespaceAssociationCommandOutput/)

</details>
<details>
<summary>
CreateMembership
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/CreateMembershipCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/CreateMembershipCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/CreateMembershipCommandOutput/)

</details>
<details>
<summary>
CreatePrivacyBudgetTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/CreatePrivacyBudgetTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/CreatePrivacyBudgetTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/CreatePrivacyBudgetTemplateCommandOutput/)

</details>
<details>
<summary>
DeleteAnalysisTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/DeleteAnalysisTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/DeleteAnalysisTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/DeleteAnalysisTemplateCommandOutput/)

</details>
<details>
<summary>
DeleteCollaboration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/DeleteCollaborationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/DeleteCollaborationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/DeleteCollaborationCommandOutput/)

</details>
<details>
<summary>
DeleteConfiguredAudienceModelAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/DeleteConfiguredAudienceModelAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/DeleteConfiguredAudienceModelAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/DeleteConfiguredAudienceModelAssociationCommandOutput/)

</details>
<details>
<summary>
DeleteConfiguredTable
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/DeleteConfiguredTableCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/DeleteConfiguredTableCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/DeleteConfiguredTableCommandOutput/)

</details>
<details>
<summary>
DeleteConfiguredTableAnalysisRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/DeleteConfiguredTableAnalysisRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/DeleteConfiguredTableAnalysisRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/DeleteConfiguredTableAnalysisRuleCommandOutput/)

</details>
<details>
<summary>
DeleteConfiguredTableAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/DeleteConfiguredTableAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/DeleteConfiguredTableAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/DeleteConfiguredTableAssociationCommandOutput/)

</details>
<details>
<summary>
DeleteConfiguredTableAssociationAnalysisRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/DeleteConfiguredTableAssociationAnalysisRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/DeleteConfiguredTableAssociationAnalysisRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/DeleteConfiguredTableAssociationAnalysisRuleCommandOutput/)

</details>
<details>
<summary>
DeleteIdMappingTable
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/DeleteIdMappingTableCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/DeleteIdMappingTableCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/DeleteIdMappingTableCommandOutput/)

</details>
<details>
<summary>
DeleteIdNamespaceAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/DeleteIdNamespaceAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/DeleteIdNamespaceAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/DeleteIdNamespaceAssociationCommandOutput/)

</details>
<details>
<summary>
DeleteMember
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/DeleteMemberCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/DeleteMemberCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/DeleteMemberCommandOutput/)

</details>
<details>
<summary>
DeleteMembership
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/DeleteMembershipCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/DeleteMembershipCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/DeleteMembershipCommandOutput/)

</details>
<details>
<summary>
DeletePrivacyBudgetTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/DeletePrivacyBudgetTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/DeletePrivacyBudgetTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/DeletePrivacyBudgetTemplateCommandOutput/)

</details>
<details>
<summary>
GetAnalysisTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/GetAnalysisTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/GetAnalysisTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/GetAnalysisTemplateCommandOutput/)

</details>
<details>
<summary>
GetCollaboration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/GetCollaborationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/GetCollaborationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/GetCollaborationCommandOutput/)

</details>
<details>
<summary>
GetCollaborationAnalysisTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/GetCollaborationAnalysisTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/GetCollaborationAnalysisTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/GetCollaborationAnalysisTemplateCommandOutput/)

</details>
<details>
<summary>
GetCollaborationConfiguredAudienceModelAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/GetCollaborationConfiguredAudienceModelAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/GetCollaborationConfiguredAudienceModelAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/GetCollaborationConfiguredAudienceModelAssociationCommandOutput/)

</details>
<details>
<summary>
GetCollaborationIdNamespaceAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/GetCollaborationIdNamespaceAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/GetCollaborationIdNamespaceAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/GetCollaborationIdNamespaceAssociationCommandOutput/)

</details>
<details>
<summary>
GetCollaborationPrivacyBudgetTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/GetCollaborationPrivacyBudgetTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/GetCollaborationPrivacyBudgetTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/GetCollaborationPrivacyBudgetTemplateCommandOutput/)

</details>
<details>
<summary>
GetConfiguredAudienceModelAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/GetConfiguredAudienceModelAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/GetConfiguredAudienceModelAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/GetConfiguredAudienceModelAssociationCommandOutput/)

</details>
<details>
<summary>
GetConfiguredTable
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/GetConfiguredTableCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/GetConfiguredTableCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/GetConfiguredTableCommandOutput/)

</details>
<details>
<summary>
GetConfiguredTableAnalysisRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/GetConfiguredTableAnalysisRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/GetConfiguredTableAnalysisRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/GetConfiguredTableAnalysisRuleCommandOutput/)

</details>
<details>
<summary>
GetConfiguredTableAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/GetConfiguredTableAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/GetConfiguredTableAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/GetConfiguredTableAssociationCommandOutput/)

</details>
<details>
<summary>
GetConfiguredTableAssociationAnalysisRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/GetConfiguredTableAssociationAnalysisRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/GetConfiguredTableAssociationAnalysisRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/GetConfiguredTableAssociationAnalysisRuleCommandOutput/)

</details>
<details>
<summary>
GetIdMappingTable
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/GetIdMappingTableCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/GetIdMappingTableCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/GetIdMappingTableCommandOutput/)

</details>
<details>
<summary>
GetIdNamespaceAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/GetIdNamespaceAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/GetIdNamespaceAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/GetIdNamespaceAssociationCommandOutput/)

</details>
<details>
<summary>
GetMembership
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/GetMembershipCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/GetMembershipCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/GetMembershipCommandOutput/)

</details>
<details>
<summary>
GetPrivacyBudgetTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/GetPrivacyBudgetTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/GetPrivacyBudgetTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/GetPrivacyBudgetTemplateCommandOutput/)

</details>
<details>
<summary>
GetProtectedJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/GetProtectedJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/GetProtectedJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/GetProtectedJobCommandOutput/)

</details>
<details>
<summary>
GetProtectedQuery
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/GetProtectedQueryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/GetProtectedQueryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/GetProtectedQueryCommandOutput/)

</details>
<details>
<summary>
GetSchema
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/GetSchemaCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/GetSchemaCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/GetSchemaCommandOutput/)

</details>
<details>
<summary>
GetSchemaAnalysisRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/GetSchemaAnalysisRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/GetSchemaAnalysisRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/GetSchemaAnalysisRuleCommandOutput/)

</details>
<details>
<summary>
ListAnalysisTemplates
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/ListAnalysisTemplatesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/ListAnalysisTemplatesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/ListAnalysisTemplatesCommandOutput/)

</details>
<details>
<summary>
ListCollaborationAnalysisTemplates
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/ListCollaborationAnalysisTemplatesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/ListCollaborationAnalysisTemplatesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/ListCollaborationAnalysisTemplatesCommandOutput/)

</details>
<details>
<summary>
ListCollaborationConfiguredAudienceModelAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/ListCollaborationConfiguredAudienceModelAssociationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/ListCollaborationConfiguredAudienceModelAssociationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/ListCollaborationConfiguredAudienceModelAssociationsCommandOutput/)

</details>
<details>
<summary>
ListCollaborationIdNamespaceAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/ListCollaborationIdNamespaceAssociationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/ListCollaborationIdNamespaceAssociationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/ListCollaborationIdNamespaceAssociationsCommandOutput/)

</details>
<details>
<summary>
ListCollaborationPrivacyBudgets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/ListCollaborationPrivacyBudgetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/ListCollaborationPrivacyBudgetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/ListCollaborationPrivacyBudgetsCommandOutput/)

</details>
<details>
<summary>
ListCollaborationPrivacyBudgetTemplates
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/ListCollaborationPrivacyBudgetTemplatesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/ListCollaborationPrivacyBudgetTemplatesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/ListCollaborationPrivacyBudgetTemplatesCommandOutput/)

</details>
<details>
<summary>
ListCollaborations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/ListCollaborationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/ListCollaborationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/ListCollaborationsCommandOutput/)

</details>
<details>
<summary>
ListConfiguredAudienceModelAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/ListConfiguredAudienceModelAssociationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/ListConfiguredAudienceModelAssociationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/ListConfiguredAudienceModelAssociationsCommandOutput/)

</details>
<details>
<summary>
ListConfiguredTableAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/ListConfiguredTableAssociationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/ListConfiguredTableAssociationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/ListConfiguredTableAssociationsCommandOutput/)

</details>
<details>
<summary>
ListConfiguredTables
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/ListConfiguredTablesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/ListConfiguredTablesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/ListConfiguredTablesCommandOutput/)

</details>
<details>
<summary>
ListIdMappingTables
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/ListIdMappingTablesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/ListIdMappingTablesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/ListIdMappingTablesCommandOutput/)

</details>
<details>
<summary>
ListIdNamespaceAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/ListIdNamespaceAssociationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/ListIdNamespaceAssociationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/ListIdNamespaceAssociationsCommandOutput/)

</details>
<details>
<summary>
ListMembers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/ListMembersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/ListMembersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/ListMembersCommandOutput/)

</details>
<details>
<summary>
ListMemberships
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/ListMembershipsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/ListMembershipsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/ListMembershipsCommandOutput/)

</details>
<details>
<summary>
ListPrivacyBudgets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/ListPrivacyBudgetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/ListPrivacyBudgetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/ListPrivacyBudgetsCommandOutput/)

</details>
<details>
<summary>
ListPrivacyBudgetTemplates
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/ListPrivacyBudgetTemplatesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/ListPrivacyBudgetTemplatesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/ListPrivacyBudgetTemplatesCommandOutput/)

</details>
<details>
<summary>
ListProtectedJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/ListProtectedJobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/ListProtectedJobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/ListProtectedJobsCommandOutput/)

</details>
<details>
<summary>
ListProtectedQueries
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/ListProtectedQueriesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/ListProtectedQueriesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/ListProtectedQueriesCommandOutput/)

</details>
<details>
<summary>
ListSchemas
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/ListSchemasCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/ListSchemasCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/ListSchemasCommandOutput/)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/ListTagsForResourceCommandOutput/)

</details>
<details>
<summary>
PopulateIdMappingTable
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/PopulateIdMappingTableCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/PopulateIdMappingTableCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/PopulateIdMappingTableCommandOutput/)

</details>
<details>
<summary>
PreviewPrivacyImpact
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/PreviewPrivacyImpactCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/PreviewPrivacyImpactCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/PreviewPrivacyImpactCommandOutput/)

</details>
<details>
<summary>
StartProtectedJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/StartProtectedJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/StartProtectedJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/StartProtectedJobCommandOutput/)

</details>
<details>
<summary>
StartProtectedQuery
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/StartProtectedQueryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/StartProtectedQueryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/StartProtectedQueryCommandOutput/)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/TagResourceCommandOutput/)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/UntagResourceCommandOutput/)

</details>
<details>
<summary>
UpdateAnalysisTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/UpdateAnalysisTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/UpdateAnalysisTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/UpdateAnalysisTemplateCommandOutput/)

</details>
<details>
<summary>
UpdateCollaboration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/UpdateCollaborationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/UpdateCollaborationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/UpdateCollaborationCommandOutput/)

</details>
<details>
<summary>
UpdateConfiguredAudienceModelAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/UpdateConfiguredAudienceModelAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/UpdateConfiguredAudienceModelAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/UpdateConfiguredAudienceModelAssociationCommandOutput/)

</details>
<details>
<summary>
UpdateConfiguredTable
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/UpdateConfiguredTableCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/UpdateConfiguredTableCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/UpdateConfiguredTableCommandOutput/)

</details>
<details>
<summary>
UpdateConfiguredTableAnalysisRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/UpdateConfiguredTableAnalysisRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/UpdateConfiguredTableAnalysisRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/UpdateConfiguredTableAnalysisRuleCommandOutput/)

</details>
<details>
<summary>
UpdateConfiguredTableAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/UpdateConfiguredTableAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/UpdateConfiguredTableAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/UpdateConfiguredTableAssociationCommandOutput/)

</details>
<details>
<summary>
UpdateConfiguredTableAssociationAnalysisRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/UpdateConfiguredTableAssociationAnalysisRuleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/UpdateConfiguredTableAssociationAnalysisRuleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/UpdateConfiguredTableAssociationAnalysisRuleCommandOutput/)

</details>
<details>
<summary>
UpdateIdMappingTable
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/UpdateIdMappingTableCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/UpdateIdMappingTableCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/UpdateIdMappingTableCommandOutput/)

</details>
<details>
<summary>
UpdateIdNamespaceAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/UpdateIdNamespaceAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/UpdateIdNamespaceAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/UpdateIdNamespaceAssociationCommandOutput/)

</details>
<details>
<summary>
UpdateMembership
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/UpdateMembershipCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/UpdateMembershipCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/UpdateMembershipCommandOutput/)

</details>
<details>
<summary>
UpdatePrivacyBudgetTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/UpdatePrivacyBudgetTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/UpdatePrivacyBudgetTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/UpdatePrivacyBudgetTemplateCommandOutput/)

</details>
<details>
<summary>
UpdateProtectedJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/UpdateProtectedJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/UpdateProtectedJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/UpdateProtectedJobCommandOutput/)

</details>
<details>
<summary>
UpdateProtectedQuery
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanrooms/command/UpdateProtectedQueryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/UpdateProtectedQueryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanrooms/Interface/UpdateProtectedQueryCommandOutput/)

</details>
