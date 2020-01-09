import {
  BatchDescribeSimulationJobRequest,
  BatchDescribeSimulationJobResponse,
  CancelDeploymentJobRequest,
  CancelDeploymentJobResponse,
  CancelSimulationJobRequest,
  CancelSimulationJobResponse,
  CreateDeploymentJobRequest,
  CreateDeploymentJobResponse,
  CreateFleetRequest,
  CreateFleetResponse,
  CreateRobotApplicationRequest,
  CreateRobotApplicationResponse,
  CreateRobotApplicationVersionRequest,
  CreateRobotApplicationVersionResponse,
  CreateRobotRequest,
  CreateRobotResponse,
  CreateSimulationApplicationRequest,
  CreateSimulationApplicationResponse,
  CreateSimulationApplicationVersionRequest,
  CreateSimulationApplicationVersionResponse,
  CreateSimulationJobRequest,
  CreateSimulationJobResponse,
  DeleteFleetRequest,
  DeleteFleetResponse,
  DeleteRobotApplicationRequest,
  DeleteRobotApplicationResponse,
  DeleteRobotRequest,
  DeleteRobotResponse,
  DeleteSimulationApplicationRequest,
  DeleteSimulationApplicationResponse,
  DeregisterRobotRequest,
  DeregisterRobotResponse,
  DescribeDeploymentJobRequest,
  DescribeDeploymentJobResponse,
  DescribeFleetRequest,
  DescribeFleetResponse,
  DescribeRobotApplicationRequest,
  DescribeRobotApplicationResponse,
  DescribeRobotRequest,
  DescribeRobotResponse,
  DescribeSimulationApplicationRequest,
  DescribeSimulationApplicationResponse,
  DescribeSimulationJobRequest,
  DescribeSimulationJobResponse,
  ListDeploymentJobsRequest,
  ListDeploymentJobsResponse,
  ListFleetsRequest,
  ListFleetsResponse,
  ListRobotApplicationsRequest,
  ListRobotApplicationsResponse,
  ListRobotsRequest,
  ListRobotsResponse,
  ListSimulationApplicationsRequest,
  ListSimulationApplicationsResponse,
  ListSimulationJobsRequest,
  ListSimulationJobsResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  RegisterRobotRequest,
  RegisterRobotResponse,
  RestartSimulationJobRequest,
  RestartSimulationJobResponse,
  SyncDeploymentJobRequest,
  SyncDeploymentJobResponse,
  TagResourceRequest,
  TagResourceResponse,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateRobotApplicationRequest,
  UpdateRobotApplicationResponse,
  UpdateSimulationApplicationRequest,
  UpdateSimulationApplicationResponse,
} from "./models/index";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
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
import {
  RetryInputConfig,
  RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig,
} from "@aws-sdk/middleware-retry";
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
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | BatchDescribeSimulationJobRequest
  | CancelDeploymentJobRequest
  | CancelSimulationJobRequest
  | CreateDeploymentJobRequest
  | CreateFleetRequest
  | CreateRobotApplicationRequest
  | CreateRobotApplicationVersionRequest
  | CreateRobotRequest
  | CreateSimulationApplicationRequest
  | CreateSimulationApplicationVersionRequest
  | CreateSimulationJobRequest
  | DeleteFleetRequest
  | DeleteRobotApplicationRequest
  | DeleteRobotRequest
  | DeleteSimulationApplicationRequest
  | DeregisterRobotRequest
  | DescribeDeploymentJobRequest
  | DescribeFleetRequest
  | DescribeRobotApplicationRequest
  | DescribeRobotRequest
  | DescribeSimulationApplicationRequest
  | DescribeSimulationJobRequest
  | ListDeploymentJobsRequest
  | ListFleetsRequest
  | ListRobotApplicationsRequest
  | ListRobotsRequest
  | ListSimulationApplicationsRequest
  | ListSimulationJobsRequest
  | ListTagsForResourceRequest
  | RegisterRobotRequest
  | RestartSimulationJobRequest
  | SyncDeploymentJobRequest
  | TagResourceRequest
  | UntagResourceRequest
  | UpdateRobotApplicationRequest
  | UpdateSimulationApplicationRequest;

export type ServiceOutputTypes =
  | BatchDescribeSimulationJobResponse
  | CancelDeploymentJobResponse
  | CancelSimulationJobResponse
  | CreateDeploymentJobResponse
  | CreateFleetResponse
  | CreateRobotApplicationResponse
  | CreateRobotApplicationVersionResponse
  | CreateRobotResponse
  | CreateSimulationApplicationResponse
  | CreateSimulationApplicationVersionResponse
  | CreateSimulationJobResponse
  | DeleteFleetResponse
  | DeleteRobotApplicationResponse
  | DeleteRobotResponse
  | DeleteSimulationApplicationResponse
  | DeregisterRobotResponse
  | DescribeDeploymentJobResponse
  | DescribeFleetResponse
  | DescribeRobotApplicationResponse
  | DescribeRobotResponse
  | DescribeSimulationApplicationResponse
  | DescribeSimulationJobResponse
  | ListDeploymentJobsResponse
  | ListFleetsResponse
  | ListRobotApplicationsResponse
  | ListRobotsResponse
  | ListSimulationApplicationsResponse
  | ListSimulationJobsResponse
  | ListTagsForResourceResponse
  | RegisterRobotResponse
  | RestartSimulationJobResponse
  | SyncDeploymentJobResponse
  | TagResourceResponse
  | UntagResourceResponse
  | UpdateRobotApplicationResponse
  | UpdateSimulationApplicationResponse;

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

export type RoboMakerClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>>
  & ClientDefaults
  & RegionInputConfig
  & EndpointsInputConfig
  & AwsAuthInputConfig
  & RetryInputConfig
  & UserAgentInputConfig
  & HostHeaderInputConfig

export type RoboMakerClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions>
  & Required<ClientDefaults>
  & RegionResolvedConfig
  & EndpointsResolvedConfig
  & AwsAuthResolvedConfig
  & RetryResolvedConfig
  & UserAgentResolvedConfig
  & HostHeaderResolvedConfig

/**
 *
 *          <p>This section provides documentation for the AWS RoboMaker API operations.</p>
 *
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

  destroy(): void {
  }
}
