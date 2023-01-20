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
  ConvertRecoveryPointToSnapshotCommandInput,
  ConvertRecoveryPointToSnapshotCommandOutput,
} from "./commands/ConvertRecoveryPointToSnapshotCommand";
import {
  CreateEndpointAccessCommandInput,
  CreateEndpointAccessCommandOutput,
} from "./commands/CreateEndpointAccessCommand";
import { CreateNamespaceCommandInput, CreateNamespaceCommandOutput } from "./commands/CreateNamespaceCommand";
import { CreateSnapshotCommandInput, CreateSnapshotCommandOutput } from "./commands/CreateSnapshotCommand";
import { CreateUsageLimitCommandInput, CreateUsageLimitCommandOutput } from "./commands/CreateUsageLimitCommand";
import { CreateWorkgroupCommandInput, CreateWorkgroupCommandOutput } from "./commands/CreateWorkgroupCommand";
import {
  DeleteEndpointAccessCommandInput,
  DeleteEndpointAccessCommandOutput,
} from "./commands/DeleteEndpointAccessCommand";
import { DeleteNamespaceCommandInput, DeleteNamespaceCommandOutput } from "./commands/DeleteNamespaceCommand";
import {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import { DeleteSnapshotCommandInput, DeleteSnapshotCommandOutput } from "./commands/DeleteSnapshotCommand";
import { DeleteUsageLimitCommandInput, DeleteUsageLimitCommandOutput } from "./commands/DeleteUsageLimitCommand";
import { DeleteWorkgroupCommandInput, DeleteWorkgroupCommandOutput } from "./commands/DeleteWorkgroupCommand";
import { GetCredentialsCommandInput, GetCredentialsCommandOutput } from "./commands/GetCredentialsCommand";
import { GetEndpointAccessCommandInput, GetEndpointAccessCommandOutput } from "./commands/GetEndpointAccessCommand";
import { GetNamespaceCommandInput, GetNamespaceCommandOutput } from "./commands/GetNamespaceCommand";
import { GetRecoveryPointCommandInput, GetRecoveryPointCommandOutput } from "./commands/GetRecoveryPointCommand";
import { GetResourcePolicyCommandInput, GetResourcePolicyCommandOutput } from "./commands/GetResourcePolicyCommand";
import { GetSnapshotCommandInput, GetSnapshotCommandOutput } from "./commands/GetSnapshotCommand";
import {
  GetTableRestoreStatusCommandInput,
  GetTableRestoreStatusCommandOutput,
} from "./commands/GetTableRestoreStatusCommand";
import { GetUsageLimitCommandInput, GetUsageLimitCommandOutput } from "./commands/GetUsageLimitCommand";
import { GetWorkgroupCommandInput, GetWorkgroupCommandOutput } from "./commands/GetWorkgroupCommand";
import { ListEndpointAccessCommandInput, ListEndpointAccessCommandOutput } from "./commands/ListEndpointAccessCommand";
import { ListNamespacesCommandInput, ListNamespacesCommandOutput } from "./commands/ListNamespacesCommand";
import { ListRecoveryPointsCommandInput, ListRecoveryPointsCommandOutput } from "./commands/ListRecoveryPointsCommand";
import { ListSnapshotsCommandInput, ListSnapshotsCommandOutput } from "./commands/ListSnapshotsCommand";
import {
  ListTableRestoreStatusCommandInput,
  ListTableRestoreStatusCommandOutput,
} from "./commands/ListTableRestoreStatusCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListUsageLimitsCommandInput, ListUsageLimitsCommandOutput } from "./commands/ListUsageLimitsCommand";
import { ListWorkgroupsCommandInput, ListWorkgroupsCommandOutput } from "./commands/ListWorkgroupsCommand";
import { PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput } from "./commands/PutResourcePolicyCommand";
import {
  RestoreFromRecoveryPointCommandInput,
  RestoreFromRecoveryPointCommandOutput,
} from "./commands/RestoreFromRecoveryPointCommand";
import {
  RestoreFromSnapshotCommandInput,
  RestoreFromSnapshotCommandOutput,
} from "./commands/RestoreFromSnapshotCommand";
import {
  RestoreTableFromSnapshotCommandInput,
  RestoreTableFromSnapshotCommandOutput,
} from "./commands/RestoreTableFromSnapshotCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateEndpointAccessCommandInput,
  UpdateEndpointAccessCommandOutput,
} from "./commands/UpdateEndpointAccessCommand";
import { UpdateNamespaceCommandInput, UpdateNamespaceCommandOutput } from "./commands/UpdateNamespaceCommand";
import { UpdateSnapshotCommandInput, UpdateSnapshotCommandOutput } from "./commands/UpdateSnapshotCommand";
import { UpdateUsageLimitCommandInput, UpdateUsageLimitCommandOutput } from "./commands/UpdateUsageLimitCommand";
import { UpdateWorkgroupCommandInput, UpdateWorkgroupCommandOutput } from "./commands/UpdateWorkgroupCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | ConvertRecoveryPointToSnapshotCommandInput
  | CreateEndpointAccessCommandInput
  | CreateNamespaceCommandInput
  | CreateSnapshotCommandInput
  | CreateUsageLimitCommandInput
  | CreateWorkgroupCommandInput
  | DeleteEndpointAccessCommandInput
  | DeleteNamespaceCommandInput
  | DeleteResourcePolicyCommandInput
  | DeleteSnapshotCommandInput
  | DeleteUsageLimitCommandInput
  | DeleteWorkgroupCommandInput
  | GetCredentialsCommandInput
  | GetEndpointAccessCommandInput
  | GetNamespaceCommandInput
  | GetRecoveryPointCommandInput
  | GetResourcePolicyCommandInput
  | GetSnapshotCommandInput
  | GetTableRestoreStatusCommandInput
  | GetUsageLimitCommandInput
  | GetWorkgroupCommandInput
  | ListEndpointAccessCommandInput
  | ListNamespacesCommandInput
  | ListRecoveryPointsCommandInput
  | ListSnapshotsCommandInput
  | ListTableRestoreStatusCommandInput
  | ListTagsForResourceCommandInput
  | ListUsageLimitsCommandInput
  | ListWorkgroupsCommandInput
  | PutResourcePolicyCommandInput
  | RestoreFromRecoveryPointCommandInput
  | RestoreFromSnapshotCommandInput
  | RestoreTableFromSnapshotCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateEndpointAccessCommandInput
  | UpdateNamespaceCommandInput
  | UpdateSnapshotCommandInput
  | UpdateUsageLimitCommandInput
  | UpdateWorkgroupCommandInput;

