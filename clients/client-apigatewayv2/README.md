<!-- generated file, do not edit directly -->

# @aws-sdk/client-apigatewayv2

## Description

AWS SDK for JavaScript ApiGatewayV2 Client for Node.js, Browser and React Native.

<p>Amazon API Gateway V2</p>

## Installing

To install this package, simply type add or install @aws-sdk/client-apigatewayv2
using your favorite package manager:

- `npm install @aws-sdk/client-apigatewayv2`
- `yarn add @aws-sdk/client-apigatewayv2`
- `pnpm add @aws-sdk/client-apigatewayv2`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `ApiGatewayV2Client` and
the commands you need, for example `GetApisCommand`:

```js
// ES5 example
const { ApiGatewayV2Client, GetApisCommand } = require("@aws-sdk/client-apigatewayv2");
```

```ts
// ES6+ example
import { ApiGatewayV2Client, GetApisCommand } from "@aws-sdk/client-apigatewayv2";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new ApiGatewayV2Client({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new GetApisCommand(params);
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
import * as AWS from "@aws-sdk/client-apigatewayv2";
const client = new AWS.ApiGatewayV2({ region: "REGION" });

// async/await.
try {
  const data = await client.getApis(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .getApis(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.getApis(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-apigatewayv2` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CreateApi
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/CreateApiCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/CreateApiCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/CreateApiCommandOutput/)

</details>
<details>
<summary>
CreateApiMapping
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/CreateApiMappingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/CreateApiMappingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/CreateApiMappingCommandOutput/)

</details>
<details>
<summary>
CreateAuthorizer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/CreateAuthorizerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/CreateAuthorizerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/CreateAuthorizerCommandOutput/)

</details>
<details>
<summary>
CreateDeployment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/CreateDeploymentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/CreateDeploymentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/CreateDeploymentCommandOutput/)

</details>
<details>
<summary>
CreateDomainName
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/CreateDomainNameCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/CreateDomainNameCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/CreateDomainNameCommandOutput/)

</details>
<details>
<summary>
CreateIntegration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/CreateIntegrationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/CreateIntegrationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/CreateIntegrationCommandOutput/)

</details>
<details>
<summary>
CreateIntegrationResponse
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/CreateIntegrationResponseCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/CreateIntegrationResponseCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/CreateIntegrationResponseCommandOutput/)

</details>
<details>
<summary>
CreateModel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/CreateModelCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/CreateModelCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/CreateModelCommandOutput/)

</details>
<details>
<summary>
CreateRoute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/CreateRouteCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/CreateRouteCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/CreateRouteCommandOutput/)

</details>
<details>
<summary>
CreateRouteResponse
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/CreateRouteResponseCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/CreateRouteResponseCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/CreateRouteResponseCommandOutput/)

</details>
<details>
<summary>
CreateStage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/CreateStageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/CreateStageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/CreateStageCommandOutput/)

</details>
<details>
<summary>
CreateVpcLink
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/CreateVpcLinkCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/CreateVpcLinkCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/CreateVpcLinkCommandOutput/)

</details>
<details>
<summary>
DeleteAccessLogSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/DeleteAccessLogSettingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/DeleteAccessLogSettingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/DeleteAccessLogSettingsCommandOutput/)

</details>
<details>
<summary>
DeleteApi
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/DeleteApiCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/DeleteApiCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/DeleteApiCommandOutput/)

</details>
<details>
<summary>
DeleteApiMapping
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/DeleteApiMappingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/DeleteApiMappingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/DeleteApiMappingCommandOutput/)

</details>
<details>
<summary>
DeleteAuthorizer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/DeleteAuthorizerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/DeleteAuthorizerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/DeleteAuthorizerCommandOutput/)

</details>
<details>
<summary>
DeleteCorsConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/DeleteCorsConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/DeleteCorsConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/DeleteCorsConfigurationCommandOutput/)

</details>
<details>
<summary>
DeleteDeployment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/DeleteDeploymentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/DeleteDeploymentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/DeleteDeploymentCommandOutput/)

