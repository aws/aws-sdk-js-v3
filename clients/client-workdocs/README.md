<!-- generated file, do not edit directly -->

# @aws-sdk/client-workdocs

## Description

AWS SDK for JavaScript WorkDocs Client for Node.js, Browser and React Native.

<p>The Amazon WorkDocs API is designed for the following use cases:</p>
<ul>
<li>
<p>File Migration: File migration applications are supported for users who
want to migrate their files from an on-premises or off-premises file system or
service. Users can insert files into a user directory structure, as well as
allow for basic metadata changes, such as modifications to the permissions of
files.</p>
</li>
<li>
<p>Security: Support security applications are supported for users who have
additional security needs, such as antivirus or data loss prevention. The API
actions, along with CloudTrail, allow these applications to detect when
changes occur in Amazon WorkDocs. Then, the application can take the necessary
actions and replace the target file. If the target file violates the policy, the
application can also choose to email the user.</p>
</li>
<li>
<p>eDiscovery/Analytics: General administrative applications are supported,
such as eDiscovery and analytics. These applications can choose to mimic or
record the actions in an Amazon WorkDocs site, along with CloudTrail, to
replicate data for eDiscovery, backup, or analytical applications.</p>
</li>
</ul>
<p>All Amazon WorkDocs API actions are Amazon authenticated and certificate-signed.
They not only require the use of the Amazon Web Services SDK, but also allow for the exclusive use of
IAM users and roles to help facilitate access, trust, and permission policies. By
creating a role and allowing an IAM user to access the Amazon WorkDocs site, the
IAM user gains full administrative visibility into the entire Amazon WorkDocs site (or as
set in the IAM policy). This includes, but is not limited to, the ability to modify file
permissions and upload any file to any user. This allows developers to perform the three
use cases above, as well as give users the ability to grant access on a selective basis
using the IAM model.</p>
<note>
<p>The pricing for Amazon WorkDocs APIs varies depending on the API call type for these actions:</p>
<ul>
<li>
<p>
<code>READ  (Get*)</code>
</p>
</li>
<li>
<p>
<code>WRITE (Activate*, Add*, Create*, Deactivate*, Initiate*, Update*)</code>
</p>
</li>
<li>
<p>
<code>LIST (Describe*)</code>
</p>
</li>
<li>
<p>
<code>DELETE*, CANCEL</code>
</p>
</li>
</ul>
<p>For information about Amazon WorkDocs API pricing, see <a href="https://aws.amazon.com/workdocs/pricing/">Amazon WorkDocs Pricing</a>.</p>
</note>

## Installing

To install this package, simply type add or install @aws-sdk/client-workdocs
using your favorite package manager:

- `npm install @aws-sdk/client-workdocs`
- `yarn add @aws-sdk/client-workdocs`
- `pnpm add @aws-sdk/client-workdocs`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `WorkDocsClient` and
the commands you need, for example `DescribeUsersCommand`:

```js
// ES5 example
const { WorkDocsClient, DescribeUsersCommand } = require("@aws-sdk/client-workdocs");
```

```ts
// ES6+ example
import { WorkDocsClient, DescribeUsersCommand } from "@aws-sdk/client-workdocs";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new WorkDocsClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new DescribeUsersCommand(params);
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
import * as AWS from "@aws-sdk/client-workdocs";
const client = new AWS.WorkDocs({ region: "REGION" });

// async/await.
try {
  const data = await client.describeUsers(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .describeUsers(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.describeUsers(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-workdocs` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AbortDocumentVersionUpload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workdocs/command/AbortDocumentVersionUploadCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/AbortDocumentVersionUploadCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/AbortDocumentVersionUploadCommandOutput/)

</details>
<details>
<summary>
ActivateUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workdocs/command/ActivateUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/ActivateUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/ActivateUserCommandOutput/)

</details>
<details>
<summary>
AddResourcePermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workdocs/command/AddResourcePermissionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/AddResourcePermissionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/AddResourcePermissionsCommandOutput/)

</details>
<details>
<summary>
CreateComment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workdocs/command/CreateCommentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/CreateCommentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/CreateCommentCommandOutput/)

</details>
<details>
<summary>
CreateCustomMetadata
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workdocs/command/CreateCustomMetadataCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/CreateCustomMetadataCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/CreateCustomMetadataCommandOutput/)

</details>
<details>
<summary>
CreateFolder
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workdocs/command/CreateFolderCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/CreateFolderCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/CreateFolderCommandOutput/)

</details>
<details>
<summary>
CreateLabels
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workdocs/command/CreateLabelsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/CreateLabelsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/CreateLabelsCommandOutput/)

</details>
<details>
<summary>
CreateNotificationSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workdocs/command/CreateNotificationSubscriptionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/CreateNotificationSubscriptionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/CreateNotificationSubscriptionCommandOutput/)

</details>
<details>
<summary>
CreateUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workdocs/command/CreateUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/CreateUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/CreateUserCommandOutput/)

</details>
<details>
<summary>
DeactivateUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workdocs/command/DeactivateUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/DeactivateUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/DeactivateUserCommandOutput/)

</details>
<details>
<summary>
DeleteComment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workdocs/command/DeleteCommentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/DeleteCommentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/DeleteCommentCommandOutput/)

</details>
<details>
<summary>
DeleteCustomMetadata
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workdocs/command/DeleteCustomMetadataCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/DeleteCustomMetadataCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/DeleteCustomMetadataCommandOutput/)

