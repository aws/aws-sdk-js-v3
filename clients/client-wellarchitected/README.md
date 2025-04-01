<!-- generated file, do not edit directly -->

# @aws-sdk/client-wellarchitected

## Description

AWS SDK for JavaScript WellArchitected Client for Node.js, Browser and React Native.

<fullname>Well-Architected Tool</fullname>

<p>This is the <i>Well-Architected Tool API Reference</i>. The WA Tool API provides programmatic access to the
<a href="http://aws.amazon.com/well-architected-tool">Well-Architected Tool</a> in the
<a href="https://console.aws.amazon.com/wellarchitected">Amazon Web Services Management Console</a>. For information
about the Well-Architected Tool, see the
<a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/intro.html">Well-Architected Tool User Guide</a>.</p>

## Installing

To install this package, simply type add or install @aws-sdk/client-wellarchitected
using your favorite package manager:

- `npm install @aws-sdk/client-wellarchitected`
- `yarn add @aws-sdk/client-wellarchitected`
- `pnpm add @aws-sdk/client-wellarchitected`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `WellArchitectedClient` and
the commands you need, for example `ListLensesCommand`:

```js
// ES5 example
const { WellArchitectedClient, ListLensesCommand } = require("@aws-sdk/client-wellarchitected");
```

```ts
// ES6+ example
import { WellArchitectedClient, ListLensesCommand } from "@aws-sdk/client-wellarchitected";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new WellArchitectedClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListLensesCommand(params);
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
import * as AWS from "@aws-sdk/client-wellarchitected";
const client = new AWS.WellArchitected({ region: "REGION" });

// async/await.
try {
  const data = await client.listLenses(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listLenses(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listLenses(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-wellarchitected` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AssociateLenses
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/AssociateLensesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/AssociateLensesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/AssociateLensesCommandOutput/)

</details>
<details>
<summary>
AssociateProfiles
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/AssociateProfilesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/AssociateProfilesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/AssociateProfilesCommandOutput/)

</details>
<details>
<summary>
CreateLensShare
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/CreateLensShareCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/CreateLensShareCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/CreateLensShareCommandOutput/)

</details>
<details>
<summary>
CreateLensVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/CreateLensVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/CreateLensVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/CreateLensVersionCommandOutput/)

</details>
<details>
<summary>
CreateMilestone
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/CreateMilestoneCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/CreateMilestoneCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/CreateMilestoneCommandOutput/)

</details>
<details>
<summary>
CreateProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/CreateProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/CreateProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/CreateProfileCommandOutput/)

</details>
<details>
<summary>
CreateProfileShare
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/CreateProfileShareCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/CreateProfileShareCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/CreateProfileShareCommandOutput/)

</details>
<details>
<summary>
CreateReviewTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/CreateReviewTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/CreateReviewTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/CreateReviewTemplateCommandOutput/)

</details>
<details>
<summary>
CreateTemplateShare
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/CreateTemplateShareCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/CreateTemplateShareCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/CreateTemplateShareCommandOutput/)

</details>
<details>
<summary>
CreateWorkload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/CreateWorkloadCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/CreateWorkloadCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/CreateWorkloadCommandOutput/)

</details>
<details>
<summary>
CreateWorkloadShare
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/CreateWorkloadShareCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/CreateWorkloadShareCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/CreateWorkloadShareCommandOutput/)

</details>
<details>
<summary>
DeleteLens
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/DeleteLensCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/DeleteLensCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/DeleteLensCommandOutput/)

</details>
<details>
<summary>
DeleteLensShare
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/DeleteLensShareCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/DeleteLensShareCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/DeleteLensShareCommandOutput/)

</details>
<details>
<summary>
DeleteProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/DeleteProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/DeleteProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/DeleteProfileCommandOutput/)

</details>
<details>
<summary>
DeleteProfileShare
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/DeleteProfileShareCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/DeleteProfileShareCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/DeleteProfileShareCommandOutput/)

</details>
<details>
<summary>
DeleteReviewTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/DeleteReviewTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/DeleteReviewTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/DeleteReviewTemplateCommandOutput/)

</details>
<details>
<summary>
DeleteTemplateShare
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/DeleteTemplateShareCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/DeleteTemplateShareCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/DeleteTemplateShareCommandOutput/)

