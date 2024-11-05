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

To install this package, simply type add or install @aws-sdk/client-workspaces
using your favorite package manager:

- `npm install @aws-sdk/client-workspaces`
- `yarn add @aws-sdk/client-workspaces`
- `pnpm add @aws-sdk/client-workspaces`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `WorkSpacesClient` and
the commands you need, for example `ListAccountLinksCommand`:

```js
// ES5 example
const { WorkSpacesClient, ListAccountLinksCommand } = require("@aws-sdk/client-workspaces");
```

```ts
// ES6+ example
import { WorkSpacesClient, ListAccountLinksCommand } from "@aws-sdk/client-workspaces";
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
const command = new ListAccountLinksCommand(params);
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
  const data = await client.listAccountLinks(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listAccountLinks(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listAccountLinks(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-workspaces` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AcceptAccountLinkInvitation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/AcceptAccountLinkInvitationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/AcceptAccountLinkInvitationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/AcceptAccountLinkInvitationCommandOutput/)

</details>
<details>
<summary>
AssociateConnectionAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/AssociateConnectionAliasCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/AssociateConnectionAliasCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/AssociateConnectionAliasCommandOutput/)

</details>
<details>
<summary>
AssociateIpGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/AssociateIpGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/AssociateIpGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/AssociateIpGroupsCommandOutput/)

</details>
<details>
<summary>
AssociateWorkspaceApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/AssociateWorkspaceApplicationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/AssociateWorkspaceApplicationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/AssociateWorkspaceApplicationCommandOutput/)

</details>
<details>
<summary>
AuthorizeIpRules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/AuthorizeIpRulesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/AuthorizeIpRulesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/AuthorizeIpRulesCommandOutput/)

</details>
<details>
<summary>
CopyWorkspaceImage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/CopyWorkspaceImageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/CopyWorkspaceImageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/CopyWorkspaceImageCommandOutput/)

</details>
<details>
<summary>
CreateAccountLinkInvitation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/CreateAccountLinkInvitationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/CreateAccountLinkInvitationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/CreateAccountLinkInvitationCommandOutput/)

</details>
<details>
<summary>
CreateConnectClientAddIn
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/CreateConnectClientAddInCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/CreateConnectClientAddInCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/CreateConnectClientAddInCommandOutput/)

</details>
<details>
<summary>
CreateConnectionAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/CreateConnectionAliasCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/CreateConnectionAliasCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/CreateConnectionAliasCommandOutput/)

</details>
<details>
<summary>
CreateIpGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/CreateIpGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/CreateIpGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/CreateIpGroupCommandOutput/)

</details>
<details>
<summary>
CreateStandbyWorkspaces
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/CreateStandbyWorkspacesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/CreateStandbyWorkspacesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/CreateStandbyWorkspacesCommandOutput/)

</details>
<details>
<summary>
CreateTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/CreateTagsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/CreateTagsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/CreateTagsCommandOutput/)

</details>
<details>
<summary>
CreateUpdatedWorkspaceImage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/CreateUpdatedWorkspaceImageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/CreateUpdatedWorkspaceImageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/CreateUpdatedWorkspaceImageCommandOutput/)

</details>
<details>
<summary>
CreateWorkspaceBundle
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/CreateWorkspaceBundleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/CreateWorkspaceBundleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/CreateWorkspaceBundleCommandOutput/)

</details>
<details>
<summary>
CreateWorkspaceImage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/CreateWorkspaceImageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/CreateWorkspaceImageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/CreateWorkspaceImageCommandOutput/)

</details>
<details>
<summary>
CreateWorkspaces
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/CreateWorkspacesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/CreateWorkspacesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/CreateWorkspacesCommandOutput/)

</details>
<details>
<summary>
CreateWorkspacesPool
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/CreateWorkspacesPoolCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/CreateWorkspacesPoolCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/CreateWorkspacesPoolCommandOutput/)

</details>
<details>
<summary>
DeleteAccountLinkInvitation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/DeleteAccountLinkInvitationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DeleteAccountLinkInvitationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DeleteAccountLinkInvitationCommandOutput/)

</details>
<details>
<summary>
DeleteClientBranding
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/DeleteClientBrandingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DeleteClientBrandingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DeleteClientBrandingCommandOutput/)

