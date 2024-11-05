<!-- generated file, do not edit directly -->

# @aws-sdk/client-service-catalog

## Description

AWS SDK for JavaScript ServiceCatalog Client for Node.js, Browser and React Native.

<fullname>Service Catalog</fullname>

<p>
<a href="http://aws.amazon.com/servicecatalog">Service Catalog</a> enables
organizations to create and manage catalogs of IT services that are approved for Amazon Web Services. To
get the most out of this documentation, you should be familiar with the terminology
discussed in <a href="http://docs.aws.amazon.com/servicecatalog/latest/adminguide/what-is_concepts.html">Service Catalog
Concepts</a>.</p>

## Installing

To install this package, simply type add or install @aws-sdk/client-service-catalog
using your favorite package manager:

- `npm install @aws-sdk/client-service-catalog`
- `yarn add @aws-sdk/client-service-catalog`
- `pnpm add @aws-sdk/client-service-catalog`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `ServiceCatalogClient` and
the commands you need, for example `ListPortfoliosCommand`:

```js
// ES5 example
const { ServiceCatalogClient, ListPortfoliosCommand } = require("@aws-sdk/client-service-catalog");
```

```ts
// ES6+ example
import { ServiceCatalogClient, ListPortfoliosCommand } from "@aws-sdk/client-service-catalog";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new ServiceCatalogClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListPortfoliosCommand(params);
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
import * as AWS from "@aws-sdk/client-service-catalog";
const client = new AWS.ServiceCatalog({ region: "REGION" });

// async/await.
try {
  const data = await client.listPortfolios(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listPortfolios(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listPortfolios(params, (err, data) => {
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-service-catalog` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AcceptPortfolioShare
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/AcceptPortfolioShareCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/AcceptPortfolioShareCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/AcceptPortfolioShareCommandOutput/)

</details>
<details>
<summary>
AssociateBudgetWithResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/AssociateBudgetWithResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/AssociateBudgetWithResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/AssociateBudgetWithResourceCommandOutput/)

</details>
<details>
<summary>
AssociatePrincipalWithPortfolio
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/AssociatePrincipalWithPortfolioCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/AssociatePrincipalWithPortfolioCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/AssociatePrincipalWithPortfolioCommandOutput/)

</details>
<details>
<summary>
AssociateProductWithPortfolio
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/AssociateProductWithPortfolioCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/AssociateProductWithPortfolioCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/AssociateProductWithPortfolioCommandOutput/)

</details>
<details>
<summary>
AssociateServiceActionWithProvisioningArtifact
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/AssociateServiceActionWithProvisioningArtifactCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/AssociateServiceActionWithProvisioningArtifactCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/AssociateServiceActionWithProvisioningArtifactCommandOutput/)

</details>
<details>
<summary>
AssociateTagOptionWithResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/AssociateTagOptionWithResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/AssociateTagOptionWithResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/AssociateTagOptionWithResourceCommandOutput/)

</details>
<details>
<summary>
BatchAssociateServiceActionWithProvisioningArtifact
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/BatchAssociateServiceActionWithProvisioningArtifactCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/BatchAssociateServiceActionWithProvisioningArtifactCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/BatchAssociateServiceActionWithProvisioningArtifactCommandOutput/)

</details>
<details>
<summary>
BatchDisassociateServiceActionFromProvisioningArtifact
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/BatchDisassociateServiceActionFromProvisioningArtifactCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/BatchDisassociateServiceActionFromProvisioningArtifactCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/BatchDisassociateServiceActionFromProvisioningArtifactCommandOutput/)

</details>
<details>
<summary>
CopyProduct
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/CopyProductCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/CopyProductCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/CopyProductCommandOutput/)

</details>
<details>
<summary>
CreateConstraint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/CreateConstraintCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/CreateConstraintCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/CreateConstraintCommandOutput/)

</details>
<details>
<summary>
CreatePortfolio
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/CreatePortfolioCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/CreatePortfolioCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/CreatePortfolioCommandOutput/)

</details>
<details>
<summary>
CreatePortfolioShare
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/CreatePortfolioShareCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/CreatePortfolioShareCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/CreatePortfolioShareCommandOutput/)

</details>
<details>
<summary>
CreateProduct
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/CreateProductCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/CreateProductCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/CreateProductCommandOutput/)

</details>
<details>
<summary>
CreateProvisionedProductPlan
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/CreateProvisionedProductPlanCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/CreateProvisionedProductPlanCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/CreateProvisionedProductPlanCommandOutput/)

</details>
<details>
<summary>
CreateProvisioningArtifact
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/CreateProvisioningArtifactCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/CreateProvisioningArtifactCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/CreateProvisioningArtifactCommandOutput/)

</details>
<details>
<summary>
CreateServiceAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/CreateServiceActionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/CreateServiceActionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/CreateServiceActionCommandOutput/)

