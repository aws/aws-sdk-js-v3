# Upgrading Notes (2.x to 3.x)

This document captures notable changes from AWS SDK for JavaScript v2 to v3.
The v3 is also known as modular AWS SDK for JavaScript.

Because, v3 is a modular rewrite of v2, some basic conceptions are different between v2 and v3. You can learn about
these changes in our [blog posts](https://aws.amazon.com/blogs/developer/category/developer-tools/aws-sdk-for-javascript-in-node-js/).
The following blog posts will get you up to speed:

- [Modular packages in AWS SDK for JavaScript](https://aws.amazon.com/blogs/developer/modular-packages-in-aws-sdk-for-javascript/)
- [Introducing Middleware Stack in Modular AWS SDK for JavaScript](https://aws.amazon.com/blogs/developer/first-class-typescript-support-in-modular-aws-sdk-for-javascript/)

The summary of interface changes from AWS SDK for JavaScript v2 to v3 is given below.
The goal is to help you easily find the v3 equivalents of the v2 APIs you are already familiar with.

## Client Constructors

This list is indexed by [v2 config parameters](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html).

- [`computeChecksums`](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html#computeChecksums-property)
  - **v2**: Whether to compute MD5 checksums for payload bodies when the service accepts it (currently supported in S3
    only).
  - **v3**: applicable commands of S3 (PutObject, PutBucketCors, etc.) will automatically compute the MD5 checksums for
    of the request payload. You can also specify a different checksum algorithm in the commands' `ChecksumAlgorithm`
    parameter to use a different checksum algorithm. You can find more infomation in the [S3 feature announcement](https://aws.amazon.com/blogs/aws/new-additional-checksum-algorithms-for-amazon-s3/)
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
  - **v3**: No change. It can also be an async function that returns credentials. If the function returns an `expiration (Date)`, the function will
    be called again when the expiration datetime nears.
    See [v3 reference for AwsAuthInputConfig credentials](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/interfaces/_aws_sdk_middleware_signing.awsauthinputconfig-1.html#credentials).
- [`endpointCacheSize`](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html#endpointCacheSize-property)
  - **v2**: The size of the global cache storing endpoints from endpoint discovery operations.
  - **v3**: No change.
- [`endpointDiscoveryEnabled`](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html#endpointDiscoveryEnabled-property)
  - **v2**: Whether to call operations with endpoints given by service dynamically.
  - **v3**: No change.
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
  const { Agent: HttpAgent } = require("http");
  const { NodeHttpHandler } = require("@smithy/node-http-handler");
  const dynamodbClient = new DynamoDBClient({
    requestHandler: new NodeHttpHandler({
      httpsAgent: new Agent({
        /*params*/
      }),
      connectionTimeout: /*number in milliseconds*/,
      socketTimeout: /*number in milliseconds*/
    }),
  });
  ```

  If you are passing custom endpoint which uses http, then you need to provide httpAgent.

  ```javascript
  const { Agent } = require("http");
  const { NodeHttpHandler } = require("@smithy/node-http-handler");

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
  const { FetchHttpHandler } = require("@smithy/fetch-http-handler");
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

  - `connectTimeout`
    - **v2**: Sets the socket to timeout after failing to establish a connection with the server after connectTimeout
      milliseconds.
    - **v3**: `connectionTimeout` is available [in `NodeHttpHandler` options](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/classes/_aws_sdk_node_http_handler.nodehttphandler-1.html).
  - `timeout`
    - **v2**: The number of milliseconds a request can take before automatically being terminated.
    - **v3**: `socketTimeout` is available [in `NodeHttpHandler` options](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/classes/_aws_sdk_node_http_handler.nodehttphandler-1.html).
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
    more [in v3 reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-smithy-util-retry/)
- [`s3BucketEndpoint`](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html#s3BucketEndpoint-property)
  - **v2**: Whether the provided endpoint addresses an individual bucket (false if it addresses the root API endpoint).
  - **v3**: Changed to `bucketEndpoint`. See more in [v3 reference for bucketEndpoint](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3/interfaces/s3clientconfig.html#bucketendpoint).
    Note that when set to `true`, you specify the request endpoint in the `Bucket` request parameter, the original endpoint
    will be overwritten. Whereas in v2, the request endpoint in client constructor overwrites the `Bucket` request parameter.
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

## Credential Providers

In v2, the SDK provides a list of credential providers to choose from, as well as a credentials provider chain,
available by default on Node.js, that tries to load the AWS credentials from all the most common providers. V3 simplifies
the credential provider's interface, making it easier to use and write custom credential providers. On top of a new
credentials provider chain, V3 all provides a list of credential providers aiming to provide equivalent to v2.

Here is all the credential providers in v2 and their equivalents in v3.

### Default Credential Provider

Default credential provider is how SDK resolve the AWS credential if you DO NOT provide one explicitly.

- **v2**: [CredentialProviderChain](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CredentialProviderChain.html)
  in Node.js resolves credential from sources as following order:

  - [environmental variable](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/loading-node-credentials-environment.html)
  - [shared credentials file](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/loading-node-credentials-shared.html)
  - [ECS container credentials](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/RemoteCredentials.html)
  - [spawning external process](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sourcing-external.html)
  - [OIDC token from specified file](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/TokenFileWebIdentityCredentials.html)
  - [EC2 instance metadata](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html)

  If one of the credential providers above fails to resolve the AWS credential, the chain falls back to next provider
  until a valid credential is resolved, or throw error when all of them fail.

  In Browsers and ReactNative, the chain is empty, meaning you always need supply credentials explicitly.

- **v3**: [defaultProvider](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/modules/_aws_sdk_credential_providers#fromnodejsproviderchain-1)
  The credential sources and fallback order _does not_ change in v3. It also supports [AWS Single Sign-On credentials](https://aws.amazon.com/single-sign-on/).

### Temporary Credentials

- **v2**: [`ChainableTemporaryCredentials`](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ChainableTemporaryCredentials.html)
  Represents temporary credentials retrieved from `AWS.STS`. Without any extra parameters, credentials will be
  fetched from the `AWS.STS.getSessionToken()` operation. If an IAM role is provided, the `AWS.STS.assumeRole()` operation
  will be used to fetch credentials for the role instead.
  `AWS.ChainableTemporaryCredentials` differs from `AWS.TemporaryCredentials` in the way masterCredentials and refreshes
  are handled. `AWS.ChainableTemporaryCredentials` refreshes expired credentials using the masterCredentials passed by
  the user to support chaining of STS credentials. However, `AWS.TemporaryCredentials` recursively collapses the
  masterCredentials during instantiation, precluding the ability to refresh credentials which require intermediate, temporary credentials.

  The original [`TemporaryCredentials`](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/TemporaryCredentials.html)
  has been **deprecated** in favor of `ChainableTemporaryCredentials` in v2.

- **v3**: [`Temporary Credentials Provider`](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/modules/_aws_sdk_credential_providers.html).
  You can call `fromTemporaryCredentials()` from `@aws-sdk/credential-providers` package. Here's an example:

  ```javascript
  import { FooClient } from "@aws-sdk/client-foo";
  import { fromTemporaryCredentials } from "@aws-sdk/credential-providers"; // ES6 import
  // const { FooClient } = require("@aws-sdk/client-foo");
  // const { fromTemporaryCredentials } = require("@aws-sdk/credential-providers"); // CommonJS import

  const sourceCredentials = {
    // A credential can be a credential object or an async function that returns a credential object
  };
  const client = new FooClient({
    credentials: fromTemporaryCredentials({
      masterCredentials: sourceCredentials,
      params: { RoleArn },
    }),
  });
  ```

### Cognito Identity Credentials

Load credentials from Cognito Identity service, normally used in browsers.

- **v2**: [`CognitoIdentityCredentials`](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CognitoIdentityCredentials.html)
  Represents credentials retrieved from STS Web Identity Federation using the Amazon Cognito Identity service.
- **v3**: [`Cognito Identity Credential Provider`](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/modules/_aws_sdk_credential_providers.html)
  The [`@aws/credential-providers` package](https://www.npmjs.com/package/@aws-sdk/credential-providers)
  provides two credential provider functions, one of which [`fromCognitoIdentity`](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/modules/_aws_sdk_credential_providers.html)
  takes an identity ID and calls `cognitoIdentity:GetCredentialsForIdentity`, while the other
  [`fromCognitoIdentityPool`](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/modules/_aws_sdk_credential_providers.html)
  takes an identity pool ID, calls `cognitoIdentity:GetId` on the first invocation, and then calls`fromCognitoIdentity`.
  Subsequent invocations of the latter do not re-invoke GetId

  The provider implements the "Simplified Flow" described in the [Cognito developer guide](https://docs.aws.amazon.com/cognito/latest/developerguide/authentication-flow.html).
  The "Classic Flow" which involves calling `cognito:GetOpenIdToken` and then calling `sts:AssumeRoleWithWebIdentity` is
  NOT supported. Please open a [feature request](https://github.com/aws/aws-sdk-js-v3/issues/new?assignees=&labels=feature-request&template=---feature-request.md&title=)
  to us if you need it.

  ```javascript
  // fromCognitoIdentityPool example
  import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers"; // ES6 import
  // const { fromCognitoIdentityPool } = require("@aws-sdk/credential-providers"); // CommonJS import

  const client = new FooClient({
    region: "us-east-1",
    credentials: fromCognitoIdentityPool({
      clientConfig: cognitoIdentityClientConfig, // Optional
      identityPoolId: "us-east-1:1699ebc0-7900-4099-b910-2df94f52a030",
      customRoleArn: "arn:aws:iam::1234567890:role/MYAPP-CognitoIdentity", // Optional
      logins: {
        // Optional
        "graph.facebook.com": "FBTOKEN",
        "www.amazon.com": "AMAZONTOKEN",
        "api.twitter.com": "TWITTERTOKEN",
      },
    }),
  });
  ```

  ```javascript
  // fromCognitoIdentity example
  import { fromCognitoIdentity } from "@aws-sdk/credential-providers"; // ES6 import
  // const { fromCognitoIdentity } = require("@aws-sdk/credential-provider-cognito-identity");

  const client = new FooClient({
    region: "us-east-1",
    credentials: fromCognitoIdentity({
      clientConfig: cognitoIdentityClientConfig, // Optional
      identityId: "us-east-1:128d0a74-c82f-4553-916d-90053e4a8b0f",
      customRoleArn: "arn:aws:iam::1234567890:role/MYAPP-CognitoIdentity", // Optional
      logins: {
        // Optional
        "graph.facebook.com": "FBTOKEN",
        "www.amazon.com": "AMAZONTOKEN",
        "api.twitter.com": "TWITTERTOKEN",
      },
    }),
  });
  ```

### EC2 Metadata(IMDS) Credential

Represents credentials received from the metadata service on an EC2 instance.

- **v2**: [`EC2MetadataCredentials`](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CognitoIdentityCredentials.html)
- **v3**: [`fromInstanceMetadata`](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/modules/_aws_sdk_credential_providers.html):
  Creates a credential provider that will source credentials from the EC2 Instance Metadata Service.

  ```javascript
  import { fromInstanceMetadata } from "@aws-sdk/credential-providers"; // ES6 import
  // const { fromInstanceMetadata } = require("@aws-sdk/credential-providers"); // CommonJS import

  const client = new FooClient({
    credentials: fromInstanceMetadata({
      maxRetries: 3, // Optional
      timeout: 0, // Optional
    }),
  });
  ```

### ECS Credentials

Represents credentials received from specified URL. This provider will request temporary credentials from
URI specified by the `AWS_CONTAINER_CREDENTIALS_RELATIVE_URI` or the `AWS_CONTAINER_CREDENTIALS_FULL_URI` environment
variable.

- **v2**: `ECSCredentials` or [`RemoteCredentials`](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/RemoteCredentials.html).
- **v3**: [`fromContainerMetadata`](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/modules/_aws_sdk_credential_providers.html)
  creates a credential provider that will source credentials from the ECS Container Metadata Service.

  ```javascript
  import { fromContainerMetadata } from "@aws-sdk/credential-providers"; // ES6 import

  const client = new FooClient({
    credentials: fromContainerMetadata({
      maxRetries: 3, // Optional
      timeout: 0, // Optional
    }),
  });
  ```

### File System Credentials

- **v2**: [`FileSystemCredentials`](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/FileSystemCredentials.html)  
  represents credentials from a JSON file on disk.
- **v3**: **Deprecated**. You can explicitly read the JSON file and supply to the client. Please open a
  [feature request](https://github.com/aws/aws-sdk-js-v3/issues/new?assignees=&labels=feature-request&template=---feature-request.md&title=)
  to us if you need it.

### SAML Credential Provider

- **v2**: [`SAMLCredentials`](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SAMLCredentials.html) represents
  credentials retrieved from STS SAML support.
- **v3**: **Not available**. Please open a [feature request](https://github.com/aws/aws-sdk-js-v3/issues/new?assignees=&labels=feature-request&template=---feature-request.md&title=)
  to us if you need it.

### Shared Credential File Credentials

Loads credentials from shared credentials file (defaulting to `~/.aws/credentials` or defined by the
`AWS_SHARED_CREDENTIALS_FILE` environment variable). This file is supported across different AWS SDKs and tools. You can
refer to the [shared config and credentials files document](https://docs.aws.amazon.com/sdkref/latest/guide/creds-config-files.html)
for more information.

- **v2**: [`SharedIniFileCredentials`](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SharedIniFileCredentials.html)
- **v3**: [`fromIni`](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/modules/_aws_sdk_credential_providers.html).

  ```javascript
  import { fromIni } from "@aws-sdk/credential-providers";
  // const { fromIni } from("@aws-sdk/credential-providers");

  const client = new FooClient({
    credentials: fromIni({
      configFilepath: "~/.aws/config", // Optional
      filepath: "~/.aws/credentials", // Optional
      mfaCodeProvider: async (mfaSerial) => {
        // implement a pop-up asking for MFA code
        return "some_code";
      }, // Optional
      profile: "default", // Optional
      clientConfig: { region }, // Optional
    }),
  });
  ```

### Web Identity Credentials

Retrieves credentials using OIDC token from a file on disk. It's commonly used in EKS.

- **v2**: [`TokenFileWebIdentityCredentials`](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/TokenFileWebIdentityCredentials.html).
- **v3**: [`fromTokenFile`](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-credential-providers/#fromtokenfile)

  ```javascript
  import { fromTokenFile } from "@aws-sdk/credential-providers"; // ES6 import
  // const { fromTokenFile } from("@aws-sdk/credential-providers"); // CommonJS import

  const client = new FooClient({
    credentials: fromTokenFile({
      // Optional. If skipped, read from `AWS_ROLE_ARN` environmental variable
      roleArn: "arn:xxxx",
      // Optional. If skipped, read from `AWS_ROLE_SESSION_NAME` environmental variable
      roleSessionName: "session:a",
      // Optional. STS client config to make the assume role request.
      clientConfig: { region },
    }),
  });
  ```

### Web Identity Federation Credentials

Retrieves credentials from STS web identity federation support.

- **v2**: [`WebIdentityCredentials`](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/WebIdentityCredentials.html)
- **v3**: [`fromWebToken`](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/modules/_aws_sdk_credential_provider_web_identity.html#fromwebtoken-1)

  ```javascript
  import { fromWebToken } from "@aws-sdk/credential-providers"; // ES6 import
  // const { fromWebToken } from("@aws-sdk/credential-providers"); // CommonJS import

  const client = new FooClient({
    credentials: fromWebToken({
      // Optional. If skipped, read from `AWS_ROLE_ARN` environmental variable
      roleArn: "arn:xxxx",
      // Optional. If skipped, read from `AWS_ROLE_SESSION_NAME` environmental variable
      roleSessionName: "session:a",
      // Optional. STS client config to make the assume role request.
      clientConfig: { region },
    }),
  });
  ```

## S3 Multipart Upload

In v2, the S3 client has the `ManagedUpload` class that contains an [`upload()`](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#upload-property)
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

## S3 Global Client (Region Redirects)

S3 client in v3 supports S3 global client, or following region redirects, if an incorrect region is passed and a subsequent `PermanentRedirect` (status 301) error is thrown. You can use the [`followRegionRedirects`](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-middleware-sdk-s3/Interface/S3InputConfig/) flag in the client config to make the S3 client follow region redirects and support its function as a global client. Note that this can result in additional latency as failed requests are retried with a corrected region when receiving a `PermanentRedirect` error with status 301. This feature should only be used as a last resort if you do not know the region of your bucket(s) ahead of time.

## DynamoDB Document Client

### Basic Usage of DynamoDB Document Client in v3

- In v2, you can use the [`AWS.DynamoDB.DocumentClient` class](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html)
  to call DynamoDB API with native JavaScript types like Array, Number, and Object. It thus simplifies working with items
  in Amazon DynamoDB by abstracting away the notion of attribute values.

- In v3, the equivalent [`@aws-sdk/lib-dynamodb`](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/modules/_aws_sdk_lib_dynamodb.html)
  is available. It's similar to normal service clients from v3 SDK, with the difference that it takes a basic DynamoDB
  client in its constructor.

Example:

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

### `undefined` values in when marshalling

- In v2, `undefined` values in objects were automatically omitted during the marshalling process to DynamoDB.

- In v3, the default marshalling behavior in @aws-sdk/lib-dynamodb has changed: objects with `undefined` values are no longer omitted. To align with v2's functionality, developers must explicitly set the `removeUndefinedValues` to `true` in the `marshallOptions` of the DynamoDBDocumentClient.

Example:

```js
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});

// The DynamoDBDocumentClient is configured to handle undefined values properly
const ddbDocClient = DynamoDBDocumentClient.from(client, {
  marshallOptions: {
    removeUndefinedValues: true
  }
});

await ddbDocClient.send(
  new PutCommand({
    TableName,
    Item: {
      id: "123",
      content: undefined // This value will be automatically omitted
    };
  })
);
```

More examples and configurations are available in the [package README](https://github.com/aws/aws-sdk-js-v3/blob/main/lib/lib-dynamodb/README.md).

## Waiters

In v2, all waiters are bound to the service client class, you need to specify in waiter's input which designed state the
client will be waiting for. For example, you need to [call `waitFor("bucketExists")`](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#bucketExists-waiter)
to wait for a newly created bucket to be ready.

In v3, you don't need to import waiters if your application doesn't need one. Moreover, you can import only the waiter
you need to wait for the particular desired state you want. Thus, you can reduce your bundle size and improve
performance. Here's the example of waiting for bucket to be ready after creation:

```javascript
import { S3Client, CreateBucketCommand, waitUntilBucketExists } from "@aws-sdk/client-s3"; // ES6 import
// const { S3Client, CreateBucketCommand, waitUntilBucketExists } = require("@aws-sdk/client-s3"); // CommonJS import

const Bucket = "BUCKET_NAME";
const client = new S3Client({ region: "REGION" });
const command = new CreateBucketCommand({ Bucket });

await client.send(command);
await waitUntilBucketExists({ client, maxWaitTime: 60 }, { Bucket });
```

You can find everything of how to configure the waiters in the [blog post of waiters in v3 SDK](https://aws.amazon.com/blogs/developer/waiters-in-modular-aws-sdk-for-javascript/).

## CloudFront Signer

In v2, you can sign the request to access restricted CloudFront distributions with [`AWS.CloudFront.Signer`](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CloudFront/Signer.html).

In v3, you have the same utilities provided in the [`@aws-sdk/cloudfront-signer`](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/modules/_aws_sdk_cloudfront_signer.html) package.

## RDS Signer

In v2, you can generate the auth token to an RDS database using [`AWS.RDS.Signer`](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/RDS/Signer.html).

In v3, the similar utility class is available in [`@aws-sdk/rds-signer` package](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/modules/_aws_sdk_rds_signer.html).

## Polly Signer

In v2, you can generate a signed URL to the speech synthesized by AWS Polly service with [`AWS.Polly.Presigner` class](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Polly/Presigner.html).

In v3, the similar utility function is available in [`@aws-sdk/polly-request-presigner` package](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/modules/_aws_sdk_polly_request_presigner.html)

## Notes on Specific Service Clients

### Amazon S3

Streaming vs. buffered responses: the JSv3 SDK prefers not to buffer potentially large responses. This is commonly encountered in S3's GetObject operation, which returned a `Buffer` in JSv2, but
returns a `Stream` in JSv3.

For Node.js, you must consume the stream or garbage collect the client or its request handler to keep the connections open to new traffic by freeing sockets.

```ts
// v2
const get = await s3.getObject({ ... }).promise(); // this buffers (consumes) the stream already.
```

```ts
// v3, consume the stream to free the socket.
const get = await s3.getObject({ ... }); // object .Body has unconsumed stream.
const str = await get.Body.transformToString(); // consumes the stream.
// other ways to consume the stream include writing it to a file,
// passing it to another consumer like an upload, or buffering to
// a string or byte array.
```

Please see also the section on **socket exhaustion** here: https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/CLIENTS.md#request-handler-requesthandler

### AWS Lambda

Lambda invocations response type differs in v3:

```js
import { Lambda } from "@aws-sdk/client-lambda";
import AWS from "aws-sdk";

const region = "...";

{
  // v2
  const lambda = new AWS.Lambda({ region });
  const invoke = await lambda
    .invoke({
      FunctionName: "echo",
      Payload: JSON.stringify({ message: "hello" }),
    })
    .promise();
  // in v2, Lambda::invoke::Payload is automatically converted to string via a
  // specific code customization.
  const payloadIsString = typeof invoke.Payload === "string";
  console.log("Invoke response payload type is string:", payloadIsString);

  const payloadObject = JSON.parse(invoke.Payload);
  console.log("Invoke response object", payloadObject);
}

{
  const lambda = new Lambda({ region });
  const invoke = await lambda.invoke({
    FunctionName: "echo",
    Payload: JSON.stringify({ message: "hello" }),
  });
  // in v3, Lambda::invoke::Payload is not automatically converted to a string.
  // This is to reduce the number of customizations that create inconsistent behaviors.
  const payloadIsByteArray = invoke.Payload instanceof Uint8Array;
  console.log("Invoke response payload type is Uint8Array:", payloadIsByteArray);

  // To maintain the old functionality, only one additional method call is needed:
  // v3 adds a method to the Uint8Array called transformToString.
  const payloadObject = JSON.parse(invoke.Payload.transformToString());
  console.log("Invoke response object", payloadObject);
}
```

### Amazon SQS

#### MD5 Checksum

To skip computation of MD5 checksums of message bodies, set `md5=false` on the configuration object.
Otherwise, by default the SDK will calculate the checksum for sending messages, as well as validating the checksum
for retrieved messages.

```ts
// Example: skip md5 checksum in SQS.
import { SQS } from "@aws-sdk/client-sqs";

new SQS({
  md5: false, // Note: only available in v3.547.0 and higher.
});
```

When using a custom `QueueUrl` in SQS operations that have this as an input parameter, in JSv2
it was possible to supply a custom `QueueUrl` which would override the SQS Client's default endpoint.

#### Mutli-region messages

You should use one client per region in v3. The AWS Region is meant to be initialized at the client level and not changed between requests.

```ts
import { SQS } from "@aws-sdk/client-sqs";

const sqsClients = {
  "us-east-1": new SQS({ region: "us-east-1" }),
  "us-west-2": new SQS({ region: "us-west-2" }),
};

const queues = [
  { region: "us-east-1", url: "https://sqs.us-east-1.amazonaws.com/{AWS_ACCOUNT}/MyQueue" },
  { region: "us-west-2", url: "https://sqs.us-west-2.amazonaws.com/{AWS_ACCOUNT}/MyOtherQueue" },
];

for (const { region, url } of queues) {
  const params = {
    MessageBody: "Hello",
    QueueUrl: url,
  };
  await sqsClients[region].sendMessage(params);
}
```

#### Custom endpoint

In JSv3, when using a custom endpoint, i.e. one that differs from the default public SQS endpoints, you
should always set the endpoint on the SQS Client as well as the `QueueUrl` field.

```ts
import { SQS } from "@aws-sdk/client-sqs";

const sqs = new SQS({
  // client endpoint should be specified in JSv3 when not the default public SQS endpoint for your region.
  // This is required for versions <= v3.506.0
  // This is optional but recommended for versions >= v3.507.0 (a warning will be emitted)
  endpoint: "https://my-custom-endpoint:8000/",
});

await sqs.sendMessage({
  QueueUrl: "https://my-custom-endpoint:8000/1234567/MyQueue",
  Message: "hello",
});
```

If you are not using a custom endpoint, then you do not need to set `endpoint` on the client.

```ts
import { SQS } from "@aws-sdk/client-sqs";

const sqs = new SQS({
  region: "us-west-2",
});

await sqs.sendMessage({
  QueueUrl: "https://sqs.us-west-2.amazonaws.com/1234567/MyQueue",
  Message: "hello",
});
```
