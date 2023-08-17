<!-- generated file, do not edit directly -->

# @aws-sdk/client-s3-control

## Description

AWS SDK for JavaScript S3Control Client for Node.js, Browser and React Native.

<p> Amazon Web Services S3 Control provides access to Amazon S3 control plane actions. </p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-s3-control
using your favorite package manager:

- `npm install @aws-sdk/client-s3-control`
- `yarn add @aws-sdk/client-s3-control`
- `pnpm add @aws-sdk/client-s3-control`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `S3ControlClient` and
the commands you need, for example `CreateAccessPointCommand`:

```js
// ES5 example
const { S3ControlClient, CreateAccessPointCommand } = require("@aws-sdk/client-s3-control");
```

```ts
// ES6+ example
import { S3ControlClient, CreateAccessPointCommand } from "@aws-sdk/client-s3-control";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new S3ControlClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new CreateAccessPointCommand(params);
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
import * as AWS from "@aws-sdk/client-s3-control";
const client = new AWS.S3Control({ region: "REGION" });

// async/await.
try {
  const data = await client.createAccessPoint(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .createAccessPoint(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.createAccessPoint(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-s3-control` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
CreateAccessPoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/createaccesspointcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/createaccesspointcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/createaccesspointcommandoutput.html)

</details>
<details>
<summary>
CreateAccessPointForObjectLambda
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/createaccesspointforobjectlambdacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/createaccesspointforobjectlambdacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/createaccesspointforobjectlambdacommandoutput.html)

</details>
<details>
<summary>
CreateBucket
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/createbucketcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/createbucketcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/createbucketcommandoutput.html)

</details>
<details>
<summary>
CreateJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/createjobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/createjobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/createjobcommandoutput.html)

</details>
<details>
<summary>
CreateMultiRegionAccessPoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/createmultiregionaccesspointcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/createmultiregionaccesspointcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/createmultiregionaccesspointcommandoutput.html)

</details>
<details>
<summary>
DeleteAccessPoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/deleteaccesspointcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/deleteaccesspointcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/deleteaccesspointcommandoutput.html)

</details>
<details>
<summary>
DeleteAccessPointForObjectLambda
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/deleteaccesspointforobjectlambdacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/deleteaccesspointforobjectlambdacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/deleteaccesspointforobjectlambdacommandoutput.html)

</details>
<details>
<summary>
DeleteAccessPointPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/deleteaccesspointpolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/deleteaccesspointpolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/deleteaccesspointpolicycommandoutput.html)

</details>
<details>
<summary>
DeleteAccessPointPolicyForObjectLambda
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/deleteaccesspointpolicyforobjectlambdacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/deleteaccesspointpolicyforobjectlambdacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/deleteaccesspointpolicyforobjectlambdacommandoutput.html)

</details>
<details>
<summary>
DeleteBucket
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/deletebucketcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/deletebucketcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/deletebucketcommandoutput.html)

</details>
<details>
<summary>
DeleteBucketLifecycleConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/deletebucketlifecycleconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/deletebucketlifecycleconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/deletebucketlifecycleconfigurationcommandoutput.html)

</details>
<details>
<summary>
DeleteBucketPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/deletebucketpolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/deletebucketpolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/deletebucketpolicycommandoutput.html)

</details>
<details>
<summary>
DeleteBucketReplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/deletebucketreplicationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/deletebucketreplicationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/deletebucketreplicationcommandoutput.html)

</details>
<details>
<summary>
DeleteBucketTagging
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/deletebuckettaggingcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/deletebuckettaggingcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/deletebuckettaggingcommandoutput.html)

</details>
<details>
<summary>
DeleteJobTagging
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/deletejobtaggingcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/deletejobtaggingcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/deletejobtaggingcommandoutput.html)

</details>
<details>
<summary>
DeleteMultiRegionAccessPoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/deletemultiregionaccesspointcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/deletemultiregionaccesspointcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/deletemultiregionaccesspointcommandoutput.html)

</details>
<details>
<summary>
DeletePublicAccessBlock
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/deletepublicaccessblockcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/deletepublicaccessblockcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/deletepublicaccessblockcommandoutput.html)

</details>
<details>
<summary>
DeleteStorageLensConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/deletestoragelensconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/deletestoragelensconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/deletestoragelensconfigurationcommandoutput.html)

