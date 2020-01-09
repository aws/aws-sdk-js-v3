import {
  AssociateWebACLRequest,
  AssociateWebACLResponse,
  CreateByteMatchSetRequest,
  CreateByteMatchSetResponse,
  CreateGeoMatchSetRequest,
  CreateGeoMatchSetResponse,
  CreateIPSetRequest,
  CreateIPSetResponse,
  CreateRateBasedRuleRequest,
  CreateRateBasedRuleResponse,
  CreateRegexMatchSetRequest,
  CreateRegexMatchSetResponse,
  CreateRegexPatternSetRequest,
  CreateRegexPatternSetResponse,
  CreateRuleGroupRequest,
  CreateRuleGroupResponse,
  CreateRuleRequest,
  CreateRuleResponse,
  CreateSizeConstraintSetRequest,
  CreateSizeConstraintSetResponse,
  CreateSqlInjectionMatchSetRequest,
  CreateSqlInjectionMatchSetResponse,
  CreateWebACLRequest,
  CreateWebACLResponse,
  CreateXssMatchSetRequest,
  CreateXssMatchSetResponse,
  DeleteByteMatchSetRequest,
  DeleteByteMatchSetResponse,
  DeleteGeoMatchSetRequest,
  DeleteGeoMatchSetResponse,
  DeleteIPSetRequest,
  DeleteIPSetResponse,
  DeleteLoggingConfigurationRequest,
  DeleteLoggingConfigurationResponse,
  DeletePermissionPolicyRequest,
  DeletePermissionPolicyResponse,
  DeleteRateBasedRuleRequest,
  DeleteRateBasedRuleResponse,
  DeleteRegexMatchSetRequest,
  DeleteRegexMatchSetResponse,
  DeleteRegexPatternSetRequest,
  DeleteRegexPatternSetResponse,
  DeleteRuleGroupRequest,
  DeleteRuleGroupResponse,
  DeleteRuleRequest,
  DeleteRuleResponse,
  DeleteSizeConstraintSetRequest,
  DeleteSizeConstraintSetResponse,
  DeleteSqlInjectionMatchSetRequest,
  DeleteSqlInjectionMatchSetResponse,
  DeleteWebACLRequest,
  DeleteWebACLResponse,
  DeleteXssMatchSetRequest,
  DeleteXssMatchSetResponse,
  DisassociateWebACLRequest,
  DisassociateWebACLResponse,
  GetByteMatchSetRequest,
  GetByteMatchSetResponse,
  GetChangeTokenRequest,
  GetChangeTokenResponse,
  GetChangeTokenStatusRequest,
  GetChangeTokenStatusResponse,
  GetGeoMatchSetRequest,
  GetGeoMatchSetResponse,
  GetIPSetRequest,
  GetIPSetResponse,
  GetLoggingConfigurationRequest,
  GetLoggingConfigurationResponse,
  GetPermissionPolicyRequest,
  GetPermissionPolicyResponse,
  GetRateBasedRuleManagedKeysRequest,
  GetRateBasedRuleManagedKeysResponse,
  GetRateBasedRuleRequest,
  GetRateBasedRuleResponse,
  GetRegexMatchSetRequest,
  GetRegexMatchSetResponse,
  GetRegexPatternSetRequest,
  GetRegexPatternSetResponse,
  GetRuleGroupRequest,
  GetRuleGroupResponse,
  GetRuleRequest,
  GetRuleResponse,
  GetSampledRequestsRequest,
  GetSampledRequestsResponse,
  GetSizeConstraintSetRequest,
  GetSizeConstraintSetResponse,
  GetSqlInjectionMatchSetRequest,
  GetSqlInjectionMatchSetResponse,
  GetWebACLForResourceRequest,
  GetWebACLForResourceResponse,
  GetWebACLRequest,
  GetWebACLResponse,
  GetXssMatchSetRequest,
  GetXssMatchSetResponse,
  ListActivatedRulesInRuleGroupRequest,
  ListActivatedRulesInRuleGroupResponse,
  ListByteMatchSetsRequest,
  ListByteMatchSetsResponse,
  ListGeoMatchSetsRequest,
  ListGeoMatchSetsResponse,
  ListIPSetsRequest,
  ListIPSetsResponse,
  ListLoggingConfigurationsRequest,
  ListLoggingConfigurationsResponse,
  ListRateBasedRulesRequest,
  ListRateBasedRulesResponse,
  ListRegexMatchSetsRequest,
  ListRegexMatchSetsResponse,
  ListRegexPatternSetsRequest,
  ListRegexPatternSetsResponse,
  ListResourcesForWebACLRequest,
  ListResourcesForWebACLResponse,
  ListRuleGroupsRequest,
  ListRuleGroupsResponse,
  ListRulesRequest,
  ListRulesResponse,
  ListSizeConstraintSetsRequest,
  ListSizeConstraintSetsResponse,
  ListSqlInjectionMatchSetsRequest,
  ListSqlInjectionMatchSetsResponse,
  ListSubscribedRuleGroupsRequest,
  ListSubscribedRuleGroupsResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListWebACLsRequest,
  ListWebACLsResponse,
  ListXssMatchSetsRequest,
  ListXssMatchSetsResponse,
  PutLoggingConfigurationRequest,
  PutLoggingConfigurationResponse,
  PutPermissionPolicyRequest,
  PutPermissionPolicyResponse,
  TagResourceRequest,
  TagResourceResponse,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateByteMatchSetRequest,
  UpdateByteMatchSetResponse,
  UpdateGeoMatchSetRequest,
  UpdateGeoMatchSetResponse,
  UpdateIPSetRequest,
  UpdateIPSetResponse,
  UpdateRateBasedRuleRequest,
  UpdateRateBasedRuleResponse,
  UpdateRegexMatchSetRequest,
  UpdateRegexMatchSetResponse,
  UpdateRegexPatternSetRequest,
  UpdateRegexPatternSetResponse,
  UpdateRuleGroupRequest,
  UpdateRuleGroupResponse,
  UpdateRuleRequest,
  UpdateRuleResponse,
  UpdateSizeConstraintSetRequest,
  UpdateSizeConstraintSetResponse,
  UpdateSqlInjectionMatchSetRequest,
  UpdateSqlInjectionMatchSetResponse,
  UpdateWebACLRequest,
  UpdateWebACLResponse,
  UpdateXssMatchSetRequest,
  UpdateXssMatchSetResponse,
} from "./models/index";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
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
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import {
  RetryInputConfig,
  RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig,
} from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
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
  UrlParser as __UrlParser,
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | AssociateWebACLRequest
  | CreateByteMatchSetRequest
  | CreateGeoMatchSetRequest
  | CreateIPSetRequest
  | CreateRateBasedRuleRequest
  | CreateRegexMatchSetRequest
  | CreateRegexPatternSetRequest
  | CreateRuleGroupRequest
  | CreateRuleRequest
  | CreateSizeConstraintSetRequest
  | CreateSqlInjectionMatchSetRequest
  | CreateWebACLRequest
  | CreateXssMatchSetRequest
  | DeleteByteMatchSetRequest
  | DeleteGeoMatchSetRequest
  | DeleteIPSetRequest
  | DeleteLoggingConfigurationRequest
  | DeletePermissionPolicyRequest
  | DeleteRateBasedRuleRequest
  | DeleteRegexMatchSetRequest
  | DeleteRegexPatternSetRequest
  | DeleteRuleGroupRequest
  | DeleteRuleRequest
  | DeleteSizeConstraintSetRequest
  | DeleteSqlInjectionMatchSetRequest
  | DeleteWebACLRequest
  | DeleteXssMatchSetRequest
  | DisassociateWebACLRequest
  | GetByteMatchSetRequest
  | GetChangeTokenRequest
  | GetChangeTokenStatusRequest
  | GetGeoMatchSetRequest
  | GetIPSetRequest
  | GetLoggingConfigurationRequest
  | GetPermissionPolicyRequest
  | GetRateBasedRuleManagedKeysRequest
  | GetRateBasedRuleRequest
  | GetRegexMatchSetRequest
  | GetRegexPatternSetRequest
  | GetRuleGroupRequest
  | GetRuleRequest
  | GetSampledRequestsRequest
  | GetSizeConstraintSetRequest
  | GetSqlInjectionMatchSetRequest
  | GetWebACLForResourceRequest
  | GetWebACLRequest
  | GetXssMatchSetRequest
  | ListActivatedRulesInRuleGroupRequest
  | ListByteMatchSetsRequest
  | ListGeoMatchSetsRequest
  | ListIPSetsRequest
  | ListLoggingConfigurationsRequest
  | ListRateBasedRulesRequest
  | ListRegexMatchSetsRequest
  | ListRegexPatternSetsRequest
  | ListResourcesForWebACLRequest
  | ListRuleGroupsRequest
  | ListRulesRequest
  | ListSizeConstraintSetsRequest
  | ListSqlInjectionMatchSetsRequest
  | ListSubscribedRuleGroupsRequest
  | ListTagsForResourceRequest
  | ListWebACLsRequest
  | ListXssMatchSetsRequest
  | PutLoggingConfigurationRequest
  | PutPermissionPolicyRequest
  | TagResourceRequest
  | UntagResourceRequest
  | UpdateByteMatchSetRequest
  | UpdateGeoMatchSetRequest
  | UpdateIPSetRequest
  | UpdateRateBasedRuleRequest
  | UpdateRegexMatchSetRequest
  | UpdateRegexPatternSetRequest
  | UpdateRuleGroupRequest
  | UpdateRuleRequest
  | UpdateSizeConstraintSetRequest
  | UpdateSqlInjectionMatchSetRequest
  | UpdateWebACLRequest
  | UpdateXssMatchSetRequest;

