<!-- generated file, do not edit directly -->

# @aws-sdk/client-chime-sdk-voice

## Description

AWS SDK for JavaScript ChimeSDKVoice Client for Node.js, Browser and React Native.

<p>The Amazon Chime SDK telephony APIs in this section enable developers to create PSTN calling solutions that use Amazon Chime SDK Voice Connectors, and Amazon Chime SDK SIP media applications. Developers can
also order and manage phone numbers, create and manage Voice Connectors and SIP media applications, and run voice analytics.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-chime-sdk-voice
using your favorite package manager:

- `npm install @aws-sdk/client-chime-sdk-voice`
- `yarn add @aws-sdk/client-chime-sdk-voice`
- `pnpm add @aws-sdk/client-chime-sdk-voice`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `ChimeSDKVoiceClient` and
the commands you need, for example `AssociatePhoneNumbersWithVoiceConnectorCommand`:

```js
// ES5 example
const {
  ChimeSDKVoiceClient,
  AssociatePhoneNumbersWithVoiceConnectorCommand,
} = require("@aws-sdk/client-chime-sdk-voice");
```

```ts
// ES6+ example
import { ChimeSDKVoiceClient, AssociatePhoneNumbersWithVoiceConnectorCommand } from "@aws-sdk/client-chime-sdk-voice";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new ChimeSDKVoiceClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new AssociatePhoneNumbersWithVoiceConnectorCommand(params);
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
import * as AWS from "@aws-sdk/client-chime-sdk-voice";
const client = new AWS.ChimeSDKVoice({ region: "REGION" });

// async/await.
try {
  const data = await client.associatePhoneNumbersWithVoiceConnector(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .associatePhoneNumbersWithVoiceConnector(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.associatePhoneNumbersWithVoiceConnector(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-chime-sdk-voice` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AssociatePhoneNumbersWithVoiceConnector
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/associatephonenumberswithvoiceconnectorcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/associatephonenumberswithvoiceconnectorcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/associatephonenumberswithvoiceconnectorcommandoutput.html)

</details>
<details>
<summary>
AssociatePhoneNumbersWithVoiceConnectorGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/associatephonenumberswithvoiceconnectorgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/associatephonenumberswithvoiceconnectorgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/associatephonenumberswithvoiceconnectorgroupcommandoutput.html)

</details>
<details>
<summary>
BatchDeletePhoneNumber
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/batchdeletephonenumbercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/batchdeletephonenumbercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/batchdeletephonenumbercommandoutput.html)

</details>
<details>
<summary>
BatchUpdatePhoneNumber
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/batchupdatephonenumbercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/batchupdatephonenumbercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/batchupdatephonenumbercommandoutput.html)

</details>
<details>
<summary>
CreatePhoneNumberOrder
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/createphonenumberordercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/createphonenumberordercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/createphonenumberordercommandoutput.html)

</details>
<details>
<summary>
CreateProxySession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/createproxysessioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/createproxysessioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/createproxysessioncommandoutput.html)

</details>
<details>
<summary>
CreateSipMediaApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/createsipmediaapplicationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/createsipmediaapplicationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/createsipmediaapplicationcommandoutput.html)

</details>
<details>
<summary>
CreateSipMediaApplicationCall
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/createsipmediaapplicationcallcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/createsipmediaapplicationcallcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/createsipmediaapplicationcallcommandoutput.html)

</details>
<details>
<summary>
CreateSipRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/createsiprulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/createsiprulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/createsiprulecommandoutput.html)

</details>
<details>
<summary>
CreateVoiceConnector
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/createvoiceconnectorcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/createvoiceconnectorcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/createvoiceconnectorcommandoutput.html)

</details>
<details>
<summary>
CreateVoiceConnectorGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/createvoiceconnectorgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/createvoiceconnectorgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/createvoiceconnectorgroupcommandoutput.html)

</details>
<details>
<summary>
CreateVoiceProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/createvoiceprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/createvoiceprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/createvoiceprofilecommandoutput.html)

</details>
<details>
<summary>
CreateVoiceProfileDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/createvoiceprofiledomaincommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/createvoiceprofiledomaincommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/createvoiceprofiledomaincommandoutput.html)

</details>
<details>
<summary>
DeletePhoneNumber
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/deletephonenumbercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/deletephonenumbercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/deletephonenumbercommandoutput.html)

</details>
<details>
<summary>
DeleteProxySession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/deleteproxysessioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/deleteproxysessioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/deleteproxysessioncommandoutput.html)

</details>
<details>
<summary>
DeleteSipMediaApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/deletesipmediaapplicationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/deletesipmediaapplicationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/deletesipmediaapplicationcommandoutput.html)

</details>
<details>
<summary>
DeleteSipRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/deletesiprulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/deletesiprulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/deletesiprulecommandoutput.html)

