<!-- generated file, do not edit directly -->

# @aws-sdk/client-opsworks

## Description

AWS SDK for JavaScript OpsWorks Client for Node.js, Browser and React Native.

<fullname>AWS OpsWorks</fullname>

<p>Welcome to the <i>AWS OpsWorks Stacks API Reference</i>. This guide provides descriptions, syntax, and
usage examples for AWS OpsWorks Stacks actions and data types, including common parameters and error
codes. </p>
<p>AWS OpsWorks Stacks is an application management service that provides an integrated experience for
overseeing the complete application lifecycle. For information about this product, go to the
<a href="http://aws.amazon.com/opsworks/">AWS OpsWorks</a> details page. </p>

<p>
<b>SDKs and CLI</b>
</p>
<p>The most common way to use the AWS OpsWorks Stacks API is by using the AWS Command Line Interface (CLI) or by using one of the AWS SDKs to implement applications in your preferred language. For more information, see:</p>
<ul>
<li>
<p>
<a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html">AWS CLI</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/services/opsworks/AWSOpsWorksClient.html">AWS SDK for Java</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/sdkfornet/latest/apidocs/html/N_Amazon_OpsWorks.htm">AWS SDK for
.NET</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/aws-sdk-php-2/latest/class-Aws.OpsWorks.OpsWorksClient.html">AWS
SDK for PHP 2</a>
</p>
</li>
<li>
<p>
<a href="http://docs.aws.amazon.com/sdkforruby/api/">AWS SDK for Ruby</a>
</p>
</li>
<li>
<p>
<a href="http://aws.amazon.com/documentation/sdkforjavascript/">AWS SDK for Node.js</a>
</p>
</li>
<li>
<p>
<a href="http://docs.pythonboto.org/en/latest/ref/opsworks.html">AWS SDK for
Python(Boto)</a>
</p>
</li>
</ul>

<p>
<b>Endpoints</b>
</p>
<p>AWS OpsWorks Stacks supports the following endpoints, all HTTPS. You must connect to one of the following endpoints. Stacks
can only be accessed or managed within the endpoint in which they are created.</p>
<ul>
<li>
<p>opsworks.us-east-1.amazonaws.com</p>
</li>
<li>
<p>opsworks.us-east-2.amazonaws.com</p>
</li>
<li>
<p>opsworks.us-west-1.amazonaws.com</p>
</li>
<li>
<p>opsworks.us-west-2.amazonaws.com</p>
</li>
<li>
<p>opsworks.ca-central-1.amazonaws.com (API only; not available in the AWS console)</p>
</li>
<li>
<p>opsworks.eu-west-1.amazonaws.com</p>
</li>
<li>
<p>opsworks.eu-west-2.amazonaws.com</p>
</li>
<li>
<p>opsworks.eu-west-3.amazonaws.com</p>
</li>
<li>
<p>opsworks.eu-central-1.amazonaws.com</p>
</li>
<li>
<p>opsworks.ap-northeast-1.amazonaws.com</p>
</li>
<li>
<p>opsworks.ap-northeast-2.amazonaws.com</p>
</li>
<li>
<p>opsworks.ap-south-1.amazonaws.com</p>
</li>
<li>
<p>opsworks.ap-southeast-1.amazonaws.com</p>
</li>
<li>
<p>opsworks.ap-southeast-2.amazonaws.com</p>
</li>
<li>
<p>opsworks.sa-east-1.amazonaws.com</p>
</li>
</ul>
<p>
<b>Chef Versions</b>
</p>
<p>When you call <a>CreateStack</a>, <a>CloneStack</a>, or <a>UpdateStack</a> we recommend you
use the <code>ConfigurationManager</code> parameter to specify the Chef version.
The recommended and default value for Linux stacks is currently 12. Windows stacks use Chef 12.2. For more information,
see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook-chef11.html">Chef Versions</a>.</p>
<note>
<p>You can specify Chef 12, 11.10, or 11.4 for your Linux stack. We recommend migrating your existing Linux stacks to Chef 12 as soon as possible.</p>
</note>

## Installing

To install the this package, simply type add or install @aws-sdk/client-opsworks
using your favorite package manager:

- `npm install @aws-sdk/client-opsworks`
- `yarn add @aws-sdk/client-opsworks`
- `pnpm add @aws-sdk/client-opsworks`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `OpsWorksClient` and
the commands you need, for example `AssignInstanceCommand`:

```js
// ES5 example
const { OpsWorksClient, AssignInstanceCommand } = require("@aws-sdk/client-opsworks");
```

```ts
// ES6+ example
import { OpsWorksClient, AssignInstanceCommand } from "@aws-sdk/client-opsworks";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new OpsWorksClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new AssignInstanceCommand(params);
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
import * as AWS from "@aws-sdk/client-opsworks";
const client = new AWS.OpsWorks({ region: "REGION" });

// async/await.
try {
  const data = await client.assignInstance(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .assignInstance(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.assignInstance(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-opsworks` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AssignInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/assigninstancecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/assigninstancecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/assigninstancecommandoutput.html)

</details>
<details>
<summary>
AssignVolume
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/assignvolumecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/assignvolumecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/assignvolumecommandoutput.html)

