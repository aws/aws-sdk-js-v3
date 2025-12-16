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
  defaultWorkSpacesWebHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  AssociateBrowserSettingsCommandInput,
  AssociateBrowserSettingsCommandOutput,
} from "./commands/AssociateBrowserSettingsCommand";
import {
  AssociateDataProtectionSettingsCommandInput,
  AssociateDataProtectionSettingsCommandOutput,
} from "./commands/AssociateDataProtectionSettingsCommand";
import {
  AssociateIpAccessSettingsCommandInput,
  AssociateIpAccessSettingsCommandOutput,
} from "./commands/AssociateIpAccessSettingsCommand";
import {
  AssociateNetworkSettingsCommandInput,
  AssociateNetworkSettingsCommandOutput,
} from "./commands/AssociateNetworkSettingsCommand";
import {
  AssociateSessionLoggerCommandInput,
  AssociateSessionLoggerCommandOutput,
} from "./commands/AssociateSessionLoggerCommand";
import {
  AssociateTrustStoreCommandInput,
  AssociateTrustStoreCommandOutput,
} from "./commands/AssociateTrustStoreCommand";
import {
  AssociateUserAccessLoggingSettingsCommandInput,
  AssociateUserAccessLoggingSettingsCommandOutput,
} from "./commands/AssociateUserAccessLoggingSettingsCommand";
import {
  AssociateUserSettingsCommandInput,
  AssociateUserSettingsCommandOutput,
} from "./commands/AssociateUserSettingsCommand";
import {
  CreateBrowserSettingsCommandInput,
  CreateBrowserSettingsCommandOutput,
} from "./commands/CreateBrowserSettingsCommand";
import {
  CreateDataProtectionSettingsCommandInput,
  CreateDataProtectionSettingsCommandOutput,
} from "./commands/CreateDataProtectionSettingsCommand";
import {
  CreateIdentityProviderCommandInput,
  CreateIdentityProviderCommandOutput,
} from "./commands/CreateIdentityProviderCommand";
import {
  CreateIpAccessSettingsCommandInput,
  CreateIpAccessSettingsCommandOutput,
} from "./commands/CreateIpAccessSettingsCommand";
import {
  CreateNetworkSettingsCommandInput,
  CreateNetworkSettingsCommandOutput,
} from "./commands/CreateNetworkSettingsCommand";
import { CreatePortalCommandInput, CreatePortalCommandOutput } from "./commands/CreatePortalCommand";
import {
  CreateSessionLoggerCommandInput,
  CreateSessionLoggerCommandOutput,
} from "./commands/CreateSessionLoggerCommand";
import { CreateTrustStoreCommandInput, CreateTrustStoreCommandOutput } from "./commands/CreateTrustStoreCommand";
import {
  CreateUserAccessLoggingSettingsCommandInput,
  CreateUserAccessLoggingSettingsCommandOutput,
} from "./commands/CreateUserAccessLoggingSettingsCommand";
import { CreateUserSettingsCommandInput, CreateUserSettingsCommandOutput } from "./commands/CreateUserSettingsCommand";
import {
  DeleteBrowserSettingsCommandInput,
  DeleteBrowserSettingsCommandOutput,
} from "./commands/DeleteBrowserSettingsCommand";
import {
  DeleteDataProtectionSettingsCommandInput,
  DeleteDataProtectionSettingsCommandOutput,
} from "./commands/DeleteDataProtectionSettingsCommand";
import {
  DeleteIdentityProviderCommandInput,
  DeleteIdentityProviderCommandOutput,
} from "./commands/DeleteIdentityProviderCommand";
import {
  DeleteIpAccessSettingsCommandInput,
  DeleteIpAccessSettingsCommandOutput,
} from "./commands/DeleteIpAccessSettingsCommand";
import {
  DeleteNetworkSettingsCommandInput,
  DeleteNetworkSettingsCommandOutput,
} from "./commands/DeleteNetworkSettingsCommand";
import { DeletePortalCommandInput, DeletePortalCommandOutput } from "./commands/DeletePortalCommand";
import {
  DeleteSessionLoggerCommandInput,
  DeleteSessionLoggerCommandOutput,
} from "./commands/DeleteSessionLoggerCommand";
import { DeleteTrustStoreCommandInput, DeleteTrustStoreCommandOutput } from "./commands/DeleteTrustStoreCommand";
import {
  DeleteUserAccessLoggingSettingsCommandInput,
  DeleteUserAccessLoggingSettingsCommandOutput,
} from "./commands/DeleteUserAccessLoggingSettingsCommand";
import { DeleteUserSettingsCommandInput, DeleteUserSettingsCommandOutput } from "./commands/DeleteUserSettingsCommand";
import {
  DisassociateBrowserSettingsCommandInput,
  DisassociateBrowserSettingsCommandOutput,
} from "./commands/DisassociateBrowserSettingsCommand";
import {
  DisassociateDataProtectionSettingsCommandInput,
  DisassociateDataProtectionSettingsCommandOutput,
} from "./commands/DisassociateDataProtectionSettingsCommand";
import {
  DisassociateIpAccessSettingsCommandInput,
  DisassociateIpAccessSettingsCommandOutput,
} from "./commands/DisassociateIpAccessSettingsCommand";
import {
  DisassociateNetworkSettingsCommandInput,
  DisassociateNetworkSettingsCommandOutput,
} from "./commands/DisassociateNetworkSettingsCommand";
import {
  DisassociateSessionLoggerCommandInput,
  DisassociateSessionLoggerCommandOutput,
} from "./commands/DisassociateSessionLoggerCommand";
import {
  DisassociateTrustStoreCommandInput,
  DisassociateTrustStoreCommandOutput,
} from "./commands/DisassociateTrustStoreCommand";
import {
  DisassociateUserAccessLoggingSettingsCommandInput,
  DisassociateUserAccessLoggingSettingsCommandOutput,
} from "./commands/DisassociateUserAccessLoggingSettingsCommand";
import {
  DisassociateUserSettingsCommandInput,
  DisassociateUserSettingsCommandOutput,
} from "./commands/DisassociateUserSettingsCommand";
import { ExpireSessionCommandInput, ExpireSessionCommandOutput } from "./commands/ExpireSessionCommand";
import { GetBrowserSettingsCommandInput, GetBrowserSettingsCommandOutput } from "./commands/GetBrowserSettingsCommand";
import {
  GetDataProtectionSettingsCommandInput,
  GetDataProtectionSettingsCommandOutput,
} from "./commands/GetDataProtectionSettingsCommand";
import {
  GetIdentityProviderCommandInput,
  GetIdentityProviderCommandOutput,
} from "./commands/GetIdentityProviderCommand";
import {
  GetIpAccessSettingsCommandInput,
  GetIpAccessSettingsCommandOutput,
} from "./commands/GetIpAccessSettingsCommand";
import { GetNetworkSettingsCommandInput, GetNetworkSettingsCommandOutput } from "./commands/GetNetworkSettingsCommand";
import { GetPortalCommandInput, GetPortalCommandOutput } from "./commands/GetPortalCommand";
import {
  GetPortalServiceProviderMetadataCommandInput,
  GetPortalServiceProviderMetadataCommandOutput,
} from "./commands/GetPortalServiceProviderMetadataCommand";
import { GetSessionCommandInput, GetSessionCommandOutput } from "./commands/GetSessionCommand";
import { GetSessionLoggerCommandInput, GetSessionLoggerCommandOutput } from "./commands/GetSessionLoggerCommand";
import {
  GetTrustStoreCertificateCommandInput,
  GetTrustStoreCertificateCommandOutput,
} from "./commands/GetTrustStoreCertificateCommand";
import { GetTrustStoreCommandInput, GetTrustStoreCommandOutput } from "./commands/GetTrustStoreCommand";
import {
  GetUserAccessLoggingSettingsCommandInput,
  GetUserAccessLoggingSettingsCommandOutput,
} from "./commands/GetUserAccessLoggingSettingsCommand";
import { GetUserSettingsCommandInput, GetUserSettingsCommandOutput } from "./commands/GetUserSettingsCommand";
import {
  ListBrowserSettingsCommandInput,
  ListBrowserSettingsCommandOutput,
} from "./commands/ListBrowserSettingsCommand";
import {
  ListDataProtectionSettingsCommandInput,
  ListDataProtectionSettingsCommandOutput,
} from "./commands/ListDataProtectionSettingsCommand";
import {
  ListIdentityProvidersCommandInput,
  ListIdentityProvidersCommandOutput,
} from "./commands/ListIdentityProvidersCommand";
import {
  ListIpAccessSettingsCommandInput,
  ListIpAccessSettingsCommandOutput,
} from "./commands/ListIpAccessSettingsCommand";
import {
  ListNetworkSettingsCommandInput,
  ListNetworkSettingsCommandOutput,
} from "./commands/ListNetworkSettingsCommand";
import { ListPortalsCommandInput, ListPortalsCommandOutput } from "./commands/ListPortalsCommand";
import { ListSessionLoggersCommandInput, ListSessionLoggersCommandOutput } from "./commands/ListSessionLoggersCommand";
import { ListSessionsCommandInput, ListSessionsCommandOutput } from "./commands/ListSessionsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTrustStoreCertificatesCommandInput,
  ListTrustStoreCertificatesCommandOutput,
} from "./commands/ListTrustStoreCertificatesCommand";
import { ListTrustStoresCommandInput, ListTrustStoresCommandOutput } from "./commands/ListTrustStoresCommand";
import {
  ListUserAccessLoggingSettingsCommandInput,
  ListUserAccessLoggingSettingsCommandOutput,
} from "./commands/ListUserAccessLoggingSettingsCommand";
import { ListUserSettingsCommandInput, ListUserSettingsCommandOutput } from "./commands/ListUserSettingsCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateBrowserSettingsCommandInput,
  UpdateBrowserSettingsCommandOutput,
} from "./commands/UpdateBrowserSettingsCommand";
import {
  UpdateDataProtectionSettingsCommandInput,
  UpdateDataProtectionSettingsCommandOutput,
} from "./commands/UpdateDataProtectionSettingsCommand";
import {
  UpdateIdentityProviderCommandInput,
  UpdateIdentityProviderCommandOutput,
} from "./commands/UpdateIdentityProviderCommand";
import {
  UpdateIpAccessSettingsCommandInput,
  UpdateIpAccessSettingsCommandOutput,
} from "./commands/UpdateIpAccessSettingsCommand";
import {
  UpdateNetworkSettingsCommandInput,
  UpdateNetworkSettingsCommandOutput,
} from "./commands/UpdateNetworkSettingsCommand";
import { UpdatePortalCommandInput, UpdatePortalCommandOutput } from "./commands/UpdatePortalCommand";
import {
  UpdateSessionLoggerCommandInput,
  UpdateSessionLoggerCommandOutput,
} from "./commands/UpdateSessionLoggerCommand";
import { UpdateTrustStoreCommandInput, UpdateTrustStoreCommandOutput } from "./commands/UpdateTrustStoreCommand";
import {
  UpdateUserAccessLoggingSettingsCommandInput,
  UpdateUserAccessLoggingSettingsCommandOutput,
} from "./commands/UpdateUserAccessLoggingSettingsCommand";
import { UpdateUserSettingsCommandInput, UpdateUserSettingsCommandOutput } from "./commands/UpdateUserSettingsCommand";
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
  | AssociateBrowserSettingsCommandInput
  | AssociateDataProtectionSettingsCommandInput
  | AssociateIpAccessSettingsCommandInput
  | AssociateNetworkSettingsCommandInput
  | AssociateSessionLoggerCommandInput
  | AssociateTrustStoreCommandInput
  | AssociateUserAccessLoggingSettingsCommandInput
  | AssociateUserSettingsCommandInput
  | CreateBrowserSettingsCommandInput
  | CreateDataProtectionSettingsCommandInput
  | CreateIdentityProviderCommandInput
  | CreateIpAccessSettingsCommandInput
  | CreateNetworkSettingsCommandInput
  | CreatePortalCommandInput
  | CreateSessionLoggerCommandInput
  | CreateTrustStoreCommandInput
  | CreateUserAccessLoggingSettingsCommandInput
  | CreateUserSettingsCommandInput
  | DeleteBrowserSettingsCommandInput
  | DeleteDataProtectionSettingsCommandInput
  | DeleteIdentityProviderCommandInput
  | DeleteIpAccessSettingsCommandInput
  | DeleteNetworkSettingsCommandInput
  | DeletePortalCommandInput
  | DeleteSessionLoggerCommandInput
  | DeleteTrustStoreCommandInput
  | DeleteUserAccessLoggingSettingsCommandInput
  | DeleteUserSettingsCommandInput
  | DisassociateBrowserSettingsCommandInput
  | DisassociateDataProtectionSettingsCommandInput
  | DisassociateIpAccessSettingsCommandInput
  | DisassociateNetworkSettingsCommandInput
  | DisassociateSessionLoggerCommandInput
  | DisassociateTrustStoreCommandInput
  | DisassociateUserAccessLoggingSettingsCommandInput
  | DisassociateUserSettingsCommandInput
  | ExpireSessionCommandInput
  | GetBrowserSettingsCommandInput
  | GetDataProtectionSettingsCommandInput
  | GetIdentityProviderCommandInput
  | GetIpAccessSettingsCommandInput
  | GetNetworkSettingsCommandInput
  | GetPortalCommandInput
  | GetPortalServiceProviderMetadataCommandInput
  | GetSessionCommandInput
  | GetSessionLoggerCommandInput
  | GetTrustStoreCertificateCommandInput
  | GetTrustStoreCommandInput
  | GetUserAccessLoggingSettingsCommandInput
  | GetUserSettingsCommandInput
  | ListBrowserSettingsCommandInput
  | ListDataProtectionSettingsCommandInput
  | ListIdentityProvidersCommandInput
  | ListIpAccessSettingsCommandInput
  | ListNetworkSettingsCommandInput
  | ListPortalsCommandInput
  | ListSessionLoggersCommandInput
  | ListSessionsCommandInput
  | ListTagsForResourceCommandInput
  | ListTrustStoreCertificatesCommandInput
  | ListTrustStoresCommandInput
  | ListUserAccessLoggingSettingsCommandInput
  | ListUserSettingsCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateBrowserSettingsCommandInput
  | UpdateDataProtectionSettingsCommandInput
  | UpdateIdentityProviderCommandInput
  | UpdateIpAccessSettingsCommandInput
  | UpdateNetworkSettingsCommandInput
  | UpdatePortalCommandInput
  | UpdateSessionLoggerCommandInput
  | UpdateTrustStoreCommandInput
  | UpdateUserAccessLoggingSettingsCommandInput
  | UpdateUserSettingsCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AssociateBrowserSettingsCommandOutput
  | AssociateDataProtectionSettingsCommandOutput
  | AssociateIpAccessSettingsCommandOutput
  | AssociateNetworkSettingsCommandOutput
  | AssociateSessionLoggerCommandOutput
  | AssociateTrustStoreCommandOutput
  | AssociateUserAccessLoggingSettingsCommandOutput
  | AssociateUserSettingsCommandOutput
  | CreateBrowserSettingsCommandOutput
  | CreateDataProtectionSettingsCommandOutput
  | CreateIdentityProviderCommandOutput
  | CreateIpAccessSettingsCommandOutput
  | CreateNetworkSettingsCommandOutput
  | CreatePortalCommandOutput
  | CreateSessionLoggerCommandOutput
  | CreateTrustStoreCommandOutput
  | CreateUserAccessLoggingSettingsCommandOutput
  | CreateUserSettingsCommandOutput
  | DeleteBrowserSettingsCommandOutput
  | DeleteDataProtectionSettingsCommandOutput
  | DeleteIdentityProviderCommandOutput
  | DeleteIpAccessSettingsCommandOutput
  | DeleteNetworkSettingsCommandOutput
  | DeletePortalCommandOutput
  | DeleteSessionLoggerCommandOutput
  | DeleteTrustStoreCommandOutput
  | DeleteUserAccessLoggingSettingsCommandOutput
  | DeleteUserSettingsCommandOutput
  | DisassociateBrowserSettingsCommandOutput
  | DisassociateDataProtectionSettingsCommandOutput
  | DisassociateIpAccessSettingsCommandOutput
  | DisassociateNetworkSettingsCommandOutput
  | DisassociateSessionLoggerCommandOutput
  | DisassociateTrustStoreCommandOutput
  | DisassociateUserAccessLoggingSettingsCommandOutput
  | DisassociateUserSettingsCommandOutput
  | ExpireSessionCommandOutput
  | GetBrowserSettingsCommandOutput
  | GetDataProtectionSettingsCommandOutput
  | GetIdentityProviderCommandOutput
  | GetIpAccessSettingsCommandOutput
  | GetNetworkSettingsCommandOutput
  | GetPortalCommandOutput
  | GetPortalServiceProviderMetadataCommandOutput
  | GetSessionCommandOutput
  | GetSessionLoggerCommandOutput
  | GetTrustStoreCertificateCommandOutput
  | GetTrustStoreCommandOutput
  | GetUserAccessLoggingSettingsCommandOutput
  | GetUserSettingsCommandOutput
  | ListBrowserSettingsCommandOutput
  | ListDataProtectionSettingsCommandOutput
  | ListIdentityProvidersCommandOutput
  | ListIpAccessSettingsCommandOutput
  | ListNetworkSettingsCommandOutput
  | ListPortalsCommandOutput
  | ListSessionLoggersCommandOutput
  | ListSessionsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTrustStoreCertificatesCommandOutput
  | ListTrustStoresCommandOutput
  | ListUserAccessLoggingSettingsCommandOutput
  | ListUserSettingsCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateBrowserSettingsCommandOutput
  | UpdateDataProtectionSettingsCommandOutput
  | UpdateIdentityProviderCommandOutput
  | UpdateIpAccessSettingsCommandOutput
  | UpdateNetworkSettingsCommandOutput
  | UpdatePortalCommandOutput
  | UpdateSessionLoggerCommandOutput
  | UpdateTrustStoreCommandOutput
  | UpdateUserAccessLoggingSettingsCommandOutput
  | UpdateUserSettingsCommandOutput;

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
export type WorkSpacesWebClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of WorkSpacesWebClient class constructor that set the region, credentials and other options.
 */
