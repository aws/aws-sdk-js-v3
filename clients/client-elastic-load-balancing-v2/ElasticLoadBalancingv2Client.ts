import {
  AddListenerCertificatesCommandInput,
  AddListenerCertificatesCommandOutput
} from "./commands/AddListenerCertificatesCommand";
import {
  AddTagsCommandInput,
  AddTagsCommandOutput
} from "./commands/AddTagsCommand";
import {
  CreateListenerCommandInput,
  CreateListenerCommandOutput
} from "./commands/CreateListenerCommand";
import {
  CreateLoadBalancerCommandInput,
  CreateLoadBalancerCommandOutput
} from "./commands/CreateLoadBalancerCommand";
import {
  CreateRuleCommandInput,
  CreateRuleCommandOutput
} from "./commands/CreateRuleCommand";
import {
  CreateTargetGroupCommandInput,
  CreateTargetGroupCommandOutput
} from "./commands/CreateTargetGroupCommand";
import {
  DeleteListenerCommandInput,
  DeleteListenerCommandOutput
} from "./commands/DeleteListenerCommand";
import {
  DeleteLoadBalancerCommandInput,
  DeleteLoadBalancerCommandOutput
} from "./commands/DeleteLoadBalancerCommand";
import {
  DeleteRuleCommandInput,
  DeleteRuleCommandOutput
} from "./commands/DeleteRuleCommand";
import {
  DeleteTargetGroupCommandInput,
  DeleteTargetGroupCommandOutput
} from "./commands/DeleteTargetGroupCommand";
import {
  DeregisterTargetsCommandInput,
  DeregisterTargetsCommandOutput
} from "./commands/DeregisterTargetsCommand";
import {
  DescribeAccountLimitsCommandInput,
  DescribeAccountLimitsCommandOutput
} from "./commands/DescribeAccountLimitsCommand";
import {
  DescribeListenerCertificatesCommandInput,
  DescribeListenerCertificatesCommandOutput
} from "./commands/DescribeListenerCertificatesCommand";
import {
  DescribeListenersCommandInput,
  DescribeListenersCommandOutput
} from "./commands/DescribeListenersCommand";
import {
  DescribeLoadBalancerAttributesCommandInput,
  DescribeLoadBalancerAttributesCommandOutput
} from "./commands/DescribeLoadBalancerAttributesCommand";
import {
  DescribeLoadBalancersCommandInput,
  DescribeLoadBalancersCommandOutput
} from "./commands/DescribeLoadBalancersCommand";
import {
  DescribeRulesCommandInput,
  DescribeRulesCommandOutput
} from "./commands/DescribeRulesCommand";
import {
  DescribeSSLPoliciesCommandInput,
  DescribeSSLPoliciesCommandOutput
} from "./commands/DescribeSSLPoliciesCommand";
import {
  DescribeTagsCommandInput,
  DescribeTagsCommandOutput
} from "./commands/DescribeTagsCommand";
import {
  DescribeTargetGroupAttributesCommandInput,
  DescribeTargetGroupAttributesCommandOutput
} from "./commands/DescribeTargetGroupAttributesCommand";
import {
  DescribeTargetGroupsCommandInput,
  DescribeTargetGroupsCommandOutput
} from "./commands/DescribeTargetGroupsCommand";
import {
  DescribeTargetHealthCommandInput,
  DescribeTargetHealthCommandOutput
} from "./commands/DescribeTargetHealthCommand";
import {
  ModifyListenerCommandInput,
  ModifyListenerCommandOutput
} from "./commands/ModifyListenerCommand";
import {
  ModifyLoadBalancerAttributesCommandInput,
  ModifyLoadBalancerAttributesCommandOutput
} from "./commands/ModifyLoadBalancerAttributesCommand";
import {
  ModifyRuleCommandInput,
  ModifyRuleCommandOutput
} from "./commands/ModifyRuleCommand";
import {
  ModifyTargetGroupAttributesCommandInput,
  ModifyTargetGroupAttributesCommandOutput
} from "./commands/ModifyTargetGroupAttributesCommand";
import {
  ModifyTargetGroupCommandInput,
  ModifyTargetGroupCommandOutput
} from "./commands/ModifyTargetGroupCommand";
import {
  RegisterTargetsCommandInput,
  RegisterTargetsCommandOutput
} from "./commands/RegisterTargetsCommand";
import {
  RemoveListenerCertificatesCommandInput,
  RemoveListenerCertificatesCommandOutput
} from "./commands/RemoveListenerCertificatesCommand";
import {
  RemoveTagsCommandInput,
  RemoveTagsCommandOutput
} from "./commands/RemoveTagsCommand";
import {
  SetIpAddressTypeCommandInput,
  SetIpAddressTypeCommandOutput
} from "./commands/SetIpAddressTypeCommand";
import {
  SetRulePrioritiesCommandInput,
  SetRulePrioritiesCommandOutput
} from "./commands/SetRulePrioritiesCommand";
import {
  SetSecurityGroupsCommandInput,
  SetSecurityGroupsCommandOutput
} from "./commands/SetSecurityGroupsCommand";
import {
  SetSubnetsCommandInput,
  SetSubnetsCommandOutput
} from "./commands/SetSubnetsCommand";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig
} from "@aws-sdk/middleware-host-header";
import {
  RetryInputConfig,
  RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig
} from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration
} from "@aws-sdk/smithy-client";
import {
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | AddListenerCertificatesCommandInput
  | AddTagsCommandInput
  | CreateListenerCommandInput
  | CreateLoadBalancerCommandInput
  | CreateRuleCommandInput
  | CreateTargetGroupCommandInput
  | DeleteListenerCommandInput
  | DeleteLoadBalancerCommandInput
  | DeleteRuleCommandInput
  | DeleteTargetGroupCommandInput
  | DeregisterTargetsCommandInput
  | DescribeAccountLimitsCommandInput
  | DescribeListenerCertificatesCommandInput
  | DescribeListenersCommandInput
  | DescribeLoadBalancerAttributesCommandInput
  | DescribeLoadBalancersCommandInput
  | DescribeRulesCommandInput
  | DescribeSSLPoliciesCommandInput
  | DescribeTagsCommandInput
  | DescribeTargetGroupAttributesCommandInput
  | DescribeTargetGroupsCommandInput
  | DescribeTargetHealthCommandInput
  | ModifyListenerCommandInput
  | ModifyLoadBalancerAttributesCommandInput
  | ModifyRuleCommandInput
  | ModifyTargetGroupAttributesCommandInput
  | ModifyTargetGroupCommandInput
  | RegisterTargetsCommandInput
  | RemoveListenerCertificatesCommandInput
  | RemoveTagsCommandInput
  | SetIpAddressTypeCommandInput
  | SetRulePrioritiesCommandInput
  | SetSecurityGroupsCommandInput
  | SetSubnetsCommandInput;

export type ServiceOutputTypes =
  | AddListenerCertificatesCommandOutput
  | AddTagsCommandOutput
  | CreateListenerCommandOutput
  | CreateLoadBalancerCommandOutput
  | CreateRuleCommandOutput
  | CreateTargetGroupCommandOutput
  | DeleteListenerCommandOutput
  | DeleteLoadBalancerCommandOutput
  | DeleteRuleCommandOutput
  | DeleteTargetGroupCommandOutput
  | DeregisterTargetsCommandOutput
  | DescribeAccountLimitsCommandOutput
  | DescribeListenerCertificatesCommandOutput
  | DescribeListenersCommandOutput
  | DescribeLoadBalancerAttributesCommandOutput
  | DescribeLoadBalancersCommandOutput
  | DescribeRulesCommandOutput
  | DescribeSSLPoliciesCommandOutput
  | DescribeTagsCommandOutput
  | DescribeTargetGroupAttributesCommandOutput
  | DescribeTargetGroupsCommandOutput
  | DescribeTargetHealthCommandOutput
  | ModifyListenerCommandOutput
  | ModifyLoadBalancerAttributesCommandOutput
  | ModifyRuleCommandOutput
  | ModifyTargetGroupAttributesCommandOutput
  | ModifyTargetGroupCommandOutput
  | RegisterTargetsCommandOutput
  | RemoveListenerCertificatesCommandOutput
  | RemoveTagsCommandOutput
  | SetIpAddressTypeCommandOutput
  | SetRulePrioritiesCommandOutput
  | SetSecurityGroupsCommandOutput
  | SetSubnetsCommandOutput;

export interface ClientDefaults
  extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the @aws-sdk/types.Hash interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   */
  bodyLengthChecker?: (body: any) => number | undefined;

  /**
   * A function that converts a stream into an array of bytes.
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string
   */
  utf8Encoder?: __Encoder;

  /**
   * The string that will be used to populate default value in 'User-Agent' header
   */
  defaultUserAgent?: string;

  /**
   * The runtime environment
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * The service name with which to sign requests.
   */
  signingName?: string;

  /**
   * Default credentials provider; Not available in browser runtime
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * Provider function that return promise of a region string
   */
  regionDefaultProvider?: (input: any) => __Provider<string>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;
}

