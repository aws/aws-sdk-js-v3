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
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
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
  DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  RegionInfoProvider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

import {
  BatchEvaluateFeatureCommandInput,
  BatchEvaluateFeatureCommandOutput,
} from "./commands/BatchEvaluateFeatureCommand";
import { CreateExperimentCommandInput, CreateExperimentCommandOutput } from "./commands/CreateExperimentCommand";
import { CreateFeatureCommandInput, CreateFeatureCommandOutput } from "./commands/CreateFeatureCommand";
import { CreateLaunchCommandInput, CreateLaunchCommandOutput } from "./commands/CreateLaunchCommand";
import { CreateProjectCommandInput, CreateProjectCommandOutput } from "./commands/CreateProjectCommand";
import { DeleteExperimentCommandInput, DeleteExperimentCommandOutput } from "./commands/DeleteExperimentCommand";
import { DeleteFeatureCommandInput, DeleteFeatureCommandOutput } from "./commands/DeleteFeatureCommand";
import { DeleteLaunchCommandInput, DeleteLaunchCommandOutput } from "./commands/DeleteLaunchCommand";
import { DeleteProjectCommandInput, DeleteProjectCommandOutput } from "./commands/DeleteProjectCommand";
import { EvaluateFeatureCommandInput, EvaluateFeatureCommandOutput } from "./commands/EvaluateFeatureCommand";
import { GetExperimentCommandInput, GetExperimentCommandOutput } from "./commands/GetExperimentCommand";
import {
  GetExperimentResultsCommandInput,
  GetExperimentResultsCommandOutput,
} from "./commands/GetExperimentResultsCommand";
import { GetFeatureCommandInput, GetFeatureCommandOutput } from "./commands/GetFeatureCommand";
import { GetLaunchCommandInput, GetLaunchCommandOutput } from "./commands/GetLaunchCommand";
import { GetProjectCommandInput, GetProjectCommandOutput } from "./commands/GetProjectCommand";
import { ListExperimentsCommandInput, ListExperimentsCommandOutput } from "./commands/ListExperimentsCommand";
import { ListFeaturesCommandInput, ListFeaturesCommandOutput } from "./commands/ListFeaturesCommand";
import { ListLaunchesCommandInput, ListLaunchesCommandOutput } from "./commands/ListLaunchesCommand";
import { ListProjectsCommandInput, ListProjectsCommandOutput } from "./commands/ListProjectsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { PutProjectEventsCommandInput, PutProjectEventsCommandOutput } from "./commands/PutProjectEventsCommand";
import { StartExperimentCommandInput, StartExperimentCommandOutput } from "./commands/StartExperimentCommand";
import { StartLaunchCommandInput, StartLaunchCommandOutput } from "./commands/StartLaunchCommand";
import { StopExperimentCommandInput, StopExperimentCommandOutput } from "./commands/StopExperimentCommand";
import { StopLaunchCommandInput, StopLaunchCommandOutput } from "./commands/StopLaunchCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateExperimentCommandInput, UpdateExperimentCommandOutput } from "./commands/UpdateExperimentCommand";
import { UpdateFeatureCommandInput, UpdateFeatureCommandOutput } from "./commands/UpdateFeatureCommand";
import { UpdateLaunchCommandInput, UpdateLaunchCommandOutput } from "./commands/UpdateLaunchCommand";
import { UpdateProjectCommandInput, UpdateProjectCommandOutput } from "./commands/UpdateProjectCommand";
import {
  UpdateProjectDataDeliveryCommandInput,
  UpdateProjectDataDeliveryCommandOutput,
} from "./commands/UpdateProjectDataDeliveryCommand";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | BatchEvaluateFeatureCommandInput
  | CreateExperimentCommandInput
  | CreateFeatureCommandInput
  | CreateLaunchCommandInput
  | CreateProjectCommandInput
  | DeleteExperimentCommandInput
  | DeleteFeatureCommandInput
  | DeleteLaunchCommandInput
  | DeleteProjectCommandInput
  | EvaluateFeatureCommandInput
  | GetExperimentCommandInput
  | GetExperimentResultsCommandInput
  | GetFeatureCommandInput
  | GetLaunchCommandInput
  | GetProjectCommandInput
  | ListExperimentsCommandInput
  | ListFeaturesCommandInput
  | ListLaunchesCommandInput
  | ListProjectsCommandInput
  | ListTagsForResourceCommandInput
  | PutProjectEventsCommandInput
  | StartExperimentCommandInput
  | StartLaunchCommandInput
  | StopExperimentCommandInput
  | StopLaunchCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateExperimentCommandInput
  | UpdateFeatureCommandInput
  | UpdateLaunchCommandInput
  | UpdateProjectCommandInput
  | UpdateProjectDataDeliveryCommandInput;

