<!-- generated file, do not edit directly -->

# @aws-sdk/client-amplifyuibuilder

## Description

AWS SDK for JavaScript AmplifyUIBuilder Client for Node.js, Browser and React Native.

<p>The Amplify UI Builder API provides a programmatic interface for creating
and configuring user interface (UI) component libraries and themes for use in your Amplify applications. You can then connect these UI components to an application's
backend Amazon Web Services resources.</p>
<p>You can also use the Amplify Studio visual designer to create UI components
and model data for an app. For more information, see <a href="https://docs.amplify.aws/console/adminui/intro">Introduction</a> in the
<i>Amplify Docs</i>.</p>
<p>The Amplify Framework is a comprehensive set of SDKs, libraries, tools, and
documentation for client app development. For more information, see the <a href="https://docs.amplify.aws/">Amplify Framework</a>. For more information about
deploying an Amplify application to Amazon Web Services, see the <a href="https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html">Amplify User Guide</a>.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-amplifyuibuilder
using your favorite package manager:

- `npm install @aws-sdk/client-amplifyuibuilder`
- `yarn add @aws-sdk/client-amplifyuibuilder`
- `pnpm add @aws-sdk/client-amplifyuibuilder`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `AmplifyUIBuilderClient` and
the commands you need, for example `CreateComponentCommand`:

```js
// ES5 example
const { AmplifyUIBuilderClient, CreateComponentCommand } = require("@aws-sdk/client-amplifyuibuilder");
```

```ts
// ES6+ example
import { AmplifyUIBuilderClient, CreateComponentCommand } from "@aws-sdk/client-amplifyuibuilder";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new AmplifyUIBuilderClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new CreateComponentCommand(params);
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
import * as AWS from "@aws-sdk/client-amplifyuibuilder";
const client = new AWS.AmplifyUIBuilder({ region: "REGION" });

// async/await.
try {
  const data = await client.createComponent(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .createComponent(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.createComponent(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-amplifyuibuilder` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CreateComponent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/classes/createcomponentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/interfaces/createcomponentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/interfaces/createcomponentcommandoutput.html)

</details>
<details>
<summary>
CreateForm
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/classes/createformcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/interfaces/createformcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/interfaces/createformcommandoutput.html)

</details>
<details>
<summary>
CreateTheme
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/classes/createthemecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/interfaces/createthemecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/interfaces/createthemecommandoutput.html)

</details>
<details>
<summary>
DeleteComponent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/classes/deletecomponentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/interfaces/deletecomponentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/interfaces/deletecomponentcommandoutput.html)

</details>
<details>
<summary>
DeleteForm
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/classes/deleteformcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/interfaces/deleteformcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/interfaces/deleteformcommandoutput.html)

</details>
<details>
<summary>
DeleteTheme
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/classes/deletethemecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/interfaces/deletethemecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/interfaces/deletethemecommandoutput.html)

</details>
<details>
<summary>
ExchangeCodeForToken
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/classes/exchangecodefortokencommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/interfaces/exchangecodefortokencommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/interfaces/exchangecodefortokencommandoutput.html)

</details>
<details>
<summary>
ExportComponents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/classes/exportcomponentscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/interfaces/exportcomponentscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/interfaces/exportcomponentscommandoutput.html)

</details>
<details>
<summary>
ExportForms
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/classes/exportformscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/interfaces/exportformscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/interfaces/exportformscommandoutput.html)

</details>
<details>
<summary>
ExportThemes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/classes/exportthemescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/interfaces/exportthemescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/interfaces/exportthemescommandoutput.html)

</details>
<details>
<summary>
GetCodegenJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/classes/getcodegenjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/interfaces/getcodegenjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/interfaces/getcodegenjobcommandoutput.html)

</details>
<details>
<summary>
GetComponent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/classes/getcomponentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/interfaces/getcomponentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/interfaces/getcomponentcommandoutput.html)

</details>
<details>
<summary>
GetForm
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/classes/getformcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/interfaces/getformcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/interfaces/getformcommandoutput.html)

</details>
<details>
<summary>
GetMetadata
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/classes/getmetadatacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/interfaces/getmetadatacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/interfaces/getmetadatacommandoutput.html)

</details>
<details>
<summary>
GetTheme
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/classes/getthemecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/interfaces/getthemecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/interfaces/getthemecommandoutput.html)

</details>
<details>
<summary>
ListCodegenJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/classes/listcodegenjobscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/interfaces/listcodegenjobscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/interfaces/listcodegenjobscommandoutput.html)

</details>
<details>
<summary>
ListComponents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/classes/listcomponentscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/interfaces/listcomponentscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/interfaces/listcomponentscommandoutput.html)

</details>
<details>
<summary>
ListForms
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/classes/listformscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/interfaces/listformscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/interfaces/listformscommandoutput.html)

</details>
<details>
<summary>
ListThemes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/classes/listthemescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/interfaces/listthemescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/interfaces/listthemescommandoutput.html)

</details>
<details>
<summary>
PutMetadataFlag
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/classes/putmetadataflagcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/interfaces/putmetadataflagcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/interfaces/putmetadataflagcommandoutput.html)

</details>
<details>
<summary>
RefreshToken
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/classes/refreshtokencommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/interfaces/refreshtokencommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/interfaces/refreshtokencommandoutput.html)

</details>
<details>
<summary>
StartCodegenJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/classes/startcodegenjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/interfaces/startcodegenjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/interfaces/startcodegenjobcommandoutput.html)

</details>
<details>
<summary>
UpdateComponent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/classes/updatecomponentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/interfaces/updatecomponentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/interfaces/updatecomponentcommandoutput.html)

</details>
<details>
<summary>
UpdateForm
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/classes/updateformcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/interfaces/updateformcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/interfaces/updateformcommandoutput.html)

</details>
<details>
<summary>
UpdateTheme
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/classes/updatethemecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/interfaces/updatethemecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplifyuibuilder/interfaces/updatethemecommandoutput.html)

</details>
