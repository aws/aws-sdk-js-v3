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

To install the this package, simply type add or install @aws-sdk/client-workdocs
using your favorite package manager:

- `npm install @aws-sdk/client-workdocs`
- `yarn add @aws-sdk/client-workdocs`
- `pnpm add @aws-sdk/client-workdocs`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `WorkDocsClient` and
the commands you need, for example `AbortDocumentVersionUploadCommand`:

```js
// ES5 example
const { WorkDocsClient, AbortDocumentVersionUploadCommand } = require("@aws-sdk/client-workdocs");
```

```ts
// ES6+ example
import { WorkDocsClient, AbortDocumentVersionUploadCommand } from "@aws-sdk/client-workdocs";
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
const command = new AbortDocumentVersionUploadCommand(params);
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
  const data = await client.abortDocumentVersionUpload(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .abortDocumentVersionUpload(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.abortDocumentVersionUpload(params, (err, data) => {
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/classes/abortdocumentversionuploadcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/abortdocumentversionuploadcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/abortdocumentversionuploadcommandoutput.html)

</details>
<details>
<summary>
ActivateUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/classes/activateusercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/activateusercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/activateusercommandoutput.html)

</details>
<details>
<summary>
AddResourcePermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/classes/addresourcepermissionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/addresourcepermissionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/addresourcepermissionscommandoutput.html)

</details>
<details>
<summary>
CreateComment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/classes/createcommentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/createcommentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/createcommentcommandoutput.html)

</details>
<details>
<summary>
CreateCustomMetadata
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/classes/createcustommetadatacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/createcustommetadatacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/createcustommetadatacommandoutput.html)

</details>
<details>
<summary>
CreateFolder
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/classes/createfoldercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/createfoldercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/createfoldercommandoutput.html)

</details>
<details>
<summary>
CreateLabels
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/classes/createlabelscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/createlabelscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/createlabelscommandoutput.html)

</details>
<details>
<summary>
CreateNotificationSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/classes/createnotificationsubscriptioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/createnotificationsubscriptioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/createnotificationsubscriptioncommandoutput.html)

</details>
<details>
<summary>
CreateUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/classes/createusercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/createusercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/createusercommandoutput.html)

</details>
<details>
<summary>
DeactivateUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/classes/deactivateusercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/deactivateusercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/deactivateusercommandoutput.html)

</details>
<details>
<summary>
DeleteComment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/classes/deletecommentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/deletecommentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/deletecommentcommandoutput.html)

</details>
<details>
<summary>
DeleteCustomMetadata
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/classes/deletecustommetadatacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/deletecustommetadatacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/deletecustommetadatacommandoutput.html)

</details>
<details>
<summary>
DeleteDocument
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/classes/deletedocumentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/deletedocumentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/deletedocumentcommandoutput.html)

</details>
<details>
<summary>
DeleteDocumentVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/classes/deletedocumentversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/deletedocumentversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/deletedocumentversioncommandoutput.html)

</details>
<details>
<summary>
DeleteFolder
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/classes/deletefoldercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/deletefoldercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/deletefoldercommandoutput.html)

</details>
<details>
<summary>
DeleteFolderContents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/classes/deletefoldercontentscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/deletefoldercontentscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/deletefoldercontentscommandoutput.html)

</details>
<details>
<summary>
DeleteLabels
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/classes/deletelabelscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/deletelabelscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/deletelabelscommandoutput.html)

</details>
<details>
<summary>
DeleteNotificationSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/classes/deletenotificationsubscriptioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/deletenotificationsubscriptioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/deletenotificationsubscriptioncommandoutput.html)

</details>
<details>
<summary>
DeleteUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/classes/deleteusercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/deleteusercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/deleteusercommandoutput.html)

</details>
<details>
<summary>
DescribeActivities
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/classes/describeactivitiescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/describeactivitiescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/describeactivitiescommandoutput.html)

</details>
<details>
<summary>
DescribeComments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/classes/describecommentscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/describecommentscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/describecommentscommandoutput.html)

</details>
<details>
<summary>
DescribeDocumentVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/classes/describedocumentversionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/describedocumentversionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/describedocumentversionscommandoutput.html)

</details>
<details>
<summary>
DescribeFolderContents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/classes/describefoldercontentscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/describefoldercontentscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/describefoldercontentscommandoutput.html)

</details>
<details>
<summary>
DescribeGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/classes/describegroupscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/describegroupscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/describegroupscommandoutput.html)

</details>
<details>
<summary>
DescribeNotificationSubscriptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/classes/describenotificationsubscriptionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/describenotificationsubscriptionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/describenotificationsubscriptionscommandoutput.html)

</details>
<details>
<summary>
DescribeResourcePermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/classes/describeresourcepermissionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/describeresourcepermissionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/describeresourcepermissionscommandoutput.html)

</details>
<details>
<summary>
DescribeRootFolders
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/classes/describerootfolderscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/describerootfolderscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/describerootfolderscommandoutput.html)

</details>
<details>
<summary>
DescribeUsers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/classes/describeuserscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/describeuserscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/describeuserscommandoutput.html)

</details>
<details>
<summary>
GetCurrentUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/classes/getcurrentusercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/getcurrentusercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/getcurrentusercommandoutput.html)

</details>
<details>
<summary>
GetDocument
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/classes/getdocumentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/getdocumentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/getdocumentcommandoutput.html)

</details>
<details>
<summary>
GetDocumentPath
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/classes/getdocumentpathcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/getdocumentpathcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/getdocumentpathcommandoutput.html)

</details>
<details>
<summary>
GetDocumentVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/classes/getdocumentversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/getdocumentversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/getdocumentversioncommandoutput.html)

</details>
<details>
<summary>
GetFolder
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/classes/getfoldercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/getfoldercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/getfoldercommandoutput.html)

</details>
<details>
<summary>
GetFolderPath
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/classes/getfolderpathcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/getfolderpathcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/getfolderpathcommandoutput.html)

</details>
<details>
<summary>
GetResources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/classes/getresourcescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/getresourcescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/getresourcescommandoutput.html)

</details>
<details>
<summary>
InitiateDocumentVersionUpload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/classes/initiatedocumentversionuploadcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/initiatedocumentversionuploadcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/initiatedocumentversionuploadcommandoutput.html)

</details>
<details>
<summary>
RemoveAllResourcePermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/classes/removeallresourcepermissionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/removeallresourcepermissionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/removeallresourcepermissionscommandoutput.html)

</details>
<details>
<summary>
RemoveResourcePermission
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/classes/removeresourcepermissioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/removeresourcepermissioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/removeresourcepermissioncommandoutput.html)

</details>
<details>
<summary>
RestoreDocumentVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/classes/restoredocumentversionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/restoredocumentversionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/restoredocumentversionscommandoutput.html)

</details>
<details>
<summary>
SearchResources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/classes/searchresourcescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/searchresourcescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/searchresourcescommandoutput.html)

</details>
<details>
<summary>
UpdateDocument
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/classes/updatedocumentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/updatedocumentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/updatedocumentcommandoutput.html)

</details>
<details>
<summary>
UpdateDocumentVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/classes/updatedocumentversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/updatedocumentversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/updatedocumentversioncommandoutput.html)

</details>
<details>
<summary>
UpdateFolder
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/classes/updatefoldercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/updatefoldercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/updatefoldercommandoutput.html)

</details>
<details>
<summary>
UpdateUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/classes/updateusercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/updateusercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workdocs/interfaces/updateusercommandoutput.html)

</details>
