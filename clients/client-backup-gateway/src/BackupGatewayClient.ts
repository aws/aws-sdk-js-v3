import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig,
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
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
  DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  RegionInfoProvider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

import {
  AssociateGatewayToServerCommandInput,
  AssociateGatewayToServerCommandOutput,
} from "./commands/AssociateGatewayToServerCommand";
import { CreateGatewayCommandInput, CreateGatewayCommandOutput } from "./commands/CreateGatewayCommand";
import { DeleteGatewayCommandInput, DeleteGatewayCommandOutput } from "./commands/DeleteGatewayCommand";
import { DeleteHypervisorCommandInput, DeleteHypervisorCommandOutput } from "./commands/DeleteHypervisorCommand";
import {
  DisassociateGatewayFromServerCommandInput,
  DisassociateGatewayFromServerCommandOutput,
} from "./commands/DisassociateGatewayFromServerCommand";
import {
  ImportHypervisorConfigurationCommandInput,
  ImportHypervisorConfigurationCommandOutput,
} from "./commands/ImportHypervisorConfigurationCommand";
import { ListGatewaysCommandInput, ListGatewaysCommandOutput } from "./commands/ListGatewaysCommand";
import { ListHypervisorsCommandInput, ListHypervisorsCommandOutput } from "./commands/ListHypervisorsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListVirtualMachinesCommandInput,
  ListVirtualMachinesCommandOutput,
} from "./commands/ListVirtualMachinesCommand";
import {
  PutMaintenanceStartTimeCommandInput,
  PutMaintenanceStartTimeCommandOutput,
} from "./commands/PutMaintenanceStartTimeCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  TestHypervisorConfigurationCommandInput,
  TestHypervisorConfigurationCommandOutput,
} from "./commands/TestHypervisorConfigurationCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateGatewayInformationCommandInput,
  UpdateGatewayInformationCommandOutput,
} from "./commands/UpdateGatewayInformationCommand";
import { UpdateHypervisorCommandInput, UpdateHypervisorCommandOutput } from "./commands/UpdateHypervisorCommand";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | AssociateGatewayToServerCommandInput
  | CreateGatewayCommandInput
  | DeleteGatewayCommandInput
  | DeleteHypervisorCommandInput
  | DisassociateGatewayFromServerCommandInput
  | ImportHypervisorConfigurationCommandInput
  | ListGatewaysCommandInput
  | ListHypervisorsCommandInput
  | ListTagsForResourceCommandInput
  | ListVirtualMachinesCommandInput
  | PutMaintenanceStartTimeCommandInput
  | TagResourceCommandInput
  | TestHypervisorConfigurationCommandInput
  | UntagResourceCommandInput
  | UpdateGatewayInformationCommandInput
  | UpdateHypervisorCommandInput;

export type ServiceOutputTypes =
  | AssociateGatewayToServerCommandOutput
  | CreateGatewayCommandOutput
  | DeleteGatewayCommandOutput
  | DeleteHypervisorCommandOutput
  | DisassociateGatewayFromServerCommandOutput
  | ImportHypervisorConfigurationCommandOutput
  | ListGatewaysCommandOutput
  | ListHypervisorsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListVirtualMachinesCommandOutput
  | PutMaintenanceStartTimeCommandOutput
  | TagResourceCommandOutput
  | TestHypervisorConfigurationCommandOutput
  | UntagResourceCommandOutput
  | UpdateGatewayInformationCommandOutput
  | UpdateHypervisorCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Hash} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __HashConstructor;

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
   * Fetch related hostname, signing name or signing region with given region.
   * @internal
   */
  regionInfoProvider?: RegionInfoProvider;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * The {@link DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: DefaultsMode | Provider<DefaultsMode>;
}

type BackupGatewayClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of BackupGatewayClient class constructor that set the region, credentials and other options.
 */
export interface BackupGatewayClientConfig extends BackupGatewayClientConfigType {}

type BackupGatewayClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of BackupGatewayClient class. This is resolved and normalized from the {@link BackupGatewayClientConfig | constructor configuration interface}.
 */
export interface BackupGatewayClientResolvedConfig extends BackupGatewayClientResolvedConfigType {}

/**
 * <fullname>Backup gateway</fullname>
 *          <p>Backup gateway connects Backup to your hypervisor, so you can
 *       create, store, and restore backups of your virtual machines (VMs) anywhere, whether
 *       on-premises or in the VMware Cloud (VMC) on Amazon Web Services.</p>
 *          <p>Add on-premises resources by connecting to a hypervisor through a gateway. Backup will automatically discover the resources in your hypervisor.</p>
 *          <p>Use Backup to assign virtual or on-premises resources to a backup plan, or run
 *       on-demand backups. Once you have backed up your resources, you can view them and restore them
 *       like any resource supported by Backup.</p>
 *          <p>To download the Amazon Web Services software to get started, navigate to the Backup console, choose <b>Gateways</b>, then choose <b>Create gateway</b>.</p>
 */
export class BackupGatewayClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  BackupGatewayClientResolvedConfig
> {
  /**
   * The resolved configuration of BackupGatewayClient class. This is resolved and normalized from the {@link BackupGatewayClientConfig | constructor configuration interface}.
   */
  readonly config: BackupGatewayClientResolvedConfig;

  constructor(configuration: BackupGatewayClientConfig) {
    const _config_0 = __getRuntimeConfig(configuration);
    const _config_1 = resolveRegionConfig(_config_0);
    const _config_2 = resolveEndpointsConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveHostHeaderConfig(_config_3);
    const _config_5 = resolveAwsAuthConfig(_config_4);
    const _config_6 = resolveUserAgentConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
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
