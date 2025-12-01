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
import { getSchemaSerdePlugin } from "@smithy/core/schema";
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
  ClientProtocol,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  HttpRequest,
  HttpResponse,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  defaultRoute53GlobalResolverHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  AssociateHostedZoneCommandInput,
  AssociateHostedZoneCommandOutput,
} from "./commands/AssociateHostedZoneCommand";
import {
  BatchCreateFirewallRuleCommandInput,
  BatchCreateFirewallRuleCommandOutput,
} from "./commands/BatchCreateFirewallRuleCommand";
import {
  BatchDeleteFirewallRuleCommandInput,
  BatchDeleteFirewallRuleCommandOutput,
} from "./commands/BatchDeleteFirewallRuleCommand";
import {
  BatchUpdateFirewallRuleCommandInput,
  BatchUpdateFirewallRuleCommandOutput,
} from "./commands/BatchUpdateFirewallRuleCommand";
import { CreateAccessSourceCommandInput, CreateAccessSourceCommandOutput } from "./commands/CreateAccessSourceCommand";
import { CreateAccessTokenCommandInput, CreateAccessTokenCommandOutput } from "./commands/CreateAccessTokenCommand";
import { CreateDNSViewCommandInput, CreateDNSViewCommandOutput } from "./commands/CreateDNSViewCommand";
import {
  CreateFirewallDomainListCommandInput,
  CreateFirewallDomainListCommandOutput,
} from "./commands/CreateFirewallDomainListCommand";
import { CreateFirewallRuleCommandInput, CreateFirewallRuleCommandOutput } from "./commands/CreateFirewallRuleCommand";
import {
  CreateGlobalResolverCommandInput,
  CreateGlobalResolverCommandOutput,
} from "./commands/CreateGlobalResolverCommand";
import { DeleteAccessSourceCommandInput, DeleteAccessSourceCommandOutput } from "./commands/DeleteAccessSourceCommand";
import { DeleteAccessTokenCommandInput, DeleteAccessTokenCommandOutput } from "./commands/DeleteAccessTokenCommand";
import { DeleteDNSViewCommandInput, DeleteDNSViewCommandOutput } from "./commands/DeleteDNSViewCommand";
import {
  DeleteFirewallDomainListCommandInput,
  DeleteFirewallDomainListCommandOutput,
} from "./commands/DeleteFirewallDomainListCommand";
import { DeleteFirewallRuleCommandInput, DeleteFirewallRuleCommandOutput } from "./commands/DeleteFirewallRuleCommand";
import {
  DeleteGlobalResolverCommandInput,
  DeleteGlobalResolverCommandOutput,
} from "./commands/DeleteGlobalResolverCommand";
import { DisableDNSViewCommandInput, DisableDNSViewCommandOutput } from "./commands/DisableDNSViewCommand";
import {
  DisassociateHostedZoneCommandInput,
  DisassociateHostedZoneCommandOutput,
} from "./commands/DisassociateHostedZoneCommand";
import { EnableDNSViewCommandInput, EnableDNSViewCommandOutput } from "./commands/EnableDNSViewCommand";
import { GetAccessSourceCommandInput, GetAccessSourceCommandOutput } from "./commands/GetAccessSourceCommand";
import { GetAccessTokenCommandInput, GetAccessTokenCommandOutput } from "./commands/GetAccessTokenCommand";
import { GetDNSViewCommandInput, GetDNSViewCommandOutput } from "./commands/GetDNSViewCommand";
import {
  GetFirewallDomainListCommandInput,
  GetFirewallDomainListCommandOutput,
} from "./commands/GetFirewallDomainListCommand";
import { GetFirewallRuleCommandInput, GetFirewallRuleCommandOutput } from "./commands/GetFirewallRuleCommand";
import { GetGlobalResolverCommandInput, GetGlobalResolverCommandOutput } from "./commands/GetGlobalResolverCommand";
import {
  GetHostedZoneAssociationCommandInput,
  GetHostedZoneAssociationCommandOutput,
} from "./commands/GetHostedZoneAssociationCommand";
import {
  GetManagedFirewallDomainListCommandInput,
  GetManagedFirewallDomainListCommandOutput,
} from "./commands/GetManagedFirewallDomainListCommand";
import {
  ImportFirewallDomainsCommandInput,
  ImportFirewallDomainsCommandOutput,
} from "./commands/ImportFirewallDomainsCommand";
import { ListAccessSourcesCommandInput, ListAccessSourcesCommandOutput } from "./commands/ListAccessSourcesCommand";
import { ListAccessTokensCommandInput, ListAccessTokensCommandOutput } from "./commands/ListAccessTokensCommand";
import { ListDNSViewsCommandInput, ListDNSViewsCommandOutput } from "./commands/ListDNSViewsCommand";
import {
  ListFirewallDomainListsCommandInput,
  ListFirewallDomainListsCommandOutput,
} from "./commands/ListFirewallDomainListsCommand";
import {
  ListFirewallDomainsCommandInput,
  ListFirewallDomainsCommandOutput,
} from "./commands/ListFirewallDomainsCommand";
import { ListFirewallRulesCommandInput, ListFirewallRulesCommandOutput } from "./commands/ListFirewallRulesCommand";
import {
  ListGlobalResolversCommandInput,
  ListGlobalResolversCommandOutput,
} from "./commands/ListGlobalResolversCommand";
import {
  ListHostedZoneAssociationsCommandInput,
  ListHostedZoneAssociationsCommandOutput,
} from "./commands/ListHostedZoneAssociationsCommand";
import {
  ListManagedFirewallDomainListsCommandInput,
  ListManagedFirewallDomainListsCommandOutput,
} from "./commands/ListManagedFirewallDomainListsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateAccessSourceCommandInput, UpdateAccessSourceCommandOutput } from "./commands/UpdateAccessSourceCommand";
import { UpdateAccessTokenCommandInput, UpdateAccessTokenCommandOutput } from "./commands/UpdateAccessTokenCommand";
import { UpdateDNSViewCommandInput, UpdateDNSViewCommandOutput } from "./commands/UpdateDNSViewCommand";
import {
  UpdateFirewallDomainsCommandInput,
  UpdateFirewallDomainsCommandOutput,
} from "./commands/UpdateFirewallDomainsCommand";
import { UpdateFirewallRuleCommandInput, UpdateFirewallRuleCommandOutput } from "./commands/UpdateFirewallRuleCommand";
import {
  UpdateGlobalResolverCommandInput,
  UpdateGlobalResolverCommandOutput,
} from "./commands/UpdateGlobalResolverCommand";
import {
  UpdateHostedZoneAssociationCommandInput,
  UpdateHostedZoneAssociationCommandOutput,
} from "./commands/UpdateHostedZoneAssociationCommand";
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
  | AssociateHostedZoneCommandInput
  | BatchCreateFirewallRuleCommandInput
  | BatchDeleteFirewallRuleCommandInput
  | BatchUpdateFirewallRuleCommandInput
  | CreateAccessSourceCommandInput
  | CreateAccessTokenCommandInput
  | CreateDNSViewCommandInput
  | CreateFirewallDomainListCommandInput
  | CreateFirewallRuleCommandInput
  | CreateGlobalResolverCommandInput
  | DeleteAccessSourceCommandInput
  | DeleteAccessTokenCommandInput
  | DeleteDNSViewCommandInput
  | DeleteFirewallDomainListCommandInput
  | DeleteFirewallRuleCommandInput
  | DeleteGlobalResolverCommandInput
  | DisableDNSViewCommandInput
  | DisassociateHostedZoneCommandInput
  | EnableDNSViewCommandInput
  | GetAccessSourceCommandInput
  | GetAccessTokenCommandInput
  | GetDNSViewCommandInput
  | GetFirewallDomainListCommandInput
  | GetFirewallRuleCommandInput
  | GetGlobalResolverCommandInput
  | GetHostedZoneAssociationCommandInput
  | GetManagedFirewallDomainListCommandInput
  | ImportFirewallDomainsCommandInput
  | ListAccessSourcesCommandInput
  | ListAccessTokensCommandInput
  | ListDNSViewsCommandInput
  | ListFirewallDomainListsCommandInput
  | ListFirewallDomainsCommandInput
  | ListFirewallRulesCommandInput
  | ListGlobalResolversCommandInput
  | ListHostedZoneAssociationsCommandInput
  | ListManagedFirewallDomainListsCommandInput
  | ListTagsForResourceCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAccessSourceCommandInput
  | UpdateAccessTokenCommandInput
  | UpdateDNSViewCommandInput
  | UpdateFirewallDomainsCommandInput
  | UpdateFirewallRuleCommandInput
  | UpdateGlobalResolverCommandInput
  | UpdateHostedZoneAssociationCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AssociateHostedZoneCommandOutput
  | BatchCreateFirewallRuleCommandOutput
  | BatchDeleteFirewallRuleCommandOutput
  | BatchUpdateFirewallRuleCommandOutput
  | CreateAccessSourceCommandOutput
  | CreateAccessTokenCommandOutput
  | CreateDNSViewCommandOutput
  | CreateFirewallDomainListCommandOutput
  | CreateFirewallRuleCommandOutput
  | CreateGlobalResolverCommandOutput
  | DeleteAccessSourceCommandOutput
  | DeleteAccessTokenCommandOutput
  | DeleteDNSViewCommandOutput
  | DeleteFirewallDomainListCommandOutput
  | DeleteFirewallRuleCommandOutput
  | DeleteGlobalResolverCommandOutput
  | DisableDNSViewCommandOutput
  | DisassociateHostedZoneCommandOutput
  | EnableDNSViewCommandOutput
  | GetAccessSourceCommandOutput
  | GetAccessTokenCommandOutput
  | GetDNSViewCommandOutput
  | GetFirewallDomainListCommandOutput
  | GetFirewallRuleCommandOutput
  | GetGlobalResolverCommandOutput
  | GetHostedZoneAssociationCommandOutput
  | GetManagedFirewallDomainListCommandOutput
  | ImportFirewallDomainsCommandOutput
  | ListAccessSourcesCommandOutput
  | ListAccessTokensCommandOutput
  | ListDNSViewsCommandOutput
  | ListFirewallDomainListsCommandOutput
  | ListFirewallDomainsCommandOutput
  | ListFirewallRulesCommandOutput
  | ListGlobalResolversCommandOutput
  | ListHostedZoneAssociationsCommandOutput
  | ListManagedFirewallDomainListsCommandOutput
  | ListTagsForResourceCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAccessSourceCommandOutput
  | UpdateAccessTokenCommandOutput
  | UpdateDNSViewCommandOutput
  | UpdateFirewallDomainsCommandOutput
  | UpdateFirewallRuleCommandOutput
  | UpdateGlobalResolverCommandOutput
  | UpdateHostedZoneAssociationCommandOutput;

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
   * The protocol controlling the message type (e.g. HTTP) and format (e.g. JSON)
   * may be overridden. A default will always be set by the client.
   * Available options depend on the service's supported protocols and will not be validated by
   * the client.
   * @alpha
   *
   */
  protocol?: ClientProtocol<HttpRequest, HttpResponse>;

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type Route53GlobalResolverClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of Route53GlobalResolverClient class constructor that set the region, credentials and other options.
 */
