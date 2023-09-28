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

## Installing

To install the this package, simply type add or install @aws-sdk/client-iotfleetwise
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/classes/associatevehiclefleetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/associatevehiclefleetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/associatevehiclefleetcommandoutput.html)

</details>
<details>
<summary>
BatchCreateVehicle
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/classes/batchcreatevehiclecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/batchcreatevehiclecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/batchcreatevehiclecommandoutput.html)

</details>
<details>
<summary>
BatchUpdateVehicle
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/classes/batchupdatevehiclecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/batchupdatevehiclecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/batchupdatevehiclecommandoutput.html)

</details>
<details>
<summary>
CreateCampaign
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/classes/createcampaigncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/createcampaigncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/createcampaigncommandoutput.html)

</details>
<details>
<summary>
CreateDecoderManifest
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/classes/createdecodermanifestcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/createdecodermanifestcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/createdecodermanifestcommandoutput.html)

</details>
<details>
<summary>
CreateFleet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/classes/createfleetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/createfleetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/createfleetcommandoutput.html)

</details>
<details>
<summary>
CreateModelManifest
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/classes/createmodelmanifestcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/createmodelmanifestcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/createmodelmanifestcommandoutput.html)

</details>
<details>
<summary>
CreateSignalCatalog
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/classes/createsignalcatalogcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/createsignalcatalogcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/createsignalcatalogcommandoutput.html)

</details>
<details>
<summary>
CreateVehicle
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/classes/createvehiclecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/createvehiclecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/createvehiclecommandoutput.html)

</details>
<details>
<summary>
DeleteCampaign
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/classes/deletecampaigncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/deletecampaigncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/deletecampaigncommandoutput.html)

</details>
<details>
<summary>
DeleteDecoderManifest
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/classes/deletedecodermanifestcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/deletedecodermanifestcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/deletedecodermanifestcommandoutput.html)

</details>
<details>
<summary>
DeleteFleet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/classes/deletefleetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/deletefleetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/deletefleetcommandoutput.html)

</details>
<details>
<summary>
DeleteModelManifest
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/classes/deletemodelmanifestcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/deletemodelmanifestcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/deletemodelmanifestcommandoutput.html)

</details>
<details>
<summary>
DeleteSignalCatalog
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/classes/deletesignalcatalogcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/deletesignalcatalogcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/deletesignalcatalogcommandoutput.html)

</details>
<details>
<summary>
DeleteVehicle
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/classes/deletevehiclecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/deletevehiclecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/deletevehiclecommandoutput.html)

</details>
<details>
<summary>
DisassociateVehicleFleet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/classes/disassociatevehiclefleetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/disassociatevehiclefleetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/disassociatevehiclefleetcommandoutput.html)

</details>
<details>
<summary>
GetCampaign
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/classes/getcampaigncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/getcampaigncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/getcampaigncommandoutput.html)

</details>
<details>
<summary>
GetDecoderManifest
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/classes/getdecodermanifestcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/getdecodermanifestcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/getdecodermanifestcommandoutput.html)

</details>
<details>
<summary>
GetEncryptionConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/classes/getencryptionconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/getencryptionconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/getencryptionconfigurationcommandoutput.html)

</details>
<details>
<summary>
GetFleet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/classes/getfleetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/getfleetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/getfleetcommandoutput.html)

</details>
<details>
<summary>
GetLoggingOptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/classes/getloggingoptionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/getloggingoptionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/getloggingoptionscommandoutput.html)

</details>
<details>
<summary>
GetModelManifest
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/classes/getmodelmanifestcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/getmodelmanifestcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/getmodelmanifestcommandoutput.html)

</details>
<details>
<summary>
GetRegisterAccountStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/classes/getregisteraccountstatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/getregisteraccountstatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/getregisteraccountstatuscommandoutput.html)

</details>
<details>
<summary>
GetSignalCatalog
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/classes/getsignalcatalogcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/getsignalcatalogcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/getsignalcatalogcommandoutput.html)

</details>
<details>
<summary>
GetVehicle
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/classes/getvehiclecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/getvehiclecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/getvehiclecommandoutput.html)

