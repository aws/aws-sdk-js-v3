<!-- generated file, do not edit directly -->

# @aws-sdk/client-codeguru-reviewer

## Description

AWS SDK for JavaScript CodeGuruReviewer Client for Node.js, Browser and React Native.

<p>This section provides documentation for the Amazon CodeGuru Reviewer API operations. CodeGuru Reviewer is a
service that uses program analysis and machine learning to detect potential defects that
are difficult for developers to find and recommends fixes in your Java and Python
code.</p>
<p>By proactively detecting and providing recommendations for addressing code defects and
implementing best practices, CodeGuru Reviewer improves the overall quality and maintainability of
your code base during the code review stage. For more information about CodeGuru Reviewer, see the
<i>
<a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/welcome.html">Amazon CodeGuru Reviewer User Guide</a>.</i>
</p>
<p>To improve the security of your CodeGuru Reviewer API calls, you can establish a private connection
between your VPC and CodeGuru Reviewer by creating an <i>interface VPC endpoint</i>. For
more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/vpc-interface-endpoints.html">CodeGuru Reviewer and interface VPC
endpoints (Amazon Web Services PrivateLink)</a> in the <i>Amazon CodeGuru Reviewer User
Guide</i>.</p>

## Installing

To install this package, simply type add or install @aws-sdk/client-codeguru-reviewer
using your favorite package manager:

- `npm install @aws-sdk/client-codeguru-reviewer`
- `yarn add @aws-sdk/client-codeguru-reviewer`
- `pnpm add @aws-sdk/client-codeguru-reviewer`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `CodeGuruReviewerClient` and
the commands you need, for example `ListCodeReviewsCommand`:

```js
// ES5 example
const { CodeGuruReviewerClient, ListCodeReviewsCommand } = require("@aws-sdk/client-codeguru-reviewer");
```

```ts
// ES6+ example
import { CodeGuruReviewerClient, ListCodeReviewsCommand } from "@aws-sdk/client-codeguru-reviewer";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new CodeGuruReviewerClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListCodeReviewsCommand(params);
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
import * as AWS from "@aws-sdk/client-codeguru-reviewer";
const client = new AWS.CodeGuruReviewer({ region: "REGION" });

// async/await.
try {
  const data = await client.listCodeReviews(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listCodeReviews(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listCodeReviews(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-codeguru-reviewer` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AssociateRepository
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codeguru-reviewer/command/AssociateRepositoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codeguru-reviewer/Interface/AssociateRepositoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codeguru-reviewer/Interface/AssociateRepositoryCommandOutput/)

</details>
<details>
<summary>
CreateCodeReview
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codeguru-reviewer/command/CreateCodeReviewCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codeguru-reviewer/Interface/CreateCodeReviewCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codeguru-reviewer/Interface/CreateCodeReviewCommandOutput/)

</details>
<details>
<summary>
DescribeCodeReview
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codeguru-reviewer/command/DescribeCodeReviewCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codeguru-reviewer/Interface/DescribeCodeReviewCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codeguru-reviewer/Interface/DescribeCodeReviewCommandOutput/)

</details>
<details>
<summary>
DescribeRecommendationFeedback
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codeguru-reviewer/command/DescribeRecommendationFeedbackCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codeguru-reviewer/Interface/DescribeRecommendationFeedbackCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codeguru-reviewer/Interface/DescribeRecommendationFeedbackCommandOutput/)

</details>
<details>
<summary>
DescribeRepositoryAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codeguru-reviewer/command/DescribeRepositoryAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codeguru-reviewer/Interface/DescribeRepositoryAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codeguru-reviewer/Interface/DescribeRepositoryAssociationCommandOutput/)

</details>
<details>
<summary>
DisassociateRepository
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codeguru-reviewer/command/DisassociateRepositoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codeguru-reviewer/Interface/DisassociateRepositoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codeguru-reviewer/Interface/DisassociateRepositoryCommandOutput/)

</details>
<details>
<summary>
ListCodeReviews
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codeguru-reviewer/command/ListCodeReviewsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codeguru-reviewer/Interface/ListCodeReviewsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codeguru-reviewer/Interface/ListCodeReviewsCommandOutput/)

</details>
<details>
<summary>
ListRecommendationFeedback
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codeguru-reviewer/command/ListRecommendationFeedbackCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codeguru-reviewer/Interface/ListRecommendationFeedbackCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codeguru-reviewer/Interface/ListRecommendationFeedbackCommandOutput/)

</details>
<details>
<summary>
ListRecommendations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codeguru-reviewer/command/ListRecommendationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codeguru-reviewer/Interface/ListRecommendationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codeguru-reviewer/Interface/ListRecommendationsCommandOutput/)

</details>
<details>
<summary>
ListRepositoryAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codeguru-reviewer/command/ListRepositoryAssociationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codeguru-reviewer/Interface/ListRepositoryAssociationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codeguru-reviewer/Interface/ListRepositoryAssociationsCommandOutput/)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codeguru-reviewer/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codeguru-reviewer/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codeguru-reviewer/Interface/ListTagsForResourceCommandOutput/)

</details>
<details>
<summary>
PutRecommendationFeedback
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codeguru-reviewer/command/PutRecommendationFeedbackCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codeguru-reviewer/Interface/PutRecommendationFeedbackCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codeguru-reviewer/Interface/PutRecommendationFeedbackCommandOutput/)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codeguru-reviewer/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codeguru-reviewer/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codeguru-reviewer/Interface/TagResourceCommandOutput/)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/codeguru-reviewer/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codeguru-reviewer/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-codeguru-reviewer/Interface/UntagResourceCommandOutput/)

</details>
