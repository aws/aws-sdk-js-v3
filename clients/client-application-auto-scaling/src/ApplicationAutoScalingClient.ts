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

import {
  DeleteScalingPolicyCommandInput,
  DeleteScalingPolicyCommandOutput,
} from "./commands/DeleteScalingPolicyCommand";
import {
  DeleteScheduledActionCommandInput,
  DeleteScheduledActionCommandOutput,
} from "./commands/DeleteScheduledActionCommand";
import {
  DeregisterScalableTargetCommandInput,
  DeregisterScalableTargetCommandOutput,
} from "./commands/DeregisterScalableTargetCommand";
import {
  DescribeScalableTargetsCommandInput,
  DescribeScalableTargetsCommandOutput,
} from "./commands/DescribeScalableTargetsCommand";
import {
  DescribeScalingActivitiesCommandInput,
  DescribeScalingActivitiesCommandOutput,
} from "./commands/DescribeScalingActivitiesCommand";
import {
  DescribeScalingPoliciesCommandInput,
  DescribeScalingPoliciesCommandOutput,
} from "./commands/DescribeScalingPoliciesCommand";
import {
  DescribeScheduledActionsCommandInput,
  DescribeScheduledActionsCommandOutput,
} from "./commands/DescribeScheduledActionsCommand";
import { PutScalingPolicyCommandInput, PutScalingPolicyCommandOutput } from "./commands/PutScalingPolicyCommand";
import { PutScheduledActionCommandInput, PutScheduledActionCommandOutput } from "./commands/PutScheduledActionCommand";
import {
  RegisterScalableTargetCommandInput,
  RegisterScalableTargetCommandOutput,
} from "./commands/RegisterScalableTargetCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | DeleteScalingPolicyCommandInput
  | DeleteScheduledActionCommandInput
  | DeregisterScalableTargetCommandInput
  | DescribeScalableTargetsCommandInput
  | DescribeScalingActivitiesCommandInput
  | DescribeScalingPoliciesCommandInput
  | DescribeScheduledActionsCommandInput
  | PutScalingPolicyCommandInput
  | PutScheduledActionCommandInput
  | RegisterScalableTargetCommandInput;

export type ServiceOutputTypes =
  | DeleteScalingPolicyCommandOutput
  | DeleteScheduledActionCommandOutput
  | DeregisterScalableTargetCommandOutput
  | DescribeScalableTargetsCommandOutput
  | DescribeScalingActivitiesCommandOutput
  | DescribeScalingPoliciesCommandOutput
  | DescribeScheduledActionsCommandOutput
  | PutScalingPolicyCommandOutput
  | PutScheduledActionCommandOutput
  | RegisterScalableTargetCommandOutput;

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

type ApplicationAutoScalingClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of ApplicationAutoScalingClient class constructor that set the region, credentials and other options.
 */
export interface ApplicationAutoScalingClientConfig extends ApplicationAutoScalingClientConfigType {}

type ApplicationAutoScalingClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of ApplicationAutoScalingClient class. This is resolved and normalized from the {@link ApplicationAutoScalingClientConfig | constructor configuration interface}.
 */
export interface ApplicationAutoScalingClientResolvedConfig extends ApplicationAutoScalingClientResolvedConfigType {}

/**
 * <p>With Application Auto Scaling, you can configure automatic scaling for the following
 *       resources:</p>
 *          <ul>
 *             <li>
 *                <p>Amazon AppStream 2.0 fleets</p>
 *             </li>
 *             <li>
 *                <p>Amazon Aurora Replicas</p>
 *             </li>
 *             <li>
 *                <p>Amazon Comprehend document classification and entity recognizer endpoints</p>
 *             </li>
 *             <li>
 *                <p>Amazon DynamoDB tables and global secondary indexes throughput capacity</p>
 *             </li>
 *             <li>
 *                <p>Amazon ECS services</p>
 *             </li>
 *             <li>
 *                <p>Amazon ElastiCache for Redis clusters (replication groups)</p>
 *             </li>
 *             <li>
 *                <p>Amazon EMR clusters</p>
 *             </li>
 *             <li>
 *                <p>Amazon Keyspaces (for Apache Cassandra) tables</p>
 *             </li>
 *             <li>
 *                <p>Lambda function provisioned concurrency</p>
 *             </li>
 *             <li>
 *                <p>Amazon Managed Streaming for Apache Kafka broker storage</p>
 *             </li>
 *             <li>
 *                <p>Amazon Neptune clusters</p>
 *             </li>
 *             <li>
 *                <p>Amazon SageMaker endpoint variants</p>
 *             </li>
 *             <li>
 *                <p>Spot Fleets (Amazon EC2)</p>
 *             </li>
 *             <li>
 *                <p>Custom resources provided by your own applications or services</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>API Summary</b>
 *          </p>
 *          <p>The Application Auto Scaling service API includes three key sets of actions: </p>
 *          <ul>
 *             <li>
 *                <p>Register and manage scalable targets - Register Amazon Web Services or custom resources as scalable
 *           targets (a resource that Application Auto Scaling can scale), set minimum and maximum capacity limits, and
 *           retrieve information on existing scalable targets.</p>
 *             </li>
 *             <li>
 *                <p>Configure and manage automatic scaling - Define scaling policies to dynamically scale
 *           your resources in response to CloudWatch alarms, schedule one-time or recurring scaling actions,
 *           and retrieve your recent scaling activity history.</p>
 *             </li>
 *             <li>
 *                <p>Suspend and resume scaling - Temporarily suspend and later resume automatic scaling by
 *           calling the <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_RegisterScalableTarget.html">RegisterScalableTarget</a> API action for any Application Auto Scaling scalable target. You can
 *           suspend and resume (individually or in combination) scale-out activities that are
 *           triggered by a scaling policy, scale-in activities that are triggered by a scaling policy,
 *           and scheduled scaling.</p>
 *             </li>
 *          </ul>
 *          <p>To learn more about Application Auto Scaling, including information about granting IAM users required
 *       permissions for Application Auto Scaling actions, see the <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/what-is-application-auto-scaling.html">Application Auto Scaling User
 *         Guide</a>.</p>
 */
export class ApplicationAutoScalingClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ApplicationAutoScalingClientResolvedConfig
> {
  /**
   * The resolved configuration of ApplicationAutoScalingClient class. This is resolved and normalized from the {@link ApplicationAutoScalingClientConfig | constructor configuration interface}.
   */
  readonly config: ApplicationAutoScalingClientResolvedConfig;

  constructor(configuration: ApplicationAutoScalingClientConfig) {
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
