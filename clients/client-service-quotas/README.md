<!-- generated file, do not edit directly -->

# @aws-sdk/client-service-quotas

## Description

AWS SDK for JavaScript ServiceQuotas Client for Node.js, Browser and React Native.

<p>With Service Quotas, you can view and manage your quotas easily as your Amazon Web Services workloads grow.
Quotas, also referred to as limits, are the maximum number of resources that you can
create in your Amazon Web Services account. For more information, see the <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/">Service Quotas User Guide</a>.</p>
<p>You need Amazon Web Services CLI version 2.13.20 or higher to view and manage resource-level quotas such as <code>Instances
per domain</code> for Amazon OpenSearch Service.</p>

## Installing

To install this package, simply type add or install @aws-sdk/client-service-quotas
using your favorite package manager:

- `npm install @aws-sdk/client-service-quotas`
- `yarn add @aws-sdk/client-service-quotas`
- `pnpm add @aws-sdk/client-service-quotas`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `ServiceQuotasClient` and
the commands you need, for example `ListServicesCommand`:

```js
// ES5 example
const { ServiceQuotasClient, ListServicesCommand } = require("@aws-sdk/client-service-quotas");
```

```ts
// ES6+ example
import { ServiceQuotasClient, ListServicesCommand } from "@aws-sdk/client-service-quotas";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new ServiceQuotasClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListServicesCommand(params);
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
import * as AWS from "@aws-sdk/client-service-quotas";
const client = new AWS.ServiceQuotas({ region: "REGION" });

// async/await.
try {
  const data = await client.listServices(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listServices(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listServices(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-service-quotas` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AssociateServiceQuotaTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-quotas/command/AssociateServiceQuotaTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-quotas/Interface/AssociateServiceQuotaTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-quotas/Interface/AssociateServiceQuotaTemplateCommandOutput/)

</details>
<details>
<summary>
DeleteServiceQuotaIncreaseRequestFromTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-quotas/command/DeleteServiceQuotaIncreaseRequestFromTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-quotas/Interface/DeleteServiceQuotaIncreaseRequestFromTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-quotas/Interface/DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput/)

</details>
<details>
<summary>
DisassociateServiceQuotaTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-quotas/command/DisassociateServiceQuotaTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-quotas/Interface/DisassociateServiceQuotaTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-quotas/Interface/DisassociateServiceQuotaTemplateCommandOutput/)

</details>
<details>
<summary>
GetAssociationForServiceQuotaTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-quotas/command/GetAssociationForServiceQuotaTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-quotas/Interface/GetAssociationForServiceQuotaTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-quotas/Interface/GetAssociationForServiceQuotaTemplateCommandOutput/)

</details>
<details>
<summary>
GetAWSDefaultServiceQuota
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-quotas/command/GetAWSDefaultServiceQuotaCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-quotas/Interface/GetAWSDefaultServiceQuotaCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-quotas/Interface/GetAWSDefaultServiceQuotaCommandOutput/)

</details>
<details>
<summary>
GetRequestedServiceQuotaChange
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-quotas/command/GetRequestedServiceQuotaChangeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-quotas/Interface/GetRequestedServiceQuotaChangeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-quotas/Interface/GetRequestedServiceQuotaChangeCommandOutput/)

</details>
<details>
<summary>
GetServiceQuota
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-quotas/command/GetServiceQuotaCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-quotas/Interface/GetServiceQuotaCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-quotas/Interface/GetServiceQuotaCommandOutput/)

</details>
<details>
<summary>
GetServiceQuotaIncreaseRequestFromTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-quotas/command/GetServiceQuotaIncreaseRequestFromTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-quotas/Interface/GetServiceQuotaIncreaseRequestFromTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-quotas/Interface/GetServiceQuotaIncreaseRequestFromTemplateCommandOutput/)

</details>
<details>
<summary>
ListAWSDefaultServiceQuotas
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-quotas/command/ListAWSDefaultServiceQuotasCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-quotas/Interface/ListAWSDefaultServiceQuotasCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-quotas/Interface/ListAWSDefaultServiceQuotasCommandOutput/)

</details>
<details>
<summary>
ListRequestedServiceQuotaChangeHistory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-quotas/command/ListRequestedServiceQuotaChangeHistoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-quotas/Interface/ListRequestedServiceQuotaChangeHistoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-quotas/Interface/ListRequestedServiceQuotaChangeHistoryCommandOutput/)

</details>
<details>
<summary>
ListRequestedServiceQuotaChangeHistoryByQuota
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-quotas/command/ListRequestedServiceQuotaChangeHistoryByQuotaCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-quotas/Interface/ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-quotas/Interface/ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput/)

</details>
<details>
<summary>
ListServiceQuotaIncreaseRequestsInTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-quotas/command/ListServiceQuotaIncreaseRequestsInTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-quotas/Interface/ListServiceQuotaIncreaseRequestsInTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-quotas/Interface/ListServiceQuotaIncreaseRequestsInTemplateCommandOutput/)

</details>
<details>
<summary>
ListServiceQuotas
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-quotas/command/ListServiceQuotasCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-quotas/Interface/ListServiceQuotasCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-quotas/Interface/ListServiceQuotasCommandOutput/)

</details>
<details>
<summary>
ListServices
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-quotas/command/ListServicesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-quotas/Interface/ListServicesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-quotas/Interface/ListServicesCommandOutput/)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-quotas/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-quotas/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-quotas/Interface/ListTagsForResourceCommandOutput/)

</details>
<details>
<summary>
PutServiceQuotaIncreaseRequestIntoTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-quotas/command/PutServiceQuotaIncreaseRequestIntoTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-quotas/Interface/PutServiceQuotaIncreaseRequestIntoTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-quotas/Interface/PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput/)

</details>
<details>
<summary>
RequestServiceQuotaIncrease
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-quotas/command/RequestServiceQuotaIncreaseCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-quotas/Interface/RequestServiceQuotaIncreaseCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-quotas/Interface/RequestServiceQuotaIncreaseCommandOutput/)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-quotas/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-quotas/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-quotas/Interface/TagResourceCommandOutput/)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-quotas/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-quotas/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-quotas/Interface/UntagResourceCommandOutput/)

</details>
