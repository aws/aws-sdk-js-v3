<!-- generated file, do not edit directly -->

# @aws-sdk/client-neptunedata

## Description

AWS SDK for JavaScript Neptunedata Client for Node.js, Browser and React Native.

<fullname>Neptune Data API</fullname>

<p>The Amazon Neptune data API provides SDK support for more than 40 of Neptune's data
operations, including data loading, query execution, data inquiry, and machine learning.
It supports  the Gremlin and openCypher query languages, and is
available in all SDK languages. It automatically signs API requests and greatly simplifies
integrating Neptune into your applications.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-neptunedata
using your favorite package manager:

- `npm install @aws-sdk/client-neptunedata`
- `yarn add @aws-sdk/client-neptunedata`
- `pnpm add @aws-sdk/client-neptunedata`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `NeptunedataClient` and
the commands you need, for example `ListLoaderJobsCommand`:

```js
// ES5 example
const { NeptunedataClient, ListLoaderJobsCommand } = require("@aws-sdk/client-neptunedata");
```

```ts
// ES6+ example
import { NeptunedataClient, ListLoaderJobsCommand } from "@aws-sdk/client-neptunedata";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new NeptunedataClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListLoaderJobsCommand(params);
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
import * as AWS from "@aws-sdk/client-neptunedata";
const client = new AWS.Neptunedata({ region: "REGION" });

// async/await.
try {
  const data = await client.listLoaderJobs(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listLoaderJobs(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listLoaderJobs(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-neptunedata` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CancelGremlinQuery
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/classes/cancelgremlinquerycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/cancelgremlinquerycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/cancelgremlinquerycommandoutput.html)

</details>
<details>
<summary>
CancelLoaderJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/classes/cancelloaderjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/cancelloaderjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/cancelloaderjobcommandoutput.html)

</details>
<details>
<summary>
CancelMLDataProcessingJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/classes/cancelmldataprocessingjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/cancelmldataprocessingjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/cancelmldataprocessingjobcommandoutput.html)

</details>
<details>
<summary>
CancelMLModelTrainingJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/classes/cancelmlmodeltrainingjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/cancelmlmodeltrainingjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/cancelmlmodeltrainingjobcommandoutput.html)

</details>
<details>
<summary>
CancelMLModelTransformJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/classes/cancelmlmodeltransformjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/cancelmlmodeltransformjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/cancelmlmodeltransformjobcommandoutput.html)

</details>
<details>
<summary>
CancelOpenCypherQuery
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/classes/cancelopencypherquerycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/cancelopencypherquerycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/cancelopencypherquerycommandoutput.html)

</details>
<details>
<summary>
CreateMLEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/classes/createmlendpointcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/createmlendpointcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/createmlendpointcommandoutput.html)

</details>
<details>
<summary>
DeleteMLEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/classes/deletemlendpointcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/deletemlendpointcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/deletemlendpointcommandoutput.html)

</details>
<details>
<summary>
DeletePropertygraphStatistics
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/classes/deletepropertygraphstatisticscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/deletepropertygraphstatisticscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/deletepropertygraphstatisticscommandoutput.html)

</details>
<details>
<summary>
DeleteSparqlStatistics
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/classes/deletesparqlstatisticscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/deletesparqlstatisticscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/deletesparqlstatisticscommandoutput.html)

</details>
<details>
<summary>
ExecuteFastReset
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/classes/executefastresetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/executefastresetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/executefastresetcommandoutput.html)

</details>
<details>
<summary>
ExecuteGremlinExplainQuery
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/classes/executegremlinexplainquerycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/executegremlinexplainquerycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/executegremlinexplainquerycommandoutput.html)

</details>
<details>
<summary>
ExecuteGremlinProfileQuery
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/classes/executegremlinprofilequerycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/executegremlinprofilequerycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/executegremlinprofilequerycommandoutput.html)

</details>
<details>
<summary>
ExecuteGremlinQuery
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/classes/executegremlinquerycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/executegremlinquerycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/executegremlinquerycommandoutput.html)

</details>
<details>
<summary>
ExecuteOpenCypherExplainQuery
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/classes/executeopencypherexplainquerycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/executeopencypherexplainquerycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/executeopencypherexplainquerycommandoutput.html)

</details>
<details>
<summary>
ExecuteOpenCypherQuery
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/classes/executeopencypherquerycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/executeopencypherquerycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/executeopencypherquerycommandoutput.html)

</details>
<details>
<summary>
GetEngineStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/classes/getenginestatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/getenginestatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/getenginestatuscommandoutput.html)

</details>
<details>
<summary>
GetGremlinQueryStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/classes/getgremlinquerystatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/getgremlinquerystatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/getgremlinquerystatuscommandoutput.html)

