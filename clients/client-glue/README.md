<!-- generated file, do not edit directly -->

# @aws-sdk/client-glue

## Description

AWS SDK for JavaScript Glue Client for Node.js, Browser and React Native.

<fullname>Glue</fullname>

<p>Defines the public endpoint for the Glue service.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-glue
using your favorite package manager:

- `npm install @aws-sdk/client-glue`
- `yarn add @aws-sdk/client-glue`
- `pnpm add @aws-sdk/client-glue`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `GlueClient` and
the commands you need, for example `BatchCreatePartitionCommand`:

```js
// ES5 example
const { GlueClient, BatchCreatePartitionCommand } = require("@aws-sdk/client-glue");
```

```ts
// ES6+ example
import { GlueClient, BatchCreatePartitionCommand } from "@aws-sdk/client-glue";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new GlueClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new BatchCreatePartitionCommand(params);
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
import * as AWS from "@aws-sdk/client-glue";
const client = new AWS.Glue({ region: "REGION" });

// async/await.
try {
  const data = await client.batchCreatePartition(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .batchCreatePartition(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.batchCreatePartition(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-glue` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
BatchCreatePartition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/batchcreatepartitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/batchcreatepartitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/batchcreatepartitioncommandoutput.html)

</details>
<details>
<summary>
BatchDeleteConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/batchdeleteconnectioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/batchdeleteconnectioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/batchdeleteconnectioncommandoutput.html)

</details>
<details>
<summary>
BatchDeletePartition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/batchdeletepartitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/batchdeletepartitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/batchdeletepartitioncommandoutput.html)

</details>
<details>
<summary>
BatchDeleteTable
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/batchdeletetablecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/batchdeletetablecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/batchdeletetablecommandoutput.html)

</details>
<details>
<summary>
BatchDeleteTableVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/batchdeletetableversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/batchdeletetableversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/batchdeletetableversioncommandoutput.html)

</details>
<details>
<summary>
BatchGetBlueprints
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/batchgetblueprintscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/batchgetblueprintscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/batchgetblueprintscommandoutput.html)

</details>
<details>
<summary>
BatchGetCrawlers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/batchgetcrawlerscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/batchgetcrawlerscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/batchgetcrawlerscommandoutput.html)

</details>
<details>
<summary>
BatchGetCustomEntityTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/batchgetcustomentitytypescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/batchgetcustomentitytypescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/batchgetcustomentitytypescommandoutput.html)

</details>
<details>
<summary>
BatchGetDataQualityResult
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/batchgetdataqualityresultcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/batchgetdataqualityresultcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/batchgetdataqualityresultcommandoutput.html)

</details>
<details>
<summary>
BatchGetDevEndpoints
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/batchgetdevendpointscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/batchgetdevendpointscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/batchgetdevendpointscommandoutput.html)

</details>
<details>
<summary>
BatchGetJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/batchgetjobscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/batchgetjobscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/batchgetjobscommandoutput.html)

</details>
<details>
<summary>
BatchGetPartition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/batchgetpartitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/batchgetpartitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/batchgetpartitioncommandoutput.html)

</details>
<details>
<summary>
BatchGetTriggers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/batchgettriggerscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/batchgettriggerscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/batchgettriggerscommandoutput.html)

</details>
<details>
<summary>
BatchGetWorkflows
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/batchgetworkflowscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/batchgetworkflowscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/batchgetworkflowscommandoutput.html)

</details>
<details>
<summary>
BatchStopJobRun
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/batchstopjobruncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/batchstopjobruncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/batchstopjobruncommandoutput.html)

</details>
<details>
<summary>
BatchUpdatePartition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/batchupdatepartitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/batchupdatepartitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/batchupdatepartitioncommandoutput.html)

</details>
<details>
<summary>
CancelDataQualityRuleRecommendationRun
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/canceldataqualityrulerecommendationruncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/canceldataqualityrulerecommendationruncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/canceldataqualityrulerecommendationruncommandoutput.html)