</details>
<details>
<summary>
AssociateElasticIp
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/associateelasticipcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/associateelasticipcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/associateelasticipcommandoutput.html)

</details>
<details>
<summary>
AttachElasticLoadBalancer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/attachelasticloadbalancercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/attachelasticloadbalancercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/attachelasticloadbalancercommandoutput.html)

</details>
<details>
<summary>
CloneStack
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/clonestackcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/clonestackcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/clonestackcommandoutput.html)

</details>
<details>
<summary>
CreateApp
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/createappcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/createappcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/createappcommandoutput.html)

</details>
<details>
<summary>
CreateDeployment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/createdeploymentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/createdeploymentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/createdeploymentcommandoutput.html)

</details>
<details>
<summary>
CreateInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/createinstancecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/createinstancecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/createinstancecommandoutput.html)

</details>
<details>
<summary>
CreateLayer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/createlayercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/createlayercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/createlayercommandoutput.html)

</details>
<details>
<summary>
CreateStack
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/createstackcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/createstackcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/createstackcommandoutput.html)

</details>
<details>
<summary>
CreateUserProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/createuserprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/createuserprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/createuserprofilecommandoutput.html)

</details>
<details>
<summary>
DeleteApp
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/deleteappcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/deleteappcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/deleteappcommandoutput.html)

</details>
<details>
<summary>
DeleteInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/deleteinstancecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/deleteinstancecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/deleteinstancecommandoutput.html)

</details>
<details>
<summary>
DeleteLayer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/deletelayercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/deletelayercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/deletelayercommandoutput.html)

</details>
<details>
<summary>
DeleteStack
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/deletestackcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/deletestackcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/deletestackcommandoutput.html)

</details>
<details>
<summary>
DeleteUserProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/deleteuserprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/deleteuserprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/deleteuserprofilecommandoutput.html)

</details>
<details>
<summary>
DeregisterEcsCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/deregisterecsclustercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/deregisterecsclustercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/deregisterecsclustercommandoutput.html)

</details>
<details>
<summary>
DeregisterElasticIp
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/deregisterelasticipcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/deregisterelasticipcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/deregisterelasticipcommandoutput.html)

</details>
<details>
<summary>
DeregisterInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/deregisterinstancecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/deregisterinstancecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/deregisterinstancecommandoutput.html)

</details>
<details>
<summary>
DeregisterRdsDbInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/deregisterrdsdbinstancecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/deregisterrdsdbinstancecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/deregisterrdsdbinstancecommandoutput.html)

</details>
<details>
<summary>
DeregisterVolume
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/deregistervolumecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/deregistervolumecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/deregistervolumecommandoutput.html)

</details>
<details>
<summary>
DescribeAgentVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/describeagentversionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/describeagentversionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/describeagentversionscommandoutput.html)

</details>
<details>
<summary>
DescribeApps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/describeappscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/describeappscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/describeappscommandoutput.html)

</details>
<details>
<summary>
DescribeCommands
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/describecommandscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/describecommandscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/describecommandscommandoutput.html)

</details>
<details>
<summary>
DescribeDeployments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/describedeploymentscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/describedeploymentscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/describedeploymentscommandoutput.html)

</details>
<details>
<summary>
DescribeEcsClusters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/describeecsclusterscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/describeecsclusterscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/describeecsclusterscommandoutput.html)

</details>
<details>
<summary>
DescribeElasticIps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/describeelasticipscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/describeelasticipscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/describeelasticipscommandoutput.html)

</details>
<details>
<summary>
DescribeElasticLoadBalancers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/describeelasticloadbalancerscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/describeelasticloadbalancerscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/describeelasticloadbalancerscommandoutput.html)

</details>
<details>
<summary>
DescribeInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/describeinstancescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/describeinstancescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/describeinstancescommandoutput.html)

</details>
<details>
<summary>
DescribeLayers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/describelayerscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/describelayerscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/describelayerscommandoutput.html)

</details>
<details>
<summary>
DescribeLoadBasedAutoScaling
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/describeloadbasedautoscalingcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/describeloadbasedautoscalingcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/describeloadbasedautoscalingcommandoutput.html)

</details>
<details>
<summary>
DescribeMyUserProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/describemyuserprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/describemyuserprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/describemyuserprofilecommandoutput.html)

</details>
<details>
<summary>
DescribeOperatingSystems
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/describeoperatingsystemscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/describeoperatingsystemscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/describeoperatingsystemscommandoutput.html)

</details>
<details>
<summary>
DescribePermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/describepermissionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/describepermissionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/describepermissionscommandoutput.html)

</details>
<details>
<summary>
DescribeRaidArrays
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/describeraidarrayscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/describeraidarrayscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/describeraidarrayscommandoutput.html)

</details>
<details>
<summary>
DescribeRdsDbInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/describerdsdbinstancescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/describerdsdbinstancescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/describerdsdbinstancescommandoutput.html)

</details>
<details>
<summary>
DescribeServiceErrors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/describeserviceerrorscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/describeserviceerrorscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/describeserviceerrorscommandoutput.html)

