<!-- generated file, do not edit directly -->

# @aws-sdk/client-appconfig

## Description

AWS SDK for JavaScript AppConfig Client for Node.js, Browser and React Native.

<p>Use AppConfig, a capability of Amazon Web Services Systems Manager, to create, manage, and quickly
deploy application configurations. AppConfig supports controlled deployments to
applications of any size and includes built-in validation checks and monitoring. You can
use AppConfig with applications hosted on Amazon EC2 instances, Lambda, containers,
mobile applications, or IoT devices.</p>
<p>To prevent errors when deploying application configurations, especially for production
systems where a simple typo could cause an unexpected outage, AppConfig includes
validators. A validator provides a syntactic or semantic check to ensure that the
configuration you want to deploy works as intended. To validate your application
configuration data, you provide a schema or an Amazon Web Services Lambda function that runs against
the configuration. The configuration deployment or update can only proceed when the
configuration data is valid.</p>
<p>During a configuration deployment, AppConfig monitors the application to
ensure that the deployment is successful. If the system encounters an error, AppConfig rolls back the change to minimize impact for your application users. You can
configure a deployment strategy for each application or environment that includes
deployment criteria, including velocity, bake time, and alarms to monitor. Similar to error
monitoring, if a deployment triggers an alarm, AppConfig automatically rolls back
to the previous version. </p>
<p>AppConfig supports multiple use cases. Here are some examples:</p>
<ul>
<li>
<p>
<b>Feature flags</b>: Use AppConfig to turn on
new features that require a timely deployment, such as a product launch or
announcement. </p>
</li>
<li>
<p>
<b>Application tuning</b>: Use AppConfig to
carefully introduce changes to your application that can only be tested with
production traffic.</p>
</li>
<li>
<p>
<b>Allow list</b>: Use AppConfig to allow
premium subscribers to access paid content. </p>
</li>
<li>
<p>
<b>Operational issues</b>: Use AppConfig to
reduce stress on your application when a dependency or other external factor impacts
the system.</p>
</li>
</ul>
<p>This reference is intended to be used with the <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/what-is-appconfig.html">AppConfig User
Guide</a>.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-appconfig
using your favorite package manager:

- `npm install @aws-sdk/client-appconfig`
- `yarn add @aws-sdk/client-appconfig`
- `pnpm add @aws-sdk/client-appconfig`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `AppConfigClient` and
the commands you need, for example `CreateApplicationCommand`:

```js
// ES5 example
const { AppConfigClient, CreateApplicationCommand } = require("@aws-sdk/client-appconfig");
```

