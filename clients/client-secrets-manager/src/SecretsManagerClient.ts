import { CancelRotateSecretCommandInput, CancelRotateSecretCommandOutput } from "./commands/CancelRotateSecretCommand";
import { CreateSecretCommandInput, CreateSecretCommandOutput } from "./commands/CreateSecretCommand";
import {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import { DeleteSecretCommandInput, DeleteSecretCommandOutput } from "./commands/DeleteSecretCommand";
import { DescribeSecretCommandInput, DescribeSecretCommandOutput } from "./commands/DescribeSecretCommand";
import { GetRandomPasswordCommandInput, GetRandomPasswordCommandOutput } from "./commands/GetRandomPasswordCommand";
import { GetResourcePolicyCommandInput, GetResourcePolicyCommandOutput } from "./commands/GetResourcePolicyCommand";
import { GetSecretValueCommandInput, GetSecretValueCommandOutput } from "./commands/GetSecretValueCommand";
import {
  ListSecretVersionIdsCommandInput,
  ListSecretVersionIdsCommandOutput,
} from "./commands/ListSecretVersionIdsCommand";
import { ListSecretsCommandInput, ListSecretsCommandOutput } from "./commands/ListSecretsCommand";
import { PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput } from "./commands/PutResourcePolicyCommand";
import { PutSecretValueCommandInput, PutSecretValueCommandOutput } from "./commands/PutSecretValueCommand";
import {
  RemoveRegionsFromReplicationCommandInput,
  RemoveRegionsFromReplicationCommandOutput,
} from "./commands/RemoveRegionsFromReplicationCommand";
import {
  ReplicateSecretToRegionsCommandInput,
  ReplicateSecretToRegionsCommandOutput,
} from "./commands/ReplicateSecretToRegionsCommand";
import { RestoreSecretCommandInput, RestoreSecretCommandOutput } from "./commands/RestoreSecretCommand";
import { RotateSecretCommandInput, RotateSecretCommandOutput } from "./commands/RotateSecretCommand";
import {
  StopReplicationToReplicaCommandInput,
  StopReplicationToReplicaCommandOutput,
} from "./commands/StopReplicationToReplicaCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateSecretCommandInput, UpdateSecretCommandOutput } from "./commands/UpdateSecretCommand";
import {
  UpdateSecretVersionStageCommandInput,
  UpdateSecretVersionStageCommandOutput,
} from "./commands/UpdateSecretVersionStageCommand";
import {
  ValidateResourcePolicyCommandInput,
  ValidateResourcePolicyCommandOutput,
} from "./commands/ValidateResourcePolicyCommand";
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
  | CancelRotateSecretCommandInput
  | CreateSecretCommandInput
  | DeleteResourcePolicyCommandInput
  | DeleteSecretCommandInput
  | DescribeSecretCommandInput
  | GetRandomPasswordCommandInput
  | GetResourcePolicyCommandInput
  | GetSecretValueCommandInput
  | ListSecretVersionIdsCommandInput
  | ListSecretsCommandInput
  | PutResourcePolicyCommandInput
  | PutSecretValueCommandInput
  | RemoveRegionsFromReplicationCommandInput
  | ReplicateSecretToRegionsCommandInput
  | RestoreSecretCommandInput
  | RotateSecretCommandInput
  | StopReplicationToReplicaCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateSecretCommandInput
  | UpdateSecretVersionStageCommandInput
  | ValidateResourcePolicyCommandInput;

export type ServiceOutputTypes =
  | CancelRotateSecretCommandOutput
  | CreateSecretCommandOutput
  | DeleteResourcePolicyCommandOutput
  | DeleteSecretCommandOutput
  | DescribeSecretCommandOutput
  | GetRandomPasswordCommandOutput
  | GetResourcePolicyCommandOutput
  | GetSecretValueCommandOutput
  | ListSecretVersionIdsCommandOutput
  | ListSecretsCommandOutput
  | PutResourcePolicyCommandOutput
  | PutSecretValueCommandOutput
  | RemoveRegionsFromReplicationCommandOutput
  | ReplicateSecretToRegionsCommandOutput
  | RestoreSecretCommandOutput
  | RotateSecretCommandOutput
  | StopReplicationToReplicaCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateSecretCommandOutput
  | UpdateSecretVersionStageCommandOutput
  | ValidateResourcePolicyCommandOutput;

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

type SecretsManagerClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of SecretsManagerClient class constructor that set the region, credentials and other options.
 */
export interface SecretsManagerClientConfig extends SecretsManagerClientConfigType {}

type SecretsManagerClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of SecretsManagerClient class. This is resolved and normalized from the {@link SecretsManagerClientConfig | constructor configuration interface}.
 */
export interface SecretsManagerClientResolvedConfig extends SecretsManagerClientResolvedConfigType {}

/**
 * <fullname>Amazon Web Services Secrets Manager</fullname>
 *          <p>Amazon Web Services Secrets Manager provides a service to enable you to store, manage, and retrieve, secrets.</p>
 *
 *          <p>This guide provides descriptions of the Secrets Manager API. For more information about using this
 *       service, see the <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/introduction.html">Amazon Web Services Secrets Manager User Guide</a>.</p>
 *
 *          <p>
 *             <b>API Version</b>
 *          </p>
 *
 *          <p>This version of the Secrets Manager API Reference documents the Secrets Manager API version 2017-10-17.</p>
 *          <note>
 *             <p>As an alternative to using the API, you can use one of the Amazon Web Services SDKs, which consist of
 *         libraries and sample code for various programming languages and platforms such as Java,
 *         Ruby, .NET, iOS, and Android. The SDKs provide a convenient way to create programmatic
 *         access to Amazon Web Services Secrets Manager. For example, the SDKs provide cryptographically signing requests,
 *         managing errors, and retrying requests automatically. For more information about the Amazon Web Services
 *         SDKs, including downloading and installing them, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p>
 *          </note>
 *          <p>We recommend you use the Amazon Web Services SDKs to make programmatic API calls to Secrets Manager. However, you
 *       also can use the Secrets Manager HTTP Query API to make direct calls to the Secrets Manager web service. To learn
 *       more about the Secrets Manager HTTP Query API, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/query-requests.html">Making Query Requests</a> in the
 *       <i>Amazon Web Services Secrets Manager User Guide</i>. </p>
 *          <p>Secrets Manager API supports GET and POST requests for all actions, and doesn't require you to use
 *       GET for some actions and POST for others. However, GET requests are subject to the limitation
 *       size of a URL. Therefore, for operations that require larger sizes, use a POST request.</p>
 *
 *
 *
 *
 *
 *
 *
 *          <p>
 *             <b>Support and Feedback for Amazon Web Services Secrets Manager</b>
 *          </p>
 *
 *          <p>We welcome your feedback. Send your comments to <a href="mailto:awssecretsmanager-feedback@amazon.com">awssecretsmanager-feedback@amazon.com</a>, or post your feedback and questions in the <a href="http://forums.aws.amazon.com/forum.jspa?forumID=296">Amazon Web Services Secrets Manager Discussion Forum</a>. For more
 *       information about the Amazon Web Services Discussion Forums, see <a href="http://forums.aws.amazon.com/help.jspa">Forums
 *         Help</a>.</p>
 *
 *          <p>
 *             <b>How examples are presented</b>
 *          </p>
 *
 *          <p>The JSON that Amazon Web Services Secrets Manager expects as your request parameters and the service returns as a
 *       response to HTTP query requests contain single, long strings without line breaks or white
 *       space formatting. The JSON shown in the examples displays the code formatted with both line
 *       breaks and white space to improve readability. When example input parameters can also cause
 *       long strings extending beyond the screen, you can insert line breaks to enhance readability.
 *       You should always submit the input as a single JSON text string.</p>
 *
 *
 *          <p>
 *             <b>Logging API Requests</b>
 *          </p>
 *          <p>Amazon Web Services Secrets Manager supports Amazon Web Services CloudTrail, a service that records Amazon Web Services API calls for your Amazon Web Services
 *       account and delivers log files to an Amazon S3 bucket. By using information that's collected
 *       by Amazon Web Services CloudTrail, you can determine the requests successfully made to Secrets Manager, who made the
 *       request, when it was made, and so on. For more about Amazon Web Services Secrets Manager and support for Amazon Web Services
 *       CloudTrail, see <a href="http://docs.aws.amazon.com/secretsmanager/latest/userguide/monitoring.html#monitoring_cloudtrail">Logging
 *         Amazon Web Services Secrets Manager Events with Amazon Web Services CloudTrail</a> in the <i>Amazon Web Services Secrets Manager User Guide</i>.
 *       To learn more about CloudTrail, including enabling it and find your log files, see the <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/what_is_cloud_trail_top_level.html">Amazon Web Services CloudTrail User Guide</a>.</p>
 */
export class SecretsManagerClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  SecretsManagerClientResolvedConfig
> {
  /**
   * The resolved configuration of SecretsManagerClient class. This is resolved and normalized from the {@link SecretsManagerClientConfig | constructor configuration interface}.
   */
  readonly config: SecretsManagerClientResolvedConfig;

  constructor(configuration: SecretsManagerClientConfig) {
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