</details>
<details>
<summary>
DeleteStorageLensConfigurationTagging
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/deletestoragelensconfigurationtaggingcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/deletestoragelensconfigurationtaggingcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/deletestoragelensconfigurationtaggingcommandoutput.html)

</details>
<details>
<summary>
DescribeJob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/describejobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/describejobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/describejobcommandoutput.html)

</details>
<details>
<summary>
DescribeMultiRegionAccessPointOperation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/describemultiregionaccesspointoperationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/describemultiregionaccesspointoperationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/describemultiregionaccesspointoperationcommandoutput.html)

</details>
<details>
<summary>
GetAccessPoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/getaccesspointcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/getaccesspointcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/getaccesspointcommandoutput.html)

</details>
<details>
<summary>
GetAccessPointConfigurationForObjectLambda
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/getaccesspointconfigurationforobjectlambdacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/getaccesspointconfigurationforobjectlambdacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/getaccesspointconfigurationforobjectlambdacommandoutput.html)

</details>
<details>
<summary>
GetAccessPointForObjectLambda
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/getaccesspointforobjectlambdacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/getaccesspointforobjectlambdacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/getaccesspointforobjectlambdacommandoutput.html)

</details>
<details>
<summary>
GetAccessPointPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/getaccesspointpolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/getaccesspointpolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/getaccesspointpolicycommandoutput.html)

</details>
<details>
<summary>
GetAccessPointPolicyForObjectLambda
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/getaccesspointpolicyforobjectlambdacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/getaccesspointpolicyforobjectlambdacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/getaccesspointpolicyforobjectlambdacommandoutput.html)

</details>
<details>
<summary>
GetAccessPointPolicyStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/getaccesspointpolicystatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/getaccesspointpolicystatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/getaccesspointpolicystatuscommandoutput.html)

</details>
<details>
<summary>
GetAccessPointPolicyStatusForObjectLambda
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/getaccesspointpolicystatusforobjectlambdacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/getaccesspointpolicystatusforobjectlambdacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/getaccesspointpolicystatusforobjectlambdacommandoutput.html)

</details>
<details>
<summary>
GetBucket
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/getbucketcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/getbucketcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/getbucketcommandoutput.html)

</details>
<details>
<summary>
GetBucketLifecycleConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/getbucketlifecycleconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/getbucketlifecycleconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/getbucketlifecycleconfigurationcommandoutput.html)

</details>
<details>
<summary>
GetBucketPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/getbucketpolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/getbucketpolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/getbucketpolicycommandoutput.html)

</details>
<details>
<summary>
GetBucketReplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/getbucketreplicationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/getbucketreplicationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/getbucketreplicationcommandoutput.html)

</details>
<details>
<summary>
GetBucketTagging
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/getbuckettaggingcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/getbuckettaggingcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/getbuckettaggingcommandoutput.html)

</details>
<details>
<summary>
GetBucketVersioning
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/getbucketversioningcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/getbucketversioningcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/getbucketversioningcommandoutput.html)

</details>
<details>
<summary>
GetJobTagging
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/getjobtaggingcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/getjobtaggingcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/getjobtaggingcommandoutput.html)

</details>
<details>
<summary>
GetMultiRegionAccessPoint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/getmultiregionaccesspointcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/getmultiregionaccesspointcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/getmultiregionaccesspointcommandoutput.html)

</details>
<details>
<summary>
GetMultiRegionAccessPointPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/getmultiregionaccesspointpolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/getmultiregionaccesspointpolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/getmultiregionaccesspointpolicycommandoutput.html)

</details>
<details>
<summary>
GetMultiRegionAccessPointPolicyStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/getmultiregionaccesspointpolicystatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/getmultiregionaccesspointpolicystatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/getmultiregionaccesspointpolicystatuscommandoutput.html)

</details>
<details>
<summary>
GetMultiRegionAccessPointRoutes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/getmultiregionaccesspointroutescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/getmultiregionaccesspointroutescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/getmultiregionaccesspointroutescommandoutput.html)

</details>
<details>
<summary>
GetPublicAccessBlock
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/getpublicaccessblockcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/getpublicaccessblockcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/getpublicaccessblockcommandoutput.html)

</details>
<details>
<summary>
GetStorageLensConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/getstoragelensconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/getstoragelensconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/getstoragelensconfigurationcommandoutput.html)