```ts
// ES6+ example
import { AppConfigClient, CreateApplicationCommand } from "@aws-sdk/client-appconfig";
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

const params = {
  /** input parameters */
};
const command = new CreateApplicationCommand(params);
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
  const data = await client.createApplication(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .createApplication(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.createApplication(params, (err, data) => {
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/classes/createapplicationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/createapplicationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/createapplicationcommandoutput.html)

</details>
<details>
<summary>
CreateConfigurationProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/classes/createconfigurationprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/createconfigurationprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/createconfigurationprofilecommandoutput.html)

</details>
<details>
<summary>
CreateDeploymentStrategy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/classes/createdeploymentstrategycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/createdeploymentstrategycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/createdeploymentstrategycommandoutput.html)

</details>
<details>
<summary>
CreateEnvironment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/classes/createenvironmentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/createenvironmentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/createenvironmentcommandoutput.html)

</details>
<details>
<summary>
CreateExtension
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/classes/createextensioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/createextensioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/createextensioncommandoutput.html)

</details>
<details>
<summary>
CreateExtensionAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/classes/createextensionassociationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/createextensionassociationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/createextensionassociationcommandoutput.html)

</details>
<details>
<summary>
CreateHostedConfigurationVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/classes/createhostedconfigurationversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/createhostedconfigurationversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/createhostedconfigurationversioncommandoutput.html)

</details>
<details>
<summary>
DeleteApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/classes/deleteapplicationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/deleteapplicationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/deleteapplicationcommandoutput.html)

</details>
<details>
<summary>
DeleteConfigurationProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/classes/deleteconfigurationprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/deleteconfigurationprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/deleteconfigurationprofilecommandoutput.html)

</details>
<details>
<summary>
DeleteDeploymentStrategy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/classes/deletedeploymentstrategycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/deletedeploymentstrategycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/deletedeploymentstrategycommandoutput.html)

</details>
<details>
<summary>
DeleteEnvironment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/classes/deleteenvironmentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/deleteenvironmentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/deleteenvironmentcommandoutput.html)

</details>
<details>
<summary>
DeleteExtension
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/classes/deleteextensioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/deleteextensioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/deleteextensioncommandoutput.html)

</details>
<details>
<summary>
DeleteExtensionAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/classes/deleteextensionassociationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/deleteextensionassociationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/deleteextensionassociationcommandoutput.html)

</details>
<details>
<summary>
DeleteHostedConfigurationVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/classes/deletehostedconfigurationversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/deletehostedconfigurationversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/deletehostedconfigurationversioncommandoutput.html)

</details>
<details>
<summary>
GetApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/classes/getapplicationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/getapplicationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/getapplicationcommandoutput.html)

</details>
<details>
<summary>
GetConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/classes/getconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/getconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/getconfigurationcommandoutput.html)

</details>
<details>
<summary>
GetConfigurationProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/classes/getconfigurationprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/getconfigurationprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/getconfigurationprofilecommandoutput.html)

</details>
<details>
<summary>
GetDeployment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/classes/getdeploymentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/getdeploymentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/getdeploymentcommandoutput.html)

</details>
<details>
<summary>
GetDeploymentStrategy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/classes/getdeploymentstrategycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/getdeploymentstrategycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/getdeploymentstrategycommandoutput.html)

</details>
<details>
<summary>
GetEnvironment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/classes/getenvironmentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/getenvironmentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/getenvironmentcommandoutput.html)

</details>
<details>
<summary>
GetExtension
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/classes/getextensioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/getextensioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/getextensioncommandoutput.html)

</details>
<details>
<summary>
GetExtensionAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/classes/getextensionassociationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/getextensionassociationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/getextensionassociationcommandoutput.html)

</details>
<details>
<summary>
GetHostedConfigurationVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/classes/gethostedconfigurationversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/gethostedconfigurationversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/gethostedconfigurationversioncommandoutput.html)

</details>
<details>
<summary>
ListApplications
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/classes/listapplicationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/listapplicationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/listapplicationscommandoutput.html)

</details>
<details>
<summary>
ListConfigurationProfiles
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/classes/listconfigurationprofilescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/listconfigurationprofilescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/listconfigurationprofilescommandoutput.html)

</details>
<details>
<summary>
ListDeployments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/classes/listdeploymentscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/listdeploymentscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/listdeploymentscommandoutput.html)

</details>
<details>
<summary>
ListDeploymentStrategies
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/classes/listdeploymentstrategiescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/listdeploymentstrategiescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/listdeploymentstrategiescommandoutput.html)

</details>
<details>
<summary>
ListEnvironments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/classes/listenvironmentscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/listenvironmentscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/listenvironmentscommandoutput.html)

</details>
<details>
<summary>
ListExtensionAssociations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/classes/listextensionassociationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/listextensionassociationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/listextensionassociationscommandoutput.html)

</details>
<details>
<summary>
ListExtensions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/classes/listextensionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/listextensionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/listextensionscommandoutput.html)

</details>
<details>
<summary>
ListHostedConfigurationVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/classes/listhostedconfigurationversionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/listhostedconfigurationversionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/listhostedconfigurationversionscommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
StartDeployment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/classes/startdeploymentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/startdeploymentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/startdeploymentcommandoutput.html)

</details>
<details>
<summary>
StopDeployment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/classes/stopdeploymentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/stopdeploymentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/stopdeploymentcommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/classes/updateapplicationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/updateapplicationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/updateapplicationcommandoutput.html)

</details>
<details>
<summary>
UpdateConfigurationProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/classes/updateconfigurationprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/updateconfigurationprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/updateconfigurationprofilecommandoutput.html)

</details>
<details>
<summary>
UpdateDeploymentStrategy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/classes/updatedeploymentstrategycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/updatedeploymentstrategycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/updatedeploymentstrategycommandoutput.html)

</details>
<details>
<summary>
UpdateEnvironment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/classes/updateenvironmentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/updateenvironmentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/updateenvironmentcommandoutput.html)

</details>
<details>
<summary>
UpdateExtension
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/classes/updateextensioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/updateextensioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/updateextensioncommandoutput.html)

</details>
<details>
<summary>
UpdateExtensionAssociation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/classes/updateextensionassociationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/updateextensionassociationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/updateextensionassociationcommandoutput.html)

</details>
<details>
<summary>
ValidateConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/classes/validateconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/validateconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appconfig/interfaces/validateconfigurationcommandoutput.html)

</details>
