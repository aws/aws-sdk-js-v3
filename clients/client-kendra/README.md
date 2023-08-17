<!-- generated file, do not edit directly -->

# @aws-sdk/client-kendra

## Description

AWS SDK for JavaScript Kendra Client for Node.js, Browser and React Native.

<p>Amazon Kendra is a service for indexing large document sets.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-kendra
using your favorite package manager:

- `npm install @aws-sdk/client-kendra`
- `yarn add @aws-sdk/client-kendra`
- `pnpm add @aws-sdk/client-kendra`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `KendraClient` and
the commands you need, for example `AssociateEntitiesToExperienceCommand`:

```js
// ES5 example
const { KendraClient, AssociateEntitiesToExperienceCommand } = require("@aws-sdk/client-kendra");
```

```ts
// ES6+ example
import { KendraClient, AssociateEntitiesToExperienceCommand } from "@aws-sdk/client-kendra";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new KendraClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new AssociateEntitiesToExperienceCommand(params);
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
import * as AWS from "@aws-sdk/client-kendra";
const client = new AWS.Kendra({ region: "REGION" });

// async/await.
try {
  const data = await client.associateEntitiesToExperience(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .associateEntitiesToExperience(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.associateEntitiesToExperience(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-kendra` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AssociateEntitiesToExperience
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/associateentitiestoexperiencecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/associateentitiestoexperiencecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/associateentitiestoexperiencecommandoutput.html)

</details>
<details>
<summary>
AssociatePersonasToEntities
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/associatepersonastoentitiescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/associatepersonastoentitiescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/associatepersonastoentitiescommandoutput.html)

</details>
<details>
<summary>
BatchDeleteDocument
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/batchdeletedocumentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/batchdeletedocumentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/batchdeletedocumentcommandoutput.html)

</details>
<details>
<summary>
BatchDeleteFeaturedResultsSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/batchdeletefeaturedresultssetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/batchdeletefeaturedresultssetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/batchdeletefeaturedresultssetcommandoutput.html)

</details>
<details>
<summary>
BatchGetDocumentStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/batchgetdocumentstatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/batchgetdocumentstatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/batchgetdocumentstatuscommandoutput.html)

</details>
<details>
<summary>
BatchPutDocument
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/batchputdocumentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/batchputdocumentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/batchputdocumentcommandoutput.html)

</details>
<details>
<summary>
ClearQuerySuggestions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/clearquerysuggestionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/clearquerysuggestionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/clearquerysuggestionscommandoutput.html)

</details>
<details>
<summary>
CreateAccessControlConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/createaccesscontrolconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/createaccesscontrolconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/createaccesscontrolconfigurationcommandoutput.html)

</details>
<details>
<summary>
CreateDataSource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/createdatasourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/createdatasourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/createdatasourcecommandoutput.html)

</details>
<details>
<summary>
CreateExperience
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/createexperiencecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/createexperiencecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/createexperiencecommandoutput.html)

</details>
<details>
<summary>
CreateFaq
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/createfaqcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/createfaqcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/createfaqcommandoutput.html)

</details>
<details>
<summary>
CreateFeaturedResultsSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/createfeaturedresultssetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/createfeaturedresultssetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/createfeaturedresultssetcommandoutput.html)

</details>
<details>
<summary>
CreateIndex
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/createindexcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/createindexcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/createindexcommandoutput.html)

</details>
<details>
<summary>
CreateQuerySuggestionsBlockList
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/createquerysuggestionsblocklistcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/createquerysuggestionsblocklistcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/createquerysuggestionsblocklistcommandoutput.html)

</details>
<details>
<summary>
CreateThesaurus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/createthesauruscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/createthesauruscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/createthesauruscommandoutput.html)

</details>
<details>
<summary>
DeleteAccessControlConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/deleteaccesscontrolconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/deleteaccesscontrolconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/deleteaccesscontrolconfigurationcommandoutput.html)

</details>
<details>
<summary>
DeleteDataSource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/deletedatasourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/deletedatasourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/deletedatasourcecommandoutput.html)

</details>
<details>
<summary>
DeleteExperience
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/deleteexperiencecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/deleteexperiencecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/deleteexperiencecommandoutput.html)

</details>
<details>
<summary>
DeleteFaq
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/deletefaqcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/deletefaqcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/deletefaqcommandoutput.html)

</details>
<details>
<summary>
DeleteIndex
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/deleteindexcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/deleteindexcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/deleteindexcommandoutput.html)

</details>
<details>
<summary>
DeletePrincipalMapping
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/deleteprincipalmappingcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/deleteprincipalmappingcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/deleteprincipalmappingcommandoutput.html)

</details>
<details>
<summary>
DeleteQuerySuggestionsBlockList
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/deletequerysuggestionsblocklistcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/deletequerysuggestionsblocklistcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/deletequerysuggestionsblocklistcommandoutput.html)

</details>
<details>
<summary>
DeleteThesaurus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/deletethesauruscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/deletethesauruscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/deletethesauruscommandoutput.html)

</details>
<details>
<summary>
DescribeAccessControlConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/describeaccesscontrolconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/describeaccesscontrolconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/describeaccesscontrolconfigurationcommandoutput.html)

</details>
<details>
<summary>
DescribeDataSource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/describedatasourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/describedatasourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/describedatasourcecommandoutput.html)

</details>
<details>
<summary>
DescribeExperience
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/describeexperiencecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/describeexperiencecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/describeexperiencecommandoutput.html)

</details>
<details>
<summary>
DescribeFaq
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/describefaqcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/describefaqcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/describefaqcommandoutput.html)

</details>
<details>
<summary>
DescribeFeaturedResultsSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/describefeaturedresultssetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/describefeaturedresultssetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/describefeaturedresultssetcommandoutput.html)