export interface Route53GlobalResolverClientConfig extends Route53GlobalResolverClientConfigType {}

/**
 * @public
 */
export type Route53GlobalResolverClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of Route53GlobalResolverClient class. This is resolved and normalized from the {@link Route53GlobalResolverClientConfig | constructor configuration interface}.
 */
export interface Route53GlobalResolverClientResolvedConfig extends Route53GlobalResolverClientResolvedConfigType {}

/**
 * <p> Amazon Route 53 Global Resolver is a global, internet-accessible DNS resolver that enables customers to resolve and forward traffic for both public and private domains while ensuring security and authenticity of queries over the internet. Route 53 Global Resolver supports DNS-over-port 53 (Do53), DNS-over-TLS (DoT), and DNS-over-HTTPS (DoH) protocols through global anycast IP addresses. </p>
 * @public
 */
export class Route53GlobalResolverClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  Route53GlobalResolverClientResolvedConfig
> {
  /**
   * The resolved configuration of Route53GlobalResolverClient class. This is resolved and normalized from the {@link Route53GlobalResolverClientConfig | constructor configuration interface}.
   */
  readonly config: Route53GlobalResolverClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<Route53GlobalResolverClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultRoute53GlobalResolverHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: Route53GlobalResolverClientResolvedConfig) =>
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
