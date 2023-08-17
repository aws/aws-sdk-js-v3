<!-- generated file, do not edit directly -->

# @aws-sdk/client-pinpoint-email

## Description

AWS SDK for JavaScript PinpointEmail Client for Node.js, Browser and React Native.

<fullname>Amazon Pinpoint Email Service</fullname>

<p>Welcome to the <i>Amazon Pinpoint Email API Reference</i>. This guide provides
information about the Amazon Pinpoint Email API (version 1.0), including supported
operations, data types, parameters, and schemas.</p>
<p>
<a href="https://aws.amazon.com/pinpoint">Amazon Pinpoint</a> is an AWS service that you
can use to engage with your customers across multiple messaging channels. You can use
Amazon Pinpoint to send email, SMS text messages, voice messages, and push notifications. The
Amazon Pinpoint Email API provides programmatic access to options that are unique to the
email channel and supplement the options provided by the Amazon Pinpoint API.</p>
<p>If you're new to Amazon Pinpoint, you might find it helpful to also review the <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/welcome.html">Amazon
Pinpoint Developer Guide</a>. The <i>Amazon Pinpoint Developer
Guide</i> provides tutorials, code samples, and procedures that demonstrate
how to use Amazon Pinpoint features programmatically and how to integrate Amazon Pinpoint functionality into
mobile apps and other types of applications. The guide also provides information about
key topics such as Amazon Pinpoint integration with other AWS services and the limits that apply
to using the service.</p>
<p>The Amazon Pinpoint Email API is available in several AWS Regions and it provides an endpoint
for each of these Regions. For a list of all the Regions and endpoints where the API is
currently available, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#pinpoint_region">AWS Service Endpoints</a> in
the <i>Amazon Web Services General Reference</i>. To learn more about AWS Regions, see
<a href="https://docs.aws.amazon.com/general/latest/gr/rande-manage.html">Managing AWS
Regions</a> in the <i>Amazon Web Services General Reference</i>.</p>
<p>In each Region, AWS maintains multiple Availability Zones. These Availability Zones
are physically isolated from each other, but are united by private, low-latency,
high-throughput, and highly redundant network connections. These Availability Zones
enable us to provide very high levels of availability and redundancy, while also
minimizing latency. To learn more about the number of Availability Zones that are
available in each Region, see <a href="http://aws.amazon.com/about-aws/global-infrastructure/">AWS Global Infrastructure</a>.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-pinpoint-email
using your favorite package manager:

- `npm install @aws-sdk/client-pinpoint-email`
- `yarn add @aws-sdk/client-pinpoint-email`
- `pnpm add @aws-sdk/client-pinpoint-email`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `PinpointEmailClient` and
the commands you need, for example `CreateConfigurationSetCommand`:

```js
// ES5 example
const { PinpointEmailClient, CreateConfigurationSetCommand } = require("@aws-sdk/client-pinpoint-email");
```

```ts
// ES6+ example
import { PinpointEmailClient, CreateConfigurationSetCommand } from "@aws-sdk/client-pinpoint-email";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new PinpointEmailClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new CreateConfigurationSetCommand(params);
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
import * as AWS from "@aws-sdk/client-pinpoint-email";
const client = new AWS.PinpointEmail({ region: "REGION" });

// async/await.
try {
  const data = await client.createConfigurationSet(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .createConfigurationSet(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.createConfigurationSet(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-pinpoint-email` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CreateConfigurationSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/classes/createconfigurationsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/createconfigurationsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/createconfigurationsetcommandoutput.html)

</details>
<details>
<summary>
CreateConfigurationSetEventDestination
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/classes/createconfigurationseteventdestinationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/createconfigurationseteventdestinationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/createconfigurationseteventdestinationcommandoutput.html)

</details>
<details>
<summary>
CreateDedicatedIpPool
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/classes/creatededicatedippoolcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/creatededicatedippoolcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/creatededicatedippoolcommandoutput.html)

</details>
<details>
<summary>
CreateDeliverabilityTestReport
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/classes/createdeliverabilitytestreportcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/createdeliverabilitytestreportcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/createdeliverabilitytestreportcommandoutput.html)

</details>
<details>
<summary>
CreateEmailIdentity
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/classes/createemailidentitycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/createemailidentitycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/createemailidentitycommandoutput.html)

</details>
<details>
<summary>
DeleteConfigurationSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/classes/deleteconfigurationsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/deleteconfigurationsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/deleteconfigurationsetcommandoutput.html)

</details>
<details>
<summary>
DeleteConfigurationSetEventDestination
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/classes/deleteconfigurationseteventdestinationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/deleteconfigurationseteventdestinationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/deleteconfigurationseteventdestinationcommandoutput.html)

</details>
<details>
<summary>
DeleteDedicatedIpPool
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/classes/deletededicatedippoolcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/deletededicatedippoolcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/deletededicatedippoolcommandoutput.html)

</details>
<details>
<summary>
DeleteEmailIdentity
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/classes/deleteemailidentitycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/deleteemailidentitycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/deleteemailidentitycommandoutput.html)

</details>
<details>
<summary>
GetAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/classes/getaccountcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/getaccountcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/getaccountcommandoutput.html)

</details>
<details>
<summary>
GetBlacklistReports
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/classes/getblacklistreportscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/getblacklistreportscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/getblacklistreportscommandoutput.html)

</details>
<details>
<summary>
GetConfigurationSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/classes/getconfigurationsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/getconfigurationsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/getconfigurationsetcommandoutput.html)

