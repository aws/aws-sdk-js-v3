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
  defaultIoTManagedIntegrationsHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  CreateAccountAssociationCommandInput,
  CreateAccountAssociationCommandOutput,
} from "./commands/CreateAccountAssociationCommand";
import type {
  CreateCloudConnectorCommandInput,
  CreateCloudConnectorCommandOutput,
} from "./commands/CreateCloudConnectorCommand";
import type {
  CreateConnectorDestinationCommandInput,
  CreateConnectorDestinationCommandOutput,
} from "./commands/CreateConnectorDestinationCommand";
import type {
  CreateCredentialLockerCommandInput,
  CreateCredentialLockerCommandOutput,
} from "./commands/CreateCredentialLockerCommand";
import type {
  CreateDestinationCommandInput,
  CreateDestinationCommandOutput,
} from "./commands/CreateDestinationCommand";
import type {
  CreateEventLogConfigurationCommandInput,
  CreateEventLogConfigurationCommandOutput,
} from "./commands/CreateEventLogConfigurationCommand";
import type {
  CreateManagedThingCommandInput,
  CreateManagedThingCommandOutput,
} from "./commands/CreateManagedThingCommand";
import type {
  CreateNotificationConfigurationCommandInput,
  CreateNotificationConfigurationCommandOutput,
} from "./commands/CreateNotificationConfigurationCommand";
import type { CreateOtaTaskCommandInput, CreateOtaTaskCommandOutput } from "./commands/CreateOtaTaskCommand";
import type {
  CreateOtaTaskConfigurationCommandInput,
  CreateOtaTaskConfigurationCommandOutput,
} from "./commands/CreateOtaTaskConfigurationCommand";
import type {
  CreateProvisioningProfileCommandInput,
  CreateProvisioningProfileCommandOutput,
} from "./commands/CreateProvisioningProfileCommand";
import type {
  DeleteAccountAssociationCommandInput,
  DeleteAccountAssociationCommandOutput,
} from "./commands/DeleteAccountAssociationCommand";
import type {
  DeleteCloudConnectorCommandInput,
  DeleteCloudConnectorCommandOutput,
} from "./commands/DeleteCloudConnectorCommand";
import type {
  DeleteConnectorDestinationCommandInput,
  DeleteConnectorDestinationCommandOutput,
} from "./commands/DeleteConnectorDestinationCommand";
import type {
  DeleteCredentialLockerCommandInput,
  DeleteCredentialLockerCommandOutput,
} from "./commands/DeleteCredentialLockerCommand";
import type {
  DeleteDestinationCommandInput,
  DeleteDestinationCommandOutput,
} from "./commands/DeleteDestinationCommand";
import type {
  DeleteEventLogConfigurationCommandInput,
  DeleteEventLogConfigurationCommandOutput,
} from "./commands/DeleteEventLogConfigurationCommand";
import type {
  DeleteManagedThingCommandInput,
  DeleteManagedThingCommandOutput,
} from "./commands/DeleteManagedThingCommand";
import type {
  DeleteNotificationConfigurationCommandInput,
  DeleteNotificationConfigurationCommandOutput,
} from "./commands/DeleteNotificationConfigurationCommand";
import type { DeleteOtaTaskCommandInput, DeleteOtaTaskCommandOutput } from "./commands/DeleteOtaTaskCommand";
import type {
  DeleteOtaTaskConfigurationCommandInput,
  DeleteOtaTaskConfigurationCommandOutput,
} from "./commands/DeleteOtaTaskConfigurationCommand";
import type {
  DeleteProvisioningProfileCommandInput,
  DeleteProvisioningProfileCommandOutput,
} from "./commands/DeleteProvisioningProfileCommand";
import type {
  DeregisterAccountAssociationCommandInput,
  DeregisterAccountAssociationCommandOutput,
} from "./commands/DeregisterAccountAssociationCommand";
import type {
  GetAccountAssociationCommandInput,
  GetAccountAssociationCommandOutput,
} from "./commands/GetAccountAssociationCommand";
import type {
  GetCloudConnectorCommandInput,
  GetCloudConnectorCommandOutput,
} from "./commands/GetCloudConnectorCommand";
import type {
  GetConnectorDestinationCommandInput,
  GetConnectorDestinationCommandOutput,
} from "./commands/GetConnectorDestinationCommand";
import type {
  GetCredentialLockerCommandInput,
  GetCredentialLockerCommandOutput,
} from "./commands/GetCredentialLockerCommand";
import type {
  GetCustomEndpointCommandInput,
  GetCustomEndpointCommandOutput,
} from "./commands/GetCustomEndpointCommand";
import type {
  GetDefaultEncryptionConfigurationCommandInput,
  GetDefaultEncryptionConfigurationCommandOutput,
} from "./commands/GetDefaultEncryptionConfigurationCommand";
import type { GetDestinationCommandInput, GetDestinationCommandOutput } from "./commands/GetDestinationCommand";
import type {
  GetDeviceDiscoveryCommandInput,
  GetDeviceDiscoveryCommandOutput,
} from "./commands/GetDeviceDiscoveryCommand";
import type {
  GetEventLogConfigurationCommandInput,
  GetEventLogConfigurationCommandOutput,
} from "./commands/GetEventLogConfigurationCommand";
import type {
  GetHubConfigurationCommandInput,
  GetHubConfigurationCommandOutput,
} from "./commands/GetHubConfigurationCommand";
import type {
  GetManagedThingCapabilitiesCommandInput,
  GetManagedThingCapabilitiesCommandOutput,
} from "./commands/GetManagedThingCapabilitiesCommand";
import type {
  GetManagedThingCertificateCommandInput,
  GetManagedThingCertificateCommandOutput,
} from "./commands/GetManagedThingCertificateCommand";
import type { GetManagedThingCommandInput, GetManagedThingCommandOutput } from "./commands/GetManagedThingCommand";
import type {
  GetManagedThingConnectivityDataCommandInput,
  GetManagedThingConnectivityDataCommandOutput,
} from "./commands/GetManagedThingConnectivityDataCommand";
import type {
  GetManagedThingMetaDataCommandInput,
  GetManagedThingMetaDataCommandOutput,
} from "./commands/GetManagedThingMetaDataCommand";
import type {
  GetManagedThingStateCommandInput,
  GetManagedThingStateCommandOutput,
} from "./commands/GetManagedThingStateCommand";
import type {
  GetNotificationConfigurationCommandInput,
  GetNotificationConfigurationCommandOutput,
} from "./commands/GetNotificationConfigurationCommand";
import type { GetOtaTaskCommandInput, GetOtaTaskCommandOutput } from "./commands/GetOtaTaskCommand";
import type {
  GetOtaTaskConfigurationCommandInput,
  GetOtaTaskConfigurationCommandOutput,
} from "./commands/GetOtaTaskConfigurationCommand";
import type {
  GetProvisioningProfileCommandInput,
  GetProvisioningProfileCommandOutput,
} from "./commands/GetProvisioningProfileCommand";
import type {
  GetRuntimeLogConfigurationCommandInput,
  GetRuntimeLogConfigurationCommandOutput,
} from "./commands/GetRuntimeLogConfigurationCommand";
import type { GetSchemaVersionCommandInput, GetSchemaVersionCommandOutput } from "./commands/GetSchemaVersionCommand";
import type {
  ListAccountAssociationsCommandInput,
  ListAccountAssociationsCommandOutput,
} from "./commands/ListAccountAssociationsCommand";
import type {
  ListCloudConnectorsCommandInput,
  ListCloudConnectorsCommandOutput,
} from "./commands/ListCloudConnectorsCommand";
import type {
  ListConnectorDestinationsCommandInput,
  ListConnectorDestinationsCommandOutput,
} from "./commands/ListConnectorDestinationsCommand";
import type {
  ListCredentialLockersCommandInput,
  ListCredentialLockersCommandOutput,
} from "./commands/ListCredentialLockersCommand";
import type { ListDestinationsCommandInput, ListDestinationsCommandOutput } from "./commands/ListDestinationsCommand";
import type {
  ListDeviceDiscoveriesCommandInput,
  ListDeviceDiscoveriesCommandOutput,
} from "./commands/ListDeviceDiscoveriesCommand";
import type {
  ListDiscoveredDevicesCommandInput,
  ListDiscoveredDevicesCommandOutput,
} from "./commands/ListDiscoveredDevicesCommand";
import type {
  ListEventLogConfigurationsCommandInput,
  ListEventLogConfigurationsCommandOutput,
} from "./commands/ListEventLogConfigurationsCommand";
import type {
  ListManagedThingAccountAssociationsCommandInput,
  ListManagedThingAccountAssociationsCommandOutput,
} from "./commands/ListManagedThingAccountAssociationsCommand";
import type {
  ListManagedThingSchemasCommandInput,
  ListManagedThingSchemasCommandOutput,
} from "./commands/ListManagedThingSchemasCommand";
import type {
  ListManagedThingsCommandInput,
  ListManagedThingsCommandOutput,
} from "./commands/ListManagedThingsCommand";
import type {
  ListNotificationConfigurationsCommandInput,
  ListNotificationConfigurationsCommandOutput,
} from "./commands/ListNotificationConfigurationsCommand";
import type {
  ListOtaTaskConfigurationsCommandInput,
  ListOtaTaskConfigurationsCommandOutput,
} from "./commands/ListOtaTaskConfigurationsCommand";
import type {
  ListOtaTaskExecutionsCommandInput,
  ListOtaTaskExecutionsCommandOutput,
} from "./commands/ListOtaTaskExecutionsCommand";
import type { ListOtaTasksCommandInput, ListOtaTasksCommandOutput } from "./commands/ListOtaTasksCommand";
import type {
  ListProvisioningProfilesCommandInput,
  ListProvisioningProfilesCommandOutput,
} from "./commands/ListProvisioningProfilesCommand";
import type {
  ListSchemaVersionsCommandInput,
  ListSchemaVersionsCommandOutput,
} from "./commands/ListSchemaVersionsCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type {
  PutDefaultEncryptionConfigurationCommandInput,
  PutDefaultEncryptionConfigurationCommandOutput,
} from "./commands/PutDefaultEncryptionConfigurationCommand";
import type {
  PutHubConfigurationCommandInput,
  PutHubConfigurationCommandOutput,
} from "./commands/PutHubConfigurationCommand";
import type {
  PutRuntimeLogConfigurationCommandInput,
  PutRuntimeLogConfigurationCommandOutput,
} from "./commands/PutRuntimeLogConfigurationCommand";
import type {
  RegisterAccountAssociationCommandInput,
  RegisterAccountAssociationCommandOutput,
} from "./commands/RegisterAccountAssociationCommand";
import type {
  RegisterCustomEndpointCommandInput,
  RegisterCustomEndpointCommandOutput,
} from "./commands/RegisterCustomEndpointCommand";
import type {
  ResetRuntimeLogConfigurationCommandInput,
  ResetRuntimeLogConfigurationCommandOutput,
} from "./commands/ResetRuntimeLogConfigurationCommand";
import type {
  SendConnectorEventCommandInput,
  SendConnectorEventCommandOutput,
} from "./commands/SendConnectorEventCommand";
import type {
  SendManagedThingCommandCommandInput,
  SendManagedThingCommandCommandOutput,
} from "./commands/SendManagedThingCommandCommand";
import type {
  StartAccountAssociationRefreshCommandInput,
  StartAccountAssociationRefreshCommandOutput,
} from "./commands/StartAccountAssociationRefreshCommand";
import type {
  StartDeviceDiscoveryCommandInput,
  StartDeviceDiscoveryCommandOutput,
} from "./commands/StartDeviceDiscoveryCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type {
  UpdateAccountAssociationCommandInput,
  UpdateAccountAssociationCommandOutput,
} from "./commands/UpdateAccountAssociationCommand";
import type {
  UpdateCloudConnectorCommandInput,
  UpdateCloudConnectorCommandOutput,
} from "./commands/UpdateCloudConnectorCommand";
import type {
  UpdateConnectorDestinationCommandInput,
  UpdateConnectorDestinationCommandOutput,
} from "./commands/UpdateConnectorDestinationCommand";
import type {
  UpdateDestinationCommandInput,
  UpdateDestinationCommandOutput,
} from "./commands/UpdateDestinationCommand";
import type {
  UpdateEventLogConfigurationCommandInput,
  UpdateEventLogConfigurationCommandOutput,
} from "./commands/UpdateEventLogConfigurationCommand";
import type {
  UpdateManagedThingCommandInput,
  UpdateManagedThingCommandOutput,
} from "./commands/UpdateManagedThingCommand";
import type {
  UpdateNotificationConfigurationCommandInput,
  UpdateNotificationConfigurationCommandOutput,
} from "./commands/UpdateNotificationConfigurationCommand";
import type { UpdateOtaTaskCommandInput, UpdateOtaTaskCommandOutput } from "./commands/UpdateOtaTaskCommand";
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
  | CreateAccountAssociationCommandInput
  | CreateCloudConnectorCommandInput
  | CreateConnectorDestinationCommandInput
  | CreateCredentialLockerCommandInput
  | CreateDestinationCommandInput
  | CreateEventLogConfigurationCommandInput
  | CreateManagedThingCommandInput
  | CreateNotificationConfigurationCommandInput
  | CreateOtaTaskCommandInput
  | CreateOtaTaskConfigurationCommandInput
  | CreateProvisioningProfileCommandInput
  | DeleteAccountAssociationCommandInput
  | DeleteCloudConnectorCommandInput
  | DeleteConnectorDestinationCommandInput
  | DeleteCredentialLockerCommandInput
  | DeleteDestinationCommandInput
  | DeleteEventLogConfigurationCommandInput
  | DeleteManagedThingCommandInput
  | DeleteNotificationConfigurationCommandInput
  | DeleteOtaTaskCommandInput
  | DeleteOtaTaskConfigurationCommandInput
  | DeleteProvisioningProfileCommandInput
  | DeregisterAccountAssociationCommandInput
  | GetAccountAssociationCommandInput
  | GetCloudConnectorCommandInput
  | GetConnectorDestinationCommandInput
  | GetCredentialLockerCommandInput
  | GetCustomEndpointCommandInput
  | GetDefaultEncryptionConfigurationCommandInput
  | GetDestinationCommandInput
  | GetDeviceDiscoveryCommandInput
  | GetEventLogConfigurationCommandInput
  | GetHubConfigurationCommandInput
  | GetManagedThingCapabilitiesCommandInput
  | GetManagedThingCertificateCommandInput
  | GetManagedThingCommandInput
  | GetManagedThingConnectivityDataCommandInput
  | GetManagedThingMetaDataCommandInput
  | GetManagedThingStateCommandInput
  | GetNotificationConfigurationCommandInput
  | GetOtaTaskCommandInput
  | GetOtaTaskConfigurationCommandInput
  | GetProvisioningProfileCommandInput
  | GetRuntimeLogConfigurationCommandInput
  | GetSchemaVersionCommandInput
  | ListAccountAssociationsCommandInput
  | ListCloudConnectorsCommandInput
  | ListConnectorDestinationsCommandInput
  | ListCredentialLockersCommandInput
  | ListDestinationsCommandInput
  | ListDeviceDiscoveriesCommandInput
  | ListDiscoveredDevicesCommandInput
  | ListEventLogConfigurationsCommandInput
  | ListManagedThingAccountAssociationsCommandInput
  | ListManagedThingSchemasCommandInput
  | ListManagedThingsCommandInput
  | ListNotificationConfigurationsCommandInput
  | ListOtaTaskConfigurationsCommandInput
  | ListOtaTaskExecutionsCommandInput
  | ListOtaTasksCommandInput
  | ListProvisioningProfilesCommandInput
  | ListSchemaVersionsCommandInput
  | ListTagsForResourceCommandInput
  | PutDefaultEncryptionConfigurationCommandInput
  | PutHubConfigurationCommandInput
  | PutRuntimeLogConfigurationCommandInput
  | RegisterAccountAssociationCommandInput
  | RegisterCustomEndpointCommandInput
  | ResetRuntimeLogConfigurationCommandInput
  | SendConnectorEventCommandInput
  | SendManagedThingCommandCommandInput
  | StartAccountAssociationRefreshCommandInput
  | StartDeviceDiscoveryCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAccountAssociationCommandInput
  | UpdateCloudConnectorCommandInput
  | UpdateConnectorDestinationCommandInput
  | UpdateDestinationCommandInput
  | UpdateEventLogConfigurationCommandInput
  | UpdateManagedThingCommandInput
  | UpdateNotificationConfigurationCommandInput
  | UpdateOtaTaskCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | CreateAccountAssociationCommandOutput
  | CreateCloudConnectorCommandOutput
  | CreateConnectorDestinationCommandOutput
  | CreateCredentialLockerCommandOutput
  | CreateDestinationCommandOutput
  | CreateEventLogConfigurationCommandOutput
  | CreateManagedThingCommandOutput
  | CreateNotificationConfigurationCommandOutput
  | CreateOtaTaskCommandOutput
  | CreateOtaTaskConfigurationCommandOutput
  | CreateProvisioningProfileCommandOutput
  | DeleteAccountAssociationCommandOutput
  | DeleteCloudConnectorCommandOutput
  | DeleteConnectorDestinationCommandOutput
  | DeleteCredentialLockerCommandOutput
  | DeleteDestinationCommandOutput
  | DeleteEventLogConfigurationCommandOutput
  | DeleteManagedThingCommandOutput
  | DeleteNotificationConfigurationCommandOutput
  | DeleteOtaTaskCommandOutput
  | DeleteOtaTaskConfigurationCommandOutput
  | DeleteProvisioningProfileCommandOutput
  | DeregisterAccountAssociationCommandOutput
  | GetAccountAssociationCommandOutput
  | GetCloudConnectorCommandOutput
  | GetConnectorDestinationCommandOutput
  | GetCredentialLockerCommandOutput
  | GetCustomEndpointCommandOutput
  | GetDefaultEncryptionConfigurationCommandOutput
  | GetDestinationCommandOutput
  | GetDeviceDiscoveryCommandOutput
  | GetEventLogConfigurationCommandOutput
  | GetHubConfigurationCommandOutput
  | GetManagedThingCapabilitiesCommandOutput
  | GetManagedThingCertificateCommandOutput
  | GetManagedThingCommandOutput
  | GetManagedThingConnectivityDataCommandOutput
  | GetManagedThingMetaDataCommandOutput
  | GetManagedThingStateCommandOutput
  | GetNotificationConfigurationCommandOutput
  | GetOtaTaskCommandOutput
  | GetOtaTaskConfigurationCommandOutput
  | GetProvisioningProfileCommandOutput
  | GetRuntimeLogConfigurationCommandOutput
  | GetSchemaVersionCommandOutput
  | ListAccountAssociationsCommandOutput
  | ListCloudConnectorsCommandOutput
  | ListConnectorDestinationsCommandOutput
  | ListCredentialLockersCommandOutput
  | ListDestinationsCommandOutput
  | ListDeviceDiscoveriesCommandOutput
  | ListDiscoveredDevicesCommandOutput
  | ListEventLogConfigurationsCommandOutput
  | ListManagedThingAccountAssociationsCommandOutput
  | ListManagedThingSchemasCommandOutput
  | ListManagedThingsCommandOutput
  | ListNotificationConfigurationsCommandOutput
  | ListOtaTaskConfigurationsCommandOutput
  | ListOtaTaskExecutionsCommandOutput
  | ListOtaTasksCommandOutput
  | ListProvisioningProfilesCommandOutput
  | ListSchemaVersionsCommandOutput
  | ListTagsForResourceCommandOutput
  | PutDefaultEncryptionConfigurationCommandOutput
  | PutHubConfigurationCommandOutput
  | PutRuntimeLogConfigurationCommandOutput
  | RegisterAccountAssociationCommandOutput
  | RegisterCustomEndpointCommandOutput
  | ResetRuntimeLogConfigurationCommandOutput
  | SendConnectorEventCommandOutput
  | SendManagedThingCommandCommandOutput
  | StartAccountAssociationRefreshCommandOutput
  | StartDeviceDiscoveryCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAccountAssociationCommandOutput
  | UpdateCloudConnectorCommandOutput
  | UpdateConnectorDestinationCommandOutput
  | UpdateDestinationCommandOutput
  | UpdateEventLogConfigurationCommandOutput
  | UpdateManagedThingCommandOutput
  | UpdateNotificationConfigurationCommandOutput
  | UpdateOtaTaskCommandOutput;

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
export type IoTManagedIntegrationsClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of IoTManagedIntegrationsClient class constructor that set the region, credentials and other options.
 */