export type ServiceOutputTypes =
  | AssociateWebACLResponse
  | CreateByteMatchSetResponse
  | CreateGeoMatchSetResponse
  | CreateIPSetResponse
  | CreateRateBasedRuleResponse
  | CreateRegexMatchSetResponse
  | CreateRegexPatternSetResponse
  | CreateRuleGroupResponse
  | CreateRuleResponse
  | CreateSizeConstraintSetResponse
  | CreateSqlInjectionMatchSetResponse
  | CreateWebACLResponse
  | CreateXssMatchSetResponse
  | DeleteByteMatchSetResponse
  | DeleteGeoMatchSetResponse
  | DeleteIPSetResponse
  | DeleteLoggingConfigurationResponse
  | DeletePermissionPolicyResponse
  | DeleteRateBasedRuleResponse
  | DeleteRegexMatchSetResponse
  | DeleteRegexPatternSetResponse
  | DeleteRuleGroupResponse
  | DeleteRuleResponse
  | DeleteSizeConstraintSetResponse
  | DeleteSqlInjectionMatchSetResponse
  | DeleteWebACLResponse
  | DeleteXssMatchSetResponse
  | DisassociateWebACLResponse
  | GetByteMatchSetResponse
  | GetChangeTokenResponse
  | GetChangeTokenStatusResponse
  | GetGeoMatchSetResponse
  | GetIPSetResponse
  | GetLoggingConfigurationResponse
  | GetPermissionPolicyResponse
  | GetRateBasedRuleManagedKeysResponse
  | GetRateBasedRuleResponse
  | GetRegexMatchSetResponse
  | GetRegexPatternSetResponse
  | GetRuleGroupResponse
  | GetRuleResponse
  | GetSampledRequestsResponse
  | GetSizeConstraintSetResponse
  | GetSqlInjectionMatchSetResponse
  | GetWebACLForResourceResponse
  | GetWebACLResponse
  | GetXssMatchSetResponse
  | ListActivatedRulesInRuleGroupResponse
  | ListByteMatchSetsResponse
  | ListGeoMatchSetsResponse
  | ListIPSetsResponse
  | ListLoggingConfigurationsResponse
  | ListRateBasedRulesResponse
  | ListRegexMatchSetsResponse
  | ListRegexPatternSetsResponse
  | ListResourcesForWebACLResponse
  | ListRuleGroupsResponse
  | ListRulesResponse
  | ListSizeConstraintSetsResponse
  | ListSqlInjectionMatchSetsResponse
  | ListSubscribedRuleGroupsResponse
  | ListTagsForResourceResponse
  | ListWebACLsResponse
  | ListXssMatchSetsResponse
  | PutLoggingConfigurationResponse
  | PutPermissionPolicyResponse
  | TagResourceResponse
  | UntagResourceResponse
  | UpdateByteMatchSetResponse
  | UpdateGeoMatchSetResponse
  | UpdateIPSetResponse
  | UpdateRateBasedRuleResponse
  | UpdateRegexMatchSetResponse
  | UpdateRegexPatternSetResponse
  | UpdateRuleGroupResponse
  | UpdateRuleResponse
  | UpdateSizeConstraintSetResponse
  | UpdateSqlInjectionMatchSetResponse
  | UpdateWebACLResponse
  | UpdateXssMatchSetResponse;

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

