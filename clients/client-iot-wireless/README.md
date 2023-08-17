<!-- generated file, do not edit directly -->

# @aws-sdk/client-iot-wireless

## Description

AWS SDK for JavaScript IoTWireless Client for Node.js, Browser and React Native.

<p>AWS IoT Wireless provides bi-directional communication between internet-connected
wireless devices and the AWS Cloud. To onboard both LoRaWAN and Sidewalk devices to AWS
IoT, use the IoT Wireless API. These wireless devices use the Low Power Wide Area
Networking (LPWAN) communication protocol to communicate with AWS IoT.</p>
<p>Using the API, you can perform create, read, update, and delete operations for your
wireless devices, gateways, destinations, and profiles. After onboarding your devices,
you can use the API operations to set log levels and monitor your devices with
CloudWatch.</p>
<p>You can also use the API operations to create multicast groups and schedule a
multicast session for sending a downlink message to devices in the group. By using
Firmware Updates Over-The-Air (FUOTA) API operations, you can create a FUOTA task and
schedule a session to update the firmware of individual devices or an entire group of
devices in a multicast group.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-iot-wireless
using your favorite package manager:

- `npm install @aws-sdk/client-iot-wireless`
- `yarn add @aws-sdk/client-iot-wireless`
- `pnpm add @aws-sdk/client-iot-wireless`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `IoTWirelessClient` and
the commands you need, for example `AssociateAwsAccountWithPartnerAccountCommand`:

```js
// ES5 example
const { IoTWirelessClient, AssociateAwsAccountWithPartnerAccountCommand } = require("@aws-sdk/client-iot-wireless");
```

```ts
// ES6+ example
import { IoTWirelessClient, AssociateAwsAccountWithPartnerAccountCommand } from "@aws-sdk/client-iot-wireless";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new IoTWirelessClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new AssociateAwsAccountWithPartnerAccountCommand(params);
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
import * as AWS from "@aws-sdk/client-iot-wireless";
const client = new AWS.IoTWireless({ region: "REGION" });

// async/await.
try {
  const data = await client.associateAwsAccountWithPartnerAccount(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .associateAwsAccountWithPartnerAccount(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.associateAwsAccountWithPartnerAccount(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-iot-wireless` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AssociateAwsAccountWithPartnerAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/associateawsaccountwithpartneraccountcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/associateawsaccountwithpartneraccountcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/associateawsaccountwithpartneraccountcommandoutput.html)

</details>
<details>
<summary>
AssociateMulticastGroupWithFuotaTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/associatemulticastgroupwithfuotataskcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/associatemulticastgroupwithfuotataskcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/associatemulticastgroupwithfuotataskcommandoutput.html)

</details>
<details>
<summary>
AssociateWirelessDeviceWithFuotaTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/associatewirelessdevicewithfuotataskcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/associatewirelessdevicewithfuotataskcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/associatewirelessdevicewithfuotataskcommandoutput.html)

</details>
<details>
<summary>
AssociateWirelessDeviceWithMulticastGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/associatewirelessdevicewithmulticastgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/associatewirelessdevicewithmulticastgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/associatewirelessdevicewithmulticastgroupcommandoutput.html)

</details>
<details>
<summary>
AssociateWirelessDeviceWithThing
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/associatewirelessdevicewiththingcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/associatewirelessdevicewiththingcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/associatewirelessdevicewiththingcommandoutput.html)

</details>
<details>
<summary>
AssociateWirelessGatewayWithCertificate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/associatewirelessgatewaywithcertificatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/associatewirelessgatewaywithcertificatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/associatewirelessgatewaywithcertificatecommandoutput.html)

</details>
<details>
<summary>
AssociateWirelessGatewayWithThing
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/associatewirelessgatewaywiththingcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/associatewirelessgatewaywiththingcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/associatewirelessgatewaywiththingcommandoutput.html)

</details>
<details>
<summary>
CancelMulticastGroupSession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/cancelmulticastgroupsessioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/cancelmulticastgroupsessioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/cancelmulticastgroupsessioncommandoutput.html)

</details>
<details>
<summary>
CreateDestination
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/createdestinationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/createdestinationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/createdestinationcommandoutput.html)

</details>
<details>
<summary>
CreateDeviceProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/createdeviceprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/createdeviceprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/createdeviceprofilecommandoutput.html)

</details>
<details>
<summary>
CreateFuotaTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/createfuotataskcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/createfuotataskcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/createfuotataskcommandoutput.html)

