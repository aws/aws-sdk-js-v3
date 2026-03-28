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
  defaultMgnHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  ArchiveApplicationCommandInput,
  ArchiveApplicationCommandOutput,
} from "./commands/ArchiveApplicationCommand";
import type { ArchiveWaveCommandInput, ArchiveWaveCommandOutput } from "./commands/ArchiveWaveCommand";
import type {
  AssociateApplicationsCommandInput,
  AssociateApplicationsCommandOutput,
} from "./commands/AssociateApplicationsCommand";
import type {
  AssociateSourceServersCommandInput,
  AssociateSourceServersCommandOutput,
} from "./commands/AssociateSourceServersCommand";
import type {
  ChangeServerLifeCycleStateCommandInput,
  ChangeServerLifeCycleStateCommandOutput,
} from "./commands/ChangeServerLifeCycleStateCommand";
import type {
  CreateApplicationCommandInput,
  CreateApplicationCommandOutput,
} from "./commands/CreateApplicationCommand";
import type { CreateConnectorCommandInput, CreateConnectorCommandOutput } from "./commands/CreateConnectorCommand";
import type {
  CreateLaunchConfigurationTemplateCommandInput,
  CreateLaunchConfigurationTemplateCommandOutput,
} from "./commands/CreateLaunchConfigurationTemplateCommand";
import type {
  CreateNetworkMigrationDefinitionCommandInput,
  CreateNetworkMigrationDefinitionCommandOutput,
} from "./commands/CreateNetworkMigrationDefinitionCommand";
import type {
  CreateReplicationConfigurationTemplateCommandInput,
  CreateReplicationConfigurationTemplateCommandOutput,
} from "./commands/CreateReplicationConfigurationTemplateCommand";
import type { CreateWaveCommandInput, CreateWaveCommandOutput } from "./commands/CreateWaveCommand";
import type {
  DeleteApplicationCommandInput,
  DeleteApplicationCommandOutput,
} from "./commands/DeleteApplicationCommand";
import type { DeleteConnectorCommandInput, DeleteConnectorCommandOutput } from "./commands/DeleteConnectorCommand";
import type { DeleteJobCommandInput, DeleteJobCommandOutput } from "./commands/DeleteJobCommand";
import type {
  DeleteLaunchConfigurationTemplateCommandInput,
  DeleteLaunchConfigurationTemplateCommandOutput,
} from "./commands/DeleteLaunchConfigurationTemplateCommand";
import type {
  DeleteNetworkMigrationDefinitionCommandInput,
  DeleteNetworkMigrationDefinitionCommandOutput,
} from "./commands/DeleteNetworkMigrationDefinitionCommand";
import type {
  DeleteReplicationConfigurationTemplateCommandInput,
  DeleteReplicationConfigurationTemplateCommandOutput,
} from "./commands/DeleteReplicationConfigurationTemplateCommand";
import type {
  DeleteSourceServerCommandInput,
  DeleteSourceServerCommandOutput,
} from "./commands/DeleteSourceServerCommand";
import type {
  DeleteVcenterClientCommandInput,
  DeleteVcenterClientCommandOutput,
} from "./commands/DeleteVcenterClientCommand";
import type { DeleteWaveCommandInput, DeleteWaveCommandOutput } from "./commands/DeleteWaveCommand";
import type {
  DescribeJobLogItemsCommandInput,
  DescribeJobLogItemsCommandOutput,
} from "./commands/DescribeJobLogItemsCommand";
import type { DescribeJobsCommandInput, DescribeJobsCommandOutput } from "./commands/DescribeJobsCommand";
import type {
  DescribeLaunchConfigurationTemplatesCommandInput,
  DescribeLaunchConfigurationTemplatesCommandOutput,
} from "./commands/DescribeLaunchConfigurationTemplatesCommand";
import type {
  DescribeReplicationConfigurationTemplatesCommandInput,
  DescribeReplicationConfigurationTemplatesCommandOutput,
} from "./commands/DescribeReplicationConfigurationTemplatesCommand";
import type {
  DescribeSourceServersCommandInput,
  DescribeSourceServersCommandOutput,
} from "./commands/DescribeSourceServersCommand";
import type {
  DescribeVcenterClientsCommandInput,
  DescribeVcenterClientsCommandOutput,
} from "./commands/DescribeVcenterClientsCommand";
import type {
  DisassociateApplicationsCommandInput,
  DisassociateApplicationsCommandOutput,
} from "./commands/DisassociateApplicationsCommand";
import type {
  DisassociateSourceServersCommandInput,
  DisassociateSourceServersCommandOutput,
} from "./commands/DisassociateSourceServersCommand";
import type {
  DisconnectFromServiceCommandInput,
  DisconnectFromServiceCommandOutput,
} from "./commands/DisconnectFromServiceCommand";
import type { FinalizeCutoverCommandInput, FinalizeCutoverCommandOutput } from "./commands/FinalizeCutoverCommand";
import type {
  GetLaunchConfigurationCommandInput,
  GetLaunchConfigurationCommandOutput,
} from "./commands/GetLaunchConfigurationCommand";
import type {
  GetNetworkMigrationDefinitionCommandInput,
  GetNetworkMigrationDefinitionCommandOutput,
} from "./commands/GetNetworkMigrationDefinitionCommand";
import type {
  GetNetworkMigrationMapperSegmentConstructCommandInput,
  GetNetworkMigrationMapperSegmentConstructCommandOutput,
} from "./commands/GetNetworkMigrationMapperSegmentConstructCommand";
import type {
  GetReplicationConfigurationCommandInput,
  GetReplicationConfigurationCommandOutput,
} from "./commands/GetReplicationConfigurationCommand";
import type {
  InitializeServiceCommandInput,
  InitializeServiceCommandOutput,
} from "./commands/InitializeServiceCommand";
import type { ListApplicationsCommandInput, ListApplicationsCommandOutput } from "./commands/ListApplicationsCommand";
import type { ListConnectorsCommandInput, ListConnectorsCommandOutput } from "./commands/ListConnectorsCommand";
import type { ListExportErrorsCommandInput, ListExportErrorsCommandOutput } from "./commands/ListExportErrorsCommand";
import type { ListExportsCommandInput, ListExportsCommandOutput } from "./commands/ListExportsCommand";
import type { ListImportErrorsCommandInput, ListImportErrorsCommandOutput } from "./commands/ListImportErrorsCommand";
import type {
  ListImportFileEnrichmentsCommandInput,
  ListImportFileEnrichmentsCommandOutput,
} from "./commands/ListImportFileEnrichmentsCommand";
import type { ListImportsCommandInput, ListImportsCommandOutput } from "./commands/ListImportsCommand";
import type {
  ListManagedAccountsCommandInput,
  ListManagedAccountsCommandOutput,
} from "./commands/ListManagedAccountsCommand";
import type {
  ListNetworkMigrationAnalysesCommandInput,
  ListNetworkMigrationAnalysesCommandOutput,
} from "./commands/ListNetworkMigrationAnalysesCommand";
import type {
  ListNetworkMigrationAnalysisResultsCommandInput,
  ListNetworkMigrationAnalysisResultsCommandOutput,
} from "./commands/ListNetworkMigrationAnalysisResultsCommand";
import type {
  ListNetworkMigrationCodeGenerationsCommandInput,
  ListNetworkMigrationCodeGenerationsCommandOutput,
} from "./commands/ListNetworkMigrationCodeGenerationsCommand";
import type {
  ListNetworkMigrationCodeGenerationSegmentsCommandInput,
  ListNetworkMigrationCodeGenerationSegmentsCommandOutput,
} from "./commands/ListNetworkMigrationCodeGenerationSegmentsCommand";
import type {
  ListNetworkMigrationDefinitionsCommandInput,
  ListNetworkMigrationDefinitionsCommandOutput,
} from "./commands/ListNetworkMigrationDefinitionsCommand";
import type {
  ListNetworkMigrationDeployedStacksCommandInput,
  ListNetworkMigrationDeployedStacksCommandOutput,
} from "./commands/ListNetworkMigrationDeployedStacksCommand";
import type {
  ListNetworkMigrationDeploymentsCommandInput,
  ListNetworkMigrationDeploymentsCommandOutput,
} from "./commands/ListNetworkMigrationDeploymentsCommand";
import type {
  ListNetworkMigrationExecutionsCommandInput,
  ListNetworkMigrationExecutionsCommandOutput,
} from "./commands/ListNetworkMigrationExecutionsCommand";
import type {
  ListNetworkMigrationMapperSegmentConstructsCommandInput,
  ListNetworkMigrationMapperSegmentConstructsCommandOutput,
} from "./commands/ListNetworkMigrationMapperSegmentConstructsCommand";
import type {
  ListNetworkMigrationMapperSegmentsCommandInput,
  ListNetworkMigrationMapperSegmentsCommandOutput,
} from "./commands/ListNetworkMigrationMapperSegmentsCommand";
import type {
  ListNetworkMigrationMappingsCommandInput,
  ListNetworkMigrationMappingsCommandOutput,
} from "./commands/ListNetworkMigrationMappingsCommand";
import type {
  ListNetworkMigrationMappingUpdatesCommandInput,
  ListNetworkMigrationMappingUpdatesCommandOutput,
} from "./commands/ListNetworkMigrationMappingUpdatesCommand";
import type {
  ListSourceServerActionsCommandInput,
  ListSourceServerActionsCommandOutput,
} from "./commands/ListSourceServerActionsCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type {
  ListTemplateActionsCommandInput,
  ListTemplateActionsCommandOutput,
} from "./commands/ListTemplateActionsCommand";
import type { ListWavesCommandInput, ListWavesCommandOutput } from "./commands/ListWavesCommand";
import type { MarkAsArchivedCommandInput, MarkAsArchivedCommandOutput } from "./commands/MarkAsArchivedCommand";
import type { PauseReplicationCommandInput, PauseReplicationCommandOutput } from "./commands/PauseReplicationCommand";
import type {
  PutSourceServerActionCommandInput,
  PutSourceServerActionCommandOutput,
} from "./commands/PutSourceServerActionCommand";
import type {
  PutTemplateActionCommandInput,
  PutTemplateActionCommandOutput,
} from "./commands/PutTemplateActionCommand";
import type {
  RemoveSourceServerActionCommandInput,
  RemoveSourceServerActionCommandOutput,
} from "./commands/RemoveSourceServerActionCommand";
import type {
  RemoveTemplateActionCommandInput,
  RemoveTemplateActionCommandOutput,
} from "./commands/RemoveTemplateActionCommand";
import type {
  ResumeReplicationCommandInput,
  ResumeReplicationCommandOutput,
} from "./commands/ResumeReplicationCommand";
import type {
  RetryDataReplicationCommandInput,
  RetryDataReplicationCommandOutput,
} from "./commands/RetryDataReplicationCommand";
import type { StartCutoverCommandInput, StartCutoverCommandOutput } from "./commands/StartCutoverCommand";
import type { StartExportCommandInput, StartExportCommandOutput } from "./commands/StartExportCommand";
import type { StartImportCommandInput, StartImportCommandOutput } from "./commands/StartImportCommand";
import type {
  StartImportFileEnrichmentCommandInput,
  StartImportFileEnrichmentCommandOutput,
} from "./commands/StartImportFileEnrichmentCommand";
import type {
  StartNetworkMigrationAnalysisCommandInput,
  StartNetworkMigrationAnalysisCommandOutput,
} from "./commands/StartNetworkMigrationAnalysisCommand";
import type {
  StartNetworkMigrationCodeGenerationCommandInput,
  StartNetworkMigrationCodeGenerationCommandOutput,
} from "./commands/StartNetworkMigrationCodeGenerationCommand";
import type {
  StartNetworkMigrationDeploymentCommandInput,
  StartNetworkMigrationDeploymentCommandOutput,
} from "./commands/StartNetworkMigrationDeploymentCommand";
import type {
  StartNetworkMigrationMappingCommandInput,
  StartNetworkMigrationMappingCommandOutput,
} from "./commands/StartNetworkMigrationMappingCommand";
import type {
  StartNetworkMigrationMappingUpdateCommandInput,
  StartNetworkMigrationMappingUpdateCommandOutput,
} from "./commands/StartNetworkMigrationMappingUpdateCommand";
import type { StartReplicationCommandInput, StartReplicationCommandOutput } from "./commands/StartReplicationCommand";
import type { StartTestCommandInput, StartTestCommandOutput } from "./commands/StartTestCommand";
import type { StopReplicationCommandInput, StopReplicationCommandOutput } from "./commands/StopReplicationCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type {
  TerminateTargetInstancesCommandInput,
  TerminateTargetInstancesCommandOutput,
} from "./commands/TerminateTargetInstancesCommand";
import type {
  UnarchiveApplicationCommandInput,
  UnarchiveApplicationCommandOutput,
} from "./commands/UnarchiveApplicationCommand";
import type { UnarchiveWaveCommandInput, UnarchiveWaveCommandOutput } from "./commands/UnarchiveWaveCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type {
  UpdateApplicationCommandInput,
  UpdateApplicationCommandOutput,
} from "./commands/UpdateApplicationCommand";
import type { UpdateConnectorCommandInput, UpdateConnectorCommandOutput } from "./commands/UpdateConnectorCommand";
import type {
  UpdateLaunchConfigurationCommandInput,
  UpdateLaunchConfigurationCommandOutput,
} from "./commands/UpdateLaunchConfigurationCommand";
import type {
  UpdateLaunchConfigurationTemplateCommandInput,
  UpdateLaunchConfigurationTemplateCommandOutput,
} from "./commands/UpdateLaunchConfigurationTemplateCommand";
import type {
  UpdateNetworkMigrationDefinitionCommandInput,
  UpdateNetworkMigrationDefinitionCommandOutput,
} from "./commands/UpdateNetworkMigrationDefinitionCommand";
import type {
  UpdateNetworkMigrationMapperSegmentCommandInput,
  UpdateNetworkMigrationMapperSegmentCommandOutput,
} from "./commands/UpdateNetworkMigrationMapperSegmentCommand";
import type {
  UpdateReplicationConfigurationCommandInput,
  UpdateReplicationConfigurationCommandOutput,
} from "./commands/UpdateReplicationConfigurationCommand";
import type {
  UpdateReplicationConfigurationTemplateCommandInput,
  UpdateReplicationConfigurationTemplateCommandOutput,
} from "./commands/UpdateReplicationConfigurationTemplateCommand";
import type {
  UpdateSourceServerCommandInput,
  UpdateSourceServerCommandOutput,
} from "./commands/UpdateSourceServerCommand";
import type {
  UpdateSourceServerReplicationTypeCommandInput,
  UpdateSourceServerReplicationTypeCommandOutput,
} from "./commands/UpdateSourceServerReplicationTypeCommand";
import type { UpdateWaveCommandInput, UpdateWaveCommandOutput } from "./commands/UpdateWaveCommand";
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
  | ArchiveApplicationCommandInput
  | ArchiveWaveCommandInput
  | AssociateApplicationsCommandInput
  | AssociateSourceServersCommandInput
  | ChangeServerLifeCycleStateCommandInput
  | CreateApplicationCommandInput
  | CreateConnectorCommandInput
  | CreateLaunchConfigurationTemplateCommandInput
  | CreateNetworkMigrationDefinitionCommandInput
  | CreateReplicationConfigurationTemplateCommandInput
  | CreateWaveCommandInput
  | DeleteApplicationCommandInput
  | DeleteConnectorCommandInput
  | DeleteJobCommandInput
  | DeleteLaunchConfigurationTemplateCommandInput
  | DeleteNetworkMigrationDefinitionCommandInput
  | DeleteReplicationConfigurationTemplateCommandInput
  | DeleteSourceServerCommandInput
  | DeleteVcenterClientCommandInput
  | DeleteWaveCommandInput
  | DescribeJobLogItemsCommandInput
  | DescribeJobsCommandInput
  | DescribeLaunchConfigurationTemplatesCommandInput
  | DescribeReplicationConfigurationTemplatesCommandInput
  | DescribeSourceServersCommandInput
  | DescribeVcenterClientsCommandInput
  | DisassociateApplicationsCommandInput
  | DisassociateSourceServersCommandInput
  | DisconnectFromServiceCommandInput
  | FinalizeCutoverCommandInput
  | GetLaunchConfigurationCommandInput
  | GetNetworkMigrationDefinitionCommandInput
  | GetNetworkMigrationMapperSegmentConstructCommandInput
  | GetReplicationConfigurationCommandInput
  | InitializeServiceCommandInput
  | ListApplicationsCommandInput
  | ListConnectorsCommandInput
  | ListExportErrorsCommandInput
  | ListExportsCommandInput
  | ListImportErrorsCommandInput
  | ListImportFileEnrichmentsCommandInput
  | ListImportsCommandInput
  | ListManagedAccountsCommandInput
  | ListNetworkMigrationAnalysesCommandInput
  | ListNetworkMigrationAnalysisResultsCommandInput
  | ListNetworkMigrationCodeGenerationSegmentsCommandInput
  | ListNetworkMigrationCodeGenerationsCommandInput
  | ListNetworkMigrationDefinitionsCommandInput
  | ListNetworkMigrationDeployedStacksCommandInput
  | ListNetworkMigrationDeploymentsCommandInput
  | ListNetworkMigrationExecutionsCommandInput
  | ListNetworkMigrationMapperSegmentConstructsCommandInput
  | ListNetworkMigrationMapperSegmentsCommandInput
  | ListNetworkMigrationMappingUpdatesCommandInput
  | ListNetworkMigrationMappingsCommandInput
  | ListSourceServerActionsCommandInput
  | ListTagsForResourceCommandInput
  | ListTemplateActionsCommandInput
  | ListWavesCommandInput
  | MarkAsArchivedCommandInput
  | PauseReplicationCommandInput
  | PutSourceServerActionCommandInput
  | PutTemplateActionCommandInput
  | RemoveSourceServerActionCommandInput
  | RemoveTemplateActionCommandInput
  | ResumeReplicationCommandInput
  | RetryDataReplicationCommandInput
  | StartCutoverCommandInput
  | StartExportCommandInput
  | StartImportCommandInput
  | StartImportFileEnrichmentCommandInput
  | StartNetworkMigrationAnalysisCommandInput
  | StartNetworkMigrationCodeGenerationCommandInput
  | StartNetworkMigrationDeploymentCommandInput
  | StartNetworkMigrationMappingCommandInput
  | StartNetworkMigrationMappingUpdateCommandInput
  | StartReplicationCommandInput
  | StartTestCommandInput
  | StopReplicationCommandInput
  | TagResourceCommandInput
  | TerminateTargetInstancesCommandInput
  | UnarchiveApplicationCommandInput
  | UnarchiveWaveCommandInput
  | UntagResourceCommandInput
  | UpdateApplicationCommandInput
  | UpdateConnectorCommandInput
  | UpdateLaunchConfigurationCommandInput
  | UpdateLaunchConfigurationTemplateCommandInput
  | UpdateNetworkMigrationDefinitionCommandInput
  | UpdateNetworkMigrationMapperSegmentCommandInput
  | UpdateReplicationConfigurationCommandInput
  | UpdateReplicationConfigurationTemplateCommandInput
  | UpdateSourceServerCommandInput
  | UpdateSourceServerReplicationTypeCommandInput
  | UpdateWaveCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | ArchiveApplicationCommandOutput
  | ArchiveWaveCommandOutput
  | AssociateApplicationsCommandOutput
  | AssociateSourceServersCommandOutput
  | ChangeServerLifeCycleStateCommandOutput
  | CreateApplicationCommandOutput
  | CreateConnectorCommandOutput
  | CreateLaunchConfigurationTemplateCommandOutput
  | CreateNetworkMigrationDefinitionCommandOutput
  | CreateReplicationConfigurationTemplateCommandOutput
  | CreateWaveCommandOutput
  | DeleteApplicationCommandOutput
  | DeleteConnectorCommandOutput
  | DeleteJobCommandOutput
  | DeleteLaunchConfigurationTemplateCommandOutput
  | DeleteNetworkMigrationDefinitionCommandOutput
  | DeleteReplicationConfigurationTemplateCommandOutput
  | DeleteSourceServerCommandOutput
  | DeleteVcenterClientCommandOutput
  | DeleteWaveCommandOutput
  | DescribeJobLogItemsCommandOutput
  | DescribeJobsCommandOutput
  | DescribeLaunchConfigurationTemplatesCommandOutput
  | DescribeReplicationConfigurationTemplatesCommandOutput
  | DescribeSourceServersCommandOutput
  | DescribeVcenterClientsCommandOutput
  | DisassociateApplicationsCommandOutput
  | DisassociateSourceServersCommandOutput
  | DisconnectFromServiceCommandOutput
  | FinalizeCutoverCommandOutput
  | GetLaunchConfigurationCommandOutput
  | GetNetworkMigrationDefinitionCommandOutput
  | GetNetworkMigrationMapperSegmentConstructCommandOutput
  | GetReplicationConfigurationCommandOutput
  | InitializeServiceCommandOutput
  | ListApplicationsCommandOutput
  | ListConnectorsCommandOutput
  | ListExportErrorsCommandOutput
  | ListExportsCommandOutput
  | ListImportErrorsCommandOutput
  | ListImportFileEnrichmentsCommandOutput
  | ListImportsCommandOutput
  | ListManagedAccountsCommandOutput
  | ListNetworkMigrationAnalysesCommandOutput
  | ListNetworkMigrationAnalysisResultsCommandOutput
  | ListNetworkMigrationCodeGenerationSegmentsCommandOutput
  | ListNetworkMigrationCodeGenerationsCommandOutput
  | ListNetworkMigrationDefinitionsCommandOutput
  | ListNetworkMigrationDeployedStacksCommandOutput
  | ListNetworkMigrationDeploymentsCommandOutput
  | ListNetworkMigrationExecutionsCommandOutput
  | ListNetworkMigrationMapperSegmentConstructsCommandOutput
  | ListNetworkMigrationMapperSegmentsCommandOutput
  | ListNetworkMigrationMappingUpdatesCommandOutput
  | ListNetworkMigrationMappingsCommandOutput
  | ListSourceServerActionsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTemplateActionsCommandOutput
  | ListWavesCommandOutput
  | MarkAsArchivedCommandOutput
  | PauseReplicationCommandOutput
  | PutSourceServerActionCommandOutput
  | PutTemplateActionCommandOutput
  | RemoveSourceServerActionCommandOutput
  | RemoveTemplateActionCommandOutput
  | ResumeReplicationCommandOutput
  | RetryDataReplicationCommandOutput
  | StartCutoverCommandOutput
  | StartExportCommandOutput
  | StartImportCommandOutput
  | StartImportFileEnrichmentCommandOutput
  | StartNetworkMigrationAnalysisCommandOutput
  | StartNetworkMigrationCodeGenerationCommandOutput
  | StartNetworkMigrationDeploymentCommandOutput
  | StartNetworkMigrationMappingCommandOutput
  | StartNetworkMigrationMappingUpdateCommandOutput
  | StartReplicationCommandOutput
  | StartTestCommandOutput
  | StopReplicationCommandOutput
  | TagResourceCommandOutput
  | TerminateTargetInstancesCommandOutput
  | UnarchiveApplicationCommandOutput
  | UnarchiveWaveCommandOutput
  | UntagResourceCommandOutput
  | UpdateApplicationCommandOutput
  | UpdateConnectorCommandOutput
  | UpdateLaunchConfigurationCommandOutput
  | UpdateLaunchConfigurationTemplateCommandOutput
  | UpdateNetworkMigrationDefinitionCommandOutput
  | UpdateNetworkMigrationMapperSegmentCommandOutput
  | UpdateReplicationConfigurationCommandOutput
  | UpdateReplicationConfigurationTemplateCommandOutput
  | UpdateSourceServerCommandOutput
  | UpdateSourceServerReplicationTypeCommandOutput
  | UpdateWaveCommandOutput;

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
export type MgnClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of MgnClient class constructor that set the region, credentials and other options.
 */
export interface MgnClientConfig extends MgnClientConfigType {}

/**
 * @public
 */
export type MgnClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of MgnClient class. This is resolved and normalized from the {@link MgnClientConfig | constructor configuration interface}.
 */
export interface MgnClientResolvedConfig extends MgnClientResolvedConfigType {}

/**
 * <p>The Application Migration Service service.</p>
 * @public
 */
export class MgnClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  MgnClientResolvedConfig
> {
  /**
   * The resolved configuration of MgnClient class. This is resolved and normalized from the {@link MgnClientConfig | constructor configuration interface}.
   */
  readonly config: MgnClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<MgnClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultMgnHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: MgnClientResolvedConfig) =>
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
