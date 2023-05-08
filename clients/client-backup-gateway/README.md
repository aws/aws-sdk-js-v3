<!-- generated file, do not edit directly -->

# @aws-sdk/client-backup-gateway

## Description

AWS SDK for JavaScript BackupGateway Client for Node.js, Browser and React Native.

<fullname>Backup gateway</fullname>

<p>Backup gateway connects Backup to your hypervisor, so you can
create, store, and restore backups of your virtual machines (VMs) anywhere, whether
on-premises or in the VMware Cloud (VMC) on Amazon Web Services.</p>
<p>Add on-premises resources by connecting to a hypervisor through a gateway. Backup will automatically discover the resources in your hypervisor.</p>
<p>Use Backup to assign virtual or on-premises resources to a backup plan, or run
on-demand backups. Once you have backed up your resources, you can view them and restore them
like any resource supported by Backup.</p>
<p>To download the Amazon Web Services software to get started, navigate to the Backup console, choose <b>Gateways</b>, then choose <b>Create gateway</b>.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-backup-gateway
using your favorite package manager:

- `npm install @aws-sdk/client-backup-gateway`
- `yarn add @aws-sdk/client-backup-gateway`
- `pnpm add @aws-sdk/client-backup-gateway`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `BackupGatewayClient` and
the commands you need, for example `AssociateGatewayToServerCommand`:

```js
// ES5 example
const { BackupGatewayClient, AssociateGatewayToServerCommand } = require("@aws-sdk/client-backup-gateway");
```

```ts
// ES6+ example
import { BackupGatewayClient, AssociateGatewayToServerCommand } from "@aws-sdk/client-backup-gateway";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new BackupGatewayClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new AssociateGatewayToServerCommand(params);
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
import * as AWS from "@aws-sdk/client-backup-gateway";
const client = new AWS.BackupGateway({ region: "REGION" });

// async/await.
try {
  const data = await client.associateGatewayToServer(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .associateGatewayToServer(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.associateGatewayToServer(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-backup-gateway` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AssociateGatewayToServer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/classes/associategatewaytoservercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/interfaces/associategatewaytoservercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/interfaces/associategatewaytoservercommandoutput.html)

</details>
<details>
<summary>
CreateGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/classes/creategatewaycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/interfaces/creategatewaycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/interfaces/creategatewaycommandoutput.html)

</details>
<details>
<summary>
DeleteGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/classes/deletegatewaycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/interfaces/deletegatewaycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/interfaces/deletegatewaycommandoutput.html)

</details>
<details>
<summary>
DeleteHypervisor
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/classes/deletehypervisorcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/interfaces/deletehypervisorcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/interfaces/deletehypervisorcommandoutput.html)

</details>
<details>
<summary>
DisassociateGatewayFromServer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/classes/disassociategatewayfromservercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/interfaces/disassociategatewayfromservercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/interfaces/disassociategatewayfromservercommandoutput.html)

</details>
<details>
<summary>
GetBandwidthRateLimitSchedule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/classes/getbandwidthratelimitschedulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/interfaces/getbandwidthratelimitschedulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/interfaces/getbandwidthratelimitschedulecommandoutput.html)

</details>
<details>
<summary>
GetGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/classes/getgatewaycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/interfaces/getgatewaycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/interfaces/getgatewaycommandoutput.html)

</details>
<details>
<summary>
GetHypervisor
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/classes/gethypervisorcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/interfaces/gethypervisorcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/interfaces/gethypervisorcommandoutput.html)

</details>
<details>
<summary>
GetHypervisorPropertyMappings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/classes/gethypervisorpropertymappingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/interfaces/gethypervisorpropertymappingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/interfaces/gethypervisorpropertymappingscommandoutput.html)

</details>
<details>
<summary>
GetVirtualMachine
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/classes/getvirtualmachinecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/interfaces/getvirtualmachinecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/interfaces/getvirtualmachinecommandoutput.html)

</details>
<details>
<summary>
ImportHypervisorConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/classes/importhypervisorconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/interfaces/importhypervisorconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/interfaces/importhypervisorconfigurationcommandoutput.html)

</details>
<details>
<summary>
ListGateways
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/classes/listgatewayscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/interfaces/listgatewayscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/interfaces/listgatewayscommandoutput.html)

</details>
<details>
<summary>
ListHypervisors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/classes/listhypervisorscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/interfaces/listhypervisorscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/interfaces/listhypervisorscommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
ListVirtualMachines
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/classes/listvirtualmachinescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/interfaces/listvirtualmachinescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/interfaces/listvirtualmachinescommandoutput.html)

</details>
<details>
<summary>
PutBandwidthRateLimitSchedule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/classes/putbandwidthratelimitschedulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/interfaces/putbandwidthratelimitschedulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/interfaces/putbandwidthratelimitschedulecommandoutput.html)

</details>
<details>
<summary>
PutHypervisorPropertyMappings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/classes/puthypervisorpropertymappingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/interfaces/puthypervisorpropertymappingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/interfaces/puthypervisorpropertymappingscommandoutput.html)

</details>
<details>
<summary>
PutMaintenanceStartTime
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/classes/putmaintenancestarttimecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/interfaces/putmaintenancestarttimecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/interfaces/putmaintenancestarttimecommandoutput.html)

</details>
<details>
<summary>
StartVirtualMachinesMetadataSync
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/classes/startvirtualmachinesmetadatasynccommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/interfaces/startvirtualmachinesmetadatasynccommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/interfaces/startvirtualmachinesmetadatasynccommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
TestHypervisorConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/classes/testhypervisorconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/interfaces/testhypervisorconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/interfaces/testhypervisorconfigurationcommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateGatewayInformation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/classes/updategatewayinformationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/interfaces/updategatewayinformationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/interfaces/updategatewayinformationcommandoutput.html)

</details>
<details>
<summary>
UpdateGatewaySoftwareNow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/classes/updategatewaysoftwarenowcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/interfaces/updategatewaysoftwarenowcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/interfaces/updategatewaysoftwarenowcommandoutput.html)

</details>
<details>
<summary>
UpdateHypervisor
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/classes/updatehypervisorcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/interfaces/updatehypervisorcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-backup-gateway/interfaces/updatehypervisorcommandoutput.html)

</details>
