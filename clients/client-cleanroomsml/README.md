<!-- generated file, do not edit directly -->

# @aws-sdk/client-cleanroomsml

## Description

AWS SDK for JavaScript CleanRoomsML Client for Node.js, Browser and React Native.

<p>Welcome to the <i>Amazon Web Services Clean Rooms ML API Reference</i>.</p>
<p>Amazon Web Services Clean Rooms ML provides a privacy-enhancing method for two parties to identify similar users in their data without the need to share their data with each other. The first party brings the training data to Clean Rooms so that they can create and configure an audience model (lookalike model) and associate it with a collaboration. The second party then brings their seed data to Clean Rooms  and generates an audience (lookalike segment) that resembles the training data.</p>
<p>To learn more about Amazon Web Services Clean Rooms ML concepts, procedures, and best practices, see the
<a href="https://docs.aws.amazon.com/clean-rooms/latest/userguide/machine-learning.html">Clean Rooms User Guide</a>.</p>
<p>To learn more about SQL commands, functions, and conditions supported in Clean Rooms, see the
<a href="https://docs.aws.amazon.com/clean-rooms/latest/sql-reference/sql-reference.html">Clean Rooms SQL Reference</a>.</p>

## Installing

To install this package, simply type add or install @aws-sdk/client-cleanroomsml
using your favorite package manager:

- `npm install @aws-sdk/client-cleanroomsml`
- `yarn add @aws-sdk/client-cleanroomsml`
- `pnpm add @aws-sdk/client-cleanroomsml`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `CleanRoomsMLClient` and
the commands you need, for example `ListAudienceExportJobsCommand`:

```js
// ES5 example
const { CleanRoomsMLClient, ListAudienceExportJobsCommand } = require("@aws-sdk/client-cleanroomsml");
```

```ts
// ES6+ example
import { CleanRoomsMLClient, ListAudienceExportJobsCommand } from "@aws-sdk/client-cleanroomsml";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new CleanRoomsMLClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListAudienceExportJobsCommand(params);
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
import * as AWS from "@aws-sdk/client-cleanroomsml";
const client = new AWS.CleanRoomsML({ region: "REGION" });

// async/await.
try {
  const data = await client.listAudienceExportJobs(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listAudienceExportJobs(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listAudienceExportJobs(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-cleanroomsml` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CreateAudienceModel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanroomsml/command/CreateAudienceModelCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanroomsml/Interface/CreateAudienceModelCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanroomsml/Interface/CreateAudienceModelCommandOutput/)

</details>
<details>
<summary>
CreateConfiguredAudienceModel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanroomsml/command/CreateConfiguredAudienceModelCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanroomsml/Interface/CreateConfiguredAudienceModelCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanroomsml/Interface/CreateConfiguredAudienceModelCommandOutput/)

</details>
<details>
<summary>
CreateTrainingDataset
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanroomsml/command/CreateTrainingDatasetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanroomsml/Interface/CreateTrainingDatasetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanroomsml/Interface/CreateTrainingDatasetCommandOutput/)

</details>
<details>
<summary>
DeleteAudienceGenerationJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanroomsml/command/DeleteAudienceGenerationJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanroomsml/Interface/DeleteAudienceGenerationJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanroomsml/Interface/DeleteAudienceGenerationJobCommandOutput/)

</details>
<details>
<summary>
DeleteAudienceModel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanroomsml/command/DeleteAudienceModelCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanroomsml/Interface/DeleteAudienceModelCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanroomsml/Interface/DeleteAudienceModelCommandOutput/)

</details>
<details>
<summary>
DeleteConfiguredAudienceModel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanroomsml/command/DeleteConfiguredAudienceModelCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanroomsml/Interface/DeleteConfiguredAudienceModelCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanroomsml/Interface/DeleteConfiguredAudienceModelCommandOutput/)

</details>
<details>
<summary>
DeleteConfiguredAudienceModelPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanroomsml/command/DeleteConfiguredAudienceModelPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanroomsml/Interface/DeleteConfiguredAudienceModelPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanroomsml/Interface/DeleteConfiguredAudienceModelPolicyCommandOutput/)

