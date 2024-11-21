<!-- generated file, do not edit directly -->

# @aws-sdk/client-lambda

## Description

AWS SDK for JavaScript Lambda Client for Node.js, Browser and React Native.

<fullname>Lambda</fullname>

<p>
<b>Overview</b>
</p>
<p>Lambda is a compute service that lets you run code without provisioning or managing servers.
Lambda runs your code on a high-availability compute infrastructure and performs all of the
administration of the compute resources, including server and operating system maintenance, capacity provisioning
and automatic scaling, code monitoring and logging. With Lambda, you can run code for virtually any
type of application or backend service. For more information about the Lambda service, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/welcome.html">What is Lambda</a> in the <b>Lambda Developer Guide</b>.</p>
<p>The <i>Lambda API Reference</i> provides information about
each of the API methods, including details about the parameters in each API request and
response. </p>
<p></p>
<p>You can use Software Development Kits (SDKs), Integrated Development Environment (IDE) Toolkits, and command
line tools to access the API. For installation instructions, see <a href="http://aws.amazon.com/tools/">Tools for
Amazon Web Services</a>. </p>
<p>For a list of Region-specific endpoints that Lambda supports,
see <a href="https://docs.aws.amazon.com/general/latest/gr/lambda-service.html">Lambda
endpoints and quotas </a> in the <i>Amazon Web Services General Reference.</i>. </p>
<p>When making the API calls, you will need to
authenticate your request by providing a signature. Lambda supports signature version 4. For more information,
see <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 signing process</a> in the
<i>Amazon Web Services General Reference.</i>. </p>
<p>
<b>CA certificates</b>
</p>
<p>Because Amazon Web Services SDKs use the CA certificates from your computer, changes to the certificates on the Amazon Web Services servers
can cause connection failures when you attempt to use an SDK. You can prevent these failures by keeping your
computer's CA certificates and operating system up-to-date. If you encounter this issue in a corporate
environment and do not manage your own computer, you might need to ask an administrator to assist with the
update process. The following list shows minimum operating system and Java versions:</p>
<ul>
<li>
<p>Microsoft Windows versions that have updates from January 2005 or later installed contain at least one
of the required CAs in their trust list. </p>
</li>
<li>
<p>Mac OS X 10.4 with Java for Mac OS X 10.4 Release 5 (February 2007), Mac OS X 10.5 (October 2007), and
later versions contain at least one of the required CAs in their trust list. </p>
</li>
<li>
<p>Red Hat Enterprise Linux 5 (March 2007), 6, and 7 and CentOS 5, 6, and 7 all contain at least one of the
required CAs in their default trusted CA list. </p>
</li>
<li>
<p>Java 1.4.2_12 (May 2006), 5 Update 2 (March 2005), and all later versions, including Java 6 (December
2006), 7, and 8, contain at least one of the required CAs in their default trusted CA list. </p>
</li>
</ul>
<p>When accessing the Lambda management console or Lambda API endpoints, whether through browsers or
programmatically, you will need to ensure your client machines support any of the following CAs: </p>
<ul>
<li>
<p>Amazon Root CA 1</p>
</li>
<li>
<p>Starfield Services Root Certificate Authority - G2</p>
</li>
<li>
<p>Starfield Class 2 Certification Authority</p>
</li>
</ul>
<p>Root certificates from the first two authorities are available from <a href="https://www.amazontrust.com/repository/">Amazon trust services</a>, but keeping your computer
up-to-date is the more straightforward solution. To learn more about ACM-provided certificates, see <a href="http://aws.amazon.com/certificate-manager/faqs/#certificates">Amazon Web Services Certificate Manager FAQs.</a>
</p>

## Installing

To install this package, simply type add or install @aws-sdk/client-lambda
using your favorite package manager:

- `npm install @aws-sdk/client-lambda`
- `yarn add @aws-sdk/client-lambda`
- `pnpm add @aws-sdk/client-lambda`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `LambdaClient` and
the commands you need, for example `ListLayersCommand`:

```js
// ES5 example
const { LambdaClient, ListLayersCommand } = require("@aws-sdk/client-lambda");
```

