<!-- generated file, do not edit directly -->

# @aws-sdk/client-service-quotas

## Description

AWS SDK for JavaScript ServiceQuotas Client for Node.js, Browser and React Native.

<p>With Service Quotas, you can view and manage your quotas easily as your AWS workloads
grow. Quotas, also referred to as limits, are the maximum number of resources that you can
create in your AWS account. For more information, see the <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/">Service Quotas User Guide</a>.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-service-quotas
using your favorite package manager:

- `npm install @aws-sdk/client-service-quotas`
- `yarn add @aws-sdk/client-service-quotas`
- `pnpm add @aws-sdk/client-service-quotas`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `ServiceQuotasClient` and
the commands you need, for example `AssociateServiceQuotaTemplateCommand`:

```js
// ES5 example
const { ServiceQuotasClient, AssociateServiceQuotaTemplateCommand } = require("@aws-sdk/client-service-quotas");
```

```ts
// ES6+ example
import { ServiceQuotasClient, AssociateServiceQuotaTemplateCommand } from "@aws-sdk/client-service-quotas";
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
const command = new AssociateServiceQuotaTemplateCommand(params);
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
  const data = await client.associateServiceQuotaTemplate(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .associateServiceQuotaTemplate(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.associateServiceQuotaTemplate(params, (err, data) => {
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-service-quotas/classes/associateservicequotatemplatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-service-quotas/interfaces/associateservicequotatemplatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-service-quotas/interfaces/associateservicequotatemplatecommandoutput.html)

</details>
<details>
<summary>
DeleteServiceQuotaIncreaseRequestFromTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-service-quotas/classes/deleteservicequotaincreaserequestfromtemplatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-service-quotas/interfaces/deleteservicequotaincreaserequestfromtemplatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-service-quotas/interfaces/deleteservicequotaincreaserequestfromtemplatecommandoutput.html)

</details>
<details>
<summary>
DisassociateServiceQuotaTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-service-quotas/classes/disassociateservicequotatemplatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-service-quotas/interfaces/disassociateservicequotatemplatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-service-quotas/interfaces/disassociateservicequotatemplatecommandoutput.html)

</details>
<details>
<summary>
GetAssociationForServiceQuotaTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-service-quotas/classes/getassociationforservicequotatemplatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-service-quotas/interfaces/getassociationforservicequotatemplatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-service-quotas/interfaces/getassociationforservicequotatemplatecommandoutput.html)

</details>
<details>
<summary>
GetAWSDefaultServiceQuota
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-service-quotas/classes/getawsdefaultservicequotacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-service-quotas/interfaces/getawsdefaultservicequotacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-service-quotas/interfaces/getawsdefaultservicequotacommandoutput.html)

</details>
<details>
<summary>
GetRequestedServiceQuotaChange
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-service-quotas/classes/getrequestedservicequotachangecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-service-quotas/interfaces/getrequestedservicequotachangecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-service-quotas/interfaces/getrequestedservicequotachangecommandoutput.html)

</details>
<details>
<summary>
GetServiceQuota
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-service-quotas/classes/getservicequotacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-service-quotas/interfaces/getservicequotacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-service-quotas/interfaces/getservicequotacommandoutput.html)

</details>
<details>
<summary>
GetServiceQuotaIncreaseRequestFromTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-service-quotas/classes/getservicequotaincreaserequestfromtemplatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-service-quotas/interfaces/getservicequotaincreaserequestfromtemplatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-service-quotas/interfaces/getservicequotaincreaserequestfromtemplatecommandoutput.html)

</details>
<details>
<summary>
ListAWSDefaultServiceQuotas
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-service-quotas/classes/listawsdefaultservicequotascommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-service-quotas/interfaces/listawsdefaultservicequotascommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-service-quotas/interfaces/listawsdefaultservicequotascommandoutput.html)

</details>
<details>
<summary>
ListRequestedServiceQuotaChangeHistory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-service-quotas/classes/listrequestedservicequotachangehistorycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-service-quotas/interfaces/listrequestedservicequotachangehistorycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-service-quotas/interfaces/listrequestedservicequotachangehistorycommandoutput.html)

</details>
<details>
<summary>
ListRequestedServiceQuotaChangeHistoryByQuota
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-service-quotas/classes/listrequestedservicequotachangehistorybyquotacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-service-quotas/interfaces/listrequestedservicequotachangehistorybyquotacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-service-quotas/interfaces/listrequestedservicequotachangehistorybyquotacommandoutput.html)

</details>
<details>
<summary>
ListServiceQuotaIncreaseRequestsInTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-service-quotas/classes/listservicequotaincreaserequestsintemplatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-service-quotas/interfaces/listservicequotaincreaserequestsintemplatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-service-quotas/interfaces/listservicequotaincreaserequestsintemplatecommandoutput.html)

</details>
<details>
<summary>
ListServiceQuotas
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-service-quotas/classes/listservicequotascommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-service-quotas/interfaces/listservicequotascommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-service-quotas/interfaces/listservicequotascommandoutput.html)

</details>
<details>
<summary>
ListServices
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-service-quotas/classes/listservicescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-service-quotas/interfaces/listservicescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-service-quotas/interfaces/listservicescommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-service-quotas/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-service-quotas/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-service-quotas/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
PutServiceQuotaIncreaseRequestIntoTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-service-quotas/classes/putservicequotaincreaserequestintotemplatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-service-quotas/interfaces/putservicequotaincreaserequestintotemplatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-service-quotas/interfaces/putservicequotaincreaserequestintotemplatecommandoutput.html)

</details>
<details>
<summary>
RequestServiceQuotaIncrease
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-service-quotas/classes/requestservicequotaincreasecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-service-quotas/interfaces/requestservicequotaincreasecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-service-quotas/interfaces/requestservicequotaincreasecommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-service-quotas/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-service-quotas/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-service-quotas/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-service-quotas/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-service-quotas/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-service-quotas/interfaces/untagresourcecommandoutput.html)

</details>
