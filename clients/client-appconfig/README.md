<!-- generated file, do not edit directly -->

# @aws-sdk/client-appconfig

## Description

AWS SDK for JavaScript AppConfig Client for Node.js, Browser and React Native.

<p>AppConfig helps you safely change application behavior in production without redeploying code. Using feature flags and dynamic free-form configurations, you can control how your application runs in real time. This approach reduces risk, accelerates releases, and enables faster responses to issues. You can gradually roll out new features to specific users, monitor their impact, and expand availability with confidence. You can also update block lists, allow lists, throttling limits, and logging levels instantly, allowing you to mitigate issues and fine-tune performance without a deployment.</p>
<p>AppConfig supports a broad spectrum of use cases:</p>
<ul>
<li>
<p>
<b>Feature flags and toggles</b> – Gradually release new capabilities to targeted users, monitor impact, and instantly roll back changes if issues occur.</p>
</li>
<li>
<p>
<b>Application tuning</b> – Introduce changes safely in production, measure their effects, and refine behavior without redeploying code.</p>
</li>
<li>
<p>
<b>Allow list or block list</b> – Control access to features or restrict specific users in real time, without modifying application code. </p>
</li>
<li>
<p>
<b>Centralized configuration storage</b> – Manage configuration data consistently across workloads. AppConfig can deploy configuration from the AppConfig hosted configuration store, Secrets Manager, Systems Manager, Systems Manager Parameter Store, or Amazon S3.</p>
</li>
</ul>
<p>
<b>How AppConfig works</b>
</p>
<p>This section provides a high-level description of how AppConfig works and how
you get started.</p>
<dl>
<dt>1. Identify configuration data to manage in AppConfig</dt>
<dd>
<p>Before creating a configuration profile, identify the configuration data in your code that you want to manage dynamically using AppConfig. Common examples include feature flags, allow and block lists, logging levels, service limits, and throttling rules. These values tend to change frequently and can cause issues if misconfigured.</p>
<p>If your configuration data already exists in cloud services such as Systems Manager Parameter Store or Amazon S3, you can use AppConfig to validate, deploy, and manage that data more effectively.</p>
</dd>
<dt>2. Create a configuration profile in AppConfig</dt>
<dd>
<p>A configuration profile defines how AppConfig locates and manages your configuration data. It includes a URI that points to the data source and a profile type.</p>
<p>AppConfig supports two profile types</p>
<ul>
<li>
<p>
<b>Feature flags</b> – Enable controlled feature releases, gradual rollouts, and testing in production.</p>
</li>
<li>
<p>
<b>Free-form configurations</b> – Store and retrieve configuration data from external sources and update it without redeploying code.</p>
</li>
</ul>
<p>Both profile types help decouple configuration from code, support continuous delivery, and reduce deployment risk.</p>
<p>You can also add optional validators to ensure that configuration data is syntactically and semantically correct. During deployment, AppConfig evaluates these validators and automatically rolls back changes if validation fails.</p>
<p>Each configuration profile is associated with an application, which acts as a logical container for your configuration resources. For more information about creating a configuration profile, see <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-creating-configuration-profile.html">Creating a configuration profile in AppConfig</a> in the the <i>AppConfig User Guide</i>.</p>
</dd>
<dt>3. Deploy configuration data</dt>
<dd>
<p>When you start a deployment, AppConfig:</p>
<ol>
<li>
<p>Retrieves configuration data from the source defined in the configuration profile</p>
</li>
<li>
<p>Validates the data using the configured validators</p>
</li>
<li>
<p>Delivers the validated configuration to AppConfig Agent</p>
</li>
</ol>
<p>The delivered configuration becomes the deployed version used by your application. For more information about deploying a configuration, see <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/deploying-feature-flags.html">Deploying feature flags and configuration data in AppConfig</a>.</p>
</dd>
<dt>4. Retrieve configuration data</dt>
<dd>
<p>Your application retrieves configuration data by calling a local endpoint exposed by AppConfig Agent, which caches the deployed configuration. Retrieving data is a metered event. AppConfig Agent supports a variety of use cases, as described in <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-agent-how-to-use.html">How to use AppConfig Agent to retrieve configuration data</a>.</p>
<p>If the agent is not suitable for your use case, your application can retrieve configuration data directly from AppConfig by calling the <a href="https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_appconfigdata_StartConfigurationSession.html">StartConfigurationSession</a> and <a href="https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_appconfigdata_GetLatestConfiguration.html">GetLatestConfiguration</a> API actions. </p>
<p>For more information about retrieving a configuration, see <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/retrieving-feature-flags.html">Retrieving feature flags and configuration data in AppConfig</a>.</p>
</dd>
</dl>
<p>This reference is intended to be used with the <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/what-is-appconfig.html">AppConfig User
Guide</a>.</p>

