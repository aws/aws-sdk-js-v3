// smithy-typescript generated code
import {
  type HostHeaderInputConfig,
  type HostHeaderResolvedConfig,
  type UserAgentInputConfig,
  type UserAgentResolvedConfig,
  getHostHeaderPlugin,
  getLoggerPlugin,
  getRecursionDetectionPlugin,
  getUserAgentPlugin,
  resolveHostHeaderConfig,
  resolveUserAgentConfig,
} from "@aws-sdk/core/client";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import {
  type DefaultsMode as __DefaultsMode,
  type SmithyConfiguration as __SmithyConfiguration,
  type SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
  Client as __Client,
} from "@smithy/core/client";
import { type RegionInputConfig, type RegionResolvedConfig, resolveRegionConfig } from "@smithy/core/config";
import { type EndpointInputConfig, type EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/core/endpoints";
import { type HttpHandlerUserInput as __HttpHandlerUserInput, getContentLengthPlugin } from "@smithy/core/protocols";
import {
  type RetryInputConfig,
  type RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig,
} from "@smithy/core/retry";
import { getSchemaSerdePlugin } from "@smithy/core/schema";
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
  defaultCloudWatchOmniHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  CreateAccessGrantCommandInput,
  CreateAccessGrantCommandOutput,
} from "./commands/CreateAccessGrantCommand";
import type {
  CreateAccessProfileCommandInput,
  CreateAccessProfileCommandOutput,
} from "./commands/CreateAccessProfileCommand";
import type { CreateAlertCommandInput, CreateAlertCommandOutput } from "./commands/CreateAlertCommand";
import type {
  CreateDomainAccessGrantForOrganizationCommandInput,
  CreateDomainAccessGrantForOrganizationCommandOutput,
} from "./commands/CreateDomainAccessGrantForOrganizationCommand";
import type { CreateDomainCommandInput, CreateDomainCommandOutput } from "./commands/CreateDomainCommand";
import type {
  CreateDomainForOrganizationCommandInput,
  CreateDomainForOrganizationCommandOutput,
} from "./commands/CreateDomainForOrganizationCommand";
import type {
  CreateIntegrationCommandInput,
  CreateIntegrationCommandOutput,
} from "./commands/CreateIntegrationCommand";
import type {
  CreateOmniDashboardCommandInput,
  CreateOmniDashboardCommandOutput,
} from "./commands/CreateOmniDashboardCommand";
import type {
  CreateOneTimeDeepLinkCodeCommandInput,
  CreateOneTimeDeepLinkCodeCommandOutput,
} from "./commands/CreateOneTimeDeepLinkCodeCommand";
import type { CreateSpaceCommandInput, CreateSpaceCommandOutput } from "./commands/CreateSpaceCommand";
import type { CreateViewCommandInput, CreateViewCommandOutput } from "./commands/CreateViewCommand";
import type {
  DeleteAccessGrantCommandInput,
  DeleteAccessGrantCommandOutput,
} from "./commands/DeleteAccessGrantCommand";
import type {
  DeleteAccessProfileCommandInput,
  DeleteAccessProfileCommandOutput,
} from "./commands/DeleteAccessProfileCommand";
import type { DeleteAlertCommandInput, DeleteAlertCommandOutput } from "./commands/DeleteAlertCommand";
import type {
  DeleteDomainAccessGrantForOrganizationCommandInput,
  DeleteDomainAccessGrantForOrganizationCommandOutput,
} from "./commands/DeleteDomainAccessGrantForOrganizationCommand";
import type { DeleteDomainCommandInput, DeleteDomainCommandOutput } from "./commands/DeleteDomainCommand";
import type {
  DeleteDomainForOrganizationCommandInput,
  DeleteDomainForOrganizationCommandOutput,
} from "./commands/DeleteDomainForOrganizationCommand";
import type {
  DeleteIntegrationCommandInput,
  DeleteIntegrationCommandOutput,
} from "./commands/DeleteIntegrationCommand";
import type {
  DeleteOmniDashboardCommandInput,
  DeleteOmniDashboardCommandOutput,
} from "./commands/DeleteOmniDashboardCommand";
import type { DeleteSpaceCommandInput, DeleteSpaceCommandOutput } from "./commands/DeleteSpaceCommand";
import type { DeleteViewCommandInput, DeleteViewCommandOutput } from "./commands/DeleteViewCommand";
import type { GetAccessGrantCommandInput, GetAccessGrantCommandOutput } from "./commands/GetAccessGrantCommand";
import type { GetAccessProfileCommandInput, GetAccessProfileCommandOutput } from "./commands/GetAccessProfileCommand";
import type { GetAlertCommandInput, GetAlertCommandOutput } from "./commands/GetAlertCommand";
import type { GetContextGraphCommandInput, GetContextGraphCommandOutput } from "./commands/GetContextGraphCommand";
import type {
  GetDomainAccessGrantForOrganizationCommandInput,
  GetDomainAccessGrantForOrganizationCommandOutput,
} from "./commands/GetDomainAccessGrantForOrganizationCommand";
import type { GetDomainCommandInput, GetDomainCommandOutput } from "./commands/GetDomainCommand";
import type {
  GetDomainForOrganizationCommandInput,
  GetDomainForOrganizationCommandOutput,
} from "./commands/GetDomainForOrganizationCommand";
import type { GetIntegrationCommandInput, GetIntegrationCommandOutput } from "./commands/GetIntegrationCommand";
import type {
  GetIntelligenceConfigurationCommandInput,
  GetIntelligenceConfigurationCommandOutput,
} from "./commands/GetIntelligenceConfigurationCommand";
import type { GetOmniDashboardCommandInput, GetOmniDashboardCommandOutput } from "./commands/GetOmniDashboardCommand";
import type { GetSpaceCommandInput, GetSpaceCommandOutput } from "./commands/GetSpaceCommand";
import type {
  GetSpaceCredentialsForOrganizationCommandInput,
  GetSpaceCredentialsForOrganizationCommandOutput,
} from "./commands/GetSpaceCredentialsForOrganizationCommand";
import type {
  GetTelemetryQueryResultsCommandInput,
  GetTelemetryQueryResultsCommandOutput,
} from "./commands/GetTelemetryQueryResultsCommand";
import type { GetViewCommandInput, GetViewCommandOutput } from "./commands/GetViewCommand";
import type { ListAccessGrantsCommandInput, ListAccessGrantsCommandOutput } from "./commands/ListAccessGrantsCommand";
import type {
  ListAccessProfilesCommandInput,
  ListAccessProfilesCommandOutput,
} from "./commands/ListAccessProfilesCommand";
import type { ListAlertsCommandInput, ListAlertsCommandOutput } from "./commands/ListAlertsCommand";
import type {
  ListDomainAccessGrantsForOrganizationCommandInput,
  ListDomainAccessGrantsForOrganizationCommandOutput,
} from "./commands/ListDomainAccessGrantsForOrganizationCommand";
import type { ListDomainsCommandInput, ListDomainsCommandOutput } from "./commands/ListDomainsCommand";
import type { ListIntegrationsCommandInput, ListIntegrationsCommandOutput } from "./commands/ListIntegrationsCommand";
import type {
  ListOmniDashboardsCommandInput,
  ListOmniDashboardsCommandOutput,
} from "./commands/ListOmniDashboardsCommand";
import type { ListSpacesCommandInput, ListSpacesCommandOutput } from "./commands/ListSpacesCommand";
import type {
  ListSpacesForOrganizationCommandInput,
  ListSpacesForOrganizationCommandOutput,
} from "./commands/ListSpacesForOrganizationCommand";
import type {
  ListTelemetryFieldsCommandInput,
  ListTelemetryFieldsCommandOutput,
} from "./commands/ListTelemetryFieldsCommand";
import type {
  ListTelemetryQuerySessionsCommandInput,
  ListTelemetryQuerySessionsCommandOutput,
} from "./commands/ListTelemetryQuerySessionsCommand";
import type { ListViewsCommandInput, ListViewsCommandOutput } from "./commands/ListViewsCommand";
import type {
  PutIntelligenceConfigurationCommandInput,
  PutIntelligenceConfigurationCommandOutput,
} from "./commands/PutIntelligenceConfigurationCommand";
import type { SearchPrincipalsCommandInput, SearchPrincipalsCommandOutput } from "./commands/SearchPrincipalsCommand";
import type {
  StartTelemetryQueryCommandInput,
  StartTelemetryQueryCommandOutput,
} from "./commands/StartTelemetryQueryCommand";
import type {
  StartTelemetryQuerySessionCommandInput,
  StartTelemetryQuerySessionCommandOutput,
} from "./commands/StartTelemetryQuerySessionCommand";
import type {
  StopTelemetryQueryCommandInput,
  StopTelemetryQueryCommandOutput,
} from "./commands/StopTelemetryQueryCommand";
import type {
  StopTelemetryQuerySessionCommandInput,
  StopTelemetryQuerySessionCommandOutput,
} from "./commands/StopTelemetryQuerySessionCommand";
import type {
  UpdateAccessProfileCommandInput,
  UpdateAccessProfileCommandOutput,
} from "./commands/UpdateAccessProfileCommand";
import type { UpdateAlertCommandInput, UpdateAlertCommandOutput } from "./commands/UpdateAlertCommand";
import type { UpdateDomainCommandInput, UpdateDomainCommandOutput } from "./commands/UpdateDomainCommand";
import type {
  UpdateDomainForOrganizationCommandInput,
  UpdateDomainForOrganizationCommandOutput,
} from "./commands/UpdateDomainForOrganizationCommand";
import type {
  UpdateIntegrationCommandInput,
  UpdateIntegrationCommandOutput,
} from "./commands/UpdateIntegrationCommand";
import type {
  UpdateOmniDashboardCommandInput,
  UpdateOmniDashboardCommandOutput,
} from "./commands/UpdateOmniDashboardCommand";
import type { UpdateSpaceCommandInput, UpdateSpaceCommandOutput } from "./commands/UpdateSpaceCommand";
import type { UpdateViewCommandInput, UpdateViewCommandOutput } from "./commands/UpdateViewCommand";
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
  | CreateAccessGrantCommandInput
  | CreateAccessProfileCommandInput
  | CreateAlertCommandInput
  | CreateDomainAccessGrantForOrganizationCommandInput
  | CreateDomainCommandInput
  | CreateDomainForOrganizationCommandInput
  | CreateIntegrationCommandInput
  | CreateOmniDashboardCommandInput
  | CreateOneTimeDeepLinkCodeCommandInput
  | CreateSpaceCommandInput
  | CreateViewCommandInput
  | DeleteAccessGrantCommandInput
  | DeleteAccessProfileCommandInput
  | DeleteAlertCommandInput
  | DeleteDomainAccessGrantForOrganizationCommandInput
  | DeleteDomainCommandInput
  | DeleteDomainForOrganizationCommandInput
  | DeleteIntegrationCommandInput
  | DeleteOmniDashboardCommandInput
  | DeleteSpaceCommandInput
  | DeleteViewCommandInput
  | GetAccessGrantCommandInput
  | GetAccessProfileCommandInput
  | GetAlertCommandInput
  | GetContextGraphCommandInput
  | GetDomainAccessGrantForOrganizationCommandInput
  | GetDomainCommandInput
  | GetDomainForOrganizationCommandInput
  | GetIntegrationCommandInput
  | GetIntelligenceConfigurationCommandInput
  | GetOmniDashboardCommandInput
  | GetSpaceCommandInput
  | GetSpaceCredentialsForOrganizationCommandInput
  | GetTelemetryQueryResultsCommandInput
  | GetViewCommandInput
  | ListAccessGrantsCommandInput
  | ListAccessProfilesCommandInput
  | ListAlertsCommandInput
  | ListDomainAccessGrantsForOrganizationCommandInput
  | ListDomainsCommandInput
  | ListIntegrationsCommandInput
  | ListOmniDashboardsCommandInput
  | ListSpacesCommandInput
  | ListSpacesForOrganizationCommandInput
  | ListTelemetryFieldsCommandInput
  | ListTelemetryQuerySessionsCommandInput
  | ListViewsCommandInput
  | PutIntelligenceConfigurationCommandInput
  | SearchPrincipalsCommandInput
  | StartTelemetryQueryCommandInput
  | StartTelemetryQuerySessionCommandInput
  | StopTelemetryQueryCommandInput
  | StopTelemetryQuerySessionCommandInput
  | UpdateAccessProfileCommandInput
  | UpdateAlertCommandInput
  | UpdateDomainCommandInput
  | UpdateDomainForOrganizationCommandInput
  | UpdateIntegrationCommandInput
  | UpdateOmniDashboardCommandInput
  | UpdateSpaceCommandInput
  | UpdateViewCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | CreateAccessGrantCommandOutput
  | CreateAccessProfileCommandOutput
  | CreateAlertCommandOutput
  | CreateDomainAccessGrantForOrganizationCommandOutput
  | CreateDomainCommandOutput
  | CreateDomainForOrganizationCommandOutput
  | CreateIntegrationCommandOutput
  | CreateOmniDashboardCommandOutput
  | CreateOneTimeDeepLinkCodeCommandOutput
  | CreateSpaceCommandOutput
  | CreateViewCommandOutput
  | DeleteAccessGrantCommandOutput
  | DeleteAccessProfileCommandOutput
  | DeleteAlertCommandOutput
  | DeleteDomainAccessGrantForOrganizationCommandOutput
  | DeleteDomainCommandOutput
  | DeleteDomainForOrganizationCommandOutput
  | DeleteIntegrationCommandOutput
  | DeleteOmniDashboardCommandOutput
  | DeleteSpaceCommandOutput
  | DeleteViewCommandOutput
  | GetAccessGrantCommandOutput
  | GetAccessProfileCommandOutput
  | GetAlertCommandOutput
  | GetContextGraphCommandOutput
  | GetDomainAccessGrantForOrganizationCommandOutput
  | GetDomainCommandOutput
  | GetDomainForOrganizationCommandOutput
  | GetIntegrationCommandOutput
  | GetIntelligenceConfigurationCommandOutput
  | GetOmniDashboardCommandOutput
  | GetSpaceCommandOutput
  | GetSpaceCredentialsForOrganizationCommandOutput
  | GetTelemetryQueryResultsCommandOutput
  | GetViewCommandOutput
  | ListAccessGrantsCommandOutput
  | ListAccessProfilesCommandOutput
  | ListAlertsCommandOutput
  | ListDomainAccessGrantsForOrganizationCommandOutput
  | ListDomainsCommandOutput
  | ListIntegrationsCommandOutput
  | ListOmniDashboardsCommandOutput
  | ListSpacesCommandOutput
  | ListSpacesForOrganizationCommandOutput
  | ListTelemetryFieldsCommandOutput
  | ListTelemetryQuerySessionsCommandOutput
  | ListViewsCommandOutput
  | PutIntelligenceConfigurationCommandOutput
  | SearchPrincipalsCommandOutput
  | StartTelemetryQueryCommandOutput
  | StartTelemetryQuerySessionCommandOutput
  | StopTelemetryQueryCommandOutput
  | StopTelemetryQuerySessionCommandOutput
  | UpdateAccessProfileCommandOutput
  | UpdateAlertCommandOutput
  | UpdateDomainCommandOutput
  | UpdateDomainForOrganizationCommandOutput
  | UpdateIntegrationCommandOutput
  | UpdateOmniDashboardCommandOutput
  | UpdateSpaceCommandOutput
  | UpdateViewCommandOutput;

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
export type CloudWatchOmniClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of CloudWatchOmniClient class constructor that set the region, credentials and other options.
 */
export interface CloudWatchOmniClientConfig extends CloudWatchOmniClientConfigType {}

/**
 * @public
 */
export type CloudWatchOmniClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of CloudWatchOmniClient class. This is resolved and normalized from the {@link CloudWatchOmniClientConfig | constructor configuration interface}.
 */
export interface CloudWatchOmniClientResolvedConfig extends CloudWatchOmniClientResolvedConfigType {}

/**
 * CloudWatch Omni is a unified observability experience built on Amazon
 * CloudWatch. You work in a space, an isolated environment that holds your
 * telemetry and controls who can access it, and your data is stored in the
 * CloudWatch Dataset for correlated analysis of logs, metrics, and traces.
 * @public
 */
export class CloudWatchOmniClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  CloudWatchOmniClientResolvedConfig
> {
  /**
   * The resolved configuration of CloudWatchOmniClient class. This is resolved and normalized from the {@link CloudWatchOmniClientConfig | constructor configuration interface}.
   */
  readonly config: CloudWatchOmniClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<CloudWatchOmniClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultCloudWatchOmniHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: CloudWatchOmniClientResolvedConfig) =>
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
