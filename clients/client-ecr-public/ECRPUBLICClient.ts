import {
  BatchCheckLayerAvailabilityCommandInput,
  BatchCheckLayerAvailabilityCommandOutput,
} from "./commands/BatchCheckLayerAvailabilityCommand";
import { BatchDeleteImageCommandInput, BatchDeleteImageCommandOutput } from "./commands/BatchDeleteImageCommand";
import {
  CompleteLayerUploadCommandInput,
  CompleteLayerUploadCommandOutput,
} from "./commands/CompleteLayerUploadCommand";
import { CreateRepositoryCommandInput, CreateRepositoryCommandOutput } from "./commands/CreateRepositoryCommand";
import { DeleteRepositoryCommandInput, DeleteRepositoryCommandOutput } from "./commands/DeleteRepositoryCommand";
import {
  DeleteRepositoryPolicyCommandInput,
  DeleteRepositoryPolicyCommandOutput,
} from "./commands/DeleteRepositoryPolicyCommand";
import { DescribeImageTagsCommandInput, DescribeImageTagsCommandOutput } from "./commands/DescribeImageTagsCommand";
import { DescribeImagesCommandInput, DescribeImagesCommandOutput } from "./commands/DescribeImagesCommand";
import { DescribeRegistriesCommandInput, DescribeRegistriesCommandOutput } from "./commands/DescribeRegistriesCommand";
import {
  DescribeRepositoriesCommandInput,
  DescribeRepositoriesCommandOutput,
} from "./commands/DescribeRepositoriesCommand";
import {
  GetAuthorizationTokenCommandInput,
  GetAuthorizationTokenCommandOutput,
} from "./commands/GetAuthorizationTokenCommand";
import {
  GetRegistryCatalogDataCommandInput,
  GetRegistryCatalogDataCommandOutput,
} from "./commands/GetRegistryCatalogDataCommand";
import {
  GetRepositoryCatalogDataCommandInput,
  GetRepositoryCatalogDataCommandOutput,
} from "./commands/GetRepositoryCatalogDataCommand";
import {
  GetRepositoryPolicyCommandInput,
  GetRepositoryPolicyCommandOutput,
} from "./commands/GetRepositoryPolicyCommand";
import {
  InitiateLayerUploadCommandInput,
  InitiateLayerUploadCommandOutput,
} from "./commands/InitiateLayerUploadCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { PutImageCommandInput, PutImageCommandOutput } from "./commands/PutImageCommand";
import {
  PutRegistryCatalogDataCommandInput,
  PutRegistryCatalogDataCommandOutput,
} from "./commands/PutRegistryCatalogDataCommand";
import {
  PutRepositoryCatalogDataCommandInput,
  PutRepositoryCatalogDataCommandOutput,
} from "./commands/PutRepositoryCatalogDataCommand";
import {
  SetRepositoryPolicyCommandInput,
  SetRepositoryPolicyCommandOutput,
} from "./commands/SetRepositoryPolicyCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UploadLayerPartCommandInput, UploadLayerPartCommandOutput } from "./commands/UploadLayerPartCommand";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig,
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { RetryInputConfig, RetryResolvedConfig, getRetryPlugin, resolveRetryConfig } from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  Provider,
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | BatchCheckLayerAvailabilityCommandInput
  | BatchDeleteImageCommandInput
  | CompleteLayerUploadCommandInput
  | CreateRepositoryCommandInput
  | DeleteRepositoryCommandInput
  | DeleteRepositoryPolicyCommandInput
  | DescribeImageTagsCommandInput
  | DescribeImagesCommandInput
  | DescribeRegistriesCommandInput
  | DescribeRepositoriesCommandInput
  | GetAuthorizationTokenCommandInput
  | GetRegistryCatalogDataCommandInput
  | GetRepositoryCatalogDataCommandInput
  | GetRepositoryPolicyCommandInput
  | InitiateLayerUploadCommandInput
  | ListTagsForResourceCommandInput
  | PutImageCommandInput
  | PutRegistryCatalogDataCommandInput
  | PutRepositoryCatalogDataCommandInput
  | SetRepositoryPolicyCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UploadLayerPartCommandInput;

export type ServiceOutputTypes =
  | BatchCheckLayerAvailabilityCommandOutput
  | BatchDeleteImageCommandOutput
  | CompleteLayerUploadCommandOutput
  | CreateRepositoryCommandOutput
  | DeleteRepositoryCommandOutput
  | DeleteRepositoryPolicyCommandOutput
  | DescribeImageTagsCommandOutput
  | DescribeImagesCommandOutput
  | DescribeRegistriesCommandOutput
  | DescribeRepositoriesCommandOutput
  | GetAuthorizationTokenCommandOutput
  | GetRegistryCatalogDataCommandOutput
  | GetRepositoryCatalogDataCommandOutput
  | GetRepositoryPolicyCommandOutput
  | InitiateLayerUploadCommandOutput
  | ListTagsForResourceCommandOutput
  | PutImageCommandOutput
  | PutRegistryCatalogDataCommandOutput
  | PutRepositoryCatalogDataCommandOutput
  | SetRepositoryPolicyCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UploadLayerPartCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Hash} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: (body: any) => number | undefined;

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
   * Specifies provider for retry algorithm to use.
   * @internal
   */
  retryModeProvider?: __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

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
   * Fetch related hostname, signing name or signing region with given region.
   * @internal
   */
  regionInfoProvider?: RegionInfoProvider;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;
}

type ECRPUBLICClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of ECRPUBLICClient class constructor that set the region, credentials and other options.
 */
export interface ECRPUBLICClientConfig extends ECRPUBLICClientConfigType {}

type ECRPUBLICClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of ECRPUBLICClient class. This is resolved and normalized from the {@link ECRPUBLICClientConfig | constructor configuration interface}.
 */
export interface ECRPUBLICClientResolvedConfig extends ECRPUBLICClientResolvedConfigType {}

/**
 * <fullname>Amazon Elastic Container Registry Public</fullname>
 *          <p>Amazon Elastic Container Registry (Amazon ECR) is a managed container image registry service. Amazon ECR provides both
 *          public and private registries to host your container images. You can use the familiar
 *          Docker CLI, or their preferred client, to push, pull, and manage images. Amazon ECR provides a
 *          secure, scalable, and reliable registry for your Docker or Open Container Initiative (OCI)
 *          images. Amazon ECR supports public repositories with this API. For information about the Amazon ECR
 *          API for private repositories, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/APIReference/Welcome.html">Amazon Elastic Container Registry API Reference</a>.</p>
 */
export class ECRPUBLICClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ECRPUBLICClientResolvedConfig
> {
  /**
   * The resolved configuration of ECRPUBLICClient class. This is resolved and normalized from the {@link ECRPUBLICClientConfig | constructor configuration interface}.
   */
  readonly config: ECRPUBLICClientResolvedConfig;

  constructor(configuration: ECRPUBLICClientConfig) {
    let _config_0 = __getRuntimeConfig(configuration);
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveRetryConfig(_config_2);
    let _config_4 = resolveHostHeaderConfig(_config_3);
    let _config_5 = resolveAwsAuthConfig(_config_4);
    let _config_6 = resolveUserAgentConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
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
