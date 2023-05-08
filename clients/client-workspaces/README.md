<!-- generated file, do not edit directly -->

# @aws-sdk/client-workspaces

## Description

AWS SDK for JavaScript WorkSpaces Client for Node.js, Browser and React Native.

<fullname>Amazon WorkSpaces Service</fullname>

<p>Amazon WorkSpaces enables you to provision virtual, cloud-based Microsoft Windows
or Amazon Linux desktops for your users, known as <i>WorkSpaces</i>.
WorkSpaces eliminates the need to procure and deploy hardware or install complex
software. You can quickly add or remove users as your needs change. Users can access their
virtual desktops from multiple devices or web browsers.</p>
<p>This API Reference provides detailed information about the actions, data types,
parameters, and errors of the WorkSpaces service. For more information about the
supported Amazon Web Services Regions, endpoints, and service quotas of the Amazon WorkSpaces service, see <a href="https://docs.aws.amazon.com/general/latest/gr/wsp.html">WorkSpaces endpoints and quotas</a> in the <i>Amazon Web Services
General Reference</i>.</p>
<p>You can also manage your WorkSpaces resources using the WorkSpaces
console, Command Line Interface (CLI), and SDKs. For more information about
administering WorkSpaces, see the <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/">Amazon WorkSpaces Administration Guide</a>.
For more information about using the Amazon WorkSpaces client application or web
browser to access provisioned WorkSpaces, see the <a href="https://docs.aws.amazon.com/workspaces/latest/userguide/">Amazon WorkSpaces User Guide</a>. For more
information about using the CLI to manage your WorkSpaces resources,
see the <a href="https://docs.aws.amazon.com/cli/latest/reference/workspaces/index.html">WorkSpaces section of the CLI Reference</a>.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-workspaces
using your favorite package manager:

- `npm install @aws-sdk/client-workspaces`
- `yarn add @aws-sdk/client-workspaces`
- `pnpm add @aws-sdk/client-workspaces`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `WorkSpacesClient` and
the commands you need, for example `AssociateConnectionAliasCommand`:

```js
// ES5 example
const { WorkSpacesClient, AssociateConnectionAliasCommand } = require("@aws-sdk/client-workspaces");
```

```ts
// ES6+ example
import { WorkSpacesClient, AssociateConnectionAliasCommand } from "@aws-sdk/client-workspaces";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new WorkSpacesClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new AssociateConnectionAliasCommand(params);
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
import * as AWS from "@aws-sdk/client-workspaces";
const client = new AWS.WorkSpaces({ region: "REGION" });

// async/await.
try {
  const data = await client.associateConnectionAlias(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .associateConnectionAlias(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.associateConnectionAlias(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-workspaces` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AssociateConnectionAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/associateconnectionaliascommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/associateconnectionaliascommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/associateconnectionaliascommandoutput.html)

</details>
<details>
<summary>
AssociateIpGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/associateipgroupscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/associateipgroupscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/associateipgroupscommandoutput.html)

</details>
<details>
<summary>
AuthorizeIpRules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/authorizeiprulescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/authorizeiprulescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/authorizeiprulescommandoutput.html)

</details>
<details>
<summary>
CopyWorkspaceImage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/copyworkspaceimagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/copyworkspaceimagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/copyworkspaceimagecommandoutput.html)

</details>
<details>
<summary>
CreateConnectClientAddIn
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/createconnectclientaddincommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/createconnectclientaddincommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/createconnectclientaddincommandoutput.html)

</details>
<details>
<summary>
CreateConnectionAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/createconnectionaliascommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/createconnectionaliascommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/createconnectionaliascommandoutput.html)

</details>
<details>
<summary>
CreateIpGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/createipgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/createipgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/createipgroupcommandoutput.html)

</details>
<details>
<summary>
CreateStandbyWorkspaces
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/createstandbyworkspacescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/createstandbyworkspacescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/createstandbyworkspacescommandoutput.html)

</details>
<details>
<summary>
CreateTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/createtagscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/createtagscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/createtagscommandoutput.html)

</details>
<details>
<summary>
CreateUpdatedWorkspaceImage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/createupdatedworkspaceimagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/createupdatedworkspaceimagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/createupdatedworkspaceimagecommandoutput.html)

</details>
<details>
<summary>
CreateWorkspaceBundle
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/createworkspacebundlecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/createworkspacebundlecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/createworkspacebundlecommandoutput.html)

</details>
<details>
<summary>
CreateWorkspaceImage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/createworkspaceimagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/createworkspaceimagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/createworkspaceimagecommandoutput.html)

</details>
<details>
<summary>
CreateWorkspaces
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/createworkspacescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/createworkspacescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/createworkspacescommandoutput.html)

