<!-- generated file, do not edit directly -->

# @aws-sdk/client-appstream

## Description

AWS SDK for JavaScript AppStream Client for Node.js, Browser and React Native.

<fullname>Amazon WorkSpaces Applications</fullname>
<p>This is the <i>Amazon WorkSpaces Applications API Reference</i>. This documentation provides descriptions and syntax for each of the actions and data types in WorkSpaces Applications. WorkSpaces Applications is a fully managed, secure application streaming service that lets you stream desktop applications to users without rewriting applications. WorkSpaces Applications manages the AWS resources that are required to host and run your applications, scales automatically, and provides access to your users on demand. </p>
<note>
<p>You can call the WorkSpaces Applications API operations by using an interface VPC endpoint (interface endpoint). For more information, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/access-api-cli-through-interface-vpc-endpoint.html">Access WorkSpaces Applications API Operations and CLI Commands Through an Interface VPC Endpoint</a> in the <i>Amazon WorkSpaces Applications Administration Guide</i>.</p>
</note>
<p>To learn more about WorkSpaces Applications, see the following resources:</p>
<ul>
<li>
<p>
<a href="http://aws.amazon.com/appstream2">Amazon WorkSpaces Applications product page</a>
</p>
</li>
<li>
<p>
<a href="http://aws.amazon.com/documentation/appstream2">Amazon WorkSpaces Applications documentation</a>
</p>
</li>
</ul>

## Installing
To install this package, simply type add or install @aws-sdk/client-appstream
using your favorite package manager:
- `npm install @aws-sdk/client-appstream`
- `yarn add @aws-sdk/client-appstream`
- `pnpm add @aws-sdk/client-appstream`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `AppStreamClient` and
the commands you need, for example `ListExportImageTasksCommand`:

```js
// ES5 example
const { AppStreamClient, ListExportImageTasksCommand } = require("@aws-sdk/client-appstream");
```