</details>
<details>
<summary>
DeleteVoiceConnector
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/deletevoiceconnectorcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/deletevoiceconnectorcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/deletevoiceconnectorcommandoutput.html)

</details>
<details>
<summary>
DeleteVoiceConnectorEmergencyCallingConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/deletevoiceconnectoremergencycallingconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/deletevoiceconnectoremergencycallingconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/deletevoiceconnectoremergencycallingconfigurationcommandoutput.html)

</details>
<details>
<summary>
DeleteVoiceConnectorGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/deletevoiceconnectorgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/deletevoiceconnectorgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/deletevoiceconnectorgroupcommandoutput.html)

</details>
<details>
<summary>
DeleteVoiceConnectorOrigination
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/deletevoiceconnectororiginationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/deletevoiceconnectororiginationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/deletevoiceconnectororiginationcommandoutput.html)

</details>
<details>
<summary>
DeleteVoiceConnectorProxy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/deletevoiceconnectorproxycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/deletevoiceconnectorproxycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/deletevoiceconnectorproxycommandoutput.html)

</details>
<details>
<summary>
DeleteVoiceConnectorStreamingConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/deletevoiceconnectorstreamingconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/deletevoiceconnectorstreamingconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/deletevoiceconnectorstreamingconfigurationcommandoutput.html)

</details>
<details>
<summary>
DeleteVoiceConnectorTermination
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/deletevoiceconnectorterminationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/deletevoiceconnectorterminationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/deletevoiceconnectorterminationcommandoutput.html)

</details>
<details>
<summary>
DeleteVoiceConnectorTerminationCredentials
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/deletevoiceconnectorterminationcredentialscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/deletevoiceconnectorterminationcredentialscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/deletevoiceconnectorterminationcredentialscommandoutput.html)

</details>
<details>
<summary>
DeleteVoiceProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/deletevoiceprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/deletevoiceprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/deletevoiceprofilecommandoutput.html)

</details>
<details>
<summary>
DeleteVoiceProfileDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/deletevoiceprofiledomaincommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/deletevoiceprofiledomaincommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/deletevoiceprofiledomaincommandoutput.html)

</details>
<details>
<summary>
DisassociatePhoneNumbersFromVoiceConnector
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/disassociatephonenumbersfromvoiceconnectorcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/disassociatephonenumbersfromvoiceconnectorcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/disassociatephonenumbersfromvoiceconnectorcommandoutput.html)

</details>
<details>
<summary>
DisassociatePhoneNumbersFromVoiceConnectorGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/disassociatephonenumbersfromvoiceconnectorgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/disassociatephonenumbersfromvoiceconnectorgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/disassociatephonenumbersfromvoiceconnectorgroupcommandoutput.html)

</details>
<details>
<summary>
GetGlobalSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/getglobalsettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/getglobalsettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/getglobalsettingscommandoutput.html)

</details>
<details>
<summary>
GetPhoneNumber
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/getphonenumbercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/getphonenumbercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/getphonenumbercommandoutput.html)

</details>
<details>
<summary>
GetPhoneNumberOrder
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/getphonenumberordercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/getphonenumberordercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/getphonenumberordercommandoutput.html)

</details>
<details>
<summary>
GetPhoneNumberSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/getphonenumbersettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/getphonenumbersettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/getphonenumbersettingscommandoutput.html)

</details>
<details>
<summary>
GetProxySession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/getproxysessioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/getproxysessioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/getproxysessioncommandoutput.html)

</details>
<details>
<summary>
GetSipMediaApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/getsipmediaapplicationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/getsipmediaapplicationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/getsipmediaapplicationcommandoutput.html)

</details>
<details>
<summary>
GetSipMediaApplicationAlexaSkillConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/getsipmediaapplicationalexaskillconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/getsipmediaapplicationalexaskillconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/getsipmediaapplicationalexaskillconfigurationcommandoutput.html)

</details>
<details>
<summary>
GetSipMediaApplicationLoggingConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/getsipmediaapplicationloggingconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/getsipmediaapplicationloggingconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/getsipmediaapplicationloggingconfigurationcommandoutput.html)

</details>
<details>
<summary>
GetSipRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/getsiprulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/getsiprulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/getsiprulecommandoutput.html)

</details>
<details>
<summary>
GetSpeakerSearchTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/getspeakersearchtaskcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/getspeakersearchtaskcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/getspeakersearchtaskcommandoutput.html)

</details>
<details>
<summary>
GetVoiceConnector
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/getvoiceconnectorcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/getvoiceconnectorcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/getvoiceconnectorcommandoutput.html)