</details>
<details>
<summary>
DeleteConnectClientAddIn
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/DeleteConnectClientAddInCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DeleteConnectClientAddInCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DeleteConnectClientAddInCommandOutput/)

</details>
<details>
<summary>
DeleteConnectionAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/DeleteConnectionAliasCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DeleteConnectionAliasCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DeleteConnectionAliasCommandOutput/)

</details>
<details>
<summary>
DeleteIpGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/DeleteIpGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DeleteIpGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DeleteIpGroupCommandOutput/)

</details>
<details>
<summary>
DeleteTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/DeleteTagsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DeleteTagsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DeleteTagsCommandOutput/)

</details>
<details>
<summary>
DeleteWorkspaceBundle
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/DeleteWorkspaceBundleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DeleteWorkspaceBundleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DeleteWorkspaceBundleCommandOutput/)

</details>
<details>
<summary>
DeleteWorkspaceImage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/DeleteWorkspaceImageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DeleteWorkspaceImageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DeleteWorkspaceImageCommandOutput/)

</details>
<details>
<summary>
DeployWorkspaceApplications
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/DeployWorkspaceApplicationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DeployWorkspaceApplicationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DeployWorkspaceApplicationsCommandOutput/)

</details>
<details>
<summary>
DeregisterWorkspaceDirectory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/DeregisterWorkspaceDirectoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DeregisterWorkspaceDirectoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DeregisterWorkspaceDirectoryCommandOutput/)

</details>
<details>
<summary>
DescribeAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/DescribeAccountCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DescribeAccountCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DescribeAccountCommandOutput/)

</details>
<details>
<summary>
DescribeAccountModifications
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/DescribeAccountModificationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DescribeAccountModificationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DescribeAccountModificationsCommandOutput/)

</details>
<details>
<summary>
DescribeApplicationAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/DescribeApplicationAssociationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DescribeApplicationAssociationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DescribeApplicationAssociationsCommandOutput/)

</details>
<details>
<summary>
DescribeApplications
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/DescribeApplicationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DescribeApplicationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DescribeApplicationsCommandOutput/)

</details>
<details>
<summary>
DescribeBundleAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/DescribeBundleAssociationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DescribeBundleAssociationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DescribeBundleAssociationsCommandOutput/)

</details>
<details>
<summary>
DescribeClientBranding
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/DescribeClientBrandingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DescribeClientBrandingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DescribeClientBrandingCommandOutput/)

</details>
<details>
<summary>
DescribeClientProperties
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/DescribeClientPropertiesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DescribeClientPropertiesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DescribeClientPropertiesCommandOutput/)

</details>
<details>
<summary>
DescribeConnectClientAddIns
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/DescribeConnectClientAddInsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DescribeConnectClientAddInsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DescribeConnectClientAddInsCommandOutput/)

</details>
<details>
<summary>
DescribeConnectionAliases
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/DescribeConnectionAliasesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DescribeConnectionAliasesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DescribeConnectionAliasesCommandOutput/)

</details>
<details>
<summary>
DescribeConnectionAliasPermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/DescribeConnectionAliasPermissionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DescribeConnectionAliasPermissionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DescribeConnectionAliasPermissionsCommandOutput/)

</details>
<details>
<summary>
DescribeImageAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/DescribeImageAssociationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DescribeImageAssociationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DescribeImageAssociationsCommandOutput/)

</details>
<details>
<summary>
DescribeIpGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/DescribeIpGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DescribeIpGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DescribeIpGroupsCommandOutput/)

</details>
<details>
<summary>
DescribeTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/DescribeTagsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DescribeTagsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DescribeTagsCommandOutput/)

</details>
<details>
<summary>
DescribeWorkspaceAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/DescribeWorkspaceAssociationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DescribeWorkspaceAssociationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DescribeWorkspaceAssociationsCommandOutput/)

</details>
<details>
<summary>
DescribeWorkspaceBundles
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/DescribeWorkspaceBundlesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DescribeWorkspaceBundlesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DescribeWorkspaceBundlesCommandOutput/)

</details>
<details>
<summary>
DescribeWorkspaceDirectories
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/DescribeWorkspaceDirectoriesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DescribeWorkspaceDirectoriesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DescribeWorkspaceDirectoriesCommandOutput/)

</details>
<details>
<summary>
DescribeWorkspaceImagePermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/DescribeWorkspaceImagePermissionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DescribeWorkspaceImagePermissionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DescribeWorkspaceImagePermissionsCommandOutput/)

