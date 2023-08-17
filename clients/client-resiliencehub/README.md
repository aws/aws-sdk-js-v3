<!-- generated file, do not edit directly -->

# @aws-sdk/client-resiliencehub

## Description

AWS SDK for JavaScript Resiliencehub Client for Node.js, Browser and React Native.

<p>Resilience Hub helps you proactively prepare and protect your Amazon Web Services applications from
disruptions. It offers continual resiliency assessment and validation that integrates
into your software development lifecycle. This enables you to uncover resiliency weaknesses,
ensure recovery time objective (RTO) and recovery point objective (RPO) targets for your
applications are met, and resolve issues before they are released into production. </p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-resiliencehub
using your favorite package manager:

- `npm install @aws-sdk/client-resiliencehub`
- `yarn add @aws-sdk/client-resiliencehub`
- `pnpm add @aws-sdk/client-resiliencehub`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `ResiliencehubClient` and
the commands you need, for example `AddDraftAppVersionResourceMappingsCommand`:

```js
// ES5 example
const { ResiliencehubClient, AddDraftAppVersionResourceMappingsCommand } = require("@aws-sdk/client-resiliencehub");
```

```ts
// ES6+ example
import { ResiliencehubClient, AddDraftAppVersionResourceMappingsCommand } from "@aws-sdk/client-resiliencehub";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new ResiliencehubClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new AddDraftAppVersionResourceMappingsCommand(params);
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
import * as AWS from "@aws-sdk/client-resiliencehub";
const client = new AWS.Resiliencehub({ region: "REGION" });

// async/await.
try {
  const data = await client.addDraftAppVersionResourceMappings(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .addDraftAppVersionResourceMappings(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.addDraftAppVersionResourceMappings(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-resiliencehub` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AddDraftAppVersionResourceMappings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/classes/adddraftappversionresourcemappingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/adddraftappversionresourcemappingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/adddraftappversionresourcemappingscommandoutput.html)

</details>
<details>
<summary>
BatchUpdateRecommendationStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/classes/batchupdaterecommendationstatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/batchupdaterecommendationstatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/batchupdaterecommendationstatuscommandoutput.html)

</details>
<details>
<summary>
CreateApp
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/classes/createappcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/createappcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/createappcommandoutput.html)

</details>
<details>
<summary>
CreateAppVersionAppComponent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/classes/createappversionappcomponentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/createappversionappcomponentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/createappversionappcomponentcommandoutput.html)

</details>
<details>
<summary>
CreateAppVersionResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/classes/createappversionresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/createappversionresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/createappversionresourcecommandoutput.html)

</details>
<details>
<summary>
CreateRecommendationTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/classes/createrecommendationtemplatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/createrecommendationtemplatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/createrecommendationtemplatecommandoutput.html)

</details>
<details>
<summary>
CreateResiliencyPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/classes/createresiliencypolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/createresiliencypolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/createresiliencypolicycommandoutput.html)

</details>
<details>
<summary>
DeleteApp
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/classes/deleteappcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/deleteappcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/deleteappcommandoutput.html)

</details>
<details>
<summary>
DeleteAppAssessment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/classes/deleteappassessmentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/deleteappassessmentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/deleteappassessmentcommandoutput.html)

</details>
<details>
<summary>
DeleteAppInputSource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/classes/deleteappinputsourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/deleteappinputsourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/deleteappinputsourcecommandoutput.html)

</details>
<details>
<summary>
DeleteAppVersionAppComponent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/classes/deleteappversionappcomponentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/deleteappversionappcomponentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/deleteappversionappcomponentcommandoutput.html)

</details>
<details>
<summary>
DeleteAppVersionResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/classes/deleteappversionresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/deleteappversionresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/deleteappversionresourcecommandoutput.html)

</details>
<details>
<summary>
DeleteRecommendationTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/classes/deleterecommendationtemplatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/deleterecommendationtemplatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/deleterecommendationtemplatecommandoutput.html)

</details>
<details>
<summary>
DeleteResiliencyPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/classes/deleteresiliencypolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/deleteresiliencypolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/deleteresiliencypolicycommandoutput.html)

</details>
<details>
<summary>
DescribeApp
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/classes/describeappcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/describeappcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/describeappcommandoutput.html)

</details>
<details>
<summary>
DescribeAppAssessment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/classes/describeappassessmentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/describeappassessmentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/describeappassessmentcommandoutput.html)

</details>
<details>
<summary>
DescribeAppVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/classes/describeappversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/describeappversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/describeappversioncommandoutput.html)

</details>
<details>
<summary>
DescribeAppVersionAppComponent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/classes/describeappversionappcomponentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/describeappversionappcomponentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/describeappversionappcomponentcommandoutput.html)

</details>
<details>
<summary>
DescribeAppVersionResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/classes/describeappversionresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/describeappversionresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/describeappversionresourcecommandoutput.html)

</details>
<details>
<summary>
DescribeAppVersionResourcesResolutionStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/classes/describeappversionresourcesresolutionstatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/describeappversionresourcesresolutionstatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/describeappversionresourcesresolutionstatuscommandoutput.html)

</details>
<details>
<summary>
DescribeAppVersionTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/classes/describeappversiontemplatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/describeappversiontemplatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/describeappversiontemplatecommandoutput.html)