export type ServiceOutputTypes =
  | ConvertRecoveryPointToSnapshotCommandOutput
  | CreateEndpointAccessCommandOutput
  | CreateNamespaceCommandOutput
  | CreateSnapshotCommandOutput
  | CreateUsageLimitCommandOutput
  | CreateWorkgroupCommandOutput
  | DeleteEndpointAccessCommandOutput
  | DeleteNamespaceCommandOutput
  | DeleteResourcePolicyCommandOutput
  | DeleteSnapshotCommandOutput
  | DeleteUsageLimitCommandOutput
  | DeleteWorkgroupCommandOutput
  | GetCredentialsCommandOutput
  | GetEndpointAccessCommandOutput
  | GetNamespaceCommandOutput
  | GetRecoveryPointCommandOutput
  | GetResourcePolicyCommandOutput
  | GetSnapshotCommandOutput
  | GetTableRestoreStatusCommandOutput
  | GetUsageLimitCommandOutput
  | GetWorkgroupCommandOutput
  | ListEndpointAccessCommandOutput
  | ListNamespacesCommandOutput
  | ListRecoveryPointsCommandOutput
  | ListSnapshotsCommandOutput
  | ListTableRestoreStatusCommandOutput
  | ListTagsForResourceCommandOutput
  | ListUsageLimitsCommandOutput
  | ListWorkgroupsCommandOutput
  | PutResourcePolicyCommandOutput
  | RestoreFromRecoveryPointCommandOutput
  | RestoreFromSnapshotCommandOutput
  | RestoreTableFromSnapshotCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateEndpointAccessCommandOutput
  | UpdateNamespaceCommandOutput
  | UpdateSnapshotCommandOutput
  | UpdateUsageLimitCommandOutput
  | UpdateWorkgroupCommandOutput;

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

type RedshiftServerlessClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of RedshiftServerlessClient class constructor that set the region, credentials and other options.
 */
export interface RedshiftServerlessClientConfig extends RedshiftServerlessClientConfigType {}

type RedshiftServerlessClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of RedshiftServerlessClient class. This is resolved and normalized from the {@link RedshiftServerlessClientConfig | constructor configuration interface}.
 */
export interface RedshiftServerlessClientResolvedConfig extends RedshiftServerlessClientResolvedConfigType {}

/**
 * <p>This is an interface reference for Amazon Redshift Serverless.
 *            It contains documentation for one of the programming or command line interfaces you can use to manage Amazon Redshift Serverless.
 *         </p>
 *         <p>Amazon Redshift Serverless automatically provisions data warehouse capacity and intelligently scales the
 *            underlying resources based on workload demands. Amazon Redshift Serverless adjusts capacity in seconds to deliver consistently high
 *            performance and simplified operations for even the most demanding and volatile workloads. Amazon Redshift Serverless lets you
 *            focus on using your data to acquire new insights for your business and customers.
 *         </p>
 *         <p>
 *            To learn more about Amazon Redshift Serverless,
 *            see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/serverless-whatis.html">What is Amazon Redshift Serverless</a>.
 *         </p>
 */
export class RedshiftServerlessClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  RedshiftServerlessClientResolvedConfig
> {
  /**
   * The resolved configuration of RedshiftServerlessClient class. This is resolved and normalized from the {@link RedshiftServerlessClientConfig | constructor configuration interface}.
   */
  readonly config: RedshiftServerlessClientResolvedConfig;

  constructor(configuration: RedshiftServerlessClientConfig) {
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