export type ServiceOutputTypes =
  | BatchEvaluateFeatureCommandOutput
  | CreateExperimentCommandOutput
  | CreateFeatureCommandOutput
  | CreateLaunchCommandOutput
  | CreateProjectCommandOutput
  | DeleteExperimentCommandOutput
  | DeleteFeatureCommandOutput
  | DeleteLaunchCommandOutput
  | DeleteProjectCommandOutput
  | EvaluateFeatureCommandOutput
  | GetExperimentCommandOutput
  | GetExperimentResultsCommandOutput
  | GetFeatureCommandOutput
  | GetLaunchCommandOutput
  | GetProjectCommandOutput
  | ListExperimentsCommandOutput
  | ListFeaturesCommandOutput
  | ListLaunchesCommandOutput
  | ListProjectsCommandOutput
  | ListTagsForResourceCommandOutput
  | PutProjectEventsCommandOutput
  | StartExperimentCommandOutput
  | StartLaunchCommandOutput
  | StopExperimentCommandOutput
  | StopLaunchCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateExperimentCommandOutput
  | UpdateFeatureCommandOutput
  | UpdateLaunchCommandOutput
  | UpdateProjectCommandOutput
  | UpdateProjectDataDeliveryCommandOutput;

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
   * Fetch related hostname, signing name or signing region with given region.
   * @internal
   */
  regionInfoProvider?: RegionInfoProvider;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * The {@link DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: DefaultsMode | Provider<DefaultsMode>;
}

type EvidentlyClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of EvidentlyClient class constructor that set the region, credentials and other options.
 */
export interface EvidentlyClientConfig extends EvidentlyClientConfigType {}

type EvidentlyClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of EvidentlyClient class. This is resolved and normalized from the {@link EvidentlyClientConfig | constructor configuration interface}.
 */
export interface EvidentlyClientResolvedConfig extends EvidentlyClientResolvedConfigType {}

/**
 * <p>You can use Amazon CloudWatch Evidently to safely validate new features by serving them to a specified percentage
 *       of your users while you roll out the feature. You can monitor the performance of the new feature
 *       to help you decide when to ramp up traffic to your users. This helps you
 *       reduce risk and identify unintended consequences before you fully launch the feature.</p>
 *          <p>You can also conduct A/B experiments to make feature design decisions based on evidence
 *       and data. An experiment can test as many as five variations at once. Evidently collects
 *       experiment data and analyzes it using statistical methods. It also provides clear
 *       recommendations about which variations perform better. You can test both user-facing features
 *       and backend features.</p>
 */
export class EvidentlyClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  EvidentlyClientResolvedConfig
> {
  /**
   * The resolved configuration of EvidentlyClient class. This is resolved and normalized from the {@link EvidentlyClientConfig | constructor configuration interface}.
   */
  readonly config: EvidentlyClientResolvedConfig;

  constructor(configuration: EvidentlyClientConfig) {
    const _config_0 = __getRuntimeConfig(configuration);
    const _config_1 = resolveRegionConfig(_config_0);
    const _config_2 = resolveEndpointsConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveHostHeaderConfig(_config_3);
    const _config_5 = resolveAwsAuthConfig(_config_4);
    const _config_6 = resolveUserAgentConfig(_config_5);
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
