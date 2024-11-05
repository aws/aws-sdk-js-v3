<!-- generated file, do not edit directly -->

# @aws-sdk/client-iottwinmaker

## Description

AWS SDK for JavaScript IoTTwinMaker Client for Node.js, Browser and React Native.

<p>IoT TwinMaker is a service with which you can
build operational digital twins of physical systems. IoT TwinMaker overlays measurements
and analysis from real-world sensors, cameras, and enterprise applications so you can
create data visualizations to monitor your physical factory, building, or industrial plant.
You can use this real-world data to monitor operations and diagnose and repair
errors.</p>

## Installing

To install this package, simply type add or install @aws-sdk/client-iottwinmaker
using your favorite package manager:

- `npm install @aws-sdk/client-iottwinmaker`
- `yarn add @aws-sdk/client-iottwinmaker`
- `pnpm add @aws-sdk/client-iottwinmaker`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `IoTTwinMakerClient` and
the commands you need, for example `ListScenesCommand`:

```js
// ES5 example
const { IoTTwinMakerClient, ListScenesCommand } = require("@aws-sdk/client-iottwinmaker");
```

```ts
// ES6+ example
import { IoTTwinMakerClient, ListScenesCommand } from "@aws-sdk/client-iottwinmaker";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new IoTTwinMakerClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListScenesCommand(params);
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
import * as AWS from "@aws-sdk/client-iottwinmaker";
const client = new AWS.IoTTwinMaker({ region: "REGION" });

// async/await.
try {
  const data = await client.listScenes(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listScenes(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listScenes(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-iottwinmaker` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
BatchPutPropertyValues
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iottwinmaker/command/BatchPutPropertyValuesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/BatchPutPropertyValuesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/BatchPutPropertyValuesCommandOutput/)

</details>
<details>
<summary>
CancelMetadataTransferJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iottwinmaker/command/CancelMetadataTransferJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/CancelMetadataTransferJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/CancelMetadataTransferJobCommandOutput/)

</details>
<details>
<summary>
CreateComponentType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iottwinmaker/command/CreateComponentTypeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/CreateComponentTypeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/CreateComponentTypeCommandOutput/)

</details>
<details>
<summary>
CreateEntity
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iottwinmaker/command/CreateEntityCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/CreateEntityCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/CreateEntityCommandOutput/)

</details>
<details>
<summary>
CreateMetadataTransferJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iottwinmaker/command/CreateMetadataTransferJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/CreateMetadataTransferJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/CreateMetadataTransferJobCommandOutput/)

</details>
<details>
<summary>
CreateScene
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iottwinmaker/command/CreateSceneCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/CreateSceneCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/CreateSceneCommandOutput/)

</details>
<details>
<summary>
CreateSyncJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iottwinmaker/command/CreateSyncJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/CreateSyncJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/CreateSyncJobCommandOutput/)

</details>
<details>
<summary>
CreateWorkspace
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iottwinmaker/command/CreateWorkspaceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/CreateWorkspaceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/CreateWorkspaceCommandOutput/)

</details>
<details>
<summary>
DeleteComponentType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iottwinmaker/command/DeleteComponentTypeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/DeleteComponentTypeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/DeleteComponentTypeCommandOutput/)

</details>
<details>
<summary>
DeleteEntity
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iottwinmaker/command/DeleteEntityCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/DeleteEntityCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/DeleteEntityCommandOutput/)

</details>
<details>
<summary>
DeleteScene
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iottwinmaker/command/DeleteSceneCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/DeleteSceneCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/DeleteSceneCommandOutput/)

</details>
<details>
<summary>
DeleteSyncJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iottwinmaker/command/DeleteSyncJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/DeleteSyncJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/DeleteSyncJobCommandOutput/)

</details>
<details>
<summary>
DeleteWorkspace
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iottwinmaker/command/DeleteWorkspaceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/DeleteWorkspaceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/DeleteWorkspaceCommandOutput/)

</details>
<details>
<summary>
ExecuteQuery
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iottwinmaker/command/ExecuteQueryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/ExecuteQueryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/ExecuteQueryCommandOutput/)

