<!-- generated file, do not edit directly -->

# @aws-sdk/client-resource-groups

## Description

AWS SDK for JavaScript ResourceGroups Client for Node.js, Browser and React Native.

<p>Resource Groups lets you organize Amazon Web Services resources such as Amazon Elastic Compute Cloud instances, Amazon Relational Database Service
databases, and Amazon Simple Storage Service buckets into groups using criteria that you define as tags. A
resource group is a collection of resources that match the resource types specified in a
query, and share one or more tags or portions of tags. You can create a group of
resources based on their roles in your cloud infrastructure, lifecycle stages, regions,
application layers, or virtually any criteria. Resource Groups enable you to automate management
tasks, such as those in Amazon Web Services Systems Manager Automation documents, on tag-related resources in
Amazon Web Services Systems Manager. Groups of tagged resources also let you quickly view a custom console in
Amazon Web Services Systems Manager that shows Config compliance and other monitoring data about member
resources.</p>
<p>To create a resource group, build a resource query, and specify tags that identify the
criteria that members of the group have in common. Tags are key-value pairs.</p>
<p>For more information about Resource Groups, see the <a href="https://docs.aws.amazon.com/ARG/latest/userguide/welcome.html">Resource Groups User Guide</a>.</p>
<p>Resource Groups uses a REST-compliant API that you can use to perform the following types of
operations.</p>
<ul>
<li>
<p>Create, Read, Update, and Delete (CRUD) operations on resource groups and
resource query entities</p>
</li>
<li>
<p>Applying, editing, and removing tags from resource groups</p>
</li>
<li>
<p>Resolving resource group member Amazon resource names (ARN)s so they can be returned as search
results</p>
</li>
<li>
<p>Getting data about resources that are members of a group</p>
</li>
<li>
<p>Searching Amazon Web Services resources based on a resource query</p>
</li>
</ul>

## Installing

To install this package, simply type add or install @aws-sdk/client-resource-groups
using your favorite package manager:

- `npm install @aws-sdk/client-resource-groups`
- `yarn add @aws-sdk/client-resource-groups`
- `pnpm add @aws-sdk/client-resource-groups`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `ResourceGroupsClient` and
the commands you need, for example `ListGroupsCommand`:

```js
// ES5 example
const { ResourceGroupsClient, ListGroupsCommand } = require("@aws-sdk/client-resource-groups");
```

```ts
// ES6+ example
import { ResourceGroupsClient, ListGroupsCommand } from "@aws-sdk/client-resource-groups";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new ResourceGroupsClient({ region: "REGION" });

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
import * as AWS from "@aws-sdk/client-resource-groups";
const client = new AWS.ResourceGroups({ region: "REGION" });

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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-resource-groups` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CancelTagSyncTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resource-groups/command/CancelTagSyncTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resource-groups/Interface/CancelTagSyncTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resource-groups/Interface/CancelTagSyncTaskCommandOutput/)

</details>
<details>
<summary>
CreateGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resource-groups/command/CreateGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resource-groups/Interface/CreateGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resource-groups/Interface/CreateGroupCommandOutput/)

</details>
<details>
<summary>
DeleteGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resource-groups/command/DeleteGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resource-groups/Interface/DeleteGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resource-groups/Interface/DeleteGroupCommandOutput/)

</details>
<details>
<summary>
GetAccountSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resource-groups/command/GetAccountSettingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resource-groups/Interface/GetAccountSettingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resource-groups/Interface/GetAccountSettingsCommandOutput/)

</details>
<details>
<summary>
GetGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resource-groups/command/GetGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resource-groups/Interface/GetGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resource-groups/Interface/GetGroupCommandOutput/)

</details>
<details>
<summary>
GetGroupConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resource-groups/command/GetGroupConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resource-groups/Interface/GetGroupConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resource-groups/Interface/GetGroupConfigurationCommandOutput/)

</details>
<details>
<summary>
GetGroupQuery
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resource-groups/command/GetGroupQueryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resource-groups/Interface/GetGroupQueryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resource-groups/Interface/GetGroupQueryCommandOutput/)

</details>
<details>
<summary>
GetTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resource-groups/command/GetTagsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resource-groups/Interface/GetTagsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resource-groups/Interface/GetTagsCommandOutput/)

</details>
<details>
<summary>
GetTagSyncTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resource-groups/command/GetTagSyncTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resource-groups/Interface/GetTagSyncTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resource-groups/Interface/GetTagSyncTaskCommandOutput/)

</details>
<details>
<summary>
GroupResources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resource-groups/command/GroupResourcesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resource-groups/Interface/GroupResourcesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resource-groups/Interface/GroupResourcesCommandOutput/)

</details>
<details>
<summary>
ListGroupingStatuses
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resource-groups/command/ListGroupingStatusesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resource-groups/Interface/ListGroupingStatusesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resource-groups/Interface/ListGroupingStatusesCommandOutput/)

</details>
<details>
<summary>
ListGroupResources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resource-groups/command/ListGroupResourcesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resource-groups/Interface/ListGroupResourcesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resource-groups/Interface/ListGroupResourcesCommandOutput/)

</details>
<details>
<summary>
ListGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resource-groups/command/ListGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resource-groups/Interface/ListGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resource-groups/Interface/ListGroupsCommandOutput/)

</details>
<details>
<summary>
ListTagSyncTasks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resource-groups/command/ListTagSyncTasksCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resource-groups/Interface/ListTagSyncTasksCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resource-groups/Interface/ListTagSyncTasksCommandOutput/)

</details>
<details>
<summary>
PutGroupConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resource-groups/command/PutGroupConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resource-groups/Interface/PutGroupConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resource-groups/Interface/PutGroupConfigurationCommandOutput/)

</details>
<details>
<summary>
SearchResources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resource-groups/command/SearchResourcesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resource-groups/Interface/SearchResourcesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resource-groups/Interface/SearchResourcesCommandOutput/)

</details>
<details>
<summary>
StartTagSyncTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resource-groups/command/StartTagSyncTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resource-groups/Interface/StartTagSyncTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resource-groups/Interface/StartTagSyncTaskCommandOutput/)

</details>
<details>
<summary>
Tag
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resource-groups/command/TagCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resource-groups/Interface/TagCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resource-groups/Interface/TagCommandOutput/)

</details>
<details>
<summary>
UngroupResources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resource-groups/command/UngroupResourcesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resource-groups/Interface/UngroupResourcesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resource-groups/Interface/UngroupResourcesCommandOutput/)

</details>
<details>
<summary>
Untag
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resource-groups/command/UntagCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resource-groups/Interface/UntagCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resource-groups/Interface/UntagCommandOutput/)

</details>
<details>
<summary>
UpdateAccountSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resource-groups/command/UpdateAccountSettingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resource-groups/Interface/UpdateAccountSettingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resource-groups/Interface/UpdateAccountSettingsCommandOutput/)

</details>
<details>
<summary>
UpdateGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resource-groups/command/UpdateGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resource-groups/Interface/UpdateGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resource-groups/Interface/UpdateGroupCommandOutput/)

</details>
<details>
<summary>
UpdateGroupQuery
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/resource-groups/command/UpdateGroupQueryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resource-groups/Interface/UpdateGroupQueryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-resource-groups/Interface/UpdateGroupQueryCommandOutput/)

</details>
