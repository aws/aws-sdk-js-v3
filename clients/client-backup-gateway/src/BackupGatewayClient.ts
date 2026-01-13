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
import {
  type BodyLengthCalculator as __BodyLengthCalculator,
  type CheckOptionalClientConfig as __CheckOptionalClientConfig,
  type ChecksumConstructor as __ChecksumConstructor,
  type Decoder as __Decoder,
  type Encoder as __Encoder,
  type HashConstructor as __HashConstructor,
  type HttpHandlerOptions as __HttpHandlerOptions,
  type Logger as __Logger,
  type Provider as __Provider,
  type StreamCollector as __StreamCollector,
  type UrlParser as __UrlParser,
  AwsCredentialIdentityProvider,
  EndpointV2 as __EndpointV2,
  Provider,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultBackupGatewayHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
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
  GetBandwidthRateLimitScheduleCommandInput,
  GetBandwidthRateLimitScheduleCommandOutput,
} from "./commands/GetBandwidthRateLimitScheduleCommand";
import { GetGatewayCommandInput, GetGatewayCommandOutput } from "./commands/GetGatewayCommand";
import { GetHypervisorCommandInput, GetHypervisorCommandOutput } from "./commands/GetHypervisorCommand";
import {
  GetHypervisorPropertyMappingsCommandInput,
  GetHypervisorPropertyMappingsCommandOutput,
} from "./commands/GetHypervisorPropertyMappingsCommand";
import { GetVirtualMachineCommandInput, GetVirtualMachineCommandOutput } from "./commands/GetVirtualMachineCommand";
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
  PutBandwidthRateLimitScheduleCommandInput,
  PutBandwidthRateLimitScheduleCommandOutput,
} from "./commands/PutBandwidthRateLimitScheduleCommand";
import {
  PutHypervisorPropertyMappingsCommandInput,
  PutHypervisorPropertyMappingsCommandOutput,
} from "./commands/PutHypervisorPropertyMappingsCommand";
import {
  PutMaintenanceStartTimeCommandInput,
  PutMaintenanceStartTimeCommandOutput,
} from "./commands/PutMaintenanceStartTimeCommand";
import {
  StartVirtualMachinesMetadataSyncCommandInput,
  StartVirtualMachinesMetadataSyncCommandOutput,
} from "./commands/StartVirtualMachinesMetadataSyncCommand";
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
import {
  UpdateGatewaySoftwareNowCommandInput,
  UpdateGatewaySoftwareNowCommandOutput,
} from "./commands/UpdateGatewaySoftwareNowCommand";
import { UpdateHypervisorCommandInput, UpdateHypervisorCommandOutput } from "./commands/UpdateHypervisorCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { type RuntimeExtension, type RuntimeExtensionsConfig, resolveRuntimeExtensions } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | AssociateGatewayToServerCommandInput
  | CreateGatewayCommandInput
  | DeleteGatewayCommandInput
  | DeleteHypervisorCommandInput
  | DisassociateGatewayFromServerCommandInput
  | GetBandwidthRateLimitScheduleCommandInput
  | GetGatewayCommandInput
  | GetHypervisorCommandInput
  | GetHypervisorPropertyMappingsCommandInput
  | GetVirtualMachineCommandInput
  | ImportHypervisorConfigurationCommandInput
  | ListGatewaysCommandInput
  | ListHypervisorsCommandInput
  | ListTagsForResourceCommandInput
  | ListVirtualMachinesCommandInput
  | PutBandwidthRateLimitScheduleCommandInput
  | PutHypervisorPropertyMappingsCommandInput
  | PutMaintenanceStartTimeCommandInput
  | StartVirtualMachinesMetadataSyncCommandInput
  | TagResourceCommandInput
  | TestHypervisorConfigurationCommandInput
  | UntagResourceCommandInput
  | UpdateGatewayInformationCommandInput
  | UpdateGatewaySoftwareNowCommandInput
  | UpdateHypervisorCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AssociateGatewayToServerCommandOutput
  | CreateGatewayCommandOutput
  | DeleteGatewayCommandOutput
  | DeleteHypervisorCommandOutput
  | DisassociateGatewayFromServerCommandOutput
  | GetBandwidthRateLimitScheduleCommandOutput
  | GetGatewayCommandOutput
  | GetHypervisorCommandOutput
  | GetHypervisorPropertyMappingsCommandOutput
  | GetVirtualMachineCommandOutput
  | ImportHypervisorConfigurationCommandOutput
  | ListGatewaysCommandOutput
  | ListHypervisorsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListVirtualMachinesCommandOutput
  | PutBandwidthRateLimitScheduleCommandOutput
  | PutHypervisorPropertyMappingsCommandOutput
  | PutMaintenanceStartTimeCommandOutput
  | StartVirtualMachinesMetadataSyncCommandOutput
  | TagResourceCommandOutput
  | TestHypervisorConfigurationCommandOutput
  | UntagResourceCommandOutput
  | UpdateGatewayInformationCommandOutput
  | UpdateGatewaySoftwareNowCommandOutput
  | UpdateHypervisorCommandOutput;

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
export type BackupGatewayClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of BackupGatewayClient class constructor that set the region, credentials and other options.
 */
export interface BackupGatewayClientConfig extends BackupGatewayClientConfigType {}

/**
 * @public
 */
export type BackupGatewayClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of BackupGatewayClient class. This is resolved and normalized from the {@link BackupGatewayClientConfig | constructor configuration interface}.
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
 * @public
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

  constructor(...[configuration]: __CheckOptionalClientConfig<BackupGatewayClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultBackupGatewayHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: BackupGatewayClientResolvedConfig) =>
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
