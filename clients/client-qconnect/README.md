<!-- generated file, do not edit directly -->

# @aws-sdk/client-qconnect

## Description

AWS SDK for JavaScript QConnect Client for Node.js, Browser and React Native.

<ul> <li> <p> <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_Operations_Amazon_Q_Connect.html">Amazon Q actions</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_Types_Amazon_Q_Connect.html">Amazon Q data types</a> </p> </li> </ul> <note> <p> <b>Powered by Amazon Bedrock</b>: Amazon Web Services implements <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/abuse-detection.html">automated abuse detection</a>. Because Amazon Q in Connect is built on Amazon Bedrock, users can take full advantage of the controls implemented in Amazon Bedrock to enforce safety, security, and the responsible use of artificial intelligence (AI).</p> </note> <p>Amazon Q in Connect is a generative AI customer service assistant. It is an LLM-enhanced evolution of Amazon Connect Wisdom that delivers real-time recommendations to help contact center agents resolve customer issues quickly and accurately.</p> <p>Amazon Q in Connect automatically detects customer intent during calls and chats using conversational analytics and natural language understanding (NLU). It then provides agents with immediate, real-time generative responses and suggested actions, and links to relevant documents and articles. Agents can also query Amazon Q in Connect directly using natural language or keywords to answer customer requests.</p> <p>Use the Amazon Q in Connect APIs to create an assistant and a knowledge base, for example, or manage content by uploading custom files.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-q-connect.html">Use Amazon Q in Connect for generative AI powered agent assistance in real-time</a> in the <i>Amazon Connect Administrator Guide</i>.</p>

## Installing

To install this package, simply type add or install @aws-sdk/client-qconnect
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
ActivateMessageTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/ActivateMessageTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/ActivateMessageTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/ActivateMessageTemplateCommandOutput/)

</details>
<details>
<summary>
CreateAIAgent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/CreateAIAgentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/CreateAIAgentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/CreateAIAgentCommandOutput/)

</details>
<details>
<summary>
CreateAIAgentVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/CreateAIAgentVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/CreateAIAgentVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/CreateAIAgentVersionCommandOutput/)

</details>
<details>
<summary>
CreateAIGuardrail
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/CreateAIGuardrailCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/CreateAIGuardrailCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/CreateAIGuardrailCommandOutput/)

</details>
<details>
<summary>
CreateAIGuardrailVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/CreateAIGuardrailVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/CreateAIGuardrailVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/CreateAIGuardrailVersionCommandOutput/)

</details>
<details>
<summary>
CreateAIPrompt
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/CreateAIPromptCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/CreateAIPromptCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/CreateAIPromptCommandOutput/)

</details>
<details>
<summary>
CreateAIPromptVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/CreateAIPromptVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/CreateAIPromptVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/CreateAIPromptVersionCommandOutput/)

</details>
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
CreateContentAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/CreateContentAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/CreateContentAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/CreateContentAssociationCommandOutput/)

</details>
<details>
<summary>
CreateKnowledgeBase
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/CreateKnowledgeBaseCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/CreateKnowledgeBaseCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/CreateKnowledgeBaseCommandOutput/)

</details>
<details>
<summary>
CreateMessageTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/CreateMessageTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/CreateMessageTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/CreateMessageTemplateCommandOutput/)

</details>
<details>
<summary>
CreateMessageTemplateAttachment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/CreateMessageTemplateAttachmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/CreateMessageTemplateAttachmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/CreateMessageTemplateAttachmentCommandOutput/)

</details>
<details>
<summary>
CreateMessageTemplateVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/CreateMessageTemplateVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/CreateMessageTemplateVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/CreateMessageTemplateVersionCommandOutput/)

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
DeactivateMessageTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/DeactivateMessageTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/DeactivateMessageTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/DeactivateMessageTemplateCommandOutput/)

</details>
<details>
<summary>
DeleteAIAgent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/DeleteAIAgentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/DeleteAIAgentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/DeleteAIAgentCommandOutput/)

</details>
<details>
<summary>
DeleteAIAgentVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/DeleteAIAgentVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/DeleteAIAgentVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/DeleteAIAgentVersionCommandOutput/)

</details>
<details>
<summary>
DeleteAIGuardrail
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/DeleteAIGuardrailCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/DeleteAIGuardrailCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/DeleteAIGuardrailCommandOutput/)

</details>
<details>
<summary>
DeleteAIGuardrailVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/DeleteAIGuardrailVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/DeleteAIGuardrailVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/DeleteAIGuardrailVersionCommandOutput/)

</details>
<details>
<summary>
DeleteAIPrompt
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/DeleteAIPromptCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/DeleteAIPromptCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/DeleteAIPromptCommandOutput/)

</details>
<details>
<summary>
DeleteAIPromptVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/DeleteAIPromptVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/DeleteAIPromptVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/DeleteAIPromptVersionCommandOutput/)

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
DeleteContentAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/DeleteContentAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/DeleteContentAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/DeleteContentAssociationCommandOutput/)

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
DeleteMessageTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/DeleteMessageTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/DeleteMessageTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/DeleteMessageTemplateCommandOutput/)

</details>
<details>
<summary>
DeleteMessageTemplateAttachment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/DeleteMessageTemplateAttachmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/DeleteMessageTemplateAttachmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/DeleteMessageTemplateAttachmentCommandOutput/)

