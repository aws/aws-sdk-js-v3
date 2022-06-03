// smithy-typescript generated code
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
  AssociateBrowserSettingsCommandInput,
  AssociateBrowserSettingsCommandOutput,
} from "./commands/AssociateBrowserSettingsCommand";
import {
  AssociateNetworkSettingsCommandInput,
  AssociateNetworkSettingsCommandOutput,
} from "./commands/AssociateNetworkSettingsCommand";
import {
  AssociateTrustStoreCommandInput,
  AssociateTrustStoreCommandOutput,
} from "./commands/AssociateTrustStoreCommand";
import {
  AssociateUserSettingsCommandInput,
  AssociateUserSettingsCommandOutput,
} from "./commands/AssociateUserSettingsCommand";
import {
  CreateBrowserSettingsCommandInput,
  CreateBrowserSettingsCommandOutput,
} from "./commands/CreateBrowserSettingsCommand";
import {
  CreateIdentityProviderCommandInput,
  CreateIdentityProviderCommandOutput,
} from "./commands/CreateIdentityProviderCommand";
import {
  CreateNetworkSettingsCommandInput,
  CreateNetworkSettingsCommandOutput,
} from "./commands/CreateNetworkSettingsCommand";
import { CreatePortalCommandInput, CreatePortalCommandOutput } from "./commands/CreatePortalCommand";
import { CreateTrustStoreCommandInput, CreateTrustStoreCommandOutput } from "./commands/CreateTrustStoreCommand";
import { CreateUserSettingsCommandInput, CreateUserSettingsCommandOutput } from "./commands/CreateUserSettingsCommand";
import {
  DeleteBrowserSettingsCommandInput,
  DeleteBrowserSettingsCommandOutput,
} from "./commands/DeleteBrowserSettingsCommand";
import {
  DeleteIdentityProviderCommandInput,
  DeleteIdentityProviderCommandOutput,
} from "./commands/DeleteIdentityProviderCommand";
import {
  DeleteNetworkSettingsCommandInput,
  DeleteNetworkSettingsCommandOutput,
} from "./commands/DeleteNetworkSettingsCommand";
import { DeletePortalCommandInput, DeletePortalCommandOutput } from "./commands/DeletePortalCommand";
import { DeleteTrustStoreCommandInput, DeleteTrustStoreCommandOutput } from "./commands/DeleteTrustStoreCommand";
import { DeleteUserSettingsCommandInput, DeleteUserSettingsCommandOutput } from "./commands/DeleteUserSettingsCommand";
import {
  DisassociateBrowserSettingsCommandInput,
  DisassociateBrowserSettingsCommandOutput,
} from "./commands/DisassociateBrowserSettingsCommand";
import {
  DisassociateNetworkSettingsCommandInput,
  DisassociateNetworkSettingsCommandOutput,
} from "./commands/DisassociateNetworkSettingsCommand";
import {
  DisassociateTrustStoreCommandInput,
  DisassociateTrustStoreCommandOutput,
} from "./commands/DisassociateTrustStoreCommand";
import {
  DisassociateUserSettingsCommandInput,
  DisassociateUserSettingsCommandOutput,
} from "./commands/DisassociateUserSettingsCommand";
import { GetBrowserSettingsCommandInput, GetBrowserSettingsCommandOutput } from "./commands/GetBrowserSettingsCommand";
import {
  GetIdentityProviderCommandInput,
  GetIdentityProviderCommandOutput,
} from "./commands/GetIdentityProviderCommand";
import { GetNetworkSettingsCommandInput, GetNetworkSettingsCommandOutput } from "./commands/GetNetworkSettingsCommand";
import { GetPortalCommandInput, GetPortalCommandOutput } from "./commands/GetPortalCommand";
import {
  GetPortalServiceProviderMetadataCommandInput,
  GetPortalServiceProviderMetadataCommandOutput,
} from "./commands/GetPortalServiceProviderMetadataCommand";
import {
  GetTrustStoreCertificateCommandInput,
  GetTrustStoreCertificateCommandOutput,
} from "./commands/GetTrustStoreCertificateCommand";
import { GetTrustStoreCommandInput, GetTrustStoreCommandOutput } from "./commands/GetTrustStoreCommand";
import { GetUserSettingsCommandInput, GetUserSettingsCommandOutput } from "./commands/GetUserSettingsCommand";
import {
  ListBrowserSettingsCommandInput,
  ListBrowserSettingsCommandOutput,
} from "./commands/ListBrowserSettingsCommand";
import {
  ListIdentityProvidersCommandInput,
  ListIdentityProvidersCommandOutput,
} from "./commands/ListIdentityProvidersCommand";
import {
  ListNetworkSettingsCommandInput,
  ListNetworkSettingsCommandOutput,
} from "./commands/ListNetworkSettingsCommand";
import { ListPortalsCommandInput, ListPortalsCommandOutput } from "./commands/ListPortalsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTrustStoreCertificatesCommandInput,
  ListTrustStoreCertificatesCommandOutput,
} from "./commands/ListTrustStoreCertificatesCommand";
import { ListTrustStoresCommandInput, ListTrustStoresCommandOutput } from "./commands/ListTrustStoresCommand";
import { ListUserSettingsCommandInput, ListUserSettingsCommandOutput } from "./commands/ListUserSettingsCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateBrowserSettingsCommandInput,
  UpdateBrowserSettingsCommandOutput,
} from "./commands/UpdateBrowserSettingsCommand";
import {
  UpdateIdentityProviderCommandInput,
  UpdateIdentityProviderCommandOutput,
} from "./commands/UpdateIdentityProviderCommand";
import {
  UpdateNetworkSettingsCommandInput,
  UpdateNetworkSettingsCommandOutput,
} from "./commands/UpdateNetworkSettingsCommand";
import { UpdatePortalCommandInput, UpdatePortalCommandOutput } from "./commands/UpdatePortalCommand";
import { UpdateTrustStoreCommandInput, UpdateTrustStoreCommandOutput } from "./commands/UpdateTrustStoreCommand";
import { UpdateUserSettingsCommandInput, UpdateUserSettingsCommandOutput } from "./commands/UpdateUserSettingsCommand";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | AssociateBrowserSettingsCommandInput
  | AssociateNetworkSettingsCommandInput
  | AssociateTrustStoreCommandInput
  | AssociateUserSettingsCommandInput
  | CreateBrowserSettingsCommandInput
  | CreateIdentityProviderCommandInput
  | CreateNetworkSettingsCommandInput
  | CreatePortalCommandInput
  | CreateTrustStoreCommandInput
  | CreateUserSettingsCommandInput
  | DeleteBrowserSettingsCommandInput
  | DeleteIdentityProviderCommandInput
  | DeleteNetworkSettingsCommandInput
  | DeletePortalCommandInput
  | DeleteTrustStoreCommandInput
  | DeleteUserSettingsCommandInput
  | DisassociateBrowserSettingsCommandInput
  | DisassociateNetworkSettingsCommandInput
  | DisassociateTrustStoreCommandInput
  | DisassociateUserSettingsCommandInput
  | GetBrowserSettingsCommandInput
  | GetIdentityProviderCommandInput
  | GetNetworkSettingsCommandInput
  | GetPortalCommandInput
  | GetPortalServiceProviderMetadataCommandInput
  | GetTrustStoreCertificateCommandInput
  | GetTrustStoreCommandInput
  | GetUserSettingsCommandInput
  | ListBrowserSettingsCommandInput
  | ListIdentityProvidersCommandInput
  | ListNetworkSettingsCommandInput
  | ListPortalsCommandInput
  | ListTagsForResourceCommandInput
  | ListTrustStoreCertificatesCommandInput
  | ListTrustStoresCommandInput
  | ListUserSettingsCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateBrowserSettingsCommandInput
  | UpdateIdentityProviderCommandInput
  | UpdateNetworkSettingsCommandInput
  | UpdatePortalCommandInput
  | UpdateTrustStoreCommandInput
  | UpdateUserSettingsCommandInput;

