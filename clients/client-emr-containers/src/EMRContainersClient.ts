import { CancelJobRunCommandInput, CancelJobRunCommandOutput } from "./commands/CancelJobRunCommand";
import {
  CreateManagedEndpointCommandInput,
  CreateManagedEndpointCommandOutput,
} from "./commands/CreateManagedEndpointCommand";
import {
  CreateVirtualClusterCommandInput,
  CreateVirtualClusterCommandOutput,
} from "./commands/CreateVirtualClusterCommand";
import {
  DeleteManagedEndpointCommandInput,
  DeleteManagedEndpointCommandOutput,
} from "./commands/DeleteManagedEndpointCommand";
import {
  DeleteVirtualClusterCommandInput,
  DeleteVirtualClusterCommandOutput,
} from "./commands/DeleteVirtualClusterCommand";
import { DescribeJobRunCommandInput, DescribeJobRunCommandOutput } from "./commands/DescribeJobRunCommand";
import {
  DescribeManagedEndpointCommandInput,
  DescribeManagedEndpointCommandOutput,
} from "./commands/DescribeManagedEndpointCommand";
import {
  DescribeVirtualClusterCommandInput,
  DescribeVirtualClusterCommandOutput,
} from "./commands/DescribeVirtualClusterCommand";
import { ListJobRunsCommandInput, ListJobRunsCommandOutput } from "./commands/ListJobRunsCommand";
import {
  ListManagedEndpointsCommandInput,
  ListManagedEndpointsCommandOutput,
} from "./commands/ListManagedEndpointsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListVirtualClustersCommandInput,
  ListVirtualClustersCommandOutput,
} from "./commands/ListVirtualClustersCommand";
import { StartJobRunCommandInput, StartJobRunCommandOutput } from "./commands/StartJobRunCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
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
  | CancelJobRunCommandInput
  | CreateManagedEndpointCommandInput
  | CreateVirtualClusterCommandInput
  | DeleteManagedEndpointCommandInput
  | DeleteVirtualClusterCommandInput
  | DescribeJobRunCommandInput
  | DescribeManagedEndpointCommandInput
  | DescribeVirtualClusterCommandInput
  | ListJobRunsCommandInput
  | ListManagedEndpointsCommandInput
  | ListTagsForResourceCommandInput
  | ListVirtualClustersCommandInput
  | StartJobRunCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput;

export type ServiceOutputTypes =
  | CancelJobRunCommandOutput
  | CreateManagedEndpointCommandOutput
  | CreateVirtualClusterCommandOutput
  | DeleteManagedEndpointCommandOutput
  | DeleteVirtualClusterCommandOutput
  | DescribeJobRunCommandOutput
  | DescribeManagedEndpointCommandOutput
  | DescribeVirtualClusterCommandOutput
  | ListJobRunsCommandOutput
  | ListManagedEndpointsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListVirtualClustersCommandOutput
  | StartJobRunCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput;

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

type EMRContainersClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of EMRContainersClient class constructor that set the region, credentials and other options.
 */
export interface EMRContainersClientConfig extends EMRContainersClientConfigType {}

type EMRContainersClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of EMRContainersClient class. This is resolved and normalized from the {@link EMRContainersClientConfig | constructor configuration interface}.
 */
export interface EMRContainersClientResolvedConfig extends EMRContainersClientResolvedConfigType {}

/**
 * <p>Amazon EMR on EKS provides a deployment option for Amazon EMR that allows you to run
 *          open-source big data frameworks on Amazon Elastic Kubernetes Service (Amazon EKS). With
 *          this deployment option, you can focus on running analytics workloads while Amazon EMR on
 *          EKS builds, configures, and manages containers for open-source applications. For more
 *          information about Amazon EMR on EKS concepts and tasks, see <a href="https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/emr-eks.html">What is Amazon EMR on EKS</a>.</p>
 *          <p>
 *             <i>Amazon EMR containers</i> is the API name for Amazon EMR on EKS. The
 *             <code>emr-containers</code> prefix is used in the following scenarios: </p>
 *          <ul>
 *             <li>
 *                <p>It is the prefix in the CLI commands for Amazon EMR on EKS. For example, <code>aws
 *                   emr-containers start-job-run</code>.</p>
 *             </li>
 *             <li>
 *                <p>It is the prefix before IAM policy actions for Amazon EMR on EKS. For example, <code>"Action": [
 *             "emr-containers:StartJobRun"]</code>. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-actions">Policy actions for Amazon EMR on EKS</a>.</p>
 *             </li>
 *             <li>
 *                <p>It is the prefix used in Amazon EMR on EKS service endpoints. For example, <code>emr-containers.us-east-2.amazonaws.com</code>. For more
 *             information, see <a href="https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/service-quotas.html#service-endpoints">Amazon EMR on EKS Service Endpoints</a>.</p>
 *             </li>
 *          </ul>
 */
export class EMRContainersClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  EMRContainersClientResolvedConfig
> {
  /**
   * The resolved configuration of EMRContainersClient class. This is resolved and normalized from the {@link EMRContainersClientConfig | constructor configuration interface}.
   */
  readonly config: EMRContainersClientResolvedConfig;

  constructor(configuration: EMRContainersClientConfig) {
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
