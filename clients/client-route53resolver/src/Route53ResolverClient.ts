// smithy-typescript generated code
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@aws-sdk/middleware-endpoint";
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
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  Checksum as __Checksum,
  ChecksumConstructor as __ChecksumConstructor,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

import {
  AssociateFirewallRuleGroupCommandInput,
  AssociateFirewallRuleGroupCommandOutput,
} from "./commands/AssociateFirewallRuleGroupCommand";
import {
  AssociateResolverEndpointIpAddressCommandInput,
  AssociateResolverEndpointIpAddressCommandOutput,
} from "./commands/AssociateResolverEndpointIpAddressCommand";
import {
  AssociateResolverQueryLogConfigCommandInput,
  AssociateResolverQueryLogConfigCommandOutput,
} from "./commands/AssociateResolverQueryLogConfigCommand";
import {
  AssociateResolverRuleCommandInput,
  AssociateResolverRuleCommandOutput,
} from "./commands/AssociateResolverRuleCommand";
import {
  CreateFirewallDomainListCommandInput,
  CreateFirewallDomainListCommandOutput,
} from "./commands/CreateFirewallDomainListCommand";
import { CreateFirewallRuleCommandInput, CreateFirewallRuleCommandOutput } from "./commands/CreateFirewallRuleCommand";
import {
  CreateFirewallRuleGroupCommandInput,
  CreateFirewallRuleGroupCommandOutput,
} from "./commands/CreateFirewallRuleGroupCommand";
import {
  CreateResolverEndpointCommandInput,
  CreateResolverEndpointCommandOutput,
} from "./commands/CreateResolverEndpointCommand";
import {
  CreateResolverQueryLogConfigCommandInput,
  CreateResolverQueryLogConfigCommandOutput,
} from "./commands/CreateResolverQueryLogConfigCommand";
import { CreateResolverRuleCommandInput, CreateResolverRuleCommandOutput } from "./commands/CreateResolverRuleCommand";
import {
  DeleteFirewallDomainListCommandInput,
  DeleteFirewallDomainListCommandOutput,
} from "./commands/DeleteFirewallDomainListCommand";
import { DeleteFirewallRuleCommandInput, DeleteFirewallRuleCommandOutput } from "./commands/DeleteFirewallRuleCommand";
import {
  DeleteFirewallRuleGroupCommandInput,
  DeleteFirewallRuleGroupCommandOutput,
} from "./commands/DeleteFirewallRuleGroupCommand";
import {
  DeleteResolverEndpointCommandInput,
  DeleteResolverEndpointCommandOutput,
} from "./commands/DeleteResolverEndpointCommand";
import {
  DeleteResolverQueryLogConfigCommandInput,
  DeleteResolverQueryLogConfigCommandOutput,
} from "./commands/DeleteResolverQueryLogConfigCommand";
import { DeleteResolverRuleCommandInput, DeleteResolverRuleCommandOutput } from "./commands/DeleteResolverRuleCommand";
import {
  DisassociateFirewallRuleGroupCommandInput,
  DisassociateFirewallRuleGroupCommandOutput,
} from "./commands/DisassociateFirewallRuleGroupCommand";
import {
  DisassociateResolverEndpointIpAddressCommandInput,
  DisassociateResolverEndpointIpAddressCommandOutput,
} from "./commands/DisassociateResolverEndpointIpAddressCommand";
import {
  DisassociateResolverQueryLogConfigCommandInput,
  DisassociateResolverQueryLogConfigCommandOutput,
} from "./commands/DisassociateResolverQueryLogConfigCommand";
import {
  DisassociateResolverRuleCommandInput,
  DisassociateResolverRuleCommandOutput,
} from "./commands/DisassociateResolverRuleCommand";
import { GetFirewallConfigCommandInput, GetFirewallConfigCommandOutput } from "./commands/GetFirewallConfigCommand";
import {
  GetFirewallDomainListCommandInput,
  GetFirewallDomainListCommandOutput,
} from "./commands/GetFirewallDomainListCommand";
import {
  GetFirewallRuleGroupAssociationCommandInput,
  GetFirewallRuleGroupAssociationCommandOutput,
} from "./commands/GetFirewallRuleGroupAssociationCommand";
import {
  GetFirewallRuleGroupCommandInput,
  GetFirewallRuleGroupCommandOutput,
} from "./commands/GetFirewallRuleGroupCommand";
import {
  GetFirewallRuleGroupPolicyCommandInput,
  GetFirewallRuleGroupPolicyCommandOutput,
} from "./commands/GetFirewallRuleGroupPolicyCommand";
import { GetResolverConfigCommandInput, GetResolverConfigCommandOutput } from "./commands/GetResolverConfigCommand";
import {
  GetResolverDnssecConfigCommandInput,
  GetResolverDnssecConfigCommandOutput,
} from "./commands/GetResolverDnssecConfigCommand";
import {
  GetResolverEndpointCommandInput,
  GetResolverEndpointCommandOutput,
} from "./commands/GetResolverEndpointCommand";
import {
  GetResolverQueryLogConfigAssociationCommandInput,
  GetResolverQueryLogConfigAssociationCommandOutput,
} from "./commands/GetResolverQueryLogConfigAssociationCommand";
import {
  GetResolverQueryLogConfigCommandInput,
  GetResolverQueryLogConfigCommandOutput,
} from "./commands/GetResolverQueryLogConfigCommand";
import {
  GetResolverQueryLogConfigPolicyCommandInput,
  GetResolverQueryLogConfigPolicyCommandOutput,
} from "./commands/GetResolverQueryLogConfigPolicyCommand";
import {
  GetResolverRuleAssociationCommandInput,
  GetResolverRuleAssociationCommandOutput,
} from "./commands/GetResolverRuleAssociationCommand";
import { GetResolverRuleCommandInput, GetResolverRuleCommandOutput } from "./commands/GetResolverRuleCommand";
import {
  GetResolverRulePolicyCommandInput,
  GetResolverRulePolicyCommandOutput,
} from "./commands/GetResolverRulePolicyCommand";
import {
  ImportFirewallDomainsCommandInput,
  ImportFirewallDomainsCommandOutput,
} from "./commands/ImportFirewallDomainsCommand";
import {
  ListFirewallConfigsCommandInput,
  ListFirewallConfigsCommandOutput,
} from "./commands/ListFirewallConfigsCommand";
import {
  ListFirewallDomainListsCommandInput,
  ListFirewallDomainListsCommandOutput,
} from "./commands/ListFirewallDomainListsCommand";
import {
  ListFirewallDomainsCommandInput,
  ListFirewallDomainsCommandOutput,
} from "./commands/ListFirewallDomainsCommand";
import {
  ListFirewallRuleGroupAssociationsCommandInput,
  ListFirewallRuleGroupAssociationsCommandOutput,
} from "./commands/ListFirewallRuleGroupAssociationsCommand";
import {
  ListFirewallRuleGroupsCommandInput,
  ListFirewallRuleGroupsCommandOutput,
} from "./commands/ListFirewallRuleGroupsCommand";
import { ListFirewallRulesCommandInput, ListFirewallRulesCommandOutput } from "./commands/ListFirewallRulesCommand";
import {
  ListResolverConfigsCommandInput,
  ListResolverConfigsCommandOutput,
} from "./commands/ListResolverConfigsCommand";
import {
  ListResolverDnssecConfigsCommandInput,
  ListResolverDnssecConfigsCommandOutput,
} from "./commands/ListResolverDnssecConfigsCommand";
import {
  ListResolverEndpointIpAddressesCommandInput,
  ListResolverEndpointIpAddressesCommandOutput,
} from "./commands/ListResolverEndpointIpAddressesCommand";
import {
  ListResolverEndpointsCommandInput,
  ListResolverEndpointsCommandOutput,
} from "./commands/ListResolverEndpointsCommand";
import {
  ListResolverQueryLogConfigAssociationsCommandInput,
  ListResolverQueryLogConfigAssociationsCommandOutput,
} from "./commands/ListResolverQueryLogConfigAssociationsCommand";
import {
  ListResolverQueryLogConfigsCommandInput,
  ListResolverQueryLogConfigsCommandOutput,
} from "./commands/ListResolverQueryLogConfigsCommand";
import {
  ListResolverRuleAssociationsCommandInput,
  ListResolverRuleAssociationsCommandOutput,
} from "./commands/ListResolverRuleAssociationsCommand";
import { ListResolverRulesCommandInput, ListResolverRulesCommandOutput } from "./commands/ListResolverRulesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutFirewallRuleGroupPolicyCommandInput,
  PutFirewallRuleGroupPolicyCommandOutput,
} from "./commands/PutFirewallRuleGroupPolicyCommand";
import {
  PutResolverQueryLogConfigPolicyCommandInput,
  PutResolverQueryLogConfigPolicyCommandOutput,
} from "./commands/PutResolverQueryLogConfigPolicyCommand";
import {
  PutResolverRulePolicyCommandInput,
  PutResolverRulePolicyCommandOutput,
} from "./commands/PutResolverRulePolicyCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateFirewallConfigCommandInput,
  UpdateFirewallConfigCommandOutput,
} from "./commands/UpdateFirewallConfigCommand";
import {
  UpdateFirewallDomainsCommandInput,
  UpdateFirewallDomainsCommandOutput,
} from "./commands/UpdateFirewallDomainsCommand";
import { UpdateFirewallRuleCommandInput, UpdateFirewallRuleCommandOutput } from "./commands/UpdateFirewallRuleCommand";
import {
  UpdateFirewallRuleGroupAssociationCommandInput,
  UpdateFirewallRuleGroupAssociationCommandOutput,
} from "./commands/UpdateFirewallRuleGroupAssociationCommand";
import {
  UpdateResolverConfigCommandInput,
  UpdateResolverConfigCommandOutput,
} from "./commands/UpdateResolverConfigCommand";
import {
  UpdateResolverDnssecConfigCommandInput,
  UpdateResolverDnssecConfigCommandOutput,
} from "./commands/UpdateResolverDnssecConfigCommand";
import {
  UpdateResolverEndpointCommandInput,
  UpdateResolverEndpointCommandOutput,
} from "./commands/UpdateResolverEndpointCommand";
import { UpdateResolverRuleCommandInput, UpdateResolverRuleCommandOutput } from "./commands/UpdateResolverRuleCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | AssociateFirewallRuleGroupCommandInput
  | AssociateResolverEndpointIpAddressCommandInput
  | AssociateResolverQueryLogConfigCommandInput
  | AssociateResolverRuleCommandInput
  | CreateFirewallDomainListCommandInput
  | CreateFirewallRuleCommandInput
  | CreateFirewallRuleGroupCommandInput
  | CreateResolverEndpointCommandInput
  | CreateResolverQueryLogConfigCommandInput
  | CreateResolverRuleCommandInput
  | DeleteFirewallDomainListCommandInput
  | DeleteFirewallRuleCommandInput
  | DeleteFirewallRuleGroupCommandInput
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
  | UpdateResolverConfigCommandInput
  | UpdateResolverDnssecConfigCommandInput
  | UpdateResolverEndpointCommandInput
  | UpdateResolverRuleCommandInput;