</details>
<details>
<summary>
GetVoiceConnectorEmergencyCallingConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/getvoiceconnectoremergencycallingconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/getvoiceconnectoremergencycallingconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/getvoiceconnectoremergencycallingconfigurationcommandoutput.html)

</details>
<details>
<summary>
GetVoiceConnectorGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/getvoiceconnectorgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/getvoiceconnectorgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/getvoiceconnectorgroupcommandoutput.html)

</details>
<details>
<summary>
GetVoiceConnectorLoggingConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/getvoiceconnectorloggingconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/getvoiceconnectorloggingconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/getvoiceconnectorloggingconfigurationcommandoutput.html)

</details>
<details>
<summary>
GetVoiceConnectorOrigination
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/getvoiceconnectororiginationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/getvoiceconnectororiginationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/getvoiceconnectororiginationcommandoutput.html)

</details>
<details>
<summary>
GetVoiceConnectorProxy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/getvoiceconnectorproxycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/getvoiceconnectorproxycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/getvoiceconnectorproxycommandoutput.html)

</details>
<details>
<summary>
GetVoiceConnectorStreamingConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/getvoiceconnectorstreamingconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/getvoiceconnectorstreamingconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/getvoiceconnectorstreamingconfigurationcommandoutput.html)

</details>
<details>
<summary>
GetVoiceConnectorTermination
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/getvoiceconnectorterminationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/getvoiceconnectorterminationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/getvoiceconnectorterminationcommandoutput.html)

</details>
<details>
<summary>
GetVoiceConnectorTerminationHealth
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/getvoiceconnectorterminationhealthcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/getvoiceconnectorterminationhealthcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/getvoiceconnectorterminationhealthcommandoutput.html)

</details>
<details>
<summary>
GetVoiceProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/getvoiceprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/getvoiceprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/getvoiceprofilecommandoutput.html)

</details>
<details>
<summary>
GetVoiceProfileDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/getvoiceprofiledomaincommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/getvoiceprofiledomaincommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/getvoiceprofiledomaincommandoutput.html)

</details>
<details>
<summary>
GetVoiceToneAnalysisTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/getvoicetoneanalysistaskcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/getvoicetoneanalysistaskcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/getvoicetoneanalysistaskcommandoutput.html)

</details>
<details>
<summary>
ListAvailableVoiceConnectorRegions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/listavailablevoiceconnectorregionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/listavailablevoiceconnectorregionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/listavailablevoiceconnectorregionscommandoutput.html)

</details>
<details>
<summary>
ListPhoneNumberOrders
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/listphonenumberorderscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/listphonenumberorderscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/listphonenumberorderscommandoutput.html)

</details>
<details>
<summary>
ListPhoneNumbers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/listphonenumberscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/listphonenumberscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/listphonenumberscommandoutput.html)

</details>
<details>
<summary>
ListProxySessions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/listproxysessionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/listproxysessionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/listproxysessionscommandoutput.html)

</details>
<details>
<summary>
ListSipMediaApplications
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/listsipmediaapplicationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/listsipmediaapplicationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/listsipmediaapplicationscommandoutput.html)

</details>
<details>
<summary>
ListSipRules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/listsiprulescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/listsiprulescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/listsiprulescommandoutput.html)

</details>
<details>
<summary>
ListSupportedPhoneNumberCountries
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/listsupportedphonenumbercountriescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/listsupportedphonenumbercountriescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/listsupportedphonenumbercountriescommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
ListVoiceConnectorGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/listvoiceconnectorgroupscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/listvoiceconnectorgroupscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/listvoiceconnectorgroupscommandoutput.html)

</details>
<details>
<summary>
ListVoiceConnectors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/listvoiceconnectorscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/listvoiceconnectorscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/listvoiceconnectorscommandoutput.html)

</details>
<details>
<summary>
ListVoiceConnectorTerminationCredentials
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/listvoiceconnectorterminationcredentialscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/listvoiceconnectorterminationcredentialscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/listvoiceconnectorterminationcredentialscommandoutput.html)

</details>
<details>
<summary>
ListVoiceProfileDomains
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/listvoiceprofiledomainscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/listvoiceprofiledomainscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/listvoiceprofiledomainscommandoutput.html)

</details>
<details>
<summary>
ListVoiceProfiles
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/listvoiceprofilescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/listvoiceprofilescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/listvoiceprofilescommandoutput.html)

</details>
<details>
<summary>
PutSipMediaApplicationAlexaSkillConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/putsipmediaapplicationalexaskillconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/putsipmediaapplicationalexaskillconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/putsipmediaapplicationalexaskillconfigurationcommandoutput.html)

</details>
<details>
<summary>
PutSipMediaApplicationLoggingConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/putsipmediaapplicationloggingconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/putsipmediaapplicationloggingconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/putsipmediaapplicationloggingconfigurationcommandoutput.html)

