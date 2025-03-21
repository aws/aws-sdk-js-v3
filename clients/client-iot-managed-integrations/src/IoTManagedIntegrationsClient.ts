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
  defaultIoTManagedIntegrationsHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  CreateCredentialLockerCommandInput,
  CreateCredentialLockerCommandOutput,
} from "./commands/CreateCredentialLockerCommand";
import { CreateDestinationCommandInput, CreateDestinationCommandOutput } from "./commands/CreateDestinationCommand";
import {
  CreateEventLogConfigurationCommandInput,
  CreateEventLogConfigurationCommandOutput,
} from "./commands/CreateEventLogConfigurationCommand";
import { CreateManagedThingCommandInput, CreateManagedThingCommandOutput } from "./commands/CreateManagedThingCommand";
import {
  CreateNotificationConfigurationCommandInput,
  CreateNotificationConfigurationCommandOutput,
} from "./commands/CreateNotificationConfigurationCommand";
import { CreateOtaTaskCommandInput, CreateOtaTaskCommandOutput } from "./commands/CreateOtaTaskCommand";
import {
  CreateOtaTaskConfigurationCommandInput,
  CreateOtaTaskConfigurationCommandOutput,
} from "./commands/CreateOtaTaskConfigurationCommand";
import {
  CreateProvisioningProfileCommandInput,
  CreateProvisioningProfileCommandOutput,
} from "./commands/CreateProvisioningProfileCommand";
import {
  DeleteCredentialLockerCommandInput,
  DeleteCredentialLockerCommandOutput,
} from "./commands/DeleteCredentialLockerCommand";
import { DeleteDestinationCommandInput, DeleteDestinationCommandOutput } from "./commands/DeleteDestinationCommand";
import {
  DeleteEventLogConfigurationCommandInput,
  DeleteEventLogConfigurationCommandOutput,
} from "./commands/DeleteEventLogConfigurationCommand";
import { DeleteManagedThingCommandInput, DeleteManagedThingCommandOutput } from "./commands/DeleteManagedThingCommand";
import {
  DeleteNotificationConfigurationCommandInput,
  DeleteNotificationConfigurationCommandOutput,
} from "./commands/DeleteNotificationConfigurationCommand";
import { DeleteOtaTaskCommandInput, DeleteOtaTaskCommandOutput } from "./commands/DeleteOtaTaskCommand";
import {
  DeleteOtaTaskConfigurationCommandInput,
  DeleteOtaTaskConfigurationCommandOutput,
} from "./commands/DeleteOtaTaskConfigurationCommand";
import {
  DeleteProvisioningProfileCommandInput,
  DeleteProvisioningProfileCommandOutput,
} from "./commands/DeleteProvisioningProfileCommand";
import {
  GetCredentialLockerCommandInput,
  GetCredentialLockerCommandOutput,
} from "./commands/GetCredentialLockerCommand";
import { GetCustomEndpointCommandInput, GetCustomEndpointCommandOutput } from "./commands/GetCustomEndpointCommand";
import {
  GetDefaultEncryptionConfigurationCommandInput,
  GetDefaultEncryptionConfigurationCommandOutput,
} from "./commands/GetDefaultEncryptionConfigurationCommand";
import { GetDestinationCommandInput, GetDestinationCommandOutput } from "./commands/GetDestinationCommand";
import { GetDeviceDiscoveryCommandInput, GetDeviceDiscoveryCommandOutput } from "./commands/GetDeviceDiscoveryCommand";
import {
  GetEventLogConfigurationCommandInput,
  GetEventLogConfigurationCommandOutput,
} from "./commands/GetEventLogConfigurationCommand";
import {
  GetHubConfigurationCommandInput,
  GetHubConfigurationCommandOutput,
} from "./commands/GetHubConfigurationCommand";
import {
  GetManagedThingCapabilitiesCommandInput,
  GetManagedThingCapabilitiesCommandOutput,
} from "./commands/GetManagedThingCapabilitiesCommand";
import { GetManagedThingCommandInput, GetManagedThingCommandOutput } from "./commands/GetManagedThingCommand";
import {
  GetManagedThingConnectivityDataCommandInput,
  GetManagedThingConnectivityDataCommandOutput,
} from "./commands/GetManagedThingConnectivityDataCommand";
import {
  GetManagedThingMetaDataCommandInput,
  GetManagedThingMetaDataCommandOutput,
} from "./commands/GetManagedThingMetaDataCommand";
import {
  GetManagedThingStateCommandInput,
  GetManagedThingStateCommandOutput,
} from "./commands/GetManagedThingStateCommand";
import {
  GetNotificationConfigurationCommandInput,
  GetNotificationConfigurationCommandOutput,
} from "./commands/GetNotificationConfigurationCommand";
import { GetOtaTaskCommandInput, GetOtaTaskCommandOutput } from "./commands/GetOtaTaskCommand";
import {
  GetOtaTaskConfigurationCommandInput,
  GetOtaTaskConfigurationCommandOutput,
} from "./commands/GetOtaTaskConfigurationCommand";
import {
  GetProvisioningProfileCommandInput,
  GetProvisioningProfileCommandOutput,
} from "./commands/GetProvisioningProfileCommand";
import {
  GetRuntimeLogConfigurationCommandInput,
  GetRuntimeLogConfigurationCommandOutput,
} from "./commands/GetRuntimeLogConfigurationCommand";
import { GetSchemaVersionCommandInput, GetSchemaVersionCommandOutput } from "./commands/GetSchemaVersionCommand";
import {
  ListCredentialLockersCommandInput,
  ListCredentialLockersCommandOutput,
} from "./commands/ListCredentialLockersCommand";
import { ListDestinationsCommandInput, ListDestinationsCommandOutput } from "./commands/ListDestinationsCommand";
import {
  ListEventLogConfigurationsCommandInput,
  ListEventLogConfigurationsCommandOutput,
} from "./commands/ListEventLogConfigurationsCommand";
import {
  ListManagedThingSchemasCommandInput,
  ListManagedThingSchemasCommandOutput,
} from "./commands/ListManagedThingSchemasCommand";
import { ListManagedThingsCommandInput, ListManagedThingsCommandOutput } from "./commands/ListManagedThingsCommand";
import {
  ListNotificationConfigurationsCommandInput,
  ListNotificationConfigurationsCommandOutput,
} from "./commands/ListNotificationConfigurationsCommand";
import {
  ListOtaTaskConfigurationsCommandInput,
  ListOtaTaskConfigurationsCommandOutput,
} from "./commands/ListOtaTaskConfigurationsCommand";
import {
  ListOtaTaskExecutionsCommandInput,
  ListOtaTaskExecutionsCommandOutput,
} from "./commands/ListOtaTaskExecutionsCommand";
import { ListOtaTasksCommandInput, ListOtaTasksCommandOutput } from "./commands/ListOtaTasksCommand";
import {
  ListProvisioningProfilesCommandInput,
  ListProvisioningProfilesCommandOutput,
} from "./commands/ListProvisioningProfilesCommand";
import { ListSchemaVersionsCommandInput, ListSchemaVersionsCommandOutput } from "./commands/ListSchemaVersionsCommand";
import {
  PutDefaultEncryptionConfigurationCommandInput,
  PutDefaultEncryptionConfigurationCommandOutput,
} from "./commands/PutDefaultEncryptionConfigurationCommand";
import {
  PutHubConfigurationCommandInput,
  PutHubConfigurationCommandOutput,
} from "./commands/PutHubConfigurationCommand";
import {
  PutRuntimeLogConfigurationCommandInput,
  PutRuntimeLogConfigurationCommandOutput,
} from "./commands/PutRuntimeLogConfigurationCommand";
import {
  RegisterCustomEndpointCommandInput,
  RegisterCustomEndpointCommandOutput,
} from "./commands/RegisterCustomEndpointCommand";
import {
  ResetRuntimeLogConfigurationCommandInput,
  ResetRuntimeLogConfigurationCommandOutput,
} from "./commands/ResetRuntimeLogConfigurationCommand";
import {
  SendManagedThingCommandCommandInput,
  SendManagedThingCommandCommandOutput,
} from "./commands/SendManagedThingCommandCommand";
import {
  StartDeviceDiscoveryCommandInput,
  StartDeviceDiscoveryCommandOutput,
} from "./commands/StartDeviceDiscoveryCommand";
import { UpdateDestinationCommandInput, UpdateDestinationCommandOutput } from "./commands/UpdateDestinationCommand";
import {
  UpdateEventLogConfigurationCommandInput,
  UpdateEventLogConfigurationCommandOutput,
} from "./commands/UpdateEventLogConfigurationCommand";
import { UpdateManagedThingCommandInput, UpdateManagedThingCommandOutput } from "./commands/UpdateManagedThingCommand";
import {
  UpdateNotificationConfigurationCommandInput,
  UpdateNotificationConfigurationCommandOutput,
} from "./commands/UpdateNotificationConfigurationCommand";
import { UpdateOtaTaskCommandInput, UpdateOtaTaskCommandOutput } from "./commands/UpdateOtaTaskCommand";
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
  | CreateCredentialLockerCommandInput
  | CreateDestinationCommandInput
  | CreateEventLogConfigurationCommandInput
  | CreateManagedThingCommandInput
  | CreateNotificationConfigurationCommandInput
  | CreateOtaTaskCommandInput
  | CreateOtaTaskConfigurationCommandInput
  | CreateProvisioningProfileCommandInput
  | DeleteCredentialLockerCommandInput
  | DeleteDestinationCommandInput
  | DeleteEventLogConfigurationCommandInput
  | DeleteManagedThingCommandInput
  | DeleteNotificationConfigurationCommandInput
  | DeleteOtaTaskCommandInput
  | DeleteOtaTaskConfigurationCommandInput
  | DeleteProvisioningProfileCommandInput
  | GetCredentialLockerCommandInput
  | GetCustomEndpointCommandInput
  | GetDefaultEncryptionConfigurationCommandInput
  | GetDestinationCommandInput
  | GetDeviceDiscoveryCommandInput
  | GetEventLogConfigurationCommandInput
  | GetHubConfigurationCommandInput
  | GetManagedThingCapabilitiesCommandInput
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
  | ListCredentialLockersCommandInput
  | ListDestinationsCommandInput
  | ListEventLogConfigurationsCommandInput
  | ListManagedThingSchemasCommandInput
  | ListManagedThingsCommandInput
  | ListNotificationConfigurationsCommandInput
  | ListOtaTaskConfigurationsCommandInput
  | ListOtaTaskExecutionsCommandInput
  | ListOtaTasksCommandInput
  | ListProvisioningProfilesCommandInput
  | ListSchemaVersionsCommandInput
  | PutDefaultEncryptionConfigurationCommandInput
  | PutHubConfigurationCommandInput
  | PutRuntimeLogConfigurationCommandInput
  | RegisterCustomEndpointCommandInput
  | ResetRuntimeLogConfigurationCommandInput
  | SendManagedThingCommandCommandInput
  | StartDeviceDiscoveryCommandInput
  | UpdateDestinationCommandInput
  | UpdateEventLogConfigurationCommandInput
  | UpdateManagedThingCommandInput
  | UpdateNotificationConfigurationCommandInput
  | UpdateOtaTaskCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | CreateCredentialLockerCommandOutput
  | CreateDestinationCommandOutput
  | CreateEventLogConfigurationCommandOutput
  | CreateManagedThingCommandOutput
  | CreateNotificationConfigurationCommandOutput
  | CreateOtaTaskCommandOutput
  | CreateOtaTaskConfigurationCommandOutput
  | CreateProvisioningProfileCommandOutput
  | DeleteCredentialLockerCommandOutput
  | DeleteDestinationCommandOutput
  | DeleteEventLogConfigurationCommandOutput
  | DeleteManagedThingCommandOutput
  | DeleteNotificationConfigurationCommandOutput
  | DeleteOtaTaskCommandOutput
  | DeleteOtaTaskConfigurationCommandOutput
  | DeleteProvisioningProfileCommandOutput
  | GetCredentialLockerCommandOutput
  | GetCustomEndpointCommandOutput
  | GetDefaultEncryptionConfigurationCommandOutput
  | GetDestinationCommandOutput
  | GetDeviceDiscoveryCommandOutput
  | GetEventLogConfigurationCommandOutput
  | GetHubConfigurationCommandOutput
  | GetManagedThingCapabilitiesCommandOutput
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
  | ListCredentialLockersCommandOutput
  | ListDestinationsCommandOutput
  | ListEventLogConfigurationsCommandOutput
  | ListManagedThingSchemasCommandOutput
  | ListManagedThingsCommandOutput
  | ListNotificationConfigurationsCommandOutput
  | ListOtaTaskConfigurationsCommandOutput
  | ListOtaTaskExecutionsCommandOutput
  | ListOtaTasksCommandOutput
  | ListProvisioningProfilesCommandOutput
  | ListSchemaVersionsCommandOutput
  | PutDefaultEncryptionConfigurationCommandOutput
  | PutHubConfigurationCommandOutput
  | PutRuntimeLogConfigurationCommandOutput
  | RegisterCustomEndpointCommandOutput
  | ResetRuntimeLogConfigurationCommandOutput
  | SendManagedThingCommandCommandOutput
  | StartDeviceDiscoveryCommandOutput
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
