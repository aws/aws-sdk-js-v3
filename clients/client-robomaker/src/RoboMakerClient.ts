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

import { BatchDeleteWorldsCommandInput, BatchDeleteWorldsCommandOutput } from "./commands/BatchDeleteWorldsCommand";
import {
  BatchDescribeSimulationJobCommandInput,
  BatchDescribeSimulationJobCommandOutput,
} from "./commands/BatchDescribeSimulationJobCommand";
import {
  CancelDeploymentJobCommandInput,
  CancelDeploymentJobCommandOutput,
} from "./commands/CancelDeploymentJobCommand";
import {
  CancelSimulationJobBatchCommandInput,
  CancelSimulationJobBatchCommandOutput,
} from "./commands/CancelSimulationJobBatchCommand";
import {
  CancelSimulationJobCommandInput,
  CancelSimulationJobCommandOutput,
} from "./commands/CancelSimulationJobCommand";
import {
  CancelWorldExportJobCommandInput,
  CancelWorldExportJobCommandOutput,
} from "./commands/CancelWorldExportJobCommand";
import {
  CancelWorldGenerationJobCommandInput,
  CancelWorldGenerationJobCommandOutput,
} from "./commands/CancelWorldGenerationJobCommand";
import {
  CreateDeploymentJobCommandInput,
  CreateDeploymentJobCommandOutput,
} from "./commands/CreateDeploymentJobCommand";
import { CreateFleetCommandInput, CreateFleetCommandOutput } from "./commands/CreateFleetCommand";
import {
  CreateRobotApplicationCommandInput,
  CreateRobotApplicationCommandOutput,
} from "./commands/CreateRobotApplicationCommand";
import {
  CreateRobotApplicationVersionCommandInput,
  CreateRobotApplicationVersionCommandOutput,
} from "./commands/CreateRobotApplicationVersionCommand";
import { CreateRobotCommandInput, CreateRobotCommandOutput } from "./commands/CreateRobotCommand";
import {
  CreateSimulationApplicationCommandInput,
  CreateSimulationApplicationCommandOutput,
} from "./commands/CreateSimulationApplicationCommand";
import {
  CreateSimulationApplicationVersionCommandInput,
  CreateSimulationApplicationVersionCommandOutput,
} from "./commands/CreateSimulationApplicationVersionCommand";
import {
  CreateSimulationJobCommandInput,
  CreateSimulationJobCommandOutput,
} from "./commands/CreateSimulationJobCommand";
import {
  CreateWorldExportJobCommandInput,
  CreateWorldExportJobCommandOutput,
} from "./commands/CreateWorldExportJobCommand";
import {
  CreateWorldGenerationJobCommandInput,
  CreateWorldGenerationJobCommandOutput,
} from "./commands/CreateWorldGenerationJobCommand";
import {
  CreateWorldTemplateCommandInput,
  CreateWorldTemplateCommandOutput,
} from "./commands/CreateWorldTemplateCommand";
import { DeleteFleetCommandInput, DeleteFleetCommandOutput } from "./commands/DeleteFleetCommand";
import {
  DeleteRobotApplicationCommandInput,
  DeleteRobotApplicationCommandOutput,
} from "./commands/DeleteRobotApplicationCommand";
import { DeleteRobotCommandInput, DeleteRobotCommandOutput } from "./commands/DeleteRobotCommand";
import {
  DeleteSimulationApplicationCommandInput,
  DeleteSimulationApplicationCommandOutput,
} from "./commands/DeleteSimulationApplicationCommand";
import {
  DeleteWorldTemplateCommandInput,
  DeleteWorldTemplateCommandOutput,
} from "./commands/DeleteWorldTemplateCommand";
import { DeregisterRobotCommandInput, DeregisterRobotCommandOutput } from "./commands/DeregisterRobotCommand";
import {
  DescribeDeploymentJobCommandInput,
  DescribeDeploymentJobCommandOutput,
} from "./commands/DescribeDeploymentJobCommand";
import { DescribeFleetCommandInput, DescribeFleetCommandOutput } from "./commands/DescribeFleetCommand";
import {
  DescribeRobotApplicationCommandInput,
  DescribeRobotApplicationCommandOutput,
} from "./commands/DescribeRobotApplicationCommand";
import { DescribeRobotCommandInput, DescribeRobotCommandOutput } from "./commands/DescribeRobotCommand";
import {
  DescribeSimulationApplicationCommandInput,
  DescribeSimulationApplicationCommandOutput,
} from "./commands/DescribeSimulationApplicationCommand";
import {
  DescribeSimulationJobBatchCommandInput,
  DescribeSimulationJobBatchCommandOutput,
} from "./commands/DescribeSimulationJobBatchCommand";
import {
  DescribeSimulationJobCommandInput,
  DescribeSimulationJobCommandOutput,
} from "./commands/DescribeSimulationJobCommand";
import { DescribeWorldCommandInput, DescribeWorldCommandOutput } from "./commands/DescribeWorldCommand";
import {
  DescribeWorldExportJobCommandInput,
  DescribeWorldExportJobCommandOutput,
} from "./commands/DescribeWorldExportJobCommand";
import {
  DescribeWorldGenerationJobCommandInput,
  DescribeWorldGenerationJobCommandOutput,
} from "./commands/DescribeWorldGenerationJobCommand";
import {
  DescribeWorldTemplateCommandInput,
  DescribeWorldTemplateCommandOutput,
} from "./commands/DescribeWorldTemplateCommand";
import {
  GetWorldTemplateBodyCommandInput,
  GetWorldTemplateBodyCommandOutput,
} from "./commands/GetWorldTemplateBodyCommand";
import { ListDeploymentJobsCommandInput, ListDeploymentJobsCommandOutput } from "./commands/ListDeploymentJobsCommand";
import { ListFleetsCommandInput, ListFleetsCommandOutput } from "./commands/ListFleetsCommand";
import {
  ListRobotApplicationsCommandInput,
  ListRobotApplicationsCommandOutput,
} from "./commands/ListRobotApplicationsCommand";
import { ListRobotsCommandInput, ListRobotsCommandOutput } from "./commands/ListRobotsCommand";
import {
  ListSimulationApplicationsCommandInput,
  ListSimulationApplicationsCommandOutput,
} from "./commands/ListSimulationApplicationsCommand";
import {
  ListSimulationJobBatchesCommandInput,
  ListSimulationJobBatchesCommandOutput,
} from "./commands/ListSimulationJobBatchesCommand";
import { ListSimulationJobsCommandInput, ListSimulationJobsCommandOutput } from "./commands/ListSimulationJobsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListWorldExportJobsCommandInput,
  ListWorldExportJobsCommandOutput,
} from "./commands/ListWorldExportJobsCommand";
import {
  ListWorldGenerationJobsCommandInput,
  ListWorldGenerationJobsCommandOutput,
} from "./commands/ListWorldGenerationJobsCommand";
import { ListWorldsCommandInput, ListWorldsCommandOutput } from "./commands/ListWorldsCommand";
import { ListWorldTemplatesCommandInput, ListWorldTemplatesCommandOutput } from "./commands/ListWorldTemplatesCommand";
import { RegisterRobotCommandInput, RegisterRobotCommandOutput } from "./commands/RegisterRobotCommand";
import {
  RestartSimulationJobCommandInput,
  RestartSimulationJobCommandOutput,
} from "./commands/RestartSimulationJobCommand";
import {
  StartSimulationJobBatchCommandInput,
  StartSimulationJobBatchCommandOutput,
} from "./commands/StartSimulationJobBatchCommand";
import { SyncDeploymentJobCommandInput, SyncDeploymentJobCommandOutput } from "./commands/SyncDeploymentJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateRobotApplicationCommandInput,
  UpdateRobotApplicationCommandOutput,
} from "./commands/UpdateRobotApplicationCommand";
import {
  UpdateSimulationApplicationCommandInput,
  UpdateSimulationApplicationCommandOutput,
} from "./commands/UpdateSimulationApplicationCommand";
import {
  UpdateWorldTemplateCommandInput,
  UpdateWorldTemplateCommandOutput,
} from "./commands/UpdateWorldTemplateCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | BatchDeleteWorldsCommandInput
  | BatchDescribeSimulationJobCommandInput
  | CancelDeploymentJobCommandInput
  | CancelSimulationJobBatchCommandInput
  | CancelSimulationJobCommandInput
  | CancelWorldExportJobCommandInput
  | CancelWorldGenerationJobCommandInput
  | CreateDeploymentJobCommandInput
  | CreateFleetCommandInput
  | CreateRobotApplicationCommandInput
  | CreateRobotApplicationVersionCommandInput
  | CreateRobotCommandInput
  | CreateSimulationApplicationCommandInput
  | CreateSimulationApplicationVersionCommandInput
  | CreateSimulationJobCommandInput
  | CreateWorldExportJobCommandInput
  | CreateWorldGenerationJobCommandInput
  | CreateWorldTemplateCommandInput
  | DeleteFleetCommandInput
  | DeleteRobotApplicationCommandInput
  | DeleteRobotCommandInput
  | DeleteSimulationApplicationCommandInput
  | DeleteWorldTemplateCommandInput
  | DeregisterRobotCommandInput
  | DescribeDeploymentJobCommandInput
  | DescribeFleetCommandInput
  | DescribeRobotApplicationCommandInput
  | DescribeRobotCommandInput
  | DescribeSimulationApplicationCommandInput
  | DescribeSimulationJobBatchCommandInput
  | DescribeSimulationJobCommandInput
  | DescribeWorldCommandInput
  | DescribeWorldExportJobCommandInput
  | DescribeWorldGenerationJobCommandInput
  | DescribeWorldTemplateCommandInput
  | GetWorldTemplateBodyCommandInput
  | ListDeploymentJobsCommandInput
  | ListFleetsCommandInput
  | ListRobotApplicationsCommandInput
  | ListRobotsCommandInput
  | ListSimulationApplicationsCommandInput
  | ListSimulationJobBatchesCommandInput
  | ListSimulationJobsCommandInput
  | ListTagsForResourceCommandInput
  | ListWorldExportJobsCommandInput
  | ListWorldGenerationJobsCommandInput
  | ListWorldTemplatesCommandInput
  | ListWorldsCommandInput
  | RegisterRobotCommandInput
  | RestartSimulationJobCommandInput
  | StartSimulationJobBatchCommandInput
  | SyncDeploymentJobCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateRobotApplicationCommandInput
  | UpdateSimulationApplicationCommandInput
  | UpdateWorldTemplateCommandInput;