```ts
// ES6+ example
import { LambdaClient, ListLayersCommand } from "@aws-sdk/client-lambda";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new LambdaClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListLayersCommand(params);
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
import * as AWS from "@aws-sdk/client-lambda";
const client = new AWS.Lambda({ region: "REGION" });

// async/await.
try {
  const data = await client.listLayers(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listLayers(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listLayers(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-lambda` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AddLayerVersionPermission
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/AddLayerVersionPermissionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/AddLayerVersionPermissionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/AddLayerVersionPermissionCommandOutput/)

</details>
<details>
<summary>
AddPermission
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/AddPermissionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/AddPermissionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/AddPermissionCommandOutput/)

</details>
<details>
<summary>
CreateAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/CreateAliasCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/CreateAliasCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/CreateAliasCommandOutput/)

</details>
<details>
<summary>
CreateCodeSigningConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/CreateCodeSigningConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/CreateCodeSigningConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/CreateCodeSigningConfigCommandOutput/)

</details>
<details>
<summary>
CreateEventSourceMapping
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/CreateEventSourceMappingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/CreateEventSourceMappingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/CreateEventSourceMappingCommandOutput/)

</details>
<details>
<summary>
CreateFunction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/CreateFunctionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/CreateFunctionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/CreateFunctionCommandOutput/)

</details>
<details>
<summary>
CreateFunctionUrlConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/CreateFunctionUrlConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/CreateFunctionUrlConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/CreateFunctionUrlConfigCommandOutput/)

</details>
<details>
<summary>
DeleteAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/DeleteAliasCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/DeleteAliasCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/DeleteAliasCommandOutput/)

</details>
<details>
<summary>
DeleteCodeSigningConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/DeleteCodeSigningConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/DeleteCodeSigningConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/DeleteCodeSigningConfigCommandOutput/)

</details>
<details>
<summary>
DeleteEventSourceMapping
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/DeleteEventSourceMappingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/DeleteEventSourceMappingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/DeleteEventSourceMappingCommandOutput/)

</details>
<details>
<summary>
DeleteFunction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/DeleteFunctionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/DeleteFunctionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/DeleteFunctionCommandOutput/)

</details>
<details>
<summary>
DeleteFunctionCodeSigningConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/DeleteFunctionCodeSigningConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/DeleteFunctionCodeSigningConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/DeleteFunctionCodeSigningConfigCommandOutput/)

</details>
<details>
<summary>
DeleteFunctionConcurrency
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/DeleteFunctionConcurrencyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/DeleteFunctionConcurrencyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/DeleteFunctionConcurrencyCommandOutput/)

</details>
<details>
<summary>
DeleteFunctionEventInvokeConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/DeleteFunctionEventInvokeConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/DeleteFunctionEventInvokeConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/DeleteFunctionEventInvokeConfigCommandOutput/)

</details>
<details>
<summary>
DeleteFunctionUrlConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/DeleteFunctionUrlConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/DeleteFunctionUrlConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/DeleteFunctionUrlConfigCommandOutput/)

</details>
<details>
<summary>
DeleteLayerVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/DeleteLayerVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/DeleteLayerVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/DeleteLayerVersionCommandOutput/)

</details>
<details>
<summary>
DeleteProvisionedConcurrencyConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/DeleteProvisionedConcurrencyConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/DeleteProvisionedConcurrencyConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/DeleteProvisionedConcurrencyConfigCommandOutput/)

</details>
<details>
<summary>
GetAccountSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/GetAccountSettingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/GetAccountSettingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/GetAccountSettingsCommandOutput/)

</details>
<details>
<summary>
GetAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/GetAliasCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/GetAliasCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/GetAliasCommandOutput/)

</details>
<details>
<summary>
GetCodeSigningConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/GetCodeSigningConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/GetCodeSigningConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/GetCodeSigningConfigCommandOutput/)

</details>
<details>
<summary>
GetEventSourceMapping
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/GetEventSourceMappingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/GetEventSourceMappingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/GetEventSourceMappingCommandOutput/)

