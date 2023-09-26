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

To install the this package, simply type add or install @aws-sdk/client-elastic-beanstalk
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

const params = {
  /** input parameters */
};
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/classes/abortenvironmentupdatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/abortenvironmentupdatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/abortenvironmentupdatecommandoutput.html)

</details>
<details>
<summary>
ApplyEnvironmentManagedAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/classes/applyenvironmentmanagedactioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/applyenvironmentmanagedactioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/applyenvironmentmanagedactioncommandoutput.html)

</details>
<details>
<summary>
AssociateEnvironmentOperationsRole
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/classes/associateenvironmentoperationsrolecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/associateenvironmentoperationsrolecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/associateenvironmentoperationsrolecommandoutput.html)

</details>
<details>
<summary>
CheckDNSAvailability
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/classes/checkdnsavailabilitycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/checkdnsavailabilitycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/checkdnsavailabilitycommandoutput.html)

</details>
<details>
<summary>
ComposeEnvironments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/classes/composeenvironmentscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/composeenvironmentscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/composeenvironmentscommandoutput.html)

</details>
<details>
<summary>
CreateApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/classes/createapplicationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/createapplicationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/createapplicationcommandoutput.html)

</details>
<details>
<summary>
CreateApplicationVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/classes/createapplicationversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/createapplicationversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/createapplicationversioncommandoutput.html)

</details>
<details>
<summary>
CreateConfigurationTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/classes/createconfigurationtemplatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/createconfigurationtemplatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/createconfigurationtemplatecommandoutput.html)

</details>
<details>
<summary>
CreateEnvironment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/classes/createenvironmentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/createenvironmentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/createenvironmentcommandoutput.html)

</details>
<details>
<summary>
CreatePlatformVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/classes/createplatformversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/createplatformversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/createplatformversioncommandoutput.html)

</details>
<details>
<summary>
CreateStorageLocation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/classes/createstoragelocationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/createstoragelocationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/createstoragelocationcommandoutput.html)

</details>
<details>
<summary>
DeleteApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/classes/deleteapplicationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/deleteapplicationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/deleteapplicationcommandoutput.html)

</details>
<details>
<summary>
DeleteApplicationVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/classes/deleteapplicationversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/deleteapplicationversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/deleteapplicationversioncommandoutput.html)

</details>
<details>
<summary>
DeleteConfigurationTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/classes/deleteconfigurationtemplatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/deleteconfigurationtemplatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/deleteconfigurationtemplatecommandoutput.html)

</details>
<details>
<summary>
DeleteEnvironmentConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/classes/deleteenvironmentconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/deleteenvironmentconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/deleteenvironmentconfigurationcommandoutput.html)

</details>
<details>
<summary>
DeletePlatformVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/classes/deleteplatformversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/deleteplatformversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/deleteplatformversioncommandoutput.html)

</details>
<details>
<summary>
DescribeAccountAttributes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/classes/describeaccountattributescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/describeaccountattributescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/describeaccountattributescommandoutput.html)

</details>
<details>
<summary>
DescribeApplications
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/classes/describeapplicationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/describeapplicationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/describeapplicationscommandoutput.html)

</details>
<details>
<summary>
DescribeApplicationVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/classes/describeapplicationversionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/describeapplicationversionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/describeapplicationversionscommandoutput.html)

</details>
<details>
<summary>
DescribeConfigurationOptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/classes/describeconfigurationoptionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/describeconfigurationoptionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/describeconfigurationoptionscommandoutput.html)

</details>
<details>
<summary>
DescribeConfigurationSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/classes/describeconfigurationsettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/describeconfigurationsettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/describeconfigurationsettingscommandoutput.html)

</details>
<details>
<summary>
DescribeEnvironmentHealth
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/classes/describeenvironmenthealthcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/describeenvironmenthealthcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/describeenvironmenthealthcommandoutput.html)

</details>
<details>
<summary>
DescribeEnvironmentManagedActionHistory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/classes/describeenvironmentmanagedactionhistorycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/describeenvironmentmanagedactionhistorycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/describeenvironmentmanagedactionhistorycommandoutput.html)

