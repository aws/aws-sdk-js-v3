<!-- generated file, do not edit directly -->

# @aws-sdk/client-transcribe

## Description

AWS SDK for JavaScript Transcribe Client for Node.js, Browser and React Native.

<p>Amazon Transcribe offers three main types of batch transcription: <b>Standard</b>, <b>Medical</b>, and
<b>Call Analytics</b>.</p>
<ul>
<li>
<p>
<b>Standard transcriptions</b> are the most common
option. Refer to  for details.</p>
</li>
<li>
<p>
<b>Medical transcriptions</b> are tailored to
medical professionals and incorporate medical terms. A common use case for this
service is transcribing doctor-patient dialogue into after-visit notes. Refer to
for details.</p>
</li>
<li>
<p>
<b>Call Analytics transcriptions</b> are designed
for use with call center audio on two different channels; if you're looking for
insight into customer service calls, use this option. Refer to  for details.</p>
</li>
</ul>

## Installing

To install the this package, simply type add or install @aws-sdk/client-transcribe
using your favorite package manager:

- `npm install @aws-sdk/client-transcribe`
- `yarn add @aws-sdk/client-transcribe`
- `pnpm add @aws-sdk/client-transcribe`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `TranscribeClient` and
the commands you need, for example `ListVocabulariesCommand`:

```js
// ES5 example
const { TranscribeClient, ListVocabulariesCommand } = require("@aws-sdk/client-transcribe");
```

```ts
// ES6+ example
import { TranscribeClient, ListVocabulariesCommand } from "@aws-sdk/client-transcribe";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new TranscribeClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListVocabulariesCommand(params);
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
import * as AWS from "@aws-sdk/client-transcribe";
const client = new AWS.Transcribe({ region: "REGION" });

// async/await.
try {
  const data = await client.listVocabularies(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listVocabularies(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listVocabularies(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-transcribe` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CreateCallAnalyticsCategory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/transcribe/command/CreateCallAnalyticsCategoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/CreateCallAnalyticsCategoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/CreateCallAnalyticsCategoryCommandOutput/)

</details>
<details>
<summary>
CreateLanguageModel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/transcribe/command/CreateLanguageModelCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/CreateLanguageModelCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/CreateLanguageModelCommandOutput/)

</details>
<details>
<summary>
CreateMedicalVocabulary
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/transcribe/command/CreateMedicalVocabularyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/CreateMedicalVocabularyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/CreateMedicalVocabularyCommandOutput/)

</details>
<details>
<summary>
CreateVocabulary
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/transcribe/command/CreateVocabularyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/CreateVocabularyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/CreateVocabularyCommandOutput/)

</details>
<details>
<summary>
CreateVocabularyFilter
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/transcribe/command/CreateVocabularyFilterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/CreateVocabularyFilterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/CreateVocabularyFilterCommandOutput/)

</details>
<details>
<summary>
DeleteCallAnalyticsCategory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/transcribe/command/DeleteCallAnalyticsCategoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/DeleteCallAnalyticsCategoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/DeleteCallAnalyticsCategoryCommandOutput/)

</details>
<details>
<summary>
DeleteCallAnalyticsJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/transcribe/command/DeleteCallAnalyticsJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/DeleteCallAnalyticsJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/DeleteCallAnalyticsJobCommandOutput/)

</details>
<details>
<summary>
DeleteLanguageModel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/transcribe/command/DeleteLanguageModelCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/DeleteLanguageModelCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/DeleteLanguageModelCommandOutput/)

</details>
<details>
<summary>
DeleteMedicalScribeJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/transcribe/command/DeleteMedicalScribeJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/DeleteMedicalScribeJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/DeleteMedicalScribeJobCommandOutput/)

</details>
<details>
<summary>
DeleteMedicalTranscriptionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/transcribe/command/DeleteMedicalTranscriptionJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/DeleteMedicalTranscriptionJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/DeleteMedicalTranscriptionJobCommandOutput/)

</details>
<details>
<summary>
DeleteMedicalVocabulary
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/transcribe/command/DeleteMedicalVocabularyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/DeleteMedicalVocabularyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/DeleteMedicalVocabularyCommandOutput/)

</details>
<details>
<summary>
DeleteTranscriptionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/transcribe/command/DeleteTranscriptionJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/DeleteTranscriptionJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/DeleteTranscriptionJobCommandOutput/)

</details>
<details>
<summary>
DeleteVocabulary
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/transcribe/command/DeleteVocabularyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/DeleteVocabularyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/DeleteVocabularyCommandOutput/)

</details>
<details>
<summary>
DeleteVocabularyFilter
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/transcribe/command/DeleteVocabularyFilterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/DeleteVocabularyFilterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/DeleteVocabularyFilterCommandOutput/)

</details>
<details>
<summary>
DescribeLanguageModel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/transcribe/command/DescribeLanguageModelCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/DescribeLanguageModelCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/DescribeLanguageModelCommandOutput/)

</details>
<details>
<summary>
GetCallAnalyticsCategory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/transcribe/command/GetCallAnalyticsCategoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/GetCallAnalyticsCategoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/GetCallAnalyticsCategoryCommandOutput/)

