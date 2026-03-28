// smithy-typescript generated code
import {
  type HostHeaderInputConfig,
  type HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  type UserAgentInputConfig,
  type UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { type RegionInputConfig, type RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getSchemaSerdePlugin } from "@smithy/core/schema";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import {
  type EndpointInputConfig,
  type EndpointResolvedConfig,
  resolveEndpointConfig,
} from "@smithy/middleware-endpoint";
import {
  type RetryInputConfig,
  type RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig,
} from "@smithy/middleware-retry";
import type { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  type DefaultsMode as __DefaultsMode,
  type SmithyConfiguration as __SmithyConfiguration,
  type SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
  Client as __Client,
} from "@smithy/smithy-client";
import type {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultECRHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  BatchCheckLayerAvailabilityCommandInput,
  BatchCheckLayerAvailabilityCommandOutput,
} from "./commands/BatchCheckLayerAvailabilityCommand";
import type { BatchDeleteImageCommandInput, BatchDeleteImageCommandOutput } from "./commands/BatchDeleteImageCommand";
import type { BatchGetImageCommandInput, BatchGetImageCommandOutput } from "./commands/BatchGetImageCommand";
import type {
  BatchGetRepositoryScanningConfigurationCommandInput,
  BatchGetRepositoryScanningConfigurationCommandOutput,
} from "./commands/BatchGetRepositoryScanningConfigurationCommand";
import type {
  CompleteLayerUploadCommandInput,
  CompleteLayerUploadCommandOutput,
} from "./commands/CompleteLayerUploadCommand";
import type {
  CreatePullThroughCacheRuleCommandInput,
  CreatePullThroughCacheRuleCommandOutput,
} from "./commands/CreatePullThroughCacheRuleCommand";
import type { CreateRepositoryCommandInput, CreateRepositoryCommandOutput } from "./commands/CreateRepositoryCommand";
import type {
  CreateRepositoryCreationTemplateCommandInput,
  CreateRepositoryCreationTemplateCommandOutput,
} from "./commands/CreateRepositoryCreationTemplateCommand";
import type {
  DeleteLifecyclePolicyCommandInput,
  DeleteLifecyclePolicyCommandOutput,
} from "./commands/DeleteLifecyclePolicyCommand";
import type {
  DeletePullThroughCacheRuleCommandInput,
  DeletePullThroughCacheRuleCommandOutput,
} from "./commands/DeletePullThroughCacheRuleCommand";
import type {
  DeleteRegistryPolicyCommandInput,
  DeleteRegistryPolicyCommandOutput,
} from "./commands/DeleteRegistryPolicyCommand";
import type { DeleteRepositoryCommandInput, DeleteRepositoryCommandOutput } from "./commands/DeleteRepositoryCommand";
import type {
  DeleteRepositoryCreationTemplateCommandInput,
  DeleteRepositoryCreationTemplateCommandOutput,
} from "./commands/DeleteRepositoryCreationTemplateCommand";
import type {
  DeleteRepositoryPolicyCommandInput,
  DeleteRepositoryPolicyCommandOutput,
} from "./commands/DeleteRepositoryPolicyCommand";
import type {
  DeleteSigningConfigurationCommandInput,
  DeleteSigningConfigurationCommandOutput,
} from "./commands/DeleteSigningConfigurationCommand";
import type {
  DeregisterPullTimeUpdateExclusionCommandInput,
  DeregisterPullTimeUpdateExclusionCommandOutput,
} from "./commands/DeregisterPullTimeUpdateExclusionCommand";
import type {
  DescribeImageReplicationStatusCommandInput,
  DescribeImageReplicationStatusCommandOutput,
} from "./commands/DescribeImageReplicationStatusCommand";
import type {
  DescribeImageScanFindingsCommandInput,
  DescribeImageScanFindingsCommandOutput,
} from "./commands/DescribeImageScanFindingsCommand";
import type { DescribeImagesCommandInput, DescribeImagesCommandOutput } from "./commands/DescribeImagesCommand";
import type {
  DescribeImageSigningStatusCommandInput,
  DescribeImageSigningStatusCommandOutput,
} from "./commands/DescribeImageSigningStatusCommand";
import type {
  DescribePullThroughCacheRulesCommandInput,
  DescribePullThroughCacheRulesCommandOutput,
} from "./commands/DescribePullThroughCacheRulesCommand";
import type { DescribeRegistryCommandInput, DescribeRegistryCommandOutput } from "./commands/DescribeRegistryCommand";
import type {
  DescribeRepositoriesCommandInput,
  DescribeRepositoriesCommandOutput,
} from "./commands/DescribeRepositoriesCommand";
import type {
  DescribeRepositoryCreationTemplatesCommandInput,
  DescribeRepositoryCreationTemplatesCommandOutput,
} from "./commands/DescribeRepositoryCreationTemplatesCommand";
import type {
  GetAccountSettingCommandInput,
  GetAccountSettingCommandOutput,
} from "./commands/GetAccountSettingCommand";
import type {
  GetAuthorizationTokenCommandInput,
  GetAuthorizationTokenCommandOutput,
} from "./commands/GetAuthorizationTokenCommand";
import type {
  GetDownloadUrlForLayerCommandInput,
  GetDownloadUrlForLayerCommandOutput,
} from "./commands/GetDownloadUrlForLayerCommand";
import type {
  GetLifecyclePolicyCommandInput,
  GetLifecyclePolicyCommandOutput,
} from "./commands/GetLifecyclePolicyCommand";
import type {
  GetLifecyclePolicyPreviewCommandInput,
  GetLifecyclePolicyPreviewCommandOutput,
} from "./commands/GetLifecyclePolicyPreviewCommand";
import type {
  GetRegistryPolicyCommandInput,
  GetRegistryPolicyCommandOutput,
} from "./commands/GetRegistryPolicyCommand";
import type {
  GetRegistryScanningConfigurationCommandInput,
  GetRegistryScanningConfigurationCommandOutput,
} from "./commands/GetRegistryScanningConfigurationCommand";
import type {
  GetRepositoryPolicyCommandInput,
  GetRepositoryPolicyCommandOutput,
} from "./commands/GetRepositoryPolicyCommand";
import type {
  GetSigningConfigurationCommandInput,
  GetSigningConfigurationCommandOutput,
} from "./commands/GetSigningConfigurationCommand";
import type {
  InitiateLayerUploadCommandInput,
  InitiateLayerUploadCommandOutput,
} from "./commands/InitiateLayerUploadCommand";
import type {
  ListImageReferrersCommandInput,
  ListImageReferrersCommandOutput,
} from "./commands/ListImageReferrersCommand";
import type { ListImagesCommandInput, ListImagesCommandOutput } from "./commands/ListImagesCommand";
import type {
  ListPullTimeUpdateExclusionsCommandInput,
  ListPullTimeUpdateExclusionsCommandOutput,
} from "./commands/ListPullTimeUpdateExclusionsCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type {
  PutAccountSettingCommandInput,
  PutAccountSettingCommandOutput,
} from "./commands/PutAccountSettingCommand";
import type { PutImageCommandInput, PutImageCommandOutput } from "./commands/PutImageCommand";
import type {
  PutImageScanningConfigurationCommandInput,
  PutImageScanningConfigurationCommandOutput,
} from "./commands/PutImageScanningConfigurationCommand";
import type {
  PutImageTagMutabilityCommandInput,
  PutImageTagMutabilityCommandOutput,
} from "./commands/PutImageTagMutabilityCommand";
import type {
  PutLifecyclePolicyCommandInput,
  PutLifecyclePolicyCommandOutput,
} from "./commands/PutLifecyclePolicyCommand";
import type {
  PutRegistryPolicyCommandInput,
  PutRegistryPolicyCommandOutput,
} from "./commands/PutRegistryPolicyCommand";
import type {
  PutRegistryScanningConfigurationCommandInput,
  PutRegistryScanningConfigurationCommandOutput,
} from "./commands/PutRegistryScanningConfigurationCommand";
import type {
  PutReplicationConfigurationCommandInput,
  PutReplicationConfigurationCommandOutput,
} from "./commands/PutReplicationConfigurationCommand";
import type {
  PutSigningConfigurationCommandInput,
  PutSigningConfigurationCommandOutput,
} from "./commands/PutSigningConfigurationCommand";
import type {
  RegisterPullTimeUpdateExclusionCommandInput,
  RegisterPullTimeUpdateExclusionCommandOutput,
} from "./commands/RegisterPullTimeUpdateExclusionCommand";
import type {
  SetRepositoryPolicyCommandInput,
  SetRepositoryPolicyCommandOutput,
} from "./commands/SetRepositoryPolicyCommand";
import type { StartImageScanCommandInput, StartImageScanCommandOutput } from "./commands/StartImageScanCommand";
import type {
  StartLifecyclePolicyPreviewCommandInput,
  StartLifecyclePolicyPreviewCommandOutput,
} from "./commands/StartLifecyclePolicyPreviewCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type {
  UpdateImageStorageClassCommandInput,
  UpdateImageStorageClassCommandOutput,
} from "./commands/UpdateImageStorageClassCommand";
import type {
  UpdatePullThroughCacheRuleCommandInput,
  UpdatePullThroughCacheRuleCommandOutput,
} from "./commands/UpdatePullThroughCacheRuleCommand";
import type {
  UpdateRepositoryCreationTemplateCommandInput,
  UpdateRepositoryCreationTemplateCommandOutput,
} from "./commands/UpdateRepositoryCreationTemplateCommand";
import type { UploadLayerPartCommandInput, UploadLayerPartCommandOutput } from "./commands/UploadLayerPartCommand";
import type {
  ValidatePullThroughCacheRuleCommandInput,
  ValidatePullThroughCacheRuleCommandOutput,
} from "./commands/ValidatePullThroughCacheRuleCommand";
import {
  type ClientInputEndpointParameters,
  type ClientResolvedEndpointParameters,
  type EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { type RuntimeExtension, type RuntimeExtensionsConfig, resolveRuntimeExtensions } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | BatchCheckLayerAvailabilityCommandInput
  | BatchDeleteImageCommandInput
  | BatchGetImageCommandInput
  | BatchGetRepositoryScanningConfigurationCommandInput
  | CompleteLayerUploadCommandInput
  | CreatePullThroughCacheRuleCommandInput
  | CreateRepositoryCommandInput
  | CreateRepositoryCreationTemplateCommandInput
  | DeleteLifecyclePolicyCommandInput
  | DeletePullThroughCacheRuleCommandInput
  | DeleteRegistryPolicyCommandInput
  | DeleteRepositoryCommandInput
  | DeleteRepositoryCreationTemplateCommandInput
  | DeleteRepositoryPolicyCommandInput
  | DeleteSigningConfigurationCommandInput
  | DeregisterPullTimeUpdateExclusionCommandInput
  | DescribeImageReplicationStatusCommandInput
  | DescribeImageScanFindingsCommandInput
  | DescribeImageSigningStatusCommandInput
  | DescribeImagesCommandInput
  | DescribePullThroughCacheRulesCommandInput
  | DescribeRegistryCommandInput
  | DescribeRepositoriesCommandInput
  | DescribeRepositoryCreationTemplatesCommandInput
  | GetAccountSettingCommandInput
  | GetAuthorizationTokenCommandInput
  | GetDownloadUrlForLayerCommandInput
  | GetLifecyclePolicyCommandInput
  | GetLifecyclePolicyPreviewCommandInput
  | GetRegistryPolicyCommandInput
  | GetRegistryScanningConfigurationCommandInput
  | GetRepositoryPolicyCommandInput
  | GetSigningConfigurationCommandInput
  | InitiateLayerUploadCommandInput
  | ListImageReferrersCommandInput
  | ListImagesCommandInput
  | ListPullTimeUpdateExclusionsCommandInput
  | ListTagsForResourceCommandInput
  | PutAccountSettingCommandInput
  | PutImageCommandInput
  | PutImageScanningConfigurationCommandInput
  | PutImageTagMutabilityCommandInput
  | PutLifecyclePolicyCommandInput
  | PutRegistryPolicyCommandInput
  | PutRegistryScanningConfigurationCommandInput
  | PutReplicationConfigurationCommandInput
  | PutSigningConfigurationCommandInput
  | RegisterPullTimeUpdateExclusionCommandInput
  | SetRepositoryPolicyCommandInput
  | StartImageScanCommandInput
  | StartLifecyclePolicyPreviewCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateImageStorageClassCommandInput
  | UpdatePullThroughCacheRuleCommandInput
  | UpdateRepositoryCreationTemplateCommandInput
  | UploadLayerPartCommandInput
  | ValidatePullThroughCacheRuleCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | BatchCheckLayerAvailabilityCommandOutput
  | BatchDeleteImageCommandOutput
  | BatchGetImageCommandOutput
  | BatchGetRepositoryScanningConfigurationCommandOutput
  | CompleteLayerUploadCommandOutput
  | CreatePullThroughCacheRuleCommandOutput
  | CreateRepositoryCommandOutput
  | CreateRepositoryCreationTemplateCommandOutput
  | DeleteLifecyclePolicyCommandOutput
  | DeletePullThroughCacheRuleCommandOutput
  | DeleteRegistryPolicyCommandOutput
  | DeleteRepositoryCommandOutput
  | DeleteRepositoryCreationTemplateCommandOutput
  | DeleteRepositoryPolicyCommandOutput
  | DeleteSigningConfigurationCommandOutput
  | DeregisterPullTimeUpdateExclusionCommandOutput
  | DescribeImageReplicationStatusCommandOutput
  | DescribeImageScanFindingsCommandOutput
  | DescribeImageSigningStatusCommandOutput
  | DescribeImagesCommandOutput
  | DescribePullThroughCacheRulesCommandOutput
  | DescribeRegistryCommandOutput
  | DescribeRepositoriesCommandOutput
  | DescribeRepositoryCreationTemplatesCommandOutput
  | GetAccountSettingCommandOutput
  | GetAuthorizationTokenCommandOutput
  | GetDownloadUrlForLayerCommandOutput
  | GetLifecyclePolicyCommandOutput
  | GetLifecyclePolicyPreviewCommandOutput
  | GetRegistryPolicyCommandOutput
  | GetRegistryScanningConfigurationCommandOutput
  | GetRepositoryPolicyCommandOutput
  | GetSigningConfigurationCommandOutput
  | InitiateLayerUploadCommandOutput
  | ListImageReferrersCommandOutput
  | ListImagesCommandOutput
  | ListPullTimeUpdateExclusionsCommandOutput
  | ListTagsForResourceCommandOutput
  | PutAccountSettingCommandOutput
  | PutImageCommandOutput
  | PutImageScanningConfigurationCommandOutput
  | PutImageTagMutabilityCommandOutput
  | PutLifecyclePolicyCommandOutput
  | PutRegistryPolicyCommandOutput
  | PutRegistryScanningConfigurationCommandOutput
  | PutReplicationConfigurationCommandOutput
  | PutSigningConfigurationCommandOutput
  | RegisterPullTimeUpdateExclusionCommandOutput
  | SetRepositoryPolicyCommandOutput
  | StartImageScanCommandOutput
  | StartLifecyclePolicyPreviewCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateImageStorageClassCommandOutput
  | UpdatePullThroughCacheRuleCommandOutput
  | UpdateRepositoryCreationTemplateCommandOutput
  | UploadLayerPartCommandOutput
  | ValidatePullThroughCacheRuleCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use or its constructor options. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandlerUserInput;

  /**
   * A constructor for a class implementing the {@link @smithy/types#ChecksumConstructor} interface
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
   * Disable dynamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Setting a client profile is similar to setting a value for the
   * AWS_PROFILE environment variable. Setting a profile on a client
   * in code only affects the single client instance, unlike AWS_PROFILE.
   *
   * When set, and only for environments where an AWS configuration
   * file exists, fields configurable by this file will be retrieved
   * from the specified profile within that file.
   * Conflicting code configuration and environment variables will
   * still have higher priority.
   *
   * For client credential resolution that involves checking the AWS
   * configuration file, the client's profile (this value) will be
   * used unless a different profile is set in the credential
   * provider options.
   *
   */
  profile?: string;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: __Provider<__UserAgent>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @deprecated
   * @internal
   */
  credentialDefaultProvider?: (input: any) => AwsCredentialIdentityProvider;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-smithy-util-retry/Enum/RETRY_MODES/
   *
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Optional extensions
   */
  extensions?: RuntimeExtension[];

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type ECRClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  UserAgentInputConfig &
  RetryInputConfig &
  RegionInputConfig &
  HostHeaderInputConfig &
  EndpointInputConfig<EndpointParameters> &
  HttpAuthSchemeInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of ECRClient class constructor that set the region, credentials and other options.
 */
export interface ECRClientConfig extends ECRClientConfigType {}

/**
 * @public
 */
export type ECRClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  UserAgentResolvedConfig &
  RetryResolvedConfig &
  RegionResolvedConfig &
  HostHeaderResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  HttpAuthSchemeResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of ECRClient class. This is resolved and normalized from the {@link ECRClientConfig | constructor configuration interface}.
 */
export interface ECRClientResolvedConfig extends ECRClientResolvedConfigType {}

/**
 * <fullname>Amazon Elastic Container Registry</fullname>
 *          <p>Amazon Elastic Container Registry (Amazon ECR) is a managed container image registry service. Customers can use the
 *             familiar Docker CLI, or their preferred client, to push, pull, and manage images. Amazon ECR
 *             provides a secure, scalable, and reliable registry for your Docker or Open Container
 *             Initiative (OCI) images. Amazon ECR supports private repositories with resource-based
 *             permissions using IAM so that specific users or Amazon EC2 instances can access
 *             repositories and images.</p>
 *          <p>Amazon ECR has service endpoints in each supported Region. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/ecr.html">Amazon ECR endpoints</a> in the
 *                 <i>Amazon Web Services General Reference</i>.</p>
 * @public
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

  constructor(...[configuration]: __CheckOptionalClientConfig<ECRClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    super(_config_0 as any);
    this.initConfig = _config_0;
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    this.config = _config_8;
    this.middlewareStack.use(getSchemaSerdePlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultECRHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: ECRClientResolvedConfig) =>
          new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials,
          }),
      })
    );
    this.middlewareStack.use(getHttpSigningPlugin(this.config));
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
