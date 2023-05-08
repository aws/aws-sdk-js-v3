<!-- generated file, do not edit directly -->

# @aws-sdk/client-ecr-public

## Description

AWS SDK for JavaScript ECRPUBLIC Client for Node.js, Browser and React Native.

<fullname>Amazon Elastic Container Registry Public</fullname>

<p>Amazon Elastic Container Registry Public (Amazon ECR Public) is a managed container image registry service. Amazon ECR provides both
public and private registries to host your container images. You can use the Docker CLI or
your preferred client to push, pull, and manage images. Amazon ECR provides a secure, scalable,
and reliable registry for your Docker or Open Container Initiative (OCI) images. Amazon ECR
supports public repositories with this API. For information about the Amazon ECR API for private
repositories, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/APIReference/Welcome.html">Amazon Elastic Container Registry API Reference</a>.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-ecr-public
using your favorite package manager:

- `npm install @aws-sdk/client-ecr-public`
- `yarn add @aws-sdk/client-ecr-public`
- `pnpm add @aws-sdk/client-ecr-public`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `ECRPUBLICClient` and
the commands you need, for example `BatchCheckLayerAvailabilityCommand`:

```js
// ES5 example
const { ECRPUBLICClient, BatchCheckLayerAvailabilityCommand } = require("@aws-sdk/client-ecr-public");
```

```ts
// ES6+ example
import { ECRPUBLICClient, BatchCheckLayerAvailabilityCommand } from "@aws-sdk/client-ecr-public";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new ECRPUBLICClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new BatchCheckLayerAvailabilityCommand(params);
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
import * as AWS from "@aws-sdk/client-ecr-public";
const client = new AWS.ECRPUBLIC({ region: "REGION" });

// async/await.
try {
  const data = await client.batchCheckLayerAvailability(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .batchCheckLayerAvailability(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.batchCheckLayerAvailability(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-ecr-public` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
BatchCheckLayerAvailability
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/classes/batchchecklayeravailabilitycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/interfaces/batchchecklayeravailabilitycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/interfaces/batchchecklayeravailabilitycommandoutput.html)

</details>
<details>
<summary>
BatchDeleteImage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/classes/batchdeleteimagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/interfaces/batchdeleteimagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/interfaces/batchdeleteimagecommandoutput.html)

</details>
<details>
<summary>
CompleteLayerUpload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/classes/completelayeruploadcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/interfaces/completelayeruploadcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/interfaces/completelayeruploadcommandoutput.html)

</details>
<details>
<summary>
CreateRepository
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/classes/createrepositorycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/interfaces/createrepositorycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/interfaces/createrepositorycommandoutput.html)

</details>
<details>
<summary>
DeleteRepository
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/classes/deleterepositorycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/interfaces/deleterepositorycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/interfaces/deleterepositorycommandoutput.html)

</details>
<details>
<summary>
DeleteRepositoryPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/classes/deleterepositorypolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/interfaces/deleterepositorypolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/interfaces/deleterepositorypolicycommandoutput.html)

</details>
<details>
<summary>
DescribeImages
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/classes/describeimagescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/interfaces/describeimagescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/interfaces/describeimagescommandoutput.html)

</details>
<details>
<summary>
DescribeImageTags
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/classes/describeimagetagscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/interfaces/describeimagetagscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/interfaces/describeimagetagscommandoutput.html)

</details>
<details>
<summary>
DescribeRegistries
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/classes/describeregistriescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/interfaces/describeregistriescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/interfaces/describeregistriescommandoutput.html)

</details>
<details>
<summary>
DescribeRepositories
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/classes/describerepositoriescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/interfaces/describerepositoriescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/interfaces/describerepositoriescommandoutput.html)

</details>
<details>
<summary>
GetAuthorizationToken
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/classes/getauthorizationtokencommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/interfaces/getauthorizationtokencommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/interfaces/getauthorizationtokencommandoutput.html)

</details>
<details>
<summary>
GetRegistryCatalogData
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/classes/getregistrycatalogdatacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/interfaces/getregistrycatalogdatacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/interfaces/getregistrycatalogdatacommandoutput.html)

</details>
<details>
<summary>
GetRepositoryCatalogData
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/classes/getrepositorycatalogdatacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/interfaces/getrepositorycatalogdatacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/interfaces/getrepositorycatalogdatacommandoutput.html)

</details>
<details>
<summary>
GetRepositoryPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/classes/getrepositorypolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/interfaces/getrepositorypolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/interfaces/getrepositorypolicycommandoutput.html)

</details>
<details>
<summary>
InitiateLayerUpload
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/classes/initiatelayeruploadcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/interfaces/initiatelayeruploadcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/interfaces/initiatelayeruploadcommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
PutImage
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/classes/putimagecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/interfaces/putimagecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/interfaces/putimagecommandoutput.html)

</details>
<details>
<summary>
PutRegistryCatalogData
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/classes/putregistrycatalogdatacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/interfaces/putregistrycatalogdatacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/interfaces/putregistrycatalogdatacommandoutput.html)

</details>
<details>
<summary>
PutRepositoryCatalogData
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/classes/putrepositorycatalogdatacommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/interfaces/putrepositorycatalogdatacommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/interfaces/putrepositorycatalogdatacommandoutput.html)

</details>
<details>
<summary>
SetRepositoryPolicy
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/classes/setrepositorypolicycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/interfaces/setrepositorypolicycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/interfaces/setrepositorypolicycommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UploadLayerPart
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/classes/uploadlayerpartcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/interfaces/uploadlayerpartcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecr-public/interfaces/uploadlayerpartcommandoutput.html)

</details>