</details>
<details>
<summary>
CreateMulticastGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/createmulticastgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/createmulticastgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/createmulticastgroupcommandoutput.html)

</details>
<details>
<summary>
CreateNetworkAnalyzerConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/createnetworkanalyzerconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/createnetworkanalyzerconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/createnetworkanalyzerconfigurationcommandoutput.html)

</details>
<details>
<summary>
CreateServiceProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/createserviceprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/createserviceprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/createserviceprofilecommandoutput.html)

</details>
<details>
<summary>
CreateWirelessDevice
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/createwirelessdevicecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/createwirelessdevicecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/createwirelessdevicecommandoutput.html)

</details>
<details>
<summary>
CreateWirelessGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/createwirelessgatewaycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/createwirelessgatewaycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/createwirelessgatewaycommandoutput.html)

</details>
<details>
<summary>
CreateWirelessGatewayTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/createwirelessgatewaytaskcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/createwirelessgatewaytaskcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/createwirelessgatewaytaskcommandoutput.html)

</details>
<details>
<summary>
CreateWirelessGatewayTaskDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/createwirelessgatewaytaskdefinitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/createwirelessgatewaytaskdefinitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/createwirelessgatewaytaskdefinitioncommandoutput.html)

</details>
<details>
<summary>
DeleteDestination
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/deletedestinationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/deletedestinationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/deletedestinationcommandoutput.html)

</details>
<details>
<summary>
DeleteDeviceProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/deletedeviceprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/deletedeviceprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/deletedeviceprofilecommandoutput.html)

</details>
<details>
<summary>
DeleteFuotaTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/deletefuotataskcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/deletefuotataskcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/deletefuotataskcommandoutput.html)

</details>
<details>
<summary>
DeleteMulticastGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/deletemulticastgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/deletemulticastgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/deletemulticastgroupcommandoutput.html)

</details>
<details>
<summary>
DeleteNetworkAnalyzerConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/deletenetworkanalyzerconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/deletenetworkanalyzerconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/deletenetworkanalyzerconfigurationcommandoutput.html)

</details>
<details>
<summary>
DeleteQueuedMessages
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/deletequeuedmessagescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/deletequeuedmessagescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/deletequeuedmessagescommandoutput.html)

</details>
<details>
<summary>
DeleteServiceProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/deleteserviceprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/deleteserviceprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/deleteserviceprofilecommandoutput.html)

</details>
<details>
<summary>
DeleteWirelessDevice
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/deletewirelessdevicecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/deletewirelessdevicecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/deletewirelessdevicecommandoutput.html)

</details>
<details>
<summary>
DeleteWirelessDeviceImportTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/deletewirelessdeviceimporttaskcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/deletewirelessdeviceimporttaskcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/deletewirelessdeviceimporttaskcommandoutput.html)

</details>
<details>
<summary>
DeleteWirelessGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/deletewirelessgatewaycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/deletewirelessgatewaycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/deletewirelessgatewaycommandoutput.html)

</details>
<details>
<summary>
DeleteWirelessGatewayTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/deletewirelessgatewaytaskcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/deletewirelessgatewaytaskcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/deletewirelessgatewaytaskcommandoutput.html)

</details>
<details>
<summary>
DeleteWirelessGatewayTaskDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/deletewirelessgatewaytaskdefinitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/deletewirelessgatewaytaskdefinitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/deletewirelessgatewaytaskdefinitioncommandoutput.html)

</details>
<details>
<summary>
DeregisterWirelessDevice
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/deregisterwirelessdevicecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/deregisterwirelessdevicecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/deregisterwirelessdevicecommandoutput.html)

</details>
<details>
<summary>
DisassociateAwsAccountFromPartnerAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/disassociateawsaccountfrompartneraccountcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/disassociateawsaccountfrompartneraccountcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/disassociateawsaccountfrompartneraccountcommandoutput.html)

</details>
<details>
<summary>
DisassociateMulticastGroupFromFuotaTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/disassociatemulticastgroupfromfuotataskcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/disassociatemulticastgroupfromfuotataskcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/disassociatemulticastgroupfromfuotataskcommandoutput.html)

</details>
<details>
<summary>
DisassociateWirelessDeviceFromFuotaTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/disassociatewirelessdevicefromfuotataskcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/disassociatewirelessdevicefromfuotataskcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/disassociatewirelessdevicefromfuotataskcommandoutput.html)

