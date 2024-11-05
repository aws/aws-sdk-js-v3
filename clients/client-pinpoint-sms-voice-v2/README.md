<!-- generated file, do not edit directly -->

# @aws-sdk/client-pinpoint-sms-voice-v2

## Description

AWS SDK for JavaScript PinpointSMSVoiceV2 Client for Node.js, Browser and React Native.

<p>Welcome to the <i>AWS End User Messaging SMS and Voice, version 2 API Reference</i>.
This guide provides information about AWS End User Messaging SMS and Voice, version 2 API
resources, including supported HTTP methods, parameters, and schemas.</p>
<p>Amazon Pinpoint is an Amazon Web Services service that you can use to engage with
your recipients across multiple messaging channels. The AWS End User Messaging SMS and Voice, version 2 API provides programmatic access to options that are unique to the SMS
and voice channels. AWS End User Messaging SMS and Voice, version 2 resources such as phone numbers, sender IDs, and opt-out lists can be used by the Amazon Pinpoint API.</p>
<p>If you're new to AWS End User Messaging SMS and Voice, it's also helpful to review the <a href="https://docs.aws.amazon.com/sms-voice/latest/userguide/what-is-service.html">
AWS End User Messaging SMS User Guide</a>. The <i>AWS End User Messaging SMS User Guide
</i> provides tutorials, code samples, and procedures that
demonstrate how to use AWS End User Messaging SMS and Voice features programmatically and how to integrate
functionality into mobile apps and other types of applications.
The guide also provides key information, such as AWS End User Messaging SMS and Voice integration with
other Amazon Web Services services, and the quotas that apply to use of the
service.</p>
<p>
<b>Regional availability</b>
</p>
<p>The <i>AWS End User Messaging SMS and Voice version 2 API Reference</i> is
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

To install this package, simply type add or install @aws-sdk/client-pinpoint-sms-voice-v2
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/AssociateOriginationIdentityCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/AssociateOriginationIdentityCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/AssociateOriginationIdentityCommandOutput/)

</details>
<details>
<summary>
AssociateProtectConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/AssociateProtectConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/AssociateProtectConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/AssociateProtectConfigurationCommandOutput/)

</details>
<details>
<summary>
CreateConfigurationSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/CreateConfigurationSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/CreateConfigurationSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/CreateConfigurationSetCommandOutput/)

</details>
<details>
<summary>
CreateEventDestination
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/CreateEventDestinationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/CreateEventDestinationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/CreateEventDestinationCommandOutput/)

</details>
<details>
<summary>
CreateOptOutList
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/CreateOptOutListCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/CreateOptOutListCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/CreateOptOutListCommandOutput/)

</details>
<details>
<summary>
CreatePool
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/CreatePoolCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/CreatePoolCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/CreatePoolCommandOutput/)

</details>
<details>
<summary>
CreateProtectConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/CreateProtectConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/CreateProtectConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/CreateProtectConfigurationCommandOutput/)

</details>
<details>
<summary>
CreateRegistration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/CreateRegistrationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/CreateRegistrationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/CreateRegistrationCommandOutput/)

</details>
<details>
<summary>
CreateRegistrationAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/CreateRegistrationAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/CreateRegistrationAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/CreateRegistrationAssociationCommandOutput/)

</details>
<details>
<summary>
CreateRegistrationAttachment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/CreateRegistrationAttachmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/CreateRegistrationAttachmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/CreateRegistrationAttachmentCommandOutput/)

</details>
<details>
<summary>
CreateRegistrationVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/CreateRegistrationVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/CreateRegistrationVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/CreateRegistrationVersionCommandOutput/)

</details>
<details>
<summary>
CreateVerifiedDestinationNumber
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/CreateVerifiedDestinationNumberCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/CreateVerifiedDestinationNumberCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/CreateVerifiedDestinationNumberCommandOutput/)

</details>
<details>
<summary>
DeleteAccountDefaultProtectConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/DeleteAccountDefaultProtectConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DeleteAccountDefaultProtectConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DeleteAccountDefaultProtectConfigurationCommandOutput/)

</details>
<details>
<summary>
DeleteConfigurationSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/DeleteConfigurationSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DeleteConfigurationSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DeleteConfigurationSetCommandOutput/)

