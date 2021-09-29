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
  EndpointDiscoveryInputConfig,
  EndpointDiscoveryResolvedConfig,
  resolveEndpointDiscoveryConfig,
} from "@aws-sdk/middleware-endpoint-discovery";
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
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
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  RegionInfoProvider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

import {
  BatchExecuteStatementCommandInput,
  BatchExecuteStatementCommandOutput,
} from "./commands/BatchExecuteStatementCommand";
import { BatchGetItemCommandInput, BatchGetItemCommandOutput } from "./commands/BatchGetItemCommand";
import { BatchWriteItemCommandInput, BatchWriteItemCommandOutput } from "./commands/BatchWriteItemCommand";
import { CreateBackupCommandInput, CreateBackupCommandOutput } from "./commands/CreateBackupCommand";
import { CreateGlobalTableCommandInput, CreateGlobalTableCommandOutput } from "./commands/CreateGlobalTableCommand";
import { CreateTableCommandInput, CreateTableCommandOutput } from "./commands/CreateTableCommand";
import { DeleteBackupCommandInput, DeleteBackupCommandOutput } from "./commands/DeleteBackupCommand";
import { DeleteItemCommandInput, DeleteItemCommandOutput } from "./commands/DeleteItemCommand";
import { DeleteTableCommandInput, DeleteTableCommandOutput } from "./commands/DeleteTableCommand";
import { DescribeBackupCommandInput, DescribeBackupCommandOutput } from "./commands/DescribeBackupCommand";
import {
  DescribeContinuousBackupsCommandInput,
  DescribeContinuousBackupsCommandOutput,
} from "./commands/DescribeContinuousBackupsCommand";
import {
  DescribeContributorInsightsCommandInput,
  DescribeContributorInsightsCommandOutput,
} from "./commands/DescribeContributorInsightsCommand";
import {
  DescribeEndpointsCommand,
  DescribeEndpointsCommandInput,
  DescribeEndpointsCommandOutput,
} from "./commands/DescribeEndpointsCommand";
import { DescribeExportCommandInput, DescribeExportCommandOutput } from "./commands/DescribeExportCommand";
import {
  DescribeGlobalTableCommandInput,
  DescribeGlobalTableCommandOutput,
} from "./commands/DescribeGlobalTableCommand";
import {
  DescribeGlobalTableSettingsCommandInput,
  DescribeGlobalTableSettingsCommandOutput,
} from "./commands/DescribeGlobalTableSettingsCommand";
import {
  DescribeKinesisStreamingDestinationCommandInput,
  DescribeKinesisStreamingDestinationCommandOutput,
} from "./commands/DescribeKinesisStreamingDestinationCommand";
import { DescribeLimitsCommandInput, DescribeLimitsCommandOutput } from "./commands/DescribeLimitsCommand";
import { DescribeTableCommandInput, DescribeTableCommandOutput } from "./commands/DescribeTableCommand";
import {
  DescribeTableReplicaAutoScalingCommandInput,
  DescribeTableReplicaAutoScalingCommandOutput,
} from "./commands/DescribeTableReplicaAutoScalingCommand";
import { DescribeTimeToLiveCommandInput, DescribeTimeToLiveCommandOutput } from "./commands/DescribeTimeToLiveCommand";
import {
  DisableKinesisStreamingDestinationCommandInput,
  DisableKinesisStreamingDestinationCommandOutput,
} from "./commands/DisableKinesisStreamingDestinationCommand";
import {
  EnableKinesisStreamingDestinationCommandInput,
  EnableKinesisStreamingDestinationCommandOutput,
} from "./commands/EnableKinesisStreamingDestinationCommand";
import { ExecuteStatementCommandInput, ExecuteStatementCommandOutput } from "./commands/ExecuteStatementCommand";
import { ExecuteTransactionCommandInput, ExecuteTransactionCommandOutput } from "./commands/ExecuteTransactionCommand";
import {
  ExportTableToPointInTimeCommandInput,
  ExportTableToPointInTimeCommandOutput,
} from "./commands/ExportTableToPointInTimeCommand";
import { GetItemCommandInput, GetItemCommandOutput } from "./commands/GetItemCommand";
import { ListBackupsCommandInput, ListBackupsCommandOutput } from "./commands/ListBackupsCommand";
import {
  ListContributorInsightsCommandInput,
  ListContributorInsightsCommandOutput,
} from "./commands/ListContributorInsightsCommand";
import { ListExportsCommandInput, ListExportsCommandOutput } from "./commands/ListExportsCommand";
import { ListGlobalTablesCommandInput, ListGlobalTablesCommandOutput } from "./commands/ListGlobalTablesCommand";
import { ListTablesCommandInput, ListTablesCommandOutput } from "./commands/ListTablesCommand";
import { ListTagsOfResourceCommandInput, ListTagsOfResourceCommandOutput } from "./commands/ListTagsOfResourceCommand";
import { PutItemCommandInput, PutItemCommandOutput } from "./commands/PutItemCommand";
import { QueryCommandInput, QueryCommandOutput } from "./commands/QueryCommand";
import {
  RestoreTableFromBackupCommandInput,
  RestoreTableFromBackupCommandOutput,
} from "./commands/RestoreTableFromBackupCommand";
import {
  RestoreTableToPointInTimeCommandInput,
  RestoreTableToPointInTimeCommandOutput,
} from "./commands/RestoreTableToPointInTimeCommand";
import { ScanCommandInput, ScanCommandOutput } from "./commands/ScanCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { TransactGetItemsCommandInput, TransactGetItemsCommandOutput } from "./commands/TransactGetItemsCommand";
import { TransactWriteItemsCommandInput, TransactWriteItemsCommandOutput } from "./commands/TransactWriteItemsCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateContinuousBackupsCommandInput,
  UpdateContinuousBackupsCommandOutput,
} from "./commands/UpdateContinuousBackupsCommand";
import {
  UpdateContributorInsightsCommandInput,
  UpdateContributorInsightsCommandOutput,
} from "./commands/UpdateContributorInsightsCommand";
import { UpdateGlobalTableCommandInput, UpdateGlobalTableCommandOutput } from "./commands/UpdateGlobalTableCommand";
import {
  UpdateGlobalTableSettingsCommandInput,
  UpdateGlobalTableSettingsCommandOutput,
} from "./commands/UpdateGlobalTableSettingsCommand";
import { UpdateItemCommandInput, UpdateItemCommandOutput } from "./commands/UpdateItemCommand";
import { UpdateTableCommandInput, UpdateTableCommandOutput } from "./commands/UpdateTableCommand";
import {
  UpdateTableReplicaAutoScalingCommandInput,
  UpdateTableReplicaAutoScalingCommandOutput,
} from "./commands/UpdateTableReplicaAutoScalingCommand";
import { UpdateTimeToLiveCommandInput, UpdateTimeToLiveCommandOutput } from "./commands/UpdateTimeToLiveCommand";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | BatchExecuteStatementCommandInput
  | BatchGetItemCommandInput
  | BatchWriteItemCommandInput
  | CreateBackupCommandInput
  | CreateGlobalTableCommandInput
  | CreateTableCommandInput
  | DeleteBackupCommandInput
  | DeleteItemCommandInput
  | DeleteTableCommandInput
  | DescribeBackupCommandInput
  | DescribeContinuousBackupsCommandInput
  | DescribeContributorInsightsCommandInput
  | DescribeEndpointsCommandInput
  | DescribeExportCommandInput
  | DescribeGlobalTableCommandInput
  | DescribeGlobalTableSettingsCommandInput
  | DescribeKinesisStreamingDestinationCommandInput
  | DescribeLimitsCommandInput
  | DescribeTableCommandInput
  | DescribeTableReplicaAutoScalingCommandInput
  | DescribeTimeToLiveCommandInput
  | DisableKinesisStreamingDestinationCommandInput
  | EnableKinesisStreamingDestinationCommandInput
  | ExecuteStatementCommandInput
  | ExecuteTransactionCommandInput
  | ExportTableToPointInTimeCommandInput
  | GetItemCommandInput
  | ListBackupsCommandInput
  | ListContributorInsightsCommandInput
  | ListExportsCommandInput
  | ListGlobalTablesCommandInput
  | ListTablesCommandInput
  | ListTagsOfResourceCommandInput
  | PutItemCommandInput
  | QueryCommandInput
  | RestoreTableFromBackupCommandInput
  | RestoreTableToPointInTimeCommandInput
  | ScanCommandInput
  | TagResourceCommandInput
  | TransactGetItemsCommandInput
  | TransactWriteItemsCommandInput
  | UntagResourceCommandInput
  | UpdateContinuousBackupsCommandInput
  | UpdateContributorInsightsCommandInput
  | UpdateGlobalTableCommandInput
  | UpdateGlobalTableSettingsCommandInput
  | UpdateItemCommandInput
  | UpdateTableCommandInput
  | UpdateTableReplicaAutoScalingCommandInput
  | UpdateTimeToLiveCommandInput;

