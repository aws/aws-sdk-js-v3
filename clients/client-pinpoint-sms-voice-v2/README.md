<!-- generated file, do not edit directly -->

# @aws-sdk/client-pinpoint-sms-voice-v2

## Description

AWS SDK for JavaScript PinpointSMSVoiceV2 Client for Node.js, Browser and React Native.

<p>Welcome to the <i>Amazon Pinpoint SMS and Voice, version 2 API Reference</i>.
This guide provides information about Amazon Pinpoint SMS and Voice, version 2 API
resources, including supported HTTP methods, parameters, and schemas.</p>
<p>Amazon Pinpoint is an Amazon Web Services service that you can use to engage with
your recipients across multiple messaging channels. The Amazon Pinpoint SMS and
Voice, version 2 API provides programmatic access to options that are unique to the SMS
and voice channels and supplements the resources provided by the Amazon Pinpoint
API.</p>
<p>If you're new to Amazon Pinpoint, it's also helpful to review the <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/welcome.html">
Amazon Pinpoint Developer Guide</a>. The <i>Amazon Pinpoint
Developer Guide</i> provides tutorials, code samples, and procedures that
demonstrate how to use Amazon Pinpoint features programmatically and how to integrate
Amazon Pinpoint functionality into mobile apps and other types of applications.
The guide also provides key information, such as Amazon Pinpoint integration with
other Amazon Web Services services, and the quotas that apply to use of the
service.</p>
<p>
<b>Regional availability</b>
</p>
<p>The <i>Amazon Pinpoint SMS and Voice, version 2 API Reference</i> is
available in several Amazon Web Services Regions and it provides an endpoint for each of
these Regions. For a list of all the Regions and endpoints where the API is currently
available, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#pinpoint_region">Amazon Web Services Service Endpoints</a> and <a href="https://docs.aws.amazon.com/general/latest/gr/pinpoint.html">Amazon Pinpoint
endpoints and quotas</a> in the Amazon Web Services General Reference. To
learn more about Amazon Web Services Regions, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande-manage.html">Managing
Amazon Web Services Regions</a> in the Amazon Web Services General
Reference.</p>
<p>In each Region, Amazon Web Services maintains multiple Availability Zones. These
Availability Zones are physically isolated from each other, but are united by private,
low-latency, high-throughput, and highly redundant network connections. These
Availability Zones enable us to provide very high levels of availability and redundancy,
while also minimizing latency. To learn more about the number of Availability Zones that
are available in each Region, see <a href="https://aws.amazon.com/about-aws/global-infrastructure/">Amazon Web Services
Global Infrastructure.</a>
</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-pinpoint-sms-voice-v2
using your favorite package manager:

- `npm install @aws-sdk/client-pinpoint-sms-voice-v2`
- `yarn add @aws-sdk/client-pinpoint-sms-voice-v2`
- `pnpm add @aws-sdk/client-pinpoint-sms-voice-v2`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `PinpointSMSVoiceV2Client` and
the commands you need, for example `ListTagsForResourceCommand`:

```js
// ES5 example
const { PinpointSMSVoiceV2Client, ListTagsForResourceCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2");
```

```ts
// ES6+ example
import { PinpointSMSVoiceV2Client, ListTagsForResourceCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new PinpointSMSVoiceV2Client({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListTagsForResourceCommand(params);
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
import * as AWS from "@aws-sdk/client-pinpoint-sms-voice-v2";
const client = new AWS.PinpointSMSVoiceV2({ region: "REGION" });

// async/await.
try {
  const data = await client.listTagsForResource(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listTagsForResource(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listTagsForResource(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-pinpoint-sms-voice-v2` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AssociateOriginationIdentity
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/associateoriginationidentitycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/associateoriginationidentitycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/associateoriginationidentitycommandoutput.html)

</details>
<details>
<summary>
CreateConfigurationSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/createconfigurationsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/createconfigurationsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/createconfigurationsetcommandoutput.html)

</details>
<details>
<summary>
CreateEventDestination
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/createeventdestinationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/createeventdestinationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/createeventdestinationcommandoutput.html)

</details>
<details>
<summary>
CreateOptOutList
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/createoptoutlistcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/createoptoutlistcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/createoptoutlistcommandoutput.html)

</details>
<details>
<summary>
CreatePool
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/createpoolcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/createpoolcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/createpoolcommandoutput.html)

</details>
<details>
<summary>
CreateRegistration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/createregistrationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/createregistrationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/createregistrationcommandoutput.html)

</details>
<details>
<summary>
CreateRegistrationAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/createregistrationassociationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/createregistrationassociationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/createregistrationassociationcommandoutput.html)

</details>
<details>
<summary>
CreateRegistrationAttachment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/createregistrationattachmentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/createregistrationattachmentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/createregistrationattachmentcommandoutput.html)

</details>
<details>
<summary>
CreateRegistrationVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/createregistrationversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/createregistrationversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/createregistrationversioncommandoutput.html)

