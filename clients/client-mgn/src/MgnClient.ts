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
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

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
import {
  RetryDataReplicationCommandInput,
  RetryDataReplicationCommandOutput,
} from "./commands/RetryDataReplicationCommand";
import { StartCutoverCommandInput, StartCutoverCommandOutput } from "./commands/StartCutoverCommand";
import { StartReplicationCommandInput, StartReplicationCommandOutput } from "./commands/StartReplicationCommand";
import { StartTestCommandInput, StartTestCommandOutput } from "./commands/StartTestCommand";
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

export type ServiceInputTypes =
  | ArchiveApplicationCommandInput
  | ArchiveWaveCommandInput
  | AssociateApplicationsCommandInput
  | AssociateSourceServersCommandInput
  | ChangeServerLifeCycleStateCommandInput
  | CreateApplicationCommandInput
  | CreateLaunchConfigurationTemplateCommandInput
  | CreateReplicationConfigurationTemplateCommandInput
  | CreateWaveCommandInput
  | DeleteApplicationCommandInput
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
  | ListSourceServerActionsCommandInput
  | ListTagsForResourceCommandInput
  | ListTemplateActionsCommandInput
  | ListWavesCommandInput
  | MarkAsArchivedCommandInput
  | PutSourceServerActionCommandInput
  | PutTemplateActionCommandInput
  | RemoveSourceServerActionCommandInput
  | RemoveTemplateActionCommandInput
  | RetryDataReplicationCommandInput
  | StartCutoverCommandInput
  | StartReplicationCommandInput
  | StartTestCommandInput
  | TagResourceCommandInput
  | TerminateTargetInstancesCommandInput
  | UnarchiveApplicationCommandInput
  | UnarchiveWaveCommandInput
  | UntagResourceCommandInput
  | UpdateApplicationCommandInput
  | UpdateLaunchConfigurationCommandInput
  | UpdateLaunchConfigurationTemplateCommandInput
  | UpdateReplicationConfigurationCommandInput
  | UpdateReplicationConfigurationTemplateCommandInput
  | UpdateSourceServerReplicationTypeCommandInput
  | UpdateWaveCommandInput;

export type ServiceOutputTypes =
  | ArchiveApplicationCommandOutput
  | ArchiveWaveCommandOutput
  | AssociateApplicationsCommandOutput
  | AssociateSourceServersCommandOutput
  | ChangeServerLifeCycleStateCommandOutput
  | CreateApplicationCommandOutput
  | CreateLaunchConfigurationTemplateCommandOutput
  | CreateReplicationConfigurationTemplateCommandOutput
  | CreateWaveCommandOutput
  | DeleteApplicationCommandOutput
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
  | ListSourceServerActionsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTemplateActionsCommandOutput
  | ListWavesCommandOutput
  | MarkAsArchivedCommandOutput
  | PutSourceServerActionCommandOutput
  | PutTemplateActionCommandOutput
  | RemoveSourceServerActionCommandOutput
  | RemoveTemplateActionCommandOutput
  | RetryDataReplicationCommandOutput
  | StartCutoverCommandOutput
  | StartReplicationCommandOutput
  | StartTestCommandOutput
  | TagResourceCommandOutput
  | TerminateTargetInstancesCommandOutput
  | UnarchiveApplicationCommandOutput
  | UnarchiveWaveCommandOutput
  | UntagResourceCommandOutput
  | UpdateApplicationCommandOutput
  | UpdateLaunchConfigurationCommandOutput
  | UpdateLaunchConfigurationTemplateCommandOutput
  | UpdateReplicationConfigurationCommandOutput
  | UpdateReplicationConfigurationTemplateCommandOutput
  | UpdateSourceServerReplicationTypeCommandOutput
  | UpdateWaveCommandOutput;

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
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

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
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * The {@link __DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

type MgnClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of MgnClient class constructor that set the region, credentials and other options.
 */
export interface MgnClientConfig extends MgnClientConfigType {}

type MgnClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of MgnClient class. This is resolved and normalized from the {@link MgnClientConfig | constructor configuration interface}.
 */
export interface MgnClientResolvedConfig extends MgnClientResolvedConfigType {}

/**
 * <p>The Application Migration Service service.</p>
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

  constructor(configuration: MgnClientConfig) {
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
