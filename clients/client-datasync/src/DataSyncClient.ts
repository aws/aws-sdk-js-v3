// smithy-typescript generated code
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
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
import { Credentials as __Credentials } from "@aws-sdk/types";
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/middleware-endpoint";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@smithy/middleware-retry";
import { HttpHandler as __HttpHandler } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  Checksum as __Checksum,
  ChecksumConstructor as __ChecksumConstructor,
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
} from "@smithy/types";

import { AddStorageSystemCommandInput, AddStorageSystemCommandOutput } from "./commands/AddStorageSystemCommand";
import {
  CancelTaskExecutionCommandInput,
  CancelTaskExecutionCommandOutput,
} from "./commands/CancelTaskExecutionCommand";
import { CreateAgentCommandInput, CreateAgentCommandOutput } from "./commands/CreateAgentCommand";
import {
  CreateLocationAzureBlobCommandInput,
  CreateLocationAzureBlobCommandOutput,
} from "./commands/CreateLocationAzureBlobCommand";
import { CreateLocationEfsCommandInput, CreateLocationEfsCommandOutput } from "./commands/CreateLocationEfsCommand";
import {
  CreateLocationFsxLustreCommandInput,
  CreateLocationFsxLustreCommandOutput,
} from "./commands/CreateLocationFsxLustreCommand";
import {
  CreateLocationFsxOntapCommandInput,
  CreateLocationFsxOntapCommandOutput,
} from "./commands/CreateLocationFsxOntapCommand";
import {
  CreateLocationFsxOpenZfsCommandInput,
  CreateLocationFsxOpenZfsCommandOutput,
} from "./commands/CreateLocationFsxOpenZfsCommand";
import {
  CreateLocationFsxWindowsCommandInput,
  CreateLocationFsxWindowsCommandOutput,
} from "./commands/CreateLocationFsxWindowsCommand";
import { CreateLocationHdfsCommandInput, CreateLocationHdfsCommandOutput } from "./commands/CreateLocationHdfsCommand";
import { CreateLocationNfsCommandInput, CreateLocationNfsCommandOutput } from "./commands/CreateLocationNfsCommand";
import {
  CreateLocationObjectStorageCommandInput,
  CreateLocationObjectStorageCommandOutput,
} from "./commands/CreateLocationObjectStorageCommand";
import { CreateLocationS3CommandInput, CreateLocationS3CommandOutput } from "./commands/CreateLocationS3Command";
import { CreateLocationSmbCommandInput, CreateLocationSmbCommandOutput } from "./commands/CreateLocationSmbCommand";
import { CreateTaskCommandInput, CreateTaskCommandOutput } from "./commands/CreateTaskCommand";
import { DeleteAgentCommandInput, DeleteAgentCommandOutput } from "./commands/DeleteAgentCommand";
import { DeleteLocationCommandInput, DeleteLocationCommandOutput } from "./commands/DeleteLocationCommand";
import { DeleteTaskCommandInput, DeleteTaskCommandOutput } from "./commands/DeleteTaskCommand";
import { DescribeAgentCommandInput, DescribeAgentCommandOutput } from "./commands/DescribeAgentCommand";
import {
  DescribeDiscoveryJobCommandInput,
  DescribeDiscoveryJobCommandOutput,
} from "./commands/DescribeDiscoveryJobCommand";
import {
  DescribeLocationAzureBlobCommandInput,
  DescribeLocationAzureBlobCommandOutput,
} from "./commands/DescribeLocationAzureBlobCommand";
import {
  DescribeLocationEfsCommandInput,
  DescribeLocationEfsCommandOutput,
} from "./commands/DescribeLocationEfsCommand";
import {
  DescribeLocationFsxLustreCommandInput,
  DescribeLocationFsxLustreCommandOutput,
} from "./commands/DescribeLocationFsxLustreCommand";
import {
  DescribeLocationFsxOntapCommandInput,
  DescribeLocationFsxOntapCommandOutput,
} from "./commands/DescribeLocationFsxOntapCommand";
import {
  DescribeLocationFsxOpenZfsCommandInput,
  DescribeLocationFsxOpenZfsCommandOutput,
} from "./commands/DescribeLocationFsxOpenZfsCommand";
import {
  DescribeLocationFsxWindowsCommandInput,
  DescribeLocationFsxWindowsCommandOutput,
} from "./commands/DescribeLocationFsxWindowsCommand";
import {
  DescribeLocationHdfsCommandInput,
  DescribeLocationHdfsCommandOutput,
} from "./commands/DescribeLocationHdfsCommand";
import {
  DescribeLocationNfsCommandInput,
  DescribeLocationNfsCommandOutput,
} from "./commands/DescribeLocationNfsCommand";
import {
  DescribeLocationObjectStorageCommandInput,
  DescribeLocationObjectStorageCommandOutput,
} from "./commands/DescribeLocationObjectStorageCommand";
import { DescribeLocationS3CommandInput, DescribeLocationS3CommandOutput } from "./commands/DescribeLocationS3Command";
import {
  DescribeLocationSmbCommandInput,
  DescribeLocationSmbCommandOutput,
} from "./commands/DescribeLocationSmbCommand";
import {
  DescribeStorageSystemCommandInput,
  DescribeStorageSystemCommandOutput,
} from "./commands/DescribeStorageSystemCommand";
import {
  DescribeStorageSystemResourceMetricsCommandInput,
  DescribeStorageSystemResourceMetricsCommandOutput,
} from "./commands/DescribeStorageSystemResourceMetricsCommand";
import {
  DescribeStorageSystemResourcesCommandInput,
  DescribeStorageSystemResourcesCommandOutput,
} from "./commands/DescribeStorageSystemResourcesCommand";
import { DescribeTaskCommandInput, DescribeTaskCommandOutput } from "./commands/DescribeTaskCommand";
import {
  DescribeTaskExecutionCommandInput,
  DescribeTaskExecutionCommandOutput,
} from "./commands/DescribeTaskExecutionCommand";
import {
  GenerateRecommendationsCommandInput,
  GenerateRecommendationsCommandOutput,
} from "./commands/GenerateRecommendationsCommand";
import { ListAgentsCommandInput, ListAgentsCommandOutput } from "./commands/ListAgentsCommand";
import { ListDiscoveryJobsCommandInput, ListDiscoveryJobsCommandOutput } from "./commands/ListDiscoveryJobsCommand";
import { ListLocationsCommandInput, ListLocationsCommandOutput } from "./commands/ListLocationsCommand";
import { ListStorageSystemsCommandInput, ListStorageSystemsCommandOutput } from "./commands/ListStorageSystemsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListTaskExecutionsCommandInput, ListTaskExecutionsCommandOutput } from "./commands/ListTaskExecutionsCommand";
import { ListTasksCommandInput, ListTasksCommandOutput } from "./commands/ListTasksCommand";
import {
  RemoveStorageSystemCommandInput,
  RemoveStorageSystemCommandOutput,
} from "./commands/RemoveStorageSystemCommand";
import { StartDiscoveryJobCommandInput, StartDiscoveryJobCommandOutput } from "./commands/StartDiscoveryJobCommand";
import { StartTaskExecutionCommandInput, StartTaskExecutionCommandOutput } from "./commands/StartTaskExecutionCommand";
import { StopDiscoveryJobCommandInput, StopDiscoveryJobCommandOutput } from "./commands/StopDiscoveryJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateAgentCommandInput, UpdateAgentCommandOutput } from "./commands/UpdateAgentCommand";
import { UpdateDiscoveryJobCommandInput, UpdateDiscoveryJobCommandOutput } from "./commands/UpdateDiscoveryJobCommand";
import {
  UpdateLocationAzureBlobCommandInput,
  UpdateLocationAzureBlobCommandOutput,
} from "./commands/UpdateLocationAzureBlobCommand";
import { UpdateLocationHdfsCommandInput, UpdateLocationHdfsCommandOutput } from "./commands/UpdateLocationHdfsCommand";
import { UpdateLocationNfsCommandInput, UpdateLocationNfsCommandOutput } from "./commands/UpdateLocationNfsCommand";
import {
  UpdateLocationObjectStorageCommandInput,
  UpdateLocationObjectStorageCommandOutput,
} from "./commands/UpdateLocationObjectStorageCommand";
import { UpdateLocationSmbCommandInput, UpdateLocationSmbCommandOutput } from "./commands/UpdateLocationSmbCommand";
import {
  UpdateStorageSystemCommandInput,
  UpdateStorageSystemCommandOutput,
} from "./commands/UpdateStorageSystemCommand";
import { UpdateTaskCommandInput, UpdateTaskCommandOutput } from "./commands/UpdateTaskCommand";
import {
  UpdateTaskExecutionCommandInput,
  UpdateTaskExecutionCommandOutput,
} from "./commands/UpdateTaskExecutionCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { resolveRuntimeExtensions, RuntimeExtension, RuntimeExtensionsConfig } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | AddStorageSystemCommandInput
  | CancelTaskExecutionCommandInput
  | CreateAgentCommandInput
  | CreateLocationAzureBlobCommandInput
  | CreateLocationEfsCommandInput
  | CreateLocationFsxLustreCommandInput
  | CreateLocationFsxOntapCommandInput
  | CreateLocationFsxOpenZfsCommandInput
  | CreateLocationFsxWindowsCommandInput
  | CreateLocationHdfsCommandInput
  | CreateLocationNfsCommandInput
  | CreateLocationObjectStorageCommandInput
  | CreateLocationS3CommandInput
  | CreateLocationSmbCommandInput
  | CreateTaskCommandInput
  | DeleteAgentCommandInput
  | DeleteLocationCommandInput
  | DeleteTaskCommandInput
  | DescribeAgentCommandInput
  | DescribeDiscoveryJobCommandInput
  | DescribeLocationAzureBlobCommandInput
  | DescribeLocationEfsCommandInput
  | DescribeLocationFsxLustreCommandInput
  | DescribeLocationFsxOntapCommandInput
  | DescribeLocationFsxOpenZfsCommandInput
  | DescribeLocationFsxWindowsCommandInput
  | DescribeLocationHdfsCommandInput
  | DescribeLocationNfsCommandInput
  | DescribeLocationObjectStorageCommandInput
  | DescribeLocationS3CommandInput
  | DescribeLocationSmbCommandInput
  | DescribeStorageSystemCommandInput
  | DescribeStorageSystemResourceMetricsCommandInput
  | DescribeStorageSystemResourcesCommandInput
  | DescribeTaskCommandInput
  | DescribeTaskExecutionCommandInput
  | GenerateRecommendationsCommandInput
  | ListAgentsCommandInput
  | ListDiscoveryJobsCommandInput
  | ListLocationsCommandInput
  | ListStorageSystemsCommandInput
  | ListTagsForResourceCommandInput
  | ListTaskExecutionsCommandInput
  | ListTasksCommandInput
  | RemoveStorageSystemCommandInput
  | StartDiscoveryJobCommandInput
  | StartTaskExecutionCommandInput
  | StopDiscoveryJobCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAgentCommandInput
  | UpdateDiscoveryJobCommandInput
  | UpdateLocationAzureBlobCommandInput
  | UpdateLocationHdfsCommandInput
  | UpdateLocationNfsCommandInput
  | UpdateLocationObjectStorageCommandInput
  | UpdateLocationSmbCommandInput
  | UpdateStorageSystemCommandInput
  | UpdateTaskCommandInput
  | UpdateTaskExecutionCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AddStorageSystemCommandOutput
  | CancelTaskExecutionCommandOutput
  | CreateAgentCommandOutput
  | CreateLocationAzureBlobCommandOutput
  | CreateLocationEfsCommandOutput
  | CreateLocationFsxLustreCommandOutput
  | CreateLocationFsxOntapCommandOutput
  | CreateLocationFsxOpenZfsCommandOutput
  | CreateLocationFsxWindowsCommandOutput
  | CreateLocationHdfsCommandOutput
  | CreateLocationNfsCommandOutput
  | CreateLocationObjectStorageCommandOutput
  | CreateLocationS3CommandOutput
  | CreateLocationSmbCommandOutput
  | CreateTaskCommandOutput
  | DeleteAgentCommandOutput
  | DeleteLocationCommandOutput
  | DeleteTaskCommandOutput
  | DescribeAgentCommandOutput
  | DescribeDiscoveryJobCommandOutput
  | DescribeLocationAzureBlobCommandOutput
  | DescribeLocationEfsCommandOutput
  | DescribeLocationFsxLustreCommandOutput
  | DescribeLocationFsxOntapCommandOutput
  | DescribeLocationFsxOpenZfsCommandOutput
  | DescribeLocationFsxWindowsCommandOutput
  | DescribeLocationHdfsCommandOutput
  | DescribeLocationNfsCommandOutput
  | DescribeLocationObjectStorageCommandOutput
  | DescribeLocationS3CommandOutput
  | DescribeLocationSmbCommandOutput
  | DescribeStorageSystemCommandOutput
  | DescribeStorageSystemResourceMetricsCommandOutput
  | DescribeStorageSystemResourcesCommandOutput
  | DescribeTaskCommandOutput
  | DescribeTaskExecutionCommandOutput
  | GenerateRecommendationsCommandOutput
  | ListAgentsCommandOutput
  | ListDiscoveryJobsCommandOutput
  | ListLocationsCommandOutput
  | ListStorageSystemsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTaskExecutionsCommandOutput
  | ListTasksCommandOutput
  | RemoveStorageSystemCommandOutput
  | StartDiscoveryJobCommandOutput
  | StartTaskExecutionCommandOutput
  | StopDiscoveryJobCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAgentCommandOutput
  | UpdateDiscoveryJobCommandOutput
  | UpdateLocationAzureBlobCommandOutput
  | UpdateLocationHdfsCommandOutput
  | UpdateLocationNfsCommandOutput
  | UpdateLocationObjectStorageCommandOutput
  | UpdateLocationSmbCommandOutput
  | UpdateStorageSystemCommandOutput
  | UpdateTaskCommandOutput
  | UpdateTaskExecutionCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link @smithy/types#ChecksumConstructor} interface
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
   * Disable dynamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

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
   * Optional extensions
   */
  extensions?: RuntimeExtension[];

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type DataSyncClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of DataSyncClient class constructor that set the region, credentials and other options.
 */
