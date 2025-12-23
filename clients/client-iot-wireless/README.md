<!-- generated file, do not edit directly -->

# @aws-sdk/client-iot-wireless

## Description

AWS SDK for JavaScript IoTWireless Client for Node.js, Browser and React Native.

<p>AWS IoT Wireless provides bi-directional communication between internet-connected
wireless devices and the AWS Cloud. To onboard both <a href="https://docs.aws.amazon.com/iot-wireless/latest/developerguide/iot-lorawan.html">LoRaWAN</a> and <a href="https://docs.aws.amazon.com/iot-wireless/latest/developerguide/iot-sidewalk.html">Sidewalk</a> devices to AWS IoT, use the IoT Wireless API. These wireless
devices use the Low Power Wide Area Networking (LPWAN) communication protocol to
communicate with AWS IoT. </p>
<p>Using the API, you can perform create, read, update, and delete operations for your
wireless devices, gateways, destinations, and profiles. After onboarding your devices,
you can use the API operations to set log levels and monitor your devices with
CloudWatch.</p>
<p>You can also use the API operations to create multicast groups and schedule a
multicast session for sending a downlink message to devices in the group. By using
Firmware Updates Over-The-Air (FUOTA) API operations, you can create a FUOTA task and
schedule a session to update the firmware of individual devices or an entire group of
devices in a multicast group.</p>
<p>To connect to the AWS IoT Wireless Service, use the Service endpoints as described in
<a href="https://docs.aws.amazon.com/general/latest/gr/iot-lorawan.html#iot-wireless_region">IoT
Wireless Service endpoints</a>. You can use both IPv4 and IPv6 protocols to connect
to the endpoints and send requests to the AWS IoT Wireless service. For more information,
see <a href="https://docs.aws.amazon.com/iot-wireless/latest/developerguide/wireless-ipv6-access.html">Using
IPv6 with AWS IoT Wireless</a>.</p>

## Installing
To install this package, simply type add or install @aws-sdk/client-iot-wireless
using your favorite package manager:
- `npm install @aws-sdk/client-iot-wireless`
- `yarn add @aws-sdk/client-iot-wireless`
- `pnpm add @aws-sdk/client-iot-wireless`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `IoTWirelessClient` and
the commands you need, for example `ListDestinationsCommand`:

```js
// ES5 example
const { IoTWirelessClient, ListDestinationsCommand } = require("@aws-sdk/client-iot-wireless");
```

