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
DeleteTextMessageSpendLimitOverride
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/deletetextmessagespendlimitoverridecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/deletetextmessagespendlimitoverridecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/deletetextmessagespendlimitoverridecommandoutput.html)

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
DisassociateOriginationIdentity
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/disassociateoriginationidentitycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/disassociateoriginationidentitycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/disassociateoriginationidentitycommandoutput.html)

</details>
<details>
<summary>
ListPoolOriginationIdentities
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/listpooloriginationidentitiescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/listpooloriginationidentitiescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/listpooloriginationidentitiescommandoutput.html)

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
ReleasePhoneNumber
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/releasephonenumbercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/releasephonenumbercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/releasephonenumbercommandoutput.html)

</details>
<details>
<summary>
RequestPhoneNumber
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/classes/requestphonenumbercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/requestphonenumbercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint-sms-voice-v2/interfaces/requestphonenumbercommandoutput.html)

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
