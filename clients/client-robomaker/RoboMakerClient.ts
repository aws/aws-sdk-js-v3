import {
  BatchDescribeSimulationJobCommandInput,
  BatchDescribeSimulationJobCommandOutput
} from "./commands/BatchDescribeSimulationJobCommand";
import {
  CancelDeploymentJobCommandInput,
  CancelDeploymentJobCommandOutput
} from "./commands/CancelDeploymentJobCommand";
import {
  CancelSimulationJobCommandInput,
  CancelSimulationJobCommandOutput
} from "./commands/CancelSimulationJobCommand";
import {
  CreateDeploymentJobCommandInput,
  CreateDeploymentJobCommandOutput
} from "./commands/CreateDeploymentJobCommand";
import {
  CreateFleetCommandInput,
  CreateFleetCommandOutput
} from "./commands/CreateFleetCommand";
import {
  CreateRobotApplicationCommandInput,
  CreateRobotApplicationCommandOutput
} from "./commands/CreateRobotApplicationCommand";
import {
  CreateRobotApplicationVersionCommandInput,
  CreateRobotApplicationVersionCommandOutput
} from "./commands/CreateRobotApplicationVersionCommand";
import {
  CreateRobotCommandInput,
  CreateRobotCommandOutput
} from "./commands/CreateRobotCommand";
import {
  CreateSimulationApplicationCommandInput,
  CreateSimulationApplicationCommandOutput
} from "./commands/CreateSimulationApplicationCommand";
import {
  CreateSimulationApplicationVersionCommandInput,
  CreateSimulationApplicationVersionCommandOutput
} from "./commands/CreateSimulationApplicationVersionCommand";
import {
  CreateSimulationJobCommandInput,
  CreateSimulationJobCommandOutput
} from "./commands/CreateSimulationJobCommand";
import {
  DeleteFleetCommandInput,
  DeleteFleetCommandOutput
} from "./commands/DeleteFleetCommand";
import {
  DeleteRobotApplicationCommandInput,
  DeleteRobotApplicationCommandOutput
} from "./commands/DeleteRobotApplicationCommand";
import {
  DeleteRobotCommandInput,
  DeleteRobotCommandOutput
} from "./commands/DeleteRobotCommand";
import {
  DeleteSimulationApplicationCommandInput,
  DeleteSimulationApplicationCommandOutput
} from "./commands/DeleteSimulationApplicationCommand";
import {
  DeregisterRobotCommandInput,
  DeregisterRobotCommandOutput
} from "./commands/DeregisterRobotCommand";
import {
  DescribeDeploymentJobCommandInput,
  DescribeDeploymentJobCommandOutput
} from "./commands/DescribeDeploymentJobCommand";
import {
  DescribeFleetCommandInput,
  DescribeFleetCommandOutput
} from "./commands/DescribeFleetCommand";
import {
  DescribeRobotApplicationCommandInput,
  DescribeRobotApplicationCommandOutput
} from "./commands/DescribeRobotApplicationCommand";
import {
  DescribeRobotCommandInput,
  DescribeRobotCommandOutput
} from "./commands/DescribeRobotCommand";
import {
  DescribeSimulationApplicationCommandInput,
  DescribeSimulationApplicationCommandOutput
} from "./commands/DescribeSimulationApplicationCommand";
import {
  DescribeSimulationJobCommandInput,
  DescribeSimulationJobCommandOutput
} from "./commands/DescribeSimulationJobCommand";
import {
  ListDeploymentJobsCommandInput,
  ListDeploymentJobsCommandOutput
} from "./commands/ListDeploymentJobsCommand";
import {
  ListFleetsCommandInput,
  ListFleetsCommandOutput
} from "./commands/ListFleetsCommand";
import {
  ListRobotApplicationsCommandInput,
  ListRobotApplicationsCommandOutput
} from "./commands/ListRobotApplicationsCommand";
import {
  ListRobotsCommandInput,
  ListRobotsCommandOutput
} from "./commands/ListRobotsCommand";
import {
  ListSimulationApplicationsCommandInput,
  ListSimulationApplicationsCommandOutput
} from "./commands/ListSimulationApplicationsCommand";
import {
  ListSimulationJobsCommandInput,
  ListSimulationJobsCommandOutput
} from "./commands/ListSimulationJobsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "./commands/ListTagsForResourceCommand";
import {
  RegisterRobotCommandInput,
  RegisterRobotCommandOutput
} from "./commands/RegisterRobotCommand";
import {
  RestartSimulationJobCommandInput,
  RestartSimulationJobCommandOutput
} from "./commands/RestartSimulationJobCommand";
import {
  SyncDeploymentJobCommandInput,
  SyncDeploymentJobCommandOutput
} from "./commands/SyncDeploymentJobCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "./commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "./commands/UntagResourceCommand";
import {
  UpdateRobotApplicationCommandInput,
  UpdateRobotApplicationCommandOutput
} from "./commands/UpdateRobotApplicationCommand";
import {
  UpdateSimulationApplicationCommandInput,
  UpdateSimulationApplicationCommandOutput
} from "./commands/UpdateSimulationApplicationCommand";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig
} from "@aws-sdk/middleware-host-header";
import {
  RetryInputConfig,
  RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig
} from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration
} from "@aws-sdk/smithy-client";
import {
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | BatchDescribeSimulationJobCommandInput
  | CancelDeploymentJobCommandInput
  | CancelSimulationJobCommandInput
  | CreateDeploymentJobCommandInput
  | CreateFleetCommandInput
  | CreateRobotApplicationCommandInput
  | CreateRobotApplicationVersionCommandInput
  | CreateRobotCommandInput
  | CreateSimulationApplicationCommandInput
  | CreateSimulationApplicationVersionCommandInput
  | CreateSimulationJobCommandInput
  | DeleteFleetCommandInput
  | DeleteRobotApplicationCommandInput
  | DeleteRobotCommandInput
  | DeleteSimulationApplicationCommandInput
  | DeregisterRobotCommandInput
  | DescribeDeploymentJobCommandInput
  | DescribeFleetCommandInput
  | DescribeRobotApplicationCommandInput
  | DescribeRobotCommandInput
  | DescribeSimulationApplicationCommandInput
  | DescribeSimulationJobCommandInput
  | ListDeploymentJobsCommandInput
  | ListFleetsCommandInput
  | ListRobotApplicationsCommandInput
  | ListRobotsCommandInput
  | ListSimulationApplicationsCommandInput
  | ListSimulationJobsCommandInput
  | ListTagsForResourceCommandInput
  | RegisterRobotCommandInput
  | RestartSimulationJobCommandInput
  | SyncDeploymentJobCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateRobotApplicationCommandInput
  | UpdateSimulationApplicationCommandInput;

export type ServiceOutputTypes =
  | BatchDescribeSimulationJobCommandOutput
  | CancelDeploymentJobCommandOutput
  | CancelSimulationJobCommandOutput
  | CreateDeploymentJobCommandOutput
  | CreateFleetCommandOutput
  | CreateRobotApplicationCommandOutput
  | CreateRobotApplicationVersionCommandOutput
  | CreateRobotCommandOutput
  | CreateSimulationApplicationCommandOutput
  | CreateSimulationApplicationVersionCommandOutput
  | CreateSimulationJobCommandOutput
  | DeleteFleetCommandOutput
  | DeleteRobotApplicationCommandOutput
  | DeleteRobotCommandOutput
  | DeleteSimulationApplicationCommandOutput
  | DeregisterRobotCommandOutput
  | DescribeDeploymentJobCommandOutput
  | DescribeFleetCommandOutput
  | DescribeRobotApplicationCommandOutput
  | DescribeRobotCommandOutput
  | DescribeSimulationApplicationCommandOutput
  | DescribeSimulationJobCommandOutput
  | ListDeploymentJobsCommandOutput
  | ListFleetsCommandOutput
  | ListRobotApplicationsCommandOutput
  | ListRobotsCommandOutput
  | ListSimulationApplicationsCommandOutput
  | ListSimulationJobsCommandOutput
  | ListTagsForResourceCommandOutput
  | RegisterRobotCommandOutput
  | RestartSimulationJobCommandOutput
  | SyncDeploymentJobCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateRobotApplicationCommandOutput
  | UpdateSimulationApplicationCommandOutput;

export interface ClientDefaults
  extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the @aws-sdk/types.Hash interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   */
  bodyLengthChecker?: (body: any) => number | undefined;

  /**
   * A function that converts a stream into an array of bytes.
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string
   */
  utf8Encoder?: __Encoder;

  /**
   * The string that will be used to populate default value in 'User-Agent' header
   */
  defaultUserAgent?: string;

  /**
   * The runtime environment
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * The service name with which to sign requests.
   */
  signingName?: string;

  /**
   * Default credentials provider; Not available in browser runtime
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * Provider function that return promise of a region string
   */
  regionDefaultProvider?: (input: any) => __Provider<string>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;
}

export type RoboMakerClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type RoboMakerClientResolvedConfig = __SmithyResolvedConfiguration<
  __HttpHandlerOptions
> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <p>This section provides documentation for the AWS RoboMaker API operations.</p>
 */
export class RoboMakerClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  RoboMakerClientResolvedConfig
> {
  readonly config: RoboMakerClientResolvedConfig;

  constructor(configuration: RoboMakerClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveAwsAuthConfig(_config_2);
    let _config_4 = resolveRetryConfig(_config_3);
    let _config_5 = resolveUserAgentConfig(_config_4);
    let _config_6 = resolveHostHeaderConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
  }

  destroy(): void {}
}
