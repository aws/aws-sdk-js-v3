<!-- generated file, do not edit directly -->

# @aws-sdk/client-amplifybackend

## Description

AWS SDK for JavaScript AmplifyBackend Client for Node.js, Browser and React Native.

<p>AWS Amplify Admin API</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-amplifybackend
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

const params = {
  /** input parameters */
};
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/classes/clonebackendcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/interfaces/clonebackendcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/interfaces/clonebackendcommandoutput.html)

</details>
<details>
<summary>
CreateBackend
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/classes/createbackendcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/interfaces/createbackendcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/interfaces/createbackendcommandoutput.html)

</details>
<details>
<summary>
CreateBackendAPI
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/classes/createbackendapicommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/interfaces/createbackendapicommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/interfaces/createbackendapicommandoutput.html)

</details>
<details>
<summary>
CreateBackendAuth
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/classes/createbackendauthcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/interfaces/createbackendauthcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/interfaces/createbackendauthcommandoutput.html)

</details>
<details>
<summary>
CreateBackendConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/classes/createbackendconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/interfaces/createbackendconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/interfaces/createbackendconfigcommandoutput.html)

</details>
<details>
<summary>
CreateBackendStorage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/classes/createbackendstoragecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/interfaces/createbackendstoragecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/interfaces/createbackendstoragecommandoutput.html)

</details>
<details>
<summary>
CreateToken
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/classes/createtokencommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/interfaces/createtokencommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/interfaces/createtokencommandoutput.html)

</details>
<details>
<summary>
DeleteBackend
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/classes/deletebackendcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/interfaces/deletebackendcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/interfaces/deletebackendcommandoutput.html)

</details>
<details>
<summary>
DeleteBackendAPI
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/classes/deletebackendapicommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/interfaces/deletebackendapicommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/interfaces/deletebackendapicommandoutput.html)

</details>
<details>
<summary>
DeleteBackendAuth
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/classes/deletebackendauthcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/interfaces/deletebackendauthcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/interfaces/deletebackendauthcommandoutput.html)

</details>
<details>
<summary>
DeleteBackendStorage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/classes/deletebackendstoragecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/interfaces/deletebackendstoragecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/interfaces/deletebackendstoragecommandoutput.html)

</details>
<details>
<summary>
DeleteToken
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/classes/deletetokencommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/interfaces/deletetokencommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/interfaces/deletetokencommandoutput.html)

</details>
<details>
<summary>
GenerateBackendAPIModels
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/classes/generatebackendapimodelscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/interfaces/generatebackendapimodelscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/interfaces/generatebackendapimodelscommandoutput.html)

</details>
<details>
<summary>
GetBackend
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/classes/getbackendcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/interfaces/getbackendcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/interfaces/getbackendcommandoutput.html)

</details>
<details>
<summary>
GetBackendAPI
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/classes/getbackendapicommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/interfaces/getbackendapicommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/interfaces/getbackendapicommandoutput.html)

</details>
<details>
<summary>
GetBackendAPIModels
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/classes/getbackendapimodelscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/interfaces/getbackendapimodelscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/interfaces/getbackendapimodelscommandoutput.html)

</details>
<details>
<summary>
GetBackendAuth
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/classes/getbackendauthcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/interfaces/getbackendauthcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/interfaces/getbackendauthcommandoutput.html)

</details>
<details>
<summary>
GetBackendJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/classes/getbackendjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/interfaces/getbackendjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/interfaces/getbackendjobcommandoutput.html)

</details>
<details>
<summary>
GetBackendStorage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/classes/getbackendstoragecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/interfaces/getbackendstoragecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/interfaces/getbackendstoragecommandoutput.html)

</details>
<details>
<summary>
GetToken
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/classes/gettokencommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/interfaces/gettokencommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/interfaces/gettokencommandoutput.html)

</details>
<details>
<summary>
ImportBackendAuth
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/classes/importbackendauthcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/interfaces/importbackendauthcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/interfaces/importbackendauthcommandoutput.html)

</details>
<details>
<summary>
ImportBackendStorage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/classes/importbackendstoragecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/interfaces/importbackendstoragecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/interfaces/importbackendstoragecommandoutput.html)

</details>
<details>
<summary>
ListBackendJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/classes/listbackendjobscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/interfaces/listbackendjobscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/interfaces/listbackendjobscommandoutput.html)

</details>
<details>
<summary>
ListS3Buckets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/classes/lists3bucketscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/interfaces/lists3bucketscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/interfaces/lists3bucketscommandoutput.html)

</details>
<details>
<summary>
RemoveAllBackends
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/classes/removeallbackendscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/interfaces/removeallbackendscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/interfaces/removeallbackendscommandoutput.html)

</details>
<details>
<summary>
RemoveBackendConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/classes/removebackendconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/interfaces/removebackendconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/interfaces/removebackendconfigcommandoutput.html)

</details>
<details>
<summary>
UpdateBackendAPI
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/classes/updatebackendapicommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/interfaces/updatebackendapicommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/interfaces/updatebackendapicommandoutput.html)

</details>
<details>
<summary>
UpdateBackendAuth
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/classes/updatebackendauthcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/interfaces/updatebackendauthcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/interfaces/updatebackendauthcommandoutput.html)

</details>
<details>
<summary>
UpdateBackendConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/classes/updatebackendconfigcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/interfaces/updatebackendconfigcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/interfaces/updatebackendconfigcommandoutput.html)

</details>
<details>
<summary>
UpdateBackendJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/classes/updatebackendjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/interfaces/updatebackendjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/interfaces/updatebackendjobcommandoutput.html)

</details>
<details>
<summary>
UpdateBackendStorage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/classes/updatebackendstoragecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/interfaces/updatebackendstoragecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifybackend/interfaces/updatebackendstoragecommandoutput.html)

</details>