</details>
<details>
<summary>
GetConfigurationSetEventDestinations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/classes/getconfigurationseteventdestinationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/getconfigurationseteventdestinationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/getconfigurationseteventdestinationscommandoutput.html)

</details>
<details>
<summary>
GetDedicatedIp
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/classes/getdedicatedipcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/getdedicatedipcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/getdedicatedipcommandoutput.html)

</details>
<details>
<summary>
GetDedicatedIps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/classes/getdedicatedipscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/getdedicatedipscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/getdedicatedipscommandoutput.html)

</details>
<details>
<summary>
GetDeliverabilityDashboardOptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/classes/getdeliverabilitydashboardoptionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/getdeliverabilitydashboardoptionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/getdeliverabilitydashboardoptionscommandoutput.html)

</details>
<details>
<summary>
GetDeliverabilityTestReport
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/classes/getdeliverabilitytestreportcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/getdeliverabilitytestreportcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/getdeliverabilitytestreportcommandoutput.html)

</details>
<details>
<summary>
GetDomainDeliverabilityCampaign
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/classes/getdomaindeliverabilitycampaigncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/getdomaindeliverabilitycampaigncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/getdomaindeliverabilitycampaigncommandoutput.html)

</details>
<details>
<summary>
GetDomainStatisticsReport
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/classes/getdomainstatisticsreportcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/getdomainstatisticsreportcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/getdomainstatisticsreportcommandoutput.html)

</details>
<details>
<summary>
GetEmailIdentity
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/classes/getemailidentitycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/getemailidentitycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/getemailidentitycommandoutput.html)

</details>
<details>
<summary>
ListConfigurationSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/classes/listconfigurationsetscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/listconfigurationsetscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/listconfigurationsetscommandoutput.html)

</details>
<details>
<summary>
ListDedicatedIpPools
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/classes/listdedicatedippoolscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/listdedicatedippoolscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/listdedicatedippoolscommandoutput.html)

</details>
<details>
<summary>
ListDeliverabilityTestReports
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/classes/listdeliverabilitytestreportscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/listdeliverabilitytestreportscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/listdeliverabilitytestreportscommandoutput.html)

</details>
<details>
<summary>
ListDomainDeliverabilityCampaigns
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/classes/listdomaindeliverabilitycampaignscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/listdomaindeliverabilitycampaignscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/listdomaindeliverabilitycampaignscommandoutput.html)

</details>
<details>
<summary>
ListEmailIdentities
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/classes/listemailidentitiescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/listemailidentitiescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/listemailidentitiescommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
PutAccountDedicatedIpWarmupAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/classes/putaccountdedicatedipwarmupattributescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/putaccountdedicatedipwarmupattributescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/putaccountdedicatedipwarmupattributescommandoutput.html)

</details>
<details>
<summary>
PutAccountSendingAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/classes/putaccountsendingattributescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/putaccountsendingattributescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/putaccountsendingattributescommandoutput.html)

</details>
<details>
<summary>
PutConfigurationSetDeliveryOptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/classes/putconfigurationsetdeliveryoptionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/putconfigurationsetdeliveryoptionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/putconfigurationsetdeliveryoptionscommandoutput.html)

</details>
<details>
<summary>
PutConfigurationSetReputationOptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/classes/putconfigurationsetreputationoptionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/putconfigurationsetreputationoptionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/putconfigurationsetreputationoptionscommandoutput.html)

</details>
<details>
<summary>
PutConfigurationSetSendingOptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/classes/putconfigurationsetsendingoptionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/putconfigurationsetsendingoptionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/putconfigurationsetsendingoptionscommandoutput.html)

</details>
<details>
<summary>
PutConfigurationSetTrackingOptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/classes/putconfigurationsettrackingoptionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/putconfigurationsettrackingoptionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/putconfigurationsettrackingoptionscommandoutput.html)

</details>
<details>
<summary>
PutDedicatedIpInPool
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/classes/putdedicatedipinpoolcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/putdedicatedipinpoolcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/putdedicatedipinpoolcommandoutput.html)

</details>
<details>
<summary>
PutDedicatedIpWarmupAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/classes/putdedicatedipwarmupattributescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/putdedicatedipwarmupattributescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/putdedicatedipwarmupattributescommandoutput.html)

</details>
<details>
<summary>
PutDeliverabilityDashboardOption
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/classes/putdeliverabilitydashboardoptioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/putdeliverabilitydashboardoptioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/putdeliverabilitydashboardoptioncommandoutput.html)

</details>
<details>
<summary>
PutEmailIdentityDkimAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/classes/putemailidentitydkimattributescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/putemailidentitydkimattributescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/putemailidentitydkimattributescommandoutput.html)

</details>
<details>
<summary>
PutEmailIdentityFeedbackAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/classes/putemailidentityfeedbackattributescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/putemailidentityfeedbackattributescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/putemailidentityfeedbackattributescommandoutput.html)

</details>
<details>
<summary>
PutEmailIdentityMailFromAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/classes/putemailidentitymailfromattributescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/putemailidentitymailfromattributescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/putemailidentitymailfromattributescommandoutput.html)

</details>
<details>
<summary>
SendEmail
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/classes/sendemailcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/sendemailcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/sendemailcommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateConfigurationSetEventDestination
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/classes/updateconfigurationseteventdestinationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/updateconfigurationseteventdestinationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-email/interfaces/updateconfigurationseteventdestinationcommandoutput.html)

</details>
