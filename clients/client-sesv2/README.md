<!-- generated file, do not edit directly -->

# @aws-sdk/client-sesv2

## Description

AWS SDK for JavaScript SESv2 Client for Node.js, Browser and React Native.

<fullname>Amazon SES API v2</fullname>

<p>
<a href="http://aws.amazon.com/ses">Amazon SES</a> is an Amazon Web Services service that
you can use to send email messages to your customers.</p>
<p>If you're new to Amazon SES API v2, you might find it helpful to review the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/">Amazon Simple Email Service Developer
Guide</a>. The <i>Amazon SES Developer Guide</i> provides information
and code samples that demonstrate how to use Amazon SES API v2 features programmatically.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-sesv2
using your favorite package manager:

- `npm install @aws-sdk/client-sesv2`
- `yarn add @aws-sdk/client-sesv2`
- `pnpm add @aws-sdk/client-sesv2`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `SESv2Client` and
the commands you need, for example `ListContactListsCommand`:

```js
// ES5 example
const { SESv2Client, ListContactListsCommand } = require("@aws-sdk/client-sesv2");
```

```ts
// ES6+ example
import { SESv2Client, ListContactListsCommand } from "@aws-sdk/client-sesv2";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new SESv2Client({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListContactListsCommand(params);
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
import * as AWS from "@aws-sdk/client-sesv2";
const client = new AWS.SESv2({ region: "REGION" });

// async/await.
try {
  const data = await client.listContactLists(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listContactLists(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listContactLists(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-sesv2` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
BatchGetMetricData
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/batchgetmetricdatacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/batchgetmetricdatacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/batchgetmetricdatacommandoutput.html)

</details>
<details>
<summary>
CancelExportJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/cancelexportjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/cancelexportjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/cancelexportjobcommandoutput.html)

</details>
<details>
<summary>
CreateConfigurationSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/createconfigurationsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/createconfigurationsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/createconfigurationsetcommandoutput.html)

</details>
<details>
<summary>
CreateConfigurationSetEventDestination
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/createconfigurationseteventdestinationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/createconfigurationseteventdestinationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/createconfigurationseteventdestinationcommandoutput.html)

</details>
<details>
<summary>
CreateContact
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/createcontactcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/createcontactcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/createcontactcommandoutput.html)

</details>
<details>
<summary>
CreateContactList
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/createcontactlistcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/createcontactlistcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/createcontactlistcommandoutput.html)

</details>
<details>
<summary>
CreateCustomVerificationEmailTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/createcustomverificationemailtemplatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/createcustomverificationemailtemplatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/createcustomverificationemailtemplatecommandoutput.html)

</details>
<details>
<summary>
CreateDedicatedIpPool
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/creatededicatedippoolcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/creatededicatedippoolcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/creatededicatedippoolcommandoutput.html)

</details>
<details>
<summary>
CreateDeliverabilityTestReport
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/createdeliverabilitytestreportcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/createdeliverabilitytestreportcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/createdeliverabilitytestreportcommandoutput.html)

</details>
<details>
<summary>
CreateEmailIdentity
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/createemailidentitycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/createemailidentitycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/createemailidentitycommandoutput.html)

</details>
<details>
<summary>
CreateEmailIdentityPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/createemailidentitypolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/createemailidentitypolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/createemailidentitypolicycommandoutput.html)

</details>
<details>
<summary>
CreateEmailTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/createemailtemplatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/createemailtemplatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/createemailtemplatecommandoutput.html)

</details>
<details>
<summary>
CreateExportJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/createexportjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/createexportjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/createexportjobcommandoutput.html)

</details>
<details>
<summary>
CreateImportJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/createimportjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/createimportjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/createimportjobcommandoutput.html)

</details>
<details>
<summary>
DeleteConfigurationSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/deleteconfigurationsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/deleteconfigurationsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/deleteconfigurationsetcommandoutput.html)

</details>
<details>
<summary>
DeleteConfigurationSetEventDestination
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/deleteconfigurationseteventdestinationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/deleteconfigurationseteventdestinationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/deleteconfigurationseteventdestinationcommandoutput.html)

</details>
<details>
<summary>
DeleteContact
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/deletecontactcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/deletecontactcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/deletecontactcommandoutput.html)