</details>
<details>
<summary>
DescribeIndex
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/describeindexcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/describeindexcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/describeindexcommandoutput.html)

</details>
<details>
<summary>
DescribePrincipalMapping
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/describeprincipalmappingcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/describeprincipalmappingcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/describeprincipalmappingcommandoutput.html)

</details>
<details>
<summary>
DescribeQuerySuggestionsBlockList
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/describequerysuggestionsblocklistcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/describequerysuggestionsblocklistcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/describequerysuggestionsblocklistcommandoutput.html)

</details>
<details>
<summary>
DescribeQuerySuggestionsConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/describequerysuggestionsconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/describequerysuggestionsconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/describequerysuggestionsconfigcommandoutput.html)

</details>
<details>
<summary>
DescribeThesaurus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/describethesauruscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/describethesauruscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/describethesauruscommandoutput.html)

</details>
<details>
<summary>
DisassociateEntitiesFromExperience
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/disassociateentitiesfromexperiencecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/disassociateentitiesfromexperiencecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/disassociateentitiesfromexperiencecommandoutput.html)

</details>
<details>
<summary>
DisassociatePersonasFromEntities
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/disassociatepersonasfromentitiescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/disassociatepersonasfromentitiescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/disassociatepersonasfromentitiescommandoutput.html)

</details>
<details>
<summary>
GetQuerySuggestions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/getquerysuggestionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/getquerysuggestionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/getquerysuggestionscommandoutput.html)

</details>
<details>
<summary>
GetSnapshots
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/getsnapshotscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/getsnapshotscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/getsnapshotscommandoutput.html)

</details>
<details>
<summary>
ListAccessControlConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/listaccesscontrolconfigurationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/listaccesscontrolconfigurationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/listaccesscontrolconfigurationscommandoutput.html)

</details>
<details>
<summary>
ListDataSources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/listdatasourcescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/listdatasourcescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/listdatasourcescommandoutput.html)

</details>
<details>
<summary>
ListDataSourceSyncJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/listdatasourcesyncjobscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/listdatasourcesyncjobscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/listdatasourcesyncjobscommandoutput.html)

</details>
<details>
<summary>
ListEntityPersonas
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/listentitypersonascommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/listentitypersonascommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/listentitypersonascommandoutput.html)

</details>
<details>
<summary>
ListExperienceEntities
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/listexperienceentitiescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/listexperienceentitiescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/listexperienceentitiescommandoutput.html)

</details>
<details>
<summary>
ListExperiences
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/listexperiencescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/listexperiencescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/listexperiencescommandoutput.html)

</details>
<details>
<summary>
ListFaqs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/listfaqscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/listfaqscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/listfaqscommandoutput.html)

</details>
<details>
<summary>
ListFeaturedResultsSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/listfeaturedresultssetscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/listfeaturedresultssetscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/listfeaturedresultssetscommandoutput.html)

</details>
<details>
<summary>
ListGroupsOlderThanOrderingId
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/listgroupsolderthanorderingidcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/listgroupsolderthanorderingidcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/listgroupsolderthanorderingidcommandoutput.html)

</details>
<details>
<summary>
ListIndices
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/listindicescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/listindicescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/listindicescommandoutput.html)

</details>
<details>
<summary>
ListQuerySuggestionsBlockLists
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/listquerysuggestionsblocklistscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/listquerysuggestionsblocklistscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/listquerysuggestionsblocklistscommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
ListThesauri
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/listthesauricommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/listthesauricommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/listthesauricommandoutput.html)

</details>
<details>
<summary>
PutPrincipalMapping
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/putprincipalmappingcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/putprincipalmappingcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/putprincipalmappingcommandoutput.html)

</details>
<details>
<summary>
Query
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/querycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/querycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/querycommandoutput.html)

</details>
<details>
<summary>
Retrieve
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/retrievecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/retrievecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/retrievecommandoutput.html)

</details>
<details>
<summary>
StartDataSourceSyncJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/startdatasourcesyncjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/startdatasourcesyncjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/startdatasourcesyncjobcommandoutput.html)

</details>
<details>
<summary>
StopDataSourceSyncJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/stopdatasourcesyncjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/stopdatasourcesyncjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/stopdatasourcesyncjobcommandoutput.html)

</details>
<details>
<summary>
SubmitFeedback
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/submitfeedbackcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/submitfeedbackcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/submitfeedbackcommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateAccessControlConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/updateaccesscontrolconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/updateaccesscontrolconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/updateaccesscontrolconfigurationcommandoutput.html)

</details>
<details>
<summary>
UpdateDataSource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/updatedatasourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/updatedatasourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/updatedatasourcecommandoutput.html)

</details>
<details>
<summary>
UpdateExperience
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/updateexperiencecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/updateexperiencecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/updateexperiencecommandoutput.html)

</details>
<details>
<summary>
UpdateFeaturedResultsSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/updatefeaturedresultssetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/updatefeaturedresultssetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/updatefeaturedresultssetcommandoutput.html)

</details>
<details>
<summary>
UpdateIndex
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/updateindexcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/updateindexcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/updateindexcommandoutput.html)

</details>
<details>
<summary>
UpdateQuerySuggestionsBlockList
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/updatequerysuggestionsblocklistcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/updatequerysuggestionsblocklistcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/updatequerysuggestionsblocklistcommandoutput.html)

</details>
<details>
<summary>
UpdateQuerySuggestionsConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/updatequerysuggestionsconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/updatequerysuggestionsconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/updatequerysuggestionsconfigcommandoutput.html)

</details>
<details>
<summary>
UpdateThesaurus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/classes/updatethesauruscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/updatethesauruscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kendra/interfaces/updatethesauruscommandoutput.html)

</details>