</details>
<details>
<summary>
GetFunction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/GetFunctionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/GetFunctionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/GetFunctionCommandOutput/)

</details>
<details>
<summary>
GetFunctionCodeSigningConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/GetFunctionCodeSigningConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/GetFunctionCodeSigningConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/GetFunctionCodeSigningConfigCommandOutput/)

</details>
<details>
<summary>
GetFunctionConcurrency
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/GetFunctionConcurrencyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/GetFunctionConcurrencyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/GetFunctionConcurrencyCommandOutput/)

</details>
<details>
<summary>
GetFunctionConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/GetFunctionConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/GetFunctionConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/GetFunctionConfigurationCommandOutput/)

</details>
<details>
<summary>
GetFunctionEventInvokeConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/GetFunctionEventInvokeConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/GetFunctionEventInvokeConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/GetFunctionEventInvokeConfigCommandOutput/)

</details>
<details>
<summary>
GetFunctionRecursionConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/GetFunctionRecursionConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/GetFunctionRecursionConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/GetFunctionRecursionConfigCommandOutput/)

</details>
<details>
<summary>
GetFunctionUrlConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/GetFunctionUrlConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/GetFunctionUrlConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/GetFunctionUrlConfigCommandOutput/)

</details>
<details>
<summary>
GetLayerVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/GetLayerVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/GetLayerVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/GetLayerVersionCommandOutput/)

</details>
<details>
<summary>
GetLayerVersionByArn
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/GetLayerVersionByArnCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/GetLayerVersionByArnCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/GetLayerVersionByArnCommandOutput/)

</details>
<details>
<summary>
GetLayerVersionPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/GetLayerVersionPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/GetLayerVersionPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/GetLayerVersionPolicyCommandOutput/)

</details>
<details>
<summary>
GetPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/GetPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/GetPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/GetPolicyCommandOutput/)

</details>
<details>
<summary>
GetProvisionedConcurrencyConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/GetProvisionedConcurrencyConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/GetProvisionedConcurrencyConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/GetProvisionedConcurrencyConfigCommandOutput/)

</details>
<details>
<summary>
GetRuntimeManagementConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/GetRuntimeManagementConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/GetRuntimeManagementConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/GetRuntimeManagementConfigCommandOutput/)

</details>
<details>
<summary>
Invoke
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/InvokeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/InvokeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/InvokeCommandOutput/)

</details>
<details>
<summary>
InvokeAsync
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/InvokeAsyncCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/InvokeAsyncCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/InvokeAsyncCommandOutput/)

</details>
<details>
<summary>
InvokeWithResponseStream
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/InvokeWithResponseStreamCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/InvokeWithResponseStreamCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/InvokeWithResponseStreamCommandOutput/)

</details>
<details>
<summary>
ListAliases
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/ListAliasesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/ListAliasesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/ListAliasesCommandOutput/)

</details>
<details>
<summary>
ListCodeSigningConfigs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/ListCodeSigningConfigsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/ListCodeSigningConfigsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/ListCodeSigningConfigsCommandOutput/)

</details>
<details>
<summary>
ListEventSourceMappings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/ListEventSourceMappingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/ListEventSourceMappingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/ListEventSourceMappingsCommandOutput/)

</details>
<details>
<summary>
ListFunctionEventInvokeConfigs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/ListFunctionEventInvokeConfigsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/ListFunctionEventInvokeConfigsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/ListFunctionEventInvokeConfigsCommandOutput/)

</details>
<details>
<summary>
ListFunctions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/ListFunctionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/ListFunctionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/ListFunctionsCommandOutput/)

</details>
<details>
<summary>
ListFunctionsByCodeSigningConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/ListFunctionsByCodeSigningConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/ListFunctionsByCodeSigningConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/ListFunctionsByCodeSigningConfigCommandOutput/)

</details>
<details>
<summary>
ListFunctionUrlConfigs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/ListFunctionUrlConfigsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/ListFunctionUrlConfigsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/ListFunctionUrlConfigsCommandOutput/)

