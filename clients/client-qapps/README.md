<!-- generated file, do not edit directly -->

# @aws-sdk/client-qapps

## Description

AWS SDK for JavaScript QApps Client for Node.js, Browser and React Native.

<p>The Amazon Q Apps feature capability within Amazon Q Business allows web experience
users to create lightweight, purpose-built AI apps to fulfill specific tasks from
within their web experience. For example, users can create a Q App that exclusively
generates marketing-related content to improve your marketing team's productivity or a
Q App for writing customer emails and creating promotional content using a certain
style of voice, tone, and branding. For more information on the capabilities, see
<a href="https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/deploy-experience-iam-role.html#q-apps-actions">Amazon Q Apps capabilities</a> in the <i>Amazon Q Business User Guide</i>.
</p>
<p>For an overview of the Amazon Q App APIs, see <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_Operations_QApps.html">Overview of
Amazon Q Apps API operations</a>.</p>
<p>For information about the IAM access control permissions you need to
use the Amazon Q Apps API, see <a href="https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/deploy-experience-iam-role.html">
IAM role for the Amazon Q Business web experience including Amazon Q Apps</a> in the
<i>Amazon Q Business User Guide</i>.</p>

## Installing

To install this package, simply type add or install @aws-sdk/client-qapps
using your favorite package manager:

- `npm install @aws-sdk/client-qapps`
- `yarn add @aws-sdk/client-qapps`
- `pnpm add @aws-sdk/client-qapps`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `QAppsClient` and
the commands you need, for example `ListQAppsCommand`:

```js
// ES5 example
const { QAppsClient, ListQAppsCommand } = require("@aws-sdk/client-qapps");
```

```ts
// ES6+ example
import { QAppsClient, ListQAppsCommand } from "@aws-sdk/client-qapps";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new QAppsClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListQAppsCommand(params);
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
import * as AWS from "@aws-sdk/client-qapps";
const client = new AWS.QApps({ region: "REGION" });

// async/await.
try {
  const data = await client.listQApps(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listQApps(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listQApps(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-qapps` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AssociateLibraryItemReview
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qapps/command/AssociateLibraryItemReviewCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qapps/Interface/AssociateLibraryItemReviewCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qapps/Interface/AssociateLibraryItemReviewCommandOutput/)

</details>
<details>
<summary>
AssociateQAppWithUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qapps/command/AssociateQAppWithUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qapps/Interface/AssociateQAppWithUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qapps/Interface/AssociateQAppWithUserCommandOutput/)

</details>
<details>
<summary>
BatchCreateCategory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qapps/command/BatchCreateCategoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qapps/Interface/BatchCreateCategoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qapps/Interface/BatchCreateCategoryCommandOutput/)

</details>
<details>
<summary>
BatchDeleteCategory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qapps/command/BatchDeleteCategoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qapps/Interface/BatchDeleteCategoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qapps/Interface/BatchDeleteCategoryCommandOutput/)

</details>
<details>
<summary>
BatchUpdateCategory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qapps/command/BatchUpdateCategoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qapps/Interface/BatchUpdateCategoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qapps/Interface/BatchUpdateCategoryCommandOutput/)

</details>
<details>
<summary>
CreateLibraryItem
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qapps/command/CreateLibraryItemCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qapps/Interface/CreateLibraryItemCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qapps/Interface/CreateLibraryItemCommandOutput/)

</details>
<details>
<summary>
CreateQApp
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qapps/command/CreateQAppCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qapps/Interface/CreateQAppCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qapps/Interface/CreateQAppCommandOutput/)

</details>
<details>
<summary>
DeleteLibraryItem
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qapps/command/DeleteLibraryItemCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qapps/Interface/DeleteLibraryItemCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qapps/Interface/DeleteLibraryItemCommandOutput/)

</details>
<details>
<summary>
DeleteQApp
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qapps/command/DeleteQAppCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qapps/Interface/DeleteQAppCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qapps/Interface/DeleteQAppCommandOutput/)

</details>
<details>
<summary>
DisassociateLibraryItemReview
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qapps/command/DisassociateLibraryItemReviewCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qapps/Interface/DisassociateLibraryItemReviewCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qapps/Interface/DisassociateLibraryItemReviewCommandOutput/)

</details>
<details>
<summary>
DisassociateQAppFromUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qapps/command/DisassociateQAppFromUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qapps/Interface/DisassociateQAppFromUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qapps/Interface/DisassociateQAppFromUserCommandOutput/)

</details>
<details>
<summary>
GetLibraryItem
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qapps/command/GetLibraryItemCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qapps/Interface/GetLibraryItemCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qapps/Interface/GetLibraryItemCommandOutput/)

</details>
<details>
<summary>
GetQApp
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qapps/command/GetQAppCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qapps/Interface/GetQAppCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qapps/Interface/GetQAppCommandOutput/)

</details>
<details>
<summary>
GetQAppSession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qapps/command/GetQAppSessionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qapps/Interface/GetQAppSessionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qapps/Interface/GetQAppSessionCommandOutput/)

</details>
<details>
<summary>
ImportDocument
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qapps/command/ImportDocumentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qapps/Interface/ImportDocumentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qapps/Interface/ImportDocumentCommandOutput/)

</details>
<details>
<summary>
ListCategories
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qapps/command/ListCategoriesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qapps/Interface/ListCategoriesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qapps/Interface/ListCategoriesCommandOutput/)

</details>
<details>
<summary>
ListLibraryItems
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qapps/command/ListLibraryItemsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qapps/Interface/ListLibraryItemsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qapps/Interface/ListLibraryItemsCommandOutput/)

</details>
<details>
<summary>
ListQApps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qapps/command/ListQAppsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qapps/Interface/ListQAppsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qapps/Interface/ListQAppsCommandOutput/)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qapps/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qapps/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qapps/Interface/ListTagsForResourceCommandOutput/)

</details>
<details>
<summary>
PredictQApp
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qapps/command/PredictQAppCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qapps/Interface/PredictQAppCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qapps/Interface/PredictQAppCommandOutput/)

</details>
<details>
<summary>
StartQAppSession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qapps/command/StartQAppSessionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qapps/Interface/StartQAppSessionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qapps/Interface/StartQAppSessionCommandOutput/)

</details>
<details>
<summary>
StopQAppSession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qapps/command/StopQAppSessionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qapps/Interface/StopQAppSessionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qapps/Interface/StopQAppSessionCommandOutput/)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qapps/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qapps/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qapps/Interface/TagResourceCommandOutput/)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qapps/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qapps/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qapps/Interface/UntagResourceCommandOutput/)

</details>
<details>
<summary>
UpdateLibraryItem
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qapps/command/UpdateLibraryItemCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qapps/Interface/UpdateLibraryItemCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qapps/Interface/UpdateLibraryItemCommandOutput/)

</details>
<details>
<summary>
UpdateLibraryItemMetadata
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qapps/command/UpdateLibraryItemMetadataCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qapps/Interface/UpdateLibraryItemMetadataCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qapps/Interface/UpdateLibraryItemMetadataCommandOutput/)

</details>
<details>
<summary>
UpdateQApp
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qapps/command/UpdateQAppCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qapps/Interface/UpdateQAppCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qapps/Interface/UpdateQAppCommandOutput/)

</details>
<details>
<summary>
UpdateQAppSession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qapps/command/UpdateQAppSessionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qapps/Interface/UpdateQAppSessionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qapps/Interface/UpdateQAppSessionCommandOutput/)

</details>
