<!-- generated file, do not edit directly -->

# @aws-sdk/client-elastic-beanstalk

## Description

AWS SDK for JavaScript ElasticBeanstalk Client for Node.js, Browser and React Native.

<fullname>AWS Elastic Beanstalk</fullname>
<p>AWS Elastic Beanstalk makes it easy for you to create, deploy, and manage scalable,
fault-tolerant applications running on the Amazon Web Services cloud.</p>
<p>For more information about this product, go to the <a href="http://aws.amazon.com/elasticbeanstalk/">AWS Elastic Beanstalk</a> details page. The location of the
latest AWS Elastic Beanstalk WSDL is <a href="https://elasticbeanstalk.s3.amazonaws.com/doc/2010-12-01/AWSElasticBeanstalk.wsdl">https://elasticbeanstalk.s3.amazonaws.com/doc/2010-12-01/AWSElasticBeanstalk.wsdl</a>.
To install the Software Development Kits (SDKs), Integrated Development Environment (IDE)
Toolkits, and command line tools that enable you to access the API, go to <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p>
<p>
<b>Endpoints</b>
</p>
<p>For a list of region-specific endpoints that AWS Elastic Beanstalk supports, go to
<a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#elasticbeanstalk_region">Regions and Endpoints</a> in the <i>Amazon Web Services
Glossary</i>.</p>

## Installing
To install this package, simply type add or install @aws-sdk/client-elastic-beanstalk
using your favorite package manager:
- `npm install @aws-sdk/client-elastic-beanstalk`
- `yarn add @aws-sdk/client-elastic-beanstalk`
- `pnpm add @aws-sdk/client-elastic-beanstalk`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `ElasticBeanstalkClient` and
the commands you need, for example `ListPlatformBranchesCommand`:

```js
// ES5 example
const { ElasticBeanstalkClient, ListPlatformBranchesCommand } = require("@aws-sdk/client-elastic-beanstalk");
```

```ts
// ES6+ example
import { ElasticBeanstalkClient, ListPlatformBranchesCommand } from "@aws-sdk/client-elastic-beanstalk";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new ElasticBeanstalkClient({ region: "REGION" });

const params = { /** input parameters */ };
const command = new ListPlatformBranchesCommand(params);
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
import * as AWS from "@aws-sdk/client-elastic-beanstalk";
const client = new AWS.ElasticBeanstalk({ region: "REGION" });

// async/await.
try {
  const data = await client.listPlatformBranches(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listPlatformBranches(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listPlatformBranches(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-elastic-beanstalk` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AbortEnvironmentUpdate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-beanstalk/command/AbortEnvironmentUpdateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/AbortEnvironmentUpdateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/AbortEnvironmentUpdateCommandOutput/)
