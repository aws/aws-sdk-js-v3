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
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  defaultMgnHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import { ArchiveApplicationCommandInput, ArchiveApplicationCommandOutput } from "./commands/ArchiveApplicationCommand";
import { ArchiveWaveCommandInput, ArchiveWaveCommandOutput } from "./commands/ArchiveWaveCommand";
import {
  AssociateApplicationsCommandInput,
  AssociateApplicationsCommandOutput,
} from "./commands/AssociateApplicationsCommand";
import {
  AssociateSourceServersCommandInput,
  AssociateSourceServersCommandOutput,
} from "./commands/AssociateSourceServersCommand";
import {
  ChangeServerLifeCycleStateCommandInput,
  ChangeServerLifeCycleStateCommandOutput,
} from "./commands/ChangeServerLifeCycleStateCommand";
import { CreateApplicationCommandInput, CreateApplicationCommandOutput } from "./commands/CreateApplicationCommand";
import { CreateConnectorCommandInput, CreateConnectorCommandOutput } from "./commands/CreateConnectorCommand";
import {
  CreateLaunchConfigurationTemplateCommandInput,
  CreateLaunchConfigurationTemplateCommandOutput,
} from "./commands/CreateLaunchConfigurationTemplateCommand";
import {
  CreateReplicationConfigurationTemplateCommandInput,
  CreateReplicationConfigurationTemplateCommandOutput,
} from "./commands/CreateReplicationConfigurationTemplateCommand";
import { CreateWaveCommandInput, CreateWaveCommandOutput } from "./commands/CreateWaveCommand";
import { DeleteApplicationCommandInput, DeleteApplicationCommandOutput } from "./commands/DeleteApplicationCommand";
import { DeleteConnectorCommandInput, DeleteConnectorCommandOutput } from "./commands/DeleteConnectorCommand";
import { DeleteJobCommandInput, DeleteJobCommandOutput } from "./commands/DeleteJobCommand";
import {
  DeleteLaunchConfigurationTemplateCommandInput,
  DeleteLaunchConfigurationTemplateCommandOutput,
} from "./commands/DeleteLaunchConfigurationTemplateCommand";
import {
  DeleteReplicationConfigurationTemplateCommandInput,
  DeleteReplicationConfigurationTemplateCommandOutput,
} from "./commands/DeleteReplicationConfigurationTemplateCommand";
import { DeleteSourceServerCommandInput, DeleteSourceServerCommandOutput } from "./commands/DeleteSourceServerCommand";
import {
  DeleteVcenterClientCommandInput,
  DeleteVcenterClientCommandOutput,
} from "./commands/DeleteVcenterClientCommand";
import { DeleteWaveCommandInput, DeleteWaveCommandOutput } from "./commands/DeleteWaveCommand";
import {
  DescribeJobLogItemsCommandInput,
  DescribeJobLogItemsCommandOutput,
} from "./commands/DescribeJobLogItemsCommand";
import { DescribeJobsCommandInput, DescribeJobsCommandOutput } from "./commands/DescribeJobsCommand";
import {
  DescribeLaunchConfigurationTemplatesCommandInput,
  DescribeLaunchConfigurationTemplatesCommandOutput,
} from "./commands/DescribeLaunchConfigurationTemplatesCommand";
import {
  DescribeReplicationConfigurationTemplatesCommandInput,
  DescribeReplicationConfigurationTemplatesCommandOutput,
} from "./commands/DescribeReplicationConfigurationTemplatesCommand";
import {
  DescribeSourceServersCommandInput,
  DescribeSourceServersCommandOutput,
} from "./commands/DescribeSourceServersCommand";
import {
  DescribeVcenterClientsCommandInput,
  DescribeVcenterClientsCommandOutput,
} from "./commands/DescribeVcenterClientsCommand";
import {
  DisassociateApplicationsCommandInput,
  DisassociateApplicationsCommandOutput,
} from "./commands/DisassociateApplicationsCommand";
import {
  DisassociateSourceServersCommandInput,
  DisassociateSourceServersCommandOutput,
} from "./commands/DisassociateSourceServersCommand";
import {
  DisconnectFromServiceCommandInput,
  DisconnectFromServiceCommandOutput,
} from "./commands/DisconnectFromServiceCommand";
import { FinalizeCutoverCommandInput, FinalizeCutoverCommandOutput } from "./commands/FinalizeCutoverCommand";
import {
  GetLaunchConfigurationCommandInput,
  GetLaunchConfigurationCommandOutput,
} from "./commands/GetLaunchConfigurationCommand";
import {
  GetReplicationConfigurationCommandInput,
  GetReplicationConfigurationCommandOutput,
} from "./commands/GetReplicationConfigurationCommand";
import { InitializeServiceCommandInput, InitializeServiceCommandOutput } from "./commands/InitializeServiceCommand";
import { ListApplicationsCommandInput, ListApplicationsCommandOutput } from "./commands/ListApplicationsCommand";
import { ListConnectorsCommandInput, ListConnectorsCommandOutput } from "./commands/ListConnectorsCommand";
import { ListExportErrorsCommandInput, ListExportErrorsCommandOutput } from "./commands/ListExportErrorsCommand";
import { ListExportsCommandInput, ListExportsCommandOutput } from "./commands/ListExportsCommand";
import { ListImportErrorsCommandInput, ListImportErrorsCommandOutput } from "./commands/ListImportErrorsCommand";
import { ListImportsCommandInput, ListImportsCommandOutput } from "./commands/ListImportsCommand";
import {
  ListManagedAccountsCommandInput,
  ListManagedAccountsCommandOutput,
} from "./commands/ListManagedAccountsCommand";
import {
  ListSourceServerActionsCommandInput,
  ListSourceServerActionsCommandOutput,
} from "./commands/ListSourceServerActionsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTemplateActionsCommandInput,
  ListTemplateActionsCommandOutput,
} from "./commands/ListTemplateActionsCommand";
import { ListWavesCommandInput, ListWavesCommandOutput } from "./commands/ListWavesCommand";
import { MarkAsArchivedCommandInput, MarkAsArchivedCommandOutput } from "./commands/MarkAsArchivedCommand";
import { PauseReplicationCommandInput, PauseReplicationCommandOutput } from "./commands/PauseReplicationCommand";
import {
  PutSourceServerActionCommandInput,
  PutSourceServerActionCommandOutput,
} from "./commands/PutSourceServerActionCommand";
import { PutTemplateActionCommandInput, PutTemplateActionCommandOutput } from "./commands/PutTemplateActionCommand";
import {
  RemoveSourceServerActionCommandInput,
  RemoveSourceServerActionCommandOutput,
} from "./commands/RemoveSourceServerActionCommand";
import {
  RemoveTemplateActionCommandInput,
  RemoveTemplateActionCommandOutput,
} from "./commands/RemoveTemplateActionCommand";
import { ResumeReplicationCommandInput, ResumeReplicationCommandOutput } from "./commands/ResumeReplicationCommand";
import {
  RetryDataReplicationCommandInput,
  RetryDataReplicationCommandOutput,
} from "./commands/RetryDataReplicationCommand";
import { StartCutoverCommandInput, StartCutoverCommandOutput } from "./commands/StartCutoverCommand";
import { StartExportCommandInput, StartExportCommandOutput } from "./commands/StartExportCommand";
import { StartImportCommandInput, StartImportCommandOutput } from "./commands/StartImportCommand";
import { StartReplicationCommandInput, StartReplicationCommandOutput } from "./commands/StartReplicationCommand";
import { StartTestCommandInput, StartTestCommandOutput } from "./commands/StartTestCommand";
import { StopReplicationCommandInput, StopReplicationCommandOutput } from "./commands/StopReplicationCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  TerminateTargetInstancesCommandInput,
  TerminateTargetInstancesCommandOutput,
} from "./commands/TerminateTargetInstancesCommand";
import {
  UnarchiveApplicationCommandInput,
  UnarchiveApplicationCommandOutput,
} from "./commands/UnarchiveApplicationCommand";
import { UnarchiveWaveCommandInput, UnarchiveWaveCommandOutput } from "./commands/UnarchiveWaveCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateApplicationCommandInput, UpdateApplicationCommandOutput } from "./commands/UpdateApplicationCommand";
import { UpdateConnectorCommandInput, UpdateConnectorCommandOutput } from "./commands/UpdateConnectorCommand";
import {
  UpdateLaunchConfigurationCommandInput,
  UpdateLaunchConfigurationCommandOutput,
} from "./commands/UpdateLaunchConfigurationCommand";
import {
  UpdateLaunchConfigurationTemplateCommandInput,
  UpdateLaunchConfigurationTemplateCommandOutput,
} from "./commands/UpdateLaunchConfigurationTemplateCommand";
import {
  UpdateReplicationConfigurationCommandInput,
  UpdateReplicationConfigurationCommandOutput,
} from "./commands/UpdateReplicationConfigurationCommand";
import {
  UpdateReplicationConfigurationTemplateCommandInput,
  UpdateReplicationConfigurationTemplateCommandOutput,
} from "./commands/UpdateReplicationConfigurationTemplateCommand";
import { UpdateSourceServerCommandInput, UpdateSourceServerCommandOutput } from "./commands/UpdateSourceServerCommand";
import {
  UpdateSourceServerReplicationTypeCommandInput,
  UpdateSourceServerReplicationTypeCommandOutput,
} from "./commands/UpdateSourceServerReplicationTypeCommand";
import { UpdateWaveCommandInput, UpdateWaveCommandOutput } from "./commands/UpdateWaveCommand";
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
  | ArchiveApplicationCommandInput
  | ArchiveWaveCommandInput
  | AssociateApplicationsCommandInput
  | AssociateSourceServersCommandInput
  | ChangeServerLifeCycleStateCommandInput
  | CreateApplicationCommandInput
  | CreateConnectorCommandInput
  | CreateLaunchConfigurationTemplateCommandInput
  | CreateReplicationConfigurationTemplateCommandInput
  | CreateWaveCommandInput
  | DeleteApplicationCommandInput
  | DeleteConnectorCommandInput
  | DeleteJobCommandInput
  | DeleteLaunchConfigurationTemplateCommandInput
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
  | GetReplicationConfigurationCommandInput
  | InitializeServiceCommandInput
  | ListApplicationsCommandInput
  | ListConnectorsCommandInput
  | ListExportErrorsCommandInput
  | ListExportsCommandInput
  | ListImportErrorsCommandInput
  | ListImportsCommandInput
  | ListManagedAccountsCommandInput
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
  | CreateReplicationConfigurationTemplateCommandOutput
  | CreateWaveCommandOutput
  | DeleteApplicationCommandOutput
  | DeleteConnectorCommandOutput
  | DeleteJobCommandOutput
  | DeleteLaunchConfigurationTemplateCommandOutput
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
  | GetReplicationConfigurationCommandOutput
  | InitializeServiceCommandOutput
  | ListApplicationsCommandOutput
  | ListConnectorsCommandOutput
  | ListExportErrorsCommandOutput
  | ListExportsCommandOutput
  | ListImportErrorsCommandOutput
  | ListImportsCommandOutput
  | ListManagedAccountsCommandOutput
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
