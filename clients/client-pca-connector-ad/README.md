<!-- generated file, do not edit directly -->

# @aws-sdk/client-pca-connector-ad

## Description

AWS SDK for JavaScript PcaConnectorAd Client for Node.js, Browser and React Native.

<p>Amazon Web Services Private CA Connector for Active Directory creates a connector between Amazon Web Services Private CA and Active Directory (AD) that enables you to
provision security certificates for AD signed by a private CA that you own. For more
information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/ad-connector.html">Amazon Web Services Private CA Connector for Active Directory</a>.</p>

## Installing

To install this package, simply type add or install @aws-sdk/client-pca-connector-ad
using your favorite package manager:

- `npm install @aws-sdk/client-pca-connector-ad`
- `yarn add @aws-sdk/client-pca-connector-ad`
- `pnpm add @aws-sdk/client-pca-connector-ad`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `PcaConnectorAdClient` and
the commands you need, for example `ListConnectorsCommand`:

```js
// ES5 example
const { PcaConnectorAdClient, ListConnectorsCommand } = require("@aws-sdk/client-pca-connector-ad");
```

```ts
// ES6+ example
import { PcaConnectorAdClient, ListConnectorsCommand } from "@aws-sdk/client-pca-connector-ad";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new PcaConnectorAdClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListConnectorsCommand(params);
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
import * as AWS from "@aws-sdk/client-pca-connector-ad";
const client = new AWS.PcaConnectorAd({ region: "REGION" });

// async/await.
try {
  const data = await client.listConnectors(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listConnectors(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listConnectors(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-pca-connector-ad` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CreateConnector
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pca-connector-ad/command/CreateConnectorCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pca-connector-ad/Interface/CreateConnectorCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pca-connector-ad/Interface/CreateConnectorCommandOutput/)

</details>
<details>
<summary>
CreateDirectoryRegistration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pca-connector-ad/command/CreateDirectoryRegistrationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pca-connector-ad/Interface/CreateDirectoryRegistrationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pca-connector-ad/Interface/CreateDirectoryRegistrationCommandOutput/)

</details>
<details>
<summary>
CreateServicePrincipalName
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pca-connector-ad/command/CreateServicePrincipalNameCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pca-connector-ad/Interface/CreateServicePrincipalNameCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pca-connector-ad/Interface/CreateServicePrincipalNameCommandOutput/)

</details>
<details>
<summary>
CreateTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pca-connector-ad/command/CreateTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pca-connector-ad/Interface/CreateTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pca-connector-ad/Interface/CreateTemplateCommandOutput/)

</details>
<details>
<summary>
CreateTemplateGroupAccessControlEntry
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pca-connector-ad/command/CreateTemplateGroupAccessControlEntryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pca-connector-ad/Interface/CreateTemplateGroupAccessControlEntryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pca-connector-ad/Interface/CreateTemplateGroupAccessControlEntryCommandOutput/)

</details>
<details>
<summary>
DeleteConnector
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pca-connector-ad/command/DeleteConnectorCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pca-connector-ad/Interface/DeleteConnectorCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pca-connector-ad/Interface/DeleteConnectorCommandOutput/)

</details>
<details>
<summary>
DeleteDirectoryRegistration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pca-connector-ad/command/DeleteDirectoryRegistrationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pca-connector-ad/Interface/DeleteDirectoryRegistrationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pca-connector-ad/Interface/DeleteDirectoryRegistrationCommandOutput/)

</details>
<details>
<summary>
DeleteServicePrincipalName
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pca-connector-ad/command/DeleteServicePrincipalNameCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pca-connector-ad/Interface/DeleteServicePrincipalNameCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pca-connector-ad/Interface/DeleteServicePrincipalNameCommandOutput/)

</details>
<details>
<summary>
DeleteTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pca-connector-ad/command/DeleteTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pca-connector-ad/Interface/DeleteTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pca-connector-ad/Interface/DeleteTemplateCommandOutput/)

