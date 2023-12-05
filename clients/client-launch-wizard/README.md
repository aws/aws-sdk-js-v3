<!-- generated file, do not edit directly -->

# @aws-sdk/client-launch-wizard

## Description

AWS SDK for JavaScript LaunchWizard Client for Node.js, Browser and React Native.

<p>Launch Wizard offers a guided way of sizing, configuring, and deploying Amazon Web Services resources for
third party applications, such as Microsoft SQL Server Always On and HANA based SAP
systems, without the need to manually identify and provision individual Amazon Web Services
resources.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-launch-wizard
using your favorite package manager:

- `npm install @aws-sdk/client-launch-wizard`
- `yarn add @aws-sdk/client-launch-wizard`
- `pnpm add @aws-sdk/client-launch-wizard`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `LaunchWizardClient` and
the commands you need, for example `ListDeploymentsCommand`:

```js
// ES5 example
const { LaunchWizardClient, ListDeploymentsCommand } = require("@aws-sdk/client-launch-wizard");
```

```ts
// ES6+ example
import { LaunchWizardClient, ListDeploymentsCommand } from "@aws-sdk/client-launch-wizard";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new LaunchWizardClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListDeploymentsCommand(params);
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
import * as AWS from "@aws-sdk/client-launch-wizard";
const client = new AWS.LaunchWizard({ region: "REGION" });

// async/await.
try {
  const data = await client.listDeployments(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listDeployments(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listDeployments(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-launch-wizard` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CreateDeployment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-launch-wizard/classes/createdeploymentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-launch-wizard/interfaces/createdeploymentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-launch-wizard/interfaces/createdeploymentcommandoutput.html)

</details>
<details>
<summary>
DeleteDeployment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-launch-wizard/classes/deletedeploymentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-launch-wizard/interfaces/deletedeploymentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-launch-wizard/interfaces/deletedeploymentcommandoutput.html)

</details>
<details>
<summary>
GetDeployment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-launch-wizard/classes/getdeploymentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-launch-wizard/interfaces/getdeploymentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-launch-wizard/interfaces/getdeploymentcommandoutput.html)

</details>
<details>
<summary>
GetWorkload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-launch-wizard/classes/getworkloadcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-launch-wizard/interfaces/getworkloadcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-launch-wizard/interfaces/getworkloadcommandoutput.html)

</details>
<details>
<summary>
ListDeploymentEvents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-launch-wizard/classes/listdeploymenteventscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-launch-wizard/interfaces/listdeploymenteventscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-launch-wizard/interfaces/listdeploymenteventscommandoutput.html)

</details>
<details>
<summary>
ListDeployments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-launch-wizard/classes/listdeploymentscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-launch-wizard/interfaces/listdeploymentscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-launch-wizard/interfaces/listdeploymentscommandoutput.html)

</details>
<details>
<summary>
ListWorkloadDeploymentPatterns
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-launch-wizard/classes/listworkloaddeploymentpatternscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-launch-wizard/interfaces/listworkloaddeploymentpatternscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-launch-wizard/interfaces/listworkloaddeploymentpatternscommandoutput.html)

</details>
<details>
<summary>
ListWorkloads
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-launch-wizard/classes/listworkloadscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-launch-wizard/interfaces/listworkloadscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-launch-wizard/interfaces/listworkloadscommandoutput.html)

</details>
