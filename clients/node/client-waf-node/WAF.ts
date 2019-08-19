import { WAFClient } from "./WAFClient";
import { CreateByteMatchSetInput } from "./types/CreateByteMatchSetInput";
import { CreateByteMatchSetOutput } from "./types/CreateByteMatchSetOutput";
import { CreateGeoMatchSetInput } from "./types/CreateGeoMatchSetInput";
import { CreateGeoMatchSetOutput } from "./types/CreateGeoMatchSetOutput";
import { CreateIPSetInput } from "./types/CreateIPSetInput";
import { CreateIPSetOutput } from "./types/CreateIPSetOutput";
import { CreateRateBasedRuleInput } from "./types/CreateRateBasedRuleInput";
import { CreateRateBasedRuleOutput } from "./types/CreateRateBasedRuleOutput";
import { CreateRegexMatchSetInput } from "./types/CreateRegexMatchSetInput";
import { CreateRegexMatchSetOutput } from "./types/CreateRegexMatchSetOutput";
import { CreateRegexPatternSetInput } from "./types/CreateRegexPatternSetInput";
import { CreateRegexPatternSetOutput } from "./types/CreateRegexPatternSetOutput";
import { CreateRuleGroupInput } from "./types/CreateRuleGroupInput";
import { CreateRuleGroupOutput } from "./types/CreateRuleGroupOutput";
import { CreateRuleInput } from "./types/CreateRuleInput";
import { CreateRuleOutput } from "./types/CreateRuleOutput";
import { CreateSizeConstraintSetInput } from "./types/CreateSizeConstraintSetInput";
import { CreateSizeConstraintSetOutput } from "./types/CreateSizeConstraintSetOutput";
import { CreateSqlInjectionMatchSetInput } from "./types/CreateSqlInjectionMatchSetInput";
import { CreateSqlInjectionMatchSetOutput } from "./types/CreateSqlInjectionMatchSetOutput";
import { CreateWebACLInput } from "./types/CreateWebACLInput";
import { CreateWebACLOutput } from "./types/CreateWebACLOutput";
import { CreateXssMatchSetInput } from "./types/CreateXssMatchSetInput";
import { CreateXssMatchSetOutput } from "./types/CreateXssMatchSetOutput";
import { DeleteByteMatchSetInput } from "./types/DeleteByteMatchSetInput";
import { DeleteByteMatchSetOutput } from "./types/DeleteByteMatchSetOutput";
import { DeleteGeoMatchSetInput } from "./types/DeleteGeoMatchSetInput";
import { DeleteGeoMatchSetOutput } from "./types/DeleteGeoMatchSetOutput";
import { DeleteIPSetInput } from "./types/DeleteIPSetInput";
import { DeleteIPSetOutput } from "./types/DeleteIPSetOutput";
import { DeleteLoggingConfigurationInput } from "./types/DeleteLoggingConfigurationInput";
import { DeleteLoggingConfigurationOutput } from "./types/DeleteLoggingConfigurationOutput";
import { DeletePermissionPolicyInput } from "./types/DeletePermissionPolicyInput";
import { DeletePermissionPolicyOutput } from "./types/DeletePermissionPolicyOutput";
import { DeleteRateBasedRuleInput } from "./types/DeleteRateBasedRuleInput";
import { DeleteRateBasedRuleOutput } from "./types/DeleteRateBasedRuleOutput";
import { DeleteRegexMatchSetInput } from "./types/DeleteRegexMatchSetInput";
import { DeleteRegexMatchSetOutput } from "./types/DeleteRegexMatchSetOutput";
import { DeleteRegexPatternSetInput } from "./types/DeleteRegexPatternSetInput";
import { DeleteRegexPatternSetOutput } from "./types/DeleteRegexPatternSetOutput";
import { DeleteRuleGroupInput } from "./types/DeleteRuleGroupInput";
import { DeleteRuleGroupOutput } from "./types/DeleteRuleGroupOutput";
import { DeleteRuleInput } from "./types/DeleteRuleInput";
import { DeleteRuleOutput } from "./types/DeleteRuleOutput";
import { DeleteSizeConstraintSetInput } from "./types/DeleteSizeConstraintSetInput";
import { DeleteSizeConstraintSetOutput } from "./types/DeleteSizeConstraintSetOutput";
import { DeleteSqlInjectionMatchSetInput } from "./types/DeleteSqlInjectionMatchSetInput";
import { DeleteSqlInjectionMatchSetOutput } from "./types/DeleteSqlInjectionMatchSetOutput";
import { DeleteWebACLInput } from "./types/DeleteWebACLInput";
import { DeleteWebACLOutput } from "./types/DeleteWebACLOutput";
import { DeleteXssMatchSetInput } from "./types/DeleteXssMatchSetInput";
import { DeleteXssMatchSetOutput } from "./types/DeleteXssMatchSetOutput";
import { GetByteMatchSetInput } from "./types/GetByteMatchSetInput";
import { GetByteMatchSetOutput } from "./types/GetByteMatchSetOutput";
import { GetChangeTokenInput } from "./types/GetChangeTokenInput";
import { GetChangeTokenOutput } from "./types/GetChangeTokenOutput";
import { GetChangeTokenStatusInput } from "./types/GetChangeTokenStatusInput";
import { GetChangeTokenStatusOutput } from "./types/GetChangeTokenStatusOutput";
import { GetGeoMatchSetInput } from "./types/GetGeoMatchSetInput";
import { GetGeoMatchSetOutput } from "./types/GetGeoMatchSetOutput";
import { GetIPSetInput } from "./types/GetIPSetInput";
import { GetIPSetOutput } from "./types/GetIPSetOutput";
import { GetLoggingConfigurationInput } from "./types/GetLoggingConfigurationInput";
import { GetLoggingConfigurationOutput } from "./types/GetLoggingConfigurationOutput";
import { GetPermissionPolicyInput } from "./types/GetPermissionPolicyInput";
import { GetPermissionPolicyOutput } from "./types/GetPermissionPolicyOutput";
import { GetRateBasedRuleInput } from "./types/GetRateBasedRuleInput";
import { GetRateBasedRuleManagedKeysInput } from "./types/GetRateBasedRuleManagedKeysInput";
import { GetRateBasedRuleManagedKeysOutput } from "./types/GetRateBasedRuleManagedKeysOutput";
import { GetRateBasedRuleOutput } from "./types/GetRateBasedRuleOutput";
import { GetRegexMatchSetInput } from "./types/GetRegexMatchSetInput";
import { GetRegexMatchSetOutput } from "./types/GetRegexMatchSetOutput";
import { GetRegexPatternSetInput } from "./types/GetRegexPatternSetInput";
import { GetRegexPatternSetOutput } from "./types/GetRegexPatternSetOutput";
import { GetRuleGroupInput } from "./types/GetRuleGroupInput";
import { GetRuleGroupOutput } from "./types/GetRuleGroupOutput";
import { GetRuleInput } from "./types/GetRuleInput";
import { GetRuleOutput } from "./types/GetRuleOutput";
import { GetSampledRequestsInput } from "./types/GetSampledRequestsInput";
import { GetSampledRequestsOutput } from "./types/GetSampledRequestsOutput";
import { GetSizeConstraintSetInput } from "./types/GetSizeConstraintSetInput";
import { GetSizeConstraintSetOutput } from "./types/GetSizeConstraintSetOutput";
import { GetSqlInjectionMatchSetInput } from "./types/GetSqlInjectionMatchSetInput";
import { GetSqlInjectionMatchSetOutput } from "./types/GetSqlInjectionMatchSetOutput";
import { GetWebACLInput } from "./types/GetWebACLInput";
import { GetWebACLOutput } from "./types/GetWebACLOutput";
import { GetXssMatchSetInput } from "./types/GetXssMatchSetInput";
import { GetXssMatchSetOutput } from "./types/GetXssMatchSetOutput";
import { ListActivatedRulesInRuleGroupInput } from "./types/ListActivatedRulesInRuleGroupInput";
import { ListActivatedRulesInRuleGroupOutput } from "./types/ListActivatedRulesInRuleGroupOutput";
import { ListByteMatchSetsInput } from "./types/ListByteMatchSetsInput";
import { ListByteMatchSetsOutput } from "./types/ListByteMatchSetsOutput";
import { ListGeoMatchSetsInput } from "./types/ListGeoMatchSetsInput";
import { ListGeoMatchSetsOutput } from "./types/ListGeoMatchSetsOutput";
import { ListIPSetsInput } from "./types/ListIPSetsInput";
import { ListIPSetsOutput } from "./types/ListIPSetsOutput";
import { ListLoggingConfigurationsInput } from "./types/ListLoggingConfigurationsInput";
import { ListLoggingConfigurationsOutput } from "./types/ListLoggingConfigurationsOutput";
import { ListRateBasedRulesInput } from "./types/ListRateBasedRulesInput";
import { ListRateBasedRulesOutput } from "./types/ListRateBasedRulesOutput";
import { ListRegexMatchSetsInput } from "./types/ListRegexMatchSetsInput";
import { ListRegexMatchSetsOutput } from "./types/ListRegexMatchSetsOutput";
import { ListRegexPatternSetsInput } from "./types/ListRegexPatternSetsInput";
import { ListRegexPatternSetsOutput } from "./types/ListRegexPatternSetsOutput";
import { ListRuleGroupsInput } from "./types/ListRuleGroupsInput";
import { ListRuleGroupsOutput } from "./types/ListRuleGroupsOutput";
import { ListRulesInput } from "./types/ListRulesInput";
import { ListRulesOutput } from "./types/ListRulesOutput";
import { ListSizeConstraintSetsInput } from "./types/ListSizeConstraintSetsInput";
import { ListSizeConstraintSetsOutput } from "./types/ListSizeConstraintSetsOutput";
import { ListSqlInjectionMatchSetsInput } from "./types/ListSqlInjectionMatchSetsInput";
import { ListSqlInjectionMatchSetsOutput } from "./types/ListSqlInjectionMatchSetsOutput";
import { ListSubscribedRuleGroupsInput } from "./types/ListSubscribedRuleGroupsInput";
import { ListSubscribedRuleGroupsOutput } from "./types/ListSubscribedRuleGroupsOutput";
import { ListTagsForResourceInput } from "./types/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./types/ListTagsForResourceOutput";
import { ListWebACLsInput } from "./types/ListWebACLsInput";
import { ListWebACLsOutput } from "./types/ListWebACLsOutput";
import { ListXssMatchSetsInput } from "./types/ListXssMatchSetsInput";
import { ListXssMatchSetsOutput } from "./types/ListXssMatchSetsOutput";
import { PutLoggingConfigurationInput } from "./types/PutLoggingConfigurationInput";
import { PutLoggingConfigurationOutput } from "./types/PutLoggingConfigurationOutput";
import { PutPermissionPolicyInput } from "./types/PutPermissionPolicyInput";
import { PutPermissionPolicyOutput } from "./types/PutPermissionPolicyOutput";
import { TagResourceInput } from "./types/TagResourceInput";
import { TagResourceOutput } from "./types/TagResourceOutput";
import { UntagResourceInput } from "./types/UntagResourceInput";
import { UntagResourceOutput } from "./types/UntagResourceOutput";
import { UpdateByteMatchSetInput } from "./types/UpdateByteMatchSetInput";
import { UpdateByteMatchSetOutput } from "./types/UpdateByteMatchSetOutput";
import { UpdateGeoMatchSetInput } from "./types/UpdateGeoMatchSetInput";
import { UpdateGeoMatchSetOutput } from "./types/UpdateGeoMatchSetOutput";
import { UpdateIPSetInput } from "./types/UpdateIPSetInput";
import { UpdateIPSetOutput } from "./types/UpdateIPSetOutput";
import { UpdateRateBasedRuleInput } from "./types/UpdateRateBasedRuleInput";
import { UpdateRateBasedRuleOutput } from "./types/UpdateRateBasedRuleOutput";
import { UpdateRegexMatchSetInput } from "./types/UpdateRegexMatchSetInput";
import { UpdateRegexMatchSetOutput } from "./types/UpdateRegexMatchSetOutput";
import { UpdateRegexPatternSetInput } from "./types/UpdateRegexPatternSetInput";
import { UpdateRegexPatternSetOutput } from "./types/UpdateRegexPatternSetOutput";
import { UpdateRuleGroupInput } from "./types/UpdateRuleGroupInput";
import { UpdateRuleGroupOutput } from "./types/UpdateRuleGroupOutput";
import { UpdateRuleInput } from "./types/UpdateRuleInput";
import { UpdateRuleOutput } from "./types/UpdateRuleOutput";
import { UpdateSizeConstraintSetInput } from "./types/UpdateSizeConstraintSetInput";
import { UpdateSizeConstraintSetOutput } from "./types/UpdateSizeConstraintSetOutput";
import { UpdateSqlInjectionMatchSetInput } from "./types/UpdateSqlInjectionMatchSetInput";
import { UpdateSqlInjectionMatchSetOutput } from "./types/UpdateSqlInjectionMatchSetOutput";
import { UpdateWebACLInput } from "./types/UpdateWebACLInput";
import { UpdateWebACLOutput } from "./types/UpdateWebACLOutput";
import { UpdateXssMatchSetInput } from "./types/UpdateXssMatchSetInput";
import { UpdateXssMatchSetOutput } from "./types/UpdateXssMatchSetOutput";
import { WAFBadRequestException } from "./types/WAFBadRequestException";
import { WAFDisallowedNameException } from "./types/WAFDisallowedNameException";
import { WAFInternalErrorException } from "./types/WAFInternalErrorException";
import { WAFInvalidAccountException } from "./types/WAFInvalidAccountException";
import { WAFInvalidOperationException } from "./types/WAFInvalidOperationException";
import { WAFInvalidParameterException } from "./types/WAFInvalidParameterException";
import { WAFInvalidPermissionPolicyException } from "./types/WAFInvalidPermissionPolicyException";
import { WAFInvalidRegexPatternException } from "./types/WAFInvalidRegexPatternException";
import { WAFLimitsExceededException } from "./types/WAFLimitsExceededException";
import { WAFNonEmptyEntityException } from "./types/WAFNonEmptyEntityException";
import { WAFNonexistentContainerException } from "./types/WAFNonexistentContainerException";
import { WAFNonexistentItemException } from "./types/WAFNonexistentItemException";
import { WAFReferencedItemException } from "./types/WAFReferencedItemException";
import { WAFServiceLinkedRoleErrorException } from "./types/WAFServiceLinkedRoleErrorException";
import { WAFStaleDataException } from "./types/WAFStaleDataException";
import { WAFSubscriptionNotFoundException } from "./types/WAFSubscriptionNotFoundException";
import { WAFTagOperationException } from "./types/WAFTagOperationException";
import { WAFTagOperationInternalErrorException } from "./types/WAFTagOperationInternalErrorException";
import { CreateByteMatchSetCommand } from "./commands/CreateByteMatchSetCommand";
import { CreateGeoMatchSetCommand } from "./commands/CreateGeoMatchSetCommand";
import { CreateIPSetCommand } from "./commands/CreateIPSetCommand";
import { CreateRateBasedRuleCommand } from "./commands/CreateRateBasedRuleCommand";
import { CreateRegexMatchSetCommand } from "./commands/CreateRegexMatchSetCommand";
import { CreateRegexPatternSetCommand } from "./commands/CreateRegexPatternSetCommand";
import { CreateRuleCommand } from "./commands/CreateRuleCommand";
import { CreateRuleGroupCommand } from "./commands/CreateRuleGroupCommand";
import { CreateSizeConstraintSetCommand } from "./commands/CreateSizeConstraintSetCommand";
import { CreateSqlInjectionMatchSetCommand } from "./commands/CreateSqlInjectionMatchSetCommand";
import { CreateWebACLCommand } from "./commands/CreateWebACLCommand";
import { CreateXssMatchSetCommand } from "./commands/CreateXssMatchSetCommand";
import { DeleteByteMatchSetCommand } from "./commands/DeleteByteMatchSetCommand";
import { DeleteGeoMatchSetCommand } from "./commands/DeleteGeoMatchSetCommand";
import { DeleteIPSetCommand } from "./commands/DeleteIPSetCommand";
import { DeleteLoggingConfigurationCommand } from "./commands/DeleteLoggingConfigurationCommand";
import { DeletePermissionPolicyCommand } from "./commands/DeletePermissionPolicyCommand";
import { DeleteRateBasedRuleCommand } from "./commands/DeleteRateBasedRuleCommand";
import { DeleteRegexMatchSetCommand } from "./commands/DeleteRegexMatchSetCommand";
import { DeleteRegexPatternSetCommand } from "./commands/DeleteRegexPatternSetCommand";
import { DeleteRuleCommand } from "./commands/DeleteRuleCommand";
import { DeleteRuleGroupCommand } from "./commands/DeleteRuleGroupCommand";
import { DeleteSizeConstraintSetCommand } from "./commands/DeleteSizeConstraintSetCommand";
import { DeleteSqlInjectionMatchSetCommand } from "./commands/DeleteSqlInjectionMatchSetCommand";
import { DeleteWebACLCommand } from "./commands/DeleteWebACLCommand";
import { DeleteXssMatchSetCommand } from "./commands/DeleteXssMatchSetCommand";
import { GetByteMatchSetCommand } from "./commands/GetByteMatchSetCommand";
import { GetChangeTokenCommand } from "./commands/GetChangeTokenCommand";
import { GetChangeTokenStatusCommand } from "./commands/GetChangeTokenStatusCommand";
import { GetGeoMatchSetCommand } from "./commands/GetGeoMatchSetCommand";
import { GetIPSetCommand } from "./commands/GetIPSetCommand";
import { GetLoggingConfigurationCommand } from "./commands/GetLoggingConfigurationCommand";
import { GetPermissionPolicyCommand } from "./commands/GetPermissionPolicyCommand";
import { GetRateBasedRuleCommand } from "./commands/GetRateBasedRuleCommand";
import { GetRateBasedRuleManagedKeysCommand } from "./commands/GetRateBasedRuleManagedKeysCommand";
import { GetRegexMatchSetCommand } from "./commands/GetRegexMatchSetCommand";
import { GetRegexPatternSetCommand } from "./commands/GetRegexPatternSetCommand";
import { GetRuleCommand } from "./commands/GetRuleCommand";
import { GetRuleGroupCommand } from "./commands/GetRuleGroupCommand";
import { GetSampledRequestsCommand } from "./commands/GetSampledRequestsCommand";
import { GetSizeConstraintSetCommand } from "./commands/GetSizeConstraintSetCommand";
import { GetSqlInjectionMatchSetCommand } from "./commands/GetSqlInjectionMatchSetCommand";
import { GetWebACLCommand } from "./commands/GetWebACLCommand";
import { GetXssMatchSetCommand } from "./commands/GetXssMatchSetCommand";
import { ListActivatedRulesInRuleGroupCommand } from "./commands/ListActivatedRulesInRuleGroupCommand";
import { ListByteMatchSetsCommand } from "./commands/ListByteMatchSetsCommand";
import { ListGeoMatchSetsCommand } from "./commands/ListGeoMatchSetsCommand";
import { ListIPSetsCommand } from "./commands/ListIPSetsCommand";
import { ListLoggingConfigurationsCommand } from "./commands/ListLoggingConfigurationsCommand";
import { ListRateBasedRulesCommand } from "./commands/ListRateBasedRulesCommand";
import { ListRegexMatchSetsCommand } from "./commands/ListRegexMatchSetsCommand";
import { ListRegexPatternSetsCommand } from "./commands/ListRegexPatternSetsCommand";
import { ListRuleGroupsCommand } from "./commands/ListRuleGroupsCommand";
import { ListRulesCommand } from "./commands/ListRulesCommand";
import { ListSizeConstraintSetsCommand } from "./commands/ListSizeConstraintSetsCommand";
import { ListSqlInjectionMatchSetsCommand } from "./commands/ListSqlInjectionMatchSetsCommand";
import { ListSubscribedRuleGroupsCommand } from "./commands/ListSubscribedRuleGroupsCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { ListWebACLsCommand } from "./commands/ListWebACLsCommand";
import { ListXssMatchSetsCommand } from "./commands/ListXssMatchSetsCommand";
import { PutLoggingConfigurationCommand } from "./commands/PutLoggingConfigurationCommand";
import { PutPermissionPolicyCommand } from "./commands/PutPermissionPolicyCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdateByteMatchSetCommand } from "./commands/UpdateByteMatchSetCommand";
import { UpdateGeoMatchSetCommand } from "./commands/UpdateGeoMatchSetCommand";
import { UpdateIPSetCommand } from "./commands/UpdateIPSetCommand";
import { UpdateRateBasedRuleCommand } from "./commands/UpdateRateBasedRuleCommand";
import { UpdateRegexMatchSetCommand } from "./commands/UpdateRegexMatchSetCommand";
import { UpdateRegexPatternSetCommand } from "./commands/UpdateRegexPatternSetCommand";
import { UpdateRuleCommand } from "./commands/UpdateRuleCommand";
import { UpdateRuleGroupCommand } from "./commands/UpdateRuleGroupCommand";
import { UpdateSizeConstraintSetCommand } from "./commands/UpdateSizeConstraintSetCommand";
import { UpdateSqlInjectionMatchSetCommand } from "./commands/UpdateSqlInjectionMatchSetCommand";
import { UpdateWebACLCommand } from "./commands/UpdateWebACLCommand";
import { UpdateXssMatchSetCommand } from "./commands/UpdateXssMatchSetCommand";