</details>
<details>
<summary>
DeleteTemplateGroupAccessControlEntry
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pca-connector-ad/command/DeleteTemplateGroupAccessControlEntryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pca-connector-ad/Interface/DeleteTemplateGroupAccessControlEntryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pca-connector-ad/Interface/DeleteTemplateGroupAccessControlEntryCommandOutput/)

</details>
<details>
<summary>
GetConnector
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pca-connector-ad/command/GetConnectorCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pca-connector-ad/Interface/GetConnectorCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pca-connector-ad/Interface/GetConnectorCommandOutput/)

</details>
<details>
<summary>
GetDirectoryRegistration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pca-connector-ad/command/GetDirectoryRegistrationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pca-connector-ad/Interface/GetDirectoryRegistrationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pca-connector-ad/Interface/GetDirectoryRegistrationCommandOutput/)

</details>
<details>
<summary>
GetServicePrincipalName
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pca-connector-ad/command/GetServicePrincipalNameCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pca-connector-ad/Interface/GetServicePrincipalNameCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pca-connector-ad/Interface/GetServicePrincipalNameCommandOutput/)

</details>
<details>
<summary>
GetTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pca-connector-ad/command/GetTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pca-connector-ad/Interface/GetTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pca-connector-ad/Interface/GetTemplateCommandOutput/)

</details>
<details>
<summary>
GetTemplateGroupAccessControlEntry
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pca-connector-ad/command/GetTemplateGroupAccessControlEntryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pca-connector-ad/Interface/GetTemplateGroupAccessControlEntryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pca-connector-ad/Interface/GetTemplateGroupAccessControlEntryCommandOutput/)

</details>
<details>
<summary>
ListConnectors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pca-connector-ad/command/ListConnectorsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pca-connector-ad/Interface/ListConnectorsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pca-connector-ad/Interface/ListConnectorsCommandOutput/)

</details>
<details>
<summary>
ListDirectoryRegistrations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pca-connector-ad/command/ListDirectoryRegistrationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pca-connector-ad/Interface/ListDirectoryRegistrationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pca-connector-ad/Interface/ListDirectoryRegistrationsCommandOutput/)

</details>
<details>
<summary>
ListServicePrincipalNames
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pca-connector-ad/command/ListServicePrincipalNamesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pca-connector-ad/Interface/ListServicePrincipalNamesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pca-connector-ad/Interface/ListServicePrincipalNamesCommandOutput/)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pca-connector-ad/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pca-connector-ad/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pca-connector-ad/Interface/ListTagsForResourceCommandOutput/)

</details>
<details>
<summary>
ListTemplateGroupAccessControlEntries
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pca-connector-ad/command/ListTemplateGroupAccessControlEntriesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pca-connector-ad/Interface/ListTemplateGroupAccessControlEntriesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pca-connector-ad/Interface/ListTemplateGroupAccessControlEntriesCommandOutput/)

</details>
<details>
<summary>
ListTemplates
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pca-connector-ad/command/ListTemplatesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pca-connector-ad/Interface/ListTemplatesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pca-connector-ad/Interface/ListTemplatesCommandOutput/)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pca-connector-ad/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pca-connector-ad/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pca-connector-ad/Interface/TagResourceCommandOutput/)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pca-connector-ad/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pca-connector-ad/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pca-connector-ad/Interface/UntagResourceCommandOutput/)

</details>
<details>
<summary>
UpdateTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pca-connector-ad/command/UpdateTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pca-connector-ad/Interface/UpdateTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pca-connector-ad/Interface/UpdateTemplateCommandOutput/)

</details>
<details>
<summary>
UpdateTemplateGroupAccessControlEntry
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/pca-connector-ad/command/UpdateTemplateGroupAccessControlEntryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pca-connector-ad/Interface/UpdateTemplateGroupAccessControlEntryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-pca-connector-ad/Interface/UpdateTemplateGroupAccessControlEntryCommandOutput/)

</details>
