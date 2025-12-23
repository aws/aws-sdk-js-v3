<!-- generated file, do not edit directly -->

# @aws-sdk/client-identitystore

## Description

AWS SDK for JavaScript Identitystore Client for Node.js, Browser and React Native.

<p>The Identity Store service used by IAM Identity Center provides a single place to retrieve all of your identities (users and groups). For more information, see the <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html"> IAM Identity Center User Guide</a>.</p> <p>This reference guide describes the identity store operations that you can call programmatically and includes detailed information about data types and errors.</p> <note> <p> IAM Identity Center uses the <code>sso</code>, <code>sso-directory</code>, and <code>identitystore</code> API namespaces. The <code>sso-directory</code> and <code>identitystore</code> namespaces authorize access to data in the Identity Store. Make sure your policies with IAM actions from these two namespaces are consistent to avoid conflicting authorization to the same data.</p> </note>

## Installing
To install this package, simply type add or install @aws-sdk/client-identitystore
using your favorite package manager:
- `npm install @aws-sdk/client-identitystore`
- `yarn add @aws-sdk/client-identitystore`
- `pnpm add @aws-sdk/client-identitystore`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `IdentitystoreClient` and
the commands you need, for example `ListGroupsCommand`:

```js
// ES5 example
const { IdentitystoreClient, ListGroupsCommand } = require("@aws-sdk/client-identitystore");
```

```ts
// ES6+ example
import { IdentitystoreClient, ListGroupsCommand } from "@aws-sdk/client-identitystore";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new IdentitystoreClient({ region: "REGION" });

const params = { /** input parameters */ };
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
import * as AWS from "@aws-sdk/client-identitystore";
const client = new AWS.Identitystore({ region: "REGION" });

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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-identitystore` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CreateGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/identitystore/command/CreateGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-identitystore/Interface/CreateGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-identitystore/Interface/CreateGroupCommandOutput/)
</details>
<details>
<summary>
CreateGroupMembership
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/identitystore/command/CreateGroupMembershipCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-identitystore/Interface/CreateGroupMembershipCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-identitystore/Interface/CreateGroupMembershipCommandOutput/)
</details>
<details>
<summary>
CreateUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/identitystore/command/CreateUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-identitystore/Interface/CreateUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-identitystore/Interface/CreateUserCommandOutput/)
</details>
<details>
<summary>
DeleteGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/identitystore/command/DeleteGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-identitystore/Interface/DeleteGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-identitystore/Interface/DeleteGroupCommandOutput/)
</details>
<details>
<summary>
DeleteGroupMembership
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/identitystore/command/DeleteGroupMembershipCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-identitystore/Interface/DeleteGroupMembershipCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-identitystore/Interface/DeleteGroupMembershipCommandOutput/)
</details>
<details>
<summary>
DeleteUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/identitystore/command/DeleteUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-identitystore/Interface/DeleteUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-identitystore/Interface/DeleteUserCommandOutput/)
</details>
<details>
<summary>
DescribeGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/identitystore/command/DescribeGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-identitystore/Interface/DescribeGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-identitystore/Interface/DescribeGroupCommandOutput/)
</details>
<details>
<summary>
DescribeGroupMembership
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/identitystore/command/DescribeGroupMembershipCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-identitystore/Interface/DescribeGroupMembershipCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-identitystore/Interface/DescribeGroupMembershipCommandOutput/)
</details>
<details>
<summary>
DescribeUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/identitystore/command/DescribeUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-identitystore/Interface/DescribeUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-identitystore/Interface/DescribeUserCommandOutput/)
</details>
<details>
<summary>
GetGroupId
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/identitystore/command/GetGroupIdCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-identitystore/Interface/GetGroupIdCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-identitystore/Interface/GetGroupIdCommandOutput/)
</details>
<details>
<summary>
GetGroupMembershipId
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/identitystore/command/GetGroupMembershipIdCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-identitystore/Interface/GetGroupMembershipIdCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-identitystore/Interface/GetGroupMembershipIdCommandOutput/)
</details>
<details>
<summary>
GetUserId
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/identitystore/command/GetUserIdCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-identitystore/Interface/GetUserIdCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-identitystore/Interface/GetUserIdCommandOutput/)
</details>
<details>
<summary>
IsMemberInGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/identitystore/command/IsMemberInGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-identitystore/Interface/IsMemberInGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-identitystore/Interface/IsMemberInGroupsCommandOutput/)
</details>
<details>
<summary>
ListGroupMemberships
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/identitystore/command/ListGroupMembershipsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-identitystore/Interface/ListGroupMembershipsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-identitystore/Interface/ListGroupMembershipsCommandOutput/)
</details>
<details>
<summary>
ListGroupMembershipsForMember
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/identitystore/command/ListGroupMembershipsForMemberCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-identitystore/Interface/ListGroupMembershipsForMemberCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-identitystore/Interface/ListGroupMembershipsForMemberCommandOutput/)
</details>
<details>
<summary>
ListGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/identitystore/command/ListGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-identitystore/Interface/ListGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-identitystore/Interface/ListGroupsCommandOutput/)
</details>
<details>
<summary>
ListUsers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/identitystore/command/ListUsersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-identitystore/Interface/ListUsersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-identitystore/Interface/ListUsersCommandOutput/)
</details>
<details>
<summary>
UpdateGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/identitystore/command/UpdateGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-identitystore/Interface/UpdateGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-identitystore/Interface/UpdateGroupCommandOutput/)
</details>
<details>
<summary>
UpdateUser
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/identitystore/command/UpdateUserCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-identitystore/Interface/UpdateUserCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-identitystore/Interface/UpdateUserCommandOutput/)
</details>