</details>
<details>
<summary>
CreateVerifiedDestinationNumber
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/createverifieddestinationnumbercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/createverifieddestinationnumbercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/createverifieddestinationnumbercommandoutput.html)

</details>
<details>
<summary>
DeleteConfigurationSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/deleteconfigurationsetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/deleteconfigurationsetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/deleteconfigurationsetcommandoutput.html)

</details>
<details>
<summary>
DeleteDefaultMessageType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/deletedefaultmessagetypecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/deletedefaultmessagetypecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/deletedefaultmessagetypecommandoutput.html)

</details>
<details>
<summary>
DeleteDefaultSenderId
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/deletedefaultsenderidcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/deletedefaultsenderidcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/deletedefaultsenderidcommandoutput.html)

</details>
<details>
<summary>
DeleteEventDestination
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/deleteeventdestinationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/deleteeventdestinationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/deleteeventdestinationcommandoutput.html)

</details>
<details>
<summary>
DeleteKeyword
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/deletekeywordcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/deletekeywordcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/deletekeywordcommandoutput.html)

</details>
<details>
<summary>
DeleteOptedOutNumber
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/deleteoptedoutnumbercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/deleteoptedoutnumbercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/deleteoptedoutnumbercommandoutput.html)

</details>
<details>
<summary>
DeleteOptOutList
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/deleteoptoutlistcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/deleteoptoutlistcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/deleteoptoutlistcommandoutput.html)

</details>
<details>
<summary>
DeletePool
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/deletepoolcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/deletepoolcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/deletepoolcommandoutput.html)

</details>
<details>
<summary>
DeleteRegistration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/deleteregistrationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/deleteregistrationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/deleteregistrationcommandoutput.html)

</details>
<details>
<summary>
DeleteRegistrationAttachment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/deleteregistrationattachmentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/deleteregistrationattachmentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/deleteregistrationattachmentcommandoutput.html)

</details>
<details>
<summary>
DeleteRegistrationFieldValue
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/deleteregistrationfieldvaluecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/deleteregistrationfieldvaluecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/deleteregistrationfieldvaluecommandoutput.html)

</details>
<details>
<summary>
DeleteTextMessageSpendLimitOverride
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/deletetextmessagespendlimitoverridecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/deletetextmessagespendlimitoverridecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/deletetextmessagespendlimitoverridecommandoutput.html)

</details>
<details>
<summary>
DeleteVerifiedDestinationNumber
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/deleteverifieddestinationnumbercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/deleteverifieddestinationnumbercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/deleteverifieddestinationnumbercommandoutput.html)

</details>
<details>
<summary>
DeleteVoiceMessageSpendLimitOverride
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/deletevoicemessagespendlimitoverridecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/deletevoicemessagespendlimitoverridecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/deletevoicemessagespendlimitoverridecommandoutput.html)

</details>
<details>
<summary>
DescribeAccountAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/describeaccountattributescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/describeaccountattributescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/describeaccountattributescommandoutput.html)

</details>
<details>
<summary>
DescribeAccountLimits
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/describeaccountlimitscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/describeaccountlimitscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/describeaccountlimitscommandoutput.html)

</details>
<details>
<summary>
DescribeConfigurationSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/describeconfigurationsetscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/describeconfigurationsetscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/describeconfigurationsetscommandoutput.html)

</details>
<details>
<summary>
DescribeKeywords
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/describekeywordscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/describekeywordscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/describekeywordscommandoutput.html)

</details>
<details>
<summary>
DescribeOptedOutNumbers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/describeoptedoutnumberscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/describeoptedoutnumberscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/describeoptedoutnumberscommandoutput.html)

</details>
<details>
<summary>
DescribeOptOutLists
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/describeoptoutlistscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/describeoptoutlistscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/describeoptoutlistscommandoutput.html)

</details>
<details>
<summary>
DescribePhoneNumbers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/describephonenumberscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/describephonenumberscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/describephonenumberscommandoutput.html)

</details>
<details>
<summary>
DescribePools
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/describepoolscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/describepoolscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/describepoolscommandoutput.html)

</details>
<details>
<summary>
DescribeRegistrationAttachments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/describeregistrationattachmentscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/describeregistrationattachmentscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/describeregistrationattachmentscommandoutput.html)

</details>
<details>
<summary>
DescribeRegistrationFieldDefinitions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/describeregistrationfielddefinitionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/describeregistrationfielddefinitionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/describeregistrationfielddefinitionscommandoutput.html)

</details>
<details>
<summary>
DescribeRegistrationFieldValues
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/describeregistrationfieldvaluescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/describeregistrationfieldvaluescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/describeregistrationfieldvaluescommandoutput.html)

</details>
<details>
<summary>
DescribeRegistrations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/describeregistrationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/describeregistrationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/describeregistrationscommandoutput.html)

</details>
<details>
<summary>
DescribeRegistrationSectionDefinitions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/describeregistrationsectiondefinitionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/describeregistrationsectiondefinitionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/describeregistrationsectiondefinitionscommandoutput.html)