</details>
<details>
<summary>
CreateTagOption
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/CreateTagOptionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/CreateTagOptionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/CreateTagOptionCommandOutput/)

</details>
<details>
<summary>
DeleteConstraint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/DeleteConstraintCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/DeleteConstraintCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/DeleteConstraintCommandOutput/)

</details>
<details>
<summary>
DeletePortfolio
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/DeletePortfolioCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/DeletePortfolioCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/DeletePortfolioCommandOutput/)

</details>
<details>
<summary>
DeletePortfolioShare
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/DeletePortfolioShareCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/DeletePortfolioShareCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/DeletePortfolioShareCommandOutput/)

</details>
<details>
<summary>
DeleteProduct
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/DeleteProductCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/DeleteProductCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/DeleteProductCommandOutput/)

</details>
<details>
<summary>
DeleteProvisionedProductPlan
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/DeleteProvisionedProductPlanCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/DeleteProvisionedProductPlanCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/DeleteProvisionedProductPlanCommandOutput/)

</details>
<details>
<summary>
DeleteProvisioningArtifact
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/DeleteProvisioningArtifactCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/DeleteProvisioningArtifactCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/DeleteProvisioningArtifactCommandOutput/)

</details>
<details>
<summary>
DeleteServiceAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/DeleteServiceActionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/DeleteServiceActionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/DeleteServiceActionCommandOutput/)

</details>
<details>
<summary>
DeleteTagOption
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/DeleteTagOptionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/DeleteTagOptionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/DeleteTagOptionCommandOutput/)

</details>
<details>
<summary>
DescribeConstraint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/DescribeConstraintCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/DescribeConstraintCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/DescribeConstraintCommandOutput/)

</details>
<details>
<summary>
DescribeCopyProductStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/DescribeCopyProductStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/DescribeCopyProductStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/DescribeCopyProductStatusCommandOutput/)

</details>
<details>
<summary>
DescribePortfolio
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/DescribePortfolioCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/DescribePortfolioCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/DescribePortfolioCommandOutput/)

</details>
<details>
<summary>
DescribePortfolioShares
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/DescribePortfolioSharesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/DescribePortfolioSharesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/DescribePortfolioSharesCommandOutput/)

</details>
<details>
<summary>
DescribePortfolioShareStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/DescribePortfolioShareStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/DescribePortfolioShareStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/DescribePortfolioShareStatusCommandOutput/)

</details>
<details>
<summary>
DescribeProduct
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/DescribeProductCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/DescribeProductCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/DescribeProductCommandOutput/)

</details>
<details>
<summary>
DescribeProductAsAdmin
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/DescribeProductAsAdminCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/DescribeProductAsAdminCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/DescribeProductAsAdminCommandOutput/)

</details>
<details>
<summary>
DescribeProductView
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/DescribeProductViewCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/DescribeProductViewCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/DescribeProductViewCommandOutput/)

</details>
<details>
<summary>
DescribeProvisionedProduct
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/DescribeProvisionedProductCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/DescribeProvisionedProductCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/DescribeProvisionedProductCommandOutput/)

</details>
<details>
<summary>
DescribeProvisionedProductPlan
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/DescribeProvisionedProductPlanCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/DescribeProvisionedProductPlanCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/DescribeProvisionedProductPlanCommandOutput/)

</details>
<details>
<summary>
DescribeProvisioningArtifact
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/DescribeProvisioningArtifactCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/DescribeProvisioningArtifactCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/DescribeProvisioningArtifactCommandOutput/)

</details>
<details>
<summary>
DescribeProvisioningParameters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/DescribeProvisioningParametersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/DescribeProvisioningParametersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/DescribeProvisioningParametersCommandOutput/)

</details>
<details>
<summary>
DescribeRecord
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/DescribeRecordCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/DescribeRecordCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/DescribeRecordCommandOutput/)

</details>
<details>
<summary>
DescribeServiceAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/DescribeServiceActionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/DescribeServiceActionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/DescribeServiceActionCommandOutput/)

</details>
<details>
<summary>
DescribeServiceActionExecutionParameters
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/DescribeServiceActionExecutionParametersCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/DescribeServiceActionExecutionParametersCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/DescribeServiceActionExecutionParametersCommandOutput/)

</details>
<details>
<summary>
DescribeTagOption
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/DescribeTagOptionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/DescribeTagOptionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/DescribeTagOptionCommandOutput/)

</details>
<details>
<summary>
DisableAWSOrganizationsAccess
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/DisableAWSOrganizationsAccessCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/DisableAWSOrganizationsAccessCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/DisableAWSOrganizationsAccessCommandOutput/)

</details>
<details>
<summary>
DisassociateBudgetFromResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/DisassociateBudgetFromResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/DisassociateBudgetFromResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/DisassociateBudgetFromResourceCommandOutput/)