</details>
<details>
<summary>
CancelDataQualityRulesetEvaluationRun
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/canceldataqualityrulesetevaluationruncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/canceldataqualityrulesetevaluationruncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/canceldataqualityrulesetevaluationruncommandoutput.html)

</details>
<details>
<summary>
CancelMLTaskRun
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/cancelmltaskruncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/cancelmltaskruncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/cancelmltaskruncommandoutput.html)

</details>
<details>
<summary>
CancelStatement
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/cancelstatementcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/cancelstatementcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/cancelstatementcommandoutput.html)

</details>
<details>
<summary>
CheckSchemaVersionValidity
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/checkschemaversionvaliditycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/checkschemaversionvaliditycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/checkschemaversionvaliditycommandoutput.html)

</details>
<details>
<summary>
CreateBlueprint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/createblueprintcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/createblueprintcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/createblueprintcommandoutput.html)

</details>
<details>
<summary>
CreateClassifier
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/createclassifiercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/createclassifiercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/createclassifiercommandoutput.html)

</details>
<details>
<summary>
CreateConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/createconnectioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/createconnectioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/createconnectioncommandoutput.html)

</details>
<details>
<summary>
CreateCrawler
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/createcrawlercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/createcrawlercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/createcrawlercommandoutput.html)

</details>
<details>
<summary>
CreateCustomEntityType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/createcustomentitytypecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/createcustomentitytypecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/createcustomentitytypecommandoutput.html)

</details>
<details>
<summary>
CreateDatabase
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/createdatabasecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/createdatabasecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/createdatabasecommandoutput.html)

</details>
<details>
<summary>
CreateDataQualityRuleset
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/createdataqualityrulesetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/createdataqualityrulesetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/createdataqualityrulesetcommandoutput.html)

</details>
<details>
<summary>
CreateDevEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/createdevendpointcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/createdevendpointcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/createdevendpointcommandoutput.html)

</details>
<details>
<summary>
CreateJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/createjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/createjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/createjobcommandoutput.html)

</details>
<details>
<summary>
CreateMLTransform
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/createmltransformcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/createmltransformcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/createmltransformcommandoutput.html)

</details>
<details>
<summary>
CreatePartition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/createpartitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/createpartitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/createpartitioncommandoutput.html)

</details>
<details>
<summary>
CreatePartitionIndex
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/createpartitionindexcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/createpartitionindexcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/createpartitionindexcommandoutput.html)

</details>
<details>
<summary>
CreateRegistry
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/createregistrycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/createregistrycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/createregistrycommandoutput.html)

</details>
<details>
<summary>
CreateSchema
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/createschemacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/createschemacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/createschemacommandoutput.html)

</details>
<details>
<summary>
CreateScript
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/createscriptcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/createscriptcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/createscriptcommandoutput.html)

</details>
<details>
<summary>
CreateSecurityConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/createsecurityconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/createsecurityconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/createsecurityconfigurationcommandoutput.html)

</details>
<details>
<summary>
CreateSession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/createsessioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/createsessioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/createsessioncommandoutput.html)

</details>
<details>
<summary>
CreateTable
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/createtablecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/createtablecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/createtablecommandoutput.html)

</details>
<details>
<summary>
CreateTrigger
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/createtriggercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/createtriggercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/createtriggercommandoutput.html)

</details>
<details>
<summary>
CreateUserDefinedFunction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/createuserdefinedfunctioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/createuserdefinedfunctioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/createuserdefinedfunctioncommandoutput.html)

</details>
<details>
<summary>
CreateWorkflow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/createworkflowcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/createworkflowcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/createworkflowcommandoutput.html)

</details>
<details>
<summary>
DeleteBlueprint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/deleteblueprintcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/deleteblueprintcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/deleteblueprintcommandoutput.html)

</details>
<details>
<summary>
DeleteClassifier
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/deleteclassifiercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/deleteclassifiercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/deleteclassifiercommandoutput.html)

