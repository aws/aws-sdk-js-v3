<!-- generated file, do not edit directly -->

# @aws-sdk/client-iotfleetwise

## Description

AWS SDK for JavaScript IoTFleetWise Client for Node.js, Browser and React Native.

<p>Amazon Web Services IoT FleetWise is a fully managed service that you can use to collect, model, and transfer
vehicle data to the Amazon Web Services cloud at scale. With Amazon Web Services IoT FleetWise, you can standardize all of
your vehicle data models, independent of the in-vehicle communication architecture, and
define data collection rules to transfer only high-value data to the cloud.
</p>
<p>For more information, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/">What is Amazon Web Services IoT FleetWise?</a> in the
<i>Amazon Web Services IoT FleetWise Developer Guide</i>.</p>
<important>
<p>Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleetwise-regions.html">Amazon Web Services Region and feature availability</a> in the <i>Amazon Web Services IoT FleetWise Developer Guide</i>.</p>
</important>

## Installing

To install this package, simply type add or install @aws-sdk/client-iotfleetwise
using your favorite package manager:

- `npm install @aws-sdk/client-iotfleetwise`
- `yarn add @aws-sdk/client-iotfleetwise`
- `pnpm add @aws-sdk/client-iotfleetwise`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `IoTFleetWiseClient` and
the commands you need, for example `ListFleetsCommand`:

```js
// ES5 example
const { IoTFleetWiseClient, ListFleetsCommand } = require("@aws-sdk/client-iotfleetwise");
```

```ts
// ES6+ example
import { IoTFleetWiseClient, ListFleetsCommand } from "@aws-sdk/client-iotfleetwise";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new IoTFleetWiseClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListFleetsCommand(params);
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
import * as AWS from "@aws-sdk/client-iotfleetwise";
const client = new AWS.IoTFleetWise({ region: "REGION" });

// async/await.
try {
  const data = await client.listFleets(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listFleets(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listFleets(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-iotfleetwise` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AssociateVehicleFleet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotfleetwise/command/AssociateVehicleFleetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/AssociateVehicleFleetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/AssociateVehicleFleetCommandOutput/)

</details>
<details>
<summary>
BatchCreateVehicle
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotfleetwise/command/BatchCreateVehicleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/BatchCreateVehicleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/BatchCreateVehicleCommandOutput/)

</details>
<details>
<summary>
BatchUpdateVehicle
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotfleetwise/command/BatchUpdateVehicleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/BatchUpdateVehicleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/BatchUpdateVehicleCommandOutput/)

</details>
<details>
<summary>
CreateCampaign
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotfleetwise/command/CreateCampaignCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/CreateCampaignCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/CreateCampaignCommandOutput/)

</details>
<details>
<summary>
CreateDecoderManifest
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotfleetwise/command/CreateDecoderManifestCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/CreateDecoderManifestCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/CreateDecoderManifestCommandOutput/)

</details>
<details>
<summary>
CreateFleet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotfleetwise/command/CreateFleetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/CreateFleetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/CreateFleetCommandOutput/)

</details>
<details>
<summary>
CreateModelManifest
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotfleetwise/command/CreateModelManifestCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/CreateModelManifestCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/CreateModelManifestCommandOutput/)

</details>
<details>
<summary>
CreateSignalCatalog
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotfleetwise/command/CreateSignalCatalogCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/CreateSignalCatalogCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/CreateSignalCatalogCommandOutput/)

</details>
<details>
<summary>
CreateStateTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotfleetwise/command/CreateStateTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/CreateStateTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/CreateStateTemplateCommandOutput/)

</details>
<details>
<summary>
CreateVehicle
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotfleetwise/command/CreateVehicleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/CreateVehicleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/CreateVehicleCommandOutput/)

</details>
<details>
<summary>
DeleteCampaign
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotfleetwise/command/DeleteCampaignCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/DeleteCampaignCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/DeleteCampaignCommandOutput/)

</details>
<details>
<summary>
DeleteDecoderManifest
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotfleetwise/command/DeleteDecoderManifestCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/DeleteDecoderManifestCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/DeleteDecoderManifestCommandOutput/)