</details>
<details>
<summary>
DeleteDomainName
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/DeleteDomainNameCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/DeleteDomainNameCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/DeleteDomainNameCommandOutput/)

</details>
<details>
<summary>
DeleteIntegration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/DeleteIntegrationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/DeleteIntegrationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/DeleteIntegrationCommandOutput/)

</details>
<details>
<summary>
DeleteIntegrationResponse
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/DeleteIntegrationResponseCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/DeleteIntegrationResponseCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/DeleteIntegrationResponseCommandOutput/)

</details>
<details>
<summary>
DeleteModel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/DeleteModelCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/DeleteModelCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/DeleteModelCommandOutput/)

</details>
<details>
<summary>
DeleteRoute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/DeleteRouteCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/DeleteRouteCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/DeleteRouteCommandOutput/)

</details>
<details>
<summary>
DeleteRouteRequestParameter
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/DeleteRouteRequestParameterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/DeleteRouteRequestParameterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/DeleteRouteRequestParameterCommandOutput/)

</details>
<details>
<summary>
DeleteRouteResponse
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/DeleteRouteResponseCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/DeleteRouteResponseCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/DeleteRouteResponseCommandOutput/)

</details>
<details>
<summary>
DeleteRouteSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/DeleteRouteSettingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/DeleteRouteSettingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/DeleteRouteSettingsCommandOutput/)

</details>
<details>
<summary>
DeleteStage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/DeleteStageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/DeleteStageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/DeleteStageCommandOutput/)

</details>
<details>
<summary>
DeleteVpcLink
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/DeleteVpcLinkCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/DeleteVpcLinkCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/DeleteVpcLinkCommandOutput/)

</details>
<details>
<summary>
ExportApi
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/ExportApiCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/ExportApiCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/ExportApiCommandOutput/)

</details>
<details>
<summary>
GetApi
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/GetApiCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/GetApiCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/GetApiCommandOutput/)

</details>
<details>
<summary>
GetApiMapping
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/GetApiMappingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/GetApiMappingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/GetApiMappingCommandOutput/)

</details>
<details>
<summary>
GetApiMappings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/GetApiMappingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/GetApiMappingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/GetApiMappingsCommandOutput/)

</details>
<details>
<summary>
GetApis
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/GetApisCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/GetApisCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/GetApisCommandOutput/)

</details>
<details>
<summary>
GetAuthorizer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/GetAuthorizerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/GetAuthorizerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/GetAuthorizerCommandOutput/)

</details>
<details>
<summary>
GetAuthorizers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/GetAuthorizersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/GetAuthorizersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/GetAuthorizersCommandOutput/)

</details>
<details>
<summary>
GetDeployment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/GetDeploymentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/GetDeploymentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/GetDeploymentCommandOutput/)

</details>
<details>
<summary>
GetDeployments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/GetDeploymentsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/GetDeploymentsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/GetDeploymentsCommandOutput/)

</details>
<details>
<summary>
GetDomainName
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/GetDomainNameCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/GetDomainNameCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/GetDomainNameCommandOutput/)

</details>
<details>
<summary>
GetDomainNames
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/GetDomainNamesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/GetDomainNamesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/GetDomainNamesCommandOutput/)

</details>
<details>
<summary>
GetIntegration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/GetIntegrationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/GetIntegrationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/GetIntegrationCommandOutput/)

</details>
<details>
<summary>
GetIntegrationResponse
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/GetIntegrationResponseCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/GetIntegrationResponseCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/GetIntegrationResponseCommandOutput/)

</details>
<details>
<summary>
GetIntegrationResponses
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/GetIntegrationResponsesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/GetIntegrationResponsesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/GetIntegrationResponsesCommandOutput/)

</details>
<details>
<summary>
GetIntegrations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/GetIntegrationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/GetIntegrationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/GetIntegrationsCommandOutput/)

</details>
<details>
<summary>
GetModel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/GetModelCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/GetModelCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/GetModelCommandOutput/)