export type ElasticLoadBalancingv2ClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type ElasticLoadBalancingv2ClientResolvedConfig = __SmithyResolvedConfiguration<
  __HttpHandlerOptions
> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <fullname>Elastic Load Balancing</fullname>
 *
 *          <p>A load balancer distributes incoming traffic across targets, such as your EC2
 *       instances. This enables you to increase the availability of your application. The load
 *       balancer also monitors the health of its registered targets and ensures that it routes traffic
 *       only to healthy targets. You configure your load balancer to accept incoming traffic by
 *       specifying one or more listeners, which are configured with a protocol and port number for
 *       connections from clients to the load balancer. You configure a target group with a protocol
 *       and port number for connections from the load balancer to the targets, and with health check
 *       settings to be used when checking the health status of the targets.</p>
 *
 *          <p>Elastic Load Balancing supports the following types of load balancers: Application Load
 *       Balancers, Network Load Balancers, and Classic Load Balancers. This reference covers
 *       Application Load Balancers and Network Load Balancers.</p>
 *          <p>An Application Load Balancer makes routing and load balancing decisions at the
 *       application layer (HTTP/HTTPS). A Network Load Balancer makes routing and load balancing
 *       decisions at the transport layer (TCP/TLS). Both Application Load Balancers and Network Load
 *       Balancers can route requests to one or more ports on each EC2 instance or container instance
 *       in your virtual private cloud (VPC). For more information, see the <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/">Elastic Load Balancing User
 *       Guide</a>.</p>
 *
 *
 *
 *
 *
 *
 *
 *          <p>All Elastic Load Balancing operations are idempotent, which means that they complete at
 *       most one time. If you repeat an operation, it succeeds.</p>
 */
export class ElasticLoadBalancingv2Client extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ElasticLoadBalancingv2ClientResolvedConfig
> {
  readonly config: ElasticLoadBalancingv2ClientResolvedConfig;

  constructor(configuration: ElasticLoadBalancingv2ClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveAwsAuthConfig(_config_2);
    let _config_4 = resolveRetryConfig(_config_3);
    let _config_5 = resolveUserAgentConfig(_config_4);
    let _config_6 = resolveHostHeaderConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
  }

  destroy(): void {}
}
