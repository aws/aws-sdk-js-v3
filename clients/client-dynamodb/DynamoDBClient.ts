import {
  BatchGetItemCommandInput,
  BatchGetItemCommandOutput
} from "./commands/BatchGetItemCommand";
import {
  BatchWriteItemCommandInput,
  BatchWriteItemCommandOutput
} from "./commands/BatchWriteItemCommand";
import {
  CreateBackupCommandInput,
  CreateBackupCommandOutput
} from "./commands/CreateBackupCommand";
import {
  CreateGlobalTableCommandInput,
  CreateGlobalTableCommandOutput
} from "./commands/CreateGlobalTableCommand";
import {
  CreateTableCommandInput,
  CreateTableCommandOutput
} from "./commands/CreateTableCommand";
import {
  DeleteBackupCommandInput,
  DeleteBackupCommandOutput
} from "./commands/DeleteBackupCommand";
import {
  DeleteItemCommandInput,
  DeleteItemCommandOutput
} from "./commands/DeleteItemCommand";
import {
  DeleteTableCommandInput,
  DeleteTableCommandOutput
} from "./commands/DeleteTableCommand";
import {
  DescribeBackupCommandInput,
  DescribeBackupCommandOutput
} from "./commands/DescribeBackupCommand";
import {
  DescribeContinuousBackupsCommandInput,
  DescribeContinuousBackupsCommandOutput
} from "./commands/DescribeContinuousBackupsCommand";
import {
  DescribeContributorInsightsCommandInput,
  DescribeContributorInsightsCommandOutput
} from "./commands/DescribeContributorInsightsCommand";
import {
  DescribeEndpointsCommandInput,
  DescribeEndpointsCommandOutput
} from "./commands/DescribeEndpointsCommand";
import {
  DescribeGlobalTableCommandInput,
  DescribeGlobalTableCommandOutput
} from "./commands/DescribeGlobalTableCommand";
import {
  DescribeGlobalTableSettingsCommandInput,
  DescribeGlobalTableSettingsCommandOutput
} from "./commands/DescribeGlobalTableSettingsCommand";
import {
  DescribeLimitsCommandInput,
  DescribeLimitsCommandOutput
} from "./commands/DescribeLimitsCommand";
import {
  DescribeTableCommandInput,
  DescribeTableCommandOutput
} from "./commands/DescribeTableCommand";
import {
  DescribeTableReplicaAutoScalingCommandInput,
  DescribeTableReplicaAutoScalingCommandOutput
} from "./commands/DescribeTableReplicaAutoScalingCommand";
import {
  DescribeTimeToLiveCommandInput,
  DescribeTimeToLiveCommandOutput
} from "./commands/DescribeTimeToLiveCommand";
import {
  GetItemCommandInput,
  GetItemCommandOutput
} from "./commands/GetItemCommand";
import {
  ListBackupsCommandInput,
  ListBackupsCommandOutput
} from "./commands/ListBackupsCommand";
import {
  ListContributorInsightsCommandInput,
  ListContributorInsightsCommandOutput
} from "./commands/ListContributorInsightsCommand";
import {
  ListGlobalTablesCommandInput,
  ListGlobalTablesCommandOutput
} from "./commands/ListGlobalTablesCommand";
import {
  ListTablesCommandInput,
  ListTablesCommandOutput
} from "./commands/ListTablesCommand";
import {
  ListTagsOfResourceCommandInput,
  ListTagsOfResourceCommandOutput
} from "./commands/ListTagsOfResourceCommand";
import {
  PutItemCommandInput,
  PutItemCommandOutput
} from "./commands/PutItemCommand";
import { QueryCommandInput, QueryCommandOutput } from "./commands/QueryCommand";
import {
  RestoreTableFromBackupCommandInput,
  RestoreTableFromBackupCommandOutput
} from "./commands/RestoreTableFromBackupCommand";
import {
  RestoreTableToPointInTimeCommandInput,
  RestoreTableToPointInTimeCommandOutput
} from "./commands/RestoreTableToPointInTimeCommand";
import { ScanCommandInput, ScanCommandOutput } from "./commands/ScanCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "./commands/TagResourceCommand";
import {
  TransactGetItemsCommandInput,
  TransactGetItemsCommandOutput
} from "./commands/TransactGetItemsCommand";
import {
  TransactWriteItemsCommandInput,
  TransactWriteItemsCommandOutput
} from "./commands/TransactWriteItemsCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "./commands/UntagResourceCommand";
import {
  UpdateContinuousBackupsCommandInput,
  UpdateContinuousBackupsCommandOutput
} from "./commands/UpdateContinuousBackupsCommand";
import {
  UpdateContributorInsightsCommandInput,
  UpdateContributorInsightsCommandOutput
} from "./commands/UpdateContributorInsightsCommand";
import {
  UpdateGlobalTableCommandInput,
  UpdateGlobalTableCommandOutput
} from "./commands/UpdateGlobalTableCommand";
import {
  UpdateGlobalTableSettingsCommandInput,
  UpdateGlobalTableSettingsCommandOutput
} from "./commands/UpdateGlobalTableSettingsCommand";
import {
  UpdateItemCommandInput,
  UpdateItemCommandOutput
} from "./commands/UpdateItemCommand";
import {
  UpdateTableCommandInput,
  UpdateTableCommandOutput
} from "./commands/UpdateTableCommand";
import {
  UpdateTableReplicaAutoScalingCommandInput,
  UpdateTableReplicaAutoScalingCommandOutput
} from "./commands/UpdateTableReplicaAutoScalingCommand";
import {
  UpdateTimeToLiveCommandInput,
  UpdateTimeToLiveCommandOutput
} from "./commands/UpdateTimeToLiveCommand";
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
  | DescribeGlobalTableCommandInput
  | DescribeGlobalTableSettingsCommandInput
  | DescribeLimitsCommandInput
  | DescribeTableCommandInput
  | DescribeTableReplicaAutoScalingCommandInput
  | DescribeTimeToLiveCommandInput
  | GetItemCommandInput
  | ListBackupsCommandInput
  | ListContributorInsightsCommandInput
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
  | DescribeGlobalTableCommandOutput
  | DescribeGlobalTableSettingsCommandOutput
  | DescribeLimitsCommandOutput
  | DescribeTableCommandOutput
  | DescribeTableReplicaAutoScalingCommandOutput
  | DescribeTimeToLiveCommandOutput
  | GetItemCommandOutput
  | ListBackupsCommandOutput
  | ListContributorInsightsCommandOutput
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

export type DynamoDBClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type DynamoDBClientResolvedConfig = __SmithyResolvedConfiguration<
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
  readonly config: DynamoDBClientResolvedConfig;

  constructor(configuration: DynamoDBClientConfig) {
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