</details>
<details>
<summary>
DeleteDefaultMessageType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/DeleteDefaultMessageTypeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DeleteDefaultMessageTypeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DeleteDefaultMessageTypeCommandOutput/)

</details>
<details>
<summary>
DeleteDefaultSenderId
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/DeleteDefaultSenderIdCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DeleteDefaultSenderIdCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DeleteDefaultSenderIdCommandOutput/)

</details>
<details>
<summary>
DeleteEventDestination
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/DeleteEventDestinationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DeleteEventDestinationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DeleteEventDestinationCommandOutput/)

</details>
<details>
<summary>
DeleteKeyword
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/DeleteKeywordCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DeleteKeywordCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DeleteKeywordCommandOutput/)

</details>
<details>
<summary>
DeleteMediaMessageSpendLimitOverride
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/DeleteMediaMessageSpendLimitOverrideCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DeleteMediaMessageSpendLimitOverrideCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DeleteMediaMessageSpendLimitOverrideCommandOutput/)

</details>
<details>
<summary>
DeleteOptedOutNumber
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/DeleteOptedOutNumberCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DeleteOptedOutNumberCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DeleteOptedOutNumberCommandOutput/)

</details>
<details>
<summary>
DeleteOptOutList
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/DeleteOptOutListCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DeleteOptOutListCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DeleteOptOutListCommandOutput/)

</details>
<details>
<summary>
DeletePool
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/DeletePoolCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DeletePoolCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DeletePoolCommandOutput/)

</details>
<details>
<summary>
DeleteProtectConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/DeleteProtectConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DeleteProtectConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DeleteProtectConfigurationCommandOutput/)

</details>
<details>
<summary>
DeleteRegistration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/DeleteRegistrationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DeleteRegistrationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DeleteRegistrationCommandOutput/)

</details>
<details>
<summary>
DeleteRegistrationAttachment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/DeleteRegistrationAttachmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DeleteRegistrationAttachmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DeleteRegistrationAttachmentCommandOutput/)

</details>
<details>
<summary>
DeleteRegistrationFieldValue
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/DeleteRegistrationFieldValueCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DeleteRegistrationFieldValueCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DeleteRegistrationFieldValueCommandOutput/)

</details>
<details>
<summary>
DeleteResourcePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/DeleteResourcePolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DeleteResourcePolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DeleteResourcePolicyCommandOutput/)

</details>
<details>
<summary>
DeleteTextMessageSpendLimitOverride
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/DeleteTextMessageSpendLimitOverrideCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DeleteTextMessageSpendLimitOverrideCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DeleteTextMessageSpendLimitOverrideCommandOutput/)

</details>
<details>
<summary>
DeleteVerifiedDestinationNumber
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/DeleteVerifiedDestinationNumberCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DeleteVerifiedDestinationNumberCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DeleteVerifiedDestinationNumberCommandOutput/)

</details>
<details>
<summary>
DeleteVoiceMessageSpendLimitOverride
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/DeleteVoiceMessageSpendLimitOverrideCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DeleteVoiceMessageSpendLimitOverrideCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DeleteVoiceMessageSpendLimitOverrideCommandOutput/)

</details>
<details>
<summary>
DescribeAccountAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/DescribeAccountAttributesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DescribeAccountAttributesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DescribeAccountAttributesCommandOutput/)

</details>
<details>
<summary>
DescribeAccountLimits
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/DescribeAccountLimitsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DescribeAccountLimitsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DescribeAccountLimitsCommandOutput/)

</details>
<details>
<summary>
DescribeConfigurationSets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/DescribeConfigurationSetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DescribeConfigurationSetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DescribeConfigurationSetsCommandOutput/)

</details>
<details>
<summary>
DescribeKeywords
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/DescribeKeywordsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DescribeKeywordsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DescribeKeywordsCommandOutput/)

</details>
<details>
<summary>
DescribeOptedOutNumbers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/DescribeOptedOutNumbersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DescribeOptedOutNumbersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DescribeOptedOutNumbersCommandOutput/)

</details>
<details>
<summary>
DescribeOptOutLists
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/DescribeOptOutListsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DescribeOptOutListsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DescribeOptOutListsCommandOutput/)

</details>
<details>
<summary>
DescribePhoneNumbers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/DescribePhoneNumbersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DescribePhoneNumbersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DescribePhoneNumbersCommandOutput/)

</details>
<details>
<summary>
DescribePools
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/DescribePoolsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DescribePoolsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DescribePoolsCommandOutput/)