</details>
<details>
<summary>
GetCallAnalyticsJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/transcribe/command/GetCallAnalyticsJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/GetCallAnalyticsJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/GetCallAnalyticsJobCommandOutput/)

</details>
<details>
<summary>
GetMedicalScribeJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/transcribe/command/GetMedicalScribeJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/GetMedicalScribeJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/GetMedicalScribeJobCommandOutput/)

</details>
<details>
<summary>
GetMedicalTranscriptionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/transcribe/command/GetMedicalTranscriptionJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/GetMedicalTranscriptionJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/GetMedicalTranscriptionJobCommandOutput/)

</details>
<details>
<summary>
GetMedicalVocabulary
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/transcribe/command/GetMedicalVocabularyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/GetMedicalVocabularyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/GetMedicalVocabularyCommandOutput/)

</details>
<details>
<summary>
GetTranscriptionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/transcribe/command/GetTranscriptionJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/GetTranscriptionJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/GetTranscriptionJobCommandOutput/)

</details>
<details>
<summary>
GetVocabulary
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/transcribe/command/GetVocabularyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/GetVocabularyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/GetVocabularyCommandOutput/)

</details>
<details>
<summary>
GetVocabularyFilter
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/transcribe/command/GetVocabularyFilterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/GetVocabularyFilterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/GetVocabularyFilterCommandOutput/)

</details>
<details>
<summary>
ListCallAnalyticsCategories
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/transcribe/command/ListCallAnalyticsCategoriesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/ListCallAnalyticsCategoriesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/ListCallAnalyticsCategoriesCommandOutput/)

</details>
<details>
<summary>
ListCallAnalyticsJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/transcribe/command/ListCallAnalyticsJobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/ListCallAnalyticsJobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/ListCallAnalyticsJobsCommandOutput/)

</details>
<details>
<summary>
ListLanguageModels
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/transcribe/command/ListLanguageModelsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/ListLanguageModelsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/ListLanguageModelsCommandOutput/)

</details>
<details>
<summary>
ListMedicalScribeJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/transcribe/command/ListMedicalScribeJobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/ListMedicalScribeJobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/ListMedicalScribeJobsCommandOutput/)

</details>
<details>
<summary>
ListMedicalTranscriptionJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/transcribe/command/ListMedicalTranscriptionJobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/ListMedicalTranscriptionJobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/ListMedicalTranscriptionJobsCommandOutput/)

</details>
<details>
<summary>
ListMedicalVocabularies
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/transcribe/command/ListMedicalVocabulariesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/ListMedicalVocabulariesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/ListMedicalVocabulariesCommandOutput/)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/transcribe/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/ListTagsForResourceCommandOutput/)

</details>
<details>
<summary>
ListTranscriptionJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/transcribe/command/ListTranscriptionJobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/ListTranscriptionJobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/ListTranscriptionJobsCommandOutput/)

</details>
<details>
<summary>
ListVocabularies
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/transcribe/command/ListVocabulariesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/ListVocabulariesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/ListVocabulariesCommandOutput/)

</details>
<details>
<summary>
ListVocabularyFilters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/transcribe/command/ListVocabularyFiltersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/ListVocabularyFiltersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/ListVocabularyFiltersCommandOutput/)

</details>
<details>
<summary>
StartCallAnalyticsJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/transcribe/command/StartCallAnalyticsJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/StartCallAnalyticsJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/StartCallAnalyticsJobCommandOutput/)

</details>
<details>
<summary>
StartMedicalScribeJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/transcribe/command/StartMedicalScribeJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/StartMedicalScribeJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/StartMedicalScribeJobCommandOutput/)

</details>
<details>
<summary>
StartMedicalTranscriptionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/transcribe/command/StartMedicalTranscriptionJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/StartMedicalTranscriptionJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/StartMedicalTranscriptionJobCommandOutput/)

</details>
<details>
<summary>
StartTranscriptionJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/transcribe/command/StartTranscriptionJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/StartTranscriptionJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/StartTranscriptionJobCommandOutput/)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/transcribe/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/TagResourceCommandOutput/)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/transcribe/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/UntagResourceCommandOutput/)

</details>
<details>
<summary>
UpdateCallAnalyticsCategory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/transcribe/command/UpdateCallAnalyticsCategoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/UpdateCallAnalyticsCategoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/UpdateCallAnalyticsCategoryCommandOutput/)

</details>
<details>
<summary>
UpdateMedicalVocabulary
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/transcribe/command/UpdateMedicalVocabularyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/UpdateMedicalVocabularyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/UpdateMedicalVocabularyCommandOutput/)

</details>
<details>
<summary>
UpdateVocabulary
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/transcribe/command/UpdateVocabularyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/UpdateVocabularyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/UpdateVocabularyCommandOutput/)

</details>
<details>
<summary>
UpdateVocabularyFilter
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/transcribe/command/UpdateVocabularyFilterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/UpdateVocabularyFilterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-transcribe/Interface/UpdateVocabularyFilterCommandOutput/)

</details>