</details>
<details>
<summary>
DisassociatePrincipalFromPortfolio
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/DisassociatePrincipalFromPortfolioCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/DisassociatePrincipalFromPortfolioCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/DisassociatePrincipalFromPortfolioCommandOutput/)

</details>
<details>
<summary>
DisassociateProductFromPortfolio
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/DisassociateProductFromPortfolioCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/DisassociateProductFromPortfolioCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/DisassociateProductFromPortfolioCommandOutput/)

</details>
<details>
<summary>
DisassociateServiceActionFromProvisioningArtifact
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/DisassociateServiceActionFromProvisioningArtifactCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/DisassociateServiceActionFromProvisioningArtifactCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/DisassociateServiceActionFromProvisioningArtifactCommandOutput/)

</details>
<details>
<summary>
DisassociateTagOptionFromResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/DisassociateTagOptionFromResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/DisassociateTagOptionFromResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/DisassociateTagOptionFromResourceCommandOutput/)

</details>
<details>
<summary>
EnableAWSOrganizationsAccess
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/EnableAWSOrganizationsAccessCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/EnableAWSOrganizationsAccessCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/EnableAWSOrganizationsAccessCommandOutput/)

</details>
<details>
<summary>
ExecuteProvisionedProductPlan
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/ExecuteProvisionedProductPlanCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/ExecuteProvisionedProductPlanCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/ExecuteProvisionedProductPlanCommandOutput/)

</details>
<details>
<summary>
ExecuteProvisionedProductServiceAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/ExecuteProvisionedProductServiceActionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/ExecuteProvisionedProductServiceActionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/ExecuteProvisionedProductServiceActionCommandOutput/)

</details>
<details>
<summary>
GetAWSOrganizationsAccessStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/GetAWSOrganizationsAccessStatusCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/GetAWSOrganizationsAccessStatusCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/GetAWSOrganizationsAccessStatusCommandOutput/)

</details>
<details>
<summary>
GetProvisionedProductOutputs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/GetProvisionedProductOutputsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/GetProvisionedProductOutputsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/GetProvisionedProductOutputsCommandOutput/)

</details>
<details>
<summary>
ImportAsProvisionedProduct
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/ImportAsProvisionedProductCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/ImportAsProvisionedProductCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/ImportAsProvisionedProductCommandOutput/)

</details>
<details>
<summary>
ListAcceptedPortfolioShares
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/ListAcceptedPortfolioSharesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/ListAcceptedPortfolioSharesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/ListAcceptedPortfolioSharesCommandOutput/)

</details>
<details>
<summary>
ListBudgetsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/ListBudgetsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/ListBudgetsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/ListBudgetsForResourceCommandOutput/)

</details>
<details>
<summary>
ListConstraintsForPortfolio
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/ListConstraintsForPortfolioCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/ListConstraintsForPortfolioCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/ListConstraintsForPortfolioCommandOutput/)

</details>
<details>
<summary>
ListLaunchPaths
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/ListLaunchPathsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/ListLaunchPathsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/ListLaunchPathsCommandOutput/)

</details>
<details>
<summary>
ListOrganizationPortfolioAccess
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/ListOrganizationPortfolioAccessCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/ListOrganizationPortfolioAccessCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/ListOrganizationPortfolioAccessCommandOutput/)

</details>
<details>
<summary>
ListPortfolioAccess
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/ListPortfolioAccessCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/ListPortfolioAccessCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/ListPortfolioAccessCommandOutput/)

</details>
<details>
<summary>
ListPortfolios
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/ListPortfoliosCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/ListPortfoliosCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/ListPortfoliosCommandOutput/)

</details>
<details>
<summary>
ListPortfoliosForProduct
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/ListPortfoliosForProductCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/ListPortfoliosForProductCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/ListPortfoliosForProductCommandOutput/)

</details>
<details>
<summary>
ListPrincipalsForPortfolio
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/ListPrincipalsForPortfolioCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/ListPrincipalsForPortfolioCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/ListPrincipalsForPortfolioCommandOutput/)

</details>
<details>
<summary>
ListProvisionedProductPlans
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/ListProvisionedProductPlansCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/ListProvisionedProductPlansCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/ListProvisionedProductPlansCommandOutput/)

</details>
<details>
<summary>
ListProvisioningArtifacts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/ListProvisioningArtifactsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/ListProvisioningArtifactsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/ListProvisioningArtifactsCommandOutput/)

</details>
<details>
<summary>
ListProvisioningArtifactsForServiceAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/ListProvisioningArtifactsForServiceActionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/ListProvisioningArtifactsForServiceActionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/ListProvisioningArtifactsForServiceActionCommandOutput/)

</details>
<details>
<summary>
ListRecordHistory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/ListRecordHistoryCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/ListRecordHistoryCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/ListRecordHistoryCommandOutput/)