</details>
<details>
<summary>
DeleteColumnStatisticsForPartition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/deletecolumnstatisticsforpartitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/deletecolumnstatisticsforpartitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/deletecolumnstatisticsforpartitioncommandoutput.html)

</details>
<details>
<summary>
DeleteColumnStatisticsForTable
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/deletecolumnstatisticsfortablecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/deletecolumnstatisticsfortablecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/deletecolumnstatisticsfortablecommandoutput.html)

</details>
<details>
<summary>
DeleteConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/deleteconnectioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/deleteconnectioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/deleteconnectioncommandoutput.html)

</details>
<details>
<summary>
DeleteCrawler
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/deletecrawlercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/deletecrawlercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/deletecrawlercommandoutput.html)

</details>
<details>
<summary>
DeleteCustomEntityType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/deletecustomentitytypecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/deletecustomentitytypecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/deletecustomentitytypecommandoutput.html)

</details>
<details>
<summary>
DeleteDatabase
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/deletedatabasecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/deletedatabasecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/deletedatabasecommandoutput.html)

</details>
<details>
<summary>
DeleteDataQualityRuleset
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/deletedataqualityrulesetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/deletedataqualityrulesetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/deletedataqualityrulesetcommandoutput.html)

</details>
<details>
<summary>
DeleteDevEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/deletedevendpointcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/deletedevendpointcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/deletedevendpointcommandoutput.html)

</details>
<details>
<summary>
DeleteJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/deletejobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/deletejobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/deletejobcommandoutput.html)

</details>
<details>
<summary>
DeleteMLTransform
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/deletemltransformcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/deletemltransformcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/deletemltransformcommandoutput.html)

</details>
<details>
<summary>
DeletePartition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/deletepartitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/deletepartitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/deletepartitioncommandoutput.html)

</details>
<details>
<summary>
DeletePartitionIndex
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/deletepartitionindexcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/deletepartitionindexcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/deletepartitionindexcommandoutput.html)

</details>
<details>
<summary>
DeleteRegistry
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/deleteregistrycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/deleteregistrycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/deleteregistrycommandoutput.html)

</details>
<details>
<summary>
DeleteResourcePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/deleteresourcepolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/deleteresourcepolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/deleteresourcepolicycommandoutput.html)

</details>
<details>
<summary>
DeleteSchema
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/deleteschemacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/deleteschemacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/deleteschemacommandoutput.html)

</details>
<details>
<summary>
DeleteSchemaVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/deleteschemaversionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/deleteschemaversionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/deleteschemaversionscommandoutput.html)

</details>
<details>
<summary>
DeleteSecurityConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/deletesecurityconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/deletesecurityconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/deletesecurityconfigurationcommandoutput.html)

</details>
<details>
<summary>
DeleteSession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/deletesessioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/deletesessioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/deletesessioncommandoutput.html)

</details>
<details>
<summary>
DeleteTable
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/deletetablecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/deletetablecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/deletetablecommandoutput.html)

</details>
<details>
<summary>
DeleteTableVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/deletetableversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/deletetableversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/deletetableversioncommandoutput.html)

</details>
<details>
<summary>
DeleteTrigger
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/deletetriggercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/deletetriggercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/deletetriggercommandoutput.html)

</details>
<details>
<summary>
DeleteUserDefinedFunction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/deleteuserdefinedfunctioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/deleteuserdefinedfunctioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/deleteuserdefinedfunctioncommandoutput.html)

</details>
<details>
<summary>
DeleteWorkflow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/deleteworkflowcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/deleteworkflowcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/deleteworkflowcommandoutput.html)

</details>
<details>
<summary>
GetBlueprint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/getblueprintcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getblueprintcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getblueprintcommandoutput.html)

</details>
<details>
<summary>
GetBlueprintRun
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/getblueprintruncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getblueprintruncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getblueprintruncommandoutput.html)

</details>
<details>
<summary>
GetBlueprintRuns
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/getblueprintrunscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getblueprintrunscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getblueprintrunscommandoutput.html)

</details>
<details>
<summary>
GetCatalogImportStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/getcatalogimportstatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getcatalogimportstatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getcatalogimportstatuscommandoutput.html)

