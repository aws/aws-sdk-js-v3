<!-- generated file, do not edit directly -->

# @aws-sdk/client-comprehendmedical

## Description

AWS SDK for JavaScript ComprehendMedical Client for Node.js, Browser and React Native.

<p>Amazon Comprehend Medical extracts structured information from unstructured clinical text. Use these actions to gain insight in your documents. Amazon Comprehend Medical only detects entities in English language texts. Amazon Comprehend Medical places limits on the sizes of files allowed for different API operations. To learn more, see <a href="https://docs.aws.amazon.com/comprehend-medical/latest/dev/comprehendmedical-quotas.html">Guidelines and quotas</a> in the <i>Amazon Comprehend Medical Developer Guide</i>.</p>

## Installing

To install this package, simply type add or install @aws-sdk/client-comprehendmedical
using your favorite package manager:

- `npm install @aws-sdk/client-comprehendmedical`
- `yarn add @aws-sdk/client-comprehendmedical`
- `pnpm add @aws-sdk/client-comprehendmedical`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `ComprehendMedicalClient` and
the commands you need, for example `ListPHIDetectionJobsCommand`:

```js
// ES5 example
const { ComprehendMedicalClient, ListPHIDetectionJobsCommand } = require("@aws-sdk/client-comprehendmedical");
```

```ts
// ES6+ example
import { ComprehendMedicalClient, ListPHIDetectionJobsCommand } from "@aws-sdk/client-comprehendmedical";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new ComprehendMedicalClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListPHIDetectionJobsCommand(params);
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
import * as AWS from "@aws-sdk/client-comprehendmedical";
const client = new AWS.ComprehendMedical({ region: "REGION" });

// async/await.
try {
  const data = await client.listPHIDetectionJobs(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listPHIDetectionJobs(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listPHIDetectionJobs(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-comprehendmedical` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
DescribeEntitiesDetectionV2Job
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehendmedical/command/DescribeEntitiesDetectionV2JobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehendmedical/Interface/DescribeEntitiesDetectionV2JobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehendmedical/Interface/DescribeEntitiesDetectionV2JobCommandOutput/)

</details>
<details>
<summary>
DescribeICD10CMInferenceJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehendmedical/command/DescribeICD10CMInferenceJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehendmedical/Interface/DescribeICD10CMInferenceJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehendmedical/Interface/DescribeICD10CMInferenceJobCommandOutput/)

</details>
<details>
<summary>
DescribePHIDetectionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehendmedical/command/DescribePHIDetectionJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehendmedical/Interface/DescribePHIDetectionJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehendmedical/Interface/DescribePHIDetectionJobCommandOutput/)

</details>
<details>
<summary>
DescribeRxNormInferenceJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehendmedical/command/DescribeRxNormInferenceJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehendmedical/Interface/DescribeRxNormInferenceJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehendmedical/Interface/DescribeRxNormInferenceJobCommandOutput/)

</details>
<details>
<summary>
DescribeSNOMEDCTInferenceJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehendmedical/command/DescribeSNOMEDCTInferenceJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehendmedical/Interface/DescribeSNOMEDCTInferenceJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehendmedical/Interface/DescribeSNOMEDCTInferenceJobCommandOutput/)

</details>
<details>
<summary>
DetectEntities
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehendmedical/command/DetectEntitiesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehendmedical/Interface/DetectEntitiesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehendmedical/Interface/DetectEntitiesCommandOutput/)

</details>
<details>
<summary>
DetectEntitiesV2
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehendmedical/command/DetectEntitiesV2Command/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehendmedical/Interface/DetectEntitiesV2CommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehendmedical/Interface/DetectEntitiesV2CommandOutput/)

</details>
<details>
<summary>
DetectPHI
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehendmedical/command/DetectPHICommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehendmedical/Interface/DetectPHICommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehendmedical/Interface/DetectPHICommandOutput/)

</details>
<details>
<summary>
InferICD10CM
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehendmedical/command/InferICD10CMCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehendmedical/Interface/InferICD10CMCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehendmedical/Interface/InferICD10CMCommandOutput/)

</details>
<details>
<summary>
InferRxNorm
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehendmedical/command/InferRxNormCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehendmedical/Interface/InferRxNormCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehendmedical/Interface/InferRxNormCommandOutput/)

