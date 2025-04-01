<!-- generated file, do not edit directly -->

# @aws-sdk/client-directory-service-data

## Description

AWS SDK for JavaScript DirectoryServiceData Client for Node.js, Browser and React Native.

<p> Amazon Web Services Directory Service Data is an extension of Directory Service. This API reference provides detailed information
about Directory Service Data operations and object types. </p>
<p> With Directory Service Data, you can create, read, update, and delete users, groups, and memberships from
your Managed Microsoft AD without additional costs and without deploying dedicated management
instances. You can also perform built-in object management tasks across directories without
direct network connectivity, which simplifies provisioning and access management to achieve
fully automated deployments. Directory Service Data supports user and group write operations, such as
<code>CreateUser</code> and <code>CreateGroup</code>, within the organizational unit (OU) of
your Managed Microsoft AD. Directory Service Data supports read operations, such as <code>ListUsers</code> and
<code>ListGroups</code>, on all users, groups, and group memberships within your
Managed Microsoft AD and across trusted realms. Directory Service Data supports adding and removing group members in
your OU and the Amazon Web Services Delegated Groups OU, so you can grant and deny access to specific roles
and permissions. For more information, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ms_ad_manage_users_groups.html">Manage users and
groups</a> in the <i>Directory Service Administration Guide</i>. </p>
<note>
<p> Directory management operations and configuration changes made against the Directory Service
API will also reflect in Directory Service Data API with eventual consistency. You can expect a short delay
between management changes, such as adding a new directory trust and calling the Directory Service Data API
for the newly created trusted realm. </p>
</note>
<p> Directory Service Data connects to your Managed Microsoft AD domain controllers and performs operations on
underlying directory objects. When you create your Managed Microsoft AD, you choose subnets for domain
controllers that Directory Service creates on your behalf. If a domain controller is unavailable, Directory Service Data
uses an available domain controller. As a result, you might notice eventual consistency while
objects replicate from one domain controller to another domain controller. For more
information, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ms_ad_getting_started_what_gets_created.html">What
gets created</a> in the <i>Directory Service Administration Guide</i>.
Directory limits vary by Managed Microsoft AD edition: </p>
<ul>
<li>
<p>
<b>Standard edition</b> – Supports 8 transactions per
second (TPS) for read operations and 4 TPS for write operations per directory. There's a
concurrency limit of 10 concurrent requests. </p>
</li>
<li>
<p>
<b>Enterprise edition</b> – Supports 16 transactions per
second (TPS) for read operations and 8 TPS for write operations per directory. There's a
concurrency limit of 10 concurrent requests.</p>
</li>
<li>
<p>
<b>Amazon Web Services Account</b> - Supports a total of 100 TPS for
Directory Service Data operations across all directories.</p>
</li>
</ul>
<p> Directory Service Data only supports the Managed Microsoft AD directory type and is only available in the primary
Amazon Web Services Region. For more information, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_microsoft_ad.html">Managed Microsoft AD</a>
and <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/multi-region-global-primary-additional.html">Primary vs additional Regions</a> in the <i>Directory Service Administration
Guide</i>. </p>

## Installing

To install this package, simply type add or install @aws-sdk/client-directory-service-data
using your favorite package manager:

- `npm install @aws-sdk/client-directory-service-data`
- `yarn add @aws-sdk/client-directory-service-data`
- `pnpm add @aws-sdk/client-directory-service-data`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `DirectoryServiceDataClient` and
the commands you need, for example `ListGroupsCommand`:

```js
// ES5 example
const { DirectoryServiceDataClient, ListGroupsCommand } = require("@aws-sdk/client-directory-service-data");
```

```ts
// ES6+ example
import { DirectoryServiceDataClient, ListGroupsCommand } from "@aws-sdk/client-directory-service-data";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new DirectoryServiceDataClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListGroupsCommand(params);
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
import * as AWS from "@aws-sdk/client-directory-service-data";
const client = new AWS.DirectoryServiceData({ region: "REGION" });

// async/await.
try {
  const data = await client.listGroups(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listGroups(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listGroups(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-directory-service-data` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AddGroupMember
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service-data/command/AddGroupMemberCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service-data/Interface/AddGroupMemberCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service-data/Interface/AddGroupMemberCommandOutput/)

</details>
<details>
<summary>
CreateGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service-data/command/CreateGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service-data/Interface/CreateGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service-data/Interface/CreateGroupCommandOutput/)

</details>
<details>
<summary>
CreateUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service-data/command/CreateUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service-data/Interface/CreateUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service-data/Interface/CreateUserCommandOutput/)

</details>
<details>
<summary>
DeleteGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service-data/command/DeleteGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service-data/Interface/DeleteGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service-data/Interface/DeleteGroupCommandOutput/)

</details>
<details>
<summary>
DeleteUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service-data/command/DeleteUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service-data/Interface/DeleteUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service-data/Interface/DeleteUserCommandOutput/)

</details>
<details>
<summary>
DescribeGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service-data/command/DescribeGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service-data/Interface/DescribeGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service-data/Interface/DescribeGroupCommandOutput/)

</details>
<details>
<summary>
DescribeUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service-data/command/DescribeUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service-data/Interface/DescribeUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service-data/Interface/DescribeUserCommandOutput/)

</details>
<details>
<summary>
DisableUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service-data/command/DisableUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service-data/Interface/DisableUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service-data/Interface/DisableUserCommandOutput/)

</details>
<details>
<summary>
ListGroupMembers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service-data/command/ListGroupMembersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service-data/Interface/ListGroupMembersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service-data/Interface/ListGroupMembersCommandOutput/)

</details>
<details>
<summary>
ListGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service-data/command/ListGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service-data/Interface/ListGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service-data/Interface/ListGroupsCommandOutput/)

</details>
<details>
<summary>
ListGroupsForMember
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service-data/command/ListGroupsForMemberCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service-data/Interface/ListGroupsForMemberCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service-data/Interface/ListGroupsForMemberCommandOutput/)

</details>
<details>
<summary>
ListUsers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service-data/command/ListUsersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service-data/Interface/ListUsersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service-data/Interface/ListUsersCommandOutput/)

</details>
<details>
<summary>
RemoveGroupMember
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service-data/command/RemoveGroupMemberCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service-data/Interface/RemoveGroupMemberCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service-data/Interface/RemoveGroupMemberCommandOutput/)

</details>
<details>
<summary>
SearchGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service-data/command/SearchGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service-data/Interface/SearchGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service-data/Interface/SearchGroupsCommandOutput/)

</details>
<details>
<summary>
SearchUsers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service-data/command/SearchUsersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service-data/Interface/SearchUsersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service-data/Interface/SearchUsersCommandOutput/)

</details>
<details>
<summary>
UpdateGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service-data/command/UpdateGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service-data/Interface/UpdateGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service-data/Interface/UpdateGroupCommandOutput/)

</details>
<details>
<summary>
UpdateUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/directory-service-data/command/UpdateUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service-data/Interface/UpdateUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-directory-service-data/Interface/UpdateUserCommandOutput/)

</details>
