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
  defaultRoute53ResolverHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  AssociateFirewallRuleGroupCommandInput,
  AssociateFirewallRuleGroupCommandOutput,
} from "./commands/AssociateFirewallRuleGroupCommand";
import type {
  AssociateResolverEndpointIpAddressCommandInput,
  AssociateResolverEndpointIpAddressCommandOutput,
} from "./commands/AssociateResolverEndpointIpAddressCommand";
import type {
  AssociateResolverQueryLogConfigCommandInput,
  AssociateResolverQueryLogConfigCommandOutput,
} from "./commands/AssociateResolverQueryLogConfigCommand";
import type {
  AssociateResolverRuleCommandInput,
  AssociateResolverRuleCommandOutput,
} from "./commands/AssociateResolverRuleCommand";
import type {
  CreateFirewallDomainListCommandInput,
  CreateFirewallDomainListCommandOutput,
} from "./commands/CreateFirewallDomainListCommand";
import type {
  CreateFirewallRuleCommandInput,
  CreateFirewallRuleCommandOutput,
} from "./commands/CreateFirewallRuleCommand";
import type {
  CreateFirewallRuleGroupCommandInput,
  CreateFirewallRuleGroupCommandOutput,
} from "./commands/CreateFirewallRuleGroupCommand";
import type {
  CreateOutpostResolverCommandInput,
  CreateOutpostResolverCommandOutput,
} from "./commands/CreateOutpostResolverCommand";
import type {
  CreateResolverEndpointCommandInput,
  CreateResolverEndpointCommandOutput,
} from "./commands/CreateResolverEndpointCommand";
import type {
  CreateResolverQueryLogConfigCommandInput,
  CreateResolverQueryLogConfigCommandOutput,
} from "./commands/CreateResolverQueryLogConfigCommand";
import type {
  CreateResolverRuleCommandInput,
  CreateResolverRuleCommandOutput,
} from "./commands/CreateResolverRuleCommand";
import type {
  DeleteFirewallDomainListCommandInput,
  DeleteFirewallDomainListCommandOutput,
} from "./commands/DeleteFirewallDomainListCommand";
import type {
  DeleteFirewallRuleCommandInput,
  DeleteFirewallRuleCommandOutput,
} from "./commands/DeleteFirewallRuleCommand";
import type {
  DeleteFirewallRuleGroupCommandInput,
  DeleteFirewallRuleGroupCommandOutput,
} from "./commands/DeleteFirewallRuleGroupCommand";
import type {
  DeleteOutpostResolverCommandInput,
  DeleteOutpostResolverCommandOutput,
} from "./commands/DeleteOutpostResolverCommand";
import type {
  DeleteResolverEndpointCommandInput,
  DeleteResolverEndpointCommandOutput,
} from "./commands/DeleteResolverEndpointCommand";
import type {
  DeleteResolverQueryLogConfigCommandInput,
  DeleteResolverQueryLogConfigCommandOutput,
} from "./commands/DeleteResolverQueryLogConfigCommand";
import type {
  DeleteResolverRuleCommandInput,
  DeleteResolverRuleCommandOutput,
} from "./commands/DeleteResolverRuleCommand";
import type {
  DisassociateFirewallRuleGroupCommandInput,
  DisassociateFirewallRuleGroupCommandOutput,
} from "./commands/DisassociateFirewallRuleGroupCommand";
import type {
  DisassociateResolverEndpointIpAddressCommandInput,
  DisassociateResolverEndpointIpAddressCommandOutput,
} from "./commands/DisassociateResolverEndpointIpAddressCommand";
import type {
  DisassociateResolverQueryLogConfigCommandInput,
  DisassociateResolverQueryLogConfigCommandOutput,
} from "./commands/DisassociateResolverQueryLogConfigCommand";
import type {
  DisassociateResolverRuleCommandInput,
  DisassociateResolverRuleCommandOutput,
} from "./commands/DisassociateResolverRuleCommand";
import type {
  GetFirewallConfigCommandInput,
  GetFirewallConfigCommandOutput,
} from "./commands/GetFirewallConfigCommand";
import type {
  GetFirewallDomainListCommandInput,
  GetFirewallDomainListCommandOutput,
} from "./commands/GetFirewallDomainListCommand";
import type {
  GetFirewallRuleGroupAssociationCommandInput,
  GetFirewallRuleGroupAssociationCommandOutput,
} from "./commands/GetFirewallRuleGroupAssociationCommand";
import type {
  GetFirewallRuleGroupCommandInput,
  GetFirewallRuleGroupCommandOutput,
} from "./commands/GetFirewallRuleGroupCommand";
import type {
  GetFirewallRuleGroupPolicyCommandInput,
  GetFirewallRuleGroupPolicyCommandOutput,
} from "./commands/GetFirewallRuleGroupPolicyCommand";
import type {
  GetOutpostResolverCommandInput,
  GetOutpostResolverCommandOutput,
} from "./commands/GetOutpostResolverCommand";
import type {
  GetResolverConfigCommandInput,
  GetResolverConfigCommandOutput,
} from "./commands/GetResolverConfigCommand";
import type {
  GetResolverDnssecConfigCommandInput,
  GetResolverDnssecConfigCommandOutput,
} from "./commands/GetResolverDnssecConfigCommand";
import type {
  GetResolverEndpointCommandInput,
  GetResolverEndpointCommandOutput,
} from "./commands/GetResolverEndpointCommand";
import type {
  GetResolverQueryLogConfigAssociationCommandInput,
  GetResolverQueryLogConfigAssociationCommandOutput,
} from "./commands/GetResolverQueryLogConfigAssociationCommand";
import type {
  GetResolverQueryLogConfigCommandInput,
  GetResolverQueryLogConfigCommandOutput,
} from "./commands/GetResolverQueryLogConfigCommand";
import type {
  GetResolverQueryLogConfigPolicyCommandInput,
  GetResolverQueryLogConfigPolicyCommandOutput,
} from "./commands/GetResolverQueryLogConfigPolicyCommand";
import type {
  GetResolverRuleAssociationCommandInput,
  GetResolverRuleAssociationCommandOutput,
} from "./commands/GetResolverRuleAssociationCommand";
import type { GetResolverRuleCommandInput, GetResolverRuleCommandOutput } from "./commands/GetResolverRuleCommand";
import type {
  GetResolverRulePolicyCommandInput,
  GetResolverRulePolicyCommandOutput,
} from "./commands/GetResolverRulePolicyCommand";
import type {
  ImportFirewallDomainsCommandInput,
  ImportFirewallDomainsCommandOutput,
} from "./commands/ImportFirewallDomainsCommand";
import type {
  ListFirewallConfigsCommandInput,
  ListFirewallConfigsCommandOutput,
} from "./commands/ListFirewallConfigsCommand";
import type {
  ListFirewallDomainListsCommandInput,
  ListFirewallDomainListsCommandOutput,
} from "./commands/ListFirewallDomainListsCommand";
import type {
  ListFirewallDomainsCommandInput,
  ListFirewallDomainsCommandOutput,
} from "./commands/ListFirewallDomainsCommand";
import type {
  ListFirewallRuleGroupAssociationsCommandInput,
  ListFirewallRuleGroupAssociationsCommandOutput,
} from "./commands/ListFirewallRuleGroupAssociationsCommand";
import type {
  ListFirewallRuleGroupsCommandInput,
  ListFirewallRuleGroupsCommandOutput,
} from "./commands/ListFirewallRuleGroupsCommand";
import type {
  ListFirewallRulesCommandInput,
  ListFirewallRulesCommandOutput,
} from "./commands/ListFirewallRulesCommand";
import type {
  ListOutpostResolversCommandInput,
  ListOutpostResolversCommandOutput,
} from "./commands/ListOutpostResolversCommand";
import type {
  ListResolverConfigsCommandInput,
  ListResolverConfigsCommandOutput,
} from "./commands/ListResolverConfigsCommand";
import type {
  ListResolverDnssecConfigsCommandInput,
  ListResolverDnssecConfigsCommandOutput,
} from "./commands/ListResolverDnssecConfigsCommand";
import type {
  ListResolverEndpointIpAddressesCommandInput,
  ListResolverEndpointIpAddressesCommandOutput,
} from "./commands/ListResolverEndpointIpAddressesCommand";
import type {
  ListResolverEndpointsCommandInput,
  ListResolverEndpointsCommandOutput,
} from "./commands/ListResolverEndpointsCommand";
import type {
  ListResolverQueryLogConfigAssociationsCommandInput,
  ListResolverQueryLogConfigAssociationsCommandOutput,
} from "./commands/ListResolverQueryLogConfigAssociationsCommand";
import type {
  ListResolverQueryLogConfigsCommandInput,
  ListResolverQueryLogConfigsCommandOutput,
} from "./commands/ListResolverQueryLogConfigsCommand";
import type {
  ListResolverRuleAssociationsCommandInput,
  ListResolverRuleAssociationsCommandOutput,
} from "./commands/ListResolverRuleAssociationsCommand";
import type {
  ListResolverRulesCommandInput,
  ListResolverRulesCommandOutput,
} from "./commands/ListResolverRulesCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type {
  PutFirewallRuleGroupPolicyCommandInput,
  PutFirewallRuleGroupPolicyCommandOutput,
} from "./commands/PutFirewallRuleGroupPolicyCommand";
import type {
  PutResolverQueryLogConfigPolicyCommandInput,
  PutResolverQueryLogConfigPolicyCommandOutput,
} from "./commands/PutResolverQueryLogConfigPolicyCommand";
import type {
  PutResolverRulePolicyCommandInput,
  PutResolverRulePolicyCommandOutput,
} from "./commands/PutResolverRulePolicyCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type {
  UpdateFirewallConfigCommandInput,
  UpdateFirewallConfigCommandOutput,
} from "./commands/UpdateFirewallConfigCommand";
import type {
  UpdateFirewallDomainsCommandInput,
  UpdateFirewallDomainsCommandOutput,
} from "./commands/UpdateFirewallDomainsCommand";
import type {
  UpdateFirewallRuleCommandInput,
  UpdateFirewallRuleCommandOutput,
} from "./commands/UpdateFirewallRuleCommand";
import type {
  UpdateFirewallRuleGroupAssociationCommandInput,
  UpdateFirewallRuleGroupAssociationCommandOutput,
} from "./commands/UpdateFirewallRuleGroupAssociationCommand";
import type {
  UpdateOutpostResolverCommandInput,
  UpdateOutpostResolverCommandOutput,
} from "./commands/UpdateOutpostResolverCommand";
import type {
  UpdateResolverConfigCommandInput,
  UpdateResolverConfigCommandOutput,
} from "./commands/UpdateResolverConfigCommand";
import type {
  UpdateResolverDnssecConfigCommandInput,
  UpdateResolverDnssecConfigCommandOutput,
} from "./commands/UpdateResolverDnssecConfigCommand";
import type {
  UpdateResolverEndpointCommandInput,
  UpdateResolverEndpointCommandOutput,
} from "./commands/UpdateResolverEndpointCommand";
import type {
  UpdateResolverRuleCommandInput,
  UpdateResolverRuleCommandOutput,
} from "./commands/UpdateResolverRuleCommand";
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
  | AssociateFirewallRuleGroupCommandInput
  | AssociateResolverEndpointIpAddressCommandInput
  | AssociateResolverQueryLogConfigCommandInput
  | AssociateResolverRuleCommandInput
  | CreateFirewallDomainListCommandInput
  | CreateFirewallRuleCommandInput
  | CreateFirewallRuleGroupCommandInput
  | CreateOutpostResolverCommandInput
  | CreateResolverEndpointCommandInput
  | CreateResolverQueryLogConfigCommandInput
  | CreateResolverRuleCommandInput
  | DeleteFirewallDomainListCommandInput
  | DeleteFirewallRuleCommandInput
  | DeleteFirewallRuleGroupCommandInput
  | DeleteOutpostResolverCommandInput
  | DeleteResolverEndpointCommandInput
  | DeleteResolverQueryLogConfigCommandInput
  | DeleteResolverRuleCommandInput
  | DisassociateFirewallRuleGroupCommandInput
  | DisassociateResolverEndpointIpAddressCommandInput
  | DisassociateResolverQueryLogConfigCommandInput
  | DisassociateResolverRuleCommandInput
  | GetFirewallConfigCommandInput
  | GetFirewallDomainListCommandInput
  | GetFirewallRuleGroupAssociationCommandInput
  | GetFirewallRuleGroupCommandInput
  | GetFirewallRuleGroupPolicyCommandInput
  | GetOutpostResolverCommandInput
  | GetResolverConfigCommandInput
  | GetResolverDnssecConfigCommandInput
  | GetResolverEndpointCommandInput
  | GetResolverQueryLogConfigAssociationCommandInput
  | GetResolverQueryLogConfigCommandInput
  | GetResolverQueryLogConfigPolicyCommandInput
  | GetResolverRuleAssociationCommandInput
  | GetResolverRuleCommandInput
  | GetResolverRulePolicyCommandInput
  | ImportFirewallDomainsCommandInput
  | ListFirewallConfigsCommandInput
  | ListFirewallDomainListsCommandInput
  | ListFirewallDomainsCommandInput
  | ListFirewallRuleGroupAssociationsCommandInput
  | ListFirewallRuleGroupsCommandInput
  | ListFirewallRulesCommandInput
  | ListOutpostResolversCommandInput
  | ListResolverConfigsCommandInput
  | ListResolverDnssecConfigsCommandInput
  | ListResolverEndpointIpAddressesCommandInput
  | ListResolverEndpointsCommandInput
  | ListResolverQueryLogConfigAssociationsCommandInput
  | ListResolverQueryLogConfigsCommandInput
  | ListResolverRuleAssociationsCommandInput
  | ListResolverRulesCommandInput
  | ListTagsForResourceCommandInput
  | PutFirewallRuleGroupPolicyCommandInput
  | PutResolverQueryLogConfigPolicyCommandInput
  | PutResolverRulePolicyCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateFirewallConfigCommandInput
  | UpdateFirewallDomainsCommandInput
  | UpdateFirewallRuleCommandInput
  | UpdateFirewallRuleGroupAssociationCommandInput
  | UpdateOutpostResolverCommandInput
  | UpdateResolverConfigCommandInput
  | UpdateResolverDnssecConfigCommandInput
  | UpdateResolverEndpointCommandInput
  | UpdateResolverRuleCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AssociateFirewallRuleGroupCommandOutput
  | AssociateResolverEndpointIpAddressCommandOutput
  | AssociateResolverQueryLogConfigCommandOutput
  | AssociateResolverRuleCommandOutput
  | CreateFirewallDomainListCommandOutput
  | CreateFirewallRuleCommandOutput
  | CreateFirewallRuleGroupCommandOutput
  | CreateOutpostResolverCommandOutput
  | CreateResolverEndpointCommandOutput
  | CreateResolverQueryLogConfigCommandOutput
  | CreateResolverRuleCommandOutput
  | DeleteFirewallDomainListCommandOutput
  | DeleteFirewallRuleCommandOutput
  | DeleteFirewallRuleGroupCommandOutput
  | DeleteOutpostResolverCommandOutput
  | DeleteResolverEndpointCommandOutput
  | DeleteResolverQueryLogConfigCommandOutput
  | DeleteResolverRuleCommandOutput
  | DisassociateFirewallRuleGroupCommandOutput
  | DisassociateResolverEndpointIpAddressCommandOutput
  | DisassociateResolverQueryLogConfigCommandOutput
  | DisassociateResolverRuleCommandOutput
  | GetFirewallConfigCommandOutput
  | GetFirewallDomainListCommandOutput
  | GetFirewallRuleGroupAssociationCommandOutput
  | GetFirewallRuleGroupCommandOutput
  | GetFirewallRuleGroupPolicyCommandOutput
  | GetOutpostResolverCommandOutput
  | GetResolverConfigCommandOutput
  | GetResolverDnssecConfigCommandOutput
  | GetResolverEndpointCommandOutput
  | GetResolverQueryLogConfigAssociationCommandOutput
  | GetResolverQueryLogConfigCommandOutput
  | GetResolverQueryLogConfigPolicyCommandOutput
  | GetResolverRuleAssociationCommandOutput
  | GetResolverRuleCommandOutput
  | GetResolverRulePolicyCommandOutput
  | ImportFirewallDomainsCommandOutput
  | ListFirewallConfigsCommandOutput
  | ListFirewallDomainListsCommandOutput
  | ListFirewallDomainsCommandOutput
  | ListFirewallRuleGroupAssociationsCommandOutput
  | ListFirewallRuleGroupsCommandOutput
  | ListFirewallRulesCommandOutput
  | ListOutpostResolversCommandOutput
  | ListResolverConfigsCommandOutput
  | ListResolverDnssecConfigsCommandOutput
  | ListResolverEndpointIpAddressesCommandOutput
  | ListResolverEndpointsCommandOutput
  | ListResolverQueryLogConfigAssociationsCommandOutput
  | ListResolverQueryLogConfigsCommandOutput
  | ListResolverRuleAssociationsCommandOutput
  | ListResolverRulesCommandOutput
  | ListTagsForResourceCommandOutput
  | PutFirewallRuleGroupPolicyCommandOutput
  | PutResolverQueryLogConfigPolicyCommandOutput
  | PutResolverRulePolicyCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateFirewallConfigCommandOutput
  | UpdateFirewallDomainsCommandOutput
  | UpdateFirewallRuleCommandOutput
  | UpdateFirewallRuleGroupAssociationCommandOutput
  | UpdateOutpostResolverCommandOutput
  | UpdateResolverConfigCommandOutput
  | UpdateResolverDnssecConfigCommandOutput
  | UpdateResolverEndpointCommandOutput
  | UpdateResolverRuleCommandOutput;

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
export type Route53ResolverClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of Route53ResolverClient class constructor that set the region, credentials and other options.
 */
