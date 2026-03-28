// smithy-typescript generated code
import {
  AccountIdEndpointMode,
  AccountIdEndpointModeInputConfig,
  AccountIdEndpointModeResolvedConfig,
  resolveAccountIdEndpointModeConfig,
} from "@aws-sdk/core/account-id-endpoint";
import {
  type EndpointDiscoveryInputConfig,
  type EndpointDiscoveryResolvedConfig,
  resolveEndpointDiscoveryConfig,
} from "@aws-sdk/middleware-endpoint-discovery";
import {
  type HostHeaderInputConfig,
  type HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  type UserAgentInputConfig,
  type UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { type RegionInputConfig, type RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getSchemaSerdePlugin } from "@smithy/core/schema";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import {
  type EndpointInputConfig,
  type EndpointResolvedConfig,
  resolveEndpointConfig,
} from "@smithy/middleware-endpoint";
import {
  type RetryInputConfig,
  type RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig,
} from "@smithy/middleware-retry";
import type { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  type DefaultsMode as __DefaultsMode,
  type SmithyConfiguration as __SmithyConfiguration,
  type SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
  Client as __Client,
} from "@smithy/smithy-client";
import type {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultDynamoDBHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  BatchExecuteStatementCommandInput,
  BatchExecuteStatementCommandOutput,
} from "./commands/BatchExecuteStatementCommand";
import type { BatchGetItemCommandInput, BatchGetItemCommandOutput } from "./commands/BatchGetItemCommand";
import type { BatchWriteItemCommandInput, BatchWriteItemCommandOutput } from "./commands/BatchWriteItemCommand";
import type { CreateBackupCommandInput, CreateBackupCommandOutput } from "./commands/CreateBackupCommand";
import type {
  CreateGlobalTableCommandInput,
  CreateGlobalTableCommandOutput,
} from "./commands/CreateGlobalTableCommand";
import type { CreateTableCommandInput, CreateTableCommandOutput } from "./commands/CreateTableCommand";
import type { DeleteBackupCommandInput, DeleteBackupCommandOutput } from "./commands/DeleteBackupCommand";
import type { DeleteItemCommandInput, DeleteItemCommandOutput } from "./commands/DeleteItemCommand";
import type {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import type { DeleteTableCommandInput, DeleteTableCommandOutput } from "./commands/DeleteTableCommand";
import type { DescribeBackupCommandInput, DescribeBackupCommandOutput } from "./commands/DescribeBackupCommand";
import type {
  DescribeContinuousBackupsCommandInput,
  DescribeContinuousBackupsCommandOutput,
} from "./commands/DescribeContinuousBackupsCommand";
import type {
  DescribeContributorInsightsCommandInput,
  DescribeContributorInsightsCommandOutput,
} from "./commands/DescribeContributorInsightsCommand";
import {
  type DescribeEndpointsCommandInput,
  type DescribeEndpointsCommandOutput,
  DescribeEndpointsCommand,
} from "./commands/DescribeEndpointsCommand";
import type { DescribeExportCommandInput, DescribeExportCommandOutput } from "./commands/DescribeExportCommand";
import type {
  DescribeGlobalTableCommandInput,
  DescribeGlobalTableCommandOutput,
} from "./commands/DescribeGlobalTableCommand";
import type {
  DescribeGlobalTableSettingsCommandInput,
  DescribeGlobalTableSettingsCommandOutput,
} from "./commands/DescribeGlobalTableSettingsCommand";
import type { DescribeImportCommandInput, DescribeImportCommandOutput } from "./commands/DescribeImportCommand";
import type {
  DescribeKinesisStreamingDestinationCommandInput,
  DescribeKinesisStreamingDestinationCommandOutput,
} from "./commands/DescribeKinesisStreamingDestinationCommand";
import type { DescribeLimitsCommandInput, DescribeLimitsCommandOutput } from "./commands/DescribeLimitsCommand";
import type { DescribeTableCommandInput, DescribeTableCommandOutput } from "./commands/DescribeTableCommand";
import type {
  DescribeTableReplicaAutoScalingCommandInput,
  DescribeTableReplicaAutoScalingCommandOutput,
} from "./commands/DescribeTableReplicaAutoScalingCommand";
import type {
  DescribeTimeToLiveCommandInput,
  DescribeTimeToLiveCommandOutput,
} from "./commands/DescribeTimeToLiveCommand";
import type {
  DisableKinesisStreamingDestinationCommandInput,
  DisableKinesisStreamingDestinationCommandOutput,
} from "./commands/DisableKinesisStreamingDestinationCommand";
import type {
  EnableKinesisStreamingDestinationCommandInput,
  EnableKinesisStreamingDestinationCommandOutput,
} from "./commands/EnableKinesisStreamingDestinationCommand";
import type { ExecuteStatementCommandInput, ExecuteStatementCommandOutput } from "./commands/ExecuteStatementCommand";
import type {
  ExecuteTransactionCommandInput,
  ExecuteTransactionCommandOutput,
} from "./commands/ExecuteTransactionCommand";
import type {
  ExportTableToPointInTimeCommandInput,
  ExportTableToPointInTimeCommandOutput,
} from "./commands/ExportTableToPointInTimeCommand";
import type { GetItemCommandInput, GetItemCommandOutput } from "./commands/GetItemCommand";
import type {
  GetResourcePolicyCommandInput,
  GetResourcePolicyCommandOutput,
} from "./commands/GetResourcePolicyCommand";
import type { ImportTableCommandInput, ImportTableCommandOutput } from "./commands/ImportTableCommand";
import type { ListBackupsCommandInput, ListBackupsCommandOutput } from "./commands/ListBackupsCommand";
import type {
  ListContributorInsightsCommandInput,
  ListContributorInsightsCommandOutput,
} from "./commands/ListContributorInsightsCommand";
import type { ListExportsCommandInput, ListExportsCommandOutput } from "./commands/ListExportsCommand";
import type { ListGlobalTablesCommandInput, ListGlobalTablesCommandOutput } from "./commands/ListGlobalTablesCommand";
import type { ListImportsCommandInput, ListImportsCommandOutput } from "./commands/ListImportsCommand";
import type { ListTablesCommandInput, ListTablesCommandOutput } from "./commands/ListTablesCommand";
import type {
  ListTagsOfResourceCommandInput,
  ListTagsOfResourceCommandOutput,
} from "./commands/ListTagsOfResourceCommand";
import type { PutItemCommandInput, PutItemCommandOutput } from "./commands/PutItemCommand";
import type {
  PutResourcePolicyCommandInput,
  PutResourcePolicyCommandOutput,
} from "./commands/PutResourcePolicyCommand";
import type { QueryCommandInput, QueryCommandOutput } from "./commands/QueryCommand";
import type {
  RestoreTableFromBackupCommandInput,
  RestoreTableFromBackupCommandOutput,
} from "./commands/RestoreTableFromBackupCommand";
import type {
  RestoreTableToPointInTimeCommandInput,
  RestoreTableToPointInTimeCommandOutput,
} from "./commands/RestoreTableToPointInTimeCommand";
import type { ScanCommandInput, ScanCommandOutput } from "./commands/ScanCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { TransactGetItemsCommandInput, TransactGetItemsCommandOutput } from "./commands/TransactGetItemsCommand";
import type {
  TransactWriteItemsCommandInput,
  TransactWriteItemsCommandOutput,
} from "./commands/TransactWriteItemsCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type {
  UpdateContinuousBackupsCommandInput,
  UpdateContinuousBackupsCommandOutput,
} from "./commands/UpdateContinuousBackupsCommand";
import type {
  UpdateContributorInsightsCommandInput,
  UpdateContributorInsightsCommandOutput,
} from "./commands/UpdateContributorInsightsCommand";
import type {
  UpdateGlobalTableCommandInput,
  UpdateGlobalTableCommandOutput,
} from "./commands/UpdateGlobalTableCommand";
import type {
  UpdateGlobalTableSettingsCommandInput,
  UpdateGlobalTableSettingsCommandOutput,
} from "./commands/UpdateGlobalTableSettingsCommand";
import type { UpdateItemCommandInput, UpdateItemCommandOutput } from "./commands/UpdateItemCommand";
import type {
  UpdateKinesisStreamingDestinationCommandInput,
  UpdateKinesisStreamingDestinationCommandOutput,
} from "./commands/UpdateKinesisStreamingDestinationCommand";
import type { UpdateTableCommandInput, UpdateTableCommandOutput } from "./commands/UpdateTableCommand";
import type {
  UpdateTableReplicaAutoScalingCommandInput,
  UpdateTableReplicaAutoScalingCommandOutput,
} from "./commands/UpdateTableReplicaAutoScalingCommand";
import type { UpdateTimeToLiveCommandInput, UpdateTimeToLiveCommandOutput } from "./commands/UpdateTimeToLiveCommand";
import {
  type ClientInputEndpointParameters,
  type ClientResolvedEndpointParameters,
  type EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { type RuntimeExtension, type RuntimeExtensionsConfig, resolveRuntimeExtensions } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | BatchExecuteStatementCommandInput
  | BatchGetItemCommandInput
  | BatchWriteItemCommandInput
  | CreateBackupCommandInput
  | CreateGlobalTableCommandInput
  | CreateTableCommandInput
  | DeleteBackupCommandInput
  | DeleteItemCommandInput
  | DeleteResourcePolicyCommandInput
  | DeleteTableCommandInput
  | DescribeBackupCommandInput
  | DescribeContinuousBackupsCommandInput
  | DescribeContributorInsightsCommandInput
  | DescribeEndpointsCommandInput
  | DescribeExportCommandInput
  | DescribeGlobalTableCommandInput
  | DescribeGlobalTableSettingsCommandInput
  | DescribeImportCommandInput
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
  | GetResourcePolicyCommandInput
  | ImportTableCommandInput
  | ListBackupsCommandInput
  | ListContributorInsightsCommandInput
  | ListExportsCommandInput
  | ListGlobalTablesCommandInput
  | ListImportsCommandInput
  | ListTablesCommandInput
  | ListTagsOfResourceCommandInput
  | PutItemCommandInput
  | PutResourcePolicyCommandInput
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
  | UpdateKinesisStreamingDestinationCommandInput
  | UpdateTableCommandInput
  | UpdateTableReplicaAutoScalingCommandInput
  | UpdateTimeToLiveCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | BatchExecuteStatementCommandOutput
  | BatchGetItemCommandOutput
  | BatchWriteItemCommandOutput
  | CreateBackupCommandOutput
  | CreateGlobalTableCommandOutput
  | CreateTableCommandOutput
  | DeleteBackupCommandOutput
  | DeleteItemCommandOutput
  | DeleteResourcePolicyCommandOutput
  | DeleteTableCommandOutput
  | DescribeBackupCommandOutput
  | DescribeContinuousBackupsCommandOutput
  | DescribeContributorInsightsCommandOutput
  | DescribeEndpointsCommandOutput
  | DescribeExportCommandOutput
  | DescribeGlobalTableCommandOutput
  | DescribeGlobalTableSettingsCommandOutput
  | DescribeImportCommandOutput
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
  | GetResourcePolicyCommandOutput
  | ImportTableCommandOutput
  | ListBackupsCommandOutput
  | ListContributorInsightsCommandOutput
  | ListExportsCommandOutput
  | ListGlobalTablesCommandOutput
  | ListImportsCommandOutput
  | ListTablesCommandOutput
  | ListTagsOfResourceCommandOutput
  | PutItemCommandOutput
  | PutResourcePolicyCommandOutput
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
  | UpdateKinesisStreamingDestinationCommandOutput
  | UpdateTableCommandOutput
  | UpdateTableReplicaAutoScalingCommandOutput
  | UpdateTimeToLiveCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use or its constructor options. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandlerUserInput;

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
   * Setting a client profile is similar to setting a value for the
   * AWS_PROFILE environment variable. Setting a profile on a client
   * in code only affects the single client instance, unlike AWS_PROFILE.
   *
   * When set, and only for environments where an AWS configuration
   * file exists, fields configurable by this file will be retrieved
   * from the specified profile within that file.
   * Conflicting code configuration and environment variables will
   * still have higher priority.
   *
   * For client credential resolution that involves checking the AWS
   * configuration file, the client's profile (this value) will be
   * used unless a different profile is set in the credential
   * provider options.
   *
   */
  profile?: string;

  /**
   * Defines if the AWS AccountId will be used for endpoint routing.
   */
  accountIdEndpointMode?: AccountIdEndpointMode | __Provider<AccountIdEndpointMode>;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: __Provider<__UserAgent>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @deprecated
   * @internal
   */
  credentialDefaultProvider?: (input: any) => AwsCredentialIdentityProvider;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-smithy-util-retry/Enum/RETRY_MODES/
   *
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
  /**
   * The provider which populates default for endpointDiscoveryEnabled configuration, if it's
   * not passed during client creation.
   * @internal
   */
  endpointDiscoveryEnabledProvider?: __Provider<boolean | undefined>;

}

/**
 * @public
 */
export type DynamoDBClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  AccountIdEndpointModeInputConfig &
  UserAgentInputConfig &
  RetryInputConfig &
  RegionInputConfig &
  HostHeaderInputConfig &
  EndpointInputConfig<EndpointParameters> &
  HttpAuthSchemeInputConfig &
  EndpointDiscoveryInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of DynamoDBClient class constructor that set the region, credentials and other options.
 */
export interface DynamoDBClientConfig extends DynamoDBClientConfigType {}

/**
 * @public
 */
export type DynamoDBClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  AccountIdEndpointModeResolvedConfig &
  UserAgentResolvedConfig &
  RetryResolvedConfig &
  RegionResolvedConfig &
  HostHeaderResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  HttpAuthSchemeResolvedConfig &
  EndpointDiscoveryResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of DynamoDBClient class. This is resolved and normalized from the {@link DynamoDBClientConfig | constructor configuration interface}.
 */
export interface DynamoDBClientResolvedConfig extends DynamoDBClientResolvedConfigType {}

/**
 * <fullname>Amazon DynamoDB</fullname>
 *          <p>Amazon DynamoDB is a fully managed NoSQL database service that provides fast
 *             and predictable performance with seamless scalability. DynamoDB lets you
 *             offload the administrative burdens of operating and scaling a distributed database, so
 *             that you don't have to worry about hardware provisioning, setup and configuration,
 *             replication, software patching, or cluster scaling.</p>
 *          <p>With DynamoDB, you can create database tables that can store and retrieve
 *             any amount of data, and serve any level of request traffic. You can scale up or scale
 *             down your tables' throughput capacity without downtime or performance degradation, and
 *             use the Amazon Web Services Management Console to monitor resource utilization and performance
 *             metrics.</p>
 *          <p>DynamoDB automatically spreads the data and traffic for your tables over
 *             a sufficient number of servers to handle your throughput and storage requirements, while
 *             maintaining consistent and fast performance. All of your data is stored on solid state
 *             disks (SSDs) and automatically replicated across multiple Availability Zones in an
 *                 Amazon Web Services Region, providing built-in high availability and data
 *             durability.</p>
 * @public
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

  constructor(...[configuration]: __CheckOptionalClientConfig<DynamoDBClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    super(_config_0 as any);
    this.initConfig = _config_0;
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveAccountIdEndpointModeConfig(_config_1);
    const _config_3 = resolveUserAgentConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveRegionConfig(_config_4);
    const _config_6 = resolveHostHeaderConfig(_config_5);
    const _config_7 = resolveEndpointConfig(_config_6);
    const _config_8 = resolveHttpAuthSchemeConfig(_config_7);
    const _config_9 = resolveEndpointDiscoveryConfig(_config_8, { endpointDiscoveryCommandCtor: DescribeEndpointsCommand });
    const _config_10 = resolveRuntimeExtensions(_config_9, configuration?.extensions || []);
    this.config = _config_10;
    this.middlewareStack.use(getSchemaSerdePlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultDynamoDBHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: DynamoDBClientResolvedConfig) =>
          new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials,
          }),
      })
    );
    this.middlewareStack.use(getHttpSigningPlugin(this.config));
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
