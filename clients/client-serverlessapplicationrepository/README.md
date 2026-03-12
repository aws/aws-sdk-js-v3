<!-- generated file, do not edit directly -->

# @aws-sdk/client-serverlessapplicationrepository

## Description

AWS SDK for JavaScript ServerlessApplicationRepository Client for Node.js, Browser and React Native.

<p>The AWS Serverless Application Repository makes it easy for developers and enterprises to quickly find
and deploy serverless applications in the AWS Cloud. For more information about serverless applications,
see Serverless Computing and Applications on the AWS website.</p><p>The AWS Serverless Application Repository is deeply integrated with the AWS Lambda console, so that developers of
all levels can get started with serverless computing without needing to learn anything new. You can use category
keywords to browse for applications such as web and mobile backends, data processing applications, or chatbots.
You can also search for applications by name, publisher, or event source. To use an application, you simply choose it,
configure any required fields, and deploy it with a few clicks. </p><p>You can also easily publish applications, sharing them publicly with the community at large, or privately
within your team or across your organization. To publish a serverless application (or app), you can use the
AWS Management Console, AWS Command Line Interface (AWS CLI), or AWS SDKs to upload the code. Along with the
code, you upload a simple manifest file, also known as the AWS Serverless Application Model (AWS SAM) template.
For more information about AWS SAM, see AWS Serverless Application Model (AWS SAM) on the AWS Labs
GitHub repository.</p><p>The AWS Serverless Application Repository Developer Guide contains more information about the two developer
experiences available:</p><ul>
<li>
<p>Consuming Applications – Browse for applications and view information about them, including
source code and readme files. Also install, configure, and deploy applications of your choosing. </p>
<p>Publishing Applications – Configure and upload applications to make them available to other
developers, and publish new versions of applications. </p>
</li>
</ul>

## Installing

To install this package, use the CLI of your favorite package manager:

- `npm install @aws-sdk/client-serverlessapplicationrepository`
- `yarn add @aws-sdk/client-serverlessapplicationrepository`
- `pnpm add @aws-sdk/client-serverlessapplicationrepository`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `ServerlessApplicationRepositoryClient` and
the commands you need, for example `ListApplicationsCommand`:

```js
// ES5 example
const { ServerlessApplicationRepositoryClient, ListApplicationsCommand } = require("@aws-sdk/client-serverlessapplicationrepository");
```

```ts
// ES6+ example
import { ServerlessApplicationRepositoryClient, ListApplicationsCommand } from "@aws-sdk/client-serverlessapplicationrepository";
```

### Usage

To send a request:

- Instantiate a client with configuration (e.g. credentials, region).
  - See [docs/CLIENTS](https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/CLIENTS.md) for configuration details.
  - See [@aws-sdk/config](https://github.com/aws/aws-sdk-js-v3/blob/main/packages/config/README.md) for additional options.
- Instantiate a command with input parameters.
- Call the `send` operation on the client, providing the command object as input.

```js
const client = new ServerlessApplicationRepositoryClient({ region: "REGION" });

const params = { /** input parameters */ };
const command = new ListApplicationsCommand(params);
```

#### Async/await

We recommend using the [await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
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

#### Promises

You can also use [Promise chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#chaining).

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

#### Aggregated client

The aggregated client class is exported from the same package, but without the "Client" suffix.

`ServerlessApplicationRepository` extends `ServerlessApplicationRepositoryClient` and additionally supports all operations, waiters, and paginators as methods.
This style may be familiar to you from the AWS SDK for JavaScript v2.

If you are bundling the AWS SDK, we recommend using only the bare-bones client (`ServerlessApplicationRepositoryClient`).
More details are in the blog post on
[modular packages in AWS SDK for JavaScript](https://aws.amazon.com/blogs/developer/modular-packages-in-aws-sdk-for-javascript/).

```ts
import { ServerlessApplicationRepository } from "@aws-sdk/client-serverlessapplicationrepository";

const client = new ServerlessApplicationRepository({ region: "REGION" });

// async/await.
try {
  const data = await client.listApplications(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listApplications(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks (not recommended).
client.listApplications(params, (err, data) => {
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

See also [docs/ERROR_HANDLING](https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/ERROR_HANDLING.md).

## Getting Help

Please use these community resources for getting help.
We use GitHub issues for tracking bugs and feature requests, but have limited bandwidth to address them.

- Visit the [Developer Guide](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/welcome.html)
  or [API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/index.html).
- Check out the blog posts tagged with [`aws-sdk-js`](https://aws.amazon.com/blogs/developer/tag/aws-sdk-js/)
  on AWS Developer Blog.
- Ask a question on [StackOverflow](https://stackoverflow.com/questions/tagged/aws-sdk-js) and tag it with `aws-sdk-js`.
- Join the AWS JavaScript community on [gitter](https://gitter.im/aws/aws-sdk-js-v3).
- If it turns out that you may have found a bug, please [open an issue](https://github.com/aws/aws-sdk-js-v3/issues/new/choose).

To test your universal JavaScript code in Node.js, browser and react-native environments,
visit our [code samples repo](https://github.com/aws-samples/aws-sdk-js-tests).

## Contributing

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-serverlessapplicationrepository` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CreateApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/serverlessapplicationrepository/command/CreateApplicationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-serverlessapplicationrepository/Interface/CreateApplicationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-serverlessapplicationrepository/Interface/CreateApplicationCommandOutput/)
</details>
<details>
<summary>
CreateApplicationVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/serverlessapplicationrepository/command/CreateApplicationVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-serverlessapplicationrepository/Interface/CreateApplicationVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-serverlessapplicationrepository/Interface/CreateApplicationVersionCommandOutput/)
</details>
<details>
<summary>
CreateCloudFormationChangeSet
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/serverlessapplicationrepository/command/CreateCloudFormationChangeSetCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-serverlessapplicationrepository/Interface/CreateCloudFormationChangeSetCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-serverlessapplicationrepository/Interface/CreateCloudFormationChangeSetCommandOutput/)
</details>
<details>
<summary>
CreateCloudFormationTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/serverlessapplicationrepository/command/CreateCloudFormationTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-serverlessapplicationrepository/Interface/CreateCloudFormationTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-serverlessapplicationrepository/Interface/CreateCloudFormationTemplateCommandOutput/)
</details>
<details>
<summary>
DeleteApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/serverlessapplicationrepository/command/DeleteApplicationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-serverlessapplicationrepository/Interface/DeleteApplicationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-serverlessapplicationrepository/Interface/DeleteApplicationCommandOutput/)
</details>
<details>
<summary>
GetApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/serverlessapplicationrepository/command/GetApplicationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-serverlessapplicationrepository/Interface/GetApplicationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-serverlessapplicationrepository/Interface/GetApplicationCommandOutput/)
</details>
<details>
<summary>
GetApplicationPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/serverlessapplicationrepository/command/GetApplicationPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-serverlessapplicationrepository/Interface/GetApplicationPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-serverlessapplicationrepository/Interface/GetApplicationPolicyCommandOutput/)
</details>
<details>
<summary>
GetCloudFormationTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/serverlessapplicationrepository/command/GetCloudFormationTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-serverlessapplicationrepository/Interface/GetCloudFormationTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-serverlessapplicationrepository/Interface/GetCloudFormationTemplateCommandOutput/)
</details>
<details>
<summary>
ListApplicationDependencies
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/serverlessapplicationrepository/command/ListApplicationDependenciesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-serverlessapplicationrepository/Interface/ListApplicationDependenciesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-serverlessapplicationrepository/Interface/ListApplicationDependenciesCommandOutput/)
</details>
<details>
<summary>
ListApplications
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/serverlessapplicationrepository/command/ListApplicationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-serverlessapplicationrepository/Interface/ListApplicationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-serverlessapplicationrepository/Interface/ListApplicationsCommandOutput/)
</details>
<details>
<summary>
ListApplicationVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/serverlessapplicationrepository/command/ListApplicationVersionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-serverlessapplicationrepository/Interface/ListApplicationVersionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-serverlessapplicationrepository/Interface/ListApplicationVersionsCommandOutput/)
</details>
<details>
<summary>
PutApplicationPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/serverlessapplicationrepository/command/PutApplicationPolicyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-serverlessapplicationrepository/Interface/PutApplicationPolicyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-serverlessapplicationrepository/Interface/PutApplicationPolicyCommandOutput/)
</details>
<details>
<summary>
UnshareApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/serverlessapplicationrepository/command/UnshareApplicationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-serverlessapplicationrepository/Interface/UnshareApplicationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-serverlessapplicationrepository/Interface/UnshareApplicationCommandOutput/)
</details>
<details>
<summary>
UpdateApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/serverlessapplicationrepository/command/UpdateApplicationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-serverlessapplicationrepository/Interface/UpdateApplicationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-serverlessapplicationrepository/Interface/UpdateApplicationCommandOutput/)
</details>
