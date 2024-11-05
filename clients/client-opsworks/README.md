<!-- generated file, do not edit directly -->

# @aws-sdk/client-opsworks

## Description

AWS SDK for JavaScript OpsWorks Client for Node.js, Browser and React Native.

<fullname>OpsWorks</fullname>

<p>Welcome to the <i>OpsWorks Stacks API Reference</i>. This guide provides descriptions, syntax,
and
usage examples for OpsWorks Stacks actions and data types, including common parameters and error
codes. </p>
<p>OpsWorks Stacks is an application management service that provides an integrated experience for
managing the complete application lifecycle. For information about OpsWorks, see the
<a href="http://aws.amazon.com/opsworks/">OpsWorks</a> information page.</p>
<p>
<b>SDKs and CLI</b>
</p>
<p>Use the OpsWorks Stacks API by using the Command Line Interface (CLI) or by using one of the
Amazon Web Services SDKs to implement applications in your preferred language. For more information, see:</p>
<ul>
<li>
<p>
<a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html">CLI</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/services/opsworks/AWSOpsWorksClient.html">SDK for Java</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/sdkfornet/v3/apidocs/items/OpsWorks/NOpsWorks.html">SDK for .NET</a>
</p>
</li>
<li>
<p>
<a href="https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-Aws.OpsWorks.OpsWorksClient.html">SDK for PHP</a>
</p>
</li>
<li>
<p>
<a href="http://docs.aws.amazon.com/sdkforruby/api/">SDK for Ruby</a>
</p>
</li>
<li>
<p>
<a href="http://aws.amazon.com/documentation/sdkforjavascript/">Amazon Web Services SDK for Node.js</a>
</p>
</li>
<li>
<p>
<a href="http://docs.pythonboto.org/en/latest/ref/opsworks.html">SDK for Python (Boto)</a>
</p>
</li>
</ul>
<p>
<b>Endpoints</b>
</p>
<p>OpsWorks Stacks supports the following endpoints, all HTTPS. You must connect to one of the following endpoints.
Stacks can only be accessed or managed within the endpoint in which they are created.</p>
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
<p>opsworks.ca-central-1.amazonaws.com (API only; not available in the Amazon Web Services Management Console)</p>
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
<p>You can specify Chef 12, 11.10, or 11.4 for your Linux stack. We recommend migrating your existing Linux stacks
to Chef 12 as soon as possible.</p>
</note>

## Installing

To install this package, simply type add or install @aws-sdk/client-opsworks
using your favorite package manager:

- `npm install @aws-sdk/client-opsworks`
- `yarn add @aws-sdk/client-opsworks`
- `pnpm add @aws-sdk/client-opsworks`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `OpsWorksClient` and
the commands you need, for example `ListTagsCommand`:

```js
// ES5 example
const { OpsWorksClient, ListTagsCommand } = require("@aws-sdk/client-opsworks");
```

