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

To install this package, use the CLI of your favorite package manager:

- `npm install @aws-sdk/client-backup-gateway`
- `yarn add @aws-sdk/client-backup-gateway`
- `pnpm add @aws-sdk/client-backup-gateway`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `BackupGatewayClient` and
the commands you need, for example `ListGatewaysCommand`:

```js
// ES5 example
const { BackupGatewayClient, ListGatewaysCommand } = require("@aws-sdk/client-backup-gateway");
```

```ts
// ES6+ example
import { BackupGatewayClient, ListGatewaysCommand } from "@aws-sdk/client-backup-gateway";
```

### Usage

To send a request:

- Instantiate a client with configuration (e.g. credentials, region).
  - See [docs/CLIENTS](https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/CLIENTS.md) for configuration details.
  - See [@aws-sdk/config](https://github.com/aws/aws-sdk-js-v3/blob/main/packages/config/README.md) for additional options.
- Instantiate a command with input parameters.
- Call the `send` operation on the client, providing the command object as input.

```js
const client = new BackupGatewayClient({ region: "REGION" });

const params = { /** input parameters */ };
const command = new ListGatewaysCommand(params);
```

#### Async/await

We recommend using the [await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
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

#### Promises

You can also use [Promise chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#chaining).

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

#### Aggregated client

The aggregated client class is exported from the same package, but without the "Client" suffix.

`BackupGateway` extends `BackupGatewayClient` and additionally supports all operations, waiters, and paginators as methods.
This style may be familiar to you from the AWS SDK for JavaScript v2.

If you are bundling the AWS SDK, we recommend using only the bare-bones client (`BackupGatewayClient`).
More details are in the blog post on
[modular packages in AWS SDK for JavaScript](https://aws.amazon.com/blogs/developer/modular-packages-in-aws-sdk-for-javascript/).

```ts
import { BackupGateway } from "@aws-sdk/client-backup-gateway";

const client = new BackupGateway({ region: "REGION" });

// async/await.
try {
  const data = await client.listGateways(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listGateways(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks (not recommended).
client.listGateways(params, (err, data) => {
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

See also [docs/ERROR_HANDLING](https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/ERROR_HANDLING.md).

## Getting Help

Please use these community resources for getting help.
We use GitHub issues for tracking bugs and feature requests, but have limited bandwidth to address them.

- Visit the [Developer Guide](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/welcome.html)
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup-gateway/command/AssociateGatewayToServerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup-gateway/Interface/AssociateGatewayToServerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup-gateway/Interface/AssociateGatewayToServerCommandOutput/)
</details>
<details>
<summary>
CreateGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup-gateway/command/CreateGatewayCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup-gateway/Interface/CreateGatewayCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup-gateway/Interface/CreateGatewayCommandOutput/)
</details>
<details>
<summary>
DeleteGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup-gateway/command/DeleteGatewayCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup-gateway/Interface/DeleteGatewayCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup-gateway/Interface/DeleteGatewayCommandOutput/)
</details>
<details>
<summary>
DeleteHypervisor
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup-gateway/command/DeleteHypervisorCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup-gateway/Interface/DeleteHypervisorCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup-gateway/Interface/DeleteHypervisorCommandOutput/)
</details>
<details>
<summary>
DisassociateGatewayFromServer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup-gateway/command/DisassociateGatewayFromServerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup-gateway/Interface/DisassociateGatewayFromServerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup-gateway/Interface/DisassociateGatewayFromServerCommandOutput/)
</details>
<details>
<summary>
GetBandwidthRateLimitSchedule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup-gateway/command/GetBandwidthRateLimitScheduleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup-gateway/Interface/GetBandwidthRateLimitScheduleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup-gateway/Interface/GetBandwidthRateLimitScheduleCommandOutput/)
</details>
<details>
<summary>
GetGateway
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup-gateway/command/GetGatewayCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup-gateway/Interface/GetGatewayCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup-gateway/Interface/GetGatewayCommandOutput/)
</details>
<details>
<summary>
GetHypervisor
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup-gateway/command/GetHypervisorCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup-gateway/Interface/GetHypervisorCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup-gateway/Interface/GetHypervisorCommandOutput/)
</details>
<details>
<summary>
GetHypervisorPropertyMappings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup-gateway/command/GetHypervisorPropertyMappingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup-gateway/Interface/GetHypervisorPropertyMappingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup-gateway/Interface/GetHypervisorPropertyMappingsCommandOutput/)
</details>
<details>
<summary>
GetVirtualMachine
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup-gateway/command/GetVirtualMachineCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup-gateway/Interface/GetVirtualMachineCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup-gateway/Interface/GetVirtualMachineCommandOutput/)
</details>
<details>
<summary>
ImportHypervisorConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup-gateway/command/ImportHypervisorConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup-gateway/Interface/ImportHypervisorConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup-gateway/Interface/ImportHypervisorConfigurationCommandOutput/)
</details>
<details>
<summary>
ListGateways
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup-gateway/command/ListGatewaysCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup-gateway/Interface/ListGatewaysCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup-gateway/Interface/ListGatewaysCommandOutput/)
</details>
<details>
<summary>
ListHypervisors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup-gateway/command/ListHypervisorsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup-gateway/Interface/ListHypervisorsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup-gateway/Interface/ListHypervisorsCommandOutput/)
</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup-gateway/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup-gateway/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup-gateway/Interface/ListTagsForResourceCommandOutput/)
</details>
<details>
<summary>
ListVirtualMachines
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup-gateway/command/ListVirtualMachinesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup-gateway/Interface/ListVirtualMachinesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup-gateway/Interface/ListVirtualMachinesCommandOutput/)
</details>
<details>
<summary>
PutBandwidthRateLimitSchedule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup-gateway/command/PutBandwidthRateLimitScheduleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup-gateway/Interface/PutBandwidthRateLimitScheduleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup-gateway/Interface/PutBandwidthRateLimitScheduleCommandOutput/)
</details>
<details>
<summary>
PutHypervisorPropertyMappings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup-gateway/command/PutHypervisorPropertyMappingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup-gateway/Interface/PutHypervisorPropertyMappingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup-gateway/Interface/PutHypervisorPropertyMappingsCommandOutput/)
</details>
<details>
<summary>
PutMaintenanceStartTime
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup-gateway/command/PutMaintenanceStartTimeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup-gateway/Interface/PutMaintenanceStartTimeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup-gateway/Interface/PutMaintenanceStartTimeCommandOutput/)
</details>
<details>
<summary>
StartVirtualMachinesMetadataSync
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup-gateway/command/StartVirtualMachinesMetadataSyncCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup-gateway/Interface/StartVirtualMachinesMetadataSyncCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup-gateway/Interface/StartVirtualMachinesMetadataSyncCommandOutput/)
</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup-gateway/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup-gateway/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup-gateway/Interface/TagResourceCommandOutput/)
</details>
<details>
<summary>
TestHypervisorConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup-gateway/command/TestHypervisorConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup-gateway/Interface/TestHypervisorConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup-gateway/Interface/TestHypervisorConfigurationCommandOutput/)
</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup-gateway/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup-gateway/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup-gateway/Interface/UntagResourceCommandOutput/)
</details>
<details>
<summary>
UpdateGatewayInformation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup-gateway/command/UpdateGatewayInformationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup-gateway/Interface/UpdateGatewayInformationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup-gateway/Interface/UpdateGatewayInformationCommandOutput/)
</details>
<details>
<summary>
UpdateGatewaySoftwareNow
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup-gateway/command/UpdateGatewaySoftwareNowCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup-gateway/Interface/UpdateGatewaySoftwareNowCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup-gateway/Interface/UpdateGatewaySoftwareNowCommandOutput/)
</details>
<details>
<summary>
UpdateHypervisor
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/backup-gateway/command/UpdateHypervisorCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup-gateway/Interface/UpdateHypervisorCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-backup-gateway/Interface/UpdateHypervisorCommandOutput/)
</details>
