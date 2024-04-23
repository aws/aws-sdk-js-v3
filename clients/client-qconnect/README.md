<!-- generated file, do not edit directly -->

# @aws-sdk/client-qconnect

## Description

AWS SDK for JavaScript QConnect Client for Node.js, Browser and React Native.

<note>
<p>
<b>Powered by Amazon Bedrock</b>: Amazon Web Services implements <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/abuse-detection.html">automated abuse
detection</a>. Because Amazon Q in Connect is built on Amazon Bedrock, users can take full
advantage of the controls implemented in Amazon Bedrock to enforce safety, security, and the
responsible use of artificial intelligence (AI).</p>
</note>
<p>Amazon Q in Connect is a generative AI customer service assistant. It is an LLM-enhanced evolution
of Amazon Connect Wisdom that delivers real-time recommendations to help contact center
agents resolve customer issues quickly and accurately.</p>
<p>Amazon Q automatically detects customer intent during calls and chats using
conversational analytics and natural language understanding (NLU). It then provides agents
with immediate, real-time generative responses and suggested actions, and links to relevant
documents and articles. Agents can also query Amazon Q directly using natural language or
keywords to answer customer requests.</p>
<p>Use the Amazon Q in Connect APIs to create an assistant and a knowledge base, for example, or
manage content by uploading custom files.</p>
<p>For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-q-connect.html">Use Amazon Q in Connect for generative AI
powered agent assistance in real-time</a> in the <i>Amazon Connect
Administrator Guide</i>.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-qconnect
using your favorite package manager:

- `npm install @aws-sdk/client-qconnect`
- `yarn add @aws-sdk/client-qconnect`
- `pnpm add @aws-sdk/client-qconnect`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `QConnectClient` and
the commands you need, for example `ListAssistantsCommand`:

```js
// ES5 example
const { QConnectClient, ListAssistantsCommand } = require("@aws-sdk/client-qconnect");
```

```ts
// ES6+ example
import { QConnectClient, ListAssistantsCommand } from "@aws-sdk/client-qconnect";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new QConnectClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListAssistantsCommand(params);
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
import * as AWS from "@aws-sdk/client-qconnect";
const client = new AWS.QConnect({ region: "REGION" });

// async/await.
try {
  const data = await client.listAssistants(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listAssistants(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listAssistants(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-qconnect` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CreateAssistant
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/CreateAssistantCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/CreateAssistantCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/CreateAssistantCommandOutput/)

</details>
<details>
<summary>
CreateAssistantAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/CreateAssistantAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/CreateAssistantAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/CreateAssistantAssociationCommandOutput/)

</details>
<details>
<summary>
CreateContent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/CreateContentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/CreateContentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/CreateContentCommandOutput/)

</details>
<details>
<summary>
CreateKnowledgeBase
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/CreateKnowledgeBaseCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/CreateKnowledgeBaseCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/CreateKnowledgeBaseCommandOutput/)

</details>
<details>
<summary>
CreateQuickResponse
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/CreateQuickResponseCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/CreateQuickResponseCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/CreateQuickResponseCommandOutput/)

</details>
<details>
<summary>
CreateSession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/CreateSessionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/CreateSessionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/CreateSessionCommandOutput/)

</details>
<details>
<summary>
DeleteAssistant
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/DeleteAssistantCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/DeleteAssistantCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/DeleteAssistantCommandOutput/)

</details>
<details>
<summary>
DeleteAssistantAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/DeleteAssistantAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/DeleteAssistantAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/DeleteAssistantAssociationCommandOutput/)

</details>
<details>
<summary>
DeleteContent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/DeleteContentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/DeleteContentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/DeleteContentCommandOutput/)

</details>
<details>
<summary>
DeleteImportJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/DeleteImportJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/DeleteImportJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/DeleteImportJobCommandOutput/)

</details>
<details>
<summary>
DeleteKnowledgeBase
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/DeleteKnowledgeBaseCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/DeleteKnowledgeBaseCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/DeleteKnowledgeBaseCommandOutput/)

</details>
<details>
<summary>
DeleteQuickResponse
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/DeleteQuickResponseCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/DeleteQuickResponseCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/DeleteQuickResponseCommandOutput/)

</details>
<details>
<summary>
GetAssistant
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/GetAssistantCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/GetAssistantCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/GetAssistantCommandOutput/)