</details>
<details>
<summary>
DeleteDocument
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workdocs/command/DeleteDocumentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/DeleteDocumentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/DeleteDocumentCommandOutput/)

</details>
<details>
<summary>
DeleteDocumentVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workdocs/command/DeleteDocumentVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/DeleteDocumentVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/DeleteDocumentVersionCommandOutput/)

</details>
<details>
<summary>
DeleteFolder
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workdocs/command/DeleteFolderCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/DeleteFolderCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/DeleteFolderCommandOutput/)

</details>
<details>
<summary>
DeleteFolderContents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workdocs/command/DeleteFolderContentsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/DeleteFolderContentsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/DeleteFolderContentsCommandOutput/)

</details>
<details>
<summary>
DeleteLabels
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workdocs/command/DeleteLabelsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/DeleteLabelsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/DeleteLabelsCommandOutput/)

</details>
<details>
<summary>
DeleteNotificationSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workdocs/command/DeleteNotificationSubscriptionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/DeleteNotificationSubscriptionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/DeleteNotificationSubscriptionCommandOutput/)

</details>
<details>
<summary>
DeleteUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workdocs/command/DeleteUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/DeleteUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/DeleteUserCommandOutput/)

</details>
<details>
<summary>
DescribeActivities
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workdocs/command/DescribeActivitiesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/DescribeActivitiesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/DescribeActivitiesCommandOutput/)

</details>
<details>
<summary>
DescribeComments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workdocs/command/DescribeCommentsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/DescribeCommentsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/DescribeCommentsCommandOutput/)

</details>
<details>
<summary>
DescribeDocumentVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workdocs/command/DescribeDocumentVersionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/DescribeDocumentVersionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/DescribeDocumentVersionsCommandOutput/)

</details>
<details>
<summary>
DescribeFolderContents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workdocs/command/DescribeFolderContentsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/DescribeFolderContentsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/DescribeFolderContentsCommandOutput/)

</details>
<details>
<summary>
DescribeGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workdocs/command/DescribeGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/DescribeGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/DescribeGroupsCommandOutput/)

</details>
<details>
<summary>
DescribeNotificationSubscriptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workdocs/command/DescribeNotificationSubscriptionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/DescribeNotificationSubscriptionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/DescribeNotificationSubscriptionsCommandOutput/)

</details>
<details>
<summary>
DescribeResourcePermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workdocs/command/DescribeResourcePermissionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/DescribeResourcePermissionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/DescribeResourcePermissionsCommandOutput/)

</details>
<details>
<summary>
DescribeRootFolders
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workdocs/command/DescribeRootFoldersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/DescribeRootFoldersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/DescribeRootFoldersCommandOutput/)

</details>
<details>
<summary>
DescribeUsers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workdocs/command/DescribeUsersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/DescribeUsersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/DescribeUsersCommandOutput/)

</details>
<details>
<summary>
GetCurrentUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workdocs/command/GetCurrentUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/GetCurrentUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/GetCurrentUserCommandOutput/)

</details>
<details>
<summary>
GetDocument
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workdocs/command/GetDocumentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/GetDocumentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/GetDocumentCommandOutput/)

</details>
<details>
<summary>
GetDocumentPath
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workdocs/command/GetDocumentPathCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/GetDocumentPathCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/GetDocumentPathCommandOutput/)

</details>
<details>
<summary>
GetDocumentVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workdocs/command/GetDocumentVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/GetDocumentVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/GetDocumentVersionCommandOutput/)

</details>
<details>
<summary>
GetFolder
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workdocs/command/GetFolderCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/GetFolderCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/GetFolderCommandOutput/)

</details>
<details>
<summary>
GetFolderPath
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workdocs/command/GetFolderPathCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/GetFolderPathCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/GetFolderPathCommandOutput/)

</details>
<details>
<summary>
GetResources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workdocs/command/GetResourcesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/GetResourcesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/GetResourcesCommandOutput/)

</details>
<details>
<summary>
InitiateDocumentVersionUpload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workdocs/command/InitiateDocumentVersionUploadCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/InitiateDocumentVersionUploadCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/InitiateDocumentVersionUploadCommandOutput/)

</details>
<details>
<summary>
RemoveAllResourcePermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workdocs/command/RemoveAllResourcePermissionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/RemoveAllResourcePermissionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/RemoveAllResourcePermissionsCommandOutput/)

</details>
<details>
<summary>
RemoveResourcePermission
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workdocs/command/RemoveResourcePermissionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/RemoveResourcePermissionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/RemoveResourcePermissionCommandOutput/)

</details>
<details>
<summary>
RestoreDocumentVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workdocs/command/RestoreDocumentVersionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/RestoreDocumentVersionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/RestoreDocumentVersionsCommandOutput/)

</details>
<details>
<summary>
SearchResources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workdocs/command/SearchResourcesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/SearchResourcesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/SearchResourcesCommandOutput/)

</details>
<details>
<summary>
UpdateDocument
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workdocs/command/UpdateDocumentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/UpdateDocumentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/UpdateDocumentCommandOutput/)

</details>
<details>
<summary>
UpdateDocumentVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workdocs/command/UpdateDocumentVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/UpdateDocumentVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/UpdateDocumentVersionCommandOutput/)

</details>
<details>
<summary>
UpdateFolder
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workdocs/command/UpdateFolderCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/UpdateFolderCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/UpdateFolderCommandOutput/)

</details>
<details>
<summary>
UpdateUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workdocs/command/UpdateUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/UpdateUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workdocs/Interface/UpdateUserCommandOutput/)

</details>
