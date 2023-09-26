<!-- generated file, do not edit directly -->

# @aws-sdk/client-migrationhubstrategy

## Description

AWS SDK for JavaScript MigrationHubStrategy Client for Node.js, Browser and React Native.

<fullname>Migration Hub Strategy Recommendations</fullname>

<p>This API reference provides descriptions, syntax, and other details about each of the
actions and data types for Migration Hub Strategy Recommendations (Strategy Recommendations). The topic for each action shows the API
request parameters and the response. Alternatively, you can use one of the AWS SDKs to
access an API that is tailored to the programming language or platform that you're using. For
more information, see <a href="http://aws.amazon.com/tools/#SDKs">AWS SDKs</a>.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-migrationhubstrategy
using your favorite package manager:

- `npm install @aws-sdk/client-migrationhubstrategy`
- `yarn add @aws-sdk/client-migrationhubstrategy`
- `pnpm add @aws-sdk/client-migrationhubstrategy`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `MigrationHubStrategyClient` and
the commands you need, for example `ListServersCommand`:

```js
// ES5 example
const { MigrationHubStrategyClient, ListServersCommand } = require("@aws-sdk/client-migrationhubstrategy");
```

```ts
// ES6+ example
import { MigrationHubStrategyClient, ListServersCommand } from "@aws-sdk/client-migrationhubstrategy";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new MigrationHubStrategyClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListServersCommand(params);
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
import * as AWS from "@aws-sdk/client-migrationhubstrategy";
const client = new AWS.MigrationHubStrategy({ region: "REGION" });

// async/await.
try {
  const data = await client.listServers(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listServers(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listServers(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-migrationhubstrategy` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
GetApplicationComponentDetails
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/classes/getapplicationcomponentdetailscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/interfaces/getapplicationcomponentdetailscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/interfaces/getapplicationcomponentdetailscommandoutput.html)

</details>
<details>
<summary>
GetApplicationComponentStrategies
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/classes/getapplicationcomponentstrategiescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/interfaces/getapplicationcomponentstrategiescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/interfaces/getapplicationcomponentstrategiescommandoutput.html)

</details>
<details>
<summary>
GetAssessment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/classes/getassessmentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/interfaces/getassessmentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/interfaces/getassessmentcommandoutput.html)

</details>
<details>
<summary>
GetImportFileTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/classes/getimportfiletaskcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/interfaces/getimportfiletaskcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/interfaces/getimportfiletaskcommandoutput.html)

</details>
<details>
<summary>
GetLatestAssessmentId
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/classes/getlatestassessmentidcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/interfaces/getlatestassessmentidcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/interfaces/getlatestassessmentidcommandoutput.html)

</details>
<details>
<summary>
GetPortfolioPreferences
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/classes/getportfoliopreferencescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/interfaces/getportfoliopreferencescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/interfaces/getportfoliopreferencescommandoutput.html)

</details>
<details>
<summary>
GetPortfolioSummary
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/classes/getportfoliosummarycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/interfaces/getportfoliosummarycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/interfaces/getportfoliosummarycommandoutput.html)

</details>
<details>
<summary>
GetRecommendationReportDetails
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/classes/getrecommendationreportdetailscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/interfaces/getrecommendationreportdetailscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/interfaces/getrecommendationreportdetailscommandoutput.html)

</details>
<details>
<summary>
GetServerDetails
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/classes/getserverdetailscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/interfaces/getserverdetailscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/interfaces/getserverdetailscommandoutput.html)

</details>
<details>
<summary>
GetServerStrategies
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/classes/getserverstrategiescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/interfaces/getserverstrategiescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/interfaces/getserverstrategiescommandoutput.html)

</details>
<details>
<summary>
ListApplicationComponents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/classes/listapplicationcomponentscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/interfaces/listapplicationcomponentscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/interfaces/listapplicationcomponentscommandoutput.html)

</details>
<details>
<summary>
ListCollectors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/classes/listcollectorscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/interfaces/listcollectorscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/interfaces/listcollectorscommandoutput.html)

</details>
<details>
<summary>
ListImportFileTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/classes/listimportfiletaskcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/interfaces/listimportfiletaskcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/interfaces/listimportfiletaskcommandoutput.html)

</details>
<details>
<summary>
ListServers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/classes/listserverscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/interfaces/listserverscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/interfaces/listserverscommandoutput.html)

</details>
<details>
<summary>
PutPortfolioPreferences
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/classes/putportfoliopreferencescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/interfaces/putportfoliopreferencescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/interfaces/putportfoliopreferencescommandoutput.html)

</details>
<details>
<summary>
StartAssessment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/classes/startassessmentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/interfaces/startassessmentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/interfaces/startassessmentcommandoutput.html)

</details>
<details>
<summary>
StartImportFileTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/classes/startimportfiletaskcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/interfaces/startimportfiletaskcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/interfaces/startimportfiletaskcommandoutput.html)

</details>
<details>
<summary>
StartRecommendationReportGeneration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/classes/startrecommendationreportgenerationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/interfaces/startrecommendationreportgenerationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/interfaces/startrecommendationreportgenerationcommandoutput.html)

</details>
<details>
<summary>
StopAssessment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/classes/stopassessmentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/interfaces/stopassessmentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/interfaces/stopassessmentcommandoutput.html)

</details>
<details>
<summary>
UpdateApplicationComponentConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/classes/updateapplicationcomponentconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/interfaces/updateapplicationcomponentconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/interfaces/updateapplicationcomponentconfigcommandoutput.html)

</details>
<details>
<summary>
UpdateServerConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/classes/updateserverconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/interfaces/updateserverconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-migrationhubstrategy/interfaces/updateserverconfigcommandoutput.html)

</details>