</details>
<details>
<summary>
GetAssistantAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/GetAssistantAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/GetAssistantAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/GetAssistantAssociationCommandOutput/)

</details>
<details>
<summary>
GetContent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/GetContentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/GetContentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/GetContentCommandOutput/)

</details>
<details>
<summary>
GetContentSummary
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/GetContentSummaryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/GetContentSummaryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/GetContentSummaryCommandOutput/)

</details>
<details>
<summary>
GetImportJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/GetImportJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/GetImportJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/GetImportJobCommandOutput/)

</details>
<details>
<summary>
GetKnowledgeBase
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/GetKnowledgeBaseCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/GetKnowledgeBaseCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/GetKnowledgeBaseCommandOutput/)

</details>
<details>
<summary>
GetQuickResponse
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/GetQuickResponseCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/GetQuickResponseCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/GetQuickResponseCommandOutput/)

</details>
<details>
<summary>
GetRecommendations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/GetRecommendationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/GetRecommendationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/GetRecommendationsCommandOutput/)

</details>
<details>
<summary>
GetSession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/GetSessionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/GetSessionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/GetSessionCommandOutput/)

</details>
<details>
<summary>
ListAssistantAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/ListAssistantAssociationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/ListAssistantAssociationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/ListAssistantAssociationsCommandOutput/)

</details>
<details>
<summary>
ListAssistants
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/ListAssistantsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/ListAssistantsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/ListAssistantsCommandOutput/)

</details>
<details>
<summary>
ListContents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/ListContentsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/ListContentsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/ListContentsCommandOutput/)

</details>
<details>
<summary>
ListImportJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/ListImportJobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/ListImportJobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/ListImportJobsCommandOutput/)

</details>
<details>
<summary>
ListKnowledgeBases
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/ListKnowledgeBasesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/ListKnowledgeBasesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/ListKnowledgeBasesCommandOutput/)

</details>
<details>
<summary>
ListQuickResponses
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/ListQuickResponsesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/ListQuickResponsesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/ListQuickResponsesCommandOutput/)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/ListTagsForResourceCommandOutput/)

</details>
<details>
<summary>
NotifyRecommendationsReceived
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/NotifyRecommendationsReceivedCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/NotifyRecommendationsReceivedCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/NotifyRecommendationsReceivedCommandOutput/)

</details>
<details>
<summary>
PutFeedback
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/PutFeedbackCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/PutFeedbackCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/PutFeedbackCommandOutput/)

</details>
<details>
<summary>
QueryAssistant
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/QueryAssistantCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/QueryAssistantCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/QueryAssistantCommandOutput/)

</details>
<details>
<summary>
RemoveKnowledgeBaseTemplateUri
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/RemoveKnowledgeBaseTemplateUriCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/RemoveKnowledgeBaseTemplateUriCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/RemoveKnowledgeBaseTemplateUriCommandOutput/)

</details>
<details>
<summary>
SearchContent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/SearchContentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/SearchContentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/SearchContentCommandOutput/)

</details>
<details>
<summary>
SearchQuickResponses
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/SearchQuickResponsesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/SearchQuickResponsesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/SearchQuickResponsesCommandOutput/)

</details>
<details>
<summary>
SearchSessions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/SearchSessionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/SearchSessionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/SearchSessionsCommandOutput/)

</details>
<details>
<summary>
StartContentUpload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/StartContentUploadCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/StartContentUploadCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/StartContentUploadCommandOutput/)

</details>
<details>
<summary>
StartImportJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/StartImportJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/StartImportJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/StartImportJobCommandOutput/)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/TagResourceCommandOutput/)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/UntagResourceCommandOutput/)

</details>
<details>
<summary>
UpdateContent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/UpdateContentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/UpdateContentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/UpdateContentCommandOutput/)

</details>
<details>
<summary>
UpdateKnowledgeBaseTemplateUri
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/UpdateKnowledgeBaseTemplateUriCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/UpdateKnowledgeBaseTemplateUriCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/UpdateKnowledgeBaseTemplateUriCommandOutput/)

</details>
<details>
<summary>
UpdateQuickResponse
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/UpdateQuickResponseCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/UpdateQuickResponseCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/UpdateQuickResponseCommandOutput/)

</details>