</details>
<details>
<summary>
DescribeWorkspaceImages
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/DescribeWorkspaceImagesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DescribeWorkspaceImagesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DescribeWorkspaceImagesCommandOutput/)

</details>
<details>
<summary>
DescribeWorkspaces
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/DescribeWorkspacesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DescribeWorkspacesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DescribeWorkspacesCommandOutput/)

</details>
<details>
<summary>
DescribeWorkspacesConnectionStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/DescribeWorkspacesConnectionStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DescribeWorkspacesConnectionStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DescribeWorkspacesConnectionStatusCommandOutput/)

</details>
<details>
<summary>
DescribeWorkspaceSnapshots
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/DescribeWorkspaceSnapshotsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DescribeWorkspaceSnapshotsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DescribeWorkspaceSnapshotsCommandOutput/)

</details>
<details>
<summary>
DescribeWorkspacesPools
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/DescribeWorkspacesPoolsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DescribeWorkspacesPoolsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DescribeWorkspacesPoolsCommandOutput/)

</details>
<details>
<summary>
DescribeWorkspacesPoolSessions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/DescribeWorkspacesPoolSessionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DescribeWorkspacesPoolSessionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DescribeWorkspacesPoolSessionsCommandOutput/)

</details>
<details>
<summary>
DisassociateConnectionAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/DisassociateConnectionAliasCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DisassociateConnectionAliasCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DisassociateConnectionAliasCommandOutput/)

</details>
<details>
<summary>
DisassociateIpGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/DisassociateIpGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DisassociateIpGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DisassociateIpGroupsCommandOutput/)

</details>
<details>
<summary>
DisassociateWorkspaceApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/DisassociateWorkspaceApplicationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DisassociateWorkspaceApplicationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/DisassociateWorkspaceApplicationCommandOutput/)

</details>
<details>
<summary>
GetAccountLink
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/GetAccountLinkCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/GetAccountLinkCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/GetAccountLinkCommandOutput/)

</details>
<details>
<summary>
ImportClientBranding
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/ImportClientBrandingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/ImportClientBrandingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/ImportClientBrandingCommandOutput/)

</details>
<details>
<summary>
ImportWorkspaceImage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/ImportWorkspaceImageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/ImportWorkspaceImageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/ImportWorkspaceImageCommandOutput/)

</details>
<details>
<summary>
ListAccountLinks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/ListAccountLinksCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/ListAccountLinksCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/ListAccountLinksCommandOutput/)

</details>
<details>
<summary>
ListAvailableManagementCidrRanges
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/ListAvailableManagementCidrRangesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/ListAvailableManagementCidrRangesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/ListAvailableManagementCidrRangesCommandOutput/)

</details>
<details>
<summary>
MigrateWorkspace
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/MigrateWorkspaceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/MigrateWorkspaceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/MigrateWorkspaceCommandOutput/)

</details>
<details>
<summary>
ModifyAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/ModifyAccountCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/ModifyAccountCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/ModifyAccountCommandOutput/)

</details>
<details>
<summary>
ModifyCertificateBasedAuthProperties
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/ModifyCertificateBasedAuthPropertiesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/ModifyCertificateBasedAuthPropertiesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/ModifyCertificateBasedAuthPropertiesCommandOutput/)

</details>
<details>
<summary>
ModifyClientProperties
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/ModifyClientPropertiesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/ModifyClientPropertiesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/ModifyClientPropertiesCommandOutput/)

</details>
<details>
<summary>
ModifySamlProperties
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/ModifySamlPropertiesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/ModifySamlPropertiesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/ModifySamlPropertiesCommandOutput/)

</details>
<details>
<summary>
ModifySelfservicePermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/ModifySelfservicePermissionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/ModifySelfservicePermissionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/ModifySelfservicePermissionsCommandOutput/)

</details>
<details>
<summary>
ModifyStreamingProperties
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/ModifyStreamingPropertiesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/ModifyStreamingPropertiesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/ModifyStreamingPropertiesCommandOutput/)

</details>
<details>
<summary>
ModifyWorkspaceAccessProperties
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/ModifyWorkspaceAccessPropertiesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/ModifyWorkspaceAccessPropertiesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/ModifyWorkspaceAccessPropertiesCommandOutput/)

