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
  defaultCleanRoomsMLHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import { CancelTrainedModelCommandInput, CancelTrainedModelCommandOutput } from "./commands/CancelTrainedModelCommand";
import {
  CancelTrainedModelInferenceJobCommandInput,
  CancelTrainedModelInferenceJobCommandOutput,
} from "./commands/CancelTrainedModelInferenceJobCommand";
import {
  CreateAudienceModelCommandInput,
  CreateAudienceModelCommandOutput,
} from "./commands/CreateAudienceModelCommand";
import {
  CreateConfiguredAudienceModelCommandInput,
  CreateConfiguredAudienceModelCommandOutput,
} from "./commands/CreateConfiguredAudienceModelCommand";
import {
  CreateConfiguredModelAlgorithmAssociationCommandInput,
  CreateConfiguredModelAlgorithmAssociationCommandOutput,
} from "./commands/CreateConfiguredModelAlgorithmAssociationCommand";
import {
  CreateConfiguredModelAlgorithmCommandInput,
  CreateConfiguredModelAlgorithmCommandOutput,
} from "./commands/CreateConfiguredModelAlgorithmCommand";
import {
  CreateMLInputChannelCommandInput,
  CreateMLInputChannelCommandOutput,
} from "./commands/CreateMLInputChannelCommand";
import { CreateTrainedModelCommandInput, CreateTrainedModelCommandOutput } from "./commands/CreateTrainedModelCommand";
import {
  CreateTrainingDatasetCommandInput,
  CreateTrainingDatasetCommandOutput,
} from "./commands/CreateTrainingDatasetCommand";
import {
  DeleteAudienceGenerationJobCommandInput,
  DeleteAudienceGenerationJobCommandOutput,
} from "./commands/DeleteAudienceGenerationJobCommand";
import {
  DeleteAudienceModelCommandInput,
  DeleteAudienceModelCommandOutput,
} from "./commands/DeleteAudienceModelCommand";
import {
  DeleteConfiguredAudienceModelCommandInput,
  DeleteConfiguredAudienceModelCommandOutput,
} from "./commands/DeleteConfiguredAudienceModelCommand";
import {
  DeleteConfiguredAudienceModelPolicyCommandInput,
  DeleteConfiguredAudienceModelPolicyCommandOutput,
} from "./commands/DeleteConfiguredAudienceModelPolicyCommand";
import {
  DeleteConfiguredModelAlgorithmAssociationCommandInput,
  DeleteConfiguredModelAlgorithmAssociationCommandOutput,
} from "./commands/DeleteConfiguredModelAlgorithmAssociationCommand";
import {
  DeleteConfiguredModelAlgorithmCommandInput,
  DeleteConfiguredModelAlgorithmCommandOutput,
} from "./commands/DeleteConfiguredModelAlgorithmCommand";
import {
  DeleteMLConfigurationCommandInput,
  DeleteMLConfigurationCommandOutput,
} from "./commands/DeleteMLConfigurationCommand";
import {
  DeleteMLInputChannelDataCommandInput,
  DeleteMLInputChannelDataCommandOutput,
} from "./commands/DeleteMLInputChannelDataCommand";
import {
  DeleteTrainedModelOutputCommandInput,
  DeleteTrainedModelOutputCommandOutput,
} from "./commands/DeleteTrainedModelOutputCommand";
import {
  DeleteTrainingDatasetCommandInput,
  DeleteTrainingDatasetCommandOutput,
} from "./commands/DeleteTrainingDatasetCommand";
import {
  GetAudienceGenerationJobCommandInput,
  GetAudienceGenerationJobCommandOutput,
} from "./commands/GetAudienceGenerationJobCommand";
import { GetAudienceModelCommandInput, GetAudienceModelCommandOutput } from "./commands/GetAudienceModelCommand";
import {
  GetCollaborationConfiguredModelAlgorithmAssociationCommandInput,
  GetCollaborationConfiguredModelAlgorithmAssociationCommandOutput,
} from "./commands/GetCollaborationConfiguredModelAlgorithmAssociationCommand";
import {
  GetCollaborationMLInputChannelCommandInput,
  GetCollaborationMLInputChannelCommandOutput,
} from "./commands/GetCollaborationMLInputChannelCommand";
import {
  GetCollaborationTrainedModelCommandInput,
  GetCollaborationTrainedModelCommandOutput,
} from "./commands/GetCollaborationTrainedModelCommand";
import {
  GetConfiguredAudienceModelCommandInput,
  GetConfiguredAudienceModelCommandOutput,
} from "./commands/GetConfiguredAudienceModelCommand";
import {
  GetConfiguredAudienceModelPolicyCommandInput,
  GetConfiguredAudienceModelPolicyCommandOutput,
} from "./commands/GetConfiguredAudienceModelPolicyCommand";
import {
  GetConfiguredModelAlgorithmAssociationCommandInput,
  GetConfiguredModelAlgorithmAssociationCommandOutput,
} from "./commands/GetConfiguredModelAlgorithmAssociationCommand";
import {
  GetConfiguredModelAlgorithmCommandInput,
  GetConfiguredModelAlgorithmCommandOutput,
} from "./commands/GetConfiguredModelAlgorithmCommand";
import { GetMLConfigurationCommandInput, GetMLConfigurationCommandOutput } from "./commands/GetMLConfigurationCommand";
import { GetMLInputChannelCommandInput, GetMLInputChannelCommandOutput } from "./commands/GetMLInputChannelCommand";
import { GetTrainedModelCommandInput, GetTrainedModelCommandOutput } from "./commands/GetTrainedModelCommand";
import {
  GetTrainedModelInferenceJobCommandInput,
  GetTrainedModelInferenceJobCommandOutput,
} from "./commands/GetTrainedModelInferenceJobCommand";
import { GetTrainingDatasetCommandInput, GetTrainingDatasetCommandOutput } from "./commands/GetTrainingDatasetCommand";
import {
  ListAudienceExportJobsCommandInput,
  ListAudienceExportJobsCommandOutput,
} from "./commands/ListAudienceExportJobsCommand";
import {
  ListAudienceGenerationJobsCommandInput,
  ListAudienceGenerationJobsCommandOutput,
} from "./commands/ListAudienceGenerationJobsCommand";
import { ListAudienceModelsCommandInput, ListAudienceModelsCommandOutput } from "./commands/ListAudienceModelsCommand";
import {
  ListCollaborationConfiguredModelAlgorithmAssociationsCommandInput,
  ListCollaborationConfiguredModelAlgorithmAssociationsCommandOutput,
} from "./commands/ListCollaborationConfiguredModelAlgorithmAssociationsCommand";
import {
  ListCollaborationMLInputChannelsCommandInput,
  ListCollaborationMLInputChannelsCommandOutput,
} from "./commands/ListCollaborationMLInputChannelsCommand";
import {
  ListCollaborationTrainedModelExportJobsCommandInput,
  ListCollaborationTrainedModelExportJobsCommandOutput,
} from "./commands/ListCollaborationTrainedModelExportJobsCommand";
import {
  ListCollaborationTrainedModelInferenceJobsCommandInput,
  ListCollaborationTrainedModelInferenceJobsCommandOutput,
} from "./commands/ListCollaborationTrainedModelInferenceJobsCommand";
import {
  ListCollaborationTrainedModelsCommandInput,
  ListCollaborationTrainedModelsCommandOutput,
} from "./commands/ListCollaborationTrainedModelsCommand";
import {
  ListConfiguredAudienceModelsCommandInput,
  ListConfiguredAudienceModelsCommandOutput,
} from "./commands/ListConfiguredAudienceModelsCommand";
import {
  ListConfiguredModelAlgorithmAssociationsCommandInput,
  ListConfiguredModelAlgorithmAssociationsCommandOutput,
} from "./commands/ListConfiguredModelAlgorithmAssociationsCommand";
import {
  ListConfiguredModelAlgorithmsCommandInput,
  ListConfiguredModelAlgorithmsCommandOutput,
} from "./commands/ListConfiguredModelAlgorithmsCommand";
import {
  ListMLInputChannelsCommandInput,
  ListMLInputChannelsCommandOutput,
} from "./commands/ListMLInputChannelsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTrainedModelInferenceJobsCommandInput,
  ListTrainedModelInferenceJobsCommandOutput,
} from "./commands/ListTrainedModelInferenceJobsCommand";
import { ListTrainedModelsCommandInput, ListTrainedModelsCommandOutput } from "./commands/ListTrainedModelsCommand";
import {
  ListTrainingDatasetsCommandInput,
  ListTrainingDatasetsCommandOutput,
} from "./commands/ListTrainingDatasetsCommand";
import {
  PutConfiguredAudienceModelPolicyCommandInput,
  PutConfiguredAudienceModelPolicyCommandOutput,
} from "./commands/PutConfiguredAudienceModelPolicyCommand";
import { PutMLConfigurationCommandInput, PutMLConfigurationCommandOutput } from "./commands/PutMLConfigurationCommand";
import {
  StartAudienceExportJobCommandInput,
  StartAudienceExportJobCommandOutput,
} from "./commands/StartAudienceExportJobCommand";
import {
  StartAudienceGenerationJobCommandInput,
  StartAudienceGenerationJobCommandOutput,
} from "./commands/StartAudienceGenerationJobCommand";
import {
  StartTrainedModelExportJobCommandInput,
  StartTrainedModelExportJobCommandOutput,
} from "./commands/StartTrainedModelExportJobCommand";
import {
  StartTrainedModelInferenceJobCommandInput,
  StartTrainedModelInferenceJobCommandOutput,
} from "./commands/StartTrainedModelInferenceJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateConfiguredAudienceModelCommandInput,
  UpdateConfiguredAudienceModelCommandOutput,
} from "./commands/UpdateConfiguredAudienceModelCommand";
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
  | CancelTrainedModelCommandInput
  | CancelTrainedModelInferenceJobCommandInput
  | CreateAudienceModelCommandInput
  | CreateConfiguredAudienceModelCommandInput
  | CreateConfiguredModelAlgorithmAssociationCommandInput
  | CreateConfiguredModelAlgorithmCommandInput
  | CreateMLInputChannelCommandInput
  | CreateTrainedModelCommandInput
  | CreateTrainingDatasetCommandInput
  | DeleteAudienceGenerationJobCommandInput
  | DeleteAudienceModelCommandInput
  | DeleteConfiguredAudienceModelCommandInput
  | DeleteConfiguredAudienceModelPolicyCommandInput
  | DeleteConfiguredModelAlgorithmAssociationCommandInput
  | DeleteConfiguredModelAlgorithmCommandInput
  | DeleteMLConfigurationCommandInput
  | DeleteMLInputChannelDataCommandInput
  | DeleteTrainedModelOutputCommandInput
  | DeleteTrainingDatasetCommandInput
  | GetAudienceGenerationJobCommandInput
  | GetAudienceModelCommandInput
  | GetCollaborationConfiguredModelAlgorithmAssociationCommandInput
  | GetCollaborationMLInputChannelCommandInput
  | GetCollaborationTrainedModelCommandInput
  | GetConfiguredAudienceModelCommandInput
  | GetConfiguredAudienceModelPolicyCommandInput
  | GetConfiguredModelAlgorithmAssociationCommandInput
  | GetConfiguredModelAlgorithmCommandInput
  | GetMLConfigurationCommandInput
  | GetMLInputChannelCommandInput
  | GetTrainedModelCommandInput
  | GetTrainedModelInferenceJobCommandInput
  | GetTrainingDatasetCommandInput
  | ListAudienceExportJobsCommandInput
  | ListAudienceGenerationJobsCommandInput
  | ListAudienceModelsCommandInput
  | ListCollaborationConfiguredModelAlgorithmAssociationsCommandInput
  | ListCollaborationMLInputChannelsCommandInput
  | ListCollaborationTrainedModelExportJobsCommandInput
  | ListCollaborationTrainedModelInferenceJobsCommandInput
  | ListCollaborationTrainedModelsCommandInput
  | ListConfiguredAudienceModelsCommandInput
  | ListConfiguredModelAlgorithmAssociationsCommandInput
  | ListConfiguredModelAlgorithmsCommandInput
  | ListMLInputChannelsCommandInput
  | ListTagsForResourceCommandInput
  | ListTrainedModelInferenceJobsCommandInput
  | ListTrainedModelsCommandInput
  | ListTrainingDatasetsCommandInput
  | PutConfiguredAudienceModelPolicyCommandInput
  | PutMLConfigurationCommandInput
  | StartAudienceExportJobCommandInput
  | StartAudienceGenerationJobCommandInput
  | StartTrainedModelExportJobCommandInput
  | StartTrainedModelInferenceJobCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateConfiguredAudienceModelCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | CancelTrainedModelCommandOutput
  | CancelTrainedModelInferenceJobCommandOutput
  | CreateAudienceModelCommandOutput
  | CreateConfiguredAudienceModelCommandOutput
  | CreateConfiguredModelAlgorithmAssociationCommandOutput
  | CreateConfiguredModelAlgorithmCommandOutput
  | CreateMLInputChannelCommandOutput
  | CreateTrainedModelCommandOutput
  | CreateTrainingDatasetCommandOutput
  | DeleteAudienceGenerationJobCommandOutput
  | DeleteAudienceModelCommandOutput
  | DeleteConfiguredAudienceModelCommandOutput
  | DeleteConfiguredAudienceModelPolicyCommandOutput
  | DeleteConfiguredModelAlgorithmAssociationCommandOutput
  | DeleteConfiguredModelAlgorithmCommandOutput
  | DeleteMLConfigurationCommandOutput
  | DeleteMLInputChannelDataCommandOutput
  | DeleteTrainedModelOutputCommandOutput
  | DeleteTrainingDatasetCommandOutput
  | GetAudienceGenerationJobCommandOutput
  | GetAudienceModelCommandOutput
  | GetCollaborationConfiguredModelAlgorithmAssociationCommandOutput
  | GetCollaborationMLInputChannelCommandOutput
  | GetCollaborationTrainedModelCommandOutput
  | GetConfiguredAudienceModelCommandOutput
  | GetConfiguredAudienceModelPolicyCommandOutput
  | GetConfiguredModelAlgorithmAssociationCommandOutput
  | GetConfiguredModelAlgorithmCommandOutput
  | GetMLConfigurationCommandOutput
  | GetMLInputChannelCommandOutput
  | GetTrainedModelCommandOutput
  | GetTrainedModelInferenceJobCommandOutput
  | GetTrainingDatasetCommandOutput
  | ListAudienceExportJobsCommandOutput
  | ListAudienceGenerationJobsCommandOutput
  | ListAudienceModelsCommandOutput
  | ListCollaborationConfiguredModelAlgorithmAssociationsCommandOutput
  | ListCollaborationMLInputChannelsCommandOutput
  | ListCollaborationTrainedModelExportJobsCommandOutput
  | ListCollaborationTrainedModelInferenceJobsCommandOutput
  | ListCollaborationTrainedModelsCommandOutput
  | ListConfiguredAudienceModelsCommandOutput
  | ListConfiguredModelAlgorithmAssociationsCommandOutput
  | ListConfiguredModelAlgorithmsCommandOutput
  | ListMLInputChannelsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTrainedModelInferenceJobsCommandOutput
  | ListTrainedModelsCommandOutput
  | ListTrainingDatasetsCommandOutput
  | PutConfiguredAudienceModelPolicyCommandOutput
  | PutMLConfigurationCommandOutput
  | StartAudienceExportJobCommandOutput
  | StartAudienceGenerationJobCommandOutput
  | StartTrainedModelExportJobCommandOutput
  | StartTrainedModelInferenceJobCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateConfiguredAudienceModelCommandOutput;

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
export type CleanRoomsMLClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of CleanRoomsMLClient class constructor that set the region, credentials and other options.
 */
