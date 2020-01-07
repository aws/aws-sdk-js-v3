import {
  BatchGetItemInput,
  BatchGetItemOutput,
  BatchWriteItemInput,
  BatchWriteItemOutput,
  CreateBackupInput,
  CreateBackupOutput,
  CreateGlobalTableInput,
  CreateGlobalTableOutput,
  CreateTableInput,
  CreateTableOutput,
  DeleteBackupInput,
  DeleteBackupOutput,
  DeleteItemInput,
  DeleteItemOutput,
  DeleteTableInput,
  DeleteTableOutput,
  DescribeBackupInput,
  DescribeBackupOutput,
  DescribeContinuousBackupsInput,
  DescribeContinuousBackupsOutput,
  DescribeContributorInsightsInput,
  DescribeContributorInsightsOutput,
  DescribeEndpointsRequest,
  DescribeEndpointsResponse,
  DescribeGlobalTableInput,
  DescribeGlobalTableOutput,
  DescribeGlobalTableSettingsInput,
  DescribeGlobalTableSettingsOutput,
  DescribeLimitsInput,
  DescribeLimitsOutput,
  DescribeTableInput,
  DescribeTableOutput,
  DescribeTableReplicaAutoScalingInput,
  DescribeTableReplicaAutoScalingOutput,
  DescribeTimeToLiveInput,
  DescribeTimeToLiveOutput,
  GetItemInput,
  GetItemOutput,
  ListBackupsInput,
  ListBackupsOutput,
  ListContributorInsightsInput,
  ListContributorInsightsOutput,
  ListGlobalTablesInput,
  ListGlobalTablesOutput,
  ListTablesInput,
  ListTablesOutput,
  ListTagsOfResourceInput,
  ListTagsOfResourceOutput,
  PutItemInput,
  PutItemOutput,
  QueryInput,
  QueryOutput,
  RestoreTableFromBackupInput,
  RestoreTableFromBackupOutput,
  RestoreTableToPointInTimeInput,
  RestoreTableToPointInTimeOutput,
  ScanInput,
  ScanOutput,
  TagResourceInput,
  TransactGetItemsInput,
  TransactGetItemsOutput,
  TransactWriteItemsInput,
  TransactWriteItemsOutput,
  UntagResourceInput,
  UpdateContinuousBackupsInput,
  UpdateContinuousBackupsOutput,
  UpdateContributorInsightsInput,
  UpdateContributorInsightsOutput,
  UpdateGlobalTableInput,
  UpdateGlobalTableOutput,
  UpdateGlobalTableSettingsInput,
  UpdateGlobalTableSettingsOutput,
  UpdateItemInput,
  UpdateItemOutput,
  UpdateTableInput,
  UpdateTableOutput,
  UpdateTableReplicaAutoScalingInput,
  UpdateTableReplicaAutoScalingOutput,
  UpdateTimeToLiveInput,
  UpdateTimeToLiveOutput
} from "./models/index";
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
  MetadataBearer as __MetadataBearer,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | BatchGetItemInput
  | BatchWriteItemInput
  | CreateBackupInput
  | CreateGlobalTableInput
  | CreateTableInput
  | DeleteBackupInput
  | DeleteItemInput
  | DeleteTableInput
  | DescribeBackupInput
  | DescribeContinuousBackupsInput
  | DescribeContributorInsightsInput
  | DescribeEndpointsRequest
  | DescribeGlobalTableInput
  | DescribeGlobalTableSettingsInput
  | DescribeLimitsInput
  | DescribeTableInput
  | DescribeTableReplicaAutoScalingInput
  | DescribeTimeToLiveInput
  | GetItemInput
  | ListBackupsInput
  | ListContributorInsightsInput
  | ListGlobalTablesInput
  | ListTablesInput
  | ListTagsOfResourceInput
  | PutItemInput
  | QueryInput
  | RestoreTableFromBackupInput
  | RestoreTableToPointInTimeInput
  | ScanInput
  | TagResourceInput
  | TransactGetItemsInput
  | TransactWriteItemsInput
  | UntagResourceInput
  | UpdateContinuousBackupsInput
  | UpdateContributorInsightsInput
  | UpdateGlobalTableInput
  | UpdateGlobalTableSettingsInput
  | UpdateItemInput
  | UpdateTableInput
  | UpdateTableReplicaAutoScalingInput
  | UpdateTimeToLiveInput;

export type ServiceOutputTypes =
  | __MetadataBearer
  | BatchGetItemOutput
  | BatchWriteItemOutput
  | CreateBackupOutput
  | CreateGlobalTableOutput
  | CreateTableOutput
  | DeleteBackupOutput
  | DeleteItemOutput
  | DeleteTableOutput
  | DescribeBackupOutput
  | DescribeContinuousBackupsOutput
  | DescribeContributorInsightsOutput
  | DescribeEndpointsResponse
  | DescribeGlobalTableOutput
  | DescribeGlobalTableSettingsOutput
  | DescribeLimitsOutput
  | DescribeTableOutput
  | DescribeTableReplicaAutoScalingOutput
  | DescribeTimeToLiveOutput
  | GetItemOutput
  | ListBackupsOutput
  | ListContributorInsightsOutput
  | ListGlobalTablesOutput
  | ListTablesOutput
  | ListTagsOfResourceOutput
  | PutItemOutput
  | QueryOutput
  | RestoreTableFromBackupOutput
  | RestoreTableToPointInTimeOutput
  | ScanOutput
  | TransactGetItemsOutput
  | TransactWriteItemsOutput
  | UpdateContinuousBackupsOutput
  | UpdateContributorInsightsOutput
  | UpdateGlobalTableOutput
  | UpdateGlobalTableSettingsOutput
  | UpdateItemOutput
  | UpdateTableOutput
  | UpdateTableReplicaAutoScalingOutput
  | UpdateTimeToLiveOutput;

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
 *
 *          <fullname>Amazon DynamoDB</fullname>
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
 *
 *
 *
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
