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
import {
  type BodyLengthCalculator as __BodyLengthCalculator,
  type CheckOptionalClientConfig as __CheckOptionalClientConfig,
  type ChecksumConstructor as __ChecksumConstructor,
  type Decoder as __Decoder,
  type Encoder as __Encoder,
  type HashConstructor as __HashConstructor,
  type HttpHandlerOptions as __HttpHandlerOptions,
  type Logger as __Logger,
  type Provider as __Provider,
  type StreamCollector as __StreamCollector,
  type UrlParser as __UrlParser,
  AwsCredentialIdentityProvider,
  EndpointV2 as __EndpointV2,
  Provider,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultImagebuilderHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  CancelImageCreationCommandInput,
  CancelImageCreationCommandOutput,
} from "./commands/CancelImageCreationCommand";
import {
  CancelLifecycleExecutionCommandInput,
  CancelLifecycleExecutionCommandOutput,
} from "./commands/CancelLifecycleExecutionCommand";
import { CreateComponentCommandInput, CreateComponentCommandOutput } from "./commands/CreateComponentCommand";
import {
  CreateContainerRecipeCommandInput,
  CreateContainerRecipeCommandOutput,
} from "./commands/CreateContainerRecipeCommand";
import {
  CreateDistributionConfigurationCommandInput,
  CreateDistributionConfigurationCommandOutput,
} from "./commands/CreateDistributionConfigurationCommand";
import { CreateImageCommandInput, CreateImageCommandOutput } from "./commands/CreateImageCommand";
import {
  CreateImagePipelineCommandInput,
  CreateImagePipelineCommandOutput,
} from "./commands/CreateImagePipelineCommand";
import { CreateImageRecipeCommandInput, CreateImageRecipeCommandOutput } from "./commands/CreateImageRecipeCommand";
import {
  CreateInfrastructureConfigurationCommandInput,
  CreateInfrastructureConfigurationCommandOutput,
} from "./commands/CreateInfrastructureConfigurationCommand";
import {
  CreateLifecyclePolicyCommandInput,
  CreateLifecyclePolicyCommandOutput,
} from "./commands/CreateLifecyclePolicyCommand";
import { CreateWorkflowCommandInput, CreateWorkflowCommandOutput } from "./commands/CreateWorkflowCommand";
import { DeleteComponentCommandInput, DeleteComponentCommandOutput } from "./commands/DeleteComponentCommand";
import {
  DeleteContainerRecipeCommandInput,
  DeleteContainerRecipeCommandOutput,
} from "./commands/DeleteContainerRecipeCommand";
import {
  DeleteDistributionConfigurationCommandInput,
  DeleteDistributionConfigurationCommandOutput,
} from "./commands/DeleteDistributionConfigurationCommand";
import { DeleteImageCommandInput, DeleteImageCommandOutput } from "./commands/DeleteImageCommand";
import {
  DeleteImagePipelineCommandInput,
  DeleteImagePipelineCommandOutput,
} from "./commands/DeleteImagePipelineCommand";
import { DeleteImageRecipeCommandInput, DeleteImageRecipeCommandOutput } from "./commands/DeleteImageRecipeCommand";
import {
  DeleteInfrastructureConfigurationCommandInput,
  DeleteInfrastructureConfigurationCommandOutput,
} from "./commands/DeleteInfrastructureConfigurationCommand";
import {
  DeleteLifecyclePolicyCommandInput,
  DeleteLifecyclePolicyCommandOutput,
} from "./commands/DeleteLifecyclePolicyCommand";
import { DeleteWorkflowCommandInput, DeleteWorkflowCommandOutput } from "./commands/DeleteWorkflowCommand";
import { DistributeImageCommandInput, DistributeImageCommandOutput } from "./commands/DistributeImageCommand";
import { GetComponentCommandInput, GetComponentCommandOutput } from "./commands/GetComponentCommand";
import { GetComponentPolicyCommandInput, GetComponentPolicyCommandOutput } from "./commands/GetComponentPolicyCommand";
import { GetContainerRecipeCommandInput, GetContainerRecipeCommandOutput } from "./commands/GetContainerRecipeCommand";
import {
  GetContainerRecipePolicyCommandInput,
  GetContainerRecipePolicyCommandOutput,
} from "./commands/GetContainerRecipePolicyCommand";
import {
  GetDistributionConfigurationCommandInput,
  GetDistributionConfigurationCommandOutput,
} from "./commands/GetDistributionConfigurationCommand";
import { GetImageCommandInput, GetImageCommandOutput } from "./commands/GetImageCommand";
import { GetImagePipelineCommandInput, GetImagePipelineCommandOutput } from "./commands/GetImagePipelineCommand";
import { GetImagePolicyCommandInput, GetImagePolicyCommandOutput } from "./commands/GetImagePolicyCommand";
import { GetImageRecipeCommandInput, GetImageRecipeCommandOutput } from "./commands/GetImageRecipeCommand";
import {
  GetImageRecipePolicyCommandInput,
  GetImageRecipePolicyCommandOutput,
} from "./commands/GetImageRecipePolicyCommand";
import {
  GetInfrastructureConfigurationCommandInput,
  GetInfrastructureConfigurationCommandOutput,
} from "./commands/GetInfrastructureConfigurationCommand";
import {
  GetLifecycleExecutionCommandInput,
  GetLifecycleExecutionCommandOutput,
} from "./commands/GetLifecycleExecutionCommand";
import { GetLifecyclePolicyCommandInput, GetLifecyclePolicyCommandOutput } from "./commands/GetLifecyclePolicyCommand";
import {
  GetMarketplaceResourceCommandInput,
  GetMarketplaceResourceCommandOutput,
} from "./commands/GetMarketplaceResourceCommand";
import { GetWorkflowCommandInput, GetWorkflowCommandOutput } from "./commands/GetWorkflowCommand";
import {
  GetWorkflowExecutionCommandInput,
  GetWorkflowExecutionCommandOutput,
} from "./commands/GetWorkflowExecutionCommand";
import {
  GetWorkflowStepExecutionCommandInput,
  GetWorkflowStepExecutionCommandOutput,
} from "./commands/GetWorkflowStepExecutionCommand";
import { ImportComponentCommandInput, ImportComponentCommandOutput } from "./commands/ImportComponentCommand";
import { ImportDiskImageCommandInput, ImportDiskImageCommandOutput } from "./commands/ImportDiskImageCommand";
import { ImportVmImageCommandInput, ImportVmImageCommandOutput } from "./commands/ImportVmImageCommand";
import {
  ListComponentBuildVersionsCommandInput,
  ListComponentBuildVersionsCommandOutput,
} from "./commands/ListComponentBuildVersionsCommand";
import { ListComponentsCommandInput, ListComponentsCommandOutput } from "./commands/ListComponentsCommand";
import {
  ListContainerRecipesCommandInput,
  ListContainerRecipesCommandOutput,
} from "./commands/ListContainerRecipesCommand";
import {
  ListDistributionConfigurationsCommandInput,
  ListDistributionConfigurationsCommandOutput,
} from "./commands/ListDistributionConfigurationsCommand";
import {
  ListImageBuildVersionsCommandInput,
  ListImageBuildVersionsCommandOutput,
} from "./commands/ListImageBuildVersionsCommand";
import { ListImagePackagesCommandInput, ListImagePackagesCommandOutput } from "./commands/ListImagePackagesCommand";
import {
  ListImagePipelineImagesCommandInput,
  ListImagePipelineImagesCommandOutput,
} from "./commands/ListImagePipelineImagesCommand";
import { ListImagePipelinesCommandInput, ListImagePipelinesCommandOutput } from "./commands/ListImagePipelinesCommand";
import { ListImageRecipesCommandInput, ListImageRecipesCommandOutput } from "./commands/ListImageRecipesCommand";
import {
  ListImageScanFindingAggregationsCommandInput,
  ListImageScanFindingAggregationsCommandOutput,
} from "./commands/ListImageScanFindingAggregationsCommand";
import {
  ListImageScanFindingsCommandInput,
  ListImageScanFindingsCommandOutput,
} from "./commands/ListImageScanFindingsCommand";
import { ListImagesCommandInput, ListImagesCommandOutput } from "./commands/ListImagesCommand";
import {
  ListInfrastructureConfigurationsCommandInput,
  ListInfrastructureConfigurationsCommandOutput,
} from "./commands/ListInfrastructureConfigurationsCommand";
import {
  ListLifecycleExecutionResourcesCommandInput,
  ListLifecycleExecutionResourcesCommandOutput,
} from "./commands/ListLifecycleExecutionResourcesCommand";
import {
  ListLifecycleExecutionsCommandInput,
  ListLifecycleExecutionsCommandOutput,
} from "./commands/ListLifecycleExecutionsCommand";
import {
  ListLifecyclePoliciesCommandInput,
  ListLifecyclePoliciesCommandOutput,
} from "./commands/ListLifecyclePoliciesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListWaitingWorkflowStepsCommandInput,
  ListWaitingWorkflowStepsCommandOutput,
} from "./commands/ListWaitingWorkflowStepsCommand";
import {
  ListWorkflowBuildVersionsCommandInput,
  ListWorkflowBuildVersionsCommandOutput,
} from "./commands/ListWorkflowBuildVersionsCommand";
import {
  ListWorkflowExecutionsCommandInput,
  ListWorkflowExecutionsCommandOutput,
} from "./commands/ListWorkflowExecutionsCommand";
import { ListWorkflowsCommandInput, ListWorkflowsCommandOutput } from "./commands/ListWorkflowsCommand";
import {
  ListWorkflowStepExecutionsCommandInput,
  ListWorkflowStepExecutionsCommandOutput,
} from "./commands/ListWorkflowStepExecutionsCommand";
import { PutComponentPolicyCommandInput, PutComponentPolicyCommandOutput } from "./commands/PutComponentPolicyCommand";
import {
  PutContainerRecipePolicyCommandInput,
  PutContainerRecipePolicyCommandOutput,
} from "./commands/PutContainerRecipePolicyCommand";
import { PutImagePolicyCommandInput, PutImagePolicyCommandOutput } from "./commands/PutImagePolicyCommand";
import {
  PutImageRecipePolicyCommandInput,
  PutImageRecipePolicyCommandOutput,
} from "./commands/PutImageRecipePolicyCommand";
import { RetryImageCommandInput, RetryImageCommandOutput } from "./commands/RetryImageCommand";
import {
  SendWorkflowStepActionCommandInput,
  SendWorkflowStepActionCommandOutput,
} from "./commands/SendWorkflowStepActionCommand";
import {
  StartImagePipelineExecutionCommandInput,
  StartImagePipelineExecutionCommandOutput,
} from "./commands/StartImagePipelineExecutionCommand";
import {
  StartResourceStateUpdateCommandInput,
  StartResourceStateUpdateCommandOutput,
} from "./commands/StartResourceStateUpdateCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateDistributionConfigurationCommandInput,
  UpdateDistributionConfigurationCommandOutput,
} from "./commands/UpdateDistributionConfigurationCommand";
import {
  UpdateImagePipelineCommandInput,
  UpdateImagePipelineCommandOutput,
} from "./commands/UpdateImagePipelineCommand";
import {
  UpdateInfrastructureConfigurationCommandInput,
  UpdateInfrastructureConfigurationCommandOutput,
} from "./commands/UpdateInfrastructureConfigurationCommand";
import {
  UpdateLifecyclePolicyCommandInput,
  UpdateLifecyclePolicyCommandOutput,
} from "./commands/UpdateLifecyclePolicyCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { type RuntimeExtension, type RuntimeExtensionsConfig, resolveRuntimeExtensions } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | CancelImageCreationCommandInput
  | CancelLifecycleExecutionCommandInput
  | CreateComponentCommandInput
  | CreateContainerRecipeCommandInput
  | CreateDistributionConfigurationCommandInput
  | CreateImageCommandInput
  | CreateImagePipelineCommandInput
  | CreateImageRecipeCommandInput
  | CreateInfrastructureConfigurationCommandInput
  | CreateLifecyclePolicyCommandInput
  | CreateWorkflowCommandInput
  | DeleteComponentCommandInput
  | DeleteContainerRecipeCommandInput
  | DeleteDistributionConfigurationCommandInput
  | DeleteImageCommandInput
  | DeleteImagePipelineCommandInput
  | DeleteImageRecipeCommandInput
  | DeleteInfrastructureConfigurationCommandInput
  | DeleteLifecyclePolicyCommandInput
  | DeleteWorkflowCommandInput
  | DistributeImageCommandInput
  | GetComponentCommandInput
  | GetComponentPolicyCommandInput
  | GetContainerRecipeCommandInput
  | GetContainerRecipePolicyCommandInput
  | GetDistributionConfigurationCommandInput
  | GetImageCommandInput
  | GetImagePipelineCommandInput
  | GetImagePolicyCommandInput
  | GetImageRecipeCommandInput
  | GetImageRecipePolicyCommandInput
  | GetInfrastructureConfigurationCommandInput
  | GetLifecycleExecutionCommandInput
  | GetLifecyclePolicyCommandInput
  | GetMarketplaceResourceCommandInput
  | GetWorkflowCommandInput
  | GetWorkflowExecutionCommandInput
  | GetWorkflowStepExecutionCommandInput
  | ImportComponentCommandInput
  | ImportDiskImageCommandInput
  | ImportVmImageCommandInput
  | ListComponentBuildVersionsCommandInput
  | ListComponentsCommandInput
  | ListContainerRecipesCommandInput
  | ListDistributionConfigurationsCommandInput
  | ListImageBuildVersionsCommandInput
  | ListImagePackagesCommandInput
  | ListImagePipelineImagesCommandInput
  | ListImagePipelinesCommandInput
  | ListImageRecipesCommandInput
  | ListImageScanFindingAggregationsCommandInput
  | ListImageScanFindingsCommandInput
  | ListImagesCommandInput
  | ListInfrastructureConfigurationsCommandInput
  | ListLifecycleExecutionResourcesCommandInput
  | ListLifecycleExecutionsCommandInput
  | ListLifecyclePoliciesCommandInput
  | ListTagsForResourceCommandInput
  | ListWaitingWorkflowStepsCommandInput
  | ListWorkflowBuildVersionsCommandInput
  | ListWorkflowExecutionsCommandInput
  | ListWorkflowStepExecutionsCommandInput
  | ListWorkflowsCommandInput
  | PutComponentPolicyCommandInput
  | PutContainerRecipePolicyCommandInput
  | PutImagePolicyCommandInput
  | PutImageRecipePolicyCommandInput
  | RetryImageCommandInput
  | SendWorkflowStepActionCommandInput
  | StartImagePipelineExecutionCommandInput
  | StartResourceStateUpdateCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateDistributionConfigurationCommandInput
  | UpdateImagePipelineCommandInput
  | UpdateInfrastructureConfigurationCommandInput
  | UpdateLifecyclePolicyCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | CancelImageCreationCommandOutput
  | CancelLifecycleExecutionCommandOutput
  | CreateComponentCommandOutput
  | CreateContainerRecipeCommandOutput
  | CreateDistributionConfigurationCommandOutput
  | CreateImageCommandOutput
  | CreateImagePipelineCommandOutput
  | CreateImageRecipeCommandOutput
  | CreateInfrastructureConfigurationCommandOutput
  | CreateLifecyclePolicyCommandOutput
  | CreateWorkflowCommandOutput
  | DeleteComponentCommandOutput
  | DeleteContainerRecipeCommandOutput
  | DeleteDistributionConfigurationCommandOutput
  | DeleteImageCommandOutput
  | DeleteImagePipelineCommandOutput
  | DeleteImageRecipeCommandOutput
  | DeleteInfrastructureConfigurationCommandOutput
  | DeleteLifecyclePolicyCommandOutput
  | DeleteWorkflowCommandOutput
  | DistributeImageCommandOutput
  | GetComponentCommandOutput
  | GetComponentPolicyCommandOutput
  | GetContainerRecipeCommandOutput
  | GetContainerRecipePolicyCommandOutput
  | GetDistributionConfigurationCommandOutput
  | GetImageCommandOutput
  | GetImagePipelineCommandOutput
  | GetImagePolicyCommandOutput
  | GetImageRecipeCommandOutput
  | GetImageRecipePolicyCommandOutput
  | GetInfrastructureConfigurationCommandOutput
  | GetLifecycleExecutionCommandOutput
  | GetLifecyclePolicyCommandOutput
  | GetMarketplaceResourceCommandOutput
  | GetWorkflowCommandOutput
  | GetWorkflowExecutionCommandOutput
  | GetWorkflowStepExecutionCommandOutput
  | ImportComponentCommandOutput
  | ImportDiskImageCommandOutput
  | ImportVmImageCommandOutput
  | ListComponentBuildVersionsCommandOutput
  | ListComponentsCommandOutput
  | ListContainerRecipesCommandOutput
  | ListDistributionConfigurationsCommandOutput
  | ListImageBuildVersionsCommandOutput
  | ListImagePackagesCommandOutput
  | ListImagePipelineImagesCommandOutput
  | ListImagePipelinesCommandOutput
  | ListImageRecipesCommandOutput
  | ListImageScanFindingAggregationsCommandOutput
  | ListImageScanFindingsCommandOutput
  | ListImagesCommandOutput
  | ListInfrastructureConfigurationsCommandOutput
  | ListLifecycleExecutionResourcesCommandOutput
  | ListLifecycleExecutionsCommandOutput
  | ListLifecyclePoliciesCommandOutput
  | ListTagsForResourceCommandOutput
  | ListWaitingWorkflowStepsCommandOutput
  | ListWorkflowBuildVersionsCommandOutput
  | ListWorkflowExecutionsCommandOutput
  | ListWorkflowStepExecutionsCommandOutput
  | ListWorkflowsCommandOutput
  | PutComponentPolicyCommandOutput
  | PutContainerRecipePolicyCommandOutput
  | PutImagePolicyCommandOutput
  | PutImageRecipePolicyCommandOutput
  | RetryImageCommandOutput
  | SendWorkflowStepActionCommandOutput
  | StartImagePipelineExecutionCommandOutput
  | StartResourceStateUpdateCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateDistributionConfigurationCommandOutput
  | UpdateImagePipelineCommandOutput
  | UpdateInfrastructureConfigurationCommandOutput
  | UpdateLifecyclePolicyCommandOutput;

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
  defaultUserAgentProvider?: Provider<__UserAgent>;

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
export type ImagebuilderClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of ImagebuilderClient class constructor that set the region, credentials and other options.
 */
export interface ImagebuilderClientConfig extends ImagebuilderClientConfigType {}

/**
 * @public
 */
export type ImagebuilderClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of ImagebuilderClient class. This is resolved and normalized from the {@link ImagebuilderClientConfig | constructor configuration interface}.
 */
export interface ImagebuilderClientResolvedConfig extends ImagebuilderClientResolvedConfigType {}

/**
 * <p>EC2 Image Builder is a fully managed Amazon Web Services service that makes it easier to automate the
 * 			creation, management, and deployment of customized, secure, and up-to-date
 * 			"golden" server images that are pre-installed and pre-configured with software
 * 			and settings to meet specific IT standards.</p>
 * @public
 */
export class ImagebuilderClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ImagebuilderClientResolvedConfig
> {
  /**
   * The resolved configuration of ImagebuilderClient class. This is resolved and normalized from the {@link ImagebuilderClientConfig | constructor configuration interface}.
   */
  readonly config: ImagebuilderClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<ImagebuilderClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultImagebuilderHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: ImagebuilderClientResolvedConfig) =>
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
