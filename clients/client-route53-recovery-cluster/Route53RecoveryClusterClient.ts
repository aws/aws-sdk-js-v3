import {
  GetRoutingControlStateCommandInput,
  GetRoutingControlStateCommandOutput,
} from "./commands/GetRoutingControlStateCommand";
import {
  UpdateRoutingControlStateCommandInput,
  UpdateRoutingControlStateCommandOutput,
} from "./commands/UpdateRoutingControlStateCommand";
import {
  UpdateRoutingControlStatesCommandInput,
  UpdateRoutingControlStatesCommandOutput,
} from "./commands/UpdateRoutingControlStatesCommand";
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
  | GetRoutingControlStateCommandInput
  | UpdateRoutingControlStateCommandInput
  | UpdateRoutingControlStatesCommandInput;

export type ServiceOutputTypes =
  | GetRoutingControlStateCommandOutput
  | UpdateRoutingControlStateCommandOutput
  | UpdateRoutingControlStatesCommandOutput;

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

type Route53RecoveryClusterClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of Route53RecoveryClusterClient class constructor that set the region, credentials and other options.
 */
export interface Route53RecoveryClusterClientConfig extends Route53RecoveryClusterClientConfigType {}

type Route53RecoveryClusterClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of Route53RecoveryClusterClient class. This is resolved and normalized from the {@link Route53RecoveryClusterClientConfig | constructor configuration interface}.
 */
export interface Route53RecoveryClusterClientResolvedConfig extends Route53RecoveryClusterClientResolvedConfigType {}

/**
 * <p>Welcome to the Amazon Route 53 Application Recovery Controller API Reference Guide for Recovery Control Data Plane .</p>
 * 			      <p>Recovery control in Route 53 Application Recovery Controller includes extremely reliable routing controls that enable you to recover applications
 * 				by rerouting traffic, for example, across Availability Zones or AWS Regions. Routing controls are simple on/off switches
 * 				hosted on a cluster. A cluster is a set of five redundant regional endpoints against which you can execute API calls to update or
 * 				get the state of routing controls. You use routing controls to failover traffic to recover your application
 * 				across Availability Zones or Regions.</p>
 * 			      <p>This API guide includes information about how to get and update routing control states in Route 53 Application Recovery Controller.</p>
 * 			      <p>For more information about Route 53 Application Recovery Controller, see the following:</p>
 * 			      <ul>
 *             <li>
 *                <p>You can create clusters, routing controls, and control panels by using the control plane API for Recovery
 * 					Control. For more information, see <a href="https://docs.aws.amazon.com/recovery-cluster/latest/api/">Amazon Route 53 Application Recovery Controller Recovery Control API Reference</a>.</p>
 *             </li>
 *             <li>
 *                <p>Route 53 Application Recovery Controller also provides continuous readiness checks to ensure that your applications are scaled to handle failover traffic.
 * 					For more information about the related API actions, see <a href="https://docs.aws.amazon.com/recovery-readiness/latest/api/">Amazon Route 53 Application Recovery Controller Recovery Readiness API Reference</a>.</p>
 *             </li>
 *             <li>
 *                <p>For more information about creating resilient applications and preparing for recovery readiness with Route 53 Application Recovery Controller,
 * 					see the <a href="r53recovery/latest/dg/">Amazon Route 53 Application Recovery Controller Developer Guide</a>.</p>
 *             </li>
 *          </ul>
 */
export class Route53RecoveryClusterClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  Route53RecoveryClusterClientResolvedConfig
> {
  /**
   * The resolved configuration of Route53RecoveryClusterClient class. This is resolved and normalized from the {@link Route53RecoveryClusterClientConfig | constructor configuration interface}.
   */
  readonly config: Route53RecoveryClusterClientResolvedConfig;

  constructor(configuration: Route53RecoveryClusterClientConfig) {
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