</details>
<details>
<summary>
DescribeDraftAppVersionResourcesImportStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/classes/describedraftappversionresourcesimportstatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/describedraftappversionresourcesimportstatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/describedraftappversionresourcesimportstatuscommandoutput.html)

</details>
<details>
<summary>
DescribeResiliencyPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/classes/describeresiliencypolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/describeresiliencypolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/describeresiliencypolicycommandoutput.html)

</details>
<details>
<summary>
ImportResourcesToDraftAppVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/classes/importresourcestodraftappversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/importresourcestodraftappversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/importresourcestodraftappversioncommandoutput.html)

</details>
<details>
<summary>
ListAlarmRecommendations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/classes/listalarmrecommendationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/listalarmrecommendationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/listalarmrecommendationscommandoutput.html)

</details>
<details>
<summary>
ListAppAssessmentComplianceDrifts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/classes/listappassessmentcompliancedriftscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/listappassessmentcompliancedriftscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/listappassessmentcompliancedriftscommandoutput.html)

</details>
<details>
<summary>
ListAppAssessments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/classes/listappassessmentscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/listappassessmentscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/listappassessmentscommandoutput.html)

</details>
<details>
<summary>
ListAppComponentCompliances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/classes/listappcomponentcompliancescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/listappcomponentcompliancescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/listappcomponentcompliancescommandoutput.html)

</details>
<details>
<summary>
ListAppComponentRecommendations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/classes/listappcomponentrecommendationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/listappcomponentrecommendationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/listappcomponentrecommendationscommandoutput.html)

</details>
<details>
<summary>
ListAppInputSources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/classes/listappinputsourcescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/listappinputsourcescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/listappinputsourcescommandoutput.html)

</details>
<details>
<summary>
ListApps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/classes/listappscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/listappscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/listappscommandoutput.html)

</details>
<details>
<summary>
ListAppVersionAppComponents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/classes/listappversionappcomponentscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/listappversionappcomponentscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/listappversionappcomponentscommandoutput.html)

</details>
<details>
<summary>
ListAppVersionResourceMappings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/classes/listappversionresourcemappingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/listappversionresourcemappingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/listappversionresourcemappingscommandoutput.html)

</details>
<details>
<summary>
ListAppVersionResources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/classes/listappversionresourcescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/listappversionresourcescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/listappversionresourcescommandoutput.html)

</details>
<details>
<summary>
ListAppVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/classes/listappversionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/listappversionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/listappversionscommandoutput.html)

</details>
<details>
<summary>
ListRecommendationTemplates
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/classes/listrecommendationtemplatescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/listrecommendationtemplatescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/listrecommendationtemplatescommandoutput.html)

</details>
<details>
<summary>
ListResiliencyPolicies
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/classes/listresiliencypoliciescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/listresiliencypoliciescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/listresiliencypoliciescommandoutput.html)

</details>
<details>
<summary>
ListSopRecommendations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/classes/listsoprecommendationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/listsoprecommendationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/listsoprecommendationscommandoutput.html)

</details>
<details>
<summary>
ListSuggestedResiliencyPolicies
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/classes/listsuggestedresiliencypoliciescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/listsuggestedresiliencypoliciescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/listsuggestedresiliencypoliciescommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
ListTestRecommendations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/classes/listtestrecommendationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/listtestrecommendationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/listtestrecommendationscommandoutput.html)

</details>
<details>
<summary>
ListUnsupportedAppVersionResources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/classes/listunsupportedappversionresourcescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/listunsupportedappversionresourcescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/listunsupportedappversionresourcescommandoutput.html)

</details>
<details>
<summary>
PublishAppVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/classes/publishappversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/publishappversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/publishappversioncommandoutput.html)

</details>
<details>
<summary>
PutDraftAppVersionTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/classes/putdraftappversiontemplatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/putdraftappversiontemplatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/putdraftappversiontemplatecommandoutput.html)

</details>
<details>
<summary>
RemoveDraftAppVersionResourceMappings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/classes/removedraftappversionresourcemappingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/removedraftappversionresourcemappingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/removedraftappversionresourcemappingscommandoutput.html)

</details>
<details>
<summary>
ResolveAppVersionResources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/classes/resolveappversionresourcescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/resolveappversionresourcescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/resolveappversionresourcescommandoutput.html)

</details>
<details>
<summary>
StartAppAssessment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/classes/startappassessmentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/startappassessmentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/startappassessmentcommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateApp
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/classes/updateappcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/updateappcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/updateappcommandoutput.html)

</details>
<details>
<summary>
UpdateAppVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/classes/updateappversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/updateappversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/updateappversioncommandoutput.html)

</details>
<details>
<summary>
UpdateAppVersionAppComponent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/classes/updateappversionappcomponentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/updateappversionappcomponentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/updateappversionappcomponentcommandoutput.html)

</details>
<details>
<summary>
UpdateAppVersionResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/classes/updateappversionresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/updateappversionresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/updateappversionresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateResiliencyPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/classes/updateresiliencypolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/updateresiliencypolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-resiliencehub/interfaces/updateresiliencypolicycommandoutput.html)

</details>