</details>
<details>
<summary>
DeleteClientBranding
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/deleteclientbrandingcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/deleteclientbrandingcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/deleteclientbrandingcommandoutput.html)

</details>
<details>
<summary>
DeleteConnectClientAddIn
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/deleteconnectclientaddincommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/deleteconnectclientaddincommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/deleteconnectclientaddincommandoutput.html)

</details>
<details>
<summary>
DeleteConnectionAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/deleteconnectionaliascommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/deleteconnectionaliascommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/deleteconnectionaliascommandoutput.html)

</details>
<details>
<summary>
DeleteIpGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/deleteipgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/deleteipgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/deleteipgroupcommandoutput.html)

</details>
<details>
<summary>
DeleteTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/deletetagscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/deletetagscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/deletetagscommandoutput.html)

</details>
<details>
<summary>
DeleteWorkspaceBundle
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/deleteworkspacebundlecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/deleteworkspacebundlecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/deleteworkspacebundlecommandoutput.html)

</details>
<details>
<summary>
DeleteWorkspaceImage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/deleteworkspaceimagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/deleteworkspaceimagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/deleteworkspaceimagecommandoutput.html)

</details>
<details>
<summary>
DeregisterWorkspaceDirectory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/deregisterworkspacedirectorycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/deregisterworkspacedirectorycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/deregisterworkspacedirectorycommandoutput.html)

</details>
<details>
<summary>
DescribeAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/describeaccountcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/describeaccountcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/describeaccountcommandoutput.html)

</details>
<details>
<summary>
DescribeAccountModifications
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/describeaccountmodificationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/describeaccountmodificationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/describeaccountmodificationscommandoutput.html)

</details>
<details>
<summary>
DescribeClientBranding
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/describeclientbrandingcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/describeclientbrandingcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/describeclientbrandingcommandoutput.html)

</details>
<details>
<summary>
DescribeClientProperties
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/describeclientpropertiescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/describeclientpropertiescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/describeclientpropertiescommandoutput.html)

</details>
<details>
<summary>
DescribeConnectClientAddIns
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/describeconnectclientaddinscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/describeconnectclientaddinscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/describeconnectclientaddinscommandoutput.html)

</details>
<details>
<summary>
DescribeConnectionAliases
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/describeconnectionaliasescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/describeconnectionaliasescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/describeconnectionaliasescommandoutput.html)

</details>
<details>
<summary>
DescribeConnectionAliasPermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/describeconnectionaliaspermissionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/describeconnectionaliaspermissionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/describeconnectionaliaspermissionscommandoutput.html)

</details>
<details>
<summary>
DescribeIpGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/describeipgroupscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/describeipgroupscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/describeipgroupscommandoutput.html)

</details>
<details>
<summary>
DescribeTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/describetagscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/describetagscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/describetagscommandoutput.html)

</details>
<details>
<summary>
DescribeWorkspaceBundles
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/describeworkspacebundlescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/describeworkspacebundlescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/describeworkspacebundlescommandoutput.html)

</details>
<details>
<summary>
DescribeWorkspaceDirectories
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/describeworkspacedirectoriescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/describeworkspacedirectoriescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/describeworkspacedirectoriescommandoutput.html)

</details>
<details>
<summary>
DescribeWorkspaceImagePermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/describeworkspaceimagepermissionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/describeworkspaceimagepermissionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/describeworkspaceimagepermissionscommandoutput.html)

</details>
<details>
<summary>
DescribeWorkspaceImages
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/describeworkspaceimagescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/describeworkspaceimagescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/describeworkspaceimagescommandoutput.html)

</details>
<details>
<summary>
DescribeWorkspaces
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/describeworkspacescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/describeworkspacescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/describeworkspacescommandoutput.html)

</details>
<details>
<summary>
DescribeWorkspacesConnectionStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/describeworkspacesconnectionstatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/describeworkspacesconnectionstatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/describeworkspacesconnectionstatuscommandoutput.html)

</details>
<details>
<summary>
DescribeWorkspaceSnapshots
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/describeworkspacesnapshotscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/describeworkspacesnapshotscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/describeworkspacesnapshotscommandoutput.html)

</details>
<details>
<summary>
DisassociateConnectionAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/disassociateconnectionaliascommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/disassociateconnectionaliascommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/disassociateconnectionaliascommandoutput.html)

</details>
<details>
<summary>
DisassociateIpGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/disassociateipgroupscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/disassociateipgroupscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/disassociateipgroupscommandoutput.html)