</details>
<details>
<summary>
DescribeProtectConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/DescribeProtectConfigurationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DescribeProtectConfigurationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DescribeProtectConfigurationsCommandOutput/)

</details>
<details>
<summary>
DescribeRegistrationAttachments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/DescribeRegistrationAttachmentsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DescribeRegistrationAttachmentsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DescribeRegistrationAttachmentsCommandOutput/)

</details>
<details>
<summary>
DescribeRegistrationFieldDefinitions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/DescribeRegistrationFieldDefinitionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DescribeRegistrationFieldDefinitionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DescribeRegistrationFieldDefinitionsCommandOutput/)

</details>
<details>
<summary>
DescribeRegistrationFieldValues
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/DescribeRegistrationFieldValuesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DescribeRegistrationFieldValuesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DescribeRegistrationFieldValuesCommandOutput/)

</details>
<details>
<summary>
DescribeRegistrations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/DescribeRegistrationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DescribeRegistrationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DescribeRegistrationsCommandOutput/)

</details>
<details>
<summary>
DescribeRegistrationSectionDefinitions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/DescribeRegistrationSectionDefinitionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DescribeRegistrationSectionDefinitionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DescribeRegistrationSectionDefinitionsCommandOutput/)

</details>
<details>
<summary>
DescribeRegistrationTypeDefinitions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/DescribeRegistrationTypeDefinitionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DescribeRegistrationTypeDefinitionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DescribeRegistrationTypeDefinitionsCommandOutput/)

</details>
<details>
<summary>
DescribeRegistrationVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/DescribeRegistrationVersionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DescribeRegistrationVersionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DescribeRegistrationVersionsCommandOutput/)

</details>
<details>
<summary>
DescribeSenderIds
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/DescribeSenderIdsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DescribeSenderIdsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DescribeSenderIdsCommandOutput/)

</details>
<details>
<summary>
DescribeSpendLimits
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/DescribeSpendLimitsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DescribeSpendLimitsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DescribeSpendLimitsCommandOutput/)

</details>
<details>
<summary>
DescribeVerifiedDestinationNumbers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/DescribeVerifiedDestinationNumbersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DescribeVerifiedDestinationNumbersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DescribeVerifiedDestinationNumbersCommandOutput/)

</details>
<details>
<summary>
DisassociateOriginationIdentity
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/DisassociateOriginationIdentityCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DisassociateOriginationIdentityCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DisassociateOriginationIdentityCommandOutput/)

</details>
<details>
<summary>
DisassociateProtectConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/DisassociateProtectConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DisassociateProtectConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DisassociateProtectConfigurationCommandOutput/)

</details>
<details>
<summary>
DiscardRegistrationVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/DiscardRegistrationVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DiscardRegistrationVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/DiscardRegistrationVersionCommandOutput/)

</details>
<details>
<summary>
GetProtectConfigurationCountryRuleSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/GetProtectConfigurationCountryRuleSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/GetProtectConfigurationCountryRuleSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/GetProtectConfigurationCountryRuleSetCommandOutput/)

</details>
<details>
<summary>
GetResourcePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/GetResourcePolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/GetResourcePolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/GetResourcePolicyCommandOutput/)

</details>
<details>
<summary>
ListPoolOriginationIdentities
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/ListPoolOriginationIdentitiesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/ListPoolOriginationIdentitiesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/ListPoolOriginationIdentitiesCommandOutput/)

</details>
<details>
<summary>
ListRegistrationAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/ListRegistrationAssociationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/ListRegistrationAssociationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/ListRegistrationAssociationsCommandOutput/)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/ListTagsForResourceCommandOutput/)

</details>
<details>
<summary>
PutKeyword
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/PutKeywordCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/PutKeywordCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/PutKeywordCommandOutput/)

</details>
<details>
<summary>
PutOptedOutNumber
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/PutOptedOutNumberCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/PutOptedOutNumberCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/PutOptedOutNumberCommandOutput/)

</details>
<details>
<summary>
PutRegistrationFieldValue
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/PutRegistrationFieldValueCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/PutRegistrationFieldValueCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/PutRegistrationFieldValueCommandOutput/)

</details>
<details>
<summary>
PutResourcePolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/PutResourcePolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/PutResourcePolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/PutResourcePolicyCommandOutput/)

