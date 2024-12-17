// smithy-typescript generated code
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/middleware-endpoint";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@smithy/middleware-retry";
import { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  defaultBedrockHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  BatchDeleteEvaluationJobCommandInput,
  BatchDeleteEvaluationJobCommandOutput,
} from "./commands/BatchDeleteEvaluationJobCommand";
import {
  CreateEvaluationJobCommandInput,
  CreateEvaluationJobCommandOutput,
} from "./commands/CreateEvaluationJobCommand";
import { CreateGuardrailCommandInput, CreateGuardrailCommandOutput } from "./commands/CreateGuardrailCommand";
import {
  CreateGuardrailVersionCommandInput,
  CreateGuardrailVersionCommandOutput,
} from "./commands/CreateGuardrailVersionCommand";
import {
  CreateInferenceProfileCommandInput,
  CreateInferenceProfileCommandOutput,
} from "./commands/CreateInferenceProfileCommand";
import {
  CreateMarketplaceModelEndpointCommandInput,
  CreateMarketplaceModelEndpointCommandOutput,
} from "./commands/CreateMarketplaceModelEndpointCommand";
import { CreateModelCopyJobCommandInput, CreateModelCopyJobCommandOutput } from "./commands/CreateModelCopyJobCommand";
import {
  CreateModelCustomizationJobCommandInput,
  CreateModelCustomizationJobCommandOutput,
} from "./commands/CreateModelCustomizationJobCommand";
import {
  CreateModelImportJobCommandInput,
  CreateModelImportJobCommandOutput,
} from "./commands/CreateModelImportJobCommand";
import {
  CreateModelInvocationJobCommandInput,
  CreateModelInvocationJobCommandOutput,
} from "./commands/CreateModelInvocationJobCommand";
import {
  CreateProvisionedModelThroughputCommandInput,
  CreateProvisionedModelThroughputCommandOutput,
} from "./commands/CreateProvisionedModelThroughputCommand";
import { DeleteCustomModelCommandInput, DeleteCustomModelCommandOutput } from "./commands/DeleteCustomModelCommand";
import { DeleteGuardrailCommandInput, DeleteGuardrailCommandOutput } from "./commands/DeleteGuardrailCommand";
import {
  DeleteImportedModelCommandInput,
  DeleteImportedModelCommandOutput,
} from "./commands/DeleteImportedModelCommand";
import {
  DeleteInferenceProfileCommandInput,
  DeleteInferenceProfileCommandOutput,
} from "./commands/DeleteInferenceProfileCommand";
import {
  DeleteMarketplaceModelEndpointCommandInput,
  DeleteMarketplaceModelEndpointCommandOutput,
} from "./commands/DeleteMarketplaceModelEndpointCommand";
import {
  DeleteModelInvocationLoggingConfigurationCommandInput,
  DeleteModelInvocationLoggingConfigurationCommandOutput,
} from "./commands/DeleteModelInvocationLoggingConfigurationCommand";
import {
  DeleteProvisionedModelThroughputCommandInput,
  DeleteProvisionedModelThroughputCommandOutput,
} from "./commands/DeleteProvisionedModelThroughputCommand";
import {
  DeregisterMarketplaceModelEndpointCommandInput,
  DeregisterMarketplaceModelEndpointCommandOutput,
} from "./commands/DeregisterMarketplaceModelEndpointCommand";
import { GetCustomModelCommandInput, GetCustomModelCommandOutput } from "./commands/GetCustomModelCommand";
import { GetEvaluationJobCommandInput, GetEvaluationJobCommandOutput } from "./commands/GetEvaluationJobCommand";
import { GetFoundationModelCommandInput, GetFoundationModelCommandOutput } from "./commands/GetFoundationModelCommand";
import { GetGuardrailCommandInput, GetGuardrailCommandOutput } from "./commands/GetGuardrailCommand";
import { GetImportedModelCommandInput, GetImportedModelCommandOutput } from "./commands/GetImportedModelCommand";
import {
  GetInferenceProfileCommandInput,
  GetInferenceProfileCommandOutput,
} from "./commands/GetInferenceProfileCommand";
import {
  GetMarketplaceModelEndpointCommandInput,
  GetMarketplaceModelEndpointCommandOutput,
} from "./commands/GetMarketplaceModelEndpointCommand";
import { GetModelCopyJobCommandInput, GetModelCopyJobCommandOutput } from "./commands/GetModelCopyJobCommand";
import {
  GetModelCustomizationJobCommandInput,
  GetModelCustomizationJobCommandOutput,
} from "./commands/GetModelCustomizationJobCommand";
import { GetModelImportJobCommandInput, GetModelImportJobCommandOutput } from "./commands/GetModelImportJobCommand";
import {
  GetModelInvocationJobCommandInput,
  GetModelInvocationJobCommandOutput,
} from "./commands/GetModelInvocationJobCommand";
import {
  GetModelInvocationLoggingConfigurationCommandInput,
  GetModelInvocationLoggingConfigurationCommandOutput,
} from "./commands/GetModelInvocationLoggingConfigurationCommand";
import { GetPromptRouterCommandInput, GetPromptRouterCommandOutput } from "./commands/GetPromptRouterCommand";
import {
  GetProvisionedModelThroughputCommandInput,
  GetProvisionedModelThroughputCommandOutput,
} from "./commands/GetProvisionedModelThroughputCommand";
import { ListCustomModelsCommandInput, ListCustomModelsCommandOutput } from "./commands/ListCustomModelsCommand";
import { ListEvaluationJobsCommandInput, ListEvaluationJobsCommandOutput } from "./commands/ListEvaluationJobsCommand";
import {
  ListFoundationModelsCommandInput,
  ListFoundationModelsCommandOutput,
} from "./commands/ListFoundationModelsCommand";
import { ListGuardrailsCommandInput, ListGuardrailsCommandOutput } from "./commands/ListGuardrailsCommand";
import { ListImportedModelsCommandInput, ListImportedModelsCommandOutput } from "./commands/ListImportedModelsCommand";
import {
  ListInferenceProfilesCommandInput,
  ListInferenceProfilesCommandOutput,
} from "./commands/ListInferenceProfilesCommand";
import {
  ListMarketplaceModelEndpointsCommandInput,
  ListMarketplaceModelEndpointsCommandOutput,
} from "./commands/ListMarketplaceModelEndpointsCommand";
import { ListModelCopyJobsCommandInput, ListModelCopyJobsCommandOutput } from "./commands/ListModelCopyJobsCommand";
import {
  ListModelCustomizationJobsCommandInput,
  ListModelCustomizationJobsCommandOutput,
} from "./commands/ListModelCustomizationJobsCommand";
import {
  ListModelImportJobsCommandInput,
  ListModelImportJobsCommandOutput,
} from "./commands/ListModelImportJobsCommand";
import {
  ListModelInvocationJobsCommandInput,
  ListModelInvocationJobsCommandOutput,
} from "./commands/ListModelInvocationJobsCommand";
import { ListPromptRoutersCommandInput, ListPromptRoutersCommandOutput } from "./commands/ListPromptRoutersCommand";
import {
  ListProvisionedModelThroughputsCommandInput,
  ListProvisionedModelThroughputsCommandOutput,
} from "./commands/ListProvisionedModelThroughputsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutModelInvocationLoggingConfigurationCommandInput,
  PutModelInvocationLoggingConfigurationCommandOutput,
} from "./commands/PutModelInvocationLoggingConfigurationCommand";
import {
  RegisterMarketplaceModelEndpointCommandInput,
  RegisterMarketplaceModelEndpointCommandOutput,
} from "./commands/RegisterMarketplaceModelEndpointCommand";
import { StopEvaluationJobCommandInput, StopEvaluationJobCommandOutput } from "./commands/StopEvaluationJobCommand";
import {
  StopModelCustomizationJobCommandInput,
  StopModelCustomizationJobCommandOutput,
} from "./commands/StopModelCustomizationJobCommand";
import {
  StopModelInvocationJobCommandInput,
  StopModelInvocationJobCommandOutput,
} from "./commands/StopModelInvocationJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateGuardrailCommandInput, UpdateGuardrailCommandOutput } from "./commands/UpdateGuardrailCommand";
import {
  UpdateMarketplaceModelEndpointCommandInput,
  UpdateMarketplaceModelEndpointCommandOutput,
} from "./commands/UpdateMarketplaceModelEndpointCommand";
import {
  UpdateProvisionedModelThroughputCommandInput,
  UpdateProvisionedModelThroughputCommandOutput,
} from "./commands/UpdateProvisionedModelThroughputCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { resolveRuntimeExtensions, RuntimeExtension, RuntimeExtensionsConfig } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | BatchDeleteEvaluationJobCommandInput
  | CreateEvaluationJobCommandInput
  | CreateGuardrailCommandInput
  | CreateGuardrailVersionCommandInput
  | CreateInferenceProfileCommandInput
  | CreateMarketplaceModelEndpointCommandInput
  | CreateModelCopyJobCommandInput
  | CreateModelCustomizationJobCommandInput
  | CreateModelImportJobCommandInput
  | CreateModelInvocationJobCommandInput
  | CreateProvisionedModelThroughputCommandInput
  | DeleteCustomModelCommandInput
  | DeleteGuardrailCommandInput
  | DeleteImportedModelCommandInput
  | DeleteInferenceProfileCommandInput
  | DeleteMarketplaceModelEndpointCommandInput
  | DeleteModelInvocationLoggingConfigurationCommandInput
  | DeleteProvisionedModelThroughputCommandInput
  | DeregisterMarketplaceModelEndpointCommandInput
  | GetCustomModelCommandInput
  | GetEvaluationJobCommandInput
  | GetFoundationModelCommandInput
  | GetGuardrailCommandInput
  | GetImportedModelCommandInput
  | GetInferenceProfileCommandInput
  | GetMarketplaceModelEndpointCommandInput
  | GetModelCopyJobCommandInput
  | GetModelCustomizationJobCommandInput
  | GetModelImportJobCommandInput
  | GetModelInvocationJobCommandInput
  | GetModelInvocationLoggingConfigurationCommandInput
  | GetPromptRouterCommandInput
  | GetProvisionedModelThroughputCommandInput
  | ListCustomModelsCommandInput
  | ListEvaluationJobsCommandInput
  | ListFoundationModelsCommandInput
  | ListGuardrailsCommandInput
  | ListImportedModelsCommandInput
  | ListInferenceProfilesCommandInput
  | ListMarketplaceModelEndpointsCommandInput
  | ListModelCopyJobsCommandInput
  | ListModelCustomizationJobsCommandInput
  | ListModelImportJobsCommandInput
  | ListModelInvocationJobsCommandInput
  | ListPromptRoutersCommandInput
  | ListProvisionedModelThroughputsCommandInput
  | ListTagsForResourceCommandInput
  | PutModelInvocationLoggingConfigurationCommandInput
  | RegisterMarketplaceModelEndpointCommandInput
  | StopEvaluationJobCommandInput
  | StopModelCustomizationJobCommandInput
  | StopModelInvocationJobCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateGuardrailCommandInput
  | UpdateMarketplaceModelEndpointCommandInput
  | UpdateProvisionedModelThroughputCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | BatchDeleteEvaluationJobCommandOutput
  | CreateEvaluationJobCommandOutput
  | CreateGuardrailCommandOutput
  | CreateGuardrailVersionCommandOutput
  | CreateInferenceProfileCommandOutput
  | CreateMarketplaceModelEndpointCommandOutput
  | CreateModelCopyJobCommandOutput
  | CreateModelCustomizationJobCommandOutput
  | CreateModelImportJobCommandOutput
  | CreateModelInvocationJobCommandOutput
  | CreateProvisionedModelThroughputCommandOutput
  | DeleteCustomModelCommandOutput
  | DeleteGuardrailCommandOutput
  | DeleteImportedModelCommandOutput
  | DeleteInferenceProfileCommandOutput
  | DeleteMarketplaceModelEndpointCommandOutput
  | DeleteModelInvocationLoggingConfigurationCommandOutput
  | DeleteProvisionedModelThroughputCommandOutput
  | DeregisterMarketplaceModelEndpointCommandOutput
  | GetCustomModelCommandOutput
  | GetEvaluationJobCommandOutput
  | GetFoundationModelCommandOutput
  | GetGuardrailCommandOutput
  | GetImportedModelCommandOutput
  | GetInferenceProfileCommandOutput
  | GetMarketplaceModelEndpointCommandOutput
  | GetModelCopyJobCommandOutput
  | GetModelCustomizationJobCommandOutput
  | GetModelImportJobCommandOutput
  | GetModelInvocationJobCommandOutput
  | GetModelInvocationLoggingConfigurationCommandOutput
  | GetPromptRouterCommandOutput
  | GetProvisionedModelThroughputCommandOutput
  | ListCustomModelsCommandOutput
  | ListEvaluationJobsCommandOutput
  | ListFoundationModelsCommandOutput
  | ListGuardrailsCommandOutput
  | ListImportedModelsCommandOutput
  | ListInferenceProfilesCommandOutput
  | ListMarketplaceModelEndpointsCommandOutput
  | ListModelCopyJobsCommandOutput
  | ListModelCustomizationJobsCommandOutput
  | ListModelImportJobsCommandOutput
  | ListModelInvocationJobsCommandOutput
  | ListPromptRoutersCommandOutput
  | ListProvisionedModelThroughputsCommandOutput
  | ListTagsForResourceCommandOutput
  | PutModelInvocationLoggingConfigurationCommandOutput
  | RegisterMarketplaceModelEndpointCommandOutput
  | StopEvaluationJobCommandOutput
  | StopModelCustomizationJobCommandOutput
  | StopModelInvocationJobCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateGuardrailCommandOutput
  | UpdateMarketplaceModelEndpointCommandOutput
  | UpdateProvisionedModelThroughputCommandOutput;

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
export type BedrockClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of BedrockClient class constructor that set the region, credentials and other options.
 */
export interface BedrockClientConfig extends BedrockClientConfigType {}

/**
 * @public
 */
export type BedrockClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of BedrockClient class. This is resolved and normalized from the {@link BedrockClientConfig | constructor configuration interface}.
 */
export interface BedrockClientResolvedConfig extends BedrockClientResolvedConfigType {}

/**
 * <p>Describes the API operations for creating, managing, fine-turning, and evaluating Amazon Bedrock models.</p>
 * @public
 */
export class BedrockClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  BedrockClientResolvedConfig
> {
  /**
   * The resolved configuration of BedrockClient class. This is resolved and normalized from the {@link BedrockClientConfig | constructor configuration interface}.
   */
  readonly config: BedrockClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<BedrockClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    super(_config_8);
    this.config = _config_8;
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultBedrockHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: BedrockClientResolvedConfig) =>
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