</details>
<details>
<summary>
ListLayers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/ListLayersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/ListLayersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/ListLayersCommandOutput/)

</details>
<details>
<summary>
ListLayerVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/ListLayerVersionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/ListLayerVersionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/ListLayerVersionsCommandOutput/)

</details>
<details>
<summary>
ListProvisionedConcurrencyConfigs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/ListProvisionedConcurrencyConfigsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/ListProvisionedConcurrencyConfigsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/ListProvisionedConcurrencyConfigsCommandOutput/)

</details>
<details>
<summary>
ListTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/ListTagsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/ListTagsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/ListTagsCommandOutput/)

</details>
<details>
<summary>
ListVersionsByFunction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/ListVersionsByFunctionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/ListVersionsByFunctionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/ListVersionsByFunctionCommandOutput/)

</details>
<details>
<summary>
PublishLayerVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/PublishLayerVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/PublishLayerVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/PublishLayerVersionCommandOutput/)

</details>
<details>
<summary>
PublishVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/PublishVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/PublishVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/PublishVersionCommandOutput/)

</details>
<details>
<summary>
PutFunctionCodeSigningConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/PutFunctionCodeSigningConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/PutFunctionCodeSigningConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/PutFunctionCodeSigningConfigCommandOutput/)

</details>
<details>
<summary>
PutFunctionConcurrency
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/PutFunctionConcurrencyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/PutFunctionConcurrencyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/PutFunctionConcurrencyCommandOutput/)

</details>
<details>
<summary>
PutFunctionEventInvokeConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/PutFunctionEventInvokeConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/PutFunctionEventInvokeConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/PutFunctionEventInvokeConfigCommandOutput/)

</details>
<details>
<summary>
PutFunctionRecursionConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/PutFunctionRecursionConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/PutFunctionRecursionConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/PutFunctionRecursionConfigCommandOutput/)

</details>
<details>
<summary>
PutProvisionedConcurrencyConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/PutProvisionedConcurrencyConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/PutProvisionedConcurrencyConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/PutProvisionedConcurrencyConfigCommandOutput/)

</details>
<details>
<summary>
PutRuntimeManagementConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/PutRuntimeManagementConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/PutRuntimeManagementConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/PutRuntimeManagementConfigCommandOutput/)

</details>
<details>
<summary>
RemoveLayerVersionPermission
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/RemoveLayerVersionPermissionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/RemoveLayerVersionPermissionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/RemoveLayerVersionPermissionCommandOutput/)

</details>
<details>
<summary>
RemovePermission
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/RemovePermissionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/RemovePermissionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/RemovePermissionCommandOutput/)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/TagResourceCommandOutput/)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/UntagResourceCommandOutput/)

</details>
<details>
<summary>
UpdateAlias
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/UpdateAliasCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/UpdateAliasCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/UpdateAliasCommandOutput/)

</details>
<details>
<summary>
UpdateCodeSigningConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/UpdateCodeSigningConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/UpdateCodeSigningConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/UpdateCodeSigningConfigCommandOutput/)

</details>
<details>
<summary>
UpdateEventSourceMapping
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/UpdateEventSourceMappingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/UpdateEventSourceMappingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/UpdateEventSourceMappingCommandOutput/)

</details>
<details>
<summary>
UpdateFunctionCode
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/UpdateFunctionCodeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/UpdateFunctionCodeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/UpdateFunctionCodeCommandOutput/)

</details>
<details>
<summary>
UpdateFunctionConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/UpdateFunctionConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/UpdateFunctionConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/UpdateFunctionConfigurationCommandOutput/)

</details>
<details>
<summary>
UpdateFunctionEventInvokeConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/UpdateFunctionEventInvokeConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/UpdateFunctionEventInvokeConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/UpdateFunctionEventInvokeConfigCommandOutput/)

</details>
<details>
<summary>
UpdateFunctionUrlConfig
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lambda/command/UpdateFunctionUrlConfigCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/UpdateFunctionUrlConfigCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-lambda/Interface/UpdateFunctionUrlConfigCommandOutput/)

</details>
