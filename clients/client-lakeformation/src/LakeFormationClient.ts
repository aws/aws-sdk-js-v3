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
  SdkStreamMixinInjector as __SdkStreamMixinInjector,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

import {
  AddLFTagsToResourceCommandInput,
  AddLFTagsToResourceCommandOutput,
} from "./commands/AddLFTagsToResourceCommand";
import {
  AssumeDecoratedRoleWithSAMLCommandInput,
  AssumeDecoratedRoleWithSAMLCommandOutput,
} from "./commands/AssumeDecoratedRoleWithSAMLCommand";
import {
  BatchGrantPermissionsCommandInput,
  BatchGrantPermissionsCommandOutput,
} from "./commands/BatchGrantPermissionsCommand";
import {
  BatchRevokePermissionsCommandInput,
  BatchRevokePermissionsCommandOutput,
} from "./commands/BatchRevokePermissionsCommand";
import { CancelTransactionCommandInput, CancelTransactionCommandOutput } from "./commands/CancelTransactionCommand";
import { CommitTransactionCommandInput, CommitTransactionCommandOutput } from "./commands/CommitTransactionCommand";
import {
  CreateDataCellsFilterCommandInput,
  CreateDataCellsFilterCommandOutput,
} from "./commands/CreateDataCellsFilterCommand";
import { CreateLFTagCommandInput, CreateLFTagCommandOutput } from "./commands/CreateLFTagCommand";
import {
  DeleteDataCellsFilterCommandInput,
  DeleteDataCellsFilterCommandOutput,
} from "./commands/DeleteDataCellsFilterCommand";
import { DeleteLFTagCommandInput, DeleteLFTagCommandOutput } from "./commands/DeleteLFTagCommand";
import {
  DeleteObjectsOnCancelCommandInput,
  DeleteObjectsOnCancelCommandOutput,
} from "./commands/DeleteObjectsOnCancelCommand";
import { DeregisterResourceCommandInput, DeregisterResourceCommandOutput } from "./commands/DeregisterResourceCommand";
import { DescribeResourceCommandInput, DescribeResourceCommandOutput } from "./commands/DescribeResourceCommand";
import {
  DescribeTransactionCommandInput,
  DescribeTransactionCommandOutput,
} from "./commands/DescribeTransactionCommand";
import { ExtendTransactionCommandInput, ExtendTransactionCommandOutput } from "./commands/ExtendTransactionCommand";
import {
  GetDataLakeSettingsCommandInput,
  GetDataLakeSettingsCommandOutput,
} from "./commands/GetDataLakeSettingsCommand";
import {
  GetEffectivePermissionsForPathCommandInput,
  GetEffectivePermissionsForPathCommandOutput,
} from "./commands/GetEffectivePermissionsForPathCommand";
import { GetLFTagCommandInput, GetLFTagCommandOutput } from "./commands/GetLFTagCommand";
import { GetQueryStateCommandInput, GetQueryStateCommandOutput } from "./commands/GetQueryStateCommand";
import { GetQueryStatisticsCommandInput, GetQueryStatisticsCommandOutput } from "./commands/GetQueryStatisticsCommand";
import { GetResourceLFTagsCommandInput, GetResourceLFTagsCommandOutput } from "./commands/GetResourceLFTagsCommand";
import { GetTableObjectsCommandInput, GetTableObjectsCommandOutput } from "./commands/GetTableObjectsCommand";
import {
  GetTemporaryGluePartitionCredentialsCommandInput,
  GetTemporaryGluePartitionCredentialsCommandOutput,
} from "./commands/GetTemporaryGluePartitionCredentialsCommand";
import {
  GetTemporaryGlueTableCredentialsCommandInput,
  GetTemporaryGlueTableCredentialsCommandOutput,
} from "./commands/GetTemporaryGlueTableCredentialsCommand";
import { GetWorkUnitResultsCommandInput, GetWorkUnitResultsCommandOutput } from "./commands/GetWorkUnitResultsCommand";
import { GetWorkUnitsCommandInput, GetWorkUnitsCommandOutput } from "./commands/GetWorkUnitsCommand";
import { GrantPermissionsCommandInput, GrantPermissionsCommandOutput } from "./commands/GrantPermissionsCommand";
import {
  ListDataCellsFilterCommandInput,
  ListDataCellsFilterCommandOutput,
} from "./commands/ListDataCellsFilterCommand";
import { ListLFTagsCommandInput, ListLFTagsCommandOutput } from "./commands/ListLFTagsCommand";
import { ListPermissionsCommandInput, ListPermissionsCommandOutput } from "./commands/ListPermissionsCommand";
import { ListResourcesCommandInput, ListResourcesCommandOutput } from "./commands/ListResourcesCommand";
import {
  ListTableStorageOptimizersCommandInput,
  ListTableStorageOptimizersCommandOutput,
} from "./commands/ListTableStorageOptimizersCommand";
import { ListTransactionsCommandInput, ListTransactionsCommandOutput } from "./commands/ListTransactionsCommand";
import {
  PutDataLakeSettingsCommandInput,
  PutDataLakeSettingsCommandOutput,
} from "./commands/PutDataLakeSettingsCommand";
import { RegisterResourceCommandInput, RegisterResourceCommandOutput } from "./commands/RegisterResourceCommand";
import {
  RemoveLFTagsFromResourceCommandInput,
  RemoveLFTagsFromResourceCommandOutput,
} from "./commands/RemoveLFTagsFromResourceCommand";
import { RevokePermissionsCommandInput, RevokePermissionsCommandOutput } from "./commands/RevokePermissionsCommand";
import {
  SearchDatabasesByLFTagsCommandInput,
  SearchDatabasesByLFTagsCommandOutput,
} from "./commands/SearchDatabasesByLFTagsCommand";
import {
  SearchTablesByLFTagsCommandInput,
  SearchTablesByLFTagsCommandOutput,
} from "./commands/SearchTablesByLFTagsCommand";
import { StartQueryPlanningCommandInput, StartQueryPlanningCommandOutput } from "./commands/StartQueryPlanningCommand";
import { StartTransactionCommandInput, StartTransactionCommandOutput } from "./commands/StartTransactionCommand";
import { UpdateLFTagCommandInput, UpdateLFTagCommandOutput } from "./commands/UpdateLFTagCommand";
import { UpdateResourceCommandInput, UpdateResourceCommandOutput } from "./commands/UpdateResourceCommand";
import { UpdateTableObjectsCommandInput, UpdateTableObjectsCommandOutput } from "./commands/UpdateTableObjectsCommand";
import {
  UpdateTableStorageOptimizerCommandInput,
  UpdateTableStorageOptimizerCommandOutput,
} from "./commands/UpdateTableStorageOptimizerCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | AddLFTagsToResourceCommandInput
  | AssumeDecoratedRoleWithSAMLCommandInput
  | BatchGrantPermissionsCommandInput
  | BatchRevokePermissionsCommandInput
  | CancelTransactionCommandInput
  | CommitTransactionCommandInput
  | CreateDataCellsFilterCommandInput
  | CreateLFTagCommandInput
  | DeleteDataCellsFilterCommandInput
  | DeleteLFTagCommandInput
  | DeleteObjectsOnCancelCommandInput
  | DeregisterResourceCommandInput
  | DescribeResourceCommandInput
  | DescribeTransactionCommandInput
  | ExtendTransactionCommandInput
  | GetDataLakeSettingsCommandInput
  | GetEffectivePermissionsForPathCommandInput
  | GetLFTagCommandInput
  | GetQueryStateCommandInput
  | GetQueryStatisticsCommandInput
  | GetResourceLFTagsCommandInput
  | GetTableObjectsCommandInput
  | GetTemporaryGluePartitionCredentialsCommandInput
  | GetTemporaryGlueTableCredentialsCommandInput
  | GetWorkUnitResultsCommandInput
  | GetWorkUnitsCommandInput
  | GrantPermissionsCommandInput
  | ListDataCellsFilterCommandInput
  | ListLFTagsCommandInput
  | ListPermissionsCommandInput
  | ListResourcesCommandInput
  | ListTableStorageOptimizersCommandInput
  | ListTransactionsCommandInput
  | PutDataLakeSettingsCommandInput
  | RegisterResourceCommandInput
  | RemoveLFTagsFromResourceCommandInput
  | RevokePermissionsCommandInput
  | SearchDatabasesByLFTagsCommandInput
  | SearchTablesByLFTagsCommandInput
  | StartQueryPlanningCommandInput
  | StartTransactionCommandInput
  | UpdateLFTagCommandInput
  | UpdateResourceCommandInput
  | UpdateTableObjectsCommandInput
  | UpdateTableStorageOptimizerCommandInput;