</details>
<details>
<summary>
GetLoaderJobStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/classes/getloaderjobstatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/getloaderjobstatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/getloaderjobstatuscommandoutput.html)

</details>
<details>
<summary>
GetMLDataProcessingJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/classes/getmldataprocessingjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/getmldataprocessingjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/getmldataprocessingjobcommandoutput.html)

</details>
<details>
<summary>
GetMLEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/classes/getmlendpointcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/getmlendpointcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/getmlendpointcommandoutput.html)

</details>
<details>
<summary>
GetMLModelTrainingJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/classes/getmlmodeltrainingjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/getmlmodeltrainingjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/getmlmodeltrainingjobcommandoutput.html)

</details>
<details>
<summary>
GetMLModelTransformJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/classes/getmlmodeltransformjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/getmlmodeltransformjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/getmlmodeltransformjobcommandoutput.html)

</details>
<details>
<summary>
GetOpenCypherQueryStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/classes/getopencypherquerystatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/getopencypherquerystatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/getopencypherquerystatuscommandoutput.html)

</details>
<details>
<summary>
GetPropertygraphStatistics
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/classes/getpropertygraphstatisticscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/getpropertygraphstatisticscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/getpropertygraphstatisticscommandoutput.html)

</details>
<details>
<summary>
GetPropertygraphStream
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/classes/getpropertygraphstreamcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/getpropertygraphstreamcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/getpropertygraphstreamcommandoutput.html)

</details>
<details>
<summary>
GetPropertygraphSummary
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/classes/getpropertygraphsummarycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/getpropertygraphsummarycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/getpropertygraphsummarycommandoutput.html)

</details>
<details>
<summary>
GetRDFGraphSummary
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/classes/getrdfgraphsummarycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/getrdfgraphsummarycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/getrdfgraphsummarycommandoutput.html)

</details>
<details>
<summary>
GetSparqlStatistics
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/classes/getsparqlstatisticscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/getsparqlstatisticscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/getsparqlstatisticscommandoutput.html)

</details>
<details>
<summary>
GetSparqlStream
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/classes/getsparqlstreamcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/getsparqlstreamcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/getsparqlstreamcommandoutput.html)

</details>
<details>
<summary>
ListGremlinQueries
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/classes/listgremlinqueriescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/listgremlinqueriescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/listgremlinqueriescommandoutput.html)

</details>
<details>
<summary>
ListLoaderJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/classes/listloaderjobscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/listloaderjobscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/listloaderjobscommandoutput.html)

</details>
<details>
<summary>
ListMLDataProcessingJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/classes/listmldataprocessingjobscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/listmldataprocessingjobscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/listmldataprocessingjobscommandoutput.html)

</details>
<details>
<summary>
ListMLEndpoints
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/classes/listmlendpointscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/listmlendpointscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/listmlendpointscommandoutput.html)

</details>
<details>
<summary>
ListMLModelTrainingJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/classes/listmlmodeltrainingjobscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/listmlmodeltrainingjobscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/listmlmodeltrainingjobscommandoutput.html)

</details>
<details>
<summary>
ListMLModelTransformJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/classes/listmlmodeltransformjobscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/listmlmodeltransformjobscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/listmlmodeltransformjobscommandoutput.html)

</details>
<details>
<summary>
ListOpenCypherQueries
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/classes/listopencypherqueriescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/listopencypherqueriescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/listopencypherqueriescommandoutput.html)

</details>
<details>
<summary>
ManagePropertygraphStatistics
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/classes/managepropertygraphstatisticscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/managepropertygraphstatisticscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/managepropertygraphstatisticscommandoutput.html)

</details>
<details>
<summary>
ManageSparqlStatistics
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/classes/managesparqlstatisticscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/managesparqlstatisticscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/managesparqlstatisticscommandoutput.html)

</details>
<details>
<summary>
StartLoaderJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/classes/startloaderjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/startloaderjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/startloaderjobcommandoutput.html)

</details>
<details>
<summary>
StartMLDataProcessingJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/classes/startmldataprocessingjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/startmldataprocessingjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/startmldataprocessingjobcommandoutput.html)

</details>
<details>
<summary>
StartMLModelTrainingJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/classes/startmlmodeltrainingjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/startmlmodeltrainingjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/startmlmodeltrainingjobcommandoutput.html)

</details>
<details>
<summary>
StartMLModelTransformJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/classes/startmlmodeltransformjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/startmlmodeltransformjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptunedata/interfaces/startmlmodeltransformjobcommandoutput.html)

</details>