</details>
<details>
<summary>
GetClassifier
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/getclassifiercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getclassifiercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getclassifiercommandoutput.html)

</details>
<details>
<summary>
GetClassifiers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/getclassifierscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getclassifierscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getclassifierscommandoutput.html)

</details>
<details>
<summary>
GetColumnStatisticsForPartition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/getcolumnstatisticsforpartitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getcolumnstatisticsforpartitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getcolumnstatisticsforpartitioncommandoutput.html)

</details>
<details>
<summary>
GetColumnStatisticsForTable
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/getcolumnstatisticsfortablecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getcolumnstatisticsfortablecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getcolumnstatisticsfortablecommandoutput.html)

</details>
<details>
<summary>
GetConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/getconnectioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getconnectioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getconnectioncommandoutput.html)

</details>
<details>
<summary>
GetConnections
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/getconnectionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getconnectionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getconnectionscommandoutput.html)

</details>
<details>
<summary>
GetCrawler
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/getcrawlercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getcrawlercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getcrawlercommandoutput.html)

</details>
<details>
<summary>
GetCrawlerMetrics
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/getcrawlermetricscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getcrawlermetricscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getcrawlermetricscommandoutput.html)

</details>
<details>
<summary>
GetCrawlers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/getcrawlerscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getcrawlerscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getcrawlerscommandoutput.html)

</details>
<details>
<summary>
GetCustomEntityType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/getcustomentitytypecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getcustomentitytypecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getcustomentitytypecommandoutput.html)

</details>
<details>
<summary>
GetDatabase
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/getdatabasecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getdatabasecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getdatabasecommandoutput.html)

</details>
<details>
<summary>
GetDatabases
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/getdatabasescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getdatabasescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getdatabasescommandoutput.html)

</details>
<details>
<summary>
GetDataCatalogEncryptionSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/getdatacatalogencryptionsettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getdatacatalogencryptionsettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getdatacatalogencryptionsettingscommandoutput.html)

</details>
<details>
<summary>
GetDataflowGraph
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/getdataflowgraphcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getdataflowgraphcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getdataflowgraphcommandoutput.html)

</details>
<details>
<summary>
GetDataQualityResult
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/getdataqualityresultcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getdataqualityresultcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getdataqualityresultcommandoutput.html)

</details>
<details>
<summary>
GetDataQualityRuleRecommendationRun
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/getdataqualityrulerecommendationruncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getdataqualityrulerecommendationruncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getdataqualityrulerecommendationruncommandoutput.html)

</details>
<details>
<summary>
GetDataQualityRuleset
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/getdataqualityrulesetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getdataqualityrulesetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getdataqualityrulesetcommandoutput.html)

</details>
<details>
<summary>
GetDataQualityRulesetEvaluationRun
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/getdataqualityrulesetevaluationruncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getdataqualityrulesetevaluationruncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getdataqualityrulesetevaluationruncommandoutput.html)

</details>
<details>
<summary>
GetDevEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/getdevendpointcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getdevendpointcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getdevendpointcommandoutput.html)

</details>
<details>
<summary>
GetDevEndpoints
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/getdevendpointscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getdevendpointscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getdevendpointscommandoutput.html)

</details>
<details>
<summary>
GetJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/getjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getjobcommandoutput.html)

</details>
<details>
<summary>
GetJobBookmark
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/getjobbookmarkcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getjobbookmarkcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getjobbookmarkcommandoutput.html)

</details>
<details>
<summary>
GetJobRun
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/getjobruncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getjobruncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getjobruncommandoutput.html)

</details>
<details>
<summary>
GetJobRuns
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/getjobrunscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getjobrunscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getjobrunscommandoutput.html)

</details>
<details>
<summary>
GetJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/getjobscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getjobscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getjobscommandoutput.html)

</details>
<details>
<summary>
GetMapping
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/getmappingcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getmappingcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getmappingcommandoutput.html)

