<!-- generated file, do not edit directly -->

# @aws-sdk/client-mwaa

## Description

AWS SDK for JavaScript MWAA Client for Node.js, Browser and React Native.

<fullname>Amazon Managed Workflows for Apache Airflow</fullname>

<p>This section contains the Amazon Managed Workflows for Apache Airflow (MWAA) API reference documentation. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/what-is-mwaa.html">What is Amazon MWAA?</a>.</p>
<p>
<b>Endpoints</b>
</p>
<ul>
<li>
<p>
<code>api.airflow.{region}.amazonaws.com</code> - This endpoint is used for environment management.</p>
<ul>
<li>
<p>
<a href="https://docs.aws.amazon.com/mwaa/latest/API/API_CreateEnvironment.html">CreateEnvironment</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/mwaa/latest/API/API_DeleteEnvironment.html">DeleteEnvironment</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/mwaa/latest/API/API_GetEnvironment.html">GetEnvironment</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/mwaa/latest/API/API_ListEnvironments.html">ListEnvironments</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/mwaa/latest/API/API_ListTagsForResource.html">ListTagsForResource</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/mwaa/latest/API/API_TagResource.html">TagResource</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/mwaa/latest/API/API_UntagResource.html">UntagResource</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/mwaa/latest/API/API_UpdateEnvironment.html">UpdateEnvironment</a>
</p>
</li>
</ul>
</li>
<li>
<p>
<code>env.airflow.{region}.amazonaws.com</code> - This endpoint is used to operate the Airflow environment.</p>
<ul>
<li>
<p>
<a href="https://docs.aws.amazon.com/mwaa/latest/API/API_CreateCliToken.html ">CreateCliToken</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/mwaa/latest/API/API_CreateWebLoginToken.html">CreateWebLoginToken</a>
</p>
</li>
</ul>
</li>
</ul>
<p>
<b>Regions</b>
</p>
<p>For a list of supported regions, see <a href="https://docs.aws.amazon.com/general/latest/gr/mwaa.html">Amazon MWAA endpoints and quotas</a> in the <i>Amazon Web Services General Reference</i>.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-mwaa
using your favorite package manager:

- `npm install @aws-sdk/client-mwaa`
- `yarn add @aws-sdk/client-mwaa`
- `pnpm add @aws-sdk/client-mwaa`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `MWAAClient` and
the commands you need, for example `ListEnvironmentsCommand`:

```js
// ES5 example
const { MWAAClient, ListEnvironmentsCommand } = require("@aws-sdk/client-mwaa");
```

```ts
// ES6+ example
import { MWAAClient, ListEnvironmentsCommand } from "@aws-sdk/client-mwaa";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new MWAAClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListEnvironmentsCommand(params);
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
import * as AWS from "@aws-sdk/client-mwaa";
const client = new AWS.MWAA({ region: "REGION" });

// async/await.
try {
  const data = await client.listEnvironments(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listEnvironments(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listEnvironments(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-mwaa` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CreateCliToken
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mwaa/classes/createclitokencommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mwaa/interfaces/createclitokencommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mwaa/interfaces/createclitokencommandoutput.html)

</details>
<details>
<summary>
CreateEnvironment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mwaa/classes/createenvironmentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mwaa/interfaces/createenvironmentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mwaa/interfaces/createenvironmentcommandoutput.html)

</details>
<details>
<summary>
CreateWebLoginToken
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mwaa/classes/createweblogintokencommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mwaa/interfaces/createweblogintokencommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mwaa/interfaces/createweblogintokencommandoutput.html)

</details>
<details>
<summary>
DeleteEnvironment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mwaa/classes/deleteenvironmentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mwaa/interfaces/deleteenvironmentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mwaa/interfaces/deleteenvironmentcommandoutput.html)

</details>
<details>
<summary>
GetEnvironment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mwaa/classes/getenvironmentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mwaa/interfaces/getenvironmentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mwaa/interfaces/getenvironmentcommandoutput.html)

</details>
<details>
<summary>
ListEnvironments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mwaa/classes/listenvironmentscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mwaa/interfaces/listenvironmentscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mwaa/interfaces/listenvironmentscommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mwaa/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mwaa/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mwaa/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
PublishMetrics
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mwaa/classes/publishmetricscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mwaa/interfaces/publishmetricscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mwaa/interfaces/publishmetricscommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mwaa/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mwaa/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mwaa/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mwaa/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mwaa/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mwaa/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateEnvironment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mwaa/classes/updateenvironmentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mwaa/interfaces/updateenvironmentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-mwaa/interfaces/updateenvironmentcommandoutput.html)

</details>
