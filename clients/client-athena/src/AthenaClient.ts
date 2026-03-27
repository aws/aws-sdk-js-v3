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
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultAthenaHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  BatchGetNamedQueryCommandInput,
  BatchGetNamedQueryCommandOutput,
} from "./commands/BatchGetNamedQueryCommand";
import type {
  BatchGetPreparedStatementCommandInput,
  BatchGetPreparedStatementCommandOutput,
} from "./commands/BatchGetPreparedStatementCommand";
import type {
  BatchGetQueryExecutionCommandInput,
  BatchGetQueryExecutionCommandOutput,
} from "./commands/BatchGetQueryExecutionCommand";
import type {
  CancelCapacityReservationCommandInput,
  CancelCapacityReservationCommandOutput,
} from "./commands/CancelCapacityReservationCommand";
import type {
  CreateCapacityReservationCommandInput,
  CreateCapacityReservationCommandOutput,
} from "./commands/CreateCapacityReservationCommand";
import type {
  CreateDataCatalogCommandInput,
  CreateDataCatalogCommandOutput,
} from "./commands/CreateDataCatalogCommand";
import type { CreateNamedQueryCommandInput, CreateNamedQueryCommandOutput } from "./commands/CreateNamedQueryCommand";
import type { CreateNotebookCommandInput, CreateNotebookCommandOutput } from "./commands/CreateNotebookCommand";
import type {
  CreatePreparedStatementCommandInput,
  CreatePreparedStatementCommandOutput,
} from "./commands/CreatePreparedStatementCommand";
import type {
  CreatePresignedNotebookUrlCommandInput,
  CreatePresignedNotebookUrlCommandOutput,
} from "./commands/CreatePresignedNotebookUrlCommand";
import type { CreateWorkGroupCommandInput, CreateWorkGroupCommandOutput } from "./commands/CreateWorkGroupCommand";
import type {
  DeleteCapacityReservationCommandInput,
  DeleteCapacityReservationCommandOutput,
} from "./commands/DeleteCapacityReservationCommand";
import type {
  DeleteDataCatalogCommandInput,
  DeleteDataCatalogCommandOutput,
} from "./commands/DeleteDataCatalogCommand";
import type { DeleteNamedQueryCommandInput, DeleteNamedQueryCommandOutput } from "./commands/DeleteNamedQueryCommand";
import type { DeleteNotebookCommandInput, DeleteNotebookCommandOutput } from "./commands/DeleteNotebookCommand";
import type {
  DeletePreparedStatementCommandInput,
  DeletePreparedStatementCommandOutput,
} from "./commands/DeletePreparedStatementCommand";
import type { DeleteWorkGroupCommandInput, DeleteWorkGroupCommandOutput } from "./commands/DeleteWorkGroupCommand";
import type { ExportNotebookCommandInput, ExportNotebookCommandOutput } from "./commands/ExportNotebookCommand";
import type {
  GetCalculationExecutionCodeCommandInput,
  GetCalculationExecutionCodeCommandOutput,
} from "./commands/GetCalculationExecutionCodeCommand";
import type {
  GetCalculationExecutionCommandInput,
  GetCalculationExecutionCommandOutput,
} from "./commands/GetCalculationExecutionCommand";
import type {
  GetCalculationExecutionStatusCommandInput,
  GetCalculationExecutionStatusCommandOutput,
} from "./commands/GetCalculationExecutionStatusCommand";
import type {
  GetCapacityAssignmentConfigurationCommandInput,
  GetCapacityAssignmentConfigurationCommandOutput,
} from "./commands/GetCapacityAssignmentConfigurationCommand";
import type {
  GetCapacityReservationCommandInput,
  GetCapacityReservationCommandOutput,
} from "./commands/GetCapacityReservationCommand";
import type { GetDatabaseCommandInput, GetDatabaseCommandOutput } from "./commands/GetDatabaseCommand";
import type { GetDataCatalogCommandInput, GetDataCatalogCommandOutput } from "./commands/GetDataCatalogCommand";
import type { GetNamedQueryCommandInput, GetNamedQueryCommandOutput } from "./commands/GetNamedQueryCommand";
import type {
  GetNotebookMetadataCommandInput,
  GetNotebookMetadataCommandOutput,
} from "./commands/GetNotebookMetadataCommand";
import type {
  GetPreparedStatementCommandInput,
  GetPreparedStatementCommandOutput,
} from "./commands/GetPreparedStatementCommand";
import type {
  GetQueryExecutionCommandInput,
  GetQueryExecutionCommandOutput,
} from "./commands/GetQueryExecutionCommand";
import type { GetQueryResultsCommandInput, GetQueryResultsCommandOutput } from "./commands/GetQueryResultsCommand";
import type {
  GetQueryRuntimeStatisticsCommandInput,
  GetQueryRuntimeStatisticsCommandOutput,
} from "./commands/GetQueryRuntimeStatisticsCommand";
import type {
  GetResourceDashboardCommandInput,
  GetResourceDashboardCommandOutput,
} from "./commands/GetResourceDashboardCommand";
import type { GetSessionCommandInput, GetSessionCommandOutput } from "./commands/GetSessionCommand";
import type {
  GetSessionEndpointCommandInput,
  GetSessionEndpointCommandOutput,
} from "./commands/GetSessionEndpointCommand";
import type { GetSessionStatusCommandInput, GetSessionStatusCommandOutput } from "./commands/GetSessionStatusCommand";
import type { GetTableMetadataCommandInput, GetTableMetadataCommandOutput } from "./commands/GetTableMetadataCommand";
import type { GetWorkGroupCommandInput, GetWorkGroupCommandOutput } from "./commands/GetWorkGroupCommand";
import type { ImportNotebookCommandInput, ImportNotebookCommandOutput } from "./commands/ImportNotebookCommand";
import type {
  ListApplicationDPUSizesCommandInput,
  ListApplicationDPUSizesCommandOutput,
} from "./commands/ListApplicationDPUSizesCommand";
import type {
  ListCalculationExecutionsCommandInput,
  ListCalculationExecutionsCommandOutput,
} from "./commands/ListCalculationExecutionsCommand";
import type {
  ListCapacityReservationsCommandInput,
  ListCapacityReservationsCommandOutput,
} from "./commands/ListCapacityReservationsCommand";
import type { ListDatabasesCommandInput, ListDatabasesCommandOutput } from "./commands/ListDatabasesCommand";
import type { ListDataCatalogsCommandInput, ListDataCatalogsCommandOutput } from "./commands/ListDataCatalogsCommand";
import type {
  ListEngineVersionsCommandInput,
  ListEngineVersionsCommandOutput,
} from "./commands/ListEngineVersionsCommand";
import type { ListExecutorsCommandInput, ListExecutorsCommandOutput } from "./commands/ListExecutorsCommand";
import type { ListNamedQueriesCommandInput, ListNamedQueriesCommandOutput } from "./commands/ListNamedQueriesCommand";
import type {
  ListNotebookMetadataCommandInput,
  ListNotebookMetadataCommandOutput,
} from "./commands/ListNotebookMetadataCommand";
import type {
  ListNotebookSessionsCommandInput,
  ListNotebookSessionsCommandOutput,
} from "./commands/ListNotebookSessionsCommand";
import type {
  ListPreparedStatementsCommandInput,
  ListPreparedStatementsCommandOutput,
} from "./commands/ListPreparedStatementsCommand";
import type {
  ListQueryExecutionsCommandInput,
  ListQueryExecutionsCommandOutput,
} from "./commands/ListQueryExecutionsCommand";
import type { ListSessionsCommandInput, ListSessionsCommandOutput } from "./commands/ListSessionsCommand";
import type {
  ListTableMetadataCommandInput,
  ListTableMetadataCommandOutput,
} from "./commands/ListTableMetadataCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type { ListWorkGroupsCommandInput, ListWorkGroupsCommandOutput } from "./commands/ListWorkGroupsCommand";
import type {
  PutCapacityAssignmentConfigurationCommandInput,
  PutCapacityAssignmentConfigurationCommandOutput,
} from "./commands/PutCapacityAssignmentConfigurationCommand";
import type {
  StartCalculationExecutionCommandInput,
  StartCalculationExecutionCommandOutput,
} from "./commands/StartCalculationExecutionCommand";
import type {
  StartQueryExecutionCommandInput,
  StartQueryExecutionCommandOutput,
} from "./commands/StartQueryExecutionCommand";
import type { StartSessionCommandInput, StartSessionCommandOutput } from "./commands/StartSessionCommand";
import type {
  StopCalculationExecutionCommandInput,
  StopCalculationExecutionCommandOutput,
} from "./commands/StopCalculationExecutionCommand";
import type {
  StopQueryExecutionCommandInput,
  StopQueryExecutionCommandOutput,
} from "./commands/StopQueryExecutionCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { TerminateSessionCommandInput, TerminateSessionCommandOutput } from "./commands/TerminateSessionCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type {
  UpdateCapacityReservationCommandInput,
  UpdateCapacityReservationCommandOutput,
} from "./commands/UpdateCapacityReservationCommand";
import type {
  UpdateDataCatalogCommandInput,
  UpdateDataCatalogCommandOutput,
} from "./commands/UpdateDataCatalogCommand";
import type { UpdateNamedQueryCommandInput, UpdateNamedQueryCommandOutput } from "./commands/UpdateNamedQueryCommand";
import type { UpdateNotebookCommandInput, UpdateNotebookCommandOutput } from "./commands/UpdateNotebookCommand";
import type {
  UpdateNotebookMetadataCommandInput,
  UpdateNotebookMetadataCommandOutput,
} from "./commands/UpdateNotebookMetadataCommand";
import type {
  UpdatePreparedStatementCommandInput,
  UpdatePreparedStatementCommandOutput,
} from "./commands/UpdatePreparedStatementCommand";
import type { UpdateWorkGroupCommandInput, UpdateWorkGroupCommandOutput } from "./commands/UpdateWorkGroupCommand";
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
  | BatchGetNamedQueryCommandInput
  | BatchGetPreparedStatementCommandInput
  | BatchGetQueryExecutionCommandInput
  | CancelCapacityReservationCommandInput
  | CreateCapacityReservationCommandInput
  | CreateDataCatalogCommandInput
  | CreateNamedQueryCommandInput
  | CreateNotebookCommandInput
  | CreatePreparedStatementCommandInput
  | CreatePresignedNotebookUrlCommandInput
  | CreateWorkGroupCommandInput
  | DeleteCapacityReservationCommandInput
  | DeleteDataCatalogCommandInput
  | DeleteNamedQueryCommandInput
  | DeleteNotebookCommandInput
  | DeletePreparedStatementCommandInput
  | DeleteWorkGroupCommandInput
  | ExportNotebookCommandInput
  | GetCalculationExecutionCodeCommandInput
  | GetCalculationExecutionCommandInput
  | GetCalculationExecutionStatusCommandInput
  | GetCapacityAssignmentConfigurationCommandInput
  | GetCapacityReservationCommandInput
  | GetDataCatalogCommandInput
  | GetDatabaseCommandInput
  | GetNamedQueryCommandInput
  | GetNotebookMetadataCommandInput
  | GetPreparedStatementCommandInput
  | GetQueryExecutionCommandInput
  | GetQueryResultsCommandInput
  | GetQueryRuntimeStatisticsCommandInput
  | GetResourceDashboardCommandInput
  | GetSessionCommandInput
  | GetSessionEndpointCommandInput
  | GetSessionStatusCommandInput
  | GetTableMetadataCommandInput
  | GetWorkGroupCommandInput
  | ImportNotebookCommandInput
  | ListApplicationDPUSizesCommandInput
  | ListCalculationExecutionsCommandInput
  | ListCapacityReservationsCommandInput
  | ListDataCatalogsCommandInput
  | ListDatabasesCommandInput
  | ListEngineVersionsCommandInput
  | ListExecutorsCommandInput
  | ListNamedQueriesCommandInput
  | ListNotebookMetadataCommandInput
  | ListNotebookSessionsCommandInput
  | ListPreparedStatementsCommandInput
  | ListQueryExecutionsCommandInput
  | ListSessionsCommandInput
  | ListTableMetadataCommandInput
  | ListTagsForResourceCommandInput
  | ListWorkGroupsCommandInput
  | PutCapacityAssignmentConfigurationCommandInput
  | StartCalculationExecutionCommandInput
  | StartQueryExecutionCommandInput
  | StartSessionCommandInput
  | StopCalculationExecutionCommandInput
  | StopQueryExecutionCommandInput
  | TagResourceCommandInput
  | TerminateSessionCommandInput
  | UntagResourceCommandInput
  | UpdateCapacityReservationCommandInput
  | UpdateDataCatalogCommandInput
  | UpdateNamedQueryCommandInput
  | UpdateNotebookCommandInput
  | UpdateNotebookMetadataCommandInput
  | UpdatePreparedStatementCommandInput
  | UpdateWorkGroupCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | BatchGetNamedQueryCommandOutput
  | BatchGetPreparedStatementCommandOutput
  | BatchGetQueryExecutionCommandOutput
  | CancelCapacityReservationCommandOutput
  | CreateCapacityReservationCommandOutput
  | CreateDataCatalogCommandOutput
  | CreateNamedQueryCommandOutput
  | CreateNotebookCommandOutput
  | CreatePreparedStatementCommandOutput
  | CreatePresignedNotebookUrlCommandOutput
  | CreateWorkGroupCommandOutput
  | DeleteCapacityReservationCommandOutput
  | DeleteDataCatalogCommandOutput
  | DeleteNamedQueryCommandOutput
  | DeleteNotebookCommandOutput
  | DeletePreparedStatementCommandOutput
  | DeleteWorkGroupCommandOutput
  | ExportNotebookCommandOutput
  | GetCalculationExecutionCodeCommandOutput
  | GetCalculationExecutionCommandOutput
  | GetCalculationExecutionStatusCommandOutput
  | GetCapacityAssignmentConfigurationCommandOutput
  | GetCapacityReservationCommandOutput
  | GetDataCatalogCommandOutput
  | GetDatabaseCommandOutput
  | GetNamedQueryCommandOutput
  | GetNotebookMetadataCommandOutput
  | GetPreparedStatementCommandOutput
  | GetQueryExecutionCommandOutput
  | GetQueryResultsCommandOutput
  | GetQueryRuntimeStatisticsCommandOutput
  | GetResourceDashboardCommandOutput
  | GetSessionCommandOutput
  | GetSessionEndpointCommandOutput
  | GetSessionStatusCommandOutput
  | GetTableMetadataCommandOutput
  | GetWorkGroupCommandOutput
  | ImportNotebookCommandOutput
  | ListApplicationDPUSizesCommandOutput
  | ListCalculationExecutionsCommandOutput
  | ListCapacityReservationsCommandOutput
  | ListDataCatalogsCommandOutput
  | ListDatabasesCommandOutput
  | ListEngineVersionsCommandOutput
  | ListExecutorsCommandOutput
  | ListNamedQueriesCommandOutput
  | ListNotebookMetadataCommandOutput
  | ListNotebookSessionsCommandOutput
  | ListPreparedStatementsCommandOutput
  | ListQueryExecutionsCommandOutput
  | ListSessionsCommandOutput
  | ListTableMetadataCommandOutput
  | ListTagsForResourceCommandOutput
  | ListWorkGroupsCommandOutput
  | PutCapacityAssignmentConfigurationCommandOutput
  | StartCalculationExecutionCommandOutput
  | StartQueryExecutionCommandOutput
  | StartSessionCommandOutput
  | StopCalculationExecutionCommandOutput
  | StopQueryExecutionCommandOutput
  | TagResourceCommandOutput
  | TerminateSessionCommandOutput
  | UntagResourceCommandOutput
  | UpdateCapacityReservationCommandOutput
  | UpdateDataCatalogCommandOutput
  | UpdateNamedQueryCommandOutput
  | UpdateNotebookCommandOutput
  | UpdateNotebookMetadataCommandOutput
  | UpdatePreparedStatementCommandOutput
  | UpdateWorkGroupCommandOutput;

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
}