</details>
<details>
<summary>
ImportClientBranding
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/importclientbrandingcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/importclientbrandingcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/importclientbrandingcommandoutput.html)

</details>
<details>
<summary>
ImportWorkspaceImage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/importworkspaceimagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/importworkspaceimagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/importworkspaceimagecommandoutput.html)

</details>
<details>
<summary>
ListAvailableManagementCidrRanges
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/listavailablemanagementcidrrangescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/listavailablemanagementcidrrangescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/listavailablemanagementcidrrangescommandoutput.html)

</details>
<details>
<summary>
MigrateWorkspace
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/migrateworkspacecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/migrateworkspacecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/migrateworkspacecommandoutput.html)

</details>
<details>
<summary>
ModifyAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/modifyaccountcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/modifyaccountcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/modifyaccountcommandoutput.html)

</details>
<details>
<summary>
ModifyCertificateBasedAuthProperties
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/modifycertificatebasedauthpropertiescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/modifycertificatebasedauthpropertiescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/modifycertificatebasedauthpropertiescommandoutput.html)

</details>
<details>
<summary>
ModifyClientProperties
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/modifyclientpropertiescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/modifyclientpropertiescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/modifyclientpropertiescommandoutput.html)

</details>
<details>
<summary>
ModifySamlProperties
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/modifysamlpropertiescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/modifysamlpropertiescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/modifysamlpropertiescommandoutput.html)

</details>
<details>
<summary>
ModifySelfservicePermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/modifyselfservicepermissionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/modifyselfservicepermissionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/modifyselfservicepermissionscommandoutput.html)

</details>
<details>
<summary>
ModifyWorkspaceAccessProperties
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/modifyworkspaceaccesspropertiescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/modifyworkspaceaccesspropertiescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/modifyworkspaceaccesspropertiescommandoutput.html)

</details>
<details>
<summary>
ModifyWorkspaceCreationProperties
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/modifyworkspacecreationpropertiescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/modifyworkspacecreationpropertiescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/modifyworkspacecreationpropertiescommandoutput.html)

</details>
<details>
<summary>
ModifyWorkspaceProperties
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/modifyworkspacepropertiescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/modifyworkspacepropertiescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/modifyworkspacepropertiescommandoutput.html)

</details>
<details>
<summary>
ModifyWorkspaceState
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/modifyworkspacestatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/modifyworkspacestatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/modifyworkspacestatecommandoutput.html)

</details>
<details>
<summary>
RebootWorkspaces
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/rebootworkspacescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/rebootworkspacescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/rebootworkspacescommandoutput.html)

</details>
<details>
<summary>
RebuildWorkspaces
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/rebuildworkspacescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/rebuildworkspacescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/rebuildworkspacescommandoutput.html)

</details>
<details>
<summary>
RegisterWorkspaceDirectory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/registerworkspacedirectorycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/registerworkspacedirectorycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/registerworkspacedirectorycommandoutput.html)

</details>
<details>
<summary>
RestoreWorkspace
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/restoreworkspacecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/restoreworkspacecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/restoreworkspacecommandoutput.html)

</details>
<details>
<summary>
RevokeIpRules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/revokeiprulescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/revokeiprulescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/revokeiprulescommandoutput.html)

</details>
<details>
<summary>
StartWorkspaces
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/startworkspacescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/startworkspacescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/startworkspacescommandoutput.html)

</details>
<details>
<summary>
StopWorkspaces
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/stopworkspacescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/stopworkspacescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/stopworkspacescommandoutput.html)

</details>
<details>
<summary>
TerminateWorkspaces
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/terminateworkspacescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/terminateworkspacescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/terminateworkspacescommandoutput.html)

</details>
<details>
<summary>
UpdateConnectClientAddIn
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/updateconnectclientaddincommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/updateconnectclientaddincommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/updateconnectclientaddincommandoutput.html)

</details>
<details>
<summary>
UpdateConnectionAliasPermission
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/updateconnectionaliaspermissioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/updateconnectionaliaspermissioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/updateconnectionaliaspermissioncommandoutput.html)

</details>
<details>
<summary>
UpdateRulesOfIpGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/updaterulesofipgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/updaterulesofipgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/updaterulesofipgroupcommandoutput.html)

</details>
<details>
<summary>
UpdateWorkspaceBundle
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/updateworkspacebundlecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/updateworkspacebundlecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/updateworkspacebundlecommandoutput.html)

</details>
<details>
<summary>
UpdateWorkspaceImagePermission
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/classes/updateworkspaceimagepermissioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/updateworkspaceimagepermissioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-workspaces/interfaces/updateworkspaceimagepermissioncommandoutput.html)

</details>