</details>
<details>
<summary>
PutVoiceConnectorEmergencyCallingConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/putvoiceconnectoremergencycallingconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/putvoiceconnectoremergencycallingconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/putvoiceconnectoremergencycallingconfigurationcommandoutput.html)

</details>
<details>
<summary>
PutVoiceConnectorLoggingConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/putvoiceconnectorloggingconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/putvoiceconnectorloggingconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/putvoiceconnectorloggingconfigurationcommandoutput.html)

</details>
<details>
<summary>
PutVoiceConnectorOrigination
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/putvoiceconnectororiginationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/putvoiceconnectororiginationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/putvoiceconnectororiginationcommandoutput.html)

</details>
<details>
<summary>
PutVoiceConnectorProxy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/putvoiceconnectorproxycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/putvoiceconnectorproxycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/putvoiceconnectorproxycommandoutput.html)

</details>
<details>
<summary>
PutVoiceConnectorStreamingConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/putvoiceconnectorstreamingconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/putvoiceconnectorstreamingconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/putvoiceconnectorstreamingconfigurationcommandoutput.html)

</details>
<details>
<summary>
PutVoiceConnectorTermination
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/putvoiceconnectorterminationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/putvoiceconnectorterminationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/putvoiceconnectorterminationcommandoutput.html)

</details>
<details>
<summary>
PutVoiceConnectorTerminationCredentials
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/putvoiceconnectorterminationcredentialscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/putvoiceconnectorterminationcredentialscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/putvoiceconnectorterminationcredentialscommandoutput.html)

</details>
<details>
<summary>
RestorePhoneNumber
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/restorephonenumbercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/restorephonenumbercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/restorephonenumbercommandoutput.html)

</details>
<details>
<summary>
SearchAvailablePhoneNumbers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/searchavailablephonenumberscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/searchavailablephonenumberscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/searchavailablephonenumberscommandoutput.html)

</details>
<details>
<summary>
StartSpeakerSearchTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/startspeakersearchtaskcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/startspeakersearchtaskcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/startspeakersearchtaskcommandoutput.html)

</details>
<details>
<summary>
StartVoiceToneAnalysisTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/startvoicetoneanalysistaskcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/startvoicetoneanalysistaskcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/startvoicetoneanalysistaskcommandoutput.html)

</details>
<details>
<summary>
StopSpeakerSearchTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/stopspeakersearchtaskcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/stopspeakersearchtaskcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/stopspeakersearchtaskcommandoutput.html)

</details>
<details>
<summary>
StopVoiceToneAnalysisTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/stopvoicetoneanalysistaskcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/stopvoicetoneanalysistaskcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/stopvoicetoneanalysistaskcommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateGlobalSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/updateglobalsettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/updateglobalsettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/updateglobalsettingscommandoutput.html)

</details>
<details>
<summary>
UpdatePhoneNumber
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/updatephonenumbercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/updatephonenumbercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/updatephonenumbercommandoutput.html)

</details>
<details>
<summary>
UpdatePhoneNumberSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/updatephonenumbersettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/updatephonenumbersettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/updatephonenumbersettingscommandoutput.html)

</details>
<details>
<summary>
UpdateProxySession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/updateproxysessioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/updateproxysessioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/updateproxysessioncommandoutput.html)

</details>
<details>
<summary>
UpdateSipMediaApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/updatesipmediaapplicationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/updatesipmediaapplicationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/updatesipmediaapplicationcommandoutput.html)

</details>
<details>
<summary>
UpdateSipMediaApplicationCall
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/updatesipmediaapplicationcallcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/updatesipmediaapplicationcallcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/updatesipmediaapplicationcallcommandoutput.html)

</details>
<details>
<summary>
UpdateSipRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/updatesiprulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/updatesiprulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/updatesiprulecommandoutput.html)

</details>
<details>
<summary>
UpdateVoiceConnector
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/updatevoiceconnectorcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/updatevoiceconnectorcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/updatevoiceconnectorcommandoutput.html)

</details>
<details>
<summary>
UpdateVoiceConnectorGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/updatevoiceconnectorgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/updatevoiceconnectorgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/updatevoiceconnectorgroupcommandoutput.html)

</details>
<details>
<summary>
UpdateVoiceProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/updatevoiceprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/updatevoiceprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/updatevoiceprofilecommandoutput.html)

</details>
<details>
<summary>
UpdateVoiceProfileDomain
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/updatevoiceprofiledomaincommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/updatevoiceprofiledomaincommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/updatevoiceprofiledomaincommandoutput.html)

</details>
<details>
<summary>
ValidateE911Address
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/classes/validatee911addresscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/validatee911addresscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-voice/interfaces/validatee911addresscommandoutput.html)

</details>