</details>
<details>
<summary>
DescribeRegistrationTypeDefinitions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/describeregistrationtypedefinitionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/describeregistrationtypedefinitionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/describeregistrationtypedefinitionscommandoutput.html)

</details>
<details>
<summary>
DescribeRegistrationVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/describeregistrationversionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/describeregistrationversionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/describeregistrationversionscommandoutput.html)

</details>
<details>
<summary>
DescribeSenderIds
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/describesenderidscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/describesenderidscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/describesenderidscommandoutput.html)

</details>
<details>
<summary>
DescribeSpendLimits
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/describespendlimitscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/describespendlimitscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/describespendlimitscommandoutput.html)

</details>
<details>
<summary>
DescribeVerifiedDestinationNumbers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/describeverifieddestinationnumberscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/describeverifieddestinationnumberscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/describeverifieddestinationnumberscommandoutput.html)

</details>
<details>
<summary>
DisassociateOriginationIdentity
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/disassociateoriginationidentitycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/disassociateoriginationidentitycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/disassociateoriginationidentitycommandoutput.html)

</details>
<details>
<summary>
DiscardRegistrationVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/discardregistrationversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/discardregistrationversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/discardregistrationversioncommandoutput.html)

</details>
<details>
<summary>
ListPoolOriginationIdentities
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/listpooloriginationidentitiescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/listpooloriginationidentitiescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/listpooloriginationidentitiescommandoutput.html)

</details>
<details>
<summary>
ListRegistrationAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/listregistrationassociationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/listregistrationassociationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/listregistrationassociationscommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
PutKeyword
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/putkeywordcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/putkeywordcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/putkeywordcommandoutput.html)

</details>
<details>
<summary>
PutOptedOutNumber
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/putoptedoutnumbercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/putoptedoutnumbercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/putoptedoutnumbercommandoutput.html)

</details>
<details>
<summary>
PutRegistrationFieldValue
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/putregistrationfieldvaluecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/putregistrationfieldvaluecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/putregistrationfieldvaluecommandoutput.html)

</details>
<details>
<summary>
ReleasePhoneNumber
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/releasephonenumbercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/releasephonenumbercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/releasephonenumbercommandoutput.html)

</details>
<details>
<summary>
ReleaseSenderId
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/releasesenderidcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/releasesenderidcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/releasesenderidcommandoutput.html)

</details>
<details>
<summary>
RequestPhoneNumber
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/requestphonenumbercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/requestphonenumbercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/requestphonenumbercommandoutput.html)

</details>
<details>
<summary>
RequestSenderId
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/requestsenderidcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/requestsenderidcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/requestsenderidcommandoutput.html)

</details>
<details>
<summary>
SendDestinationNumberVerificationCode
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/senddestinationnumberverificationcodecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/senddestinationnumberverificationcodecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/senddestinationnumberverificationcodecommandoutput.html)

</details>
<details>
<summary>
SendTextMessage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/sendtextmessagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/sendtextmessagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/sendtextmessagecommandoutput.html)

</details>
<details>
<summary>
SendVoiceMessage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/sendvoicemessagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/sendvoicemessagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/sendvoicemessagecommandoutput.html)

</details>
<details>
<summary>
SetDefaultMessageType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/setdefaultmessagetypecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/setdefaultmessagetypecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/setdefaultmessagetypecommandoutput.html)

</details>
<details>
<summary>
SetDefaultSenderId
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/setdefaultsenderidcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/setdefaultsenderidcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/setdefaultsenderidcommandoutput.html)

</details>
<details>
<summary>
SetTextMessageSpendLimitOverride
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/settextmessagespendlimitoverridecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/settextmessagespendlimitoverridecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/settextmessagespendlimitoverridecommandoutput.html)

</details>
<details>
<summary>
SetVoiceMessageSpendLimitOverride
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/setvoicemessagespendlimitoverridecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/setvoicemessagespendlimitoverridecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/setvoicemessagespendlimitoverridecommandoutput.html)

</details>
<details>
<summary>
SubmitRegistrationVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/submitregistrationversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/submitregistrationversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/submitregistrationversioncommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateEventDestination
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/updateeventdestinationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/updateeventdestinationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/updateeventdestinationcommandoutput.html)

</details>
<details>
<summary>
UpdatePhoneNumber
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/updatephonenumbercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/updatephonenumbercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/updatephonenumbercommandoutput.html)

</details>
<details>
<summary>
UpdatePool
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/updatepoolcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/updatepoolcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/updatepoolcommandoutput.html)

</details>
<details>
<summary>
UpdateSenderId
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/updatesenderidcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/updatesenderidcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/updatesenderidcommandoutput.html)

</details>
<details>
<summary>
VerifyDestinationNumber
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/verifydestinationnumbercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/verifydestinationnumbercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/verifydestinationnumbercommandoutput.html)

</details>
