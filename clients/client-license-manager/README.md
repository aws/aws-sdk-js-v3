<!-- generated file, do not edit directly -->

# @aws-sdk/client-license-manager

## Description

AWS SDK for JavaScript LicenseManager Client for Node.js, Browser and React Native.

<p>License Manager makes it easier to manage licenses from software vendors across multiple
Amazon Web Services accounts and on-premises servers.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-license-manager
using your favorite package manager:

- `npm install @aws-sdk/client-license-manager`
- `yarn add @aws-sdk/client-license-manager`
- `pnpm add @aws-sdk/client-license-manager`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `LicenseManagerClient` and
the commands you need, for example `AcceptGrantCommand`:

```js
// ES5 example
const { LicenseManagerClient, AcceptGrantCommand } = require("@aws-sdk/client-license-manager");
```

```ts
// ES6+ example
import { LicenseManagerClient, AcceptGrantCommand } from "@aws-sdk/client-license-manager";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new LicenseManagerClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new AcceptGrantCommand(params);
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
import * as AWS from "@aws-sdk/client-license-manager";
const client = new AWS.LicenseManager({ region: "REGION" });

// async/await.
try {
  const data = await client.acceptGrant(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .acceptGrant(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.acceptGrant(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-license-manager` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AcceptGrant
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/classes/acceptgrantcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/acceptgrantcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/acceptgrantcommandoutput.html)

</details>
<details>
<summary>
CheckInLicense
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/classes/checkinlicensecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/checkinlicensecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/checkinlicensecommandoutput.html)

</details>
<details>
<summary>
CheckoutBorrowLicense
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/classes/checkoutborrowlicensecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/checkoutborrowlicensecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/checkoutborrowlicensecommandoutput.html)

</details>
<details>
<summary>
CheckoutLicense
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/classes/checkoutlicensecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/checkoutlicensecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/checkoutlicensecommandoutput.html)

</details>
<details>
<summary>
CreateGrant
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/classes/creategrantcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/creategrantcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/creategrantcommandoutput.html)

</details>
<details>
<summary>
CreateGrantVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/classes/creategrantversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/creategrantversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/creategrantversioncommandoutput.html)

</details>
<details>
<summary>
CreateLicense
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/classes/createlicensecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/createlicensecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/createlicensecommandoutput.html)

</details>
<details>
<summary>
CreateLicenseConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/classes/createlicenseconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/createlicenseconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/createlicenseconfigurationcommandoutput.html)

</details>
<details>
<summary>
CreateLicenseConversionTaskForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/classes/createlicenseconversiontaskforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/createlicenseconversiontaskforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/createlicenseconversiontaskforresourcecommandoutput.html)

</details>
<details>
<summary>
CreateLicenseManagerReportGenerator
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/classes/createlicensemanagerreportgeneratorcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/createlicensemanagerreportgeneratorcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/createlicensemanagerreportgeneratorcommandoutput.html)

</details>
<details>
<summary>
CreateLicenseVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/classes/createlicenseversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/createlicenseversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/createlicenseversioncommandoutput.html)

</details>
<details>
<summary>
CreateToken
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/classes/createtokencommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/createtokencommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/createtokencommandoutput.html)

</details>
<details>
<summary>
DeleteGrant
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/classes/deletegrantcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/deletegrantcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/deletegrantcommandoutput.html)

</details>
<details>
<summary>
DeleteLicense
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/classes/deletelicensecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/deletelicensecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/deletelicensecommandoutput.html)

</details>
<details>
<summary>
DeleteLicenseConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/classes/deletelicenseconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/deletelicenseconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/deletelicenseconfigurationcommandoutput.html)

</details>
<details>
<summary>
DeleteLicenseManagerReportGenerator
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/classes/deletelicensemanagerreportgeneratorcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/deletelicensemanagerreportgeneratorcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/deletelicensemanagerreportgeneratorcommandoutput.html)

</details>
<details>
<summary>
DeleteToken
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/classes/deletetokencommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/deletetokencommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/deletetokencommandoutput.html)

</details>
<details>
<summary>
ExtendLicenseConsumption
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/classes/extendlicenseconsumptioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/extendlicenseconsumptioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/extendlicenseconsumptioncommandoutput.html)

</details>
<details>
<summary>
GetAccessToken
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/classes/getaccesstokencommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/getaccesstokencommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/getaccesstokencommandoutput.html)

</details>
<details>
<summary>
GetGrant
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/classes/getgrantcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/getgrantcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/getgrantcommandoutput.html)

</details>
<details>
<summary>
GetLicense
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/classes/getlicensecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/getlicensecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/getlicensecommandoutput.html)