export type ServiceOutputTypes =
  | AssociateBrowserSettingsCommandOutput
  | AssociateNetworkSettingsCommandOutput
  | AssociateTrustStoreCommandOutput
  | AssociateUserSettingsCommandOutput
  | CreateBrowserSettingsCommandOutput
  | CreateIdentityProviderCommandOutput
  | CreateNetworkSettingsCommandOutput
  | CreatePortalCommandOutput
  | CreateTrustStoreCommandOutput
  | CreateUserSettingsCommandOutput
  | DeleteBrowserSettingsCommandOutput
  | DeleteIdentityProviderCommandOutput
  | DeleteNetworkSettingsCommandOutput
  | DeletePortalCommandOutput
  | DeleteTrustStoreCommandOutput
  | DeleteUserSettingsCommandOutput
  | DisassociateBrowserSettingsCommandOutput
  | DisassociateNetworkSettingsCommandOutput
  | DisassociateTrustStoreCommandOutput
  | DisassociateUserSettingsCommandOutput
  | GetBrowserSettingsCommandOutput
  | GetIdentityProviderCommandOutput
  | GetNetworkSettingsCommandOutput
  | GetPortalCommandOutput
  | GetPortalServiceProviderMetadataCommandOutput
  | GetTrustStoreCertificateCommandOutput
  | GetTrustStoreCommandOutput
  | GetUserSettingsCommandOutput
  | ListBrowserSettingsCommandOutput
  | ListIdentityProvidersCommandOutput
  | ListNetworkSettingsCommandOutput
  | ListPortalsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTrustStoreCertificatesCommandOutput
  | ListTrustStoresCommandOutput
  | ListUserSettingsCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateBrowserSettingsCommandOutput
  | UpdateIdentityProviderCommandOutput
  | UpdateNetworkSettingsCommandOutput
  | UpdatePortalCommandOutput
  | UpdateTrustStoreCommandOutput
  | UpdateUserSettingsCommandOutput;

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

type WorkSpacesWebClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of WorkSpacesWebClient class constructor that set the region, credentials and other options.
 */
export interface WorkSpacesWebClientConfig extends WorkSpacesWebClientConfigType {}

type WorkSpacesWebClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of WorkSpacesWebClient class. This is resolved and normalized from the {@link WorkSpacesWebClientConfig | constructor configuration interface}.
 */
export interface WorkSpacesWebClientResolvedConfig extends WorkSpacesWebClientResolvedConfigType {}

/**
 * <p>WorkSpaces Web is a low cost, fully managed WorkSpace built specifically to facilitate
 *          secure, web-based workloads. WorkSpaces Web makes it easy for customers to safely provide
 *          their employees with access to internal websites and SaaS web applications without the
 *          administrative burden of appliances or specialized client software. WorkSpaces Web provides
 *          simple policy tools tailored for user interactions, while offloading common tasks like
 *          capacity management, scaling, and maintaining browser images.</p>
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

  constructor(configuration: WorkSpacesWebClientConfig) {
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