</details>
<details>
<summary>
InferSNOMEDCT
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehendmedical/command/InferSNOMEDCTCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehendmedical/Interface/InferSNOMEDCTCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehendmedical/Interface/InferSNOMEDCTCommandOutput/)

</details>
<details>
<summary>
ListEntitiesDetectionV2Jobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehendmedical/command/ListEntitiesDetectionV2JobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehendmedical/Interface/ListEntitiesDetectionV2JobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehendmedical/Interface/ListEntitiesDetectionV2JobsCommandOutput/)

</details>
<details>
<summary>
ListICD10CMInferenceJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehendmedical/command/ListICD10CMInferenceJobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehendmedical/Interface/ListICD10CMInferenceJobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehendmedical/Interface/ListICD10CMInferenceJobsCommandOutput/)

</details>
<details>
<summary>
ListPHIDetectionJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehendmedical/command/ListPHIDetectionJobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehendmedical/Interface/ListPHIDetectionJobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehendmedical/Interface/ListPHIDetectionJobsCommandOutput/)

</details>
<details>
<summary>
ListRxNormInferenceJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehendmedical/command/ListRxNormInferenceJobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehendmedical/Interface/ListRxNormInferenceJobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehendmedical/Interface/ListRxNormInferenceJobsCommandOutput/)

</details>
<details>
<summary>
ListSNOMEDCTInferenceJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehendmedical/command/ListSNOMEDCTInferenceJobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehendmedical/Interface/ListSNOMEDCTInferenceJobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehendmedical/Interface/ListSNOMEDCTInferenceJobsCommandOutput/)

</details>
<details>
<summary>
StartEntitiesDetectionV2Job
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehendmedical/command/StartEntitiesDetectionV2JobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehendmedical/Interface/StartEntitiesDetectionV2JobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehendmedical/Interface/StartEntitiesDetectionV2JobCommandOutput/)

</details>
<details>
<summary>
StartICD10CMInferenceJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehendmedical/command/StartICD10CMInferenceJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehendmedical/Interface/StartICD10CMInferenceJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehendmedical/Interface/StartICD10CMInferenceJobCommandOutput/)

</details>
<details>
<summary>
StartPHIDetectionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehendmedical/command/StartPHIDetectionJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehendmedical/Interface/StartPHIDetectionJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehendmedical/Interface/StartPHIDetectionJobCommandOutput/)

</details>
<details>
<summary>
StartRxNormInferenceJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehendmedical/command/StartRxNormInferenceJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehendmedical/Interface/StartRxNormInferenceJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehendmedical/Interface/StartRxNormInferenceJobCommandOutput/)

</details>
<details>
<summary>
StartSNOMEDCTInferenceJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehendmedical/command/StartSNOMEDCTInferenceJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehendmedical/Interface/StartSNOMEDCTInferenceJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehendmedical/Interface/StartSNOMEDCTInferenceJobCommandOutput/)

</details>
<details>
<summary>
StopEntitiesDetectionV2Job
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehendmedical/command/StopEntitiesDetectionV2JobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehendmedical/Interface/StopEntitiesDetectionV2JobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehendmedical/Interface/StopEntitiesDetectionV2JobCommandOutput/)

</details>
<details>
<summary>
StopICD10CMInferenceJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehendmedical/command/StopICD10CMInferenceJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehendmedical/Interface/StopICD10CMInferenceJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehendmedical/Interface/StopICD10CMInferenceJobCommandOutput/)

</details>
<details>
<summary>
StopPHIDetectionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehendmedical/command/StopPHIDetectionJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehendmedical/Interface/StopPHIDetectionJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehendmedical/Interface/StopPHIDetectionJobCommandOutput/)

</details>
<details>
<summary>
StopRxNormInferenceJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehendmedical/command/StopRxNormInferenceJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehendmedical/Interface/StopRxNormInferenceJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehendmedical/Interface/StopRxNormInferenceJobCommandOutput/)

</details>
<details>
<summary>
StopSNOMEDCTInferenceJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/comprehendmedical/command/StopSNOMEDCTInferenceJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehendmedical/Interface/StopSNOMEDCTInferenceJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-comprehendmedical/Interface/StopSNOMEDCTInferenceJobCommandOutput/)

</details>