export interface IoTManagedIntegrationsClientConfig extends IoTManagedIntegrationsClientConfigType {}

/**
 * @public
 */
export type IoTManagedIntegrationsClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of IoTManagedIntegrationsClient class. This is resolved and normalized from the {@link IoTManagedIntegrationsClientConfig | constructor configuration interface}.
 */
export interface IoTManagedIntegrationsClientResolvedConfig extends IoTManagedIntegrationsClientResolvedConfigType {}

/**
 * Managed integrations is a feature of AWS IoT Device Management that enables developers to quickly build innovative IoT solutions. Customers can use managed integrations to automate device setup workflows and support interoperability across many devices, regardless of device vendor or connectivity protocol. This allows developers to use a single user-interface to control, manage, and operate a range of devices.
 * @public
 */
export class IoTManagedIntegrationsClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  IoTManagedIntegrationsClientResolvedConfig
> {
  /**
   * The resolved configuration of IoTManagedIntegrationsClient class. This is resolved and normalized from the {@link IoTManagedIntegrationsClientConfig | constructor configuration interface}.
   */
  readonly config: IoTManagedIntegrationsClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<IoTManagedIntegrationsClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultIoTManagedIntegrationsHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: IoTManagedIntegrationsClientResolvedConfig) =>
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