</details>
<details>
<summary>
DeleteContactList
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/deletecontactlistcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/deletecontactlistcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/deletecontactlistcommandoutput.html)

</details>
<details>
<summary>
DeleteCustomVerificationEmailTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/deletecustomverificationemailtemplatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/deletecustomverificationemailtemplatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/deletecustomverificationemailtemplatecommandoutput.html)

</details>
<details>
<summary>
DeleteDedicatedIpPool
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/deletededicatedippoolcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/deletededicatedippoolcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/deletededicatedippoolcommandoutput.html)

</details>
<details>
<summary>
DeleteEmailIdentity
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/deleteemailidentitycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/deleteemailidentitycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/deleteemailidentitycommandoutput.html)

</details>
<details>
<summary>
DeleteEmailIdentityPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/deleteemailidentitypolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/deleteemailidentitypolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/deleteemailidentitypolicycommandoutput.html)

</details>
<details>
<summary>
DeleteEmailTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/deleteemailtemplatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/deleteemailtemplatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/deleteemailtemplatecommandoutput.html)

</details>
<details>
<summary>
DeleteSuppressedDestination
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/deletesuppresseddestinationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/deletesuppresseddestinationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/deletesuppresseddestinationcommandoutput.html)

</details>
<details>
<summary>
GetAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/getaccountcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/getaccountcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/getaccountcommandoutput.html)

</details>
<details>
<summary>
GetBlacklistReports
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/getblacklistreportscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/getblacklistreportscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/getblacklistreportscommandoutput.html)

</details>
<details>
<summary>
GetConfigurationSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/getconfigurationsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/getconfigurationsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/getconfigurationsetcommandoutput.html)

</details>
<details>
<summary>
GetConfigurationSetEventDestinations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/getconfigurationseteventdestinationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/getconfigurationseteventdestinationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/getconfigurationseteventdestinationscommandoutput.html)

</details>
<details>
<summary>
GetContact
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/getcontactcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/getcontactcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/getcontactcommandoutput.html)

</details>
<details>
<summary>
GetContactList
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/getcontactlistcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/getcontactlistcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/getcontactlistcommandoutput.html)

</details>
<details>
<summary>
GetCustomVerificationEmailTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/getcustomverificationemailtemplatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/getcustomverificationemailtemplatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/getcustomverificationemailtemplatecommandoutput.html)

</details>
<details>
<summary>
GetDedicatedIp
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/getdedicatedipcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/getdedicatedipcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/getdedicatedipcommandoutput.html)

</details>
<details>
<summary>
GetDedicatedIpPool
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/getdedicatedippoolcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/getdedicatedippoolcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/getdedicatedippoolcommandoutput.html)

</details>
<details>
<summary>
GetDedicatedIps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/getdedicatedipscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/getdedicatedipscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/getdedicatedipscommandoutput.html)

</details>
<details>
<summary>
GetDeliverabilityDashboardOptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/getdeliverabilitydashboardoptionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/getdeliverabilitydashboardoptionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/getdeliverabilitydashboardoptionscommandoutput.html)

</details>
<details>
<summary>
GetDeliverabilityTestReport
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/getdeliverabilitytestreportcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/getdeliverabilitytestreportcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/getdeliverabilitytestreportcommandoutput.html)

</details>
<details>
<summary>
GetDomainDeliverabilityCampaign
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/getdomaindeliverabilitycampaigncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/getdomaindeliverabilitycampaigncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/getdomaindeliverabilitycampaigncommandoutput.html)

</details>
<details>
<summary>
GetDomainStatisticsReport
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/getdomainstatisticsreportcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/getdomainstatisticsreportcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/getdomainstatisticsreportcommandoutput.html)

</details>
<details>
<summary>
GetEmailIdentity
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/getemailidentitycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/getemailidentitycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/getemailidentitycommandoutput.html)

</details>
<details>
<summary>
GetEmailIdentityPolicies
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/getemailidentitypoliciescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/getemailidentitypoliciescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/getemailidentitypoliciescommandoutput.html)

</details>
<details>
<summary>
GetEmailTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/getemailtemplatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/getemailtemplatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/getemailtemplatecommandoutput.html)

</details>
<details>
<summary>
GetExportJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/getexportjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/getexportjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/getexportjobcommandoutput.html)