```ts
// ES6+ example
import { IoTWirelessClient, ListDestinationsCommand } from "@aws-sdk/client-iot-wireless";
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

const params = { /** input parameters */ };
const command = new ListDestinationsCommand(params);
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
  const data = await client.listDestinations(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listDestinations(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listDestinations(params, (err, data) => {
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/AssociateAwsAccountWithPartnerAccountCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/AssociateAwsAccountWithPartnerAccountCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/AssociateAwsAccountWithPartnerAccountCommandOutput/)
</details>
<details>
<summary>
AssociateMulticastGroupWithFuotaTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/AssociateMulticastGroupWithFuotaTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/AssociateMulticastGroupWithFuotaTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/AssociateMulticastGroupWithFuotaTaskCommandOutput/)
</details>
<details>
<summary>
AssociateWirelessDeviceWithFuotaTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/AssociateWirelessDeviceWithFuotaTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/AssociateWirelessDeviceWithFuotaTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/AssociateWirelessDeviceWithFuotaTaskCommandOutput/)
</details>
<details>
<summary>
AssociateWirelessDeviceWithMulticastGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/AssociateWirelessDeviceWithMulticastGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/AssociateWirelessDeviceWithMulticastGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/AssociateWirelessDeviceWithMulticastGroupCommandOutput/)
</details>
<details>
<summary>
AssociateWirelessDeviceWithThing
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/AssociateWirelessDeviceWithThingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/AssociateWirelessDeviceWithThingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/AssociateWirelessDeviceWithThingCommandOutput/)
</details>
<details>
<summary>
AssociateWirelessGatewayWithCertificate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/AssociateWirelessGatewayWithCertificateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/AssociateWirelessGatewayWithCertificateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/AssociateWirelessGatewayWithCertificateCommandOutput/)
</details>
<details>
<summary>
AssociateWirelessGatewayWithThing
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/AssociateWirelessGatewayWithThingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/AssociateWirelessGatewayWithThingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/AssociateWirelessGatewayWithThingCommandOutput/)
</details>
<details>
<summary>
CancelMulticastGroupSession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/CancelMulticastGroupSessionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/CancelMulticastGroupSessionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/CancelMulticastGroupSessionCommandOutput/)
</details>
<details>
<summary>
CreateDestination
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/CreateDestinationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/CreateDestinationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/CreateDestinationCommandOutput/)
</details>
<details>
<summary>
CreateDeviceProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/CreateDeviceProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/CreateDeviceProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/CreateDeviceProfileCommandOutput/)
</details>
<details>
<summary>
CreateFuotaTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/CreateFuotaTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/CreateFuotaTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/CreateFuotaTaskCommandOutput/)
</details>
<details>
<summary>
CreateMulticastGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/CreateMulticastGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/CreateMulticastGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/CreateMulticastGroupCommandOutput/)
</details>
<details>
<summary>
CreateNetworkAnalyzerConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/CreateNetworkAnalyzerConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/CreateNetworkAnalyzerConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/CreateNetworkAnalyzerConfigurationCommandOutput/)
</details>
<details>
<summary>
CreateServiceProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/CreateServiceProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/CreateServiceProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/CreateServiceProfileCommandOutput/)
</details>
<details>
<summary>
CreateWirelessDevice
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/CreateWirelessDeviceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/CreateWirelessDeviceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/CreateWirelessDeviceCommandOutput/)
</details>
<details>
<summary>
CreateWirelessGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/CreateWirelessGatewayCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/CreateWirelessGatewayCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/CreateWirelessGatewayCommandOutput/)
</details>
<details>
<summary>
CreateWirelessGatewayTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/CreateWirelessGatewayTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/CreateWirelessGatewayTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/CreateWirelessGatewayTaskCommandOutput/)
</details>
<details>
<summary>
CreateWirelessGatewayTaskDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/CreateWirelessGatewayTaskDefinitionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/CreateWirelessGatewayTaskDefinitionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/CreateWirelessGatewayTaskDefinitionCommandOutput/)
</details>
<details>
<summary>
DeleteDestination
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/DeleteDestinationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/DeleteDestinationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/DeleteDestinationCommandOutput/)
</details>
<details>
<summary>
DeleteDeviceProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/DeleteDeviceProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/DeleteDeviceProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/DeleteDeviceProfileCommandOutput/)
</details>
<details>
<summary>
DeleteFuotaTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/DeleteFuotaTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/DeleteFuotaTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/DeleteFuotaTaskCommandOutput/)
</details>
<details>
<summary>
DeleteMulticastGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/DeleteMulticastGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/DeleteMulticastGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/DeleteMulticastGroupCommandOutput/)
</details>
<details>
<summary>
DeleteNetworkAnalyzerConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/DeleteNetworkAnalyzerConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/DeleteNetworkAnalyzerConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/DeleteNetworkAnalyzerConfigurationCommandOutput/)
</details>
<details>
<summary>
DeleteQueuedMessages
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/DeleteQueuedMessagesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/DeleteQueuedMessagesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/DeleteQueuedMessagesCommandOutput/)
</details>
<details>
<summary>
DeleteServiceProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/DeleteServiceProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/DeleteServiceProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/DeleteServiceProfileCommandOutput/)
</details>
<details>
<summary>
DeleteWirelessDevice
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/DeleteWirelessDeviceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/DeleteWirelessDeviceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/DeleteWirelessDeviceCommandOutput/)
</details>
<details>
<summary>
DeleteWirelessDeviceImportTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/DeleteWirelessDeviceImportTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/DeleteWirelessDeviceImportTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/DeleteWirelessDeviceImportTaskCommandOutput/)
</details>
<details>
<summary>
DeleteWirelessGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/DeleteWirelessGatewayCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/DeleteWirelessGatewayCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/DeleteWirelessGatewayCommandOutput/)
</details>
<details>
<summary>
DeleteWirelessGatewayTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/DeleteWirelessGatewayTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/DeleteWirelessGatewayTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/DeleteWirelessGatewayTaskCommandOutput/)
</details>
<details>
<summary>
DeleteWirelessGatewayTaskDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/DeleteWirelessGatewayTaskDefinitionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/DeleteWirelessGatewayTaskDefinitionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/DeleteWirelessGatewayTaskDefinitionCommandOutput/)
</details>
<details>
<summary>
DeregisterWirelessDevice
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/DeregisterWirelessDeviceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/DeregisterWirelessDeviceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/DeregisterWirelessDeviceCommandOutput/)
</details>
<details>
<summary>
DisassociateAwsAccountFromPartnerAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/DisassociateAwsAccountFromPartnerAccountCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/DisassociateAwsAccountFromPartnerAccountCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/DisassociateAwsAccountFromPartnerAccountCommandOutput/)
</details>
<details>
<summary>
DisassociateMulticastGroupFromFuotaTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/DisassociateMulticastGroupFromFuotaTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/DisassociateMulticastGroupFromFuotaTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/DisassociateMulticastGroupFromFuotaTaskCommandOutput/)
</details>
<details>
<summary>
DisassociateWirelessDeviceFromFuotaTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/DisassociateWirelessDeviceFromFuotaTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/DisassociateWirelessDeviceFromFuotaTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/DisassociateWirelessDeviceFromFuotaTaskCommandOutput/)
</details>
<details>
<summary>
DisassociateWirelessDeviceFromMulticastGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/DisassociateWirelessDeviceFromMulticastGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/DisassociateWirelessDeviceFromMulticastGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/DisassociateWirelessDeviceFromMulticastGroupCommandOutput/)
</details>
<details>
<summary>
DisassociateWirelessDeviceFromThing
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/DisassociateWirelessDeviceFromThingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/DisassociateWirelessDeviceFromThingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/DisassociateWirelessDeviceFromThingCommandOutput/)
</details>
<details>
<summary>
DisassociateWirelessGatewayFromCertificate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/DisassociateWirelessGatewayFromCertificateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/DisassociateWirelessGatewayFromCertificateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/DisassociateWirelessGatewayFromCertificateCommandOutput/)
</details>
<details>
<summary>
DisassociateWirelessGatewayFromThing
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/DisassociateWirelessGatewayFromThingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/DisassociateWirelessGatewayFromThingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/DisassociateWirelessGatewayFromThingCommandOutput/)
</details>
<details>
<summary>
GetDestination
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/GetDestinationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/GetDestinationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/GetDestinationCommandOutput/)
</details>
<details>
<summary>
GetDeviceProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/GetDeviceProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/GetDeviceProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/GetDeviceProfileCommandOutput/)
</details>
<details>
<summary>
GetEventConfigurationByResourceTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/GetEventConfigurationByResourceTypesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/GetEventConfigurationByResourceTypesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/GetEventConfigurationByResourceTypesCommandOutput/)
</details>
<details>
<summary>
GetFuotaTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/GetFuotaTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/GetFuotaTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/GetFuotaTaskCommandOutput/)
</details>
<details>
<summary>
GetLogLevelsByResourceTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/GetLogLevelsByResourceTypesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/GetLogLevelsByResourceTypesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/GetLogLevelsByResourceTypesCommandOutput/)
</details>
<details>
<summary>
GetMetricConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/GetMetricConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/GetMetricConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/GetMetricConfigurationCommandOutput/)
</details>
<details>
<summary>
GetMetrics
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/GetMetricsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/GetMetricsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/GetMetricsCommandOutput/)
</details>
<details>
<summary>
GetMulticastGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/GetMulticastGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/GetMulticastGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/GetMulticastGroupCommandOutput/)
</details>
<details>
<summary>
GetMulticastGroupSession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/GetMulticastGroupSessionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/GetMulticastGroupSessionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/GetMulticastGroupSessionCommandOutput/)
</details>
<details>
<summary>
GetNetworkAnalyzerConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/GetNetworkAnalyzerConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/GetNetworkAnalyzerConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/GetNetworkAnalyzerConfigurationCommandOutput/)
</details>
<details>
<summary>
GetPartnerAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/GetPartnerAccountCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/GetPartnerAccountCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/GetPartnerAccountCommandOutput/)
</details>
<details>
<summary>
GetPosition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/GetPositionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/GetPositionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/GetPositionCommandOutput/)
</details>
<details>
<summary>
GetPositionConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/GetPositionConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/GetPositionConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/GetPositionConfigurationCommandOutput/)
</details>
<details>
<summary>
GetPositionEstimate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/GetPositionEstimateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/GetPositionEstimateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/GetPositionEstimateCommandOutput/)
</details>
<details>
<summary>
GetResourceEventConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/GetResourceEventConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/GetResourceEventConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/GetResourceEventConfigurationCommandOutput/)
</details>
<details>
<summary>
GetResourceLogLevel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/GetResourceLogLevelCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/GetResourceLogLevelCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/GetResourceLogLevelCommandOutput/)
</details>
<details>
<summary>
GetResourcePosition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/GetResourcePositionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/GetResourcePositionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/GetResourcePositionCommandOutput/)
</details>
<details>
<summary>
GetServiceEndpoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/GetServiceEndpointCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/GetServiceEndpointCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/GetServiceEndpointCommandOutput/)
</details>
<details>
<summary>
GetServiceProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/GetServiceProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/GetServiceProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/GetServiceProfileCommandOutput/)
</details>
<details>
<summary>
GetWirelessDevice
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/GetWirelessDeviceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/GetWirelessDeviceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/GetWirelessDeviceCommandOutput/)
</details>
<details>
<summary>
GetWirelessDeviceImportTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/GetWirelessDeviceImportTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/GetWirelessDeviceImportTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/GetWirelessDeviceImportTaskCommandOutput/)
</details>
<details>
<summary>
GetWirelessDeviceStatistics
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/GetWirelessDeviceStatisticsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/GetWirelessDeviceStatisticsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/GetWirelessDeviceStatisticsCommandOutput/)
</details>
<details>
<summary>
GetWirelessGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/GetWirelessGatewayCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/GetWirelessGatewayCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/GetWirelessGatewayCommandOutput/)
</details>
<details>
<summary>
GetWirelessGatewayCertificate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/GetWirelessGatewayCertificateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/GetWirelessGatewayCertificateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/GetWirelessGatewayCertificateCommandOutput/)
</details>
<details>
<summary>
GetWirelessGatewayFirmwareInformation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/GetWirelessGatewayFirmwareInformationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/GetWirelessGatewayFirmwareInformationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/GetWirelessGatewayFirmwareInformationCommandOutput/)
</details>
<details>
<summary>
GetWirelessGatewayStatistics
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/GetWirelessGatewayStatisticsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/GetWirelessGatewayStatisticsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/GetWirelessGatewayStatisticsCommandOutput/)
</details>
<details>
<summary>
GetWirelessGatewayTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/GetWirelessGatewayTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/GetWirelessGatewayTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/GetWirelessGatewayTaskCommandOutput/)
</details>
<details>
<summary>
GetWirelessGatewayTaskDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/GetWirelessGatewayTaskDefinitionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/GetWirelessGatewayTaskDefinitionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/GetWirelessGatewayTaskDefinitionCommandOutput/)
</details>
<details>
<summary>
ListDestinations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/ListDestinationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/ListDestinationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/ListDestinationsCommandOutput/)
</details>
<details>
<summary>
ListDeviceProfiles
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/ListDeviceProfilesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/ListDeviceProfilesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/ListDeviceProfilesCommandOutput/)
</details>
<details>
<summary>
ListDevicesForWirelessDeviceImportTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/ListDevicesForWirelessDeviceImportTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/ListDevicesForWirelessDeviceImportTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/ListDevicesForWirelessDeviceImportTaskCommandOutput/)
</details>
<details>
<summary>
ListEventConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/ListEventConfigurationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/ListEventConfigurationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/ListEventConfigurationsCommandOutput/)
</details>
<details>
<summary>
ListFuotaTasks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/ListFuotaTasksCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/ListFuotaTasksCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/ListFuotaTasksCommandOutput/)
</details>
<details>
<summary>
ListMulticastGroups
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/ListMulticastGroupsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/ListMulticastGroupsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/ListMulticastGroupsCommandOutput/)
</details>
<details>
<summary>
ListMulticastGroupsByFuotaTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/ListMulticastGroupsByFuotaTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/ListMulticastGroupsByFuotaTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/ListMulticastGroupsByFuotaTaskCommandOutput/)
</details>
<details>
<summary>
ListNetworkAnalyzerConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/ListNetworkAnalyzerConfigurationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/ListNetworkAnalyzerConfigurationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/ListNetworkAnalyzerConfigurationsCommandOutput/)
</details>
<details>
<summary>
ListPartnerAccounts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/ListPartnerAccountsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/ListPartnerAccountsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/ListPartnerAccountsCommandOutput/)
</details>
<details>
<summary>
ListPositionConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/ListPositionConfigurationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/ListPositionConfigurationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/ListPositionConfigurationsCommandOutput/)
</details>
<details>
<summary>
ListQueuedMessages
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/ListQueuedMessagesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/ListQueuedMessagesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/ListQueuedMessagesCommandOutput/)
</details>
<details>
<summary>
ListServiceProfiles
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/ListServiceProfilesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/ListServiceProfilesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/ListServiceProfilesCommandOutput/)
</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/ListTagsForResourceCommandOutput/)
</details>
<details>
<summary>
ListWirelessDeviceImportTasks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/ListWirelessDeviceImportTasksCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/ListWirelessDeviceImportTasksCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/ListWirelessDeviceImportTasksCommandOutput/)
</details>
<details>
<summary>
ListWirelessDevices
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/ListWirelessDevicesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/ListWirelessDevicesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/ListWirelessDevicesCommandOutput/)
</details>
<details>
<summary>
ListWirelessGateways
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/ListWirelessGatewaysCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/ListWirelessGatewaysCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/ListWirelessGatewaysCommandOutput/)
</details>
<details>
<summary>
ListWirelessGatewayTaskDefinitions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/ListWirelessGatewayTaskDefinitionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/ListWirelessGatewayTaskDefinitionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/ListWirelessGatewayTaskDefinitionsCommandOutput/)
</details>
<details>
<summary>
PutPositionConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/PutPositionConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/PutPositionConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/PutPositionConfigurationCommandOutput/)
</details>
<details>
<summary>
PutResourceLogLevel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/PutResourceLogLevelCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/PutResourceLogLevelCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/PutResourceLogLevelCommandOutput/)
</details>
<details>
<summary>
ResetAllResourceLogLevels
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/ResetAllResourceLogLevelsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/ResetAllResourceLogLevelsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/ResetAllResourceLogLevelsCommandOutput/)
</details>
<details>
<summary>
ResetResourceLogLevel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/ResetResourceLogLevelCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/ResetResourceLogLevelCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/ResetResourceLogLevelCommandOutput/)
</details>
<details>
<summary>
SendDataToMulticastGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/SendDataToMulticastGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/SendDataToMulticastGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/SendDataToMulticastGroupCommandOutput/)
</details>
<details>
<summary>
SendDataToWirelessDevice
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/SendDataToWirelessDeviceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/SendDataToWirelessDeviceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/SendDataToWirelessDeviceCommandOutput/)
</details>
<details>
<summary>
StartBulkAssociateWirelessDeviceWithMulticastGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/StartBulkAssociateWirelessDeviceWithMulticastGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/StartBulkAssociateWirelessDeviceWithMulticastGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/StartBulkAssociateWirelessDeviceWithMulticastGroupCommandOutput/)
</details>
<details>
<summary>
StartBulkDisassociateWirelessDeviceFromMulticastGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/StartBulkDisassociateWirelessDeviceFromMulticastGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandOutput/)
</details>
<details>
<summary>
StartFuotaTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/StartFuotaTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/StartFuotaTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/StartFuotaTaskCommandOutput/)
</details>
<details>
<summary>
StartMulticastGroupSession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/StartMulticastGroupSessionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/StartMulticastGroupSessionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/StartMulticastGroupSessionCommandOutput/)
</details>
<details>
<summary>
StartSingleWirelessDeviceImportTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/StartSingleWirelessDeviceImportTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/StartSingleWirelessDeviceImportTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/StartSingleWirelessDeviceImportTaskCommandOutput/)
</details>
<details>
<summary>
StartWirelessDeviceImportTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/StartWirelessDeviceImportTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/StartWirelessDeviceImportTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/StartWirelessDeviceImportTaskCommandOutput/)
</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/TagResourceCommandOutput/)
</details>
<details>
<summary>
TestWirelessDevice
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/TestWirelessDeviceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/TestWirelessDeviceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/TestWirelessDeviceCommandOutput/)
</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/UntagResourceCommandOutput/)
</details>
<details>
<summary>
UpdateDestination
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/UpdateDestinationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/UpdateDestinationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/UpdateDestinationCommandOutput/)
</details>
<details>
<summary>
UpdateEventConfigurationByResourceTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/UpdateEventConfigurationByResourceTypesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/UpdateEventConfigurationByResourceTypesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/UpdateEventConfigurationByResourceTypesCommandOutput/)
</details>
<details>
<summary>
UpdateFuotaTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/UpdateFuotaTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/UpdateFuotaTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/UpdateFuotaTaskCommandOutput/)
</details>
<details>
<summary>
UpdateLogLevelsByResourceTypes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/UpdateLogLevelsByResourceTypesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/UpdateLogLevelsByResourceTypesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/UpdateLogLevelsByResourceTypesCommandOutput/)
</details>
<details>
<summary>
UpdateMetricConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/UpdateMetricConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/UpdateMetricConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/UpdateMetricConfigurationCommandOutput/)
</details>
<details>
<summary>
UpdateMulticastGroup
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/UpdateMulticastGroupCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/UpdateMulticastGroupCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/UpdateMulticastGroupCommandOutput/)
</details>
<details>
<summary>
UpdateNetworkAnalyzerConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/UpdateNetworkAnalyzerConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/UpdateNetworkAnalyzerConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/UpdateNetworkAnalyzerConfigurationCommandOutput/)
</details>
<details>
<summary>
UpdatePartnerAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/UpdatePartnerAccountCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/UpdatePartnerAccountCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/UpdatePartnerAccountCommandOutput/)
</details>
<details>
<summary>
UpdatePosition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/UpdatePositionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/UpdatePositionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/UpdatePositionCommandOutput/)
</details>
<details>
<summary>
UpdateResourceEventConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/UpdateResourceEventConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/UpdateResourceEventConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/UpdateResourceEventConfigurationCommandOutput/)
</details>
<details>
<summary>
UpdateResourcePosition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/UpdateResourcePositionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/UpdateResourcePositionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/UpdateResourcePositionCommandOutput/)
</details>
<details>
<summary>
UpdateWirelessDevice
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/UpdateWirelessDeviceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/UpdateWirelessDeviceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/UpdateWirelessDeviceCommandOutput/)
</details>
<details>
<summary>
UpdateWirelessDeviceImportTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/UpdateWirelessDeviceImportTaskCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/UpdateWirelessDeviceImportTaskCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/UpdateWirelessDeviceImportTaskCommandOutput/)
</details>
<details>
<summary>
UpdateWirelessGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iot-wireless/command/UpdateWirelessGatewayCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/UpdateWirelessGatewayCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iot-wireless/Interface/UpdateWirelessGatewayCommandOutput/)
</details>
