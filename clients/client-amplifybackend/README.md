<!-- generated file, do not edit directly -->

# @aws-sdk/client-amplifybackend

## Description

AWS SDK for JavaScript AmplifyBackend Client for Node.js, Browser and React Native.

<p>AWS Amplify Admin API</p>

## Installing
To install this package, simply type add or install @aws-sdk/client-amplifybackend
using your favorite package manager:
- `npm install @aws-sdk/client-amplifybackend`
- `yarn add @aws-sdk/client-amplifybackend`
- `pnpm add @aws-sdk/client-amplifybackend`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `AmplifyBackendClient` and
the commands you need, for example `ListS3BucketsCommand`:

```js
// ES5 example
const { AmplifyBackendClient, ListS3BucketsCommand } = require("@aws-sdk/client-amplifybackend");
```

```ts
// ES6+ example
import { AmplifyBackendClient, ListS3BucketsCommand } from "@aws-sdk/client-amplifybackend";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new AmplifyBackendClient({ region: "REGION" });

const params = { /** input parameters */ };
const command = new ListS3BucketsCommand(params);
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
import * as AWS from "@aws-sdk/client-amplifybackend";
const client = new AWS.AmplifyBackend({ region: "REGION" });

// async/await.
try {
  const data = await client.listS3Buckets(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listS3Buckets(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listS3Buckets(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-amplifybackend` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CloneBackend
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/amplifybackend/command/CloneBackendCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-amplifybackend/Interface/CloneBackendCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-amplifybackend/Interface/CloneBackendCommandOutput/)
</details>
<details>
<summary>
CreateBackend
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/amplifybackend/command/CreateBackendCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-amplifybackend/Interface/CreateBackendCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-amplifybackend/Interface/CreateBackendCommandOutput/)
</details>
<details>
<summary>
CreateBackendAPI
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/amplifybackend/command/CreateBackendAPICommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-amplifybackend/Interface/CreateBackendAPICommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-amplifybackend/Interface/CreateBackendAPICommandOutput/)
</details>
<details>
<summary>
CreateBackendAuth
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/amplifybackend/command/CreateBackendAuthCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-amplifybackend/Interface/CreateBackendAuthCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-amplifybackend/Interface/CreateBackendAuthCommandOutput/)
</details>
<details>
<summary>
CreateBackendConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/amplifybackend/command/CreateBackendConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-amplifybackend/Interface/CreateBackendConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-amplifybackend/Interface/CreateBackendConfigCommandOutput/)
</details>
<details>
<summary>
CreateBackendStorage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/amplifybackend/command/CreateBackendStorageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-amplifybackend/Interface/CreateBackendStorageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-amplifybackend/Interface/CreateBackendStorageCommandOutput/)
</details>
<details>
<summary>
CreateToken
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/amplifybackend/command/CreateTokenCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-amplifybackend/Interface/CreateTokenCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-amplifybackend/Interface/CreateTokenCommandOutput/)
</details>
<details>
<summary>
DeleteBackend
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/amplifybackend/command/DeleteBackendCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-amplifybackend/Interface/DeleteBackendCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-amplifybackend/Interface/DeleteBackendCommandOutput/)
</details>
<details>
<summary>
DeleteBackendAPI
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/amplifybackend/command/DeleteBackendAPICommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-amplifybackend/Interface/DeleteBackendAPICommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-amplifybackend/Interface/DeleteBackendAPICommandOutput/)
</details>
<details>
<summary>
DeleteBackendAuth
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/amplifybackend/command/DeleteBackendAuthCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-amplifybackend/Interface/DeleteBackendAuthCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-amplifybackend/Interface/DeleteBackendAuthCommandOutput/)
</details>
<details>
<summary>
DeleteBackendStorage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/amplifybackend/command/DeleteBackendStorageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-amplifybackend/Interface/DeleteBackendStorageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-amplifybackend/Interface/DeleteBackendStorageCommandOutput/)
</details>
<details>
<summary>
DeleteToken
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/amplifybackend/command/DeleteTokenCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-amplifybackend/Interface/DeleteTokenCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-amplifybackend/Interface/DeleteTokenCommandOutput/)
</details>
<details>
<summary>
GenerateBackendAPIModels
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/amplifybackend/command/GenerateBackendAPIModelsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-amplifybackend/Interface/GenerateBackendAPIModelsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-amplifybackend/Interface/GenerateBackendAPIModelsCommandOutput/)
</details>
<details>
<summary>
GetBackend
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/amplifybackend/command/GetBackendCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-amplifybackend/Interface/GetBackendCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-amplifybackend/Interface/GetBackendCommandOutput/)
</details>
<details>
<summary>
GetBackendAPI
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/amplifybackend/command/GetBackendAPICommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-amplifybackend/Interface/GetBackendAPICommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-amplifybackend/Interface/GetBackendAPICommandOutput/)
</details>
<details>
<summary>
GetBackendAPIModels
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/amplifybackend/command/GetBackendAPIModelsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-amplifybackend/Interface/GetBackendAPIModelsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-amplifybackend/Interface/GetBackendAPIModelsCommandOutput/)
</details>
<details>
<summary>
GetBackendAuth
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/amplifybackend/command/GetBackendAuthCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-amplifybackend/Interface/GetBackendAuthCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-amplifybackend/Interface/GetBackendAuthCommandOutput/)
</details>
<details>
<summary>
GetBackendJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/amplifybackend/command/GetBackendJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-amplifybackend/Interface/GetBackendJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-amplifybackend/Interface/GetBackendJobCommandOutput/)
</details>
<details>
<summary>
GetBackendStorage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/amplifybackend/command/GetBackendStorageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-amplifybackend/Interface/GetBackendStorageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-amplifybackend/Interface/GetBackendStorageCommandOutput/)
</details>
<details>
<summary>
GetToken
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/amplifybackend/command/GetTokenCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-amplifybackend/Interface/GetTokenCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-amplifybackend/Interface/GetTokenCommandOutput/)
</details>
<details>
<summary>
ImportBackendAuth
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/amplifybackend/command/ImportBackendAuthCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-amplifybackend/Interface/ImportBackendAuthCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-amplifybackend/Interface/ImportBackendAuthCommandOutput/)
</details>
<details>
<summary>
ImportBackendStorage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/amplifybackend/command/ImportBackendStorageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-amplifybackend/Interface/ImportBackendStorageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-amplifybackend/Interface/ImportBackendStorageCommandOutput/)
</details>
<details>
<summary>
ListBackendJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/amplifybackend/command/ListBackendJobsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-amplifybackend/Interface/ListBackendJobsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-amplifybackend/Interface/ListBackendJobsCommandOutput/)
</details>
<details>
<summary>
ListS3Buckets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/amplifybackend/command/ListS3BucketsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-amplifybackend/Interface/ListS3BucketsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-amplifybackend/Interface/ListS3BucketsCommandOutput/)
</details>
<details>
<summary>
RemoveAllBackends
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/amplifybackend/command/RemoveAllBackendsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-amplifybackend/Interface/RemoveAllBackendsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-amplifybackend/Interface/RemoveAllBackendsCommandOutput/)
</details>
<details>
<summary>
RemoveBackendConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/amplifybackend/command/RemoveBackendConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-amplifybackend/Interface/RemoveBackendConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-amplifybackend/Interface/RemoveBackendConfigCommandOutput/)
</details>
<details>
<summary>
UpdateBackendAPI
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/amplifybackend/command/UpdateBackendAPICommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-amplifybackend/Interface/UpdateBackendAPICommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-amplifybackend/Interface/UpdateBackendAPICommandOutput/)
</details>
<details>
<summary>
UpdateBackendAuth
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/amplifybackend/command/UpdateBackendAuthCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-amplifybackend/Interface/UpdateBackendAuthCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-amplifybackend/Interface/UpdateBackendAuthCommandOutput/)
</details>
<details>
<summary>
UpdateBackendConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/amplifybackend/command/UpdateBackendConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-amplifybackend/Interface/UpdateBackendConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-amplifybackend/Interface/UpdateBackendConfigCommandOutput/)
</details>
<details>
<summary>
UpdateBackendJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/amplifybackend/command/UpdateBackendJobCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-amplifybackend/Interface/UpdateBackendJobCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-amplifybackend/Interface/UpdateBackendJobCommandOutput/)
</details>
<details>
<summary>
UpdateBackendStorage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/amplifybackend/command/UpdateBackendStorageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-amplifybackend/Interface/UpdateBackendStorageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-amplifybackend/Interface/UpdateBackendStorageCommandOutput/)
</details>
