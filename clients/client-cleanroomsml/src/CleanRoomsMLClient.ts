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
import { Credentials as __Credentials } from "@aws-sdk/types";
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/middleware-endpoint";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@smithy/middleware-retry";
import { HttpHandler as __HttpHandler } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
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
  CreateAudienceModelCommandInput,
  CreateAudienceModelCommandOutput,
} from "./commands/CreateAudienceModelCommand";
import {
  CreateConfiguredAudienceModelCommandInput,
  CreateConfiguredAudienceModelCommandOutput,
} from "./commands/CreateConfiguredAudienceModelCommand";
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
  DeleteTrainingDatasetCommandInput,
  DeleteTrainingDatasetCommandOutput,
} from "./commands/DeleteTrainingDatasetCommand";
import {
  GetAudienceGenerationJobCommandInput,
  GetAudienceGenerationJobCommandOutput,
} from "./commands/GetAudienceGenerationJobCommand";
import { GetAudienceModelCommandInput, GetAudienceModelCommandOutput } from "./commands/GetAudienceModelCommand";
import {
  GetConfiguredAudienceModelCommandInput,
  GetConfiguredAudienceModelCommandOutput,
} from "./commands/GetConfiguredAudienceModelCommand";
import {
  GetConfiguredAudienceModelPolicyCommandInput,
  GetConfiguredAudienceModelPolicyCommandOutput,
} from "./commands/GetConfiguredAudienceModelPolicyCommand";
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
  ListConfiguredAudienceModelsCommandInput,
  ListConfiguredAudienceModelsCommandOutput,
} from "./commands/ListConfiguredAudienceModelsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTrainingDatasetsCommandInput,
  ListTrainingDatasetsCommandOutput,
} from "./commands/ListTrainingDatasetsCommand";
import {
  PutConfiguredAudienceModelPolicyCommandInput,
  PutConfiguredAudienceModelPolicyCommandOutput,
} from "./commands/PutConfiguredAudienceModelPolicyCommand";
import {
  StartAudienceExportJobCommandInput,
  StartAudienceExportJobCommandOutput,
} from "./commands/StartAudienceExportJobCommand";
import {
  StartAudienceGenerationJobCommandInput,
  StartAudienceGenerationJobCommandOutput,
} from "./commands/StartAudienceGenerationJobCommand";
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
  | CreateAudienceModelCommandInput
  | CreateConfiguredAudienceModelCommandInput
  | CreateTrainingDatasetCommandInput
  | DeleteAudienceGenerationJobCommandInput
  | DeleteAudienceModelCommandInput
  | DeleteConfiguredAudienceModelCommandInput
  | DeleteConfiguredAudienceModelPolicyCommandInput
  | DeleteTrainingDatasetCommandInput
  | GetAudienceGenerationJobCommandInput
  | GetAudienceModelCommandInput
  | GetConfiguredAudienceModelCommandInput
  | GetConfiguredAudienceModelPolicyCommandInput
  | GetTrainingDatasetCommandInput
  | ListAudienceExportJobsCommandInput
  | ListAudienceGenerationJobsCommandInput
  | ListAudienceModelsCommandInput
  | ListConfiguredAudienceModelsCommandInput
  | ListTagsForResourceCommandInput
  | ListTrainingDatasetsCommandInput
  | PutConfiguredAudienceModelPolicyCommandInput
  | StartAudienceExportJobCommandInput
  | StartAudienceGenerationJobCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateConfiguredAudienceModelCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | CreateAudienceModelCommandOutput
  | CreateConfiguredAudienceModelCommandOutput
  | CreateTrainingDatasetCommandOutput
  | DeleteAudienceGenerationJobCommandOutput
  | DeleteAudienceModelCommandOutput
  | DeleteConfiguredAudienceModelCommandOutput
  | DeleteConfiguredAudienceModelPolicyCommandOutput
  | DeleteTrainingDatasetCommandOutput
  | GetAudienceGenerationJobCommandOutput
  | GetAudienceModelCommandOutput
  | GetConfiguredAudienceModelCommandOutput
  | GetConfiguredAudienceModelPolicyCommandOutput
  | GetTrainingDatasetCommandOutput
  | ListAudienceExportJobsCommandOutput
  | ListAudienceGenerationJobsCommandOutput
  | ListAudienceModelsCommandOutput
  | ListConfiguredAudienceModelsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTrainingDatasetsCommandOutput
  | PutConfiguredAudienceModelPolicyCommandOutput
  | StartAudienceExportJobCommandOutput
  | StartAudienceGenerationJobCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateConfiguredAudienceModelCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

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
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
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
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of CleanRoomsMLClient class. This is resolved and normalized from the {@link CleanRoomsMLClientConfig | constructor configuration interface}.
 */
export interface CleanRoomsMLClientResolvedConfig extends CleanRoomsMLClientResolvedConfigType {}

/**
 * @public
 * <p>Welcome to the <i>Amazon Web Services Clean Rooms ML API Reference</i>.</p>
 *          <p>Amazon Web Services Clean Rooms ML provides a privacy-enhancing method for two parties to identify similar users in their data without the need to share their data with each other. The first party brings the training data to Clean Rooms so that they can create and configure an audience model (lookalike model) and associate it with a collaboration. The second party then brings their seed data to Clean Rooms  and generates an audience (lookalike segment) that resembles the training data.</p>
 *          <p>To learn more about Amazon Web Services Clean Rooms ML concepts, procedures, and best practices, see the
 *        <a href="https://docs.aws.amazon.com/clean-rooms/latest/userguide/machine-learning.html">Clean Rooms User Guide</a>.</p>
 *          <p>To learn more about SQL commands, functions, and conditions supported in Clean Rooms, see the
 *        <a href="https://docs.aws.amazon.com/clean-rooms/latest/sql-reference/sql-reference.html">Clean Rooms SQL Reference</a>.</p>
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
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveAwsAuthConfig(_config_5);
    const _config_7 = resolveUserAgentConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    super(_config_8);
    this.config = _config_8;
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
