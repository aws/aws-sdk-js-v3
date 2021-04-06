# Upgrading Notes (2.x to 3.x)

This document captures notable changes from AWS SDK for JavaScript v2 to v3.
The v3 is also known as modular AWS SDK for JavaScript.

Because v3 is a modular rewrite of v2, some basic conceptions are different between v2 and v3. You can learn about
these changes in our [blog posts](https://aws.amazon.com/blogs/developer/category/developer-tools/aws-sdk-for-javascript-in-node-js/).
The following blog posts will get you up to speed:

- [Modular packages in AWS SDK for JavaScript](https://aws.amazon.com/blogs/developer/modular-packages-in-aws-sdk-for-javascript/)
- [Introducing Middleware Stack in Modular AWS SDK for JavaScript](https://aws.amazon.com/blogs/developer/first-class-typescript-support-in-modular-aws-sdk-for-javascript/)

The summary of interface changes from AWS SDK for JavaScript v2 to v3 is given below.
The goal is to help you easily find the v3 equivalents of the v2 APIs you are already familiar with.

## Client Constructors

This list is indexed by [v2 config parameters](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html). For
options shown as `Planned` in v3, they will be supported but no timeline can be shared at the moment. They
might not have the same name either.

- [`computeChecksums`](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html#computeChecksums-property)
  - **v2**: Whether to compute MD5 checksums for payload bodies when the service accepts it (currently supported in S3
    only).
  - **v3**: Not available. Planned.
- [`convertResponseTypes`](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html#convertResponseTypes-property)
  - **v2**: Whether types are converted when parsing response data.
  - **v3**: **Deprecated**. This option is considered not type-safe because it doesn't convert the types like time stamp
    or base64 binaries from the JSON response.
- [`correctClockSkew`](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html#correctClockSkew-property)
  - **v2**: Whether to apply a clock skew correction and retry requests that fail because of an skewed client
    clock.
  - **v3**: **Deprecated**. SDK _always_ applies a clock skew correction.
- [`systemClockOffset`](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html#systemClockOffset-property)
  - **v2**: An offset value in milliseconds to apply to all signing times.
  - **v3**: No change.
- [`credentials`](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html#credentials-property)
  - **v2**: The AWS credentials to sign requests with.
  - **v3**: No change. It can also be an async function that returns credentials.
    See [v3 reference for AwsAuthInputConfig credentials](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/interfaces/_aws_sdk_middleware_signing.awsauthinputconfig-1.html#credentials).
- [`endpointCacheSize`](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html#endpointCacheSize-property)
  - **v2**: The size of the global cache storing endpoints from endpoint discovery operations.
  - **v3**: Not available. Planned. This option configures endpoint discovery behavior, which is not yet available in v3.
- [`endpointDiscoveryEnabled`](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html#endpointDiscoveryEnabled-property)
  - **v2**: Whether to call operations with endpoints given by service dynamically.
  - **v3**: Not available. Planned. This option configures endpoint discovery behavior, which is not yet available in v3.
    Currently `TimeStreamQuery` and `TimeStreamWrite` client cannot fetch endpoints dynamically because they rely on
    this behavior. [#2211](https://github.com/aws/aws-sdk-js-v3/issues/2211) is tracking this issue.
- [`hostPrefixEnabled`](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html#hostPrefixEnabled-property)
  - **v2**: Whether to marshal request parameters to the prefix of hostname.
  - **v3**: **Deprecated**. SDK _always_ injects the hostname prefix when necessary.
- [`httpOptions`](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html#httpOptions-property)

  A set of options to pass to the low-level HTTP request. These options are aggregated differently in v3. You can
  configure them by supplying a new `requestHandler`. Here's the example of setting http options in Node.js runtime. You
  can find more in [v3 reference for NodeHttpHandler](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/classes/_aws_sdk_node_http_handler.nodehttphandler-1.html).

  All v3 requests use HTTPS by default. You only need to provide custom httpsAgent.

  ```javascript
  const { Agent } = require("https");
  const { Agent: HttpAgnet } = require("http");
  const { NodeHttpHandler } = require("@aws-sdk/node-http-handler");
  const dynamodbClient = new DynamoDBClient({
    requestHandler: new NodeHttpHandler({
      httpsAgent: new Agent({
        /*params*/
      }),
      connectionTimeout: /*number in milliseconds*/
      socketTimeout: /*number in milliseconds*/
    }),
  });
  ```

  If you are passing custom endpoint which uses http, then you need to provide httpAgent.

  ```javascript
  const { Agent } = require("http");
  const { NodeHttpHandler } = require("@aws-sdk/node-http-handler");

  const dynamodbClient = new DynamoDBClient({
    requestHandler: new NodeHttpHandler({
      httpAgent: new Agent({
        /*params*/
      }),
    }),
    endpoint: "http://example.com",
  });
  ```

  If the client is running in browsers, a different set of options is available. You can find more in [v3
  reference for FetchHttpHandler](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/classes/_aws_sdk_fetch_http_handler.fetchhttphandler-1.html).

  ```javascript
  const { FetchHttpHandler } = require("@aws-sdk/fetch-http-handler");
  const dynamodbClient = new DynamoDBClient({
    requestHandler: new FetchHttpHandler({
      requestTimeout: /*number in milliseconds*/
    }),
  });
  ```

  Each option of `httpOptions` is specified below:

  - `proxy`
    - **v2**: The URL to proxy requests through
    - **v3**: You can set up a proxy with an agent following [Configuring proxies for Node.js](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/node-configuring-proxies.html)
  - `agent`

    - **v2**: The Agent object to perform HTTP requests with. Used for connection pooling.
    - **v3**: You can configure `httpAgent` or `httpsAgent` as shown in the examples above.

  - `connectionTimeout`
    - **v2**: Sets the socket to timeout after failing to establish a connection with the server after connectTimeout
      milliseconds.
    - **v3**: `connectionTimeout` is available [in `NodeHttpHandler` options](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/classes/_aws_sdk_node_http_handler.nodehttphandler-1.html).
  - `timeout`
    - **v2**: The number of milliseconds a request can take before automatically being terminated.
    - **v3**: Hard request timeout is not available in `NodeHttpHandler`, but available as `requestTimeout` [in
      `FetchHttphandler` in browsers](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/classes/_aws_sdk_fetch_http_handler.fetchhttphandler-1.html)
  - `xhrAsync`
    - **v2**: Whether the SDK will send asynchronous HTTP requests.
    - **v3**: **Deprecated**. Requests are _always_ asynchronous.
  - `xhrWithCredentials`
    - **v2**: Sets the "withCredentials" property of an XMLHttpRequest object.
    - **v3**: Not available. SDK inherits [the default fetch configurations](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

- [`logger`](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html#logger-property)
  - **v2**: An object that responds to .write() (like a stream) or .log() (like the console object) in order to log information about requests.
  - **v3**: No change. More granular logs are available in v3.
- [`maxRedirects`](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html#maxRedirects-property)
  - **v2**: The maximum amount of redirects to follow for a service request.
  - **v3**: **Deprecated**. SDK _does not_ follow redirects to avoid unintentional cross-region requests.
- [`maxRetries`](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html#maxRetries-property)
  - **v2**: The maximum amount of retries to perform for a service request.
  - **v3**: Changed to `maxAttempts`. See more in [v3 reference for RetryInputConfig](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/interfaces/_aws_sdk_middleware_retry.retryinputconfig-2.html#maxattempts).
    Note that the `maxAttempt` should be `maxRetries + 1`.
- [`paramValidation`](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html#paramValidation-property)
  - **v2**: Whether input parameters should be validated against the operation description before sending the request.
  - **v3**: **Deprecated**. SDK _does not_ do validation on client-side at runtime.
- [`region`](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html#region-property)
  - **v2**: The region to send service requests to.
  - **v3**: No change. It can also be an async function that returns a region string.
- [`retryDelayOptions`](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html#retryDelayOptions-property)
  - **v2**: A set of options to configure the retry delay on retryable errors.
  - **v3**: **Deprecated**. SDK supports more flexible retry strategy with `retryStrategy` client constructor option. See
    more [in v3 reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/interfaces/_aws_sdk_types.retrystrategy-1.html)
- [`s3BucketEndpoint`](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html#s3BucketEndpoint-property)
  - **v2**: Whether the provided endpoint addresses an individual bucket (false if it addresses the root API endpoint).
  - **v3**: Renamed to `bucketEndpoint`
- [`s3DisableBodySigning`](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html#s3DisableBodySigning-property)
  - **v2**: Whether to disable S3 body signing when using signature version v4.
  - **v3**: Renamed to `applyChecksum`
- [`s3ForcePathStyle`](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html#s3ForcePathStyle-property)
  - **v2**: Whether to force path style URLs for S3 objects.
  - **v3**: Renamed to `forcePathStyle`
- [`s3UseArnRegion`](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html#s3UseArnRegion-property)
  - **v2**: Whether to override the request region with the region inferred from requested resource's ARN.
  - **v3**: Renamed to `useArnRegion`
- [`s3UsEast1RegionalEndpoint`](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html#s3UsEast1RegionalEndpoint-property)
  - **v2**: When region is set to 'us-east-1', whether to send s3 request to global endpoints or 'us-east-1' regional
    endpoints.
  - **v3**: **Deprecated**. S3 client will always use regional endpoint if region is set to `us-east-1`. You can set the
    region to `aws-global` to send requests to S3 global endpoint.
- [`signatureCache`](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html#signatureCache-property)
  - **v2**: Whether the signature to sign requests with (overriding the API configuration) is cached.
  - **v3**: **Deprecated**. SDK _always_ caches the hashed signing keys.
- [`signatureVersion`](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html#signatureVersion-property)
  - **v2**: The signature version to sign requests with (overriding the API configuration).
  - **v3**: **Deprecated**. Signature V2 supported in v2 SDK has been deprecated by AWS. v3 _only_ supports signature v4.
- [`sslEnabled`](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html#sslEnabled-property)
  - **v2**: Whether SSL is enabled for requests.
  - **v3**: Renamed to `tls`.
- [`stsRegionalEndpoints`](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html#stsRegionalEndpoints-property)
  - **v2**: Whether to send sts request to global endpoints or regional endpoints.
  - **v3**: **Deprecated**. STS client will _always_ use regional endpoints if set to a specific region. You can set the
    region to `aws-global` to send request to STS global endpoint.
- [`useAccelerateEndpoint`](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html#useAccelerateEndpoint-property)
  - **v2**: Whether to use the Accelerate endpoint with the S3 service.
  - **v3**: No change.

## S3 Multipart Upload

In v2, the S3 client contains an [`upload()`](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#upload-property)
operation that supports uploading large objects with [multipart upload feature offered by S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/mpuoverview.html).

In v3, [`@aws-sdk/lib-storage` package](https://github.com/aws/aws-sdk-js-v3/blob/main/lib/lib-storage) is available.
It supports all the features offered in v2 `upload()`, and supports both Node.js and browsers runtime.

## S3 Presigned URL

In v2, the S3 client contains [`getSignedUrl()`](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#getSignedUrl-property)
and [`getSignedUrlPromise()`](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#getSignedUrlPromise-property)
operations to generate an URL that users can use to upload or download objects from S3.

In v3, [`@aws-sdk/s3-request-presigner` package](https://github.com/aws/aws-sdk-js-v3/tree/main/packages/s3-request-presigner)
is available. You don't have to differentiate `getSignedUrl()` and `getSignedUrlPromise()` any more. We also have [a blog](https://aws.amazon.com/blogs/developer/generate-presigned-url-modular-aws-sdk-javascript/)
discussing the details of this package.

## DynamoDB Document Client

In v2, you can use the [`AWS.DynamoDB.DocumentClient` class](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html)
to call DynamoDB API with native JavaScript types like Buffer, Array, and Object. It thus simplifies working with items
in Amazon DynamoDB by abstracting away the notion of attribute values.

In v3, equivalent [`@aws-sdk/lib-dynamodb`](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/modules/_aws_sdk_lib_dynamodb.html)
is available. It's similar to normal service clients from v3 SDK, with the difference that it takes a basic DynamoDB
client in its constructor. Here's an brief example:

```javascript
import { DynamoDBClient } from "@aws-sdk/client-dynamodb"; // ES6 import
// const { DynamoDBClient } = require("@aws-sdk/client-dynamodb"); // CommonJS import
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb"; // ES6 import
// const { DynamoDBDocumentClient, PutCommand } = require("@aws-sdk/lib-dynamodb"); // CommonJS import

// Bare-bones DynamoDB Client
const client = new DynamoDBClient({});

// Bare-bones document client
const ddbDocClient = DynamoDBDocumentClient.from(client); // client is DynamoDB client

await ddbDocClient.send(
  new PutCommand({
    TableName,
    Item: {
      id: "1",
      content: "content from DynamoDBDocumentClient",
    },
  })
);
```

More examples and configurations are available in the [package README](https://github.com/aws/aws-sdk-js-v3/blob/main/lib/lib-dynamodb/README.md).
