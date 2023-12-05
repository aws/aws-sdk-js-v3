<!-- generated file, do not edit directly -->

# @aws-sdk/client-bcm-data-exports

## Description

AWS SDK for JavaScript BCMDataExports Client for Node.js, Browser and React Native.

<p>You can use the Data Exports API to create customized exports from multiple Amazon Web Services cost management and billing datasets, such as cost and usage data and cost
optimization recommendations.</p>
<p>The Data Exports API provides the following endpoint:</p>
<ul>
<li>
<p>https://bcm-data-exports.us-east-1.api.aws</p>
</li>
</ul>

## Installing

To install the this package, simply type add or install @aws-sdk/client-bcm-data-exports
using your favorite package manager:

- `npm install @aws-sdk/client-bcm-data-exports`
- `yarn add @aws-sdk/client-bcm-data-exports`
- `pnpm add @aws-sdk/client-bcm-data-exports`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `BCMDataExportsClient` and
the commands you need, for example `ListExportsCommand`:

```js
// ES5 example
const { BCMDataExportsClient, ListExportsCommand } = require("@aws-sdk/client-bcm-data-exports");
```

```ts
// ES6+ example
import { BCMDataExportsClient, ListExportsCommand } from "@aws-sdk/client-bcm-data-exports";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new BCMDataExportsClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListExportsCommand(params);
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
import * as AWS from "@aws-sdk/client-bcm-data-exports";
const client = new AWS.BCMDataExports({ region: "REGION" });

// async/await.
try {
  const data = await client.listExports(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listExports(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listExports(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-bcm-data-exports` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CreateExport
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bcm-data-exports/classes/createexportcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bcm-data-exports/interfaces/createexportcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bcm-data-exports/interfaces/createexportcommandoutput.html)

</details>
<details>
<summary>
DeleteExport
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bcm-data-exports/classes/deleteexportcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bcm-data-exports/interfaces/deleteexportcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bcm-data-exports/interfaces/deleteexportcommandoutput.html)

</details>
<details>
<summary>
GetExecution
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bcm-data-exports/classes/getexecutioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bcm-data-exports/interfaces/getexecutioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bcm-data-exports/interfaces/getexecutioncommandoutput.html)

</details>
<details>
<summary>
GetExport
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bcm-data-exports/classes/getexportcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bcm-data-exports/interfaces/getexportcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bcm-data-exports/interfaces/getexportcommandoutput.html)

</details>
<details>
<summary>
GetTable
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bcm-data-exports/classes/gettablecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bcm-data-exports/interfaces/gettablecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bcm-data-exports/interfaces/gettablecommandoutput.html)

</details>
<details>
<summary>
ListExecutions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bcm-data-exports/classes/listexecutionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bcm-data-exports/interfaces/listexecutionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bcm-data-exports/interfaces/listexecutionscommandoutput.html)

</details>
<details>
<summary>
ListExports
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bcm-data-exports/classes/listexportscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bcm-data-exports/interfaces/listexportscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bcm-data-exports/interfaces/listexportscommandoutput.html)

</details>
<details>
<summary>
ListTables
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bcm-data-exports/classes/listtablescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bcm-data-exports/interfaces/listtablescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bcm-data-exports/interfaces/listtablescommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bcm-data-exports/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bcm-data-exports/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bcm-data-exports/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bcm-data-exports/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bcm-data-exports/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bcm-data-exports/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bcm-data-exports/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bcm-data-exports/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bcm-data-exports/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateExport
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bcm-data-exports/classes/updateexportcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bcm-data-exports/interfaces/updateexportcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-bcm-data-exports/interfaces/updateexportcommandoutput.html)

</details>
