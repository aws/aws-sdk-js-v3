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
  defaultNotificationsHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import { AssociateChannelCommandInput, AssociateChannelCommandOutput } from "./commands/AssociateChannelCommand";
import {
  AssociateManagedNotificationAccountContactCommandInput,
  AssociateManagedNotificationAccountContactCommandOutput,
} from "./commands/AssociateManagedNotificationAccountContactCommand";
import {
  AssociateManagedNotificationAdditionalChannelCommandInput,
  AssociateManagedNotificationAdditionalChannelCommandOutput,
} from "./commands/AssociateManagedNotificationAdditionalChannelCommand";
import {
  AssociateOrganizationalUnitCommandInput,
  AssociateOrganizationalUnitCommandOutput,
} from "./commands/AssociateOrganizationalUnitCommand";
import { CreateEventRuleCommandInput, CreateEventRuleCommandOutput } from "./commands/CreateEventRuleCommand";
import {
  CreateNotificationConfigurationCommandInput,
  CreateNotificationConfigurationCommandOutput,
} from "./commands/CreateNotificationConfigurationCommand";
import { DeleteEventRuleCommandInput, DeleteEventRuleCommandOutput } from "./commands/DeleteEventRuleCommand";
import {
  DeleteNotificationConfigurationCommandInput,
  DeleteNotificationConfigurationCommandOutput,
} from "./commands/DeleteNotificationConfigurationCommand";
import {
  DeregisterNotificationHubCommandInput,
  DeregisterNotificationHubCommandOutput,
} from "./commands/DeregisterNotificationHubCommand";
import {
  DisableNotificationsAccessForOrganizationCommandInput,
  DisableNotificationsAccessForOrganizationCommandOutput,
} from "./commands/DisableNotificationsAccessForOrganizationCommand";
import {
  DisassociateChannelCommandInput,
  DisassociateChannelCommandOutput,
} from "./commands/DisassociateChannelCommand";
import {
  DisassociateManagedNotificationAccountContactCommandInput,
  DisassociateManagedNotificationAccountContactCommandOutput,
} from "./commands/DisassociateManagedNotificationAccountContactCommand";
import {
  DisassociateManagedNotificationAdditionalChannelCommandInput,
  DisassociateManagedNotificationAdditionalChannelCommandOutput,
} from "./commands/DisassociateManagedNotificationAdditionalChannelCommand";
import {
  DisassociateOrganizationalUnitCommandInput,
  DisassociateOrganizationalUnitCommandOutput,
} from "./commands/DisassociateOrganizationalUnitCommand";
import {
  EnableNotificationsAccessForOrganizationCommandInput,
  EnableNotificationsAccessForOrganizationCommandOutput,
} from "./commands/EnableNotificationsAccessForOrganizationCommand";
import { GetEventRuleCommandInput, GetEventRuleCommandOutput } from "./commands/GetEventRuleCommand";
import {
  GetManagedNotificationChildEventCommandInput,
  GetManagedNotificationChildEventCommandOutput,
} from "./commands/GetManagedNotificationChildEventCommand";
import {
  GetManagedNotificationConfigurationCommandInput,
  GetManagedNotificationConfigurationCommandOutput,
} from "./commands/GetManagedNotificationConfigurationCommand";
import {
  GetManagedNotificationEventCommandInput,
  GetManagedNotificationEventCommandOutput,
} from "./commands/GetManagedNotificationEventCommand";
import {
  GetNotificationConfigurationCommandInput,
  GetNotificationConfigurationCommandOutput,
} from "./commands/GetNotificationConfigurationCommand";
import {
  GetNotificationEventCommandInput,
  GetNotificationEventCommandOutput,
} from "./commands/GetNotificationEventCommand";
import {
  GetNotificationsAccessForOrganizationCommandInput,
  GetNotificationsAccessForOrganizationCommandOutput,
} from "./commands/GetNotificationsAccessForOrganizationCommand";
import { ListChannelsCommandInput, ListChannelsCommandOutput } from "./commands/ListChannelsCommand";
import { ListEventRulesCommandInput, ListEventRulesCommandOutput } from "./commands/ListEventRulesCommand";
import {
  ListManagedNotificationChannelAssociationsCommandInput,
  ListManagedNotificationChannelAssociationsCommandOutput,
} from "./commands/ListManagedNotificationChannelAssociationsCommand";
import {
  ListManagedNotificationChildEventsCommandInput,
  ListManagedNotificationChildEventsCommandOutput,
} from "./commands/ListManagedNotificationChildEventsCommand";
import {
  ListManagedNotificationConfigurationsCommandInput,
  ListManagedNotificationConfigurationsCommandOutput,
} from "./commands/ListManagedNotificationConfigurationsCommand";
import {
  ListManagedNotificationEventsCommandInput,
  ListManagedNotificationEventsCommandOutput,
} from "./commands/ListManagedNotificationEventsCommand";
import { ListMemberAccountsCommandInput, ListMemberAccountsCommandOutput } from "./commands/ListMemberAccountsCommand";
import {
  ListNotificationConfigurationsCommandInput,
  ListNotificationConfigurationsCommandOutput,
} from "./commands/ListNotificationConfigurationsCommand";
import {
  ListNotificationEventsCommandInput,
  ListNotificationEventsCommandOutput,
} from "./commands/ListNotificationEventsCommand";
import {
  ListNotificationHubsCommandInput,
  ListNotificationHubsCommandOutput,
} from "./commands/ListNotificationHubsCommand";
import {
  ListOrganizationalUnitsCommandInput,
  ListOrganizationalUnitsCommandOutput,
} from "./commands/ListOrganizationalUnitsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  RegisterNotificationHubCommandInput,
  RegisterNotificationHubCommandOutput,
} from "./commands/RegisterNotificationHubCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateEventRuleCommandInput, UpdateEventRuleCommandOutput } from "./commands/UpdateEventRuleCommand";
import {
  UpdateNotificationConfigurationCommandInput,
  UpdateNotificationConfigurationCommandOutput,
} from "./commands/UpdateNotificationConfigurationCommand";
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
  | AssociateChannelCommandInput
  | AssociateManagedNotificationAccountContactCommandInput
  | AssociateManagedNotificationAdditionalChannelCommandInput
  | AssociateOrganizationalUnitCommandInput
  | CreateEventRuleCommandInput
  | CreateNotificationConfigurationCommandInput
  | DeleteEventRuleCommandInput
  | DeleteNotificationConfigurationCommandInput
  | DeregisterNotificationHubCommandInput
  | DisableNotificationsAccessForOrganizationCommandInput
  | DisassociateChannelCommandInput
  | DisassociateManagedNotificationAccountContactCommandInput
  | DisassociateManagedNotificationAdditionalChannelCommandInput
  | DisassociateOrganizationalUnitCommandInput
  | EnableNotificationsAccessForOrganizationCommandInput
  | GetEventRuleCommandInput
  | GetManagedNotificationChildEventCommandInput
  | GetManagedNotificationConfigurationCommandInput
  | GetManagedNotificationEventCommandInput
  | GetNotificationConfigurationCommandInput
  | GetNotificationEventCommandInput
  | GetNotificationsAccessForOrganizationCommandInput
  | ListChannelsCommandInput
  | ListEventRulesCommandInput
  | ListManagedNotificationChannelAssociationsCommandInput
  | ListManagedNotificationChildEventsCommandInput
  | ListManagedNotificationConfigurationsCommandInput
  | ListManagedNotificationEventsCommandInput
  | ListMemberAccountsCommandInput
  | ListNotificationConfigurationsCommandInput
  | ListNotificationEventsCommandInput
  | ListNotificationHubsCommandInput
  | ListOrganizationalUnitsCommandInput
  | ListTagsForResourceCommandInput
  | RegisterNotificationHubCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateEventRuleCommandInput
  | UpdateNotificationConfigurationCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AssociateChannelCommandOutput
  | AssociateManagedNotificationAccountContactCommandOutput
  | AssociateManagedNotificationAdditionalChannelCommandOutput
  | AssociateOrganizationalUnitCommandOutput
  | CreateEventRuleCommandOutput
  | CreateNotificationConfigurationCommandOutput
  | DeleteEventRuleCommandOutput
  | DeleteNotificationConfigurationCommandOutput
  | DeregisterNotificationHubCommandOutput
  | DisableNotificationsAccessForOrganizationCommandOutput
  | DisassociateChannelCommandOutput
  | DisassociateManagedNotificationAccountContactCommandOutput
  | DisassociateManagedNotificationAdditionalChannelCommandOutput
  | DisassociateOrganizationalUnitCommandOutput
  | EnableNotificationsAccessForOrganizationCommandOutput
  | GetEventRuleCommandOutput
  | GetManagedNotificationChildEventCommandOutput
  | GetManagedNotificationConfigurationCommandOutput
  | GetManagedNotificationEventCommandOutput
  | GetNotificationConfigurationCommandOutput
  | GetNotificationEventCommandOutput
  | GetNotificationsAccessForOrganizationCommandOutput
  | ListChannelsCommandOutput
  | ListEventRulesCommandOutput
  | ListManagedNotificationChannelAssociationsCommandOutput
  | ListManagedNotificationChildEventsCommandOutput
  | ListManagedNotificationConfigurationsCommandOutput
  | ListManagedNotificationEventsCommandOutput
  | ListMemberAccountsCommandOutput
  | ListNotificationConfigurationsCommandOutput
  | ListNotificationEventsCommandOutput
  | ListNotificationHubsCommandOutput
  | ListOrganizationalUnitsCommandOutput
  | ListTagsForResourceCommandOutput
  | RegisterNotificationHubCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateEventRuleCommandOutput
  | UpdateNotificationConfigurationCommandOutput;

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
export type NotificationsClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of NotificationsClient class constructor that set the region, credentials and other options.
 */