</details>
<details>
<summary>
GetMLTaskRun
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/getmltaskruncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getmltaskruncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getmltaskruncommandoutput.html)

</details>
<details>
<summary>
GetMLTaskRuns
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/getmltaskrunscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getmltaskrunscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getmltaskrunscommandoutput.html)

</details>
<details>
<summary>
GetMLTransform
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/getmltransformcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getmltransformcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getmltransformcommandoutput.html)

</details>
<details>
<summary>
GetMLTransforms
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/getmltransformscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getmltransformscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getmltransformscommandoutput.html)

</details>
<details>
<summary>
GetPartition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/getpartitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getpartitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getpartitioncommandoutput.html)

</details>
<details>
<summary>
GetPartitionIndexes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/getpartitionindexescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getpartitionindexescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getpartitionindexescommandoutput.html)

</details>
<details>
<summary>
GetPartitions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/getpartitionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getpartitionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getpartitionscommandoutput.html)

</details>
<details>
<summary>
GetPlan
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/getplancommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getplancommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getplancommandoutput.html)

</details>
<details>
<summary>
GetRegistry
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/getregistrycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getregistrycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getregistrycommandoutput.html)

</details>
<details>
<summary>
GetResourcePolicies
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/getresourcepoliciescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getresourcepoliciescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getresourcepoliciescommandoutput.html)

</details>
<details>
<summary>
GetResourcePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/getresourcepolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getresourcepolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getresourcepolicycommandoutput.html)

</details>
<details>
<summary>
GetSchema
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/getschemacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getschemacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getschemacommandoutput.html)

</details>
<details>
<summary>
GetSchemaByDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/getschemabydefinitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getschemabydefinitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getschemabydefinitioncommandoutput.html)

</details>
<details>
<summary>
GetSchemaVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/getschemaversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getschemaversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getschemaversioncommandoutput.html)

</details>
<details>
<summary>
GetSchemaVersionsDiff
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/getschemaversionsdiffcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getschemaversionsdiffcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getschemaversionsdiffcommandoutput.html)

</details>
<details>
<summary>
GetSecurityConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/getsecurityconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getsecurityconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getsecurityconfigurationcommandoutput.html)

</details>
<details>
<summary>
GetSecurityConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/getsecurityconfigurationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getsecurityconfigurationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getsecurityconfigurationscommandoutput.html)

</details>
<details>
<summary>
GetSession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/getsessioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getsessioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getsessioncommandoutput.html)

</details>
<details>
<summary>
GetStatement
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/getstatementcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getstatementcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getstatementcommandoutput.html)

</details>
<details>
<summary>
GetTable
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/gettablecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/gettablecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/gettablecommandoutput.html)

</details>
<details>
<summary>
GetTables
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/gettablescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/gettablescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/gettablescommandoutput.html)

</details>
<details>
<summary>
GetTableVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/gettableversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/gettableversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/gettableversioncommandoutput.html)

</details>
<details>
<summary>
GetTableVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/gettableversionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/gettableversionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/gettableversionscommandoutput.html)

</details>
<details>
<summary>
GetTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/gettagscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/gettagscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/gettagscommandoutput.html)

</details>
<details>
<summary>
GetTrigger
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/gettriggercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/gettriggercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/gettriggercommandoutput.html)

</details>
<details>
<summary>
GetTriggers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/gettriggerscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/gettriggerscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/gettriggerscommandoutput.html)

</details>
<details>
<summary>
GetUnfilteredPartitionMetadata
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/getunfilteredpartitionmetadatacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getunfilteredpartitionmetadatacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getunfilteredpartitionmetadatacommandoutput.html)

</details>
<details>
<summary>
GetUnfilteredPartitionsMetadata
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/getunfilteredpartitionsmetadatacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getunfilteredpartitionsmetadatacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getunfilteredpartitionsmetadatacommandoutput.html)

</details>
<details>
<summary>
GetUnfilteredTableMetadata
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/getunfilteredtablemetadatacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getunfilteredtablemetadatacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getunfilteredtablemetadatacommandoutput.html)