</details>
<details>
<summary>
ReleasePhoneNumber
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/ReleasePhoneNumberCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/ReleasePhoneNumberCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/ReleasePhoneNumberCommandOutput/)

</details>
<details>
<summary>
ReleaseSenderId
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/ReleaseSenderIdCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/ReleaseSenderIdCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/ReleaseSenderIdCommandOutput/)

</details>
<details>
<summary>
RequestPhoneNumber
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/RequestPhoneNumberCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/RequestPhoneNumberCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/RequestPhoneNumberCommandOutput/)

</details>
<details>
<summary>
RequestSenderId
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/RequestSenderIdCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/RequestSenderIdCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/RequestSenderIdCommandOutput/)

</details>
<details>
<summary>
SendDestinationNumberVerificationCode
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/SendDestinationNumberVerificationCodeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/SendDestinationNumberVerificationCodeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/SendDestinationNumberVerificationCodeCommandOutput/)

</details>
<details>
<summary>
SendMediaMessage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/SendMediaMessageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/SendMediaMessageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/SendMediaMessageCommandOutput/)

</details>
<details>
<summary>
SendTextMessage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/SendTextMessageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/SendTextMessageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/SendTextMessageCommandOutput/)

</details>
<details>
<summary>
SendVoiceMessage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/SendVoiceMessageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/SendVoiceMessageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/SendVoiceMessageCommandOutput/)

</details>
<details>
<summary>
SetAccountDefaultProtectConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/SetAccountDefaultProtectConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/SetAccountDefaultProtectConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/SetAccountDefaultProtectConfigurationCommandOutput/)

</details>
<details>
<summary>
SetDefaultMessageType
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/SetDefaultMessageTypeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/SetDefaultMessageTypeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/SetDefaultMessageTypeCommandOutput/)

</details>
<details>
<summary>
SetDefaultSenderId
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/SetDefaultSenderIdCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/SetDefaultSenderIdCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/SetDefaultSenderIdCommandOutput/)

</details>
<details>
<summary>
SetMediaMessageSpendLimitOverride
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/SetMediaMessageSpendLimitOverrideCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/SetMediaMessageSpendLimitOverrideCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/SetMediaMessageSpendLimitOverrideCommandOutput/)

</details>
<details>
<summary>
SetTextMessageSpendLimitOverride
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/SetTextMessageSpendLimitOverrideCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/SetTextMessageSpendLimitOverrideCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/SetTextMessageSpendLimitOverrideCommandOutput/)

</details>
<details>
<summary>
SetVoiceMessageSpendLimitOverride
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/SetVoiceMessageSpendLimitOverrideCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/SetVoiceMessageSpendLimitOverrideCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/SetVoiceMessageSpendLimitOverrideCommandOutput/)

</details>
<details>
<summary>
SubmitRegistrationVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/SubmitRegistrationVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/SubmitRegistrationVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/SubmitRegistrationVersionCommandOutput/)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/TagResourceCommandOutput/)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/UntagResourceCommandOutput/)

</details>
<details>
<summary>
UpdateEventDestination
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/UpdateEventDestinationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/UpdateEventDestinationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/UpdateEventDestinationCommandOutput/)

</details>
<details>
<summary>
UpdatePhoneNumber
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/UpdatePhoneNumberCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/UpdatePhoneNumberCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/UpdatePhoneNumberCommandOutput/)

</details>
<details>
<summary>
UpdatePool
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/UpdatePoolCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/UpdatePoolCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/UpdatePoolCommandOutput/)

</details>
<details>
<summary>
UpdateProtectConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/UpdateProtectConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/UpdateProtectConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/UpdateProtectConfigurationCommandOutput/)

</details>
<details>
<summary>
UpdateProtectConfigurationCountryRuleSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/UpdateProtectConfigurationCountryRuleSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/UpdateProtectConfigurationCountryRuleSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/UpdateProtectConfigurationCountryRuleSetCommandOutput/)

</details>
<details>
<summary>
UpdateSenderId
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/UpdateSenderIdCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/UpdateSenderIdCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/UpdateSenderIdCommandOutput/)

</details>
<details>
<summary>
VerifyDestinationNumber
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pinpoint-sms-voice-v2/command/VerifyDestinationNumberCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/VerifyDestinationNumberCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pinpoint-sms-voice-v2/Interface/VerifyDestinationNumberCommandOutput/)

</details>