/**
 * @public
 */
export type AthenaClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of AthenaClient class constructor that set the region, credentials and other options.
 */
export interface AthenaClientConfig extends AthenaClientConfigType {}

/**
 * @public
 */
export type AthenaClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of AthenaClient class. This is resolved and normalized from the {@link AthenaClientConfig | constructor configuration interface}.
 */
export interface AthenaClientResolvedConfig extends AthenaClientResolvedConfigType {}

/**
 * <p>Amazon Athena is an interactive query service that lets you use standard SQL
 *             to analyze data directly in Amazon S3. You can point Athena at your
 *             data in Amazon S3 and run ad-hoc queries and get results in seconds. Athena is serverless, so there is no infrastructure to set up or manage. You pay
 *             only for the queries you run. Athena scales automatically—executing queries
 *             in parallel—so results are fast, even with large datasets and complex queries. For more
 *             information, see <a href="http://docs.aws.amazon.com/athena/latest/ug/what-is.html">What is Amazon Athena</a> in the <i>Amazon Athena User
 *                 Guide</i>.</p>
 *          <p>If you connect to Athena using the JDBC driver, use version 1.1.0 of the
 *             driver or later with the Amazon Athena API. Earlier version drivers do not
 *             support the API. For more information and to download the driver, see <a href="https://docs.aws.amazon.com/athena/latest/ug/connect-with-jdbc.html">Accessing
 *                     Amazon Athena with JDBC</a>.</p>
 * @public
 */
export class AthenaClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  AthenaClientResolvedConfig
> {
  /**
   * The resolved configuration of AthenaClient class. This is resolved and normalized from the {@link AthenaClientConfig | constructor configuration interface}.
   */
  readonly config: AthenaClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<AthenaClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultAthenaHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: AthenaClientResolvedConfig) =>
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
