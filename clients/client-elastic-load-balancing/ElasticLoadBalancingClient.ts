import {
  AddAvailabilityZonesInput,
  AddAvailabilityZonesOutput,
  AddTagsInput,
  AddTagsOutput,
  ApplySecurityGroupsToLoadBalancerInput,
  ApplySecurityGroupsToLoadBalancerOutput,
  AttachLoadBalancerToSubnetsInput,
  AttachLoadBalancerToSubnetsOutput,
  ConfigureHealthCheckInput,
  ConfigureHealthCheckOutput,
  CreateAccessPointInput,
  CreateAccessPointOutput,
  CreateAppCookieStickinessPolicyInput,
  CreateAppCookieStickinessPolicyOutput,
  CreateLBCookieStickinessPolicyInput,
  CreateLBCookieStickinessPolicyOutput,
  CreateLoadBalancerListenerInput,
  CreateLoadBalancerListenerOutput,
  CreateLoadBalancerPolicyInput,
  CreateLoadBalancerPolicyOutput,
  DeleteAccessPointInput,
  DeleteAccessPointOutput,
  DeleteLoadBalancerListenerInput,
  DeleteLoadBalancerListenerOutput,
  DeleteLoadBalancerPolicyInput,
  DeleteLoadBalancerPolicyOutput,
  DeregisterEndPointsInput,
  DeregisterEndPointsOutput,
  DescribeAccessPointsInput,
  DescribeAccessPointsOutput,
  DescribeAccountLimitsInput,
  DescribeAccountLimitsOutput,
  DescribeEndPointStateInput,
  DescribeEndPointStateOutput,
  DescribeLoadBalancerAttributesInput,
  DescribeLoadBalancerAttributesOutput,
  DescribeLoadBalancerPoliciesInput,
  DescribeLoadBalancerPoliciesOutput,
  DescribeLoadBalancerPolicyTypesInput,
  DescribeLoadBalancerPolicyTypesOutput,
  DescribeTagsInput,
  DescribeTagsOutput,
  DetachLoadBalancerFromSubnetsInput,
  DetachLoadBalancerFromSubnetsOutput,
  ModifyLoadBalancerAttributesInput,
  ModifyLoadBalancerAttributesOutput,
  RegisterEndPointsInput,
  RegisterEndPointsOutput,
  RemoveAvailabilityZonesInput,
  RemoveAvailabilityZonesOutput,
  RemoveTagsInput,
  RemoveTagsOutput,
  SetLoadBalancerListenerSSLCertificateInput,
  SetLoadBalancerListenerSSLCertificateOutput,
  SetLoadBalancerPoliciesForBackendServerInput,
  SetLoadBalancerPoliciesForBackendServerOutput,
  SetLoadBalancerPoliciesOfListenerInput,
  SetLoadBalancerPoliciesOfListenerOutput
} from "./models/index";
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
  | AddAvailabilityZonesInput
  | AddTagsInput
  | ApplySecurityGroupsToLoadBalancerInput
  | AttachLoadBalancerToSubnetsInput
  | ConfigureHealthCheckInput
  | CreateAccessPointInput
  | CreateAppCookieStickinessPolicyInput
  | CreateLBCookieStickinessPolicyInput
  | CreateLoadBalancerListenerInput
  | CreateLoadBalancerPolicyInput
  | DeleteAccessPointInput
  | DeleteLoadBalancerListenerInput
  | DeleteLoadBalancerPolicyInput
  | DeregisterEndPointsInput
  | DescribeAccessPointsInput
  | DescribeAccountLimitsInput
  | DescribeEndPointStateInput
  | DescribeLoadBalancerAttributesInput
  | DescribeLoadBalancerPoliciesInput
  | DescribeLoadBalancerPolicyTypesInput
  | DescribeTagsInput
  | DetachLoadBalancerFromSubnetsInput
  | ModifyLoadBalancerAttributesInput
  | RegisterEndPointsInput
  | RemoveAvailabilityZonesInput
  | RemoveTagsInput
  | SetLoadBalancerListenerSSLCertificateInput
  | SetLoadBalancerPoliciesForBackendServerInput
  | SetLoadBalancerPoliciesOfListenerInput;

export type ServiceOutputTypes =
  | AddAvailabilityZonesOutput
  | AddTagsOutput
  | ApplySecurityGroupsToLoadBalancerOutput
  | AttachLoadBalancerToSubnetsOutput
  | ConfigureHealthCheckOutput
  | CreateAccessPointOutput
  | CreateAppCookieStickinessPolicyOutput
  | CreateLBCookieStickinessPolicyOutput
  | CreateLoadBalancerListenerOutput
  | CreateLoadBalancerPolicyOutput
  | DeleteAccessPointOutput
  | DeleteLoadBalancerListenerOutput
  | DeleteLoadBalancerPolicyOutput
  | DeregisterEndPointsOutput
  | DescribeAccessPointsOutput
  | DescribeAccountLimitsOutput
  | DescribeEndPointStateOutput
  | DescribeLoadBalancerAttributesOutput
  | DescribeLoadBalancerPoliciesOutput
  | DescribeLoadBalancerPolicyTypesOutput
  | DescribeTagsOutput
  | DetachLoadBalancerFromSubnetsOutput
  | ModifyLoadBalancerAttributesOutput
  | RegisterEndPointsOutput
  | RemoveAvailabilityZonesOutput
  | RemoveTagsOutput
  | SetLoadBalancerListenerSSLCertificateOutput
  | SetLoadBalancerPoliciesForBackendServerOutput
  | SetLoadBalancerPoliciesOfListenerOutput;

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

export type ElasticLoadBalancingClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type ElasticLoadBalancingClientResolvedConfig = __SmithyResolvedConfiguration<
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
 *
 *     	    <fullname>Elastic Load Balancing</fullname>
 *
 *         <p>A load balancer can distribute incoming traffic across your EC2 instances.
 *             This enables you to increase the availability of your application. The load balancer
 *             also monitors the health of its registered instances and ensures that it routes traffic
 *             only to healthy instances. You configure your load balancer to accept incoming traffic
 *             by specifying one or more listeners, which are configured with a protocol and port
 *             number for connections from clients to the load balancer and a protocol and port number
 *             for connections from the load balancer to the instances.</p>
 *         <p>Elastic Load Balancing supports three types of load balancers: Application Load Balancers, Network Load Balancers,
 *             and Classic Load Balancers. You can select a load balancer based on your application needs. For more
 *             information, see the <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/">Elastic Load Balancing User Guide</a>.</p>
 *         <p>This reference covers the 2012-06-01 API, which supports Classic Load Balancers.
 *             The 2015-12-01 API supports Application Load Balancers and Network Load Balancers.</p>
 *
 *         <p>To get started, create a load balancer with one or more listeners using <a>CreateLoadBalancer</a>.
 *             Register your instances with the load balancer using <a>RegisterInstancesWithLoadBalancer</a>.</p>
 *
 *         <p>All Elastic Load Balancing operations are <i>idempotent</i>, which means
 *             that they complete at most one time. If you repeat an operation, it succeeds with a 200 OK
 *             response code.</p>
 *
 *
 */
export class ElasticLoadBalancingClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ElasticLoadBalancingClientResolvedConfig
> {
  readonly config: ElasticLoadBalancingClientResolvedConfig;

  constructor(configuration: ElasticLoadBalancingClientConfig) {
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