</details>
<details>
<summary>
DeleteWorkload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/DeleteWorkloadCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/DeleteWorkloadCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/DeleteWorkloadCommandOutput/)

</details>
<details>
<summary>
DeleteWorkloadShare
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/DeleteWorkloadShareCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/DeleteWorkloadShareCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/DeleteWorkloadShareCommandOutput/)

</details>
<details>
<summary>
DisassociateLenses
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/DisassociateLensesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/DisassociateLensesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/DisassociateLensesCommandOutput/)

</details>
<details>
<summary>
DisassociateProfiles
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/DisassociateProfilesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/DisassociateProfilesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/DisassociateProfilesCommandOutput/)

</details>
<details>
<summary>
ExportLens
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/ExportLensCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/ExportLensCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/ExportLensCommandOutput/)

</details>
<details>
<summary>
GetAnswer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/GetAnswerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/GetAnswerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/GetAnswerCommandOutput/)

</details>
<details>
<summary>
GetConsolidatedReport
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/GetConsolidatedReportCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/GetConsolidatedReportCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/GetConsolidatedReportCommandOutput/)

</details>
<details>
<summary>
GetGlobalSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/GetGlobalSettingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/GetGlobalSettingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/GetGlobalSettingsCommandOutput/)

</details>
<details>
<summary>
GetLens
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/GetLensCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/GetLensCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/GetLensCommandOutput/)

</details>
<details>
<summary>
GetLensReview
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/GetLensReviewCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/GetLensReviewCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/GetLensReviewCommandOutput/)

</details>
<details>
<summary>
GetLensReviewReport
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/GetLensReviewReportCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/GetLensReviewReportCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/GetLensReviewReportCommandOutput/)

</details>
<details>
<summary>
GetLensVersionDifference
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/GetLensVersionDifferenceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/GetLensVersionDifferenceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/GetLensVersionDifferenceCommandOutput/)

</details>
<details>
<summary>
GetMilestone
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/GetMilestoneCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/GetMilestoneCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/GetMilestoneCommandOutput/)

</details>
<details>
<summary>
GetProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/GetProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/GetProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/GetProfileCommandOutput/)

</details>
<details>
<summary>
GetProfileTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/GetProfileTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/GetProfileTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/GetProfileTemplateCommandOutput/)

</details>
<details>
<summary>
GetReviewTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/GetReviewTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/GetReviewTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/GetReviewTemplateCommandOutput/)

</details>
<details>
<summary>
GetReviewTemplateAnswer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/GetReviewTemplateAnswerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/GetReviewTemplateAnswerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/GetReviewTemplateAnswerCommandOutput/)

</details>
<details>
<summary>
GetReviewTemplateLensReview
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/GetReviewTemplateLensReviewCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/GetReviewTemplateLensReviewCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/GetReviewTemplateLensReviewCommandOutput/)

</details>
<details>
<summary>
GetWorkload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/GetWorkloadCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/GetWorkloadCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/GetWorkloadCommandOutput/)

</details>
<details>
<summary>
ImportLens
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/ImportLensCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/ImportLensCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/ImportLensCommandOutput/)

</details>
<details>
<summary>
ListAnswers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/ListAnswersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/ListAnswersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/ListAnswersCommandOutput/)

</details>
<details>
<summary>
ListCheckDetails
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/ListCheckDetailsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/ListCheckDetailsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/ListCheckDetailsCommandOutput/)

</details>
<details>
<summary>
ListCheckSummaries
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/ListCheckSummariesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/ListCheckSummariesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/ListCheckSummariesCommandOutput/)

</details>
<details>
<summary>
ListLenses
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/ListLensesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/ListLensesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/ListLensesCommandOutput/)

</details>
<details>
<summary>
ListLensReviewImprovements
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/ListLensReviewImprovementsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/ListLensReviewImprovementsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/ListLensReviewImprovementsCommandOutput/)

</details>
<details>
<summary>
ListLensReviews
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/ListLensReviewsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/ListLensReviewsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/ListLensReviewsCommandOutput/)

</details>
<details>
<summary>
ListLensShares
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/ListLensSharesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/ListLensSharesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/ListLensSharesCommandOutput/)

</details>
<details>
<summary>
ListMilestones
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/ListMilestonesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/ListMilestonesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/ListMilestonesCommandOutput/)