</details>
<details>
<summary>
GetUserDefinedFunction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/getuserdefinedfunctioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getuserdefinedfunctioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getuserdefinedfunctioncommandoutput.html)

</details>
<details>
<summary>
GetUserDefinedFunctions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/getuserdefinedfunctionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getuserdefinedfunctionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getuserdefinedfunctionscommandoutput.html)

</details>
<details>
<summary>
GetWorkflow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/getworkflowcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getworkflowcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getworkflowcommandoutput.html)

</details>
<details>
<summary>
GetWorkflowRun
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/getworkflowruncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getworkflowruncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getworkflowruncommandoutput.html)

</details>
<details>
<summary>
GetWorkflowRunProperties
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/getworkflowrunpropertiescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getworkflowrunpropertiescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getworkflowrunpropertiescommandoutput.html)

</details>
<details>
<summary>
GetWorkflowRuns
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/getworkflowrunscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getworkflowrunscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/getworkflowrunscommandoutput.html)

</details>
<details>
<summary>
ImportCatalogToGlue
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/importcatalogtogluecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/importcatalogtogluecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/importcatalogtogluecommandoutput.html)

</details>
<details>
<summary>
ListBlueprints
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/listblueprintscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/listblueprintscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/listblueprintscommandoutput.html)

</details>
<details>
<summary>
ListCrawlers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/listcrawlerscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/listcrawlerscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/listcrawlerscommandoutput.html)

</details>
<details>
<summary>
ListCrawls
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/listcrawlscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/listcrawlscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/listcrawlscommandoutput.html)

</details>
<details>
<summary>
ListCustomEntityTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/listcustomentitytypescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/listcustomentitytypescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/listcustomentitytypescommandoutput.html)

</details>
<details>
<summary>
ListDataQualityResults
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/listdataqualityresultscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/listdataqualityresultscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/listdataqualityresultscommandoutput.html)

</details>
<details>
<summary>
ListDataQualityRuleRecommendationRuns
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/listdataqualityrulerecommendationrunscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/listdataqualityrulerecommendationrunscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/listdataqualityrulerecommendationrunscommandoutput.html)

</details>
<details>
<summary>
ListDataQualityRulesetEvaluationRuns
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/listdataqualityrulesetevaluationrunscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/listdataqualityrulesetevaluationrunscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/listdataqualityrulesetevaluationrunscommandoutput.html)

</details>
<details>
<summary>
ListDataQualityRulesets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/listdataqualityrulesetscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/listdataqualityrulesetscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/listdataqualityrulesetscommandoutput.html)

</details>
<details>
<summary>
ListDevEndpoints
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/listdevendpointscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/listdevendpointscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/listdevendpointscommandoutput.html)

</details>
<details>
<summary>
ListJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/listjobscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/listjobscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/listjobscommandoutput.html)

</details>
<details>
<summary>
ListMLTransforms
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/listmltransformscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/listmltransformscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/listmltransformscommandoutput.html)

</details>
<details>
<summary>
ListRegistries
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/listregistriescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/listregistriescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/listregistriescommandoutput.html)

</details>
<details>
<summary>
ListSchemas
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/listschemascommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/listschemascommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/listschemascommandoutput.html)

</details>
<details>
<summary>
ListSchemaVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/listschemaversionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/listschemaversionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/listschemaversionscommandoutput.html)

</details>
<details>
<summary>
ListSessions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/listsessionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/listsessionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/listsessionscommandoutput.html)

</details>
<details>
<summary>
ListStatements
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/liststatementscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/liststatementscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/liststatementscommandoutput.html)

</details>
<details>
<summary>
ListTriggers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/listtriggerscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/listtriggerscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/listtriggerscommandoutput.html)

</details>
<details>
<summary>
ListWorkflows
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/listworkflowscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/listworkflowscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/listworkflowscommandoutput.html)

