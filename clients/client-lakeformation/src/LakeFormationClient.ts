// smithy-typescript generated code
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
  SdkStreamMixinInjector as __SdkStreamMixinInjector,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultLakeFormationHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  AddLFTagsToResourceCommandInput,
  AddLFTagsToResourceCommandOutput,
} from "./commands/AddLFTagsToResourceCommand";
import type {
  AssumeDecoratedRoleWithSAMLCommandInput,
  AssumeDecoratedRoleWithSAMLCommandOutput,
} from "./commands/AssumeDecoratedRoleWithSAMLCommand";
import type {
  BatchGrantPermissionsCommandInput,
  BatchGrantPermissionsCommandOutput,
} from "./commands/BatchGrantPermissionsCommand";
import type {
  BatchRevokePermissionsCommandInput,
  BatchRevokePermissionsCommandOutput,
} from "./commands/BatchRevokePermissionsCommand";
import type {
  CancelTransactionCommandInput,
  CancelTransactionCommandOutput,
} from "./commands/CancelTransactionCommand";
import type {
  CommitTransactionCommandInput,
  CommitTransactionCommandOutput,
} from "./commands/CommitTransactionCommand";
import type {
  CreateDataCellsFilterCommandInput,
  CreateDataCellsFilterCommandOutput,
} from "./commands/CreateDataCellsFilterCommand";
import type {
  CreateLakeFormationIdentityCenterConfigurationCommandInput,
  CreateLakeFormationIdentityCenterConfigurationCommandOutput,
} from "./commands/CreateLakeFormationIdentityCenterConfigurationCommand";
import type {
  CreateLakeFormationOptInCommandInput,
  CreateLakeFormationOptInCommandOutput,
} from "./commands/CreateLakeFormationOptInCommand";
import type { CreateLFTagCommandInput, CreateLFTagCommandOutput } from "./commands/CreateLFTagCommand";
import type {
  CreateLFTagExpressionCommandInput,
  CreateLFTagExpressionCommandOutput,
} from "./commands/CreateLFTagExpressionCommand";
import type {
  DeleteDataCellsFilterCommandInput,
  DeleteDataCellsFilterCommandOutput,
} from "./commands/DeleteDataCellsFilterCommand";
import type {
  DeleteLakeFormationIdentityCenterConfigurationCommandInput,
  DeleteLakeFormationIdentityCenterConfigurationCommandOutput,
} from "./commands/DeleteLakeFormationIdentityCenterConfigurationCommand";
import type {
  DeleteLakeFormationOptInCommandInput,
  DeleteLakeFormationOptInCommandOutput,
} from "./commands/DeleteLakeFormationOptInCommand";
import type { DeleteLFTagCommandInput, DeleteLFTagCommandOutput } from "./commands/DeleteLFTagCommand";
import type {
  DeleteLFTagExpressionCommandInput,
  DeleteLFTagExpressionCommandOutput,
} from "./commands/DeleteLFTagExpressionCommand";
import type {
  DeleteObjectsOnCancelCommandInput,
  DeleteObjectsOnCancelCommandOutput,
} from "./commands/DeleteObjectsOnCancelCommand";
import type {
  DeregisterResourceCommandInput,
  DeregisterResourceCommandOutput,
} from "./commands/DeregisterResourceCommand";
import type {
  DescribeLakeFormationIdentityCenterConfigurationCommandInput,
  DescribeLakeFormationIdentityCenterConfigurationCommandOutput,
} from "./commands/DescribeLakeFormationIdentityCenterConfigurationCommand";
import type { DescribeResourceCommandInput, DescribeResourceCommandOutput } from "./commands/DescribeResourceCommand";
import type {
  DescribeTransactionCommandInput,
  DescribeTransactionCommandOutput,
} from "./commands/DescribeTransactionCommand";
import type {
  ExtendTransactionCommandInput,
  ExtendTransactionCommandOutput,
} from "./commands/ExtendTransactionCommand";
import type {
  GetDataCellsFilterCommandInput,
  GetDataCellsFilterCommandOutput,
} from "./commands/GetDataCellsFilterCommand";
import type {
  GetDataLakePrincipalCommandInput,
  GetDataLakePrincipalCommandOutput,
} from "./commands/GetDataLakePrincipalCommand";
import type {
  GetDataLakeSettingsCommandInput,
  GetDataLakeSettingsCommandOutput,
} from "./commands/GetDataLakeSettingsCommand";
import type {
  GetEffectivePermissionsForPathCommandInput,
  GetEffectivePermissionsForPathCommandOutput,
} from "./commands/GetEffectivePermissionsForPathCommand";
import type { GetLFTagCommandInput, GetLFTagCommandOutput } from "./commands/GetLFTagCommand";
import type {
  GetLFTagExpressionCommandInput,
  GetLFTagExpressionCommandOutput,
} from "./commands/GetLFTagExpressionCommand";
import type { GetQueryStateCommandInput, GetQueryStateCommandOutput } from "./commands/GetQueryStateCommand";
import type {
  GetQueryStatisticsCommandInput,
  GetQueryStatisticsCommandOutput,
} from "./commands/GetQueryStatisticsCommand";
import type {
  GetResourceLFTagsCommandInput,
  GetResourceLFTagsCommandOutput,
} from "./commands/GetResourceLFTagsCommand";
import type { GetTableObjectsCommandInput, GetTableObjectsCommandOutput } from "./commands/GetTableObjectsCommand";
import type {
  GetTemporaryDataLocationCredentialsCommandInput,
  GetTemporaryDataLocationCredentialsCommandOutput,
} from "./commands/GetTemporaryDataLocationCredentialsCommand";
import type {
  GetTemporaryGluePartitionCredentialsCommandInput,
  GetTemporaryGluePartitionCredentialsCommandOutput,
} from "./commands/GetTemporaryGluePartitionCredentialsCommand";
import type {
  GetTemporaryGlueTableCredentialsCommandInput,
  GetTemporaryGlueTableCredentialsCommandOutput,
} from "./commands/GetTemporaryGlueTableCredentialsCommand";
import type {
  GetWorkUnitResultsCommandInput,
  GetWorkUnitResultsCommandOutput,
} from "./commands/GetWorkUnitResultsCommand";
import type { GetWorkUnitsCommandInput, GetWorkUnitsCommandOutput } from "./commands/GetWorkUnitsCommand";
import type { GrantPermissionsCommandInput, GrantPermissionsCommandOutput } from "./commands/GrantPermissionsCommand";
import type {
  ListDataCellsFilterCommandInput,
  ListDataCellsFilterCommandOutput,
} from "./commands/ListDataCellsFilterCommand";
import type {
  ListLakeFormationOptInsCommandInput,
  ListLakeFormationOptInsCommandOutput,
} from "./commands/ListLakeFormationOptInsCommand";
import type {
  ListLFTagExpressionsCommandInput,
  ListLFTagExpressionsCommandOutput,
} from "./commands/ListLFTagExpressionsCommand";
import type { ListLFTagsCommandInput, ListLFTagsCommandOutput } from "./commands/ListLFTagsCommand";
import type { ListPermissionsCommandInput, ListPermissionsCommandOutput } from "./commands/ListPermissionsCommand";
import type { ListResourcesCommandInput, ListResourcesCommandOutput } from "./commands/ListResourcesCommand";
import type {
  ListTableStorageOptimizersCommandInput,
  ListTableStorageOptimizersCommandOutput,
} from "./commands/ListTableStorageOptimizersCommand";
import type { ListTransactionsCommandInput, ListTransactionsCommandOutput } from "./commands/ListTransactionsCommand";
import type {
  PutDataLakeSettingsCommandInput,
  PutDataLakeSettingsCommandOutput,
} from "./commands/PutDataLakeSettingsCommand";
import type { RegisterResourceCommandInput, RegisterResourceCommandOutput } from "./commands/RegisterResourceCommand";
import type {
  RemoveLFTagsFromResourceCommandInput,
  RemoveLFTagsFromResourceCommandOutput,
} from "./commands/RemoveLFTagsFromResourceCommand";
import type {
  RevokePermissionsCommandInput,
  RevokePermissionsCommandOutput,
} from "./commands/RevokePermissionsCommand";
import type {
  SearchDatabasesByLFTagsCommandInput,
  SearchDatabasesByLFTagsCommandOutput,
} from "./commands/SearchDatabasesByLFTagsCommand";
import type {
  SearchTablesByLFTagsCommandInput,
  SearchTablesByLFTagsCommandOutput,
} from "./commands/SearchTablesByLFTagsCommand";
import type {
  StartQueryPlanningCommandInput,
  StartQueryPlanningCommandOutput,
} from "./commands/StartQueryPlanningCommand";
import type { StartTransactionCommandInput, StartTransactionCommandOutput } from "./commands/StartTransactionCommand";
import type {
  UpdateDataCellsFilterCommandInput,
  UpdateDataCellsFilterCommandOutput,
} from "./commands/UpdateDataCellsFilterCommand";
import type {
  UpdateLakeFormationIdentityCenterConfigurationCommandInput,
  UpdateLakeFormationIdentityCenterConfigurationCommandOutput,
} from "./commands/UpdateLakeFormationIdentityCenterConfigurationCommand";
import type { UpdateLFTagCommandInput, UpdateLFTagCommandOutput } from "./commands/UpdateLFTagCommand";
import type {
  UpdateLFTagExpressionCommandInput,
  UpdateLFTagExpressionCommandOutput,
} from "./commands/UpdateLFTagExpressionCommand";
import type { UpdateResourceCommandInput, UpdateResourceCommandOutput } from "./commands/UpdateResourceCommand";
import type {
  UpdateTableObjectsCommandInput,
  UpdateTableObjectsCommandOutput,
} from "./commands/UpdateTableObjectsCommand";
import type {
  UpdateTableStorageOptimizerCommandInput,
  UpdateTableStorageOptimizerCommandOutput,
} from "./commands/UpdateTableStorageOptimizerCommand";
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
  | AddLFTagsToResourceCommandInput
  | AssumeDecoratedRoleWithSAMLCommandInput
  | BatchGrantPermissionsCommandInput
  | BatchRevokePermissionsCommandInput
  | CancelTransactionCommandInput
  | CommitTransactionCommandInput
  | CreateDataCellsFilterCommandInput
  | CreateLFTagCommandInput
  | CreateLFTagExpressionCommandInput
  | CreateLakeFormationIdentityCenterConfigurationCommandInput
  | CreateLakeFormationOptInCommandInput
  | DeleteDataCellsFilterCommandInput
  | DeleteLFTagCommandInput
  | DeleteLFTagExpressionCommandInput
  | DeleteLakeFormationIdentityCenterConfigurationCommandInput
  | DeleteLakeFormationOptInCommandInput
  | DeleteObjectsOnCancelCommandInput
  | DeregisterResourceCommandInput
  | DescribeLakeFormationIdentityCenterConfigurationCommandInput
  | DescribeResourceCommandInput
  | DescribeTransactionCommandInput
  | ExtendTransactionCommandInput
  | GetDataCellsFilterCommandInput
  | GetDataLakePrincipalCommandInput
  | GetDataLakeSettingsCommandInput
  | GetEffectivePermissionsForPathCommandInput
  | GetLFTagCommandInput
  | GetLFTagExpressionCommandInput
  | GetQueryStateCommandInput
  | GetQueryStatisticsCommandInput
  | GetResourceLFTagsCommandInput
  | GetTableObjectsCommandInput
  | GetTemporaryDataLocationCredentialsCommandInput
  | GetTemporaryGluePartitionCredentialsCommandInput
  | GetTemporaryGlueTableCredentialsCommandInput
  | GetWorkUnitResultsCommandInput
  | GetWorkUnitsCommandInput
  | GrantPermissionsCommandInput
  | ListDataCellsFilterCommandInput
  | ListLFTagExpressionsCommandInput
  | ListLFTagsCommandInput
  | ListLakeFormationOptInsCommandInput
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
  | UpdateDataCellsFilterCommandInput
  | UpdateLFTagCommandInput
  | UpdateLFTagExpressionCommandInput
  | UpdateLakeFormationIdentityCenterConfigurationCommandInput
  | UpdateResourceCommandInput
  | UpdateTableObjectsCommandInput
  | UpdateTableStorageOptimizerCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AddLFTagsToResourceCommandOutput
  | AssumeDecoratedRoleWithSAMLCommandOutput
  | BatchGrantPermissionsCommandOutput
  | BatchRevokePermissionsCommandOutput
  | CancelTransactionCommandOutput
  | CommitTransactionCommandOutput
  | CreateDataCellsFilterCommandOutput
  | CreateLFTagCommandOutput
  | CreateLFTagExpressionCommandOutput
  | CreateLakeFormationIdentityCenterConfigurationCommandOutput
  | CreateLakeFormationOptInCommandOutput
  | DeleteDataCellsFilterCommandOutput
  | DeleteLFTagCommandOutput
  | DeleteLFTagExpressionCommandOutput
  | DeleteLakeFormationIdentityCenterConfigurationCommandOutput
  | DeleteLakeFormationOptInCommandOutput
  | DeleteObjectsOnCancelCommandOutput
  | DeregisterResourceCommandOutput
  | DescribeLakeFormationIdentityCenterConfigurationCommandOutput
  | DescribeResourceCommandOutput
  | DescribeTransactionCommandOutput
  | ExtendTransactionCommandOutput
  | GetDataCellsFilterCommandOutput
  | GetDataLakePrincipalCommandOutput
  | GetDataLakeSettingsCommandOutput
  | GetEffectivePermissionsForPathCommandOutput
  | GetLFTagCommandOutput
  | GetLFTagExpressionCommandOutput
  | GetQueryStateCommandOutput
  | GetQueryStatisticsCommandOutput
  | GetResourceLFTagsCommandOutput
  | GetTableObjectsCommandOutput
  | GetTemporaryDataLocationCredentialsCommandOutput
  | GetTemporaryGluePartitionCredentialsCommandOutput
  | GetTemporaryGlueTableCredentialsCommandOutput
  | GetWorkUnitResultsCommandOutput
  | GetWorkUnitsCommandOutput
  | GrantPermissionsCommandOutput
  | ListDataCellsFilterCommandOutput
  | ListLFTagExpressionsCommandOutput
  | ListLFTagsCommandOutput
  | ListLakeFormationOptInsCommandOutput
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
  | UpdateDataCellsFilterCommandOutput
  | UpdateLFTagCommandOutput
  | UpdateLFTagExpressionCommandOutput
  | UpdateLakeFormationIdentityCenterConfigurationCommandOutput
  | UpdateResourceCommandOutput
  | UpdateTableObjectsCommandOutput
  | UpdateTableStorageOptimizerCommandOutput;

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
   * The internal function that inject utilities to runtime-specific stream to help users consume the data
   * @internal
   */
  sdkStreamMixin?: __SdkStreamMixinInjector;

}