export interface WorkSpacesWebClientConfig extends WorkSpacesWebClientConfigType {}

/**
 * @public
 */
export type WorkSpacesWebClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of WorkSpacesWebClient class. This is resolved and normalized from the {@link WorkSpacesWebClientConfig | constructor configuration interface}.
 */
export interface WorkSpacesWebClientResolvedConfig extends WorkSpacesWebClientResolvedConfigType {}

/**
 * <p>Amazon WorkSpaces Secure Browser is a low cost, fully managed WorkSpace built specifically to facilitate secure, web-based workloads. WorkSpaces Secure Browser makes it easy for customers to safely provide their employees with access to internal websites and SaaS web applications without the administrative burden of appliances or specialized client software. WorkSpaces Secure Browser provides simple policy tools tailored for user interactions, while offloading common tasks like capacity management, scaling, and maintaining browser images.</p>
 * @public
 */
export class WorkSpacesWebClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  WorkSpacesWebClientResolvedConfig
> {
  /**
   * The resolved configuration of WorkSpacesWebClient class. This is resolved and normalized from the {@link WorkSpacesWebClientConfig | constructor configuration interface}.
   */
  readonly config: WorkSpacesWebClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<WorkSpacesWebClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultWorkSpacesWebHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: WorkSpacesWebClientResolvedConfig) =>
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