</details>
<details>
<summary>
DeleteQuickResponse
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/DeleteQuickResponseCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/DeleteQuickResponseCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/DeleteQuickResponseCommandOutput/)

</details>
<details>
<summary>
GetAIAgent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/GetAIAgentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/GetAIAgentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/GetAIAgentCommandOutput/)

</details>
<details>
<summary>
GetAIGuardrail
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/GetAIGuardrailCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/GetAIGuardrailCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/GetAIGuardrailCommandOutput/)

</details>
<details>
<summary>
GetAIPrompt
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/GetAIPromptCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/GetAIPromptCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/GetAIPromptCommandOutput/)

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
GetContentAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/GetContentAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/GetContentAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/GetContentAssociationCommandOutput/)

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
GetMessageTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/GetMessageTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/GetMessageTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/GetMessageTemplateCommandOutput/)

</details>
<details>
<summary>
GetNextMessage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/GetNextMessageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/GetNextMessageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/GetNextMessageCommandOutput/)

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
ListAIAgents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/ListAIAgentsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/ListAIAgentsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/ListAIAgentsCommandOutput/)

</details>
<details>
<summary>
ListAIAgentVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/ListAIAgentVersionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/ListAIAgentVersionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/ListAIAgentVersionsCommandOutput/)

</details>
<details>
<summary>
ListAIGuardrails
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/ListAIGuardrailsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/ListAIGuardrailsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/ListAIGuardrailsCommandOutput/)

</details>
<details>
<summary>
ListAIGuardrailVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/ListAIGuardrailVersionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/ListAIGuardrailVersionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/ListAIGuardrailVersionsCommandOutput/)

</details>
<details>
<summary>
ListAIPrompts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/ListAIPromptsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/ListAIPromptsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/ListAIPromptsCommandOutput/)

</details>
<details>
<summary>
ListAIPromptVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/ListAIPromptVersionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/ListAIPromptVersionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/ListAIPromptVersionsCommandOutput/)

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
ListContentAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/ListContentAssociationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/ListContentAssociationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/ListContentAssociationsCommandOutput/)

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
ListMessages
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/ListMessagesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/ListMessagesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/ListMessagesCommandOutput/)

</details>
<details>
<summary>
ListMessageTemplates
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/ListMessageTemplatesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/ListMessageTemplatesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/ListMessageTemplatesCommandOutput/)

</details>
<details>
<summary>
ListMessageTemplateVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/ListMessageTemplateVersionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/ListMessageTemplateVersionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/ListMessageTemplateVersionsCommandOutput/)

</details>
<details>
<summary>
ListQuickResponses
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/ListQuickResponsesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/ListQuickResponsesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/ListQuickResponsesCommandOutput/)

</details>
<details>
<summary>
ListSpans
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/ListSpansCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/ListSpansCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/ListSpansCommandOutput/)

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
RemoveAssistantAIAgent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/RemoveAssistantAIAgentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/RemoveAssistantAIAgentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/RemoveAssistantAIAgentCommandOutput/)

</details>
<details>
<summary>
RemoveKnowledgeBaseTemplateUri
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/RemoveKnowledgeBaseTemplateUriCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/RemoveKnowledgeBaseTemplateUriCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/RemoveKnowledgeBaseTemplateUriCommandOutput/)

</details>
<details>
<summary>
RenderMessageTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/RenderMessageTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/RenderMessageTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/RenderMessageTemplateCommandOutput/)

</details>
<details>
<summary>
Retrieve
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/RetrieveCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/RetrieveCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/RetrieveCommandOutput/)

</details>
<details>
<summary>
SearchContent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/SearchContentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/SearchContentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/SearchContentCommandOutput/)

</details>
<details>
<summary>
SearchMessageTemplates
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/SearchMessageTemplatesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/SearchMessageTemplatesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/SearchMessageTemplatesCommandOutput/)

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
SendMessage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/SendMessageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/SendMessageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/SendMessageCommandOutput/)

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
UpdateAIAgent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/UpdateAIAgentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/UpdateAIAgentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/UpdateAIAgentCommandOutput/)

</details>
<details>
<summary>
UpdateAIGuardrail
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/UpdateAIGuardrailCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/UpdateAIGuardrailCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/UpdateAIGuardrailCommandOutput/)

</details>
<details>
<summary>
UpdateAIPrompt
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/UpdateAIPromptCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/UpdateAIPromptCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/UpdateAIPromptCommandOutput/)

</details>
<details>
<summary>
UpdateAssistantAIAgent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/UpdateAssistantAIAgentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/UpdateAssistantAIAgentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/UpdateAssistantAIAgentCommandOutput/)

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
UpdateMessageTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/UpdateMessageTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/UpdateMessageTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/UpdateMessageTemplateCommandOutput/)

</details>
<details>
<summary>
UpdateMessageTemplateMetadata
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/UpdateMessageTemplateMetadataCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/UpdateMessageTemplateMetadataCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/UpdateMessageTemplateMetadataCommandOutput/)

</details>
<details>
<summary>
UpdateQuickResponse
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/UpdateQuickResponseCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/UpdateQuickResponseCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/UpdateQuickResponseCommandOutput/)

</details>
<details>
<summary>
UpdateSession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/UpdateSessionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/UpdateSessionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/UpdateSessionCommandOutput/)

</details>
<details>
<summary>
UpdateSessionData
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/qconnect/command/UpdateSessionDataCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/UpdateSessionDataCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-qconnect/Interface/UpdateSessionDataCommandOutput/)

</details>
