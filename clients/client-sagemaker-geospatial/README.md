<!-- generated file, do not edit directly -->

# @aws-sdk/client-sagemaker-geospatial

## Description

AWS SDK for JavaScript SageMakerGeospatial Client for Node.js, Browser and React Native.

<p>Provides APIs for creating and managing SageMaker geospatial resources.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-sagemaker-geospatial
using your favorite package manager:

- `npm install @aws-sdk/client-sagemaker-geospatial`
- `yarn add @aws-sdk/client-sagemaker-geospatial`
- `pnpm add @aws-sdk/client-sagemaker-geospatial`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `SageMakerGeospatialClient` and
the commands you need, for example `ListEarthObservationJobsCommand`:

```js
// ES5 example
const { SageMakerGeospatialClient, ListEarthObservationJobsCommand } = require("@aws-sdk/client-sagemaker-geospatial");
```

```ts
// ES6+ example
import { SageMakerGeospatialClient, ListEarthObservationJobsCommand } from "@aws-sdk/client-sagemaker-geospatial";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new SageMakerGeospatialClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListEarthObservationJobsCommand(params);
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
import * as AWS from "@aws-sdk/client-sagemaker-geospatial";
const client = new AWS.SageMakerGeospatial({ region: "REGION" });

// async/await.
try {
  const data = await client.listEarthObservationJobs(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listEarthObservationJobs(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listEarthObservationJobs(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-sagemaker-geospatial` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
DeleteEarthObservationJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker-geospatial/classes/deleteearthobservationjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker-geospatial/interfaces/deleteearthobservationjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker-geospatial/interfaces/deleteearthobservationjobcommandoutput.html)

</details>
<details>
<summary>
DeleteVectorEnrichmentJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker-geospatial/classes/deletevectorenrichmentjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker-geospatial/interfaces/deletevectorenrichmentjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker-geospatial/interfaces/deletevectorenrichmentjobcommandoutput.html)

</details>
<details>
<summary>
ExportEarthObservationJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker-geospatial/classes/exportearthobservationjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker-geospatial/interfaces/exportearthobservationjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker-geospatial/interfaces/exportearthobservationjobcommandoutput.html)

</details>
<details>
<summary>
ExportVectorEnrichmentJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker-geospatial/classes/exportvectorenrichmentjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker-geospatial/interfaces/exportvectorenrichmentjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker-geospatial/interfaces/exportvectorenrichmentjobcommandoutput.html)

</details>
<details>
<summary>
GetEarthObservationJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker-geospatial/classes/getearthobservationjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker-geospatial/interfaces/getearthobservationjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker-geospatial/interfaces/getearthobservationjobcommandoutput.html)

</details>
<details>
<summary>
GetRasterDataCollection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker-geospatial/classes/getrasterdatacollectioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker-geospatial/interfaces/getrasterdatacollectioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker-geospatial/interfaces/getrasterdatacollectioncommandoutput.html)

</details>
<details>
<summary>
GetTile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker-geospatial/classes/gettilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker-geospatial/interfaces/gettilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker-geospatial/interfaces/gettilecommandoutput.html)

</details>
<details>
<summary>
GetVectorEnrichmentJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker-geospatial/classes/getvectorenrichmentjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker-geospatial/interfaces/getvectorenrichmentjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker-geospatial/interfaces/getvectorenrichmentjobcommandoutput.html)

</details>
<details>
<summary>
ListEarthObservationJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker-geospatial/classes/listearthobservationjobscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker-geospatial/interfaces/listearthobservationjobscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker-geospatial/interfaces/listearthobservationjobscommandoutput.html)

</details>
<details>
<summary>
ListRasterDataCollections
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker-geospatial/classes/listrasterdatacollectionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker-geospatial/interfaces/listrasterdatacollectionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker-geospatial/interfaces/listrasterdatacollectionscommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker-geospatial/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker-geospatial/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker-geospatial/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
ListVectorEnrichmentJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker-geospatial/classes/listvectorenrichmentjobscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker-geospatial/interfaces/listvectorenrichmentjobscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker-geospatial/interfaces/listvectorenrichmentjobscommandoutput.html)

</details>
<details>
<summary>
SearchRasterDataCollection
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker-geospatial/classes/searchrasterdatacollectioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker-geospatial/interfaces/searchrasterdatacollectioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker-geospatial/interfaces/searchrasterdatacollectioncommandoutput.html)

</details>
<details>
<summary>
StartEarthObservationJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker-geospatial/classes/startearthobservationjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker-geospatial/interfaces/startearthobservationjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker-geospatial/interfaces/startearthobservationjobcommandoutput.html)

</details>
<details>
<summary>
StartVectorEnrichmentJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker-geospatial/classes/startvectorenrichmentjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker-geospatial/interfaces/startvectorenrichmentjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker-geospatial/interfaces/startvectorenrichmentjobcommandoutput.html)

</details>
<details>
<summary>
StopEarthObservationJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker-geospatial/classes/stopearthobservationjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker-geospatial/interfaces/stopearthobservationjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker-geospatial/interfaces/stopearthobservationjobcommandoutput.html)

</details>
<details>
<summary>
StopVectorEnrichmentJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker-geospatial/classes/stopvectorenrichmentjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker-geospatial/interfaces/stopvectorenrichmentjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker-geospatial/interfaces/stopvectorenrichmentjobcommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker-geospatial/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker-geospatial/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker-geospatial/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker-geospatial/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker-geospatial/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sagemaker-geospatial/interfaces/untagresourcecommandoutput.html)

</details>