export type ServiceOutputTypes =
  | BatchDeleteWorldsCommandOutput
  | BatchDescribeSimulationJobCommandOutput
  | CancelDeploymentJobCommandOutput
  | CancelSimulationJobBatchCommandOutput
  | CancelSimulationJobCommandOutput
  | CancelWorldExportJobCommandOutput
  | CancelWorldGenerationJobCommandOutput
  | CreateDeploymentJobCommandOutput
  | CreateFleetCommandOutput
  | CreateRobotApplicationCommandOutput
  | CreateRobotApplicationVersionCommandOutput
  | CreateRobotCommandOutput
  | CreateSimulationApplicationCommandOutput
  | CreateSimulationApplicationVersionCommandOutput
  | CreateSimulationJobCommandOutput
  | CreateWorldExportJobCommandOutput
  | CreateWorldGenerationJobCommandOutput
  | CreateWorldTemplateCommandOutput
  | DeleteFleetCommandOutput
  | DeleteRobotApplicationCommandOutput
  | DeleteRobotCommandOutput
  | DeleteSimulationApplicationCommandOutput
  | DeleteWorldTemplateCommandOutput
  | DeregisterRobotCommandOutput
  | DescribeDeploymentJobCommandOutput
  | DescribeFleetCommandOutput
  | DescribeRobotApplicationCommandOutput
  | DescribeRobotCommandOutput
  | DescribeSimulationApplicationCommandOutput
  | DescribeSimulationJobBatchCommandOutput
  | DescribeSimulationJobCommandOutput
  | DescribeWorldCommandOutput
  | DescribeWorldExportJobCommandOutput
  | DescribeWorldGenerationJobCommandOutput
  | DescribeWorldTemplateCommandOutput
  | GetWorldTemplateBodyCommandOutput
  | ListDeploymentJobsCommandOutput
  | ListFleetsCommandOutput
  | ListRobotApplicationsCommandOutput
  | ListRobotsCommandOutput
  | ListSimulationApplicationsCommandOutput
  | ListSimulationJobBatchesCommandOutput
  | ListSimulationJobsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListWorldExportJobsCommandOutput
  | ListWorldGenerationJobsCommandOutput
  | ListWorldTemplatesCommandOutput
  | ListWorldsCommandOutput
  | RegisterRobotCommandOutput
  | RestartSimulationJobCommandOutput
  | StartSimulationJobBatchCommandOutput
  | SyncDeploymentJobCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateRobotApplicationCommandOutput
  | UpdateSimulationApplicationCommandOutput
  | UpdateWorldTemplateCommandOutput;

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

type RoboMakerClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of RoboMakerClient class constructor that set the region, credentials and other options.
 */
export interface RoboMakerClientConfig extends RoboMakerClientConfigType {}

type RoboMakerClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of RoboMakerClient class. This is resolved and normalized from the {@link RoboMakerClientConfig | constructor configuration interface}.
 */
export interface RoboMakerClientResolvedConfig extends RoboMakerClientResolvedConfigType {}

/**
 * <p>This section provides documentation for the AWS RoboMaker API operations.</p>
 */
export class RoboMakerClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  RoboMakerClientResolvedConfig
> {
  /**
   * The resolved configuration of RoboMakerClient class. This is resolved and normalized from the {@link RoboMakerClientConfig | constructor configuration interface}.
   */
  readonly config: RoboMakerClientResolvedConfig;

  constructor(configuration: RoboMakerClientConfig) {
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