```ts
// ES6+ example
import { OpsWorksClient, ListTagsCommand } from "@aws-sdk/client-opsworks";
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
const command = new ListTagsCommand(params);
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
  const data = await client.listTags(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listTags(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listTags(params, (err, data) => {
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

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/AssignInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/AssignInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/AssignInstanceCommandOutput/)

</details>
<details>
<summary>
AssignVolume
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/AssignVolumeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/AssignVolumeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/AssignVolumeCommandOutput/)

</details>
<details>
<summary>
AssociateElasticIp
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/AssociateElasticIpCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/AssociateElasticIpCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/AssociateElasticIpCommandOutput/)

</details>
<details>
<summary>
AttachElasticLoadBalancer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/AttachElasticLoadBalancerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/AttachElasticLoadBalancerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/AttachElasticLoadBalancerCommandOutput/)

</details>
<details>
<summary>
CloneStack
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/CloneStackCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/CloneStackCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/CloneStackCommandOutput/)

</details>
<details>
<summary>
CreateApp
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/CreateAppCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/CreateAppCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/CreateAppCommandOutput/)

</details>
<details>
<summary>
CreateDeployment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/CreateDeploymentCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/CreateDeploymentCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/CreateDeploymentCommandOutput/)

</details>
<details>
<summary>
CreateInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/CreateInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/CreateInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/CreateInstanceCommandOutput/)

</details>
<details>
<summary>
CreateLayer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/CreateLayerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/CreateLayerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/CreateLayerCommandOutput/)

</details>
<details>
<summary>
CreateStack
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/CreateStackCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/CreateStackCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/CreateStackCommandOutput/)

</details>
<details>
<summary>
CreateUserProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/CreateUserProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/CreateUserProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/CreateUserProfileCommandOutput/)

</details>
<details>
<summary>
DeleteApp
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/DeleteAppCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DeleteAppCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DeleteAppCommandOutput/)

</details>
<details>
<summary>
DeleteInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/DeleteInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DeleteInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DeleteInstanceCommandOutput/)

</details>
<details>
<summary>
DeleteLayer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/DeleteLayerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DeleteLayerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DeleteLayerCommandOutput/)

</details>
<details>
<summary>
DeleteStack
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/DeleteStackCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DeleteStackCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DeleteStackCommandOutput/)

</details>
<details>
<summary>
DeleteUserProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/DeleteUserProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DeleteUserProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DeleteUserProfileCommandOutput/)

</details>
<details>
<summary>
DeregisterEcsCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/DeregisterEcsClusterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DeregisterEcsClusterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DeregisterEcsClusterCommandOutput/)

</details>
<details>
<summary>
DeregisterElasticIp
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/DeregisterElasticIpCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DeregisterElasticIpCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DeregisterElasticIpCommandOutput/)

</details>
<details>
<summary>
DeregisterInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/DeregisterInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DeregisterInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DeregisterInstanceCommandOutput/)

</details>
<details>
<summary>
DeregisterRdsDbInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/DeregisterRdsDbInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DeregisterRdsDbInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DeregisterRdsDbInstanceCommandOutput/)

</details>
<details>
<summary>
DeregisterVolume
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/DeregisterVolumeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DeregisterVolumeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DeregisterVolumeCommandOutput/)

</details>
<details>
<summary>
DescribeAgentVersions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/DescribeAgentVersionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DescribeAgentVersionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DescribeAgentVersionsCommandOutput/)

</details>
<details>
<summary>
DescribeApps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/DescribeAppsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DescribeAppsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DescribeAppsCommandOutput/)

</details>
<details>
<summary>
DescribeCommands
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/DescribeCommandsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DescribeCommandsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DescribeCommandsCommandOutput/)

</details>
<details>
<summary>
DescribeDeployments
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/DescribeDeploymentsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DescribeDeploymentsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DescribeDeploymentsCommandOutput/)

</details>
<details>
<summary>
DescribeEcsClusters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/DescribeEcsClustersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DescribeEcsClustersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DescribeEcsClustersCommandOutput/)

</details>
<details>
<summary>
DescribeElasticIps
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/DescribeElasticIpsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DescribeElasticIpsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DescribeElasticIpsCommandOutput/)

</details>
<details>
<summary>
DescribeElasticLoadBalancers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/DescribeElasticLoadBalancersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DescribeElasticLoadBalancersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DescribeElasticLoadBalancersCommandOutput/)

</details>
<details>
<summary>
DescribeInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/DescribeInstancesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DescribeInstancesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DescribeInstancesCommandOutput/)

</details>
<details>
<summary>
DescribeLayers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/DescribeLayersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DescribeLayersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DescribeLayersCommandOutput/)

</details>
<details>
<summary>
DescribeLoadBasedAutoScaling
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/DescribeLoadBasedAutoScalingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DescribeLoadBasedAutoScalingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DescribeLoadBasedAutoScalingCommandOutput/)

</details>
<details>
<summary>
DescribeMyUserProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/DescribeMyUserProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DescribeMyUserProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DescribeMyUserProfileCommandOutput/)

</details>
<details>
<summary>
DescribeOperatingSystems
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/DescribeOperatingSystemsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DescribeOperatingSystemsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DescribeOperatingSystemsCommandOutput/)

</details>
<details>
<summary>
DescribePermissions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/DescribePermissionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DescribePermissionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DescribePermissionsCommandOutput/)

</details>
<details>
<summary>
DescribeRaidArrays
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/DescribeRaidArraysCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DescribeRaidArraysCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DescribeRaidArraysCommandOutput/)

</details>
<details>
<summary>
DescribeRdsDbInstances
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/DescribeRdsDbInstancesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DescribeRdsDbInstancesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DescribeRdsDbInstancesCommandOutput/)

</details>
<details>
<summary>
DescribeServiceErrors
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/DescribeServiceErrorsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DescribeServiceErrorsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DescribeServiceErrorsCommandOutput/)

</details>
<details>
<summary>
DescribeStackProvisioningParameters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/DescribeStackProvisioningParametersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DescribeStackProvisioningParametersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DescribeStackProvisioningParametersCommandOutput/)

</details>
<details>
<summary>
DescribeStacks
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/DescribeStacksCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DescribeStacksCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DescribeStacksCommandOutput/)

</details>
<details>
<summary>
DescribeStackSummary
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/DescribeStackSummaryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DescribeStackSummaryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DescribeStackSummaryCommandOutput/)

</details>
<details>
<summary>
DescribeTimeBasedAutoScaling
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/DescribeTimeBasedAutoScalingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DescribeTimeBasedAutoScalingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DescribeTimeBasedAutoScalingCommandOutput/)

</details>
<details>
<summary>
DescribeUserProfiles
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/DescribeUserProfilesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DescribeUserProfilesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DescribeUserProfilesCommandOutput/)

</details>
<details>
<summary>
DescribeVolumes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/DescribeVolumesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DescribeVolumesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DescribeVolumesCommandOutput/)

</details>
<details>
<summary>
DetachElasticLoadBalancer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/DetachElasticLoadBalancerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DetachElasticLoadBalancerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DetachElasticLoadBalancerCommandOutput/)

</details>
<details>
<summary>
DisassociateElasticIp
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/DisassociateElasticIpCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DisassociateElasticIpCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/DisassociateElasticIpCommandOutput/)

</details>
<details>
<summary>
GetHostnameSuggestion
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/GetHostnameSuggestionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/GetHostnameSuggestionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/GetHostnameSuggestionCommandOutput/)

</details>
<details>
<summary>
GrantAccess
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/GrantAccessCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/GrantAccessCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/GrantAccessCommandOutput/)

</details>
<details>
<summary>
ListTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/ListTagsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/ListTagsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/ListTagsCommandOutput/)

</details>
<details>
<summary>
RebootInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/RebootInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/RebootInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/RebootInstanceCommandOutput/)

</details>
<details>
<summary>
RegisterEcsCluster
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/RegisterEcsClusterCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/RegisterEcsClusterCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/RegisterEcsClusterCommandOutput/)

</details>
<details>
<summary>
RegisterElasticIp
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/RegisterElasticIpCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/RegisterElasticIpCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/RegisterElasticIpCommandOutput/)

</details>
<details>
<summary>
RegisterInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/RegisterInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/RegisterInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/RegisterInstanceCommandOutput/)

</details>
<details>
<summary>
RegisterRdsDbInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/RegisterRdsDbInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/RegisterRdsDbInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/RegisterRdsDbInstanceCommandOutput/)

</details>
<details>
<summary>
RegisterVolume
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/RegisterVolumeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/RegisterVolumeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/RegisterVolumeCommandOutput/)

</details>
<details>
<summary>
SetLoadBasedAutoScaling
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/SetLoadBasedAutoScalingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/SetLoadBasedAutoScalingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/SetLoadBasedAutoScalingCommandOutput/)

</details>
<details>
<summary>
SetPermission
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/SetPermissionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/SetPermissionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/SetPermissionCommandOutput/)

</details>
<details>
<summary>
SetTimeBasedAutoScaling
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/SetTimeBasedAutoScalingCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/SetTimeBasedAutoScalingCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/SetTimeBasedAutoScalingCommandOutput/)

</details>
<details>
<summary>
StartInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/StartInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/StartInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/StartInstanceCommandOutput/)

</details>
<details>
<summary>
StartStack
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/StartStackCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/StartStackCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/StartStackCommandOutput/)

</details>
<details>
<summary>
StopInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/StopInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/StopInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/StopInstanceCommandOutput/)

</details>
<details>
<summary>
StopStack
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/StopStackCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/StopStackCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/StopStackCommandOutput/)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/TagResourceCommandOutput/)

</details>
<details>
<summary>
UnassignInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/UnassignInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/UnassignInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/UnassignInstanceCommandOutput/)

</details>
<details>
<summary>
UnassignVolume
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/UnassignVolumeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/UnassignVolumeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/UnassignVolumeCommandOutput/)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/UntagResourceCommandOutput/)

</details>
<details>
<summary>
UpdateApp
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/UpdateAppCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/UpdateAppCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/UpdateAppCommandOutput/)

</details>
<details>
<summary>
UpdateElasticIp
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/UpdateElasticIpCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/UpdateElasticIpCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/UpdateElasticIpCommandOutput/)

</details>
<details>
<summary>
UpdateInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/UpdateInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/UpdateInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/UpdateInstanceCommandOutput/)

</details>
<details>
<summary>
UpdateLayer
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/UpdateLayerCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/UpdateLayerCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/UpdateLayerCommandOutput/)

</details>
<details>
<summary>
UpdateMyUserProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/UpdateMyUserProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/UpdateMyUserProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/UpdateMyUserProfileCommandOutput/)

</details>
<details>
<summary>
UpdateRdsDbInstance
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/UpdateRdsDbInstanceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/UpdateRdsDbInstanceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/UpdateRdsDbInstanceCommandOutput/)

</details>
<details>
<summary>
UpdateStack
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/UpdateStackCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/UpdateStackCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/UpdateStackCommandOutput/)

</details>
<details>
<summary>
UpdateUserProfile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/UpdateUserProfileCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/UpdateUserProfileCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/UpdateUserProfileCommandOutput/)

</details>
<details>
<summary>
UpdateVolume
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/opsworks/command/UpdateVolumeCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/UpdateVolumeCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-opsworks/Interface/UpdateVolumeCommandOutput/)

</details>