</details>
<details>
<summary>
ListResourcesForTagOption
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/ListResourcesForTagOptionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/ListResourcesForTagOptionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/ListResourcesForTagOptionCommandOutput/)

</details>
<details>
<summary>
ListServiceActions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/ListServiceActionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/ListServiceActionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/ListServiceActionsCommandOutput/)

</details>
<details>
<summary>
ListServiceActionsForProvisioningArtifact
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/ListServiceActionsForProvisioningArtifactCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/ListServiceActionsForProvisioningArtifactCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/ListServiceActionsForProvisioningArtifactCommandOutput/)

</details>
<details>
<summary>
ListStackInstancesForProvisionedProduct
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/ListStackInstancesForProvisionedProductCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/ListStackInstancesForProvisionedProductCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/ListStackInstancesForProvisionedProductCommandOutput/)

</details>
<details>
<summary>
ListTagOptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/ListTagOptionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/ListTagOptionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/ListTagOptionsCommandOutput/)

</details>
<details>
<summary>
NotifyProvisionProductEngineWorkflowResult
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/NotifyProvisionProductEngineWorkflowResultCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/NotifyProvisionProductEngineWorkflowResultCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/NotifyProvisionProductEngineWorkflowResultCommandOutput/)

</details>
<details>
<summary>
NotifyTerminateProvisionedProductEngineWorkflowResult
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/NotifyTerminateProvisionedProductEngineWorkflowResultCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/NotifyTerminateProvisionedProductEngineWorkflowResultCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/NotifyTerminateProvisionedProductEngineWorkflowResultCommandOutput/)

</details>
<details>
<summary>
NotifyUpdateProvisionedProductEngineWorkflowResult
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/NotifyUpdateProvisionedProductEngineWorkflowResultCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/NotifyUpdateProvisionedProductEngineWorkflowResultCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/NotifyUpdateProvisionedProductEngineWorkflowResultCommandOutput/)

</details>
<details>
<summary>
ProvisionProduct
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/ProvisionProductCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/ProvisionProductCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/ProvisionProductCommandOutput/)

</details>
<details>
<summary>
RejectPortfolioShare
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/RejectPortfolioShareCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/RejectPortfolioShareCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/RejectPortfolioShareCommandOutput/)

</details>
<details>
<summary>
ScanProvisionedProducts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/ScanProvisionedProductsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/ScanProvisionedProductsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/ScanProvisionedProductsCommandOutput/)

</details>
<details>
<summary>
SearchProducts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/SearchProductsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/SearchProductsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/SearchProductsCommandOutput/)

</details>
<details>
<summary>
SearchProductsAsAdmin
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/SearchProductsAsAdminCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/SearchProductsAsAdminCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/SearchProductsAsAdminCommandOutput/)

</details>
<details>
<summary>
SearchProvisionedProducts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/SearchProvisionedProductsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/SearchProvisionedProductsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/SearchProvisionedProductsCommandOutput/)

</details>
<details>
<summary>
TerminateProvisionedProduct
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/TerminateProvisionedProductCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/TerminateProvisionedProductCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/TerminateProvisionedProductCommandOutput/)

</details>
<details>
<summary>
UpdateConstraint
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/UpdateConstraintCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/UpdateConstraintCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/UpdateConstraintCommandOutput/)

</details>
<details>
<summary>
UpdatePortfolio
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/UpdatePortfolioCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/UpdatePortfolioCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/UpdatePortfolioCommandOutput/)

</details>
<details>
<summary>
UpdatePortfolioShare
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/UpdatePortfolioShareCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/UpdatePortfolioShareCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/UpdatePortfolioShareCommandOutput/)

</details>
<details>
<summary>
UpdateProduct
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/UpdateProductCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/UpdateProductCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/UpdateProductCommandOutput/)

</details>
<details>
<summary>
UpdateProvisionedProduct
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/UpdateProvisionedProductCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/UpdateProvisionedProductCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/UpdateProvisionedProductCommandOutput/)

</details>
<details>
<summary>
UpdateProvisionedProductProperties
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/UpdateProvisionedProductPropertiesCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/UpdateProvisionedProductPropertiesCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/UpdateProvisionedProductPropertiesCommandOutput/)

</details>
<details>
<summary>
UpdateProvisioningArtifact
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/UpdateProvisioningArtifactCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/UpdateProvisioningArtifactCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/UpdateProvisioningArtifactCommandOutput/)

</details>
<details>
<summary>
UpdateServiceAction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/UpdateServiceActionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/UpdateServiceActionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/UpdateServiceActionCommandOutput/)

</details>
<details>
<summary>
UpdateTagOption
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/service-catalog/command/UpdateTagOptionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/UpdateTagOptionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-service-catalog/Interface/UpdateTagOptionCommandOutput/)

</details>