export interface Route53ResolverClientConfig extends Route53ResolverClientConfigType {}

/**
 * @public
 */
export type Route53ResolverClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of Route53ResolverClient class. This is resolved and normalized from the {@link Route53ResolverClientConfig | constructor configuration interface}.
 */
export interface Route53ResolverClientResolvedConfig extends Route53ResolverClientResolvedConfigType {}

/**
 * <p>When you create a VPC using Amazon VPC, you automatically get DNS resolution within the VPC
 * 			from Route 53 Resolver. By default, Resolver answers DNS queries for VPC domain names
 * 			such as domain names for EC2 instances or Elastic Load Balancing load balancers.
 * 			Resolver performs recursive lookups against public name servers for all other domain
 * 			names.</p>
 *          <p>You can also configure DNS resolution between your VPC and your network over a Direct Connect or VPN connection:</p>
 *          <p>
 *             <b>Forward DNS queries from resolvers on your network to Route 53 Resolver</b>
 *          </p>
 *          <p>DNS resolvers on your network can forward DNS queries to Resolver in a specified VPC. This allows your DNS resolvers
 * 			to easily resolve domain names for Amazon Web Services resources such as EC2 instances or records in a Route 53 private hosted zone.
 * 			For more information, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver.html#resolver-overview-forward-network-to-vpc">How DNS Resolvers
 * 			on Your Network Forward DNS Queries to Route 53 Resolver</a> in the <i>Amazon Route 53 Developer Guide</i>.</p>
 *          <p>
 *             <b>Conditionally forward queries from a VPC to resolvers on your network</b>
 *          </p>
 *          <p>You can configure Resolver to forward queries that it receives from EC2 instances in your VPCs to DNS resolvers on your network.
 * 			To forward selected queries, you create Resolver rules that specify the domain names for the DNS queries that you want to forward
 * 			(such as example.com), and the IP addresses of the DNS resolvers on your network that you want to forward the queries to.
 * 			If a query matches multiple rules (example.com, acme.example.com), Resolver chooses the rule with the most specific match
 * 			(acme.example.com) and forwards the query to the IP addresses that you specified in that rule. For more information, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver.html#resolver-overview-forward-vpc-to-network">How Route 53 Resolver
 * 			Forwards DNS Queries from Your VPCs to Your Network</a> in the <i>Amazon Route 53 Developer Guide</i>.</p>
 *          <p>Like Amazon VPC, Resolver is Regional. In each Region where you have VPCs, you can choose
 * 			whether to forward queries from your VPCs to your network (outbound queries), from your
 * 			network to your VPCs (inbound queries), or both.</p>
 * @public
 */
export class Route53ResolverClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  Route53ResolverClientResolvedConfig
> {
  /**
   * The resolved configuration of Route53ResolverClient class. This is resolved and normalized from the {@link Route53ResolverClientConfig | constructor configuration interface}.
   */
  readonly config: Route53ResolverClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<Route53ResolverClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultRoute53ResolverHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: Route53ResolverClientResolvedConfig) =>
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