export interface DataSyncClientConfig extends DataSyncClientConfigType {}

/**
 * @public
 */
export type DataSyncClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of DataSyncClient class. This is resolved and normalized from the {@link DataSyncClientConfig | constructor configuration interface}.
 */
export interface DataSyncClientResolvedConfig extends DataSyncClientResolvedConfigType {}

/**
 * @public
 * <fullname>DataSync</fullname>
 *          <p>DataSync is an online data movement and discovery service that simplifies data migration
 *       and helps you quickly, easily, and securely transfer your file or object data to, from, and
 *       between Amazon Web Services storage services.</p>
 *          <p>This API interface reference includes documentation for using DataSync
 *       programmatically. For complete information, see the <i>
 *                <a href="https://docs.aws.amazon.com/datasync/latest/userguide/what-is-datasync.html">DataSync User
 *           Guide</a>
 *             </i>.</p>
 */
export class DataSyncClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  DataSyncClientResolvedConfig
> {
  /**
   * The resolved configuration of DataSyncClient class. This is resolved and normalized from the {@link DataSyncClientConfig | constructor configuration interface}.
   */
  readonly config: DataSyncClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<DataSyncClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveAwsAuthConfig(_config_5);
    const _config_7 = resolveUserAgentConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    super(_config_8);
    this.config = _config_8;
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