</details>
<details>
<summary>
GetStorageLensConfigurationTagging
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/getstoragelensconfigurationtaggingcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/getstoragelensconfigurationtaggingcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/getstoragelensconfigurationtaggingcommandoutput.html)

</details>
<details>
<summary>
ListAccessPoints
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/listaccesspointscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/listaccesspointscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/listaccesspointscommandoutput.html)

</details>
<details>
<summary>
ListAccessPointsForObjectLambda
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/listaccesspointsforobjectlambdacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/listaccesspointsforobjectlambdacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/listaccesspointsforobjectlambdacommandoutput.html)

</details>
<details>
<summary>
ListJobs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/listjobscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/listjobscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/listjobscommandoutput.html)

</details>
<details>
<summary>
ListMultiRegionAccessPoints
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/listmultiregionaccesspointscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/listmultiregionaccesspointscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/listmultiregionaccesspointscommandoutput.html)

</details>
<details>
<summary>
ListRegionalBuckets
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/listregionalbucketscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/listregionalbucketscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/listregionalbucketscommandoutput.html)

</details>
<details>
<summary>
ListStorageLensConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/liststoragelensconfigurationscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/liststoragelensconfigurationscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/liststoragelensconfigurationscommandoutput.html)

</details>
<details>
<summary>
PutAccessPointConfigurationForObjectLambda
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/putaccesspointconfigurationforobjectlambdacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/putaccesspointconfigurationforobjectlambdacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/putaccesspointconfigurationforobjectlambdacommandoutput.html)

</details>
<details>
<summary>
PutAccessPointPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/putaccesspointpolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/putaccesspointpolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/putaccesspointpolicycommandoutput.html)

</details>
<details>
<summary>
PutAccessPointPolicyForObjectLambda
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/putaccesspointpolicyforobjectlambdacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/putaccesspointpolicyforobjectlambdacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/putaccesspointpolicyforobjectlambdacommandoutput.html)

</details>
<details>
<summary>
PutBucketLifecycleConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/putbucketlifecycleconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/putbucketlifecycleconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/putbucketlifecycleconfigurationcommandoutput.html)

</details>
<details>
<summary>
PutBucketPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/putbucketpolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/putbucketpolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/putbucketpolicycommandoutput.html)

</details>
<details>
<summary>
PutBucketReplication
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/putbucketreplicationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/putbucketreplicationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/putbucketreplicationcommandoutput.html)

</details>
<details>
<summary>
PutBucketTagging
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/putbuckettaggingcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/putbuckettaggingcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/putbuckettaggingcommandoutput.html)

</details>
<details>
<summary>
PutBucketVersioning
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/putbucketversioningcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/putbucketversioningcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/putbucketversioningcommandoutput.html)

</details>
<details>
<summary>
PutJobTagging
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/putjobtaggingcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/putjobtaggingcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/putjobtaggingcommandoutput.html)

</details>
<details>
<summary>
PutMultiRegionAccessPointPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/putmultiregionaccesspointpolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/putmultiregionaccesspointpolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/putmultiregionaccesspointpolicycommandoutput.html)

</details>
<details>
<summary>
PutPublicAccessBlock
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/putpublicaccessblockcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/putpublicaccessblockcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/putpublicaccessblockcommandoutput.html)

</details>
<details>
<summary>
PutStorageLensConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/putstoragelensconfigurationcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/putstoragelensconfigurationcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/putstoragelensconfigurationcommandoutput.html)

</details>
<details>
<summary>
PutStorageLensConfigurationTagging
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/putstoragelensconfigurationtaggingcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/putstoragelensconfigurationtaggingcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/putstoragelensconfigurationtaggingcommandoutput.html)

</details>
<details>
<summary>
SubmitMultiRegionAccessPointRoutes
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/submitmultiregionaccesspointroutescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/submitmultiregionaccesspointroutescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/submitmultiregionaccesspointroutescommandoutput.html)

</details>
<details>
<summary>
UpdateJobPriority
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/updatejobprioritycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/updatejobprioritycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/updatejobprioritycommandoutput.html)

</details>
<details>
<summary>
UpdateJobStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/classes/updatejobstatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/updatejobstatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3-control/interfaces/updatejobstatuscommandoutput.html)

</details>