</details>
<details>
<summary>
GetImportJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/getimportjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/getimportjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/getimportjobcommandoutput.html)

</details>
<details>
<summary>
GetMessageInsights
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/getmessageinsightscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/getmessageinsightscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/getmessageinsightscommandoutput.html)

</details>
<details>
<summary>
GetSuppressedDestination
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/getsuppresseddestinationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/getsuppresseddestinationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/getsuppresseddestinationcommandoutput.html)

</details>
<details>
<summary>
ListConfigurationSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/listconfigurationsetscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/listconfigurationsetscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/listconfigurationsetscommandoutput.html)

</details>
<details>
<summary>
ListContactLists
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/listcontactlistscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/listcontactlistscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/listcontactlistscommandoutput.html)

</details>
<details>
<summary>
ListContacts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/listcontactscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/listcontactscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/listcontactscommandoutput.html)

</details>
<details>
<summary>
ListCustomVerificationEmailTemplates
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/listcustomverificationemailtemplatescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/listcustomverificationemailtemplatescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/listcustomverificationemailtemplatescommandoutput.html)

</details>
<details>
<summary>
ListDedicatedIpPools
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/listdedicatedippoolscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/listdedicatedippoolscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/listdedicatedippoolscommandoutput.html)

</details>
<details>
<summary>
ListDeliverabilityTestReports
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/listdeliverabilitytestreportscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/listdeliverabilitytestreportscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/listdeliverabilitytestreportscommandoutput.html)

</details>
<details>
<summary>
ListDomainDeliverabilityCampaigns
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/listdomaindeliverabilitycampaignscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/listdomaindeliverabilitycampaignscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/listdomaindeliverabilitycampaignscommandoutput.html)

</details>
<details>
<summary>
ListEmailIdentities
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/listemailidentitiescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/listemailidentitiescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/listemailidentitiescommandoutput.html)

</details>
<details>
<summary>
ListEmailTemplates
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/listemailtemplatescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/listemailtemplatescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/listemailtemplatescommandoutput.html)

</details>
<details>
<summary>
ListExportJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/listexportjobscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/listexportjobscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/listexportjobscommandoutput.html)

</details>
<details>
<summary>
ListImportJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/listimportjobscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/listimportjobscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/listimportjobscommandoutput.html)

</details>
<details>
<summary>
ListRecommendations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/listrecommendationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/listrecommendationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/listrecommendationscommandoutput.html)

</details>
<details>
<summary>
ListSuppressedDestinations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/listsuppresseddestinationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/listsuppresseddestinationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/listsuppresseddestinationscommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
PutAccountDedicatedIpWarmupAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/putaccountdedicatedipwarmupattributescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/putaccountdedicatedipwarmupattributescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/putaccountdedicatedipwarmupattributescommandoutput.html)

</details>
<details>
<summary>
PutAccountDetails
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/putaccountdetailscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/putaccountdetailscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/putaccountdetailscommandoutput.html)

</details>
<details>
<summary>
PutAccountSendingAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/putaccountsendingattributescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/putaccountsendingattributescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/putaccountsendingattributescommandoutput.html)

</details>
<details>
<summary>
PutAccountSuppressionAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/putaccountsuppressionattributescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/putaccountsuppressionattributescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/putaccountsuppressionattributescommandoutput.html)

</details>
<details>
<summary>
PutAccountVdmAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/putaccountvdmattributescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/putaccountvdmattributescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/putaccountvdmattributescommandoutput.html)

</details>
<details>
<summary>
PutConfigurationSetDeliveryOptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/putconfigurationsetdeliveryoptionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/putconfigurationsetdeliveryoptionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/putconfigurationsetdeliveryoptionscommandoutput.html)

</details>
<details>
<summary>
PutConfigurationSetReputationOptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/putconfigurationsetreputationoptionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/putconfigurationsetreputationoptionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/putconfigurationsetreputationoptionscommandoutput.html)

</details>
<details>
<summary>
PutConfigurationSetSendingOptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/putconfigurationsetsendingoptionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/putconfigurationsetsendingoptionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/putconfigurationsetsendingoptionscommandoutput.html)

</details>
<details>
<summary>
PutConfigurationSetSuppressionOptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/putconfigurationsetsuppressionoptionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/putconfigurationsetsuppressionoptionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/putconfigurationsetsuppressionoptionscommandoutput.html)