</details>
<details>
<summary>
GetComponentType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iottwinmaker/command/GetComponentTypeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/GetComponentTypeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/GetComponentTypeCommandOutput/)

</details>
<details>
<summary>
GetEntity
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iottwinmaker/command/GetEntityCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/GetEntityCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/GetEntityCommandOutput/)

</details>
<details>
<summary>
GetMetadataTransferJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iottwinmaker/command/GetMetadataTransferJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/GetMetadataTransferJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/GetMetadataTransferJobCommandOutput/)

</details>
<details>
<summary>
GetPricingPlan
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iottwinmaker/command/GetPricingPlanCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/GetPricingPlanCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/GetPricingPlanCommandOutput/)

</details>
<details>
<summary>
GetPropertyValue
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iottwinmaker/command/GetPropertyValueCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/GetPropertyValueCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/GetPropertyValueCommandOutput/)

</details>
<details>
<summary>
GetPropertyValueHistory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iottwinmaker/command/GetPropertyValueHistoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/GetPropertyValueHistoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/GetPropertyValueHistoryCommandOutput/)

</details>
<details>
<summary>
GetScene
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iottwinmaker/command/GetSceneCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/GetSceneCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/GetSceneCommandOutput/)

</details>
<details>
<summary>
GetSyncJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iottwinmaker/command/GetSyncJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/GetSyncJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/GetSyncJobCommandOutput/)

</details>
<details>
<summary>
GetWorkspace
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iottwinmaker/command/GetWorkspaceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/GetWorkspaceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/GetWorkspaceCommandOutput/)

</details>
<details>
<summary>
ListComponents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iottwinmaker/command/ListComponentsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/ListComponentsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/ListComponentsCommandOutput/)

</details>
<details>
<summary>
ListComponentTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iottwinmaker/command/ListComponentTypesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/ListComponentTypesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/ListComponentTypesCommandOutput/)

</details>
<details>
<summary>
ListEntities
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iottwinmaker/command/ListEntitiesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/ListEntitiesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/ListEntitiesCommandOutput/)

</details>
<details>
<summary>
ListMetadataTransferJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iottwinmaker/command/ListMetadataTransferJobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/ListMetadataTransferJobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/ListMetadataTransferJobsCommandOutput/)

</details>
<details>
<summary>
ListProperties
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iottwinmaker/command/ListPropertiesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/ListPropertiesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/ListPropertiesCommandOutput/)

</details>
<details>
<summary>
ListScenes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iottwinmaker/command/ListScenesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/ListScenesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/ListScenesCommandOutput/)

</details>
<details>
<summary>
ListSyncJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iottwinmaker/command/ListSyncJobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/ListSyncJobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/ListSyncJobsCommandOutput/)

</details>
<details>
<summary>
ListSyncResources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iottwinmaker/command/ListSyncResourcesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/ListSyncResourcesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/ListSyncResourcesCommandOutput/)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iottwinmaker/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/ListTagsForResourceCommandOutput/)

</details>
<details>
<summary>
ListWorkspaces
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iottwinmaker/command/ListWorkspacesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/ListWorkspacesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/ListWorkspacesCommandOutput/)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iottwinmaker/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/TagResourceCommandOutput/)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iottwinmaker/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/UntagResourceCommandOutput/)

</details>
<details>
<summary>
UpdateComponentType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iottwinmaker/command/UpdateComponentTypeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/UpdateComponentTypeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/UpdateComponentTypeCommandOutput/)

</details>
<details>
<summary>
UpdateEntity
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iottwinmaker/command/UpdateEntityCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/UpdateEntityCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/UpdateEntityCommandOutput/)

</details>
<details>
<summary>
UpdatePricingPlan
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iottwinmaker/command/UpdatePricingPlanCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/UpdatePricingPlanCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/UpdatePricingPlanCommandOutput/)

</details>
<details>
<summary>
UpdateScene
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iottwinmaker/command/UpdateSceneCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/UpdateSceneCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/UpdateSceneCommandOutput/)

</details>
<details>
<summary>
UpdateWorkspace
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iottwinmaker/command/UpdateWorkspaceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/UpdateWorkspaceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iottwinmaker/Interface/UpdateWorkspaceCommandOutput/)

</details>
