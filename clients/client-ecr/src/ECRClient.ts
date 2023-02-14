// smithy-typescript generated code
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@aws-sdk/middleware-endpoint";
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  Checksum as __Checksum,
  ChecksumConstructor as __ChecksumConstructor,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

import {
  BatchCheckLayerAvailabilityCommandInput,
  BatchCheckLayerAvailabilityCommandOutput,
} from "./commands/BatchCheckLayerAvailabilityCommand";
import { BatchDeleteImageCommandInput, BatchDeleteImageCommandOutput } from "./commands/BatchDeleteImageCommand";
import { BatchGetImageCommandInput, BatchGetImageCommandOutput } from "./commands/BatchGetImageCommand";
import {
  BatchGetRepositoryScanningConfigurationCommandInput,
  BatchGetRepositoryScanningConfigurationCommandOutput,
} from "./commands/BatchGetRepositoryScanningConfigurationCommand";
import {
  CompleteLayerUploadCommandInput,
  CompleteLayerUploadCommandOutput,
} from "./commands/CompleteLayerUploadCommand";
import {
  CreatePullThroughCacheRuleCommandInput,
  CreatePullThroughCacheRuleCommandOutput,
} from "./commands/CreatePullThroughCacheRuleCommand";
import { CreateRepositoryCommandInput, CreateRepositoryCommandOutput } from "./commands/CreateRepositoryCommand";
import {
  DeleteLifecyclePolicyCommandInput,
  DeleteLifecyclePolicyCommandOutput,
} from "./commands/DeleteLifecyclePolicyCommand";
import {
  DeletePullThroughCacheRuleCommandInput,
  DeletePullThroughCacheRuleCommandOutput,
} from "./commands/DeletePullThroughCacheRuleCommand";
import {
  DeleteRegistryPolicyCommandInput,
  DeleteRegistryPolicyCommandOutput,
} from "./commands/DeleteRegistryPolicyCommand";
import { DeleteRepositoryCommandInput, DeleteRepositoryCommandOutput } from "./commands/DeleteRepositoryCommand";
import {
  DeleteRepositoryPolicyCommandInput,
  DeleteRepositoryPolicyCommandOutput,
} from "./commands/DeleteRepositoryPolicyCommand";
import {
  DescribeImageReplicationStatusCommandInput,
  DescribeImageReplicationStatusCommandOutput,
} from "./commands/DescribeImageReplicationStatusCommand";
import {
  DescribeImageScanFindingsCommandInput,
  DescribeImageScanFindingsCommandOutput,
} from "./commands/DescribeImageScanFindingsCommand";
import { DescribeImagesCommandInput, DescribeImagesCommandOutput } from "./commands/DescribeImagesCommand";
import {
  DescribePullThroughCacheRulesCommandInput,
  DescribePullThroughCacheRulesCommandOutput,
} from "./commands/DescribePullThroughCacheRulesCommand";
import { DescribeRegistryCommandInput, DescribeRegistryCommandOutput } from "./commands/DescribeRegistryCommand";
import {
  DescribeRepositoriesCommandInput,
  DescribeRepositoriesCommandOutput,
} from "./commands/DescribeRepositoriesCommand";
import {
  GetAuthorizationTokenCommandInput,
  GetAuthorizationTokenCommandOutput,
} from "./commands/GetAuthorizationTokenCommand";
import {
  GetDownloadUrlForLayerCommandInput,
  GetDownloadUrlForLayerCommandOutput,
} from "./commands/GetDownloadUrlForLayerCommand";
import { GetLifecyclePolicyCommandInput, GetLifecyclePolicyCommandOutput } from "./commands/GetLifecyclePolicyCommand";
import {
  GetLifecyclePolicyPreviewCommandInput,
  GetLifecyclePolicyPreviewCommandOutput,
} from "./commands/GetLifecyclePolicyPreviewCommand";
import { GetRegistryPolicyCommandInput, GetRegistryPolicyCommandOutput } from "./commands/GetRegistryPolicyCommand";
import {
  GetRegistryScanningConfigurationCommandInput,
  GetRegistryScanningConfigurationCommandOutput,
} from "./commands/GetRegistryScanningConfigurationCommand";
import {
  GetRepositoryPolicyCommandInput,
  GetRepositoryPolicyCommandOutput,
} from "./commands/GetRepositoryPolicyCommand";
import {
  InitiateLayerUploadCommandInput,
  InitiateLayerUploadCommandOutput,
} from "./commands/InitiateLayerUploadCommand";
import { ListImagesCommandInput, ListImagesCommandOutput } from "./commands/ListImagesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { PutImageCommandInput, PutImageCommandOutput } from "./commands/PutImageCommand";
import {
  PutImageScanningConfigurationCommandInput,
  PutImageScanningConfigurationCommandOutput,
} from "./commands/PutImageScanningConfigurationCommand";
import {
  PutImageTagMutabilityCommandInput,
  PutImageTagMutabilityCommandOutput,
} from "./commands/PutImageTagMutabilityCommand";
import { PutLifecyclePolicyCommandInput, PutLifecyclePolicyCommandOutput } from "./commands/PutLifecyclePolicyCommand";
import { PutRegistryPolicyCommandInput, PutRegistryPolicyCommandOutput } from "./commands/PutRegistryPolicyCommand";
import {
  PutRegistryScanningConfigurationCommandInput,
  PutRegistryScanningConfigurationCommandOutput,
} from "./commands/PutRegistryScanningConfigurationCommand";
import {
  PutReplicationConfigurationCommandInput,
  PutReplicationConfigurationCommandOutput,
} from "./commands/PutReplicationConfigurationCommand";
import {
  SetRepositoryPolicyCommandInput,
  SetRepositoryPolicyCommandOutput,
} from "./commands/SetRepositoryPolicyCommand";
import { StartImageScanCommandInput, StartImageScanCommandOutput } from "./commands/StartImageScanCommand";
import {
  StartLifecyclePolicyPreviewCommandInput,
  StartLifecyclePolicyPreviewCommandOutput,
} from "./commands/StartLifecyclePolicyPreviewCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UploadLayerPartCommandInput, UploadLayerPartCommandOutput } from "./commands/UploadLayerPartCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | BatchCheckLayerAvailabilityCommandInput
  | BatchDeleteImageCommandInput
  | BatchGetImageCommandInput
  | BatchGetRepositoryScanningConfigurationCommandInput
  | CompleteLayerUploadCommandInput
  | CreatePullThroughCacheRuleCommandInput
  | CreateRepositoryCommandInput
  | DeleteLifecyclePolicyCommandInput
  | DeletePullThroughCacheRuleCommandInput
  | DeleteRegistryPolicyCommandInput
  | DeleteRepositoryCommandInput
  | DeleteRepositoryPolicyCommandInput
  | DescribeImageReplicationStatusCommandInput
  | DescribeImageScanFindingsCommandInput
  | DescribeImagesCommandInput
  | DescribePullThroughCacheRulesCommandInput
  | DescribeRegistryCommandInput
  | DescribeRepositoriesCommandInput
  | GetAuthorizationTokenCommandInput
  | GetDownloadUrlForLayerCommandInput
  | GetLifecyclePolicyCommandInput
  | GetLifecyclePolicyPreviewCommandInput
  | GetRegistryPolicyCommandInput
  | GetRegistryScanningConfigurationCommandInput
  | GetRepositoryPolicyCommandInput
  | InitiateLayerUploadCommandInput
  | ListImagesCommandInput
  | ListTagsForResourceCommandInput
  | PutImageCommandInput
  | PutImageScanningConfigurationCommandInput
  | PutImageTagMutabilityCommandInput
  | PutLifecyclePolicyCommandInput
  | PutRegistryPolicyCommandInput
  | PutRegistryScanningConfigurationCommandInput
  | PutReplicationConfigurationCommandInput
  | SetRepositoryPolicyCommandInput
  | StartImageScanCommandInput
  | StartLifecyclePolicyPreviewCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UploadLayerPartCommandInput;