</details>
<details>
<summary>
GetModels
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/GetModelsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/GetModelsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/GetModelsCommandOutput/)

</details>
<details>
<summary>
GetModelTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/GetModelTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/GetModelTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/GetModelTemplateCommandOutput/)

</details>
<details>
<summary>
GetRoute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/GetRouteCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/GetRouteCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/GetRouteCommandOutput/)

</details>
<details>
<summary>
GetRouteResponse
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/GetRouteResponseCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/GetRouteResponseCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/GetRouteResponseCommandOutput/)

</details>
<details>
<summary>
GetRouteResponses
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/GetRouteResponsesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/GetRouteResponsesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/GetRouteResponsesCommandOutput/)

</details>
<details>
<summary>
GetRoutes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/GetRoutesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/GetRoutesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/GetRoutesCommandOutput/)

</details>
<details>
<summary>
GetStage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/GetStageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/GetStageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/GetStageCommandOutput/)

</details>
<details>
<summary>
GetStages
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/GetStagesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/GetStagesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/GetStagesCommandOutput/)

</details>
<details>
<summary>
GetTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/GetTagsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/GetTagsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/GetTagsCommandOutput/)

</details>
<details>
<summary>
GetVpcLink
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/GetVpcLinkCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/GetVpcLinkCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/GetVpcLinkCommandOutput/)

</details>
<details>
<summary>
GetVpcLinks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/GetVpcLinksCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/GetVpcLinksCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/GetVpcLinksCommandOutput/)

</details>
<details>
<summary>
ImportApi
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/ImportApiCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/ImportApiCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/ImportApiCommandOutput/)

</details>
<details>
<summary>
ReimportApi
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/ReimportApiCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/ReimportApiCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/ReimportApiCommandOutput/)

</details>
<details>
<summary>
ResetAuthorizersCache
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/ResetAuthorizersCacheCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/ResetAuthorizersCacheCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/ResetAuthorizersCacheCommandOutput/)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/TagResourceCommandOutput/)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/UntagResourceCommandOutput/)

</details>
<details>
<summary>
UpdateApi
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/UpdateApiCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/UpdateApiCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/UpdateApiCommandOutput/)

</details>
<details>
<summary>
UpdateApiMapping
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/UpdateApiMappingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/UpdateApiMappingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/UpdateApiMappingCommandOutput/)

</details>
<details>
<summary>
UpdateAuthorizer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/UpdateAuthorizerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/UpdateAuthorizerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/UpdateAuthorizerCommandOutput/)

</details>
<details>
<summary>
UpdateDeployment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/UpdateDeploymentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/UpdateDeploymentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/UpdateDeploymentCommandOutput/)

</details>
<details>
<summary>
UpdateDomainName
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/UpdateDomainNameCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/UpdateDomainNameCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/UpdateDomainNameCommandOutput/)

</details>
<details>
<summary>
UpdateIntegration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/UpdateIntegrationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/UpdateIntegrationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/UpdateIntegrationCommandOutput/)

</details>
<details>
<summary>
UpdateIntegrationResponse
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/UpdateIntegrationResponseCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/UpdateIntegrationResponseCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/UpdateIntegrationResponseCommandOutput/)

</details>
<details>
<summary>
UpdateModel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/UpdateModelCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/UpdateModelCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/UpdateModelCommandOutput/)

</details>
<details>
<summary>
UpdateRoute
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/UpdateRouteCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/UpdateRouteCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/UpdateRouteCommandOutput/)

</details>
<details>
<summary>
UpdateRouteResponse
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/UpdateRouteResponseCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/UpdateRouteResponseCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/UpdateRouteResponseCommandOutput/)

</details>
<details>
<summary>
UpdateStage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/UpdateStageCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/UpdateStageCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/UpdateStageCommandOutput/)

</details>
<details>
<summary>
UpdateVpcLink
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/apigatewayv2/command/UpdateVpcLinkCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/UpdateVpcLinkCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-apigatewayv2/Interface/UpdateVpcLinkCommandOutput/)

</details>
