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

To install the this package, simply type add or install @aws-sdk/client-cleanroomsml
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/classes/createaudiencemodelcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/interfaces/createaudiencemodelcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/interfaces/createaudiencemodelcommandoutput.html)

</details>
<details>
<summary>
CreateConfiguredAudienceModel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/classes/createconfiguredaudiencemodelcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/interfaces/createconfiguredaudiencemodelcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/interfaces/createconfiguredaudiencemodelcommandoutput.html)

</details>
<details>
<summary>
CreateTrainingDataset
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/classes/createtrainingdatasetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/interfaces/createtrainingdatasetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/interfaces/createtrainingdatasetcommandoutput.html)

</details>
<details>
<summary>
DeleteAudienceGenerationJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/classes/deleteaudiencegenerationjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/interfaces/deleteaudiencegenerationjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/interfaces/deleteaudiencegenerationjobcommandoutput.html)

</details>
<details>
<summary>
DeleteAudienceModel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/classes/deleteaudiencemodelcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/interfaces/deleteaudiencemodelcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/interfaces/deleteaudiencemodelcommandoutput.html)

</details>
<details>
<summary>
DeleteConfiguredAudienceModel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/classes/deleteconfiguredaudiencemodelcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/interfaces/deleteconfiguredaudiencemodelcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/interfaces/deleteconfiguredaudiencemodelcommandoutput.html)

</details>
<details>
<summary>
DeleteConfiguredAudienceModelPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/classes/deleteconfiguredaudiencemodelpolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/interfaces/deleteconfiguredaudiencemodelpolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/interfaces/deleteconfiguredaudiencemodelpolicycommandoutput.html)

</details>
<details>
<summary>
DeleteTrainingDataset
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/classes/deletetrainingdatasetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/interfaces/deletetrainingdatasetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/interfaces/deletetrainingdatasetcommandoutput.html)

</details>
<details>
<summary>
GetAudienceGenerationJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/classes/getaudiencegenerationjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/interfaces/getaudiencegenerationjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/interfaces/getaudiencegenerationjobcommandoutput.html)

</details>
<details>
<summary>
GetAudienceModel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/classes/getaudiencemodelcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/interfaces/getaudiencemodelcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/interfaces/getaudiencemodelcommandoutput.html)

</details>
<details>
<summary>
GetConfiguredAudienceModel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/classes/getconfiguredaudiencemodelcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/interfaces/getconfiguredaudiencemodelcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/interfaces/getconfiguredaudiencemodelcommandoutput.html)

</details>
<details>
<summary>
GetConfiguredAudienceModelPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/classes/getconfiguredaudiencemodelpolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/interfaces/getconfiguredaudiencemodelpolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/interfaces/getconfiguredaudiencemodelpolicycommandoutput.html)

</details>
<details>
<summary>
GetTrainingDataset
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/classes/gettrainingdatasetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/interfaces/gettrainingdatasetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/interfaces/gettrainingdatasetcommandoutput.html)

</details>
<details>
<summary>
ListAudienceExportJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/classes/listaudienceexportjobscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/interfaces/listaudienceexportjobscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/interfaces/listaudienceexportjobscommandoutput.html)

</details>
<details>
<summary>
ListAudienceGenerationJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/classes/listaudiencegenerationjobscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/interfaces/listaudiencegenerationjobscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/interfaces/listaudiencegenerationjobscommandoutput.html)

</details>
<details>
<summary>
ListAudienceModels
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/classes/listaudiencemodelscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/interfaces/listaudiencemodelscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/interfaces/listaudiencemodelscommandoutput.html)

</details>
<details>
<summary>
ListConfiguredAudienceModels
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/classes/listconfiguredaudiencemodelscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/interfaces/listconfiguredaudiencemodelscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/interfaces/listconfiguredaudiencemodelscommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
ListTrainingDatasets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/classes/listtrainingdatasetscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/interfaces/listtrainingdatasetscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/interfaces/listtrainingdatasetscommandoutput.html)

</details>
<details>
<summary>
PutConfiguredAudienceModelPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/classes/putconfiguredaudiencemodelpolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/interfaces/putconfiguredaudiencemodelpolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/interfaces/putconfiguredaudiencemodelpolicycommandoutput.html)

</details>
<details>
<summary>
StartAudienceExportJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/classes/startaudienceexportjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/interfaces/startaudienceexportjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/interfaces/startaudienceexportjobcommandoutput.html)

</details>
<details>
<summary>
StartAudienceGenerationJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/classes/startaudiencegenerationjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/interfaces/startaudiencegenerationjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/interfaces/startaudiencegenerationjobcommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateConfiguredAudienceModel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/classes/updateconfiguredaudiencemodelcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/interfaces/updateconfiguredaudiencemodelcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cleanroomsml/interfaces/updateconfiguredaudiencemodelcommandoutput.html)

</details>