</details>
<details>
<summary>
ListNotifications
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/ListNotificationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/ListNotificationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/ListNotificationsCommandOutput/)

</details>
<details>
<summary>
ListProfileNotifications
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/ListProfileNotificationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/ListProfileNotificationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/ListProfileNotificationsCommandOutput/)

</details>
<details>
<summary>
ListProfiles
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/ListProfilesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/ListProfilesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/ListProfilesCommandOutput/)

</details>
<details>
<summary>
ListProfileShares
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/ListProfileSharesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/ListProfileSharesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/ListProfileSharesCommandOutput/)

</details>
<details>
<summary>
ListReviewTemplateAnswers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/ListReviewTemplateAnswersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/ListReviewTemplateAnswersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/ListReviewTemplateAnswersCommandOutput/)

</details>
<details>
<summary>
ListReviewTemplates
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/ListReviewTemplatesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/ListReviewTemplatesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/ListReviewTemplatesCommandOutput/)

</details>
<details>
<summary>
ListShareInvitations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/ListShareInvitationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/ListShareInvitationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/ListShareInvitationsCommandOutput/)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/ListTagsForResourceCommandOutput/)

</details>
<details>
<summary>
ListTemplateShares
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/ListTemplateSharesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/ListTemplateSharesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/ListTemplateSharesCommandOutput/)

</details>
<details>
<summary>
ListWorkloads
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/ListWorkloadsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/ListWorkloadsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/ListWorkloadsCommandOutput/)

</details>
<details>
<summary>
ListWorkloadShares
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/ListWorkloadSharesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/ListWorkloadSharesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/ListWorkloadSharesCommandOutput/)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/TagResourceCommandOutput/)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/UntagResourceCommandOutput/)

</details>
<details>
<summary>
UpdateAnswer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/UpdateAnswerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/UpdateAnswerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/UpdateAnswerCommandOutput/)

</details>
<details>
<summary>
UpdateGlobalSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/UpdateGlobalSettingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/UpdateGlobalSettingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/UpdateGlobalSettingsCommandOutput/)

</details>
<details>
<summary>
UpdateIntegration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/UpdateIntegrationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/UpdateIntegrationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/UpdateIntegrationCommandOutput/)

</details>
<details>
<summary>
UpdateLensReview
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/UpdateLensReviewCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/UpdateLensReviewCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/UpdateLensReviewCommandOutput/)

</details>
<details>
<summary>
UpdateProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/UpdateProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/UpdateProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/UpdateProfileCommandOutput/)

</details>
<details>
<summary>
UpdateReviewTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/UpdateReviewTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/UpdateReviewTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/UpdateReviewTemplateCommandOutput/)

</details>
<details>
<summary>
UpdateReviewTemplateAnswer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/UpdateReviewTemplateAnswerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/UpdateReviewTemplateAnswerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/UpdateReviewTemplateAnswerCommandOutput/)

</details>
<details>
<summary>
UpdateReviewTemplateLensReview
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/UpdateReviewTemplateLensReviewCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/UpdateReviewTemplateLensReviewCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/UpdateReviewTemplateLensReviewCommandOutput/)

</details>
<details>
<summary>
UpdateShareInvitation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/UpdateShareInvitationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/UpdateShareInvitationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/UpdateShareInvitationCommandOutput/)

</details>
<details>
<summary>
UpdateWorkload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/UpdateWorkloadCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/UpdateWorkloadCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/UpdateWorkloadCommandOutput/)

</details>
<details>
<summary>
UpdateWorkloadShare
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/UpdateWorkloadShareCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/UpdateWorkloadShareCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/UpdateWorkloadShareCommandOutput/)

</details>
<details>
<summary>
UpgradeLensReview
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/UpgradeLensReviewCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/UpgradeLensReviewCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/UpgradeLensReviewCommandOutput/)

</details>
<details>
<summary>
UpgradeProfileVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/UpgradeProfileVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/UpgradeProfileVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/UpgradeProfileVersionCommandOutput/)

</details>
<details>
<summary>
UpgradeReviewTemplateLensReview
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/wellarchitected/command/UpgradeReviewTemplateLensReviewCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/UpgradeReviewTemplateLensReviewCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-wellarchitected/Interface/UpgradeReviewTemplateLensReviewCommandOutput/)

</details>