</details>
<details>
<summary>
DescribeEnvironmentManagedActions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/classes/describeenvironmentmanagedactionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/describeenvironmentmanagedactionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/describeenvironmentmanagedactionscommandoutput.html)

</details>
<details>
<summary>
DescribeEnvironmentResources
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/classes/describeenvironmentresourcescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/describeenvironmentresourcescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/describeenvironmentresourcescommandoutput.html)

</details>
<details>
<summary>
DescribeEnvironments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/classes/describeenvironmentscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/describeenvironmentscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/describeenvironmentscommandoutput.html)

</details>
<details>
<summary>
DescribeEvents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/classes/describeeventscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/describeeventscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/describeeventscommandoutput.html)

</details>
<details>
<summary>
DescribeInstancesHealth
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/classes/describeinstanceshealthcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/describeinstanceshealthcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/describeinstanceshealthcommandoutput.html)

</details>
<details>
<summary>
DescribePlatformVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/classes/describeplatformversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/describeplatformversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/describeplatformversioncommandoutput.html)

</details>
<details>
<summary>
DisassociateEnvironmentOperationsRole
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/classes/disassociateenvironmentoperationsrolecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/disassociateenvironmentoperationsrolecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/disassociateenvironmentoperationsrolecommandoutput.html)

</details>
<details>
<summary>
ListAvailableSolutionStacks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/classes/listavailablesolutionstackscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/listavailablesolutionstackscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/listavailablesolutionstackscommandoutput.html)

</details>
<details>
<summary>
ListPlatformBranches
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/classes/listplatformbranchescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/listplatformbranchescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/listplatformbranchescommandoutput.html)

</details>
<details>
<summary>
ListPlatformVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/classes/listplatformversionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/listplatformversionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/listplatformversionscommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
RebuildEnvironment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/classes/rebuildenvironmentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/rebuildenvironmentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/rebuildenvironmentcommandoutput.html)

</details>
<details>
<summary>
RequestEnvironmentInfo
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/classes/requestenvironmentinfocommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/requestenvironmentinfocommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/requestenvironmentinfocommandoutput.html)

</details>
<details>
<summary>
RestartAppServer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/classes/restartappservercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/restartappservercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/restartappservercommandoutput.html)

</details>
<details>
<summary>
RetrieveEnvironmentInfo
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/classes/retrieveenvironmentinfocommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/retrieveenvironmentinfocommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/retrieveenvironmentinfocommandoutput.html)

</details>
<details>
<summary>
SwapEnvironmentCNAMEs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/classes/swapenvironmentcnamescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/swapenvironmentcnamescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/swapenvironmentcnamescommandoutput.html)

</details>
<details>
<summary>
TerminateEnvironment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/classes/terminateenvironmentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/terminateenvironmentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/terminateenvironmentcommandoutput.html)

</details>
<details>
<summary>
UpdateApplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/classes/updateapplicationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/updateapplicationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/updateapplicationcommandoutput.html)

</details>
<details>
<summary>
UpdateApplicationResourceLifecycle
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/classes/updateapplicationresourcelifecyclecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/updateapplicationresourcelifecyclecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/updateapplicationresourcelifecyclecommandoutput.html)

</details>
<details>
<summary>
UpdateApplicationVersion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/classes/updateapplicationversioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/updateapplicationversioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/updateapplicationversioncommandoutput.html)

</details>
<details>
<summary>
UpdateConfigurationTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/classes/updateconfigurationtemplatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/updateconfigurationtemplatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/updateconfigurationtemplatecommandoutput.html)

</details>
<details>
<summary>
UpdateEnvironment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/classes/updateenvironmentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/updateenvironmentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/updateenvironmentcommandoutput.html)

</details>
<details>
<summary>
UpdateTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/classes/updatetagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/updatetagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/updatetagsforresourcecommandoutput.html)

</details>
<details>
<summary>
ValidateConfigurationSettings
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/classes/validateconfigurationsettingscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/validateconfigurationsettingscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-elastic-beanstalk/interfaces/validateconfigurationsettingscommandoutput.html)

</details>