export type ServiceOutputTypes =
  | BatchCheckLayerAvailabilityCommandOutput
  | BatchDeleteImageCommandOutput
  | BatchGetImageCommandOutput
  | BatchGetRepositoryScanningConfigurationCommandOutput
  | CompleteLayerUploadCommandOutput
  | CreatePullThroughCacheRuleCommandOutput
  | CreateRepositoryCommandOutput
  | DeleteLifecyclePolicyCommandOutput
  | DeletePullThroughCacheRuleCommandOutput
  | DeleteRegistryPolicyCommandOutput
  | DeleteRepositoryCommandOutput
  | DeleteRepositoryPolicyCommandOutput
  | DescribeImageReplicationStatusCommandOutput
  | DescribeImageScanFindingsCommandOutput
  | DescribeImagesCommandOutput
  | DescribePullThroughCacheRulesCommandOutput
  | DescribeRegistryCommandOutput
  | DescribeRepositoriesCommandOutput
  | GetAuthorizationTokenCommandOutput
  | GetDownloadUrlForLayerCommandOutput
  | GetLifecyclePolicyCommandOutput
  | GetLifecyclePolicyPreviewCommandOutput
  | GetRegistryPolicyCommandOutput
  | GetRegistryScanningConfigurationCommandOutput
  | GetRepositoryPolicyCommandOutput
  | InitiateLayerUploadCommandOutput
  | ListImagesCommandOutput
  | ListTagsForResourceCommandOutput
  | PutImageCommandOutput
  | PutImageScanningConfigurationCommandOutput
  | PutImageTagMutabilityCommandOutput
  | PutLifecyclePolicyCommandOutput
  | PutRegistryPolicyCommandOutput
  | PutRegistryScanningConfigurationCommandOutput
  | PutReplicationConfigurationCommandOutput
  | SetRepositoryPolicyCommandOutput
  | StartImageScanCommandOutput
  | StartLifecyclePolicyPreviewCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UploadLayerPartCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Checksum} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __ChecksumConstructor | __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: __BodyLengthCalculator;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @internal
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * The {@link __DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

type ECRClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of ECRClient class constructor that set the region, credentials and other options.
 */
export interface ECRClientConfig extends ECRClientConfigType {}

type ECRClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of ECRClient class. This is resolved and normalized from the {@link ECRClientConfig | constructor configuration interface}.
 */
export interface ECRClientResolvedConfig extends ECRClientResolvedConfigType {}

/**
 * <fullname>Amazon Elastic Container Registry</fullname>
 *         <p>Amazon Elastic Container Registry (Amazon ECR) is a managed container image registry service. Customers can use the
 *             familiar Docker CLI, or their preferred client, to push, pull, and manage images. Amazon ECR
 *             provides a secure, scalable, and reliable registry for your Docker or Open Container
 *             Initiative (OCI) images. Amazon ECR supports private repositories with resource-based
 *             permissions using IAM so that specific users or Amazon EC2 instances can access
 *             repositories and images.</p>
 *         <p>Amazon ECR has service endpoints in each supported Region. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/ecr.html">Amazon ECR endpoints</a> in the
 *                 <i>Amazon Web Services General Reference</i>.</p>
 */
export class ECRClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ECRClientResolvedConfig
> {
  /**
   * The resolved configuration of ECRClient class. This is resolved and normalized from the {@link ECRClientConfig | constructor configuration interface}.
   */
  readonly config: ECRClientResolvedConfig;

  constructor(configuration: ECRClientConfig) {
    const _config_0 = __getRuntimeConfig(configuration);
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveAwsAuthConfig(_config_5);
    const _config_7 = resolveUserAgentConfig(_config_6);
    super(_config_7);
    this.config = _config_7;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}