</details>
<details>
<summary>
ModifyWorkspaceCreationProperties
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/ModifyWorkspaceCreationPropertiesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/ModifyWorkspaceCreationPropertiesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/ModifyWorkspaceCreationPropertiesCommandOutput/)

</details>
<details>
<summary>
ModifyWorkspaceProperties
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/ModifyWorkspacePropertiesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/ModifyWorkspacePropertiesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/ModifyWorkspacePropertiesCommandOutput/)

</details>
<details>
<summary>
ModifyWorkspaceState
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/ModifyWorkspaceStateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/ModifyWorkspaceStateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/ModifyWorkspaceStateCommandOutput/)

</details>
<details>
<summary>
RebootWorkspaces
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/RebootWorkspacesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/RebootWorkspacesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/RebootWorkspacesCommandOutput/)

</details>
<details>
<summary>
RebuildWorkspaces
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/RebuildWorkspacesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/RebuildWorkspacesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/RebuildWorkspacesCommandOutput/)

</details>
<details>
<summary>
RegisterWorkspaceDirectory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/RegisterWorkspaceDirectoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/RegisterWorkspaceDirectoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/RegisterWorkspaceDirectoryCommandOutput/)

</details>
<details>
<summary>
RejectAccountLinkInvitation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/RejectAccountLinkInvitationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/RejectAccountLinkInvitationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/RejectAccountLinkInvitationCommandOutput/)

</details>
<details>
<summary>
RestoreWorkspace
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/RestoreWorkspaceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/RestoreWorkspaceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/RestoreWorkspaceCommandOutput/)

</details>
<details>
<summary>
RevokeIpRules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/RevokeIpRulesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/RevokeIpRulesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/RevokeIpRulesCommandOutput/)

</details>
<details>
<summary>
StartWorkspaces
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/StartWorkspacesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/StartWorkspacesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/StartWorkspacesCommandOutput/)

</details>
<details>
<summary>
StartWorkspacesPool
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/StartWorkspacesPoolCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/StartWorkspacesPoolCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/StartWorkspacesPoolCommandOutput/)

</details>
<details>
<summary>
StopWorkspaces
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/StopWorkspacesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/StopWorkspacesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/StopWorkspacesCommandOutput/)

</details>
<details>
<summary>
StopWorkspacesPool
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/StopWorkspacesPoolCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/StopWorkspacesPoolCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/StopWorkspacesPoolCommandOutput/)

</details>
<details>
<summary>
TerminateWorkspaces
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/TerminateWorkspacesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/TerminateWorkspacesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/TerminateWorkspacesCommandOutput/)

</details>
<details>
<summary>
TerminateWorkspacesPool
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/TerminateWorkspacesPoolCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/TerminateWorkspacesPoolCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/TerminateWorkspacesPoolCommandOutput/)

</details>
<details>
<summary>
TerminateWorkspacesPoolSession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/TerminateWorkspacesPoolSessionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/TerminateWorkspacesPoolSessionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/TerminateWorkspacesPoolSessionCommandOutput/)

</details>
<details>
<summary>
UpdateConnectClientAddIn
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/UpdateConnectClientAddInCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/UpdateConnectClientAddInCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/UpdateConnectClientAddInCommandOutput/)

</details>
<details>
<summary>
UpdateConnectionAliasPermission
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/UpdateConnectionAliasPermissionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/UpdateConnectionAliasPermissionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/UpdateConnectionAliasPermissionCommandOutput/)

</details>
<details>
<summary>
UpdateRulesOfIpGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/UpdateRulesOfIpGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/UpdateRulesOfIpGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/UpdateRulesOfIpGroupCommandOutput/)

</details>
<details>
<summary>
UpdateWorkspaceBundle
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/UpdateWorkspaceBundleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/UpdateWorkspaceBundleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/UpdateWorkspaceBundleCommandOutput/)

</details>
<details>
<summary>
UpdateWorkspaceImagePermission
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/UpdateWorkspaceImagePermissionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/UpdateWorkspaceImagePermissionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/UpdateWorkspaceImagePermissionCommandOutput/)

</details>
<details>
<summary>
UpdateWorkspacesPool
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/workspaces/command/UpdateWorkspacesPoolCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/UpdateWorkspacesPoolCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-workspaces/Interface/UpdateWorkspacesPoolCommandOutput/)

</details>
