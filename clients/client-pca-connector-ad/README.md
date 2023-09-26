<!-- generated file, do not edit directly -->

# @aws-sdk/client-pca-connector-ad

## Description

AWS SDK for JavaScript PcaConnectorAd Client for Node.js, Browser and React Native.

<p>Amazon Web Services Private CA Connector for Active Directory creates a connector between Amazon Web Services Private CA and Active Directory (AD) that enables you to
provision security certificates for AD signed by a private CA that you own. For more
information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/ad-connector.html">Amazon Web Services Private CA Connector for Active Directory</a>.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-pca-connector-ad
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/classes/createconnectorcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/interfaces/createconnectorcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/interfaces/createconnectorcommandoutput.html)

</details>
<details>
<summary>
CreateDirectoryRegistration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/classes/createdirectoryregistrationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/interfaces/createdirectoryregistrationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/interfaces/createdirectoryregistrationcommandoutput.html)

</details>
<details>
<summary>
CreateServicePrincipalName
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/classes/createserviceprincipalnamecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/interfaces/createserviceprincipalnamecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/interfaces/createserviceprincipalnamecommandoutput.html)

</details>
<details>
<summary>
CreateTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/classes/createtemplatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/interfaces/createtemplatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/interfaces/createtemplatecommandoutput.html)

</details>
<details>
<summary>
CreateTemplateGroupAccessControlEntry
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/classes/createtemplategroupaccesscontrolentrycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/interfaces/createtemplategroupaccesscontrolentrycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/interfaces/createtemplategroupaccesscontrolentrycommandoutput.html)

</details>
<details>
<summary>
DeleteConnector
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/classes/deleteconnectorcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/interfaces/deleteconnectorcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/interfaces/deleteconnectorcommandoutput.html)

</details>
<details>
<summary>
DeleteDirectoryRegistration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/classes/deletedirectoryregistrationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/interfaces/deletedirectoryregistrationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/interfaces/deletedirectoryregistrationcommandoutput.html)

</details>
<details>
<summary>
DeleteServicePrincipalName
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/classes/deleteserviceprincipalnamecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/interfaces/deleteserviceprincipalnamecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/interfaces/deleteserviceprincipalnamecommandoutput.html)

</details>
<details>
<summary>
DeleteTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/classes/deletetemplatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/interfaces/deletetemplatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/interfaces/deletetemplatecommandoutput.html)

</details>
<details>
<summary>
DeleteTemplateGroupAccessControlEntry
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/classes/deletetemplategroupaccesscontrolentrycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/interfaces/deletetemplategroupaccesscontrolentrycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/interfaces/deletetemplategroupaccesscontrolentrycommandoutput.html)

</details>
<details>
<summary>
GetConnector
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/classes/getconnectorcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/interfaces/getconnectorcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/interfaces/getconnectorcommandoutput.html)

</details>
<details>
<summary>
GetDirectoryRegistration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/classes/getdirectoryregistrationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/interfaces/getdirectoryregistrationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/interfaces/getdirectoryregistrationcommandoutput.html)

</details>
<details>
<summary>
GetServicePrincipalName
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/classes/getserviceprincipalnamecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/interfaces/getserviceprincipalnamecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/interfaces/getserviceprincipalnamecommandoutput.html)

</details>
<details>
<summary>
GetTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/classes/gettemplatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/interfaces/gettemplatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/interfaces/gettemplatecommandoutput.html)

</details>
<details>
<summary>
GetTemplateGroupAccessControlEntry
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/classes/gettemplategroupaccesscontrolentrycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/interfaces/gettemplategroupaccesscontrolentrycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/interfaces/gettemplategroupaccesscontrolentrycommandoutput.html)

</details>
<details>
<summary>
ListConnectors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/classes/listconnectorscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/interfaces/listconnectorscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/interfaces/listconnectorscommandoutput.html)

</details>
<details>
<summary>
ListDirectoryRegistrations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/classes/listdirectoryregistrationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/interfaces/listdirectoryregistrationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/interfaces/listdirectoryregistrationscommandoutput.html)

</details>
<details>
<summary>
ListServicePrincipalNames
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/classes/listserviceprincipalnamescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/interfaces/listserviceprincipalnamescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/interfaces/listserviceprincipalnamescommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
ListTemplateGroupAccessControlEntries
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/classes/listtemplategroupaccesscontrolentriescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/interfaces/listtemplategroupaccesscontrolentriescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/interfaces/listtemplategroupaccesscontrolentriescommandoutput.html)

</details>
<details>
<summary>
ListTemplates
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/classes/listtemplatescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/interfaces/listtemplatescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/interfaces/listtemplatescommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/classes/updatetemplatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/interfaces/updatetemplatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/interfaces/updatetemplatecommandoutput.html)

</details>
<details>
<summary>
UpdateTemplateGroupAccessControlEntry
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/classes/updatetemplategroupaccesscontrolentrycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/interfaces/updatetemplategroupaccesscontrolentrycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pca-connector-ad/interfaces/updatetemplategroupaccesscontrolentrycommandoutput.html)

</details>