</details>
<details>
<summary>
PutDataCatalogEncryptionSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/putdatacatalogencryptionsettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/putdatacatalogencryptionsettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/putdatacatalogencryptionsettingscommandoutput.html)

</details>
<details>
<summary>
PutResourcePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/putresourcepolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/putresourcepolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/putresourcepolicycommandoutput.html)

</details>
<details>
<summary>
PutSchemaVersionMetadata
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/putschemaversionmetadatacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/putschemaversionmetadatacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/putschemaversionmetadatacommandoutput.html)

</details>
<details>
<summary>
PutWorkflowRunProperties
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/putworkflowrunpropertiescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/putworkflowrunpropertiescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/putworkflowrunpropertiescommandoutput.html)

</details>
<details>
<summary>
QuerySchemaVersionMetadata
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/queryschemaversionmetadatacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/queryschemaversionmetadatacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/queryschemaversionmetadatacommandoutput.html)

</details>
<details>
<summary>
RegisterSchemaVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/registerschemaversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/registerschemaversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/registerschemaversioncommandoutput.html)

</details>
<details>
<summary>
RemoveSchemaVersionMetadata
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/removeschemaversionmetadatacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/removeschemaversionmetadatacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/removeschemaversionmetadatacommandoutput.html)

</details>
<details>
<summary>
ResetJobBookmark
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/resetjobbookmarkcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/resetjobbookmarkcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/resetjobbookmarkcommandoutput.html)

</details>
<details>
<summary>
ResumeWorkflowRun
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/resumeworkflowruncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/resumeworkflowruncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/resumeworkflowruncommandoutput.html)

</details>
<details>
<summary>
RunStatement
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/runstatementcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/runstatementcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/runstatementcommandoutput.html)

</details>
<details>
<summary>
SearchTables
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/searchtablescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/searchtablescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/searchtablescommandoutput.html)

</details>
<details>
<summary>
StartBlueprintRun
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/startblueprintruncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/startblueprintruncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/startblueprintruncommandoutput.html)

</details>
<details>
<summary>
StartCrawler
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/startcrawlercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/startcrawlercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/startcrawlercommandoutput.html)

</details>
<details>
<summary>
StartCrawlerSchedule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/startcrawlerschedulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/startcrawlerschedulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/startcrawlerschedulecommandoutput.html)

</details>
<details>
<summary>
StartDataQualityRuleRecommendationRun
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/startdataqualityrulerecommendationruncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/startdataqualityrulerecommendationruncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/startdataqualityrulerecommendationruncommandoutput.html)

</details>
<details>
<summary>
StartDataQualityRulesetEvaluationRun
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/startdataqualityrulesetevaluationruncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/startdataqualityrulesetevaluationruncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/startdataqualityrulesetevaluationruncommandoutput.html)

</details>
<details>
<summary>
StartExportLabelsTaskRun
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/startexportlabelstaskruncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/startexportlabelstaskruncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/startexportlabelstaskruncommandoutput.html)

</details>
<details>
<summary>
StartImportLabelsTaskRun
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/startimportlabelstaskruncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/startimportlabelstaskruncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/startimportlabelstaskruncommandoutput.html)

</details>
<details>
<summary>
StartJobRun
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/startjobruncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/startjobruncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/startjobruncommandoutput.html)

</details>
<details>
<summary>
StartMLEvaluationTaskRun
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/startmlevaluationtaskruncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/startmlevaluationtaskruncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/startmlevaluationtaskruncommandoutput.html)

</details>
<details>
<summary>
StartMLLabelingSetGenerationTaskRun
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/startmllabelingsetgenerationtaskruncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/startmllabelingsetgenerationtaskruncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/startmllabelingsetgenerationtaskruncommandoutput.html)

</details>
<details>
<summary>
StartTrigger
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/starttriggercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/starttriggercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/starttriggercommandoutput.html)

</details>
<details>
<summary>
StartWorkflowRun
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/startworkflowruncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/startworkflowruncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/startworkflowruncommandoutput.html)