```ts
// ES6+ example
import { AppStreamClient, ListExportImageTasksCommand } from "@aws-sdk/client-appstream";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new AppStreamClient({ region: "REGION" });

const params = { /** input parameters */ };
const command = new ListExportImageTasksCommand(params);
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
import * as AWS from "@aws-sdk/client-appstream";
const client = new AWS.AppStream({ region: "REGION" });

// async/await.
try {
  const data = await client.listExportImageTasks(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listExportImageTasks(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listExportImageTasks(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-appstream` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AssociateAppBlockBuilderAppBlock
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/AssociateAppBlockBuilderAppBlockCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/AssociateAppBlockBuilderAppBlockCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/AssociateAppBlockBuilderAppBlockCommandOutput/)
</details>
<details>
<summary>
AssociateApplicationFleet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/AssociateApplicationFleetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/AssociateApplicationFleetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/AssociateApplicationFleetCommandOutput/)
</details>
<details>
<summary>
AssociateApplicationToEntitlement
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/AssociateApplicationToEntitlementCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/AssociateApplicationToEntitlementCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/AssociateApplicationToEntitlementCommandOutput/)
</details>
<details>
<summary>
AssociateFleet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/AssociateFleetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/AssociateFleetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/AssociateFleetCommandOutput/)
</details>
<details>
<summary>
AssociateSoftwareToImageBuilder
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/AssociateSoftwareToImageBuilderCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/AssociateSoftwareToImageBuilderCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/AssociateSoftwareToImageBuilderCommandOutput/)
</details>
<details>
<summary>
BatchAssociateUserStack
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/BatchAssociateUserStackCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/BatchAssociateUserStackCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/BatchAssociateUserStackCommandOutput/)
</details>
<details>
<summary>
BatchDisassociateUserStack
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/BatchDisassociateUserStackCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/BatchDisassociateUserStackCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/BatchDisassociateUserStackCommandOutput/)
</details>
<details>
<summary>
CopyImage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/CopyImageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/CopyImageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/CopyImageCommandOutput/)
</details>
<details>
<summary>
CreateAppBlock
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/CreateAppBlockCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/CreateAppBlockCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/CreateAppBlockCommandOutput/)
</details>
<details>
<summary>
CreateAppBlockBuilder
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/CreateAppBlockBuilderCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/CreateAppBlockBuilderCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/CreateAppBlockBuilderCommandOutput/)
</details>
<details>
<summary>
CreateAppBlockBuilderStreamingURL
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/CreateAppBlockBuilderStreamingURLCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/CreateAppBlockBuilderStreamingURLCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/CreateAppBlockBuilderStreamingURLCommandOutput/)
</details>
<details>
<summary>
CreateApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/CreateApplicationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/CreateApplicationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/CreateApplicationCommandOutput/)
</details>
<details>
<summary>
CreateDirectoryConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/CreateDirectoryConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/CreateDirectoryConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/CreateDirectoryConfigCommandOutput/)
</details>
<details>
<summary>
CreateEntitlement
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/CreateEntitlementCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/CreateEntitlementCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/CreateEntitlementCommandOutput/)
</details>
<details>
<summary>
CreateExportImageTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/CreateExportImageTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/CreateExportImageTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/CreateExportImageTaskCommandOutput/)
</details>
<details>
<summary>
CreateFleet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/CreateFleetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/CreateFleetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/CreateFleetCommandOutput/)
</details>
<details>
<summary>
CreateImageBuilder
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/CreateImageBuilderCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/CreateImageBuilderCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/CreateImageBuilderCommandOutput/)
</details>
<details>
<summary>
CreateImageBuilderStreamingURL
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/CreateImageBuilderStreamingURLCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/CreateImageBuilderStreamingURLCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/CreateImageBuilderStreamingURLCommandOutput/)
</details>
<details>
<summary>
CreateImportedImage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/CreateImportedImageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/CreateImportedImageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/CreateImportedImageCommandOutput/)
</details>
<details>
<summary>
CreateStack
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/CreateStackCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/CreateStackCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/CreateStackCommandOutput/)
</details>
<details>
<summary>
CreateStreamingURL
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/CreateStreamingURLCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/CreateStreamingURLCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/CreateStreamingURLCommandOutput/)
</details>
<details>
<summary>
CreateThemeForStack
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/CreateThemeForStackCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/CreateThemeForStackCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/CreateThemeForStackCommandOutput/)
</details>
<details>
<summary>
CreateUpdatedImage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/CreateUpdatedImageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/CreateUpdatedImageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/CreateUpdatedImageCommandOutput/)
</details>
<details>
<summary>
CreateUsageReportSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/CreateUsageReportSubscriptionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/CreateUsageReportSubscriptionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/CreateUsageReportSubscriptionCommandOutput/)
</details>
<details>
<summary>
CreateUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/CreateUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/CreateUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/CreateUserCommandOutput/)
</details>
<details>
<summary>
DeleteAppBlock
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/DeleteAppBlockCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DeleteAppBlockCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DeleteAppBlockCommandOutput/)
</details>
<details>
<summary>
DeleteAppBlockBuilder
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/DeleteAppBlockBuilderCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DeleteAppBlockBuilderCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DeleteAppBlockBuilderCommandOutput/)
</details>
<details>
<summary>
DeleteApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/DeleteApplicationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DeleteApplicationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DeleteApplicationCommandOutput/)
</details>
<details>
<summary>
DeleteDirectoryConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/DeleteDirectoryConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DeleteDirectoryConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DeleteDirectoryConfigCommandOutput/)
</details>
<details>
<summary>
DeleteEntitlement
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/DeleteEntitlementCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DeleteEntitlementCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DeleteEntitlementCommandOutput/)
</details>
<details>
<summary>
DeleteFleet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/DeleteFleetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DeleteFleetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DeleteFleetCommandOutput/)
</details>
<details>
<summary>
DeleteImage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/DeleteImageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DeleteImageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DeleteImageCommandOutput/)
</details>
<details>
<summary>
DeleteImageBuilder
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/DeleteImageBuilderCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DeleteImageBuilderCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DeleteImageBuilderCommandOutput/)
</details>
<details>
<summary>
DeleteImagePermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/DeleteImagePermissionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DeleteImagePermissionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DeleteImagePermissionsCommandOutput/)
</details>
<details>
<summary>
DeleteStack
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/DeleteStackCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DeleteStackCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DeleteStackCommandOutput/)
</details>
<details>
<summary>
DeleteThemeForStack
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/DeleteThemeForStackCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DeleteThemeForStackCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DeleteThemeForStackCommandOutput/)
</details>
<details>
<summary>
DeleteUsageReportSubscription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/DeleteUsageReportSubscriptionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DeleteUsageReportSubscriptionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DeleteUsageReportSubscriptionCommandOutput/)
</details>
<details>
<summary>
DeleteUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/DeleteUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DeleteUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DeleteUserCommandOutput/)
</details>
<details>
<summary>
DescribeAppBlockBuilderAppBlockAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/DescribeAppBlockBuilderAppBlockAssociationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DescribeAppBlockBuilderAppBlockAssociationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DescribeAppBlockBuilderAppBlockAssociationsCommandOutput/)
</details>
<details>
<summary>
DescribeAppBlockBuilders
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/DescribeAppBlockBuildersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DescribeAppBlockBuildersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DescribeAppBlockBuildersCommandOutput/)
</details>
<details>
<summary>
DescribeAppBlocks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/DescribeAppBlocksCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DescribeAppBlocksCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DescribeAppBlocksCommandOutput/)
</details>
<details>
<summary>
DescribeApplicationFleetAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/DescribeApplicationFleetAssociationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DescribeApplicationFleetAssociationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DescribeApplicationFleetAssociationsCommandOutput/)
</details>
<details>
<summary>
DescribeApplications
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/DescribeApplicationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DescribeApplicationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DescribeApplicationsCommandOutput/)
</details>
<details>
<summary>
DescribeAppLicenseUsage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/DescribeAppLicenseUsageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DescribeAppLicenseUsageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DescribeAppLicenseUsageCommandOutput/)
</details>
<details>
<summary>
DescribeDirectoryConfigs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/DescribeDirectoryConfigsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DescribeDirectoryConfigsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DescribeDirectoryConfigsCommandOutput/)
</details>
<details>
<summary>
DescribeEntitlements
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/DescribeEntitlementsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DescribeEntitlementsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DescribeEntitlementsCommandOutput/)
</details>
<details>
<summary>
DescribeFleets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/DescribeFleetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DescribeFleetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DescribeFleetsCommandOutput/)
</details>
<details>
<summary>
DescribeImageBuilders
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/DescribeImageBuildersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DescribeImageBuildersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DescribeImageBuildersCommandOutput/)
</details>
<details>
<summary>
DescribeImagePermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/DescribeImagePermissionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DescribeImagePermissionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DescribeImagePermissionsCommandOutput/)
</details>
<details>
<summary>
DescribeImages
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/DescribeImagesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DescribeImagesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DescribeImagesCommandOutput/)
</details>
<details>
<summary>
DescribeSessions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/DescribeSessionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DescribeSessionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DescribeSessionsCommandOutput/)
</details>
<details>
<summary>
DescribeSoftwareAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/DescribeSoftwareAssociationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DescribeSoftwareAssociationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DescribeSoftwareAssociationsCommandOutput/)
</details>
<details>
<summary>
DescribeStacks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/DescribeStacksCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DescribeStacksCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DescribeStacksCommandOutput/)
</details>
<details>
<summary>
DescribeThemeForStack
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/DescribeThemeForStackCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DescribeThemeForStackCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DescribeThemeForStackCommandOutput/)
</details>
<details>
<summary>
DescribeUsageReportSubscriptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/DescribeUsageReportSubscriptionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DescribeUsageReportSubscriptionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DescribeUsageReportSubscriptionsCommandOutput/)
</details>
<details>
<summary>
DescribeUsers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/DescribeUsersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DescribeUsersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DescribeUsersCommandOutput/)
</details>
<details>
<summary>
DescribeUserStackAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/DescribeUserStackAssociationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DescribeUserStackAssociationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DescribeUserStackAssociationsCommandOutput/)
</details>
<details>
<summary>
DisableUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/DisableUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DisableUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DisableUserCommandOutput/)
</details>
<details>
<summary>
DisassociateAppBlockBuilderAppBlock
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/DisassociateAppBlockBuilderAppBlockCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DisassociateAppBlockBuilderAppBlockCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DisassociateAppBlockBuilderAppBlockCommandOutput/)
</details>
<details>
<summary>
DisassociateApplicationFleet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/DisassociateApplicationFleetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DisassociateApplicationFleetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DisassociateApplicationFleetCommandOutput/)
</details>
<details>
<summary>
DisassociateApplicationFromEntitlement
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/DisassociateApplicationFromEntitlementCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DisassociateApplicationFromEntitlementCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DisassociateApplicationFromEntitlementCommandOutput/)
</details>
<details>
<summary>
DisassociateFleet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/DisassociateFleetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DisassociateFleetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DisassociateFleetCommandOutput/)
</details>
<details>
<summary>
DisassociateSoftwareFromImageBuilder
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/DisassociateSoftwareFromImageBuilderCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DisassociateSoftwareFromImageBuilderCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/DisassociateSoftwareFromImageBuilderCommandOutput/)
</details>
<details>
<summary>
EnableUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/EnableUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/EnableUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/EnableUserCommandOutput/)
</details>
<details>
<summary>
ExpireSession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/ExpireSessionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/ExpireSessionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/ExpireSessionCommandOutput/)
</details>
<details>
<summary>
GetExportImageTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/GetExportImageTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/GetExportImageTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/GetExportImageTaskCommandOutput/)
</details>
<details>
<summary>
ListAssociatedFleets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/ListAssociatedFleetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/ListAssociatedFleetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/ListAssociatedFleetsCommandOutput/)
</details>
<details>
<summary>
ListAssociatedStacks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/ListAssociatedStacksCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/ListAssociatedStacksCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/ListAssociatedStacksCommandOutput/)
</details>
<details>
<summary>
ListEntitledApplications
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/ListEntitledApplicationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/ListEntitledApplicationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/ListEntitledApplicationsCommandOutput/)
</details>
<details>
<summary>
ListExportImageTasks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/ListExportImageTasksCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/ListExportImageTasksCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/ListExportImageTasksCommandOutput/)
</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/ListTagsForResourceCommandOutput/)
</details>
<details>
<summary>
StartAppBlockBuilder
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/StartAppBlockBuilderCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/StartAppBlockBuilderCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/StartAppBlockBuilderCommandOutput/)
</details>
<details>
<summary>
StartFleet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/StartFleetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/StartFleetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/StartFleetCommandOutput/)
</details>
<details>
<summary>
StartImageBuilder
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/StartImageBuilderCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/StartImageBuilderCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/StartImageBuilderCommandOutput/)
</details>
<details>
<summary>
StartSoftwareDeploymentToImageBuilder
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/StartSoftwareDeploymentToImageBuilderCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/StartSoftwareDeploymentToImageBuilderCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/StartSoftwareDeploymentToImageBuilderCommandOutput/)
</details>
<details>
<summary>
StopAppBlockBuilder
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/StopAppBlockBuilderCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/StopAppBlockBuilderCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/StopAppBlockBuilderCommandOutput/)
</details>
<details>
<summary>
StopFleet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/StopFleetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/StopFleetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/StopFleetCommandOutput/)
</details>
<details>
<summary>
StopImageBuilder
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/StopImageBuilderCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/StopImageBuilderCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/StopImageBuilderCommandOutput/)
</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/TagResourceCommandOutput/)
</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/UntagResourceCommandOutput/)
</details>
<details>
<summary>
UpdateAppBlockBuilder
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/UpdateAppBlockBuilderCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/UpdateAppBlockBuilderCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/UpdateAppBlockBuilderCommandOutput/)
</details>
<details>
<summary>
UpdateApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/UpdateApplicationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/UpdateApplicationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/UpdateApplicationCommandOutput/)
</details>
<details>
<summary>
UpdateDirectoryConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/UpdateDirectoryConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/UpdateDirectoryConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/UpdateDirectoryConfigCommandOutput/)
</details>
<details>
<summary>
UpdateEntitlement
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/UpdateEntitlementCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/UpdateEntitlementCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/UpdateEntitlementCommandOutput/)
</details>
<details>
<summary>
UpdateFleet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/UpdateFleetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/UpdateFleetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/UpdateFleetCommandOutput/)
</details>
<details>
<summary>
UpdateImagePermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/UpdateImagePermissionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/UpdateImagePermissionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/UpdateImagePermissionsCommandOutput/)
</details>
<details>
<summary>
UpdateStack
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/UpdateStackCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/UpdateStackCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/UpdateStackCommandOutput/)
</details>
<details>
<summary>
UpdateThemeForStack
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appstream/command/UpdateThemeForStackCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/UpdateThemeForStackCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appstream/Interface/UpdateThemeForStackCommandOutput/)
</details>