</details>
<details>
<summary>
GetVehicleStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/classes/getvehiclestatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/getvehiclestatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/getvehiclestatuscommandoutput.html)

</details>
<details>
<summary>
ImportDecoderManifest
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/classes/importdecodermanifestcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/importdecodermanifestcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/importdecodermanifestcommandoutput.html)

</details>
<details>
<summary>
ImportSignalCatalog
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/classes/importsignalcatalogcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/importsignalcatalogcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/importsignalcatalogcommandoutput.html)

</details>
<details>
<summary>
ListCampaigns
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/classes/listcampaignscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/listcampaignscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/listcampaignscommandoutput.html)

</details>
<details>
<summary>
ListDecoderManifestNetworkInterfaces
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/classes/listdecodermanifestnetworkinterfacescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/listdecodermanifestnetworkinterfacescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/listdecodermanifestnetworkinterfacescommandoutput.html)

</details>
<details>
<summary>
ListDecoderManifests
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/classes/listdecodermanifestscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/listdecodermanifestscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/listdecodermanifestscommandoutput.html)

</details>
<details>
<summary>
ListDecoderManifestSignals
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/classes/listdecodermanifestsignalscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/listdecodermanifestsignalscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/listdecodermanifestsignalscommandoutput.html)

</details>
<details>
<summary>
ListFleets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/classes/listfleetscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/listfleetscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/listfleetscommandoutput.html)

</details>
<details>
<summary>
ListFleetsForVehicle
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/classes/listfleetsforvehiclecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/listfleetsforvehiclecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/listfleetsforvehiclecommandoutput.html)

</details>
<details>
<summary>
ListModelManifestNodes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/classes/listmodelmanifestnodescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/listmodelmanifestnodescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/listmodelmanifestnodescommandoutput.html)

</details>
<details>
<summary>
ListModelManifests
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/classes/listmodelmanifestscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/listmodelmanifestscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/listmodelmanifestscommandoutput.html)

</details>
<details>
<summary>
ListSignalCatalogNodes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/classes/listsignalcatalognodescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/listsignalcatalognodescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/listsignalcatalognodescommandoutput.html)

</details>
<details>
<summary>
ListSignalCatalogs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/classes/listsignalcatalogscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/listsignalcatalogscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/listsignalcatalogscommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
ListVehicles
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/classes/listvehiclescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/listvehiclescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/listvehiclescommandoutput.html)

</details>
<details>
<summary>
ListVehiclesInFleet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/classes/listvehiclesinfleetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/listvehiclesinfleetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/listvehiclesinfleetcommandoutput.html)

</details>
<details>
<summary>
PutEncryptionConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/classes/putencryptionconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/putencryptionconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/putencryptionconfigurationcommandoutput.html)

</details>
<details>
<summary>
PutLoggingOptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/classes/putloggingoptionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/putloggingoptionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/putloggingoptionscommandoutput.html)

</details>
<details>
<summary>
RegisterAccount
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/classes/registeraccountcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/registeraccountcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/registeraccountcommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateCampaign
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/classes/updatecampaigncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/updatecampaigncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/updatecampaigncommandoutput.html)

</details>
<details>
<summary>
UpdateDecoderManifest
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/classes/updatedecodermanifestcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/updatedecodermanifestcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/updatedecodermanifestcommandoutput.html)

</details>
<details>
<summary>
UpdateFleet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/classes/updatefleetcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/updatefleetcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/updatefleetcommandoutput.html)

</details>
<details>
<summary>
UpdateModelManifest
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/classes/updatemodelmanifestcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/updatemodelmanifestcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/updatemodelmanifestcommandoutput.html)

</details>
<details>
<summary>
UpdateSignalCatalog
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/classes/updatesignalcatalogcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/updatesignalcatalogcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/updatesignalcatalogcommandoutput.html)

</details>
<details>
<summary>
UpdateVehicle
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/classes/updatevehiclecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/updatevehiclecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iotfleetwise/interfaces/updatevehiclecommandoutput.html)

</details>