</details>
<details>
<summary>
PutConfigurationSetTrackingOptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/putconfigurationsettrackingoptionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/putconfigurationsettrackingoptionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/putconfigurationsettrackingoptionscommandoutput.html)

</details>
<details>
<summary>
PutConfigurationSetVdmOptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/putconfigurationsetvdmoptionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/putconfigurationsetvdmoptionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/putconfigurationsetvdmoptionscommandoutput.html)

</details>
<details>
<summary>
PutDedicatedIpInPool
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/putdedicatedipinpoolcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/putdedicatedipinpoolcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/putdedicatedipinpoolcommandoutput.html)

</details>
<details>
<summary>
PutDedicatedIpPoolScalingAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/putdedicatedippoolscalingattributescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/putdedicatedippoolscalingattributescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/putdedicatedippoolscalingattributescommandoutput.html)

</details>
<details>
<summary>
PutDedicatedIpWarmupAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/putdedicatedipwarmupattributescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/putdedicatedipwarmupattributescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/putdedicatedipwarmupattributescommandoutput.html)

</details>
<details>
<summary>
PutDeliverabilityDashboardOption
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/putdeliverabilitydashboardoptioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/putdeliverabilitydashboardoptioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/putdeliverabilitydashboardoptioncommandoutput.html)

</details>
<details>
<summary>
PutEmailIdentityConfigurationSetAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/putemailidentityconfigurationsetattributescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/putemailidentityconfigurationsetattributescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/putemailidentityconfigurationsetattributescommandoutput.html)

</details>
<details>
<summary>
PutEmailIdentityDkimAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/putemailidentitydkimattributescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/putemailidentitydkimattributescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/putemailidentitydkimattributescommandoutput.html)

</details>
<details>
<summary>
PutEmailIdentityDkimSigningAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/putemailidentitydkimsigningattributescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/putemailidentitydkimsigningattributescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/putemailidentitydkimsigningattributescommandoutput.html)

</details>
<details>
<summary>
PutEmailIdentityFeedbackAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/putemailidentityfeedbackattributescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/putemailidentityfeedbackattributescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/putemailidentityfeedbackattributescommandoutput.html)

</details>
<details>
<summary>
PutEmailIdentityMailFromAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/putemailidentitymailfromattributescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/putemailidentitymailfromattributescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/putemailidentitymailfromattributescommandoutput.html)

</details>
<details>
<summary>
PutSuppressedDestination
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/putsuppresseddestinationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/putsuppresseddestinationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/putsuppresseddestinationcommandoutput.html)

</details>
<details>
<summary>
SendBulkEmail
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/sendbulkemailcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/sendbulkemailcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/sendbulkemailcommandoutput.html)

</details>
<details>
<summary>
SendCustomVerificationEmail
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/sendcustomverificationemailcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/sendcustomverificationemailcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/sendcustomverificationemailcommandoutput.html)

</details>
<details>
<summary>
SendEmail
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/sendemailcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/sendemailcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/sendemailcommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
TestRenderEmailTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/testrenderemailtemplatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/testrenderemailtemplatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/testrenderemailtemplatecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateConfigurationSetEventDestination
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/updateconfigurationseteventdestinationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/updateconfigurationseteventdestinationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/updateconfigurationseteventdestinationcommandoutput.html)

</details>
<details>
<summary>
UpdateContact
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/updatecontactcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/updatecontactcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/updatecontactcommandoutput.html)

</details>
<details>
<summary>
UpdateContactList
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/updatecontactlistcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/updatecontactlistcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/updatecontactlistcommandoutput.html)

</details>
<details>
<summary>
UpdateCustomVerificationEmailTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/updatecustomverificationemailtemplatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/updatecustomverificationemailtemplatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/updatecustomverificationemailtemplatecommandoutput.html)

</details>
<details>
<summary>
UpdateEmailIdentityPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/updateemailidentitypolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/updateemailidentitypolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/updateemailidentitypolicycommandoutput.html)

</details>
<details>
<summary>
UpdateEmailTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/classes/updateemailtemplatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/updateemailtemplatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/interfaces/updateemailtemplatecommandoutput.html)

</details>