## Installing

To install this package, use the CLI of your favorite package manager:

- `npm install @aws-sdk/client-appconfig`
- `yarn add @aws-sdk/client-appconfig`
- `pnpm add @aws-sdk/client-appconfig`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `AppConfigClient` and
the commands you need, for example `ListApplicationsCommand`:

```js
// ES5 example
const { AppConfigClient, ListApplicationsCommand } = require("@aws-sdk/client-appconfig");
```

```ts
// ES6+ example
import { AppConfigClient, ListApplicationsCommand } from "@aws-sdk/client-appconfig";
```

### Usage

To send a request:

- Instantiate a client with configuration (e.g. credentials, region).
  - See [docs/CLIENTS](https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/CLIENTS.md) for configuration details.
  - See [@aws-sdk/config](https://github.com/aws/aws-sdk-js-v3/blob/main/packages/config/README.md) for additional options.
- Instantiate a command with input parameters.
- Call the `send` operation on the client, providing the command object as input.

```js
const client = new AppConfigClient({ region: "REGION" });

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

`AppConfig` extends `AppConfigClient` and additionally supports all operations, waiters, and paginators as methods.
This style may be familiar to you from the AWS SDK for JavaScript v2.

If you are bundling the AWS SDK, we recommend using only the bare-bones client (`AppConfigClient`).
More details are in the blog post on
[modular packages in AWS SDK for JavaScript](https://aws.amazon.com/blogs/developer/modular-packages-in-aws-sdk-for-javascript/).

```ts
import { AppConfig } from "@aws-sdk/client-appconfig";

const client = new AppConfig({ region: "REGION" });

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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-appconfig` package is updated.
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appconfig/command/CreateApplicationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/CreateApplicationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/CreateApplicationCommandOutput/)
</details>
<details>
<summary>
CreateConfigurationProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appconfig/command/CreateConfigurationProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/CreateConfigurationProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/CreateConfigurationProfileCommandOutput/)
</details>
<details>
<summary>
CreateDeploymentStrategy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appconfig/command/CreateDeploymentStrategyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/CreateDeploymentStrategyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/CreateDeploymentStrategyCommandOutput/)
</details>
<details>
<summary>
CreateEnvironment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appconfig/command/CreateEnvironmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/CreateEnvironmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/CreateEnvironmentCommandOutput/)
</details>
<details>
<summary>
CreateExperimentDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appconfig/command/CreateExperimentDefinitionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/CreateExperimentDefinitionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/CreateExperimentDefinitionCommandOutput/)
</details>
<details>
<summary>
CreateExtension
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appconfig/command/CreateExtensionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/CreateExtensionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/CreateExtensionCommandOutput/)
</details>
<details>
<summary>
CreateExtensionAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appconfig/command/CreateExtensionAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/CreateExtensionAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/CreateExtensionAssociationCommandOutput/)
</details>
<details>
<summary>
CreateHostedConfigurationVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appconfig/command/CreateHostedConfigurationVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/CreateHostedConfigurationVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/CreateHostedConfigurationVersionCommandOutput/)
</details>
<details>
<summary>
DeleteApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appconfig/command/DeleteApplicationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/DeleteApplicationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/DeleteApplicationCommandOutput/)
</details>
<details>
<summary>
DeleteConfigurationProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appconfig/command/DeleteConfigurationProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/DeleteConfigurationProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/DeleteConfigurationProfileCommandOutput/)
</details>
<details>
<summary>
DeleteDeploymentStrategy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appconfig/command/DeleteDeploymentStrategyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/DeleteDeploymentStrategyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/DeleteDeploymentStrategyCommandOutput/)
</details>
<details>
<summary>
DeleteEnvironment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appconfig/command/DeleteEnvironmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/DeleteEnvironmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/DeleteEnvironmentCommandOutput/)
</details>
<details>
<summary>
DeleteExperimentDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appconfig/command/DeleteExperimentDefinitionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/DeleteExperimentDefinitionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/DeleteExperimentDefinitionCommandOutput/)
</details>
<details>
<summary>
DeleteExtension
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appconfig/command/DeleteExtensionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/DeleteExtensionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/DeleteExtensionCommandOutput/)
</details>
<details>
<summary>
DeleteExtensionAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appconfig/command/DeleteExtensionAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/DeleteExtensionAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/DeleteExtensionAssociationCommandOutput/)
</details>
<details>
<summary>
DeleteHostedConfigurationVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appconfig/command/DeleteHostedConfigurationVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/DeleteHostedConfigurationVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/DeleteHostedConfigurationVersionCommandOutput/)
</details>
<details>
<summary>
GetAccountSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appconfig/command/GetAccountSettingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/GetAccountSettingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/GetAccountSettingsCommandOutput/)
</details>
<details>
<summary>
GetApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appconfig/command/GetApplicationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/GetApplicationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/GetApplicationCommandOutput/)
</details>
<details>
<summary>
GetConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appconfig/command/GetConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/GetConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/GetConfigurationCommandOutput/)
</details>
<details>
<summary>
GetConfigurationProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appconfig/command/GetConfigurationProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/GetConfigurationProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/GetConfigurationProfileCommandOutput/)
</details>
<details>
<summary>
GetDeployment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appconfig/command/GetDeploymentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/GetDeploymentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/GetDeploymentCommandOutput/)
</details>
<details>
<summary>
GetDeploymentStrategy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appconfig/command/GetDeploymentStrategyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/GetDeploymentStrategyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/GetDeploymentStrategyCommandOutput/)
</details>
<details>
<summary>
GetEnvironment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appconfig/command/GetEnvironmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/GetEnvironmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/GetEnvironmentCommandOutput/)
</details>
<details>
<summary>
GetExperimentDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appconfig/command/GetExperimentDefinitionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/GetExperimentDefinitionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/GetExperimentDefinitionCommandOutput/)
</details>
<details>
<summary>
GetExperimentRun
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appconfig/command/GetExperimentRunCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/GetExperimentRunCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/GetExperimentRunCommandOutput/)
</details>
<details>
<summary>
GetExtension
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appconfig/command/GetExtensionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/GetExtensionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/GetExtensionCommandOutput/)
</details>
<details>
<summary>
GetExtensionAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appconfig/command/GetExtensionAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/GetExtensionAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/GetExtensionAssociationCommandOutput/)
</details>
<details>
<summary>
GetHostedConfigurationVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appconfig/command/GetHostedConfigurationVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/GetHostedConfigurationVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/GetHostedConfigurationVersionCommandOutput/)
</details>
<details>
<summary>
ListApplications
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appconfig/command/ListApplicationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/ListApplicationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/ListApplicationsCommandOutput/)
</details>
<details>
<summary>
ListConfigurationProfiles
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appconfig/command/ListConfigurationProfilesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/ListConfigurationProfilesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/ListConfigurationProfilesCommandOutput/)
</details>
<details>
<summary>
ListDeployments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appconfig/command/ListDeploymentsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/ListDeploymentsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/ListDeploymentsCommandOutput/)
</details>
<details>
<summary>
ListDeploymentStrategies
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appconfig/command/ListDeploymentStrategiesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/ListDeploymentStrategiesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/ListDeploymentStrategiesCommandOutput/)
</details>
<details>
<summary>
ListEnvironments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appconfig/command/ListEnvironmentsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/ListEnvironmentsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/ListEnvironmentsCommandOutput/)
</details>
<details>
<summary>
ListExperimentDefinitions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appconfig/command/ListExperimentDefinitionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/ListExperimentDefinitionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/ListExperimentDefinitionsCommandOutput/)
</details>
<details>
<summary>
ListExperimentRunEvents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appconfig/command/ListExperimentRunEventsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/ListExperimentRunEventsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/ListExperimentRunEventsCommandOutput/)
</details>
<details>
<summary>
ListExperimentRuns
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appconfig/command/ListExperimentRunsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/ListExperimentRunsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/ListExperimentRunsCommandOutput/)
</details>
<details>
<summary>
ListExtensionAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appconfig/command/ListExtensionAssociationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/ListExtensionAssociationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/ListExtensionAssociationsCommandOutput/)
</details>
<details>
<summary>
ListExtensions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appconfig/command/ListExtensionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/ListExtensionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/ListExtensionsCommandOutput/)
</details>
<details>
<summary>
ListHostedConfigurationVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appconfig/command/ListHostedConfigurationVersionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/ListHostedConfigurationVersionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/ListHostedConfigurationVersionsCommandOutput/)
</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appconfig/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/ListTagsForResourceCommandOutput/)
</details>
<details>
<summary>
StartDeployment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appconfig/command/StartDeploymentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/StartDeploymentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/StartDeploymentCommandOutput/)
</details>
<details>
<summary>
StartExperimentRun
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appconfig/command/StartExperimentRunCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/StartExperimentRunCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/StartExperimentRunCommandOutput/)
</details>
<details>
<summary>
StopDeployment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appconfig/command/StopDeploymentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/StopDeploymentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/StopDeploymentCommandOutput/)
</details>
<details>
<summary>
StopExperimentRun
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appconfig/command/StopExperimentRunCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/StopExperimentRunCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/StopExperimentRunCommandOutput/)
</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appconfig/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/TagResourceCommandOutput/)
</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appconfig/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/UntagResourceCommandOutput/)
</details>
<details>
<summary>
UpdateAccountSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appconfig/command/UpdateAccountSettingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/UpdateAccountSettingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/UpdateAccountSettingsCommandOutput/)
</details>
<details>
<summary>
UpdateApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appconfig/command/UpdateApplicationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/UpdateApplicationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/UpdateApplicationCommandOutput/)
</details>
<details>
<summary>
UpdateConfigurationProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appconfig/command/UpdateConfigurationProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/UpdateConfigurationProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/UpdateConfigurationProfileCommandOutput/)
</details>
<details>
<summary>
UpdateDeploymentStrategy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appconfig/command/UpdateDeploymentStrategyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/UpdateDeploymentStrategyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/UpdateDeploymentStrategyCommandOutput/)
</details>
<details>
<summary>
UpdateEnvironment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appconfig/command/UpdateEnvironmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/UpdateEnvironmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/UpdateEnvironmentCommandOutput/)
</details>
<details>
<summary>
UpdateExperimentDefinition
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appconfig/command/UpdateExperimentDefinitionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/UpdateExperimentDefinitionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/UpdateExperimentDefinitionCommandOutput/)
</details>
<details>
<summary>
UpdateExperimentRun
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appconfig/command/UpdateExperimentRunCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/UpdateExperimentRunCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/UpdateExperimentRunCommandOutput/)
</details>
<details>
<summary>
UpdateExtension
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appconfig/command/UpdateExtensionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/UpdateExtensionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/UpdateExtensionCommandOutput/)
</details>
<details>
<summary>
UpdateExtensionAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appconfig/command/UpdateExtensionAssociationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/UpdateExtensionAssociationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/UpdateExtensionAssociationCommandOutput/)
</details>
<details>
<summary>
ValidateConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appconfig/command/ValidateConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/ValidateConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/ValidateConfigurationCommandOutput/)
</details>