export type WAFRegionalClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>>
  & ClientDefaults
  & RegionInputConfig
  & EndpointsInputConfig
  & AwsAuthInputConfig
  & RetryInputConfig
  & UserAgentInputConfig
  & HostHeaderInputConfig

export type WAFRegionalClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions>
  & Required<ClientDefaults>
  & RegionResolvedConfig
  & EndpointsResolvedConfig
  & AwsAuthResolvedConfig
  & RetryResolvedConfig
  & UserAgentResolvedConfig
  & HostHeaderResolvedConfig

/**
 *
 *          <p>This is the <i>AWS WAF Regional API Reference</i> for using AWS WAF with Elastic Load Balancing (ELB) Application Load Balancers. The AWS WAF actions and data types listed in the reference are available for protecting Application Load Balancers. You can use these actions and data types by means of the endpoints listed in <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#waf_region">AWS Regions and Endpoints</a>. This guide is for developers who need detailed information about the AWS WAF API actions, data types, and errors. For detailed information about AWS WAF features and an overview of how to use the AWS WAF API, see the
 *         <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>		
 *
 */
export class WAFRegionalClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  WAFRegionalClientResolvedConfig
> {
  readonly config: WAFRegionalClientResolvedConfig;

  constructor(configuration: WAFRegionalClientConfig) {
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

  destroy(): void {
  }
}