export interface NotificationsClientConfig extends NotificationsClientConfigType {}

/**
 * @public
 */
export type NotificationsClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of NotificationsClient class. This is resolved and normalized from the {@link NotificationsClientConfig | constructor configuration interface}.
 */
export interface NotificationsClientResolvedConfig extends NotificationsClientResolvedConfigType {}

/**
 * <p>The <i>User Notifications API Reference</i> provides descriptions, API request parameters, and the JSON response for each of the User Notifications API actions.</p> <p>User Notification control plane APIs are currently available in US East (Virginia) - <code>us-east-1</code>.</p> <p> <a href="https://docs.aws.amazon.com/notifications/latest/APIReference/API_GetNotificationEvent.html">GetNotificationEvent</a> and <a href="https://docs.aws.amazon.com/notifications/latest/APIReference/API_ListNotificationEvents.html">ListNotificationEvents</a> APIs are currently available in <a href="https://docs.aws.amazon.com/notifications/latest/userguide/supported-regions.html">commercial partition Regions</a> and only return notifications stored in the same Region in which they're called.</p> <p>The User Notifications console can only be used in US East (Virginia). Your data however, is stored in each Region chosen as a <a href="https://docs.aws.amazon.com/notifications/latest/userguide/notification-hubs.html">notification hub</a> in addition to US East (Virginia).</p> <note> <p>For information about descriptions, API request parameters, and the JSON response for email contact related API actions, see the <a href="https://docs.aws.amazon.com/notificationscontacts/latest/APIReference/Welcome.html">User Notifications Contacts API Reference Guide</a>.</p> </note>
 * @public
 */
export class NotificationsClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  NotificationsClientResolvedConfig
> {
  /**
   * The resolved configuration of NotificationsClient class. This is resolved and normalized from the {@link NotificationsClientConfig | constructor configuration interface}.
   */
  readonly config: NotificationsClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<NotificationsClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultNotificationsHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: NotificationsClientResolvedConfig) =>
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