export interface CleanRoomsMLClientConfig extends CleanRoomsMLClientConfigType {}

/**
 * @public
 */
export type CleanRoomsMLClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of CleanRoomsMLClient class. This is resolved and normalized from the {@link CleanRoomsMLClientConfig | constructor configuration interface}.
 */
export interface CleanRoomsMLClientResolvedConfig extends CleanRoomsMLClientResolvedConfigType {}

/**
 * <p>Welcome to the <i>Amazon Web Services Clean Rooms ML API Reference</i>.</p>
 *          <p>Amazon Web Services Clean Rooms ML provides a privacy-enhancing method for two parties to identify similar users in their data without the need to share their data with each other. The first party brings the training data to Clean Rooms so that they can create and configure an audience model (lookalike model) and associate it with a collaboration. The second party then brings their seed data to Clean Rooms  and generates an audience (lookalike segment) that resembles the training data.</p>
 *          <p>To learn more about Amazon Web Services Clean Rooms ML concepts, procedures, and best practices, see the
 *        <a href="https://docs.aws.amazon.com/clean-rooms/latest/userguide/machine-learning.html">Clean Rooms User Guide</a>.</p>
 *          <p>To learn more about SQL commands, functions, and conditions supported in Clean Rooms, see the
 *        <a href="https://docs.aws.amazon.com/clean-rooms/latest/sql-reference/sql-reference.html">Clean Rooms SQL Reference</a>.</p>
 * @public
 */
export class CleanRoomsMLClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  CleanRoomsMLClientResolvedConfig
> {
  /**
   * The resolved configuration of CleanRoomsMLClient class. This is resolved and normalized from the {@link CleanRoomsMLClientConfig | constructor configuration interface}.
   */
  readonly config: CleanRoomsMLClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<CleanRoomsMLClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultCleanRoomsMLHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: CleanRoomsMLClientResolvedConfig) =>
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