</details>
<details>
<summary>
DeleteFleet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotfleetwise/command/DeleteFleetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/DeleteFleetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/DeleteFleetCommandOutput/)

</details>
<details>
<summary>
DeleteModelManifest
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotfleetwise/command/DeleteModelManifestCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/DeleteModelManifestCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/DeleteModelManifestCommandOutput/)

</details>
<details>
<summary>
DeleteSignalCatalog
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotfleetwise/command/DeleteSignalCatalogCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/DeleteSignalCatalogCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/DeleteSignalCatalogCommandOutput/)

</details>
<details>
<summary>
DeleteStateTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotfleetwise/command/DeleteStateTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/DeleteStateTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/DeleteStateTemplateCommandOutput/)

</details>
<details>
<summary>
DeleteVehicle
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotfleetwise/command/DeleteVehicleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/DeleteVehicleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/DeleteVehicleCommandOutput/)

</details>
<details>
<summary>
DisassociateVehicleFleet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotfleetwise/command/DisassociateVehicleFleetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/DisassociateVehicleFleetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/DisassociateVehicleFleetCommandOutput/)

</details>
<details>
<summary>
GetCampaign
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotfleetwise/command/GetCampaignCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/GetCampaignCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/GetCampaignCommandOutput/)

</details>
<details>
<summary>
GetDecoderManifest
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotfleetwise/command/GetDecoderManifestCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/GetDecoderManifestCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/GetDecoderManifestCommandOutput/)

</details>
<details>
<summary>
GetEncryptionConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotfleetwise/command/GetEncryptionConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/GetEncryptionConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/GetEncryptionConfigurationCommandOutput/)

</details>
<details>
<summary>
GetFleet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotfleetwise/command/GetFleetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/GetFleetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/GetFleetCommandOutput/)

</details>
<details>
<summary>
GetLoggingOptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotfleetwise/command/GetLoggingOptionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/GetLoggingOptionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/GetLoggingOptionsCommandOutput/)

</details>
<details>
<summary>
GetModelManifest
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotfleetwise/command/GetModelManifestCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/GetModelManifestCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/GetModelManifestCommandOutput/)

</details>
<details>
<summary>
GetRegisterAccountStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotfleetwise/command/GetRegisterAccountStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/GetRegisterAccountStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/GetRegisterAccountStatusCommandOutput/)

</details>
<details>
<summary>
GetSignalCatalog
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotfleetwise/command/GetSignalCatalogCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/GetSignalCatalogCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/GetSignalCatalogCommandOutput/)

</details>
<details>
<summary>
GetStateTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotfleetwise/command/GetStateTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/GetStateTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/GetStateTemplateCommandOutput/)

</details>
<details>
<summary>
GetVehicle
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotfleetwise/command/GetVehicleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/GetVehicleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/GetVehicleCommandOutput/)

</details>
<details>
<summary>
GetVehicleStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotfleetwise/command/GetVehicleStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/GetVehicleStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/GetVehicleStatusCommandOutput/)

</details>
<details>
<summary>
ImportDecoderManifest
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotfleetwise/command/ImportDecoderManifestCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/ImportDecoderManifestCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/ImportDecoderManifestCommandOutput/)

</details>
<details>
<summary>
ImportSignalCatalog
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotfleetwise/command/ImportSignalCatalogCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/ImportSignalCatalogCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/ImportSignalCatalogCommandOutput/)

</details>
<details>
<summary>
ListCampaigns
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotfleetwise/command/ListCampaignsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/ListCampaignsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/ListCampaignsCommandOutput/)

</details>
<details>
<summary>
ListDecoderManifestNetworkInterfaces
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotfleetwise/command/ListDecoderManifestNetworkInterfacesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/ListDecoderManifestNetworkInterfacesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/ListDecoderManifestNetworkInterfacesCommandOutput/)

