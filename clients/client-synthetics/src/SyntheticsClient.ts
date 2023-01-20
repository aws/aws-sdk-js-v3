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

import { AssociateResourceCommandInput, AssociateResourceCommandOutput } from "./commands/AssociateResourceCommand";
import { CreateCanaryCommandInput, CreateCanaryCommandOutput } from "./commands/CreateCanaryCommand";
import { CreateGroupCommandInput, CreateGroupCommandOutput } from "./commands/CreateGroupCommand";
import { DeleteCanaryCommandInput, DeleteCanaryCommandOutput } from "./commands/DeleteCanaryCommand";
import { DeleteGroupCommandInput, DeleteGroupCommandOutput } from "./commands/DeleteGroupCommand";
import { DescribeCanariesCommandInput, DescribeCanariesCommandOutput } from "./commands/DescribeCanariesCommand";
import {
  DescribeCanariesLastRunCommandInput,
  DescribeCanariesLastRunCommandOutput,
} from "./commands/DescribeCanariesLastRunCommand";
import {
  DescribeRuntimeVersionsCommandInput,
  DescribeRuntimeVersionsCommandOutput,
} from "./commands/DescribeRuntimeVersionsCommand";
import {
  DisassociateResourceCommandInput,
  DisassociateResourceCommandOutput,
} from "./commands/DisassociateResourceCommand";
import { GetCanaryCommandInput, GetCanaryCommandOutput } from "./commands/GetCanaryCommand";
import { GetCanaryRunsCommandInput, GetCanaryRunsCommandOutput } from "./commands/GetCanaryRunsCommand";
import { GetGroupCommandInput, GetGroupCommandOutput } from "./commands/GetGroupCommand";
import {
  ListAssociatedGroupsCommandInput,
  ListAssociatedGroupsCommandOutput,
} from "./commands/ListAssociatedGroupsCommand";
import { ListGroupResourcesCommandInput, ListGroupResourcesCommandOutput } from "./commands/ListGroupResourcesCommand";
import { ListGroupsCommandInput, ListGroupsCommandOutput } from "./commands/ListGroupsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { StartCanaryCommandInput, StartCanaryCommandOutput } from "./commands/StartCanaryCommand";
import { StopCanaryCommandInput, StopCanaryCommandOutput } from "./commands/StopCanaryCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateCanaryCommandInput, UpdateCanaryCommandOutput } from "./commands/UpdateCanaryCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | AssociateResourceCommandInput
  | CreateCanaryCommandInput
  | CreateGroupCommandInput
  | DeleteCanaryCommandInput
  | DeleteGroupCommandInput
  | DescribeCanariesCommandInput
  | DescribeCanariesLastRunCommandInput
  | DescribeRuntimeVersionsCommandInput
  | DisassociateResourceCommandInput
  | GetCanaryCommandInput
  | GetCanaryRunsCommandInput
  | GetGroupCommandInput
  | ListAssociatedGroupsCommandInput
  | ListGroupResourcesCommandInput
  | ListGroupsCommandInput
  | ListTagsForResourceCommandInput
  | StartCanaryCommandInput
  | StopCanaryCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateCanaryCommandInput;

export type ServiceOutputTypes =
  | AssociateResourceCommandOutput
  | CreateCanaryCommandOutput
  | CreateGroupCommandOutput
  | DeleteCanaryCommandOutput
  | DeleteGroupCommandOutput
  | DescribeCanariesCommandOutput
  | DescribeCanariesLastRunCommandOutput
  | DescribeRuntimeVersionsCommandOutput
  | DisassociateResourceCommandOutput
  | GetCanaryCommandOutput
  | GetCanaryRunsCommandOutput
  | GetGroupCommandOutput
  | ListAssociatedGroupsCommandOutput
  | ListGroupResourcesCommandOutput
  | ListGroupsCommandOutput
  | ListTagsForResourceCommandOutput
  | StartCanaryCommandOutput
  | StopCanaryCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateCanaryCommandOutput;

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

type SyntheticsClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of SyntheticsClient class constructor that set the region, credentials and other options.
 */
export interface SyntheticsClientConfig extends SyntheticsClientConfigType {}

type SyntheticsClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of SyntheticsClient class. This is resolved and normalized from the {@link SyntheticsClientConfig | constructor configuration interface}.
 */
export interface SyntheticsClientResolvedConfig extends SyntheticsClientResolvedConfigType {}

/**
 * <fullname>Amazon CloudWatch Synthetics</fullname>
 *          <p>You can use Amazon CloudWatch Synthetics to continually monitor your services. You can
 *          create and manage <i>canaries</i>, which are modular, lightweight scripts
 *          that monitor your endpoints and APIs
 *             from the outside-in. You can set up your canaries to run
 *          24 hours a day, once per minute. The canaries help you check the availability and latency
 *          of your web services and troubleshoot anomalies by investigating load time data,
 *          screenshots of the UI, logs, and metrics. The canaries seamlessly integrate with CloudWatch
 *          ServiceLens to help you trace the causes of impacted nodes in your applications. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ServiceLens.html">Using ServiceLens to Monitor
 *             the Health of Your Applications</a> in the <i>Amazon CloudWatch User
 *             Guide</i>.</p>
 *
 *          <p>Before you create and manage canaries, be aware of the security considerations. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/servicelens_canaries_security.html">Security
 *             Considerations for Synthetics Canaries</a>.</p>
 */
export class SyntheticsClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  SyntheticsClientResolvedConfig
> {
  /**
   * The resolved configuration of SyntheticsClient class. This is resolved and normalized from the {@link SyntheticsClientConfig | constructor configuration interface}.
   */
  readonly config: SyntheticsClientResolvedConfig;

  constructor(configuration: SyntheticsClientConfig) {
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