export class WAF extends WAFClient {
  /**
   * <p>Creates a <code>ByteMatchSet</code>. You then use <a>UpdateByteMatchSet</a> to identify the part of a web request that you want AWS WAF to inspect, such as the values of the <code>User-Agent</code> header or the query string. For example, you can create a <code>ByteMatchSet</code> that matches any requests with <code>User-Agent</code> headers that contain the string <code>BadBot</code>. You can then configure AWS WAF to reject those requests.</p> <p>To create and configure a <code>ByteMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateByteMatchSet</code> request.</p> </li> <li> <p>Submit a <code>CreateByteMatchSet</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <code>UpdateByteMatchSet</code> request.</p> </li> <li> <p>Submit an <a>UpdateByteMatchSet</a> request to specify the part of the request that you want AWS WAF to inspect (for example, the header or the URI) and the value that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFDisallowedNameException} <p>The name specified is invalid.</p>
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFInvalidAccountException} <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
   *   - {WAFInvalidParameterException} <p>The operation failed because AWS WAF didn't recognize a parameter in the request. For example:</p> <ul> <li> <p>You specified an invalid parameter name.</p> </li> <li> <p>You specified an invalid value.</p> </li> <li> <p>You tried to update an object (<code>ByteMatchSet</code>, <code>IPSet</code>, <code>Rule</code>, or <code>WebACL</code>) using an action other than <code>INSERT</code> or <code>DELETE</code>.</p> </li> <li> <p>You tried to create a <code>WebACL</code> with a <code>DefaultAction</code> <code>Type</code> other than <code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p> </li> <li> <p>You tried to create a <code>RateBasedRule</code> with a <code>RateKey</code> value other than <code>IP</code>.</p> </li> <li> <p>You tried to update a <code>WebACL</code> with a <code>WafAction</code> <code>Type</code> other than <code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p> </li> <li> <p>You tried to update a <code>ByteMatchSet</code> with a <code>FieldToMatch</code> <code>Type</code> other than HEADER, METHOD, QUERY_STRING, URI, or BODY.</p> </li> <li> <p>You tried to update a <code>ByteMatchSet</code> with a <code>Field</code> of <code>HEADER</code> but no value for <code>Data</code>.</p> </li> <li> <p>Your request references an ARN that is malformed, or corresponds to a resource with which a web ACL cannot be associated.</p> </li> </ul>
   *   - {WAFStaleDataException} <p>The operation failed because you tried to create, update, or delete an object by using a change token that has already been used.</p>
   *   - {WAFLimitsExceededException} <p>The operation exceeds a resource limit, for example, the maximum number of <code>WebACL</code> objects that you can create for an AWS account. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">Limits</a> in the <i>AWS WAF Developer Guide</i>.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createByteMatchSet(
    args: CreateByteMatchSetInput
  ): Promise<CreateByteMatchSetOutput>;
  public createByteMatchSet(
    args: CreateByteMatchSetInput,
    cb: (err: any, data?: CreateByteMatchSetOutput) => void
  ): void;
  public createByteMatchSet(
    args: CreateByteMatchSetInput,
    cb?: (err: any, data?: CreateByteMatchSetOutput) => void
  ): Promise<CreateByteMatchSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateByteMatchSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an <a>GeoMatchSet</a>, which you use to specify which web requests you want to allow or block based on the country that the requests originate from. For example, if you're receiving a lot of requests from one or more countries and you want to block the requests, you can create an <code>GeoMatchSet</code> that contains those countries and then configure AWS WAF to block the requests. </p> <p>To create and configure a <code>GeoMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateGeoMatchSet</code> request.</p> </li> <li> <p>Submit a <code>CreateGeoMatchSet</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateGeoMatchSet</a> request.</p> </li> <li> <p>Submit an <code>UpdateGeoMatchSetSet</code> request to specify the countries that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFStaleDataException} <p>The operation failed because you tried to create, update, or delete an object by using a change token that has already been used.</p>
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFInvalidAccountException} <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
   *   - {WAFDisallowedNameException} <p>The name specified is invalid.</p>
   *   - {WAFInvalidParameterException} <p>The operation failed because AWS WAF didn't recognize a parameter in the request. For example:</p> <ul> <li> <p>You specified an invalid parameter name.</p> </li> <li> <p>You specified an invalid value.</p> </li> <li> <p>You tried to update an object (<code>ByteMatchSet</code>, <code>IPSet</code>, <code>Rule</code>, or <code>WebACL</code>) using an action other than <code>INSERT</code> or <code>DELETE</code>.</p> </li> <li> <p>You tried to create a <code>WebACL</code> with a <code>DefaultAction</code> <code>Type</code> other than <code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p> </li> <li> <p>You tried to create a <code>RateBasedRule</code> with a <code>RateKey</code> value other than <code>IP</code>.</p> </li> <li> <p>You tried to update a <code>WebACL</code> with a <code>WafAction</code> <code>Type</code> other than <code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p> </li> <li> <p>You tried to update a <code>ByteMatchSet</code> with a <code>FieldToMatch</code> <code>Type</code> other than HEADER, METHOD, QUERY_STRING, URI, or BODY.</p> </li> <li> <p>You tried to update a <code>ByteMatchSet</code> with a <code>Field</code> of <code>HEADER</code> but no value for <code>Data</code>.</p> </li> <li> <p>Your request references an ARN that is malformed, or corresponds to a resource with which a web ACL cannot be associated.</p> </li> </ul>
   *   - {WAFLimitsExceededException} <p>The operation exceeds a resource limit, for example, the maximum number of <code>WebACL</code> objects that you can create for an AWS account. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">Limits</a> in the <i>AWS WAF Developer Guide</i>.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createGeoMatchSet(
    args: CreateGeoMatchSetInput
  ): Promise<CreateGeoMatchSetOutput>;
  public createGeoMatchSet(
    args: CreateGeoMatchSetInput,
    cb: (err: any, data?: CreateGeoMatchSetOutput) => void
  ): void;
  public createGeoMatchSet(
    args: CreateGeoMatchSetInput,
    cb?: (err: any, data?: CreateGeoMatchSetOutput) => void
  ): Promise<CreateGeoMatchSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateGeoMatchSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an <a>IPSet</a>, which you use to specify which web requests that you want to allow or block based on the IP addresses that the requests originate from. For example, if you're receiving a lot of requests from one or more individual IP addresses or one or more ranges of IP addresses and you want to block the requests, you can create an <code>IPSet</code> that contains those IP addresses and then configure AWS WAF to block the requests. </p> <p>To create and configure an <code>IPSet</code>, perform the following steps:</p> <ol> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateIPSet</code> request.</p> </li> <li> <p>Submit a <code>CreateIPSet</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateIPSet</a> request.</p> </li> <li> <p>Submit an <code>UpdateIPSet</code> request to specify the IP addresses that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFStaleDataException} <p>The operation failed because you tried to create, update, or delete an object by using a change token that has already been used.</p>
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFInvalidAccountException} <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
   *   - {WAFDisallowedNameException} <p>The name specified is invalid.</p>
   *   - {WAFInvalidParameterException} <p>The operation failed because AWS WAF didn't recognize a parameter in the request. For example:</p> <ul> <li> <p>You specified an invalid parameter name.</p> </li> <li> <p>You specified an invalid value.</p> </li> <li> <p>You tried to update an object (<code>ByteMatchSet</code>, <code>IPSet</code>, <code>Rule</code>, or <code>WebACL</code>) using an action other than <code>INSERT</code> or <code>DELETE</code>.</p> </li> <li> <p>You tried to create a <code>WebACL</code> with a <code>DefaultAction</code> <code>Type</code> other than <code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p> </li> <li> <p>You tried to create a <code>RateBasedRule</code> with a <code>RateKey</code> value other than <code>IP</code>.</p> </li> <li> <p>You tried to update a <code>WebACL</code> with a <code>WafAction</code> <code>Type</code> other than <code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p> </li> <li> <p>You tried to update a <code>ByteMatchSet</code> with a <code>FieldToMatch</code> <code>Type</code> other than HEADER, METHOD, QUERY_STRING, URI, or BODY.</p> </li> <li> <p>You tried to update a <code>ByteMatchSet</code> with a <code>Field</code> of <code>HEADER</code> but no value for <code>Data</code>.</p> </li> <li> <p>Your request references an ARN that is malformed, or corresponds to a resource with which a web ACL cannot be associated.</p> </li> </ul>
   *   - {WAFLimitsExceededException} <p>The operation exceeds a resource limit, for example, the maximum number of <code>WebACL</code> objects that you can create for an AWS account. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">Limits</a> in the <i>AWS WAF Developer Guide</i>.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createIPSet(args: CreateIPSetInput): Promise<CreateIPSetOutput>;
  public createIPSet(
    args: CreateIPSetInput,
    cb: (err: any, data?: CreateIPSetOutput) => void
  ): void;
  public createIPSet(
    args: CreateIPSetInput,
    cb?: (err: any, data?: CreateIPSetOutput) => void
  ): Promise<CreateIPSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateIPSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a <a>RateBasedRule</a>. The <code>RateBasedRule</code> contains a <code>RateLimit</code>, which specifies the maximum number of requests that AWS WAF allows from a specified IP address in a five-minute period. The <code>RateBasedRule</code> also contains the <code>IPSet</code> objects, <code>ByteMatchSet</code> objects, and other predicates that identify the requests that you want to count or block if these requests exceed the <code>RateLimit</code>.</p> <p>If you add more than one predicate to a <code>RateBasedRule</code>, a request not only must exceed the <code>RateLimit</code>, but it also must match all the specifications to be counted or blocked. For example, suppose you add the following to a <code>RateBasedRule</code>:</p> <ul> <li> <p>An <code>IPSet</code> that matches the IP address <code>192.0.2.44/32</code> </p> </li> <li> <p>A <code>ByteMatchSet</code> that matches <code>BadBot</code> in the <code>User-Agent</code> header</p> </li> </ul> <p>Further, you specify a <code>RateLimit</code> of 15,000.</p> <p>You then add the <code>RateBasedRule</code> to a <code>WebACL</code> and specify that you want to block requests that meet the conditions in the rule. For a request to be blocked, it must come from the IP address 192.0.2.44 <i>and</i> the <code>User-Agent</code> header in the request must contain the value <code>BadBot</code>. Further, requests that match these two conditions must be received at a rate of more than 15,000 requests every five minutes. If both conditions are met and the rate is exceeded, AWS WAF blocks the requests. If the rate drops below 15,000 for a five-minute period, AWS WAF no longer blocks the requests.</p> <p>As a second example, suppose you want to limit requests to a particular page on your site. To do this, you could add the following to a <code>RateBasedRule</code>:</p> <ul> <li> <p>A <code>ByteMatchSet</code> with <code>FieldToMatch</code> of <code>URI</code> </p> </li> <li> <p>A <code>PositionalConstraint</code> of <code>STARTS_WITH</code> </p> </li> <li> <p>A <code>TargetString</code> of <code>login</code> </p> </li> </ul> <p>Further, you specify a <code>RateLimit</code> of 15,000.</p> <p>By adding this <code>RateBasedRule</code> to a <code>WebACL</code>, you could limit requests to your login page without affecting the rest of your site.</p> <p>To create and configure a <code>RateBasedRule</code>, perform the following steps:</p> <ol> <li> <p>Create and update the predicates that you want to include in the rule. For more information, see <a>CreateByteMatchSet</a>, <a>CreateIPSet</a>, and <a>CreateSqlInjectionMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateRule</code> request.</p> </li> <li> <p>Submit a <code>CreateRateBasedRule</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateRule</a> request.</p> </li> <li> <p>Submit an <code>UpdateRateBasedRule</code> request to specify the predicates that you want to include in the rule.</p> </li> <li> <p>Create and update a <code>WebACL</code> that contains the <code>RateBasedRule</code>. For more information, see <a>CreateWebACL</a>.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFStaleDataException} <p>The operation failed because you tried to create, update, or delete an object by using a change token that has already been used.</p>
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFDisallowedNameException} <p>The name specified is invalid.</p>
   *   - {WAFInvalidParameterException} <p>The operation failed because AWS WAF didn't recognize a parameter in the request. For example:</p> <ul> <li> <p>You specified an invalid parameter name.</p> </li> <li> <p>You specified an invalid value.</p> </li> <li> <p>You tried to update an object (<code>ByteMatchSet</code>, <code>IPSet</code>, <code>Rule</code>, or <code>WebACL</code>) using an action other than <code>INSERT</code> or <code>DELETE</code>.</p> </li> <li> <p>You tried to create a <code>WebACL</code> with a <code>DefaultAction</code> <code>Type</code> other than <code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p> </li> <li> <p>You tried to create a <code>RateBasedRule</code> with a <code>RateKey</code> value other than <code>IP</code>.</p> </li> <li> <p>You tried to update a <code>WebACL</code> with a <code>WafAction</code> <code>Type</code> other than <code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p> </li> <li> <p>You tried to update a <code>ByteMatchSet</code> with a <code>FieldToMatch</code> <code>Type</code> other than HEADER, METHOD, QUERY_STRING, URI, or BODY.</p> </li> <li> <p>You tried to update a <code>ByteMatchSet</code> with a <code>Field</code> of <code>HEADER</code> but no value for <code>Data</code>.</p> </li> <li> <p>Your request references an ARN that is malformed, or corresponds to a resource with which a web ACL cannot be associated.</p> </li> </ul>
   *   - {WAFLimitsExceededException} <p>The operation exceeds a resource limit, for example, the maximum number of <code>WebACL</code> objects that you can create for an AWS account. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">Limits</a> in the <i>AWS WAF Developer Guide</i>.</p>
   *   - {WAFTagOperationException} WAFTagOperationException shape
   *   - {WAFTagOperationInternalErrorException} WAFTagOperationInternalErrorException shape
   *   - {WAFBadRequestException} WAFBadRequestException shape
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createRateBasedRule(
    args: CreateRateBasedRuleInput
  ): Promise<CreateRateBasedRuleOutput>;
  public createRateBasedRule(
    args: CreateRateBasedRuleInput,
    cb: (err: any, data?: CreateRateBasedRuleOutput) => void
  ): void;
  public createRateBasedRule(
    args: CreateRateBasedRuleInput,
    cb?: (err: any, data?: CreateRateBasedRuleOutput) => void
  ): Promise<CreateRateBasedRuleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateRateBasedRuleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a <a>RegexMatchSet</a>. You then use <a>UpdateRegexMatchSet</a> to identify the part of a web request that you want AWS WAF to inspect, such as the values of the <code>User-Agent</code> header or the query string. For example, you can create a <code>RegexMatchSet</code> that contains a <code>RegexMatchTuple</code> that looks for any requests with <code>User-Agent</code> headers that match a <code>RegexPatternSet</code> with pattern <code>B[a@]dB[o0]t</code>. You can then configure AWS WAF to reject those requests.</p> <p>To create and configure a <code>RegexMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateRegexMatchSet</code> request.</p> </li> <li> <p>Submit a <code>CreateRegexMatchSet</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <code>UpdateRegexMatchSet</code> request.</p> </li> <li> <p>Submit an <a>UpdateRegexMatchSet</a> request to specify the part of the request that you want AWS WAF to inspect (for example, the header or the URI) and the value, using a <code>RegexPatternSet</code>, that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFStaleDataException} <p>The operation failed because you tried to create, update, or delete an object by using a change token that has already been used.</p>
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFDisallowedNameException} <p>The name specified is invalid.</p>
   *   - {WAFLimitsExceededException} <p>The operation exceeds a resource limit, for example, the maximum number of <code>WebACL</code> objects that you can create for an AWS account. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">Limits</a> in the <i>AWS WAF Developer Guide</i>.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createRegexMatchSet(
    args: CreateRegexMatchSetInput
  ): Promise<CreateRegexMatchSetOutput>;
  public createRegexMatchSet(
    args: CreateRegexMatchSetInput,
    cb: (err: any, data?: CreateRegexMatchSetOutput) => void
  ): void;
  public createRegexMatchSet(
    args: CreateRegexMatchSetInput,
    cb?: (err: any, data?: CreateRegexMatchSetOutput) => void
  ): Promise<CreateRegexMatchSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateRegexMatchSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a <code>RegexPatternSet</code>. You then use <a>UpdateRegexPatternSet</a> to specify the regular expression (regex) pattern that you want AWS WAF to search for, such as <code>B[a@]dB[o0]t</code>. You can then configure AWS WAF to reject those requests.</p> <p>To create and configure a <code>RegexPatternSet</code>, perform the following steps:</p> <ol> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateRegexPatternSet</code> request.</p> </li> <li> <p>Submit a <code>CreateRegexPatternSet</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <code>UpdateRegexPatternSet</code> request.</p> </li> <li> <p>Submit an <a>UpdateRegexPatternSet</a> request to specify the string that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFStaleDataException} <p>The operation failed because you tried to create, update, or delete an object by using a change token that has already been used.</p>
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFDisallowedNameException} <p>The name specified is invalid.</p>
   *   - {WAFLimitsExceededException} <p>The operation exceeds a resource limit, for example, the maximum number of <code>WebACL</code> objects that you can create for an AWS account. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">Limits</a> in the <i>AWS WAF Developer Guide</i>.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createRegexPatternSet(
    args: CreateRegexPatternSetInput
  ): Promise<CreateRegexPatternSetOutput>;
  public createRegexPatternSet(
    args: CreateRegexPatternSetInput,
    cb: (err: any, data?: CreateRegexPatternSetOutput) => void
  ): void;
  public createRegexPatternSet(
    args: CreateRegexPatternSetInput,
    cb?: (err: any, data?: CreateRegexPatternSetOutput) => void
  ): Promise<CreateRegexPatternSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateRegexPatternSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a <code>Rule</code>, which contains the <code>IPSet</code> objects, <code>ByteMatchSet</code> objects, and other predicates that identify the requests that you want to block. If you add more than one predicate to a <code>Rule</code>, a request must match all of the specifications to be allowed or blocked. For example, suppose that you add the following to a <code>Rule</code>:</p> <ul> <li> <p>An <code>IPSet</code> that matches the IP address <code>192.0.2.44/32</code> </p> </li> <li> <p>A <code>ByteMatchSet</code> that matches <code>BadBot</code> in the <code>User-Agent</code> header</p> </li> </ul> <p>You then add the <code>Rule</code> to a <code>WebACL</code> and specify that you want to blocks requests that satisfy the <code>Rule</code>. For a request to be blocked, it must come from the IP address 192.0.2.44 <i>and</i> the <code>User-Agent</code> header in the request must contain the value <code>BadBot</code>.</p> <p>To create and configure a <code>Rule</code>, perform the following steps:</p> <ol> <li> <p>Create and update the predicates that you want to include in the <code>Rule</code>. For more information, see <a>CreateByteMatchSet</a>, <a>CreateIPSet</a>, and <a>CreateSqlInjectionMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateRule</code> request.</p> </li> <li> <p>Submit a <code>CreateRule</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateRule</a> request.</p> </li> <li> <p>Submit an <code>UpdateRule</code> request to specify the predicates that you want to include in the <code>Rule</code>.</p> </li> <li> <p>Create and update a <code>WebACL</code> that contains the <code>Rule</code>. For more information, see <a>CreateWebACL</a>.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFStaleDataException} <p>The operation failed because you tried to create, update, or delete an object by using a change token that has already been used.</p>
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFDisallowedNameException} <p>The name specified is invalid.</p>
   *   - {WAFInvalidParameterException} <p>The operation failed because AWS WAF didn't recognize a parameter in the request. For example:</p> <ul> <li> <p>You specified an invalid parameter name.</p> </li> <li> <p>You specified an invalid value.</p> </li> <li> <p>You tried to update an object (<code>ByteMatchSet</code>, <code>IPSet</code>, <code>Rule</code>, or <code>WebACL</code>) using an action other than <code>INSERT</code> or <code>DELETE</code>.</p> </li> <li> <p>You tried to create a <code>WebACL</code> with a <code>DefaultAction</code> <code>Type</code> other than <code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p> </li> <li> <p>You tried to create a <code>RateBasedRule</code> with a <code>RateKey</code> value other than <code>IP</code>.</p> </li> <li> <p>You tried to update a <code>WebACL</code> with a <code>WafAction</code> <code>Type</code> other than <code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p> </li> <li> <p>You tried to update a <code>ByteMatchSet</code> with a <code>FieldToMatch</code> <code>Type</code> other than HEADER, METHOD, QUERY_STRING, URI, or BODY.</p> </li> <li> <p>You tried to update a <code>ByteMatchSet</code> with a <code>Field</code> of <code>HEADER</code> but no value for <code>Data</code>.</p> </li> <li> <p>Your request references an ARN that is malformed, or corresponds to a resource with which a web ACL cannot be associated.</p> </li> </ul>
   *   - {WAFLimitsExceededException} <p>The operation exceeds a resource limit, for example, the maximum number of <code>WebACL</code> objects that you can create for an AWS account. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">Limits</a> in the <i>AWS WAF Developer Guide</i>.</p>
   *   - {WAFTagOperationException} WAFTagOperationException shape
   *   - {WAFTagOperationInternalErrorException} WAFTagOperationInternalErrorException shape
   *   - {WAFBadRequestException} WAFBadRequestException shape
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createRule(args: CreateRuleInput): Promise<CreateRuleOutput>;
  public createRule(
    args: CreateRuleInput,
    cb: (err: any, data?: CreateRuleOutput) => void
  ): void;
  public createRule(
    args: CreateRuleInput,
    cb?: (err: any, data?: CreateRuleOutput) => void
  ): Promise<CreateRuleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateRuleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a <code>RuleGroup</code>. A rule group is a collection of predefined rules that you add to a web ACL. You use <a>UpdateRuleGroup</a> to add rules to the rule group.</p> <p>Rule groups are subject to the following limits:</p> <ul> <li> <p>Three rule groups per account. You can request an increase to this limit by contacting customer support.</p> </li> <li> <p>One rule group per web ACL.</p> </li> <li> <p>Ten rules per rule group.</p> </li> </ul> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFStaleDataException} <p>The operation failed because you tried to create, update, or delete an object by using a change token that has already been used.</p>
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFDisallowedNameException} <p>The name specified is invalid.</p>
   *   - {WAFLimitsExceededException} <p>The operation exceeds a resource limit, for example, the maximum number of <code>WebACL</code> objects that you can create for an AWS account. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">Limits</a> in the <i>AWS WAF Developer Guide</i>.</p>
   *   - {WAFTagOperationException} WAFTagOperationException shape
   *   - {WAFTagOperationInternalErrorException} WAFTagOperationInternalErrorException shape
   *   - {WAFBadRequestException} WAFBadRequestException shape
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createRuleGroup(
    args: CreateRuleGroupInput
  ): Promise<CreateRuleGroupOutput>;
  public createRuleGroup(
    args: CreateRuleGroupInput,
    cb: (err: any, data?: CreateRuleGroupOutput) => void
  ): void;
  public createRuleGroup(
    args: CreateRuleGroupInput,
    cb?: (err: any, data?: CreateRuleGroupOutput) => void
  ): Promise<CreateRuleGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateRuleGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a <code>SizeConstraintSet</code>. You then use <a>UpdateSizeConstraintSet</a> to identify the part of a web request that you want AWS WAF to check for length, such as the length of the <code>User-Agent</code> header or the length of the query string. For example, you can create a <code>SizeConstraintSet</code> that matches any requests that have a query string that is longer than 100 bytes. You can then configure AWS WAF to reject those requests.</p> <p>To create and configure a <code>SizeConstraintSet</code>, perform the following steps:</p> <ol> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateSizeConstraintSet</code> request.</p> </li> <li> <p>Submit a <code>CreateSizeConstraintSet</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <code>UpdateSizeConstraintSet</code> request.</p> </li> <li> <p>Submit an <a>UpdateSizeConstraintSet</a> request to specify the part of the request that you want AWS WAF to inspect (for example, the header or the URI) and the value that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFStaleDataException} <p>The operation failed because you tried to create, update, or delete an object by using a change token that has already been used.</p>
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFInvalidAccountException} <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
   *   - {WAFDisallowedNameException} <p>The name specified is invalid.</p>
   *   - {WAFInvalidParameterException} <p>The operation failed because AWS WAF didn't recognize a parameter in the request. For example:</p> <ul> <li> <p>You specified an invalid parameter name.</p> </li> <li> <p>You specified an invalid value.</p> </li> <li> <p>You tried to update an object (<code>ByteMatchSet</code>, <code>IPSet</code>, <code>Rule</code>, or <code>WebACL</code>) using an action other than <code>INSERT</code> or <code>DELETE</code>.</p> </li> <li> <p>You tried to create a <code>WebACL</code> with a <code>DefaultAction</code> <code>Type</code> other than <code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p> </li> <li> <p>You tried to create a <code>RateBasedRule</code> with a <code>RateKey</code> value other than <code>IP</code>.</p> </li> <li> <p>You tried to update a <code>WebACL</code> with a <code>WafAction</code> <code>Type</code> other than <code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p> </li> <li> <p>You tried to update a <code>ByteMatchSet</code> with a <code>FieldToMatch</code> <code>Type</code> other than HEADER, METHOD, QUERY_STRING, URI, or BODY.</p> </li> <li> <p>You tried to update a <code>ByteMatchSet</code> with a <code>Field</code> of <code>HEADER</code> but no value for <code>Data</code>.</p> </li> <li> <p>Your request references an ARN that is malformed, or corresponds to a resource with which a web ACL cannot be associated.</p> </li> </ul>
   *   - {WAFLimitsExceededException} <p>The operation exceeds a resource limit, for example, the maximum number of <code>WebACL</code> objects that you can create for an AWS account. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">Limits</a> in the <i>AWS WAF Developer Guide</i>.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createSizeConstraintSet(
    args: CreateSizeConstraintSetInput
  ): Promise<CreateSizeConstraintSetOutput>;
  public createSizeConstraintSet(
    args: CreateSizeConstraintSetInput,
    cb: (err: any, data?: CreateSizeConstraintSetOutput) => void
  ): void;
  public createSizeConstraintSet(
    args: CreateSizeConstraintSetInput,
    cb?: (err: any, data?: CreateSizeConstraintSetOutput) => void
  ): Promise<CreateSizeConstraintSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateSizeConstraintSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a <a>SqlInjectionMatchSet</a>, which you use to allow, block, or count requests that contain snippets of SQL code in a specified part of web requests. AWS WAF searches for character sequences that are likely to be malicious strings.</p> <p>To create and configure a <code>SqlInjectionMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateSqlInjectionMatchSet</code> request.</p> </li> <li> <p>Submit a <code>CreateSqlInjectionMatchSet</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateSqlInjectionMatchSet</a> request.</p> </li> <li> <p>Submit an <a>UpdateSqlInjectionMatchSet</a> request to specify the parts of web requests in which you want to allow, block, or count malicious SQL code.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFDisallowedNameException} <p>The name specified is invalid.</p>
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFInvalidAccountException} <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
   *   - {WAFInvalidParameterException} <p>The operation failed because AWS WAF didn't recognize a parameter in the request. For example:</p> <ul> <li> <p>You specified an invalid parameter name.</p> </li> <li> <p>You specified an invalid value.</p> </li> <li> <p>You tried to update an object (<code>ByteMatchSet</code>, <code>IPSet</code>, <code>Rule</code>, or <code>WebACL</code>) using an action other than <code>INSERT</code> or <code>DELETE</code>.</p> </li> <li> <p>You tried to create a <code>WebACL</code> with a <code>DefaultAction</code> <code>Type</code> other than <code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p> </li> <li> <p>You tried to create a <code>RateBasedRule</code> with a <code>RateKey</code> value other than <code>IP</code>.</p> </li> <li> <p>You tried to update a <code>WebACL</code> with a <code>WafAction</code> <code>Type</code> other than <code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p> </li> <li> <p>You tried to update a <code>ByteMatchSet</code> with a <code>FieldToMatch</code> <code>Type</code> other than HEADER, METHOD, QUERY_STRING, URI, or BODY.</p> </li> <li> <p>You tried to update a <code>ByteMatchSet</code> with a <code>Field</code> of <code>HEADER</code> but no value for <code>Data</code>.</p> </li> <li> <p>Your request references an ARN that is malformed, or corresponds to a resource with which a web ACL cannot be associated.</p> </li> </ul>
   *   - {WAFStaleDataException} <p>The operation failed because you tried to create, update, or delete an object by using a change token that has already been used.</p>
   *   - {WAFLimitsExceededException} <p>The operation exceeds a resource limit, for example, the maximum number of <code>WebACL</code> objects that you can create for an AWS account. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">Limits</a> in the <i>AWS WAF Developer Guide</i>.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createSqlInjectionMatchSet(
    args: CreateSqlInjectionMatchSetInput
  ): Promise<CreateSqlInjectionMatchSetOutput>;
  public createSqlInjectionMatchSet(
    args: CreateSqlInjectionMatchSetInput,
    cb: (err: any, data?: CreateSqlInjectionMatchSetOutput) => void
  ): void;
  public createSqlInjectionMatchSet(
    args: CreateSqlInjectionMatchSetInput,
    cb?: (err: any, data?: CreateSqlInjectionMatchSetOutput) => void
  ): Promise<CreateSqlInjectionMatchSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateSqlInjectionMatchSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a <code>WebACL</code>, which contains the <code>Rules</code> that identify the CloudFront web requests that you want to allow, block, or count. AWS WAF evaluates <code>Rules</code> in order based on the value of <code>Priority</code> for each <code>Rule</code>.</p> <p>You also specify a default action, either <code>ALLOW</code> or <code>BLOCK</code>. If a web request doesn't match any of the <code>Rules</code> in a <code>WebACL</code>, AWS WAF responds to the request with the default action. </p> <p>To create and configure a <code>WebACL</code>, perform the following steps:</p> <ol> <li> <p>Create and update the <code>ByteMatchSet</code> objects and other predicates that you want to include in <code>Rules</code>. For more information, see <a>CreateByteMatchSet</a>, <a>UpdateByteMatchSet</a>, <a>CreateIPSet</a>, <a>UpdateIPSet</a>, <a>CreateSqlInjectionMatchSet</a>, and <a>UpdateSqlInjectionMatchSet</a>.</p> </li> <li> <p>Create and update the <code>Rules</code> that you want to include in the <code>WebACL</code>. For more information, see <a>CreateRule</a> and <a>UpdateRule</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateWebACL</code> request.</p> </li> <li> <p>Submit a <code>CreateWebACL</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateWebACL</a> request.</p> </li> <li> <p>Submit an <a>UpdateWebACL</a> request to specify the <code>Rules</code> that you want to include in the <code>WebACL</code>, to specify the default action, and to associate the <code>WebACL</code> with a CloudFront distribution.</p> </li> </ol> <p>For more information about how to use the AWS WAF API, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFStaleDataException} <p>The operation failed because you tried to create, update, or delete an object by using a change token that has already been used.</p>
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFInvalidAccountException} <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
   *   - {WAFDisallowedNameException} <p>The name specified is invalid.</p>
   *   - {WAFInvalidParameterException} <p>The operation failed because AWS WAF didn't recognize a parameter in the request. For example:</p> <ul> <li> <p>You specified an invalid parameter name.</p> </li> <li> <p>You specified an invalid value.</p> </li> <li> <p>You tried to update an object (<code>ByteMatchSet</code>, <code>IPSet</code>, <code>Rule</code>, or <code>WebACL</code>) using an action other than <code>INSERT</code> or <code>DELETE</code>.</p> </li> <li> <p>You tried to create a <code>WebACL</code> with a <code>DefaultAction</code> <code>Type</code> other than <code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p> </li> <li> <p>You tried to create a <code>RateBasedRule</code> with a <code>RateKey</code> value other than <code>IP</code>.</p> </li> <li> <p>You tried to update a <code>WebACL</code> with a <code>WafAction</code> <code>Type</code> other than <code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p> </li> <li> <p>You tried to update a <code>ByteMatchSet</code> with a <code>FieldToMatch</code> <code>Type</code> other than HEADER, METHOD, QUERY_STRING, URI, or BODY.</p> </li> <li> <p>You tried to update a <code>ByteMatchSet</code> with a <code>Field</code> of <code>HEADER</code> but no value for <code>Data</code>.</p> </li> <li> <p>Your request references an ARN that is malformed, or corresponds to a resource with which a web ACL cannot be associated.</p> </li> </ul>
   *   - {WAFLimitsExceededException} <p>The operation exceeds a resource limit, for example, the maximum number of <code>WebACL</code> objects that you can create for an AWS account. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">Limits</a> in the <i>AWS WAF Developer Guide</i>.</p>
   *   - {WAFTagOperationException} WAFTagOperationException shape
   *   - {WAFTagOperationInternalErrorException} WAFTagOperationInternalErrorException shape
   *   - {WAFBadRequestException} WAFBadRequestException shape
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createWebACL(args: CreateWebACLInput): Promise<CreateWebACLOutput>;
  public createWebACL(
    args: CreateWebACLInput,
    cb: (err: any, data?: CreateWebACLOutput) => void
  ): void;
  public createWebACL(
    args: CreateWebACLInput,
    cb?: (err: any, data?: CreateWebACLOutput) => void
  ): Promise<CreateWebACLOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateWebACLCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an <a>XssMatchSet</a>, which you use to allow, block, or count requests that contain cross-site scripting attacks in the specified part of web requests. AWS WAF searches for character sequences that are likely to be malicious strings.</p> <p>To create and configure an <code>XssMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateXssMatchSet</code> request.</p> </li> <li> <p>Submit a <code>CreateXssMatchSet</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateXssMatchSet</a> request.</p> </li> <li> <p>Submit an <a>UpdateXssMatchSet</a> request to specify the parts of web requests in which you want to allow, block, or count cross-site scripting attacks.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFDisallowedNameException} <p>The name specified is invalid.</p>
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFInvalidAccountException} <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
   *   - {WAFInvalidParameterException} <p>The operation failed because AWS WAF didn't recognize a parameter in the request. For example:</p> <ul> <li> <p>You specified an invalid parameter name.</p> </li> <li> <p>You specified an invalid value.</p> </li> <li> <p>You tried to update an object (<code>ByteMatchSet</code>, <code>IPSet</code>, <code>Rule</code>, or <code>WebACL</code>) using an action other than <code>INSERT</code> or <code>DELETE</code>.</p> </li> <li> <p>You tried to create a <code>WebACL</code> with a <code>DefaultAction</code> <code>Type</code> other than <code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p> </li> <li> <p>You tried to create a <code>RateBasedRule</code> with a <code>RateKey</code> value other than <code>IP</code>.</p> </li> <li> <p>You tried to update a <code>WebACL</code> with a <code>WafAction</code> <code>Type</code> other than <code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p> </li> <li> <p>You tried to update a <code>ByteMatchSet</code> with a <code>FieldToMatch</code> <code>Type</code> other than HEADER, METHOD, QUERY_STRING, URI, or BODY.</p> </li> <li> <p>You tried to update a <code>ByteMatchSet</code> with a <code>Field</code> of <code>HEADER</code> but no value for <code>Data</code>.</p> </li> <li> <p>Your request references an ARN that is malformed, or corresponds to a resource with which a web ACL cannot be associated.</p> </li> </ul>
   *   - {WAFStaleDataException} <p>The operation failed because you tried to create, update, or delete an object by using a change token that has already been used.</p>
   *   - {WAFLimitsExceededException} <p>The operation exceeds a resource limit, for example, the maximum number of <code>WebACL</code> objects that you can create for an AWS account. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">Limits</a> in the <i>AWS WAF Developer Guide</i>.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createXssMatchSet(
    args: CreateXssMatchSetInput
  ): Promise<CreateXssMatchSetOutput>;
  public createXssMatchSet(
    args: CreateXssMatchSetInput,
    cb: (err: any, data?: CreateXssMatchSetOutput) => void
  ): void;
  public createXssMatchSet(
    args: CreateXssMatchSetInput,
    cb?: (err: any, data?: CreateXssMatchSetOutput) => void
  ): Promise<CreateXssMatchSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateXssMatchSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Permanently deletes a <a>ByteMatchSet</a>. You can't delete a <code>ByteMatchSet</code> if it's still used in any <code>Rules</code> or if it still includes any <a>ByteMatchTuple</a> objects (any filters).</p> <p>If you just want to remove a <code>ByteMatchSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p> <p>To permanently delete a <code>ByteMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Update the <code>ByteMatchSet</code> to remove filters, if any. For more information, see <a>UpdateByteMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteByteMatchSet</code> request.</p> </li> <li> <p>Submit a <code>DeleteByteMatchSet</code> request.</p> </li> </ol>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFInvalidAccountException} <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
   *   - {WAFNonexistentItemException} <p>The operation failed because the referenced object doesn't exist.</p>
   *   - {WAFReferencedItemException} <p>The operation failed because you tried to delete an object that is still in use. For example:</p> <ul> <li> <p>You tried to delete a <code>ByteMatchSet</code> that is still referenced by a <code>Rule</code>.</p> </li> <li> <p>You tried to delete a <code>Rule</code> that is still referenced by a <code>WebACL</code>.</p> </li> </ul>
   *   - {WAFStaleDataException} <p>The operation failed because you tried to create, update, or delete an object by using a change token that has already been used.</p>
   *   - {WAFNonEmptyEntityException} <p>The operation failed because you tried to delete an object that isn't empty. For example:</p> <ul> <li> <p>You tried to delete a <code>WebACL</code> that still contains one or more <code>Rule</code> objects.</p> </li> <li> <p>You tried to delete a <code>Rule</code> that still contains one or more <code>ByteMatchSet</code> objects or other predicates.</p> </li> <li> <p>You tried to delete a <code>ByteMatchSet</code> that contains one or more <code>ByteMatchTuple</code> objects.</p> </li> <li> <p>You tried to delete an <code>IPSet</code> that references one or more IP addresses.</p> </li> </ul>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteByteMatchSet(
    args: DeleteByteMatchSetInput
  ): Promise<DeleteByteMatchSetOutput>;
  public deleteByteMatchSet(
    args: DeleteByteMatchSetInput,
    cb: (err: any, data?: DeleteByteMatchSetOutput) => void
  ): void;
  public deleteByteMatchSet(
    args: DeleteByteMatchSetInput,
    cb?: (err: any, data?: DeleteByteMatchSetOutput) => void
  ): Promise<DeleteByteMatchSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteByteMatchSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Permanently deletes a <a>GeoMatchSet</a>. You can't delete a <code>GeoMatchSet</code> if it's still used in any <code>Rules</code> or if it still includes any countries.</p> <p>If you just want to remove a <code>GeoMatchSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p> <p>To permanently delete a <code>GeoMatchSet</code> from AWS WAF, perform the following steps:</p> <ol> <li> <p>Update the <code>GeoMatchSet</code> to remove any countries. For more information, see <a>UpdateGeoMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteGeoMatchSet</code> request.</p> </li> <li> <p>Submit a <code>DeleteGeoMatchSet</code> request.</p> </li> </ol>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFStaleDataException} <p>The operation failed because you tried to create, update, or delete an object by using a change token that has already been used.</p>
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFInvalidAccountException} <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
   *   - {WAFNonexistentItemException} <p>The operation failed because the referenced object doesn't exist.</p>
   *   - {WAFReferencedItemException} <p>The operation failed because you tried to delete an object that is still in use. For example:</p> <ul> <li> <p>You tried to delete a <code>ByteMatchSet</code> that is still referenced by a <code>Rule</code>.</p> </li> <li> <p>You tried to delete a <code>Rule</code> that is still referenced by a <code>WebACL</code>.</p> </li> </ul>
   *   - {WAFNonEmptyEntityException} <p>The operation failed because you tried to delete an object that isn't empty. For example:</p> <ul> <li> <p>You tried to delete a <code>WebACL</code> that still contains one or more <code>Rule</code> objects.</p> </li> <li> <p>You tried to delete a <code>Rule</code> that still contains one or more <code>ByteMatchSet</code> objects or other predicates.</p> </li> <li> <p>You tried to delete a <code>ByteMatchSet</code> that contains one or more <code>ByteMatchTuple</code> objects.</p> </li> <li> <p>You tried to delete an <code>IPSet</code> that references one or more IP addresses.</p> </li> </ul>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteGeoMatchSet(
    args: DeleteGeoMatchSetInput
  ): Promise<DeleteGeoMatchSetOutput>;
  public deleteGeoMatchSet(
    args: DeleteGeoMatchSetInput,
    cb: (err: any, data?: DeleteGeoMatchSetOutput) => void
  ): void;
  public deleteGeoMatchSet(
    args: DeleteGeoMatchSetInput,
    cb?: (err: any, data?: DeleteGeoMatchSetOutput) => void
  ): Promise<DeleteGeoMatchSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteGeoMatchSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Permanently deletes an <a>IPSet</a>. You can't delete an <code>IPSet</code> if it's still used in any <code>Rules</code> or if it still includes any IP addresses.</p> <p>If you just want to remove an <code>IPSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p> <p>To permanently delete an <code>IPSet</code> from AWS WAF, perform the following steps:</p> <ol> <li> <p>Update the <code>IPSet</code> to remove IP address ranges, if any. For more information, see <a>UpdateIPSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteIPSet</code> request.</p> </li> <li> <p>Submit a <code>DeleteIPSet</code> request.</p> </li> </ol>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFStaleDataException} <p>The operation failed because you tried to create, update, or delete an object by using a change token that has already been used.</p>
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFInvalidAccountException} <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
   *   - {WAFNonexistentItemException} <p>The operation failed because the referenced object doesn't exist.</p>
   *   - {WAFReferencedItemException} <p>The operation failed because you tried to delete an object that is still in use. For example:</p> <ul> <li> <p>You tried to delete a <code>ByteMatchSet</code> that is still referenced by a <code>Rule</code>.</p> </li> <li> <p>You tried to delete a <code>Rule</code> that is still referenced by a <code>WebACL</code>.</p> </li> </ul>
   *   - {WAFNonEmptyEntityException} <p>The operation failed because you tried to delete an object that isn't empty. For example:</p> <ul> <li> <p>You tried to delete a <code>WebACL</code> that still contains one or more <code>Rule</code> objects.</p> </li> <li> <p>You tried to delete a <code>Rule</code> that still contains one or more <code>ByteMatchSet</code> objects or other predicates.</p> </li> <li> <p>You tried to delete a <code>ByteMatchSet</code> that contains one or more <code>ByteMatchTuple</code> objects.</p> </li> <li> <p>You tried to delete an <code>IPSet</code> that references one or more IP addresses.</p> </li> </ul>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteIPSet(args: DeleteIPSetInput): Promise<DeleteIPSetOutput>;
  public deleteIPSet(
    args: DeleteIPSetInput,
    cb: (err: any, data?: DeleteIPSetOutput) => void
  ): void;
  public deleteIPSet(
    args: DeleteIPSetInput,
    cb?: (err: any, data?: DeleteIPSetOutput) => void
  ): Promise<DeleteIPSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteIPSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Permanently deletes the <a>LoggingConfiguration</a> from the specified web ACL.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFNonexistentItemException} <p>The operation failed because the referenced object doesn't exist.</p>
   *   - {WAFStaleDataException} <p>The operation failed because you tried to create, update, or delete an object by using a change token that has already been used.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteLoggingConfiguration(
    args: DeleteLoggingConfigurationInput
  ): Promise<DeleteLoggingConfigurationOutput>;
  public deleteLoggingConfiguration(
    args: DeleteLoggingConfigurationInput,
    cb: (err: any, data?: DeleteLoggingConfigurationOutput) => void
  ): void;
  public deleteLoggingConfiguration(
    args: DeleteLoggingConfigurationInput,
    cb?: (err: any, data?: DeleteLoggingConfigurationOutput) => void
  ): Promise<DeleteLoggingConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteLoggingConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Permanently deletes an IAM policy from the specified RuleGroup.</p> <p>The user making the request must be the owner of the RuleGroup.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFStaleDataException} <p>The operation failed because you tried to create, update, or delete an object by using a change token that has already been used.</p>
   *   - {WAFNonexistentItemException} <p>The operation failed because the referenced object doesn't exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deletePermissionPolicy(
    args: DeletePermissionPolicyInput
  ): Promise<DeletePermissionPolicyOutput>;
  public deletePermissionPolicy(
    args: DeletePermissionPolicyInput,
    cb: (err: any, data?: DeletePermissionPolicyOutput) => void
  ): void;
  public deletePermissionPolicy(
    args: DeletePermissionPolicyInput,
    cb?: (err: any, data?: DeletePermissionPolicyOutput) => void
  ): Promise<DeletePermissionPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeletePermissionPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Permanently deletes a <a>RateBasedRule</a>. You can't delete a rule if it's still used in any <code>WebACL</code> objects or if it still includes any predicates, such as <code>ByteMatchSet</code> objects.</p> <p>If you just want to remove a rule from a <code>WebACL</code>, use <a>UpdateWebACL</a>.</p> <p>To permanently delete a <code>RateBasedRule</code> from AWS WAF, perform the following steps:</p> <ol> <li> <p>Update the <code>RateBasedRule</code> to remove predicates, if any. For more information, see <a>UpdateRateBasedRule</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteRateBasedRule</code> request.</p> </li> <li> <p>Submit a <code>DeleteRateBasedRule</code> request.</p> </li> </ol>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFStaleDataException} <p>The operation failed because you tried to create, update, or delete an object by using a change token that has already been used.</p>
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFInvalidAccountException} <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
   *   - {WAFNonexistentItemException} <p>The operation failed because the referenced object doesn't exist.</p>
   *   - {WAFReferencedItemException} <p>The operation failed because you tried to delete an object that is still in use. For example:</p> <ul> <li> <p>You tried to delete a <code>ByteMatchSet</code> that is still referenced by a <code>Rule</code>.</p> </li> <li> <p>You tried to delete a <code>Rule</code> that is still referenced by a <code>WebACL</code>.</p> </li> </ul>
   *   - {WAFNonEmptyEntityException} <p>The operation failed because you tried to delete an object that isn't empty. For example:</p> <ul> <li> <p>You tried to delete a <code>WebACL</code> that still contains one or more <code>Rule</code> objects.</p> </li> <li> <p>You tried to delete a <code>Rule</code> that still contains one or more <code>ByteMatchSet</code> objects or other predicates.</p> </li> <li> <p>You tried to delete a <code>ByteMatchSet</code> that contains one or more <code>ByteMatchTuple</code> objects.</p> </li> <li> <p>You tried to delete an <code>IPSet</code> that references one or more IP addresses.</p> </li> </ul>
   *   - {WAFTagOperationException} WAFTagOperationException shape
   *   - {WAFTagOperationInternalErrorException} WAFTagOperationInternalErrorException shape
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteRateBasedRule(
    args: DeleteRateBasedRuleInput
  ): Promise<DeleteRateBasedRuleOutput>;
  public deleteRateBasedRule(
    args: DeleteRateBasedRuleInput,
    cb: (err: any, data?: DeleteRateBasedRuleOutput) => void
  ): void;
  public deleteRateBasedRule(
    args: DeleteRateBasedRuleInput,
    cb?: (err: any, data?: DeleteRateBasedRuleOutput) => void
  ): Promise<DeleteRateBasedRuleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteRateBasedRuleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Permanently deletes a <a>RegexMatchSet</a>. You can't delete a <code>RegexMatchSet</code> if it's still used in any <code>Rules</code> or if it still includes any <code>RegexMatchTuples</code> objects (any filters).</p> <p>If you just want to remove a <code>RegexMatchSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p> <p>To permanently delete a <code>RegexMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Update the <code>RegexMatchSet</code> to remove filters, if any. For more information, see <a>UpdateRegexMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteRegexMatchSet</code> request.</p> </li> <li> <p>Submit a <code>DeleteRegexMatchSet</code> request.</p> </li> </ol>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFInvalidAccountException} <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
   *   - {WAFNonexistentItemException} <p>The operation failed because the referenced object doesn't exist.</p>
   *   - {WAFReferencedItemException} <p>The operation failed because you tried to delete an object that is still in use. For example:</p> <ul> <li> <p>You tried to delete a <code>ByteMatchSet</code> that is still referenced by a <code>Rule</code>.</p> </li> <li> <p>You tried to delete a <code>Rule</code> that is still referenced by a <code>WebACL</code>.</p> </li> </ul>
   *   - {WAFStaleDataException} <p>The operation failed because you tried to create, update, or delete an object by using a change token that has already been used.</p>
   *   - {WAFNonEmptyEntityException} <p>The operation failed because you tried to delete an object that isn't empty. For example:</p> <ul> <li> <p>You tried to delete a <code>WebACL</code> that still contains one or more <code>Rule</code> objects.</p> </li> <li> <p>You tried to delete a <code>Rule</code> that still contains one or more <code>ByteMatchSet</code> objects or other predicates.</p> </li> <li> <p>You tried to delete a <code>ByteMatchSet</code> that contains one or more <code>ByteMatchTuple</code> objects.</p> </li> <li> <p>You tried to delete an <code>IPSet</code> that references one or more IP addresses.</p> </li> </ul>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteRegexMatchSet(
    args: DeleteRegexMatchSetInput
  ): Promise<DeleteRegexMatchSetOutput>;
  public deleteRegexMatchSet(
    args: DeleteRegexMatchSetInput,
    cb: (err: any, data?: DeleteRegexMatchSetOutput) => void
  ): void;
  public deleteRegexMatchSet(
    args: DeleteRegexMatchSetInput,
    cb?: (err: any, data?: DeleteRegexMatchSetOutput) => void
  ): Promise<DeleteRegexMatchSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteRegexMatchSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Permanently deletes a <a>RegexPatternSet</a>. You can't delete a <code>RegexPatternSet</code> if it's still used in any <code>RegexMatchSet</code> or if the <code>RegexPatternSet</code> is not empty. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFInvalidAccountException} <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
   *   - {WAFNonexistentItemException} <p>The operation failed because the referenced object doesn't exist.</p>
   *   - {WAFReferencedItemException} <p>The operation failed because you tried to delete an object that is still in use. For example:</p> <ul> <li> <p>You tried to delete a <code>ByteMatchSet</code> that is still referenced by a <code>Rule</code>.</p> </li> <li> <p>You tried to delete a <code>Rule</code> that is still referenced by a <code>WebACL</code>.</p> </li> </ul>
   *   - {WAFStaleDataException} <p>The operation failed because you tried to create, update, or delete an object by using a change token that has already been used.</p>
   *   - {WAFNonEmptyEntityException} <p>The operation failed because you tried to delete an object that isn't empty. For example:</p> <ul> <li> <p>You tried to delete a <code>WebACL</code> that still contains one or more <code>Rule</code> objects.</p> </li> <li> <p>You tried to delete a <code>Rule</code> that still contains one or more <code>ByteMatchSet</code> objects or other predicates.</p> </li> <li> <p>You tried to delete a <code>ByteMatchSet</code> that contains one or more <code>ByteMatchTuple</code> objects.</p> </li> <li> <p>You tried to delete an <code>IPSet</code> that references one or more IP addresses.</p> </li> </ul>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteRegexPatternSet(
    args: DeleteRegexPatternSetInput
  ): Promise<DeleteRegexPatternSetOutput>;
  public deleteRegexPatternSet(
    args: DeleteRegexPatternSetInput,
    cb: (err: any, data?: DeleteRegexPatternSetOutput) => void
  ): void;
  public deleteRegexPatternSet(
    args: DeleteRegexPatternSetInput,
    cb?: (err: any, data?: DeleteRegexPatternSetOutput) => void
  ): Promise<DeleteRegexPatternSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteRegexPatternSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Permanently deletes a <a>Rule</a>. You can't delete a <code>Rule</code> if it's still used in any <code>WebACL</code> objects or if it still includes any predicates, such as <code>ByteMatchSet</code> objects.</p> <p>If you just want to remove a <code>Rule</code> from a <code>WebACL</code>, use <a>UpdateWebACL</a>.</p> <p>To permanently delete a <code>Rule</code> from AWS WAF, perform the following steps:</p> <ol> <li> <p>Update the <code>Rule</code> to remove predicates, if any. For more information, see <a>UpdateRule</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteRule</code> request.</p> </li> <li> <p>Submit a <code>DeleteRule</code> request.</p> </li> </ol>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFStaleDataException} <p>The operation failed because you tried to create, update, or delete an object by using a change token that has already been used.</p>
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFInvalidAccountException} <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
   *   - {WAFNonexistentItemException} <p>The operation failed because the referenced object doesn't exist.</p>
   *   - {WAFReferencedItemException} <p>The operation failed because you tried to delete an object that is still in use. For example:</p> <ul> <li> <p>You tried to delete a <code>ByteMatchSet</code> that is still referenced by a <code>Rule</code>.</p> </li> <li> <p>You tried to delete a <code>Rule</code> that is still referenced by a <code>WebACL</code>.</p> </li> </ul>
   *   - {WAFNonEmptyEntityException} <p>The operation failed because you tried to delete an object that isn't empty. For example:</p> <ul> <li> <p>You tried to delete a <code>WebACL</code> that still contains one or more <code>Rule</code> objects.</p> </li> <li> <p>You tried to delete a <code>Rule</code> that still contains one or more <code>ByteMatchSet</code> objects or other predicates.</p> </li> <li> <p>You tried to delete a <code>ByteMatchSet</code> that contains one or more <code>ByteMatchTuple</code> objects.</p> </li> <li> <p>You tried to delete an <code>IPSet</code> that references one or more IP addresses.</p> </li> </ul>
   *   - {WAFTagOperationException} WAFTagOperationException shape
   *   - {WAFTagOperationInternalErrorException} WAFTagOperationInternalErrorException shape
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteRule(args: DeleteRuleInput): Promise<DeleteRuleOutput>;
  public deleteRule(
    args: DeleteRuleInput,
    cb: (err: any, data?: DeleteRuleOutput) => void
  ): void;
  public deleteRule(
    args: DeleteRuleInput,
    cb?: (err: any, data?: DeleteRuleOutput) => void
  ): Promise<DeleteRuleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteRuleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Permanently deletes a <a>RuleGroup</a>. You can't delete a <code>RuleGroup</code> if it's still used in any <code>WebACL</code> objects or if it still includes any rules.</p> <p>If you just want to remove a <code>RuleGroup</code> from a <code>WebACL</code>, use <a>UpdateWebACL</a>.</p> <p>To permanently delete a <code>RuleGroup</code> from AWS WAF, perform the following steps:</p> <ol> <li> <p>Update the <code>RuleGroup</code> to remove rules, if any. For more information, see <a>UpdateRuleGroup</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteRuleGroup</code> request.</p> </li> <li> <p>Submit a <code>DeleteRuleGroup</code> request.</p> </li> </ol>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFStaleDataException} <p>The operation failed because you tried to create, update, or delete an object by using a change token that has already been used.</p>
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFNonexistentItemException} <p>The operation failed because the referenced object doesn't exist.</p>
   *   - {WAFReferencedItemException} <p>The operation failed because you tried to delete an object that is still in use. For example:</p> <ul> <li> <p>You tried to delete a <code>ByteMatchSet</code> that is still referenced by a <code>Rule</code>.</p> </li> <li> <p>You tried to delete a <code>Rule</code> that is still referenced by a <code>WebACL</code>.</p> </li> </ul>
   *   - {WAFNonEmptyEntityException} <p>The operation failed because you tried to delete an object that isn't empty. For example:</p> <ul> <li> <p>You tried to delete a <code>WebACL</code> that still contains one or more <code>Rule</code> objects.</p> </li> <li> <p>You tried to delete a <code>Rule</code> that still contains one or more <code>ByteMatchSet</code> objects or other predicates.</p> </li> <li> <p>You tried to delete a <code>ByteMatchSet</code> that contains one or more <code>ByteMatchTuple</code> objects.</p> </li> <li> <p>You tried to delete an <code>IPSet</code> that references one or more IP addresses.</p> </li> </ul>
   *   - {WAFInvalidOperationException} <p>The operation failed because there was nothing to do. For example:</p> <ul> <li> <p>You tried to remove a <code>Rule</code> from a <code>WebACL</code>, but the <code>Rule</code> isn't in the specified <code>WebACL</code>.</p> </li> <li> <p>You tried to remove an IP address from an <code>IPSet</code>, but the IP address isn't in the specified <code>IPSet</code>.</p> </li> <li> <p>You tried to remove a <code>ByteMatchTuple</code> from a <code>ByteMatchSet</code>, but the <code>ByteMatchTuple</code> isn't in the specified <code>WebACL</code>.</p> </li> <li> <p>You tried to add a <code>Rule</code> to a <code>WebACL</code>, but the <code>Rule</code> already exists in the specified <code>WebACL</code>.</p> </li> <li> <p>You tried to add a <code>ByteMatchTuple</code> to a <code>ByteMatchSet</code>, but the <code>ByteMatchTuple</code> already exists in the specified <code>WebACL</code>.</p> </li> </ul>
   *   - {WAFTagOperationException} WAFTagOperationException shape
   *   - {WAFTagOperationInternalErrorException} WAFTagOperationInternalErrorException shape
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteRuleGroup(
    args: DeleteRuleGroupInput
  ): Promise<DeleteRuleGroupOutput>;
  public deleteRuleGroup(
    args: DeleteRuleGroupInput,
    cb: (err: any, data?: DeleteRuleGroupOutput) => void
  ): void;
  public deleteRuleGroup(
    args: DeleteRuleGroupInput,
    cb?: (err: any, data?: DeleteRuleGroupOutput) => void
  ): Promise<DeleteRuleGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteRuleGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Permanently deletes a <a>SizeConstraintSet</a>. You can't delete a <code>SizeConstraintSet</code> if it's still used in any <code>Rules</code> or if it still includes any <a>SizeConstraint</a> objects (any filters).</p> <p>If you just want to remove a <code>SizeConstraintSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p> <p>To permanently delete a <code>SizeConstraintSet</code>, perform the following steps:</p> <ol> <li> <p>Update the <code>SizeConstraintSet</code> to remove filters, if any. For more information, see <a>UpdateSizeConstraintSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteSizeConstraintSet</code> request.</p> </li> <li> <p>Submit a <code>DeleteSizeConstraintSet</code> request.</p> </li> </ol>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFStaleDataException} <p>The operation failed because you tried to create, update, or delete an object by using a change token that has already been used.</p>
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFInvalidAccountException} <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
   *   - {WAFNonexistentItemException} <p>The operation failed because the referenced object doesn't exist.</p>
   *   - {WAFReferencedItemException} <p>The operation failed because you tried to delete an object that is still in use. For example:</p> <ul> <li> <p>You tried to delete a <code>ByteMatchSet</code> that is still referenced by a <code>Rule</code>.</p> </li> <li> <p>You tried to delete a <code>Rule</code> that is still referenced by a <code>WebACL</code>.</p> </li> </ul>
   *   - {WAFNonEmptyEntityException} <p>The operation failed because you tried to delete an object that isn't empty. For example:</p> <ul> <li> <p>You tried to delete a <code>WebACL</code> that still contains one or more <code>Rule</code> objects.</p> </li> <li> <p>You tried to delete a <code>Rule</code> that still contains one or more <code>ByteMatchSet</code> objects or other predicates.</p> </li> <li> <p>You tried to delete a <code>ByteMatchSet</code> that contains one or more <code>ByteMatchTuple</code> objects.</p> </li> <li> <p>You tried to delete an <code>IPSet</code> that references one or more IP addresses.</p> </li> </ul>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteSizeConstraintSet(
    args: DeleteSizeConstraintSetInput
  ): Promise<DeleteSizeConstraintSetOutput>;
  public deleteSizeConstraintSet(
    args: DeleteSizeConstraintSetInput,
    cb: (err: any, data?: DeleteSizeConstraintSetOutput) => void
  ): void;
  public deleteSizeConstraintSet(
    args: DeleteSizeConstraintSetInput,
    cb?: (err: any, data?: DeleteSizeConstraintSetOutput) => void
  ): Promise<DeleteSizeConstraintSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteSizeConstraintSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Permanently deletes a <a>SqlInjectionMatchSet</a>. You can't delete a <code>SqlInjectionMatchSet</code> if it's still used in any <code>Rules</code> or if it still contains any <a>SqlInjectionMatchTuple</a> objects.</p> <p>If you just want to remove a <code>SqlInjectionMatchSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p> <p>To permanently delete a <code>SqlInjectionMatchSet</code> from AWS WAF, perform the following steps:</p> <ol> <li> <p>Update the <code>SqlInjectionMatchSet</code> to remove filters, if any. For more information, see <a>UpdateSqlInjectionMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteSqlInjectionMatchSet</code> request.</p> </li> <li> <p>Submit a <code>DeleteSqlInjectionMatchSet</code> request.</p> </li> </ol>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFInvalidAccountException} <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
   *   - {WAFNonexistentItemException} <p>The operation failed because the referenced object doesn't exist.</p>
   *   - {WAFReferencedItemException} <p>The operation failed because you tried to delete an object that is still in use. For example:</p> <ul> <li> <p>You tried to delete a <code>ByteMatchSet</code> that is still referenced by a <code>Rule</code>.</p> </li> <li> <p>You tried to delete a <code>Rule</code> that is still referenced by a <code>WebACL</code>.</p> </li> </ul>
   *   - {WAFStaleDataException} <p>The operation failed because you tried to create, update, or delete an object by using a change token that has already been used.</p>
   *   - {WAFNonEmptyEntityException} <p>The operation failed because you tried to delete an object that isn't empty. For example:</p> <ul> <li> <p>You tried to delete a <code>WebACL</code> that still contains one or more <code>Rule</code> objects.</p> </li> <li> <p>You tried to delete a <code>Rule</code> that still contains one or more <code>ByteMatchSet</code> objects or other predicates.</p> </li> <li> <p>You tried to delete a <code>ByteMatchSet</code> that contains one or more <code>ByteMatchTuple</code> objects.</p> </li> <li> <p>You tried to delete an <code>IPSet</code> that references one or more IP addresses.</p> </li> </ul>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteSqlInjectionMatchSet(
    args: DeleteSqlInjectionMatchSetInput
  ): Promise<DeleteSqlInjectionMatchSetOutput>;
  public deleteSqlInjectionMatchSet(
    args: DeleteSqlInjectionMatchSetInput,
    cb: (err: any, data?: DeleteSqlInjectionMatchSetOutput) => void
  ): void;
  public deleteSqlInjectionMatchSet(
    args: DeleteSqlInjectionMatchSetInput,
    cb?: (err: any, data?: DeleteSqlInjectionMatchSetOutput) => void
  ): Promise<DeleteSqlInjectionMatchSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteSqlInjectionMatchSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Permanently deletes a <a>WebACL</a>. You can't delete a <code>WebACL</code> if it still contains any <code>Rules</code>.</p> <p>To delete a <code>WebACL</code>, perform the following steps:</p> <ol> <li> <p>Update the <code>WebACL</code> to remove <code>Rules</code>, if any. For more information, see <a>UpdateWebACL</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteWebACL</code> request.</p> </li> <li> <p>Submit a <code>DeleteWebACL</code> request.</p> </li> </ol>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFStaleDataException} <p>The operation failed because you tried to create, update, or delete an object by using a change token that has already been used.</p>
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFInvalidAccountException} <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
   *   - {WAFNonexistentItemException} <p>The operation failed because the referenced object doesn't exist.</p>
   *   - {WAFReferencedItemException} <p>The operation failed because you tried to delete an object that is still in use. For example:</p> <ul> <li> <p>You tried to delete a <code>ByteMatchSet</code> that is still referenced by a <code>Rule</code>.</p> </li> <li> <p>You tried to delete a <code>Rule</code> that is still referenced by a <code>WebACL</code>.</p> </li> </ul>
   *   - {WAFNonEmptyEntityException} <p>The operation failed because you tried to delete an object that isn't empty. For example:</p> <ul> <li> <p>You tried to delete a <code>WebACL</code> that still contains one or more <code>Rule</code> objects.</p> </li> <li> <p>You tried to delete a <code>Rule</code> that still contains one or more <code>ByteMatchSet</code> objects or other predicates.</p> </li> <li> <p>You tried to delete a <code>ByteMatchSet</code> that contains one or more <code>ByteMatchTuple</code> objects.</p> </li> <li> <p>You tried to delete an <code>IPSet</code> that references one or more IP addresses.</p> </li> </ul>
   *   - {WAFTagOperationException} WAFTagOperationException shape
   *   - {WAFTagOperationInternalErrorException} WAFTagOperationInternalErrorException shape
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteWebACL(args: DeleteWebACLInput): Promise<DeleteWebACLOutput>;
  public deleteWebACL(
    args: DeleteWebACLInput,
    cb: (err: any, data?: DeleteWebACLOutput) => void
  ): void;
  public deleteWebACL(
    args: DeleteWebACLInput,
    cb?: (err: any, data?: DeleteWebACLOutput) => void
  ): Promise<DeleteWebACLOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteWebACLCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Permanently deletes an <a>XssMatchSet</a>. You can't delete an <code>XssMatchSet</code> if it's still used in any <code>Rules</code> or if it still contains any <a>XssMatchTuple</a> objects.</p> <p>If you just want to remove an <code>XssMatchSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p> <p>To permanently delete an <code>XssMatchSet</code> from AWS WAF, perform the following steps:</p> <ol> <li> <p>Update the <code>XssMatchSet</code> to remove filters, if any. For more information, see <a>UpdateXssMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteXssMatchSet</code> request.</p> </li> <li> <p>Submit a <code>DeleteXssMatchSet</code> request.</p> </li> </ol>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFInvalidAccountException} <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
   *   - {WAFNonexistentItemException} <p>The operation failed because the referenced object doesn't exist.</p>
   *   - {WAFReferencedItemException} <p>The operation failed because you tried to delete an object that is still in use. For example:</p> <ul> <li> <p>You tried to delete a <code>ByteMatchSet</code> that is still referenced by a <code>Rule</code>.</p> </li> <li> <p>You tried to delete a <code>Rule</code> that is still referenced by a <code>WebACL</code>.</p> </li> </ul>
   *   - {WAFStaleDataException} <p>The operation failed because you tried to create, update, or delete an object by using a change token that has already been used.</p>
   *   - {WAFNonEmptyEntityException} <p>The operation failed because you tried to delete an object that isn't empty. For example:</p> <ul> <li> <p>You tried to delete a <code>WebACL</code> that still contains one or more <code>Rule</code> objects.</p> </li> <li> <p>You tried to delete a <code>Rule</code> that still contains one or more <code>ByteMatchSet</code> objects or other predicates.</p> </li> <li> <p>You tried to delete a <code>ByteMatchSet</code> that contains one or more <code>ByteMatchTuple</code> objects.</p> </li> <li> <p>You tried to delete an <code>IPSet</code> that references one or more IP addresses.</p> </li> </ul>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteXssMatchSet(
    args: DeleteXssMatchSetInput
  ): Promise<DeleteXssMatchSetOutput>;
  public deleteXssMatchSet(
    args: DeleteXssMatchSetInput,
    cb: (err: any, data?: DeleteXssMatchSetOutput) => void
  ): void;
  public deleteXssMatchSet(
    args: DeleteXssMatchSetInput,
    cb?: (err: any, data?: DeleteXssMatchSetOutput) => void
  ): Promise<DeleteXssMatchSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteXssMatchSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the <a>ByteMatchSet</a> specified by <code>ByteMatchSetId</code>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFInvalidAccountException} <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
   *   - {WAFNonexistentItemException} <p>The operation failed because the referenced object doesn't exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getByteMatchSet(
    args: GetByteMatchSetInput
  ): Promise<GetByteMatchSetOutput>;
  public getByteMatchSet(
    args: GetByteMatchSetInput,
    cb: (err: any, data?: GetByteMatchSetOutput) => void
  ): void;
  public getByteMatchSet(
    args: GetByteMatchSetInput,
    cb?: (err: any, data?: GetByteMatchSetOutput) => void
  ): Promise<GetByteMatchSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetByteMatchSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>When you want to create, update, or delete AWS WAF objects, get a change token and include the change token in the create, update, or delete request. Change tokens ensure that your application doesn't submit conflicting requests to AWS WAF.</p> <p>Each create, update, or delete request must use a unique change token. If your application submits a <code>GetChangeToken</code> request and then submits a second <code>GetChangeToken</code> request before submitting a create, update, or delete request, the second <code>GetChangeToken</code> request returns the same value as the first <code>GetChangeToken</code> request.</p> <p>When you use a change token in a create, update, or delete request, the status of the change token changes to <code>PENDING</code>, which indicates that AWS WAF is propagating the change to all AWS WAF servers. Use <code>GetChangeTokenStatus</code> to determine the status of your change token.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getChangeToken(
    args: GetChangeTokenInput
  ): Promise<GetChangeTokenOutput>;
  public getChangeToken(
    args: GetChangeTokenInput,
    cb: (err: any, data?: GetChangeTokenOutput) => void
  ): void;
  public getChangeToken(
    args: GetChangeTokenInput,
    cb?: (err: any, data?: GetChangeTokenOutput) => void
  ): Promise<GetChangeTokenOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetChangeTokenCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the status of a <code>ChangeToken</code> that you got by calling <a>GetChangeToken</a>. <code>ChangeTokenStatus</code> is one of the following values:</p> <ul> <li> <p> <code>PROVISIONED</code>: You requested the change token by calling <code>GetChangeToken</code>, but you haven't used it yet in a call to create, update, or delete an AWS WAF object.</p> </li> <li> <p> <code>PENDING</code>: AWS WAF is propagating the create, update, or delete request to all AWS WAF servers.</p> </li> <li> <p> <code>INSYNC</code>: Propagation is complete.</p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFNonexistentItemException} <p>The operation failed because the referenced object doesn't exist.</p>
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getChangeTokenStatus(
    args: GetChangeTokenStatusInput
  ): Promise<GetChangeTokenStatusOutput>;
  public getChangeTokenStatus(
    args: GetChangeTokenStatusInput,
    cb: (err: any, data?: GetChangeTokenStatusOutput) => void
  ): void;
  public getChangeTokenStatus(
    args: GetChangeTokenStatusInput,
    cb?: (err: any, data?: GetChangeTokenStatusOutput) => void
  ): Promise<GetChangeTokenStatusOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetChangeTokenStatusCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the <a>GeoMatchSet</a> that is specified by <code>GeoMatchSetId</code>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFInvalidAccountException} <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
   *   - {WAFNonexistentItemException} <p>The operation failed because the referenced object doesn't exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getGeoMatchSet(
    args: GetGeoMatchSetInput
  ): Promise<GetGeoMatchSetOutput>;
  public getGeoMatchSet(
    args: GetGeoMatchSetInput,
    cb: (err: any, data?: GetGeoMatchSetOutput) => void
  ): void;
  public getGeoMatchSet(
    args: GetGeoMatchSetInput,
    cb?: (err: any, data?: GetGeoMatchSetOutput) => void
  ): Promise<GetGeoMatchSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetGeoMatchSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the <a>IPSet</a> that is specified by <code>IPSetId</code>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFInvalidAccountException} <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
   *   - {WAFNonexistentItemException} <p>The operation failed because the referenced object doesn't exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getIPSet(args: GetIPSetInput): Promise<GetIPSetOutput>;
  public getIPSet(
    args: GetIPSetInput,
    cb: (err: any, data?: GetIPSetOutput) => void
  ): void;
  public getIPSet(
    args: GetIPSetInput,
    cb?: (err: any, data?: GetIPSetOutput) => void
  ): Promise<GetIPSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetIPSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the <a>LoggingConfiguration</a> for the specified web ACL.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFNonexistentItemException} <p>The operation failed because the referenced object doesn't exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getLoggingConfiguration(
    args: GetLoggingConfigurationInput
  ): Promise<GetLoggingConfigurationOutput>;
  public getLoggingConfiguration(
    args: GetLoggingConfigurationInput,
    cb: (err: any, data?: GetLoggingConfigurationOutput) => void
  ): void;
  public getLoggingConfiguration(
    args: GetLoggingConfigurationInput,
    cb?: (err: any, data?: GetLoggingConfigurationOutput) => void
  ): Promise<GetLoggingConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetLoggingConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the IAM policy attached to the RuleGroup.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFNonexistentItemException} <p>The operation failed because the referenced object doesn't exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getPermissionPolicy(
    args: GetPermissionPolicyInput
  ): Promise<GetPermissionPolicyOutput>;
  public getPermissionPolicy(
    args: GetPermissionPolicyInput,
    cb: (err: any, data?: GetPermissionPolicyOutput) => void
  ): void;
  public getPermissionPolicy(
    args: GetPermissionPolicyInput,
    cb?: (err: any, data?: GetPermissionPolicyOutput) => void
  ): Promise<GetPermissionPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetPermissionPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the <a>RateBasedRule</a> that is specified by the <code>RuleId</code> that you included in the <code>GetRateBasedRule</code> request.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFInvalidAccountException} <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
   *   - {WAFNonexistentItemException} <p>The operation failed because the referenced object doesn't exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getRateBasedRule(
    args: GetRateBasedRuleInput
  ): Promise<GetRateBasedRuleOutput>;
  public getRateBasedRule(
    args: GetRateBasedRuleInput,
    cb: (err: any, data?: GetRateBasedRuleOutput) => void
  ): void;
  public getRateBasedRule(
    args: GetRateBasedRuleInput,
    cb?: (err: any, data?: GetRateBasedRuleOutput) => void
  ): Promise<GetRateBasedRuleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetRateBasedRuleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns an array of IP addresses currently being blocked by the <a>RateBasedRule</a> that is specified by the <code>RuleId</code>. The maximum number of managed keys that will be blocked is 10,000. If more than 10,000 addresses exceed the rate limit, the 10,000 addresses with the highest rates will be blocked.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFInvalidAccountException} <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
   *   - {WAFNonexistentItemException} <p>The operation failed because the referenced object doesn't exist.</p>
   *   - {WAFInvalidParameterException} <p>The operation failed because AWS WAF didn't recognize a parameter in the request. For example:</p> <ul> <li> <p>You specified an invalid parameter name.</p> </li> <li> <p>You specified an invalid value.</p> </li> <li> <p>You tried to update an object (<code>ByteMatchSet</code>, <code>IPSet</code>, <code>Rule</code>, or <code>WebACL</code>) using an action other than <code>INSERT</code> or <code>DELETE</code>.</p> </li> <li> <p>You tried to create a <code>WebACL</code> with a <code>DefaultAction</code> <code>Type</code> other than <code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p> </li> <li> <p>You tried to create a <code>RateBasedRule</code> with a <code>RateKey</code> value other than <code>IP</code>.</p> </li> <li> <p>You tried to update a <code>WebACL</code> with a <code>WafAction</code> <code>Type</code> other than <code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p> </li> <li> <p>You tried to update a <code>ByteMatchSet</code> with a <code>FieldToMatch</code> <code>Type</code> other than HEADER, METHOD, QUERY_STRING, URI, or BODY.</p> </li> <li> <p>You tried to update a <code>ByteMatchSet</code> with a <code>Field</code> of <code>HEADER</code> but no value for <code>Data</code>.</p> </li> <li> <p>Your request references an ARN that is malformed, or corresponds to a resource with which a web ACL cannot be associated.</p> </li> </ul>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getRateBasedRuleManagedKeys(
    args: GetRateBasedRuleManagedKeysInput
  ): Promise<GetRateBasedRuleManagedKeysOutput>;
  public getRateBasedRuleManagedKeys(
    args: GetRateBasedRuleManagedKeysInput,
    cb: (err: any, data?: GetRateBasedRuleManagedKeysOutput) => void
  ): void;
  public getRateBasedRuleManagedKeys(
    args: GetRateBasedRuleManagedKeysInput,
    cb?: (err: any, data?: GetRateBasedRuleManagedKeysOutput) => void
  ): Promise<GetRateBasedRuleManagedKeysOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetRateBasedRuleManagedKeysCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the <a>RegexMatchSet</a> specified by <code>RegexMatchSetId</code>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFInvalidAccountException} <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
   *   - {WAFNonexistentItemException} <p>The operation failed because the referenced object doesn't exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getRegexMatchSet(
    args: GetRegexMatchSetInput
  ): Promise<GetRegexMatchSetOutput>;
  public getRegexMatchSet(
    args: GetRegexMatchSetInput,
    cb: (err: any, data?: GetRegexMatchSetOutput) => void
  ): void;
  public getRegexMatchSet(
    args: GetRegexMatchSetInput,
    cb?: (err: any, data?: GetRegexMatchSetOutput) => void
  ): Promise<GetRegexMatchSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetRegexMatchSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the <a>RegexPatternSet</a> specified by <code>RegexPatternSetId</code>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFInvalidAccountException} <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
   *   - {WAFNonexistentItemException} <p>The operation failed because the referenced object doesn't exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getRegexPatternSet(
    args: GetRegexPatternSetInput
  ): Promise<GetRegexPatternSetOutput>;
  public getRegexPatternSet(
    args: GetRegexPatternSetInput,
    cb: (err: any, data?: GetRegexPatternSetOutput) => void
  ): void;
  public getRegexPatternSet(
    args: GetRegexPatternSetInput,
    cb?: (err: any, data?: GetRegexPatternSetOutput) => void
  ): Promise<GetRegexPatternSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetRegexPatternSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the <a>Rule</a> that is specified by the <code>RuleId</code> that you included in the <code>GetRule</code> request.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFInvalidAccountException} <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
   *   - {WAFNonexistentItemException} <p>The operation failed because the referenced object doesn't exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getRule(args: GetRuleInput): Promise<GetRuleOutput>;
  public getRule(
    args: GetRuleInput,
    cb: (err: any, data?: GetRuleOutput) => void
  ): void;
  public getRule(
    args: GetRuleInput,
    cb?: (err: any, data?: GetRuleOutput) => void
  ): Promise<GetRuleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetRuleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the <a>RuleGroup</a> that is specified by the <code>RuleGroupId</code> that you included in the <code>GetRuleGroup</code> request.</p> <p>To view the rules in a rule group, use <a>ListActivatedRulesInRuleGroup</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFNonexistentItemException} <p>The operation failed because the referenced object doesn't exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getRuleGroup(args: GetRuleGroupInput): Promise<GetRuleGroupOutput>;
  public getRuleGroup(
    args: GetRuleGroupInput,
    cb: (err: any, data?: GetRuleGroupOutput) => void
  ): void;
  public getRuleGroup(
    args: GetRuleGroupInput,
    cb?: (err: any, data?: GetRuleGroupOutput) => void
  ): Promise<GetRuleGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetRuleGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets detailed information about a specified number of requests--a sample--that AWS WAF randomly selects from among the first 5,000 requests that your AWS resource received during a time range that you choose. You can specify a sample size of up to 500 requests, and you can specify any time range in the previous three hours.</p> <p> <code>GetSampledRequests</code> returns a time range, which is usually the time range that you specified. However, if your resource (such as a CloudFront distribution) received 5,000 requests before the specified time range elapsed, <code>GetSampledRequests</code> returns an updated time range. This new time range indicates the actual period during which AWS WAF selected the requests in the sample.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFNonexistentItemException} <p>The operation failed because the referenced object doesn't exist.</p>
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getSampledRequests(
    args: GetSampledRequestsInput
  ): Promise<GetSampledRequestsOutput>;
  public getSampledRequests(
    args: GetSampledRequestsInput,
    cb: (err: any, data?: GetSampledRequestsOutput) => void
  ): void;
  public getSampledRequests(
    args: GetSampledRequestsInput,
    cb?: (err: any, data?: GetSampledRequestsOutput) => void
  ): Promise<GetSampledRequestsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetSampledRequestsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the <a>SizeConstraintSet</a> specified by <code>SizeConstraintSetId</code>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFInvalidAccountException} <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
   *   - {WAFNonexistentItemException} <p>The operation failed because the referenced object doesn't exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getSizeConstraintSet(
    args: GetSizeConstraintSetInput
  ): Promise<GetSizeConstraintSetOutput>;
  public getSizeConstraintSet(
    args: GetSizeConstraintSetInput,
    cb: (err: any, data?: GetSizeConstraintSetOutput) => void
  ): void;
  public getSizeConstraintSet(
    args: GetSizeConstraintSetInput,
    cb?: (err: any, data?: GetSizeConstraintSetOutput) => void
  ): Promise<GetSizeConstraintSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetSizeConstraintSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the <a>SqlInjectionMatchSet</a> that is specified by <code>SqlInjectionMatchSetId</code>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFInvalidAccountException} <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
   *   - {WAFNonexistentItemException} <p>The operation failed because the referenced object doesn't exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getSqlInjectionMatchSet(
    args: GetSqlInjectionMatchSetInput
  ): Promise<GetSqlInjectionMatchSetOutput>;
  public getSqlInjectionMatchSet(
    args: GetSqlInjectionMatchSetInput,
    cb: (err: any, data?: GetSqlInjectionMatchSetOutput) => void
  ): void;
  public getSqlInjectionMatchSet(
    args: GetSqlInjectionMatchSetInput,
    cb?: (err: any, data?: GetSqlInjectionMatchSetOutput) => void
  ): Promise<GetSqlInjectionMatchSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetSqlInjectionMatchSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the <a>WebACL</a> that is specified by <code>WebACLId</code>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFInvalidAccountException} <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
   *   - {WAFNonexistentItemException} <p>The operation failed because the referenced object doesn't exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getWebACL(args: GetWebACLInput): Promise<GetWebACLOutput>;
  public getWebACL(
    args: GetWebACLInput,
    cb: (err: any, data?: GetWebACLOutput) => void
  ): void;
  public getWebACL(
    args: GetWebACLInput,
    cb?: (err: any, data?: GetWebACLOutput) => void
  ): Promise<GetWebACLOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetWebACLCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the <a>XssMatchSet</a> that is specified by <code>XssMatchSetId</code>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFInvalidAccountException} <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
   *   - {WAFNonexistentItemException} <p>The operation failed because the referenced object doesn't exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getXssMatchSet(
    args: GetXssMatchSetInput
  ): Promise<GetXssMatchSetOutput>;
  public getXssMatchSet(
    args: GetXssMatchSetInput,
    cb: (err: any, data?: GetXssMatchSetOutput) => void
  ): void;
  public getXssMatchSet(
    args: GetXssMatchSetInput,
    cb?: (err: any, data?: GetXssMatchSetOutput) => void
  ): Promise<GetXssMatchSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetXssMatchSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns an array of <a>ActivatedRule</a> objects.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFNonexistentItemException} <p>The operation failed because the referenced object doesn't exist.</p>
   *   - {WAFInvalidParameterException} <p>The operation failed because AWS WAF didn't recognize a parameter in the request. For example:</p> <ul> <li> <p>You specified an invalid parameter name.</p> </li> <li> <p>You specified an invalid value.</p> </li> <li> <p>You tried to update an object (<code>ByteMatchSet</code>, <code>IPSet</code>, <code>Rule</code>, or <code>WebACL</code>) using an action other than <code>INSERT</code> or <code>DELETE</code>.</p> </li> <li> <p>You tried to create a <code>WebACL</code> with a <code>DefaultAction</code> <code>Type</code> other than <code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p> </li> <li> <p>You tried to create a <code>RateBasedRule</code> with a <code>RateKey</code> value other than <code>IP</code>.</p> </li> <li> <p>You tried to update a <code>WebACL</code> with a <code>WafAction</code> <code>Type</code> other than <code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p> </li> <li> <p>You tried to update a <code>ByteMatchSet</code> with a <code>FieldToMatch</code> <code>Type</code> other than HEADER, METHOD, QUERY_STRING, URI, or BODY.</p> </li> <li> <p>You tried to update a <code>ByteMatchSet</code> with a <code>Field</code> of <code>HEADER</code> but no value for <code>Data</code>.</p> </li> <li> <p>Your request references an ARN that is malformed, or corresponds to a resource with which a web ACL cannot be associated.</p> </li> </ul>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listActivatedRulesInRuleGroup(
    args: ListActivatedRulesInRuleGroupInput
  ): Promise<ListActivatedRulesInRuleGroupOutput>;
  public listActivatedRulesInRuleGroup(
    args: ListActivatedRulesInRuleGroupInput,
    cb: (err: any, data?: ListActivatedRulesInRuleGroupOutput) => void
  ): void;
  public listActivatedRulesInRuleGroup(
    args: ListActivatedRulesInRuleGroupInput,
    cb?: (err: any, data?: ListActivatedRulesInRuleGroupOutput) => void
  ): Promise<ListActivatedRulesInRuleGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListActivatedRulesInRuleGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns an array of <a>ByteMatchSetSummary</a> objects.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFInvalidAccountException} <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listByteMatchSets(
    args: ListByteMatchSetsInput
  ): Promise<ListByteMatchSetsOutput>;
  public listByteMatchSets(
    args: ListByteMatchSetsInput,
    cb: (err: any, data?: ListByteMatchSetsOutput) => void
  ): void;
  public listByteMatchSets(
    args: ListByteMatchSetsInput,
    cb?: (err: any, data?: ListByteMatchSetsOutput) => void
  ): Promise<ListByteMatchSetsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListByteMatchSetsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns an array of <a>GeoMatchSetSummary</a> objects in the response.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFInvalidAccountException} <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listGeoMatchSets(
    args: ListGeoMatchSetsInput
  ): Promise<ListGeoMatchSetsOutput>;
  public listGeoMatchSets(
    args: ListGeoMatchSetsInput,
    cb: (err: any, data?: ListGeoMatchSetsOutput) => void
  ): void;
  public listGeoMatchSets(
    args: ListGeoMatchSetsInput,
    cb?: (err: any, data?: ListGeoMatchSetsOutput) => void
  ): Promise<ListGeoMatchSetsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListGeoMatchSetsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns an array of <a>IPSetSummary</a> objects in the response.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFInvalidAccountException} <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listIPSets(args: ListIPSetsInput): Promise<ListIPSetsOutput>;
  public listIPSets(
    args: ListIPSetsInput,
    cb: (err: any, data?: ListIPSetsOutput) => void
  ): void;
  public listIPSets(
    args: ListIPSetsInput,
    cb?: (err: any, data?: ListIPSetsOutput) => void
  ): Promise<ListIPSetsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListIPSetsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns an array of <a>LoggingConfiguration</a> objects.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFNonexistentItemException} <p>The operation failed because the referenced object doesn't exist.</p>
   *   - {WAFInvalidParameterException} <p>The operation failed because AWS WAF didn't recognize a parameter in the request. For example:</p> <ul> <li> <p>You specified an invalid parameter name.</p> </li> <li> <p>You specified an invalid value.</p> </li> <li> <p>You tried to update an object (<code>ByteMatchSet</code>, <code>IPSet</code>, <code>Rule</code>, or <code>WebACL</code>) using an action other than <code>INSERT</code> or <code>DELETE</code>.</p> </li> <li> <p>You tried to create a <code>WebACL</code> with a <code>DefaultAction</code> <code>Type</code> other than <code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p> </li> <li> <p>You tried to create a <code>RateBasedRule</code> with a <code>RateKey</code> value other than <code>IP</code>.</p> </li> <li> <p>You tried to update a <code>WebACL</code> with a <code>WafAction</code> <code>Type</code> other than <code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p> </li> <li> <p>You tried to update a <code>ByteMatchSet</code> with a <code>FieldToMatch</code> <code>Type</code> other than HEADER, METHOD, QUERY_STRING, URI, or BODY.</p> </li> <li> <p>You tried to update a <code>ByteMatchSet</code> with a <code>Field</code> of <code>HEADER</code> but no value for <code>Data</code>.</p> </li> <li> <p>Your request references an ARN that is malformed, or corresponds to a resource with which a web ACL cannot be associated.</p> </li> </ul>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listLoggingConfigurations(
    args: ListLoggingConfigurationsInput
  ): Promise<ListLoggingConfigurationsOutput>;
  public listLoggingConfigurations(
    args: ListLoggingConfigurationsInput,
    cb: (err: any, data?: ListLoggingConfigurationsOutput) => void
  ): void;
  public listLoggingConfigurations(
    args: ListLoggingConfigurationsInput,
    cb?: (err: any, data?: ListLoggingConfigurationsOutput) => void
  ): Promise<ListLoggingConfigurationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListLoggingConfigurationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns an array of <a>RuleSummary</a> objects.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFInvalidAccountException} <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listRateBasedRules(
    args: ListRateBasedRulesInput
  ): Promise<ListRateBasedRulesOutput>;
  public listRateBasedRules(
    args: ListRateBasedRulesInput,
    cb: (err: any, data?: ListRateBasedRulesOutput) => void
  ): void;
  public listRateBasedRules(
    args: ListRateBasedRulesInput,
    cb?: (err: any, data?: ListRateBasedRulesOutput) => void
  ): Promise<ListRateBasedRulesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListRateBasedRulesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns an array of <a>RegexMatchSetSummary</a> objects.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFInvalidAccountException} <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listRegexMatchSets(
    args: ListRegexMatchSetsInput
  ): Promise<ListRegexMatchSetsOutput>;
  public listRegexMatchSets(
    args: ListRegexMatchSetsInput,
    cb: (err: any, data?: ListRegexMatchSetsOutput) => void
  ): void;
  public listRegexMatchSets(
    args: ListRegexMatchSetsInput,
    cb?: (err: any, data?: ListRegexMatchSetsOutput) => void
  ): Promise<ListRegexMatchSetsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListRegexMatchSetsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns an array of <a>RegexPatternSetSummary</a> objects.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFInvalidAccountException} <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listRegexPatternSets(
    args: ListRegexPatternSetsInput
  ): Promise<ListRegexPatternSetsOutput>;
  public listRegexPatternSets(
    args: ListRegexPatternSetsInput,
    cb: (err: any, data?: ListRegexPatternSetsOutput) => void
  ): void;
  public listRegexPatternSets(
    args: ListRegexPatternSetsInput,
    cb?: (err: any, data?: ListRegexPatternSetsOutput) => void
  ): Promise<ListRegexPatternSetsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListRegexPatternSetsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns an array of <a>RuleGroup</a> objects.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listRuleGroups(
    args: ListRuleGroupsInput
  ): Promise<ListRuleGroupsOutput>;
  public listRuleGroups(
    args: ListRuleGroupsInput,
    cb: (err: any, data?: ListRuleGroupsOutput) => void
  ): void;
  public listRuleGroups(
    args: ListRuleGroupsInput,
    cb?: (err: any, data?: ListRuleGroupsOutput) => void
  ): Promise<ListRuleGroupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListRuleGroupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns an array of <a>RuleSummary</a> objects.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFInvalidAccountException} <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listRules(args: ListRulesInput): Promise<ListRulesOutput>;
  public listRules(
    args: ListRulesInput,
    cb: (err: any, data?: ListRulesOutput) => void
  ): void;
  public listRules(
    args: ListRulesInput,
    cb?: (err: any, data?: ListRulesOutput) => void
  ): Promise<ListRulesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListRulesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns an array of <a>SizeConstraintSetSummary</a> objects.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFInvalidAccountException} <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listSizeConstraintSets(
    args: ListSizeConstraintSetsInput
  ): Promise<ListSizeConstraintSetsOutput>;
  public listSizeConstraintSets(
    args: ListSizeConstraintSetsInput,
    cb: (err: any, data?: ListSizeConstraintSetsOutput) => void
  ): void;
  public listSizeConstraintSets(
    args: ListSizeConstraintSetsInput,
    cb?: (err: any, data?: ListSizeConstraintSetsOutput) => void
  ): Promise<ListSizeConstraintSetsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListSizeConstraintSetsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns an array of <a>SqlInjectionMatchSet</a> objects.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFInvalidAccountException} <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listSqlInjectionMatchSets(
    args: ListSqlInjectionMatchSetsInput
  ): Promise<ListSqlInjectionMatchSetsOutput>;
  public listSqlInjectionMatchSets(
    args: ListSqlInjectionMatchSetsInput,
    cb: (err: any, data?: ListSqlInjectionMatchSetsOutput) => void
  ): void;
  public listSqlInjectionMatchSets(
    args: ListSqlInjectionMatchSetsInput,
    cb?: (err: any, data?: ListSqlInjectionMatchSetsOutput) => void
  ): Promise<ListSqlInjectionMatchSetsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListSqlInjectionMatchSetsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns an array of <a>RuleGroup</a> objects that you are subscribed to.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFNonexistentItemException} <p>The operation failed because the referenced object doesn't exist.</p>
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listSubscribedRuleGroups(
    args: ListSubscribedRuleGroupsInput
  ): Promise<ListSubscribedRuleGroupsOutput>;
  public listSubscribedRuleGroups(
    args: ListSubscribedRuleGroupsInput,
    cb: (err: any, data?: ListSubscribedRuleGroupsOutput) => void
  ): void;
  public listSubscribedRuleGroups(
    args: ListSubscribedRuleGroupsInput,
    cb?: (err: any, data?: ListSubscribedRuleGroupsOutput) => void
  ): Promise<ListSubscribedRuleGroupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListSubscribedRuleGroupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * ListTagsForResource operation
   *
   * This operation may fail with one of the following errors:
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFInvalidParameterException} <p>The operation failed because AWS WAF didn't recognize a parameter in the request. For example:</p> <ul> <li> <p>You specified an invalid parameter name.</p> </li> <li> <p>You specified an invalid value.</p> </li> <li> <p>You tried to update an object (<code>ByteMatchSet</code>, <code>IPSet</code>, <code>Rule</code>, or <code>WebACL</code>) using an action other than <code>INSERT</code> or <code>DELETE</code>.</p> </li> <li> <p>You tried to create a <code>WebACL</code> with a <code>DefaultAction</code> <code>Type</code> other than <code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p> </li> <li> <p>You tried to create a <code>RateBasedRule</code> with a <code>RateKey</code> value other than <code>IP</code>.</p> </li> <li> <p>You tried to update a <code>WebACL</code> with a <code>WafAction</code> <code>Type</code> other than <code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p> </li> <li> <p>You tried to update a <code>ByteMatchSet</code> with a <code>FieldToMatch</code> <code>Type</code> other than HEADER, METHOD, QUERY_STRING, URI, or BODY.</p> </li> <li> <p>You tried to update a <code>ByteMatchSet</code> with a <code>Field</code> of <code>HEADER</code> but no value for <code>Data</code>.</p> </li> <li> <p>Your request references an ARN that is malformed, or corresponds to a resource with which a web ACL cannot be associated.</p> </li> </ul>
   *   - {WAFNonexistentItemException} <p>The operation failed because the referenced object doesn't exist.</p>
   *   - {WAFBadRequestException} WAFBadRequestException shape
   *   - {WAFTagOperationException} WAFTagOperationException shape
   *   - {WAFTagOperationInternalErrorException} WAFTagOperationInternalErrorException shape
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTagsForResource(
    args: ListTagsForResourceInput
  ): Promise<ListTagsForResourceOutput>;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb: (err: any, data?: ListTagsForResourceOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb?: (err: any, data?: ListTagsForResourceOutput) => void
  ): Promise<ListTagsForResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTagsForResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns an array of <a>WebACLSummary</a> objects in the response.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFInvalidAccountException} <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listWebACLs(args: ListWebACLsInput): Promise<ListWebACLsOutput>;
  public listWebACLs(
    args: ListWebACLsInput,
    cb: (err: any, data?: ListWebACLsOutput) => void
  ): void;
  public listWebACLs(
    args: ListWebACLsInput,
    cb?: (err: any, data?: ListWebACLsOutput) => void
  ): Promise<ListWebACLsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListWebACLsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns an array of <a>XssMatchSet</a> objects.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFInvalidAccountException} <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listXssMatchSets(
    args: ListXssMatchSetsInput
  ): Promise<ListXssMatchSetsOutput>;
  public listXssMatchSets(
    args: ListXssMatchSetsInput,
    cb: (err: any, data?: ListXssMatchSetsOutput) => void
  ): void;
  public listXssMatchSets(
    args: ListXssMatchSetsInput,
    cb?: (err: any, data?: ListXssMatchSetsOutput) => void
  ): Promise<ListXssMatchSetsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListXssMatchSetsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Associates a <a>LoggingConfiguration</a> with a specified web ACL.</p> <p>You can access information about all traffic that AWS WAF inspects using the following steps:</p> <ol> <li> <p>Create an Amazon Kinesis Data Firehose . </p> <p>Create the data firehose with a PUT source and in the region that you are operating. However, if you are capturing logs for Amazon CloudFront, always create the firehose in US East (N. Virginia). </p> <note> <p>Do not create the data firehose using a <code>Kinesis stream</code> as your source.</p> </note> </li> <li> <p>Associate that firehose to your web ACL using a <code>PutLoggingConfiguration</code> request.</p> </li> </ol> <p>When you successfully enable logging using a <code>PutLoggingConfiguration</code> request, AWS WAF will create a service linked role with the necessary permissions to write logs to the Amazon Kinesis Data Firehose. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/logging.html">Logging Web ACL Traffic Information</a> in the <i>AWS WAF Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFNonexistentItemException} <p>The operation failed because the referenced object doesn't exist.</p>
   *   - {WAFStaleDataException} <p>The operation failed because you tried to create, update, or delete an object by using a change token that has already been used.</p>
   *   - {WAFServiceLinkedRoleErrorException} <p>AWS WAF is not able to access the service linked role. This can be caused by a previous <code>PutLoggingConfiguration</code> request, which can lock the service linked role for about 20 seconds. Please try your request again. The service linked role can also be locked by a previous <code>DeleteServiceLinkedRole</code> request, which can lock the role for 15 minutes or more. If you recently made a <code>DeleteServiceLinkedRole</code>, wait at least 15 minutes and try the request again. If you receive this same exception again, you will have to wait additional time until the role is unlocked.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putLoggingConfiguration(
    args: PutLoggingConfigurationInput
  ): Promise<PutLoggingConfigurationOutput>;
  public putLoggingConfiguration(
    args: PutLoggingConfigurationInput,
    cb: (err: any, data?: PutLoggingConfigurationOutput) => void
  ): void;
  public putLoggingConfiguration(
    args: PutLoggingConfigurationInput,
    cb?: (err: any, data?: PutLoggingConfigurationOutput) => void
  ): Promise<PutLoggingConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutLoggingConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Attaches a IAM policy to the specified resource. The only supported use for this action is to share a RuleGroup across accounts.</p> <p>The <code>PutPermissionPolicy</code> is subject to the following restrictions:</p> <ul> <li> <p>You can attach only one policy with each <code>PutPermissionPolicy</code> request.</p> </li> <li> <p>The policy must include an <code>Effect</code>, <code>Action</code> and <code>Principal</code>. </p> </li> <li> <p> <code>Effect</code> must specify <code>Allow</code>.</p> </li> <li> <p>The <code>Action</code> in the policy must be <code>waf:UpdateWebACL</code>, <code>waf-regional:UpdateWebACL</code>, <code>waf:GetRuleGroup</code> and <code>waf-regional:GetRuleGroup</code> . Any extra or wildcard actions in the policy will be rejected.</p> </li> <li> <p>The policy cannot include a <code>Resource</code> parameter.</p> </li> <li> <p>The ARN in the request must be a valid WAF RuleGroup ARN and the RuleGroup must exist in the same region.</p> </li> <li> <p>The user making the request must be the owner of the RuleGroup.</p> </li> <li> <p>Your policy must be composed using IAM Policy version 2012-10-17.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html">IAM Policies</a>. </p> <p>An example of a valid policy parameter is shown in the Examples section below.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFStaleDataException} <p>The operation failed because you tried to create, update, or delete an object by using a change token that has already been used.</p>
   *   - {WAFNonexistentItemException} <p>The operation failed because the referenced object doesn't exist.</p>
   *   - {WAFInvalidPermissionPolicyException} <p>The operation failed because the specified policy is not in the proper format. </p> <p>The policy is subject to the following restrictions:</p> <ul> <li> <p>You can attach only one policy with each <code>PutPermissionPolicy</code> request.</p> </li> <li> <p>The policy must include an <code>Effect</code>, <code>Action</code> and <code>Principal</code>. </p> </li> <li> <p> <code>Effect</code> must specify <code>Allow</code>.</p> </li> <li> <p>The <code>Action</code> in the policy must be <code>waf:UpdateWebACL</code>, <code>waf-regional:UpdateWebACL</code>, <code>waf:GetRuleGroup</code> and <code>waf-regional:GetRuleGroup</code> . Any extra or wildcard actions in the policy will be rejected.</p> </li> <li> <p>The policy cannot include a <code>Resource</code> parameter.</p> </li> <li> <p>The ARN in the request must be a valid WAF RuleGroup ARN and the RuleGroup must exist in the same region.</p> </li> <li> <p>The user making the request must be the owner of the RuleGroup.</p> </li> <li> <p>Your policy must be composed using IAM Policy version 2012-10-17.</p> </li> </ul>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putPermissionPolicy(
    args: PutPermissionPolicyInput
  ): Promise<PutPermissionPolicyOutput>;
  public putPermissionPolicy(
    args: PutPermissionPolicyInput,
    cb: (err: any, data?: PutPermissionPolicyOutput) => void
  ): void;
  public putPermissionPolicy(
    args: PutPermissionPolicyInput,
    cb?: (err: any, data?: PutPermissionPolicyOutput) => void
  ): Promise<PutPermissionPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutPermissionPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * TagResource operation
   *
   * This operation may fail with one of the following errors:
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFInvalidParameterException} <p>The operation failed because AWS WAF didn't recognize a parameter in the request. For example:</p> <ul> <li> <p>You specified an invalid parameter name.</p> </li> <li> <p>You specified an invalid value.</p> </li> <li> <p>You tried to update an object (<code>ByteMatchSet</code>, <code>IPSet</code>, <code>Rule</code>, or <code>WebACL</code>) using an action other than <code>INSERT</code> or <code>DELETE</code>.</p> </li> <li> <p>You tried to create a <code>WebACL</code> with a <code>DefaultAction</code> <code>Type</code> other than <code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p> </li> <li> <p>You tried to create a <code>RateBasedRule</code> with a <code>RateKey</code> value other than <code>IP</code>.</p> </li> <li> <p>You tried to update a <code>WebACL</code> with a <code>WafAction</code> <code>Type</code> other than <code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p> </li> <li> <p>You tried to update a <code>ByteMatchSet</code> with a <code>FieldToMatch</code> <code>Type</code> other than HEADER, METHOD, QUERY_STRING, URI, or BODY.</p> </li> <li> <p>You tried to update a <code>ByteMatchSet</code> with a <code>Field</code> of <code>HEADER</code> but no value for <code>Data</code>.</p> </li> <li> <p>Your request references an ARN that is malformed, or corresponds to a resource with which a web ACL cannot be associated.</p> </li> </ul>
   *   - {WAFLimitsExceededException} <p>The operation exceeds a resource limit, for example, the maximum number of <code>WebACL</code> objects that you can create for an AWS account. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">Limits</a> in the <i>AWS WAF Developer Guide</i>.</p>
   *   - {WAFNonexistentItemException} <p>The operation failed because the referenced object doesn't exist.</p>
   *   - {WAFBadRequestException} WAFBadRequestException shape
   *   - {WAFTagOperationException} WAFTagOperationException shape
   *   - {WAFTagOperationInternalErrorException} WAFTagOperationInternalErrorException shape
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public tagResource(args: TagResourceInput): Promise<TagResourceOutput>;
  public tagResource(
    args: TagResourceInput,
    cb: (err: any, data?: TagResourceOutput) => void
  ): void;
  public tagResource(
    args: TagResourceInput,
    cb?: (err: any, data?: TagResourceOutput) => void
  ): Promise<TagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * UntagResource operation
   *
   * This operation may fail with one of the following errors:
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFInvalidParameterException} <p>The operation failed because AWS WAF didn't recognize a parameter in the request. For example:</p> <ul> <li> <p>You specified an invalid parameter name.</p> </li> <li> <p>You specified an invalid value.</p> </li> <li> <p>You tried to update an object (<code>ByteMatchSet</code>, <code>IPSet</code>, <code>Rule</code>, or <code>WebACL</code>) using an action other than <code>INSERT</code> or <code>DELETE</code>.</p> </li> <li> <p>You tried to create a <code>WebACL</code> with a <code>DefaultAction</code> <code>Type</code> other than <code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p> </li> <li> <p>You tried to create a <code>RateBasedRule</code> with a <code>RateKey</code> value other than <code>IP</code>.</p> </li> <li> <p>You tried to update a <code>WebACL</code> with a <code>WafAction</code> <code>Type</code> other than <code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p> </li> <li> <p>You tried to update a <code>ByteMatchSet</code> with a <code>FieldToMatch</code> <code>Type</code> other than HEADER, METHOD, QUERY_STRING, URI, or BODY.</p> </li> <li> <p>You tried to update a <code>ByteMatchSet</code> with a <code>Field</code> of <code>HEADER</code> but no value for <code>Data</code>.</p> </li> <li> <p>Your request references an ARN that is malformed, or corresponds to a resource with which a web ACL cannot be associated.</p> </li> </ul>
   *   - {WAFNonexistentItemException} <p>The operation failed because the referenced object doesn't exist.</p>
   *   - {WAFBadRequestException} WAFBadRequestException shape
   *   - {WAFTagOperationException} WAFTagOperationException shape
   *   - {WAFTagOperationInternalErrorException} WAFTagOperationInternalErrorException shape
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public untagResource(args: UntagResourceInput): Promise<UntagResourceOutput>;
  public untagResource(
    args: UntagResourceInput,
    cb: (err: any, data?: UntagResourceOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceInput,
    cb?: (err: any, data?: UntagResourceOutput) => void
  ): Promise<UntagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UntagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Inserts or deletes <a>ByteMatchTuple</a> objects (filters) in a <a>ByteMatchSet</a>. For each <code>ByteMatchTuple</code> object, you specify the following values: </p> <ul> <li> <p>Whether to insert or delete the object from the array. If you want to change a <code>ByteMatchSetUpdate</code> object, you delete the existing object and add a new one.</p> </li> <li> <p>The part of a web request that you want AWS WAF to inspect, such as a query string or the value of the <code>User-Agent</code> header. </p> </li> <li> <p>The bytes (typically a string that corresponds with ASCII characters) that you want AWS WAF to look for. For more information, including how you specify the values for the AWS WAF API and the AWS CLI or SDKs, see <code>TargetString</code> in the <a>ByteMatchTuple</a> data type. </p> </li> <li> <p>Where to look, such as at the beginning or the end of a query string.</p> </li> <li> <p>Whether to perform any conversions on the request, such as converting it to lowercase, before inspecting it for the specified string.</p> </li> </ul> <p>For example, you can add a <code>ByteMatchSetUpdate</code> object that matches web requests in which <code>User-Agent</code> headers contain the string <code>BadBot</code>. You can then configure AWS WAF to block those requests.</p> <p>To create and configure a <code>ByteMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Create a <code>ByteMatchSet.</code> For more information, see <a>CreateByteMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <code>UpdateByteMatchSet</code> request.</p> </li> <li> <p>Submit an <code>UpdateByteMatchSet</code> request to specify the part of the request that you want AWS WAF to inspect (for example, the header or the URI) and the value that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFInvalidAccountException} <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
   *   - {WAFInvalidOperationException} <p>The operation failed because there was nothing to do. For example:</p> <ul> <li> <p>You tried to remove a <code>Rule</code> from a <code>WebACL</code>, but the <code>Rule</code> isn't in the specified <code>WebACL</code>.</p> </li> <li> <p>You tried to remove an IP address from an <code>IPSet</code>, but the IP address isn't in the specified <code>IPSet</code>.</p> </li> <li> <p>You tried to remove a <code>ByteMatchTuple</code> from a <code>ByteMatchSet</code>, but the <code>ByteMatchTuple</code> isn't in the specified <code>WebACL</code>.</p> </li> <li> <p>You tried to add a <code>Rule</code> to a <code>WebACL</code>, but the <code>Rule</code> already exists in the specified <code>WebACL</code>.</p> </li> <li> <p>You tried to add a <code>ByteMatchTuple</code> to a <code>ByteMatchSet</code>, but the <code>ByteMatchTuple</code> already exists in the specified <code>WebACL</code>.</p> </li> </ul>
   *   - {WAFInvalidParameterException} <p>The operation failed because AWS WAF didn't recognize a parameter in the request. For example:</p> <ul> <li> <p>You specified an invalid parameter name.</p> </li> <li> <p>You specified an invalid value.</p> </li> <li> <p>You tried to update an object (<code>ByteMatchSet</code>, <code>IPSet</code>, <code>Rule</code>, or <code>WebACL</code>) using an action other than <code>INSERT</code> or <code>DELETE</code>.</p> </li> <li> <p>You tried to create a <code>WebACL</code> with a <code>DefaultAction</code> <code>Type</code> other than <code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p> </li> <li> <p>You tried to create a <code>RateBasedRule</code> with a <code>RateKey</code> value other than <code>IP</code>.</p> </li> <li> <p>You tried to update a <code>WebACL</code> with a <code>WafAction</code> <code>Type</code> other than <code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p> </li> <li> <p>You tried to update a <code>ByteMatchSet</code> with a <code>FieldToMatch</code> <code>Type</code> other than HEADER, METHOD, QUERY_STRING, URI, or BODY.</p> </li> <li> <p>You tried to update a <code>ByteMatchSet</code> with a <code>Field</code> of <code>HEADER</code> but no value for <code>Data</code>.</p> </li> <li> <p>Your request references an ARN that is malformed, or corresponds to a resource with which a web ACL cannot be associated.</p> </li> </ul>
   *   - {WAFNonexistentContainerException} <p>The operation failed because you tried to add an object to or delete an object from another object that doesn't exist. For example:</p> <ul> <li> <p>You tried to add a <code>Rule</code> to or delete a <code>Rule</code> from a <code>WebACL</code> that doesn't exist.</p> </li> <li> <p>You tried to add a <code>ByteMatchSet</code> to or delete a <code>ByteMatchSet</code> from a <code>Rule</code> that doesn't exist.</p> </li> <li> <p>You tried to add an IP address to or delete an IP address from an <code>IPSet</code> that doesn't exist.</p> </li> <li> <p>You tried to add a <code>ByteMatchTuple</code> to or delete a <code>ByteMatchTuple</code> from a <code>ByteMatchSet</code> that doesn't exist.</p> </li> </ul>
   *   - {WAFNonexistentItemException} <p>The operation failed because the referenced object doesn't exist.</p>
   *   - {WAFStaleDataException} <p>The operation failed because you tried to create, update, or delete an object by using a change token that has already been used.</p>
   *   - {WAFLimitsExceededException} <p>The operation exceeds a resource limit, for example, the maximum number of <code>WebACL</code> objects that you can create for an AWS account. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">Limits</a> in the <i>AWS WAF Developer Guide</i>.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateByteMatchSet(
    args: UpdateByteMatchSetInput
  ): Promise<UpdateByteMatchSetOutput>;
  public updateByteMatchSet(
    args: UpdateByteMatchSetInput,
    cb: (err: any, data?: UpdateByteMatchSetOutput) => void
  ): void;
  public updateByteMatchSet(
    args: UpdateByteMatchSetInput,
    cb?: (err: any, data?: UpdateByteMatchSetOutput) => void
  ): Promise<UpdateByteMatchSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateByteMatchSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Inserts or deletes <a>GeoMatchConstraint</a> objects in an <code>GeoMatchSet</code>. For each <code>GeoMatchConstraint</code> object, you specify the following values: </p> <ul> <li> <p>Whether to insert or delete the object from the array. If you want to change an <code>GeoMatchConstraint</code> object, you delete the existing object and add a new one.</p> </li> <li> <p>The <code>Type</code>. The only valid value for <code>Type</code> is <code>Country</code>.</p> </li> <li> <p>The <code>Value</code>, which is a two character code for the country to add to the <code>GeoMatchConstraint</code> object. Valid codes are listed in <a>GeoMatchConstraint$Value</a>.</p> </li> </ul> <p>To create and configure an <code>GeoMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Submit a <a>CreateGeoMatchSet</a> request.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateGeoMatchSet</a> request.</p> </li> <li> <p>Submit an <code>UpdateGeoMatchSet</code> request to specify the country that you want AWS WAF to watch for.</p> </li> </ol> <p>When you update an <code>GeoMatchSet</code>, you specify the country that you want to add and/or the country that you want to delete. If you want to change a country, you delete the existing country and add the new one.</p> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFStaleDataException} <p>The operation failed because you tried to create, update, or delete an object by using a change token that has already been used.</p>
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFInvalidAccountException} <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
   *   - {WAFInvalidOperationException} <p>The operation failed because there was nothing to do. For example:</p> <ul> <li> <p>You tried to remove a <code>Rule</code> from a <code>WebACL</code>, but the <code>Rule</code> isn't in the specified <code>WebACL</code>.</p> </li> <li> <p>You tried to remove an IP address from an <code>IPSet</code>, but the IP address isn't in the specified <code>IPSet</code>.</p> </li> <li> <p>You tried to remove a <code>ByteMatchTuple</code> from a <code>ByteMatchSet</code>, but the <code>ByteMatchTuple</code> isn't in the specified <code>WebACL</code>.</p> </li> <li> <p>You tried to add a <code>Rule</code> to a <code>WebACL</code>, but the <code>Rule</code> already exists in the specified <code>WebACL</code>.</p> </li> <li> <p>You tried to add a <code>ByteMatchTuple</code> to a <code>ByteMatchSet</code>, but the <code>ByteMatchTuple</code> already exists in the specified <code>WebACL</code>.</p> </li> </ul>
   *   - {WAFInvalidParameterException} <p>The operation failed because AWS WAF didn't recognize a parameter in the request. For example:</p> <ul> <li> <p>You specified an invalid parameter name.</p> </li> <li> <p>You specified an invalid value.</p> </li> <li> <p>You tried to update an object (<code>ByteMatchSet</code>, <code>IPSet</code>, <code>Rule</code>, or <code>WebACL</code>) using an action other than <code>INSERT</code> or <code>DELETE</code>.</p> </li> <li> <p>You tried to create a <code>WebACL</code> with a <code>DefaultAction</code> <code>Type</code> other than <code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p> </li> <li> <p>You tried to create a <code>RateBasedRule</code> with a <code>RateKey</code> value other than <code>IP</code>.</p> </li> <li> <p>You tried to update a <code>WebACL</code> with a <code>WafAction</code> <code>Type</code> other than <code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p> </li> <li> <p>You tried to update a <code>ByteMatchSet</code> with a <code>FieldToMatch</code> <code>Type</code> other than HEADER, METHOD, QUERY_STRING, URI, or BODY.</p> </li> <li> <p>You tried to update a <code>ByteMatchSet</code> with a <code>Field</code> of <code>HEADER</code> but no value for <code>Data</code>.</p> </li> <li> <p>Your request references an ARN that is malformed, or corresponds to a resource with which a web ACL cannot be associated.</p> </li> </ul>
   *   - {WAFNonexistentContainerException} <p>The operation failed because you tried to add an object to or delete an object from another object that doesn't exist. For example:</p> <ul> <li> <p>You tried to add a <code>Rule</code> to or delete a <code>Rule</code> from a <code>WebACL</code> that doesn't exist.</p> </li> <li> <p>You tried to add a <code>ByteMatchSet</code> to or delete a <code>ByteMatchSet</code> from a <code>Rule</code> that doesn't exist.</p> </li> <li> <p>You tried to add an IP address to or delete an IP address from an <code>IPSet</code> that doesn't exist.</p> </li> <li> <p>You tried to add a <code>ByteMatchTuple</code> to or delete a <code>ByteMatchTuple</code> from a <code>ByteMatchSet</code> that doesn't exist.</p> </li> </ul>
   *   - {WAFNonexistentItemException} <p>The operation failed because the referenced object doesn't exist.</p>
   *   - {WAFReferencedItemException} <p>The operation failed because you tried to delete an object that is still in use. For example:</p> <ul> <li> <p>You tried to delete a <code>ByteMatchSet</code> that is still referenced by a <code>Rule</code>.</p> </li> <li> <p>You tried to delete a <code>Rule</code> that is still referenced by a <code>WebACL</code>.</p> </li> </ul>
   *   - {WAFLimitsExceededException} <p>The operation exceeds a resource limit, for example, the maximum number of <code>WebACL</code> objects that you can create for an AWS account. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">Limits</a> in the <i>AWS WAF Developer Guide</i>.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateGeoMatchSet(
    args: UpdateGeoMatchSetInput
  ): Promise<UpdateGeoMatchSetOutput>;
  public updateGeoMatchSet(
    args: UpdateGeoMatchSetInput,
    cb: (err: any, data?: UpdateGeoMatchSetOutput) => void
  ): void;
  public updateGeoMatchSet(
    args: UpdateGeoMatchSetInput,
    cb?: (err: any, data?: UpdateGeoMatchSetOutput) => void
  ): Promise<UpdateGeoMatchSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateGeoMatchSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Inserts or deletes <a>IPSetDescriptor</a> objects in an <code>IPSet</code>. For each <code>IPSetDescriptor</code> object, you specify the following values: </p> <ul> <li> <p>Whether to insert or delete the object from the array. If you want to change an <code>IPSetDescriptor</code> object, you delete the existing object and add a new one.</p> </li> <li> <p>The IP address version, <code>IPv4</code> or <code>IPv6</code>. </p> </li> <li> <p>The IP address in CIDR notation, for example, <code>192.0.2.0/24</code> (for the range of IP addresses from <code>192.0.2.0</code> to <code>192.0.2.255</code>) or <code>192.0.2.44/32</code> (for the individual IP address <code>192.0.2.44</code>). </p> </li> </ul> <p>AWS WAF supports IPv4 address ranges: /8 and any range between /16 through /32. AWS WAF supports IPv6 address ranges: /24, /32, /48, /56, /64, and /128. For more information about CIDR notation, see the Wikipedia entry <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless Inter-Domain Routing</a>.</p> <p>IPv6 addresses can be represented using any of the following formats:</p> <ul> <li> <p>1111:0000:0000:0000:0000:0000:0000:0111/128</p> </li> <li> <p>1111:0:0:0:0:0:0:0111/128</p> </li> <li> <p>1111::0111/128</p> </li> <li> <p>1111::111/128</p> </li> </ul> <p>You use an <code>IPSet</code> to specify which web requests you want to allow or block based on the IP addresses that the requests originated from. For example, if you're receiving a lot of requests from one or a small number of IP addresses and you want to block the requests, you can create an <code>IPSet</code> that specifies those IP addresses, and then configure AWS WAF to block the requests. </p> <p>To create and configure an <code>IPSet</code>, perform the following steps:</p> <ol> <li> <p>Submit a <a>CreateIPSet</a> request.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateIPSet</a> request.</p> </li> <li> <p>Submit an <code>UpdateIPSet</code> request to specify the IP addresses that you want AWS WAF to watch for.</p> </li> </ol> <p>When you update an <code>IPSet</code>, you specify the IP addresses that you want to add and/or the IP addresses that you want to delete. If you want to change an IP address, you delete the existing IP address and add the new one.</p> <p>You can insert a maximum of 1000 addresses in a single request.</p> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFStaleDataException} <p>The operation failed because you tried to create, update, or delete an object by using a change token that has already been used.</p>
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFInvalidAccountException} <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
   *   - {WAFInvalidOperationException} <p>The operation failed because there was nothing to do. For example:</p> <ul> <li> <p>You tried to remove a <code>Rule</code> from a <code>WebACL</code>, but the <code>Rule</code> isn't in the specified <code>WebACL</code>.</p> </li> <li> <p>You tried to remove an IP address from an <code>IPSet</code>, but the IP address isn't in the specified <code>IPSet</code>.</p> </li> <li> <p>You tried to remove a <code>ByteMatchTuple</code> from a <code>ByteMatchSet</code>, but the <code>ByteMatchTuple</code> isn't in the specified <code>WebACL</code>.</p> </li> <li> <p>You tried to add a <code>Rule</code> to a <code>WebACL</code>, but the <code>Rule</code> already exists in the specified <code>WebACL</code>.</p> </li> <li> <p>You tried to add a <code>ByteMatchTuple</code> to a <code>ByteMatchSet</code>, but the <code>ByteMatchTuple</code> already exists in the specified <code>WebACL</code>.</p> </li> </ul>
   *   - {WAFInvalidParameterException} <p>The operation failed because AWS WAF didn't recognize a parameter in the request. For example:</p> <ul> <li> <p>You specified an invalid parameter name.</p> </li> <li> <p>You specified an invalid value.</p> </li> <li> <p>You tried to update an object (<code>ByteMatchSet</code>, <code>IPSet</code>, <code>Rule</code>, or <code>WebACL</code>) using an action other than <code>INSERT</code> or <code>DELETE</code>.</p> </li> <li> <p>You tried to create a <code>WebACL</code> with a <code>DefaultAction</code> <code>Type</code> other than <code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p> </li> <li> <p>You tried to create a <code>RateBasedRule</code> with a <code>RateKey</code> value other than <code>IP</code>.</p> </li> <li> <p>You tried to update a <code>WebACL</code> with a <code>WafAction</code> <code>Type</code> other than <code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p> </li> <li> <p>You tried to update a <code>ByteMatchSet</code> with a <code>FieldToMatch</code> <code>Type</code> other than HEADER, METHOD, QUERY_STRING, URI, or BODY.</p> </li> <li> <p>You tried to update a <code>ByteMatchSet</code> with a <code>Field</code> of <code>HEADER</code> but no value for <code>Data</code>.</p> </li> <li> <p>Your request references an ARN that is malformed, or corresponds to a resource with which a web ACL cannot be associated.</p> </li> </ul>
   *   - {WAFNonexistentContainerException} <p>The operation failed because you tried to add an object to or delete an object from another object that doesn't exist. For example:</p> <ul> <li> <p>You tried to add a <code>Rule</code> to or delete a <code>Rule</code> from a <code>WebACL</code> that doesn't exist.</p> </li> <li> <p>You tried to add a <code>ByteMatchSet</code> to or delete a <code>ByteMatchSet</code> from a <code>Rule</code> that doesn't exist.</p> </li> <li> <p>You tried to add an IP address to or delete an IP address from an <code>IPSet</code> that doesn't exist.</p> </li> <li> <p>You tried to add a <code>ByteMatchTuple</code> to or delete a <code>ByteMatchTuple</code> from a <code>ByteMatchSet</code> that doesn't exist.</p> </li> </ul>
   *   - {WAFNonexistentItemException} <p>The operation failed because the referenced object doesn't exist.</p>
   *   - {WAFReferencedItemException} <p>The operation failed because you tried to delete an object that is still in use. For example:</p> <ul> <li> <p>You tried to delete a <code>ByteMatchSet</code> that is still referenced by a <code>Rule</code>.</p> </li> <li> <p>You tried to delete a <code>Rule</code> that is still referenced by a <code>WebACL</code>.</p> </li> </ul>
   *   - {WAFLimitsExceededException} <p>The operation exceeds a resource limit, for example, the maximum number of <code>WebACL</code> objects that you can create for an AWS account. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">Limits</a> in the <i>AWS WAF Developer Guide</i>.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateIPSet(args: UpdateIPSetInput): Promise<UpdateIPSetOutput>;
  public updateIPSet(
    args: UpdateIPSetInput,
    cb: (err: any, data?: UpdateIPSetOutput) => void
  ): void;
  public updateIPSet(
    args: UpdateIPSetInput,
    cb?: (err: any, data?: UpdateIPSetOutput) => void
  ): Promise<UpdateIPSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateIPSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Inserts or deletes <a>Predicate</a> objects in a rule and updates the <code>RateLimit</code> in the rule. </p> <p>Each <code>Predicate</code> object identifies a predicate, such as a <a>ByteMatchSet</a> or an <a>IPSet</a>, that specifies the web requests that you want to block or count. The <code>RateLimit</code> specifies the number of requests every five minutes that triggers the rule.</p> <p>If you add more than one predicate to a <code>RateBasedRule</code>, a request must match all the predicates and exceed the <code>RateLimit</code> to be counted or blocked. For example, suppose you add the following to a <code>RateBasedRule</code>:</p> <ul> <li> <p>An <code>IPSet</code> that matches the IP address <code>192.0.2.44/32</code> </p> </li> <li> <p>A <code>ByteMatchSet</code> that matches <code>BadBot</code> in the <code>User-Agent</code> header</p> </li> </ul> <p>Further, you specify a <code>RateLimit</code> of 15,000.</p> <p>You then add the <code>RateBasedRule</code> to a <code>WebACL</code> and specify that you want to block requests that satisfy the rule. For a request to be blocked, it must come from the IP address 192.0.2.44 <i>and</i> the <code>User-Agent</code> header in the request must contain the value <code>BadBot</code>. Further, requests that match these two conditions much be received at a rate of more than 15,000 every five minutes. If the rate drops below this limit, AWS WAF no longer blocks the requests.</p> <p>As a second example, suppose you want to limit requests to a particular page on your site. To do this, you could add the following to a <code>RateBasedRule</code>:</p> <ul> <li> <p>A <code>ByteMatchSet</code> with <code>FieldToMatch</code> of <code>URI</code> </p> </li> <li> <p>A <code>PositionalConstraint</code> of <code>STARTS_WITH</code> </p> </li> <li> <p>A <code>TargetString</code> of <code>login</code> </p> </li> </ul> <p>Further, you specify a <code>RateLimit</code> of 15,000.</p> <p>By adding this <code>RateBasedRule</code> to a <code>WebACL</code>, you could limit requests to your login page without affecting the rest of your site.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFStaleDataException} <p>The operation failed because you tried to create, update, or delete an object by using a change token that has already been used.</p>
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFInvalidAccountException} <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
   *   - {WAFInvalidOperationException} <p>The operation failed because there was nothing to do. For example:</p> <ul> <li> <p>You tried to remove a <code>Rule</code> from a <code>WebACL</code>, but the <code>Rule</code> isn't in the specified <code>WebACL</code>.</p> </li> <li> <p>You tried to remove an IP address from an <code>IPSet</code>, but the IP address isn't in the specified <code>IPSet</code>.</p> </li> <li> <p>You tried to remove a <code>ByteMatchTuple</code> from a <code>ByteMatchSet</code>, but the <code>ByteMatchTuple</code> isn't in the specified <code>WebACL</code>.</p> </li> <li> <p>You tried to add a <code>Rule</code> to a <code>WebACL</code>, but the <code>Rule</code> already exists in the specified <code>WebACL</code>.</p> </li> <li> <p>You tried to add a <code>ByteMatchTuple</code> to a <code>ByteMatchSet</code>, but the <code>ByteMatchTuple</code> already exists in the specified <code>WebACL</code>.</p> </li> </ul>
   *   - {WAFInvalidParameterException} <p>The operation failed because AWS WAF didn't recognize a parameter in the request. For example:</p> <ul> <li> <p>You specified an invalid parameter name.</p> </li> <li> <p>You specified an invalid value.</p> </li> <li> <p>You tried to update an object (<code>ByteMatchSet</code>, <code>IPSet</code>, <code>Rule</code>, or <code>WebACL</code>) using an action other than <code>INSERT</code> or <code>DELETE</code>.</p> </li> <li> <p>You tried to create a <code>WebACL</code> with a <code>DefaultAction</code> <code>Type</code> other than <code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p> </li> <li> <p>You tried to create a <code>RateBasedRule</code> with a <code>RateKey</code> value other than <code>IP</code>.</p> </li> <li> <p>You tried to update a <code>WebACL</code> with a <code>WafAction</code> <code>Type</code> other than <code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p> </li> <li> <p>You tried to update a <code>ByteMatchSet</code> with a <code>FieldToMatch</code> <code>Type</code> other than HEADER, METHOD, QUERY_STRING, URI, or BODY.</p> </li> <li> <p>You tried to update a <code>ByteMatchSet</code> with a <code>Field</code> of <code>HEADER</code> but no value for <code>Data</code>.</p> </li> <li> <p>Your request references an ARN that is malformed, or corresponds to a resource with which a web ACL cannot be associated.</p> </li> </ul>
   *   - {WAFNonexistentContainerException} <p>The operation failed because you tried to add an object to or delete an object from another object that doesn't exist. For example:</p> <ul> <li> <p>You tried to add a <code>Rule</code> to or delete a <code>Rule</code> from a <code>WebACL</code> that doesn't exist.</p> </li> <li> <p>You tried to add a <code>ByteMatchSet</code> to or delete a <code>ByteMatchSet</code> from a <code>Rule</code> that doesn't exist.</p> </li> <li> <p>You tried to add an IP address to or delete an IP address from an <code>IPSet</code> that doesn't exist.</p> </li> <li> <p>You tried to add a <code>ByteMatchTuple</code> to or delete a <code>ByteMatchTuple</code> from a <code>ByteMatchSet</code> that doesn't exist.</p> </li> </ul>
   *   - {WAFNonexistentItemException} <p>The operation failed because the referenced object doesn't exist.</p>
   *   - {WAFReferencedItemException} <p>The operation failed because you tried to delete an object that is still in use. For example:</p> <ul> <li> <p>You tried to delete a <code>ByteMatchSet</code> that is still referenced by a <code>Rule</code>.</p> </li> <li> <p>You tried to delete a <code>Rule</code> that is still referenced by a <code>WebACL</code>.</p> </li> </ul>
   *   - {WAFLimitsExceededException} <p>The operation exceeds a resource limit, for example, the maximum number of <code>WebACL</code> objects that you can create for an AWS account. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">Limits</a> in the <i>AWS WAF Developer Guide</i>.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateRateBasedRule(
    args: UpdateRateBasedRuleInput
  ): Promise<UpdateRateBasedRuleOutput>;
  public updateRateBasedRule(
    args: UpdateRateBasedRuleInput,
    cb: (err: any, data?: UpdateRateBasedRuleOutput) => void
  ): void;
  public updateRateBasedRule(
    args: UpdateRateBasedRuleInput,
    cb?: (err: any, data?: UpdateRateBasedRuleOutput) => void
  ): Promise<UpdateRateBasedRuleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateRateBasedRuleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Inserts or deletes <a>RegexMatchTuple</a> objects (filters) in a <a>RegexMatchSet</a>. For each <code>RegexMatchSetUpdate</code> object, you specify the following values: </p> <ul> <li> <p>Whether to insert or delete the object from the array. If you want to change a <code>RegexMatchSetUpdate</code> object, you delete the existing object and add a new one.</p> </li> <li> <p>The part of a web request that you want AWS WAF to inspectupdate, such as a query string or the value of the <code>User-Agent</code> header. </p> </li> <li> <p>The identifier of the pattern (a regular expression) that you want AWS WAF to look for. For more information, see <a>RegexPatternSet</a>. </p> </li> <li> <p>Whether to perform any conversions on the request, such as converting it to lowercase, before inspecting it for the specified string.</p> </li> </ul> <p> For example, you can create a <code>RegexPatternSet</code> that matches any requests with <code>User-Agent</code> headers that contain the string <code>B[a@]dB[o0]t</code>. You can then configure AWS WAF to reject those requests.</p> <p>To create and configure a <code>RegexMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Create a <code>RegexMatchSet.</code> For more information, see <a>CreateRegexMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <code>UpdateRegexMatchSet</code> request.</p> </li> <li> <p>Submit an <code>UpdateRegexMatchSet</code> request to specify the part of the request that you want AWS WAF to inspect (for example, the header or the URI) and the identifier of the <code>RegexPatternSet</code> that contain the regular expression patters you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFStaleDataException} <p>The operation failed because you tried to create, update, or delete an object by using a change token that has already been used.</p>
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFDisallowedNameException} <p>The name specified is invalid.</p>
   *   - {WAFLimitsExceededException} <p>The operation exceeds a resource limit, for example, the maximum number of <code>WebACL</code> objects that you can create for an AWS account. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">Limits</a> in the <i>AWS WAF Developer Guide</i>.</p>
   *   - {WAFNonexistentItemException} <p>The operation failed because the referenced object doesn't exist.</p>
   *   - {WAFNonexistentContainerException} <p>The operation failed because you tried to add an object to or delete an object from another object that doesn't exist. For example:</p> <ul> <li> <p>You tried to add a <code>Rule</code> to or delete a <code>Rule</code> from a <code>WebACL</code> that doesn't exist.</p> </li> <li> <p>You tried to add a <code>ByteMatchSet</code> to or delete a <code>ByteMatchSet</code> from a <code>Rule</code> that doesn't exist.</p> </li> <li> <p>You tried to add an IP address to or delete an IP address from an <code>IPSet</code> that doesn't exist.</p> </li> <li> <p>You tried to add a <code>ByteMatchTuple</code> to or delete a <code>ByteMatchTuple</code> from a <code>ByteMatchSet</code> that doesn't exist.</p> </li> </ul>
   *   - {WAFInvalidOperationException} <p>The operation failed because there was nothing to do. For example:</p> <ul> <li> <p>You tried to remove a <code>Rule</code> from a <code>WebACL</code>, but the <code>Rule</code> isn't in the specified <code>WebACL</code>.</p> </li> <li> <p>You tried to remove an IP address from an <code>IPSet</code>, but the IP address isn't in the specified <code>IPSet</code>.</p> </li> <li> <p>You tried to remove a <code>ByteMatchTuple</code> from a <code>ByteMatchSet</code>, but the <code>ByteMatchTuple</code> isn't in the specified <code>WebACL</code>.</p> </li> <li> <p>You tried to add a <code>Rule</code> to a <code>WebACL</code>, but the <code>Rule</code> already exists in the specified <code>WebACL</code>.</p> </li> <li> <p>You tried to add a <code>ByteMatchTuple</code> to a <code>ByteMatchSet</code>, but the <code>ByteMatchTuple</code> already exists in the specified <code>WebACL</code>.</p> </li> </ul>
   *   - {WAFInvalidAccountException} <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateRegexMatchSet(
    args: UpdateRegexMatchSetInput
  ): Promise<UpdateRegexMatchSetOutput>;
  public updateRegexMatchSet(
    args: UpdateRegexMatchSetInput,
    cb: (err: any, data?: UpdateRegexMatchSetOutput) => void
  ): void;
  public updateRegexMatchSet(
    args: UpdateRegexMatchSetInput,
    cb?: (err: any, data?: UpdateRegexMatchSetOutput) => void
  ): Promise<UpdateRegexMatchSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateRegexMatchSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Inserts or deletes <code>RegexPatternString</code> objects in a <a>RegexPatternSet</a>. For each <code>RegexPatternString</code> object, you specify the following values: </p> <ul> <li> <p>Whether to insert or delete the <code>RegexPatternString</code>.</p> </li> <li> <p>The regular expression pattern that you want to insert or delete. For more information, see <a>RegexPatternSet</a>. </p> </li> </ul> <p> For example, you can create a <code>RegexPatternString</code> such as <code>B[a@]dB[o0]t</code>. AWS WAF will match this <code>RegexPatternString</code> to:</p> <ul> <li> <p>BadBot</p> </li> <li> <p>BadB0t</p> </li> <li> <p>B@dBot</p> </li> <li> <p>B@dB0t</p> </li> </ul> <p>To create and configure a <code>RegexPatternSet</code>, perform the following steps:</p> <ol> <li> <p>Create a <code>RegexPatternSet.</code> For more information, see <a>CreateRegexPatternSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <code>UpdateRegexPatternSet</code> request.</p> </li> <li> <p>Submit an <code>UpdateRegexPatternSet</code> request to specify the regular expression pattern that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFStaleDataException} <p>The operation failed because you tried to create, update, or delete an object by using a change token that has already been used.</p>
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFLimitsExceededException} <p>The operation exceeds a resource limit, for example, the maximum number of <code>WebACL</code> objects that you can create for an AWS account. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">Limits</a> in the <i>AWS WAF Developer Guide</i>.</p>
   *   - {WAFNonexistentItemException} <p>The operation failed because the referenced object doesn't exist.</p>
   *   - {WAFNonexistentContainerException} <p>The operation failed because you tried to add an object to or delete an object from another object that doesn't exist. For example:</p> <ul> <li> <p>You tried to add a <code>Rule</code> to or delete a <code>Rule</code> from a <code>WebACL</code> that doesn't exist.</p> </li> <li> <p>You tried to add a <code>ByteMatchSet</code> to or delete a <code>ByteMatchSet</code> from a <code>Rule</code> that doesn't exist.</p> </li> <li> <p>You tried to add an IP address to or delete an IP address from an <code>IPSet</code> that doesn't exist.</p> </li> <li> <p>You tried to add a <code>ByteMatchTuple</code> to or delete a <code>ByteMatchTuple</code> from a <code>ByteMatchSet</code> that doesn't exist.</p> </li> </ul>
   *   - {WAFInvalidOperationException} <p>The operation failed because there was nothing to do. For example:</p> <ul> <li> <p>You tried to remove a <code>Rule</code> from a <code>WebACL</code>, but the <code>Rule</code> isn't in the specified <code>WebACL</code>.</p> </li> <li> <p>You tried to remove an IP address from an <code>IPSet</code>, but the IP address isn't in the specified <code>IPSet</code>.</p> </li> <li> <p>You tried to remove a <code>ByteMatchTuple</code> from a <code>ByteMatchSet</code>, but the <code>ByteMatchTuple</code> isn't in the specified <code>WebACL</code>.</p> </li> <li> <p>You tried to add a <code>Rule</code> to a <code>WebACL</code>, but the <code>Rule</code> already exists in the specified <code>WebACL</code>.</p> </li> <li> <p>You tried to add a <code>ByteMatchTuple</code> to a <code>ByteMatchSet</code>, but the <code>ByteMatchTuple</code> already exists in the specified <code>WebACL</code>.</p> </li> </ul>
   *   - {WAFInvalidAccountException} <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
   *   - {WAFInvalidRegexPatternException} <p>The regular expression (regex) you specified in <code>RegexPatternString</code> is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateRegexPatternSet(
    args: UpdateRegexPatternSetInput
  ): Promise<UpdateRegexPatternSetOutput>;
  public updateRegexPatternSet(
    args: UpdateRegexPatternSetInput,
    cb: (err: any, data?: UpdateRegexPatternSetOutput) => void
  ): void;
  public updateRegexPatternSet(
    args: UpdateRegexPatternSetInput,
    cb?: (err: any, data?: UpdateRegexPatternSetOutput) => void
  ): Promise<UpdateRegexPatternSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateRegexPatternSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Inserts or deletes <a>Predicate</a> objects in a <code>Rule</code>. Each <code>Predicate</code> object identifies a predicate, such as a <a>ByteMatchSet</a> or an <a>IPSet</a>, that specifies the web requests that you want to allow, block, or count. If you add more than one predicate to a <code>Rule</code>, a request must match all of the specifications to be allowed, blocked, or counted. For example, suppose that you add the following to a <code>Rule</code>: </p> <ul> <li> <p>A <code>ByteMatchSet</code> that matches the value <code>BadBot</code> in the <code>User-Agent</code> header</p> </li> <li> <p>An <code>IPSet</code> that matches the IP address <code>192.0.2.44</code> </p> </li> </ul> <p>You then add the <code>Rule</code> to a <code>WebACL</code> and specify that you want to block requests that satisfy the <code>Rule</code>. For a request to be blocked, the <code>User-Agent</code> header in the request must contain the value <code>BadBot</code> <i>and</i> the request must originate from the IP address 192.0.2.44.</p> <p>To create and configure a <code>Rule</code>, perform the following steps:</p> <ol> <li> <p>Create and update the predicates that you want to include in the <code>Rule</code>.</p> </li> <li> <p>Create the <code>Rule</code>. See <a>CreateRule</a>.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateRule</a> request.</p> </li> <li> <p>Submit an <code>UpdateRule</code> request to add predicates to the <code>Rule</code>.</p> </li> <li> <p>Create and update a <code>WebACL</code> that contains the <code>Rule</code>. See <a>CreateWebACL</a>.</p> </li> </ol> <p>If you want to replace one <code>ByteMatchSet</code> or <code>IPSet</code> with another, you delete the existing one and add the new one.</p> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFStaleDataException} <p>The operation failed because you tried to create, update, or delete an object by using a change token that has already been used.</p>
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFInvalidAccountException} <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
   *   - {WAFInvalidOperationException} <p>The operation failed because there was nothing to do. For example:</p> <ul> <li> <p>You tried to remove a <code>Rule</code> from a <code>WebACL</code>, but the <code>Rule</code> isn't in the specified <code>WebACL</code>.</p> </li> <li> <p>You tried to remove an IP address from an <code>IPSet</code>, but the IP address isn't in the specified <code>IPSet</code>.</p> </li> <li> <p>You tried to remove a <code>ByteMatchTuple</code> from a <code>ByteMatchSet</code>, but the <code>ByteMatchTuple</code> isn't in the specified <code>WebACL</code>.</p> </li> <li> <p>You tried to add a <code>Rule</code> to a <code>WebACL</code>, but the <code>Rule</code> already exists in the specified <code>WebACL</code>.</p> </li> <li> <p>You tried to add a <code>ByteMatchTuple</code> to a <code>ByteMatchSet</code>, but the <code>ByteMatchTuple</code> already exists in the specified <code>WebACL</code>.</p> </li> </ul>
   *   - {WAFInvalidParameterException} <p>The operation failed because AWS WAF didn't recognize a parameter in the request. For example:</p> <ul> <li> <p>You specified an invalid parameter name.</p> </li> <li> <p>You specified an invalid value.</p> </li> <li> <p>You tried to update an object (<code>ByteMatchSet</code>, <code>IPSet</code>, <code>Rule</code>, or <code>WebACL</code>) using an action other than <code>INSERT</code> or <code>DELETE</code>.</p> </li> <li> <p>You tried to create a <code>WebACL</code> with a <code>DefaultAction</code> <code>Type</code> other than <code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p> </li> <li> <p>You tried to create a <code>RateBasedRule</code> with a <code>RateKey</code> value other than <code>IP</code>.</p> </li> <li> <p>You tried to update a <code>WebACL</code> with a <code>WafAction</code> <code>Type</code> other than <code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p> </li> <li> <p>You tried to update a <code>ByteMatchSet</code> with a <code>FieldToMatch</code> <code>Type</code> other than HEADER, METHOD, QUERY_STRING, URI, or BODY.</p> </li> <li> <p>You tried to update a <code>ByteMatchSet</code> with a <code>Field</code> of <code>HEADER</code> but no value for <code>Data</code>.</p> </li> <li> <p>Your request references an ARN that is malformed, or corresponds to a resource with which a web ACL cannot be associated.</p> </li> </ul>
   *   - {WAFNonexistentContainerException} <p>The operation failed because you tried to add an object to or delete an object from another object that doesn't exist. For example:</p> <ul> <li> <p>You tried to add a <code>Rule</code> to or delete a <code>Rule</code> from a <code>WebACL</code> that doesn't exist.</p> </li> <li> <p>You tried to add a <code>ByteMatchSet</code> to or delete a <code>ByteMatchSet</code> from a <code>Rule</code> that doesn't exist.</p> </li> <li> <p>You tried to add an IP address to or delete an IP address from an <code>IPSet</code> that doesn't exist.</p> </li> <li> <p>You tried to add a <code>ByteMatchTuple</code> to or delete a <code>ByteMatchTuple</code> from a <code>ByteMatchSet</code> that doesn't exist.</p> </li> </ul>
   *   - {WAFNonexistentItemException} <p>The operation failed because the referenced object doesn't exist.</p>
   *   - {WAFReferencedItemException} <p>The operation failed because you tried to delete an object that is still in use. For example:</p> <ul> <li> <p>You tried to delete a <code>ByteMatchSet</code> that is still referenced by a <code>Rule</code>.</p> </li> <li> <p>You tried to delete a <code>Rule</code> that is still referenced by a <code>WebACL</code>.</p> </li> </ul>
   *   - {WAFLimitsExceededException} <p>The operation exceeds a resource limit, for example, the maximum number of <code>WebACL</code> objects that you can create for an AWS account. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">Limits</a> in the <i>AWS WAF Developer Guide</i>.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateRule(args: UpdateRuleInput): Promise<UpdateRuleOutput>;
  public updateRule(
    args: UpdateRuleInput,
    cb: (err: any, data?: UpdateRuleOutput) => void
  ): void;
  public updateRule(
    args: UpdateRuleInput,
    cb?: (err: any, data?: UpdateRuleOutput) => void
  ): Promise<UpdateRuleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateRuleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Inserts or deletes <a>ActivatedRule</a> objects in a <code>RuleGroup</code>.</p> <p>You can only insert <code>REGULAR</code> rules into a rule group.</p> <p>You can have a maximum of ten rules per rule group.</p> <p>To create and configure a <code>RuleGroup</code>, perform the following steps:</p> <ol> <li> <p>Create and update the <code>Rules</code> that you want to include in the <code>RuleGroup</code>. See <a>CreateRule</a>.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateRuleGroup</a> request.</p> </li> <li> <p>Submit an <code>UpdateRuleGroup</code> request to add <code>Rules</code> to the <code>RuleGroup</code>.</p> </li> <li> <p>Create and update a <code>WebACL</code> that contains the <code>RuleGroup</code>. See <a>CreateWebACL</a>.</p> </li> </ol> <p>If you want to replace one <code>Rule</code> with another, you delete the existing one and add the new one.</p> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFStaleDataException} <p>The operation failed because you tried to create, update, or delete an object by using a change token that has already been used.</p>
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFNonexistentContainerException} <p>The operation failed because you tried to add an object to or delete an object from another object that doesn't exist. For example:</p> <ul> <li> <p>You tried to add a <code>Rule</code> to or delete a <code>Rule</code> from a <code>WebACL</code> that doesn't exist.</p> </li> <li> <p>You tried to add a <code>ByteMatchSet</code> to or delete a <code>ByteMatchSet</code> from a <code>Rule</code> that doesn't exist.</p> </li> <li> <p>You tried to add an IP address to or delete an IP address from an <code>IPSet</code> that doesn't exist.</p> </li> <li> <p>You tried to add a <code>ByteMatchTuple</code> to or delete a <code>ByteMatchTuple</code> from a <code>ByteMatchSet</code> that doesn't exist.</p> </li> </ul>
   *   - {WAFNonexistentItemException} <p>The operation failed because the referenced object doesn't exist.</p>
   *   - {WAFInvalidOperationException} <p>The operation failed because there was nothing to do. For example:</p> <ul> <li> <p>You tried to remove a <code>Rule</code> from a <code>WebACL</code>, but the <code>Rule</code> isn't in the specified <code>WebACL</code>.</p> </li> <li> <p>You tried to remove an IP address from an <code>IPSet</code>, but the IP address isn't in the specified <code>IPSet</code>.</p> </li> <li> <p>You tried to remove a <code>ByteMatchTuple</code> from a <code>ByteMatchSet</code>, but the <code>ByteMatchTuple</code> isn't in the specified <code>WebACL</code>.</p> </li> <li> <p>You tried to add a <code>Rule</code> to a <code>WebACL</code>, but the <code>Rule</code> already exists in the specified <code>WebACL</code>.</p> </li> <li> <p>You tried to add a <code>ByteMatchTuple</code> to a <code>ByteMatchSet</code>, but the <code>ByteMatchTuple</code> already exists in the specified <code>WebACL</code>.</p> </li> </ul>
   *   - {WAFLimitsExceededException} <p>The operation exceeds a resource limit, for example, the maximum number of <code>WebACL</code> objects that you can create for an AWS account. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">Limits</a> in the <i>AWS WAF Developer Guide</i>.</p>
   *   - {WAFInvalidParameterException} <p>The operation failed because AWS WAF didn't recognize a parameter in the request. For example:</p> <ul> <li> <p>You specified an invalid parameter name.</p> </li> <li> <p>You specified an invalid value.</p> </li> <li> <p>You tried to update an object (<code>ByteMatchSet</code>, <code>IPSet</code>, <code>Rule</code>, or <code>WebACL</code>) using an action other than <code>INSERT</code> or <code>DELETE</code>.</p> </li> <li> <p>You tried to create a <code>WebACL</code> with a <code>DefaultAction</code> <code>Type</code> other than <code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p> </li> <li> <p>You tried to create a <code>RateBasedRule</code> with a <code>RateKey</code> value other than <code>IP</code>.</p> </li> <li> <p>You tried to update a <code>WebACL</code> with a <code>WafAction</code> <code>Type</code> other than <code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p> </li> <li> <p>You tried to update a <code>ByteMatchSet</code> with a <code>FieldToMatch</code> <code>Type</code> other than HEADER, METHOD, QUERY_STRING, URI, or BODY.</p> </li> <li> <p>You tried to update a <code>ByteMatchSet</code> with a <code>Field</code> of <code>HEADER</code> but no value for <code>Data</code>.</p> </li> <li> <p>Your request references an ARN that is malformed, or corresponds to a resource with which a web ACL cannot be associated.</p> </li> </ul>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateRuleGroup(
    args: UpdateRuleGroupInput
  ): Promise<UpdateRuleGroupOutput>;
  public updateRuleGroup(
    args: UpdateRuleGroupInput,
    cb: (err: any, data?: UpdateRuleGroupOutput) => void
  ): void;
  public updateRuleGroup(
    args: UpdateRuleGroupInput,
    cb?: (err: any, data?: UpdateRuleGroupOutput) => void
  ): Promise<UpdateRuleGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateRuleGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Inserts or deletes <a>SizeConstraint</a> objects (filters) in a <a>SizeConstraintSet</a>. For each <code>SizeConstraint</code> object, you specify the following values: </p> <ul> <li> <p>Whether to insert or delete the object from the array. If you want to change a <code>SizeConstraintSetUpdate</code> object, you delete the existing object and add a new one.</p> </li> <li> <p>The part of a web request that you want AWS WAF to evaluate, such as the length of a query string or the length of the <code>User-Agent</code> header.</p> </li> <li> <p>Whether to perform any transformations on the request, such as converting it to lowercase, before checking its length. Note that transformations of the request body are not supported because the AWS resource forwards only the first <code>8192</code> bytes of your request to AWS WAF.</p> <p>You can only specify a single type of TextTransformation.</p> </li> <li> <p>A <code>ComparisonOperator</code> used for evaluating the selected part of the request against the specified <code>Size</code>, such as equals, greater than, less than, and so on.</p> </li> <li> <p>The length, in bytes, that you want AWS WAF to watch for in selected part of the request. The length is computed after applying the transformation.</p> </li> </ul> <p>For example, you can add a <code>SizeConstraintSetUpdate</code> object that matches web requests in which the length of the <code>User-Agent</code> header is greater than 100 bytes. You can then configure AWS WAF to block those requests.</p> <p>To create and configure a <code>SizeConstraintSet</code>, perform the following steps:</p> <ol> <li> <p>Create a <code>SizeConstraintSet.</code> For more information, see <a>CreateSizeConstraintSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <code>UpdateSizeConstraintSet</code> request.</p> </li> <li> <p>Submit an <code>UpdateSizeConstraintSet</code> request to specify the part of the request that you want AWS WAF to inspect (for example, the header or the URI) and the value that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFStaleDataException} <p>The operation failed because you tried to create, update, or delete an object by using a change token that has already been used.</p>
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFInvalidAccountException} <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
   *   - {WAFInvalidOperationException} <p>The operation failed because there was nothing to do. For example:</p> <ul> <li> <p>You tried to remove a <code>Rule</code> from a <code>WebACL</code>, but the <code>Rule</code> isn't in the specified <code>WebACL</code>.</p> </li> <li> <p>You tried to remove an IP address from an <code>IPSet</code>, but the IP address isn't in the specified <code>IPSet</code>.</p> </li> <li> <p>You tried to remove a <code>ByteMatchTuple</code> from a <code>ByteMatchSet</code>, but the <code>ByteMatchTuple</code> isn't in the specified <code>WebACL</code>.</p> </li> <li> <p>You tried to add a <code>Rule</code> to a <code>WebACL</code>, but the <code>Rule</code> already exists in the specified <code>WebACL</code>.</p> </li> <li> <p>You tried to add a <code>ByteMatchTuple</code> to a <code>ByteMatchSet</code>, but the <code>ByteMatchTuple</code> already exists in the specified <code>WebACL</code>.</p> </li> </ul>
   *   - {WAFInvalidParameterException} <p>The operation failed because AWS WAF didn't recognize a parameter in the request. For example:</p> <ul> <li> <p>You specified an invalid parameter name.</p> </li> <li> <p>You specified an invalid value.</p> </li> <li> <p>You tried to update an object (<code>ByteMatchSet</code>, <code>IPSet</code>, <code>Rule</code>, or <code>WebACL</code>) using an action other than <code>INSERT</code> or <code>DELETE</code>.</p> </li> <li> <p>You tried to create a <code>WebACL</code> with a <code>DefaultAction</code> <code>Type</code> other than <code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p> </li> <li> <p>You tried to create a <code>RateBasedRule</code> with a <code>RateKey</code> value other than <code>IP</code>.</p> </li> <li> <p>You tried to update a <code>WebACL</code> with a <code>WafAction</code> <code>Type</code> other than <code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p> </li> <li> <p>You tried to update a <code>ByteMatchSet</code> with a <code>FieldToMatch</code> <code>Type</code> other than HEADER, METHOD, QUERY_STRING, URI, or BODY.</p> </li> <li> <p>You tried to update a <code>ByteMatchSet</code> with a <code>Field</code> of <code>HEADER</code> but no value for <code>Data</code>.</p> </li> <li> <p>Your request references an ARN that is malformed, or corresponds to a resource with which a web ACL cannot be associated.</p> </li> </ul>
   *   - {WAFNonexistentContainerException} <p>The operation failed because you tried to add an object to or delete an object from another object that doesn't exist. For example:</p> <ul> <li> <p>You tried to add a <code>Rule</code> to or delete a <code>Rule</code> from a <code>WebACL</code> that doesn't exist.</p> </li> <li> <p>You tried to add a <code>ByteMatchSet</code> to or delete a <code>ByteMatchSet</code> from a <code>Rule</code> that doesn't exist.</p> </li> <li> <p>You tried to add an IP address to or delete an IP address from an <code>IPSet</code> that doesn't exist.</p> </li> <li> <p>You tried to add a <code>ByteMatchTuple</code> to or delete a <code>ByteMatchTuple</code> from a <code>ByteMatchSet</code> that doesn't exist.</p> </li> </ul>
   *   - {WAFNonexistentItemException} <p>The operation failed because the referenced object doesn't exist.</p>
   *   - {WAFReferencedItemException} <p>The operation failed because you tried to delete an object that is still in use. For example:</p> <ul> <li> <p>You tried to delete a <code>ByteMatchSet</code> that is still referenced by a <code>Rule</code>.</p> </li> <li> <p>You tried to delete a <code>Rule</code> that is still referenced by a <code>WebACL</code>.</p> </li> </ul>
   *   - {WAFLimitsExceededException} <p>The operation exceeds a resource limit, for example, the maximum number of <code>WebACL</code> objects that you can create for an AWS account. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">Limits</a> in the <i>AWS WAF Developer Guide</i>.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateSizeConstraintSet(
    args: UpdateSizeConstraintSetInput
  ): Promise<UpdateSizeConstraintSetOutput>;
  public updateSizeConstraintSet(
    args: UpdateSizeConstraintSetInput,
    cb: (err: any, data?: UpdateSizeConstraintSetOutput) => void
  ): void;
  public updateSizeConstraintSet(
    args: UpdateSizeConstraintSetInput,
    cb?: (err: any, data?: UpdateSizeConstraintSetOutput) => void
  ): Promise<UpdateSizeConstraintSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateSizeConstraintSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Inserts or deletes <a>SqlInjectionMatchTuple</a> objects (filters) in a <a>SqlInjectionMatchSet</a>. For each <code>SqlInjectionMatchTuple</code> object, you specify the following values:</p> <ul> <li> <p> <code>Action</code>: Whether to insert the object into or delete the object from the array. To change a <code>SqlInjectionMatchTuple</code>, you delete the existing object and add a new one.</p> </li> <li> <p> <code>FieldToMatch</code>: The part of web requests that you want AWS WAF to inspect and, if you want AWS WAF to inspect a header or custom query parameter, the name of the header or parameter.</p> </li> <li> <p> <code>TextTransformation</code>: Which text transformation, if any, to perform on the web request before inspecting the request for snippets of malicious SQL code.</p> <p>You can only specify a single type of TextTransformation.</p> </li> </ul> <p>You use <code>SqlInjectionMatchSet</code> objects to specify which CloudFront requests that you want to allow, block, or count. For example, if you're receiving requests that contain snippets of SQL code in the query string and you want to block the requests, you can create a <code>SqlInjectionMatchSet</code> with the applicable settings, and then configure AWS WAF to block the requests. </p> <p>To create and configure a <code>SqlInjectionMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Submit a <a>CreateSqlInjectionMatchSet</a> request.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateIPSet</a> request.</p> </li> <li> <p>Submit an <code>UpdateSqlInjectionMatchSet</code> request to specify the parts of web requests that you want AWS WAF to inspect for snippets of SQL code.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFInvalidAccountException} <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
   *   - {WAFInvalidOperationException} <p>The operation failed because there was nothing to do. For example:</p> <ul> <li> <p>You tried to remove a <code>Rule</code> from a <code>WebACL</code>, but the <code>Rule</code> isn't in the specified <code>WebACL</code>.</p> </li> <li> <p>You tried to remove an IP address from an <code>IPSet</code>, but the IP address isn't in the specified <code>IPSet</code>.</p> </li> <li> <p>You tried to remove a <code>ByteMatchTuple</code> from a <code>ByteMatchSet</code>, but the <code>ByteMatchTuple</code> isn't in the specified <code>WebACL</code>.</p> </li> <li> <p>You tried to add a <code>Rule</code> to a <code>WebACL</code>, but the <code>Rule</code> already exists in the specified <code>WebACL</code>.</p> </li> <li> <p>You tried to add a <code>ByteMatchTuple</code> to a <code>ByteMatchSet</code>, but the <code>ByteMatchTuple</code> already exists in the specified <code>WebACL</code>.</p> </li> </ul>
   *   - {WAFInvalidParameterException} <p>The operation failed because AWS WAF didn't recognize a parameter in the request. For example:</p> <ul> <li> <p>You specified an invalid parameter name.</p> </li> <li> <p>You specified an invalid value.</p> </li> <li> <p>You tried to update an object (<code>ByteMatchSet</code>, <code>IPSet</code>, <code>Rule</code>, or <code>WebACL</code>) using an action other than <code>INSERT</code> or <code>DELETE</code>.</p> </li> <li> <p>You tried to create a <code>WebACL</code> with a <code>DefaultAction</code> <code>Type</code> other than <code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p> </li> <li> <p>You tried to create a <code>RateBasedRule</code> with a <code>RateKey</code> value other than <code>IP</code>.</p> </li> <li> <p>You tried to update a <code>WebACL</code> with a <code>WafAction</code> <code>Type</code> other than <code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p> </li> <li> <p>You tried to update a <code>ByteMatchSet</code> with a <code>FieldToMatch</code> <code>Type</code> other than HEADER, METHOD, QUERY_STRING, URI, or BODY.</p> </li> <li> <p>You tried to update a <code>ByteMatchSet</code> with a <code>Field</code> of <code>HEADER</code> but no value for <code>Data</code>.</p> </li> <li> <p>Your request references an ARN that is malformed, or corresponds to a resource with which a web ACL cannot be associated.</p> </li> </ul>
   *   - {WAFNonexistentContainerException} <p>The operation failed because you tried to add an object to or delete an object from another object that doesn't exist. For example:</p> <ul> <li> <p>You tried to add a <code>Rule</code> to or delete a <code>Rule</code> from a <code>WebACL</code> that doesn't exist.</p> </li> <li> <p>You tried to add a <code>ByteMatchSet</code> to or delete a <code>ByteMatchSet</code> from a <code>Rule</code> that doesn't exist.</p> </li> <li> <p>You tried to add an IP address to or delete an IP address from an <code>IPSet</code> that doesn't exist.</p> </li> <li> <p>You tried to add a <code>ByteMatchTuple</code> to or delete a <code>ByteMatchTuple</code> from a <code>ByteMatchSet</code> that doesn't exist.</p> </li> </ul>
   *   - {WAFNonexistentItemException} <p>The operation failed because the referenced object doesn't exist.</p>
   *   - {WAFStaleDataException} <p>The operation failed because you tried to create, update, or delete an object by using a change token that has already been used.</p>
   *   - {WAFLimitsExceededException} <p>The operation exceeds a resource limit, for example, the maximum number of <code>WebACL</code> objects that you can create for an AWS account. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">Limits</a> in the <i>AWS WAF Developer Guide</i>.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateSqlInjectionMatchSet(
    args: UpdateSqlInjectionMatchSetInput
  ): Promise<UpdateSqlInjectionMatchSetOutput>;
  public updateSqlInjectionMatchSet(
    args: UpdateSqlInjectionMatchSetInput,
    cb: (err: any, data?: UpdateSqlInjectionMatchSetOutput) => void
  ): void;
  public updateSqlInjectionMatchSet(
    args: UpdateSqlInjectionMatchSetInput,
    cb?: (err: any, data?: UpdateSqlInjectionMatchSetOutput) => void
  ): Promise<UpdateSqlInjectionMatchSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateSqlInjectionMatchSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Inserts or deletes <a>ActivatedRule</a> objects in a <code>WebACL</code>. Each <code>Rule</code> identifies web requests that you want to allow, block, or count. When you update a <code>WebACL</code>, you specify the following values:</p> <ul> <li> <p>A default action for the <code>WebACL</code>, either <code>ALLOW</code> or <code>BLOCK</code>. AWS WAF performs the default action if a request doesn't match the criteria in any of the <code>Rules</code> in a <code>WebACL</code>.</p> </li> <li> <p>The <code>Rules</code> that you want to add or delete. If you want to replace one <code>Rule</code> with another, you delete the existing <code>Rule</code> and add the new one.</p> </li> <li> <p>For each <code>Rule</code>, whether you want AWS WAF to allow requests, block requests, or count requests that match the conditions in the <code>Rule</code>.</p> </li> <li> <p>The order in which you want AWS WAF to evaluate the <code>Rules</code> in a <code>WebACL</code>. If you add more than one <code>Rule</code> to a <code>WebACL</code>, AWS WAF evaluates each request against the <code>Rules</code> in order based on the value of <code>Priority</code>. (The <code>Rule</code> that has the lowest value for <code>Priority</code> is evaluated first.) When a web request matches all the predicates (such as <code>ByteMatchSets</code> and <code>IPSets</code>) in a <code>Rule</code>, AWS WAF immediately takes the corresponding action, allow or block, and doesn't evaluate the request against the remaining <code>Rules</code> in the <code>WebACL</code>, if any. </p> </li> </ul> <p>To create and configure a <code>WebACL</code>, perform the following steps:</p> <ol> <li> <p>Create and update the predicates that you want to include in <code>Rules</code>. For more information, see <a>CreateByteMatchSet</a>, <a>UpdateByteMatchSet</a>, <a>CreateIPSet</a>, <a>UpdateIPSet</a>, <a>CreateSqlInjectionMatchSet</a>, and <a>UpdateSqlInjectionMatchSet</a>.</p> </li> <li> <p>Create and update the <code>Rules</code> that you want to include in the <code>WebACL</code>. For more information, see <a>CreateRule</a> and <a>UpdateRule</a>.</p> </li> <li> <p>Create a <code>WebACL</code>. See <a>CreateWebACL</a>.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateWebACL</a> request.</p> </li> <li> <p>Submit an <code>UpdateWebACL</code> request to specify the <code>Rules</code> that you want to include in the <code>WebACL</code>, to specify the default action, and to associate the <code>WebACL</code> with a CloudFront distribution. </p> <p>The <code>ActivatedRule</code> can be a rule group. If you specify a rule group as your <code>ActivatedRule</code>, you can exclude specific rules from that rule group.</p> <p>If you already have a rule group associated with a web ACL and want to submit an <code>UpdateWebACL</code> request to exclude certain rules from that rule group, you must first remove the rule group from the web ACL, the re-insert it again, specifying the excluded rules. For details, see <a>ActivatedRule$ExcludedRules</a>. </p> </li> </ol> <p>Be aware that if you try to add a RATE_BASED rule to a web ACL without setting the rule type when first creating the rule, the <a>UpdateWebACL</a> request will fail because the request tries to add a REGULAR rule (the default rule type) with the specified ID, which does not exist. </p> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFStaleDataException} <p>The operation failed because you tried to create, update, or delete an object by using a change token that has already been used.</p>
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFInvalidAccountException} <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
   *   - {WAFInvalidOperationException} <p>The operation failed because there was nothing to do. For example:</p> <ul> <li> <p>You tried to remove a <code>Rule</code> from a <code>WebACL</code>, but the <code>Rule</code> isn't in the specified <code>WebACL</code>.</p> </li> <li> <p>You tried to remove an IP address from an <code>IPSet</code>, but the IP address isn't in the specified <code>IPSet</code>.</p> </li> <li> <p>You tried to remove a <code>ByteMatchTuple</code> from a <code>ByteMatchSet</code>, but the <code>ByteMatchTuple</code> isn't in the specified <code>WebACL</code>.</p> </li> <li> <p>You tried to add a <code>Rule</code> to a <code>WebACL</code>, but the <code>Rule</code> already exists in the specified <code>WebACL</code>.</p> </li> <li> <p>You tried to add a <code>ByteMatchTuple</code> to a <code>ByteMatchSet</code>, but the <code>ByteMatchTuple</code> already exists in the specified <code>WebACL</code>.</p> </li> </ul>
   *   - {WAFInvalidParameterException} <p>The operation failed because AWS WAF didn't recognize a parameter in the request. For example:</p> <ul> <li> <p>You specified an invalid parameter name.</p> </li> <li> <p>You specified an invalid value.</p> </li> <li> <p>You tried to update an object (<code>ByteMatchSet</code>, <code>IPSet</code>, <code>Rule</code>, or <code>WebACL</code>) using an action other than <code>INSERT</code> or <code>DELETE</code>.</p> </li> <li> <p>You tried to create a <code>WebACL</code> with a <code>DefaultAction</code> <code>Type</code> other than <code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p> </li> <li> <p>You tried to create a <code>RateBasedRule</code> with a <code>RateKey</code> value other than <code>IP</code>.</p> </li> <li> <p>You tried to update a <code>WebACL</code> with a <code>WafAction</code> <code>Type</code> other than <code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p> </li> <li> <p>You tried to update a <code>ByteMatchSet</code> with a <code>FieldToMatch</code> <code>Type</code> other than HEADER, METHOD, QUERY_STRING, URI, or BODY.</p> </li> <li> <p>You tried to update a <code>ByteMatchSet</code> with a <code>Field</code> of <code>HEADER</code> but no value for <code>Data</code>.</p> </li> <li> <p>Your request references an ARN that is malformed, or corresponds to a resource with which a web ACL cannot be associated.</p> </li> </ul>
   *   - {WAFNonexistentContainerException} <p>The operation failed because you tried to add an object to or delete an object from another object that doesn't exist. For example:</p> <ul> <li> <p>You tried to add a <code>Rule</code> to or delete a <code>Rule</code> from a <code>WebACL</code> that doesn't exist.</p> </li> <li> <p>You tried to add a <code>ByteMatchSet</code> to or delete a <code>ByteMatchSet</code> from a <code>Rule</code> that doesn't exist.</p> </li> <li> <p>You tried to add an IP address to or delete an IP address from an <code>IPSet</code> that doesn't exist.</p> </li> <li> <p>You tried to add a <code>ByteMatchTuple</code> to or delete a <code>ByteMatchTuple</code> from a <code>ByteMatchSet</code> that doesn't exist.</p> </li> </ul>
   *   - {WAFNonexistentItemException} <p>The operation failed because the referenced object doesn't exist.</p>
   *   - {WAFReferencedItemException} <p>The operation failed because you tried to delete an object that is still in use. For example:</p> <ul> <li> <p>You tried to delete a <code>ByteMatchSet</code> that is still referenced by a <code>Rule</code>.</p> </li> <li> <p>You tried to delete a <code>Rule</code> that is still referenced by a <code>WebACL</code>.</p> </li> </ul>
   *   - {WAFLimitsExceededException} <p>The operation exceeds a resource limit, for example, the maximum number of <code>WebACL</code> objects that you can create for an AWS account. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">Limits</a> in the <i>AWS WAF Developer Guide</i>.</p>
   *   - {WAFSubscriptionNotFoundException} <p>The specified subscription does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateWebACL(args: UpdateWebACLInput): Promise<UpdateWebACLOutput>;
  public updateWebACL(
    args: UpdateWebACLInput,
    cb: (err: any, data?: UpdateWebACLOutput) => void
  ): void;
  public updateWebACL(
    args: UpdateWebACLInput,
    cb?: (err: any, data?: UpdateWebACLOutput) => void
  ): Promise<UpdateWebACLOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateWebACLCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Inserts or deletes <a>XssMatchTuple</a> objects (filters) in an <a>XssMatchSet</a>. For each <code>XssMatchTuple</code> object, you specify the following values:</p> <ul> <li> <p> <code>Action</code>: Whether to insert the object into or delete the object from the array. To change an <code>XssMatchTuple</code>, you delete the existing object and add a new one.</p> </li> <li> <p> <code>FieldToMatch</code>: The part of web requests that you want AWS WAF to inspect and, if you want AWS WAF to inspect a header or custom query parameter, the name of the header or parameter.</p> </li> <li> <p> <code>TextTransformation</code>: Which text transformation, if any, to perform on the web request before inspecting the request for cross-site scripting attacks.</p> <p>You can only specify a single type of TextTransformation.</p> </li> </ul> <p>You use <code>XssMatchSet</code> objects to specify which CloudFront requests that you want to allow, block, or count. For example, if you're receiving requests that contain cross-site scripting attacks in the request body and you want to block the requests, you can create an <code>XssMatchSet</code> with the applicable settings, and then configure AWS WAF to block the requests. </p> <p>To create and configure an <code>XssMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Submit a <a>CreateXssMatchSet</a> request.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateIPSet</a> request.</p> </li> <li> <p>Submit an <code>UpdateXssMatchSet</code> request to specify the parts of web requests that you want AWS WAF to inspect for cross-site scripting attacks.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {WAFInternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {WAFInvalidAccountException} <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
   *   - {WAFInvalidOperationException} <p>The operation failed because there was nothing to do. For example:</p> <ul> <li> <p>You tried to remove a <code>Rule</code> from a <code>WebACL</code>, but the <code>Rule</code> isn't in the specified <code>WebACL</code>.</p> </li> <li> <p>You tried to remove an IP address from an <code>IPSet</code>, but the IP address isn't in the specified <code>IPSet</code>.</p> </li> <li> <p>You tried to remove a <code>ByteMatchTuple</code> from a <code>ByteMatchSet</code>, but the <code>ByteMatchTuple</code> isn't in the specified <code>WebACL</code>.</p> </li> <li> <p>You tried to add a <code>Rule</code> to a <code>WebACL</code>, but the <code>Rule</code> already exists in the specified <code>WebACL</code>.</p> </li> <li> <p>You tried to add a <code>ByteMatchTuple</code> to a <code>ByteMatchSet</code>, but the <code>ByteMatchTuple</code> already exists in the specified <code>WebACL</code>.</p> </li> </ul>
   *   - {WAFInvalidParameterException} <p>The operation failed because AWS WAF didn't recognize a parameter in the request. For example:</p> <ul> <li> <p>You specified an invalid parameter name.</p> </li> <li> <p>You specified an invalid value.</p> </li> <li> <p>You tried to update an object (<code>ByteMatchSet</code>, <code>IPSet</code>, <code>Rule</code>, or <code>WebACL</code>) using an action other than <code>INSERT</code> or <code>DELETE</code>.</p> </li> <li> <p>You tried to create a <code>WebACL</code> with a <code>DefaultAction</code> <code>Type</code> other than <code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p> </li> <li> <p>You tried to create a <code>RateBasedRule</code> with a <code>RateKey</code> value other than <code>IP</code>.</p> </li> <li> <p>You tried to update a <code>WebACL</code> with a <code>WafAction</code> <code>Type</code> other than <code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p> </li> <li> <p>You tried to update a <code>ByteMatchSet</code> with a <code>FieldToMatch</code> <code>Type</code> other than HEADER, METHOD, QUERY_STRING, URI, or BODY.</p> </li> <li> <p>You tried to update a <code>ByteMatchSet</code> with a <code>Field</code> of <code>HEADER</code> but no value for <code>Data</code>.</p> </li> <li> <p>Your request references an ARN that is malformed, or corresponds to a resource with which a web ACL cannot be associated.</p> </li> </ul>
   *   - {WAFNonexistentContainerException} <p>The operation failed because you tried to add an object to or delete an object from another object that doesn't exist. For example:</p> <ul> <li> <p>You tried to add a <code>Rule</code> to or delete a <code>Rule</code> from a <code>WebACL</code> that doesn't exist.</p> </li> <li> <p>You tried to add a <code>ByteMatchSet</code> to or delete a <code>ByteMatchSet</code> from a <code>Rule</code> that doesn't exist.</p> </li> <li> <p>You tried to add an IP address to or delete an IP address from an <code>IPSet</code> that doesn't exist.</p> </li> <li> <p>You tried to add a <code>ByteMatchTuple</code> to or delete a <code>ByteMatchTuple</code> from a <code>ByteMatchSet</code> that doesn't exist.</p> </li> </ul>
   *   - {WAFNonexistentItemException} <p>The operation failed because the referenced object doesn't exist.</p>
   *   - {WAFStaleDataException} <p>The operation failed because you tried to create, update, or delete an object by using a change token that has already been used.</p>
   *   - {WAFLimitsExceededException} <p>The operation exceeds a resource limit, for example, the maximum number of <code>WebACL</code> objects that you can create for an AWS account. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">Limits</a> in the <i>AWS WAF Developer Guide</i>.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateXssMatchSet(
    args: UpdateXssMatchSetInput
  ): Promise<UpdateXssMatchSetOutput>;
  public updateXssMatchSet(
    args: UpdateXssMatchSetInput,
    cb: (err: any, data?: UpdateXssMatchSetOutput) => void
  ): void;
  public updateXssMatchSet(
    args: UpdateXssMatchSetInput,
    cb?: (err: any, data?: UpdateXssMatchSetOutput) => void
  ): Promise<UpdateXssMatchSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateXssMatchSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
