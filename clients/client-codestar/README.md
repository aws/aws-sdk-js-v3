<!-- generated file, do not edit directly -->

# @aws-sdk/client-codestar

## Description

AWS SDK for JavaScript CodeStar Client for Node.js, Browser and React Native.

<fullname>AWS CodeStar</fullname>

<p>This is the API reference for AWS CodeStar. This reference provides descriptions of the
operations and data types for the AWS CodeStar API along with usage examples.</p>
<p>You can use the AWS CodeStar API to work with:</p>
<p>Projects and their resources, by calling the following:</p>
<ul>
<li>
<p>
<code>DeleteProject</code>, which deletes a project.</p>
</li>
<li>
<p>
<code>DescribeProject</code>, which lists the attributes of a project.</p>
</li>
<li>
<p>
<code>ListProjects</code>, which lists all projects associated with your AWS
account.</p>
</li>
<li>
<p>
<code>ListResources</code>, which lists the resources associated with a
project.</p>
</li>
<li>
<p>
<code>ListTagsForProject</code>, which lists the tags associated with a
project.</p>
</li>
<li>
<p>
<code>TagProject</code>, which adds tags to a project.</p>
</li>
<li>
<p>
<code>UntagProject</code>, which removes tags from a project.</p>
</li>
<li>
<p>
<code>UpdateProject</code>, which updates the attributes of a project.</p>
</li>
</ul>
<p>Teams and team members, by calling the following:</p>
<ul>
<li>
<p>
<code>AssociateTeamMember</code>, which adds an IAM user to the team for a
project.</p>
</li>
<li>
<p>
<code>DisassociateTeamMember</code>, which removes an IAM user from the team for a
project.</p>
</li>
<li>
<p>
<code>ListTeamMembers</code>, which lists all the IAM users in the team for a
project, including their roles and attributes.</p>
</li>
<li>
<p>
<code>UpdateTeamMember</code>, which updates a team member's attributes in a
project.</p>
</li>
</ul>
<p>Users, by calling the following:</p>
<ul>
<li>
<p>
<code>CreateUserProfile</code>, which creates a user profile that contains data
associated with the user across all projects.</p>
</li>
<li>
<p>
<code>DeleteUserProfile</code>, which deletes all user profile information across
all projects.</p>
</li>
<li>
<p>
<code>DescribeUserProfile</code>, which describes the profile of a user.</p>
</li>
<li>
<p>
<code>ListUserProfiles</code>, which lists all user profiles.</p>
</li>
<li>
<p>
<code>UpdateUserProfile</code>, which updates the profile for a user.</p>
</li>
</ul>

## Installing

To install the this package, simply type add or install @aws-sdk/client-codestar
using your favorite package manager:

- `npm install @aws-sdk/client-codestar`
- `yarn add @aws-sdk/client-codestar`
- `pnpm add @aws-sdk/client-codestar`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `CodeStarClient` and
the commands you need, for example `ListProjectsCommand`:

```js
// ES5 example
const { CodeStarClient, ListProjectsCommand } = require("@aws-sdk/client-codestar");
```

```ts
// ES6+ example
import { CodeStarClient, ListProjectsCommand } from "@aws-sdk/client-codestar";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new CodeStarClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListProjectsCommand(params);
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
import * as AWS from "@aws-sdk/client-codestar";
const client = new AWS.CodeStar({ region: "REGION" });

// async/await.
try {
  const data = await client.listProjects(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listProjects(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listProjects(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-codestar` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AssociateTeamMember
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codestar/command/AssociateTeamMemberCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar/Interface/AssociateTeamMemberCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar/Interface/AssociateTeamMemberCommandOutput/)

</details>
<details>
<summary>
CreateProject
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codestar/command/CreateProjectCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar/Interface/CreateProjectCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar/Interface/CreateProjectCommandOutput/)

</details>
<details>
<summary>
CreateUserProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codestar/command/CreateUserProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar/Interface/CreateUserProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar/Interface/CreateUserProfileCommandOutput/)

</details>
<details>
<summary>
DeleteProject
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codestar/command/DeleteProjectCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar/Interface/DeleteProjectCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar/Interface/DeleteProjectCommandOutput/)

</details>
<details>
<summary>
DeleteUserProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codestar/command/DeleteUserProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar/Interface/DeleteUserProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar/Interface/DeleteUserProfileCommandOutput/)

</details>
<details>
<summary>
DescribeProject
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codestar/command/DescribeProjectCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar/Interface/DescribeProjectCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar/Interface/DescribeProjectCommandOutput/)

</details>
<details>
<summary>
DescribeUserProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codestar/command/DescribeUserProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar/Interface/DescribeUserProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar/Interface/DescribeUserProfileCommandOutput/)

</details>
<details>
<summary>
DisassociateTeamMember
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codestar/command/DisassociateTeamMemberCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar/Interface/DisassociateTeamMemberCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar/Interface/DisassociateTeamMemberCommandOutput/)

</details>
<details>
<summary>
ListProjects
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codestar/command/ListProjectsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar/Interface/ListProjectsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar/Interface/ListProjectsCommandOutput/)

</details>
<details>
<summary>
ListResources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codestar/command/ListResourcesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar/Interface/ListResourcesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar/Interface/ListResourcesCommandOutput/)

</details>
<details>
<summary>
ListTagsForProject
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codestar/command/ListTagsForProjectCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar/Interface/ListTagsForProjectCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar/Interface/ListTagsForProjectCommandOutput/)

</details>
<details>
<summary>
ListTeamMembers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codestar/command/ListTeamMembersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar/Interface/ListTeamMembersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar/Interface/ListTeamMembersCommandOutput/)

</details>
<details>
<summary>
ListUserProfiles
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codestar/command/ListUserProfilesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar/Interface/ListUserProfilesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar/Interface/ListUserProfilesCommandOutput/)

</details>
<details>
<summary>
TagProject
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codestar/command/TagProjectCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar/Interface/TagProjectCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar/Interface/TagProjectCommandOutput/)

</details>
<details>
<summary>
UntagProject
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codestar/command/UntagProjectCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar/Interface/UntagProjectCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar/Interface/UntagProjectCommandOutput/)

</details>
<details>
<summary>
UpdateProject
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codestar/command/UpdateProjectCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar/Interface/UpdateProjectCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar/Interface/UpdateProjectCommandOutput/)

</details>
<details>
<summary>
UpdateTeamMember
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codestar/command/UpdateTeamMemberCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar/Interface/UpdateTeamMemberCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar/Interface/UpdateTeamMemberCommandOutput/)

</details>
<details>
<summary>
UpdateUserProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codestar/command/UpdateUserProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar/Interface/UpdateUserProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codestar/Interface/UpdateUserProfileCommandOutput/)

</details>
