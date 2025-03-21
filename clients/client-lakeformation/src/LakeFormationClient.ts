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
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/middleware-endpoint";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@smithy/middleware-retry";
import { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  SdkStreamMixinInjector as __SdkStreamMixinInjector,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  defaultLakeFormationHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
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
import {
  CreateLakeFormationIdentityCenterConfigurationCommandInput,
  CreateLakeFormationIdentityCenterConfigurationCommandOutput,
} from "./commands/CreateLakeFormationIdentityCenterConfigurationCommand";
import {
  CreateLakeFormationOptInCommandInput,
  CreateLakeFormationOptInCommandOutput,
} from "./commands/CreateLakeFormationOptInCommand";
import { CreateLFTagCommandInput, CreateLFTagCommandOutput } from "./commands/CreateLFTagCommand";
import {
  CreateLFTagExpressionCommandInput,
  CreateLFTagExpressionCommandOutput,
} from "./commands/CreateLFTagExpressionCommand";
import {
  DeleteDataCellsFilterCommandInput,
  DeleteDataCellsFilterCommandOutput,
} from "./commands/DeleteDataCellsFilterCommand";
import {
  DeleteLakeFormationIdentityCenterConfigurationCommandInput,
  DeleteLakeFormationIdentityCenterConfigurationCommandOutput,
} from "./commands/DeleteLakeFormationIdentityCenterConfigurationCommand";
import {
  DeleteLakeFormationOptInCommandInput,
  DeleteLakeFormationOptInCommandOutput,
} from "./commands/DeleteLakeFormationOptInCommand";
import { DeleteLFTagCommandInput, DeleteLFTagCommandOutput } from "./commands/DeleteLFTagCommand";
import {
  DeleteLFTagExpressionCommandInput,
  DeleteLFTagExpressionCommandOutput,
} from "./commands/DeleteLFTagExpressionCommand";
import {
  DeleteObjectsOnCancelCommandInput,
  DeleteObjectsOnCancelCommandOutput,
} from "./commands/DeleteObjectsOnCancelCommand";
import { DeregisterResourceCommandInput, DeregisterResourceCommandOutput } from "./commands/DeregisterResourceCommand";
import {
  DescribeLakeFormationIdentityCenterConfigurationCommandInput,
  DescribeLakeFormationIdentityCenterConfigurationCommandOutput,
} from "./commands/DescribeLakeFormationIdentityCenterConfigurationCommand";
import { DescribeResourceCommandInput, DescribeResourceCommandOutput } from "./commands/DescribeResourceCommand";
import {
  DescribeTransactionCommandInput,
  DescribeTransactionCommandOutput,
} from "./commands/DescribeTransactionCommand";
import { ExtendTransactionCommandInput, ExtendTransactionCommandOutput } from "./commands/ExtendTransactionCommand";
import { GetDataCellsFilterCommandInput, GetDataCellsFilterCommandOutput } from "./commands/GetDataCellsFilterCommand";
import {
  GetDataLakePrincipalCommandInput,
  GetDataLakePrincipalCommandOutput,
} from "./commands/GetDataLakePrincipalCommand";
import {
  GetDataLakeSettingsCommandInput,
  GetDataLakeSettingsCommandOutput,
} from "./commands/GetDataLakeSettingsCommand";
import {
  GetEffectivePermissionsForPathCommandInput,
  GetEffectivePermissionsForPathCommandOutput,
} from "./commands/GetEffectivePermissionsForPathCommand";
import { GetLFTagCommandInput, GetLFTagCommandOutput } from "./commands/GetLFTagCommand";
import { GetLFTagExpressionCommandInput, GetLFTagExpressionCommandOutput } from "./commands/GetLFTagExpressionCommand";
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
import {
  ListLakeFormationOptInsCommandInput,
  ListLakeFormationOptInsCommandOutput,
} from "./commands/ListLakeFormationOptInsCommand";
import {
  ListLFTagExpressionsCommandInput,
  ListLFTagExpressionsCommandOutput,
} from "./commands/ListLFTagExpressionsCommand";
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
import {
  UpdateDataCellsFilterCommandInput,
  UpdateDataCellsFilterCommandOutput,
} from "./commands/UpdateDataCellsFilterCommand";
import {
  UpdateLakeFormationIdentityCenterConfigurationCommandInput,
  UpdateLakeFormationIdentityCenterConfigurationCommandOutput,
} from "./commands/UpdateLakeFormationIdentityCenterConfigurationCommand";
import { UpdateLFTagCommandInput, UpdateLFTagCommandOutput } from "./commands/UpdateLFTagCommand";
import {
  UpdateLFTagExpressionCommandInput,
  UpdateLFTagExpressionCommandOutput,
} from "./commands/UpdateLFTagExpressionCommand";
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
import { resolveRuntimeExtensions, RuntimeExtension, RuntimeExtensionsConfig } from "./runtimeExtensions";

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
  defaultUserAgentProvider?: Provider<__UserAgent>;

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
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6, { client: () => this });
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    super(_config_8);
    this.config = _config_8;
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