</details>
<details>
<summary>
ApplyEnvironmentManagedAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-beanstalk/command/ApplyEnvironmentManagedActionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/ApplyEnvironmentManagedActionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/ApplyEnvironmentManagedActionCommandOutput/)
</details>
<details>
<summary>
AssociateEnvironmentOperationsRole
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-beanstalk/command/AssociateEnvironmentOperationsRoleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/AssociateEnvironmentOperationsRoleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/AssociateEnvironmentOperationsRoleCommandOutput/)
</details>
<details>
<summary>
CheckDNSAvailability
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-beanstalk/command/CheckDNSAvailabilityCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/CheckDNSAvailabilityCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/CheckDNSAvailabilityCommandOutput/)
</details>
<details>
<summary>
ComposeEnvironments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-beanstalk/command/ComposeEnvironmentsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/ComposeEnvironmentsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/ComposeEnvironmentsCommandOutput/)
</details>
<details>
<summary>
CreateApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-beanstalk/command/CreateApplicationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/CreateApplicationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/CreateApplicationCommandOutput/)
</details>
<details>
<summary>
CreateApplicationVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-beanstalk/command/CreateApplicationVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/CreateApplicationVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/CreateApplicationVersionCommandOutput/)
</details>
<details>
<summary>
CreateConfigurationTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-beanstalk/command/CreateConfigurationTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/CreateConfigurationTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/CreateConfigurationTemplateCommandOutput/)
</details>
<details>
<summary>
CreateEnvironment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-beanstalk/command/CreateEnvironmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/CreateEnvironmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/CreateEnvironmentCommandOutput/)
</details>
<details>
<summary>
CreatePlatformVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-beanstalk/command/CreatePlatformVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/CreatePlatformVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/CreatePlatformVersionCommandOutput/)
</details>
<details>
<summary>
CreateStorageLocation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-beanstalk/command/CreateStorageLocationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/CreateStorageLocationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/CreateStorageLocationCommandOutput/)
</details>
<details>
<summary>
DeleteApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-beanstalk/command/DeleteApplicationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/DeleteApplicationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/DeleteApplicationCommandOutput/)
</details>
<details>
<summary>
DeleteApplicationVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-beanstalk/command/DeleteApplicationVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/DeleteApplicationVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/DeleteApplicationVersionCommandOutput/)
</details>
<details>
<summary>
DeleteConfigurationTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-beanstalk/command/DeleteConfigurationTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/DeleteConfigurationTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/DeleteConfigurationTemplateCommandOutput/)
</details>
<details>
<summary>
DeleteEnvironmentConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-beanstalk/command/DeleteEnvironmentConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/DeleteEnvironmentConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/DeleteEnvironmentConfigurationCommandOutput/)
</details>
<details>
<summary>
DeletePlatformVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-beanstalk/command/DeletePlatformVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/DeletePlatformVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/DeletePlatformVersionCommandOutput/)
</details>
<details>
<summary>
DescribeAccountAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-beanstalk/command/DescribeAccountAttributesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/DescribeAccountAttributesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/DescribeAccountAttributesCommandOutput/)
</details>
<details>
<summary>
DescribeApplications
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-beanstalk/command/DescribeApplicationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/DescribeApplicationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/DescribeApplicationsCommandOutput/)
</details>
<details>
<summary>
DescribeApplicationVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-beanstalk/command/DescribeApplicationVersionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/DescribeApplicationVersionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/DescribeApplicationVersionsCommandOutput/)
</details>
<details>
<summary>
DescribeConfigurationOptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-beanstalk/command/DescribeConfigurationOptionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/DescribeConfigurationOptionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/DescribeConfigurationOptionsCommandOutput/)
</details>
<details>
<summary>
DescribeConfigurationSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-beanstalk/command/DescribeConfigurationSettingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/DescribeConfigurationSettingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/DescribeConfigurationSettingsCommandOutput/)
</details>
<details>
<summary>
DescribeEnvironmentHealth
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-beanstalk/command/DescribeEnvironmentHealthCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/DescribeEnvironmentHealthCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/DescribeEnvironmentHealthCommandOutput/)
</details>
<details>
<summary>
DescribeEnvironmentManagedActionHistory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-beanstalk/command/DescribeEnvironmentManagedActionHistoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/DescribeEnvironmentManagedActionHistoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/DescribeEnvironmentManagedActionHistoryCommandOutput/)
</details>
<details>
<summary>
DescribeEnvironmentManagedActions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-beanstalk/command/DescribeEnvironmentManagedActionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/DescribeEnvironmentManagedActionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/DescribeEnvironmentManagedActionsCommandOutput/)
</details>
<details>
<summary>
DescribeEnvironmentResources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-beanstalk/command/DescribeEnvironmentResourcesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/DescribeEnvironmentResourcesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/DescribeEnvironmentResourcesCommandOutput/)
</details>
<details>
<summary>
DescribeEnvironments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-beanstalk/command/DescribeEnvironmentsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/DescribeEnvironmentsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/DescribeEnvironmentsCommandOutput/)
</details>
<details>
<summary>
DescribeEvents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-beanstalk/command/DescribeEventsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/DescribeEventsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/DescribeEventsCommandOutput/)
</details>
<details>
<summary>
DescribeInstancesHealth
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-beanstalk/command/DescribeInstancesHealthCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/DescribeInstancesHealthCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/DescribeInstancesHealthCommandOutput/)
</details>
<details>
<summary>
DescribePlatformVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-beanstalk/command/DescribePlatformVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/DescribePlatformVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/DescribePlatformVersionCommandOutput/)
</details>
<details>
<summary>
DisassociateEnvironmentOperationsRole
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-beanstalk/command/DisassociateEnvironmentOperationsRoleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/DisassociateEnvironmentOperationsRoleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/DisassociateEnvironmentOperationsRoleCommandOutput/)
</details>
<details>
<summary>
ListAvailableSolutionStacks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-beanstalk/command/ListAvailableSolutionStacksCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/ListAvailableSolutionStacksCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/ListAvailableSolutionStacksCommandOutput/)
</details>
<details>
<summary>
ListPlatformBranches
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-beanstalk/command/ListPlatformBranchesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/ListPlatformBranchesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/ListPlatformBranchesCommandOutput/)
</details>
<details>
<summary>
ListPlatformVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-beanstalk/command/ListPlatformVersionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/ListPlatformVersionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/ListPlatformVersionsCommandOutput/)
</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-beanstalk/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/ListTagsForResourceCommandOutput/)
</details>
<details>
<summary>
RebuildEnvironment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-beanstalk/command/RebuildEnvironmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/RebuildEnvironmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/RebuildEnvironmentCommandOutput/)
</details>
<details>
<summary>
RequestEnvironmentInfo
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-beanstalk/command/RequestEnvironmentInfoCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/RequestEnvironmentInfoCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/RequestEnvironmentInfoCommandOutput/)
</details>
<details>
<summary>
RestartAppServer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-beanstalk/command/RestartAppServerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/RestartAppServerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/RestartAppServerCommandOutput/)
</details>
<details>
<summary>
RetrieveEnvironmentInfo
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-beanstalk/command/RetrieveEnvironmentInfoCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/RetrieveEnvironmentInfoCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/RetrieveEnvironmentInfoCommandOutput/)
</details>
<details>
<summary>
SwapEnvironmentCNAMEs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-beanstalk/command/SwapEnvironmentCNAMEsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/SwapEnvironmentCNAMEsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/SwapEnvironmentCNAMEsCommandOutput/)
</details>
<details>
<summary>
TerminateEnvironment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-beanstalk/command/TerminateEnvironmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/TerminateEnvironmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/TerminateEnvironmentCommandOutput/)
</details>
<details>
<summary>
UpdateApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-beanstalk/command/UpdateApplicationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/UpdateApplicationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/UpdateApplicationCommandOutput/)
</details>
<details>
<summary>
UpdateApplicationResourceLifecycle
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-beanstalk/command/UpdateApplicationResourceLifecycleCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/UpdateApplicationResourceLifecycleCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/UpdateApplicationResourceLifecycleCommandOutput/)
</details>
<details>
<summary>
UpdateApplicationVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-beanstalk/command/UpdateApplicationVersionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/UpdateApplicationVersionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/UpdateApplicationVersionCommandOutput/)
</details>
<details>
<summary>
UpdateConfigurationTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-beanstalk/command/UpdateConfigurationTemplateCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/UpdateConfigurationTemplateCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/UpdateConfigurationTemplateCommandOutput/)
</details>
<details>
<summary>
UpdateEnvironment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-beanstalk/command/UpdateEnvironmentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/UpdateEnvironmentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/UpdateEnvironmentCommandOutput/)
</details>
<details>
<summary>
UpdateTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-beanstalk/command/UpdateTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/UpdateTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/UpdateTagsForResourceCommandOutput/)
</details>
<details>
<summary>
ValidateConfigurationSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/elastic-beanstalk/command/ValidateConfigurationSettingsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/ValidateConfigurationSettingsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-elastic-beanstalk/Interface/ValidateConfigurationSettingsCommandOutput/)
</details>