</details>
<details>
<summary>
DisassociateWirelessDeviceFromMulticastGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/disassociatewirelessdevicefrommulticastgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/disassociatewirelessdevicefrommulticastgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/disassociatewirelessdevicefrommulticastgroupcommandoutput.html)

</details>
<details>
<summary>
DisassociateWirelessDeviceFromThing
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/disassociatewirelessdevicefromthingcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/disassociatewirelessdevicefromthingcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/disassociatewirelessdevicefromthingcommandoutput.html)

</details>
<details>
<summary>
DisassociateWirelessGatewayFromCertificate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/disassociatewirelessgatewayfromcertificatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/disassociatewirelessgatewayfromcertificatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/disassociatewirelessgatewayfromcertificatecommandoutput.html)

</details>
<details>
<summary>
DisassociateWirelessGatewayFromThing
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/disassociatewirelessgatewayfromthingcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/disassociatewirelessgatewayfromthingcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/disassociatewirelessgatewayfromthingcommandoutput.html)

</details>
<details>
<summary>
GetDestination
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/getdestinationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/getdestinationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/getdestinationcommandoutput.html)

</details>
<details>
<summary>
GetDeviceProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/getdeviceprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/getdeviceprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/getdeviceprofilecommandoutput.html)

</details>
<details>
<summary>
GetEventConfigurationByResourceTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/geteventconfigurationbyresourcetypescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/geteventconfigurationbyresourcetypescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/geteventconfigurationbyresourcetypescommandoutput.html)

</details>
<details>
<summary>
GetFuotaTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/getfuotataskcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/getfuotataskcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/getfuotataskcommandoutput.html)

</details>
<details>
<summary>
GetLogLevelsByResourceTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/getloglevelsbyresourcetypescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/getloglevelsbyresourcetypescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/getloglevelsbyresourcetypescommandoutput.html)

</details>
<details>
<summary>
GetMulticastGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/getmulticastgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/getmulticastgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/getmulticastgroupcommandoutput.html)

</details>
<details>
<summary>
GetMulticastGroupSession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/getmulticastgroupsessioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/getmulticastgroupsessioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/getmulticastgroupsessioncommandoutput.html)

</details>
<details>
<summary>
GetNetworkAnalyzerConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/getnetworkanalyzerconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/getnetworkanalyzerconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/getnetworkanalyzerconfigurationcommandoutput.html)

</details>
<details>
<summary>
GetPartnerAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/getpartneraccountcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/getpartneraccountcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/getpartneraccountcommandoutput.html)

</details>
<details>
<summary>
GetPosition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/getpositioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/getpositioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/getpositioncommandoutput.html)

</details>
<details>
<summary>
GetPositionConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/getpositionconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/getpositionconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/getpositionconfigurationcommandoutput.html)

</details>
<details>
<summary>
GetPositionEstimate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/getpositionestimatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/getpositionestimatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/getpositionestimatecommandoutput.html)

</details>
<details>
<summary>
GetResourceEventConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/getresourceeventconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/getresourceeventconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/getresourceeventconfigurationcommandoutput.html)

</details>
<details>
<summary>
GetResourceLogLevel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/getresourceloglevelcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/getresourceloglevelcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/getresourceloglevelcommandoutput.html)

</details>
<details>
<summary>
GetResourcePosition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/getresourcepositioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/getresourcepositioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/getresourcepositioncommandoutput.html)

</details>
<details>
<summary>
GetServiceEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/getserviceendpointcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/getserviceendpointcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/getserviceendpointcommandoutput.html)

</details>
<details>
<summary>
GetServiceProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/getserviceprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/getserviceprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/getserviceprofilecommandoutput.html)

</details>
<details>
<summary>
GetWirelessDevice
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/getwirelessdevicecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/getwirelessdevicecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/getwirelessdevicecommandoutput.html)

</details>
<details>
<summary>
GetWirelessDeviceImportTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/getwirelessdeviceimporttaskcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/getwirelessdeviceimporttaskcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/getwirelessdeviceimporttaskcommandoutput.html)

</details>
<details>
<summary>
GetWirelessDeviceStatistics
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/getwirelessdevicestatisticscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/getwirelessdevicestatisticscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/getwirelessdevicestatisticscommandoutput.html)

</details>
<details>
<summary>
GetWirelessGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/getwirelessgatewaycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/getwirelessgatewaycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/getwirelessgatewaycommandoutput.html)