</details>
<details>
<summary>
GetLicenseConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/classes/getlicenseconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/getlicenseconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/getlicenseconfigurationcommandoutput.html)

</details>
<details>
<summary>
GetLicenseConversionTask
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/classes/getlicenseconversiontaskcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/getlicenseconversiontaskcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/getlicenseconversiontaskcommandoutput.html)

</details>
<details>
<summary>
GetLicenseManagerReportGenerator
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/classes/getlicensemanagerreportgeneratorcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/getlicensemanagerreportgeneratorcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/getlicensemanagerreportgeneratorcommandoutput.html)

</details>
<details>
<summary>
GetLicenseUsage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/classes/getlicenseusagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/getlicenseusagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/getlicenseusagecommandoutput.html)

</details>
<details>
<summary>
GetServiceSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/classes/getservicesettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/getservicesettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/getservicesettingscommandoutput.html)

</details>
<details>
<summary>
ListAssociationsForLicenseConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/classes/listassociationsforlicenseconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/listassociationsforlicenseconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/listassociationsforlicenseconfigurationcommandoutput.html)

</details>
<details>
<summary>
ListDistributedGrants
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/classes/listdistributedgrantscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/listdistributedgrantscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/listdistributedgrantscommandoutput.html)

</details>
<details>
<summary>
ListFailuresForLicenseConfigurationOperations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/classes/listfailuresforlicenseconfigurationoperationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/listfailuresforlicenseconfigurationoperationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/listfailuresforlicenseconfigurationoperationscommandoutput.html)

</details>
<details>
<summary>
ListLicenseConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/classes/listlicenseconfigurationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/listlicenseconfigurationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/listlicenseconfigurationscommandoutput.html)

</details>
<details>
<summary>
ListLicenseConversionTasks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/classes/listlicenseconversiontaskscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/listlicenseconversiontaskscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/listlicenseconversiontaskscommandoutput.html)

</details>
<details>
<summary>
ListLicenseManagerReportGenerators
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/classes/listlicensemanagerreportgeneratorscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/listlicensemanagerreportgeneratorscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/listlicensemanagerreportgeneratorscommandoutput.html)

</details>
<details>
<summary>
ListLicenses
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/classes/listlicensescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/listlicensescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/listlicensescommandoutput.html)

</details>
<details>
<summary>
ListLicenseSpecificationsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/classes/listlicensespecificationsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/listlicensespecificationsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/listlicensespecificationsforresourcecommandoutput.html)

</details>
<details>
<summary>
ListLicenseVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/classes/listlicenseversionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/listlicenseversionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/listlicenseversionscommandoutput.html)

</details>
<details>
<summary>
ListReceivedGrants
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/classes/listreceivedgrantscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/listreceivedgrantscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/listreceivedgrantscommandoutput.html)

</details>
<details>
<summary>
ListReceivedGrantsForOrganization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/classes/listreceivedgrantsfororganizationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/listreceivedgrantsfororganizationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/listreceivedgrantsfororganizationcommandoutput.html)

</details>
<details>
<summary>
ListReceivedLicenses
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/classes/listreceivedlicensescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/listreceivedlicensescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/listreceivedlicensescommandoutput.html)

</details>
<details>
<summary>
ListReceivedLicensesForOrganization
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/classes/listreceivedlicensesfororganizationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/listreceivedlicensesfororganizationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/listreceivedlicensesfororganizationcommandoutput.html)

</details>
<details>
<summary>
ListResourceInventory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/classes/listresourceinventorycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/listresourceinventorycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/listresourceinventorycommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
ListTokens
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/classes/listtokenscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/listtokenscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/listtokenscommandoutput.html)

</details>
<details>
<summary>
ListUsageForLicenseConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/classes/listusageforlicenseconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/listusageforlicenseconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/listusageforlicenseconfigurationcommandoutput.html)

</details>
<details>
<summary>
RejectGrant
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/classes/rejectgrantcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/rejectgrantcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/rejectgrantcommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateLicenseConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/classes/updatelicenseconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/updatelicenseconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/updatelicenseconfigurationcommandoutput.html)

</details>
<details>
<summary>
UpdateLicenseManagerReportGenerator
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/classes/updatelicensemanagerreportgeneratorcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/updatelicensemanagerreportgeneratorcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/updatelicensemanagerreportgeneratorcommandoutput.html)

</details>
<details>
<summary>
UpdateLicenseSpecificationsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/classes/updatelicensespecificationsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/updatelicensespecificationsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/updatelicensespecificationsforresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateServiceSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/classes/updateservicesettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/updateservicesettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-license-manager/interfaces/updateservicesettingscommandoutput.html)

</details>