</details>
<details>
<summary>
DescribeStackProvisioningParameters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/describestackprovisioningparameterscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/describestackprovisioningparameterscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/describestackprovisioningparameterscommandoutput.html)

</details>
<details>
<summary>
DescribeStacks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/describestackscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/describestackscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/describestackscommandoutput.html)

</details>
<details>
<summary>
DescribeStackSummary
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/describestacksummarycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/describestacksummarycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/describestacksummarycommandoutput.html)

</details>
<details>
<summary>
DescribeTimeBasedAutoScaling
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/describetimebasedautoscalingcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/describetimebasedautoscalingcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/describetimebasedautoscalingcommandoutput.html)

</details>
<details>
<summary>
DescribeUserProfiles
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/describeuserprofilescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/describeuserprofilescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/describeuserprofilescommandoutput.html)

</details>
<details>
<summary>
DescribeVolumes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/describevolumescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/describevolumescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/describevolumescommandoutput.html)

</details>
<details>
<summary>
DetachElasticLoadBalancer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/detachelasticloadbalancercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/detachelasticloadbalancercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/detachelasticloadbalancercommandoutput.html)

</details>
<details>
<summary>
DisassociateElasticIp
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/disassociateelasticipcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/disassociateelasticipcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/disassociateelasticipcommandoutput.html)

</details>
<details>
<summary>
GetHostnameSuggestion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/gethostnamesuggestioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/gethostnamesuggestioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/gethostnamesuggestioncommandoutput.html)

</details>
<details>
<summary>
GrantAccess
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/grantaccesscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/grantaccesscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/grantaccesscommandoutput.html)

</details>
<details>
<summary>
ListTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/listtagscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/listtagscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/listtagscommandoutput.html)

</details>
<details>
<summary>
RebootInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/rebootinstancecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/rebootinstancecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/rebootinstancecommandoutput.html)

</details>
<details>
<summary>
RegisterEcsCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/registerecsclustercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/registerecsclustercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/registerecsclustercommandoutput.html)

</details>
<details>
<summary>
RegisterElasticIp
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/registerelasticipcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/registerelasticipcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/registerelasticipcommandoutput.html)

</details>
<details>
<summary>
RegisterInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/registerinstancecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/registerinstancecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/registerinstancecommandoutput.html)

</details>
<details>
<summary>
RegisterRdsDbInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/registerrdsdbinstancecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/registerrdsdbinstancecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/registerrdsdbinstancecommandoutput.html)

</details>
<details>
<summary>
RegisterVolume
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/registervolumecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/registervolumecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/registervolumecommandoutput.html)

</details>
<details>
<summary>
SetLoadBasedAutoScaling
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/setloadbasedautoscalingcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/setloadbasedautoscalingcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/setloadbasedautoscalingcommandoutput.html)

</details>
<details>
<summary>
SetPermission
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/setpermissioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/setpermissioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/setpermissioncommandoutput.html)

</details>
<details>
<summary>
SetTimeBasedAutoScaling
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/settimebasedautoscalingcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/settimebasedautoscalingcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/settimebasedautoscalingcommandoutput.html)

</details>
<details>
<summary>
StartInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/startinstancecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/startinstancecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/startinstancecommandoutput.html)

</details>
<details>
<summary>
StartStack
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/startstackcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/startstackcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/startstackcommandoutput.html)

</details>
<details>
<summary>
StopInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/stopinstancecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/stopinstancecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/stopinstancecommandoutput.html)

</details>
<details>
<summary>
StopStack
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/stopstackcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/stopstackcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/stopstackcommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UnassignInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/unassigninstancecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/unassigninstancecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/unassigninstancecommandoutput.html)

</details>
<details>
<summary>
UnassignVolume
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/unassignvolumecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/unassignvolumecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/unassignvolumecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateApp
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/updateappcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/updateappcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/updateappcommandoutput.html)

</details>
<details>
<summary>
UpdateElasticIp
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/updateelasticipcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/updateelasticipcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/updateelasticipcommandoutput.html)

</details>
<details>
<summary>
UpdateInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/updateinstancecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/updateinstancecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/updateinstancecommandoutput.html)

</details>
<details>
<summary>
UpdateLayer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/updatelayercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/updatelayercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/updatelayercommandoutput.html)

</details>
<details>
<summary>
UpdateMyUserProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/updatemyuserprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/updatemyuserprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/updatemyuserprofilecommandoutput.html)

</details>
<details>
<summary>
UpdateRdsDbInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/updaterdsdbinstancecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/updaterdsdbinstancecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/updaterdsdbinstancecommandoutput.html)

</details>
<details>
<summary>
UpdateStack
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/updatestackcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/updatestackcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/updatestackcommandoutput.html)

</details>
<details>
<summary>
UpdateUserProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/updateuserprofilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/updateuserprofilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/updateuserprofilecommandoutput.html)

</details>
<details>
<summary>
UpdateVolume
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/classes/updatevolumecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/updatevolumecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-opsworks/interfaces/updatevolumecommandoutput.html)

</details>