</details>
<details>
<summary>
GetWirelessGatewayCertificate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/getwirelessgatewaycertificatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/getwirelessgatewaycertificatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/getwirelessgatewaycertificatecommandoutput.html)

</details>
<details>
<summary>
GetWirelessGatewayFirmwareInformation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/getwirelessgatewayfirmwareinformationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/getwirelessgatewayfirmwareinformationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/getwirelessgatewayfirmwareinformationcommandoutput.html)

</details>
<details>
<summary>
GetWirelessGatewayStatistics
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/getwirelessgatewaystatisticscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/getwirelessgatewaystatisticscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/getwirelessgatewaystatisticscommandoutput.html)

</details>
<details>
<summary>
GetWirelessGatewayTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/getwirelessgatewaytaskcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/getwirelessgatewaytaskcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/getwirelessgatewaytaskcommandoutput.html)

</details>
<details>
<summary>
GetWirelessGatewayTaskDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/getwirelessgatewaytaskdefinitioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/getwirelessgatewaytaskdefinitioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/getwirelessgatewaytaskdefinitioncommandoutput.html)

</details>
<details>
<summary>
ListDestinations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/listdestinationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/listdestinationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/listdestinationscommandoutput.html)

</details>
<details>
<summary>
ListDeviceProfiles
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/listdeviceprofilescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/listdeviceprofilescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/listdeviceprofilescommandoutput.html)

</details>
<details>
<summary>
ListDevicesForWirelessDeviceImportTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/listdevicesforwirelessdeviceimporttaskcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/listdevicesforwirelessdeviceimporttaskcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/listdevicesforwirelessdeviceimporttaskcommandoutput.html)

</details>
<details>
<summary>
ListEventConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/listeventconfigurationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/listeventconfigurationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/listeventconfigurationscommandoutput.html)

</details>
<details>
<summary>
ListFuotaTasks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/listfuotataskscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/listfuotataskscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/listfuotataskscommandoutput.html)

</details>
<details>
<summary>
ListMulticastGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/listmulticastgroupscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/listmulticastgroupscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/listmulticastgroupscommandoutput.html)

</details>
<details>
<summary>
ListMulticastGroupsByFuotaTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/listmulticastgroupsbyfuotataskcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/listmulticastgroupsbyfuotataskcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/listmulticastgroupsbyfuotataskcommandoutput.html)

</details>
<details>
<summary>
ListNetworkAnalyzerConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/listnetworkanalyzerconfigurationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/listnetworkanalyzerconfigurationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/listnetworkanalyzerconfigurationscommandoutput.html)

</details>
<details>
<summary>
ListPartnerAccounts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/listpartneraccountscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/listpartneraccountscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/listpartneraccountscommandoutput.html)

</details>
<details>
<summary>
ListPositionConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/listpositionconfigurationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/listpositionconfigurationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/listpositionconfigurationscommandoutput.html)

</details>
<details>
<summary>
ListQueuedMessages
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/listqueuedmessagescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/listqueuedmessagescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/listqueuedmessagescommandoutput.html)

</details>
<details>
<summary>
ListServiceProfiles
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/listserviceprofilescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/listserviceprofilescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/listserviceprofilescommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
ListWirelessDeviceImportTasks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/listwirelessdeviceimporttaskscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/listwirelessdeviceimporttaskscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/listwirelessdeviceimporttaskscommandoutput.html)

</details>
<details>
<summary>
ListWirelessDevices
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/listwirelessdevicescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/listwirelessdevicescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/listwirelessdevicescommandoutput.html)

</details>
<details>
<summary>
ListWirelessGateways
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/listwirelessgatewayscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/listwirelessgatewayscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/listwirelessgatewayscommandoutput.html)

</details>
<details>
<summary>
ListWirelessGatewayTaskDefinitions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/listwirelessgatewaytaskdefinitionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/listwirelessgatewaytaskdefinitionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/listwirelessgatewaytaskdefinitionscommandoutput.html)

</details>
<details>
<summary>
PutPositionConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/putpositionconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/putpositionconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/putpositionconfigurationcommandoutput.html)

</details>
<details>
<summary>
PutResourceLogLevel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/putresourceloglevelcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/putresourceloglevelcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/putresourceloglevelcommandoutput.html)

</details>
<details>
<summary>
ResetAllResourceLogLevels
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/resetallresourceloglevelscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/resetallresourceloglevelscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/resetallresourceloglevelscommandoutput.html)

