<!-- generated file, do not edit directly -->

# @aws-sdk/client-appconfig

## Description

AWS SDK for JavaScript AppConfig Client for Node.js, Browser and React Native.

<p>AppConfig feature flags and dynamic configurations help software builders
quickly and securely adjust application behavior in production environments without full
code deployments. AppConfig speeds up software release frequency, improves
application resiliency, and helps you address emergent issues more quickly. With feature
flags, you can gradually release new capabilities to users and measure the impact of those
changes before fully deploying the new capabilities to all users. With operational flags
and dynamic configurations, you can update block lists, allow lists, throttling limits,
logging verbosity, and perform other operational tuning to quickly respond to issues in
production environments.</p>
<note>
<p>AppConfig is a tool in Amazon Web Services Systems Manager.</p>
</note>
<p>Despite the fact that application configuration content can vary greatly from
application to application, AppConfig supports the following use cases, which
cover a broad spectrum of customer needs:</p>
<ul>
<li>
<p>
<b>Feature flags and toggles</b> - Safely release new
capabilities to your customers in a controlled environment. Instantly roll back
changes if you experience a problem.</p>
</li>
<li>
<p>
<b>Application tuning</b> - Carefully introduce
application changes while testing the impact of those changes with users in
production environments.</p>
</li>
<li>
<p>
<b>Allow list or block list</b> - Control access to
premium features or instantly block specific users without deploying new code.
</p>
</li>
<li>
<p>
<b>Centralized configuration storage</b> - Keep your
configuration data organized and consistent across all of your workloads. You can use
AppConfig to deploy configuration data stored in the AppConfig
hosted configuration store, Secrets Manager, Systems Manager, Parameter
Store, or Amazon S3.</p>
</li>
</ul>
<p>
<b>How AppConfig works</b>
</p>
<p>This section provides a high-level description of how AppConfig works and how
you get started.</p>
<dl>
<dt>1. Identify configuration values in code you want to manage in the cloud</dt>
<dd>
<p>Before you start creating AppConfig artifacts, we recommend you
identify configuration data in your code that you want to dynamically manage using
AppConfig. Good examples include feature flags or toggles, allow and
block lists, logging verbosity, service limits, and throttling rules, to name a
few.</p>
<p>If your configuration data already exists in the cloud, you can take advantage
of AppConfig validation, deployment, and extension features to further
streamline configuration data management.</p>
</dd>
<dt>2. Create an application namespace</dt>
<dd>
<p>To create a namespace, you create an AppConfig artifact called an
application. An application is simply an organizational construct like a
folder.</p>
</dd>
<dt>3. Create environments</dt>
<dd>
<p>For each AppConfig application, you define one or more environments.
An environment is a logical grouping of targets, such as applications in a
<code>Beta</code> or <code>Production</code> environment, Lambda functions,
or containers. You can also define environments for application subcomponents,
such as the <code>Web</code>, <code>Mobile</code>, and
<code>Back-end</code>.</p>
<p>You can configure Amazon CloudWatch alarms for each environment. The system monitors
alarms during a configuration deployment. If an alarm is triggered, the system
rolls back the configuration.</p>
</dd>
<dt>4. Create a configuration profile</dt>
<dd>
<p>A configuration profile includes, among other things, a URI that enables
AppConfig to locate your configuration data in its stored location
and a profile type. AppConfig supports two configuration profile types:
feature flags and freeform configurations. Feature flag configuration profiles
store their data in the AppConfig hosted configuration store and the URI
is simply <code>hosted</code>. For freeform configuration profiles, you can store
your data in the AppConfig hosted configuration store or any Amazon Web Services
service that integrates with AppConfig, as described in <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-free-form-configurations-creating.html">Creating
a free form configuration profile</a> in the the <i>AppConfig User Guide</i>.</p>
<p>A configuration profile can also include optional validators to ensure your
configuration data is syntactically and semantically correct. AppConfig
performs a check using the validators when you start a deployment. If any errors
are detected, the deployment rolls back to the previous configuration data.</p>
</dd>
<dt>5. Deploy configuration data</dt>
<dd>
<p>When you create a new deployment, you specify the following:</p>
<ul>
<li>
<p>An application ID</p>
</li>
<li>
<p>A configuration profile ID</p>
</li>
<li>
<p>A configuration version</p>
</li>
<li>
<p>An environment ID where you want to deploy the configuration data</p>
</li>
<li>
<p>A deployment strategy ID that defines how fast you want the changes to
take effect</p>
</li>
</ul>
<p>When you call the <a href="https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_StartDeployment.html">StartDeployment</a> API action, AppConfig performs the following
tasks:</p>
<ol>
<li>
<p>Retrieves the configuration data from the underlying data store by using
the location URI in the configuration profile.</p>
</li>
<li>
<p>Verifies the configuration data is syntactically and semantically correct
by using the validators you specified when you created your configuration
profile.</p>
</li>
<li>
<p>Caches a copy of the data so it is ready to be retrieved by your
application. This cached copy is called the <i>deployed
data</i>.</p>
</li>
</ol>
</dd>
<dt>6. Retrieve the configuration</dt>
<dd>
<p>You can configure AppConfig Agent as a local host and have the agent
poll AppConfig for configuration updates. The agent calls the <a href="https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_appconfigdata_StartConfigurationSession.html">StartConfigurationSession</a> and <a href="https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_appconfigdata_GetLatestConfiguration.html">GetLatestConfiguration</a> API actions and caches your configuration data
locally. To retrieve the data, your application makes an HTTP call to the
localhost server. AppConfig Agent supports several use cases, as
described in <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-retrieving-simplified-methods.html">Simplified
retrieval methods</a> in the the <i>AppConfig User
Guide</i>.</p>
<p>If AppConfig Agent isn't supported for your use case, you can
configure your application to poll AppConfig for configuration updates
by directly calling the <a href="https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_appconfigdata_StartConfigurationSession.html">StartConfigurationSession</a> and <a href="https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_appconfigdata_GetLatestConfiguration.html">GetLatestConfiguration</a> API actions. </p>
</dd>
</dl>
<p>This reference is intended to be used with the <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/what-is-appconfig.html">AppConfig User
Guide</a>.</p>

## Installing
To install this package, simply type add or install @aws-sdk/client-appconfig
using your favorite package manager:
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

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new AppConfigClient({ region: "REGION" });

const params = { /** input parameters */ };
const command = new ListApplicationsCommand(params);
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
import * as AWS from "@aws-sdk/client-appconfig";
const client = new AWS.AppConfig({ region: "REGION" });

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

// callbacks.
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
StopDeployment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/appconfig/command/StopDeploymentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/StopDeploymentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-appconfig/Interface/StopDeploymentCommandOutput/)
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