export type ServiceOutputTypes =
  | AssociateFirewallRuleGroupCommandOutput
  | AssociateResolverEndpointIpAddressCommandOutput
  | AssociateResolverQueryLogConfigCommandOutput
  | AssociateResolverRuleCommandOutput
  | CreateFirewallDomainListCommandOutput
  | CreateFirewallRuleCommandOutput
  | CreateFirewallRuleGroupCommandOutput
  | CreateResolverEndpointCommandOutput
  | CreateResolverQueryLogConfigCommandOutput
  | CreateResolverRuleCommandOutput
  | DeleteFirewallDomainListCommandOutput
  | DeleteFirewallRuleCommandOutput
  | DeleteFirewallRuleGroupCommandOutput
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
  | UpdateResolverConfigCommandOutput
  | UpdateResolverDnssecConfigCommandOutput
  | UpdateResolverEndpointCommandOutput
  | UpdateResolverRuleCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Checksum} interface
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
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * The {@link __DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

type Route53ResolverClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of Route53ResolverClient class constructor that set the region, credentials and other options.
 */
export interface Route53ResolverClientConfig extends Route53ResolverClientConfigType {}

type Route53ResolverClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of Route53ResolverClient class. This is resolved and normalized from the {@link Route53ResolverClientConfig | constructor configuration interface}.
 */
export interface Route53ResolverClientResolvedConfig extends Route53ResolverClientResolvedConfigType {}

/**
 * <p>When you create a VPC using Amazon VPC, you automatically get DNS resolution within the VPC
 * 			from Route 53 Resolver. By default, Resolver answers DNS queries for VPC domain names
 * 			such as domain names for EC2 instances or Elastic Load Balancing load balancers.
 * 			Resolver performs recursive lookups against public name servers for all other domain
 * 			names.</p>
 *
 * 		       <p>You can also configure DNS resolution between your VPC and your network over a Direct Connect or VPN connection:</p>
 *
 * 		       <p>
 *             <b>Forward DNS queries from resolvers on your network to Route 53 Resolver</b>
 *          </p>
 *
 * 		       <p>DNS resolvers on your network can forward DNS queries to Resolver in a specified VPC. This allows your DNS resolvers
 * 			to easily resolve domain names for Amazon Web Services resources such as EC2 instances or records in a Route 53 private hosted zone.
 * 			For more information, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver.html#resolver-overview-forward-network-to-vpc">How DNS Resolvers
 * 			on Your Network Forward DNS Queries to Route 53 Resolver</a> in the <i>Amazon Route 53 Developer Guide</i>.</p>
 *
 * 		       <p>
 *             <b>Conditionally forward queries from a VPC to resolvers on your network</b>
 *          </p>
 *
 * 		       <p>You can configure Resolver to forward queries that it receives from EC2 instances in your VPCs to DNS resolvers on your network.
 * 			To forward selected queries, you create Resolver rules that specify the domain names for the DNS queries that you want to forward
 * 			(such as example.com), and the IP addresses of the DNS resolvers on your network that you want to forward the queries to.
 * 			If a query matches multiple rules (example.com, acme.example.com), Resolver chooses the rule with the most specific match
 * 			(acme.example.com) and forwards the query to the IP addresses that you specified in that rule. For more information, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver.html#resolver-overview-forward-vpc-to-network">How Route 53 Resolver
 * 			Forwards DNS Queries from Your VPCs to Your Network</a> in the <i>Amazon Route 53 Developer Guide</i>.</p>
 *
 * 		       <p>Like Amazon VPC, Resolver is Regional. In each Region where you have VPCs, you can choose
 * 			whether to forward queries from your VPCs to your network (outbound queries), from your
 * 			network to your VPCs (inbound queries), or both.</p>
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

  constructor(configuration: Route53ResolverClientConfig) {
    const _config_0 = __getRuntimeConfig(configuration);
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveAwsAuthConfig(_config_5);
    const _config_7 = resolveUserAgentConfig(_config_6);
    super(_config_7);
    this.config = _config_7;
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