</details>
<details>
<summary>
ResetResourceLogLevel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/resetresourceloglevelcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/resetresourceloglevelcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/resetresourceloglevelcommandoutput.html)

</details>
<details>
<summary>
SendDataToMulticastGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/senddatatomulticastgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/senddatatomulticastgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/senddatatomulticastgroupcommandoutput.html)

</details>
<details>
<summary>
SendDataToWirelessDevice
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/senddatatowirelessdevicecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/senddatatowirelessdevicecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/senddatatowirelessdevicecommandoutput.html)

</details>
<details>
<summary>
StartBulkAssociateWirelessDeviceWithMulticastGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/startbulkassociatewirelessdevicewithmulticastgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/startbulkassociatewirelessdevicewithmulticastgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/startbulkassociatewirelessdevicewithmulticastgroupcommandoutput.html)

</details>
<details>
<summary>
StartBulkDisassociateWirelessDeviceFromMulticastGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/startbulkdisassociatewirelessdevicefrommulticastgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/startbulkdisassociatewirelessdevicefrommulticastgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/startbulkdisassociatewirelessdevicefrommulticastgroupcommandoutput.html)

</details>
<details>
<summary>
StartFuotaTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/startfuotataskcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/startfuotataskcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/startfuotataskcommandoutput.html)

</details>
<details>
<summary>
StartMulticastGroupSession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/startmulticastgroupsessioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/startmulticastgroupsessioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/startmulticastgroupsessioncommandoutput.html)

</details>
<details>
<summary>
StartSingleWirelessDeviceImportTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/startsinglewirelessdeviceimporttaskcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/startsinglewirelessdeviceimporttaskcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/startsinglewirelessdeviceimporttaskcommandoutput.html)

</details>
<details>
<summary>
StartWirelessDeviceImportTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/startwirelessdeviceimporttaskcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/startwirelessdeviceimporttaskcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/startwirelessdeviceimporttaskcommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
TestWirelessDevice
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/testwirelessdevicecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/testwirelessdevicecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/testwirelessdevicecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateDestination
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/updatedestinationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/updatedestinationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/updatedestinationcommandoutput.html)

</details>
<details>
<summary>
UpdateEventConfigurationByResourceTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/updateeventconfigurationbyresourcetypescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/updateeventconfigurationbyresourcetypescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/updateeventconfigurationbyresourcetypescommandoutput.html)

</details>
<details>
<summary>
UpdateFuotaTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/updatefuotataskcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/updatefuotataskcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/updatefuotataskcommandoutput.html)

</details>
<details>
<summary>
UpdateLogLevelsByResourceTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/updateloglevelsbyresourcetypescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/updateloglevelsbyresourcetypescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/updateloglevelsbyresourcetypescommandoutput.html)

</details>
<details>
<summary>
UpdateMulticastGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/updatemulticastgroupcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/updatemulticastgroupcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/updatemulticastgroupcommandoutput.html)

</details>
<details>
<summary>
UpdateNetworkAnalyzerConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/updatenetworkanalyzerconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/updatenetworkanalyzerconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/updatenetworkanalyzerconfigurationcommandoutput.html)

</details>
<details>
<summary>
UpdatePartnerAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/updatepartneraccountcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/updatepartneraccountcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/updatepartneraccountcommandoutput.html)

</details>
<details>
<summary>
UpdatePosition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/updatepositioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/updatepositioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/updatepositioncommandoutput.html)

</details>
<details>
<summary>
UpdateResourceEventConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/updateresourceeventconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/updateresourceeventconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/updateresourceeventconfigurationcommandoutput.html)

</details>
<details>
<summary>
UpdateResourcePosition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/updateresourcepositioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/updateresourcepositioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/updateresourcepositioncommandoutput.html)

</details>
<details>
<summary>
UpdateWirelessDevice
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/updatewirelessdevicecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/updatewirelessdevicecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/updatewirelessdevicecommandoutput.html)

</details>
<details>
<summary>
UpdateWirelessDeviceImportTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/updatewirelessdeviceimporttaskcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/updatewirelessdeviceimporttaskcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/updatewirelessdeviceimporttaskcommandoutput.html)

</details>
<details>
<summary>
UpdateWirelessGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/classes/updatewirelessgatewaycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/updatewirelessgatewaycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iot-wireless/interfaces/updatewirelessgatewaycommandoutput.html)

</details>