</details>
<details>
<summary>
ListDecoderManifests
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotfleetwise/command/ListDecoderManifestsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/ListDecoderManifestsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/ListDecoderManifestsCommandOutput/)

</details>
<details>
<summary>
ListDecoderManifestSignals
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotfleetwise/command/ListDecoderManifestSignalsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/ListDecoderManifestSignalsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/ListDecoderManifestSignalsCommandOutput/)

</details>
<details>
<summary>
ListFleets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotfleetwise/command/ListFleetsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/ListFleetsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/ListFleetsCommandOutput/)

</details>
<details>
<summary>
ListFleetsForVehicle
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotfleetwise/command/ListFleetsForVehicleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/ListFleetsForVehicleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/ListFleetsForVehicleCommandOutput/)

</details>
<details>
<summary>
ListModelManifestNodes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotfleetwise/command/ListModelManifestNodesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/ListModelManifestNodesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/ListModelManifestNodesCommandOutput/)

</details>
<details>
<summary>
ListModelManifests
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotfleetwise/command/ListModelManifestsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/ListModelManifestsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/ListModelManifestsCommandOutput/)

</details>
<details>
<summary>
ListSignalCatalogNodes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotfleetwise/command/ListSignalCatalogNodesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/ListSignalCatalogNodesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/ListSignalCatalogNodesCommandOutput/)

</details>
<details>
<summary>
ListSignalCatalogs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotfleetwise/command/ListSignalCatalogsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/ListSignalCatalogsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/ListSignalCatalogsCommandOutput/)

</details>
<details>
<summary>
ListStateTemplates
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotfleetwise/command/ListStateTemplatesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/ListStateTemplatesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/ListStateTemplatesCommandOutput/)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotfleetwise/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/ListTagsForResourceCommandOutput/)

</details>
<details>
<summary>
ListVehicles
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotfleetwise/command/ListVehiclesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/ListVehiclesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/ListVehiclesCommandOutput/)

</details>
<details>
<summary>
ListVehiclesInFleet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotfleetwise/command/ListVehiclesInFleetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/ListVehiclesInFleetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/ListVehiclesInFleetCommandOutput/)

</details>
<details>
<summary>
PutEncryptionConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotfleetwise/command/PutEncryptionConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/PutEncryptionConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/PutEncryptionConfigurationCommandOutput/)

</details>
<details>
<summary>
PutLoggingOptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotfleetwise/command/PutLoggingOptionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/PutLoggingOptionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/PutLoggingOptionsCommandOutput/)

</details>
<details>
<summary>
RegisterAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotfleetwise/command/RegisterAccountCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/RegisterAccountCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/RegisterAccountCommandOutput/)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotfleetwise/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/TagResourceCommandOutput/)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotfleetwise/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/UntagResourceCommandOutput/)

</details>
<details>
<summary>
UpdateCampaign
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotfleetwise/command/UpdateCampaignCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/UpdateCampaignCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/UpdateCampaignCommandOutput/)

</details>
<details>
<summary>
UpdateDecoderManifest
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotfleetwise/command/UpdateDecoderManifestCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/UpdateDecoderManifestCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/UpdateDecoderManifestCommandOutput/)

</details>
<details>
<summary>
UpdateFleet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotfleetwise/command/UpdateFleetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/UpdateFleetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/UpdateFleetCommandOutput/)

</details>
<details>
<summary>
UpdateModelManifest
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotfleetwise/command/UpdateModelManifestCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/UpdateModelManifestCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/UpdateModelManifestCommandOutput/)

</details>
<details>
<summary>
UpdateSignalCatalog
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotfleetwise/command/UpdateSignalCatalogCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/UpdateSignalCatalogCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/UpdateSignalCatalogCommandOutput/)

</details>
<details>
<summary>
UpdateStateTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotfleetwise/command/UpdateStateTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/UpdateStateTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/UpdateStateTemplateCommandOutput/)

</details>
<details>
<summary>
UpdateVehicle
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/iotfleetwise/command/UpdateVehicleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/UpdateVehicleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-iotfleetwise/Interface/UpdateVehicleCommandOutput/)

</details>
