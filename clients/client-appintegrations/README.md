<!-- generated file, do not edit directly -->

# @aws-sdk/client-appintegrations

## Description

AWS SDK for JavaScript AppIntegrations Client for Node.js, Browser and React Native.

<p>The Amazon AppIntegrations service enables you to configure and reuse connections to external
applications.</p>
<p>For information about how you can use external applications with Amazon Connect, see
<a href="https://docs.aws.amazon.com/connect/latest/adminguide/crm.html">Set up pre-built
integrations</a> and <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-wisdom.html">Deliver information to agents
using Amazon Connect Wisdom</a> in the <i>Amazon Connect Administrator
Guide</i>.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-appintegrations
using your favorite package manager:

- `npm install @aws-sdk/client-appintegrations`
- `yarn add @aws-sdk/client-appintegrations`
- `pnpm add @aws-sdk/client-appintegrations`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `AppIntegrationsClient` and
the commands you need, for example `CreateDataIntegrationCommand`:

```js
// ES5 example
const { AppIntegrationsClient, CreateDataIntegrationCommand } = require("@aws-sdk/client-appintegrations");
```

```ts
// ES6+ example
import { AppIntegrationsClient, CreateDataIntegrationCommand } from "@aws-sdk/client-appintegrations";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new AppIntegrationsClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new CreateDataIntegrationCommand(params);
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
import * as AWS from "@aws-sdk/client-appintegrations";
const client = new AWS.AppIntegrations({ region: "REGION" });

// async/await.
try {
  const data = await client.createDataIntegration(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .createDataIntegration(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.createDataIntegration(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-appintegrations` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CreateDataIntegration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appintegrations/classes/createdataintegrationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appintegrations/interfaces/createdataintegrationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appintegrations/interfaces/createdataintegrationcommandoutput.html)

</details>
<details>
<summary>
CreateEventIntegration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appintegrations/classes/createeventintegrationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appintegrations/interfaces/createeventintegrationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appintegrations/interfaces/createeventintegrationcommandoutput.html)

</details>
<details>
<summary>
DeleteDataIntegration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appintegrations/classes/deletedataintegrationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appintegrations/interfaces/deletedataintegrationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appintegrations/interfaces/deletedataintegrationcommandoutput.html)

</details>
<details>
<summary>
DeleteEventIntegration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appintegrations/classes/deleteeventintegrationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appintegrations/interfaces/deleteeventintegrationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appintegrations/interfaces/deleteeventintegrationcommandoutput.html)

</details>
<details>
<summary>
GetDataIntegration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appintegrations/classes/getdataintegrationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appintegrations/interfaces/getdataintegrationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appintegrations/interfaces/getdataintegrationcommandoutput.html)

</details>
<details>
<summary>
GetEventIntegration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appintegrations/classes/geteventintegrationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appintegrations/interfaces/geteventintegrationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appintegrations/interfaces/geteventintegrationcommandoutput.html)

</details>
<details>
<summary>
ListDataIntegrationAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appintegrations/classes/listdataintegrationassociationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appintegrations/interfaces/listdataintegrationassociationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appintegrations/interfaces/listdataintegrationassociationscommandoutput.html)

</details>
<details>
<summary>
ListDataIntegrations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appintegrations/classes/listdataintegrationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appintegrations/interfaces/listdataintegrationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appintegrations/interfaces/listdataintegrationscommandoutput.html)

</details>
<details>
<summary>
ListEventIntegrationAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appintegrations/classes/listeventintegrationassociationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appintegrations/interfaces/listeventintegrationassociationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appintegrations/interfaces/listeventintegrationassociationscommandoutput.html)

</details>
<details>
<summary>
ListEventIntegrations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appintegrations/classes/listeventintegrationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appintegrations/interfaces/listeventintegrationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appintegrations/interfaces/listeventintegrationscommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appintegrations/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appintegrations/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appintegrations/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appintegrations/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appintegrations/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appintegrations/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appintegrations/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appintegrations/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appintegrations/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateDataIntegration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appintegrations/classes/updatedataintegrationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appintegrations/interfaces/updatedataintegrationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appintegrations/interfaces/updatedataintegrationcommandoutput.html)

</details>
<details>
<summary>
UpdateEventIntegration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appintegrations/classes/updateeventintegrationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appintegrations/interfaces/updateeventintegrationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appintegrations/interfaces/updateeventintegrationcommandoutput.html)

</details>