</details>
<details>
<summary>
DeleteTrainingDataset
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanroomsml/command/DeleteTrainingDatasetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanroomsml/Interface/DeleteTrainingDatasetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanroomsml/Interface/DeleteTrainingDatasetCommandOutput/)

</details>
<details>
<summary>
GetAudienceGenerationJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanroomsml/command/GetAudienceGenerationJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanroomsml/Interface/GetAudienceGenerationJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanroomsml/Interface/GetAudienceGenerationJobCommandOutput/)

</details>
<details>
<summary>
GetAudienceModel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanroomsml/command/GetAudienceModelCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanroomsml/Interface/GetAudienceModelCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanroomsml/Interface/GetAudienceModelCommandOutput/)

</details>
<details>
<summary>
GetConfiguredAudienceModel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanroomsml/command/GetConfiguredAudienceModelCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanroomsml/Interface/GetConfiguredAudienceModelCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanroomsml/Interface/GetConfiguredAudienceModelCommandOutput/)

</details>
<details>
<summary>
GetConfiguredAudienceModelPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanroomsml/command/GetConfiguredAudienceModelPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanroomsml/Interface/GetConfiguredAudienceModelPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanroomsml/Interface/GetConfiguredAudienceModelPolicyCommandOutput/)

</details>
<details>
<summary>
GetTrainingDataset
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanroomsml/command/GetTrainingDatasetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanroomsml/Interface/GetTrainingDatasetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanroomsml/Interface/GetTrainingDatasetCommandOutput/)

</details>
<details>
<summary>
ListAudienceExportJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanroomsml/command/ListAudienceExportJobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanroomsml/Interface/ListAudienceExportJobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanroomsml/Interface/ListAudienceExportJobsCommandOutput/)

</details>
<details>
<summary>
ListAudienceGenerationJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanroomsml/command/ListAudienceGenerationJobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanroomsml/Interface/ListAudienceGenerationJobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanroomsml/Interface/ListAudienceGenerationJobsCommandOutput/)

</details>
<details>
<summary>
ListAudienceModels
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanroomsml/command/ListAudienceModelsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanroomsml/Interface/ListAudienceModelsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanroomsml/Interface/ListAudienceModelsCommandOutput/)

</details>
<details>
<summary>
ListConfiguredAudienceModels
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanroomsml/command/ListConfiguredAudienceModelsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanroomsml/Interface/ListConfiguredAudienceModelsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanroomsml/Interface/ListConfiguredAudienceModelsCommandOutput/)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanroomsml/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanroomsml/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanroomsml/Interface/ListTagsForResourceCommandOutput/)

</details>
<details>
<summary>
ListTrainingDatasets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanroomsml/command/ListTrainingDatasetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanroomsml/Interface/ListTrainingDatasetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanroomsml/Interface/ListTrainingDatasetsCommandOutput/)

</details>
<details>
<summary>
PutConfiguredAudienceModelPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanroomsml/command/PutConfiguredAudienceModelPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanroomsml/Interface/PutConfiguredAudienceModelPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanroomsml/Interface/PutConfiguredAudienceModelPolicyCommandOutput/)

</details>
<details>
<summary>
StartAudienceExportJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanroomsml/command/StartAudienceExportJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanroomsml/Interface/StartAudienceExportJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanroomsml/Interface/StartAudienceExportJobCommandOutput/)

</details>
<details>
<summary>
StartAudienceGenerationJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanroomsml/command/StartAudienceGenerationJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanroomsml/Interface/StartAudienceGenerationJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanroomsml/Interface/StartAudienceGenerationJobCommandOutput/)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanroomsml/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanroomsml/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanroomsml/Interface/TagResourceCommandOutput/)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanroomsml/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanroomsml/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanroomsml/Interface/UntagResourceCommandOutput/)

</details>
<details>
<summary>
UpdateConfiguredAudienceModel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/cleanroomsml/command/UpdateConfiguredAudienceModelCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanroomsml/Interface/UpdateConfiguredAudienceModelCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-cleanroomsml/Interface/UpdateConfiguredAudienceModelCommandOutput/)

</details>