export type ServiceOutputTypes =
  | AddLFTagsToResourceCommandOutput
  | AssumeDecoratedRoleWithSAMLCommandOutput
  | BatchGrantPermissionsCommandOutput
  | BatchRevokePermissionsCommandOutput
  | CancelTransactionCommandOutput
  | CommitTransactionCommandOutput
  | CreateDataCellsFilterCommandOutput
  | CreateLFTagCommandOutput
  | DeleteDataCellsFilterCommandOutput
  | DeleteLFTagCommandOutput
  | DeleteObjectsOnCancelCommandOutput
  | DeregisterResourceCommandOutput
  | DescribeResourceCommandOutput
  | DescribeTransactionCommandOutput
  | ExtendTransactionCommandOutput
  | GetDataLakeSettingsCommandOutput
  | GetEffectivePermissionsForPathCommandOutput
  | GetLFTagCommandOutput
  | GetQueryStateCommandOutput
  | GetQueryStatisticsCommandOutput
  | GetResourceLFTagsCommandOutput
  | GetTableObjectsCommandOutput
  | GetTemporaryGluePartitionCredentialsCommandOutput
  | GetTemporaryGlueTableCredentialsCommandOutput
  | GetWorkUnitResultsCommandOutput
  | GetWorkUnitsCommandOutput
  | GrantPermissionsCommandOutput
  | ListDataCellsFilterCommandOutput
  | ListLFTagsCommandOutput
  | ListPermissionsCommandOutput
  | ListResourcesCommandOutput
  | ListTableStorageOptimizersCommandOutput
  | ListTransactionsCommandOutput
  | PutDataLakeSettingsCommandOutput
  | RegisterResourceCommandOutput
  | RemoveLFTagsFromResourceCommandOutput
  | RevokePermissionsCommandOutput
  | SearchDatabasesByLFTagsCommandOutput
  | SearchTablesByLFTagsCommandOutput
  | StartQueryPlanningCommandOutput
  | StartTransactionCommandOutput
  | UpdateLFTagCommandOutput
  | UpdateResourceCommandOutput
  | UpdateTableObjectsCommandOutput
  | UpdateTableStorageOptimizerCommandOutput;

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
   * The {@link __DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;

  /**
   * The internal function that inject utilities to runtime-specific stream to help users consume the data
   * @internal
   */
  sdkStreamMixin?: __SdkStreamMixinInjector;
}

type LakeFormationClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of LakeFormationClient class constructor that set the region, credentials and other options.
 */
export interface LakeFormationClientConfig extends LakeFormationClientConfigType {}

type LakeFormationClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of LakeFormationClient class. This is resolved and normalized from the {@link LakeFormationClientConfig | constructor configuration interface}.
 */
export interface LakeFormationClientResolvedConfig extends LakeFormationClientResolvedConfigType {}

/**
 * <fullname>Lake Formation</fullname>
 *          <p>Defines the public endpoint for the Lake Formation service.</p>
 */
export class LakeFormationClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  LakeFormationClientResolvedConfig
> {
  /**
   * The resolved configuration of LakeFormationClient class. This is resolved and normalized from the {@link LakeFormationClientConfig | constructor configuration interface}.
   */
  readonly config: LakeFormationClientResolvedConfig;

  constructor(configuration: LakeFormationClientConfig) {
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