/**
 * @public
 */
export type LakeFormationClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  UserAgentInputConfig &
  RetryInputConfig &
  RegionInputConfig &
  HostHeaderInputConfig &
  EndpointInputConfig<EndpointParameters> &
  HttpAuthSchemeInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of LakeFormationClient class constructor that set the region, credentials and other options.
 */
export interface LakeFormationClientConfig extends LakeFormationClientConfigType {}

/**
 * @public
 */
export type LakeFormationClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  UserAgentResolvedConfig &
  RetryResolvedConfig &
  RegionResolvedConfig &
  HostHeaderResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  HttpAuthSchemeResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of LakeFormationClient class. This is resolved and normalized from the {@link LakeFormationClientConfig | constructor configuration interface}.
 */
export interface LakeFormationClientResolvedConfig extends LakeFormationClientResolvedConfigType {}

/**
 * <fullname>Lake Formation</fullname>
 *          <p>Defines the public endpoint for the Lake Formation service.</p>
 * @public
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

  constructor(...[configuration]: __CheckOptionalClientConfig<LakeFormationClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    super(_config_0 as any);
    this.initConfig = _config_0;
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    this.config = _config_8;
    this.middlewareStack.use(getSchemaSerdePlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultLakeFormationHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: LakeFormationClientResolvedConfig) =>
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