</details>
<details>
<summary>
StopCrawler
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/stopcrawlercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/stopcrawlercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/stopcrawlercommandoutput.html)

</details>
<details>
<summary>
StopCrawlerSchedule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/stopcrawlerschedulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/stopcrawlerschedulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/stopcrawlerschedulecommandoutput.html)

</details>
<details>
<summary>
StopSession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/stopsessioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/stopsessioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/stopsessioncommandoutput.html)

</details>
<details>
<summary>
StopTrigger
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/stoptriggercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/stoptriggercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/stoptriggercommandoutput.html)

</details>
<details>
<summary>
StopWorkflowRun
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/stopworkflowruncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/stopworkflowruncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/stopworkflowruncommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateBlueprint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/updateblueprintcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/updateblueprintcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/updateblueprintcommandoutput.html)

</details>
<details>
<summary>
UpdateClassifier
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/updateclassifiercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/updateclassifiercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/updateclassifiercommandoutput.html)

</details>
<details>
<summary>
UpdateColumnStatisticsForPartition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/updatecolumnstatisticsforpartitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/updatecolumnstatisticsforpartitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/updatecolumnstatisticsforpartitioncommandoutput.html)

</details>
<details>
<summary>
UpdateColumnStatisticsForTable
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/updatecolumnstatisticsfortablecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/updatecolumnstatisticsfortablecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/updatecolumnstatisticsfortablecommandoutput.html)

</details>
<details>
<summary>
UpdateConnection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/updateconnectioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/updateconnectioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/updateconnectioncommandoutput.html)

</details>
<details>
<summary>
UpdateCrawler
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/updatecrawlercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/updatecrawlercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/updatecrawlercommandoutput.html)

</details>
<details>
<summary>
UpdateCrawlerSchedule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/updatecrawlerschedulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/updatecrawlerschedulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/updatecrawlerschedulecommandoutput.html)

</details>
<details>
<summary>
UpdateDatabase
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/updatedatabasecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/updatedatabasecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/updatedatabasecommandoutput.html)

</details>
<details>
<summary>
UpdateDataQualityRuleset
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/updatedataqualityrulesetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/updatedataqualityrulesetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/updatedataqualityrulesetcommandoutput.html)

</details>
<details>
<summary>
UpdateDevEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/updatedevendpointcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/updatedevendpointcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/updatedevendpointcommandoutput.html)

</details>
<details>
<summary>
UpdateJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/updatejobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/updatejobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/updatejobcommandoutput.html)

</details>
<details>
<summary>
UpdateJobFromSourceControl
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/updatejobfromsourcecontrolcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/updatejobfromsourcecontrolcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/updatejobfromsourcecontrolcommandoutput.html)

</details>
<details>
<summary>
UpdateMLTransform
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/updatemltransformcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/updatemltransformcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/updatemltransformcommandoutput.html)

</details>
<details>
<summary>
UpdatePartition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/updatepartitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/updatepartitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/updatepartitioncommandoutput.html)

</details>
<details>
<summary>
UpdateRegistry
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/updateregistrycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/updateregistrycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/updateregistrycommandoutput.html)

</details>
<details>
<summary>
UpdateSchema
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/updateschemacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/updateschemacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/updateschemacommandoutput.html)

</details>
<details>
<summary>
UpdateSourceControlFromJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/updatesourcecontrolfromjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/updatesourcecontrolfromjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/updatesourcecontrolfromjobcommandoutput.html)

</details>
<details>
<summary>
UpdateTable
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/updatetablecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/updatetablecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/updatetablecommandoutput.html)

</details>
<details>
<summary>
UpdateTrigger
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/updatetriggercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/updatetriggercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/updatetriggercommandoutput.html)

</details>
<details>
<summary>
UpdateUserDefinedFunction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/updateuserdefinedfunctioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/updateuserdefinedfunctioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/updateuserdefinedfunctioncommandoutput.html)

</details>
<details>
<summary>
UpdateWorkflow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/classes/updateworkflowcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/updateworkflowcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-glue/interfaces/updateworkflowcommandoutput.html)

</details>