export type ServiceOutputTypes =
  | BatchExecuteStatementCommandOutput
  | BatchGetItemCommandOutput
  | BatchWriteItemCommandOutput
  | CreateBackupCommandOutput
  | CreateGlobalTableCommandOutput
  | CreateTableCommandOutput
  | DeleteBackupCommandOutput
  | DeleteItemCommandOutput
  | DeleteTableCommandOutput
  | DescribeBackupCommandOutput
  | DescribeContinuousBackupsCommandOutput
  | DescribeContributorInsightsCommandOutput
  | DescribeEndpointsCommandOutput
  | DescribeExportCommandOutput
  | DescribeGlobalTableCommandOutput
  | DescribeGlobalTableSettingsCommandOutput
  | DescribeKinesisStreamingDestinationCommandOutput
  | DescribeLimitsCommandOutput
  | DescribeTableCommandOutput
  | DescribeTableReplicaAutoScalingCommandOutput
  | DescribeTimeToLiveCommandOutput
  | DisableKinesisStreamingDestinationCommandOutput
  | EnableKinesisStreamingDestinationCommandOutput
  | ExecuteStatementCommandOutput
  | ExecuteTransactionCommandOutput
  | ExportTableToPointInTimeCommandOutput
  | GetItemCommandOutput
  | ListBackupsCommandOutput
  | ListContributorInsightsCommandOutput
  | ListExportsCommandOutput
  | ListGlobalTablesCommandOutput
  | ListTablesCommandOutput
  | ListTagsOfResourceCommandOutput
  | PutItemCommandOutput
  | QueryCommandOutput
  | RestoreTableFromBackupCommandOutput
  | RestoreTableToPointInTimeCommandOutput
  | ScanCommandOutput
  | TagResourceCommandOutput
  | TransactGetItemsCommandOutput
  | TransactWriteItemsCommandOutput
  | UntagResourceCommandOutput
  | UpdateContinuousBackupsCommandOutput
  | UpdateContributorInsightsCommandOutput
  | UpdateGlobalTableCommandOutput
  | UpdateGlobalTableSettingsCommandOutput
  | UpdateItemCommandOutput
  | UpdateTableCommandOutput
  | UpdateTableReplicaAutoScalingCommandOutput
  | UpdateTimeToLiveCommandOutput;

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

  /**
   * The provider which populates default for endpointDiscoveryEnabled configuration, if it's
   * not passed during client creation.
   * @internal
   */
  endpointDiscoveryEnabledProvider?: __Provider<boolean | undefined>;
}

type DynamoDBClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  EndpointDiscoveryInputConfig;
/**
 * The configuration interface of DynamoDBClient class constructor that set the region, credentials and other options.
 */
export interface DynamoDBClientConfig extends DynamoDBClientConfigType {}

type DynamoDBClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  EndpointDiscoveryResolvedConfig;
/**
 * The resolved configuration interface of DynamoDBClient class. This is resolved and normalized from the {@link DynamoDBClientConfig | constructor configuration interface}.
 */
export interface DynamoDBClientResolvedConfig extends DynamoDBClientResolvedConfigType {}

/**
 * <fullname>Amazon DynamoDB</fullname>
 *
 *
 *          <p>Amazon DynamoDB is a fully managed NoSQL database service that provides fast and
 *       predictable performance with seamless scalability. DynamoDB lets you offload the
 *       administrative burdens of operating and scaling a distributed database, so that you don't have
 *       to worry about hardware provisioning, setup and configuration, replication, software patching,
 *       or cluster scaling.</p>
 *
 *          <p>With DynamoDB, you can create database tables that can store and retrieve any amount of
 *       data, and serve any level of request traffic. You can scale up or scale down your tables'
 *       throughput capacity without downtime or performance degradation, and use the AWS Management
 *       Console to monitor resource utilization and performance metrics.</p>
 *
 *          <p>DynamoDB automatically spreads the data and traffic for your tables over a sufficient
 *       number of servers to handle your throughput and storage requirements, while maintaining
 *       consistent and fast performance. All of your data is stored on solid state disks (SSDs) and
 *       automatically replicated across multiple Availability Zones in an AWS region, providing
 *       built-in high availability and data durability. </p>
 */
export class DynamoDBClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  DynamoDBClientResolvedConfig
> {
  /**
   * The resolved configuration of DynamoDBClient class. This is resolved and normalized from the {@link DynamoDBClientConfig | constructor configuration interface}.
   */
  readonly config: DynamoDBClientResolvedConfig;

  constructor(configuration: DynamoDBClientConfig) {
    const _config_0 = __getRuntimeConfig(configuration);
    const _config_1 = resolveRegionConfig(_config_0);
    const _config_2 = resolveEndpointsConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveHostHeaderConfig(_config_3);
    const _config_5 = resolveAwsAuthConfig(_config_4);
    const _config_6 = resolveUserAgentConfig(_config_5);
    const _config_7 = resolveEndpointDiscoveryConfig(_config_6, {
      endpointDiscoveryCommandCtor: DescribeEndpointsCommand,
    });
    super(_config_7);
    this.config = _config_7;
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
