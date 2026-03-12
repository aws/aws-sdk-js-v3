<!-- generated file, do not edit directly -->

# @aws-sdk/client-connectcampaignsv2

## Description

AWS SDK for JavaScript ConnectCampaignsV2 Client for Node.js, Browser and React Native.

Provide APIs to create and manage Amazon Connect Campaigns.

## Installing

To install this package, use the CLI of your favorite package manager:

- `npm install @aws-sdk/client-connectcampaignsv2`
- `yarn add @aws-sdk/client-connectcampaignsv2`
- `pnpm add @aws-sdk/client-connectcampaignsv2`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `ConnectCampaignsV2Client` and
the commands you need, for example `ListCampaignsCommand`:

```js
// ES5 example
const { ConnectCampaignsV2Client, ListCampaignsCommand } = require("@aws-sdk/client-connectcampaignsv2");
```

```ts
// ES6+ example
import { ConnectCampaignsV2Client, ListCampaignsCommand } from "@aws-sdk/client-connectcampaignsv2";
```

### Usage

To send a request:

- Instantiate a client with configuration (e.g. credentials, region).
  - See [docs/CLIENTS](https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/CLIENTS.md) for configuration details.
  - See [@aws-sdk/config](https://github.com/aws/aws-sdk-js-v3/blob/main/packages/config/README.md) for additional options.
- Instantiate a command with input parameters.
- Call the `send` operation on the client, providing the command object as input.

```js
const client = new ConnectCampaignsV2Client({ region: "REGION" });

const params = { /** input parameters */ };
const command = new ListCampaignsCommand(params);
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

`ConnectCampaignsV2` extends `ConnectCampaignsV2Client` and additionally supports all operations, waiters, and paginators as methods.
This style may be familiar to you from the AWS SDK for JavaScript v2.

If you are bundling the AWS SDK, we recommend using only the bare-bones client (`ConnectCampaignsV2Client`).
More details are in the blog post on
[modular packages in AWS SDK for JavaScript](https://aws.amazon.com/blogs/developer/modular-packages-in-aws-sdk-for-javascript/).

```ts
import { ConnectCampaignsV2 } from "@aws-sdk/client-connectcampaignsv2";

const client = new ConnectCampaignsV2({ region: "REGION" });

// async/await.
try {
  const data = await client.listCampaigns(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listCampaigns(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks (not recommended).
client.listCampaigns(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-connectcampaignsv2` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CreateCampaign
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/connectcampaignsv2/command/CreateCampaignCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/CreateCampaignCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/CreateCampaignCommandOutput/)
</details>
<details>
<summary>
DeleteCampaign
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/connectcampaignsv2/command/DeleteCampaignCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/DeleteCampaignCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/DeleteCampaignCommandOutput/)
</details>
<details>
<summary>
DeleteCampaignChannelSubtypeConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/connectcampaignsv2/command/DeleteCampaignChannelSubtypeConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/DeleteCampaignChannelSubtypeConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/DeleteCampaignChannelSubtypeConfigCommandOutput/)
</details>
<details>
<summary>
DeleteCampaignCommunicationLimits
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/connectcampaignsv2/command/DeleteCampaignCommunicationLimitsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/DeleteCampaignCommunicationLimitsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/DeleteCampaignCommunicationLimitsCommandOutput/)
</details>
<details>
<summary>
DeleteCampaignCommunicationTime
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/connectcampaignsv2/command/DeleteCampaignCommunicationTimeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/DeleteCampaignCommunicationTimeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/DeleteCampaignCommunicationTimeCommandOutput/)
</details>
<details>
<summary>
DeleteConnectInstanceConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/connectcampaignsv2/command/DeleteConnectInstanceConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/DeleteConnectInstanceConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/DeleteConnectInstanceConfigCommandOutput/)
</details>
<details>
<summary>
DeleteConnectInstanceIntegration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/connectcampaignsv2/command/DeleteConnectInstanceIntegrationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/DeleteConnectInstanceIntegrationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/DeleteConnectInstanceIntegrationCommandOutput/)
</details>
<details>
<summary>
DeleteInstanceOnboardingJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/connectcampaignsv2/command/DeleteInstanceOnboardingJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/DeleteInstanceOnboardingJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/DeleteInstanceOnboardingJobCommandOutput/)
</details>
<details>
<summary>
DescribeCampaign
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/connectcampaignsv2/command/DescribeCampaignCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/DescribeCampaignCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/DescribeCampaignCommandOutput/)
</details>
<details>
<summary>
GetCampaignState
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/connectcampaignsv2/command/GetCampaignStateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/GetCampaignStateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/GetCampaignStateCommandOutput/)
</details>
<details>
<summary>
GetCampaignStateBatch
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/connectcampaignsv2/command/GetCampaignStateBatchCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/GetCampaignStateBatchCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/GetCampaignStateBatchCommandOutput/)
</details>
<details>
<summary>
GetConnectInstanceConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/connectcampaignsv2/command/GetConnectInstanceConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/GetConnectInstanceConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/GetConnectInstanceConfigCommandOutput/)
</details>
<details>
<summary>
GetInstanceCommunicationLimits
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/connectcampaignsv2/command/GetInstanceCommunicationLimitsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/GetInstanceCommunicationLimitsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/GetInstanceCommunicationLimitsCommandOutput/)
</details>
<details>
<summary>
GetInstanceOnboardingJobStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/connectcampaignsv2/command/GetInstanceOnboardingJobStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/GetInstanceOnboardingJobStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/GetInstanceOnboardingJobStatusCommandOutput/)
</details>
<details>
<summary>
ListCampaigns
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/connectcampaignsv2/command/ListCampaignsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/ListCampaignsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/ListCampaignsCommandOutput/)
</details>
<details>
<summary>
ListConnectInstanceIntegrations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/connectcampaignsv2/command/ListConnectInstanceIntegrationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/ListConnectInstanceIntegrationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/ListConnectInstanceIntegrationsCommandOutput/)
</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/connectcampaignsv2/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/ListTagsForResourceCommandOutput/)
</details>
<details>
<summary>
PauseCampaign
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/connectcampaignsv2/command/PauseCampaignCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/PauseCampaignCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/PauseCampaignCommandOutput/)
</details>
<details>
<summary>
PutConnectInstanceIntegration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/connectcampaignsv2/command/PutConnectInstanceIntegrationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/PutConnectInstanceIntegrationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/PutConnectInstanceIntegrationCommandOutput/)
</details>
<details>
<summary>
PutInstanceCommunicationLimits
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/connectcampaignsv2/command/PutInstanceCommunicationLimitsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/PutInstanceCommunicationLimitsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/PutInstanceCommunicationLimitsCommandOutput/)
</details>
<details>
<summary>
PutOutboundRequestBatch
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/connectcampaignsv2/command/PutOutboundRequestBatchCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/PutOutboundRequestBatchCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/PutOutboundRequestBatchCommandOutput/)
</details>
<details>
<summary>
PutProfileOutboundRequestBatch
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/connectcampaignsv2/command/PutProfileOutboundRequestBatchCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/PutProfileOutboundRequestBatchCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/PutProfileOutboundRequestBatchCommandOutput/)
</details>
<details>
<summary>
ResumeCampaign
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/connectcampaignsv2/command/ResumeCampaignCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/ResumeCampaignCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/ResumeCampaignCommandOutput/)
</details>
<details>
<summary>
StartCampaign
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/connectcampaignsv2/command/StartCampaignCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/StartCampaignCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/StartCampaignCommandOutput/)
</details>
<details>
<summary>
StartInstanceOnboardingJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/connectcampaignsv2/command/StartInstanceOnboardingJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/StartInstanceOnboardingJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/StartInstanceOnboardingJobCommandOutput/)
</details>
<details>
<summary>
StopCampaign
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/connectcampaignsv2/command/StopCampaignCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/StopCampaignCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/StopCampaignCommandOutput/)
</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/connectcampaignsv2/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/TagResourceCommandOutput/)
</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/connectcampaignsv2/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/UntagResourceCommandOutput/)
</details>
<details>
<summary>
UpdateCampaignChannelSubtypeConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/connectcampaignsv2/command/UpdateCampaignChannelSubtypeConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/UpdateCampaignChannelSubtypeConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/UpdateCampaignChannelSubtypeConfigCommandOutput/)
</details>
<details>
<summary>
UpdateCampaignCommunicationLimits
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/connectcampaignsv2/command/UpdateCampaignCommunicationLimitsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/UpdateCampaignCommunicationLimitsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/UpdateCampaignCommunicationLimitsCommandOutput/)
</details>
<details>
<summary>
UpdateCampaignCommunicationTime
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/connectcampaignsv2/command/UpdateCampaignCommunicationTimeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/UpdateCampaignCommunicationTimeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/UpdateCampaignCommunicationTimeCommandOutput/)
</details>
<details>
<summary>
UpdateCampaignFlowAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/connectcampaignsv2/command/UpdateCampaignFlowAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/UpdateCampaignFlowAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/UpdateCampaignFlowAssociationCommandOutput/)
</details>
<details>
<summary>
UpdateCampaignName
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/connectcampaignsv2/command/UpdateCampaignNameCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/UpdateCampaignNameCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/UpdateCampaignNameCommandOutput/)
</details>
<details>
<summary>
UpdateCampaignSchedule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/connectcampaignsv2/command/UpdateCampaignScheduleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/UpdateCampaignScheduleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/UpdateCampaignScheduleCommandOutput/)
</details>
<details>
<summary>
UpdateCampaignSource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/connectcampaignsv2/command/UpdateCampaignSourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/UpdateCampaignSourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-connectcampaignsv2/Interface/UpdateCampaignSourceCommandOutput/)
</details>
